import React from 'react';
import './Header.css';

export default({black}) => {
  return(
      <header className={black ? 'black' : ''}>
          <div className="logo">
              <a href="#">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"/>
              </a>
          </div>
          <div className="userImage">
              <a href="#">
                  <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="user"/>
              </a>
          </div>
      </header>
  );
}