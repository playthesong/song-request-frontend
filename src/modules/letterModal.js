const OPEN_MODAL = "letterModal/OPEN_MODAL";
const CLOSE_MODAL = "letterModal/CLOSE_MODAL";
const CHANGE_MODAL_TYPE = "letterModal/CHANGE_MODAL_TYPE";
const LOAD_LETTER = "letterModal/LOAD_LETTER";
const ON_MOUSE_ENTER = "letterModal/ON_MOUSE_ENTER";
const ON_MOUSE_LEAVE = "letterModal/ON_MOUSE_LEAVE";

export const openModal = () => ({ type: OPEN_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const changeModalType = () => ({ type: CHANGE_MODAL_TYPE, modalType });
export const loadLetter = () => ({ type: LOAD_LETTER, letterId });
export const onMouseEnter = () => ({ type: ON_MOUSE_ENTER });
export const onMouseLeave = () => ({ type: ON_MOUSE_LEAVE });

const intialState = {
  isOpenModal: false,
  modalType: null,
  letterId: null,
  mouseEnter: false
};

function letterModal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpenModal: true
      };
    case CLOSE_MODAL:
      return initialState;
    case CHANGE_MODAL_TYPE:
      return {
        ...state,
        modalType: action.modalType
      };
    case LOAD_LETTER:
      return {
        ...state,
        letterId: action.letterId
      };
    case ON_MOUSE_ENTER:
      return {
        ...state,
        mouseEnter: true
      };
    case ON_MOUSE_LEAVE:
      return {
        ...state,
        mouseEnter: false
      };
    default:
      return state;
  }
}

export default letterModal;
