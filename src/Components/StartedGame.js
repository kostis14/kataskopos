import { Avatar, Button } from "@mui/material";
import React from "react";
import Countdown from "react-countdown";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import spyimg from "../spy.png";

function StartedGame() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [completed, setCompleted] = React.useState(false);
  return (
    <div className="gameStartMessage">
      <div className="flex w-max h-max ">
        <div className="container  flex w-screen h-screen justify-center items-center flex-col">
          <div className="avatar  ">
            <Avatar
              className="mb-3"
              src={spyimg}
              sx={{ width: 200, height: 200, bgcolor: "#982649" }}
            />
          </div>
          <div className="descriptionMessage mt-20 mb-40 text-4xl font-medium text-light flex items-center flex-col text-center">
            <h1
              style={{
                marginBottom: "40px",
              }}
            >
              <Countdown
                date={Date.now() + state.time * 1000}
                onComplete={() => {
                  setCompleted(true);
                }}
              />
            </h1>
            <Button
              variant="contained"
              color="primary"
              disabled={!completed}
              style={{
                backgroundColor: "#982649",
              }}
              className="startButton"
              onClick={() => {
                navigate("/");
              }}
            >
              ΠΑΙΞΕ ΞΑΝΑ
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#982649",
                marginTop: "20px",
              }}
              className="startButton"
              onClick={() => {
                navigate("/");
              }}
            >
              ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΑΡΧΙΚΗ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartedGame;
