function easyHttp() {
    this.http = new XMLHttpRequest()
}

easyHttp.prototype.get = (url, callback) => {
    const http = this.http
    http.open('GET', url, true)
    http.onload = () => {
        if (http.status === 200) {
            callback(null, http.responseText)
        } else {
            callback(`Error ${http.responseText}`)
        }
    }
    http.send()
}