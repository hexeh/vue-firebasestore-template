import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default new Vuex.Store({
	state: {
		user: {},
		providers: [],
		idToken: {},
		stored: {},
		preferences: {},
		authIndicator: true,
		storeIndicator: false,
		errors: {
			login: null,
			update: null,
			unlink: null,
			create: null
		}
	},
	getters,
	actions,
	mutations
})
