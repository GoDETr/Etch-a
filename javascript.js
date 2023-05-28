

const container = document.querySelector('#container');

function mkgrid(y,z){
    var x = y*z;
while(x--){


   const content = document.createElement('div');
   content.classList.add('grid');
   container.appendChild(content);

}


};

mkgrid(16,16)

const change  = document.querySelectorAll('.grid');
change.forEach((grid)=>{
  grid.addEventListener('mouseover',()=>{
    grid.setAttribute('style','background:red');
  });
});


