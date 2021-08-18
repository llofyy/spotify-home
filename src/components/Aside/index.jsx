import React from 'react';
import './style.css';
import Home from '../../images/svg/home.svg'
import Library from '../../images/svg/biblioteca.svg';
import Search from '../../images/svg/pesquisar.svg';
import Plus from '../../images/svg/plus.svg';

export default function Aside() {
    return (
        <aside>
            <ul className="options">
                <li className="option-item"><a href="##"> <img src={Home} alt="home" /> Início</a></li>
                <li className="option-item"><a href="##"><img src={Library} alt="biblioteca" /> Buscar</a></li>
                <li className="option-item"><a href="##"><img src={Search} alt="pesquisar" />Sua Biblioteca</a></li>
            </ul>

            <a className="create-playlist" href="##">
                <img src={Plus} alt="Adicionar Playlist" />
                Criar playlist
            </a>

            <p>PLAYLISTS</p>

            <div className="playlists-list">
                <a href="##">playlist do rock</a>
                <a href="##">playlist 2</a>
                <a href="##">playlist 3</a>
                <a href="##">playlist 4</a>
                <a href="##">playlist 5</a>
                <a href="##">playlist 6</a>
                <a href="##">playlist 7</a>
                <a href="##">playlist 8</a>
                <a href="##">playlist 9</a>
                <a href="##">playlist 10</a>
                <a href="##">playlist 11</a>
                <a href="##">playlist 12</a>
                <a href="##">playlist 13</a>
                <a href="##">playlist 14</a>
            </div>
        </aside>
    );
}