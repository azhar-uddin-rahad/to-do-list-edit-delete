const postBtn=document.querySelector('#postBtn');
const inputField=document.querySelector('#inputField');
const error=document.querySelector('h1');
const ul=document.querySelector('ul');
const arr=[];
console.log(ul);
postBtn.addEventListener('click',function(){
    if(!Boolean(inputField.value)){
        error.innerText='Type post on input filed'
    }
    else{
        error.innerText="";
        arr.push(inputField.value);
        ul.innerHTML=""
        arr.map((item,index)=>{
            ul.innerHTML +=`<li data-id=${index}>${item} <button class="edit">Edit</button> <button class="delete">Delete</button></li>`;
        })

    }


})