const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const ConfirmOtp = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'CONF_OTP_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'CONF_OTP_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'CONF_OTP_FAILED':
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

export default ConfirmOtp;
