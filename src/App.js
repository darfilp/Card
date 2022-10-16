import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import SingleCard from './components/Card/SingleCard';
import { Input } from 'antd';
import Delete from './Delete';
import { observer } from 'mobx-react-lite';

const cardImg = [
  {'src': './img/helmet-1.png', 'flag': false},
  {'src': './img/potion-1.png', 'flag': false},
  {'src': './img/ring-1.png', 'flag': false},
  {'src': './img/scroll-1.png', 'flag': false},
  {'src': './img/shield-1.png', 'flag': false},
  {'src': './img/sword-1.png', 'flag': false},
];

const App = observer(() => {
  return (
    <div className="App">
      <Input placeholder="Basic usage" value={Delete.value} onChange={(e) => Delete.setInput(e)}/>
      <button onClick={() => Delete.deleteInput()}>Delete</button>
    </div>
  );
})

export default App

//_rfc