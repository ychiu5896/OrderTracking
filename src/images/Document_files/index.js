let user =""
const username = document.querySelector('#username');
username.addEventListener('change',(event) => {
    user = event.target.value;
})

let pass = "";
const password = document.querySelector('#password');
password.addEventListener('change', (event)=> {
    pass = event.target.value;
})

const submit = document.querySelector('button');
submit.addEventListener('click', () => {
    fetch('/login',{ 
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            username:user,
            password:pass,
        })
    })
    .then((response) => {
        response.json();
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log({
            message: `There was an error in Fetch request in Login ${error}`
        })
    })
})




