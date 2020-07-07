import React from 'react';
import './NavBar.css';
import DropDown from './DropDown';
import SearchBox from './SearchBox';

const NavBar = ({searchChange, dropDownChange}) => {

        return (
            <div>
              <ul id="nav">

              <div id="text">
                <li><h1 className="ml4 mr2 white">SimpleDex</h1></li>
              </div>

                <div id="container">
	                <li><DropDown dropDownChange={dropDownChange}/></li>
	                <li><SearchBox searchChange={searchChange}/></li>
	            </div>

              </ul>
            </div>
        );
    
}

export default NavBar;