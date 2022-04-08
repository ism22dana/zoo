import Footer from './Footer.js';
import './App.css';
import Nav from './Nav.js';
import Header from './Header.js';
import Main from './Main.js';

const App = () => {
  return (<div>
    <div className='app-wrapper'>
        <Header />
      <Main />
      <Footer />
    </div>
    <div>
    <Nav />
    </div>
    </div>
  );
}

export default App;