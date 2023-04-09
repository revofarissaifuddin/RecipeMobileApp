const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const detail = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_DETAIL_MENU_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'GET_DETAIL_MENU_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'GET_DETAIL_MENU_FAILED':
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

export default detail;
