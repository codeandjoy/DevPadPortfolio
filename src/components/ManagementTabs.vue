<template>
    <div>
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

<style lang="scss">
    .mgmt-tab{
        position: relative;

        display: flex;
        align-items: center;

        padding-left: 75px;
        padding-right: 23px;

        height: 64px;

        font-weight: bold;

        .tab-name{
            color: #FFAA26;
        }

        .expand-more-btn{
            margin-left: auto;
        }

        .icon-expand-more{
            width: 26px;
            height: 26px;

            mask: url('../assets/icons/expand_more.svg');
            mask-size: cover;
            mask-position: center;
            
            background: #fff;
        }
    }

    .mgmt-tab::before{
        content: '';
        
        display: block;
        
        position: absolute;
        left: 20%;
        top: 0;

        width: 60%;

        border-top: 2px solid #202020;
    }
</style>