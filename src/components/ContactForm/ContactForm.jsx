import React from 'react';
import "./ContactForm.css"

export default function ContactForm() {

  return (
    <div className='ContactFormContainer'>

      <form className='ContactForm' action="https://getform.io/f/1b989789-3008-47a5-95e4-39216774a434" method="POST">
      {/* <div className='ContactFormTitle'>Contact Me</div> */}
        <div className='ContactFormArea'>

          <div className='ContactFormName'>
            <input type="text" name="name" placeholder='Your Name' />
            <input type="email" name="email" placeholder='Your Email' />
          </div>
          <textarea className='ContactMessage' rows='4' style={{resize:'none'}} type="text" name="message" placeholder='Type your message here'/>

        </div>

        <button className='ContactFormButton' type="submit">Submit</button>

      </form>
    </div>
  )
}