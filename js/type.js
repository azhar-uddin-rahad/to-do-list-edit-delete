const text=document.querySelector('.text');
const typingText=text.innerText;
let textArr="";
console.log(textArr);
text.innerText ="";
console.log();
let count=0;
function typeJs(){
    
    if(count < typingText.length){
        text.innerHTML +=typingText.charAt(count);
        count++;
        textArr=typingText.split('');
    }
    else{
        console.log(textArr);
        textArr.pop();
        text.innerHTML=textArr.join("");
        if(textArr.length == 0){
            count=0;
        }
    }
}
console.log()
const stop=setInterval(()=>{
    typeJs()
},text.dataset.speed)
