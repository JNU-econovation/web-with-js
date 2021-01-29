class urlParser {
    #url
    #full_path
    #before_query
    #query_string

    constructor(url) {
        this.#url = url;
        this.#full_path = url.split('://')[1].split(':')[1].split('/');
        this.#before_query = url.split('://')[1].split(':')[1].split('/').slice(1, -1).concat(url.split('://')[1].split(':')[1].split('/').reverse()[0].split('?')[0]);
        this.#query_string = url.split('://')[1].split(':')[1].split('/').reverse()[0].split('?')[1];
    }
    show() {
        return `#url: ${this.#url} || #full_path: ${this.#full_path} || #before_query: ${this.#before_query} || #query_string: ${this.#query_string}`
    }

    getURI() {
        return this.#url;
    }

    getProtocol() {
        let protocol = this.#url.split('://')[0]
        return protocol;
    }
    getHost() {
        let host = this.#url.split('://')[1].split(':')[0];
        return host;
    }
    getPort() {
        let port = this.#url.split('://')[1].split(':')[1].split('/')[0]
        return port;
    }
    appendPath(path) {
        this.#before_query.concat('/', path)
        // .concat('?', this.#query_string);
    }
    //마지막 Path를 삭제하고 그 값을 반환한다.
    removeLastPath() {
        let lastPath = this.#before_query
        return this.#before_query.reverse()[0] ;
    }
    getPath() {
        return this.#before_query;
    }
    getFullPath() {
        let fullPath = '';
        for(let i of this.#full_path) {
            fullPath += ('/'+i);
        }
        return fullPath;
    }
    getQueryString() {
        return `?${this.#query_string}`;
    }
    getQueryStringValueOf(key) {
        let value = this.#query_string.split('&');
        for(let i of value) {
            if(i.includes(key)) return i.split('=')[1];
        }
    }
}

module.exports = urlParser;