import React from 'react'


const Contact = () => { 
  const handleFormSubmit=(formData)=>{
      // console.log(formData.entries());
      const formInputData=Object.fromEntries(formData.entries());
      console.log(formInputData);
      
  };
  return (
    <section className='section-container'>
      <h2 className='conatiner-title'>Contact Us</h2> 

    <div className='contact-wrapper container'>
      <form action={handleFormSubmit}>
        <input 
        type="text"
        className='form-control'
         required autocomplete='off'
          placeholder='Enter your Name' 
          name='username'/>

           <input 
        type="email"
        className='form-control'
         required 
         autocomplete='off'
          placeholder='Enter your email' 
          name='email'/> 

          <textarea 
          className='form-control'
          rows='10'
          name="message"
          autoComplete='off'
          placeholder='Enter your Message '
          required
           ></textarea>
           <button type='submit' value='send'>Send</button>
      </form>
      </div>
    </section>
  )
}

export default Contact
