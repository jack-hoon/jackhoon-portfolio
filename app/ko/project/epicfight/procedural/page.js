'use client'

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

import publicRuntimeConfig from "../../../../../next.config.mjs";

export default function Home() {
    const basePath = publicRuntimeConfig.basePath || '';
    
    return (
        <div>
            <div className={styles.main}>
                <h1>
                    절차적 애니메이션
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
                            애니메이션을 주로 리소스 형태로 존재하며 정적입니다. 하지만 개발자들은 인게임 상황을 반영할 수 있는 대화형 애니메이션에 대한 필요성을 느꼈습니다. 절차적 애니메이션은 이런 요구를 반영한 애니메이션 기법 중 하나입니다. 이런 종류의 애니메이션은 인게임 오브젝트들에 의해 포즈가 변형될 수 있습니다.
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
                        정적인 애니메이션의 문제점
                    </h2>
                    <div className={styles.block}>
                        <p>
                            엔터티가 충분히 크다면, 모델의 지면과 맞닿는 부분이 공중에 뜬 것 같은 문제점에 부딫히게 될 것입니다. 이것은 애니메이션이 정적이고 게임 안의 상황을 고려할 수 없기 때문입니다.
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
                        역기구학
                    </h2>
                    <div className={styles.block}>
                        <p>
                            해결책은 명확합니다. 애니메이션이 지형을 감지할 수 있도록 하는 것입니다. 리소스에 저장된 기본 포즈를 순차적으로 계산하는 대신에 모델의 발과 맞닿은 지면 부분의 높이를 계산하고, 그 결과를 역순으로 계산하면 문제가 해결될 것입니다. 역기구학은 이런 상황을 해결할 수 있도록 설계되었습니다. 기존의 최상위 Joint에서 시작하여 말단까지 애니메이션 포즈를 계산해나가는 방법은 정확히 말하면 "순기구학" 에 해당합니다. 이름에서 알 수 있듯이 역기구학은 이러한 과정이 반대로 진행됩니다. 말단의(또는 최상위가 아닌) Joint의 위치 정보를 미리 지정하면, 최상위 노드까지 올라가면서 포즈를 계산하는 것입니다.
                        </p>
                        <p>
                            그렇다면 어떻게 조정된 포즈를 계산할 수 있을까요? 필자가 선택한 방법은{' '}
                            <span style={{fontWeight: 'bold'}}>
                                FABRIK
                            </span>
                            <span style={{fontStyle: 'italic'}}>
                                (Forward and Backward Reaching Inverse Kinematics)
                            </span>
                            , 역기구학의 방법론 중 하나입니다.
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
                        위 그림은 FABRIK이 동작하는 과정을 간단하게 보여줍니다. 그림에서 초록색 원은 우리가 재설정 하고자 하는 지형의 높이를 반영한 위치이고, 1, 2, 3, 4번 원들은 Joint의 끝 지점입니다.
                    </p>
                    <p>
                        이 알고리즘은 말단 Joint의 끝 지점 (점1)을 목표 지점 (초록색 원)에 올려놓는 것으로 시작합니다. 이 과정에서 Joint의 길이는 변하게 되는데, 이것을 보정하기 위해 Joint의 시작 지점 (점2)을 끝 지점 (점1)로 끌어옵니다. 이 과정을 점4번까지 반복한다면 말단 Joint가 우리가 원하는 위치에 놓이게 되고, 모든 Joint들이 원래의 길이를 유지한 상태가 됩니다.
                    </p>
                    <p>
                        하지만 결과를 유심히 본다면, 최상위 Joint (점3과 점4)가 시작 지점 (파란색 원)에서 조금 어긋난 것을 볼 수 있습니다. 이를 해결하기 위해서 다시 1{'>'}2{'>'}3{'>'}4 순서로 이루어졌던 진행 과정을 다시 4{'>'}3{'>'}2{'>'}1 순으로 진행하면 됩니다. 흥미로운 점은, 이 과정을 반복한다면 두 끝 지점 (점1과 점4) 에 대한 오차를 점점 줄여나갈 수 있다는 것입니다.
                    </p>
                    <p>
                        이를 통해 알 수 있는 알고리즘의 특성은 정확도와 성능 사이의 타협점이 반복 횟수, 즉{' '}
                        <span style={{fontStyle: 'italic'}}>
                            앞과 뒤
                        </span>
                        로 움직이는 횟수에 결정된다는 것입니다.
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
                        구현
                    </h2>
                    <div className={styles.block}>
                        <div className={styles.block}>
                            <p>
                                역기구학만으로 이루어진 애니메이션 보단, 필자는 원래의 애니메이션과 역기구학이 적절하게 섞인 시스템을 설계했습니다. 우선 애니메이션 키프레임마다 발바닥이 땅을 밟고 있는지에 대한 여부를 알 수 있는 변수를 설정하였습니다. 그리고 \"땅에 닿아있음\"으로 설정된 키프레임만 지형의 높이를 구하여 애니메이션을 변형하도록 하였습니다.
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
                                이것은 발의 최종 목적지에 대한 애니메이션을 생성하도록 합니다. 그 다음, FABRIK 알고리즘을 통해 재계산된 포즈를 적용하도록 하였습니다.
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
                        결과
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
                    참조
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