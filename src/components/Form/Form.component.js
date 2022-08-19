import * as React from 'react';
import { 
    Box,
    Button,
    TextField
} from '@mui/material';

const Form = ({ onSubmit, onCancel = "", formInputs, previousData, buttonName, flex }) => {
    const [form, setForm] = React.useState({});

    React.useEffect(() => {
        setForm((previousState) => ({
            ...previousState,
            ...previousData
        }));
    }, [previousData])

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: `${flex}`,
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%',
                my: 2
            }}
        >
            <form 
                onSubmit={(event) => onSubmit(event, form)}
                style={{
                    width: '90%'
                }}    
            >
                {formInputs.map(({ label, name, id, variant }) => {
                    return (
                        <TextField
                            type={id === "password" ? "password" : ""}
                            key={id}
                            id={id}
                            label={label}
                            variant={variant}
                            name={name}
                            value={form[name] || ""}
                            onChange={handleChange}
                            fullWidth
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                my: 1
                            }}
                        />
                    )
                })}
            </form>
            <Box>
                <Button
                    type="submit"
                    onClick={(event) => onSubmit(event, form)}
                >
                    {buttonName}
                </Button>
                {onCancel 
                    ? <Button
                            onClick={onCancel}
                        >
                            Cancel
                        </Button>
                    : <></>
                }
            </Box>
        </Box>
    )
}

export default Form;