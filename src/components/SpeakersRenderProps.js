import React from "react";

const SpeakersRenderProps = ({ children }) => {
  const speakers = [
    { imageSrc: "speaker-1124", name: "Douglas Narinas" },
    { imageSrc: "speaker-1530", name: "Tamara Baker" },
    { imageSrc: "speaker-10803", name: "Eugene" },
  ];

  return children({
    speakers: speakers,
  });
};

export default SpeakersRenderProps;
