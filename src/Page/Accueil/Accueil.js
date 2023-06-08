import React from 'react';
import './Accueil.css';
import GridVideo from '../../Components/GridVIdeo/GridVideo';
import SideBar from '../../Components/SideBar/SideBar';



function Accueil(){
    return (
        <div className='main-containers'>
            <SideBar />
            <GridVideo/>
        </div>
        
    );
}

export default Accueil;