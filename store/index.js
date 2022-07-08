import { Store } from 'vuex'

import auth from './modules/auth'
const store = () =>
    new Store({
        modules: {
            auth,
        },
    })

export default store
