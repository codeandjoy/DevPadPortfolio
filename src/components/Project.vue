<template>
<div class="project">

    <div class="project-tab">
        <div class="proj-color"
            :class="{
            'clr-green':projectData.color=='green',
            'clr-blue':projectData.color=='blue',
            'clr-purple':projectData.color=='purple',
            'clr-yellow':projectData.color=='yellow',
            'clr-orange':projectData.color=='orange',
            'clr-red':projectData.color=='red',
            }"
            @click="is_clr_picker_active = !is_clr_picker_active"
            v-click-outside="close_clr_picker_widget">
        </div>
        <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut">
            <ColorPickerWidget
                v-if="this.is_clr_picker_active"
                :projectData="this.projectData"/>
        </transition>

        <span>{{this.projectData.name}}</span>

        <div class="btn-menu icon-menu"
            @click="is_project_menu_active = !is_project_menu_active"
            v-click-outside="close_proj_menu"></div>
    </div>
    
    <ManagementTabs/>
    <!-- v-if flag is true -->

    <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
        
        <div class="project-menu"
            v-if="this.is_project_menu_active">

            <button
                @click="delete_project">Delete</button>
        </div>
    </transition>
</div>
</template>


<script>
import { mapActions } from 'vuex'

import ColorPickerWidget from './ColorPickerWidget.vue'
import ManagementTabs from './ManagementTabs.vue'

export default{
    name: 'Project',
    props: ['projectData'],

    components:{
        ColorPickerWidget,
        ManagementTabs
    },

    data: () => {
        return {
            is_clr_picker_active: false,
            is_project_menu_active: false
        }
    },

    methods: {
        ...mapActions(['deleteProject']),        

        close_clr_picker_widget: function () {
            this.is_clr_picker_active = false;
        },
        close_proj_menu: function () {
            this.is_project_menu_active = false;
        },

        delete_project: function (){
            this.deleteProject(this.projectData.id)
        }
    },
}
</script>


<style lang="scss" scoped>
.project{
    position: relative;
    width: 100%;

    .project-tab{
        position: relative;

        display: flex;
        align-items: center;

        padding: 0 20px 0 30px;

        height: 64px;

        z-index: 1;

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
            width: 26px;
            height: 26px;

            mask: url('../assets/icons/menu.svg');
            mask-size: cover;
            mask-position: center;
            
            background: #535353;
        }
        .btn-menu:hover{
            cursor: pointer;
            background: #7e7e7e;
        }
    }
    .project-tab:hover{
        cursor: pointer;
        background-color: #000;
    }

    .project-menu{
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);

        animation-duration: .2s;

        z-index: 0;

        button{
            width: 200px;
            height: 44px;

            font-family: 'Lato', sans-serif;
            font-weight: bold;
            font-size: 12pt;

            background-color: #000;
            color: #fff;

            border: none;
        }
        button:hover{
            cursor: pointer;
            background-color: rgb(46, 46, 46);
        }
    }
}
</style>