import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {shuffle} from "@/functions/shuffle"
import { badgeVariants } from "@/components/ui/badge"
import { Link } from 'react-router-dom';

export interface CharacterProps {
  id:number ;
  nickname: string;
  birthDate: string;
  deathDate?: string; 
  abstract: string;
  longDescription: string;
  backgroundImage?: string; 
  avatarImage?: string; 
  personalities?:Array<object>;

}
let bgClass = "chart-1";

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
  const shuffledAvatars=shuffle(avatars);
  const randomAvatarImage= shuffledAvatars[0];

  const personalitiesColors = [
    { name: 'green', values: ['gentil'] },
    { name: 'red', values: ['impatient', 'menteur', 'hypocrite', 'arriviste', 'méchant'] },
    { name: 'yellow', values: ['courageux', 'dynamique', 'vif', 'hyperactif', 'aventurier'] },
    { name: 'purple', values: ['naïf', 'modeste', 'fragile'] },
    { name: 'orange', values: ['intelligent', 'mystérieux', 'charmeur', 'ambitieux', 'perspicace', 'fort'] },
    { name: 'blue', values: ['calme', 'serein', 'doux'] },
  ];
  
  const setBadgeBgColor = function (personality: string) {
    personalitiesColors.forEach((color,) => {
      if(color.values.includes(personality)==true) {
        let tone = (color.values.indexOf(personality)+1) *100 ;
        bgClass= `bg-${color.name}-${tone}`;
        return bgClass ;
      }
    });
    return bgClass;
  }

  return (
  <>
    <Card className="character border-green border-lg border-solid container w-full mx-auto flex flex-col justify-center items-center ">
    <CardHeader
    className={`flex flex-col items-center relative bg-[url('/src/assets/images/backgrounds/${character.backgroundImage}.jpg')]`}
    >
      <Avatar className="w-48 h-48  -top-[12rem]  mx-auto border-white border-solid border-4  ">
      <AvatarImage className=" border-white border-solid border-6"src={character.avatarImage
        ?`/src/assets/images/avatars/${character.avatarImage}`
        :`/src/assets/images/avatars/${randomAvatarImage}.jpg`}/>
      <AvatarFallback>AvatarFallback</AvatarFallback>
      </Avatar>

      <CardTitle className="text-8xl absolute -top-[74px] text-center drop-shadow-[2px_-5px_rgba(255,255,255,1)] ">{character.nickname}</CardTitle>
      <CardDescription>{character.abstract}</CardDescription>
    </CardHeader>
        <div className="w-5 h-5 bg-chart-2"></div>
      <CardContent>
        <p> Né(e) le : {formattedBirthDate} </p>
          {character.deathDate 
          ?<p>Mort(e) le : {character.deathDate}</p>
          :<p>{getAgeInYearsMonthsDays(birthDate)}</p>
          }
        <p>{character.longDescription}</p>  
      </CardContent>
      <CardFooter >
        {character.personalities?.map((personality: any, index: number) => {
          bgClass = setBadgeBgColor(personality.value);
          return (       
         <Link key={index} className={`${badgeVariants({ variant: "outline" })} ${bgClass}
         `} to="/characters">
          {personality.value}
          </Link> 
          )})}   
        
      </CardFooter>
    </Card>
  </>
  );
};

export default Character;
