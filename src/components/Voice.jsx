import React from "react";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";

export default class Voice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioURL: null,
      audioDetails: {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      }
    };
  }
  handleAudioStop(data) {
    console.log(data);
    this.setState({ audioDetails: data });
    //console.log(data);
  }
  handleAudioUpload(file) {
    console.log(file);
  }
  handleRest() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0
      }
    };
    this.setState({ audioDetails: reset });
  }
  render() {
    return (
      <div className="App">
        <Recorder
          record={true}
          title={"Hola"}
          hideHeader
          audioURL={this.state.audioDetails.url}
          showUIAudio
          handleAudioStop={(data) => this.handleAudioStop(data)}
        />
      </div>
    );
  }
}
