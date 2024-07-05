import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5b23a840-f363-497a-a61d-e664a3e47a45");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert("Email Send successfully",res);
    }
  };
  return (
    <div id="contact" className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt=''/>
       </div>
      <div className='contact-section'>
      <div className='contact-left'>
        <h1>Let`s talk</h1>
        <p>I am currently available to take new project and have been ready and passionate to doing new internship and projects</p>
        <div className='contact-details'   >
      <div className='contact-detail'>
       <img src={mail_icon} alt=''/>
       <p>smartyprem@gmail.com</p>
      </div>
      <div className='contact-detail'>
      <img src={call_icon} alt=''/>
      <p>+91-6375787368</p> 
      </div>
        <div className='contact-detail'>
        <img src={location_icon} alt=''/>
        <p>Jodhpur,Rajasthan,India</p>
        </div>
        </div>
      </div>
      <form onSubmit={onSubmit} className='contact-right'>
        <label htmlFor=''>Your Name</label>
        <input type='text' placeholder='Enter the name' name='name'/>
        <label htmlFor=''>E-mail</label>
        <input type='email' placeholder='Enter the email'/>
        <label htmlFor=''>Write The Message here</label>
        <textarea name='message' id='' cols="30" rows="8" placeholder='Enter the message'></textarea>
        <button type="submit" className='contact-submit'>Submit now</button>
        </form>
    </div>
    </div>
  )
}
export default Contact
