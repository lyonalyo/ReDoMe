class CBR {
    static pad(n) {
        return n < 10 ? '0' + n : n
    }

    async getDaily(date) {
        let cacheDate = date.getDate() + "_" + (date.getMonth() + 1) + "_" + date.getFullYear();
        return fetch('http://patient.simplex48.ru:81/api/Web/medorglist/').then(function (response) {
            return response.json();
        })
    }
}

export default new CBR();
