class CBR {
    static pad(n) {
        return n < 10 ? '0' + n : n
    }

    async getProfile() {
        return fetch('http://patient.simplex48.ru:81/api/Web/medorglist/').then(function (response) {
            return response.json();
        })
    }
}

export default new CBR();
