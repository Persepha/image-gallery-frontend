import { FC } from "react";
import { StatusMessageProps } from "./StatusMessage.props";
import { Loader } from "../Loader";
import styles from "./StatusMessage.module.css";

export const StatusMessage: FC<StatusMessageProps> = ({
  errorMessage,
  nothingMessage,
  error,
  isNothing,
  isLoading,
}) => {
  function getStatusComponent() {
    if (error) {
      return <h1>{errorMessage}</h1>;
    }

    if (isLoading) {
      return <Loader />;
    }

    if (isNothing) {
      return <h1>{nothingMessage}</h1>;
    }

    return null;
  }

  return <div className={styles.statusMessage}>{getStatusComponent()}</div>;
};
