function EasyHttp() {
    this.http = new XMLHttpRequest()
}

EasyHttp.prototype.get = (url, callback) => {
    const http = this.http
    http.open('GET', url, true)
    http.onload = () => {
        if (http.status === 200) {
            callback(null, http.responseText)
        } else {
            callback(`Error ${http.status}`)
        }
    }
    http.send()
}