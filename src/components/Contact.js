import React from "react";
import Helmet from "react-helmet";

const Contact = () => (
  <article className="row">
    <Helmet>
      <title>Contact Page</title>
      <meta
        name="description"
        content="This is a proof of concept for React SSR"
      />
    </Helmet>
    <section className="col-12">
      <section className="card bg-light mt-5 mb-5">
        <section className="card-header">Contact Me</section>
        <section className="card-body">
          <p>Email: croeber2@gmail.com</p>
        </section>
      </section>
    </section>
  </article>

);

export default Contact;
