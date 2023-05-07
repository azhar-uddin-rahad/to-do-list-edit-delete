const postBtn=document.querySelector('#postBtn');
const inputField=document.querySelector('#inputField');
const error=document.querySelector('h1');
const ul=document.querySelector('ul');
const update=document.querySelector('#updateBtn')
const arr=[];
let updatedId=''
console.log(ul);
postBtn.addEventListener('click',function(){
    if(!Boolean(inputField.value)){
        error.innerText='Type post on input filed'
    }
    else{
        error.innerText="";
        arr.push(inputField.value);
        
        common();

    }


})
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

    const editBtn=document.querySelectorAll('.edit');
    const editBtnArr=Array.from(editBtn);
    editBtnArr.map((item2,idx)=>{
        item2.addEventListener('click',function(){
            inputField.value = arr[idx];
            inputField.focus();
            updatedId=idx;
            update.style.display='block';
            postBtn.style.display='none';

        })
    })

})
}
update.addEventListener('click',function(){
    arr[updatedId]=inputField.value;
    common();
    update.style.display='none';
    postBtn.style.display='block';

})