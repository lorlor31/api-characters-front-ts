import { Link } from 'react-router-dom';
import ColorsPalette from '../components-lor/ColorsPalette';
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu" ;
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

function Home() {
//  return (
//   <Menu/> 
//  )













  return (
    <>
<Menubar className="absolute right-[5vw] top-4 border-2  bg-secondary flex justify-center items-center text-nowrap">
  <MenubarMenu >
  <MenubarTrigger className="border-2 border-primary mx-0">
    <Link to={`/`}>Home</Link>
  </MenubarTrigger>
  </MenubarMenu> 
  <MenubarMenu>
    <MenubarTrigger className="border-2 border-primary mx-0">Personnages</MenubarTrigger>
    <MenubarContent>
      <MenubarItem><Link to={`/characters/browse`}>Explorer</Link>
      </MenubarItem>
      <MenubarItem><Link to={`/character/new`}>Créer</Link></MenubarItem>
      <MenubarItem><Link to={`/characters/`}>Au hasard</Link></MenubarItem>
    </MenubarContent>
  </MenubarMenu> 
  <MenubarMenu className="border-2 border-primary">
    <MenubarTrigger className="border-2 border-primary">Stories</MenubarTrigger>
    <MenubarContent>
      <MenubarItem> Explorer </MenubarItem>
      <MenubarItem>Créer</MenubarItem>
      <MenubarItem>Au hasard</MenubarItem>
    </MenubarContent>
  </MenubarMenu> 
  <MenubarMenu>
  <MenubarTrigger className="border-2 border-primary">A propos </MenubarTrigger>
    <MenubarContent>
      <MenubarItem> Concepts </MenubarItem>
      <MenubarItem>Règles et CGU</MenubarItem>
      <MenubarItem>Mentions légales</MenubarItem>
    </MenubarContent>
  </MenubarMenu> 
</Menubar>

      <ColorsPalette/>
    </>
  );
}

export default Home;
