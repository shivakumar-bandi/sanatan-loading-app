import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import MainContent from './components/MainContent';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Use the correct environment variable name

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? <Loading /> : <MainContent />}
    </div>
  );
};

export default App;
