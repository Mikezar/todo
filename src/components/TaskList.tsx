import * as React from 'react';
import {
    Card
} from '@nextui-org/react';

import { ITask } from '../types/domain';

export interface TaskProps {
    visibleTasks: ITask[]
}

const TaskList: Function = ({ visibleTasks }: TaskProps) : JSX.Element[] => {
    return (visibleTasks.map((task) => {
                return (
                    <Card>
                        <Card.Body>
                            <p>{task.name}</p>
                        </Card.Body>
                    </Card>
                );
            })
    );
}

export default TaskList;
