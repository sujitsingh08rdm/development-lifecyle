// import styles from "./Button.module.css";

export const Button = ({ onClick }: { onClick: () => void }) => {
  return (
    <button role="button" onClick={onClick}>
      Shared Button
    </button>
  );
};
