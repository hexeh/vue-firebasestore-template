<template>
	<v-layout column>
		<span>You have {{authProviders.length}} connected auth providers</span>
		<v-list two-line>
			<template v-for = 'p in supportedProviders'>
				<v-list-item :key = 'p.key'>
					<v-list-item-action>
						<v-icon>{{p.icon}}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>{{p.title}}</v-list-item-title>
						<v-list-item-subtitle v-if = 'Object.keys(dictProviders).includes(p.key)'>
							Connected as {{dictProviders[p.key].email}}
						</v-list-item-subtitle>
					</v-list-item-content>
					<template v-if = '!Object.keys(dictProviders).includes(p.key)'>
						<v-text-field
							dense
							v-if = 'p.key == "password"' style = 'max-width: 350px;'
							v-model='user.password' 
							label='Password' 
							hint='Please create a strong password' 
							autocomplete='password' 
							:rules='[rules.required, rules.password]' 
							:append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" 
							@click:append="showPassword = !showPassword" 
							:type="showPassword ? 'text' : 'password'" 
							validate-on-blur
						></v-text-field>
						<v-list-item-action>
							<v-btn
								text
								:loading = 'indicator' 
								color = 'success' 
								@click='user.password && user.password.length? $store.dispatch(p.action, user.password):$store.dispatch(p.action)'
							>Connect</v-btn>
						</v-list-item-action>
					</template>
					<template v-else>
						<v-list-item-action>
							<v-btn
								:disabled = 'authProviders.length < 2' 
								:loading = 'indicator'
								text color = 'error'
								@click = '$store.dispatch("unlinkProvider", p.key)'
							>Disconnect</v-btn>
						</v-list-item-action>
						<v-list-item-avatar>
							<v-img :src = 'dictProviders[p.key].photoURL || require("@/assets/account-circle.svg")'></v-img>
						</v-list-item-avatar>
					</template>
				</v-list-item>
				<v-divider inset></v-divider>
			</template>
		</v-list>
		<!--v-btn depressed block @click = 'showLogin = true'>Show Login</v-btn!-->
		<login :initialState = 'showLogin' :callback = 'connectPasswordProvider'></login>
	</v-layout>
</template>

<script>
	import Login from '@/components/dialogs/Login.vue'
	import rules from '@/components/modules/rules'
	import { mapGetters } from 'vuex'


	export default {
		name: 'Extend',
		components: {Login},
		data: () => ({
			user: {},
			showPassword: false,
			showLogin: false,
			supportedProviders: [{
				key: 'google.com',
				title: 'Google Account',
				icon: 'mdi-google',
				action: 'linkGoogleCredentials'
			}, {
				key: 'github.com',
				title: 'Github Account',
				icon: 'mdi-github-circle',
				action: 'linkGithubCredentials'
			}, {
				key: 'password',
				title: 'Email / Password',
				icon: 'mdi-at',
				action: 'linkPasswordCredentials'
			}]
		}),
		mixins: [rules],
		watch: {
			updateErrors(value) {
				if (value && value.code == 'auth/requires-recent-login') {
					this.showLogin = true
				}
			}
		},
		computed: {
			indicator() {
				return this.$store.state.linkIndicator
			},
			dictProviders() {
				let o = {}
				for (let pr of this.authProviders) {
					o[pr.providerId] = pr
				}
				return o
			},
			...mapGetters(['authProviders', 'updateErrors'])
		},
		methods: {
			connectPasswordProvider() {
				this.$store.dispatch('linkPasswordCredentials', this.user.password)
			}
		},
		mounted() {
			this.$root.$on('signinDialogVisiblityChanged', (v) => {
				this.showLogin = v;
			})
		},
	}
</script>