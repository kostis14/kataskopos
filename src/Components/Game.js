import { Avatar, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import spyimg from "../spy.png";

function Game() {
  const { state } = useLocation();
  console.log(state);
  const time = state.time;
  const playerCount = state.playerCount;
  const navigate = useNavigate();
  let places = [
    {
      name: "Αεροπλάνο",
      roles: [
        "Επιβάτης Πρώτης Θέσης",
        "Επιβάτης Οικονομικής Θέσης",
        "Μηχανικός",
        "Λαθροεπιβάτης",
        "Αλλαχ Ακμπαρ",
        "Αεροσυνοδός",
        "Πιλότος",
      ],
    },
    {
      name: "Internet Cafe",
      roles: [
        "Ιδιοκτήτης",
        "Μπεμπρι",
        "Συντηρητής Υπολογιστών",
        "Λολιστας",
        "Ο Νταης",
        "Ο τζογαδόρος",
      ],
      name: "Γήπεδο",
      roles: [
        "Εκφωνητής",
        "Αζούδης",
        "Φύλακας",
        "Παίχτης",
        "Προπονητής",
        "Εν καρα Μέσσι",
        "Μαραντονα",
        "Θεατής",
        "Διαιτητής",
      ],
      name: "ΟΠΑΠ",
      roles: [
        "Αλι",
        "Καράφλας",
        "Αζούδης",
        "Παππους που παιζει Κίνο",
        "25λεπτος Virtualας",
        "Ο μπηκα για τουαλετα και πρεπει να κανω οτι θα παιξω",
        "Ο υπολογιστάκιας",
        "Αυτος που καθεται μονο απεξω",
      ],
      name: "Ραλετάντο",
      roles: [
        "Η Κειτ",
        "Σερβιτορος",
        "Μάρκα",
        "Πορτιέρης",
        "Πελάτης",
        "Καθαρίστρια",
        "PDA",
      ],
      name: "χώροι Παρτι ΑΠΘ",
      roles: [
        "Λεσβία",
        "Γκει",
        "Χουλιγκαν",
        "Τραγουδιστης",
        "Φασιστας",
        "Απλός Φοιτητής",
        "Καθηγητής",
      ],
      name: "Σπιτι Λότζι",
      roles: [
        "Ο Λότζι",
        "Η γιαγια Λοτζι",
        "Η Ουκρανέζα",
        "Η Νταντά",
        "Ραντομ Θοτακι",
        "Μους",
        "Κλεφτης",
      ],
      name: "Μπιλιαρδο",
      roles: [
        "Γιαννης Μπολντ Γκαι",
        "Καυλα Σερβιτόρα",
        "Αχρηστος Πελάτης",
        "Επαγγελματίας Πελάτης",
        "Παππουληθ",
        "Καθαριστής",
        "Μπάρμαν",
      ],
    },
  ];
  const [place, setPlace] = React.useState("");
  const [spyTurn, setSpyTurn] = React.useState(0);

  useEffect(() => {
    setPlace(places[Math.floor(Math.random() * places.length)]);
    setSpyTurn(Math.floor(Math.random() * playerCount));
  }, []);

  return (
    <div className="main flex w-max h-max">
      <div className=" flex w-screen h-screen justify-center items-center flex-col bg-redish ">
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-dark my-10 rounded-sm ">
          <div className="flex flex-col items-center justify-center w-screen h-screen bg-dark my-10 rounded-sm">
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
                  <div className="descriptionMessage mt-20 mb-40 text-2xl font-medium text-light flex items-center flex-col text-center">
                    <h1
                      style={{
                        marginBottom: "40px",
                      }}
                    >
                      Αρχισε το παιχνίδι
                    </h1>

                    <Button
                      variant="contained"
                      color="primary"
                      className="startButton"
                      onClick={() => {
                        navigate("/roleDisplay", {
                          state: {
                            playerCount: state.playerCount,
                            place: place,
                            spyTurn: spyTurn,
                            time: time,
                          },
                        });
                      }}
                    >
                      ΕΠΟΜΕΝΟ
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
