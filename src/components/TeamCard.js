import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const TeamCard = ({ player }) => {
  return (
    <Container>
      <Grid container>
        <Grid item lg={3}>
          {player.playername}
        </Grid>
        <Grid item lg={2}>
          {player.teamname}
        </Grid>
        <Grid item>{player.Nhandicap}</Grid>
        <Grid item>{player.Ohandicap}</Grid>
        <Grid item>{player.breakrun}</Grid>
        <Grid item>{player.eightbrk}</Grid>
        <Grid item>{player.matchwins}</Grid>
        <Grid item>{player.weeksplyd}</Grid>
        <Grid item>{player.Ptotalpoints}</Grid>
      </Grid>
    </Container>
  );
};

export default TeamCard;
