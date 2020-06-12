function createArticle() {
	let h3 = document.createElement('h3');
	let p = document.createElement('p');
	let article = document.createElement('article');

	let title = document.getElementById('createTitle');
	let textArea = document.getElementById('createContent');
	let articles = document.getElementById('articles');

	if (title.value !== "" && textArea.value !== "") {
		h3.innerHTML = title.value;
		p.innerHTML = textArea.value;

		article.appendChild(h3);
		article.appendChild(p);

		articles.appendChild(article);
	}
	title.value = "";
	textArea.value = "";
}