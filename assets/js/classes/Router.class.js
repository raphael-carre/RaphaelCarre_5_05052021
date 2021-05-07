import Routes from './Routes.class'

/**
 * Routeur de l'application.
 */
export default class Router {
    constructor(url) {
        this.baseApiUrl = url
    }

    /**
     * Sélectionne la route à utiliser en fonction de la page en cours.
     */
    route() {
        const page = this.#pageNameParser()
        Routes[page !== '' ? page : 'index'](this.#apiRequestUrl(this.baseApiUrl))
    }

    /**
     * Complète l'url de l'api en fonction de la page en cours.
     * @param {String} url 
     * @returns {String} Renvoie l'url de l'API ou fait une redirection vers index.html.
     */
    #apiRequestUrl(url) {
        if (this.#pageNameParser() === 'article') {
            const params = new URLSearchParams(window.location.search)

            if (params.has('id') && params.get('id') !== '') return `${url}/${params.get('id')}`

            window.location = '/public/'
        }

        return url
    }

    /**
     * @returns {String} Renvoie le nom de la page en cours ou une chaîne vide.
     */
    #pageNameParser() {
        return window.location.pathname.split('/').pop().split('.').shift()
    }
}