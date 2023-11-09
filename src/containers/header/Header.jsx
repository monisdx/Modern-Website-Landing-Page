import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div className='gpt3_header section_padding' id="home">
      <div className='gpt3_header-content'>
        <h1 className='gradient_text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way every joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3_header-content-input'>
          <input type="email" placeholder='Your Email Address' />
          <button type="button">Get Started</button>
        </div>
        <div className='gpt3_header-content-people'>
          <img src={people} />
          <p>16,000 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className='gpt3_header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )

}

export default Header