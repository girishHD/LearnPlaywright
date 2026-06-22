// Private field (#) - Hidden Data
// Public fields

class Credential {
    #apiKey;  // Private variables are not allowed to be used outside.
    user;

    constructor(user, key) {
        this.user = user;  // public
        this.#apiKey = key;
    }

    // Custome made function by us
    pramodegetAuthHeader() {
        return "Bearer" + this.#apiKey;
    }
}

let cred = new Credential("admin", "scret_key_1234");
console.log(cred.user);
console.log(cred.apiKey);   // undefined
// console.log(cred.#apiKey);   // error

const token = cred.pramodegetAuthHeader();
console.log(token);