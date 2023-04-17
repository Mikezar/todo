import {
    Card
} from '@nextui-org/react';


export default function TaskList({ visibleTasks }) {
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
