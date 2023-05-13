import styles from "./index.module.scss";
import { useState } from "react";
import clsx from "clsx";
import { Checkbox } from "../Checkbox";

interface TaskProps {
  id: string;
  title: string;
  onDone: (id: string) => void;
  onEdited: (id: string, title: string) => void;
  onRemoved: (id: string) => void;
}

export const Task: React.FC<TaskProps> = ({
  id,
  title,
  onDone,
  onEdited,
  onRemoved,
}) => {
  const [checked, setChecked] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const [value, setValue] = useState(title);

  return (
    <div className={styles.task}>
      <Checkbox
        className={styles.taskCheckbox}
        disabled={isInputActive}
        title={value}
        checked={checked}
        onChange={setChecked}
        isInputActive={isInputActive}
        inputValue={value}
        setInputValue={setValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onEdited(id, title);
            setIsInputActive(false);
          }
        }}
      />
      {isInputActive ? (
        <button
          aria-label="Save"
          className={clsx(styles.taskButton, styles.taskButtonSave)}
          onClick={() => {
            if (title.trim()) {
              onEdited(id, title);
              setIsInputActive(false);
            }
          }}
        />
      ) : (
        <button
          aria-label="Edit"
          className={clsx(styles.taskButton, styles.taskButtonEdit)}
          onClick={() => {
            setIsInputActive(!isInputActive);
          }}
        />
      )}
      <button
        aria-label="Remove"
        className={clsx(styles.taskButton, styles.taskButtonRemove)}
        onClick={() => {
          if (confirm("Are you sure?")) {
            onRemoved(id);
          }
        }}
      />
    </div>
  );
};
