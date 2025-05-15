import { useEffect, useRef, useState } from 'react';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Meta } from '~/components/meta';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useScrollToHash } from '~/hooks/useScrollToHash';
import { usePrismicHomePage } from '~/hooks/usePrismicHomePage';
import { media } from '~/utils/style';
import styles from './taskr.module.css';

const TaskrProject = () => {
  const { data: homeData } = usePrismicHomePage();
  const [titleReveal, setTitleReveal] = useState(false);
  const introRef = useRef();
  const detailsRef = useRef();
  const featuresRef = useRef();
  const techStackRef = useRef();
  const challengesRef = useRef();

  useScrollToHash();

  useEffect(() => {
    setTitleReveal(true);
  }, []);

  return (
    <div className={styles.taskr}>
      <Meta
        title="Taskr - Marketplace Platform"
        description="A comprehensive marketplace platform built with Flutter and Node.js, featuring real-time updates, secure payment processing, and advanced features."
      />
      
      <Section className={styles.intro} ref={introRef}>
        <Transition in={titleReveal} timeout={2000}>
          {({ visible }) => (
            <div className={styles.content}>
              <Heading
                level={1}
                className={styles.title}
                data-visible={visible}
              >
                <DecoderText text="Taskr" start={visible} delay={500} />
              </Heading>
              <Text className={styles.description} data-visible={visible} size="l">
                A modern marketplace platform connecting service providers with clients across NG/US/UK markets.
              </Text>
            </div>
          )}
        </Transition>
      </Section>

      <Section className={styles.details} ref={detailsRef}>
        <div className={styles.content}>
          <Heading level={2}>Project Overview</Heading>
          <Text size="l">
            Taskr is a comprehensive marketplace platform that enables service providers to connect with clients, 
            manage bookings, and process payments securely. The platform features real-time updates, 
            automated dispute resolution, and advanced analytics for both providers and clients.
          </Text>
        </div>
      </Section>

      <Section className={styles.features} ref={featuresRef}>
        <div className={styles.content}>
          <Heading level={2}>Key Features</Heading>
          <ul className={styles.featureList}>
            <li>
              <Heading level={3}>Real-time Updates</Heading>
              <Text>Live chat, notifications, and status updates using Firebase Realtime Database</Text>
            </li>
            <li>
              <Heading level={3}>Secure Payments</Heading>
              <Text>Integrated payment processing with Stripe and Paystack, supporting multiple currencies</Text>
            </li>
            <li>
              <Heading level={3}>Automated Dispute Resolution</Heading>
              <Text>AI-powered system for handling disputes and ensuring fair resolutions</Text>
            </li>
            <li>
              <Heading level={3}>Advanced Analytics</Heading>
              <Text>Comprehensive dashboards for tracking performance, earnings, and user engagement</Text>
            </li>
          </ul>
        </div>
      </Section>

      <Section className={styles.techStack} ref={techStackRef}>
        <div className={styles.content}>
          <Heading level={2}>Technology Stack</Heading>
          <ul className={styles.techList}>
            <li>
              <Heading level={3}>Frontend</Heading>
              <Text>Flutter for cross-platform mobile development</Text>
            </li>
            <li>
              <Heading level={3}>Backend</Heading>
              <Text>Node.js with Express for API development</Text>
            </li>
            <li>
              <Heading level={3}>Database</Heading>
              <Text>Firebase Realtime Database and Firestore</Text>
            </li>
            <li>
              <Heading level={3}>Infrastructure</Heading>
              <Text>AWS for hosting and scaling</Text>
            </li>
          </ul>
        </div>
      </Section>

      <Section className={styles.challenges} ref={challengesRef}>
        <div className={styles.content}>
          <Heading level={2}>Challenges & Solutions</Heading>
          <ul className={styles.challengeList}>
            <li>
              <Heading level={3}>Real-time Performance</Heading>
              <Text>Implemented efficient data synchronization and caching strategies</Text>
            </li>
            <li>
              <Heading level={3}>Payment Security</Heading>
              <Text>Built robust payment processing with multiple layers of security</Text>
            </li>
            <li>
              <Heading level={3}>Scalability</Heading>
              <Text>Designed microservices architecture for horizontal scaling</Text>
            </li>
          </ul>
        </div>
      </Section>

      <Section className={styles.cta}>
        <div className={styles.content}>
          <Heading level={2}>Interested in Taskr?</Heading>
          <Text size="l">
            Whether you're a service provider looking to expand your reach or a client seeking quality services,
            Taskr provides the platform you need.
          </Text>
          <Button
            className={styles.button}
            href="/contact"
            icon="send"
          >
            Get in touch
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default TaskrProject; 