import supabase from "../config/supabaseClient";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
      // forward to success URL
      navigate("/success");
    } else {
      // forward to  localhost:3000
      navigate("/");
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["google"]}
        />
      </header>
    </div>
  );
}

export default Login;
