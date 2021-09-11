import React, { useState } from "react";
import emailjs from "emailjs-com";
import NavToggler from "../components/NavToggler";
import SuccessHandler from "../components/SuccessHandler";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  window.onload = function () {
    const formName = document.getElementById("name");
    const formEmail = document.getElementById("email");
    const formMessage = document.getElementById("message");

    formName.value = "";
    formEmail.value = "";
    formMessage.value = "";
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const isName = (name) => {
      const regex = /^[a-zA-Z]+(?:(?:['  -])[a-zA-Z]+)*$/;
      return regex.test(name);
    };
    const isEmail = (email) => {
      const regex =
        // eslint-disable-next-line
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    };
    const isNameTooShort = (name) => {
      return name.length < 2 ? false : true;
    };
    const isNameTooLong = (name) => {
      return name.length > 30 ? false : true;
    };
    const isEmailTooShort = (email) => {
      return email.length < 7 ? false : true;
    };
    const isEmailTooLong = (email) => {
      return email.length > 100 ? false : true;
    };
    const isMessageTooShort = (message) => {
      return message.length < 11 ? false : true;
    };
    const isMessageTooLong = (message) => {
      return message.length > 1000 ? false : true;
    };
    let nameAlert = "";
    let emailAlert = "";
    let messageAlert = "";

    const isNameValid = document.getElementById("name").value;
    const isEmailValid = document.getElementById("email").value;
    const isMessageValid = document.getElementById("message").value;

    // no empty input fields validation
    if (isNameValid === "" || isEmailValid === "" || isMessageValid === "") {
      nameAlert +=
        "<div class='alert alert-warning' role='alert'><h6 class='alert-para'>Please fill out all fields!</h6></div>";
      setTimeout(() => {
        document.getElementById("error-message").innerHTML = nameAlert;
      }, 1000);
      return false;
    }
    // name validation
    if (!isName(isNameValid)) {
      nameAlert +=
        "<div class='alert alert-warning' role='alert'><h6 class='alert-para'>Please enter a <span class='emphasise'>valid</span> name!</h6></div>";
      setTimeout(() => {
        document.getElementById("error-message").innerHTML = nameAlert;
      }, 1000);
      return false;
    } else if (!isNameTooShort(isNameValid)) {
      nameAlert +=
        "<div class='alert alert-warning' role='alert'><h6 class='alert-para'>The name you have entered is too short! Please try again.</h6></div>";
      setTimeout(() => {
        document.getElementById("error-message").innerHTML = nameAlert;
      }, 1000);
      return false;
    } else if (!isNameTooLong(isNameValid)) {
      nameAlert +=
        "<div class='alert alert-warning' role='alert'><h6 class='alert-para'>The name you have entered is too long! Please try again (max. 30 characters)</h6></div>";
      setTimeout(() => {
        document.getElementById("error-message").innerHTML = nameAlert;
      }, 1000);
      return false;
    }
    // email validation
    if (!isEmail(isEmailValid)) {
      emailAlert +=
        "<div class='alert alert-warning' role='alert'><h6 class='alert-para'>Please enter a <span class='emphasise'>valid</span> email address! e.g. <span class='emphasise'>yourname@gmail.com</span></h6></div>";
      setTimeout(() => {
        document.getElementById("error-message").innerHTML = emailAlert;
      }, 1000);
      return false;
    } else if (!isEmailTooShort(isEmailValid)) {
      emailAlert +=
        "<div class='alert alert-warning' role='alert'><h6 class='alert-para'>The email you have entered is too short! Please try again.</h6></div>";
      setTimeout(() => {
        document.getElementById("error-message").innerHTML = emailAlert;
      }, 1000);
      return false;
    } else if (!isEmailTooLong(isEmailValid)) {
      emailAlert +=
        "<div class='alert alert-warning' role='alert'><h6 class='alert-para'>The email you have entered is too long! Please try again (max. 100 characters)</h6></div>";
      setTimeout(() => {
        document.getElementById("error-message").innerHTML = emailAlert;
      }, 1000);
      return false;
    }
    // message validation
    if (!isMessageTooShort(isMessageValid)) {
      messageAlert +=
        "<div class='alert alert-warning' role='alert'><h6 class='alert-para'>Your message is too short! Please try again.</h6></div>";
      setTimeout(() => {
        document.getElementById("error-message").innerHTML = messageAlert;
      }, 1000);
      return false;
    } else if (!isMessageTooLong(isMessageValid)) {
      messageAlert +=
        "<div class='alert alert-warning' role='alert'><h6 class='alert-para'>Your message is too long! Please try again (max. 1,000 characters)</h6></div>";
      setTimeout(() => {
        document.getElementById("error-message").innerHTML = messageAlert;
      }, 1000);
      return false;
    }
    // generate a five digit number for the contact-number variable
    // this.contact_number.value = Math.random() * 100000;
    // these IDs from the previous steps
    emailjs
      .sendForm("gmail", "contact_form", e.target, "user_Xqu28mWZuK1KkKdLu5olD")
      .then(
        function (result) {
          document.getElementById("error-message").innerHTML = "";
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          // $("#modal-contact").modal();
          // console.log(result.text);
          setSuccess(true);
        },
        function (error) {
          setTimeout(() => {
            document.getElementById("error-message").innerHTML =
              "<div class='alert alert-danger' role='alert'><h6 class='alert-para'>We're sorry, but something's gone wrong... Please refresh the page and try again!</h6></div>";
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
          }, 3000);
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {!success && (
        <div className='container-contact'>
          <NavToggler />
          <form
            className='flex-centre form-contact'
            id='contact-form'
            method='POST'
            onSubmit={sendEmail}
            noValidate=''
          >
            <div className='form-logo'></div>
            <h6>
              Whether it's to report a bug or suggest a new feature, feel free
              to pop a brief summary below and we'll get back to you as soon as
              we can!
            </h6>
            <div className='form-group'>
              <div id='error-message'></div>
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                id='name'
                className='form-control'
                placeholder='Name'
              />
            </div>
            <div className='form-group'>
              <input type='hidden' name='contact_number' />
              <input
                type='email'
                name='email'
                id='email'
                className='form-control'
                placeholder='Email'
              />
            </div>
            <div className='form-group'>
              <textarea
                name='message'
                id='message'
                rows='5'
                placeholder='Please post your message here...'
              ></textarea>
            </div>
            <div>
              <button className='btn bg-blue-tokyo' type='submit'>
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
      )}
      {success && (
        <>
          <NavToggler />
          <SuccessHandler />
        </>
      )}
    </>
  );
};

export default Contact;
