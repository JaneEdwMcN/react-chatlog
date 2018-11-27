import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

const Message = (props) => {
  return (
    <section className='entry-bubble'>
    <p className='entry-body'>{props.body}</p>
    <p className='entry-time'><Timestamp time={props.timeStamp}/></p>
    </section>
  )
};

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default Message;
