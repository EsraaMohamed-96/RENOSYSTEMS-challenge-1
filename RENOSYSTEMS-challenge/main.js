const cont=document.getElementsByClassName("contentbox");
for(var i=0;i<cont.length;i++){
  cont[i].addEventListener("click", function(){
    this.classList.toggle("active");
  }
                           )};


