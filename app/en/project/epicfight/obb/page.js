'use client'

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    const basePath = process.env.BASE_PATH || '';
    const t = useTranslations('Project.epicfight.obb');

    return (
        <div>
            <div className={styles.main}>
                <h1>
                    Collision detection with OBB(Oridented Bounding Box)
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
                            There are various mathematical ways to check whether two objects have collided. OBB is a modest way to detect collision in terms of both accuracy and performance. It's based on a cuboid (or a rectangle if it's 2-dimensional space) that can rotate on any axis.
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
                        Optimization
                    </h2>
                    <div className={styles.block}>
                        <p>
                            There was one more consideration before I implemented OBB. Minecraft uses AABB(Axis-Aligned Bounding Box) to detect collision. AABB is a much cheaper method to detect collision compared to OBB. So if I check all objects with OBB, that would be a waste of computing power. The alternative way I came up with is to detect all objects that{` `}
                            <span style={{fontStyle: 'italic'}}>
                                have a chance to collide
                            </span>{` `}
                            with the OBB first, then check the filtered objects by the OBB.
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
                        Implementation
                    </h2>
                    <div className={styles.block}>
                        <p>
                            OBB detects collision by three vectors. A vector from the center of the first OBB to the second OBB, and each vector from the center to a vertex of the OBBs. All these vectors are projected to a vector called{` `}
                            <span style={{fontStyle: 'italic'}}>Separated Axis.</span>{` `}
                            Below picture describes how OBB works.
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
                                The goal of the OBB algorithm is to find a separating axis where the distance sum of the two projected vectors(PA and PB) is less than the projected vector from the center of OBB A to OBB B. If you find the separating axis that meets the condition, the OBBs are not colliding. The separating axis is selected among the normal vectors of the OBB's each plane.
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
                        Result
                    </h2>
                </div>
                <div className={styles.block}>
                    <p>
                        The OBB collider turns red when it hits the entity
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
                    References
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