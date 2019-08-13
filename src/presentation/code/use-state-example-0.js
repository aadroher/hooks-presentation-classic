import React, { useState } from 'react';

const Clicker = () => {
  const [clicks, setClicks] = useState(0);

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
