
let navItem = document.querySelectorAll(".menu__item-link");

const activeNav = (e) => {
    let href = e.target.href.toString();

    if(!e.target.classList.contains('active')) {

      for (let i = 0; i < href.length; i++) {

        if(href[i] === '#'){

          for (let i = 0; i < 5; i++) {
            e.target.parentNode.parentNode.children[i].children[0].classList.remove('active');
          }

          e.target.classList.add('active');
        }
      }
    }

    e.stopPropagation();
};

navItem.forEach(item => {
  item.addEventListener('click', activeNav);
});


(function() {
  // your page initialization code here
  // the DOM will be available here
  let menuArea = document.querySelector(".menu");
  let menuBtn = document.createElement("div");

  const addMenuBurger = () => {

    menuBtn.classList.add("menu__btn");

    for (let i = 0; i < 3; i++) {
      let temp = document.createElement("span");
      menuBtn.appendChild(temp);
    }


    let clientWidth = document.body.clientWidth;

    if ( clientWidth < 769 ){
      menuArea.appendChild(menuBtn);
    }

    window.onresize = function (){
      clientWidth = document.body.clientWidth;
      console.log(clientWidth)
      if ( clientWidth > 768 ){
        menuBtn.remove();
      } else if (clientWidth < 769 ) {
        menuArea.appendChild(menuBtn);

      }
    }







  }

  const menuAction = (e) =>{
    console.log("www")
    if(!e.target.classList.contains('active')) {
      e.currentTarget.classList.add('active');
      e.currentTarget.closest(".header").classList.add('active');

      e.currentTarget.parentNode.children[0].classList.add('active');
    } else if (e.target.classList.contains('active') ){
      e.currentTarget.classList.remove('active');
      e.currentTarget.closest(".header").classList.remove('active');
      e.currentTarget.parentNode.children[0].classList.remove('active');

    }
  }


  window.addEventListener('load', addMenuBurger, false );
  menuBtn.addEventListener('click', menuAction, false );


})();

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const form = document.getElementById("contacts_form");




const formValidation = (event) => {
  event.preventDefault();
  const nameField = form.querySelector('input[name="name"]');
  const emailField = form.querySelector('input[name="email"]');
  const messageField = form.querySelector('textarea[name="message"]');

  const emailValue = emailField.value;
  const nameValue = nameField.value;

  const error = document.createElement("span");
  error.classList.add('error');

  if (!emailIsValid(emailValue)) {
    error.innerHTML = "Please enter a valid email address.";
    emailField.parentNode.appendChild(error);
    return;
  }
  else if(emailIsValid(emailValue) && emailField.parentNode.querySelectorAll(".error") !== null) {
    emailField.parentNode.querySelectorAll(".error").forEach(el => el.remove());
  }

  if (nameValue.length < 3){
    error.innerHTML = "Please enter a valid name.";
    nameField.parentNode.appendChild(error);
    return;
  }
  else if(nameValue.length  > 2 && nameField.parentNode.querySelectorAll(".error") !== null){
    nameField.parentNode.querySelectorAll(".error").forEach(el => el.remove());
  }

}


  form.addEventListener('submit',formValidation, false );
