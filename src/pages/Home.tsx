import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu" ;

function Home() {

//   return (
//     <div>
//       <h1>Menu</h1>
//       <ul>
//           <li>
//             <Link to={`/characters`}>
//               Personnages
//             </Link>
//           </li>
//           <li>
//             <Link to={`/character/new`}>
//               Créer un perso
//             </Link>
//           </li>
//       </ul>
//     </div>
//   );

// return (
//   <NavigationMenu>
//     <NavigationMenuList>
//         <NavigationMenuTrigger>Personnages</NavigationMenuTrigger>
//       <NavigationMenuItem>
//           <Link to={`/characters`}>
//             <NavigationMenuLink>Créer</NavigationMenuLink>
//           </Link>
//       </NavigationMenuItem>
//     </NavigationMenuList>
//   </NavigationMenu>
// );
return (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <Link to={`/characters`}>
          <NavigationMenuLink>Home</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Personnages</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul>
            <li>
              <Link to={`/characters`}>
                <NavigationMenuLink>Parcourir</NavigationMenuLink>
              </Link>
            </li>
            <li>
              <Link to={`/character/new`}>
                <NavigationMenuLink>Créer</NavigationMenuLink>
              </Link>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Stories</NavigationMenuTrigger>
        <NavigationMenuContent>
          <Link to={`/characters`}>
            <NavigationMenuLink>Par personnage</NavigationMenuLink>
          </Link>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
}

export default Home;
