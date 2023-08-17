import { createStore } from 'vuex'
import moduleUser from './user.js';

const store = new createStore({
  modules: {
    'm_user': moduleUser
  }
});

export default store;