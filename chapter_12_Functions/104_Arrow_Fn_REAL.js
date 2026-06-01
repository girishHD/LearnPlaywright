// if (ourStatusCode >= 200 && ourStatusCode < 300)

//This is normal Function
function validateStatusCode(status) {
    if (status >= 200 && status < 300) {
        console.log("Request is fine!");
    }
}

// This is function as an expression
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status < 300) {
        console.log("Request is fine!");
    }
}

// This is Aarow Function
const validateStatusCode_Arrow = status => {
    if (status >= 200 && status < 300) {
        console.log("Request is fine!");
    }
}

validateStatusCode(200);
validateStatusCode_Exp(200);
validateStatusCode_Arrow(200);