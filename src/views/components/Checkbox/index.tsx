import styles from "./index.module.scss";
import clsx from "clsx";
import { useRef, useEffect } from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (onChange: any) => void;
  setInputValue: (setInputValue: any) => void;
  title: string;
  className: string;
  isInputActive: boolean;
  inputValue: string;
  disabled: boolean;
  onKeyDown: (onKeyDown: any) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  title,
  className,
  isInputActive,
  disabled,
  inputValue,
  setInputValue,
  onKeyDown,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [isInputActive]);

  return (
    <label className={clsx(styles.checkbox, className)}>
      <input
        className={styles.checkboxInput}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <span className={styles.checkboxButton}>
        <svg
          className={styles.checkboxIcon}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Interface / Check">
            <path
              id="Vector"
              d="M6 12L10.2426 16.2426L18.727 7.75732"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </span>
      {isInputActive ? (
        <input
          className={styles.checkboxEditInput}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={onKeyDown}
          ref={inputRef}
        />
      ) : (
        <span className={styles.checkboxText}>{title}</span>
      )}
    </label>
  );
};
