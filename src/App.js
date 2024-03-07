import './App.css';
import {Route, Routes } from 'react-router-dom';
import React from 'react'; 
import Home from './components/Home';
import Navbar from './components/MyNav';
import Features from './components/explore';
import Games from './components/games';
import YouTubeVideo from './components/YouTubeVideo';
import Videoquiz from './components/Videoquiz';
import Youtubepage from './components/Youtubepage';
import GameHome from './components/GameHome';
import Labour from './components/Labour';
import Participation from './components/Participation';
import GameBoard from './components/GameBoard';
import About from './components/About';
import Contact from './components/Contact';
import KnowYourRights from './components/KnowYourRights';
import MazeHome from './components/MazeHome';
import Levels from './components/MazeLevels';
import OneLevel from './components/OneLevel';
import TwoLevel from './components/TwoLevel';
import ThreeLevel from './components/ThreeLevel';
import FourLevel from './components/FourLevel';
import FiveLevel from './components/FiveLevel';
import SixLevel from './components/SixLevel';
import SevenLevel from './components/SevenLevel';
import EightLevel from './components/EightLevel';
import NineLevel from './components/NineLevel';
import TenLevel from './components/TenLevel';
import CandyAbout from './CandyAbout';
import CandyHome from './components/CandyHome';
import CandyGame from './components/CandyGame';
import Stories from './components/Stories';
import Read1 from './components/Read1';
import Read2 from './components/Read2';
import QuizPage1 from './components/Quiz1';
import QuizPage2 from './components/Quiz2';
import SubmittedInfo from './components/SubmittedInfo';
import DisplayEmoji from './components/DisplayEmoji';
import Kids from './components/Kids';
import Adults from './components/Adults';
import ProfileSelection from './components/ProfileSelection';
import Emergency from './components/Emergency';
import Rose from './components/Rose';
import DIY from './components/DIY';
import Pikachu from './components/Pikachu';
import Jumpingfrog from './components/Jumpingfrog';
import Login from './components/Login';
import LoginSignup from './components/LoginSignup';
import Education from './components/Education';

function App() {
  return (
    <div className='App'>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={<Features/>}/>
          <Route path="/Emergency" element={<Emergency/>}/>
          <Route path="/see" element={<Youtubepage/>}/>
          <Route path="/yt/:vid" element={<YouTubeVideo/>}/>
          <Route path="/vidquiz" element={<Videoquiz/>}/>
          <Route path="/games" element={<Games/>}/>
          <Route path="/stories" element={<Stories/>}/>
          <Route path="/story1" element={<Read1/>}/>
          <Route path="/story2" element={<Read2/>}/>
          <Route path="/jigsaw" element={<GameHome/>}/>
          <Route path="/part" element={<Participation/>}/>
          <Route path="/lab" element={<Labour/>}/>
          <Route path="/memg" element={<GameBoard/>}/>
          <Route path="/quiz1" element={<QuizPage1/>}/>
          <Route path="/quiz2" element={<QuizPage2/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Knr" element={<KnowYourRights/>}/>
          <Route path="/mazehome" element={<MazeHome/>}/>
          <Route path="/level" element={<Levels/>}/>
          <Route path="/one" element={<OneLevel/>}/>
          <Route path="/two" element={<TwoLevel/>}/>
          <Route path="/three" element={<ThreeLevel/>}/>
          <Route path="/four" element={<FourLevel/>}/>
          <Route path="/five" element={<FiveLevel/>}/>
          <Route path="/six" element={<SixLevel/>}/>
          <Route path="/seven" element={<SevenLevel/>}/>
          <Route path="/eight" element={<EightLevel/>}/>
          <Route path="/nine" element={<NineLevel/>}/>
          <Route path="/ten" element={<TenLevel/>}/>
          <Route path="/candyabout" element={<CandyAbout/>}/>
          <Route path="/candyhome" element={<CandyHome />} />
          <Route path="/candygame" element={<CandyGame />} />
          <Route path='/adults' element={<Adults/>}/>
          <Route path='/kids' element={<Kids/>}/>
          <Route path='/display-emoji/:emojiUrl' element={<DisplayEmoji/>}/>
          <Route path='/submitted/:emojiUrl/:name/:age' element={<SubmittedInfo/>}/>
          <Route path='/select' element={<ProfileSelection/>}/>
          <Route path='/diy' element={<DIY/>}/>
          <Route path='/pikachu' element={<Pikachu/>}/>
          <Route path='/frog' element={<Jumpingfrog/>}/>
          <Route path='/rose' element={<Rose/>}/>
          <Route path='/loginsignup' element={<LoginSignup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/education' element={<Education/>}/>
        </Routes>
      </div>
</div>
  );
}

export default App;


