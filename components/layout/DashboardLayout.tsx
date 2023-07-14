import Head from "next/head";
import {ReactNode} from "react";
import styles from "../../styles/components/PageLayout.module.scss";
import Banner from "../banner/Banner";

type Props = {
    title: string;
    description?: string;
    heading?: string;
    children?: ReactNode;
};

function DashboardLayout({title, children, description, heading}: Props) {
    return (
        <div className={styles.dashboard}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Head>

            <div className={styles.children}>
                <Banner heading={heading}/>
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;