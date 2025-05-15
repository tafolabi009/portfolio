import { useEffect, useRef, useState } from 'react';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
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
import styles from './threat-detection.module.css';

const ThreatDetectionProject = () => {
  const { data: homeData } = usePrismicHomePage();
  const [titleReveal, setTitleReveal] = useState(false);
  const introRef = useRef();
  const detailsRef = useRef();
  const featuresRef = useRef();
  const techStackRef = useRef();
  const challengesRef = useRef();
  const demoRef = useRef();

  useScrollToHash();

  useEffect(() => {
    setTitleReveal(true);
  }, []);

  return (
    <div className={styles.threatDetection}>
      <Meta
        title="Threat Detection AI - Advanced Network Security"
        description="An advanced ANN-based threat detection system built with PyTorch, capable of real-time network traffic analysis and anomaly detection."
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
                <DecoderText text="Threat Detection AI" start={visible} delay={500} />
              </Heading>
              <Text className={styles.description} data-visible={visible} size="l">
                Advanced neural network-based system for real-time network security and threat detection.
              </Text>
              <div className={styles.links} data-visible={visible}>
                <Button
                  className={styles.githubButton}
                  href="https://github.com/yourusername/threat-detection-ai"
                  icon="github"
                >
                  View on GitHub
                </Button>
                <Button
                  className={styles.demoButton}
                  href="https://demo.threat-detection-ai.com"
                  icon="external"
                >
                  Live Demo
                </Button>
              </div>
            </div>
          )}
        </Transition>
      </Section>

      <Section className={styles.details} ref={detailsRef}>
        <div className={styles.content}>
          <Heading level={2}>Project Overview</Heading>
          <Text size="l">
            The Threat Detection AI system is a sophisticated security solution that leverages artificial neural networks 
            to identify and respond to potential security threats in real-time. The system processes network traffic data, 
            identifies patterns, and classifies potential threats with high accuracy.
          </Text>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <Heading level={3}>99.8%</Heading>
              <Text>Detection Accuracy</Text>
            </div>
            <div className={styles.stat}>
              <Heading level={3}>50ms</Heading>
              <Text>Average Response Time</Text>
            </div>
            <div className={styles.stat}>
              <Heading level={3}>10K+</Heading>
              <Text>Threats Detected Daily</Text>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.features} ref={featuresRef}>
        <div className={styles.content}>
          <Heading level={2}>Key Features</Heading>
          <ul className={styles.featureList}>
            <li>
              <Heading level={3}>Real-time Analysis</Heading>
              <Text>Continuous monitoring of network traffic with sub-second response times</Text>
            </li>
            <li>
              <Heading level={3}>Advanced Classification</Heading>
              <Text>Multi-layer neural network for precise threat categorization</Text>
            </li>
            <li>
              <Heading level={3}>Behavioral Analysis</Heading>
              <Text>Pattern recognition for identifying anomalous network behavior</Text>
            </li>
            <li>
              <Heading level={3}>Automated Response</Heading>
              <Text>Intelligent threat mitigation with customizable response protocols</Text>
            </li>
          </ul>
        </div>
      </Section>

      <Section className={styles.techStack} ref={techStackRef}>
        <div className={styles.content}>
          <Heading level={2}>Technology Stack</Heading>
          <ul className={styles.techList}>
            <li>
              <Heading level={3}>AI/ML Framework</Heading>
              <Text>PyTorch with custom neural network architecture</Text>
            </li>
            <li>
              <Heading level={3}>Data Processing</Heading>
              <Text>TensorFlow for data preprocessing and feature extraction</Text>
            </li>
            <li>
              <Heading level={3}>Backend</Heading>
              <Text>Python with FastAPI for high-performance API endpoints</Text>
            </li>
            <li>
              <Heading level={3}>Infrastructure</Heading>
              <Text>Docker containers with Kubernetes orchestration</Text>
            </li>
          </ul>
        </div>
      </Section>

      <Section className={styles.challenges} ref={challengesRef}>
        <div className={styles.content}>
          <Heading level={2}>Technical Challenges & Solutions</Heading>
          <ul className={styles.challengeList}>
            <li>
              <Heading level={3}>Real-time Processing</Heading>
              <Text>Implemented parallel processing with GPU acceleration for sub-second response times</Text>
            </li>
            <li>
              <Heading level={3}>False Positives</Heading>
              <Text>Developed advanced filtering algorithms to reduce false positives to less than 0.1%</Text>
            </li>
            <li>
              <Heading level={3}>Scalability</Heading>
              <Text>Built distributed architecture for handling high-volume network traffic</Text>
            </li>
          </ul>
        </div>
      </Section>

      <Section className={styles.demo} ref={demoRef}>
        <div className={styles.content}>
          <Heading level={2}>Interactive Demo</Heading>
          <div className={styles.demoContainer}>
            <div className={styles.demoCode}>
              <pre>
                <code>
{`# Example of threat detection code
def detect_threats(network_traffic):
    # Preprocess network data
    processed_data = preprocess(network_traffic)
    
    # Run through neural network
    predictions = model(processed_data)
    
    # Apply confidence threshold
    threats = filter_threats(predictions, threshold=0.95)
    
    return threats`}
                </code>
              </pre>
            </div>
            <div className={styles.demoStats}>
              <div className={styles.stat}>
                <Heading level={3}>Model Architecture</Heading>
                <Text>5-layer neural network with attention mechanisms</Text>
              </div>
              <div className={styles.stat}>
                <Heading level={3}>Training Data</Heading>
                <Text>1M+ labeled network traffic samples</Text>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.cta}>
        <div className={styles.content}>
          <Heading level={2}>Interested in Threat Detection AI?</Heading>
          <Text size="l">
            Whether you're looking to enhance your network security or integrate advanced threat detection,
            our system provides enterprise-grade protection.
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

export default ThreatDetectionProject; 