import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/web/intro">
            官网使用指南
          </Link>
          <Link className="button button--secondary button--lg" to="/mcje/select_server">
            MCJE 文档
          </Link>
          <Link className="button button--secondary button--lg" to="/mcbe/select_server">
            MCBE 文档
          </Link>
          <Link className="button button--secondary button--lg" to="/terraria">
            泰拉瑞亚
          </Link>
          <Link className="button button--secondary button--lg" to="/mindustry">
            像素工厂
          </Link>
          <Link className="button button--secondary button--lg" to="/rusted-warfare">
            铁锈战争
          </Link>
          <Link className="button button--secondary button--lg" to="/custom-image/multi_env/quick_start">
            自定义镜像
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="简幻欢社区维基">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
