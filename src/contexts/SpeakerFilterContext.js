import React from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

const SpeakerFilterContext = React.createContext();

const SpeakerFilterProvider = ({ children, startingShowSessions = false }) => {
  const { showSessions, setShowSessions } = useSpeakerFilter(startingShowSessions);

  return (
    <SpeakerFilterContext.Provider value={{ showSessions, setShowSessions }}>{children}</SpeakerFilterContext.Provider>
  );
};

export { SpeakerFilterProvider, SpeakerFilterContext };
