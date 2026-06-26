// Grand Father -> Fater -> Son

class BasePage {
    constructor(name) {
        this.name = name;
    }

    open() {
        console.log("[OPEN] " + this.name);
    }
}

class AuthPage extends BasePage {
    login(user) {
        console.log("[LOGIN] " + user)
    }
}

class AdminPage extends AuthPage {
    constructor() {
        super("Admin Panel");
    }

    maangeUser() {
        console.log("[ADMIN] Managing users");
    }
}

let admin = new AdminPage();
admin.open();
admin.login("superadmin");
admin.maangeUser();