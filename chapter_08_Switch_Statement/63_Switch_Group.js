let browser = "Brave";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "FireFox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser - uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser - Manual testing needed");
}