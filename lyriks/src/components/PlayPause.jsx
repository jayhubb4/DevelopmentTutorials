import { FaPauseCirlce, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCirlce 
    size={35}
    classname='text-gray-300'
    onClick={handlePause}
  />
) : (
  <FaPlayCircle
    size={35}
    classname='text-gray-300'
    onClick={handlePlay}
  />
));

export default PlayPause;
