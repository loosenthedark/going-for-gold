import React from "react";
import NavToggler from "../components/NavToggler";

const Contact = () => {
  return (
    <>
      <div className='container-contact'>
        <NavToggler />
        <form className='flex-centre form-contact' method='POST' noValidate=''>
          <div className='form-logo'></div>
          <h6>
            Whether it's to report a bug or suggest a new feature, feel free to
            pop a brief summary below and we'll get back to you as soon as we
            can!
          </h6>
          <div className='form-group'>
            {/* <div id='error-message' className='mt-1 mt-xl-0'></div> */}
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
            {/* <input type='hidden' name='contact_number' /> */}
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
    </>
  );
};

export default Contact;
