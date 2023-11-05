import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Blog from '../Blos/Blog';
import { useState } from 'react'


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {

    const [isLogin, setIslogin] = useState(localStorage.getItem("accessToken") != null)
    const [valueEmail, setvalueEmail] = useState('')
    const [valuePassword, setValuePassword] = useState('')

    const handleSubmit = (event) => {

        event.preventDefault();

        var formdata = new FormData();
        formdata.append("username", valueEmail);
        formdata.append("password", valuePassword);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`/api/login?username=${valueEmail}&password=${valuePassword}`, requestOptions)
            .then(response => {
                if (response.ok) {
                    alert('Đăng nhập thành công')
                    return response.json()
                }
                throw Error(response.status)
            })
            .then(result => {
                localStorage.setItem("accessToken", result.accessToken)
                setIslogin(true)

            })
            .catch(error => {
                alert("email, password are wrong")
            }
            );

        // localStorage.removeItem("accessToken")
    };

    const onLogoutSuccess = () => {
        setIslogin(false)
    }

    return (
        <div>
            <div>
                {isLogin ? <Blog onLogoutSuccess={onLogoutSuccess} /> :
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={valueEmail}
                                        onChange={(e) => setvalueEmail(e.target.value)}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={valuePassword}
                                        onChange={(e) => setValuePassword(e.target.value)}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="/signup">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>

                        </Container>
                    </ThemeProvider>
                }
            </div>
        </div>
    );
}