import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { TasksContainer } from './components/TasksContainer'

import styles from './styles/App.module.scss'

function App() {

  return (
    <div className={styles.container}>
      <Header />
        {/* <AddTask /> */}
      <TasksContainer />
    </div>
  )
}

export default App
