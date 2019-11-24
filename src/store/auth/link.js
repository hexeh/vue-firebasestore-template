import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
	linkPasswordCredentials: async (context, password) => {
		context.state.linkIndicator = true
		let credential = firebase.auth.EmailAuthProvider.credential(context.state.user.email, password)
		let updateProvider = await firebase.auth().currentUser.linkWithCredential(credential).then( (cred) => {
			context.commit('setProviders', cred.user.providerData)
			context.state.linkIndicator = false
		}).catch( (errorUpdate) => {
			context.state.linkIndicator = false
			context.commit('applyErrors', {...errorUpdate, type: 'update'})
		})
	},
	linkGoogleCredentials: async (context) => {
		context.state.linkIndicator = true
		let provider = new firebase.auth.GoogleAuthProvider()
		let updateProvider = await firebase.auth().currentUser.linkWithPopup(provider).then((cred) => {
			context.commit('setProviders', cred.user.providerData)
			context.state.linkIndicator = false
		}).catch( (errorUpdate) => {
			context.state.linkIndicator = false
			context.commit('applyErrors', {...errorUpdate, type: 'update'})
		})
	},
	linkGithubCredentials: async (context) => {
		context.state.linkIndicator = true
		let provider = new firebase.auth.GithubAuthProvider()
		let updateProvider = await firebase.auth().currentUser.linkWithPopup(provider).then((cred) => {
			context.state.linkIndicator = false
			context.commit('setProviders', cred.user.providerData)
		}).catch( (errorUpdate) => {
			context.state.linkIndicator = false
			context.commit('applyErrors', {...errorUpdate, type: 'update'})
		})
	},
	unlinkProvider: async (context, providerId) => {
		context.state.linkIndicator = true
		let updateProvider = await firebase.auth().currentUser.unlink(providerId).then(() => {
			let newProviders = context.state.user.providerData
			newProviders.filter( (e) => {e.providerId != providerId})
			context.commit('setProviders', newProviders)
			context.state.linkIndicator = false
		}).catch( (errorUpdate) => {
			context.state.linkIndicator = false
			context.commit('applyErrors', {...errorUpdate, type: 'unlink'})
		})
	}
}
