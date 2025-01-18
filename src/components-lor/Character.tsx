import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"



export interface CharacterProps {
  id:number ;
  nickname: string;
  birthDate: string;
  deathDate?: string; 
  abstract: string;
}

const Character = ({ ...character }: CharacterProps)=> {
  const formattedBirthDate = new Date(character.birthDate).toLocaleDateString('fr-FR');
  return (
    <>
<Card>
  <CardHeader>
    <CardTitle>{character.nickname}</CardTitle>
    <CardDescription>{character.abstract}</CardDescription>
  </CardHeader>
  <CardContent>
  <p> Né(e) le : {formattedBirthDate} </p>
      {character.deathDate &&  <p>Mort(e) le : {character.deathDate}</p>}
      <p>{character.abstract}</p>  </CardContent>
  <CardFooter>
    <p>TAgs ici</p>
  </CardFooter>
</Card>

    <div className="character">
      <h2>{character.nickname}</h2>
      <p> Né(e) le : {formattedBirthDate} </p>
      {character.deathDate &&  <p>Mort(e) le : {character.deathDate}</p>}
      <p>{character.abstract}</p>
    </div>
    </>
  );
};

export default Character;
