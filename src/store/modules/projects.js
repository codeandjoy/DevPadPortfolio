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

const actions = {};

const mutations = {};

export default{
    state,
    getters,
    actions,
    mutations
};