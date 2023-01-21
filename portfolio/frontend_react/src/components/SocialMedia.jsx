import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href="https://www.facebook.com/dotcomdv/">
            <div>
                <FaFacebookF />   
            </div>
        </a>
        <a href="https://www.instagram.com/dotcomdv/">
            <div>
                <BsInstagram />
            </div>
        </a>
        <a href="https://www.instagram.com/dotcomdv/">
            <div>
                <FaLinkedinIn />
            </div>
        </a>
        <a href="https://www.github.com/jayhubb4">
            <div>
                <FaGithub />
            </div>
        </a>
    </div>
  )
}

export default SocialMedia