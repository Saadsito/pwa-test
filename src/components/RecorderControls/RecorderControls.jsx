import React from 'react';
import { formatMinutes, formatSeconds } from '../../utils/format-time';
import './styles.css';
import MicIcon from '@mui/icons-material/Mic';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function RecorderControls({ recorderState, handlers }) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  return (
    <div className="controls-container">
      <div className="recorder-display">
        <div className="recording-time">
          {initRecording && <div className="recording-indicator"></div>}
          <Typography component="h3" variant="h5">{formatMinutes(recordingMinutes)}</Typography>
          <Typography component="h3" variant="h5">:</Typography>
          <Typography component="h3" variant="h5">{formatSeconds(recordingSeconds)}</Typography>
        </div>
        {initRecording && (
          <div className="cancel-button-container">
              <DeleteIcon className='iconColor' onClick={cancelRecording}/>
          </div>
        )}
      </div>
      <div className="start-button-container">
        {initRecording ? (
            <CheckIcon className='iconColor' onClick={saveRecording}/>
        ) : (
            <MicIcon className='iconColor' onClick={startRecording}/>
        )}
      </div>
    </div>
  );
}
