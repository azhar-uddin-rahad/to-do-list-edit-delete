const overly=document.querySelector('.overly');

document.querySelector('#popUpBtn').addEventListener('click',function(){
    overly.style.display='flex';
})

overly.addEventListener('click',function(event){
   /// console.log(event.target.classList[0]);
    if(event.target.classList[0] == 'overly'){
        overly.style.display='none';
    }

})
document.querySelector('#close').addEventListener('click',function(){
    overly.style.display='none';
})