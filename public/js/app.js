

//! ---------------- Modal Logic ----------------------
let btn_open_modal = document.querySelectorAll(".btn-open-modal");
let div_modal = document.querySelectorAll(".div-modal");
let btn_close_modal = document.querySelectorAll(".btn-close-modal");
let myBody = document.body;
const openModal = (div) => {
    div.classList.remove("modal-no-show");
    myBody.classList.add("hide-scroll");
    div.lastElementChild.classList.add("active");
}

const closeModal = (div) => {
    div.classList.add("modal-no-show");
    myBody.classList.remove("hide-scroll");
    div.lastElementChild.classList.remove("active");
}

for (let index = 0; index < btn_open_modal.length; index++) {

    let btnElementOpen = btn_open_modal[index];
    // CIBLE l'id du bouton
    let idBtnOpen = btnElementOpen.getAttribute("id");

    for (let idx = 0; idx < div_modal.length; idx++) {
        let divElement = div_modal[idx];
        // CIBLE l'id de la div
        let idDiv = divElement.getAttribute("id");

        if (idBtnOpen == idDiv) {
            btn_open_modal[index].addEventListener("click" , () => {
                openModal(div_modal[idx])
            })
        }

        for (let i = 0; i < btn_close_modal.length; i++) {
            let btnElementClose = btn_close_modal[i];
            let idBtnClose = btnElementClose.getAttribute("id");

            if (idBtnClose == idDiv) {
                btn_close_modal[i].addEventListener("click" , () => {
                    closeModal(div_modal[idx]);
                })
            }
        }
    }
}
//!-----------------------------------------