<template>
<div class="mgmt-tab-container">
    <div class="mgmt-tab"
        @click="is_opened = !is_opened"
        :class="{'opened': is_opened}">

        <span class="tab-name">Notes</span>
        <div class="expand-more-btn icon-expand-more">
        </div>
    </div>

    <div v-if="is_opened">
        <NoteTab v-for="note in projectNotes" :key="note.id" :noteData="note"/>
    </div>
</div>
</template>

<script>
import NoteTab from './NoteTab.vue'

export default{
    name: 'MgmtTabNotes',
    props: ['projectNotes'],

    components: {
        NoteTab
    },

    data: () => {
        return {
            is_opened: false
        }
    },
}
</script>
