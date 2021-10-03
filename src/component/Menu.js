import { useState } from 'react';

const Spotify = () => {

    
    return (
        <div className='spotify-main'>

            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX6ziVCJnEm59?theme=0" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

            <div className='overlay-login'>
                <p>hello</p>
            </div>  
            
        </div>
    )
}

export default Spotify