export default function ({ store, redirect, route }) {
    if (store.state.auth.user != null && route.name === 'login') {
        redirect('/admin')
    }

    if (store.state.auth.user == null && isAdminRoute(route)) {
        redirect('/login')
    }
}

export function isAdminRoute(route) {
    if (route.matched.some((record) => record.path === '/admin')) {
        return true
    }
    return false
}
