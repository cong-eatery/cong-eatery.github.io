<template>
    <div class="m-10">
        <div class="number m-2">
            <span class="minus" @click="available = available-1">-</span>
            <input type="text" @input="(e) => available = e.target.value" :value="available"/>
            <span class="plus" @click="available = available+1">+</span>
        </div>
        <button class="bg-green-400 rounded-md p-2 m-2" @click="save" :disabled="available == oldAvailable">
            Save changes
        </button>
    </div>
</template>

<script>

export default {
    name: 'UpdateAvailableSeats',
    data() {
        return {
            available: null,
            oldAvailable: null,
        }
    },
    async mounted () {
        const messageRef = this.$fire.firestore.collection('seats-available').doc('current');
        try {
            const snapshot = await messageRef.get()
            const doc = snapshot.data()
            if (!doc) {
                alert('Document does not exist.')
                return
            }
            this.available = doc.available;
            this.oldAvailable = doc.available;
        } catch (e) {
            alert(e)        
        }       
    },
    methods: {
        async save() {
            const messageRef = this.$fire.firestore.collection('seats-available').doc('current');
            try {
                await messageRef.set({ available: this.available });
            } catch (e) {
                alert(e);
            }
        }
    }
}
</script>

<style scoped>
    span {
        cursor:pointer; 
    }

    .minus, .plus{
        width: 30px;
        background:#f2f2f2;
        border-radius:4px;
        padding:8px 5px 8px 5px;
        border:1px solid #ddd;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
    }

    input{
        height:34px;
        width: 100px;
        text-align: center;
        font-size: 26px;
        border:1px solid #ddd;
        border-radius:4px;
        display: inline-block;
        vertical-align: middle;
    }
        

</style>
  