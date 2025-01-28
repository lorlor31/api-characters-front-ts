import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


// type link {
//   name: string;
//   value: string;
// }

export const  Menu = function() {
  return (
    <ul className="flex absolute right-5 top-3 space-x-4">
      <li>
        <Link to={`/characters`}>
          Parcourir
        </Link>
      </li>
      <li>
        <Link to={`/character/new`}>
          Créer
        </Link>
      </li>
    </ul>
  );
}

export default Menu;


