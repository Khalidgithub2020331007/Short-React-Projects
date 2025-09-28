const currentUser=JSON.parse(localStorage.getItem('currentuser'))
console.log(currentUser)
const img=document.getElementById('info');
img.innerHTML=" User Name:"+currentUser.name+" <br>User Email:"+ currentUser.email;
document.writeln("Khalid Azad")
document.writeln("Saim")