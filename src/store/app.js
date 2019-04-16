import axios from 'axios';
import { message } from 'antd';

const TYPES = {
  UPDATE_STATE: Symbol('UPDATE_STATE'),
};
const SUCCESS_CODE = 20000;

const initialState = {
  visible: false,
  modalTitle: '注册',
  modalStatus: 'register',
  isAuth: true,
};

exports.actions = {
  updateState: (payload) => (dispatch) => {
    dispatch({
      type: TYPES.UPDATE_STATE,
      payload,
    });
  },
  register: (params) => (dispatch) => {
    return axios({
      url: '/user/register',
      method: 'POST',
      data: params,
    }).then((res) => {
      const code = res.data.statusCode;

      if (code !== SUCCESS_CODE) {
        message.error(res.message);
      }
      dispatch({
        type: TYPES.UPDATE_STATE,
        payload: {
          isAuth: true,
          visible: false,
        },
      });
    });
  },
  login: (params) => (dispatch) => {
    return axios({
      url: '/user/login',
      method: 'POST',
      data: params,
    }).then((res) => {
      const code = res.data.statusCode;

      if (code !== SUCCESS_CODE) {
        message.error(res.message);
      }
      dispatch({
        type: TYPES.UPDATE_STATE,
        payload: {
          isAuth: true,
          visible: false,
        },
      });
    });
  },
  logout: () => (dispatch) => {
    return axios({
      url: '/user/logout',
      method: 'POST',
    }).then((res) => {
      const code = res.data.statusCode;

      if (code !== SUCCESS_CODE) {
        message.error(res.message);
      }
      dispatch({
        type: TYPES.UPDATE_STATE,
        payload: {
          isAuth: false,
        },
      });
    });
  },
};

export default (state = initialState, { type, payload }) => {
  if (type === TYPES.UPDATE_STATE) {
    return {
      ...state,
      ...payload,
    };
  }
  return state;
};
