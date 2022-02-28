import React from 'react';
import ReactDOM from 'react-dom';

// Hooks useState
import MultipleHook from './components/useState-in-actions/multiple-hook'
import ObjectHook from './components/useState-in-actions/object-hooks'

// Hooks useEffect
import InitWithFetch from './components/useEffect-in-actions/init-with-fetch'
import DynamicState from './components/useEffect-in-actions/dynamic-state'

ReactDOM.render(
  <React.StrictMode>
    {/* <MultipleHook /> */}
    {/* <ObjectHook /> */}
    {/* <InitWithFetch /> */}
    <DynamicState />
  </React.StrictMode>,
  document.getElementById('root')
);