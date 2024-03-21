import { useEffect, useState } from 'react';
import './App.css';
import Spline from '@splinetool/react-spline';
import Wrapper from './components/wrapper/Wrapper';
import Content from './components/content/Content';
import Social from './components/social/Social';
import Menu from './components/menu/Menu';
import Logo from '../public/images/logo.svg';
import IconTwitter from '../public/images/icon-twitter.svg';
import IconYoutube from '../public/images/icon-youtube.svg';
import IconLaptop from '../public/images/icon-laptop.svg';

function App() {
  const [showSpline, setShowSpline] = useState(true);
  return(
    <main>
      <Wrapper>
        <Spline  className="spline" scene="https://prod.spline.design/ZRJCH4sL-ZHSJr9p/scene.splinecode" />
        <Content mustShow={showSpline} handleButton={() => setShowSpline((prev) => !prev)}>
          <Menu>
            <li><img src={Logo} alt="Logo" /></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">Download</a></li>
            <li><a href="/">App</a></li>
            <li><a href="/">Login</a></li>
            <li><button>Get Started</button></li>
          </Menu>
          <div>
            <h1>Collaborate with people</h1>
            <p>Bring your team together and build your community by using our cross-platform</p>
            <button onClick={() => setShowSpline((prev) => !prev)}>
              <img src={IconLaptop} alt="Download" />
            </button>
          </div>
        </Content>
        <Social mustShow={showSpline}>
          <div>
            <img src={IconTwitter} alt="Twitter" />
            <img src={IconYoutube} alt="Youtube"/>
          </div>
        </Social>
      </Wrapper>
      <button 
      style={{display : showSpline && "none"}}
      className={`showSpline`} 
      onClick={() => setShowSpline((prev) => !prev)}>Show</button>
    </main>
  )
}

export default App;