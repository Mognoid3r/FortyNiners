import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
// import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import WhyUs from './components/WhyUs/WhyUs';

import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <Plans /> */}
      <Programs />
      <WhyUs />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
