import { Link } from 'react-router-dom';

function Home() {

  return (
    <div>
      <h1>Menu</h1>
      <ul>
          <li>
            <Link to={`/characters`}>
              Personnages
            </Link>
          </li>
          <li>
            <Link to={`/character/new`}>
              Créer un perso
            </Link>
          </li>
      </ul>
    </div>
  );
}

export default Home;
