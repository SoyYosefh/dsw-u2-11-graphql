const Project = require('../models/projectModel');

const getAllProjects = async () => {
    return Project.find({});
};

const getProjectById = async (_id) => {
    return Project.findById(_id);
}

const createProject = async (name, budget) => {
    const project = new Project({ name, budget });
    return Project.create(project);
};

const updateProject = async (_id, updatedFields) => {
    return Project.findByIdAndUpdate(_id, updatedFields, { new: true });
}

const deleteProject = async (_id) => {
    return Project.findByIdAndDelete(_id);
}

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
};
