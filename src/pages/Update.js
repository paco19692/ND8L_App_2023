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
  const [breakrun, setBreakrun] = useState("");
  const [eightbrk, setEightbrk] = useState("");
  const [matchwins, setMatchwins] = useState("");
  const [weeksplyd, setWeeksplyd] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !playername ||
      !teamname ||
      !Nhandicap ||
      !Ohandicap ||
      !Ptotalpoints ||
      !breakrun ||
      !eightbrk ||
      !matchwins ||
      !weeksplyd
    ) {
      setFormError("Please fill in all the fields correctly.");
      return;
    }

    const { data, error } = await supabase
      .from("players")
      .update({
        playername,
        teamname,
        Nhandicap,
        Ohandicap,
        Ptotalpoints,
        breakrun,
        eightbrk,
        matchwins,
        weeksplyd,
      })
      .eq("id", id);

    if (error) {
      console.log(error);
      setFormError("Please fill all the fields correctly");
    }
    if (data) {
      console.log(data);
      setFormError("null");
      navigate("/home");
    }
  };

  useEffect(() => {
    const fetchPlayer = async () => {
      const { data, error } = await supabase
        .from("players")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/home", { replace: true });
      }
      if (data) {
        setPlayername(data.playername);
        setTeamname(data.teamname);
        setNhandicap(data.Nhandicap);
        setOhandicap(data.Ohandicap);
        setPtotalpoints(data.Ptotalpoints);
        setEightbrk(data.eightbrk);
        setBreakrun(data.breakrun);
        setMatchwins(data.matchwins);
        setWeeksplyd(data.weeksplyd);
       }
    };

    fetchPlayer();
  }, [id, navigate]);

  return (
    <div className="page update">
      <form onSubmit={handleSubmit}>
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

        <label htmlFor="breakrun">Players total break and runs:</label>
        <input
          type="number"
          id="breakrun"
          value={breakrun}
          onChange={(e) => setBreakrun(e.target.value)}
        />

        <label htmlFor="eightbrk">Players total 8s on breaks:</label>
        <input
          type="number"
          id="eightbrk"
          value={eightbrk}
          onChange={(e) => setEightbrk(e.target.value)}
        />

        <label htmlFor="matchwins">Players total match wins:</label>
        <input
          type="number"
          id="matchwins"
          value={matchwins}
          onChange={(e) => setMatchwins(e.target.value)}
        />

        <label htmlFor="weeksplyd">Players total weeks played:</label>
        <input
          type="number"
          id="weeksplyd"
          value={weeksplyd}
          onChange={(e) => setWeeksplyd(e.target.value)}
        />

        <button>Update Player Record</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Update;
