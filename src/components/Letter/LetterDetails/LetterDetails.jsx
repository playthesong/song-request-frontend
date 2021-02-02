import React, { useEffect, useState } from "react";
import ModalTemplate from "../../Modal/ModalTemplate";
import LetterDetailsHiddenMenu from "./LetterDetailsHiddenMenu";
import LetterModalForm from "../LetterModal/LetterModalContents/LetterModalForm";
import LetterDetailsSong from "./LetterDetailsSong";
import LetterDetailsSongStory from "./LetterDetailsSongStory";
import useForm from "../../../hooks/useForm";
import LetterModalTemplate from "../LetterModal/LetterModalTemplate";
import LetterDetailsUser from "./LetterDetailsUser";
import LetterModalDiv from "../LetterModal/LetterModalContents/LetterModalDiv";
import LetterDetailsHiddenMenuButton from "./LetterDetailsHiddenMenuButton";

const LetterDetails = ({ letter, isOpened, onCloseModal }) => {
  const { id, song, songStory, createdDateTime, user } = letter;
  const { title, artist, imageUrl } = song;
  const [openMenu, setOpenMenu] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [visible, setVisible] = useState(false);

  const [form, onChange, onClear] = useForm({
    title,
    artist,
    imageUrl
  });

  const changeToForm = () => {
    setIsForm(true);
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    setOpenMenu(false);
    setIsForm(false);
  }, [setOpenMenu, setIsForm]);

  return (
    <ModalTemplate isOpened={isOpened}>
      <LetterModalTemplate
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <LetterDetailsHiddenMenuButton
          visible={visible}
          onClick={() => setOpenMenu(!openMenu)}
        />
        {openMenu && <LetterDetailsHiddenMenu changeToForm={changeToForm} />}
        {isForm ? (
          <LetterModalForm>
            <LetterDetailsSong
              song={song}
              onChange={onChange}
              form={form}
              isForm={isForm}
            />
            <LetterDetailsSongStory songStory={songStory} isForm={isForm} />
            <LetterDetailsUser user={user} createdDateTime={createdDateTime} />
          </LetterModalForm>
        ) : (
          <LetterModalDiv>
            <LetterDetailsSong
              song={song}
              onChange={onChange}
              form={form}
              isForm={isForm}
            />
            <LetterDetailsSongStory songStory={songStory} isForm={isForm} />
            <LetterDetailsUser user={user} createdDateTime={createdDateTime} />
          </LetterModalDiv>
        )}
      </LetterModalTemplate>
    </ModalTemplate>
  );
};

export default LetterDetails;
