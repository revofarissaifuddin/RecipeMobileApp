const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const user_resetPwd = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'RESET_PASSWORD_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'RESET_PASSWORD_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'RESET_PASSWORD_FAILED':
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

export default user_resetPwd;
