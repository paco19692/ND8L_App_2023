import { Link } from "react-router-dom";

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <h3>{player.playername}</h3>
      <p>{player.teamname}</p>
      <div className="newhandicap">{player.Nhandicap}</div>
      <div className="buttons">
        <Link to={"/" + player.id}>
          <i className="material-icons">edit</i>
        </Link>
      </div>
    </div>
  );
};
export default PlayerCard;
