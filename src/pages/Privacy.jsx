import { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="policy">
      <h1>PRIVACY POLICY</h1>
      <h2>Introduction</h2>
      <p>
        GDPR is an opportunity to build a stronger data protection foundation
        for the benefit of all. SPHYNX Tequila takes its obligations around data
        processing and security very seriously. We have a data protection core
        team comprised of senior members of the Legal, Data and Marketing teams,
        dedicated to ensuring that SPHYNX Tequila is GDPR-compliant. For every
        new product development and enhancement to our service, we’re
        proactively applying the Data Protection by design principles.
      </p>
      <p>
        This is the privacy policy for the SPHYNX Tequila (as defined in our
        Terms and Conditions) that we make available from time to time. The
        SPHYNX Tequila is owned and operated by SPHYNX Tequila (we, us and our).
        For the purposes of EU data protection laws, we are the data controller.
      </p>
      <p>
        We have appointed a Data Protection Officer (DPO) who is responsible for
        overseeing questions in relation to this privacy policy. If you have any
        questions about this privacy policy, including any requests to exercise
        your legal rights, such as requests to delete your data, please contact
        the DPO at elcontacto@sphynxtequila.com.
      </p>
      <p>
        You have the right to make a complaint at any time to the Information
        Commissioner’s Office (ICO), the UK supervisory authority for data
        protection issues (www.ico.org.uk). We would, however, appreciate the
        chance to deal with your concerns before you approach the ICO so please
        contact us in the first instance.
      </p>
      <p>
        We are committed to protecting your privacy online. We appreciate that
        you do not want the information you provide to us to be distributed
        indiscriminately and here we explain how we collect information, what we
        do with it and what controls you have over it.
      </p>
      <p>
        By using the SPHYNX Tequila, you consent to the collection and use of
        your personal information in accordance with this privacy policy. If you
        do not agree with the use of your personal information as set out in
        this privacy policy, or the Terms and Conditions, please do not use the
        SPHYNX Tequila.
      </p>
      <p>
        We reserve the right to change this privacy policy from time to time. If
        we make material changes to this privacy policy, we will notify you by
        means of a prominent notice prior to the change becoming effective.
      </p>
      <h2>Information we may collect from you</h2>
      <p>We may collect and process the following information about you:</p>
      <ul className="info-list">
        <li>
          {' '}
          information (such as your name, email address, gender, date of birth,
          photographs, postal address and telephone number) that you provide us,
          including if you register as a user of the SPHYNX Tequila, book an
          appointment for any service, upload or submit any material via the
          SPHYNX Tequila, contact any service provider via the or enter into any
          competition or promotion we may sponsor;
        </li>
        <li>
          {' '}
          the content of any communications you send to us, for example, to
          report a problem or to submit queries, concerns or comments regarding
          the SPHYNX Tequila or its content;
        </li>
        <li>
          {' '}
          information from surveys that we may, from time to time, run on the
          SPHYNX Tequila, if you choose to participate in them;
        </li>
        <li>
          {' '}
          geographical location so that we can provide you with information
          about the services provided by businesses near to your location;
        </li>
        <li>
          {' '}
          and other information from your use of the SPHYNX Tequila including,
          the type of internet browser or mobile device you use, any website
          from which you have come to the Site and your IP address (the unique
          address which identifies your computer or mobile device on the
          Internet) and your operating system, which are automatically
          recognised by our web server.
        </li>
      </ul>
      <p>
        We do not collect any Special Categories of Personal Data about you,
        such as details about your race or ethnicity, religious or philosophical
        beliefs, sex life, sexual orientation, political opinions, trade union
        membership, information about your health and genetic and biometric
        data.
      </p>
      <p>
        We may record and monitor telephone calls for training and quality
        control purposes as well as to verify the details of any contract we may
        agree with you over the phone.
      </p>
      <p>
        Your name, as well as any photo you submit for your profile, any
        services or any businesses that you book appointments with and any
        recommendations you make, can be publicly displayed as part of your
        profile. Appointments booked will also be publicly displayed on the
        applicable service provider's profile. You can make changes to some of
        your account information through Settings.
      </p>
      <p>
        You are under no obligation to provide any such information. However, if
        you should choose to withhold requested information, we may not be able
        to provide you with certain services.
      </p>
    </section>
  );
};

export default Privacy;
