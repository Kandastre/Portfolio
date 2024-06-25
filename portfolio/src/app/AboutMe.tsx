import React, { useEffect, useState } from 'react';

const AboutMe = () => {
  const fullText = `
    <section>
      <h1 class="text-4xl font-bold mb-6 text-center text-gray-800">À propos de moi</h1>
      <p>Je m'appelle <strong>Mehdi Benouar</strong>, un développeur web passionné et dynamique, actuellement en alternance chez WEB@CADEMY by EPITECH à Lyon. Mon parcours académique et professionnel m'a permis de développer une solide expertise en développement web, en particulier avec des technologies telles que PHP (Laravel, Symfony), JavaScript (React, Node.js, Express), et bien d'autres.</p>
      <p>Mon aventure dans le développement web a débuté avec des expériences variées allant de la piscine de programmation intensive à l'École 42, à la certification RNCP niveau 5 obtenue chez EPITECH. Cette formation rigoureuse m'a préparé à relever des défis complexes et à livrer des projets de qualité, comme mycinema, myspotify, et mymeetic.</p>
      <p>Outre mes compétences techniques, je suis reconnu pour mon autonomie, ma polyvalence, et ma capacité à travailler efficacement en équipe. Mon expérience professionnelle diversifiée, incluant des rôles chez ABR Technologies et ISS Renault Trucks, a affiné ma réactivité et mon sens du service.</p>
      <p>En dehors du travail, je suis un joueur semi-professionnel de League of Legends et un grand fan de game design, ce qui alimente ma créativité et mon approche innovante dans le développement web. Passionné par la science et la culture populaire, je m'efforce toujours d'intégrer de nouvelles idées et perspectives dans mes projets.</p>
      <p>Avec une forte capacité d'adaptation et un excellent relationnel, je suis toujours prêt à apprendre de nouvelles technologies et à relever de nouveaux défis pour continuer à évoluer dans le domaine du développement web.</p>
    </section>`;
  
  const [text, setText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText((prevText) => prevText + fullText[i]);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 15);
  
    return () => clearInterval(timer);
  }, [fullText]);
  
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}

export default AboutMe;
