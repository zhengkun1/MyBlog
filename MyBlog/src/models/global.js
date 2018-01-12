export default {

  namespace: 'global',

  state: {
    essay: '',
  },

  effects: {
    *self(_, { put }) {
      yield put({
        type: 'add',
        payload: 'nihao',
      });
    },
  },
  reducers: {
    add(state, payload) {
      return {
        ...state,
        essay: payload,
      };
    },
  },
};
