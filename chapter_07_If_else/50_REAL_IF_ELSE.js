// app.vwo.com -> viewer, editor & admin

let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("admin can do all the things");
    }
    else if (userRole === "editor") {
        console.log("Welcome Editor - Edit access granted.");
    }
    else if (userRole === "viewer") {
        console.log("Welcome Viewer - Read-onlt access.");
    }
    else {
        console.log("No idea you may be a guest role");
    }
} else {
    console.log("You are noy logged in!");
}



