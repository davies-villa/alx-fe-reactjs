

function Header() {
  return (
    <header style={{
      background: 'linear-gradient(to left, blue , purple )',
      color: 'white',
      textAlign: 'center',
      width: '100%',
      padding: '10px' ,
      borderRadius: '5px',
      border: 'none'
    }}>
      <h1 style={{
        color: 'white',
        fontSize: '30px',
        fontWeight: '400'
      }}>My Favorite Cities</h1>
    </header>
  );
}

export default Header;
