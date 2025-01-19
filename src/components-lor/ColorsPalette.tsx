import React, { useEffect, useState } from "react";

interface ColorVariable {
  name: string;
  value: string;
}

const ColorsPalette: React.FC = () => {
  const [colorVariables, setColorVariables] = useState<ColorVariable[]>([]);

  useEffect(() => {
    const fetchCssVariables = async () => {
      try {
        // Fetch le contenu du fichier App.css
        const response = await fetch("/src/App.css");
        const cssText = await response.text();

        // Extraire les variables CSS définies dans :root
        const rootMatch = cssText.match(/:root\s*{([^}]*)}/);
        if (rootMatch && rootMatch[1]) {
          const variablesBlock = rootMatch[1];

          // Extraire chaque variable CSS et sa valeur
          const variables = Array.from(variablesBlock.matchAll(/--([^:]+):\s*([^;]+);/g)).map(
            ([, name, value]) => ({
              name: `--${name.trim()}`,
              value: value.trim(),
            })
          );

          setColorVariables(variables);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des variables CSS :", error);
      }
    };

    fetchCssVariables();
  }, []);

  return (
            <>
            <div className="flex flex-row flex-wrap">
            {colorVariables.map(({ name, value }) => (
              <div
                className="flex flex-col border border-gray-300 p-2 w-48 h-24 flex-nowrap items-center"
                style={{
                  backgroundColor: `hsl(${value})`,
                }}
              >
                <div>{name}</div>
                <div>{value}</div>
              </div>
            ))}
            </div>
          
            </>
  );
};

export default ColorsPalette;
