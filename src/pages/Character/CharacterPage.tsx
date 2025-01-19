import { useState, useEffect } from 'react';
import Character from '../../components-lor/Character';
import ColorsPalette from '../../components-lor/ColorsPalette';

import {CharacterProps} from '../../components-lor/Character';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../apiUrl.js'; 

const CharacterPage = () => {

  const { id } = useParams<{ id: string }>(); // Récupère l'id depuis l'URL
  // const [character, setCharacter] = useState(null);
  const [character, setCharacter] = useState<CharacterProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${apiUrl}/characters/${id}`);
        setCharacter(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <>
    <ColorsPalette/>
    <div className="container w-screen bg-wave flex flex-col justify-center items-center  ">
      {character  
      ? <h1 className="text-6xl bg-accent">Profil de {character.nickname} </h1>
      : <h1>Salut</h1> }
      {character ? <Character {...character} /> : <p>Aucun personnage trouvé.</p>}
      </div>
      </>

  );
};

export default CharacterPage;
