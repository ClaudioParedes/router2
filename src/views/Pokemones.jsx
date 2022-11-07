import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

export default function Pokemones() {
  const [char, setChar] = useState({});
  // const [image, setImage] = useState({});
  useEffect(() => {
    getChar();
  }, []);

  const getChar = async () => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${poke}`;
    
    const response = await fetch(endpoint);
    const data = await response.json();
    setChar(data);
   };

  const { poke } = useParams();
  const idPokemon = char.id;
  return (
    
    <div className="mt-5">
      
      <Card border = "warning" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+idPokemon+".png"} />
        <Card.Body>
        <Card.Header><h1>{char.name}</h1></Card.Header>
         <Card.Text>
            <div>
              {char.stats[0].stat.name}:{char.stats[0].base_stat}
            </div>
            <div>
              {char.stats[1].stat.name}:{char.stats[1].base_stat}
            </div>
            <div>
              {char.stats[2].stat.name}:{char.stats[2].base_stat}
            </div>
            <div>
              {char.stats[3].stat.name}:{char.stats[3].base_stat}
            </div>
            <div>
              {char.stats[4].stat.name}:{char.stats[4].base_stat}
            </div>
            <div>
              {char.stats[5].stat.name}:{char.stats[5].base_stat}
            </div>
            <div>
              <h2>{char.types[0].type.name}</h2>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
