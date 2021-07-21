export function homePageMovies (x) {
    return `
    <div class="card mb-4">
            <img class="card-img-top" src="${x.img}"
                alt="Card image cap" width="400">
            <div class="card-body">
                <h4 class="card-title">${x.title}</h4>
            </div>
            <div class="card-footer">
                <a href="/details?=${x._id}">
                <button type="button" class="btn btn-info" id="/details?=${x._id}">Details</button>
                </a>
        </div>
    </div>
    `
}