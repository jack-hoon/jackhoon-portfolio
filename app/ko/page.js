'use client'

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import IframelyEmbed from "../components/IframelyEmbed";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const basePath = process.env.BASE_PATH || '';
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
                <h3>안녕하세요, 저는</h3>
                <h1>이재훈</h1>
                <h2>주니어 게임 개발자 입니다</h2>
                <p
                  className={styles.nextlink}
                  onClick={handleAkaClick1}
                >
                  가명 ➡️
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
                <h3>안녕하세요, 저는</h3>
                <h1>Yesman</h1>
                <h2>Epic Fight팀의 리드 개발자입니다</h2>
                <p
                  className={styles.nextlink}
                  onClick={handleAkaClick2}
                >
                  진명 ➡️
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
        <h1 style={{fontSize: '45px'}}>💫 소개</h1>
        <div className={styles.container}>
          <div className={styles.block}>
            <h1 className={styles.introduce}>본인소개</h1>
            <h2 className={styles.introduce}>저는 대한민국 인천에 거주중인 초급 주니어 개발자 입니다.</h2>
            <p className={styles.introduce}>저는 3D그래픽, 게임 개발과 관련된 수학, 그리고 물리 시뮬레이션에 관심이 많습니다. 저는 대학에서 컴퓨터공학을 전공했으며, 3차원 기하학과 벡터, OpenGL을 사용한 그래픽 파이프라인에 대해 흥미롭게 공부하였습니다. 제 일생의 목표는 제가 스스로 기획한 3D 액션 어드벤쳐 게임을 만드는 것입니다.</p>
          </div>
          <Image
            aria-hidden
            src={`${basePath}/pfp.png`}
            alt="Me"
            width={256}
            height={256}
          />
          <div className={styles.block}>
            <h1 className={styles.introduce}>Yesman</h1>
            <p className={styles.introduce}>Yesman은 다양한 소셜 미디어를 통해 사람들과 소통할때 제가 사용하는 별칭입니다. 저는 2020년 8월부터 Epic Fight라 불리는 Minecraft 애드온 개발 프로젝트를 운영하고 있으며, 저의 게임 개발 스킬을 갈고닦을 수 있는 값진 경험이었습니다.</p>
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
        <h1 style={{fontSize: '45px'}}>🗁 프로젝트</h1>
        <div className={styles.container}>
          <Link className={styles.block} href={`/project/epicfight`}>
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
        <h1 style={{fontSize: '45px'}}>🔗 활동</h1>
        <div className={styles.grid}>
          <div className={styles.container}>
            <div className={styles.block}>
              <h2>📹 최근 영상</h2>
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
              <h2>🖹 최근 포스트</h2>
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
