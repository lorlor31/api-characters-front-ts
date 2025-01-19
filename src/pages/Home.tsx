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
return (
  <>
  <h1 className="w-screen mx-auto">HOME</h1>
  <NavigationMenu className="w-full container mx-auto bg-red-400 ">
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
  </>
);
}

export default Home;
