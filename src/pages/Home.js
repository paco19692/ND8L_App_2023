import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

//components
import PlayerCard from "../components/PlayerCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [players, setPlayers] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");

  const handleDelete = (id) => {
    setPlayers((prevPlayers) => {
      return prevPlayers.filter((pl) => pl.id !== id);
    });
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      const { data, error } = await supabase
        .from("players")
        .select()
        .order(orderBy, { ascending: false });

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
  }, [orderBy]);

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {players && (
        <div className="players">
          <div className="order-by">
            <p>Order by:</p>
            <button onClick={() => setOrderBy("created_at")}>
              Time Created
            </button>
            <button onClick={() => setOrderBy("playername")}>
              Player Name
            </button>
            <button onClick={() => setOrderBy("teamname")}>Team Name</button>
            {orderBy}
          </div>
          <div className="player-grid">
            {players.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
