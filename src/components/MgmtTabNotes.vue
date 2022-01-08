<template>
<div class="mgmt-tab-container">
    <div class="mgmt-tab">
        <span class="tab-name">Notes</span>
        <div class="expand-more-btn icon-expand-more">
        </div>
    </div>

    <NoteTab v-for="note in projectNotes" :key="note.id" :noteData="note"/>
</div>
</template>

<script>
import NoteTab from './NoteTab.vue'

export default{
    name: 'MgmtTabNotes',
    props: ['projectNotes'],

    components: {
        NoteTab
    }
}
</script>
