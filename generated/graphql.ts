import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
  deleteTask: Task;
};


export type MutationCreateTaskArgs = {
  description: Scalars['String'];
  title: Scalars['String'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  tasks: Array<Maybe<Task>>;
};

export type Task = {
  __typename?: 'Task';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type CreateTaskMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'Task', id: string, title?: string | null | undefined, description?: string | null | undefined } };

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: { __typename?: 'Task', id: string, title?: string | null | undefined, description?: string | null | undefined } };

export type TaskSummaryFragment = { __typename?: 'Task', id: string, title?: string | null | undefined };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, title?: string | null | undefined } | null | undefined> };

export const TaskSummary = gql`
    fragment TaskSummary on Task {
  id
  title
}
    `;
export const CreateTask = gql`
    mutation createTask($title: String!, $description: String!) {
  createTask(title: $title, description: $description) {
    id
    title
    description
  }
}
    `;
export const DeleteTask = gql`
    mutation deleteTask($id: ID!) {
  deleteTask(id: $id) {
    id
    title
    description
  }
}
    `;
export const IndexPage = gql`
    query indexPage {
  tasks {
    ...TaskSummary
  }
}
    ${TaskSummary}`;
export const TaskSummaryFragmentDoc = gql`
    fragment TaskSummary on Task {
  id
  title
}
    `;
export const CreateTaskDocument = gql`
    mutation createTask($title: String!, $description: String!) {
  createTask(title: $title, description: $description) {
    id
    title
    description
  }
}
    `;

export function useCreateTaskMutation() {
  return Urql.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument);
};
export const DeleteTaskDocument = gql`
    mutation deleteTask($id: ID!) {
  deleteTask(id: $id) {
    id
    title
    description
  }
}
    `;

export function useDeleteTaskMutation() {
  return Urql.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument);
};
export const IndexPageDocument = gql`
    query indexPage {
  tasks {
    ...TaskSummary
  }
}
    ${TaskSummaryFragmentDoc}`;

export function useIndexPageQuery(options: Omit<Urql.UseQueryArgs<IndexPageQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<IndexPageQuery>({ query: IndexPageDocument, ...options });
};