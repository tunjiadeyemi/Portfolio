import { BrowserRouter } from 'react-router-dom';

import { About, Experience, Navbar, Tech } from './components';
import HorizontalScrollCarousel from './components/HorizontalScroll';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="z-50">
          <Navbar />
        </div>
        <div className="bg-white px-5 md:px-20 z-50 w-full mt-20">
          <About />
        </div>
        <div className="bg-white z-50 w-full pt-20">
          <Experience />
        </div>
        <div className="bg-white">
          <HorizontalScrollCarousel />
        </div>
        <div className="bg-white">
          <Tech />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
