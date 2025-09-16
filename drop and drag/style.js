const dragarea=document.querySelector('.appbody'),
dragtext=dragarea.querySelector('h3'),
button=dragarea.querySelector('button'),
input=dragarea.querySelector('input');
let myfile;

button.onclick =()=>{
    input.click()
}

input.addEventListener('change',function()
{
    myfile=this.files[0];
    dragarea.classList.add('active');
    dragtext.textContent = "File Selected: " + myfile.name;})
dragarea.addEventListener('dragover',(event)=>
{
    event.preventDefault();
    dragarea.classList.add('active');
    dragtext.textContent="Realease to Upload File"
})
dragarea.addEventListener('dragleave',()=>
{
    dragarea.classList.remove('active');
    dragtext.textContent="Drag and Drop"
})