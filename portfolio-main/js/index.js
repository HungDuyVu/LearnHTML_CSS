// TYPING ANIMATION
const getText = document.querySelector('.jobs-text');
const typing = () => {
    setTimeout(() => {
        getText.innerHTML = 'Developer';
    }, 0);
    setTimeout(() => {
        getText.innerHTML = 'Photographer';
    }, 3000);
    setTimeout(() => {
        getText.innerHTML = 'Designer';
    }, 6000);
    setInterval(typing, 9000);
};

typing();
// TYPING ANIMATION END

// OPACITY & ANIMATION NAV
const getNav = document.querySelector('.nav');
window.onscroll = function() {
    if(window.pageYOffset > 606.5) {
        getNav.style.opacity = '0.9';
    } else {
        getNav.style.opacity = '1';
    }

    if(window.pageYOffset > 156.5) {
        getNav.style.paddingTop = '0'
    } else {
        getNav.style.paddingTop = '8px'

    }
}


// OPACITY & ANIMATION NAV END