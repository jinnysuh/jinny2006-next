import Link from "next/link";
import { css } from "emotion";
import { useRouter } from "next/router";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <div
        className={css`
          width: 100%;
          background-color: black;
          overflow: hidden;
        `}
      >
        <div
          className={css`
            width: 100%;
            background: url("/background.png");
            background-size: cover;
            background-position: center top;
            back-position: center top;
            height: 17rem;
            @media (max-width: 1024px) {
              height: 8rem;
            }
          `}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ul
            className={css`
              margin-left: 2rem;
              padding: 0;
              list-style: none;
              display: flex;
              align-items: flex-end;
              font-size: 2.5rem;
              height: 7rem;
              > li {
                display: flex;
                margin-left: 2rem;
                > a {
                  color: #6897bb;
                }
                &.active {
                  > a {
                    color: white;
                  }
                }
              }
            `}
          >
            <li className={router.pathname === "/" ? "active" : ""}>
              <Link href="/">
                <a>
                  <span>Home</span>
                </a>
              </Link>
            </li>
            <li className={router.pathname === "/AboutMe" ? "active" : ""}>
              <Link href="/AboutMe">
                <a>
                  <span>AboutME</span>
                </a>
              </Link>
            </li>
            <li className={router.pathname.includes("/Watch") ? "active" : ""}>
              <Link href="/Watch">
                <a>
                  <span>Watch</span>
                </a>
              </Link>
            </li>
            <li className={router.pathname === "/SocialMedia" ? "active" : ""}>
              <Link href="/SocialMedia">
                <a>
                  <span color="gray">SocialMedia</span>
                </a>
              </Link>
            </li>
            <li className={router.pathname === "/History" ? "active" : ""}>
              <Link href="/History">
                <a>
                  <span color="gray">History</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Component {...pageProps} />
    </>
  );

  function handleLogout() {
    console.log("logging out");
  }
}
