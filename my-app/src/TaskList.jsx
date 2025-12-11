import React from "react";

class TaskList extends React.Component {
  static tasks = [
    { id: 1, text: "Вивчити React" },
    { id: 2, text: "Зробити домашнє завдання" }
  ];

  inputRef = React.createRef();

  addTask = () => {
    const value = this.inputRef.current.value.trim();
    if (!value) return;

    TaskList.tasks.push({
      id: Date.now(),
      text: value
    });

    this.inputRef.current.value = "";
    this.forceUpdate();
  };

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter(t => t.id !== id);
    this.forceUpdate();
  };

  render() {
    return (
      <div style={{ 
        width: "400px",
        margin: "40px auto", 
        padding: "20px",
        background: "#eee",
        borderRadius: "10px"
      }}>
        <h2>Список завдань</h2>

        {TaskList.tasks.map(task => (
          <div 
            key={task.id} 
            style={{
              padding: "10px",
              marginBottom: "10px",
              background: "white",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <span>{task.text}</span>
            <button onClick={() => this.deleteTask(task.id)}>Видалити</button>
          </div>
        ))}

        <input
          ref={this.inputRef}
          placeholder="Нове завдання..."
          style={{ width: "100%", padding: "8px" }}
        />

        <button onClick={this.addTask} style={{ marginTop: "10px" }}>
          Додати
        </button>
      </div>
    );
  }
}

export default TaskList;
