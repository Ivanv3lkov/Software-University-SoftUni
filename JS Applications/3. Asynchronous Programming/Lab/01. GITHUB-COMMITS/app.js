function loadCommits() {
    let usernameInput = document.getElementById('username');
    let repositoryInput = document.getElementById('repo');
    let commitsUl = document.getElementById('commits');

    let username = usernameInput.value;
    let repo = repositoryInput.value;
    let baseURL = `https://api.github.com/repos/${username}/${repo}/commits`;
    commitsUl.innerHTML = '';
    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                let li = document.createElement('li');
                li.textContent = `${item.commit.author.name}: ${item.commit.message}`;
                commitsUl.appendChild(li);
            })
        })
        .catch(error => {
            let li = document.createElement('li');
            li.textContent = `Error: 404 (Not Found)`
            commitsUl.appendChild(li)
        })
}