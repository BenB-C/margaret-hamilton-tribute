import React from 'react';
import Mh from './img/mh.jpg'
import {Image} from 'react-bootstrap'
import './Photo.css'

function Photo() {
  return (
    <div className="Photo">
      <Image src={Mh} />
      <h1>Margaret Hamilton</h1>
    </div>
  );
}

export default Photo;
