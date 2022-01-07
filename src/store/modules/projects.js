// import axios from "axios";

const state = {
    projects: [
        {
            "id": 1,
            "name": "App 1",
            "color": "green",
            "priority": 0,
            "notes": [
            ],
            "to_execute": [
            ],

        },

        {
            "id": 2,
            "name": "App 2",
            "color": "red",
            "priority": 1,
            "notes": [
            ],
            "to_execute": [
            ],
            
        },
        
        {
            "id": 3,
            "name": "App 3",
            "color": "green",
            "priority": 2,
            "notes": [
            ],
            "to_execute": [
            ],
            
        }
    ]
};

const getters = {
    allProjects: state => state.projects
};

const actions = {
    updateProject: ({commit}, updatedProject) => {
        commit('updateProject', updatedProject);
    },

    deleteProject: ({commit}, id) => {
        commit('deleteProject', id);
    }
};

const mutations = {
    updateProject: (state, updatedProject) => {
        const index = state.projects.findIndex(project => project.id === updatedProject.id);
        if (index !== -1){
            state.projects.splice(index, 1, updatedProject)
        }
    },

    deleteProject: (state, id) => {
        const index = state.projects.findIndex(project => project.id === id);
        if (index !== -1){
            state.projects.splice(index, 1)
        }
    }
};

export default{
    state,
    getters,
    actions,
    mutations
};