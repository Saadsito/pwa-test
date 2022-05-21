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
            <button
              className="cancel-button"
              title="Cancelar grabación"
              onClick={cancelRecording}
            >
              <DeleteIcon className='iconDelete'/>
            </button>
          </div>
        )}
      </div>
      <div className="start-button-container">
        {initRecording ? (
          <button
            className="start-button"
            title="Guardar grabación"
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
          >
            <CheckIcon className='iconPink'/>
          </button>
        ) : (
          <button
            className="start-button"
            title="Empezar a grabar"
            onClick={startRecording}
          >
            <MicIcon className='iconPink'/>
          </button>
        )}
      </div>
    </div>
  );
}
