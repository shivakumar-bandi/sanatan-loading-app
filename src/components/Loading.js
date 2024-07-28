import React, { useEffect, useState } from 'react';
import './Loading.css';

const Loading = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowThankYou(true);
    }, 3000); // Show "THANK YOU" after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-container">
      {showThankYou ? (
        <h1 className="thank-you">THANK YOU</h1>
      ) : (
        <>
          <div className="loader"></div>
          <h1 className="coming-soon">Coming Soon</h1>
        </>
      )}
    </div>
  );
};

export default Loading;
