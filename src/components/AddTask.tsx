import styles from '../styles/AddTask.module.scss'
import Plus from '../assets/plus.png'
import { useState } from 'react'

export const AddTask = () => {
  const [nameTask, setNameTask] = useState('')

  function createTask(task: string) {
    console.log(task)
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={nameTask}
        onChange={(e) => setNameTask(e.target.value)}
      />
      <button onClick={() => createTask(nameTask)}>
        Criar <img src={Plus} alt="" />
      </button>
    </div>
  )
}
