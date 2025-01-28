import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../apiUrl.js'; 
import {CharacterProps} from '../../components-lor/Character.js' ;
import Character from '../../components-lor/Character.js' ;
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function BrowseCharactersPage() {
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
console.log(characters);
  return (
    <Carousel className='w-[60vw] h-screen flex justify-center items-center'>
  <CarouselContent>
  {characters.map((character )=> (
  <CarouselItem key={character.id} className="basis-1/3 border-4 border-red-500" >
    {character ? <Character {...character} className=" max-w-[100px] h-auto shrink-0"/> : <p>Aucun personnage trouvé.</p>}
  </CarouselItem>
))}


  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
  );

  //Menu foireux à reprendre plus tard qd home ok
//   return (
//     <>
//     <h1>Liste des personnages</h1>
//     <NavigationMenu>
//       <NavigationMenuList>
//       <NavigationMenuTrigger>
// Personnages          
//       {characters.map(character => (
//         <NavigationMenuItem>
//           <NavigationMenuContent>
//           <Link to={`/character/${character.id}`}>
//             <NavigationMenuLink>{character.nickname}</NavigationMenuLink>
//           </Link>
//           </NavigationMenuContent>
//           </NavigationMenuItem>
//         ))}
//         </NavigationMenuTrigger>
//       </NavigationMenuList>
//     </NavigationMenu>    
//     </>
//   );
}

export default BrowseCharactersPage;
