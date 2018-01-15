export default {

  namespace: 'essay',

  state: {
    essay: [
      {
        title: '你好',
        content: '他们可能和你我一样。没房子，没钱。没对象。z爱办公室里被老板逼业绩，过年回老家被逼婚，她尤其喜欢吃甜食，精致的蛋糕、松软的面包、酥脆的饼干都是她的心头好，“甜食可以让人心情愉快”——她这样解释。所以，城市里有头有脸的西点屋她几乎都办了张会员卡',
        picture: 'http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg',
        key: 1,
      },
      {
        title: 'HELLO',
        content: '他们可能和你我一样。没房子，没钱。没对象。z爱办公室里被老板逼业绩，过年回老家被逼婚，她尤其喜欢吃甜食，精致的蛋糕、松软的面包、酥脆的饼干都是她的心头好，“甜食可以让人心情愉快”——她这样解释。所以，城市里有头有脸的西点屋她几乎都办了张会员卡',
        picture: 'http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg',
        key: 2,
      },
      {
        title: '我叫刘琦',
        content: '他们可能和你我一样。没房子，没钱。没对象。z爱办公室里被老板逼业绩，过年回老家被逼婚，她尤其喜欢吃甜食，精致的蛋糕、松软的面包、酥脆的饼干都是她的心头好，“甜食可以让人心情愉快”——她这样解释。所以，城市里有头有脸的西点屋她几乎都办了张会员卡',
        picture: 'http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg',
        key: 3,
      },
      {
        title: '是个智障',
        content: '他们可能和你我一样。没房子，没钱。没对象。z爱办公室里被老板逼业绩，过年回老家被逼婚，她尤其喜欢吃甜食，精致的蛋糕、松软的面包、酥脆的饼干都是她的心头好，“甜食可以让人心情愉快”——她这样解释。所以，城市里有头有脸的西点屋她几乎都办了张会员卡',
        picture: 'http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg',
        key: 4,
      },
      {
        title: '是个傻逼',
        content: '他们可能和你我一样。没房子，没钱。没对象。z爱办公室里被老板逼业绩，过年回老家被逼婚，她尤其喜欢吃甜食，精致的蛋糕、松软的面包、酥脆的饼干都是她的心头好，“甜食可以让人心情愉快”——她这样解释。所以，城市里有头有脸的西点屋她几乎都办了张会员卡',
        picture: 'http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg',
        key: 5,
      },
    ],
  },

  effects: {
    *essay(_, { put }) {
      yield put({
        type: 'loadessay',
        paload: 'nihao',
      });
    },
  },

  reducers: {
    loadessay(state, paload) {
      return {
        ...state,
        essay: paload,
      };
    },
  },
};
