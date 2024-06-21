// src/FixedButton.js
import React, { useState, useEffect } from 'react';

const FixedButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '60%', right: '4px', transform: 'translateY(50%)' }}>

      <a href="https://join.nobel.ac.id" target="_blank" rel="noopener noreferrer" className="block cursor-pointer group w-fit sm:hidden"
         style={{ transition: 'opacity 0.5s, transform 0.5s' }}
         onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img src="/images/join_now_merah.png" alt="join us" className="group-hover:opacity-70" width={"115px"}/>
      </a>
      <a href="https://join.nobel.ac.id" target="_blank" rel="noopener noreferrer" className="hidden sm:block"
         style={{ transition: 'opacity 0.5s, transform 0.5s' }}
         onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img src="/images/join_now_merah.png" alt="join us" className="group-hover:opacity-70" width={"115px"}/>
      </a>


    </div>
  );
};

export default FixedButton;