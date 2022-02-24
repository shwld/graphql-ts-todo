import * as Types from '../../generated/graphql';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type DeleteTaskMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: { __typename?: 'Task', id: string, title?: string | null | undefined, description?: string | null | undefined } };


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