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
            .then(values => {
                setTimeout(() => {
                    document.getElementById('main').removeChild(document.querySelector('.loader'))
                    values.map(item => { HtmlFactory.showProductFromList(item) })
                }, 500)
            })
            .catch(error => { HtmlFactory.showModal('Il y a eu une erreur !', 'error', error) })
    }

    /**
     * Route pour la page produit.html.
     * @param {String} apiUrl endpoint
     */
    static async produit(apiUrl) {
        await Request.getDatas(apiUrl)
            .then(values => {
                setTimeout(() => {
                    document.getElementById('main').removeChild(document.querySelector('.loader'))
                    HtmlFactory.showOneProduct(values) 
                }, 500)
            })
            .catch(error => { HtmlFactory.showModal('Il y a eu une erreur !', 'error', error) })
    }

    /**
     * Route pour la page panier.html.
     * @param {String} apiUrl endpoint
     */
    static panier(apiUrl) {
        setTimeout(() => {
            document.getElementById('main').removeChild(document.querySelector('.loader'))
            HtmlFactory.showCart(apiUrl)
        }, 100)
    }

    /**
     * Route pour la page confirmation.html.
     */
    static confirmation() {
        document.getElementById('main').removeChild(document.querySelector('.loader'))
        !localStorage.getItem('order') && (window.location = 'index.html')
        HtmlFactory.showOrderConfirmation()
        localStorage.clear()
    }
}