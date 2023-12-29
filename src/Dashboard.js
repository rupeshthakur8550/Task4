import React from 'react';
import Bar1 from './Bar1'; // Assuming the file is in the same directory
import Bar2 from './Bar2';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h2>Visualization 1</h2>
        <Bar1 />
      </div>
      <div style={{ flex: 1 }}>
        <h2>Visualization 2</h2>
        <Bar2 />
      </div>
    </div>
  );
};

export default Dashboard;
