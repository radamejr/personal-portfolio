import { useState, useEffect } from 'react';
import ContentComponent from '../components/content/content-component';
import './App.css';

const App = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const screenSize = (width > 768) ? (width > 1200) ? 'desktop' : 'tablet' : 'mobile'
  console.log(screenSize);
  return (
    <div className="container">
        <div className="parent-container">
          <ContentComponent deviceType={screenSize} />
        </div>   
    </div>
  )
}

export default App;
