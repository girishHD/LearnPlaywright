class BaseTest {
    setup() {
        console.log("base: open browser");
    }
}

class APIPage extends BaseTest {
    setup() {
        console.log("APITest: open browser");
    }
}

let test = new APIPage();
test.setup();