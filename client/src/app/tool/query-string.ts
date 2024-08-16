export class QueryString<T extends Record<string, any> | any[]> {
    #data: T;

    constructor(data: T) {
        this.#data = data;
    }

    toString(appendPrefix?: boolean) {
        const qs = Object
          .entries(this.#data)
          .filter(([ _, v ]) => v != null)
          .map(([ k, v ]) => [ k, JSON.stringify(v) ])
          .map(([ k, v ]) => `${k}=${encodeURIComponent(v)}`)
          .join('&');

        if (qs.length > 0 && appendPrefix) {
            return `?${qs}`;
        } else {
            return qs;
        }
    }
}