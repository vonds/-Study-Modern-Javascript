class UI {
    constructor() {
        this.profile = document.querySelector('#profile')
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <section class="card card-body mb-3">
            <section class="row">
                <section class="col-md-3">
                    <img src="${user.avatar_url}" alt="user avatar" class="img-fluid mb-3">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </section>
                <section class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </section>
            </section>
        </section>
        <h3 class="page-heading mb-3">Recent Repos</h3>
        <section id="repos"></section>
        `
    }

    showRepos(repos) {
        let output
        repos.forEach(repo => {
            output += `
            <section class="card card-body mb-2">
                <section class="row">
                    <section class="col-md-6">
                        <a href="${repo.html_url}">${repo.name}</a>
                    </section>
                    <section class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
                    </section>
                </section>
            </section>
            `
        })
        document.querySelector('#repos').innerHTML = output
    }

    showAlert(message, className) {
        this.clearAlert()
        const div = document.createElement('div')
        div.className = className
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.searchContainer')
        const search = document.querySelector('.search')
        container.insertBefore(div, search)
        setTimeout(this.clearAlert, 2000)
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert')
        if (currentAlert) {
            currentAlert.remove()
        }
    }

    clearProfile() {
        this.profile.innerHTML = ''
    }
}