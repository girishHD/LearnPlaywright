class BasePage {
    verify() {
        console.log("Verifying base page");
    }
}

class LoginPage extends BasePage {
    verify() {
        console.log("Verify: username field exists");
        console.log("Verify: password field exists");
        console.log("Verify: login button visible");
    }
}

class DashboardPage extends BasePage {
    verify() {
        console.log("Verify: welcome message shown");
        console.log("Verify: sidebar menu loaded");
    }
}

class CartPage extends BasePage {
    verify() {
        console.log("Verify: cart item displayed");
        console.log("Verify: total price is correct");
    }
}

let pages = [new LoginPage(), new DashboardPage(), new CartPage()];

pages.forEach(function (page) {
    page.verify();
    console.log("------");
});