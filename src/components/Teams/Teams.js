import React from "react";
import Team from "../Team/Team";
import "./Teams.css";

const teamsMember = [
  {
    id: "1",
    name: "Jhin Slem",
    img: "https://i.ibb.co/8br3cc4/rsz-pexels-gustavo-fring-4173248.jpg",
  },
  {
    id: "2",
    name: "Olina Roy",
    img: "https://i.ibb.co/GvQrtc7/rsz-1pexels-pavel-danilyuk-5998470.jpg",
  },
  {
    id: "3",
    name: "Stem jon",
    img: "https://i.ibb.co/yqLZDDv/rsz-pexels-gustavo-fring-4173239.jpg",
  },
  {
    id: "4",
    name: "Alexa Sinha",
    img: "https://i.ibb.co/SPkCzLV/rsz-pexels-andrea-piacquadio-3881791.jpg",
  },
  {
    id: "5",
    name: "Rose jestha",
    img: "https://i.ibb.co/fCgnstq/rsz-pexels-tima-miroshnichenko-5407206.jpg",
  },
];

const Teams = () => {
  return (
    <div className="App">
      <h1 className="text-success mt-5">World Class Dentists</h1>
      <div className="row-style">
        {teamsMember.map((team) => (
          <Team team={team} key={team.id}></Team>
        ))}
      </div>
    </div>
  );
};

export default Teams;
