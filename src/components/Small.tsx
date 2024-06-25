import { FunctionComponent } from "react";
import StateHoverTypeSecondary from "./StateHoverTypeSecondary";
import H1 from "./H1";
import styles from "./Small.module.css";

export type SmallType = {
  className?: string;
};

const Small: FunctionComponent<SmallType> = ({ className = "" }) => {
  return (
    <div className={[styles.small, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.projectParent}>
          <div className={styles.project}>
            <img
              className={styles.projectChild}
              alt=""
              src="/rectangle-22@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.html}>Discord.js</div>
              <div className={styles.html}>TS</div>
              <div className={styles.html}>JS</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>Bot boilerplate</div>
              <div className={styles.minecraftServersHosting}>
                Start creating scalable discord.js bot with typescript in
                seconds
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
          <div className={styles.project}>
            <img
              className={styles.projectChild}
              alt=""
              src="/rectangle-22@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.html}>VUE</div>
              <div className={styles.html}>CSS</div>
              <div className={styles.html}>JS</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>My blog</div>
              <div className={styles.minecraftServersHosting}>
                Front-end of my future blog website written in vue
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
          <div className={styles.project}>
            <img
              className={styles.projectChild}
              alt=""
              src="/rectangle-22@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.html}>Figma</div>
              <div className={styles.scss4}>CSS</div>
              <div className={styles.python4}>JS</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>Chess pro</div>
              <div className={styles.minecraftServersHosting}>
                Figma landing page about service for viewing chess tournaments
              </div>
              <div className={styles.projectParent}>
                <StateHoverTypeSecondary
                  buttonText={`Figma <~>`}
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
        <div className={styles.projectParent}>
          <div className={styles.project}>
            <img
              className={styles.projectChild}
              alt=""
              src="/rectangle-22@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.html}>Figma</div>
              <div className={styles.python4}>TS</div>
              <div className={styles.python4}>JS</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>Crash protect website</div>
              <div className={styles.minecraftServersHosting}>
                Figma template for website about anti-raid, anti-crash discord
                bot
              </div>
              <div className={styles.projectParent}>
                <StateHoverTypeSecondary
                  buttonText={`Figma <~>`}
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
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>CSS</div>
              <div className={styles.python4}>JS</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>CSS expirements</div>
              <div className={styles.minecraftServersHosting}>
                Collection of my different little projects in css
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
              <div className={styles.html}>Lua</div>
              <div className={styles.html}>NeoVim</div>
              <div className={styles.python4}>JS</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>Web Dev nvim config</div>
              <div className={styles.minecraftServersHosting}>
                Config for neovim perfect for web developer
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
        <div className={styles.projectParent}>
          <div className={styles.project}>
            <img
              className={styles.projectChild}
              alt=""
              src="/rectangle-22@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Quart</div>
              <div className={styles.html}>HTML</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>Ooku</div>
              <div className={styles.minecraftServersHosting}>
                Simple link shortener with auth
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
              <div className={styles.html}>Figma</div>
              <div className={styles.flask}>Quart</div>
              <div className={styles.python14}>HTML</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask}>Flask</div>
              <div className={styles.flask}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>School website</div>
              <div className={styles.minecraftServersHosting}>
                Figma template website for my school
              </div>
              <div className={styles.projectParent}>
                <StateHoverTypeSecondary
                  buttonText={`Figma <~>`}
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
      <H1 categoryLabel="small-projects" />
    </div>
  );
};

export default Small;
