import { FunctionComponent } from "react";
import StateHoverTypeSecondary from "./StateHoverTypeSecondary";
import H1 from "./H1";
import styles from "./Complete.module.css";

export type CompleteType = {
  className?: string;
};

const Complete: FunctionComponent<CompleteType> = ({ className = "" }) => {
  return (
    <div className={[styles.complete, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.projectParent}>
          <div className={styles.project}>
            <img
              className={styles.projectChild}
              alt=""
              src="/rectangle-22@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>ChertNodes</div>
              <div
                className={styles.minecraftServersHosting}
              >{`Minecraft servers hosting `}</div>
              <div className={styles.projectParent}>
                <StateHoverTypeSecondary
                  buttonText={`Live <~>`}
                  propBackgroundColor="unset"
                  propBorder="1px solid #c778dd"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propPadding="8px 16px"
                  propColor="#fff"
                  propFontSize="16px"
                />
                <StateHoverTypeSecondary
                  buttonText={`Cached >=`}
                  propBackgroundColor="unset"
                  propBorder="1px solid #abb2bf"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propPadding="8px 16px"
                  propColor="#abb2bf"
                  propFontSize="16px"
                />
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img
              className={styles.projectChild}
              alt=""
              src="/rectangle-22@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.html}>CSS</div>
              <div className={styles.html}>Express</div>
              <div className={styles.html}>Node.js</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.chertnodesGroup}>
              <div className={styles.chertnodes1}>Kahoot Answers Viewer</div>
              <div className={styles.minecraftServersHosting1}>
                Get answers to your kahoot quiz
              </div>
              <div className={styles.projectParent}>
                <StateHoverTypeSecondary
                  buttonText={`Live <~>`}
                  propBackgroundColor="unset"
                  propBorder="1px solid #c778dd"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propPadding="8px 16px"
                  propColor="#fff"
                  propFontSize="16px"
                />
                <div className={styles.demoWrapper}>
                  <div className={styles.demo}>{`Cached >=`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img
              className={styles.projectChild}
              alt=""
              src="/rectangle-22@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.html}>React</div>
              <div className={styles.html}>Express</div>
              <div className={styles.html}>Discord.js</div>
              <div className={styles.html}>Node.js</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.chertnodesContainer}>
              <div className={styles.chertnodes2}>ProtectX</div>
              <div className={styles.minecraftServersHosting2}>
                Discord anti-crash bot
              </div>
              <div className={styles.projectParent}>
                <div className={styles.liveWrapper}>
                  <div className={styles.demo}>{`Live <~>`}</div>
                </div>
                <StateHoverTypeSecondary
                  buttonText={`Cached >=`}
                  propBackgroundColor="unset"
                  propBorder="1px solid #abb2bf"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propPadding="8px 16px"
                  propColor="#abb2bf"
                  propFontSize="16px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectParent}>
          <div className={styles.project}>
            <img
              className={styles.projectChild}
              alt=""
              src="/rectangle-22@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>CSS</div>
              <div className={styles.html}>JS</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.chertnodesGroup}>
              <div className={styles.chertnodes1}>Kotik Bot</div>
              <div className={styles.minecraftServersHosting1}>
                Multi-functional discord bot
              </div>
              <div className={styles.projectParent}>
                <StateHoverTypeSecondary
                  buttonText={`Live <~>`}
                  propBackgroundColor="unset"
                  propBorder="1px solid #c778dd"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propPadding="8px 16px"
                  propColor="#fff"
                  propFontSize="16px"
                />
                <div className={styles.demoWrapper}>
                  <div className={styles.demo}>{`Cached >=`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.project2}>
            <img
              className={styles.projectChild}
              alt=""
              src="/rectangle-22@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.html}>Vue</div>
              <div className={styles.html}>TS</div>
              <div className={styles.html}>Less</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.chertnodesGroup}>
              <div className={styles.chertnodes1}>Portfolio</div>
              <div className={styles.minecraftServersHosting1}>
                You’re using it rn
              </div>
              <div className={styles.projectParent}>
                <StateHoverTypeSecondary
                  buttonText={`Github <~>`}
                  propBackgroundColor="unset"
                  propBorder="1px solid #c778dd"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propPadding="8px 16px"
                  propColor="#fff"
                  propFontSize="16px"
                />
                <div className={styles.demoWrapper}>
                  <div className={styles.demo}>{`Cached >=`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <H1
        categoryLabel="complete-apps"
        propTop="0%"
        propLeft="0%"
        propHeight="4.57%"
        propWidth="26.37%"
        propRight="73.63%"
        propBottom="95.43%"
        propFontSize="32px"
        propFontSize1="32px"
      />
    </div>
  );
};

export default Complete;
