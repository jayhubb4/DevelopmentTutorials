import React from 'react';
import './WhatGPT3.css';
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div>
        <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
          <div className='gpt3__whatgpt3-feature'>
            <Feature title="What is GPT-3" text="What is difficulty? What is strenuous? What is tedious? These things can be an object of the past. Let us help you expand your future's horizon." />
          </div>
          <div className='gpt3__whatgpt3-heading'>
            <h1 className='gradient__text'>The Possibilities are Beyond Your Imagination</h1>
            <p>Explore the Library</p>
          </div>
          <div className='gpt3__whatgpt3-container'>
            <Feature title="Chatbots" text="What is difficulty? What is strenuous? What is tedious? These things can be an object of the past. Let us help you expand your future's horizon." />
            <Feature title="Knowledgebase" text="What is difficulty? What is strenuous? What is tedious? These things can be an object of the past. Let us help you expand your future's horizon." />
            <Feature title="Education" text="What is difficulty? What is strenuous? What is tedious? These things can be an object of the past. Let us help you expand your future's horizon." />
          </div>
        </div>
    </div>
  )
}

export default WhatGPT3