import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LooppingList from './training/LoopingList';
import Props from './training/Props';

const Routers = () => {
  return (
    <div>
        <h2>Home</h2>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/header'>Header</Link>
                </li>
            </ul>
    </div>
  )
}

export default Routers