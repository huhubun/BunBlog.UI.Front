export const state = () => ({
  username: null,
  accessToken: null,
  refreshToken: null
})

export const mutations = {
  set(state, currentUser) {
    state.username = currentUser.username
    state.accessToken = currentUser.accessToken
    state.refreshToken = currentUser.refreshToken
  }
}
