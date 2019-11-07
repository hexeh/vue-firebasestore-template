import * as firebase from "firebase/app"
import "firebase/analytics"
import "firebase/auth"
import "firebase/firestore"

export default {
	avatar: (state) => {
		return state.user && state.user.photoURL || require("@/assets/account-circle.svg")
	},
	isAuthorized: (state) => {
		return state.user && state.user.refreshToken && state.user.refreshToken.length > 0
	},
	authProviders: (state) => {
		return state.providers
	},
	loginErrors: (state) => {
		return state.errors.login && state.errors.login.message
	},
	updateErrors: (state) => {
		return state.errors.update
	},
	createErrors: (state) => {
		return state.errors.create && state.errors.create.message
	},
	indicatorMain: (state) => {
		return state.authIndicator
	}
}
