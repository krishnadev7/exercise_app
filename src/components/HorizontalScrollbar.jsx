import { Box } from '@mui/system';
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';
import Bodypart from './Bodypart';

const HorizontalScrollbar = ({ data,bodyPart,setBodyPart }) => {
  return (
    <div>
      {data.map(item => (
        <Box
          key={item.id || item}
          title={item.id || item}
          id={item.id || item}
          m='0 40px'
        >
          <Bodypart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
