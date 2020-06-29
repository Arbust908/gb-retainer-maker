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
  //   getFiltered: (state) => (amount) => {
  //     let posts = []

  //     if (state.filter === 'all') {
  //       posts = state.all
  //     } else {
  //       posts = state.all.filter((post) => {
  //         return (
  //           post &&
  //           post.tags &&
  //           post.tags.find((tag) => {
  //             return originalTagName(state.filter).toLowerCase() === tag.name
  //           })
  //         )
  //       })
  //     }
  //     if (amount === 0 || posts.length === 0) {
  //       return posts
  //     }
  //     return posts.slice(0, amount)
  //   },
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
  // async getMore({ commit, state }, { limit = 50, page = 1, tags = [] }) {
  //   commit('SET_LOADER_STATE', true)

  //   const posts = await this.$gag({
  //     api: 'blog',
  //     model: 'posts',
  //     query: { limit, page, tags: originalTagName(tags[0].toUpperCase()) }
  //   })

  //   if (posts.data) {
  //     posts.data.map((post) => {
  //       if (post.tags) {
  //         post.tags.map((tag) => {
  //           tag.name = remakeTagName(tag.name)
  //         })
  //         if (post.tags.length < 1) {
  //           post.tags.push({ name: 'extras' })
  //         }
  //       }
  //     })
  //   } else {
  //     posts.data = []
  //   }

  //   const results = [...state.all]

  //   for (let i = 0; i < posts.data.length; i++) {
  //     const post = posts.data[i]
  //     if (!results.find((old_post) => old_post.id === post.id)) {
  //       results.push(post)
  //     }
  //   }

  //   commit('SET_ALL', results)

  //   commit('SET_LOADER_STATE', false)
  //   return results
  // },
  // async getBySlug({ commit, state }, slug) {
  //   const found_post = state.all.find((post) => post.slug === slug)
  //   if (!found_post) {
  //     const remakeTagName = (tagName) => {
  //       tagName = tagName.toUpperCase()
  //       switch (tagName) {
  //         case 'UX':
  //           return 'ux'
  //         case 'MARKETING':
  //           return 'mkt'
  //         case 'DATOS':
  //           return 'data'
  //         case 'TECNOLOGÍA':
  //           return 'tech'
  //         case 'OTROS':
  //           return 'otros'
  //         default:
  //           return tagName
  //       }
  //     }
  //     const post = await this.$gag({
  //       api: 'blog',
  //       model: 'posts/slug',
  //       id: slug
  //     })
  //     if (post.data) {
  //       if (post.data.tags) {
  //         post.data.tags.map((tag) => {
  //           tag.name = remakeTagName(tag.name)
  //         })
  //         if (post.data.tags.length < 1) {
  //           post.data.tags.push({ name: 'extras' })
  //         }
  //       }
  //     } else {
  //       post.data = null
  //     }
  //     commit('SET_ACTIVE', post.data)
  //     return post.data
  //   } else {
  //     commit('SET_ACTIVE', found_post)
  //     return found_post
  //   }
  // },
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
