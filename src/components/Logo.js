import React from 'react';

const Logo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Simple Location Pin + Camera Icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#4CAF50"/>
        <circle cx="12" cy="9" r="2.5" fill="white"/>
      </svg>

      <h1 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 'bold', color:'white' }}>
        Cinespot
      </h1>
    </div>
  );
};

export default Logo;
