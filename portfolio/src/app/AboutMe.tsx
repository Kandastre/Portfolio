import React, { useEffect, useState } from 'react';

const AboutMe = () => {
  const fullText = `
    <section>
    <h2>À propos de moi</h2>
    <p>Je m'appelle Mehdi Benouar, un développeur Full Stack passionné et dynamique, actuellement en alternance chez EPITECH Lyon dans le cadre du programme WEB@CADEMY. Avec une solide formation en développement web et une expérience pratique diversifiée, je suis dédié à la création de solutions numériques innovantes et performantes.</p>

    <h3>Parcours Académique et Formation</h3>
    <ul>
        <li><strong>WEB@CADEMY by EPITECH (2023-2025)</strong> : Certification RNCP niveau 5, où j'ai travaillé sur divers projets tels que des sites de rencontre, des sites de e-commerce, et des applications comme Twitter et Spotify.</li>
        <li><strong>Piscine / Ecole 42 (Septembre 2023)</strong> : Formation intensive en langage C et SHELL.</li>
        <li><strong>Diplôme National du Brevet et BAC PRO SEN</strong> : Acquis au Collège Jules Michelet et au Lycée professionnel Marc Seguin à Vénissieux.</li>
    </ul>

    <h3>Expériences Professionnelles</h3>
    <ul>
        <li><strong>Intérimaire (2022-2023)</strong> : Missions variées dans la manutention et la vente, développant mon adaptabilité et ma polyvalence.</li>
        <li><strong>Opérateur Polyvalent chez ISS Renault Trucks (2021)</strong> : Vérification et assistance à la fabrication de pièces.</li>
        <li><strong>Employé Polyvalent chez ABR Technologies (2018-2019)</strong> : Gestion des commandes de CD-DVD et création de jaquettes avec Photoshop.</li>
        <li><strong>Secrétaire Informatique Polyvalent en Stage (2015-2017)</strong> : Stages nécessaires pour le BAC PRO, offrant une première immersion dans le monde professionnel.</li>
    </ul>

    <h3>Compétences Techniques</h3>
    <ul>
        <li><strong>Langages et Frameworks</strong> : C, PHP/Laravel/Symfony, JS/React, Node.js/Express, Python, HTML, CSS/Tailwind, SQL/MongoDB, Bash.</li>
        <li><strong>Outils</strong> : Wordpress, Photoshop.</li>
        <li><strong>Langues</strong> : Français (courant), Anglais (B2).</li>
    </ul>

    <h3>Atouts Personnels</h3>
    <p>Je me distingue par ma réactivité, ma rigueur, mon esprit d'équipe et ma capacité à garder mon sang-froid en toutes circonstances. Mon adaptabilité et mon autonomie me permettent de m'intégrer facilement dans différentes équipes et projets.</p>

    <h3>Centres d'Intérêt</h3>
    <p>En dehors du développement, je suis un joueur semi-professionnel de League of Legends, un passionné de game design, et un curieux insatiable de sciences et de culture populaire.</p>
</section>
`;
  
  const [text, setText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length - 1) {
        setText((prevText) => prevText + fullText[i]);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 5);
  
    return () => clearInterval(timer);
  }, [fullText]);
  
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}

export default AboutMe;
