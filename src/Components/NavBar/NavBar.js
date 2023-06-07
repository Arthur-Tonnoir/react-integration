import React from 'react';
import './NavBar.css';

import loupe from '../../assets/img/loupe.png';
import ytblogo from '../../assets/img/logo-youtube.png';
import burger from '../../assets/img/burger.png';

function btnGuide(){

    const sidebar = document.getElementById('sidebar');

    if(sidebar.style.display === 'none'){
        sidebar.style.display = '';
    }else{
        sidebar.style.display = 'none';
    }
}
function NavBar(){
    return (
        <div>
            <nav className='ytb-nav'>
                <div className='containers'>
                    <div className='buttons-containers'>
                        <div className='guide-container'>
                            <button className="btn-guide button" id="btn-guide" onClick={btnGuide}>
                                <img src={burger} alt='burger'/>
                            </button>
                        </div>
                        <div className='ytb-container'>
                            <button className="btn-youtube button">
                                <img src={ytblogo} alt='logo-youtube' />
                            </button>
                        </div>
                    </div>
                    <div className='block-search'>
                        <div className='searchbar-container'>
                            <form className='search-form'>
                                <div className='search-text'>
                                    <input placeholder="Rechercher" alt='search' type='text'/>
                                </div>
                            </form>
                        </div>
                        <div className='btn-search-container'>
                            <button className='btn-search button'  >
                                <img alt='loupe' src={loupe} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;