import React from 'react';
import ReactDOM from 'react-dom';
import MultipleHook from './components/useState-in-actions/multiple-hook'
import ObjectHook from './components/useState-in-actions/object-hooks'

ReactDOM.render(
  <React.StrictMode>
    <MultipleHook />
    {/* <ObjectHook /> */}
  </React.StrictMode>,
  document.getElementById('root')
);