const App = () => {
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
      isCompleted: false,
    },
    {
      text: "do MIT coursework",
      isCompleted: false,
    },
    {
      text: "build ToDo App",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => setTodos([...todos, { text, isCompleted: false }]);

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <>
        {todos.map((todo, i) => <Todo key={i} index={i} todo={todo} remove={removeTodo} />)}
      <ToDoForm addTodo={addTodo} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
