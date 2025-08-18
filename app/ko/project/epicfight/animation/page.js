'use client'

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    const basePath = process.env.BASE_PATH || '';
    const t = useTranslations('Project.epicfight.animation');

    return (
        <div>
            <div className={styles.main}>
                <h1>
                    Skinned Mesh 와 Skeletal Animations
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
                            Skinned mesh 와 Skeletal animation은 컴퓨터 그래픽에서 모델을 실시간으로 변형하기 위해 가장 널리 사용되는 기법입니다. 모델은 크게 Mesh 와 Armature 부분으로 나뉘는데, Mesh가 모델의 전체적인 형태를 정의한다면 Armature는 모델이 어떻게 변형될수 있는지를 정의합니다. Armature는 여러개의 Joint들이 트리 구조로 이루어진 모습을 하고 있으며 Mesh의 각각의 정점들은 Joint들의 움직임에 영향을 받아서 함께 움직입니다.
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
                        과제
                    </h2>
                    <div className={styles.block}>
                        <p>
                            Minecraft는 Skinned Mesh를 지원하지 않습니다. 또한 모든 애니메이션이 코드로 구현되어 있어서 움직임이 상당히 딱딱하며, 단조롭습니다. 사실 이것은 게임이 추구하는 복쉘 그래픽의 분위기를 내기 위한 장치이지만, 저는 게임의 분위기를 크게 해지지 않는 한 플레이어와 몬스터에게 자연스러운 움직임을 주는 것이 중요하다 생각했습니다. 그리고 애니메이션 코드를 외부의 리소스 형태로 분리할 수 있다면 생산성의 향상에도 크게 도움이 될 것이라 생각했습니다.
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
                        문제 해결
                    </h2>
                    <div className={styles.block}>
                        <p>
                            저는 3D모델링과 애니메이션 제작에 관심이 많았기 때문에 무료 3D 그래픽 생성 툴인 Blender의 사용법에 대해 어느 정도 숙지하고 있는 상태였습니다. 제가 설계한 시스템은, 모든 애니메이션 파일을 json 형식으로 저장하고 게임이 로드될 때 한꺼번에 읽는 것이었습니다. 이는 애니메이션을 하드코딩하는 것보다 효율성과 생산성 향상에 도움이 되었습니다. 이를 위해서 Blender에서 json형식으로 애니메이션을 익스포트 하기 위한 모듈과 게임 안에서 애니메이션 리소스를 읽기 위한 importer를 구현해야 했습니다.
                        </p>
                    </div>
                </div>
                <div className={styles.block}>
                    <h2>
                        구현
                    </h2>
                    <div className={styles.block}>
                        <p>
                            Blender는 Python 언어로 작성되었습니다. 저는 다음과 같은 익스포트 모듈을 만들었습니다.
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
                            이 코드는 Mesh, Armature 그리고 애니메이션을 JSON 파일로 내보냅니다. JSON 파일은 그 문법이 매우 직관적이고 간단하여 리소스 최적화에 용이합니다. 또한 애니메이션 제작이 코드와 숫자에 의존하지 않고, 3D틀 안에서 눈으로 보며 직접 이루어지다 보니 훨씬 편리하였습니다.
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
                            그 다음, 게임 내부에서 리소스 파일을 읽는 모듈을 작성하였습니다.
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
                            이 프로그램은 미리 지정된 위치에서 에셋을 읽어옵니다. Skinned Mesh에 필요한 정점의 위치, 법선 벡터, 텍스처 좌표, 그리고 리깅 데이터를 읽어오며 Armature의 경우엔 트리 형태로 표현된 Joint들을 읽어옵니다. 마지막으로 애니메이션에 필요한 키프레임과 4x4 변환 행렬을 읽어옵니다.
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
                        결과
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
                    참조
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