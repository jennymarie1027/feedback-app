import React, { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
const App = () => {

    const [feedback, setFeedback] = useState(FeedbackData)

    function deleteFeedback(id) {
      console.log('App', id)
    }

  return (
    <>
        <Header  />
        <div className='container'>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
    </>
  );
};

export default App;
