'use client'

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import IframelyEmbed from "../components/IframelyEmbed";
import publicRuntimeConfig from "../../next.config.mjs";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const basePath = publicRuntimeConfig.basePath || '';
  const [state1, setState1] = useState('shown');
  const [state2, setState2] = useState('hidden');
  const state1RowRef = useRef(null);
  const state2RowRef = useRef(null);

  const handleAkaClick1 = () => {
    if (state1 === 'shown') {
      setState1('slidingOut')
      setState2('slidingIn')
    }
  }
  
  const handleAkaClick2 = () => {
    if (state2 === 'shown') {
      setState1('slidingIn')
      setState2('slidingOut')
    }
  }

  useEffect(() => {
    const row1 = state1RowRef.current;
    const row2 = state2RowRef.current;
    
    const handleTransitionEnd = () => {
      if (state1 === 'slidingOut') {
        setState1('hidden');
      } else if (state1 === 'slidingIn') {
        setState1('shown');
      }

      if (state2 === 'slidingOut') {
        setState2('hidden');
      } else if (state2 === 'slidingIn') {
        setState2('shown');
      }
    };

    if (row1) {
      row1.addEventListener('transitionend', handleTransitionEnd);
    }

    if (row2) {
      row2.addEventListener('transitionend', handleTransitionEnd);
    }
    
    return () => {
      row1.removeEventListener('transitionend', handleTransitionEnd);
      row2.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [state1, state2]);

  return (
    <div>
      <div className={styles.mainhome} id="home">
        <div className={styles.rowBackground}>
          <div className={`
            ${styles.row}
            ${state1 === 'slidingOut' ? styles.slidingOut : ''}
            ${state1 === 'slidingIn' ? styles.slidingIn : ''}
            ${state1 === 'hidden' ? styles.hidden : ''}
          `}
          ref = {state1RowRef}
          >
            <div className={styles.profile}>
              <Image
                className={styles.picture}
                src={`${basePath}/pfp.png`}
                alt="Next.js logo"
                width={250}
                height={250}
                priority
              />
              <div className={styles.greeting}>
                <h3>Hi! I'm</h3>
                <h1>Lee Jae Hoon</h1>
                <h2>A junior game developer</h2>
                <p
                  className={styles.nextlink}
                  onClick={handleAkaClick1}
                >
                  Pseudonyms ➡️
                </p>
              </div>
            </div>
          </div>
          <div className={`
            ${styles.row}
            ${state2 === 'slidingOut' ? styles.slidingOut : ''}
            ${state2 === 'slidingIn' ? styles.slidingIn : ''}
            ${state2 === 'hidden' ? styles.hidden : ''}
          `}
          ref = {state2RowRef}
          >
            <div className={styles.profile}>
              <Image
                className={styles.picture}
                src={`${basePath}/yesman.png`}
                alt="Next.js logo"
                width={250}
                height={250}
              />
              <div className={styles.greeting}>
                <h3>Hi! I'm</h3>
                <h1>Yesman</h1>
                <h2>A lead developer of Epic Fight team</h2>
                <p
                  className={styles.nextlink}
                  onClick={handleAkaClick2}
                >
                  myself ➡️
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.social_links}>
          <div>
            <a
              href="https://github.com/Yesssssman"
              target="_blank"
              rel="github"
            >
              <Image
                aria-hidden
                src={`${basePath}/github.png`}
                alt="Github icon"
                width={64}
                height={64}
              />
            </a>
            <a
              href="https://www.youtube.com/@yesman4100"
              target="_blank"
              rel="youtube"
            >
              <Image
                aria-hidden
                src={`${basePath}/youtube.png`}
                alt="Youtube icon"
                width={64}
                height={64}
              />
            </a>
            <a
              href="https://discord.com/invite/NbAJwj8RHg"
              target="_blank"
              rel="discord"
            >
              <Image
                aria-hidden
                src={`${basePath}/discord.png`}
                alt="Discord icon"
                width={64}
                height={64}
              />
            </a>
            <a
              href="https://www.patreon.com/c/yessman"
              target="_blank"
              rel="patreon"
            >
              <Image
                aria-hidden
                src={`${basePath}/patreon.png`}
                alt="Patreon icon"
                width={64}
                height={64}
              />
            </a>
          </div>
          <p style={{ opacity: 0.7 }}>
            @ 2025. Lee Jae Hoon. Powered by Github Pages
          </p>
        </div>
      </div>
      <div className={styles.about} id="about">
        <h1 style={{fontSize: '45px'}}>💫 About</h1>
        <div className={styles.container}>
          <div className={styles.block}>
            <h1 className={styles.introduce}>Who am I?</h1>
            <h2 className={styles.introduce}>I'm a junior game developer from Incheon, South Korea.</h2>
            <p className={styles.introduce}>I am interested in 3D Graphics, Mathematics for Game Development, and Physics Simulation. I majored in computer science in university. While I was in there, I learned mathematics for three-dimensional geometries and vector, and general graphic pipelines using OpenGL. My lifelong goal is to create a 3D action adventure game designed and programmed by me.</p>
          </div>
          <Image
            aria-hidden
            src={`${basePath}/pfp.png`}
            alt="Me"
            width={256}
            height={256}
          />
          <div className={styles.block}>
            <h1 className={styles.introduce}>Who is Yesman?</h1>
            <p className={styles.introduce}>Yesman is my nickname used in various social media platforms to communicate with people in online. I've run a project for Minecraft addon called Epic Fight since August 2020, which has been a greatly valuable experience in polishing my skills.</p>
          </div>
          <Image
            aria-hidden
            src={`${basePath}/yesman.png`}
            alt="Yesman"
            width={256}
            height={256}
          />
        </div>
      </div>
      <div className={styles.projects} id="projects">
        <h1 style={{fontSize: '45px'}}>🗁 Projects</h1>
        <div className={styles.container}>
          <Link className={styles.block} href={`/en/project/epicfight`}>
            <Image
              aria-hidden
              src={`${basePath}/epicfight.png`}
              alt="Epic Fight Project Logo"
              width={128}
              height={128}
            />
            <div style={{lineHeight: '60px'}}>
              <h1>Epic Fight</h1>
              <h2>The Minecraft Modding Project</h2>
            </div>
            <div className={styles.techStack}>
              <Image
                aria-hidden
                src={`${basePath}/java.png`}
                alt="Java"
                width={64}
                height={64}
              />
              <Image
                aria-hidden
                src={`${basePath}/eclipse.png`}
                alt="Java"
                width={64}
                height={64}
              />
              <Image
                aria-hidden
                src={`${basePath}/b3d.png`}
                alt="Java"
                width={64}
                height={64}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.activities} id="activities">
        <h1 style={{fontSize: '45px'}}>🔗 Activities</h1>
        <div className={styles.grid}>
          <div className={styles.container}>
            <div className={styles.block}>
              <h2>📹 My recent videos</h2>
              <div className={styles.list}>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/KtY_zayLzYw?si=ettCNshHyS-LSd1M"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
                </iframe>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/T-uMmLCYbn4?si=FFc3kplyxZ3_yB-7"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
                </iframe>
              </div>
            </div>
            <div className={styles.block}>
              <h2>🖹 My recent postings</h2>
              <div className={styles.list}>
                <IframelyEmbed embedHtml='
                  <div class="iframely-embed">
                    <div class="iframely-responsive" style="padding-bottom: 56.3889%; padding-top: 120px;">
                      <a href="https://www.patreon.com/posts/5-new-passive-133938821" data-iframely-url="//iframely.net/fsNMVIQX?theme=dark">
                      </a>
                    </div>
                  </div>
                  <script async src="//iframely.net/embed.js"></script>
                '/>
                <IframelyEmbed embedHtml='
                  <div class="iframely-embed">
                    <div class="iframely-responsive" style="padding-bottom: 56.3889%; padding-top: 120px;">
                      <a href="https://www.patreon.com/posts/passive-skill-132629840" data-iframely-url="//iframely.net/9EUoPQje?theme=dark">
                      </a>
                    </div>
                  </div>
                  <script async src="//iframely.net/embed.js"></script>
                '/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
