//your JS code here. If required.
const form=document.querySelector('form');
form.addEventListener('submit',e =>{
	const fontSize=document.getElementById('fontsize').value;
	const fontColor=document.getElementById('fontcolor').value;
	document.cookie = 'fontsize=' + fontSize + '; path=/;'
	document.cookie = 'fontcolor=' + fontColor + '; path=/;'
})
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
const fontSize = getCookie("fontsize");
const fontColor = getCookie("fontcolor");

if (fontSize) {
    document.documentElement.style.setProperty("--fontsize", fontSize + "px");
}

if (fontColor) {
    document.documentElement.style.setProperty("--fontcolor", fontColor);
}
}