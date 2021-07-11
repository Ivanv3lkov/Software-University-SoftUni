function attachEvents() {
    let baseURL = 'http://localhost:3030/jsonstore/blog';
    let buttonLoadPosts = document.getElementById('btnLoadPosts');
    let buttonViewPosts = document.getElementById('btnViewPost');
    let select = document.getElementById('posts');
    let postTitleEl = document.getElementById('post-title');
    let postCommentsEl = document.getElementById('post-comments');
    let postId;

    buttonLoadPosts.addEventListener('click', () => {
        //select.innerHTML = '';
        Array.from(select.children).forEach(el => el.remove());
        fetch(`${baseURL}/posts`)
            .then(res => res.json())
            .then(data => {
                Object.entries(data)
                    .forEach(([key, valueObj]) => {
                        let option = document.createElement('option');
                        postId = valueObj.id;
                        option.value = key;
                        option.textContent = valueObj.title.toUpperCase();
                        select.appendChild(option);
                    })
            })
    })

    buttonViewPosts.addEventListener('click', () => {
        fetch(`${baseURL}/posts/${select.value}`)
            .then(res => res.json())
            .then(({ body, id, title }) => {
                let postBody = document.getElementsByTagName('body')[0].children[5];
                postTitleEl.textContent = title;
                let p = document.createElement('p');
                p.setAttribute('id', 'post-body');
                p.textContent = body;
                postBody.replaceWith(p);

                fetch(`${baseURL}/comments`)
                    .then(res => res.json())
                    .then((data) => {
                        //postCommentsEl.innerHTML = '';
                        Array.from(postCommentsEl.children).forEach(el => el.remove());
                        Object.entries(data)
                            .forEach(([commentId, value]) => {
                                if (value.postId == id) {
                                    let li = document.createElement('li');
                                    li.textContent = value.text;
                                    postCommentsEl.appendChild(li);
                                }
                            })
                    })
            })
    })
}

attachEvents();