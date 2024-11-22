
import { useState} from 'react';
import {Box, TextField, Button, Typography} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {loginUser} from '../api.jsx'
import {useDispatch} from "react-redux";
import {isLogin, SetAge,SetGender, SetNickName} from "../store.jsx";
import BasicBtn from "../components/BasicBtn.jsx";
import KakaoLoginImage from "../assets/kakao_login_medium_wide.png"

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const CLIENT_ID = import.meta.env.VITE_REST_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URL;

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const result = await loginUser(email, password);
            console.log('로그인 성공' , result);
            alert('로그인 성공');
            await dispatch(isLogin(true));
            await dispatch(SetNickName(result.nickname));
            await dispatch(SetAge(result.age));
            await dispatch(SetGender(result.gender))
            navigate('/home');
        }catch (err){
            console.log('로그인 실패: ',err);
            alert('이메일 혹은 비밀번호를 다시 확인해주세요.')
            dispatch(isLogin(false));
        }
    };
    const textFieldStyles = {
            "& .MuiOutlinedInput-root": {
                color: "#828282",
                fontFamily: "noto-sans",
                fontWeight: "Regular",
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#E0E0E0",
                    borderWidth: "2px",
                    borderRadius: '15px',
                },
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#828282",
                borderWidth: "3px",
                borderRadius: '15px',
            },
            "&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline": {
                borderColor: "#828282",
                borderRadius: '15px',
            },
            "& .MuiInputLabel-outlined": {
                color: "#828282",
            },
        };
    return (
        <Box
        sx={{padding:2}}>
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
                    sx={textFieldStyles}
                />

                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={handlePasswordChange}
                    sx={textFieldStyles}
                />

                <Box display="flex" justifyContent="flex-end" mt={1}>
                    <Button variant="text" color="black" onClick={() => navigate('/register')}>
                        계정이 없으신가요?
                    </Button>

                </Box>

                 <Button variant= "contained" disableElevation
                 sx={{
                    marginTop: '45px',
                    mt: 2,
                    text: '로그인',
                    backgroundColor: 'black',
                    textColor: 'white',
                    height: '50px',
                    width: '100%',
                         "& .MuiOutlinedInput-root": {
                           color: "#828282",
                           fontFamily: "noto-sans",
                           fontWeight: "Regular",
                           // Class for the border around the input field
                           "& .MuiOutlinedInput-notchedOutline": {
                             borderColor: "#E0E0E0",
                             borderWidth: "2px",
                             borderRadius: '30px'
                             }
                         },
                        "&.Mui-focused": {
                           "& .MuiOutlinedInput-notchedOutline": {
                             borderColor: "#E0E0E0",
                             borderWidth: "3px",
                             borderRadius: '30px'
                           },
                         },
                       "&:hover:not(.Mui-focused)": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#ccc",
                                  borderRadius: '30px'
                                },
                              },
                     // Class for the label of the input field
                     "& .MuiInputLabel-outlined": {
                       color: "#E0E0E0",
                        },
                        borderRadius: '30px'
                       }}>로그인</Button>

                <Button
                    component="a"
                    href={KAKAO_AUTH_URL}
                    sx={{
                        width: '100%',
                        height: '50px',
                        backgroundImage: `url(${KakaoLoginImage})`,
                        borderRadius:'12px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        mt:2
                    }}
                >
                </Button>
            </Box>
        </Box>

    );
};

export default Login;
