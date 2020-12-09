let signInButton = document.getElementById("signIn");

let name = (document.getElementById("name"));
let email = (document.getElementById("email"));
let password = (document.getElementById("password"));
let contact = (document.getElementById("contact"));
let passwordAgain = (document.getElementById("passwordAgain"));

let warning = document.querySelector(".warning");

function purchaseOrder() {
    window.location.href = "./index.html";
}

const warning_p_tag = document.createElement("p");

function addWariningExpense() {

    if (name.value.length === 0 || email.value.length === 0 || password.value.length === 0 || contact.value.length === 0) {
        warning_p_tag.textContent = `Two or more fields require your attention.`;

    }
    if (name.value.length === 0 && email.value.length !== 0 && password.value.length !== 0 && contact.value.length !== 0) {
      warning_p_tag.textContent = `Username cannot be empty.`;
    }
    if(email.value.length === 0 && name.value.length !== 0 && password.value.length !== 0 && contact.value.length !== 0){
        warning_p_tag.textContent = `Email address cannot be empty.`;
    }
   
    if (password.value.length === 0 && name.value.length !== 0 && email.value.length !== 0 && contact.value.length !== 0) {
        warning_p_tag.textContent = `Password cannot be empty.`;
      }

      if (contact.value.length === 0 && name.value.length !== 0 && email.value.length !== 0 && password.value.length !== 0) {
        warning_p_tag.textContent = `Contact information cannot be empty.`;
      }
   

    if(password.value.length !== passwordAgain.value.length){
      warning_p_tag.textContent = `Password length must be the same.`;
    }

    if(password.value !== passwordAgain.value){
        warning_p_tag.textContent = `Entered password must be the same as entered above.`;
    }
  

    warning_p_tag.classList.add("warning_p_element");
    warning.appendChild(warning_p_tag);
  }
  
  // Remove warning p tag - balance - expense
  function removeWariningExpense() {
    warning_p_tag.classList.remove("warning_p_element");
    warning_p_tag.textContent = "";
  }
  

signInButton.addEventListener("click", event => {
    event.preventDefault(); 

    if (name.value.length != 0 && password.value.length != 0 && email.value.length != 0 && passwordAgain.value.length != 0 && password.value.length === passwordAgain.value.length && password.value === passwordAgain.value) {
        swal({
            position:'center',
            type:'success',
            title:'Purchase made successfully!',
            // text:`Your purchase order is: ${itemdb.order}`,
            showConfirmButton:true,
            timer:50000
        });

        setTimeout(purchaseOrder,3000);
        
    }else{
        setTimeout(() => {
            addWariningExpense();
          }, 200);
          setTimeout(() => {
            removeWariningExpense();
          }, 2500);
        
    }
   
  });