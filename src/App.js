
import './App.css';

import Form from './components/ContactForm/Form';
// import DisplayContact from './components/DIsplayContact/DisplayContact';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Form />
      {/* <DisplayContact /> */}
    </div>
  );
}

export default App;
