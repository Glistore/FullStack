const randomNumber = Math.floor(Math.random() * 100);

function checkChute() {
    const userChute = parseInt(document.getElementById('userChute').value);
    const chuteElement = document.getElementById('chute');

    if (userChute === randomNumber) {
        chuteElement.innerHTML = "Bom chute! Você acertou.";
        chuteElement.style.setProperty("background-color", "green");
    } else if (userChute > randomNumber) {
        chuteElement.innerHTML = "Chute um número menor.";
        chuteElement.style.setProperty("background-color", "red");
    } else {
        chuteElement.innerHTML = "Chute um número maior.";
        chuteElement.style.setProperty("background-color", "red");
    }
}