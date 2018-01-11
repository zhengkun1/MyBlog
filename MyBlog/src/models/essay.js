export default {
  namespace: 'essay',

  state: {
  },

  effects: {
    *essay(_, { put }) {
      yield put({
        type: 'loadessay',
        paload: 'nihao',
      });
    },
  },
};
