import { router } from "./router.js";
import { domEL, fetchData, reqUrls, validateData } from "./helpers.js";
import { navigation } from "./navigation.js";
import { editMovie } from "../templates/movieEdit.js";

domEL['edit-movie'].querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    new FormData(e.target)
})

domEL['edit-movie'].querySelector('form').addEventListener('formdata', e => {
    onClickEdit([...e.formData.entries()]
        .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {}))
})

let id
let form = domEL['edit-movie'].querySelector('form')

async function onClickEdit(x) {

    const rowData = validateData(x)
    const data = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('token')
        },
        body: JSON.stringify({
            title: rowData.title,
            img: rowData.imageUrl,
            description : rowData.description,
        })
    }
    const r = await fetchData(reqUrls['movies'], `/${id}`, data)
    if(r){
        router(`/details?=${r._id}`)
    }
}

async function renderEditForm(x) {
    const fragment = document.createDocumentFragment()
    fragment.appendChild(navigation())
    const movie = await fetchData(reqUrls['movies'], `/${x[0]}?select=title,description,img`)
    id = x[0]
    const inputs = [...form.querySelectorAll('input,textarea')]
    Array.from([movie.title, movie.description, movie.img]).map((x, i) => inputs[i].value = x)
    
    fragment.append(form)
    return fragment
}

export async function edit(x) {

    domEL['main'].innerHTML = ''

    domEL['main'].appendChild(await renderEditForm(x))

}