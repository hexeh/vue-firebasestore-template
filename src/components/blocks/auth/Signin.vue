<template>
	<v-card min-width='400px' max-width = '400px' flat class='my-1' style='box-shadow: 0 0 60px 10px rgba(200,200,200,0.5);'>
		<v-card-title class='font-weight-light display-1'>Sign in here</v-card-title>
		<v-card-text class='mt-5 pb-0'>
			<v-form v-model='formValid' class='my-2'>
				<v-text-field 
					@blur = '$store.commit("flushErrors")'
					outlined 
					v-model='user.login' 
					label='Email' 
					hint='Please enter a valid email address' 
					autocomplete='username' 
					:rules='[rules.required, rules.email]' 
					validate-on-blur
				></v-text-field>
				<v-text-field
					@blur = '$store.commit("flushErrors")'
					outlined v-model='user.password' 
					label='Password' 
					hint='Please provide a password' 
					autocomplete='password' 
					:rules='[rules.required, rules.password]' 
					:append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" 
					@click:append = "showPassword = !showPassword" 
					:type="showPassword ? 'text' : 'password'" 
					:error='$store.state.errors.login && $store.state.errors.login.code && $store.state.errors.login.code.length > 0'
					:error-messages='loginErrors'
					validate-on-blur
				></v-text-field>
			</v-form>
		</v-card-text>
		<v-card-actions class='px-4 pb-4 pt-0'>
			<v-btn large min-width='60%' depressed class='white--text' color='blue lighten-1' @click='$store.dispatch("authByPassword", user)'>Continue</v-btn>
			<v-spacer></v-spacer>
			<v-btn large icon @click='$store.dispatch("authByGithub")'>
				<v-icon color='black'>mdi-github-circle</v-icon>
			</v-btn>
			<v-btn large icon @click='$store.dispatch("authByGoogle")' class = 'ml-0'>
				<v-icon color='#4D87EC'>mdi-google</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script>
import rules from '@/components/modules/rules'
import { mapGetters } from 'vuex'
export default {
	name: 'Signin',
	mixins: [rules],
	data: () => ({
		formValid: false,
		showPassword: false,
		user: {}
	}),
	computed: {
		...mapGetters(['loginErrors'])
	}
}
</script>