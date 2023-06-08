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
                            <Link to='/videoplayer/arthur/Teste 1/10000'>Teste</Link>
                        </td>
                        <td>
                            <Link to='/videoplayer/dorian/Teste 2/120'>Teste</Link>
                        </td>
                        <td>
                            <Link to='/videoplayer/julien/Teste 3/360'>Teste</Link>
                        </td>
                        <td>
                            <Link to='/videoplayer/alexandre/Teste 4/50'>Teste</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    );
}

export default GridVIdeo;