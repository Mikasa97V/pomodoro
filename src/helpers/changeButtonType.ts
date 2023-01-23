export const changeGreenButtonType = (type: string, change: (type: string) => void) => {
  switch (type) {
    case 'start':
      change('Старт')
      break
    case 'pause':
      change('Пауза')
      break
    case 'continue':
      change('Продолжить')
      break
    default :
      break
  }
}

export const changeRedButtonType = (type: string, change: (type: string) => void) => {
  switch (type) {
    case 'stop':
      change('Стоп')
      break
    case 'miss':
      change('Пропустить')
      break
    case 'done':
      change('Сделано')
      break
    default :
      break
  }
}
