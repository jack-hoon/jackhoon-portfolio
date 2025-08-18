'use client'

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    const basePath = process.env.BASE_PATH || '';
    const t = useTranslations('Project.epicfight.procedural');

    return (
        <div>
            <div className={styles.main}>
                <h1>
                    Procedural Animation
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
                            Animations usually exist as a resource, and are static. But game developers had felt the necessity of interactive animations that reflect the other objects in the game. Procedural animation is one of these technique. It decides the object's pose dynamically counting the environment nearby the object.
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
                        The problem of static animations
                    </h2>
                    <div className={styles.block}>
                        <p>
                            If your entity is big enough, you'll encounter the issue where the sustaining part of your model looks like it's floating in the air. This is because the animations are made in external program, where you can't consider the environment in game.
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
                        Inversed Kinematics
                    </h2>
                    <div className={styles.block}>
                        <p>
                            The solution seems obvious: Make the animations detect terrain. So instead of resulting in the default pose, it calculates the ground height of the foot's location. Inverse kinematics is the best solution in this case. Technically, the way we decide the pose of entities is Forward kinematics, multiplying pose transform from the root to each terminal joints. As the name implies, Inverse kinematics determines the pose from the terminal(or a bone that is not a root). We can give the ground location we calculated before, then set the location of the foot to there.
                        </p>
                        <p>
                            Then how do we determine the corrected pose? The solution is{' '}
                            <span style={{fontWeight: 'bold'}}>
                                FABRIK
                            </span>
                            <span style={{fontStyle: 'italic'}}>
                                (Forward and Backward Reaching Inverse Kinematics)
                            </span>
                            , one of the methodologies of Inverse kinematics.
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
                        The picture shows how FABRIK works briefly. The green circle on the illustration is equal to the ground location we supposed above. And the points numbered as 1, 2, 3, and 4 are the endpoints of joints.
                    </p>
                    <p>
                        The algorithm starts by putting the endpoint of the terminal joint (point 1) at the destination point. It creates the difference in the length of the joint. To keep the original length, it pulls the starting point (point 2) over the endpoint (point 1). Repeating this process until the root joint will make a pose that that terminal bone's endpoint is located in our desired location, and all joints are keeping its original length.
                    </p>
                    <p>
                        But if you take a look at the result carefully, the root joint (from point 3 to 4) is slightly off a bit from the original location (the blue circle). We can solve this issue by repeating the algorithm starting from the root joint. The interesting point is that the error of each endpoint (point 1 and 4) after finishing the iteration will decrease as we repeat the process more and more.
                    </p>
                    <p>
                        Now we can realize the feature of this algorithm—The compromise between accuracy and performance is determined by the number of the loops that correcting joints{' '}
                        <span style={{fontStyle: 'italic'}}>
                            forward and backward
                        </span>
                        . (The name of this algorithm!)
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
                        Implementation
                    </h2>
                    <div className={styles.block}>
                        <div className={styles.block}>
                            <p>
                                I designed a system that mixes the original animation and inverse kinematics properly. First, I defined a variable for each keyframe that judges if it touches a ground or not. Then checks the ground height only for keyframes checked as touches ground.
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
                                This will create the dynamic animation for destination points. Then, I ran FABRIK algorithm for each leg joints.
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
                        Result
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
                    References
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