import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

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
    <Container>
      <Grid container>
        <Grid item md={3}>
          <Paper>Player Name</Paper>
        </Grid>
        <Grid item md={2}>
          <Paper>Team Name</Paper>
        </Grid>
        <Grid item>
          <Paper>New Hcp</Paper>
        </Grid>
        <Grid item>
          <Paper>Old Hcp</Paper>
        </Grid>
        <Grid item>
          <Paper>BnR</Paper>
        </Grid>
        <Grid item>
          <Paper>8onBrks</Paper>
        </Grid>
        <Grid item>
          <Paper>Matchwins</Paper>
        </Grid>
        <Grid item>
          <Paper>Weeks Played</Paper>
        </Grid>
        <Grid item>
          <Paper>Total Points</Paper>
        </Grid>
        {fetchError && <p>{fetchError}</p>}
        {players && (
          <Grid item lg={12}>
            {players.map((player) => (
              <TeamCard key={player.id} player={player} />
            ))}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default TeamPage;
