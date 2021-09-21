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
        if (payload === "super admin") {
            state.isAdmin = 1;
        }
    },
}

export const getters = {
    getToken(state) {
        return state.token
    }
}
