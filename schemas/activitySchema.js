import {gql} from 'apollo-server-express';

export default gql`
   type Activity {
      id: ID
      activityName: String
      category: Category
   }
`;
