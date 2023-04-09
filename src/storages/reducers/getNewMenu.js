const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const newMenu = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_MENU_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'GET_MENU_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'GET_MENU_FAILED':
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

export default newMenu;
