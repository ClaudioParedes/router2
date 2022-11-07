import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [Poke, setPoke] = useState("");
  const navigate = useNavigate();
  const irAPokemones = () => {
    navigate(`/pokemones/${Poke}`);
  };
  return (
    <div className="mt-5">
      <h1>Busca tu Pokemon</h1>
      <input
        type="text"
        value={Poke}
        onChange={({ target }) => setPoke(target.value)}
      />
      <button onClick={irAPokemones}>buscar</button>
    </div>
  );
}
