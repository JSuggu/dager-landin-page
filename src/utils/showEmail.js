function showEmail(){
    const email = "DotDager@Gmail.com";
    const emailContainer =  document.querySelector("#email");

    if(emailContainer.textContent === email){
        emailContainer.innerHTML = `<img src="assets/images/email.svg" alt="Email"> Email`;
    } else {
        emailContainer.innerHTML = email;
    }    
}

function showEmailMd(){
    const email = "DotDager@Gmail.com";
    const emailContainerMd =  document.querySelector("#email-md");

    if(emailContainerMd.textContent === email && window.matchMedia("only screen and (max-width: 480px)").matches){
        emailContainerMd.innerHTML = `<img src="assets/images/email.svg" alt="Email">`;
    } else {
        emailContainerMd.innerHTML = email;
    }    
}

