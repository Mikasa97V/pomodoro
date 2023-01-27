export const getTimeFromMins = (time: number) => {
  if (time === 0) return
  if (time < 60) {
    return time + ' мин.'
  } else {
    if (time === 60) {
      return '1 час'
    } else {
      let hours = Math.trunc(time / 60);
      let minutes = time % 60;
      if (hours === 1) {
        return hours + ' час ' + minutes + ' мин'
      } else if (hours > 1 && hours < 5) {
        return hours + ' часа ' + minutes + ' мин'
      } else {
        return hours + ' часов ' + minutes + ' мин'
      }
    }
  }
}
