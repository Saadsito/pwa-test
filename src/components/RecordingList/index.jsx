import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useRecordingsList from '../../states/useRecordingLists';
import './styles.css';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RecordingsList({ audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);

  return (
    <div className="recordings-container">
      {recordings.length > 0 ? (
        <>
          <div className="recordings-list">
            {recordings.map((record) => (
              <div className="record" key={record.key}>
                <audio controls src={record.audio} />
                <div className="delete-button-container">
                  <button
                    className="delete-button"
                    title="Delete this audio"
                    onClick={() => deleteAudio(record.key)}
                  >
                    <DeleteIcon style={{color: '#fff'}} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="no-records">

        </div>
      )}
    </div>
  );
}
