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
                    천 시뮬레이션
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
                            옷감은 컴퓨터 그래픽으로 표현하기 가장 어려운 물체 중 하나입니다. 현실 세계에서 옷감은 단단한 물체와 다르게 그 모양이 변형되기 매우 쉽습니다. 물체를 렌더링하는 고전적인 방법은 이 특성과 매우 반대됩니다. 모델은 게임이 로딩될때 리소스에서 읽어와 메모리에 로드되고, 그 데이터는 변경되지 않습니다. 이럴 때 물체에 실시간으로 적용되는 시뮬레이션을 통해 모델을 변형하는 방법을 고려해 볼 수 있습니다.
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
                        시뮬레이션이란?
                    </h2>
                    <div className={styles.block}>
                        <p>
                            컴퓨터 과학에서,{' '}
                            <span style={{fontWeight: 'bold'}}>
                                시뮬레이션
                            </span>
                            은{' '}
                            <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>
                                "수학적 모델이나 가설을 프로그램을 통해 구동하는 것"
                            </span>
                            이라고 정의됩니다.{' '}
                            시뮬레이션은 초기 상태에서 시작하여, 시간이 지날수록 그 상태가 변화합니다. 떨어지는 공을 예로 들자면, 우리는 중력가속도와 물체의 질량을 통해 물체의 위치에 대한 수학적 방정식을 세울 수 있고, 시간의 변화 값에 결과를 곱하면 n초후의 지면으로 향한 공의 움직임을 구할 수 있습니다.
                        </p>
                        <p>
                            해당 물체는 시뮬레이션 되고 있다고 볼 수 있습니다. 핵심은, 사용자가 수학 공식과 시간 변화량을 컴퓨터에 입력하면 시뮬레이션이 구동되는 동안 모든 것은 컴퓨터의 계산에 의해 결정된다는 것입니다.
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
                        천의 움직임에 대한 방정식: 스프링-매스 시스템
                    </h2>
                </div>
                <div className={styles.block}>
                    <p>
                        천을 구성하는 실들을 서로 밀고 당기는 스프링으로 본다면 이에 대한 방정식을 세워볼 수 있습니다. 이에 대해 가장 유명한 접근은 스프링-매스 시스템, 용수철이 늘어남과 줄에듦에 따라 가해지는 힘의 변화에 대해 설명하는 수학적 모델입니다.
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
                        PBD: 시뮬레이션 폭발 막기
                    </h2>
                </div>
                <div className={styles.block}>
                    <p>
                        스프링-매스 시스템을 이용하여 시뮬레이션을 할 때 한가지 문제점이 있습니다. 하나의 옷감은 서로 연결된 수 많은 파티클들로 이루어져 있으며 서로 힘이 전이됩니다. 이러한 구조는 전이되는 힘이 기하급수적으로 상승할 수 있는 가능성이 있으며 이는 시뮬레이션 되고 있는 값이 비정상적으로 설정되고 스스로 회복할 수 없는 지경에 이르게 됩니다.
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
                        이러한 문제를 해결하기 위해,{' '}
                        <span style={{fontWeight: 'bold'}}>
                            PBD
                        </span>{' '}
                        <span style={{fontStyle: 'italic'}}>
                            (Position Based Dynamics)
                        </span>{' '}
                        라는 새로운 방법론이 등장하였습니다. 스프링에 대한 힘을 계산하는 대신, 스프링의 초기 길이와 현재 길이를 비교하여 다음 파티클의 위치를 계산하는 것입니다.
                        <br/><br/>
                    </p>
                    <p>
                        이러한 일련의 프로세스를 \"제약을 추가한다\" 라고 명명합니다. PBD에는 다양한 종류의 제약이 있는데, Stretching 제약은 두 파티클을 연결한 스프링의 길이를 유지하기 위해 사용되며, Shearing 제약은 모델을 이루는 다각형의 모양을 유지하기 위해, Bending 제약은 두 인접한 다각형(주로 삼각형으로 나뉨) 이 이루는 각도를 유지하기 위해 사용됩니다.
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
                        구현
                    </h2>
                    <div className={styles.block}>
                        <div className={styles.block}>
                            <p>
                                천 시뮬레이션을 인게임에 이식하는 것은 꽤나 도전적인 과제였습니다. 먼저 시뮬레이션되는 물체는 플레이어를 따라다녀야 하므로 각각의 파티클에 시뮬레이션에 의해 영향받는 정도를 결정하는 변수를 설정하였습니다. 그리하여 시뮬레이션에 의해 조종되지 않는 파티클들은 플레이어의 위치를 따라다니도록 하였습니다.
                            </p>
                            <p>
                                필자가 주목한 또다른 문제점은 시뮬레이션 되는 물체가 프레임이 낮을수록 늘어지는 문제였습니다. 프레임 실행 시간이 곧 시간의 변화이므로 시뮬레이션의 정확도가 떨어지기 때문입니다. 그래서 Stretching 제약에서 약간 수정된 제약을 추가하였습니다. 두 개의 파티클을 동시에 당기는 대신, 하나의 파티클을 기준으로 삼고 다른 파티클의 위치만을 변경하는 것입니다. 필자는 이 제약을 Shape 제약, 즉 천의 모양을 유지하는 제약이라 이름 붙였습니다.
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
                        결과
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
                    참조
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