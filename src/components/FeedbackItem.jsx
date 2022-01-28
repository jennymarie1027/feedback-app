import React, { useState } from 'react';

function FeedbackItem() {

    const [rating, setRating] = useState(7)
    const [text, setText] = useState('this is an example of a feedback item')

    function handleClick() {
        setRating((prev) => {
            return prev + 1;
        })
    }

  return <div className='card'>
      <div className="num-display">{rating}</div>
      <div className="text-display">
          {text}
      </div>
      <button onClick={handleClick}>Click</button>
  </div>;
}

export default FeedbackItem;
