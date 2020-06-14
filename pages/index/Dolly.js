import { css } from "emotion";

export default function Dolly() {
  return (
    <section
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <a href="https://www.youtube.com/channel/UCFckiz3s8f4GTG8v11lk1cA">
        <img
          alt=""
          src="https://cdn.discordapp.com/attachments/444739722388963329/480891447290232832/2_0.jpg"
          className={css`
            width: 600px;
            @media (max-width: 950px) {
              width: 100%;
            }
          `}
        />
      </a>
    </section>
  );
}
