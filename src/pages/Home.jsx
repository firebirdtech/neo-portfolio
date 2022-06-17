import React from 'react'
import { LinkedIn } from '@material-ui/icons'
import GithubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Living in techno-verse</h2>
        <div className='prompt'>
          <p>
            Building technologies with 💗 and ☕ 
          </p>
          
          <div className='home-links'>
            <a className='external' href='https://www.linkedin.com/in/neel-guria-ab0a16137/' target="_blank">
              <LinkedIn />
            </a>
            <a className='external' href='https://github.com/neelratanguria' target="_blank">
              <GithubIcon />
            </a>
            <a className='external' href='mailto:neelratan@live.com'>
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              Native Android, React Native, React js, Redux, MaterialUI, TailwindCSS
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MongoDB, AWS, Fargate, Serverless, Flask, Django, MySQL, Elastic Computing
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              JavaScript, Java, Python, C, Embedded C, C++, MATLAB
            </span>
          </li>
          <li className='item'>
            <h2>Hardware</h2>
            <span>
              STM32, Raspberry Pi, Jetson Nano, nRF52, Arduino, ESP32
            </span>
          </li>
          <li className='item'>
            <h2>Experience</h2>
            <span>
              Machine Learning, Deep Learning, Desktop App, Mobile App, Web, Image Processing, Signal Processing, BLE Fireware, Data analytics, Visualization, Networking, Cloud Computing, DevOps CI/CD, Edge Computing, Electronics Design, Software System Design, UI/UX
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home