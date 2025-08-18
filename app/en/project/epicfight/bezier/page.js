'use client'

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    const basePath = process.env.BASE_PATH || '';
    const t = useTranslations('Project.epicfight.bezier');

    return (
        <div>
            <div className={styles.main}>
                <h1>
                    Trail effect with Bezier curve
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
                            The trail effect makes games much more colorful. It is commonly used with objects with fast movement, like arrows, bullets, and swords in a human's hand. It reinforces the afterimage effect, a phenomenon that the human brain recognizes a prior image after it has been removed, allowing players to trace the motion of an moving object.
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
                        Bezier Curve
                    </h2>
                    <div className={styles.block}>
                        <p>
                            The key principle of the trail effect is the{' '}
                            <span style={{fontWeight: 'bold'}}>Bezier curve</span>
                            , which is invented by{' '}
                            <span style={{fontStyle: 'italic'}}>Pierre Bézier(1910 ~ 1999)</span>
                            . It uses the curve created by the square function.
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
                            As seen on the picture above, the points decide the shape of the curve. However, the type of Bezier curve we need is something special. Since we want to express the afterimage of a moving object, the curve needs to pass through control points created by the object at a specific time. Thankfully, I found an article that explains the curve what I exactly wanted: The{' '}
                            <span style={{fontWeight: 'bold'}}>Spline Bezier curve</span>
                            . I won't handle the mathematical principle in this post, but I'll leave the reference at the end of the post.
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
                        Implementation
                    </h2>
                    <div className={styles.block}>
                        <p>
                            First, to create the control points of the trail effect, I defined the edge and root points of the blade part of each weapon as resources.
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
                                The next step is creating control points based on the player's current animation. I used the Joint transform, introduced on{' '}
                                <Link
                                    href={`${basePath}/#projects`}
                                    style={{textDecoration: 'underline', fontStyle: 'italic'}}
                                >
                                    Skinned mesh and Armature
                                </Link>
                                . The animation transform data is saved as 4x4 matrix, so multiplying the matrix by the weapon's root and edge location vector will return the location of each point in a specific pose. There are three control points created in a tick. one for the previous location, one for the current location, and one for the middle pose between the previous and current pose.
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
                                Lastly, it creates the interpolated points created by the given control points.
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
                        Result
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
                    References
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