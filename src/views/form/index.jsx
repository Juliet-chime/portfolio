import React,{useState,useRef} from 'react'
 import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [done,setDone] = useState(false)
    const [message,setMessage] = useState("")

    const alertMessage = (status,message,time) => {
        setDone(status)
        setMessage(message)
    
    
    setTimeout(()=>{
        setDone(false)
        setMessage("")
    },time)
      }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9cjsmom', 'template_gmt5935', form.current, 'J5Xr9PRU8eunapyvD')
      .then((result) => {
        alertMessage(true,"Thanks for contacting me",3000)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };




  return (
    <section>
      <div className="container">
      <div className="row">
        <form className="form" ref={form} onSubmit={sendEmail}>
        <div>
          <h2>Contact me</h2>
        </div>
      <div style={{textAlign:"center",marginTop:"10px"}}>
      {done && <span style={{color:"#f7d41b",fontWeight:"700"}}>{message}</span>}
      </div>
     
          <label htmlFor="">
            Name
          </label>
          <input type="text" placeholder="name" name="to_name" />
          <label htmlFor="">
            Email
          </label>
          <input type="text" placeholder="email" name="from_name"/>
          <label htmlFor="">
            Message
          </label>
          <textarea id="" cols="30" rows="10" placeholder="" style={{marginBottom:"none",height: "150px",resize:"none"}} name="message"></textarea>
          <button type="submit">Send a message</button><br/>
         
        </form>
      </div>
      </div>
      </section>
  )
}

export default Contact