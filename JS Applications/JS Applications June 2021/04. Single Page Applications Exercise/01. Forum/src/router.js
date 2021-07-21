const routes = {}
const routesParams = {}

function clickHandler(e) {
    if(e.target.tagName === 'A' ){
        e.preventDefault()
        router(e.target.href)
    } else if(e.target.className === 'topic') {
        e.preventDefault()
        router(e.target.parentElement.href)
    }
    
}

function router(href, isBack) {
    if(!isBack){
        history.pushState({}, '', href)
    }
    const q = [...new URLSearchParams(location.search).entries() ]
    .map(x => x.filter(x =>x))
    // .filter(x => routesParams[location.pathname].indexOf(x[0]) > -1)
    // .map(x => x[1])

    if(typeof routes[location.pathname] === 'function'){
        routes[location.pathname](...q)
    }
}

function createPath(path, callback) {
    const processedPath = path.split('=').filter(x => x)
    const realPath = processedPath.splice(0,1)

    routes[realPath] = callback
    routesParams[processedPath] = processedPath
}

export {
    clickHandler,
    router,
    createPath,
}