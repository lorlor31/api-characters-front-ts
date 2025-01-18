import { useState } from 'react';
import axios from 'axios';
import apiUrl from '../../apiUrl.js'; 

// TODO HOW TO VALIDATION TYPES ET CONTRAINTES SUR LE FORMULAIRE
const CharacterForm = () => {
    const [nickname, setNickname] = useState('');
    const [abstract, setAbstract] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [deathDate, setDeathDate] = useState('');

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        const characterData = {
            nickname,
            abstract,
            birthDate,
            deathDate: deathDate || null, // if no deathDate is provided, send null
        };
        console.log(`${apiUrl}/characters/create`);

        try {
            const response = await axios.post(`${apiUrl}/characters/create`, characterData);
            
            console.log('Personnage créé avec succès:', response.data);
            // Vous pouvez ajouter des actions après la soumission réussie
        } catch (error) {
            console.error('Erreur lors de la création du personnage:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nickname">Nickname</label>
                <input
                    type="text"
                    id="nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="abstract">Abstract</label>
                <textarea
                    id="abstract"
                    value={abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="birthDate">Date de naissance</label>
                <input
                    type="date"
                    id="birthDate"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="deathDate">Date de décès (optionnelle)</label>
                <input
                    type="date"
                    id="deathDate"
                    value={deathDate}
                    onChange={(e) => setDeathDate(e.target.value)}
                />
            </div>

            <button type="submit">Créer le personnage</button>
        </form>
    );
};

export default CharacterForm;
