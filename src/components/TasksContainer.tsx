import styles from '../styles/TasksContainer.module.scss'
import Clipboard from '../assets/Clipboard.png'

import Plus from "../assets/plus.png"
import { useState } from "react"
import { Task } from './Task'

interface ITaskProps {
  id: number
  name: string
  completed: boolean
}

export const TasksContainer = () => {

  const [nameTask, setNameTask] = useState("")
  const [allTasks, setAllTasks] = useState<ITaskProps[]>([])

  let completedTasksAmount = 0

  allTasks.forEach(task => {
    if (task.completed == true) {
      completedTasksAmount += 1
    }
  })

  function createTask(task: string) {
    const newTask = {
      id: allTasks.length,
      name: nameTask,
      completed: false
    }

    setAllTasks([...allTasks, newTask])
  }

  function changeTaskStatus(id: number) {
    allTasks.forEach(task => {
        if (task.id == id) {
          task.completed = !task.completed
          setAllTasks([...allTasks])
        }
    });
  }

  function deleteTask(id: number) {
    allTasks.filter((task) => {
      if (task.id == id) {
        allTasks.splice(allTasks.indexOf(task), 1)
        setAllTasks([...allTasks])
      }
    })
  }

  return (
    <div className={styles.container}>
      <header className={styles.headerTasks}>
        <div className={styles.addTask}>
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
        <div className={styles.infoTasks}>
          <div>
            <span className={styles.createdTasks}>Tarefas criadas</span>
            <span id="created-tasks" className={styles.counts}>
              {allTasks.length}
            </span>
          </div>
          <div>
            <span className={styles.completedTasks}>Concluídas</span>
            <span id="completed-tasks" className={styles.counts}>
              {completedTasksAmount}
            </span>
          </div>
        </div>
      </header>
      <div className={styles.tasksContainer}>
        {!allTasks && (
          <div>
            <img src={Clipboard} alt="" />
            <p className={styles.textPrimary}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p className={styles.textSecondary}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
        {allTasks.map(task => (
          <Task 
            key={task.id}
            id={task.id} 
            name={task.name} 
            completed={task.completed} 
            changeTaskStatus={changeTaskStatus} 
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  )
}
