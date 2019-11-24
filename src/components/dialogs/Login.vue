<template>
	<v-layout style = 'flex: 0 0 auto !important;'>
		<v-dialog v-model = 'visibility' origin = 'top center' width = '420px' @keydown = 'closeOnEvent' @click:outside = 'closeDialog'>
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
		props: ['visibility', 'callback'],
		mixins: [rules],
		components: {Signin},
		data() {
			return {
				indicator: false
			}
		},
		watch: {
			indicatorMain(ov, nv) {
				if (!ov && nv && this.loginErrors === null) {
					this.callback && this.callback()
					this.closeDialog()
				}
			}
		},
		computed: {
			...mapGetters(['indicatorMain', 'loginErrors'])
		},
		methods: {
			closeDialog() {
				this.$emit('update:visibility', false)
			},
			closeOnEvent(e) {
				if (e.code == 'Escape') {
					this.closeDialog()
				}
			}
		}
	}
</script>