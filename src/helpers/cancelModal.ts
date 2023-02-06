import {useHistory} from "react-router-dom";

export const cancelModal = (id: string) => {
  const history = useHistory()
  history.push(`/tasks/${id}`)
}
