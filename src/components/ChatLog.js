import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const ChatLog = (props) => {
  const renderChatLogMessages = props.messages.map((message, index) => {
    return <section className={ message.sender === props.messages[0].sender ? "chat-entry local" : "chat-entry remote"}>
    <h4 className='entry-name'>{message.sender}</h4>
    <Message
    sender={message.sender}
    body={message.body}
    timeStamp={message.timeStamp}
    key={index}/>
    </section>
  });

  return (
    <section className="chat-log">
    {renderChatLogMessages}
    </section>
  )
};

ChatLog.propTypes = {
  messages: PropTypes.array.isRequired
};

export default ChatLog;
