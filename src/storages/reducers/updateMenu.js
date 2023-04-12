const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const updateMenu = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'UPDATE_EDIT_MENU_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'UPDATE_EDIT_MENU_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'UPDATE_EDIT_MENU_FAILED':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    default:
      return state;
  }
};

export default updateMenu;
