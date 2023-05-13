import React from "react";
import styles from "./index.module.scss";
import { useTodoStore } from "../../data/stores/useTodoStore";
import { InputPlus } from "../components/InputPlus";
import "../styles/common.scss";
import { Task } from "../components/Task";
import clsx from "clsx";

export const App: React.FC = () => {
  const [tasks, createTask, removeTask, updateTask] = useTodoStore((state) => [
    state.tasks,
    state.createTask,
    state.removeTask,
    state.updateTask,
  ]);

  console.log(tasks);

  return (
    <div className="container">
      <article className={styles.article}>
        <h1 className={styles.articleTitle}>To Do App</h1>
        <section className={styles.articleSection}>
          <InputPlus
            onAdd={(title) => {
              if (title.trim()) {
                createTask(title);
              }
            }}
          />
        </section>
        <section
          className={clsx(styles.articleSection, styles.articleSectionScroll)}
        >
          {!tasks.length && (
            <p className={styles.articleNoTask}>There is no one tasks</p>
          )}
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                onDone={removeTask}
                onEdited={updateTask}
                onRemoved={removeTask}
              />
            );
          })}
        </section>
      </article>
    </div>
  );
};
