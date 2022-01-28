function Header({ text }) {
  return (
    <header style={{ backgroundColor: 'rebeccapurple', color: 'red'}}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
}

export default Header;
