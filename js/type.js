const text=document.querySelector('.text');
const typingText=text.innerText;
text.innerText ="";

console.log();
let count=0;
function typeJs(){
    text.innerHTML +=typingText.charAt(count);
    count++;
    if(typingText.length == count){
        console.log(count)
        clearInterval(stop)
    }
}



const stop=setInterval(()=>{
    typeJs()
},400)
