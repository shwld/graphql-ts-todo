import * as Types from '../../generated/graphql';

import gql from 'graphql-tag';
import { TaskCardFragmentDoc } from '../TaskCard/taskCard.generated';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type TaskListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TaskListQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, title?: string | null | undefined } | null | undefined> };


export const TaskListDocument = gql`
    query taskList {
  tasks {
    ...TaskCard
  }
}
    ${TaskCardFragmentDoc}`;

export function useTaskListQuery(options: Omit<Urql.UseQueryArgs<TaskListQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TaskListQuery>({ query: TaskListDocument, ...options });
};