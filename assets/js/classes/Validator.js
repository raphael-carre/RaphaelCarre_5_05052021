/**
 * Permet de tester les informations entrées par l'utlisateur.
 */
export default class Validator {
    constructor() {
        this.matches = {
            quantity: {
                regex: /^[1-9][0-9]*/,
                errorMessage: "Vous ne devez saisir que des nombres; valeur minimale : 1"
            },
            number: {
                regex: /[0-9]+/,
                errorMessage: "Vous ne devez saisir que des nombres"
            },
            lastName: {
                regex: /^[a-zA-Zçéèàëêùûüô]+([\s|\'|\-]?[a-zA-Zçéèàëêùûüô])+$/,
                errorMessage: "Seuls les caractères alphabétiques, les ' et les - sont autorisés"
            },
            firstName: {
                regex: /^[a-zA-Zçéèàëêùûüô]+([\s|\-]?[a-zA-Zçéèàëêùûüô])+$/,
                errorMessage: "Seuls les caractères alphabétiques et les - sont autorisés"
            },
            address: {
                regex: /^([0-9]+)?([\,|\s|\-]?[a-zA-Z0-9çéèàëêùûüô\'\-\s])+$/,
                errorMessage: "L'adresse saise n'est pas valide"
            },
            city: {
                regex: /^[a-zA-Zçéèàëêùûüô]+([\s|\'|\-]?[a-zA-Zçéèàëêùûüô])+$/,
                errorMessage: "Seuls les caractères alphabétiques, les ' et - sont autorisés"
            },
            email: {
                regex: /^[\w\-\.]+\@[\w\-\.]+\.[\w]+$/,
                errorMessage: "L'adresse e-mail n'est pas valide"
            }
        }
    }

    /**
     * Compare la chaîne de caractère passée en paramètre avec une expression régulière.
     * @param {String} type (quantity, number, lastName, firstName, address, city, email)
     * @param {String} stringToTest La chaîne de caractères à tester
     * @returns {{validate: Boolean, message: String}} Objet contenant la réponse au test et un message d'erreur si la réponse est "false"
     */
    validate(type, stringToTest) {
        if (stringToTest === '') {
            return { validate: false, message: "Merci de renseigner ce champ de formulaire" }
        }
        const response = { validate: this.matches[type].regex.test(stringToTest) }
        !response.validate && (response.message = this.matches[type].errorMessage)

        return response
    }
}