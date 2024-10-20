function handleClick(){
    console.log('Button Click Me')
}

const handleLogin= ()=>{
    const fullname = document.getElementById('fullName').value
    const email    = document.getElementById('email').value
    const password = document.getElementById('password').value

    console.log('fullName : ', fullname);
    console.log('Email : ' , email);
    console.log('password : ', password);
}