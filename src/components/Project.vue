<template>
    <div class="project">
        <div class="proj-color"
            :class="{
            'clr-green':projectData.color=='green',
            'clr-blue':projectData.color=='blue',
            'clr-purple':projectData.color=='purple',
            'clr-yellow':projectData.color=='yellow',
            'clr-orange':projectData.color=='orange',
            'clr-red':projectData.color=='red',
            }"
            @click="this.is_clr_picker_active = true"
            v-click-outside="close_clr_picker_widget">
        </div>
        <ColorPickerWidget v-if="this.is_clr_picker_active"/>

        <span>{{projectData.name}}</span>

        <div class="btn-menu icon-menu"></div>
        <!-- menu here -->
    </div>
</template>

<script>
    import ColorPickerWidget from './ColorPickerWidget.vue'

    export default{
        name: 'Project',
        props: ['projectData'],

        components:{
            ColorPickerWidget
        },

        data: () => {
            return {
                is_clr_picker_active: false
            }
        },

        methods: {
            close_clr_picker_widget: function () {
                this.is_clr_picker_active = false
            }
        },
    }
</script>

<style lang="scss" scoped>
.project{
    position: relative;

    display: flex;
    align-items: center;

    padding: 0 30px;

    height: 64px;

    .proj-color{
        margin-right: 30px;
        
        width: 15px;
        height: 15px;

        border-radius: 50%;
    }

    span{
        font-weight: bold;
        color: white;
    }

    .btn-menu{
        margin-left: auto;
        align-items: flex-end;
    }
    .icon-menu{
        width: 6px;
        height: 26px;

        mask: url('../assets/icons/menu.svg');
        mask-size: cover;
        mask-position: center;
        
        background: #535353;
    }
}
.project:hover{
    background-color: #000;
    cursor: pointer;
}
</style>