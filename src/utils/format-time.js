export const formatMinutes = (minutes) => {
  return minutes < 10 ? `0${minutes}` : minutes;
}

export const formatSeconds = (seconds) => {
  return seconds < 10 ? `0${seconds}` : seconds;
}
