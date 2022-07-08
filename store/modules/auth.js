import { isAdminRoute } from '~/middleware/router-auth'

export default {
    namespaced: true,
    state: {
        user: null,
    },
    getters: {
        getActiveUser: (state) => {
            return state.user
        },
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload
        },
        ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser }) {
            if (!authUser && isAdminRoute(this.app.router.history.current)) {
                this.dispatch('auth/signOut')
            } else if (
                authUser &&
                !isAdminRoute(this.app.router.history.current)
            ) {
                const { uid, email, emailVerified } = authUser
                state.user = { uid, email, emailVerified }
                this.app.router.push('/admin')
            }
        },
    },
    actions: {
        // eslint-disable-next-line no-empty-pattern
        signInWithEmail({}, payload) {
            return this.$fire.auth
                .signInWithEmailAndPassword(payload.email, payload.password)
                .catch((error) => {
                    return error
                })
        },
        signOut({ commit }) {
            this.$fire.auth.signOut().then(() => {
                commit('SET_USER', null)
                this.app.router.push('/login')
            })
        },
    },
}
