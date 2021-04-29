import { ApolloServer } from 'apollo-server-express';
import schemas from './schemas/index.js';
import resolvers from './resolvers/index.js';
import express from 'express';
import connectMongo from './db.js';
import 'dotenv/config.js';
const PORT = process.env.PORT || 3000;

(async() => {
    try {
        await connectMongo();

        const server = new ApolloServer({
            typeDefs: schemas,
            resolvers,
            introspection: true,
            playground: true,
        }); // Dont enable playground in production

        const app = express();

        server.applyMiddleware({ app });

        app.use(express.static('public'));
        app.listen({ port: PORT }, () =>
            console.log(
                `🚀 App is running on port ${PORT}`),
        );
    } catch (e) {
        console.log('server error: ' + e.message);
    }
})();