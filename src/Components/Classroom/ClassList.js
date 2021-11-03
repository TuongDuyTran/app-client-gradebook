import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ClassList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/classroom/getAll")
            .then((result) => {
                setIsLoaded(true);
                setItems(result.data.data);
            })
            .catch((error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Box sx={{ padding: '20px' }}>
                <Grid container spacing={2}>
                    {items.map(item => (
                        <Grid item xs={3} key={item.ID}>
                            <Item sx={{ height: '200px' }}>
                                <h2>{item.Name}</h2>
                                <h3>{item.Description}</h3>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    }
}

export default ClassList;