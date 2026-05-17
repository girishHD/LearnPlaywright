function getUserStatus() {
    console.log(Status_code); // ReferenceError: Cannot access 'Status_code' before initialization
    var Status_code = "Active";
    console.log(Status_code);
}

getUserStatus();

// Note : var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope