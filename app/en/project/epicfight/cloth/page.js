'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
    const basePath = process.env.BASE_PATH || '';

    return (
        <div>
            <div className={styles.main}>
                <h1>
                    Cloth Simulation
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
                            Cloth is one of the hardest materials to express in computer graphics. In the
                            real world, the shape is highly susceptible to deformation, unlike rigid objects.
                            The classic way to render objects in a computer is very against this propety beacuse
                            it usually bakes the models when game is loaded and the data is never changed
                            in runtime. In a given situation, we can consider the cloth simulation applied
                            to the objects in the game.
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
                        What is simulation?
                    </h2>
                    <div className={styles.block}>
                        <p>
                            The <span style={{fontWeight: 'bold'}}>Simulation</span> in computer
                            science is defined as this: <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>
                            Running a hypothesis based on mathematical model.</span> Simulation starts with
                            a initial state. And the state changes as the time elapses. (In mathematics, it called
                            as correcting delta value) For example, imagine a falling ball. We can design a mathematical
                            model with gravitational acceleration and mass of the object, then multiplying the time delta
                            will result in the movement toward the ground.
                        </p>
                        <p>
                            We can say the location of the object is being simulated. We give the formula and
                            time rate, then the computer will calculate everything else. 
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
                        Describing the cloth movement: Spring-Mass system
                    </h2>
                </div>
                <div className={styles.block}>
                    <p>
                        We can consider each cloth string as a spring that pulls the others.
                        The most famous approach is Spring-Mass system, a mathematical model
                        that describes the force of a spring with a mass attached to it.
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
                        PBD: Prevent the simulation explode
                    </h2>
                </div>
                <div className={styles.block}>
                    <p>
                        There is a problem with simulating a cloth using a spring-mass system. Since the
                        force between two springs propagates to other connections, there is a possibility
                        that the force grows exponentially. This will make the simulated values abnormal,
                        and unrecoverable by itself.
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
                        A new simulation method called <span style={{fontWeight: 'bold'}}>PBD</span>
                        <span style={{fontStyle: 'italic'}}>(Position Based Dynamics)</span> has bee
                        introduced to solve this problem. Instead of calculating forces, it calculates
                        the distance between two springs and decides the next position by the distance.
                    </p>
                    <p>
                        We call the series of this process as "adding a constraint" to the model. There
                        could be various constraints, Stretching constraints to keep the the original
                        length of two particles, Shearing constraints to keep the shape of the polygon,
                        and Bending constraints to keep the angle between two adjacent triangles.
                    </p>
                </div>
                <div className={styles.block}>
                    <h2>
                        Implementation
                    </h2>
                    <div className={styles.block}>
                        <div className={styles.block}>
                            <p>
                                Embedding Cloth simulation into the game was quite challenging. First, I
                                wanted the cloth to follow the player, so I set an influence variable that
                                determines how much the particle is affected by the simulation. If the influence
                                variable is set to 0, it means the particle is the root and always follows the
                                player's location and is not affected by the constraints.
                            </p>
                            <p>
                                Another thing I noticed was that the length of the whole model was extended
                                too much in the low frame. Since I gave the frame time as a delta time, the
                                accuracy of the simulation was decreased. So I modified the stretching
                                constraint a bit. Instead of pulling two particles at the same time, the
                                modified constraint will move only one particle. I named it Shape constraint,
                                a constraint that keeps the shape of a cloth.
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
                        Result
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
                    References
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