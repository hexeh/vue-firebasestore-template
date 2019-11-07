export default {
	data: () => ({
		rules: {
			required: value => !!value || 'This field is required',
			email: value => {
				const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				return pattern.test(value) || 'Wrong e-mail.'
			},
			safe: value => {
				const pattern = /^[a-zA-Z0-9_]*$/
				return pattern.test(value) || 'Wrong format'
			},
			password: value => {
				const pattern = /^(?=.*[a-zA-Z])(?=.{6,})/
				return pattern.test(value) || 'Password must be 6 characters or more and include lowercase and uppercase characters'
			}
		}
	})
}
