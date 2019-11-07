import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import router from '@/router'

import sign from './auth/sign'
import link from './auth/link'
import firestore_user from './store/user'

export default {
	...sign,
	...link,
	...firestore_user,
	setObservations: (context) => {
		const config = {
			projectId: "test-gcloud-app-h",
			storageBucket: "test-gcloud-app-h.appspot.com",
			messagingSenderId: "259460111098",
		}
		if (!firebase.apps.length) {
			firebase.initializeApp(config);
			// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
			// firebase.auth().languageCode = 'ru';
			firebase.auth().onIdTokenChanged( (user) => {
				console.log('auth state changed:', user)
				if (user && user.getIdTokenResult) {
					user.getIdTokenResult().then((token) => {
						context.commit('authChanged', {user: user, idToken: token})
						context.commit('setProviders', user.providerData)
						context.dispatch('getStoredData')
						if (router.currentRoute.query.redirect) {
							router.push(router.currentRoute.query.redirect);
						} else {
							if (router.currentRoute.name == 'auth') {
								router.push('/')
							}
						}
					}).catch((tokenErrors) => {
						context.commit('applyErrors', {...tokenErrors, type: 'token'})
					})
				} else {
					context.commit('authChanged', {user: null, idToken: null})
					if (router.currentRoute.meta.authClaims) {
						router.push({name: 'auth', query: {redirect: router.currentRoute.query.redirect || '/'}})
					}
				}
			})
		}
	},
	reloadUser: async (context) => {
		await context.state.user.reload()
		console.log('reload complete')
	}
}
