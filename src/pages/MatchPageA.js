import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const MatchPageA = () => {
  const navigate = useNavigate();

  const [matplayername, setPlayernamemat] = useState("");
  const [player_id, setPlayer_id] = useState("");
  const [matteamname, setTeamnamemat] = useState("");
  const [matnhandicap, setNhandicapmat] = useState("");
  const [matracegames, setRacegamesmat] = useState("");
  const [matgameswon, setGameswonmat] = useState("");
  const [matbreakruns, setBreakrunsmat] = useState("");
  const [mateightbreaks, setEightbreaksmat] = useState("");
  const [mattotalpoints, setTotalpointsmat] = useState("");
  const [matwinorloss, setWinorlossmat] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!matplayername || !matteamname || !matnhandicap) {
      setFormError("Please fill in stupid the fields correctly.");
      return;
    }

    const { data, error } = await supabase.from("matches").insert([
      {
        player_id,
        matplayername,
        matteamname,
        matnhandicap,
        matracegames,
        matgameswon,
        matbreakruns,
        mateightbreaks,
        mattotalpoints,
        matwinorloss,
      },
    ]);

    if (error) {
      setFormError("Please fill in all the fields correctly.");
    } else if (data) {
      setFormError("null");
    }
    navigate("/home");
  };

  return (
    <div className="page create">
      <p className="success-card">Match Player A</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="player_id">Player ID:</label>
        <input
          type="number"
          id="player_id"
          value={player_id}
          onChange={(e) => setPlayer_id(e.target.value)}
        />

        <label htmlFor="matplayername">Player Name:</label>
        <input
          type="text"
          id="matplayername"
          value={matplayername}
          onChange={(e) => setPlayernamemat(e.target.value)}
        />

        <label htmlFor="matteamname">Team Name:</label>
        <input
          type="text"
          id="matteamname"
          value={matteamname}
          onChange={(e) => setTeamnamemat(e.target.value)}
        />

        <label htmlFor="matnhandicap">Handicap:</label>
        <input
          type="number"
          id="matnhandicap"
          value={matnhandicap}
          onChange={(e) => setNhandicapmat(e.target.value)}
        />

        <label htmlFor="matracegames">Race:</label>
        <input
          type="number"
          id="matracegames"
          value={matracegames}
          onChange={(e) => setRacegamesmat(e.target.value)}
        />

        <label htmlFor="matgameswon">Games Won:</label>
        <input
          type="number"
          id="matgameswon"
          value={matgameswon}
          onChange={(e) => setGameswonmat(e.target.value)}
        />

        <label htmlFor="matbreakruns">Players total break and runs:</label>
        <input
          type="number"
          id="matbreakruns"
          value={matbreakruns}
          onChange={(e) => setBreakrunsmat(e.target.value)}
        />

        <label htmlFor="mateightbreaks">Players total 8s on breaks:</label>
        <input
          type="number"
          id="mateightbreaks"
          value={mateightbreaks}
          onChange={(e) => setEightbreaksmat(e.target.value)}
        />

        <label htmlFor="mattotalpoints">Players total match points:</label>
        <input
          type="number"
          id="mattotalpoints"
          value={mattotalpoints}
          onChange={(e) => setTotalpointsmat(e.target.value)}
        />

        <label htmlFor="matwinorloss">Player Won:</label>
        <input
          type="boolean"
          id="matwinorloss"
          value={matwinorloss}
          onChange={(e) => setWinorlossmat(e.target.value)}
        />

        <button>Create Player Match</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default MatchPageA;
