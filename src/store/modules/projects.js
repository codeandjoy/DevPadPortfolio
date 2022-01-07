// import axios from "axios";

const state = {
    projects: [
        {
            "id": 1,
            "name": "App 1",
            "color": "green",
            "priority": 0,
            "notes": [
                {
                    "id": 1,
                    "name": "Requirements",
                    "content": "Stuff"
                },
                {
                    "id": 2,
                    "name": "Data",
                    "content": "Stuff"
                },
                {
                    "id": 3,
                    "name": "Ideas",
                    "content": "Stuff"
                }
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
                {
                    "id": 4,
                    "name": "Requirements",
                    "content": "Stuff"
                },
                {
                    "id": 5,
                    "name": "Data",
                    "content": "Stuff"
                },
                {
                    "id": 6,
                    "name": "Ideas",
                    "content": "Stuff"
                }
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
                {
                    "id": 7,
                    "name": "Requirements",
                    "content": "Stuff"
                },
                {
                    "id": 8,
                    "name": "Data",
                    "content": "Stuff"
                },
                {
                    "id": 9,
                    "name": "Ideas",
                    "content": "Stuff"
                }
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