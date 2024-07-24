import React from 'react';

const ShowProjet: React.FC = () => {
  return (
    <div className='container'>
      <div className='ProjetContainer'>
        <div className='projet'>
          <h2 className='titleProjet'>My Twitter</h2>
          <img src="/twitter.png" alt="Project Image" />
        </div>
        <div className='projet'>
          <h2 className='titleProjet'>My Spotify</h2>
          <img src="/spotify.png" alt="Project Image" />
        </div>
      </div>
    </div>
  );
};

export default ShowProjet;
