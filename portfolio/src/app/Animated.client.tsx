"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Animated() {
  useEffect(() => {
    let btnGroup = document.querySelector('.button-layout');
    let buttons = document.querySelectorAll('.button');
    let title = document.querySelector('h2');

    function splitText(textEl: HTMLElement | null) {
      if(!textEl || !textEl.textContent) {
        return
      }
      
      let text = textEl.textContent.split('');
      textEl.innerText = '';
      text.forEach((letter: string) => {
        let span = document.createElement('span');
        span.innerText = letter;
        textEl.appendChild(span);
      });
    }
    splitText(title);

    gsap.to(btnGroup, {
      opacity: 1, 
      delay: .5,
      duration: .5
    });

    buttons.forEach((button, i) => {
      gsap.to(button, {
        x: 0, 
        opacity: 1, 
        delay: .5 + (.1 * i),
        duration: .2
      });
    });

    let headingLetters = title?.querySelectorAll('span');
    headingLetters?.forEach((letter, i) => {
      gsap.to(letter, {
        opacity: 1, 
        delay: .75 + (.075 * i),
        duration: 2.5
      });
    });
  }, []);

  // Retourne un élément JSX vide
  return null;
}