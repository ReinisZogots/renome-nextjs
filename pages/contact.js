import styles from "../styles/Contact.module.scss";
import Image from "next/image";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Renome | Contac us</title>
        <meta name="keywords" content="Renome" />
      </Head>
      <div className={styles.contact}>
        <div className={styles.contact_greeting}>
          <h3 className={styles.contact_greeting__title}>Contact us</h3>
          <p className={styles.contact_greeting__text}>
            Please feel free to contact us with any questions or to make
            reservations. If no one is available to take your call, please leave
            a message. We will contact you as soon as possible.
          </p>
        </div>
        <div className={styles.contact_comment}>
          <h3 className={styles.contact_comment__title}>Write a message</h3>
          <div className={styles.contact_comment__input_container}>
            <label>
              First Name *
              <input
                className={styles.contact_comment_input}
                type="text"
                id="first-name"
                name="first-name"
              />
            </label>
            <label>
              Last Name *
              <input
                className={styles.contact_comment_input}
                type="text"
                id="last-name"
                name="last-name"
              />
            </label>
            <label>
              Email *
              <input
                className={styles.contact_comment_input}
                type="text"
                id="email"
                name="email"
              />
            </label>
            <label>
              Subject
              <select className={styles.contact_comment__select} name="subject">
                <option>other</option>
                <option>complaint</option>
                <option>offer</option>
                <option>thankfulness</option>
              </select>
            </label>
            <label className={styles.contact_comment__message}>
              Message *
              <textarea className={styles.contact_comment__textarea}></textarea>
              <button className={styles.contact_comment__button}>Send</button>
            </label>
          </div>
        </div>
        <div className={styles.contact__details}>
          <h4 className={styles.contact__details_title}>Contact Details</h4>
          <p className={styles.contact__details_subtitle}>Address</p>
          <p className={styles.contact__details_info}>
            355 E 5TH ST, MANHATTAN, NY 10003
          </p>
          <p className={styles.contact__details_subtitle}>Phone</p>
          <p className={styles.contact__details_info}>+1 939 777 55 33</p>
          <p className={styles.contact__details_subtitle}>email</p>
          <p className={styles.contact__details_info}>reservation@renome.com</p>
        </div>
        <div className="contact__map">
          <Image
            width={210}
            height={140}
            layout="responsive"
            src="/assets/images/contact_01.png"
            alt="Google map"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
