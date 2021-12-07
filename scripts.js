
let moveBy = 10;

const cjsTank = {
    el: null,
    color: "black",
    x:0,
    y:0,
    create: function () {
        this.el = document.querySelector('.tank');
        this.el.style.position = 'absolute';
        this.el.style.left = 0;
        this.el.style.top = 0;
        this.el.style.transition = ".15s";
        document.body.appendChild(this.el);
    },
    move: function (x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
        this.el.style.left = `${this.x}px`;  
        this.el.style.top = `${this.y}px`; 
    },
};

window.addEventListener('keydown' , (e) => {
   switch (key) {
        case 'ArrowLeft':
            cjsTank.move(-moveBy, 0);
            break;
        case 'ArrowRight':
            cjsTank.move(moveBy, 0);
            break;
        case 'ArrowUp':
            cjsTank.move(0, -moveBy);
            break;
        case 'ArrowDown':
            cjsTank.move(0, moveBy);
            break;
        case ' ':
            cjsTank.move(0, -10);
            setTimeout(() => {
                cjsTank.move(0, 10);
            }, 300);
            break;
    }
});
      

