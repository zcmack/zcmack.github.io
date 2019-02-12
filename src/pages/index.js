import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>it's my only resolution</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
);

export default IndexPage;
