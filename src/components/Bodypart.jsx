import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Icon from '../assets/icons/gym.png';

function Bodypart({ item, bodyPart, setBodyPart }) {
  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      type='button'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} style={{ height: '40px', width: '40px' }} alt='' />
      <Typography
        fontSize='24px'
        fontWeight='bold'
        color='#3A1212'
        textTransform='capitialize'
      >
        {item}
      </Typography>
    </Stack>
  );
}

export default Bodypart;
