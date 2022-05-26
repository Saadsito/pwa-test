import React from 'react';

export default function Game(props) {
  return (
    <div style={{margin:'10pt', width:'100%'}}>
      <a style={{width: '100%'}} href={props.link} target="_blank">
        <img src={props.img} style={{width: '156px', height: '156px', borderRadius: '5pt'}}/>
      </a>
    </div>
  );
}
