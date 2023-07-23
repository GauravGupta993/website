import Image from "next/image";
import PageLayout from "../../components/layout/PageLayout";
import styles from "../../styles/pages/branch.module.scss";
import Link from "next/link";

export default function Branches() {
    const logoSize = 180;
    const FACTOR = 1.44688645;
    const middleLogo = FACTOR * logoSize;

    return (
        <PageLayout title={"Branches | ACM at PEC"} heading={"Branches"}>
            <div className={styles.wrapper}>
                <div className={styles.grid1}>
                    <div></div>
                    <div>
                        <Link href='branches/cp' aria-label="Branch">
                            <Image src="/assets/logos/cpBorder.png" alt="cp logo" height={logoSize} width={logoSize} />
                        </Link>
                    </div>
                    <div className={styles.emptySpace}></div>
                    <div>
                        <Link href='branches/ai' aria-label="Branch">
                            <Image src="/assets/logos/aiBorder.png" alt="ai logo" height={logoSize} width={logoSize} />
                        </Link>
                    </div>
                    <div></div>
                </div>

                <div className={styles.grid2}>
                    <div>
                        <Link href='/branches/socials' aria-label="Branch">
                            <Image src="/assets/logos/socialsBorder.png" alt="socials logo" height={logoSize} width={logoSize} />
                        </Link>
                    </div>
                    <div className={styles.center}>
                    <Link href='/' aria-label="Branch">
                            <Image src="/assets/logos/acmBorder.png" alt="acm logo" height={middleLogo} width={middleLogo} />
                        </Link>
                    </div>
                    <div>
                        <Link href='branches/cyber' aria-label="Branch">
                            
                            <Image src="/assets/logos/cyberBorder.png" alt="cyber logo" height={logoSize} width={logoSize} />
                        </Link>
                    </div>
                    <div></div>
                </div>

                <div className={styles.grid1}>
                    <div></div>
                    <div>
                        <Link href='branches/wit' aria-label="Branch">
                            
                            <Image src="/assets/logos/witBorder.png" alt="wit logo" height={logoSize} width={logoSize} />
                        </Link>
                    </div>
                    <div className={styles.emptySpace}></div>
                    <div>
                        <Link href='branches/development' aria-label="Branch">
                            
                            <Image src="/assets/logos/devBorder.png" alt="dev logo" height={logoSize} width={logoSize} />
                        </Link>
                    </div>
                    <div></div>
                </div>
            </div>
        </PageLayout>
    )
}