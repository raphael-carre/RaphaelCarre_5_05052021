/**
 * Gestion du panier client.
 */
export default class Cart {

    /**
     * Insère les données (première insertion ou mise à jour) dans le panier (LocalStorage).
     * @param {Event} e
     */
    static addToCart(e) {
        e.preventDefault()
        
        const datas = this.#setNewCartItem(e)

        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([datas]))
        } else {
            localStorage.setItem('cart', JSON.stringify(this.#updateCartContent(datas)))
        }

        console.log(localStorage.getItem('cart'))

        localStorage.clear()
    }

    /**
     * Créé un nouvel objet à partir des données récupérées lors du clic sur le bouton "Ajouter au panier".
     * @param {Event} e 
     * @returns {Object}
     */
    static #setNewCartItem(e) {
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
     * @returns {Array}
     */
    static #updateCartContent(newDatas) {
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