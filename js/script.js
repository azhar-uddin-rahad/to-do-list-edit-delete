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
        function common(){
            ul.innerHTML="";
        arr.map((item,index)=>{
            ul.innerHTML +=`<li data-id=${index}>${item} <button class="edit">Edit</button> <button class="delete">Delete</button></li>`;
            const deleteBtn=document.querySelectorAll('.delete');
            const deleteBtnArr=Array.from(deleteBtn);
            deleteBtnArr.map((item,ix)=>{
               item.addEventListener('click',function(){
                arr.splice(ix,1);
                common();
                console.log(arr);
               })
            })

            const editBtn=document.querySelectorAll('#edit');
            const editBtnArr=Array.from(editBtn);
            editBtnArr.map((item2,idx)=>{
                item2.addEventListener('click',function(){
                    console.log(item2);
                })
            })

 })
        }
        common();

    }


})