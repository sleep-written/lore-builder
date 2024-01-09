import type { BaseEntity, EntityManager, ObjectLiteral } from 'typeorm';

export class BulkInsert<T extends ObjectLiteral, PK extends keyof Omit<T, keyof BaseEntity>> {
    #entity: { new(): T; };
    #pk: PK;
    #manager: EntityManager;

    #pks: any[] = [];

    constructor(
        manager: EntityManager,
        entity: { new(): T; },
        pk: PK,
    ) {
        this.#manager = manager;
        this.#entity = entity;
        this.#pk = pk;
    }

    async initialize(): Promise<void> {
        const data = await this.#manager.find(this.#entity, {
            select: {
                [this.#pk]: true
            } as any
        });

        this.#pks = data.map(x => x[this.#pk]);
    }

    async save(data: Omit<T, keyof BaseEntity | PK>): Promise<T> {
        const target = new this.#entity();
        Object
            .entries(data)
            .forEach(([key, value]) => {
                (target as any)[key] = value;
            });

        const pk = this.#pks.shift();
        if (pk != null) {
            target[this.#pk] = pk;
        }

        return this.#manager.save(target);
    }

    async clean(): Promise<void> {
        for (const value of this.#pks) {
            await this.#manager.delete(
                this.#entity,
                { [this.#pk]: value }
            );
        }

        this.#pks = [];
    }
}