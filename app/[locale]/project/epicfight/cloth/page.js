'use client'

import Image from "next/image";
import styles from "./page.module.css";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Home() {
    const basePath = process.env.BASE_PATH || '';
    const t = useTranslations('Project.epicfight.cloth');

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
                            src={`${basePath}/cloth.png`}
                            alt="Cloth"
                            width={427}
                            height={337}
                        />
                    </div>
                </div>
                <div className={styles.block}>
                    <h2>
                        {t('terminology')}
                    </h2>
                    <div className={styles.block}>
                        <p>
                            {t('terminology_content0')}{' '}
                            <span style={{fontWeight: 'bold'}}>
                                {t('terminology_content1')}
                            </span>
                            {t('terminology_content2')}
                            {' '}
                            <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>
                                {t('terminology_content3')}
                            </span>
                            {' '}
                            {t('terminology_content4')}
                        </p>
                        <p>
                            {t('terminology_content5')}
                        </p>
                    </div>
                    <div className={styles.imgblock}>
                        <Image
                            aria-hidden
                            src={`${basePath}/simulation_example.png`}
                            alt="Simulation image"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
                <div className={styles.block}>
                    <h2>
                        {t('description')}
                    </h2>
                </div>
                <div className={styles.block}>
                    <p>
                        {t('description_content')}
                    </p>
                </div>
                <div className={styles.imgblock}>
                    <Image
                        aria-hidden
                        src={`${basePath}/spring-mass.png`}
                        alt="FABRIK"
                        width={650}
                        height={337}
                    />
                </div>
                <div className={styles.block}>
                    <h2>
                        {t('pbd')}
                    </h2>
                </div>
                <div className={styles.block}>
                    <p>
                        {t('pbd_content1')}
                    </p>
                </div>
                <div className={styles.imgblock}>
                    <Image
                        aria-hidden
                        src={`${basePath}/sim_explode.png`}
                        alt="FABRIK"
                        width={650}
                        height={337}
                    />
                </div>
                <p
                    style={{
                        textAlign: 'center',
                        color: '#A1A1A1',
                        fontSize: '16px',
                        fontFamily: 'math'
                    }}
                >
                    Simulation explode
                </p>
                <div className={styles.block}>
                    <p>
                        {t('pbd_content2')}{' '}
                        <span style={{fontWeight: 'bold'}}>
                            {t('pbd_content3')}
                        </span>{' '}
                        <span style={{fontStyle: 'italic'}}>
                            {t('pbd_content4')}
                        </span>{' '}
                        {t('pbd_content5')}
                        <br/><br/>
                    </p>
                    <p>
                        {t('pbd_content6')}
                    </p>
                </div>
                <div className={styles.imgblock}>
                    <Image
                        aria-hidden
                        src={`${basePath}/constraints.png`}
                        alt="Constraints"
                        width={805}
                        height={322}
                    />
                </div>
                <p
                    style={{
                        fontFamily: 'math',
                        fontSize: '16px',
                        textAlign: 'center',
                        color: '#a3a3a3ff'
                    }}
                >
                    Constraints in PBD
                </p>
                <div className={styles.block}>
                    <h2>
                        {t('implementation')}
                    </h2>
                    <div className={styles.block}>
                        <div className={styles.block}>
                            <p>
                                {t('implementation_content1')}
                            </p>
                            <p>
                                {t('implementation_content2')}
                            </p>
                        </div>
                        <div className={styles.imgblock}>
                            <Image
                                aria-hidden
                                src={`${basePath}/constraint_principle.png`}
                                alt="Constraints"
                                width={650}
                                height={337}
                            />
                        </div>
                        <p
                            style={{
                                fontFamily: 'math',
                                fontSize: '16px',
                                textAlign: 'center',
                                color: '#a3a3a3ff'
                            }}
                        >
                            Stretching constraint vs Shaping constraint
                        </p>
                        <div className={styles.double_imgs}>
                            <Image
                                aria-hidden
                                src={`${basePath}/extended.png`}
                                alt="Constraints"
                                width={269}
                                height={288}
                            />
                            <Image
                                aria-hidden
                                src={`${basePath}/keeps.png`}
                                alt="Constraints"
                                width={269}
                                height={288}
                            />
                        </div>
                        <p
                            style={{
                                fontFamily: 'math',
                                fontSize: '16px',
                                textAlign: 'center',
                                color: '#a3a3a3ff'
                            }}
                        >
                            Without Shaping constraints (left), and with Shaping constraints (right)
                        </p>
                        <div className={styles.github_container}>
                            <Link href="https://github.com/Epic-Fight/epicfight/blob/1.20.1/src/main/java/yesman/epicfight/api/client/physics/cloth/ClothSimulator.java">
                                <div className={styles.internal}>
                                    <Image
                                        aria-hidden
                                        src={`${basePath}/github.png`}
                                        alt="Github"
                                        width={32}
                                        height={32}
                                    />
                                    <h1>
                                        ClothSimulator.java
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
                            src={`${basePath}/cloth.gif`}
                            alt="Cloth"
                            width={280}
                            height={285}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.references}>
                <h2>
                    {t('references')}
                </h2>
                <p>
                    Matthias Müller. {`(2022)`}.{' '}
                    <br/>
                    <Link href="https://www.youtube.com/watch?v=z5oWopN39OU">
                        #14 The secret of cloth simulation
                    </Link>
                    <br/>
                    <Link href="https://www.youtube.com/watch?v=XY3dLpgOk4Q">
                        #15 Self-collisions, solving the hardest problem in animation
                    </Link>
                    .
                </p>
                <br/>
                <div className={styles.block}>
                    <p style={{ opacity: 0.7, textAlign: "center", fontSize: "18px", fontStyle: "normal" }}>
                        @ 2025. Lee Jae Hoon. Powered by Github Pages
                    </p>
                </div>
            </div>
        </div>
    );
}