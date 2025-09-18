const btn=document.getElementById('registration_btn'),
    inputname=document.getElementById('name'),
    inputemail=document.getElementById('email'),
    inputpassword=document.getElementById('password'),
    name_correction=document.getElementById('name_correction'),
    lower=document.getElementById('lower'),
    password_correction=document.getElementById('password_correction'),
    email_correction=document.getElementById('email_correction');



    inputname.addEventListener('input',()=>
    {
        console.log('Typing name',inputname.value)
          const namereges=/^[a-zA-Z]+$/
     
        if (!namereges.test(inputname.value.trim())&& inputname.length!=0)
        {
            name_correction.innerHTML="Insert Correct name"
            
        }

        else if (inputname.value.trim().length<=2 || inputemail.value.trim().length>50){
            name_correction.innerHTML="Name lenth must be greater than 2 and less than 50"
        }
        else{
            name_correction.innerHTML=" "
        }
    })
    inputemail.addEventListener('input',()=>
    {
        console.log('Typing email',inputemail.value)
        if (!inputemail.value.trim().includes("@gmail.com")||inputemail.value.trim().includes(" ")){
            email_correction.innerHTML="Insert Correct Mail"
            
        }
        else{
            email_correction.innerHTML=" "
        }
    })
    inputpassword.addEventListener('input',()=>
    {
        console.log('Typing password',inputpassword.value)
        const specialreges=/[!@#$%^&*(),.?":{}|<>0-9]/;

    if (inputpassword.value.trim().length<8)
    {
        password_correction.innerHTML="Password length alleast 8"

    }
    else if(!specialreges.test(inputpassword.value.trim()))
    {
        password_correction.innerHTML="Weak Password"
        return
    }
    else{
        password_correction.innerHTML=" "
    }
    })


btn.addEventListener('click',(e)=>

{
    e.preventDefault()
    const namevalue=inputname.value.trim();
    const emailvalue=inputemail.value.trim();
    const passwordvalue=inputpassword.value.trim();

    

    if (!emailvalue.includes("@gmail.com")||emailvalue.includes(" "))
        { alert("Give me correct email")
             return 
        } 
    if (namevalue.length<2 || namevalue.length>50)
        { 
            alert('Name Length must be with 2 to 50 word') 
            return
        } 
    const namereges=/^[a-zA-Z]+$/ 
    if (!namereges.test(namevalue))
    { alert("Correct your name") 
        return 
    } 
    const specialreges=/[!@#$%^&*(),.?":{}|<>0-9]/; 
    console.log(passwordvalue,passwordvalue.length,inputpassword,"Khalid") 
    if (!specialreges.test(passwordvalue) || passwordvalue.length<8) 
        { alert("Strong your password or increase password length") 
            return 
        } 
    const existinguser=JSON.parse(localStorage.getItem('users'))||[]
    const emailexist= existinguser.some(user=>user.email===emailvalue)
    if (emailexist)
    {
        alert("Same email already registerd")
        return
    }
    existinguser.push({name:namevalue,email:emailvalue,password:passwordvalue})
    localStorage.setItem("users",JSON.stringify(existinguser));
    console.log(existinguser)
    // window.location.href="product.html"



})