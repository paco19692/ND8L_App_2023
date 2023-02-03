import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [playername, setPlayername] = useState("");
  const [teamname, setTeamname] = useState("");
  const [Nhandicap, setNhandicap] = useState("");
  const [Ohandicap, setOhandicap] = useState("");
  const [Ptotalpoints, setPtotalpoints] = useState("");

  useEffect(() => {
    const fetchPlayer = async () => {
      const { data, error } = await supabase
        .from("players")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }
      if (data) {
        setPlayername(data.playername);
        setTeamname(data.teamname);
        setNhandicap(data.Nhandicap);
        setOhandicap(data.Ohandicap);
        setPtotalpoints(data.Ptotalpoints);
        console.log(data);
      }
    };

    fetchPlayer();
  }, [id, navigate]);

  return (
    <div className="page update">
      <form>
        <label htmlFor="playername">Player Name:</label>
        <input
          type="text"
          id="playername"
          value={playername}
          onChange={(e) => setPlayername(e.target.value)}
        />

        <label htmlFor="teamname">Team Name:</label>
        <textarea
          id="teamname"
          value={teamname}
          onChange={(e) => setTeamname(e.target.value)}
        />

        <label htmlFor="Nhandicap">New Handicap:</label>
        <input
          type="number"
          id="Nhandicap"
          value={Nhandicap}
          onChange={(e) => setNhandicap(e.target.value)}
        />

        <label htmlFor="Ohandicap">Old Handicap:</label>
        <input
          type="number"
          id="Ohandicap"
          value={Ohandicap}
          onChange={(e) => setOhandicap(e.target.value)}
        />

        <label htmlFor="Ptotalpoints">Players total points:</label>
        <input
          type="number"
          id="Ptotalpoints"
          value={Ptotalpoints}
          onChange={(e) => setPtotalpoints(e.target.value)}
        />

        <button>Update Player Record</button>

        {/*formError && <p className="error">{formError}</p>*/}
      </form>
    </div>
  );
};

export default Update;
