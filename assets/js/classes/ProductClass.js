export default class Product {
    constructor(id, name, description, options, price, imgUrl) {
        this.id = id
        this.name = name
        this.description = description
        this.options = options
        this.price = price
        this.imgUrl = imgUrl
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getDescription() {
        return this.description
    }

    getOptions() {
        return this.options
    }

    getPrice() {
        this.price
    }

    getImgUrl() {
        this.imgUrl
    }
}