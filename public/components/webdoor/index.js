import React from "react";
import styles from "./styles.module.css";

function Webdoor() {
  return (
    <div className={styles.webdoor}>
      <video
        src="../assets/videos/video-webdoor.mp4"
        autoPlay
        muted
        loop
        className={styles.webdoorVideo}
      ></video>
      <div className={styles.webdoorWrapper}>
        <p className={styles.webdoorWrapperText}>
          "Não se preocupem com nada, mas em todas as orações peçam a Deus o que
          vocês precisam e orem sempre com o coração agradecido. E a paz de
          Deus, que ninguém consegue entender, guardará o coração e a mente de
          vocês, pois vocês estão unidos com Cristo Jesus."
        </p>
        <span className={styles.webdoorWrapperSpan}>Filipenses 4:6-7</span>
      </div>
    </div>
  );
}

export default Webdoor;
