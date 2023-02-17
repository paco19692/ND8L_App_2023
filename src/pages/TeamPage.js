import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

//components
import TeamCard from "../components/TeamCard";

const TeamPage = () => {
  const [fetchError, setFetchError] = useState(null);
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      const { data, error } = await supabase.from("players").select();

      if (error) {
        setFetchError("Could not fetch players from the database");
      }

      if (data) {
        setPlayers(data);
        setFetchError(null);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="team-grid">
      {fetchError && <p>{fetchError}</p>}
      {players && (
        <div className="players">
          {players.map((player) => (
            <TeamCard key={player.id} player={player} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamPage;
