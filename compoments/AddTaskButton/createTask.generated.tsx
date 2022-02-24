import * as Types from '../../generated/graphql';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type CreateTaskMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
  description: Types.Scalars['String'];
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'Task', id: string, title?: string | null | undefined, description?: string | null | undefined } };


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