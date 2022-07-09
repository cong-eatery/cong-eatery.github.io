<template>
    <div>
        <AdminNavigation />
        <div class="sm:flex">
            <AdminEditAvailableSeats />
            <AdminEditPDFMenu base-location="food/" title="Food Menu" />
            <AdminEditPDFMenu base-location="drink/" title="Drink Menu" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminPage',
}
</script>

<style scoped></style>
