import { message } from 'antd';
import { contactfunc } from '../services/contact';

export default {
  namespace: 'contact',
  state: {
    name: '',
    email: '',
    message: '',
  },
  effects: {
    * submit({ paload }, { put, select }) {
      const contact = yield select(state => state.contact);
      const sucess = yield put(contactfunc, contact);
      if (sucess) {
        message.sucess('发送成功');
      } else {
        message.error('发送失败');
      }
    },
  },
  reducers: {
    wirteName(state, { paload }) {
      return {
        ...state,
        name: paload.names,
      };
    },
    writeEmail(state, { paload }) {
      return {
        ...state,
        email: paload.email,
      };
    },
    wiriteMessage(state, { paload }) {
      return {
        ...state,
        message: paload.message,
      };
    },
  },
};
