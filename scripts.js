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
    t:0,
    u:0,
    jump: function (t, u) {
    this.t = this.t + t;
    this.u = this.u + u;
    cjsTank.style.top = `${this.u}px`; 
    cjsTank.style.left = `${this.t}px`;  
    }
}

document.addEventListener("keyup", (event) => {
      if (event.key === "j") {
        theTank.jump(200, 0);
      }
    }
)