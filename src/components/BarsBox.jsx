import React from 'react';

const BarsBox = () => (
  <div className="bars-box active">
    {[6, 5, 4, 3, 2, 1].map(i => (
      <div className="bar" key={i} style={{ "--i": i }}></div>
    ))}
  </div>
);

export default BarsBox;
