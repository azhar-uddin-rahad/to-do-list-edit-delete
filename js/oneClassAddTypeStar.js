const text=document.querySelectorAll('.text');
const textArr=Array.from(text);
console.log(textArr);
const color=['red','blue','orange','prink','yellow','green','tomato','syne']
let typingTextArr='';

textArr.map((item) =>{
    const typingTextStore=item.innerText;
    console.log(typingTextStore);
    item.innerText ='';
    let count=0;
    function typeJS(){
        if(count < typingTextStore.length){
            item.innerHTML += `<span style="color:${color[count]}">${typingTextStore.charAt(count)}</span>`;
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
    },item.dataset.speed)
    })
   






