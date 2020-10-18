import Head from "next/head";
import Image from "../components/Image";
export default function AboutMe() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>
        <font size="7">
          <b>Uploading the history of learning programming</b>
        </font>
      </p>
      <h1>2020 / 9 / 27</h1>
      <p>
        <font size="3">
          We had a competition between two teams. It was about which team would
          make more proccess in solving questions in the website
          <br />
          codesignal. Although our team lost, I could learn a lot of new problem
          solving skills.
        </font>
      </p>
      <img
        alt=""
        src="https://cdn.discordapp.com/attachments/714351689573859370/761547745084702750/Screen_Shot_2020-10-02_at_8.18.21_PM.png"
        width="1000px"
      />
      <p>
        <font size="3">
          {" "}
          From this problem, I think it was important to know how to divide the
          results how they are going to different depending <br />
          on the range of the subtraction of the variables.
        </font>
      </p>
      <h2>2020 / 10 / 4</h2>
      <p>
        <font size="3">
          In today's class, our coding team discussed about the subject of the
          app that we are going to make, and we decided <br />
          to make a science education app. We discussed about the app logo, and
          we make our github repository for our project.
          <br /> Our app name is Queezes, which will be a science related
          educational app.{" "}
        </font>
      </p>
      <img
        alt=""
        src="https://cdn.discordapp.com/attachments/714351689573859370/762304633645039646/Screen_Shot_2020-10-04_at_10.25.40_PM.png"
        width="1000px"
      />
      <h2>2020 / 10 / 11</h2>
      <p>
        <font size="3">
          In today's class, our teammates cooperated to make a basic page for
          our app Queezes. I had lots of problems because of my outdated version
          <br />
          of macOS, but by the help of my programming teacher, I could make page
          for our app.{" "}
        </font>
      </p>
      <img
        alt=""
        src="https://cdn.discordapp.com/attachments/714351689573859370/764850911599394816/Screen_Shot_2020-10-11_at_11.02.27_PM.png"
        width="1000px"
      />
      <h2>2020 / 10 / 18</h2>
      <p>
        <font size="3">
          In today's class, all of our teammates got ready with the website version template of our app. 
          Then we used our time <br />to make the template for the moblie version, and finally we got the template of the mobile version using expo client. {" "}
        </font>
      </p>
      <img
        alt=""
        src="https://cdn.discordapp.com/attachments/714351689573859370/767375994935181332/IMG_3662.PNG"
        width="300px"
      />
    </div>
  );
}
