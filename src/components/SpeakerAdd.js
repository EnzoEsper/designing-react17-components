import React from "react";

const SpeakerAdd = ({ eventYear, insertRecord }) => {
  return (
    <a href="#" className="addSes">
      <i
        onClick={(e) => {
          e.preventDefault();
          const firstLast = window.prompt("Enter first and last name");
          const firstLastArray = firstLast.split(" ");
          insertRecord({
            id: "999",
            first: firstLastArray[0],
            last: firstLastArray[1],
            bio: "Bio not entered yet",
            sessions: [
              {
                id: "999",
                title: `New session for ${firstLastArray[0]}`,
                room: {
                  name: "Room not entered yet",
                },
                eventYear,
              },
            ],
          });
        }}
      >
        +
      </i>
    </a>
  );
};

export default SpeakerAdd;
