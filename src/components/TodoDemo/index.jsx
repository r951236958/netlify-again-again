import React, { useEffect, useRef, useState } from "react"

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default function TodoDemo(props) {
  const [isEditing, setEditing] = useState(false)
  const [newName, setNewName] = useState("")

  const editFieldRef = useRef(null)
  const editButtonRef = useRef(null)

  const wasEditing = usePrevious(isEditing)

  function handleChange(e) {
    setNewName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!newName.trim()) {
      return
    }
    props.editTask(props.id, newName)
    setNewName("")
    setEditing(false)
  }

  const editingTemplate = (
    <form
      className="max-w-sm mx-auto rounded-lg shadow-xl overflow-hidden p-6 space-y-10"
      onSubmit={handleSubmit}
    >
      <div className="max-h-12 relative flex items-center">
        <div className="relative my-4 border-b-2 focus-within:border-blue-500">
          <input
            type="text"
            className="h-12 block w-full appearance-none focus:outline-none bg-transparent"
            id={props.id}
            label={props.name}
            placeholder="Rename"
            value={newName}
            onChange={handleChange}
            ref={editFieldRef}
          />
          <label
            className="absolute top-0 -z-1 duration-300 origin-0"
            htmlFor={props.id}
          >
            {props.name}
          </label>
        </div>
        <div
          className="btn-group absolute right-0"
          role="group"
          aria-label="Button group"
        >
          <button
            id={props.name}
            className="text-sm px-3 py-2 text-gray-300 hover:text-gray-100 hover:rounded-l hover:border hover:border-gray-100 m-0"
            onClick={() => setEditing(false)}
          >
            <svg
              aria-label="cancel"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
          <button
            id={props.name}
            className="text-sm px-3 py-2 text-teal-300 hover:text-teal-400 hover:rounded-r hover:border hover:border-gray-100 m-0"
            type="submit"
          >
            <svg
              aria-label="save"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  )

  const viewTemplate = (
    <div className="max-h-12 relative flex items-center border-b-2 border-gray-400">
      <div className="flex items-center h-12">
        <input
          id={props.id}
          name={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label
          htmlFor={props.id}
          className="ml-2 block text-sm text-gray-900 dark:text-gray-100"
        >
          {props.name}
        </label>
      </div>
      <div
        className="btn-group absolute right-0 mb-4"
        role="group"
        aria-label="Button group"
      >
        <button
          id={props.name}
          className="text-sm px-3 py-2 text-blue-400 hover:text-blue-500 hover:rounded-l hover:border hover:border-gray-100 m-0"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          <svg
            aria-label="edit"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="24"
            height="24"
          >
            <path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z" />
          </svg>
        </button>
        <button
          id={props.name}
          className="text-sm px-3 py-2 text-red-400 hover:text-red-500 hover:rounded-r hover:border hover:border-gray-100 m-0"
          onClick={() => props.deleteTask(props.id)}
        >
          <svg
            aria-label="delete"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="24"
            height="24"
          >
            <path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z" />
          </svg>
        </button>
      </div>
    </div>
  )

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus()
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus()
    }
  }, [wasEditing, isEditing])

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
}
