<template>
	<v-layout style = 'flex: 0 0 auto !important;'>
		<v-dialog v-model='visibility' origin='top center'>
		  <v-card flat dense class = 'pt-0 mt-0'>
		  	<v-card-title class = 'font-weight-light display-1'>User auth providers</v-card-title>
		  	<v-card-text class = 'pb-0'>
		  		<extend></extend>
		  	</v-card-text>
			<v-card-actions class = 'pa-0 pb-1'>
			  <v-btn block text @click='visibility=false;'>Close</v-btn>
			</v-card-actions>
		  </v-card>
		</v-dialog>
	</v-layout>
</template>

<script>

	import rules from '@/components/modules/rules'
	import Extend from '@/components/blocks/auth/Extend.vue'

	export default {
		name: 'Providers',
		props: ['initialState'],
		mixins: [rules],
		components: {Extend},
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
				this.$root.$emit('providersDialogVisiblityChanged', value);
			}
		},
		methods: {}
	}
</script>