import { Circle, CheckCircle, Trash } from 'phosphor-react'
import cx from 'classnames';

import styles from '../styles/Task.module.scss'

interface PropsTask {
  id: number
  name: string
  completed: boolean
  changeTaskStatus: (id: number) => void
  deleteTask: (id: number) => void
}

export const Task = ({id, name, completed, changeTaskStatus, deleteTask}: PropsTask) => {

  return (
    <div className={`${completed ? styles.taskCompleted: styles.taskIncompleted}`}>
      <button 
        className={styles.btnCircle}
        onClick={() => changeTaskStatus(id)}
      >
        {completed ?  
          <CheckCircle size={24} /> : <Circle size={24} />
        }
      </button>
      {/* {completed ?
        <button 
          className={styles.circleStatusCompleted}
          onClick={() => changeTaskStatus(id)}
        >
          <CheckCircle size={24} />
        </button>
      : 
        <button 
          className={styles.circleStatusIncompleted}
          onClick={() => changeTaskStatus(id)}
        >
          <Circle size={24} />
        </button>
      } */}
      <p>{name}</p>
      <button 
        className={styles.btnTrash} 
        title="Remover"
        onClick={() => deleteTask(id)}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}
