//retour page n-1
let bckFromMenu = document.getElementById('back');
bckFromMenu.addEventListener('click', arrCom);

function arrCom() {
    history.back();
    /* if (screen.width <= 768) {
        history.go(-2);
    } else {
        history.back();
    } */
};