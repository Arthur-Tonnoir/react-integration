import React from 'react';
import './GridVideo.css';
import { Link } from 'react-router-dom';


function GridVIdeo(){
    return (
        <div className='main-containers'>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Link to='/videoplayer'>Teste</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    );
}

export default GridVIdeo;