import { ApolloServer } from 'apollo-server-express';
import schemas from './schemas/index.js';
import resolvers from './resolvers/index.js';
import express from 'express';
import connectMongo from './db.js';
import 'dotenv/config.js';

(async() => {
    try {
        await connectMongo();

        const server = new ApolloServer({
            typeDefs: schemas,
            resolvers,
        });

        const app = express();

        server.applyMiddleware({ app });

        app.use(express.static('public'));
        app.listen({ port: 80 }, () =>
            console.log(
                `🚀 Server ready at http://localhost:3000${server.graphqlPath}`),
        );
    } catch (e) {
        console.log('server error: ' + e.message);
    }
})();