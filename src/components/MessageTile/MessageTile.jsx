import React from 'react';
import './MessageTile.styles.css';

const MessageTile = (props) => {
  return (
    <div className="message-tile">
      {props.text} by {props.name}
    </div>
  )
};

export default MessageTile;
