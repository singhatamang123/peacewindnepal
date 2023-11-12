// ChatIcon.js
import React from 'react';
import { CloseButton } from 'react-bootstrap';
import { BsChat } from 'react-icons/bs';

const ChatIcon = ({ onClick, isOpen }) => {
  return (
    <div className={`chat-icon ${isOpen ? 'open' : 'closed'}`} onClick={onClick}>
      {isOpen ? (
        <CloseButton />
      ) : (
        <BsChat />
      )}
    </div>
  );
};

export default ChatIcon;
