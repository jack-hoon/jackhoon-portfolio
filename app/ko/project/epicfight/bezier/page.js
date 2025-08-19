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
                    Bezier Curve를 이용해 궤적 그리기
                </h1>
                <h3>
                    2025.08
                </h3>
                <div className={styles.block}>
                    <h2>
                        개요
                    </h2>
                    <div className= {`${styles.block} ${styles.text_and_image}`}>
                        <p>
                            궤적 효과는 게임을 더욱 다채롭게 만듭니다. 일반적으로 화살, 총알, 휘두르는 칼 등 게임 내에서 빠르게 움직이는 물체들과 함께 쓰이며 잔상 효과를 강화합니다. 여기서 잔상 효과란, 인간의 뇌에 피사체가 남아있어서 마치 그 곳에 있는 착각이 드는 일종의 착시 현상입니다. 잔상 효과를 컴퓨터 그래픽에서 적절히 사용하면 사용자는 빠르게 움직이는 물체의 움직임을 정확히 인식할수 있게 됩니다.
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
                            <span style={{fontWeight: 'bold'}}>베지어 커브</span>
                            는 프랑스의 수학자{' '}
                            <span style={{fontStyle: 'italic'}}>피에르 베지에 (Pierre Bézier, 1910 ~ 1999)</span>
                            에 의해 고안된 곡선을 그리는 수학적 기법이며, 다차 함수의 특성을 이용합니다.
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
                            위 그림은 베지어 커브가 동작하는 방식을 설명합니다. 베지어 커브는 제어점을 사용하여 그 사이를 보간하는 함수를 구합니다. 필자가 필요로 했던 베지어 커브는 모든 제어점을 지나가면서 미분값이 일정한 조건을 만족해야 했는데, 이는 플레이어의 애니메이션이 생성하는 각각의 제어점을 통과해야 잔상 효과의 의의를 살릴 수 있었기 때문입니다. 몇번의 검색 결과 운좋게도 요구조건을 충족하는 곡선을 생성하는{' '}
                            <span style={{fontWeight: 'bold'}}>스플라인 베지어 커브</span>
                            라는 기법을 찾아냈습니다. 자세한 수학적 원리는 이 글에서 다루지 않으며, 참조란에 출저를 적어 놓겠습니다.
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
                        구현
                    </h2>
                    <div className={styles.block}>
                        <p>
                            먼저 제어점을 생성하기 위해 각각의 무기에 대한 시작점과 종료점을 정의했습니다. 아래 코드 블럭은 리소스 파일의 일부입니다.
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
                                다음 목표는 현재 플레이어의 애니메이션을 기반으로 제어점을 생성하는 것입니다. 이때{' '}
                                <Link
                                    href={`${basePath}/#projects`}
                                    style={{textDecoration: 'underline', fontStyle: 'italic'}}
                                >
                                    Skinned mesh 와 애니메이션
                                </Link>
                                에서 다뤘던 Joint가 사용됩니다. 애니메이션은 4x4 변환 행렬으로 저장되므로, 무기의 시작지점과 끝 지점 벡터에 곱하면 특정 포즈에서 제어점의 위치를 구하였습니다. 한 번의 프레임 타임에 총 3개의 제어점을 생성하였는데 이들은 이전 프레임 타임에 저장된 포즈의 제어점과 현재 포즈에서 계산된 제어점, 그리고 이전 포즈와 현재 포즈를 1:1 보간한 포즈의 제어점으로 구성되어 있습니다.
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
                                마지막으로, 주어진 컨트롤 포인트를 바탕으로 베지어 커브 함수에 의해 보간된 점들을 생성합니다.
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
                        결과
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
                    참조
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