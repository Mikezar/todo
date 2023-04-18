import {
  Container,
  NextUIProvider,
  Grid,
  Spacer
} from '@nextui-org/react';
import * as React from 'react';
import { NewTask } from "./components/NewTask";
import Search from './components/Search';
import TaskList from './components/TaskList';
import { useEffect, useState } from 'react';
import { ITask } from './types/domain';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [visibleTasks, setVisibleTasks] = useState<ITask[]>([]);

  const addTask = (task: ITask) => {
    setTasks([...tasks, task]);
  };

  useEffect(() => {
    setVisibleTasks([...tasks]);
  }, [tasks]);

  const search = (searchQuery: string) => {
    var searchResults = tasks.filter((task) => {
      return task.name.includes(searchQuery) ||
        task.description.includes(searchQuery);
    });

    setVisibleTasks([...searchResults]);
  };

  return (
    <NextUIProvider>
      <Container>
        <Grid.Container>
          <Grid xs={12} sm={4} md={4} lg={4} xl={3}>
            <NewTask {...{ addTask }} />
          </Grid>
          <Spacer x={1.0} />
          <Grid xs={12} sm={4} md={4} lg={4} xl={4}>
            <div style={{ marginTop: '5%', display: "block", width: '100%' }}>
              <Search {...{ search }} />
              <Spacer y={1.0} />
              <TaskList {...{ visibleTasks }} />
            </div>
          </Grid>
          <Grid xs={12} sm={4} md={4} lg={4} xl={4}>
          </Grid>
        </Grid.Container>
      </Container>
    </NextUIProvider>
  );
}

export default App;
