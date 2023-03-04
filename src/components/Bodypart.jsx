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
    >
      <img src={Icon} style={{ height: '40px', width: '40px' }} alt='' />
    </Stack>
  );
}

export default Bodypart;
