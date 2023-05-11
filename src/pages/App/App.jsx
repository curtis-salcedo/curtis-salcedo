import {useState} from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Resume from '../Resume/Resume';
import './App.css';

export default function App() {
  return (
    <main className="App">
      <NavBar />
      <h1>Curtis</h1>
      <Resume />
    </main>
  );
}
