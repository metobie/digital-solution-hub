import React, { useEffect } from 'react';

const MailchimpSignup = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.fnames = new Array();
      window.ftypes = new Array();
      window.fnames[0] = 'EMAIL';
      window.ftypes[0] = 'email';
      window.fnames[1] = 'FNAME';
      window.ftypes[1] = 'text';
      window.ftypes[2] = 'text';
      window.fnames[3] = 'ADDRESS';
      window.ftypes[3] = 'address';
      window.fnames[4] = 'PHONE';
      window.ftypes[4] = 'phone';
      window.fnames[5] = 'BIRTHDAY';
      window.ftypes[5] = 'birthday';
      window.fnames[6] = 'COMPANY';
      window.ftypes[6] = 'text';
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="mc_embed_shell" className="my-8">
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <style type="text/css">
        {`
          #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
        `}
      </style>
      <div id="mc_embed_signup">
        <form
          action="https://renew-io.us14.list-manage.com/subscribe/post?u=106b4ac2d56d2d0e6e3d98a9a&amp;id=d2bf99e333&amp;f_id=00e2afe0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Håll dig uppdaterad!</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> tvingande
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                E-postadress <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required=""
                value=""
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input
                type="text"
                name="b_106b4ac2d56d2d0e6e3d98a9a_d2bf99e333"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                />
                <p style={{ margin: '0px auto' }}>
                  <a
                    href="http://eepurl.com/i0hcMs"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        backgroundColor: 'transparent',
                        borderRadius: '4px',
                      }}
                    >
                      <img
                        className="refferal_badge"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                        alt="Intuit Mailchimp"
                        style={{
                          width: '220px',
                          height: '40px',
                          display: 'flex',
                          padding: '2px 0px',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MailchimpSignup;