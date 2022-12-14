import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { members } from "../data";
import Head from "next/head";
import TeamMember from "../components/Team/TeamMember";

const team = () => {
  return (
    <>
      <Head>
        <title>IEMPACT 2k23</title>
        <meta
          name="description"
          content="IEMPACT, the Annual Cultural Fest of IEM, is back with its 32nd edition after 2 years of online lives- education, events. As the Annual Cultural Fest of IEM, Saltlake we bring to you dance, music, football, quiz, debate, art and most importantly Hope and Joy."
        />
        <link rel="icon" href="LOGO.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Changa:wght@300;400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <div className="team">
        <header className="section-header">
          <h1>Our Team</h1>
        </header>
        <div className="row">
          {members.slice(0,2).map((members) => {
            return (
            <TeamMember key={members.id} image={members.image} name={members.name} designation={members.designation}/>
            );

          })}
        </div>
        <div className="row">
          {members.slice(2,members.length).map((members) => {
            return (
            <TeamMember key={members.id} image={members.image} name={members.name} designation={members.designation}/>
            );

          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default team;
