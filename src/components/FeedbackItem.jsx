import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {

    const { deleteFeedback } = useContext(FeedbackContext)

  return (
 
        <div className='card'>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
          <FaTimes color='purple' />
      </button>
      <div className="text-display">
          {item.text}
      </div>
  </div>
 
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem;
