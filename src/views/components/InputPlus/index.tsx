import styles from "./index.module.scss";
import { useCallback, useState } from "react";
import plus from "./images/plus.svg";

interface InputPlusParams {
  onAdd: (title: string) => void;
}

export const InputPlus: React.FC<InputPlusParams> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const addTask = useCallback(() => {
    onAdd(inputValue);
    setInputValue("");
  }, [inputValue]);
  return (
    <div className={styles.InputPlus}>
      <input
        className={styles.InputPlusInput}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />
      <button
        aria-label="Add"
        className={styles.InputPlusButton}
        onClick={addTask}
      ></button>
    </div>
  );
};
