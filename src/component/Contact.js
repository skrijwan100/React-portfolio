import React, { useRef, useState } from 'react'
import Lodeing from './Lodeing'


export default function Contact({ navhide, showalert }) {
  const [load, setload] = useState(false)
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzn9GN6WbIQYGx0Im8Qzspa4hOAsMelfYFlvR5rZVXrBaDEDynTn6vocbfuzOPozLW6/exec'
  const form = useRef()

  const hendleclick = (e) => {
    e.preventDefault()
    setload(true)
    fetch(scriptURL, { method: 'POST', body: new FormData(form.current) })
      .then(response => {
        showalert("Message sent successfully")
        form.current.reset()
        setload(false)
      })
      .catch(error => console.error('Error!', error.message))


  }
  return (
    <div style={{ width: "100vw", backgroundColor: "#151515" }}>
      <div className="main-box" style={{ marginLeft: navhide ? "88px" : "220px", transition: "margin-left 0.4s ease-in-out", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <div className="form-card1">
          <div className="form-card2">
            <form onSubmit={hendleclick} ref={form} className="form">
              <h1 className="form-heading">Get In Touch</h1>

              <div className="form-field">
                <input required placeholder="Name" className="input-field" type="text" name='username'
                />
              </div>

              <div className="form-field">
                <input
                  required
                  placeholder="Email"
                  className="input-field"
                  type="email"
                  name='email'

                />
              </div>

              <div className="form-field">
                <input
                  required
                  placeholder="Subject"
                  className="input-field"
                  type="text"
                  name='subject'

                />
              </div>

              <div className="form-field">
                <textarea
                  required
                  placeholder="Message"
                  cols="30"
                  rows="3"
                  className="input-field"
                  name='message'
                  style={{resize:"none"}}

                ></textarea>
              </div>

              <button className="sendMessage-btn">{load ? <div><Lodeing/> Sending...</div> : "Send Message"}</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
