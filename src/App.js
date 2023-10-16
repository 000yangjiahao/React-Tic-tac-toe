import {useState} from 'react';
import {sculptureList} from './data.js';

export default function Gallery() {
  return (
    <div>
      {sculptureList[2].name}
    </div>
  );
}