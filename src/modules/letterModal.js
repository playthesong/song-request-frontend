const OPEN_MODAL = "letterModal/OPEN_MODAL";
const CLOSE_MODAL = "letterModal/CLOSE_MODAL";
const LOAD_LETTER = "letterModal/LOAD_LETTER";
const CHANGE_MODAL_TYPE = "letterModal/CHANGE_MODAL_TYPE";
const MOUSE_ENTER = "letterModal/MOUSE_ENTER";
const MOUSE_LEAVE = "letterModal/MOUSE_LEAVE";
const TOGGLE_MENU = "letterModal/TOGGLE_MENU";

export const openModal = () => ({ type: OPEN_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const loadLetter = letterId => ({ type: LOAD_LETTER, letterId });
export const changeModalType = modalType => ({
  type: CHANGE_MODAL_TYPE,
  modalType
});
export const mouseEnter = () => ({ type: MOUSE_ENTER });
export const mouseLeave = () => ({ type: MOUSE_LEAVE });
export const toggleMenu = () => ({ type: TOGGLE_MENU });

const initialState = {
  isOpened: false,
  modalType: null,
  letterId: null,
  isMouseEnter: false,
  isMenuOpen: false
};

function letterModal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpened: true
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
    case MOUSE_ENTER:
      return {
        ...state,
        isMouseEnter: true
      };
    case MOUSE_LEAVE:
      return {
        ...state,
        isMouseEnter: false
      };
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    default:
      return state;
  }
}

export default letterModal;
