export const state = () => ({
  filter: 'all',
  all: [],
  active: {
    name: '',
    culture: '',
    level: 1,
    AC: 8,
    first: { stat: null, mod: 0 },
    second: { stat: null, mod: 0 },
    worst_is_active: false,
    worst: { stat: null, mod: 0 },
    selected_skills: [],
    signature_name: '',
    specials: [],
    quote: '',
    slots: 1
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
    commit('SET_ACTIVE', retainer)
  },
  setLoaderState({ commit }, state) {
    commit('SET_LOADER_STATE', state)
  },
  addSpecial({ commit, state }) {
    const id = state.specials.length + 1
    const special = {
      id,
      name: null,
      cost: null,
      description: null,
      daily: 0
    }
    commit('ADD_SPECIAL', special)
  },
  setAttribute({ commit }, key, value) {
    commit('SET_ATTR', key, value)
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
  },
  ADD_SPECIAL(state, payload) {
    state.specials.push(payload)
  },
  SET_ATTR(state, key, payload) {
    state[key] = payload
  }
}
