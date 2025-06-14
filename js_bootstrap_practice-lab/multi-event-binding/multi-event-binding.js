const renderstart= document.querySelector(".row");
const temp=document.getElementById("rendertemp");
console.log(temp);
console.log(renderstart);

for(let j=0;j<4;j++){
    const copy=temp.content.cloneNode(true);
    renderstart.appendChild(copy);
}

const btn=document.querySelectorAll(".btn-danger");
const pchangecolor=document.querySelectorAll(".card-body");
const btnorigin=document.querySelectorAll(".btn-success");
 console.log(btn); 
for(let i=0;i<btn.length;i++){
    /* console.log(i); */
    btn[i].addEventListener('click',()=>{
        pchangecolor[i].classList.add("addred");
    })
    btnorigin[i].addEventListener('click',()=>{
        pchangecolor[i].classList.remove("addred");
    })
}
