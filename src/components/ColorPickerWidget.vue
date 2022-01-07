<template>
    <div class="color-picker-widget">
        <div class="widget-clr clr-green"
            @click="update_proj_color('green')"></div>
        <div class="widget-clr clr-blue"
            @click="update_proj_color('blue')"></div>
        <div class="widget-clr clr-purple"
            @click="update_proj_color('purple')"></div>
        <div class="widget-clr clr-yellow"
            @click="update_proj_color('yellow')"></div>
        <div class="widget-clr clr-orange"
            @click="update_proj_color('orange')"></div>
        <div class="widget-clr clr-red"
            @click="update_proj_color('red')"></div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default{
    name: 'ColorPickerWidget',
    props: ['projectData'],

    methods: {
        ...mapActions(['updateProject']),

        update_proj_color: function (color){
            const updatedProject = {
                id: this.projectData.id,
                name: this.projectData.name,
                color: color,
                priority: this.projectData.priority,
                notes: this.projectData.notes,
                to_execute: this.projectData.to_execute
            }

            this.updateProject(updatedProject)
        }
    },
}
</script>

<style lang="scss" scoped>
$widget-height: 45px;

.color-picker-widget{
    position: absolute;
    top: -$widget-height;
    left: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 220px;
    height: $widget-height;

    background-color: #2C2C2C;
    border-radius: 20px;

    animation-duration: .1s;

    .widget-clr{
        width: 20px;
        height: 20px;

        border-radius: 50%;
    }
    .widget-clr:hover{
        cursor: pointer;
        outline: 3px solid white;
    }

    .widget-clr:not(:last-child){
        margin-right: 10px;
    }
}
.color-picker-widget:hover{
    cursor: auto;
}
</style>