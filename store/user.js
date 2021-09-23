export const state = () => ({
  token: {},
  user: {},
  isAdmin: ""
});

export const mutations = {
    SET_TOKEN(state, payload) {
        state.token = payload;
    },
    SET_USER(state, payload) {
        state.user = payload;
    },
    SET_ISADMIN(state, payload) {
        state.isAdmin = payload;
    },
}

export const getters = {
    getToken(state) {
        return state.token
    }
}
