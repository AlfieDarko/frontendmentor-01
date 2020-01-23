import React, { PureComponent } from 'react'
import 'normalize.css';
import '../styles/main.scss'

const Main = () => (
  <div className="container">
    <div className="sales-copy__container">
      <h1 className="sales-copy__header">
        Learn to code by watching others
      </h1>
      <p className="sales-copy__paragraph">
        See how experienced developers solve problems in real-time. <br></br>
        Watching scripted tutorials is great, but understanding how developers
        think is invaluable
      </p>
    </div> 

      <div className="lead-gen__container">
        <div className="lead-gen__offer">
          <p className="lead-gen__offer--font-weight-200">
            <strong>Try it free 7 days</strong> then $20/mo. thereafter
          </p>
        </div>

        <form className="lead-gen__form lead-gen--box-shadow" action="" method="post">
          <input className="lead-gen__input" type="text" name="firstname" value="First Name"/>
          <input className="lead-gen__input" type="text" name="lastname" value="Last Name"/>
          <input className="lead-gen__input" type="text" name="email" value="Email Address"/>
          <input className="lead-gen__input" type="text" name="password" value="Password"/>


          <div className="lead-gen__btn">
            <span className="lead-gen__btn--text-size-16">CLAIM YOUR FREE TRIAL</span> 
          </div>

          <p className="lead-gen__small-print">
              By clicking the button you are agreeing to our <span className="lead-gen__small-print--important">Terms and Services</span>
          </p>
        </form>  
      </div>
  </div>
)

export default Main