import { AddTaskButton } from '../AddTaskButton';
import Card from '../Card';
import { DeleteTaskButton } from '../DeleteTaskButton';
import { TaskCard } from '../TaskCard';
import { filterOfPresentation } from '../../functions/filterOfPresentation';
import { useTaskListQuery } from './taskList.generated';

export function TaskList() {
  const [res] = useTaskListQuery();
  return (
    <Card>
      <AddTaskButton />
      {filterOfPresentation(res.data?.tasks ?? []).map((task) => (
        <TaskCard key={task.id} task={task!}>
          <DeleteTaskButton id={task.id} />
        </TaskCard>
      ))}
    </Card>
  );
}
