<template>
    <div id="menu">
        <div class="menu-title">
            <h1>Projects</h1>
        </div>

        <div class="menu-container">
            <div class="projects">
                <Project v-for="project in allProjects" :key="project.id" :projectData='project'/>
            </div>
        </div>

    </div>    
</template>

<script>
    import { mapGetters } from 'vuex';

    import Project from './Project.vue'

    export default{
        name: 'Menu',
        
        components:{
            Project
        },

        computed: mapGetters(['allProjects'])
    }
</script>

<style lang="scss">
#menu{
    display: flex;
    flex-direction: column;

    height: 100vh;
    width: 250px;

    padding-top: 20px;
    padding-bottom: 150px;

    box-sizing: border-box;

    font-family: 'Lato', sans-serif;
    font-weight: bold;
    background-color: #121212;

    .menu-title{
        text-align: center;
        margin-bottom: 100px;

        h1{
            margin: 0;
            
            font-size: 22pt;
            color: #4D4D4D;
        }
    }

    .menu-container{
        height: 100%;
        display: flex;
        flex-direction: column;

        .projects{
            height: fit-content;
            width: 100%;
        }
    }
}
</style>