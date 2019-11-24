import * as firebase from 'firebase/app'
import 'firebase/auth'
import router from '@/router'

export default {
	signOut: (context) => {
		firebase.auth().signOut().then( () => {
			context.commit('authChanged', {})
		})
		if (router.currentRoute.name != 'auth') {
			router.push({'name': 'auth'})
		}
	},
	authByPassword: async (context, loginPassword) => {
		context.state.authIndicator = true
		let authProviderData = await firebase.auth().signInWithEmailAndPassword(
			loginPassword.login, 
			loginPassword.password
		).catch( (errorLogin) => {
			context.commit('applyErrors', {...errorLogin, type: 'login'})
		})
	},
	authByGoogle: async (context) => {
		context.state.authIndicator = true
		let provider = new firebase.auth.GoogleAuthProvider()
		// Web Options
		//provider.setCustomParameters({'prompt': 'consent'})
		//let authProviderData = await firebase.auth().signInWithPopup(provider).catch( (errorLogin) => {
		//	context.commit('applyErrors', {...errorLogin, type: 'login'})
		//})
		// Cordova Compatible Options
		firebase.auth().signInWithRedirect(provider).catch( (errorLogin) => {
			context.commit('applyErrors', {...errorLogin, type: 'login'})
		})
	},
	authByGithub: async (context) => {
		context.state.authIndicator = true
		let provider = new firebase.auth.GithubAuthProvider()
		// Web Options
		// let authProviderData = await firebase.auth().signInWithPopup(provider).catch( (errorLogin) => {
		//	context.commit('applyErrors', {...errorLogin, type: 'login'})
		//})
		// Cordova Compatible Options
		firebase.auth().signInWithRedirect(provider).catch( (errorLogin) => {
			context.commit('applyErrors', {...errorLogin, type: 'login'})
		})
	},
	createUserByPassword: (context, userLoginPassword) => {
		context.state.authIndicator = true
		firebase.auth().createUserWithEmailAndPassword(userLoginPassword.login, userLoginPassword.password).then( (u) => {
			context.getters.user.updateProfile({
				displayName: userLoginPassword.name + ' ' + userLoginPassword.lastname
			}).then( (r) => {
				context.dispatch('authByPassword', userLoginPassword)
			}, (errorUpdate) => {
				console.error(errorUpdate)
			})
		}, (errorCreate) => {
			context.commit('applyErrors', {...errorCreate, type: 'create'})
		})
	}
}
