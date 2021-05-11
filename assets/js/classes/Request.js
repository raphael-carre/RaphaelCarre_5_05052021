import HtmlFactory from './HtmlFactory'

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

    /**
     * 
     * @param {String} url 
     * @param {JSON} datas 
     * @returns {Promise}
     */
    static postDatas(url, datas) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: datas
        })
            .then(response => response.ok ? response.json() : HtmlFactory.showModal('Il y a eu un problème !', 'error', `Erreur ${response.status}: ${response.statusText}`))
    }
}