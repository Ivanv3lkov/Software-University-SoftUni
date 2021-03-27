let reposEl = document.querySelector('#repos');
let usernameEl = document.querySelector('#username');

function loadRepos() {
	reposEl.innerHTML = `<h1 id="loading">Loading....</h1>`;
	const username = usernameEl.value;
	const url = `https://api.github.com/users/${username}/repos`;
	fetch(url)
		.then(res => res.json())
		.then(data => {
			document.getElementById('loading').remove();
			data.forEach(item => {
				const li = document.createElement('li');
				const a = document.createElement('a');
				a.href = item.html_url;
				a.innerHTML = item.full_name;
				li.appendChild(a);
				reposEl.appendChild(li);
			})
		})
}