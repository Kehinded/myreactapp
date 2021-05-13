import logo from './images/logo.svg';
import mockup from "./images/illustration-mockups.svg"
import './App.css';

function App() {
  return (
    <>
      <header>
        <img src = {logo} alt = "images"></img>
      </header>

      <main>
      
      <img src = {mockup} alt = "images" ></img>

      <div className = "content">
        <h2>Build the community your fans will love</h2>
        <p>lakadlh jgdbwjvwfdh habhfyvhwv hafw ghvdwwfwwjdjh fxvgdtgd gadsdw hffssvdw thdsvwvdd fhsjag</p>
        <button>register</button>
      </div>

      </main>

      <footer>
      <i class="fab fa-facebook-f fa-2x"></i>
      <i class="fab fa-whatsapp fa-2x"></i>
      <i class="fab fa-twitter fa-2x"></i>
      <i class="fab fa-instagram fa-2x"></i>
      </footer>
    </>
  );
}

export default App;
