// function Todo({ todo, index, remove }) {
// }

const Todo = ({ todo, index, remove }) => {
  const handle = () => remove(index);

  return (
    <div className="display-6 mb-3 border-bottom" onClick={handle}>
      {todo.text} (-)
    </div>
  );
};
