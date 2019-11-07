<template>
	<v-layout style = 'flex: 0 0 auto !important;'>
		<v-dialog v-model='visibility' origin='top center' width = '420px'>
		  <signin></signin>
		</v-dialog>
	</v-layout>
</template>

<script>

	import rules from '@/components/modules/rules'
	import Signin from '@/components/blocks/auth/Signin.vue'
	import { mapGetters } from 'vuex'

	export default {
		name: 'Login',
		props: ['initialState', 'callback'],
		mixins: [rules],
		components: {Signin},
		data() {
			return {
				visibility: this.initialState,
				indicator: false
			}
		},
		watch: {
			initialState(value) {
				this.visibility = value;
			},
			visibility(value) {
				this.$root.$emit('signinDialogVisiblityChanged', value);
			},
			indicatorMain(ov, nv) {
				if (!ov && nv && this.loginErrors === null) {
					this.callback && this.callback()
					this.visibility = false
				}
			}
		},
		computed: {
			...mapGetters(['indicatorMain', 'loginErrors'])
		},
		methods: {}
	}
</script>