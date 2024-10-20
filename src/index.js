const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/projectSchema'); // Adaptación a proyectos
const resolvers = require('./resolvers/projectResolver'); // Adaptación a proyectos

const startServer = async () => {
    try {
        // Conectar a la base de datos MongoDB
        await mongoose.connect('mongodb+srv://joratejedana:joratejedana@clusterdsw.7z41a.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDSW');

        // Crear y levantar el servidor Apollo
        const server = new ApolloServer({ typeDefs, resolvers });

        server.listen().then(({ url }) => {
            console.log(`Server corriendo en ${url}`);
        });
    } catch (error) {
        console.error('Error al conectar a la base de datos o iniciar el servidor:', error);
    }
}

startServer();
