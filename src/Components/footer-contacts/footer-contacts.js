import React from "react";
import "./footer-contacts.css";
import { useTranslation } from "react-i18next";

import fb from "../../assets/social-icon/fb.png";
import tel from "../../assets/social-icon/tel.png";
import tw from "../../assets/social-icon/tw.png";
import ut from "../../assets/social-icon/ut.png";
import vb from "../../assets/social-icon/vb.png";
import inst from "../../assets/social-icon/inst.png";

const FooterContacts = () => {
  const MobOrWeb = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      document.location.href = "viber://add?number=380970594359";
    } else {
      document.location.href = "viber://chat?number=%2B380970594359";
    }
  };

  const { t } = useTranslation(["footer", "translation"]);

  return (
    <div className="footer-contacts">
      <h6 className="mb-3">
        <span>{t("footer:description.part3")}</span>
      </h6>
      <a href="https://t.me/Alex_Timofeev">
        <p>
          +380668643930
          <img className="ml-1" width={25} height={25} src={tel} alt="social" />
        </p>
      </a>

      <p className="viber" onClick={MobOrWeb}>
        +380970594359
        <img className="ml-1" width={25} height={25} src={vb} alt="social" />
      </p>

      <div className="mt-3">
        <h6>{t("footer:description.part4")}</h6>
        <a href="https://www.facebook.com/timofeev.trekking">
          <img className="mr-2" width={25} height={25} src={fb} alt="social" />
        </a>

        <a href="https://twitter.com/turist_alpinist">
          <img className="mr-2" width={25} height={25} src={tw} alt="social" />
        </a>

        <a href="https://www.instagram.com/tourist_alex/">
          <img
            className="mr-2"
            width={25}
            height={25}
            src={inst}
            alt="social"
          />
        </a>

        <a href="https://www.youtube.com/channel/UCyKA6DKipBMV2cgLxYkrFjw">
          <img className="mr-2" width={25} height={25} src={ut} alt="social" />
        </a>
      </div>
    </div>
  );
};
export default FooterContacts;
