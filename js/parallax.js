const one =document.querySelector('.img1');
const two =document.querySelector('.img2');
console.log(two)
window.addEventListener('mousemove',function(event){
    console.log(event.clientX);
    one.style.left= (event.clientX/5) + 'px';
    one.style.top= (event.clientY/5) + 'px';
    two.style.left= (event.clientX/15) + 'px';
    two.style.top= (event.clientY/15) + 'px';

})