const LOGIN_SEND_OTP = '/getOtp';
const LOGIN_SUBMIT = '/login';
const GET_PROFILE = '/getProfileDetails';
const UPDATE_PROFILE = '/updateProfileDetails';
const RESET_PASSWORD = '/changePassword';
const LOGOUT_URL = '/logout';
const GET_ALL_VALUATORS_LIST = '/valuator/getAllValuatorDetails';
const UPDATE_VALUATOR = '/valuator/update';
const DELETE_VALUATOR = '/valuator/delete';
const ADD_DISPLAY_INFO = '/vehicle/display-info/create';
const VEHICLE = '/vehicle/list';

const addVehicleFormurl = (id?: string) =>
  id ? `/vehicle/createForm/${id}` : '/vehicle/createForm';
const updateDisplayInfo = (id: string) => `vehicle/display-info/edit/${id}`;

export {
  LOGIN_SEND_OTP,
  LOGIN_SUBMIT,
  GET_PROFILE,
  UPDATE_PROFILE,
  RESET_PASSWORD,
  LOGOUT_URL,
  GET_ALL_VALUATORS_LIST,
  UPDATE_VALUATOR,
  DELETE_VALUATOR,
  ADD_DISPLAY_INFO,
  VEHICLE,
  addVehicleFormurl,
  updateDisplayInfo,
};
