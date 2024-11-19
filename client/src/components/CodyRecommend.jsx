import {Box, Card, CardContent, Chip, IconButton, Typography} from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
const CodyRecommend = () => {
    return (
        <>
            <Card
                sx={{
                    fontFamily:'noto-sans',
                    width: '95%',
                    height: '300px',
                    mt: 1,
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#EBEBFF',
                    position: 'relative',
                }}
            >
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography fontSize="large" fontWeight="bold" sx={{ lineHeight: 1,mb:1 }}>
                            코디 추천
                        </Typography>
                        <Typography fontSize="medium" fontWeight="bold" sx={{ lineHeight: 1 }}>
                            추천 내용
                        </Typography>
                    </Box>
                </CardContent>
                <IconButton
                    sx={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                    }}
                >
                    <RefreshIcon />
                </IconButton>
            </Card>
            <Box
                sx={{
                    fontFamily:'noto-sans',
                    fontWeight: 'Regular 400',
                    width: '95%',
                    maxWidth:'100%',
                    display: 'flex',
                    flexDirection: 'row',
                    overflowX: 'auto',
                    gap: 1,
                    mt: 1,
                    pb: 1,

                }}
            >
                {/* 태그들을 리스트로 받으면 나열 지금은 임시*/}
                {['캐주얼', '포멀', '비즈니스', '스포티', '아웃도어','스웨터','스포츠','스트릿'].map((tag, index) => (
                    <Chip key={index} label={`# ${tag}`}
                    sx={{
                             fontWeight: 'Regular 400',
                             fontSize: '16px',
                             color: '#9D78C6',
                             border: '2.5px solid #9D78C6',
                             borderRadius: '16px',
                             padding: '1px 8px',
                             backgroundColor: '#FFFFFF'
                         } } />
                ))}
            </Box>
        </>


    );
};
export default CodyRecommend
