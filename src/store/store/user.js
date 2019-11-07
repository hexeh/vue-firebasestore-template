import * as firebase from 'firebase/app'
import 'firebase/firestore'

export default {
	getStoredData: async (context) => {
		context.state.storeIndicator = true
		const snapshot = await firebase.firestore().collection('users').doc(context.state.user.uid).get()
		context.commit('updateStoredData', snapshot.data())
		context.state.storeIndicator = false
	},
	setStoredData: async (context, payload) => {
		const snapshot = await firebase.firestore().collection('users').doc(context.state.user.uid)
		snapshot.set(payload)
		context.dispatch('getStoredData')
	},
	updateStoredData: async (context, payload) => {
		const snapshot = await firebase.firestore().collection('users').doc(context.state.user.uid)
		snapshot.update(payload)
		context.dispatch('getStoredData')
	}
}
