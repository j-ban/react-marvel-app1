import React from 'react';
import FilterBar from './FilterBar';
import './Header.scss';

function Header(props){
	return(
		<header>
          <h1>{props.title}</h1>
          <p>{props.message}</p>
          <FilterBar />
        </header>

		);

};

export default Header;