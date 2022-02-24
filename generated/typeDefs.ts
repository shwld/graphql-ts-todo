
  import gql from 'graphql-tag';
  export const typeDefs = gql`schema{query:Query mutation:Mutation}type Mutation{createTask(description:String!title:String!):Task!deleteTask(id:ID!):Task!updateTask(description:String!id:ID!title:String!):Task!}type Query{tasks:[Task]!}type Task{description:String id:String!title:String}`;
