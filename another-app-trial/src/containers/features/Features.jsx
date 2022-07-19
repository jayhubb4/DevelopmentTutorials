import React from 'react';
import { Feature } from '../../components';
import './Features.css';

const featuresData = [
  {
    title: 'Improving distrusts instantly',
    text:   'Trust is earned. Allow us to earn yours.'
  },
  {
    title: 'Becoming the tended active',
    text:   'Trust is earned. Allow us to earn yours.'
  },
  {
    title: 'Message or nothing',
    text:   'Trust is earned. Allow us to earn yours.'
  },
  {
    title: '3 Laws',
    text:   'Trust is earned. Allow us to earn yours.'
  }
]
const Features = () => {
  return (
    <div>
        <div className='gpt3__features secyion__padding' id='features'>
          <div className='gpt3__features-heading'>
            <h1 className='gradient__text'>The Future is NOW. You Just Need to Realize It. Step Into the Future Today and Let's Make it Happen</h1>
            <p>Request Early Access to get Started</p>
          </div>
          <div className='gpt3__features-container'>
            {featuresData.map((item, index) => (
              <Feature title={item.title} text={item.text} key={item.title + index}/>
              ))}
          </div>
        </div>


    </div>
  )
}

export default Features