<template>
	<v-app>
		<v-app-bar app flat style = 'box-shadow: 0 0 60px 10px rgba(200,200,200,0.5);'>
			<v-toolbar-title class="headline text-uppercase" @click = '$router.push({name: "main"})' style = 'cursor: pointer;'>
				<span>Auth</span>
				<span class="font-weight-light">Firebase</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<user-menu v-if = '$store.getters.isAuthorized'></user-menu>
		</v-app-bar>
		<v-content>
			<v-layout 
				v-if = 'indicatorMain'
				fill-height 
				column 
				align-center 
				justify-center
			>
				<v-progress-circular indeterminate color = 'blue accent-3' size = '32' width = '1'></v-progress-circular>
			</v-layout>
			<router-view v-show = '!indicatorMain'/>
		</v-content>
	</v-app>
</template>

<style>
 * {
	 word-break: break-word !important;
 }
</style>

<script>
import UserMenu from '@/components/blocks/user/Menu.vue'
import { mapGetters } from 'vuex'

export default {
	components: {
		UserMenu
	},
	name: 'App',
	data: () => ({
		//
	}),
	computed: {
			...mapGetters([
				'indicatorMain'
			])
	},
	mounted() {
		this.$store.dispatch('setObservations')
	}
};
</script>
