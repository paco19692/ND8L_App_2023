import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Success() {
  const [user, setUser] = useState({});
  // added line below
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        //value.data.user
        if (value.data?.user) {
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    //added if statement below
    navigate("/");
  }

  return (
    <div className="App">
      <header className="App-header">
        {Object.keys(user).length !== 0 ? (
          <>
            <div className="success-card">
              <h1>Success</h1>
              <button onClick={() => signOutUser()}>Sign Out</button>
            </div>
          </>
        ) : (
          <>
            <div className="success-card">
              <h1>User is not logged in</h1>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                Go back to log in
              </button>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default Success;
