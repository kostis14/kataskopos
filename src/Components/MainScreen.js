import { Avatar, Button } from "@mui/material";
import React from "react";
import spyimg from "../spy.png";
import useSound from "use-sound";
import mySound from "../Sneaky-Snitch.mp3"; // Your sound file path here
import buttonSound from "../start-13691.mp3";
import { useNavigate } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PlayDisabledIcon from "@mui/icons-material/PlayDisabled";

function MainScreen() {
  const [playSound, exposedData] = useSound(mySound, { volume: 0.5 }); // 70% of the original volume
  const [musicPlaying, setMusicPlaying] = React.useState(false);
  const [playButtonSound] = useSound(buttonSound, { volume: 0.3 }); // 70% of the original volume
  //play the sound on page load
  const navigate = useNavigate();
  React.useEffect(() => {
    if (exposedData !== undefined) {
      exposedData.stop();

      setMusicPlaying(false);
    }
  }, []);

  return (
    <div className="flex w-max h-max ">
      <div className="container  flex w-screen h-screen justify-center items-center flex-col">
        <div className="avatar  ">
          <Avatar
            className="mb-3"
            src={spyimg}
            sx={{ width: 200, height: 200, bgcolor: "#982649" }}
          />
        </div>
        <div className="welcomeMessage text-4xl font-bold text-light">
          <h1>Κατάσκοπος</h1>
        </div>
        <div className="music">
          <Button
            className="musicButton"
            onClick={() => {
              if (musicPlaying) {
                exposedData.stop();
                setMusicPlaying(false);
              } else {
                exposedData.stop();
                playSound();
                setMusicPlaying(true);
              }
            }}
          >
            {" "}
            {!musicPlaying ? (
              <PlayCircleIcon sx={{ width: 45, height: 45, color: "cyan" }} />
            ) : (
              <PlayDisabledIcon
                sx={{ width: 45, height: 45, color: "green" }}
              />
            )}
          </Button>
        </div>
        <div className="descriptionMessage mt-20 mb-40 text-2xl font-medium text-light flex items-center flex-col text-center">
          <h1>Καλωσήρθες στον κόσμο του κατασκόπου</h1>

          <h1
            style={{
              marginTop: "15px",
            }}
          >
            Πατήστε το κουμπί <br /> για να ξεκινήσετε
          </h1>

          <Button
            variant="contained"
            onClick={() => {
              playButtonSound();
              navigate("/settings", { state: "Hello World!" });
            }}
            style={{
              fontFamily: "Roboto Condensed",
              fontWeight: "bold",
              marginTop: "15px",
              backgroundColor: "#982649",
            }}
          >
            ΠΑΜΕ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
