import React, { useState } from "react";
import { musicList } from "./music";

const musicNamelist: Record<string, string> = {
  q: "Heater 1",
  e: "Heater 2",
  w: "Heater 3",
  a: "Heater 4",
  s: "Clap",
  d: "Open-HH",
  z: "Kick-n'-Hat",
  x: "Kick",
  c: "Closed-HH",
};
const drumList = ["Q", "E", "W", "A", "S", "D", "Z", "X", "C"];
const DrumMachine = () => {
  const [musicName, setMusicName] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleQ = (name: string) => {
    setIsClicked(true);
    setMusicName(musicNamelist[name.toLowerCase()]);
    const audio = new Audio(musicList[name.toLowerCase()]);
    audio.play();
  };
  return (
    <div id="drum-machine">
      <div id="display">
        {drumList.map((drum, index) => {
          return (
            <button
              className="drum-pad"
              key={index}
              onClick={() => handleQ(drum)}
            >
              {drum}
            </button>
          );
        })}
      </div>
      {isClicked && <div className="show">{musicName}</div>}
    </div>
  );
};

export default DrumMachine;
