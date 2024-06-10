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
    <div>

      <a href="https://join.nobel.ac.id" target="_blank" rel="noopener noreferrer" className="fixed top-8 right-4 cursor-pointer group w-fit block sm:hidden"
         style={{ transition: 'opacity 0.5s, transform 0.5s' }}
         onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img src="/images/join_now_merah.png" alt="join us" className="group-hover:opacity-70" width={"115px"}/>
      </a>
      <a href="https://join.nobel.ac.id" target="_blank" rel="noopener noreferrer" className="fixed top-8 right-4 cursor-pointer group hidden sm:block"
         style={{ transition: 'opacity 0.5s, transform 0.5s' }}
         onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img src="/images/join_now_merah.png" alt="join us" className="group-hover:opacity-70" width={"115px"}/>
      </a>


      {/*    <button */}
{/*      className={`fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none}`}*/}
{/*      style={{ transition: 'opacity 0.5s' }}*/}
{/*    >*/}
{/*Join US*/}
{/*    </button>*/}
    
    </div>
  );
};

export default FixedButton;