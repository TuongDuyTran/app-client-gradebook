import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Header() {

    return (
        <Box sx={{ padding: '10px' }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                    <AddCircleOutlineIcon color="primary" fontSize="large"></AddCircleOutlineIcon>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;