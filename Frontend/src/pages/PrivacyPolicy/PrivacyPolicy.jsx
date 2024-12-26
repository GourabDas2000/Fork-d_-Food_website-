import React from 'react';
import './privacyPolicy.css';
import {assets} from '../../assets.jsx'
const PrivacyPolicy = () => {
  return (
    <div className="privacypolicy">
      <div className="coversection">
        <img src={assets.privacy_policy} alt="" />
        <div className="left">
            <h1>Privacy Policy</h1>
            <div className="desc">
              <p>
                  When you use our services, you’re trusting us with your information.
              </p>
              <p>
                  We understand this is a big responsibility and work hard to protect<br/>
                  your information and put you in control.
              </p>
            </div>
        </div>
      </div>
      <div className="aftersection">
        <div className="common">
          <p className="commondesc">
            We at Fork'D, the owner and operator of
            (the “Website” or “Site), and our mobile
            application Food Connect (the App), hereafter collectively referred
            to in this Privacy Policy as “Food Connect”, “us”, “our” or “we”,
            respect the privacy of your personal information and, as such, make
            every effort to ensure your information is protected and remains
            private. We have provided this Privacy Policy to explain how we
            collect, use, share and protect information about the users of our
            Website or our App (hereafter referred to as “user”, “you” or
            “your”). We will not use or share your personal information with
            anyone except as described in this Privacy Policy. This Privacy
            Policy will inform you about the types of personal data we collect,
            the purposes for which we use the data, the ways in which the data
            is handled and your rights with regard to your personal data. Food
            Connect collects information about you when you use our Website or
            App to access our services, (the “Services”) and through other
            interactions and communications you have with us. The term Services
            include the content of our Website and App and the food collection,
            transportation and distribution services available through the Food
            Connect App or the Website, as well as any software that Food
            Connect provides to you that allows you to access the Services. For
            purposes of this Privacy Policy, “Your Information” or “Personal
            Data” means information about you, which may be of a confidential or
            sensitive nature and may include personally identifiable information
            (“PII”) and/or financial information. PII means individually
            identifiable information that would allow us to determine the actual
            identity of a specific living person, while sensitive data may
            include information, comments, content and other information that
            you voluntarily provide. We may change this Privacy Policy from time
            to time. If we decide to change this Privacy Policy, we will inform
            you by posting the revised Privacy Policy on the Website and in our
            App. Changes will go into effect on the “Last updated” date shown at
            the end of this Privacy Policy. By continuing to use the Website,
            App or our Services, you consent to the revised Privacy Policy. We
            encourage you to periodically review the Privacy Policy for the
            latest information on our privacy practices. By accessing or using
            our Services, you consent to the collection, transfer, manipulation,
            storage, disclosure and other uses of your information
            (collectively, “use of your information”) as described in this
            privacy policy and our Terms of Service which may be accessed here:
            https://www.foodconnectgroup.com/terms-of-service/. If you do not,
            or no longer, agree with or consent to this Privacy Policy and our
            Terms of Service you may not access or use our Services.
            Furthermore, for users of our Services, we rely upon the legal
            grounds found in the section entitled “the legal basis and reasons
            for collection and processing your personal information” found
            hereinafter in this Privacy Policy.
          </p>
        </div>
        <div className="common">
          <h3>Information Provided Directly By You</h3>
          <p className="commondesc">
            We collect information you provide directly to us, such as when you
            request information, create or modify your Food Connect account,
            request Services, complete a Food Connect form, survey,
            questionnaire or application, contact customer support, join or
            enroll for an event or otherwise communicate with us in any manner.
            This information may include, without limitation your name, date of
            birth, e-mail address, phone number, company or organization name,
            or other personal information you choose to provide.
          </p>
        </div>
        <div className="common">
          <h3>Information Collected From Other Sources</h3>
          <p className="commondesc">
            We may also receive information from other sources and combine that
            with information we collect through our Services. For example if you
            choose to link, create, or log in to your Food Connect account with
            a social media service, e.g. LinkedIn, Facebook or Twitter, or if
            you engage with a separate application or website that uses our API,
            or whose API we use, we may receive information about you or your
            connections from that website or application. This includes, without
            limitation, profile information, profile picture, gender, user name,
            user ID associated with your social media account, age range,
            language, country, friends list, your contact names, e-mail
            addresses, phone numbers, and other identifiers and any other
            information you permit the social network to share with third
            parties. The data we receive is solely dependent upon your privacy
            settings with the social network.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy