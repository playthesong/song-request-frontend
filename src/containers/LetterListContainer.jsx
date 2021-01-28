import React, { useState, useEffect } from "react";
import { getLetters } from "../api/letters";
import LetterList from "../components/Letter/LetterList";

const LetterListContainer = () => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const fetchLetters = async () => {
      const fetchedLetters = await getLetters();
      setLetters(fetchedLetters);
    };
    fetchLetters();
  }, [letters]);

  return <LetterList letters={letters} />;
};

export default LetterListContainer;
