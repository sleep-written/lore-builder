import type { EntityManager, ObjectLiteral } from 'typeorm';

export class EntityUpdater<T extends ObjectLiteral, PK extends keyof T> {
    #buffer?: {
        memory: Map<T[PK], T>;
        update: T[];
    };

    #manager: EntityManager;
    #entity: { new(): T; };
    #pk: PK;

    constructor(
        manager: EntityManager,
        entity: { new(): T; },
        pk: PK
    ) {
        this.#manager = manager;
        this.#entity = entity;
        this.#pk = pk;
    }

    async initialize(): Promise<void> {
        if (this.#buffer) {
            throw new Error(`Entity "${this.#entity.name}" has been initialized.`);
        }

        const meta = this.#manager
            .connection
            .getMetadata(this.#entity);

        if (!meta) {
            throw new Error(`Entity "${this.#entity.name}" metadata not found.`);
        }

        const select: any = Object.fromEntries(
            meta
                .primaryColumns
                .map(x => [
                    x.propertyName,
                    true
                ])
        );

        const items = await this.#manager.find(this.#entity, {
            select: {
                ...select,
                [this.#pk]: true
            } as any
        });

        this.#buffer = {
            memory: new Map(),
            update: []
        };

        for (const item of items) {
            const key = item[this.#pk];
            this.#buffer.memory.set(key, item);
        }
    }

    set(data: Partial<T>): T {
        if (!this.#buffer) {
            throw new Error(`Entity "${this.#entity.name}" has not been initialized.`);
        }

        const key = data[this.#pk];
        if (key == null) {
            throw new Error(`The key "${this.#pk.toString()}" must be setled in entity`);
        }

        const item: any = this.#buffer.memory.get(key) ?? new this.#entity();
        this.#buffer.memory.delete(key);
        for (const [ key, value ] of Object.entries(data)) {
            // item[key] = value instanceof this.#entity
            //     ?   this.set(value)
            //     :   value;

            item[key] = value;
        }

        this.#buffer.update.push(item);
        return item;
    }

    async updateDB(): Promise<void> {
        if (!this.#buffer) {
            throw new Error(`Entity "${this.#entity.name}" has not been initialized.`);
        }

        const { memory, update } = this.#buffer;
        for (const item of update) {
            await this.#manager.save(item);
        }

        for (const item of memory.values()) {
            await this.#manager.remove(item);
        }

        this.#buffer = undefined;
    }
}