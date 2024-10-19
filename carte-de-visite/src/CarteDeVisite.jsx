import React from 'react';
import { IoIosPhonePortrait } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import composantImage from './assets/composant.png';
import './CarteDeVisite.css';

function CarteDeVisite() {
  return (
    <div className='container'>
      <div className='Image'>
        <img src={composantImage} alt="Carte de visite" className='Image' />
      </div>
      <div className='CarteDeVisite'>
        <div className='CarteDeVisite__titre'>
          <h1>Akerlie Lafleur</h1>
          <p>Étudiante en Développement Web</p>
        </div>
        <div className='CarteDeVisite__contact'>
          <div className='CarteDeVisite__contact__icon'>
            <IoIosPhonePortrait />
            <p className='contact-info'>514-970-1234</p>
          </div>
        </div>
        <div className='CarteDeVisite__mail'>
          <div className='CarteDeVisite__mail__icon'>
            <MdMarkEmailRead />
            <p className='contact-info'>akalaf1998@gmail.com</p>
          </div>
        </div>
        <div className='CarteDeVisite__github'>
          <a href="https://github.com/AKA29-KL" target="_blank" rel="noopener noreferrer" className='CarteDeVisite__github__icon'>
            <FaGithub />
            <span className='contact-info'>AKA29-KL</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarteDeVisite;
