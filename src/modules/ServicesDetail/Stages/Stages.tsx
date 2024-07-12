import React, { useRef, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Title from "ui/Title/Title";
import { StageInterface, StagesInterface } from "./interface";

const Stages: React.FC<{ stages: StagesInterface }> = ({ stages }) => {
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [elementHeightArray, setElementHeightArray] = useState<number[]>([]);

  useEffect(() => {
    const heights = elementRefs.current
      .filter((ref) => ref !== null)
      .map((ref) => ref!.clientHeight + 10); // Use ! to assert that ref is not null

    setElementHeightArray(heights);
  }, [stages]);

  return (
    <div className={styles.stages}>
      <Title title={stages.value.title} />
      <div className={styles.stageList}>
        {stages.value.stages.map((item: StageInterface, index: number) => (
          <div key={`${item.title}_stage`} className={styles.stageItem}>
            <div className={styles.stageIndicator}>
              <div className={styles.stageCircle}>
                <div className={styles.stageInnerCircle}></div>
              </div>
              {index < stages.value.stages.length - 1 && (
                <div
                  className={styles.stageLine}
                  style={{ height: `${elementHeightArray[index]}px` }}
                />
              )}
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageTitle}>{item.title}</div>
              <div
                className={styles.stageDescription}
                ref={(ref) => (elementRefs.current[index] = ref)}
              >
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stages;
