import React, { useState, useEffect } from 'react';

const Clicker = () => {
  const [clicks, setClicks] = useState(0);
  useEffect(() => {
    document.title = `${clicks} clicks!`;
  });

  return (
    <p>
      <button
        onClick={() => {
          setClicks(clicks + 1);
        }}
      >
        Click me! ({clicks})
      </button>
    </p>
  );
};
