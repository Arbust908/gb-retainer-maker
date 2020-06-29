export const state = () => ({
  filter: 'all',
  all: [],
  active: {
    signature_name: 'Placeholder Maker',
    worst_is_active: false,
    worst: { stat: null, mod: 0 },
    second: { stat: null, mod: 0 },
    first: { stat: null, mod: 0 },
    AC: 12,
    level: 2,
    name: 'Placholder Boi',
    culture: 'Internet Nerd',
    selected_skills: [],
    quote: `Placeholder? Thats my artistic name... I'm ****`,
    slots: 10
  },
  loader: false
})

export const getters = {
  getActive(state) {
    return state.active
  }
}

export const actions = {
  filterPosts({ commit }, payload) {
    commit('SET_FILTER', payload)
  },
  getAll({ commit }, payload) {
    commit('SET_LOADER_STATE', true)
    commit('SET_LOADER_STATE', false)
    commit('SET_ALL', payload)
  },

  setActive({ commit, state }, slug) {
    const posts = state.all
    const post = posts.find((post) => post.slug === slug)
    commit('SET_ACTIVE', post)
  },
  crateRetainer({ commit }, retainer) {
    // Cambiar por algo tipo create Active o push al All
    console.log(retainer)
    commit('SET_ACTIVE', retainer)
  },
  setLoaderState({ commit }, state) {
    commit('SET_LOADER_STATE', state)
  }
}

export const mutations = {
  SET_ALL(state, payload) {
    state.all = payload
  },
  SET_FILTER(state, payload) {
    state.filter = payload
  },
  SET_TO_SHOW(state, payload) {
    state.amountToShow = payload
  },
  SET_ACTIVE(state, payload) {
    state.active = payload
  },
  SET_LOADER_STATE(state, payload) {
    state.loading_posts = payload
  }
}
