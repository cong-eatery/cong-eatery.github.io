<template>
    <div v-if="storage" class="py-2 px-4">
        <div class="flex">
            <div
                class="block p-6 rounded-lg shadow-lg bg-white max-w-sm flex flex-col items-center"
            >
                <h5
                    class="text-gray-900 text-xl leading-tight font-medium mb-2"
                >
                    {{ title }}
                </h5>
                <div class="flex justify-cente flex-col">
                    <div class="mb-3 w-60">
                        <ul
                            v-if="currentFileName"
                            class="w-60 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                            <li
                                class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 flex"
                            >
                                <a
                                    class="flex-grow"
                                    :href="currentFileUrl"
                                    target="_blank"
                                >
                                    {{ currentFileName }}</a
                                >
                                <a
                                    class="cursor-pointer"
                                    @click="manuallyDeleteCurrentFile"
                                    >x</a
                                >
                            </li>
                        </ul>
                        <span v-else> No menu uploaded yet! </span>
                    </div>
                    <div class="mb-3 w-60">
                        <input
                            ref="fileUploadInput"
                            type="file"
                            class="w-60 form-control block px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            @change="fileToUploadChange"
                        />
                    </div>
                </div>
                <button
                    type="button"
                    :disabled="buttonDisabled"
                    :class="`inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ${
                        buttonDisabled
                            ? 'opacity-50 cursor-default'
                            : 'hover:bg-blue-700'
                    }`"
                    @click="saveCurrentFile"
                >
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {
    getStorage,
    ref,
    uploadBytes,
    list,
    getDownloadURL,
    deleteObject,
} from 'firebase/storage'

export default {
    name: 'AdminEditPDFMenuComponent',
    props: {
        baseLocation: {
            required: true,
            type: String,
        },
        title: {
            required: true,
            type: String,
        },
    },
    data() {
        return {
            fileToUpload: null,
            currentFileName: null,
            currentFileUrl: null,
            currentFilePath: null,
            storage: null,
        }
    },
    computed: {
        buttonDisabled() {
            return this.fileToUpload === null
        },
    },
    created() {
        this.storage = getStorage()
        this.getCurrentFile()
    },
    methods: {
        fileToUploadChange(file) {
            this.fileToUpload = file.target.files[0]
        },
        getCurrentFile() {
            list(ref(this.storage, this.baseLocation)).then((data) => {
                const currentFile = data.items[0]
                if (currentFile) {
                    this.currentFileName = currentFile.name || null
                    this.currentFilePath = currentFile.fullPath || null

                    getDownloadURL(
                        ref(this.storage, currentFile.fullPath)
                    ).then((downloadUrl) => {
                        this.currentFileUrl = downloadUrl
                    })
                } else {
                    this.currentFileName =
                        this.currentFileUrl =
                        this.currentFilePath =
                            null
                }
            })
        },
        manuallyDeleteCurrentFile() {
            const sure = confirm('Are you sure?')
            if (sure) {
                this.deleteCurrentFile()
            }
        },
        async deleteCurrentFile() {
            try {
                await deleteObject(ref(this.storage, this.currentFilePath))
                this.getCurrentFile()
            } catch {}
        },
        async saveCurrentFile() {
            await this.deleteCurrentFile()

            try {
                const snapshot = await uploadBytes(
                    ref(
                        this.storage,
                        this.baseLocation + this.fileToUpload.name
                    ),
                    this.fileToUpload
                )
                getDownloadURL(snapshot.ref).then((url) => {
                    this.currentFileUrl = url
                })

                this.currentFileName = snapshot.metadata.name
                this.$refs.fileUploadInput.value = this.fileToUpload = null
            } catch (error) {}
        },
    },
}
</script>

<style scoped></style>
