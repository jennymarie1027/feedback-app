import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback();
    }, [])

    // fetch feedback
    async function fetchFeedback(){
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    }

    // handle deleting feedback
    async function deleteFeedback(id) {
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`/feedback/${id}`, { method: 'DELETE'})
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
      async function addFeedback(newFeedback) {
        const response = await fetch ('/feedback', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()

        setFeedback([data, ...feedback])
      }

      const updateFeedback = async (id, updItem) => {
          const response = await fetch(`/feedback/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
          })
          const data = await response.json();
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...data } : item))
        )
      }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;