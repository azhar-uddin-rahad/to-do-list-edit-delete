const text=document.querySelectorAll('.text');
const textArr=Array.from(text);
console.log(textArr);
const color=['red','blue','orange','prink','yellow','green','tomato','syne']
let typingTextArr='';



textArr.map((item) =>{
    function isInViewPort(){
        const viewport=item.getBoundingClientRect();
        return(
            viewport.top>=0 && viewport.left>=0 && viewport.bottom<=(window.innerHeight || document.documentElement.clientHeight) &&
            viewport.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    
    }
    const typingTextStore=item.innerText;
    console.log(typingTextStore);
    item.innerText ='';
    let count=0;
 let speed=true;
  window.addEventListener('scroll',function(){
    if(isInViewPort() && speed){
        speed=false;
        function typeJS(){
            console.log(isInViewPort());
            if(count < typingTextStore.length){
                item.innerHTML += `<span style="color:${color[count]}">${typingTextStore.charAt(count)}</span>`;
                count ++;
               typingTextArr=typingTextStore.split('');  
            }
             else{
               
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
    }
  })

    
 
    })
   






