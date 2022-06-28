const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control border-0"
        value={value}
        placeholder="Add Todo"
        aria-label="Add Todo"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
