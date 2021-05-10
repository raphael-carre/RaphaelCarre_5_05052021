import Request from './Request'
import HtmlFactory from './HtmlFactory'

/**
 * Routes de l'application.
 */
export default class Routes {
    /**
     * Route pour la page index.html.
     * @param {String} apiUrl endpoint
     */
    static async index(apiUrl) {
        await Request.getDatas(apiUrl)
            .then(values => values.map(item => { HtmlFactory.showProductFromList(item) }))
            .catch(error => { HtmlFactory.showModal('Il y a eu une erreur !', 'error', error) })
    }

    /**
     * Route pour la page article.html.
     * @param {String} apiUrl endpoint
     */
    static async article(apiUrl) {
        await Request.getDatas(apiUrl)
            .then(values => { HtmlFactory.showOneProduct(values) })
            .catch(error => { HtmlFactory.showModal('Il y a eu une erreur !', 'error', error) })
    }

    /**
     * Route pour la page panier.html.
     * @param {String} apiUrl endpoint
     * @returns 
     */
    static panier(apiUrl) {
        HtmlFactory.showCart(apiUrl)
    }
}