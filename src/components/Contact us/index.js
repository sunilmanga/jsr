import Navbar from "../Navbar";

const Contact = () => {
  return (
    <div>
      <div
        className="w-full h-screen bg-no-repeat bg-left-top bg-container"
        style={{ backgroundImage: `URL('img/jsrbackground.jpg')` }}
      >
        <Navbar />
        <div className="pt-[10rem] pb-[7.5rem]">
          <h4 className="leading-7 font-sans text-3xl text-white	font-black">
            Today’s investment is{" "}
            <span className="stroke-1 text-white">
              for tomorrows happiness.
            </span>
          </h4>
        </div>
        <div>
          <h1>Contact US</h1>
        </div>
      </div>

      <div className="pt-[5rem]">
        <div className="pt-[3.125rem]">
          <form className="p-[0.938rem]">
            <h6>Fill in the details</h6>
            <hr className="my-[0.875rem]" />
            <div className="py-[0.328rem] 	mb-[1rem]  px-[0.656rem]">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name*"
                required=""
                className="rounded-sm border-2 border-solid	"
              />
            </div>
            <div className="py-[0.328rem] mb-[1rem] px-[0.656rem]">
              <input
                type="number"
                name="phone"
                id="qnumber"
                placeholder="Enter Your Phone Number*"
                required=""
                maxlength="10"
                className="rounded-sm border-2 border-solid	"
              />
            </div>

            <div class="form-group">
              <input
                type="Email"
                name="mailid"
                placeholder="Enter Your Email ID*"
                required=""
                class="form-control"
              />
            </div>
            <div class="form-group">
              <textarea
                name="message"
                id="messages"
                placeholder="Message*"
                rows="3"
                required=""
                class="form-control"
              ></textarea>
            </div>
            <div class="form-group">
              <div
                class="h-captcha"
                data-sitekey="7167a08c-ace5-43c7-820c-bb32d242c35a"
              >
                <iframe
                  src="https://newassets.hcaptcha.com/captcha/v1/19148ad/static/hcaptcha.html#frame=checkbox&amp;id=0whglv2wv1fg&amp;host=www.jsrgroupsuncity.com&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=true&amp;custom=false&amp;hl=en&amp;tplinks=on&amp;pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&amp;sitekey=7167a08c-ace5-43c7-820c-bb32d242c35a&amp;theme=light&amp;origin=https%3A%2F%2Fwww.jsrgroupsuncity.com"
                  tabindex="0"
                  frameborder="0"
                  scrolling="no"
                  allow="private-state-token-issuance 'src'; private-state-token-redemption 'src'"
                  title="Widget containing checkbox for hCaptcha security challenge"
                  data-hcaptcha-widget-id="0whglv2wv1fg"
                  data-hcaptcha-response=""
                ></iframe>
                <textarea
                  id="g-recaptcha-response-0whglv2wv1fg"
                  name="g-recaptcha-response"
                ></textarea>
                <textarea
                  id="h-captcha-response-0whglv2wv1fg"
                  name="h-captcha-response"
                ></textarea>
                <div>
                  <p>
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      value="agreement"
                      required=""
                    />{" "}
                    Your consent to receive communications from us by way of
                    e-mails, phone calls and SMS’s with respect to your
                    transactions on our Website. Users will be required to
                    register their valid phone numbers and e-mail addresses to
                    facilitate such communication. We may also use your e-mail
                    address to send You updates, newsletters, changes to
                    features of the Service, and the like to provide You better
                    Services.
                  </p>
                </div>
                <button type="submit" id="submit" class="btn btn-primary w100">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
