const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <h3>{player.playername}</h3>
      <p>{player.teamname}</p>
      <div className="newhandicap">{player.Nhandicap}</div>
    </div>
  );
};
export default PlayerCard;
