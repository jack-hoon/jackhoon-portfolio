'use client'

import Image from "next/image";
import styles from "./page.module.css";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Home() {
    const basePath = process.env.BASE_PATH || '';
    const t = useTranslations('Project.epicfight');

    return (
        <div className={styles.main}>
            <Image
                aria-hidden
                src={`${basePath}/epicfight_title.png`}
                alt="Java"
                width={900}
                height={300}
            />
            <h1>{t('title')}</h1>
            <h2>⚔️ {t('subtitle1')}</h2>
            <div className={styles.sentenceBlock}>
                <p>{t('content1')}</p>
            </div>
            <h2>⚙️ {t('subtitle2')}</h2>
            <div className={styles.sentenceBlock}>
                <p>{t('content2')}</p>
            </div>
            <h2>💡 {t('subtitle3')}</h2>
            <div className={styles.sentenceBlock}>
                <p>{t('content3')}</p>
            </div>
            <h2>👋 {t('subtitle4')}</h2>
            <div className={styles.imgbox}>
                <div className={styles.imgandname}>
                    <Image
                        aria-hidden
                        src={`${basePath}/yesman.png`}
                        alt="Yesman Profile"
                        width={128}
                        height={128}
                    />
                    <h2>Yesman</h2>
                    <p>{t('developer')}</p>
                </div>
                <div className={styles.imgandname}>
                    <Image
                        aria-hidden
                        src={`${basePath}/guilherme.png`}
                        alt="Guilherme Profile"
                        width={128}
                        height={128}
                    />
                    <h2>Guilherme</h2>
                    <p>{t('manager')}</p>
                </div>
            </div>
            <h2>⤵️ {t('subtitle5')}</h2>
            <div className={styles.imgbox}>
                <div className={styles.imgandname}>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/epic-fight-mod">
                        <Image
                            aria-hidden
                            src={`${basePath}/curseforge.png`}
                            alt="Curseforge"
                            width={128}
                            height={128}
                        />
                    </a>
                    <h2>Curseforge</h2>
                    <p>{t('distribute')}</p>
                </div>
                <div className={styles.imgandname}>
                    <a href="https://modrinth.com/mod/epic-fight">
                        <Image
                            aria-hidden
                            src={`${basePath}/modrinth.png`}
                            alt="Modrinth"
                            width={128}
                            height={128}
                        />
                    </a>
                    <h2>Modrinth</h2>
                    <p>{t('distribute')}</p>
                </div>
                <div className={styles.imgandname}>
                    <a href="https://github.com/Epic-Fight/epicfight">
                        <Image
                            aria-hidden
                            src={`${basePath}/github.png`}
                            alt="Github"
                            width={128}
                            height={128}
                        />
                    </a>
                    <h2>Github</h2>
                    <p>{t('source_code')}</p>
                </div>
            </div>
            <h2>✏️ {t('subtitle6')}</h2>
            <div className={styles.devlog}>
                <Link className={styles.container} href="/project/epicfight/animation">
                    <Image
                        aria-hidden
                        src={`${basePath}/skeletal_mesh.png`}
                        alt="Skeletal Mesh"
                        width={305}
                        height={237}
                    />
                    <p>{t('post1')}</p>
                </Link>
                <Link className={styles.container} href="/project/epicfight/obb">
                    <Image
                        aria-hidden
                        src={`${basePath}/obb.png`}
                        alt="OBB"
                        width={305}
                        height={237}
                    />
                    <p>{t('post2')}</p>
                </Link>
                <Link className={styles.container} href="/project/epicfight/bezier">
                    <Image
                        aria-hidden
                        src={`${basePath}/trail_example.png`}
                        alt="Trail Particle"
                        width={305}
                        height={237}
                    />
                    <p>{t('post3')}</p>
                </Link>
                <Link className={styles.container} href="/project/epicfight/procedural">
                    <Image
                        aria-hidden
                        src={`${basePath}/procedural.png`}
                        alt="Procedural Animation"
                        width={305}
                        height={237}
                    />
                    <p>{t('post4')}</p>
                </Link>
                <Link className={styles.container} href="/project/epicfight/cloth">
                    <Image
                        aria-hidden
                        src={`${basePath}/cloth.png`}
                        alt="Cloth Simulation"
                        width={305}
                        height={237}
                    />
                    <p>{t('post5')}</p>
                </Link>
            </div>
            <p style={{ opacity: 0.7, textAlign: "center" }}>
                @ 2025. Lee Jae Hoon. Powered by Github Pages
            </p>
        </div>
    );
}