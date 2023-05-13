import {useState} from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Summary from '../Summary/Summary';
import AboutMe from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import './App.css';

export default function App() {
  return (
    <main className="App">
      <div className="nav">
        <NavBar />
      </div>
      <Summary />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Resume />
    </main>
  );
}
