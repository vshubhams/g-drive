import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from "../firebase";
const useStyles = makeStyles((theme) => ({
    wrapper: {
        maxWidth: "400px",
        margin: "auto",
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    }, form: {
        display: "flex",
        flexDirection: "column",
        "& > input": {
            border: "red",
        }
    },
}));


export default function SignUp() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Typography variant="h4">Sign In</Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField size="small" label="Email" variant="outlined" />
                <TextField size="small" type={'Password'} label="Password" variant="outlined" />
                <TextField size="small" type={'Password'} label="Confirm Password" variant="outlined" /> <br />
                <Button variant="contained" type="submit" color="primary" >Sign UP</Button>
            </form>
        </div>
    )
}

