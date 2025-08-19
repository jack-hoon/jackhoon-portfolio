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
                    OBB(Oridented Bounding Box)를 통한 충돌 검사
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
                            두 오브젝트가 충돌했는지 판별하는 방법은 여러가지가 있습니다. OBB는 충돌 결과의 정확성, 그리고 성능 면에서 가장 무난한 방법입니다. 충돌체의 모양은 회전 가능한 직육면체 (2차원에서는 직사각형)을 기반으로 동작합니다.
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
                        최적화
                    </h2>
                    <div className={styles.block}>
                        <p>
                            OBB를 구현하기 전에 하나의 고려사항이 있었습니다. Minecraft는 충돌 검사를 위해서 오직 AABB(Axis-Aligned Bounding Box) 만을 사용합니다. AABB는 OBB에 비해 충돌 검사 과정이 훨씬 좋은 성능을 가지고 있습니다. 그래서 OBB를 통해 모든 오브젝트를 검사하기 전에 AABB를 통하여{` `}
                            <span style={{fontStyle: 'italic'}}>
                                충돌 가능성이 있는 오브젝트만
                            </span>{` `}
                            을 필터링 한 후 남은 오브젝트들에 대해 OBB 충돌 검사를 시행하는 방법을 고안하였습니다.
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
                        구현
                    </h2>
                    <div className={styles.block}>
                        <p>
                            OBB는 3개의 벡터를 통하여 충돌을 감지합니다. 첫 번째 OBB의 중점에서 에서 두 번째 OBB의 중점으로 향하는 벡터, 그리고 각각의 OBB의 중점에서 모서리로 향한 벡터입니다. 이 벡터들은{` `}
                            <span style={{fontStyle: 'italic'}}>분리축</span>{` `}
                            이라 불리는 벡터에 투영됩니다. 아래의 그림은 OBB 충돌이 어떻게 작동하는지 이해를 도울 것입니다.
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
                                OBB 알고리즘의 최종 목표는 두 개 모서리 -{`>`} 중점 벡터 의 투영된 벡터(PA and PB) 의 길이의 합이 중점 -{`>`} 중점 벡터의 투영된 값보다 작은 분리축을 찾는 것입니다. 해당 조건을 만족하는 분리축을 찾았다면, 두 충돌체는 충돌하지 않는 것입니다. 분리축 후보는 각각의 OBB 평면의 법선 벡터들입니다.
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
                        결과
                    </h2>
                </div>
                <div className={styles.block}>
                    <p>
                        Entity와 충돌할 때 OBB가 붉게 변합니다
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
                    참조
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