import React from "react";
import * as styles from "./SurveyLayout.module.css"

const SurveyLayout = ({children}) => {
  return (
    <div className={styles.questionContent}>
      {children}
    </div>
  );
};

export default SurveyLayout;
