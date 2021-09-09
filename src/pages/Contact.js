import React from "react";
import NavToggler from "../components/NavToggler";

const Contact = () => {
  return (
    <>
      <div className='container-contact'>
        <NavToggler />
        <form className='flex-centre form-contact' method='POST' noValidate=''>
          <div className='form-logo p-3 mb-xl-4 fas fa-laptop-code laptop-circle d-lg-flex align-items-center justify-content-center mx-auto'></div>
          <h6 className='text-white mx-auto mb-4 mt-md-4 mb-md-4_5 mb-xl-0 d-xl-none'>
            Whether it's to report a bug or suggest a new feature, feel free to
            pop a brief summary below and we'll get back to you as soon as we
            can!
          </h6>
          <div className='form-group mx-auto mb-xl-0 mx-xl-5'>
            <div id='error-message' className='mt-1 mt-xl-0'></div>
          </div>
          <div className='form-group mx-auto mx-xl-5'>
            <input
              type='text'
              name='name'
              id='name'
              className='form-control'
              placeholder='Name'
            />
          </div>
          <div className='form-group mx-auto mx-xl-5'>
            <input type='hidden' name='contact_number' />
            <input
              type='email'
              name='email'
              id='email'
              className='form-control'
              placeholder='Email'
            />
          </div>
          <div className='form-group mx-auto mb-4 mb-xl-3 mx-xl-5'>
            <textarea
              className='w-100'
              name='message'
              id='message'
              rows='5'
              placeholder='Please post your message here...'
            ></textarea>
          </div>
          <div className='mb-2 mb-xl-0'>
            <button
              className='btn btn-send btn-sm bg-blue-tokyo py-3 px-5 mt-md-1 mb-md-4 mb-xl-0'
              type='submit'
            >
              <span className='text-see-more' id='text-send'>
                Send
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
