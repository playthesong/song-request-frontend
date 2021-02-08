import React from "react";
import LetterModalUser from "../LetterModal/LetterModalUser/LetterModalUser";

const LetterEditorUser = ({ user, createdDateTime }) => {
  return <LetterModalUser user={user} createdDateTime={createdDateTime} />;
};

export default LetterEditorUser;
