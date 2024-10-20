const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Project {
        _id: ID!
        name: String!
        description: String
        completed: Boolean!
        startDate: String
        endDate: String
        budget: Float!
    }

    type Query {
        projects: [Project!]!
        project(_id: ID!): Project
    }

    type Mutation {
         createProject(
            name: String!, 
            description: String, 
            completed: Boolean, 
            startDate: String, 
            endDate: String, 
            budget: Float!
        ): Project!
        updateProject(_id: ID!, updatedFields: ProjectInput!): Project!
        deleteProject(_id: ID!): Project!
    }

    input ProjectInput {
        name: String
        description: String
        completed: Boolean
        startDate: String
        endDate: String
        budget: Float
    }
`;

module.exports = typeDefs;
