export function editMovie(x) {
    const e = document.createElement('form')
    e.className = 'text-center border border-light p-5'
    e.action = '#'
    e.method = ''
    const t = `<h1>Edit Movie</h1>
                    <div class="form-group">
                        <label for="title">Movie Title</label>
                        <input type="text" class="form-control" placeholder="Movie Title" value="${x.title}" name="title">
                    </div>
                    <div class="form-group">
                        <label for="description">Movie Description</label>
                        <textarea class="form-control" placeholder="Movie Description..." name="description">${x.description}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="imageUrl">Image url</label>
                        <input type="text" class="form-control" placeholder="Image Url" value="${x.img}" name="imageUrl">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
    `
    e.innerHTML = t
    return e
}