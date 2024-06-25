"use client";
import { useEffect, useRef, useState } from "react";
import Animated from "./Animated.client";
import EmailForm from "./form";
import AboutMe from "./AboutMe";
import ShowProjet from "./ShowProjet";
import ShowCV from "./ShowCV";

export default function Page() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handleContactClick = () => {
    playSound();
    setActiveComponent('contact');
  };

  const handleAboutMeClick = () => {
    playSound();
    setActiveComponent('about');
  }

  const handleProjetClick = () => {
    playSound();
    setActiveComponent('projet');
  }

  const handleCVClick = () => {
    playSound();
    setActiveComponent('cv');
  }

  useEffect(() => {
    const audioElement = new Audio('/button_enter.wav');
    const hoverAudioElement = new Audio('/button_select.wav');

    audioElement.addEventListener('canplaythrough', () => {
      console.log('Audio can play through without stopping for buffering');
      audioRef.current = audioElement;
    });

    hoverAudioElement.addEventListener('canplaythrough', () => {
      console.log('Hover audio can play through without stopping for buffering');
      hoverAudioRef.current = hoverAudioElement;
    });

    audioElement.addEventListener('error', (e) => {
      console.error('Error loading audio:', e);
    });

    hoverAudioElement.addEventListener('error', (e) => {
      console.error('Error loading hover audio:', e);
    });
  }, []);

  const playSound = () => {
    audioRef.current?.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  };

  const playHoverSound = () => {
    hoverAudioRef.current?.play().catch((error) => {
      console.error('Error playing hover audio:', error);
    });
  };

  return (
    <div className="button-layout">
      <div className="button-column">
        <Animated />
        <h2>Mehdi Benouar</h2>

        <div className="button-group">
          <button type="button" className="button" onClick={handleAboutMeClick} onMouseEnter={playHoverSound}>
            <span className="button-label">À propos de moi</span>
          </button>
          <button type="button" className="button" onClick={handleCVClick} onMouseEnter={playHoverSound}>
            <span className="button-label">Curriculum Vitae</span>
          </button>
          <button type="button" className="button" onClick={handleProjetClick} onMouseEnter={playHoverSound}>
            <span className="button-label">Projets</span>
          </button>
          <button type="button" className="button" onClick={handleContactClick} onMouseEnter={playHoverSound}>
            <span className="button-label">Contact</span>
          </button>
        </div>
      </div>
      <div className="content">
          {activeComponent === 'cv' && <div className="cv-container"><ShowCV pdfUrl="/CV_2024-06-18_Mehdi_Benouar.pdf" /></div>}
          {activeComponent === 'projet' && <div className="projet-w"><ShowProjet /></div>}
          {activeComponent === 'about' && <div className="about-me"><AboutMe /></div>}
          {activeComponent === 'contact' && <div className="form-container"><EmailForm /></div>}
        </div>
    </div>
  );
}