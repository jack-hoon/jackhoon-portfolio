'use client'

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    const basePath = process.env.BASE_PATH || '';

    return (
        <div>
            <div className={styles.main}>
                <h1>
                    Skinned Mesh and Skeletal Animations
                </h1>
                <h3>
                    August 2025
                </h3>
                <div className={styles.block}>
                    <h2>
                        Synopsis
                    </h2>
                    <div className= {`${styles.block} ${styles.text_and_image}`}>
                        <p>
                            The skinned mesh and skeletal animation are common techniques for deforming a model in real-time. The model is split into two parts: Mesh and Armature. Mesh defines the shape of the model, and Armature defines how the model can move. Armature consists of multiple Joints in a tree hierarchy. Each vertex has information about which joint and how much the vertex will be affected by the transform of Joints in Armature.
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
                        Challenge
                    </h2>
                    <div className={styles.block}>
                        <p>
                            The main issue was that Minecraft didn't use the skinned mesh system at all. The game's code-controlled movements made all movements robotic and too simple. This is what they seek to keep the mood of the voxel graphic game. Nevertheless, I decided to make skinned mesh into the game because I thought it is still a great deal if we could have more natural movement for players and mobs, as long as it doesn't hurt the overall feeling of the game, and separaing animation code to external resource files would reinforce the productivity noticeably.
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
                        Solution
                    </h2>
                    <div className={styles.block}>
                        <p>
                            I was interested in 3D modeling and animating. Thus, I had some knowledge about how to use Blender, a 3D graphics software available for free. I imagined a system that I could save all animation data as resource files and read all animation resources at runtime instead of hard-coding all animations in the development environment. To this end, I organized what I needed: An exporter module for Blender, an animation reader.
                        </p>
                    </div>
                </div>
                <div className={styles.block}>
                    <h2>
                        Implementation
                    </h2>
                    <div className={styles.block}>
                        <p>
                            Blender is written by Python, so I created this exporter module.
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
                            The code exports mesh, armature, and animation in JSON format. As a result, I was able to save my animations into the JSON assets. It was more convenient to maintain them since I could modify the animations depending on my aesthetic sense, not numbers and code. Below is .json file created by the exporter.
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
                            Then I made the asset reader inside my mod.
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
                            It reads asset files from a pre-defined location. For skinned meshes, it reads each vertex's position, normal, texture, and skinning data. For armatures, it reads joints expressed as a tree structure in JSON. Lastly, for animations, it reads keyframes and joint transforms expressed as a Matrix.
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
                        Result
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
                    References
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