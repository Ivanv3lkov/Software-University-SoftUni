import { clickHandler, router, createPath } from './router.js'
import { validateData, fetchData, reqUrls, clearData } from './helpers.js'
import topicTemplateHome from '../templates/topicTemplateHome.js'
import topicTitleTemplate from '../templates/topicWithAuthorTemplate.js'
import newUserComment from '../templates/newUserComment.js'
import comments from '../templates/comments.js'
import newTopic from '../templates/newTopic.js'

window.addEventListener('popstate', function (e) {
    router(location.pathname, true)
})

window.addEventListener('load', function (e) {
    router(location.pathname, true)
    document.addEventListener('click', clickHandler)
})

createPath('/', home)
createPath('/home', home)
createPath('/topic', topic)

const domEl = {
    createForm: () => document.getElementById('createForm'),
    main: () => document.getElementById('main'),
    'topic-title': () => document.querySelector('.topic-title'),
    topic: () => document.getElementById('topic')
}


async function home() {
    domEl['main']().style.display = 'block'
    domEl['topic']().style.display = 'none'

    domEl['main']().innerHTML = newTopic()
    const getTopics = Object.values(await fetchData(reqUrls['post'], ''))
    domEl['main']().innerHTML += getTopics.map(x => topicTemplateHome(x)).join('')

    domEl['createForm']().addEventListener('click', ctaPostTopic)
}

async function topic(id ) {
    domEl['topic']().innerHTML = ''
    domEl['main']().style.display = 'none'
    domEl['topic']().style.display = 'block'

    sessionStorage.setItem('id', id[0])

    const topicData = await fetchData(reqUrls['post'], `/${sessionStorage.getItem('id')}`)
    

    domEl['topic']().innerHTML = topicTitleTemplate(topicData)

    const commentsData = Object.values(await fetchData(reqUrls['comments'], '')).filter(x => x.titleId === sessionStorage.getItem('id'))

    domEl['topic']().innerHTML += commentsData.map(comments).join('')

    domEl['topic']().innerHTML += newUserComment()
    domEl['topic']().addEventListener('click', ctaPostComment)
    
}

async function ctaPostComment(e) {
    if (e.target.tagName !== 'BUTTON') {
        return
    }
    e.preventDefault()
    const rowData = [domEl['topic']().querySelector('#createComment > textarea'),
    domEl['topic']().querySelector('#createComment > div > input')]

    const body = validateData([...rowData])
        .reduce((a, b) => Object.assign(a, { [b.name]: b.value }), {})
    body.titleId = sessionStorage.getItem('id')
    body.date = new Date().toISOString()
    body.likes = Math.floor(Math.random() * 100) + 1
    const data = {
        method: 'post',
        body: JSON.stringify(body)
    }

    await fetchData(reqUrls['comments'], '', data)
        .then(router(location.href))
    .then(clearData([...rowData]))
}

async function ctaPostTopic(e) {

    e.preventDefault()
    if (e.target.tagName !== 'BUTTON') {
        return
    }
    const rowData = domEl['createForm']().querySelectorAll('input,textarea')

    if (e.target.className === 'cancel') {
        clearData([...rowData])
        return
    }

    const body = validateData([...rowData])
        .reduce((a, b) => Object.assign(a, { [b.name]: b.value }), {})
    body.date = new Date().toISOString()
    body.subscribers = Math.floor(Math.random() * 100) + 1
    const data = {
        method: 'post',
        body: JSON.stringify(body)
    }
    await fetchData(reqUrls['post'], '', data)
        .then(clearData([...rowData]))
        .then(router(location.href))
}


