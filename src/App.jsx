import React, { useState } from 'react';

const PigFeederGame = () => {
const [level, setLevel] = useState(0);

const feedPig = (points) => {
  setLevel(level + points);
};

  const resetGame = () => {
    setLevel(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Level : {level}</h1>

      <img
        src={
          level > 100
            ? '/self.png'
            : '/pig.png'
        }
        alt="Pig"
        style={{
          width: `${200 + level}px`,
          height: `${200 + level}px`,
          transition: 'width 0.3s, height 0.5s',
        }}
      />

      <div style={{ marginTop: '20px' }}>
        <h2>ป้อนอาหารให้หมูเด้ง</h2>

      <div style={{ display: 'inline-block', textAlign: 'center', margin: '10px' }}>
      <img
        src="/watermelon.png"
        alt="Watermelon"
        style={{ width: '100px', cursor: 'pointer' }}
        onClick={() => feedPig(5)}
      />
      <p>ให้เเตงโม (+5)</p>
      </div>

      <div style={{ display: 'inline-block', textAlign: 'center', margin: '10px' }}>
      <img
        src="/pumpkin.png"
        alt="Pumpkin"
        style={{ width: '100px', cursor: 'pointer' }}
        onClick={() => feedPig(10)}
      />
      <p>ให้ฟักทอง (+10)</p>
      </div>

      <div style={{ display: 'inline-block', textAlign: 'center', margin: '10px' }}>
      <img
        src="/grass.png"
        alt="Grass"
        style={{ width: '100px', cursor: 'pointer' }}
        onClick={() => feedPig(20)}
      />
      <p>ให้หญ้า (+20)</p>
      </div>

      </div>


      {level > 100 && (
        <div style={{ marginTop: '20px' }}>
          <button onClick={resetGame}>เริ่มใหม่</button>
        </div>
      )}
    </div>
  );
};

export default PigFeederGame;
