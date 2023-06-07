import React from 'react';
import './SideBar.css';

import accueil from '../../assets/img/accueil.png';
import shorts from '../../assets/img/shorts.png';
import abonnements from '../../assets/img/abonnements.png';

import bibliotheque from '../../assets/img/abonnements.png';
import historique from '../../assets/img/abonnements.png';
import video from '../../assets/img/abonnements.png';
import regarde from '../../assets/img/abonnements.png';
import love from '../../assets/img/abonnements.png';

function SideBar()
{
    return (
        <div className='sidebar' id='sidebar'>
            <div className='block-buttons'>
                <div className='list-option'>
                    <div className='row'>
                        <div className='row-image'><img src={accueil} alt='accueil'/></div>
                        <div className='row-text'><p>Accueil</p></div>
                    </div>
                    <div className='row'>
                        <div className='row-image'><img src={shorts} alt='shorts'/></div>
                        <div className='row-text'><p>Shorts</p></div>
                    </div>
                    <div className='row'>
                        <div className='row-image'><img src={abonnements} alt='abonnements'/></div>
                        <div className='row-text'><p>Abonnements</p></div>
                    </div>
                </div>
                <div className='list-option'>
                    <div className='row'>
                        <div className='row-image'><img src={bibliotheque} alt='bibliotheque'/></div>
                        <div className='row-text'><p>Bibliothéque</p></div>
                    </div>
                    <div className='row'>
                        <div className='row-image'><img src={historique} alt='historique'/></div>
                        <div className='row-text'><p>Historique</p></div>
                    </div>
                    <div className='row'>
                        <div className='row-image'><img src={video} alt='vos video'/></div>
                        <div className='row-text'><p>Vos Vidéo</p></div>
                    </div>
                    <div className='row'>
                        <div className='row-image'><img src={regarde} alt='a regarder'/></div>
                        <div className='row-text'><p>A regarder plus tard</p></div>
                    </div>
                    <div className='row'>
                        <div className='row-image'><img src={love} alt='video jaime'/></div>
                        <div className='row-text'><p>Vidéo J'aime</p></div>
                    </div>
                </div>
            </div>
            <div className='block-abonnement'>
                <div className='title row-image'>
                    <h4>Abonnements</h4>
                </div>
                <div className='list-abonnement'>
                    <div className='row'>
                        <div className='row-image'><img src='' alt='test 1'/></div>
                        <div className='row-text'><p>Tech & Co</p></div>
                    </div>
                    <div className='row'>
                        <div className='row-image'><img src='' alt='test 2'/></div>
                        <div className='row-text'><p>01net</p></div>
                    </div>
                    <div className='row'>
                        <div className='row-image'><img src='' alt='test 3'/></div>
                        <div className='row-text'><p>12 Parsecs</p></div>
                    </div>
                    <div className='row'>
                        <div className='row-image'><img src='' alt='test 4'/></div>
                        <div className='row-text'><p>50 nuances d'EDC</p></div>
                    </div>
                    <div className='row'>
                        <div className='row-image'><img src='' alt='test 5'/></div>
                        <div className='row-text'><p>ACTU DC</p></div>
                    </div>
                    <div className='row'>
                        <div className='row-image'><img src='' alt='test 6'/></div>
                        <div className='row-text'><p>ADN - Animation</p></div>
                    </div>
                    <div className='row'>
                        <div className='row-image'><img src='' alt='test 7'/></div>
                        <div className='row-text'><p>Adrien Linuxtricks</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;

