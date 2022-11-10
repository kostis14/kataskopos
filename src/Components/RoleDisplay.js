import { Avatar, Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import spyimg from "../spy.png";

function RoleDisplay() {
  let { state } = useLocation();
  const playerCount = state.playerCount;
  const spyTurn = state.spyTurn;
  const time = state.time;
  const [countTurns, setCountTurns] = React.useState(0);
  const [showRole, setShowRole] = React.useState(false);
  const place = state.place;
  const [randomRole, setRandomRole] = React.useState(
    place.roles[Math.floor(Math.random() * place.roles.length)]
  );

  const navigate = useNavigate();
  console.log(state);
  return (
    <div>
      <div className="flex w-max h-max ">
        <div className="container  flex w-screen h-screen justify-center items-center flex-col">
          <div className="avatar bg-redish rounded-xl ">
            <Avatar
              className="mb-3"
              src={spyimg}
              sx={{ width: 200, height: 200 }}
            />
          </div>
          {showRole ? (
            <div className="descriptionMessage mt-20 mb-40  text-2xl font-medium text-light flex items-center flex-col text-center">
              <h1
                style={{
                  marginBottom: "20px",
                }}
              >
                {" "}
              </h1>
              <h1
                style={{
                  marginBottom: "40px",
                }}
              >
                {" "}
              </h1>

              <Button
                variant="contained"
                style={{
                  backgroundColor: "#982649",
                }}
                className="startButton"
                onClick={() => {
                  setShowRole(!showRole);
                }}
              >
                ΕΠΟΜΕΝΟ
              </Button>
            </div>
          ) : (
            <div className="descriptionMessage mt-20 mb-40 text-2xl font-medium text-light flex items-center flex-col text-center">
              <h1
                style={{
                  marginBottom: "20px",
                }}
              >
                Ο ρολος σου είναι:{" "}
                {countTurns == spyTurn ? "Κατασκοπος" : randomRole}
              </h1>
              <h1
                style={{
                  marginBottom: "40px",
                }}
              >
                Το μερος είναι: {countTurns == spyTurn ? "Aγνωστο" : place.name}
              </h1>

              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "#982649",
                }}
                className="startButton"
                onClick={() => {
                  setShowRole(!showRole);
                  setCountTurns(countTurns + 1);
                  setRandomRole(
                    place.roles[Math.floor(Math.random() * place.roles.length)]
                  );
                  console.log(countTurns);
                  if (countTurns == playerCount - 1) {
                    setCountTurns(0);

                    navigate("startedGame", {
                      state: {
                        time: time,
                      },
                    });
                  }
                }}
              >
                ΕΠΟΜΕΝΟ
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RoleDisplay;
