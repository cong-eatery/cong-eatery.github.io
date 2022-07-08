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
        <div class="py-2 w-full px-4">
            <div class="flex">
                <div
                    v-if="currentData.available !== null"
                    class="block p-6 rounded-lg shadow-lg bg-white max-w-sm"
                >
                    <h5
                        class="text-gray-900 text-xl leading-tight font-medium mb-2"
                    >
                        Seats available
                    </h5>
                    <div class="counter">
                        <span
                            class="minus"
                            @click="
                                currentData.available =
                                    currentData.available - 1
                            "
                            >-</span
                        >
                        <input
                            type="text"
                            :value="currentData.available"
                            @input="
                                (e) => (currentData.available = e.target.value)
                            "
                        />
                        <span
                            class="plus"
                            @click="
                                currentData.available =
                                    currentData.available + 1
                            "
                            >+</span
                        >
                    </div>
                    <div>
                        <label
                            for="toogleButton"
                            class="my-2 flex items-center cursor-pointer"
                        >
                            Enable:
                            <div class="relative m-2">
                                <input
                                    id="toogleButton"
                                    v-model="currentData.enabled"
                                    type="checkbox"
                                    class="hidden"
                                />
                                <div
                                    class="toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"
                                ></div>
                                <div
                                    class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"
                                ></div>
                            </div>
                        </label>
                    </div>
                    <button
                        type="button"
                        :disabled="buttonDisabled"
                        :class="`inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ${
                            buttonDisabled
                                ? 'opacity-50 cursor-default'
                                : 'hover:bg-blue-700'
                        }`"
                        @click="() => save()"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UpdateAvailableSeats',
    data() {
        return {
            currentData: {
                available: null,
                enabled: null,
            },
            oldData: {
                available: null,
                enabled: null,
            },
        }
    },
    computed: {
        currentUser() {
            return this.$store.getters['auth/getActiveUser']
        },
        buttonDisabled() {
            const keys1 = Object.keys(this.currentData)
            const keys2 = Object.keys(this.oldData)
            return (
                keys1.length === keys2.length &&
                Object.keys(this.currentData).every(
                    (key) => this.currentData[key] === this.oldData[key]
                )
            )
        },
    },
    async mounted() {
        await this.fetchData()
    },
    methods: {
        async save() {
            const messageRef = this.$fire.firestore
                .collection('seats-available')
                .doc('current')
            try {
                await messageRef.set({
                    available: this.currentData.available,
                    enabled: this.currentData.enabled,
                })
                await this.fetchData()
            } catch (e) {}
        },
        async fetchData() {
            const messageRef = this.$fire.firestore
                .collection('seats-available')
                .doc('current')
            try {
                const snapshot = await messageRef.get()
                const doc = snapshot.data()
                if (!doc) {
                    return
                }
                this.currentData = {
                    ...doc,
                }
                this.oldData = {
                    ...doc,
                }
            } catch (e) {}
        },
        logout() {
            this.$store.dispatch('auth/signOut')
        },
    },
}
</script>

<style scoped>
.counter .minus,
.counter .plus {
    width: 30px;
    cursor: pointer;
    background: #f2f2f2;
    border-radius: 4px;
    padding: 8px 5px 8px 5px;
    border: 1px solid #ddd;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
}

.counter input {
    height: 34px;
    width: 100px;
    text-align: center;
    font-size: 26px;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: inline-block;
    vertical-align: middle;
}

.toggle-path {
    transition: background 0.3s ease-in-out;
}
.toggle-circle {
    top: 0.2rem;
    left: 0.25rem;
    transition: all 0.3s ease-in-out;
}
input:checked ~ .toggle-circle {
    transform: translateX(100%);
}
input:checked ~ .toggle-path {
    background-color: #81e6d9;
}
</style>
