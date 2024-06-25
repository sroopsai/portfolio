import { FunctionComponent } from "react";
import Dots from "./Dots";
import Footer from "./Footer";
import H1 from "./H1";
import StateHover1 from "./StateHover1";
import MessageContainer from "./MessageContainer";
import Header from "./Header";
import Media from "./Media";
import styles from "./Contacts1.module.css";

export type Contacts1Type = {
  className?: string;
};

const Contacts1: FunctionComponent<Contacts1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.contacts, className].join(" ")}>
      <div className={styles.background}>
        <Dots
          showEllipseDiv
          ellipseDivVisible
          ellipseDivVisible1
          showFrameDiv
          ellipseDivVisible2
          frameDivVisible
          dotsWidth="103px"
          dotsHeight="103px"
          dotsPosition="absolute"
          dotsTop="1134px"
          dotsLeft="1363px"
          ellipseDivWidth="4px"
          ellipseDivHeight="4px"
          ellipseDivWidth1="4px"
          ellipseDivHeight1="4px"
          ellipseDivWidth2="4px"
          ellipseDivHeight2="4px"
          ellipseDivWidth3="4px"
          ellipseDivHeight3="4px"
          ellipseDivWidth4="4px"
          ellipseDivHeight4="4px"
          ellipseDivWidth5="4px"
          ellipseDivHeight5="4px"
          ellipseDivWidth6="4px"
          ellipseDivHeight6="4px"
          ellipseDivWidth7="4px"
          ellipseDivHeight7="4px"
          ellipseDivWidth8="4px"
          ellipseDivHeight8="4px"
          ellipseDivWidth9="4px"
          ellipseDivHeight9="4px"
          ellipseDivWidth10="4px"
          ellipseDivHeight10="4px"
          ellipseDivWidth11="4px"
          ellipseDivHeight11="4px"
          ellipseDivWidth12="4px"
          ellipseDivHeight12="4px"
          ellipseDivWidth13="4px"
          ellipseDivHeight13="4px"
          ellipseDivWidth14="4px"
          ellipseDivHeight14="4px"
          frameDivAlignSelf="stretch"
          frameDivWidth="unset"
          ellipseDivWidth15="4px"
          ellipseDivHeight15="4px"
          ellipseDivWidth16="4px"
          ellipseDivHeight16="4px"
          ellipseDivWidth17="4px"
          ellipseDivHeight17="4px"
          ellipseDivWidth18="4px"
          ellipseDivHeight18="4px"
          ellipseDivWidth19="4px"
          ellipseDivHeight19="4px"
          frameDivAlignSelf1="stretch"
          frameDivWidth1="unset"
          ellipseDivWidth20="4px"
          ellipseDivHeight20="4px"
          ellipseDivWidth21="4px"
          ellipseDivHeight21="4px"
          ellipseDivWidth22="4px"
          ellipseDivHeight22="4px"
          ellipseDivWidth23="4px"
          ellipseDivHeight23="4px"
          ellipseDivWidth24="4px"
          ellipseDivHeight24="4px"
        />
        <Dots
          showEllipseDiv
          ellipseDivVisible
          ellipseDivVisible1
          showFrameDiv
          ellipseDivVisible2
          frameDivVisible
          dotsWidth="103px"
          dotsHeight="103px"
          dotsPosition="absolute"
          dotsTop="511px"
          dotsLeft="1390px"
          ellipseDivWidth="4px"
          ellipseDivHeight="4px"
          ellipseDivWidth1="4px"
          ellipseDivHeight1="4px"
          ellipseDivWidth2="4px"
          ellipseDivHeight2="4px"
          ellipseDivWidth3="4px"
          ellipseDivHeight3="4px"
          ellipseDivWidth4="4px"
          ellipseDivHeight4="4px"
          ellipseDivWidth5="4px"
          ellipseDivHeight5="4px"
          ellipseDivWidth6="4px"
          ellipseDivHeight6="4px"
          ellipseDivWidth7="4px"
          ellipseDivHeight7="4px"
          ellipseDivWidth8="4px"
          ellipseDivHeight8="4px"
          ellipseDivWidth9="4px"
          ellipseDivHeight9="4px"
          ellipseDivWidth10="4px"
          ellipseDivHeight10="4px"
          ellipseDivWidth11="4px"
          ellipseDivHeight11="4px"
          ellipseDivWidth12="4px"
          ellipseDivHeight12="4px"
          ellipseDivWidth13="4px"
          ellipseDivHeight13="4px"
          ellipseDivWidth14="4px"
          ellipseDivHeight14="4px"
          frameDivAlignSelf="stretch"
          frameDivWidth="unset"
          ellipseDivWidth15="4px"
          ellipseDivHeight15="4px"
          ellipseDivWidth16="4px"
          ellipseDivHeight16="4px"
          ellipseDivWidth17="4px"
          ellipseDivHeight17="4px"
          ellipseDivWidth18="4px"
          ellipseDivHeight18="4px"
          ellipseDivWidth19="4px"
          ellipseDivHeight19="4px"
          frameDivAlignSelf1="stretch"
          frameDivWidth1="unset"
          ellipseDivWidth20="4px"
          ellipseDivHeight20="4px"
          ellipseDivWidth21="4px"
          ellipseDivHeight21="4px"
          ellipseDivWidth22="4px"
          ellipseDivHeight22="4px"
          ellipseDivWidth23="4px"
          ellipseDivHeight23="4px"
          ellipseDivWidth24="4px"
          ellipseDivHeight24="4px"
        />
        <Dots
          showEllipseDiv
          ellipseDivVisible
          ellipseDivVisible1
          showFrameDiv={false}
          ellipseDivVisible2
          frameDivVisible
          dotsWidth="109px"
          dotsHeight="49px"
          dotsPosition="absolute"
          dotsTop="145px"
          dotsLeft="46px"
          ellipseDivWidth="4px"
          ellipseDivHeight="4px"
          ellipseDivWidth1="4px"
          ellipseDivHeight1="4px"
          ellipseDivWidth2="4px"
          ellipseDivHeight2="4px"
          ellipseDivWidth3="4px"
          ellipseDivHeight3="4px"
          ellipseDivWidth4="4px"
          ellipseDivHeight4="4px"
          ellipseDivWidth5="4px"
          ellipseDivHeight5="4px"
          ellipseDivWidth6="4px"
          ellipseDivHeight6="4px"
          ellipseDivWidth7="4px"
          ellipseDivHeight7="4px"
          ellipseDivWidth8="4px"
          ellipseDivHeight8="4px"
          ellipseDivWidth9="4px"
          ellipseDivHeight9="4px"
          ellipseDivWidth10="4px"
          ellipseDivHeight10="4px"
          ellipseDivWidth11="4px"
          ellipseDivHeight11="4px"
          ellipseDivWidth12="4px"
          ellipseDivHeight12="4px"
          ellipseDivWidth13="4px"
          ellipseDivHeight13="4px"
          ellipseDivWidth14="4px"
          ellipseDivHeight14="4px"
          frameDivAlignSelf="unset"
          frameDivWidth="84px"
          ellipseDivWidth15="4px"
          ellipseDivHeight15="4px"
          ellipseDivWidth16="4px"
          ellipseDivHeight16="4px"
          ellipseDivWidth17="4px"
          ellipseDivHeight17="4px"
          ellipseDivWidth18="4px"
          ellipseDivHeight18="4px"
          ellipseDivWidth19="4px"
          ellipseDivHeight19="4px"
          frameDivAlignSelf1="stretch"
          frameDivWidth1="unset"
          ellipseDivWidth20="4px"
          ellipseDivHeight20="4px"
          ellipseDivWidth21="4px"
          ellipseDivHeight21="4px"
          ellipseDivWidth22="4px"
          ellipseDivHeight22="4px"
          ellipseDivWidth23="4px"
          ellipseDivHeight23="4px"
          ellipseDivWidth24="4px"
          ellipseDivHeight24="4px"
        />
        <div className={styles.backgroundChild} />
        <div className={styles.backgroundItem} />
      </div>
      <Footer logo="/logo@2x.png" propLeft="calc(50% - 683px)" />
      <div className={styles.title}>
        <div className={styles.parent}>
          <div className={styles.div}>/</div>
          <div className={styles.contacts1}>contacts</div>
        </div>
        <div className={styles.whoAmI}>Who am i?</div>
      </div>
      <H1
        categoryLabel="all-media"
        propTop="403px"
        propLeft="171px"
        propHeight="unset"
        propWidth="unset"
        propRight="unset"
        propBottom="unset"
        propFontSize="32px"
        propFontSize1="32px"
      />
      <StateHover1
        twitter="/twitter.svg"
        elias="@elias"
        propPosition="absolute"
        propTop="467px"
        propLeft="171px"
        propColor="#abb2bf"
      />
      <StateHover1
        twitter="/twitter.svg"
        elias="@elias"
        propPosition="absolute"
        propTop="466px"
        propLeft="288px"
        propColor="#abb2bf"
      />
      <div className={styles.contact}>
        <div className={styles.imInterestedInFreelanceOpWrapper}>
          <div className={styles.imInterestedIn}>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </div>
        </div>
        <div className={styles.frameParent}>
          <MessageContainer
            username="Elias#1234"
            emailAddress="elias@elias-dev.ml"
            propLeft="197px"
          />
          <div className={styles.supportMeHereParent}>
            <div className={styles.supportMeHere}>Support me here</div>
            <div className={styles.div1}>4149500120690030</div>
          </div>
        </div>
      </div>
      <Header />
      <Media
        propTop="0px"
        propLeft="17px"
        propGap="8px"
        propWidth="1px"
        propHeight="191px"
        propGap1="8px"
        propWidth1="32px"
        propHeight1="32px"
        propWidth2="32px"
        propHeight2="32px"
        propWidth3="32px"
        propHeight3="32px"
      />
    </div>
  );
};

export default Contacts1;
