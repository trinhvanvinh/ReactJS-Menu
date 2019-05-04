import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';

function App() {

  let links=[
    {label:'Home', link: '#home', active:true},
    {label:'About', link: '#about'},
    {label:'Portfolio', link: '#portfolio'},
    {label:'Contact Us', link: '#contact'},
  ]

  return (
    <div className="container center">
      <Header links={links} />
    </div>
  );
}

export default App;
