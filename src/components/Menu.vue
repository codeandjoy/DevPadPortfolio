<template>
    <div>
        Projects

        <div class="projects">
            <div v-for="project in allProjects" :key="project.id" class="project">
                {{project.name}}
            </div>
        </div>
    </div>    
</template>

<script>
    import { mapGetters } from 'vuex';

    export default{
        name: 'Menu',
        computed: mapGetters(['allProjects'])
    }
</script>

<style lang="scss">

</style>