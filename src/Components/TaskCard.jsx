import React from "react";

import { useContextExample } from "../Context/ExampleContextProvider";

const TaskCard = () => {
  const { TasksExample } = useContextExample();

  console.log(TasksExample);

  return (
    <>
      {TasksExample.map((task) => (
        <div key={task.id}>
          <h1>{task.titulo}</h1>
          <p>{task.contenido}</p>
        </div>
      ))}
    </>
  );
};

export default TaskCard;
