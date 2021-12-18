var likes = document.getElementsByClassName("like");
console.log(likes[0]);
for(let i=0; i<likes.length; i++){
    let like = likes[i];
    like.addEventListener("click",function() {
      if (like.style.color == "red"){
          like.style.color = "black";
            like.style.color = "red";
      }

    });
}
var pluss= document.getElementsByClassName("plus-btn");
console.log(pluss);
for(let i = 0; i<pluss.length; i++){
  let inc = pluss[i];
  inc.addEventListener('click', function(){
    inc.previousElementSibling.value ++
  })
}
var minuss = document.getElementsByClassName("minus-btn");
console.log(minuss);
for(let i = 0; i<minuss.length; i++){
  let dec= minuss[i];
  dec.addEventListener('click', function(){
    if(dec.nextElementSibling.value >1){
      dec.nextElementSibling.value --
    }else{
      dec.nextElementSibling.value =1
    }
    
  
      
  })
}



     


  
var items= document.getElementsByClassName("Item");
console.log(items);
function total (){
  let s = 0;
for(let i = 0; i<items.length; i++){
  let item = items[i];
  
  
  s +=item.querySelector(".price").innerText*item.
  querySelector(".Quant").value;
}
return console.log(s);

}

total();

let deletes = document.getElementsByClassName("delete");
console.log(deletes);
for (let i = 0; i<deletes.length; i++){
  let dlt= deletes[i];
  dlt.addEventListener('click', function(){
    dlt.parentElement.remove();
  })
}
