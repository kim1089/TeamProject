
import { useState} from 'react';
import {Box, TextField, Button, Typography} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {loginUser} from '../api.jsx'
import {useDispatch} from "react-redux";
import {isLogin} from "../store.jsx";
import BasicBtn from "../components/BasicBtn.jsx";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Logging in with:", { email, password });
        try{
            const result = await loginUser(email, password);
            console.log('로그인 성공' , result);
            dispatch(isLogin(true));
            navigate('/home');
        }catch (err){
            console.log('로그인 실패: ',err);
            dispatch(isLogin(false));
        }
    };
    return (
        <>
            <Typography variant="h5" align="center" gutterBottom sx={{marginTop:8}}>
                로그인
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <Box display="flex" justifyContent="flex-end" mt={1}>
                    <Button variant="text" color="black" onClick={() => navigate('/register')}>
                        계정이 없으신가요?
                    </Button>
                </Box>
                <BasicBtn text = "로그인" bgColor='black' textColor='white' />
                <BasicBtn text = "카카오 로그인" bgColor='#FEE500' textColor='black'/>
            </Box>
        </>

    );
};

export default Login;
