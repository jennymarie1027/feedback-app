import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa';

function FeedbackItem({ item, handleDelete }) {



  return <div className='card'>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
          <FaTimes color='purple' />
      </button>
      <div className="text-display">
          {item.text}
      </div>
  </div>;
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem;
