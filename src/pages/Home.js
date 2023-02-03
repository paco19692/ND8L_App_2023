import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

//components
import PlayerCard from "../components/PlayerCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      const { data, error } = await supabase.from("players").select();

      if (error) {
        setFetchError("Could not fetch the players");
        setPlayers(null);
        console.log(error);
      }
      if (data) {
        setPlayers(data);
        setFetchError(null);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {players && (
        <div className="players">
          {/* order-by buttons */}
          <div className="player-grid">
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
