import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
    // calculate ratings average
    let average = feedback.reduce((acc, current) => {
        return acc + current.rating
    }, 0) / feedback.length;

    // regEx to check if its a whole number, if it is, don't include .0 decimal
    average = average.toFixed(1).replace(/[.,]0$/, '');

  return <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
      </div>;
}

FeedbackStats.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackStats;
