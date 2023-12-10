class CacheStoringService {
    cacheKey: string;

    constructor() {
        this.cacheKey = "cch";
    }

    store(key: string, value: any) {
        let toInsertValue = JSON.stringify(value);
        if (this.exists(value)) return true;

        try {
            localStorage.setItem(this.cacheKey + "-" + key, toInsertValue);
            return true;

        } catch (error) {
            return false;
        }
    }

    get(key: string) {
        try {
            let cache = localStorage.getItem(this.cacheKey + "-" + key);

            if (cache === null) return null;

            return JSON.parse(cache);
        } catch (error) {
            this.clear();
            return null;
        }
    }

    clear() {
        const items = { ...localStorage };

        for (let key in items) {
            if (key.includes(this.cacheKey)) {
                localStorage.removeItem(key);
            }
        }
    }

    exists(value: string) {
        const items = { ...localStorage };

        for (let key in items) {
            if (localStorage.getItem(key) == value) {
                return true;
            }
        }

        return false;
    }
}

export default CacheStoringService;