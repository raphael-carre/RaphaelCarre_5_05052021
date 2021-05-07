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
    }

    /**
     * Créé un nouvel objet à partir des données récupérées lors du clic sur le bouton
     * "Ajouter au panier".
     * @param {Event} e 
     * @returns {Object} Objet à ajouter au panier.
     */
    static _setNewCartItem(e) {
        const form = e.target
        const datas = new Object()

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

    /**
     * Dénombre la quantité d'articles dans le panier et affiche une info-bulle dans le header.
     */
    static headerNotification() {
        if (localStorage.getItem('cart')) {
            const cartContent = JSON.parse(localStorage.getItem('cart'))
            const totalProducts = cartContent.reduce((acc, item) => acc + item.quantity, 0)

            const counter = document.getElementById('product-counter')
            if (totalProducts > 0) {
                counter.classList.contains('hidden') && counter.classList.remove('hidden')
                counter.textContent = totalProducts
            }
        }
    }
}