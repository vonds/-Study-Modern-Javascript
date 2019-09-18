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

easyHttp.prototype.post = (url, data, callback) => {
    const http = this.http
    http.open('POST', url, true)
    http.setRequestHeader('Content-type', 'application/json')
    http.onload = () => {
        callback(null, http.responseText)
    }
    http.send(JSON.stringify(data))
}

easyHttp.prototype.put = (url, data, callback) => {
    const http = this.http
    http.open('PUT', url, true)
    http.setRequestHeader('Content-type', 'application/json')
    http.onload = () => {
        callback(null, http.responseText)
    }
    http.send(JSON.stringify(data))
}

easyHttp.prototype.delet = (url, callback) => {
    const http = this.http
    http.open('DELETE', url, true)
    http.setResquestHeader('Content-type', 'application/json')
    http.onload = () => {
        if (http.status === 200) {
            callback(null, 'Post deleted')
        } else {
            callback(`Error ${http.responseText}`)
        }

    }
    http.send()
}


















// easyHttp.prototype.post = (url, data, callback) => {
//     const http = this.http
//     http.open('POST', url, true)
//     http.setRequestHeader('Content-type', 'application/json')
//     http.onload = () => {
//         callback(null, http.responseText)
//     }
//     http.send(JSON.stringify(data))
// }

