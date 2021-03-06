import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { Footer } = Layout;

function Contact() {
  return (
    <Layout className="contact">
      <Footer className="footer">
        <h1 className="footerLink">aghniihsn@gmail</h1>
        <h5>
          Always down to collaborate when I have the time. I'm hoping to further my career. <br />
          Let's get in touch ✌️.
        </h5>
        <br />
        <a href="https://mail.google.com/mail/u/0/#inbox" className="footerLink">
          <img src="https://aghniihsn.github.io/profile/img/email.png" alt="icon" />
        </a>
        <a href="https://www.linkedin.com/in/aghni-hasna-mufida-1a1576229/" className="footerLink">
          <img src="https://aghniihsn.github.io/profile/img/linkedin.png" alt="icon" />
        </a>
        <a href="https://github.com/aghniihsn" className="footerLink">
          <img src="https://aghniihsn.github.io/profile/img/github.png" alt="icon" />
        </a>
        <a href="https://www.instagram.com/aghniihsn._/" className="footerLink">
          <img src="https://aghniihsn.github.io/profile/img/instagram.png" alt="icon" />
        </a>
        <br />
        <br />
        <p>
          Copyright ©2022 Created by Aghni Hasna.
          <br />
          Icons courtesy of Ant.
        </p>
      </Footer>
    </Layout>
  );
}

export default Contact;
