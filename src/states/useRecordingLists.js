import { useState, useEffect } from 'react';
import { deleteAudio } from '../utils/deleteAudio';
import generateKey from '../utils/generate-key';

export default function useRecordingsList(audio) {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    if (audio)
      setRecordings((prevState) => {
        return [...prevState, { key: generateKey(), audio }];
      });
  }, [audio]);

  return {
    recordings,
    deleteAudio: (audioKey) => deleteAudio(audioKey, setRecordings),
  };
}
