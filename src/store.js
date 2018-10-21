import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'My Custom Title',
    links: [
        'https://google.com',
        'http://youtube.com',
        'http://wikipedia.com',
    ]
  },
  getters: {
    countLinks: state => {
        return state.links.length
    }
  },

  //calling mutations diretly in the components is for synchronous events
  mutations: {
    ADD_LINK: (state, link) => {
        state.links.push(link)
    },
    REMOVE_LINK: (state,link) => {
        state.links.splice(link, 1)
    },
    REMOVE_ALL: (state) => {
        state.links = []
    }
  },

  //use actions to perform mutations for asynchronous functionality
  //use actions to call upon a mutation that will remove a link
  actions: {
      removeLink: (context, link) => {
        context.commit("REMOVE_LINK", link)
      },
      removeAll({commit}) {
          return new Promise((resolve, reject) => {
              setTimeout(() => {
                  commit('REMOVE_ALL')
                  resolve()
              }, 1500)
          })
      }
  }

})