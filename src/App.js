import './App.css';
import CVleft from './Cv-leftSide.js';
import CVmiddle from './Cv-middle.js'

function App() {
  return (
    <div className="container">
      <aside>
        <div className="inner">
          <CVleft />
        </div>
      </aside>
      <main>
        <div className="inner">
          <CVmiddle/>
        </div>
      </main>
    </div>
  );
}

export default App;
