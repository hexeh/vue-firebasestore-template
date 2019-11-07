export default {
    name: 'DataLayerHandler',
    data: () => ({
        lastMessage: {}
    }),
    computed: {
        dataLayer() {
            return window.dataLayer || []
        }
    },
    created() {
        if (!window.hasOwnProperty('dataLayer')) {
            window.dataLayer = window.dataLayer || [];
        }
    },
    watch: {
        lastMessage: {
            handler: function (nv, ov) {
                if (!!nv && Object.keys(nv).length && nv !== ov) {
                    let dl = window.dataLayer || []
                    dl.push(nv)
                    if (process.env.NODE_ENV == 'development') {
                        console.debug('dataLayer updated', nv)
                    }
                }

            },
            deep: true
        }
    },
    methods: {
        pushObject(o) {
            this.lastMessage = 0
        },
        addEvent(e,d) {
            this.lastMessage = {
                'event': e,
                ...d
            }
        }
    }
}
