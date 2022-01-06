// import axios from "axios";

const state = {
    projects: [
        {
            "id": 1,
            "name": "App 1",
            "priority": 0,
            "Notes": [
            ],
            "ToExecute": [
            ],

        },

        {
            "id": 2,
            "name": "App 2",
            "priority": 1,
            "Notes": [
            ],
            "ToExecute": [
            ],
            
        },
        
        {
            "id": 3,
            "name": "App 3",
            "priority": 2,
            "Notes": [
            ],
            "ToExecute": [
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