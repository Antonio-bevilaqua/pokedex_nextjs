class DataFetcherService {
    constructor(defaultUrl) {
        this.apiUrl = defaultUrl;
        this.params = [];
        this.cachedResults = {};
        this.queryString = null;
        this.payLoad = null;
        this.results = null;
        this.actualFetchUri = null;
        this.method = null;
        this.endpoint = null;
        this.fetchOptions = {};
        this.lastError = null;
    }

    async get(endpoint, params) {
        this._initializeOptions(endpoint, "GET");
        this._setParams(params);
        this._paramsToQueryString();
        return await this.fetchData();
    }

    async post(endpoint, params) {
        //Não utilizável na api do pokemon, mas talvez reutilizável no futuro.
        this._initializeOptions(endpoint, "POST");
        this._setParams(params);
        this._paramsToPayload();
        return await this.fetchData();
    }

    async put(endpoint, params) {
        //Não utilizável na api do pokemon, mas talvez reutilizável no futuro.
        this._initializeOptions(endpoint, "PUT");
        this._setParams(params);
        this._paramsToPayload();
        return await this.fetchData();
    }

    async delete(endpoint, params) {
        //Não utilizável na api do pokemon, mas talvez reutilizável no futuro.
        this._initializeOptions(endpoint, "DELETE");
        this._setParams(params);
        this._paramsToQueryString();
        return await this.fetchData();
    }

    _initializeOptions(endpoint, method) {
        this.queryString = null;
        this.payLoad = null;
        this.method = method;
        this.endpoint = this._formatEndpoint(endpoint);
        this.params = [];
    }

    _formatEndpoint(endpoint) {
        endpoint = endpoint.includes(this.apiUrl) ? endpoint.replace(this.apiUrl, "") : endpoint;
        return (endpoint[0] !== "/") ? "/" + endpoint : endpoint;
    }

    _setParams(params) {
        this.params = [];

        if (typeof params !== 'object' || Array.isArray(params)) {
            console.error("Params deve ser um object do tipo key: value(string)!");
        }

        if (params === null) {
            return;
        }

        for (let key in params) {
            if (typeof params[key] !== "string" && typeof params[key] !== "number") {
                continue;
            }

            this.params.push({
                key: key,
                value: params[key]
            });
        }
    }

    _paramsToQueryString() {
        if (this.params.length === 0) {
            return;
        }

        this.queryString = "?";
        this.params.forEach((param, index) => {
            if (index > 0) {
                this.queryString += "&";
            }
            this.queryString += `${encodeURIComponent(param.key)}=${encodeURIComponent(param.value)}`
        }, this);
    }

    _paramsToPayload() {
        //Não utilizável na api do pokemon, mas talvez reutilizável no futuro.
        if (this.params.length === 0) {
            return;
        }

        this.payLoad = {};
        this.params.forEach((param) => {
            this.payLoad[param.key] = param.value;
        }, this);
    }

    async fetchData() {
        this._mountFetchUri();

        const cachedData = this._getCachedData();
        if (this._getCachedData() !== null) {
            return cachedData;
        }

        this._mountFetchOptions();
        try {
            const response = await fetch(this.actualFetchUri, this.fetchOptions);

            const result = await response.json();

            if (result !== null) {
                this._cacheResultData(result);
            }

            return result;
        } catch (error) {
            this.lastError = error;
            return null;
        }
    }

    _mountFetchUri() {
        this.actualFetchUri = this.apiUrl + this.endpoint;
        if (typeof this.queryString === 'string') {
            this.actualFetchUri += this.queryString;
        }
    }

    _mountFetchOptions() {
        this.fetchOptions = {
            method: this.method,
        };

        if (this.payLoad !== null) {
            this.fetchOptions.body = JSON.stringify(this.payLoad);
        }
    }

    _getCachedData() {
        if (this.method !== "GET") return null;

        let dataKey = encodeURIComponent(this.actualFetchUri);
        const value = localStorage.getItem(dataKey);

        if (value === null) return value;

        return JSON.parse(value);
    }

    _cacheResultData(result) {
        //atualmente cacheando apenas requisições GET pois a api do pokemon recebe apenas este método
        if (this.method !== "GET") return;

        let dataKey = encodeURIComponent(this.actualFetchUri);
        try {
            localStorage.setItem(dataKey, JSON.stringify(result));
        } catch (error) {
            console.warn(error, "limpando local storage...");
            localStorage.clear();
            localStorage.setItem(dataKey, JSON.stringify(result));
        }
    }
}

export default DataFetcherService;