import React from 'react';
import ReactPlayer from 'react-player';
import Trabajo from '../video/trabajo.mp4';
import '../components/media.css';

const Media = () => {
  return (
    <div className='container-vidio'>
        
     <ReactPlayer
       url={Trabajo}
       controls
       loop
       width='90%'
       height='100%'
     />

    </div>
  )
}

export default Media