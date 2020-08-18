import React from 'react';
import './App.css';
import Component from './profile/component';

function App() {
  
  return (
    <div className="App">
      <Component name="leonardo dicaprio" bio=" was born in 11 novembre 1974 " profession="film producer" />
      


      


<div style={{position:'relative',width:"180px",height:"40px",overflow:'hidden'}}>
  <div style={{position:'absolute ',top:"-262px",left:"0px"}}>
    <iframe  width="300" height="300" frameborder="0" src={"https://www.youtube.com/embed/U9FzgsF2T-s?autoplay=1&amp;rel=0" }>
    </iframe>
  </div>
</div>


    </div>
  );
}

export default App;
