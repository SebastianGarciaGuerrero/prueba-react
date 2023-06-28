import { useState, useEffect } from 'react';
import Cards from './Cards'
import Buscador from './Buscador'




const MiApi = () => {
    const [characters, setCharacters] = useState ([])
    const [search, setSearch] = useState ('')

    useEffect(() => {
        getCharacters ();
    }, [])

    const getCharacters = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            setCharacters(data.results);
        } catch (error) {
            console.error('Errorsito jiji', error);
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const filteredCharacters = characters.filter(
        (character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
    )
    filteredCharacters.sort((a, b) => a.name.localeCompare(b.name))

    return (
        <div className="card-container">
            <div className="container">
                <Buscador handleSearch={search} onChange={handleSearch}/>
            </div>
            <div className="box">
                <Cards characters={filteredCharacters}/>
            </div>
        </div>
    )
}

export default MiApi;

