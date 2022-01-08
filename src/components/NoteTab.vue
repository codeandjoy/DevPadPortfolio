<template>
    <div class="note-tab">
        <span>{{noteData.name}}</span>
        <!-- menu btn -->
    </div>
</template>

<script>
export default {
    name: 'NoteTab',
    props: ['noteData'],
}
</script>

<style lang="scss" scoped>
.note-tab{
    height: 64px;

    display: flex;
    align-items: center;

    padding-left: 75px;

    background-color: #000;

    span{
        color: #B1B1B1;
    }
}
</style>