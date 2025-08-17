'use client'

import Image from "next/image";
import styles from "./page.module.css";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Home() {
    const basePath = process.env.BASE_PATH || '';
    const t = useTranslations('Project.epicfight.obb');

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
                            src={`${basePath}/obb.png`}
                            alt="Main image"
                            width={427}
                            height={337}
                        />
                    </div>
                </div>
                <div className={styles.block}>
                    <h2>
                        {t('optimization')}
                    </h2>
                    <div className={styles.block}>
                        <p>
                            {t('optimization_content1')}{` `}
                            <span style={{fontStyle: 'italic'}}>
                                {t('optimization_content2')}
                            </span>{` `}
                            {t('optimization_content3')}
                        </p>
                    </div>
                    <div className={styles.codecompare}> 
                        <div className={styles.codeblock_left}>
                            <pre>
                                Simple collision check<br/><br/>
                                objects<br/>
                                <br/>
                                for all objects o<br/>
                                {`    if o not collide with OBB`}<br/>
                                {`        remove o from objects`}<br/>
                            </pre>
                        </div>
                        <div className={styles.codeblock}>
                            <pre>
                                Advanced collision check<br/><br/>
                                objects<br/>
                                <br/>
                                for all objects o<br/>
                                {`    if o not collide with AABB`}<br/>
                                {`        remove o from objects`}<br/>
                                <br/>
                                for all objects o<br/>
                                {`    if o not collide with OBB`}<br/>
                                {`        remove o from objects`}<br/>
                            </pre>
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <h2>
                        {t('implementation')}
                    </h2>
                    <div className={styles.block}>
                        <p>
                            {t('implementation_content1')}{` `}
                            <span style={{fontStyle: 'italic'}}>{t('implementation_content2')}</span>{` `}
                            {t('implementation_content3')}
                        </p>
                        <div className={styles.imgblock}>
                            <Image
                                aria-hidden
                                src={`${basePath}/obb_principle.png`}
                                alt="Main image"
                                width={650}
                                height={337}
                            />
                        </div>
                        <div className={styles.block}>
                            <p>
                                {t('implementation_content4')}
                            </p>
                        </div>
                        <div className={styles.github_container}>
                            <Link href="https://github.com/Epic-Fight/epicfight/blob/1.20.1/src/main/java/yesman/epicfight/api/collider/OBBCollider.java#L159">
                                <div className={styles.internal}>
                                    <Image
                                        aria-hidden
                                        src={`${basePath}/github.png`}
                                        alt="Github"
                                        width={32}
                                        height={32}
                                    />
                                    <h1>
                                        OBBCollider.java
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
                    <p>
                        {t('result_content')}
                    </p>
                    <div className={styles.imgblock}>
                        <Image
                            aria-hidden
                            src={`${basePath}/collision_test.gif`}
                            alt="Github"
                            width={481}
                            height={348}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.references}>
                <h2>
                    {t('references')}
                </h2>
                <p>
                    양영욱. {`(2014)`}. 수학으로 시작하는 3D 게임 개발. {' '}
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