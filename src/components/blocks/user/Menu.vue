<template>
	<v-layout justify-end>
		<v-menu bottom left transition='slide-y-transition' :close-on-content-click = 'false'>
			<template v-slot:activator="{ on }">
				<v-avatar 
					v-on = 'on'
					size = '36px' 
					style = 'cursor: pointer;'
				>
					<img :src='$store.getters.avatar'>
				</v-avatar>
			</template>
			<v-layout column>
				<v-card tile flat>
					<v-card-text class = 'px-3 py-2'>
						<v-layout d-flex row align-center align-content-center justify-center px-2>
							<v-avatar size = '36px'>
								<img :src='$store.getters.avatar'>
							</v-avatar>
							<v-flex ml-2 class = 'caption black--text'>
                                <div>{{$store.state.user.displayName}}</div>
                                <div class = 'font-weight-light'>{{$store.state.user.email}}</div>
                            </v-flex>
						</v-layout>
					</v-card-text>
				</v-card>
				<v-divider></v-divider>
				<v-card tile flat>
					<v-card-text class = 'px-3 py-2'>
						<v-btn 
							block 
							text 
							@click = 'dialogs.provider = true'
						>
							<v-icon left small>mdi-account-card-details-outline</v-icon>
							Auth Providers
						</v-btn>
						<v-btn 
							block 
							color = 'error' 
							text 
							@click = '$store.dispatch("signOut")'
						>
							<v-icon left small>mdi-location-exit</v-icon>
							Exit
						</v-btn>
					</v-card-text>
				</v-card>
			</v-layout>
		</v-menu>
		<providers :initialState = 'dialogs.provider'></providers>
	</v-layout>
</template>

<script>
	import Providers from '@/components/dialogs/Providers.vue'

	export default {
		name: 'UserMenu',
		components: {Providers},
		data: () => ({
			dialogs: {
				provider: false
			}
		}),
		mounted() {
			this.$root.$on('providersDialogVisiblityChanged', (v) => {
				this.dialogs.provider = v;
			})
		}
	}
</script>