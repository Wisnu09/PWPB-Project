// membuat efek ketika website di scroll
window.addEventListener('scroll', effect);

function effect() {
    let efek = document.querySelectorAll('.effect');

    for( let i = 0; i < efek.length; i++ ) {

        let windowHeight = window.innerHeight;
        let effectTop = efek[i].getBoundingClientRect().top;
        let effectPoint = 150;

        if ( effectTop < windowHeight - effectPoint ) {
            efek[i].classList.add('active');
        } else {
            efek[i].classList.remove('active');
        }
    }
}