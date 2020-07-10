import React from 'react';

function HeaderImage() {
    return (
        <div>

            <img src={require('./simple.png')} alt="covid-19" style={{width:'480px', height: '480px', maxWidth:'100%'}}></img>
        </div>
      
      
    );
  }
  
  export default HeaderImage;