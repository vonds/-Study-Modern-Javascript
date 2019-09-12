class Github {
    constructor() {
        // NOTE: if this was a real production app these would not be available to user
        this.client_id = '8c36d3df34f412e4c0e7'
        this.client_secret = '5182a29889f41bc696f3b65411ff35e4430af065'
        this.repo_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const [profile, repos] = await Promise.all([
            fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`).then(response => response.json()),
            fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`).then(response => response.json())
        ])
        return {
            profile,
            repos
        }
    }
}