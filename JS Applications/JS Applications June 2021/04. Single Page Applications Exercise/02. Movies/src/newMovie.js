import { router } from "./router.js";
import { domEL, fetchData, reqUrls, validateData} from "./helpers.js";
import { navigation } from "./navigation.js";

const form = domEL['add-movie'].querySelector('form')

form.addEventListener('submit', (e => {
    e.preventDefault();
    new FormData(e.target);
}));

form.addEventListener('formdata', (e => {
    onClickAddMovie([...e.formData.entries()]
        .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {}));
}));

function addMovieView() {
    const fragment = document.createDocumentFragment()
    fragment.appendChild(navigation())
    fragment.appendChild(domEL['add-movie'])

    return fragment
}

export async function newMovie() {
    domEL['main'].innerHTML = ''
    domEL['main'].appendChild(addMovieView())
}

async function onClickAddMovie(x) {
    const rowData = validateData(x)
    const data = {
        method: 'post',
        headers: { 
            'Content-Type': 'application/json', 
            'X-Authorization': sessionStorage.getItem('token')
        },
        body : JSON.stringify({
            title: rowData.title,
            img: rowData.imageUrl,
            description : rowData.description,
        })
    }
    try{
        const x = await fetchData(reqUrls['movies'], '', data)
        if(x){
            router(`/details?=${x._id}`)
        }
    } catch (e){
        errorHandler()
    }
}
