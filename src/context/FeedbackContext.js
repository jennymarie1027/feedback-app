import { createContext, useState } from 'react'
import { v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this item is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'this item is feedback item 2',
            rating: 5
        },
        {
            id: 3,
            text: 'this item is feedback item 3',
            rating: 1
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // handle deleting feedback
    function deleteFeedback(id) {
        if (window.confirm('Are you sure you want to delete?')) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      }

      // set item to be updated
      const editFeedback = (item) => {
          setFeedbackEdit({
              item,
              edit: true
          })
      }

      // handle adding feedback
      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
      }

      const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem } : item))
        )
      }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;