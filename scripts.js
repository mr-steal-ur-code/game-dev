let cjsTank = document.querySelector('.tank');
let moveBy = 10;

window.addEventListener('onload' , () => {
    cjsTank.style.position = 'absolute';
    cjsTank.style.left = 0;
    cjsTank.style.top = 0;
});

window.addEventListener('keydown' , (e) => {
    
    switch (e.key) {
        case 37:
            cjsTank.style.left = parseInt(cjsTank.style.left) - moveBy + 'px';
            break;
        case 39:
            cjsTank.style.left = parseInt(cjsTank.style.left) + moveBy + 'px';
            break;
        case 38:
            cjsTank.style.top = parseInt(cjsTank.style.top) - moveBy + 'px';
            break;
        case 40:
            cjsTank.style.top = parseInt(cjsTank.style.top) + moveBy + 'px';
            break;
    }
});