<template>
	<v-layout fill-height column align-center justify-center>
		<v-scale-transition key = '0' mode = 'in-out' leave-absolute v-show ='!create'>
			<template v-if = '!create'>
				<v-layout column align-center justify-center>
					<signin></signin>
					<span class = 'caption'>Don't have an account? <v-btn x-small text @click = 'create = true;'>Create it now</v-btn></span>
				</v-layout>
			</template>
		</v-scale-transition>
		<v-scale-transition key = '0' mode = 'in-out' leave-absolute v-show ='create'>
			<template v-if ='create'>
				<v-layout column align-center justify-center>
					<signup></signup>
					<span class = 'caption'>Already registered? <v-btn x-small text @click = 'create = false;'>Sign in now</v-btn></span>
				</v-layout>
			</template>
		</v-scale-transition>
	</v-layout>
</template>

<script>
	import Signup from '@/components/blocks/auth/Signup.vue'
	import Signin from '@/components/blocks/auth/Signin.vue'

	export default {
		name: 'Auth',
		components: {
			Signin,
			Signup
		},
		data: () => ({
			create: false
		})
	}
</script>