
import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  LOGOUT_USER,
  VERIFY_EMAIL_BEGIN,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_ERROR,
  FORGOT_PASSWORD_BEGIN,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD_BEGIN,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  TOGGLE_SIDEBAR,
  UPLOAD_IMAGE_BEGIN,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_ERROR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "./actions";



const authReducer = (state, action) => {
  switch (action.type) {
    // REGISTER
    case REGISTER_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        showAlert: true,
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
      };
    // VERIFY EMAIL
    case VERIFY_EMAIL_BEGIN:
      return {
        ...state,
        isLoading: true,
        isVerifyLoading: true,
        isVerifyError: false,
      };
    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isVerifyLoading: false,
        isVerifyError: false,
      };
    case VERIFY_EMAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        isVerifyLoading: false,
        isVerifyError: true,
      };
    // LOGIN
    case LOGIN_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        showAlert: true,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
      };
    // FORGOT PASSWORD
    case FORGOT_PASSWORD_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userEmail: action.payload.email,
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    // RESET PASSWORD
    case RESET_PASSWORD_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    // GET CURRENT USER
    case GET_CURRENT_USER_BEGIN:
      return {
        ...state,
        userLoading: true,
      };
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        user: action.payload.user,
      };
    // UPLOAD PHOTO
    case UPLOAD_IMAGE_BEGIN:
      return {
        ...state,
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
      };
    case UPLOAD_IMAGE_ERROR:
      return {
        ...state,
      };
    // UPDATE USER
    case UPDATE_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    // LOGOUT
    case LOGOUT_USER:
      return {
        ...state,
        userLoading: false,
        user: null,
      };
    // TOGGLE SIDEBAR
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarToggle: !state.isSidebarToggle,
      };
    default:
      throw new Error(`No such action : ${action.type}`);
  }
};

export default authReducer;
