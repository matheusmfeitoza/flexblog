function salvarData(){
    let getEmail = document.getElementById("email")
    let getBtn = document.getElementById("btn");
    getBtn.addEventListener('click',function(e){
        e.preventDefault();
        let emailValue = getEmail.value;
        localStorage.setItem('email',emailValue);
        console.log(emailValue);
    });
    document.getElementById('email').value = localStorage.email;
}
salvarData();

