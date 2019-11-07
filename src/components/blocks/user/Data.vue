<template>
    <v-container fluid>
  		<v-row justify = 'center' class = 'mb-4'>
  			<v-col cols = '4'>
  				<v-card flat style = 'box-shadow: 0 0 60px 10px rgba(200,200,200,0.5); word-break: inherit;'>
			  		<v-card-title class = 'font-weight-light display-2'>Welcome back, <b>{{userGreeting}}</b>!</v-card-title>
                    <v-card-text>
                        <v-layout column class = 'mx-0 title font-weight-regular' v-if = '!dataLoading'>
                            <span v-if = 'userData === undefined || Object.keys(userData).length == 0'>You don't have any stored data</span>
  				            <span v-else>You have stored data</span>
                        </v-layout>
                        <v-layout column v-else class = 'mx-0 my-1'>
                            <v-skeleton-loader type = 'heading' tile></v-skeleton-loader>
                        </v-layout>
                    </v-card-text>
			  	</v-card>
  			</v-col>
            <v-col cols = '4'>
                <v-tooltip bottom allow-overflow>
                    <template v-slot:activator = '{on}'>
                        <v-card
                            flat 
                            style = 'box-shadow: 0 0 60px 10px rgba(200,200,200,0.5); height: 100%;' 
                            @click = 'setTestData'
                            v-on = 'on'
                            :disabled = 'userData && Object.keys(userData).length >= 10'
                        >
                            <v-layout fill-height row align-center justify-center class = 'black--text'>
                                <v-icon large left color = 'primary'>mdi-shape-square-plus</v-icon>
                                <span class = 'font-weight-light display-2'>Add Data</span>
                            </v-layout>
                        </v-card>
                    </template>
                    <span>You can store up to 10 properties</span>
                </v-tooltip>
            </v-col>
  		</v-row>
        <v-row justify = 'center' v-if = 'dataLoading'>
            <v-col cols = '8'>
                <v-card flat style = 'box-shadow: 0 0 60px 10px rgba(200,200,200,0.5);'>
                    <v-card-text>
                        <v-skeleton-loader
                            type = 'chip'
                            tile
	  					></v-skeleton-loader>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <template v-else>
            <v-row justify = 'center' v-for = '(v,k,i) in userData' :key = 'i'>
                <v-col cols = '8'>
                    <v-card flat style = 'box-shadow: 0 0 60px 10px rgba(200,200,200,0.5);'>
                        <v-card-text>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>{{k}}</v-list-item-title>
  							        <v-list-item-subtitle>{{v}}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn 
                                        text 
                                        color = 'error' 
                                        @click = 'dropProperty(k)'
                                    >Drop Property</v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </template>
  	</v-container>
</template>

<script>
	import { mapGetters } from 'vuex'
    
    export default {
        name: 'Data',
        data: () => ({}),
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
            dataLoading() {
				return this.$store.state.storeIndicator
			},
			userData() {
				return this.$store.state.stored
			},
			userGreeting() {
				const userName = this.$store.state.user.displayName
				return userName && userName.split(' ')[0] || userName || 'User'
			},
			...mapGetters([
				'authProviders'
			])
        },
        mounted() {
		}
    }
</script>