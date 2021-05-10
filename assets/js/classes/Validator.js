/**
 * Permet de tester les informations entrées par l'utlisateur.
 */
export default class Validator {
    constructor() {
        this.number = {
            regex: /[0-9]+/,
            errorMessage: "Vous ne devez saisir que des nombres"
        }
        this.lastName = {
            regex: /^[a-zA-Zçéèàëêùûüô]+([\s|\'|\-]?[a-zA-Zçéèàëêùûüô])+$/,
            errorMessage: "Seuls les caractères alphabétiques, les ' et - sont autorisés"
        }
        this.firstName = {
            regex: /^[a-zA-Zçéèàëêùûüô]+([\s|\-]?[a-zA-Zçéèàëêùûüô])+$/,
            errorMessage: "Seuls les caractères alphabétiques et les - sont autorisés"
        }
        this.address = {
            regex: /^([0-9]+)?([\,|\s|\-]?[a-zA-Z0-9çéèàëêùûüô])+$/,
            errorMessage: "L'adresse saise n'est pas valide"
        }
        this.city = {
            regex: /^[a-zA-Zçéèàëêùûüô]+([\s|\'|\-]?[a-zA-Zçéèàëêùûüô])+$/,
            errorMessage: "Seuls les caractères alphabétiques, les ' et - sont autorisés"
        }
        this.email = {
            regex: /^[\w\-\.]+\@[\w\-\.]+\.[\w]+$/,
            errorMessage: "L'adresse e-mail n'est pas valide"
        }
    }

    /**
     * Compare la chaîne de caractère passée en paramètre avec une expression régulière.
     * Retourne un objet contenant la réponse au test (Boolean), 
     * et un message d'erreur si la reponse est false.
     * @param {String} type (number, lastName, firstName, address, city, email)
     * @param {String} stringToTest La chaîne de caractères à tester
     * @returns {Object}
     */
    validate(type, stringToTest) {
        const response = { validate: this[type].regex.test(stringToTest) }
        !response.validate && (response.message = this[type].errorMessage)

        return response
    }
}