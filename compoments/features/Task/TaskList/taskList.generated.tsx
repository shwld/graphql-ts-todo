import * as Types from '../../../../generated/graphql';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type TaskListCardFragment = { __typename?: 'Task', id: string, title?: string | null | undefined };

export type TaskListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TaskListQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, title?: string | null | undefined } | null | undefined> };

export const TaskListCardFragmentDoc = gql`
    fragment TaskListCard on Task {
  id
  title
}
    `;
export const TaskListDocument = gql`
    query taskList {
  tasks {
    ...TaskListCard
  }
}
    ${TaskListCardFragmentDoc}`;

export function useTaskListQuery(options: Omit<Urql.UseQueryArgs<TaskListQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TaskListQuery>({ query: TaskListDocument, ...options });
};