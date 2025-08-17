'use client'

import Image from "next/image";
import styles from "./page.module.css";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Home() {
    const basePath = process.env.BASE_PATH || '';
    const t = useTranslations('Project.epicfight.procedural');

    return (
        <div>
            <div className={styles.main}>
                <h1>
                    {t('title')}
                </h1>
                <h3>
                    {t('date')}
                </h3>
                <div className={styles.block}>
                    <h2>
                        {t('synopsis')}
                    </h2>
                    <div className= {`${styles.block} ${styles.text_and_image}`}>
                        <p>
                            {t('synopsis_content')}
                        </p>
                        <Image
                            className={styles.outline_image}
                            aria-hidden
                            src={`${basePath}/procedural.png`}
                            alt="Main image"
                            width={427}
                            height={337}
                        />
                    </div>
                </div>
                <div className={styles.block}>
                    <h2>
                        {t('problem')}
                    </h2>
                    <div className={styles.block}>
                        <p>
                            {t('problem_content')}
                        </p>
                    </div>
                    <div className={styles.imgblock}>
                        <Image
                            aria-hidden
                            src={`${basePath}/floating legs.png`}
                            alt="Main image"
                            width={480}
                            height={400}
                        />
                    </div>
                </div>
                <div className={styles.block}>
                    <h2>
                        {t('ik')}
                    </h2>
                    <div className={styles.block}>
                        <p>
                            {t('ik_content1')}
                        </p>
                        <p>
                            {t('ik_content2')}{' '}
                            <span style={{fontWeight: 'bold'}}>
                                {t('ik_content3')}
                            </span>
                            <span style={{fontStyle: 'italic'}}>
                                {t('ik_content4')}
                            </span>
                            {t('ik_content5')}
                        </p>
                    </div>
                </div>
                <div className={styles.imgblock}>
                    <Image
                        aria-hidden
                        src={`${basePath}/fabrik.gif`}
                        alt="FABRIK"
                        width={650}
                        height={337}
                    />
                </div>
                <div className={styles.block}>
                    <p>
                        {t('ik_content6')}
                    </p>
                    <p>
                        {t('ik_content7')}
                    </p>
                    <p>
                        {t('ik_content8')}
                    </p>
                    <p>
                        {t('ik_content9')}{' '}
                        <span style={{fontStyle: 'italic'}}>
                            {t('ik_content10')}
                        </span>
                        {t('ik_content11')}
                    </p>
                </div>
                <div className={styles.videoblock}>
                    <video controls preload="metadata" aria-label="Video player">
                        <source src={`${basePath}/fabrik.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <br/><p>FABRIK demo program</p>
                </div>
                <div className={styles.github_container}>
                    <Link href="https://github.com/Yesssssman/physics_simulations/blob/master/FABRIK/Sources/main.cpp">
                        <div className={styles.internal}>
                            <Image
                                aria-hidden
                                src={`${basePath}/github.png`}
                                alt="Github"
                                width={32}
                                height={32}
                            />
                            <h1>
                                main.cpp
                            </h1>
                            <p>
                                Yesssssman/physics_simulations
                            </p>
                        </div>
                    </Link>
                </div>
                <div className={styles.block}>
                    <h2>
                        {t('implementation')}
                    </h2>
                    <div className={styles.block}>
                        <div className={styles.block}>
                            <p>
                                {t('implementation_content1')}
                            </p>
                            <div className={styles.imgblock}>
                                <Image
                                    aria-hidden
                                    src={`${basePath}/ik_design.png`}
                                    alt="FABRIK"
                                    width={650}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className={styles.block}>
                            <p>
                                {t('implementation_content2')}
                            </p>
                        </div>
                        <div className={styles.github_container}>
                            <Link href="https://github.com/Epic-Fight/epicfight/blob/1.20.1/src/main/java/yesman/epicfight/api/physics/ik/FABRIK.java">
                                <div className={styles.internal}>
                                    <Image
                                        aria-hidden
                                        src={`${basePath}/github.png`}
                                        alt="Github"
                                        width={32}
                                        height={32}
                                    />
                                    <h1>
                                        FABRIK.java
                                    </h1>
                                    <p>
                                        Yesssssman/epicfight
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.github_container}>
                            <Link href="https://github.com/Epic-Fight/epicfight/blob/1.20.1/src/main/java/yesman/epicfight/api/physics/ik/InverseKinematicsSimulator.java">
                                <div className={styles.internal}>
                                    <Image
                                        aria-hidden
                                        src={`${basePath}/github.png`}
                                        alt="Github"
                                        width={32}
                                        height={32}
                                    />
                                    <h1>
                                        InverseKinematicsSimulator.java
                                    </h1>
                                    <p>
                                        Yesssssman/epicfight
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <h2>
                        {t('result')}
                    </h2>
                </div>
                <div className={styles.block}>
                    <div className={styles.videoblock}>
                        <video controls preload="metadata" aria-label="Video player" width="900px">
                            <source src={`${basePath}/dragon.mov`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <div className={styles.references}>
                <h2>
                    {t('references')}
                </h2>
                <p>
                    EgoMoose. {`(2016)`}.{' '}
                    <Link href="https://www.youtube.com/watch?v=UNoX65PRehA">
                        FABRIK (Inverse kinematics)
                    </Link>
                    .
                </p>
                <p>
                    Alexander Wells. {`(2021)`}.{' '}
                    <Link href="https://node-security.com/posts/fabrik-algorithm/">
                        FABRIK Algorithm
                    </Link>
                </p>
                <div className={styles.block}>
                    <p style={{ opacity: 0.7, textAlign: "center", fontSize: "18px", fontStyle: "normal" }}>
                        @ 2025. Lee Jae Hoon. Powered by Github Pages
                    </p>
                </div>
            </div>
        </div>
    );
}