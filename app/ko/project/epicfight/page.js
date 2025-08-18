'use client'

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    const basePath = process.env.BASE_PATH || '';
    const t = useTranslations('Project.epicfight');

    return (
        <div className={styles.main}>
            <Image
                aria-hidden
                src={`${basePath}/epicfight_title.png`}
                alt="Java"
                width={900}
                height={300}
            />
            <h1>Epic Fight - Minecraft 모딩 프로젝트</h1>
            <h2>⚔️ Epic Fight 란?</h2>
            <div className={styles.sentenceBlock}>
                <p>Epic Fight는 Mojang Studios 샌드박스 게임 Minecraft의 애드온으로, 2020년부터 운영되어 현재 15,000명의 커뮤니티 회원수와 2천만 다운로드를 기록한 프로젝트로 성장하였습니다.</p>
            </div>
            <h2>⚙️ 무엇이 바뀌나요?</h2>
            <div className={styles.sentenceBlock}>
                <p>Epic Fight는 게임의 장르를 소울류 전투 게임으로 완전히 바꿉니다. 플레이어와 적들은 Skinned mesh, 그리고 Skeletal armature 등의 기법을 통해 기존 Minecraft보다 더욱 다채로운 움직임과 전투 시스템을 가지고 행동하며 적들과 싸우기 위해 플레이어는 더욱 세심한 컨트롤을 요구받게 됩니다.</p>
            </div>
            <h2>💡 개발 동기</h2>
            <div className={styles.sentenceBlock}>
                <p>Minecraft를 플레이해본 적이 있다면 전투가 상당히 단조롭다 생각해본 적이 있을 것입니다. 적들을 조준하고 때리기만 하면 되니까요. 물론 Minecraft에서 전투는 큰 비중을 차지하지 않습니다. 하지만 저는 이 게임이 복쉘 그래픽을 기반으로 한 3D 액션 어드벤쳐물로 활용될 수 있다는 가능성을 보았습니다. 마인크래프트는 레벨 디자인 측면에서 아주 강력한 도구이기 때문에 많은 사람들이 던전, 아레나 등의 맵을 제작하여 공유하고 있습니다. 저는 이러한 훌륭한 맵들과 더불어 발달된 AI와 전투 시스템을 가진 몬스터들이 게임 내에 배치되어 플레이어의 모험 욕구를 자극하길 원했습니다.</p>
            </div>
            <h2>👋 구성원</h2>
            <div className={styles.imgbox}>
                <div className={styles.imgandname}>
                    <Image
                        aria-hidden
                        src={`${basePath}/yesman.png`}
                        alt="Yesman Profile"
                        width={128}
                        height={128}
                    />
                    <h2>Yesman</h2>
                    <p>개발자</p>
                </div>
                <div className={styles.imgandname}>
                    <Image
                        aria-hidden
                        src={`${basePath}/guilherme.png`}
                        alt="Guilherme Profile"
                        width={128}
                        height={128}
                    />
                    <h2>Guilherme</h2>
                    <p>프로젝트 매니저</p>
                </div>
            </div>
            <h2>⤵️ 관련 링크</h2>
            <div className={styles.imgbox}>
                <div className={styles.imgandname}>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/epic-fight-mod">
                        <Image
                            aria-hidden
                            src={`${basePath}/curseforge.png`}
                            alt="Curseforge"
                            width={128}
                            height={128}
                        />
                    </a>
                    <h2>Curseforge</h2>
                    <p>모드 파일 유통</p>
                </div>
                <div className={styles.imgandname}>
                    <a href="https://modrinth.com/mod/epic-fight">
                        <Image
                            aria-hidden
                            src={`${basePath}/modrinth.png`}
                            alt="Modrinth"
                            width={128}
                            height={128}
                        />
                    </a>
                    <h2>Modrinth</h2>
                    <p>모드 파일 유통</p>
                </div>
                <div className={styles.imgandname}>
                    <a href="https://github.com/Epic-Fight/epicfight">
                        <Image
                            aria-hidden
                            src={`${basePath}/github.png`}
                            alt="Github"
                            width={128}
                            height={128}
                        />
                    </a>
                    <h2>Github</h2>
                    <p>소스코드</p>
                </div>
            </div>
            <h2>✏️ 개발일지</h2>
            <div className={styles.devlog}>
                <Link className={styles.container} href="/project/epicfight/animation">
                    <Image
                        aria-hidden
                        src={`${basePath}/skeletal_mesh.png`}
                        alt="Skeletal Mesh"
                        width={305}
                        height={237}
                    />
                    <p>Skinned mesh 와 애니메이션</p>
                </Link>
                <Link className={styles.container} href="/project/epicfight/obb">
                    <Image
                        aria-hidden
                        src={`${basePath}/obb.png`}
                        alt="OBB"
                        width={305}
                        height={237}
                    />
                    <p>OBB를 사용한 충돌 감지</p>
                </Link>
                <Link className={styles.container} href="/project/epicfight/bezier">
                    <Image
                        aria-hidden
                        src={`${basePath}/trail_example.png`}
                        alt="Trail Particle"
                        width={305}
                        height={237}
                    />
                    <p>Bezier Curve를 이용해 궤적 그리기</p>
                </Link>
                <Link className={styles.container} href="/project/epicfight/procedural">
                    <Image
                        aria-hidden
                        src={`${basePath}/procedural.png`}
                        alt="Procedural Animation"
                        width={305}
                        height={237}
                    />
                    <p>절차적 애니메이션</p>
                </Link>
                <Link className={styles.container} href="/project/epicfight/cloth">
                    <Image
                        aria-hidden
                        src={`${basePath}/cloth.png`}
                        alt="Cloth Simulation"
                        width={305}
                        height={237}
                    />
                    <p>천 시뮬레이션</p>
                </Link>
            </div>
            <p style={{ opacity: 0.7, textAlign: "center" }}>
                @ 2025. Lee Jae Hoon. Powered by Github Pages
            </p>
        </div>
    );
}