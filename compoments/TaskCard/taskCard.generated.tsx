import * as Types from '../../generated/graphql';

import gql from 'graphql-tag';
export type TaskCardFragment = { __typename?: 'Task', id: string, title?: string | null | undefined };

export const TaskCardFragmentDoc = gql`
    fragment TaskCard on Task {
  id
  title
}
    `;