import React from 'react';

const ShowProjet: React.FC = () => {
  return (
    <div className='container'>
      <div className='ProjetContainer'>
        <div className='projet'>
          <h2 className='titleProjet'>My Twitter</h2>
          <img src="/twitter.png" alt="Project Image" />
          <p className='titleProjet'>
            Réplique de l&apos;application web X (anciennement Twitter) en React/Laravel
          </p>
        </div>
        <div className='projet'>
          <h2 className='titleProjet'>My Spotify</h2>
          <img src="/spotify.png" alt="Project Image" />
          <p className='titleProjet'>
            Réplique de l&apos;application web Spotify en React/Docker
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowProjet;
