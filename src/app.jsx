import React from 'react';
import Aside from './components/Aside';
import Card from './components/Card';
import Player from './components/Player';
import Cover from './images/cover.png';
import Cover2 from './images/cover2.png';
import Cover3 from './images/cover3.png';
import Cover4 from './images/cover4.png';
import './styles/app.css';

export default function App() {
    return (
        <main>
            <Aside />
            <div className="playlists">
                <h1>Populares</h1>
                <div className="cards">
                    <Card  image={Cover} title="Vampire Weekend" desc="Descrição da playlist de 2 linhas" />
                    <Card  image={Cover2} title="Maracatu Atômico" desc="Descrição da playlist" />
                    <Card  image={Cover3} title="Gelty" desc="Descrição da playlist" />
                    <Card  image={Cover4} title="-M-" desc="Descrição da playlist" />
                </div>

                <h1>Suas playlists mais ouvidas</h1>
                <div className="cards">
                    <Card  image={Cover} title="Vampire Weekend" desc="Descrição da playlist de 2 linhas" />
                    <Card  image={Cover2} title="Maracatu Atômico" desc="Descrição da playlist" />
                    <Card  image={Cover3} title="Gelty" desc="Descrição da playlist" />
                    <Card  image={Cover4} title="-M-" desc="Descrição da playlist" />
                </div>

                <h1>Paradas de sucesso</h1>
                <div className="cards">
                    <Card  image={Cover} title="Vampire Weekend" desc="Descrição da playlist de 2 linhas" />
                    <Card  image={Cover2} title="Maracatu Atômico" desc="Descrição da playlist" />
                    <Card  image={Cover3} title="Gelty" desc="Descrição da playlist" />
                    <Card  image={Cover4} title="-M-" desc="Descrição da playlist" />
                </div>

                <h1>Novas playlists</h1>
                <div className="cards">
                    <Card  image={Cover} title="Vampire Weekend" desc="Descrição da playlist de 2 linhas" />
                    <Card  image={Cover2} title="Maracatu Atômico" desc="Descrição da playlist" />
                    <Card  image={Cover3} title="Gelty" desc="Descrição da playlist" />
                    <Card  image={Cover4} title="-M-" desc="Descrição da playlist" />
                </div>
            </div>

            <Player />
        </main>
    );
}