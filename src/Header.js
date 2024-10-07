import React from 'react';

const Header = ({handleClick}) => {

  return (
    <header className="header">
      <ul>
        <li onClick={handleClick}>users</li>
        <li onClick={handleClick}>posts</li>
        <li onClick={handleClick}>comments</li>
      </ul>
    </header>
  );
}

export default Header;
