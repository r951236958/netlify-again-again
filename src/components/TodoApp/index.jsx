import Divider from "@material-ui/core/Divider"
import Icon from "@material-ui/core/Icon"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { nanoid } from "nanoid"
import React, { useEffect, useRef, useState } from "react"
import FilterButton from "../FilterButton"
import Todo from "../TodoDemo"
import Form from "../TodoForm"

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: "center",
    width: 450,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}))

const All = props => {
  return (
    <svg
      width={16}
      height={16}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M10.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 01.02-.022z" />
    </svg>
  )
}



function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed,
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

function TodoApp(props) {
  const classes = useStyles()
  const [tasks, setTasks] = useState(props.tasks)
  const [filter, setFilter] = useState("All")

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new obkect
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id)
    setTasks(remainingTasks)
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName }
      }
      return task
    })
    setTasks(editedTaskList)
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ))

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false }
    setTasks([...tasks, newTask])
  }

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task"
  const headingText = `${taskList.length} ${tasksNoun} remaining`

  const listHeadingRef = useRef(null)
  const prevTaskLength = usePrevious(tasks.length)

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus()
    }
  }, [tasks.length, prevTaskLength])

  return (
    <div className={classes.root}>
      <div className="border border-gray-200 rounded-md p-4 my-4">
        <div className="grid grid-rows-3">
          <div>
            <Form addTask={addTask} />
          </div>
          <div>
            <div>
              <div className=" flex items-center justify-center">
                <div className="flex left-0 mr-2">
                  <Icon>filter_alt</Icon>
                </div>

                <div
                  className="btn-group"
                  role="group"
                  aria-label="Button group"
                >
                  {filterList}
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <Typography
              variant="h4"
              component="h2"
              id="list-heading"
              tabIndex="-1"
              ref={listHeadingRef}
              gutterBottom
            >
              {headingText}
            </Typography>
            <ul
              className="todo-list stack-large stack-exception"
              aria-labelledby="list-heading"
            >
              {taskList}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoApp
