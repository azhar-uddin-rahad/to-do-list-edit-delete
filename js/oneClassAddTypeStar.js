const text=document.querySelectorAll('.text');
const textArr=Array.from(text);
console.log(textArr);
let typingTextArr='';

textArr.map((item) =>{
    const typingTextStore=item.innerText;
    console.log(typingTextStore);
    item.innerText ='';
    let count=0;
    function typeJS(){
        if(count < typingTextStore.length){
            item.innerHTML += typingTextStore.charAt(count);
            count ++;
           typingTextArr=typingTextStore.split('');
          
        }
         else{
            console.log(typingTextArr)
            typingTextArr.pop();     
            item.innerHTML = typingTextArr.join("");
            if(typingTextArr.length === 0){
               count=0;
            } 
        }
    }
    setInterval(()=>{
        typeJS()
    },500)
    })
   






