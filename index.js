
let popup = document.querySelector(".profile__edit-button");
//Функция открытия формы
function openPopup() {
    let popup = document.querySelector(".popup");
    popup.classList.add("popup_opened");
}

let closeForm = document.querySelector(".popup__close-button");
//Функция закрытия формы
function closePopup() {
    let popup = document.querySelector(".popup");
    popup.classList.remove("popup_opened");
}


