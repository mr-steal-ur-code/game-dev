const cjsTank = document.querySelector('.tank');
let moveBy = 10;


window.addEventListener('load' , () => {
    cjsTank.style.position = 'absolute';
    cjsTank.style.left = 0;
    cjsTank.style.top = 0;
    cjsTank.style.transition = ".15s";
});


window.addEventListener('keydown' , (e) => {
    
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
    })  

const theTank = {
    color: "black",
    x:0,
    y:0,
    jump: function (x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
    cjsTank.style.top = `${this.y}px`; 
    cjsTank.style.left = `${this.x}px`;  
    }
}

document.addEventListener("keyup", (event) => {
      if (event.key === "j") {
        theTank.jump(200, 0);
      }
    }
)