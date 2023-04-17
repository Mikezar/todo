import { useState } from "react";
import {
    Text,
    Input,
    Spacer,
    Grid,
    Textarea,
    Button,
    Card
} from '@nextui-org/react';

import { PlusIcon } from "./PlusIcon";
import { AddCategoryModal } from "./AddCategoryModal"
import { ITask } from "../types/domain"
import "../App.css";

export default function NewTask({ addTask }) {
    const defaultTask = {
        name: '',
        description: '',
        time: '',
        date: '',
        categories: []

    };

    const [task, setTask] = useState<ITask>(defaultTask);
    const [visible, setVisible] = useState(false);

    const closeModal = () => {
        setVisible(false);
    };

    const addCategory = (category) => {
        const categories = [...task.categories, category];
        setTask({ ...task, categories });
    }

    const removeCategoryAt = (index) => {
        const filtered = task.categories.filter((_, i) => {
            return index != i;
        });

        setTask({ ...task, categories: [...filtered] });
    }
    return (
        <Card variant="bordered" css={{ borderColor: '#FF65AC', marginTop: '5%' }}>
            <Card.Body>
                <Grid.Container gap={2}>
                    <Grid xs={12} justify="space-between">
                        <Text h3>Create a new task</Text>
                        <Button aria-labelledby="save" auto color="success" onPress={() => {
                            addTask(task);
                            setTask(defaultTask);
                        }}>Save</Button>
                    </Grid>
                    <Grid xs={12}>
                        <Input
                            aria-labelledby="name"
                            width="100%"
                            clearable
                            bordered
                            labelPlaceholder="Name"
                            value={task.name}
                            justify="space-evenly"
                            onChange={(e) => {
                                setTask({ ...task, name: e.target.value });
                            }}
                            color="primary" />
                    </Grid>
                    <Spacer y={1.0} />
                    <Grid xs={12}>
                        <Textarea
                            aria-labelledby="description"
                            labelPlaceholder="Description"
                            bordered
                            width="100%"
                            value={task.description}
                            onChange={(e) => {
                                setTask({ ...task, description: e.target.value });
                            }}
                            color="primary"
                        />
                    </Grid>
                    <Grid xs={6}>
                        <Input
                            aria-labelledby="time"
                            width="100%"
                            label="Time"
                            type="time"
                            color="primary"
                            value={task.time}
                            onChange={(e) => {
                                setTask({ ...task, time: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid xs={6}>
                        <Input
                            aria-labelledby="date"
                            width="100%"
                            label="Date"
                            type="date"
                            color="primary"
                            value={task.date}
                            onChange={(e) => {
                                setTask({ ...task, date: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid xs={12} justify="space-between">
                        <Text h4>Category</Text>
                        <Button aria-labelledby="open-modale" auto icon={<PlusIcon />} onPress={(_) => {
                            setVisible(true);
                        }} light />
                    </Grid>
                    <Grid xs={12} className="category-list">
                        {task.categories.map((category, index) => (
                            <Button
                                key={index}
                                css={{ marginRight: '4px', marginBottom: '4px', display: 'inline-block' }}
                                size="xs"
                                onPress={() => removeCategoryAt(index)}>{category}
                            </Button>
                        ))}
                    </Grid>
                    <AddCategoryModal {...{ closeModal, visible, addCategory }} />
                </Grid.Container>
            </Card.Body>
        </Card>
    );
}
