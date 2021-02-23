// Dependency Imports
import React from 'react';
// Trainer Imports
import inniTrainer from '../../images/lake-inniscarra-trainer.jpg';
import performanceTrainer from '../../images/performance-series-trainer.jpg';
import rowTrainer from '../../images/slow-pulls-trainer.jpg';
import tonedTrainer from '../../images/20-minutes-to-toned-trainer.jpg';
import charlesTrainer from '../../images/charles-race-trainer.jpg';
import hiitTrainer from '../../images/full-body-hiit-trainer.jpg';
import kafueTrainer from '../../images/kafue-river-trainer.jpg';
import shredTrainer from '../../images/shred-and-burn-trainer.jpg';
// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cards.css';

export default function Cards() {
  return (
    <div className='cards'>
      <div className='full-card card-1'>
        <div className='image-1'></div>
        <div className='card-info'>
          <h2> Lake Inniscarra, Ireland— Pyramid </h2>
          <img src={inniTrainer} alt='trainer profile' className='profile' />
        </div>
        <div className='stats'>
          <FontAwesomeIcon style={{ fontSize: '15px' }} icon='clock' />{' '}
          <span> 30:53 </span>
          <FontAwesomeIcon style={{ fontSize: '15px' }} icon='mouse' />{' '}
          <span> 6,248 M </span>
        </div>

        <h2 className='view-details-btn'>
          {' '}
          <a href='#'>VIEW DETAILS</a>{' '}
        </h2>
      </div>
      <div className='full-card card-2'>
        <div className='image-2'>
          <h2>
            {' '}
            <span>9</span> WORKOUTS
            <FontAwesomeIcon
              style={{
                fontSize: '30px',
                marginLeft: '48px',
                marginTop: '20px',
              }}
              icon='list'
            />{' '}
          </h2>
        </div>
        <div className='card-info'>
          <h2> Performance Series </h2>
          <img
            src={performanceTrainer}
            alt='trainer profile'
            className='profile'
          />
        </div>
        <h2 className='view-details-btn'>
          {' '}
          <a href='#'>VIEW DETAILS</a>{' '}
        </h2>
      </div>
      <div className='full-card card-3'>
        <div className='image-3'></div>
        <div className='card-info'>
          <h2> Slow Pulls and Fast Intervals </h2>
          <img src={rowTrainer} alt='trainer profile' className='profile' />
        </div>
        <div className='stats'>
          <FontAwesomeIcon style={{ fontSize: '15px' }} icon='clock' />{' '}
          <span> 44:13 </span>
          <FontAwesomeIcon style={{ fontSize: '15px' }} icon='mouse' />{' '}
          <span> 9,948 M </span>
        </div>
        <h2 className='view-details-btn'>
          {' '}
          <a href='#'>VIEW DETAILS</a>{' '}
        </h2>
      </div>
      <div className='full-card card-4'>
        <div className='image-4'>
          <h2>
            {' '}
            <span>12</span> WORKOUTS
            <FontAwesomeIcon
              style={{
                fontSize: '30px',
                marginLeft: '48px',
                marginTop: '20px',
              }}
              icon='list'
            />{' '}
          </h2>
        </div>
        <div className='card-info'>
          <h2> 20 Minutes to Toned </h2>
          <img src={tonedTrainer} alt='trainer profile' className='profile' />
        </div>
        <h2 className='view-details-btn'>
          {' '}
          <a href='#'>VIEW DETAILS</a>{' '}
        </h2>
      </div>
      <div className='full-card card-5'>
        <div className='image-5'></div>

        <div className=' card-info'>
          <h2> Charles Race, Boston, Massachusetts </h2>
          <img src={charlesTrainer} alt='trainer profile' className='profile' />
        </div>
        <div className='stats'>
          <FontAwesomeIcon style={{ fontSize: '15px' }} icon='clock' />{' '}
          <span> 36:22 </span>
          <FontAwesomeIcon style={{ fontSize: '15px' }} icon='mouse' />{' '}
          <span> 8,648 M </span>
        </div>
        <h2 className='view-details-btn'>
          {' '}
          <a href='#'>VIEW DETAILS</a>{' '}
        </h2>
      </div>
      <div className='full-card card-6'>
        <div className='image-6'>
          <h2>
            {' '}
            <span>12</span> WORKOUTS
            <FontAwesomeIcon
              style={{
                fontSize: '30px',
                marginLeft: '48px',
                marginTop: '20px',
              }}
              icon='list'
            />{' '}
          </h2>
        </div>
        <div className='card-info'>
          <h2> Full-Body HIIT Series </h2>
          <img src={hiitTrainer} alt='trainer profile' className='profile' />
        </div>
        <h2 className='view-details-btn'>
          {' '}
          <a src='#'>VIEW DETAILS</a>{' '}
        </h2>
      </div>
      <div className='full-card card-7'>
        <div className='image-7'></div>
        <div className='card-info'>
          <h2> Kafue River, Zambia— Power Stroke Pyramid </h2>
          <img src={kafueTrainer} alt='trainer profile' className='profile' />
        </div>
        <div className='stats'>
          <FontAwesomeIcon style={{ fontSize: '15px' }} icon='clock' />{' '}
          <span> 22:22 </span>
          <FontAwesomeIcon style={{ fontSize: '15px' }} icon='mouse' />{' '}
          <span> 4,660 M </span>
        </div>
        <h2 className='view-details-btn'>
          {' '}
          <a href='#'>VIEW DETAILS</a>{' '}
        </h2>
      </div>
      <div className='full-card card-8'>
        <div className='image-8'>
          <h2>
            {' '}
            <span>16</span> WORKOUTS
            <FontAwesomeIcon
              style={{
                fontSize: '30px',
                marginLeft: '48px',
                marginTop: '20px',
              }}
              icon='list'
            />{' '}
          </h2>
        </div>
        <div className='card-info'>
          <h2> Shred & Burn Series </h2>
          <img src={shredTrainer} alt='trainer profile' className='profile' />
        </div>
        <h2 className='view-details-btn'>
          {' '}
          <a href='#'>VIEW DETAILS</a>{' '}
        </h2>
      </div>
    </div>
  );
}
