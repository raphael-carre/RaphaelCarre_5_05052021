import Cart from './Cart'

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
        card.classList.add('product-list-card')

        const link = document.createElement('a')
        link.classList.add('product-list-card__link')
        link.setAttribute("href", `article.html?id=${product._id}`)
        link.setAttribute("title", `${product.name} - Voir la fiche produit`)

        const imageCanvas = document.createElement('div')
        imageCanvas.classList.add('product-list-card__image-canvas')
        imageCanvas.style.backgroundImage = `url(${product.imageUrl})`

        const price = document.createElement('span')
        price.classList.add('product-list-card__price')
        price.textContent = this._formatPrice(product.price)

        const info = document.createElement('div')
        info.classList.add('product-list-card__info')

        const name = document.createElement('h3')
        name.classList.add('product-list-card__name')
        name.textContent = product.name

        const description = document.createElement('p')
        description.classList.add('product-list-card__description')
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
        card.classList.add('product')

        const image = document.createElement('img')
        image.classList.add('product__image')
        image.setAttribute("src", product.imageUrl)
        image.setAttribute("alt", product.name)

        const info = document.createElement('div')
        info.classList.add('product__info')

        const title = document.createElement('h3')
        title.classList.add('product__title')
        title.textContent = product.name
        
        const description = document.createElement('p')
        description.classList.add('product_description')
        description.textContent = product.description
        
        const price = document.createElement('p')
        price.classList.add('product__price')
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
        buttonSubmit.classList.add('btn')
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
     * Change un prix de centimes en euros et converti en chaîne de caractères.
     * @param {Number} price 
     * @returns {String} Renvoie une chaîne de caractères.
     */
    static _formatPrice(price) {
        return price = `${(price / 100).toString()} €`
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
}