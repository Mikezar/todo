import { useState } from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";

export const AddCategoryModal = ({ closeModal, visible, addCategory }) => {
    const defaultValidationResult = {
        color: 'default',
        error: '',
        isValid: false       
    };

    const [category, setCategory] = useState('');
    const [validationResult, setValidationResult] = useState(defaultValidationResult);

    const validateLength = (value) => {
        if (value.length < 3) {
            return {
                isValid: false,
                error: "Minimum 3 characters"
            }
        }

        if (value.length > 15) {
            return {
                isValid: false,
                error: "Maximum 15 characters"
            }
        }

        return {
            isValid: true
        }
    }

    const changeCategory = (value) => {
        const { isValid, error } = validateLength(value);

        setValidationResult(
            {
                isValid,
                color: isValid ? "success" : "error",
                error
            }
        );
        setCategory(value);
    };

    const close = () => {
        setCategory('');
        setValidationResult(defaultValidationResult);
        closeModal();
    }

    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            css={{height: "226px"}}
            open={visible}
            onClose={close}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>New category</Text>
            </Modal.Header>
            <Modal.Body>
                <Input
                    aria-labelledby="category"
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    status={validationResult.color}
                    helperText={validationResult.error}
                    value={category}
                    onChange={(e) => changeCategory(e.target.value.trim())}
                    placeholder="My category"
                />
            </Modal.Body>
            <Modal.Footer>
                <Button auto disabled={!validationResult.isValid} 
                onPress={() => {
                    addCategory(category);
                    close();
                }}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}