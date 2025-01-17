import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../apiUrl.js'; 
import {CharacterProps} from '../../components-lor/Character.js' ;
function CharactersPage() {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  // const [characters, setCharacters] = useState<[]>([]); // initaliser avec untabl vide pour ne pas avoir besoin de fr affichage conditionnel ?
  const [loading, setLoading] =useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    // Remplace l'URL ci-dessous par celle de ton API réelle
    const fetchCharacters = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`${apiUrl}/characters/`);
          console.log(response.data)
          setCharacters(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchCharacters();
    },[]);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h1>Liste des personnages</h1>
      <ul>
        {
        characters.map(character => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>
              {character.nickname}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharactersPage;
