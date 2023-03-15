import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

//components
import TeamTable from "../components/TeamTable";

const TeamPage = () => {
  const [fetchError, setFetchError] = useState(null);
  const [players, setPlayers] = useState(null);
  const [orderBy, setOrderBy] = useState("teamname");

  useEffect(() => {
    const fetchPlayers = async () => {
      const { data, error } = await supabase
        .from("players")
        .select()
        .order(orderBy, { ascending: true });

      if (error) {
        setFetchError("Could not fetch players from the database");
      }

      if (data) {
        setPlayers(data);
        setFetchError(null);
      }
    };

    fetchPlayers();
  }, [orderBy]);

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {players && (
        <div>
          {players.map((player) => (
            <TeamTable key={player.id} player={player} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamPage;
