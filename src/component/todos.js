import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import "../component/todos.css";

const Todos = ({ todos }) => {
    // If the todos array has items in the list [todos.length], we want to return the list
    // Else, return a message saying "You have no todo's left"
    const todoList = todos.length ? (
      todos.map((todo) => {
        // For each todo in the todo list, we want to give the list item a key, and it's own card shown in the UI
        return (
          <Grid item key={todo.id}>
            <Card>
              {/* We set the local state of this todo item when the user submits the form in 
              AddTodo.js. All we need to do is return the todo list item */}
              <CardContent>
                <Typography variant="h6" style={{ padding: "50px" }}>
                  {todo.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })
    ) : (
      // Enter your message here if todo list is empty
      <p>You have no todo's left!</p>
    );
    // Lastly, return the todoList constant that we created above to show all of the items on the screen.
    return (
      <div className="todoCollection" style={{ padding: "10px" }}>
        {/*call todo list here*/}
        {todoList}
      </div>
    );
};
  
export default Todos;
