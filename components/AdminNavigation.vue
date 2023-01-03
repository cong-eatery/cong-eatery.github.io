<template>
    <div>
        <div class="flex flex-wrap py-2">
            <div class="w-full px-4">
                <nav
                    class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-500 rounded"
                >
                    <div
                        class="relative flex justify-between lg:w-auto px-4 justify-start"
                    >
                        <span
                            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                        >
                            CONG ADMIN
                        </span>
                    </div>
                    <div class="lg:flex lg:flex-grow items-center justify-end">
                        <ul class="flex flex-col lg:flex-row list-none">
                            <li class="nav-item">
                                <a
                                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
                                    @click="logout"
                                >
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminNavigationComponent',
    methods: {
        logout() {
            this.$store.dispatch('auth/signOut')
        },
    },
}
</script>

<style scoped></style>
