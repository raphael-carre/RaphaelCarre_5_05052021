import Cart from './Cart'
import Request from './Request'
import Validator from './Validator'

/**
 * Classe utilitaire permettant de créer les éléments HTML nécessaires à l'application.
 */
export default class HtmlFactory {
    /**
     * Créé un élément HTML complet pour un affichage en liste,
     * et contant les informations du produit passé en paramètre.
     * @param {Object} product 
     */
    static showProductFromList(product) {
        // Container
        const card = document.createElement('div')
        card.className = 'product-list-card'

        // Lien vers la page du produit
        const link = document.createElement('a')
        link.className = 'product-list-card__link'
        link.setAttribute("href", `article.html?id=${product._id}`)
        link.setAttribute("title", `${product.name} - Voir la fiche produit`)

        // Image du produit
        const imageCanvas = document.createElement('div')
        imageCanvas.className = 'product-list-card__image-canvas'
        imageCanvas.style.backgroundImage = `url(${product.imageUrl})`

        // Prix du produit
        const price = document.createElement('span')
        price.className = 'product-list-card__price'
        price.textContent = this._formatPrice(product.price)

        const info = document.createElement('div')
        info.className = 'product-list-card__info'

        // Nom du produit
        const name = document.createElement('h3')
        name.className = 'product-list-card__name'
        name.textContent = product.name

        // Description du produit
        const description = document.createElement('p')
        description.className = 'product-list-card__description'
        description.textContent = product.description

        // Imbrication des éléments
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
    static showOneProduct(product) {
        // Container
        const card = document.createElement('div')
        card.className = 'product'

        // Image du produit
        const image = document.createElement('img')
        image.className = 'product__image'
        image.setAttribute("src", product.imageUrl)
        image.setAttribute("alt", product.name)

        const info = document.createElement('div')
        info.classList.add('product__info')

        // Nom du produit
        const title = document.createElement('h3')
        title.className = 'product__title'
        title.textContent = product.name
        
        // Description du produit
        const description = document.createElement('p')
        description.className = 'product_description'
        description.textContent = product.description
        
        // Prix du produit
        const price = document.createElement('p')
        price.className = 'product__price'
        price.textContent = this._formatPrice(product.price)

        // Formulaire
        const form = document.createElement('form')
        form.setAttribute('method', 'POST')
        form.id = 'addToCartForm'
        form.addEventListener('submit', Cart.addToCart.bind(Cart))

        // ID
        const inputHidden = document.createElement('input')
        inputHidden.setAttribute('type', 'hidden')
        inputHidden.setAttribute("value", product._id)
        inputHidden.name = '_id'
        inputHidden.id = 'id'

        // Couleurs
        const formField1 = document.createElement('div')
        
        const labelSelect = document.createElement('label')
        labelSelect.setAttribute('for', 'option-selector')
        labelSelect.textContent = 'Couleur'
        
        const inputSelect = document.createElement('select')
        inputSelect.name = 'option'
        inputSelect.id = 'option-selector'
        
        product.colors.map(color => {
            const optionSelect = document.createElement("option")
            
            optionSelect.setAttribute("value", color)
            optionSelect.textContent = color
            
            inputSelect.appendChild(optionSelect)
        })

        // Quantité
        const formField2 = document.createElement('div')
        
        const labelQuantity = document.createElement('label')
        labelQuantity.setAttribute('for', 'quantity')
        labelQuantity.textContent = 'Quantité'

        const inputQuantity = document.createElement('input')
        inputQuantity.setAttribute('type', 'number')
        inputQuantity.setAttribute('min', '1')
        inputQuantity.setAttribute('value', '1')
        inputQuantity.name = 'quantity'
        inputQuantity.id = 'quantity'

        // Bouton
        const buttonSubmit = document.createElement('button')
        buttonSubmit.className = 'btn'
        buttonSubmit.classList.add('btn--primary')
        buttonSubmit.setAttribute('type', 'submit')
        buttonSubmit.textContent = 'Ajouter au panier'

        // Imbrication des éléments
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
     * Affiche un tableau HTML contenant les informations contenues dans le panier,
     * ainsi que le formulaire pour valider la commande.
     * @param {String} apiUrl endpoint
     */
    static showCart(apiUrl) {
        // Récupération du panier
        const currentCart = localStorage.getItem('cart')

        // Formulaire
        const form = document.createElement('form')
        form.setAttribute('method', 'POST')
        form.id = 'buyForm'
        form.addEventListener('submit', Cart.buyCartContent)

        if (currentCart) {
            const cart = JSON.parse(currentCart)

            // Titre
            const h2 = document.createElement("h2")
            h2.className = "cart__title"
            h2.textContent = 'Contenu de votre panier'

            // Prix total
            const totalElement = document.createElement('p')
            totalElement.className = 'cart__total'

            Cart.totalPrice(cart, apiUrl)
                .then(value => totalElement.textContent = `Total : ${this._formatPrice(value)}`)
                .catch(error => { this.showModal('Il y a eu une erreur !', 'error', error) })

            // Boutons
            const buttonDiv = document.createElement('div')
            buttonDiv.className = 'cart__button-div'
            const resetButton = document.createElement('button')
            resetButton.setAttribute('type', 'reset')
            resetButton.className = 'btn'
            resetButton.textContent = 'Vider mon panier'
            resetButton.addEventListener('click', e => {
                this.showModal('Êtes-vous sûr de vouloir vider votre panier ? ', 'confirm', null, Cart.resetCart.bind(Cart))
            })
            const buyButton = document.createElement('button')
            buyButton.setAttribute('type', 'submit')
            buyButton.className = 'btn'
            buyButton.classList.add('btn--primary')
            buyButton.textContent = 'Valider ma commande'

            // Imbrication des éléments
            form.appendChild(h2)
            form.appendChild(this._createCartTable(cart, apiUrl))
            form.appendChild(totalElement)
            form.appendChild(this._createDetailsForm())
            form.appendChild(buttonDiv)
            buttonDiv.appendChild(resetButton)
            buttonDiv.appendChild(buyButton)

            this._addToContainer(form, 'main', 'cart')
            return
        } else {
            this.showEmptyCart()
        }
    }

    /**
     * Affichage par défault lorsque le panier est vide.
     */
    static showEmptyCart() {
        const main = document.getElementById('main')
        const content = document.createElement('div')

        const h2 = document.createElement('h2')
        h2.className = 'empty-cart__title'
        h2.textContent = 'Votre panier est vide'

        const p = document.createElement('p')
        p.className = 'empty-cart__content'
        p.textContent = 'Consultez notre catalogue !'

        content.appendChild(h2)
        content.appendChild(p)

        main.classList.contains('cart') && main.classList.remove('cart')
        this._addToContainer(content, 'main', 'empty-cart')
    }

    /**
     * Affiche une fenêtre modale au dessus de l'application.
     * @param {String} content Message devant apparaître dans la fenêtre modale
     * @param {String} type Type de fenêtre modale (message - default-, error, confirm)
     * @param {String} error Erreur à afficher lors d'une modale de type "error"
     * @param {Function} callbackFunction Fonction callback à utiliser lors d'une modale de type "confirm"
     */
    static showModal(content, type = '', error = null, callbackFunction = null) {
        const body = document.body

        const overlay = document.createElement('div')
        overlay.className = 'overlay'

        const modal = document.createElement('div')
        modal.className = 'modal'

        const message = document.createElement('p')
        message.className = 'modal__message'
        message.textContent = content

        const buttonDiv = document.createElement('div')
        buttonDiv.className = 'modal__buttons'

        const okButton = document.createElement('button')
        okButton.className = 'btn'
        okButton.textContent = 'OK'

        const noButton = document.createElement('button')
        noButton.className = 'btn'
        noButton.textContent = 'non'

        const yesButton = document.createElement('button')
        yesButton.className = 'btn'
        yesButton.classList.add('btn--primary')
        yesButton.textContent = 'oui'

        overlay.appendChild(modal)
        modal.appendChild(message)
        
        switch(type) {
            case 'error':
                const errorMessage = document.createElement('p')
                errorMessage.className = 'modal__error'
                errorMessage.textContent = error

                modal.appendChild(errorMessage)
                modal.appendChild(buttonDiv)
                buttonDiv.appendChild(okButton)
                okButton.addEventListener('click', this._hideModal)
                break
            case 'confirm':
                modal.appendChild(buttonDiv)
                buttonDiv.appendChild(noButton)
                buttonDiv.appendChild(yesButton)

                noButton.addEventListener('click', e => {
                    this._hideModal(e)                    
                })
                yesButton.addEventListener('click', (e) => {
                    callbackFunction()
                    this._hideModal(e)
                })
                break
            default:
                setTimeout(this._hideModal, 1700)
        }

        body.appendChild(overlay)
    }

    /**
     * Masque la fenêtre modale
     * @param {Event} e (optionnel)
     */
    static _hideModal(e = null) {
        e !== null && e.preventDefault()
        document.querySelector('.overlay').classList.add('fade-out')
        const timeOut = setTimeout(() => { document.body.removeChild(document.querySelector('.overlay')) }, 200)
        // clearTimeout(timeOut)
    }

    /**
     * Créé un tableau HTML contenant les produits du panier
     * @param {Array} cart Contenu du panier
     * @param {String} apiUrl endpoint
     * @returns {HTMLElement} Tableau HTML
     */
    static _createCartTable(cart, apiUrl) {
        const table = document.createElement('table')
        table.className = 'cart__table'
        const tableHead = document.createElement('thead')
        const tableHeadRow = document.createElement('tr')

        const tableCols = [
            'Article',
            'Couleur',
            'Quantité',
            'Prix unitaire',
            'Prix total',
            'Supprimer'
        ]

        tableCols.map(value => {
            const th = document.createElement('th')
            th.textContent = value
            tableHeadRow.appendChild(th)
        })

        const tableBody = document.createElement('tbody')

        table.appendChild(tableHead)
        tableHead.appendChild(tableHeadRow)
        table.appendChild(tableBody)

        cart.map((item, index) => {
            this._createCartTableRow(item, index, apiUrl)
                .then(element => { tableBody.appendChild(element) })
                .catch(error => { this.showModal('Il y a eu une erreur !', 'error', error) })
        })

        return table
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

        const deleteLink = document.createElement('a')
        deleteLink.setAttribute('href', '#')
        deleteLink.setAttribute('title', 'Supprimer l\'article')

        const deleteImage = document.createElement('img')
        deleteImage.src = require('@img/trashCan.svg').default
        deleteImage.className = 'cart__delete-item'
        deleteImage.setAttribute('alt', 'Une poubelle')

        await Request.getDatas(`${apiUrl}/${item._id}`)
            .then(values => {
                for (let i = 0; i <= 5; i++) {
                    const td = document.createElement('td')
                    tableRow.appendChild(td)

                    switch (i) {
                        case 0:
                            td.textContent = values.name
                            break
                        case 1:
                            td.textContent = item.option
                            break
                        case 2:
                            td.textContent = item.quantity
                            break
                        case 3:
                            td.textContent = this._formatPrice(values.price)
                            break
                        case 4:
                            td.textContent = this._formatPrice(parseInt(values.price) * item.quantity)
                            break
                        case 5:
                            td.appendChild(deleteLink)
                            deleteLink.setAttribute('data-index', index)
                            deleteLink.addEventListener('click', e => {
                                this.showModal(
                                    'Êtes-vous sûr de vouloir supprimer cet article ?',
                                    'confirm',
                                    '',
                                    () => { Cart.deleteItemFromCart(e, apiUrl) }
                                )
                            })
                            deleteLink.appendChild(deleteImage)
                            break
                    }
                }
            })

        return tableRow
    }

    /**
     * Créé les champs de formulaire pour passer commande.
     * @returns {HTMLElement}
     */
    static _createDetailsForm() {
        const detailsForm = document.createElement('div')
        detailsForm.className = 'cart__details'

        const detailsTitle = document.createElement('h2')
        detailsTitle.className = 'cart__details__title'
        detailsTitle.textContent = 'Mes coordonnées'

        const details = {
            lastName: 'Nom',
            firstName: 'Prénom',
            email: 'E-mail',
            address: 'Adresse',
            city: 'Ville'
        }

        for (let key in details) {
            const div = document.createElement('div')
            const label = document.createElement('label')
            label.setAttribute('for', `${key}Input`)
            label.textContent = details[key]

            const input = document.createElement('input')
            input.setAttribute('type', key === 'email' ? 'email' : 'text')
            input.setAttribute('required', 'true')
            input.name = key
            input.id = `${key}Input`
            input.addEventListener('change', e => {
                const validator = new Validator()
                const response = validator.validate(e.target.name, e.target.value)
                this.showHideErrorElement(e.target, response) 
            })

            div.appendChild(label)
            div.appendChild(input)

            detailsForm.appendChild(div)
        }

        return detailsForm
    }

    /**
     * Ajoute un élément à une cible et assigne une classe CSS à cette dernière.
     * @param {HTMLElement} element 
     * @param {String} targetId
     * @param {String} cssClass 
     */
    static _addToContainer(element, targetId, cssClass = '') {
        const target = document.getElementById(targetId)
        cssClass !== '' && target.classList.add(cssClass)
        target.appendChild(element)
    }

    /**
     * Affiche un message d'erreur si le champ complété n'est pas valide.
     * Retire ce message si le champ est valide.
     * @param {HTMLElement} input Champ de formulaire
     * @param {Object} response Réponse de la classe Validator
     */
    static showHideErrorElement(input, response) {
        if (!response.validate) {
            if (!document.querySelector('.error-span')) {
                const errorSpan = document.createElement('span')
                errorSpan.className = 'error-span'
                errorSpan.textContent = response.message

                input.parentNode.appendChild(errorSpan)
                input.previousElementSibling.className = 'label--error'
                input.className = 'input--error'
            }

            return
        }

        if (document.querySelector('.error-span')) {
            input.parentNode.removeChild(document.querySelector('.error-span'))
            input.previousElementSibling.classList.remove('label--error')
            input.classList.remove('input--error')

            return
        }
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