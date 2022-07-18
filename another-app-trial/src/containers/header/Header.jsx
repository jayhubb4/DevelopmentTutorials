import React from 'react';
import './Header.css';
import people from '../../assets/people.png'
import AI from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Let's Build Something Amazing with GPT-3 Open AI</h1>
          <p>Ther's so much that awaits us. So many meaningless tasks that grow ever so tedious. Let us do these for you. Automation. Advancement. Innovation. AI.</p>
          <div className='gpt3__header-content__input'>
            <input type="email" placeholder='Your E-Mail Address'></input>
            <button type='button'>Get Started</button>
          </div>
          <div className='gpt3__header-content__people'>
            <img src={people} alt="people" />
            <p>1,600 people requested access in the last 24 hours</p>
          </div>
        </div>
      <div className='gpt3__header-image'>
          <img src={AI} alt="AI" />
      </div>
    </div>
  )
}

export default Header