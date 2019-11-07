<template>
  <v-layout column fill-height align-center justify-start ma-2 v-if = '$store.getters.isAuthorized'>
	  <user-data></user-data>
  </v-layout>
  <v-layout v-else column fill-height align-center justify-center ma-2>
		<v-row>
			<v-col cols = '6' class = 'my-auto'>
				<v-card flat min-width = '420px' style = 'box-shadow: 0 0 60px 10px rgba(200,200,200,0.5);'>
					<v-card-title class = 'font-weight-light display-2'>Hello there!</v-card-title>
					<v-card-text>
						<v-layout column class = 'black--text body-1'>
							<span>To inspect app features please sign in/up.</span>
						</v-layout>
					</v-card-text>
					<v-card-actions class = 'mx-2'>
						<v-btn large block depressed class='white--text my-2' color='blue lighten-1' to = 'auth'>Continue</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
  </v-layout>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Data from '@/components/blocks/user/Data.vue'

	export default {
		name: 'Main',
		components: {
			'user-data': Data
		},
		data: () => ({
		}),
		methods: {
			setTestData() {
				let d = new Date
				let testData = {
					['test' + d.getTime()]:  String(d)
				}
				this.$store.dispatch('updateStoredData', testData)
			},
			dropProperty(prop) {
				let storedData = this.$store.state.stored;
				delete storedData[prop]
				this.$store.dispatch('setStoredData', storedData)
			}
		},
		computed: {
			...mapGetters([
				'authProviders'
			])
		}
	};
</script>
