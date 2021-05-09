import HtmlFactory from './HtmlFactory'
import Request from './Request'

/**
 * Gestion du panier client.
 */
export default class Cart {
    /**
     * Insère les données (première insertion ou mise à jour) dans le panier (LocalStorage),
     * et met à jour le compteur dans le header.
     * @param {Event} e
     */
    static addToCart(e) {
        e.preventDefault()
        
        const datas = this._setNewCartItem(e)

        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([datas]))
        } else {
            localStorage.setItem('cart', JSON.stringify(this._updateCartContent(datas)))
        }

        this.headerNotification()
        HtmlFactory.showModal('L\'article a bien été ajouté à votre panier')
    }

    /**
     * Supprime un élément du panier (LocalStorage et tableau HTML) et met à jour l'info bulle du header
     * @param {Event} e 
     * @param {String} apiUrl endpoint
     */
    static deleteItemFromCart(e, apiUrl) {
            const lineToDelete = e.target.parentNode.parentNode.parentNode
            const lineParent = lineToDelete.parentNode
            const indexToDelete = parseInt(e.target.parentNode.getAttribute('data-index'))
            const totalElement = document.querySelector('.cart__total')
            const currentCart = JSON.parse(localStorage.getItem('cart'))

            // Création d'un nouveau panier sans le produit à supprimer
            let newCart = []
            currentCart.map((item, index) => { index !== indexToDelete && newCart.push(item) })

            if (newCart.length === 0) {
                // Vide le LocalStorage et affiche le panier vide
                localStorage.clear()

                const buyForm = document.getElementById('buyForm')
                document.getElementById('main').removeChild(buyForm)
                HtmlFactory.displayEmptyCart()
            } else {
                // Mise à jour du LocalStorage
                localStorage.setItem('cart', JSON.stringify(newCart))

                // Actualise les index des éléments suivant celui à supprimer
                let nextSibling = lineToDelete.nextElementSibling
                while (nextSibling) {
                    const indexElement = nextSibling.querySelector('[data-index]')
                    const index = parseInt(indexElement.getAttribute('data-index'))
                    indexElement.setAttribute('data-index', index - 1)
                    nextSibling = nextSibling.nextElementSibling
                }
                lineParent.removeChild(lineToDelete)
                
                // Recalcul du prix total
                this.totalPrice(newCart, apiUrl)
                    .then(value => totalElement.textContent = `Total : ${value / 100} €`)
                    .catch(error => { HtmlFactory.showModal('Il y a eu une erreur !', 'error', error) })
            }

            this.headerNotification()
    }

    /**
     * Dénombre la quantité d'articles dans le panier et affiche une info-bulle dans le header.
     * Supprime l'infobulle si le panier est vide.
     */
    static headerNotification() {
        const counter = document.getElementById('product-counter')

        if (localStorage.getItem('cart')) {
            const cartContent = JSON.parse(localStorage.getItem('cart'))
            const totalProducts = cartContent.reduce((acc, item) => acc + item.quantity, 0)

            if (totalProducts > 0) {
                counter.classList.contains('hidden') && counter.classList.remove('hidden')
                counter.textContent = totalProducts
            }
            return
        }

        counter.classList.add('hidden')
        counter.textContent = ''
    }

    /**
     * Réinitialise le panier, supprime le tableau d'articles et rafraichi l'info-bulle du header
     * après confirmation.
     * @param {Event} e 
     */
    static resetCart() {
        const main = document.getElementById('main')
        const buyForm = document.getElementById('buyForm')
        main.removeChild(buyForm)
        HtmlFactory.displayEmptyCart()
        localStorage.clear()
        this.headerNotification()
    }

    static buyCartContent(e) {
        e.preventDefault()

        let contact = {}

        for (let index of e.target) {
            if (index.getAttribute('type') !== 'reset' && index.getAttribute('type') !== 'submit') {
                contact[index.getAttribute('name')] = index.value
            }
        }

        const payload = {
            contact,
            products: localStorage.getItem('cart')
        }

        console.log(payload)
    }

    /**
     * Calcule le montant total du panier.
     * @param {Array} cart Contenu du panier sous forme de tableau
     * @param {String} apiUrl endpoint
     * @returns {Response} Retourne une réponse contenant le prix total
     */
    static async totalPrice(cart, apiUrl) {
        let totalPrice = 0
        for (let item of cart) {
            await Request.getDatas(`${apiUrl}/${item._id}`)
                .then(values => {
                    totalPrice += item.quantity * values.price
                })
        }

        return totalPrice
    }

    /**
     * Créé un nouvel objet à partir des données récupérées lors du clic sur le bouton
     * "Ajouter au panier".
     * @param {Event} e 
     * @returns {Object} Objet à ajouter au panier.
     */
    static _setNewCartItem(e) {
        const form = e.target
        const datas = {}

        for (let i = 0; i < form.length - 1; i++) {
            if (form[i].getAttribute('name') === 'quantity') {
                datas[form[i].getAttribute('name')] = parseInt(form[i].value)
            } else {
                datas[form[i].getAttribute('name')] = form[i].value
            }
        }

        return datas
    }

    /**
     * Met à jour le contenu du panier.
     * @param {Object} newDatas 
     * @returns {Array} Tableau d'objet représantant le panier
     */
    static _updateCartContent(newDatas) {
        let actualCart = JSON.parse(localStorage.getItem('cart'))
        const filteredItem = actualCart.filter(product => product.id === newDatas.id && product.option === newDatas.option)

        if (filteredItem.length !== 0) {
            actualCart.map(item => {
                if (item === filteredItem[0]) { item.quantity += newDatas.quantity }
            })
        } else {
            actualCart = [...actualCart, newDatas]
        }

        return actualCart
    }
}