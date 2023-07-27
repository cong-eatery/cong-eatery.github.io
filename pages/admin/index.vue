<template>
    <div>
        <AdminNavigation />
        <div class="sm:flex">
            <AdminEditAvailableSeats />
            <AdminEditPDFMenu base-location="food/" title="LUNCH" />
            <AdminEditPDFMenu base-location="drink/" title="DINNER" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminPage',
}
</script>

<style scoped></style>
