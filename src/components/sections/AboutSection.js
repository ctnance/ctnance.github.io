import React from "react";

function AboutSection() {
  return (
    <section id="about">
      <h2 className="section-title about--title">About</h2>
      <div className="about--content">
        <img
          className="about--profile-img"
          src="/images/profile-photo.jpg"
          alt="profile image"
        />
        <p className="about--paragraph">
          I am a passionate Front End Web Developer. I am always excited to learn
          something new and tackle the next challenge.
        </p>

        <p className="about--paragraph">
          Keeping up with the latest technology is important to me. I greatly enjoy
          listening to the{" "}
          <a href="https://podcast.htmlallthethings.com/" target="_blank">
            HTML All The Things
          </a>{" "}
          and{" "}
          <a href="https://scrimba.com/podcast/" target="_blank">
            Scrimba
          </a>{" "}
          podcasts.
        </p>

        <p className="about--paragraph">
          I have over two years of experience using HTML, CSS & Javascript. I
          primarily use React as my framework of choice. I am comfortable working with
          other frameworks such as SASS, JQuery and Bootstrap.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
