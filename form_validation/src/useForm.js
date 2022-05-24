import { useEffect, useState } from 'react';

// custom hooks
const useForm = (initialValues, callback, validate) => {
    const [values, setValues] = useState(initialValues);
    const [ errors, setErrors ] = useState({});
    const [ isSubmitting, setIsSubmitting ] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleChange = (evt) => {
        evt.persist();

        setValues(values => ({
            ...values,
            [evt.target.name]: evt.target.value,
        }))
    };

    const handleSubmit = (evt) => {
        if (evt) evt.preventDefault();

        if (validate) {
            setErrors(validate(values));
        } 

        setIsSubmitting(true);
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    }
}

export default useForm;