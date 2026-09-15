const form = document.querySelector("form");


// -------------------------
// Get cookie
// -------------------------
function getCookie(name) {
    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");

        if (key === name) {
            return value;
        }
    }

    return null;
}


// -------------------------
// APPLY SAVED PREFERENCES
// This runs immediately on page load
// -------------------------
const savedFontSize = getCookie("fontsize");
const savedFontColor = getCookie("fontcolor");

if (savedFontSize) {
    document.documentElement.style.setProperty(
        "--fontsize",
        savedFontSize + "px"
    );
}

if (savedFontColor) {
    document.documentElement.style.setProperty(
        "--fontcolor",
        savedFontColor
    );
}


// -------------------------
// SAVE NEW PREFERENCES
// -------------------------
form.addEventListener("submit", e => {
    e.preventDefault();

    const fontSize = document.getElementById("fontsize").value;
    const fontColor = document.getElementById("fontcolor").value;

    document.cookie = "fontsize=" + fontSize + "; path=/;";
    document.cookie = "fontcolor=" + fontColor + "; path=/;";

    // Apply immediately as well
    document.documentElement.style.setProperty(
        "--fontsize",
        fontSize + "px"
    );

    document.documentElement.style.setProperty(
        "--fontcolor",
        fontColor
    );
});