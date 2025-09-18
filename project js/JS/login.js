const login_btn=document.getElementById('login_btn'),
      inputemail=document.getElementById('email'),
      inputpassword=document.getElementById('password'),
      email_correction=document.getElementById('email_correction'),
      password_correction=document.getElementById('password_correction')
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

      
login_btn.addEventListener('click',(e)=>
{
    e.preventDefault()
    const emailvalue=inputemail.value.trim()
    const passwordvalue=inputpassword.value.trim()
    console.log(emailvalue,passwordvalue)
    const existinguser= JSON.parse(localStorage.getItem('users'))
    for (let i =0;i<existinguser.length;i+=1)
    {
        // console.log(existinguser[i].email,existinguser[i].password)
        if( existinguser[i].email==emailvalue && existinguser[i].password==passwordvalue)
        {
            const currentUser={
                'name':existinguser[i].name,
                'email':existinguser[i].email,
                
            }
            localStorage.setItem('currentuser',JSON.stringify(currentUser))
       
            window.location.href="product.html"

            return
        }

    }
    alert('No User')
})

// sheikhkhalidazad@gmail.com erwtrert3423