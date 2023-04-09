const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const user_regris = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'USER_REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'USER_REGISTER_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'USER_REGISTER_FAILED':
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

export default user_regris;
