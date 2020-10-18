import Video from "../../components/Video";
import { css } from "emotion";

export default function Updates() {
  return (
    <section
      className={css`
        width: 100%;
        display: flex;
        color: black;
        flex-direction: column;
        align-items: center;
      `}
    >
      <span style={{ color: "skyblue", fontSize: "3rem", fontWeight: "bold" }}>
        <img
          alt=""
          src="https://image.flaticon.com/icons/svg/813/813322.svg"
          height="30"
        />{" "}
        Updates
      </span>
      <p>
        <font size="4">Recent Video</font>
      </p>
      <div>
        <Video videoCode="SI6c9_m57qA" />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Video videoCode="FIsNSId9mm4" />
      </div>
      <p>
        <font size="4">Recent ArtWork</font>
      </p>
      <img
        alt=""
        src="https://cdn.discordapp.com/attachments/714351689573859370/761538575975710720/robotic_skull_2020.4.4.jpg"
        className={css`
          width: 600px;
          @media (max-width: 950px) {
            width: 100%;
          }
        `}
      />
    </section>
  );
}
