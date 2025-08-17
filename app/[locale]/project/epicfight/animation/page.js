'use client'

import Image from "next/image";
import styles from "./page.module.css";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Home() {
    const basePath = process.env.BASE_PATH || '';
    const t = useTranslations('Project.epicfight.animation');

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
                            src={`${basePath}/skeletal_mesh.png`}
                            alt="Main image"
                            width={427}
                            height={337}
                        />
                    </div>
                </div>
                <div className={styles.block}>
                    <h2>
                        {t('challenge')}
                    </h2>
                    <div className={styles.block}>
                        <p>
                            {t('challenge_content')}
                        </p>
                    </div>
                    <div className={styles.imgblock}>
                        <Image
                            aria-hidden
                            src={`${basePath}/stiff.gif`}
                            alt="Github"
                            width={331}
                            height={285}
                        />
                    </div>
                </div>
                <div className={styles.block}>
                    <h2>
                        {t('solution')}
                    </h2>
                    <div className={styles.block}>
                        <p>
                            {t('solution_content')}
                        </p>
                    </div>
                </div>
                <div className={styles.block}>
                    <h2>
                        {t('implementation')}
                    </h2>
                    <div className={styles.block}>
                        <p>
                            {t('implementation_content1')}
                        </p>
                        <div className={styles.github_container}>
                            <Link href="https://github.com/Epic-Fight/blender-json-exporter/blob/master/export_mc_json.py">
                                <div className={styles.internal}>
                                    <Image
                                        aria-hidden
                                        src={`${basePath}/github.png`}
                                        alt="Github"
                                        width={32}
                                        height={32}
                                    />
                                    <h1>
                                        export_mc_json.py
                                    </h1>
                                    <p>
                                        Yesssssman/blender-json-exporter
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <p>
                            {t('implementation_content2')}
                        </p>
                        <div className={styles.codeblock}>
                            <pre>
                            {`"vertices": {`}<br/>
                            {`    "positions": {`}<br/>
                            {`        "stride": 3,`}<br/>
                            {`        "count": 260,`}<br/>
                            {`        "array": [0.25, 0.125, 4.5e-05, ...]`}<br/>
                            {`    },`}<br/>
                            {`    "uvs": {`}<br/>
                            {`        "stride": 2,`}<br/>
                            {`        "count": 321,`}<br/>
                            {`        "array": [0.125, 0.3125, 0.1875, ...]`}<br/>
                            {`    },`}<br/>
                            {`    "normals": {`}<br/>
                            {`        "stride": 3,`}<br/>
                            {`        "count": 6,`}<br/>
                            {`        "array": [0.0, 0.0, -1.0, 0.0, 0.0, ...]`}<br/>
                            {`    },`}<br/>
                            {`    .`}<br/>
                            {`    .`}<br/>
                            {`    .`}<br/>
                            {`"armature": {`}<br/>
                            {`    "joints": ["Root", "Thigh_R", ...],`}<br/>
                            {`    "hierarchy": [`}<br/>
                            {`        {`}<br/>
                            {`            "name": "Root",`}<br/>
                            {`            "transform": [1.0, 0.0, 0.0, -5e-06, ...],`}<br/>
                            {`            "children": [`}<br/>
                            {`                {`}<br/>
                            {`                    "name": "Thigh_R",`}<br/>
                            {`                    "transform": [1.0, -0.0, -0.0, 0.124994, ...],`}<br/>
                            {`                    "children": [`}<br/>
                            {`        .        `}<br/>
                            {`        .    `}<br/>
                            {`        .`}<br/>
                            {`    ]`}<br/>
                            {`}`}<br/>
                            </pre>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <p>
                            {t('implementation_content3')}
                        </p>
                        <div className={styles.github_container}>
                            <Link href="https://github.com/Epic-Fight/epicfight/blob/1.20.1/src/main/java/yesman/epicfight/api/asset/JsonAssetLoader.java">
                                <div className={styles.internal}>
                                    <Image
                                        aria-hidden
                                        src={`${basePath}/github.png`}
                                        alt="Github"
                                        width={32}
                                        height={32}
                                    />
                                    <h1>
                                        JsonAssetLoader.java
                                    </h1>
                                    <p>
                                        Yesssssman/epicfight
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <p>
                            {t('implementation_content4')}
                        </p>
                        <div className={styles.github_container}>
                            <Link href="https://github.com/Epic-Fight/epicfight/blob/1.20.1/src/main/java/yesman/epicfight/api/client/model/SkinnedMesh.java">
                                <div className={styles.internal}>
                                    <Image
                                        aria-hidden
                                        src={`${basePath}/github.png`}
                                        alt="Github"
                                        width={32}
                                        height={32}
                                    />
                                    <h1>
                                        SkinnedMesh.java
                                    </h1>
                                    <p>
                                        Yesssssman/epicfight
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.github_container}>
                            <Link href="https://github.com/Epic-Fight/epicfight/blob/1.20.1/src/main/java/yesman/epicfight/api/model/Armature.java">
                                <div className={styles.internal}>
                                    <Image
                                        aria-hidden
                                        src={`${basePath}/github.png`}
                                        alt="Github"
                                        width={32}
                                        height={32}
                                    />
                                    <h1>
                                        Armature.java
                                    </h1>
                                    <p>
                                        Yesssssman/epicfight
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.github_container}>
                            <Link href="https://github.com/Epic-Fight/epicfight/blob/1.20.1/src/main/java/yesman/epicfight/api/animation/TransformSheet.java">
                                <div className={styles.internal}>
                                    <Image
                                        aria-hidden
                                        src={`${basePath}/github.png`}
                                        alt="Github"
                                        width={32}
                                        height={32}
                                    />
                                    <h1>
                                        TransformSheet.java
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
                            src={`${basePath}/soft.gif`}
                            alt="Github"
                            width={331}
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
                    ThinMatrix. {`(2017)`}. OpenGL Skeletal Animation Tutorial. {' '}
                    <Link href="https://omaraflak.medium.com/b%C3%A9zier-interpolation-8033e9a262c2">
                        #1
                    </Link>
                    {' '}
                    <Link href="https://omaraflak.medium.com/b%C3%A9zier-interpolation-8033e9a262c2">
                        #2
                    </Link>
                    {' '}
                    <Link href="https://omaraflak.medium.com/b%C3%A9zier-interpolation-8033e9a262c2">
                        #3
                    </Link>
                    {' '}
                    <Link href="https://omaraflak.medium.com/b%C3%A9zier-interpolation-8033e9a262c2">
                        #4
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