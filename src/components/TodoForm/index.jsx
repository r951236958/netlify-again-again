import Divider from "@material-ui/core/Divider"
import Icon from "@material-ui/core/Icon"
import IconButton from "@material-ui/core/IconButton"
import InputBase from "@material-ui/core/InputBase"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"
import React, { useState } from "react"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))

function TodoForm(props) {
  const classes = useStyles()
  const [name, setName] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) {
      return
    }
    props.addTask(name)
    setName("")
  }

  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <div className="my-4">
      <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <Icon>format_list_numbered</Icon>
        </IconButton>
        <InputBase
          className={classes.input}
          type="text"
          id="new-todo-input"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
          placeholder="Add new item"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="add todo"
        >
          <Icon>add</Icon>
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  )
}

export default TodoForm
