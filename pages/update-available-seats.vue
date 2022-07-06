<template>
    <div v-show="currentData.available != null" class="m-10">
        <div class="counter m-2">
            <span
                class="minus"
                @click="currentData.available = currentData.available - 1"
                >-</span
            >
            <input
                type="text"
                :value="currentData.available"
                @input="(e) => (currentData.available = e.target.value)"
            />
            <span
                class="plus"
                @click="currentData.available = currentData.available + 1"
                >+</span
            >
        </div>
        <div>
            <label
                for="toogleButton"
                class="m-2 flex items-center cursor-pointer"
            >
                Enable:
                <div class="relative m -2">
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
            :class="`py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md ${
                buttonDisabled ? 'opacity-50' : ''
            }`"
            @click="save"
        >
            Save
        </button>
        <!-- <div id="toast-simple" class="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-500" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
            <div class="pl-4 text-sm font-normal">Message sent successfully.</div>
        </div> -->
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
            saving: false,
        }
    },
    computed: {
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
                    alert('Document does not exist.')
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
