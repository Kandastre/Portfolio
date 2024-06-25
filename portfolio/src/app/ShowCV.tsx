import React from 'react';

interface ShowCVProps {
    pdfUrl: string;
}

const ShowCV: React.FC<ShowCVProps> = ({ pdfUrl }) => {
    return (
        <div className='cvContainer'>
            <embed src={pdfUrl} type="application/pdf" width="80%" height="100%"/>
        </div>
    );
};

export default ShowCV;