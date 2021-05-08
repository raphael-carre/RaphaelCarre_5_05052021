import Cart from './Cart'
import Request from './Request'

/**
 * Classe utilitaire permettant de créer les éléments HTML nécessaires à l'application.
 */
export default class HtmlFactory {
    /**
     * Créé un élément HTML complet pour un affichage en liste,
     * et contant les informations du produit passé en paramètre.
     * @param {Object} product 
     */
    static displayProductFromList(product) {
        const card = document.createElement('div')
        card.className = 'product-list-card'

        const link = document.createElement('a')
        link.className = 'product-list-card__link'
        link.setAttribute("href", `article.html?id=${product._id}`)
        link.setAttribute("title", `${product.name} - Voir la fiche produit`)

        const imageCanvas = document.createElement('div')
        imageCanvas.className = 'product-list-card__image-canvas'
        imageCanvas.style.backgroundImage = `url(${product.imageUrl})`

        const price = document.createElement('span')
        price.className = 'product-list-card__price'
        price.textContent = this._formatPrice(product.price)

        const info = document.createElement('div')
        info.className = 'product-list-card__info'

        const name = document.createElement('h3')
        name.className = 'product-list-card__name'
        name.textContent = product.name

        const description = document.createElement('p')
        description.className = 'product-list-card__description'
        description.textContent = product.description

        card.appendChild(link)
        link.appendChild(imageCanvas)
        link.appendChild(info)
        imageCanvas.appendChild(price)
        info.appendChild(name)
        info.appendChild(description)

        this._addToContainer(card, 'main', 'product-list')
    }

    /**
     * Créé un élément HTML complet contenant les informations du produit passé en paramètre,
     * ainsi qu'un formulaire pour ajouter le produit au panier.
     * @param {Object} product 
     */
    static displayOneProduct(product) {
        const card = document.createElement('div')
        card.className = 'product'

        const image = document.createElement('img')
        image.className = 'product__image'
        image.setAttribute("src", product.imageUrl)
        image.setAttribute("alt", product.name)

        const info = document.createElement('div')
        info.classList.add('product__info')

        const title = document.createElement('h3')
        title.className = 'product__title'
        title.textContent = product.name
        
        const description = document.createElement('p')
        description.className = 'product_description'
        description.textContent = product.description
        
        const price = document.createElement('p')
        price.className = 'product__price'
        price.textContent = this._formatPrice(product.price)

        const form = document.createElement('form')
        form.setAttribute('method', 'POST')
        form.id = 'addToCartForm'
        form.addEventListener('submit', Cart.addToCart.bind(Cart))

        const inputHidden = document.createElement('input')
        inputHidden.setAttribute('type', 'hidden')
        inputHidden.setAttribute('name', 'id')
        inputHidden.setAttribute("value", product._id)
        inputHidden.id = 'id'

        const formField1 = document.createElement('div')
        const formField2 = document.createElement('div')

        const labelSelect = document.createElement('label')
        labelSelect.setAttribute('for', 'option-selector')
        labelSelect.textContent = 'Couleur'

        const inputSelect = document.createElement('select')
        inputSelect.setAttribute('name', 'option')
        inputSelect.id = 'option-selector'

        product.colors.map(color => {
            const optionSelect = document.createElement("option")

            optionSelect.setAttribute("value", color)
            optionSelect.textContent = color

            inputSelect.appendChild(optionSelect)
        })

        const labelQuantity = document.createElement('label')
        labelQuantity.setAttribute('for', 'quantity')
        labelQuantity.textContent = 'Quantité'

        const inputQuantity = document.createElement('input')
        inputQuantity.setAttribute('type', 'number')
        inputQuantity.setAttribute('name', 'quantity')
        inputQuantity.setAttribute('min', '1')
        inputQuantity.setAttribute('max', '10')
        inputQuantity.setAttribute('value', '1')
        inputQuantity.id = 'quantity'

        const buttonSubmit = document.createElement('button')
        buttonSubmit.className = 'btn'
        buttonSubmit.classList.add('btn--primary')
        buttonSubmit.setAttribute('type', 'submit')
        buttonSubmit.textContent = 'Ajouter au panier'

        card.appendChild(image)
        card.appendChild(info)
        info.appendChild(title)
        info.appendChild(description)
        info.appendChild(price)
        info.appendChild(form)
        form.appendChild(inputHidden)
        form.appendChild(formField1)
        form.appendChild(formField2)
        form.appendChild(buttonSubmit)
        formField1.appendChild(labelSelect)
        formField1.appendChild(inputSelect)
        formField2.appendChild(labelQuantity)
        formField2.appendChild(inputQuantity)

        this._addToContainer(card, 'main', 'product-section')
    }

    /**
     * Créé un tableau HTML complet contenant les informations contenues dans le panier,
     * ainsi que le formulaire pour valider la commande.
     * @param {String} apiUrl endpoint
     */
    static displayCart(apiUrl) {
        const currentCart = localStorage.getItem('cart')

        const form = document.createElement('form')
        form.setAttribute('method', 'POST')
        form.id = 'buyForm'

        if (currentCart) {
            const h2 = document.createElement("h2")
            h2.className = "cart__title"
            h2.textContent = 'Contenu de votre panier'

            const table = document.createElement('table')
            table.className = 'cart__table'
            const tableHead = document.createElement('thead')
            const tableHeadRow = document.createElement('tr')
            const tableHeadCol1 = document.createElement('th')
            tableHeadCol1.textContent = 'Article'
            const tableHeadCol2 = document.createElement('th')
            tableHeadCol2.textContent = 'Couleur'
            const tableHeadCol3 = document.createElement('th')
            tableHeadCol3.textContent = 'Quantité'
            const tableHeadCol4 = document.createElement('th')
            tableHeadCol4.textContent = 'Prix unitaire'
            const tableHeadCol5 = document.createElement('th')
            tableHeadCol5.textContent = 'Prix total'
            const tableHeadCol6 = document.createElement('th')
            tableHeadCol6.textContent = 'Supprimer'
            
            const tableBody = document.createElement('tbody')

            const totalElement = document.createElement('p')
            totalElement.className = 'cart__total'

            const buttonDiv = document.createElement('div')
            buttonDiv.className = 'cart__button-div'
            const resetButton = document.createElement('button')
            resetButton.setAttribute('type', 'reset')
            resetButton.className = 'btn'
            resetButton.textContent = 'Vider mon panier'
            resetButton.addEventListener('click', Cart.resetCart.bind(Cart))
            const buyButton = document.createElement('button')
            buyButton.setAttribute('type', 'submit')
            buyButton.className = 'btn'
            buyButton.classList.add('btn--primary')
            buyButton.textContent = 'Valider ma commande'

            form.appendChild(h2)
            form.appendChild(table)
            table.appendChild(tableHead)
            tableHead.appendChild(tableHeadRow)
            tableHeadRow.appendChild(tableHeadCol1)
            tableHeadRow.appendChild(tableHeadCol2)
            tableHeadRow.appendChild(tableHeadCol3)
            tableHeadRow.appendChild(tableHeadCol4)
            tableHeadRow.appendChild(tableHeadCol5)
            tableHeadRow.appendChild(tableHeadCol6)
            table.appendChild(tableBody)
            form.appendChild(totalElement)
            form.appendChild(buttonDiv)
            buttonDiv.appendChild(resetButton)
            buttonDiv.appendChild(buyButton)

            const cart = JSON.parse(currentCart)

            cart.map((item, index) => {
                this._createCartTableRow(item, index, apiUrl)
                    .then(element => { tableBody.appendChild(element) })
                    .catch(error => { alert(`Il y a eu une erreur !\n${error}`) })
            })

            Cart.totalPrice(cart, apiUrl)
                .then(value => totalElement.textContent = `Total : ${this._formatPrice(value)}`)
                .catch(error => { alert(`Test Il y a eu une erreur !\n${error}`) })
        }

        this._addToContainer(form, 'main', 'cart')
    }

    /**
     * Permet de créer une ligne de tableau HTML à partir des données fournies en paramètre.
     * @param {Object} item Objet contenant les informations d'un produit enregistré dans le panier
     * @param {Number} index Index de l'élément dans le tableau d'origine
     * @param {String} apiUrl endpoint
     * @returns {Promise} Promesse contenant la ligne de tableau à insérer, ou une erreur
     */
    static async _createCartTableRow(item, index, apiUrl) {
        const tableRow = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const td4 = document.createElement('td')
        const td5 = document.createElement('td')
        const td6 = document.createElement('td')

        const deleteLink = document.createElement('a')
        deleteLink.setAttribute('href', '#')
        deleteLink.setAttribute('title', 'Supprimer l\'article')

        const deleteImage = document.createElement('img')
        deleteImage.src = require('@img/trashCan.svg').default
        deleteImage.className = 'cart__delete-item'
        deleteImage.setAttribute('alt', 'Une poubelle')

        await Request.getDatas(`${apiUrl}/${item.id}`)
            .then(values => {
                tableRow.appendChild(td1)
                td1.textContent = values.name
                tableRow.appendChild(td2)
                td2.textContent = item.option
                tableRow.appendChild(td3)
                td3.textContent = item.quantity
                tableRow.appendChild(td4)
                td4.textContent = this._formatPrice(values.price)
                tableRow.appendChild(td5)
                td5.textContent = this._formatPrice(parseInt(values.price) * item.quantity)
                tableRow.appendChild(td6)
                td6.appendChild(deleteLink)
                deleteLink.setAttribute('data-index', index)
                deleteLink.addEventListener('click', (e) => { Cart.deleteItemFromCart(e, apiUrl) }, false)
                deleteLink.appendChild(deleteImage)
            })

        return tableRow
    }

    /**
     * Ajoute un élément à une cible et assigne une classe CSS à cette dernière.
     * @param {HTMLElement} element 
     * @param {String} targetId
     * @param {String} cssClass 
     */
    static _addToContainer(element, targetId, cssClass) {
        const target = document.getElementById(targetId)
        target.classList.add(cssClass)
        target.appendChild(element)
    }

    /**
     * Change un prix de centimes en euros et converti en chaîne de caractères.
     * @param {Number} price 
     * @returns {String} Renvoie une chaîne de caractères.
     */
    static _formatPrice(price) {
        return price = `${(price / 100).toString()} €`
    }
}