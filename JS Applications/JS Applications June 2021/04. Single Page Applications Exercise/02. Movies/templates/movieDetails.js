export function movieDetails(x, l) {
    const e = document.createElement('div')
    e.className = 'container'
    
    const template = `
        <div class="row bg-light text-dark">
            <h1>Movie title: ${x.title}</h1>
            <div class="col-md-8">
                <img class="img-thumbnail"
                    src="${x.img}" alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>${x.description}</p>
                <a class="btn btn-danger" href="javascript:void(0)">Delete</a>
                <a class="btn btn-warning" href="/edit?=${x._id}">Edit</a>
                <a class="btn btn-primary" href="javascript:void(0)">Like</a>
                <span id="likesSection"class="enrolled-span">${l + ' like' + (l == 1 ? '' : 's')}</span>
            </div>
        </div>
    `
    e.innerHTML = template
    return e
}