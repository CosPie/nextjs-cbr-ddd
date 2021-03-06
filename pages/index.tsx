import type { NextPage } from 'next';
import Head from 'next/head';
import { MyButtonElement } from '@/shared/web-components';
import styles from './index.module.less';
import RoadScene from './scene';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyButtonElement
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('wc-com');
        }}
      >
        wc-coms
      </MyButtonElement>
      <button
        type="button"
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('react');
        }}
      >
        react
      </button>

      <RoadScene></RoadScene>
    </div>
  );
};

export default Home;
