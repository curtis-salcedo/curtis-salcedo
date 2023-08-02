import {useState} from "react";
import { Routes, Route } from 'react-router-dom';

// Component Imports
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

// Page Imports
import Summary from '../Summary/Summary';
import AboutMe from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';

// Style Imports
import { ViewportProvider } from "../../components/ViewportContext/ViewportContext"; 
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

import './App.css';

import {
  Button,
} from 'reactstrap';


export default function App() {
  const FadeUp = batch(FadeIn(), Move());

  return (
    <ViewportProvider>
      <main className="App">
          <div id="home" className="nav">
            <NavBar />
          </div>
          {/* <div className="SummaryPC">
            <ScrollContainer snap="none">
              <ScrollPage>
                <Animator animation={batch(Fade(0, 1), Sticky(), Move(0, -1000, 0, -520))}>
                  <Summary />
                </Animator>
              </ScrollPage>
            </ScrollContainer>
          </div> */}
          <Summary />
          <AboutMe />
          <Portfolio />
          <Skills />
          <Resume />
          <Footer />
      </main>
    </ViewportProvider>
  );
}
