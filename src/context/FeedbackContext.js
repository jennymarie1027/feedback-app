import { createContext, useState } from 'react'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this item is from the context',
            rating: 10
        }
    ])

    function deleteFeedback(id) {
        if (window.confirm('Are you sure you want to delete?')) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;