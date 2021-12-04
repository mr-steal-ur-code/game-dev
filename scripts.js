let cjsTank = document.querySelector('.tank');
let moveBy = 20;


window.addEventListener('load' , () => {
    cjsTank.style.position = 'absolute';
    cjsTank.style.left = 0;
    cjsTank.style.top = 0;
    cjsTank.style.transition = ".15s";
});

window.addEventListener('keydown' , (e) => {
    console.log
    switch (e.key) {
        case 'ArrowLeft':
            cjsTank.style.left = parseInt(cjsTank.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            cjsTank.style.left = parseInt(cjsTank.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            cjsTank.style.top = parseInt(cjsTank.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            cjsTank.style.top = parseInt(cjsTank.style.top) + moveBy + 'px';
            break;
    }
});