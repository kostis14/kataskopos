import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import spyimg from "../spy.png";

import useSound from "use-sound";
import buttonSound from "../start-13691.mp3";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const [playButtonSound] = useSound(buttonSound, { volume: 0.3 }); // 70% of the original volume
  const [playerCount, setPlayerCount] = React.useState(0);
  const [settingsSet, setSettingsSet] = React.useState(true);
  const [time, setTime] = React.useState(0);
  return (
    <div className="main flex w-max h-max">
      <div className=" flex w-screen h-screen justify-center items-center flex-col bg-redish ">
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-dark my-10 rounded-sm ">
          <div className="settings">
            <h1 className="text-4xl font-bold text-light">Ρυθμίσεις</h1>
          </div>
          <div className="settingsContainer"></div>
          <div className="playerCount text-xl font-bold text-light flex flex-col items-center mt-20">
            <h1 className="">Αριθμος Παιχτων</h1>
            <FormControl sx={{ m: 1, minWidth: 60 }}>
              <Select
                defaultValue=""
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                sx={{
                  backgroundColor: "#fffffc",
                }}
                onChange={(e) => {
                  setPlayerCount(e.target.value);
                }}
              >
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={13}>13</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="playerCount text-xl font-bold text-light flex flex-col items-center mt-10">
            <h1 className="">Χρόνος</h1>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                defaultValue=""
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                sx={{
                  backgroundColor: "#fffffc",
                }}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              >
                <MenuItem value={180}>3:00</MenuItem>
                <MenuItem value={360}>6:00</MenuItem>
                <MenuItem value={540}>9:00</MenuItem>
                <MenuItem value={720}>12:00</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="playButton mt-10 flex flex-col text-redish ">
            {!settingsSet ? (
              <h1>Παρακαλω επιλέξτε ολες τις ρυθμίσεις</h1>
            ) : (
              <h1></h1>
            )}

            <Button
              onClick={() => {
                if (playerCount === 0 || time === 0) {
                  setSettingsSet(false);
                } else {
                  playButtonSound();
                  navigate("/Game", {
                    state: { playerCount: playerCount, time: time },
                  });
                }
              }}
              variant="contained"
              style={{
                fontFamily: "Roboto Condensed",
                fontWeight: "bold",
                marginTop: "15px",
                backgroundColor: "#982649",
              }}
            >
              ΕΝΑΡΞΗ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
