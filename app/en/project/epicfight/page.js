'use client'

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

import publicRuntimeConfig from "../../../../next.config.mjs";

export default function Home() {
    const basePath = publicRuntimeConfig.basePath || '';
    
    return (
        <div className={styles.main}>
            <Image
                aria-hidden
                src={`${basePath}/epicfight_title.png`}
                alt="Java"
                width={900}
                height={300}
            />
            <h1>Epic Fight - Minecraft Modding Project</h1>
            <h2>⚔️ What is Epic Fight?</h2>
            <div className={styles.sentenceBlock}>
                <p>Epic Fight is an addon of MinecraftㅡA sandbox game from Mojang Studios. The project has run since August. 2020 and has grown to over 15,000 community members and 20 million downloads.</p>
            </div>
            <h2>⚙️ What does the addon do?</h2>
            <div className={styles.sentenceBlock}>
                <p>It completely turns the game into the soul-like genre with more reinforced behaviors for player and enemies. Animations based on skeletal armatures and skinned mesh will make the players' and enemies' movement colorful, and the unique battle system will require your precise mechanics to defeat your enemies.</p>
            </div>
            <h2>💡 Why did you create the addon?</h2>
            <div className={styles.sentenceBlock}>
                <p>If you have ever played Minecraft, you might feel the battle quite monotonous. The only thing you have to do is aiming to an enemy, then hit it. Even tho the combat is not the main content of Minecraft, I saw the possibility that the game could be used as 3D action adventure, with the voxel graphics. Since Minecraft provides useful ways for level design such as creating structures and dungeons, I hoped we could also have well-designed enemies that enhance the player's desire to explore the world.</p>
            </div>
            <h2>👋 Team members</h2>
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
                    <p>Developer</p>
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
                    <p>Manager</p>
                </div>
            </div>
            <h2>⤵️ Portals</h2>
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
                    <p>Mod files distribution</p>
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
                    <p>Mod files distribution</p>
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
                    <p>Source code</p>
                </div>
            </div>
            <h2>✏️ Devlog</h2>
            <div className={styles.devlog}>
                <Link className={styles.container} href="/en/project/epicfight/animation">
                    <Image
                        aria-hidden
                        src={`${basePath}/skeletal_mesh.png`}
                        alt="Skeletal Mesh"
                        width={305}
                        height={237}
                    />
                    <p>Skinned mesh and animation</p>
                </Link>
                <Link className={styles.container} href="/en/project/epicfight/obb">
                    <Image
                        aria-hidden
                        src={`${basePath}/obb.png`}
                        alt="OBB"
                        width={305}
                        height={237}
                    />
                    <p>Collision detection with OBB</p>
                </Link>
                <Link className={styles.container} href="/en/project/epicfight/bezier">
                    <Image
                        aria-hidden
                        src={`${basePath}/trail_example.png`}
                        alt="Trail Particle"
                        width={305}
                        height={237}
                    />
                    <p>Trail particle using Bezier Curve</p>
                </Link>
                <Link className={styles.container} href="/en/project/epicfight/procedural">
                    <Image
                        aria-hidden
                        src={`${basePath}/procedural.png`}
                        alt="Procedural Animation"
                        width={305}
                        height={237}
                    />
                    <p>Procedural animation</p>
                </Link>
                <Link className={styles.container} href="/en/project/epicfight/cloth">
                    <Image
                        aria-hidden
                        src={`${basePath}/cloth.png`}
                        alt="Cloth Simulation"
                        width={305}
                        height={237}
                    />
                    <p>Cloth simulation</p>
                </Link>
            </div>
            <p style={{ opacity: 0.7, textAlign: "center" }}>
                @ 2025. Lee Jae Hoon. Powered by Github Pages
            </p>
        </div>
    );
}