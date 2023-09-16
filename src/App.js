import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar.js';
import FAQ from './components/FAQ.js';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './matrix.js';

function App() {
  return (
    <div className="App">
      <NavBar />
       <div id="home" className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">HackOMSCS</h1>
        <p className="lead font-weight-normal">OMSCS's First Hackathon.</p>
        <a className="btn btn-outline-secondary" href="#">Apply Now</a>
      </div>
      <div id="about" className="col-md-5 p-lg-5 mx-auto my-5">
        <h2 className="display-7 font-weight-normal">About</h2>
        <p className="lead font-weight-normal">Hack OMSCS is a 24-hour virtual hackathon. This event aims to join OMSCS students from around the world to solve novel challenges, win exciting prizes, and meet loads of new friends! This event is open to everyone and is an opportunity for students of all backgrounds, skill levels, and experiences to innovate and showcase their ideas. Whether you are a first-time hacker or a seasoned veteran, we encourage you to enter hackOMSCS with enthusiasm and curiosity. Our hope is that you challenge yourself with a fun project, learn something new along the way, and feel proud of what you accomplished at the end of it all.</p>
      </div>
      <div>
      </div>
      <div id="FAQ" className="col-md-5 p-lg-5 mx-auto my-5">
        <h2 className="display-7 font-weight-normal">Frequently Asked Questions</h2>
        <FAQ question = "What is hackOMSCS?" answer="HackOMSCS is a 24-hour virtual hackathon taking place on [DATE]. HackOMSCS is free to register and participate. It is entirely student run, and open to anyone!"/>
        <FAQ question = "What is a hackathon?" answer="Hackathons are often described as a hybrid between a career fair and a science fair. A creative community of programmers - from novices to experienced - come together for 24 hours to make amazing projects. The projects are then judged by tech professionals from industry and academia, and winners receive awesome prizes!"/>
        <FAQ question = "It's My First Hackathon. Should I apply?" answer="Yes! Experience is not required. Hackathons are open creative and learning environments for everyone. There is also a competition category for first hack!"/>
        <FAQ question = "I have more questions..." answer="Email us at thiswillbeour@email.edu"/>
      </div>
      <div id="schedule" className="col-md-5 p-lg-5 mx-auto my-5">
        <h2 className="display-7 font-weight-normal">Schedule</h2>
        <p className="lead font-weight-normal">Coming Soon!</p>
      </div>
      <div id="sponsors" className="col-md-5 p-lg-5 mx-auto my-5">
        <h2 className="display-7 font-weight-normal">Sponsors</h2>
        <p className="lead font-weight-normal">Coming Soon!</p>
      </div>
      <footer class="mt-auto">
      <p>Footer here with website icons and social media links</p>
    </footer>
    </div>
    
    

  );
}




/**
 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */

export default App;
