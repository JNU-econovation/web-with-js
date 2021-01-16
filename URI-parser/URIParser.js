// "https://localhost:3000/my/info/main?id=HTML&page=12"

class URIParser {
    #full_uri;
    #splited_uri;
    #path_array;
    #lastPath;

    constructor(uri) {
        this.#full_uri = uri;
        this.#splited_uri = uri.split("://")[1].split("/");
        let path_array = this.#splited_uri.slice(1);
        path_array[path_array.length - 1] = path_array[path_array.length - 1].split("?")[0];
        this.#path_array = path_array;

        this.#lastPath = this.#path_array[this.#path_array.length - 1];
    }

    getURI() {
        return this.#full_uri;
    }

    getProtocol() {
        return this.#full_uri.split(':')[0];
    }

    getHost() {
        let host_port_str = this.#splited_uri[0];
        if (!host_port_str.includes(":"))
            return host_port_str;
        return host_port_str.split(":")[0];
    }

    getPort() {
        let host_port_str = this.#splited_uri[0];
        if (!host_port_str.includes(":"))
            return null;
        return host_port_str.split(":")[1];
    }

    appendPath(newpath) {
        this.#path_array.push(newpath);
    }

    removeLastPaht() {
        return this.#path_array.pop();
    }

    getPath() {
        return this.#path_array;
    }

    getLastPath() {
        return this.#lastPath;
    }

    getFullPath() {
        const path_reducer = (acc, cur) => acc + cur + "/";
        return this.#path_array.reduce(path_reducer, "/");
    }

    getQueryString() {
        let queryString = this.#splited_uri[this.#splited_uri.length - 1];
        let index = queryString.indexOf("?");
        if (index > 0)
            return queryString.substring(index);
        return null;
    }

    getQueryStrigValueOf(key) {
        const queryString = this.getQueryString().substring(1);
        if (!queryString)
            return null;
        const querys = queryString.split("&");
        const query_reducer = (acc, cur) => {
            const kv = cur.split("=");
            acc[kv[0]] = kv[1];
            return acc;
        }
        const query_kv = querys.reduce(query_reducer, {});
        return query_kv[key];
    }
    
    
}

module.exports = URIParser;