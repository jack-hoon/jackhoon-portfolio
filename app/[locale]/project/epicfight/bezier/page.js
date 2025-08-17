'use client'

import Image from "next/image";
import styles from "./page.module.css";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Home() {
    const basePath = process.env.BASE_PATH || '';
    const t = useTranslations('Project.epicfight.bezier');

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
                            src={`${basePath}/trail_example.png`}
                            alt="Main image"
                            width={427}
                            height={337}
                        />
                    </div>
                </div>
                <div className={styles.block}>
                    <h2>
                        {t('bezier')}
                    </h2>
                    <div className={styles.block}>
                        <p>
                            {t('bezier_content1')}{' '}
                            <span style={{fontWeight: 'bold'}}>{t('bezier_content2')}</span>
                            {t('bezier_content3')}{' '}
                            <span style={{fontStyle: 'italic'}}>{t('bezier_content4')}</span>
                            {t('bezier_content5')}
                        </p>
                    </div>
                    <div className={styles.imgblock}>
                        <Image
                            aria-hidden
                            src={`${basePath}/bezier_curve.gif`}
                            alt="Main image"
                            width={480}
                            height={221}
                        />
                    </div>
                    <div className={styles.block}>
                        <p>
                            {t('bezier_content6')}{' '}
                            <span style={{fontWeight: 'bold'}}>{t('bezier_content7')}</span>
                            {t('bezier_content8')}
                        </p>
                    </div>
                </div>
                <div className={styles.videoblock}>
                    <video controls preload="metadata" aria-label="Video player">
                        <source src={`${basePath}/bezier_demo.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <br/><p>Spline-Beizer curve demo program</p>
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
                        <p>
                            {t('implementation_content1')}
                        </p>
                        <div className={styles.codeblock}>
                            <pre>
                            {`"trail": {`}<br/>
                            {`    "color": [51, 235, 203],`}<br/>
                            {`    "begin_pos": [0.0, 0.1, -0.1], // root point`}<br/>
                            {`    "end_pos": [0.0, -0.05, -0.95], // edge point`}<br/>
                            {`    "lifetime": 4,`}<br/>
                            {`    "interpolations": 5,`}<br/>
                            {`    "texture_path": "epicfight:textures/particle/swing_trail.png",`}<br/>
                            {`    "particle_type": "epicfight:swing_trail"`}<br/>
                            {`}`}<br/>
                            </pre>
                        </div>
                        <div className={styles.github_container}>
                            <Link href="https://github.com/Epic-Fight/epicfight/blob/1.20.1/src/main/resources/assets/minecraft/item_skins/diamond_sword.json">
                                <div className={styles.internal}>
                                    <Image
                                        aria-hidden
                                        src={`${basePath}/github.png`}
                                        alt="Github"
                                        width={32}
                                        height={32}
                                    />
                                    <h1>
                                        diamond_sword.json
                                    </h1>
                                    <p>
                                        Yesssssman/epicfight
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.imgblock}>
                            <Image
                                aria-hidden
                                src={`${basePath}/begin-end pos.png`}
                                alt="Github"
                                width={560}
                                height={369}
                            />
                        </div>
                        <div className={styles.block}>
                            <p>
                                {t('implementation_content2')}{' '}
                                <Link
                                    href={`${basePath}/#projects`}
                                    style={{textDecoration: 'underline', fontStyle: 'italic'}}
                                >
                                    {t('implementation_content3')}
                                </Link>
                                {t('implementation_content4')}
                            </p>
                        </div>
                        <div className={styles.imgblock}>
                            <Image
                                aria-hidden
                                src={`${basePath}/control_points.png`}
                                alt="Github"
                                width={663}
                                height={403}
                            />
                        </div>
                        <div className={styles.github_container}>
                            <Link href="https://github.com/Epic-Fight/epicfight/blob/1.20.1/src/main/java/yesman/epicfight/client/particle/AnimationTrailParticle.java#L216">
                                <div className={styles.internal}>
                                    <Image
                                        aria-hidden
                                        src={`${basePath}/github.png`}
                                        alt="Github"
                                        width={32}
                                        height={32}
                                    />
                                    <h1>
                                        AnimationTrailParticle.java
                                    </h1>
                                    <p>
                                        Yesssssman/epicfight
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.block}>
                            <p>
                                {t('implementation_content5')}
                            </p>
                        </div>
                        <div className={styles.github_container}>
                            <Link href="https://github.com/Epic-Fight/epicfight/blob/1.20.1/src/main/java/yesman/epicfight/api/physics/bezier/CubicBezierCurve.java">
                                <div className={styles.internal}>
                                    <Image
                                        aria-hidden
                                        src={`${basePath}/github.png`}
                                        alt="Github"
                                        width={32}
                                        height={32}
                                    />
                                    <h1>
                                        CubicBezierCurve.java
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
                    <div className={styles.imgblock}>
                        <Image
                            aria-hidden
                            src={`${basePath}/trail_ingame.gif`}
                            alt="Trail Ingame"
                            width={313}
                            height={280}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.references}>
                <h2>
                    {t('references')}
                </h2>
                <p>
                    Omar Aflak. {`(2020). `}
                    <Link href="https://omaraflak.medium.com/b%C3%A9zier-interpolation-8033e9a262c2">
                        Bézier Interpolation—Create smooth shapes using Bézier curves.
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