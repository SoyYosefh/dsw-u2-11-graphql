const projectService = require('../services/projectService');

const resolvers = {
    Query: {
        projects: () => {
            return projectService.getAllProjects();
        },
        project: (_, { _id }) => {
            return projectService.getProjectById(_id);
        }
    },
    Mutation: {
        createProject: (_, { name, budget }) => {
            return projectService.createProject(name, budget);
        },
        updateProject: (_, { _id, updatedFields }) => {
            return projectService.updateProject(_id, updatedFields);
        },
        deleteProject: (_, { _id }) => {
            return projectService.deleteProject(_id);
        }
    }
};

module.exports = resolvers;
