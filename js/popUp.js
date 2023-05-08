const overly=document.querySelector('.overly');

document.querySelector('#popUpBtn').addEventListener('click',function(){
    overly.style.display='flex';
})

document.querySelector('#close').addEventListener('click',function(){
    overly.style.display='none';
})