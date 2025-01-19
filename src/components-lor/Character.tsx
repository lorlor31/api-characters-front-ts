import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export interface CharacterProps {
  id:number ;
  nickname: string;
  birthDate: string;
  deathDate?: string; 
  abstract: string;
  longDescription: string;
  backgroundImage?: string; 
  avatarImage?: string; 

}

const Character = ({ ...character }: CharacterProps)=> {
  const birthDate = new Date(character.birthDate);
  const formattedBirthDate = birthDate.toLocaleDateString('fr-FR');

  // Calculate the age in Y/M/D of the character returned in string
  const getAgeInYearsMonthsDays = (birthDate:Date) => {
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    // Ajuster si les jours sont négatifs
    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }
    // Ajuster si les mois sont négatifs
    if (months < 0) {
        years -= 1;
        months += 12;
    }
    return `${years} ans, ${months} mois et ${days} jours`;
  };

  //Pick a random avatar if not defined
  const avatars = [
    "bear",
    "dog",
    "giraf",
    "girl",    
  ]
  const shuffle = (array:[]) => {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    } 
    return array; }
  const shuffledAvatars=shuffle(avatars);
  const randomAvatarImage= shuffledAvatars[0];

  return (
  <>
    <Card className="character bg-accent border-destructive container w-full mx-auto flex flex-col justify-center items-center">
      <CardHeader className="flex flex-col items-start">
      <Avatar>
      <AvatarImage src={character.avatarImage
        ?character.avatarImage
        :`/src/assets/images/${randomAvatarImage}.jpg`}/>
      <AvatarFallback>AvatarFallback</AvatarFallback>
      </Avatar>

      <CardTitle>{character.nickname}</CardTitle>
      <CardDescription>{character.abstract}</CardDescription>
      </CardHeader>
      <CardContent>
        <p> Né(e) le : {formattedBirthDate} </p>
          {character.deathDate 
          ?<p>Mort(e) le : {character.deathDate}</p>
          :<p>{getAgeInYearsMonthsDays(birthDate)}</p>
          }
        <p>{character.longDescription}</p>  
      </CardContent>
      <CardFooter>
        <p>TAgs ici</p>
      </CardFooter>
    </Card>
  </>
  );
};

export default Character;
