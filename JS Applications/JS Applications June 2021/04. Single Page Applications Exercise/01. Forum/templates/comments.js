export default function (data) {
    return `
    <div class="comment">
            <header class="header">
                <p><span>${data.username}</span> posted on <time>${data.date}</time></p>
            </header>
            <div class="comment-main">
                <div class="userdetails">
                    <img src="./static/profile.png" alt="avatar">
                </div>
                <div class="post-content">
                    <p>${data.postText}</p>
                </div>
            </div>
            <div class="footer">
                <p><span>${data.likes}</span> likes</p>
            </div>
    </div>
    `
}