const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const ForgotPwd = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'FORGOT_PASSWORD_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'FORGOT_PASSWORD_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'FORGOT_PASSWORD_FAILED':
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

export default ForgotPwd;
