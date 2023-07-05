
window.onload = function () {
    document.addEventListener('click', documentActions);
}

function documentActions (e) {
    let targetElement = e.target;
    if(targetElement.classList.contains('icon-menu')){
        targetElement.closest('.header__main').classList.toggle('active-menu');
        targetElement.classList.toggle('active');
        document.body.classList.toggle('lock');
    }
}