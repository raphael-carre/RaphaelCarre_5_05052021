import Request from './classes/Request.class'
import HtmlFactory from './classes/HtmlFactory.class'

const BASE_API_URL = 'http://macbook.local:3000/api/teddies'

;(async function () {
    const request = new Request()
    await request.getDatas(apiRequestUrl(BASE_API_URL))
        .then(values => {
            route(values)
        })
        .catch(error => {
            alert(`Il y a eu une erreur !\n${error}`)
        })
})()

/**
 * Complète l'url de l'api en fonction de la page en cours.
 * @param {String} url 
 * @returns {String} Renvoie l'url de l'api ou fait une redirection vers index.html.
 */
function apiRequestUrl(url) {
    if (browserUrlCheck() === 'article.html') {
        const params = new URLSearchParams(window.location.search)

        if (params.has('id') && params.get('id') !== '') return `${url}/${params.get('id')}`
        
        window.location = '/public/index.html'
    }
    
    return url
}

/**
 * Permet de sélectionner le type d'action à effectuer en fonction de la page en cours,
 * et affiche les données passées en parametre.
 * @param {*} datas 
 */
function route(datas) {
    console.log(browserUrlCheck())
    switch (browserUrlCheck()) {
        case 'article.html':
            const factory = new HtmlFactory()
            const card = factory.displayOneProduct(datas)
            document.getElementById("product-section").appendChild(card)
            break
        default:
            datas.map(item => {
                const factory = new HtmlFactory()
                const card = factory.displayProductFromList(item)
                document.getElementById("product-list").appendChild(card)
            })
    }
}

/**
 * @returns {String} Renvoie le nom de la page en cours ou une chaîne vide.
 */
function browserUrlCheck() {
    return window.location.pathname.split('/').pop()
}