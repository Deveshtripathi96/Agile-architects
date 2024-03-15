let SignUpBtn = document.querySelector('.signupbtn');
let SignInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let Title = document.querySelector('.title');
let Underline = document.querySelector('.underline');
let text =document.querySelector('.text');

SignInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='0';
    Title.innerHTML = 'Sign In';
    text.innerHTML = 'Forgot Passwaord';
    SignUpBtn.classList.add('disable');
    SignInBtn.classList.remove('disable');
    Underline.style.transform = 'translateX(35px)';
});

SignUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='60px';
    Title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestions ';
    SignInBtn.classList.add('disable');
    SignUpBtn.classList.remove('disable');
    Underline.style.transform = 'translateX(0)'
});