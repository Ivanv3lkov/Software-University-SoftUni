
export default function (data) {
    return `
    <div class="topic-title">
    <div class="topic-container" id ="${data._id}">
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="/topic?${data._id}" class="normal">
                <h2 class="topic">${data.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${data.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${data.username}</span></p>
                    </div>
                </div>
                <div class="subscribers">
                    <button class="subscribe" style="display:none">Subscribe</button>
                    <p>Subscribers: <span>${data.subscribers}</span></p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`
}

