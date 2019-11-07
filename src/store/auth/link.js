import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
	linkPasswordCredentials: async (context, password) => {
		let credential = firebase.auth.EmailAuthProvider.credential(context.state.user.email, password)
		let updateProvider = await firebase.auth().currentUser.linkWithCredential(credential).then( (cred) => {
			context.commit('setProviders', cred.user.providerData)
		}).catch( (errorUpdate) => {
			context.commit('applyErrors', {...errorUpdate, type: 'update'})
		})
	},
	linkGoogleCredentials: async (context) => {
		let provider = new firebase.auth.GoogleAuthProvider()
		let updateProvider = await firebase.auth().currentUser.linkWithPopup(provider).then((cred) => {
			context.commit('setProviders', cred.user.providerData)
		}).catch( (errorUpdate) => {
			context.commit('applyErrors', {...errorUpdate, type: 'update'})
		})
	},
	linkGithubCredentials: async (context) => {
		let provider = new firebase.auth.GithubAuthProvider()
		let updateProvider = await firebase.auth().currentUser.linkWithPopup(provider).then((cred) => {
			console.log(cred.user.providerData)
			context.commit('setProviders', cred.user.providerData)
		}).catch( (errorUpdate) => {
			context.commit('applyErrors', {...errorUpdate, type: 'update'})
		})
	},
	unlinkProvider: async (context, providerId) => {
		let updateProvider = await firebase.auth().currentUser.unlink(providerId).then(() => {
			let newProviders = context.state.user.providerData
			newProviders.filter( (e) => {e.providerId != providerId})
			console.log(newProviders)
			context.commit('setProviders', newProviders)
		}).catch( (errorUpdate) => {
			context.commit('applyErrors', {...errorUpdate, type: 'unlink'})
		})
	}
}
