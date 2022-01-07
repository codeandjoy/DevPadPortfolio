<template>
    <div>
        Hello world
        <MgmtTabNotes/>
        <MgmtTabToExecute/>
        <!-- board (btn?) -->
    </div>
</template>

<script>
import MgmtTabNotes from './MgmtTabNotes.vue'
import MgmtTabToExecute from './MgmtTabToExecute.vue'

export default{
    name: 'ManagementTabs',

    components:{
        MgmtTabNotes,
        MgmtTabToExecute
    }
}
</script>