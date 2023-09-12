import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const Bottom = () => {
  return (
    <div>
        <div  className="px-[1rem] mx-[11rem] py-[3.3rem]">
        <div  className="pt-[1.5rem]  " >
            <h1 className="text-3xl custommized-text-container">
              <span className="mx-1">Our</span>
              <span>Accreditations</span>
            </h1>
            <div className="flex">
                <div className="py-[1.87rem] px-[.625rem] border-r-[0.05rem] border-solid" >
                  <div className=" w-[12.5rem] h=[4.663rem] mx-[2.241rem]">
                    <img src="img/JSR-Group-Suncity-CREDAI.png" alt = " Images" />
                    <h1>Telangana</h1>
                  </div>
                </div>

                <div className="py-[1.87rem] px-[.625rem] border-r-[0.05rem] border-solid" >
                  <div className=" w-[12.5rem] h=[4.663rem] mx-[2.241rem]">
                    <img src="img/naredco-logo.png" alt = " Images" />
                    
                  </div>
                </div>

                <div className="py-[1.87rem] px-[.625rem] border-r-[0.05rem] border-solid" >
                  <div className=" w-[12.5rem] h=[4.663rem] mx-[2.241rem]">
                    <img src="img/ts-rera.png" alt = " Images" />
                  </div>
                </div>

                <div className="py-[1.87rem] px-[.625rem] border-r-[0.05rem] border-solid" >
                  <div className=" w-[12.5rem] h=[4.663rem] mx-[2.241rem]">
                    <img src="img/iso2.png" alt = " Images" />

                  </div>
                </div>
              
            </div>
        </div>
      </div>
        <div
          className="py-[5rem] w-full h-72 bg-no-repeat bg-cover flex flex-col items-end justify-end"
          style={{ backgroundImage: `URL('img/common-contact-bg.png')` }}
        >
          <h1 style={{color:'rgb(64, 52, 52)'}} className="customized-text-container text-3xl">
            <span className="mx-2">Let's</span>
            <span  className="mx-2"> discuss </span>
            <span  className="mx-2">about </span>
            <span  className="mx-2">Investment</span>
            <span  className="mx-2"> Oppurtunities </span>
            <span className="font-semibold text-3xl">over a cup of coffee </span> </h1>
            <div className=" mr-10">
        <button className="bg-[#F5821F] px-8 py-3 text-white border border-1 rounded-full border-white">Get In Touch</button>
            </div>
        </div>

        <div className=" bg-orange-400 pt-[2.5rem]  pd-[1.25rem]">
          <div className="pl-[0.938rem] pr-[0.938rem]">
            <div className="flex">
              <div className="w-1/12 pr-[0.938rem]"></div>
              <div className="w-2/12	 p-[0.625rem]">
                <img
                  src="img/JSRlogo23.png"
                  className="bg-white w-[15.25rem] p-[0.625rem]"
                  alt="Jsr Group Suncity"
                />
                <p className="font-normal text-base text-justify	text-white	">
                  JSR GROUP SUNCITY an ISO 9001-2015 Certified Company offers
                  HMDA / DTCP approved layout Residential and Commercial Plots.
                </p>
              </div>

              <div className="text-white pr-[0.938rem] pl-[4.688rem]">
                <h6 className="text-black font-semibold">Quick Links</h6>
                <ul className="pt-[.625rem] mb-[.875rem]">
                  <li className="">
                    <a href="about.php">About us</a>
                  </li>
                  <li className="">
                    <a href="gallery.php">Gallery</a>
                  </li>
                  <li className="">
                    <a href="Awards.php">Awards</a>
                  </li>
                  <li className="">
                    <a href="csr.php">CSR</a>
                  </li>
                  <li className="">
                    <a href="contact.php">Contact Us</a>
                  </li>
                  <li className="">
                    <a href="privacy-and-policy.php">Privacy Policy</a>
                  </li>
                </ul>
              </div>

              <div className="w-2/12	text-white pl-[0.938rem] pr-[0.938rem]">
                <h6 className="text-black font-semibold	">Corporate Office</h6>
                <p className="pt-[.625rem]">
                  JSR Group Sun City Realty Pvt. Ltd,
                  <br />
                  Vaishnavi Onyx-I, 4th Floor,
                  <br />
                  Near Victoria Memorial Metro Station,
                  <br />
                  Metro Pillar No-A1633, Kothapet,
                  <br />
                  Hyderabad, Telangana,
                  <br />
                  India 500035.
                </p>
                <p className="pt-[.625rem]">
                  <a href="mailto:info@jsrgroupsuncity.com">
                    info@jsrgroupsuncity.com
                  </a>
                </p>
              </div>

              <div className="w-2/12	text-white pl-[0.938rem] pr-[0.938rem]">
                <h6 className="text-black font-semibold">Follow Us</h6>
                <ul className="pt-[1.25rem] text-lg">
                  <li>
                    <a
                      href="https://www.facebook.com/jsrgroupsuncityofficial"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center"
                    >
                      <AiFillFacebook color='#000' size={20}/>
                      <p>/jsrgroupsuncity</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@jsrgroupsuncity9457"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center"
                    >
                      <AiFillYoutube size={20} color='#000'/>
                      <p>/jsrgroupsuncity</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/jsrgroupsuncity__official/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center"
                    >
                      <AiFillInstagram size={20} color='#000'/><p>/jsrgroupsuncity</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/jsrgroup2" target="_blank"  rel="noreferrer" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                      <p>/jsrgroupsuncity</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jsr-group-suncity-343ab6236/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center"
                    >
                      <AiFillLinkedin size={20} color="#000"/>
                      <p>/jsrgroupsuncity</p>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-2/12	text-white pl-[0.938rem] pr-[0.938rem]">
                <h6 className="text-black font-semibold">Twitter Feed</h6>
                <div
                  className="twitter-timeline twitter-timeline-rendered"
                  style={{
                    display: "flex",
                    width: "500px",
                    maxWidth: "100%",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  <iframe
                    id="twitter-widget-0"
                    scrolling="no"
                    frameBorder="0"
                    allowTransparency="true"
                    allowFullScreen="true"
                    className=""
                    style={{
                      position: "static",
                      visibility: "visible",
                      width: "223px",
                      height: "300px",
                      display: "block",
                      flexGrow: "1",
                    }}
                    title="Twitter Timeline"
                    src="https://syndication.twitter.com/srv/timeline-profile/screen-name/jsrgroup2?dnt=true&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideBorder=false&amp;hideFooter=false&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=en&amp;maxHeight=300px&amp;origin=https%3A%2F%2Fwww.jsrgroupsuncity.com%2F&amp;sessionId=fcac43b391d7553f202390274b722fa23f988e39&amp;showHeader=true&amp;showReplies=false&amp;theme=light&amp;transparent=false&amp;widgetsVersion=aaf4084522e3a%3A1674595607486"
                  ></iframe>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>

        <div className="bg-orange-600 p-[.625rem] flex justify-around">
          <h1  className="text-white">
            All Rights Reserved
          </h1>
          <p className="text-white">
            ©{" "}
            <script type="text/javascript">
              var year = new Date();document.write(year.getFullYear());
            </script>
            2023 | JSR GROUP SUNCITY.
          </p>
        </div>
    </div>
  )
}

export default Bottom