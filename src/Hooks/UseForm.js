import { useState } from 'react';

function UseForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    return {
        values,
        setValues,
        handleChange,
    };
}

export { UseForm };