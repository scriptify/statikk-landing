import React from 'react';
import Fade from 'react-reveal/Fade';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';
import Templates from '../components/Templates';
import Divider from '../components/general/Divider';
import EmailSignup from '../components/EmailSignup';

const IndexPage = () => (
  <Layout>
    <SEO title="Statikk Home" />
    <Banner />
    <Fade up>
      <HowItWorks />
    </Fade>
    <Divider />
    <Fade bottom>
      <Templates />
    </Fade>
    <EmailSignup />
  </Layout>
);

export default IndexPage;
