/**
 * Gestion des requêtes de l'application.
 */
export default class Request {
    /**
     * Envoie une requête en GET vers un serveur distant.
     * @param {String} url 
     * @returns {Promise} Retourne une promesse contenant la réponse du serveur au format JSON.
     */
    static getDatas (url) {
        return fetch(url).then(response => { if (response.ok) return response.json() })
    }
}