import './App.css';
import Menu from './Menu';
import headshot from './headshot.jpeg';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
     <Menu />
     <div className="biocontainer">
      <div className="bioimagecontainer">
        <div className="bioimage">
          <img src={headshot} alt="headshot" className="bioimagesize" />
        </div>
      </div>
     </div>
     <p className="intro">Ciao, I'm Kyle, a software engineer living in San Francisco, CA. I'm currently searching for fullstack, frontend, and backend engineering roles.
     Feel free to reach out, let's talk! 
     <br /> <br /> My interests include: golf 🏌🏾, running 🏃🏾‍♂️, drinking delicious wine &#x1F377;, playing cello 🎻, and traveling 	&#x1f6f8;</p>
    <Projects />
    </div>
  );
}

export default App;
