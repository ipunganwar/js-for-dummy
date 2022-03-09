import React from 'react';
import ReactDOM from 'react-dom';

// Hooks useState
import MultipleHook from './components/useState-in-actions/multiple-hook'
import ObjectHook from './components/useState-in-actions/object-hooks'

// Hooks useEffect
import InitWithFetch from './components/useEffect-in-actions/init-with-fetch'
import DynamicState from './components/useEffect-in-actions/dynamic-state'

// Hooks useMemo
import InitUseMemo from './components/useMemo-in-actions/initUseMemo'

ReactDOM.render(
  <React.StrictMode>
    {/* <MultipleHook /> */}
    {/* <ObjectHook /> */}
    {/* <InitWithFetch /> */}
    {/* <DynamicState /> */}
    <InitUseMemo />
  </React.StrictMode>,
  document.getElementById('root')
);