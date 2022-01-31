import Card from './shared/Card'
import {useState} from 'react';

function FeedbackForm() {

    const [text, setText] = useState('');

    function handleTextChange(e) {
        setText(e.target.value);
    }

  return <Card>
      <form>
          <h2>How would you rate your service with us?</h2>
          {/* TODO - rating select component */}
          <div className='input-group'>
              <input type='text' value={text} onChange={handleTextChange} placeholder='write a review' />
              <button type='submit'>Send</button>
          </div>
      </form>
  </Card>;
}

export default FeedbackForm;
