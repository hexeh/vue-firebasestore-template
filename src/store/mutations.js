import Vue from 'vue'

export default {
	authChanged: (state, data) => {
		state.user = data.user
		state.idToken = data.idToken
		state.authIndicator = false
	},
	applyErrors: (state, data) => {
		state.errors[data.type] = data
		state.authIndicator = false
	},
	setProviders: (state, data) => {
		state.providers = data
	},
	updateStoredData: (state, data) => {
		state.stored = data
	},
	flushErrors: (state) => {
		state.errors = {
			login: null,
			update: null,
			unlink: null,
			create: null
		}
	}
}
