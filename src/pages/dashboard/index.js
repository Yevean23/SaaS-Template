import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from '../index.module.css';
import Dashboard from './_views/Dashboard'




export default function DashHome() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
        <Dashboard />
    </>
  );
}