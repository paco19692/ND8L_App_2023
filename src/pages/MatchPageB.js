import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

const MatchPageB = () => {
  const [playerstate, setPlayerstate] = useState();
  const [fetchError, setFetchError] = useState(null);
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      const { data, error } = await supabase.from("players").select();

      if (error) {
        setFetchError("Could not fetch the players");
        setPlayers(null);
      }
      if (data) {
        setPlayers(data);
        setFetchError(null);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {players && (
        <select>
          {players.map((player) => (
            <option key={player.id} player={player}>
              {player.playername}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default MatchPageB;
