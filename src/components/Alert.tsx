import clsx from "clsx";
import css from "./Alert.module.css";

interface AlertProps {
  type?: "success" | "error";
}

export default function Alert({ type }: AlertProps) {
  return (
    <p className={clsx(css.alert, type && css[type])}>
      This is a default alert text
    </p>
  );
}

import Alert from "./Alert";

export default function App() {
  return (
    <>
      <Alert />
      <Alert type="success" />
      <Alert type="error" />
    </>
  );
}
