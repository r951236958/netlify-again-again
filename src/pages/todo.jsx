import React from "react"
import Button from "../components/Button"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Title from "../components/Title"
import TodoApp from "../components/TodoApp"

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
]

const Todo = () => {
  const siteTitle = "Todo App"
  return (
    <Layout>
      <SEO title={siteTitle} />
      <Title>{siteTitle}</Title>
      <TodoApp tasks={DATA} />
      <div className="block">
        <Button color="red">Update Now</Button>
        <Button color="gray">Later</Button>
      </div>
    </Layout>
  )
}

export default Todo
