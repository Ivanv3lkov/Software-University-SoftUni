export default function (data) {
    return `
    <div class="topic-title">
                <div class="topic-name-wrapper">
                    <div class="topic-name">
                        <h2>${data.topicName}</h2>
                        <p>Date: <time>${data.date}</time></p>
                    </div>
                    <div class="subscribers">
                        <p>Subscribers: <span>${data.subscribers}</span></p>
                        <button style="display: none;"class="subscribe">Subscribe</button>
                        <button style="display: none;"class="unsubscribe">Unsubscribe</button>
                    </div>
                </div>
            </div>
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
                <p><span>${Math.floor(Math.random() * 100) + 1}</span> likes</p>
            </div>
        </div>
    `
}

