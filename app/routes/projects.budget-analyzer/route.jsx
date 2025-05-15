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
import styles from './budget-analyzer.module.css';

const BudgetAnalyzerProject = () => {
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
    <div className={styles.budgetAnalyzer}>
      <Meta
        title="Budget Analyzer - Smart Financial Management"
        description="A comprehensive financial management tool with AI-powered expense tracking, automated categorization, and intelligent budget planning."
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
                <DecoderText text="Budget Analyzer" start={visible} delay={500} />
              </Heading>
              <Text className={styles.description} data-visible={visible} size="l">
                An AI-powered financial management tool that helps you track expenses, analyze spending patterns, and make informed financial decisions.
              </Text>
              <div className={styles.links} data-visible={visible}>
                <Button
                  className={styles.githubButton}
                  href="https://github.com/tafolabi009/budget-analyzer"
                  icon="github"
                >
                  View on GitHub
                </Button>
                <Button
                  className={styles.demoButton}
                  href="https://demo.budget-analyzer.com"
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
            The Budget Analyzer is a comprehensive financial management tool that leverages machine learning to provide 
            intelligent insights into your spending habits. It offers automated expense tracking, smart categorization, 
            and personalized budget recommendations, helping users make better financial decisions.
          </Text>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <Heading level={3}>95%</Heading>
              <Text>Accuracy in Categorization</Text>
            </div>
            <div className={styles.stat}>
              <Heading level={3}>10K+</Heading>
              <Text>Active Users</Text>
            </div>
            <div className={styles.stat}>
              <Heading level={3}>$1M+</Heading>
              <Text>Transactions Analyzed</Text>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.features} ref={featuresRef}>
        <div className={styles.content}>
          <Heading level={2}>Key Features</Heading>
          <ul className={styles.featureList}>
            <li>
              <Heading level={3}>Expense Tracking</Heading>
              <Text>Automated transaction import and categorization using machine learning algorithms</Text>
            </li>
            <li>
              <Heading level={3}>Data Visualization</Heading>
              <Text>Interactive charts and graphs for spending analysis and trend identification</Text>
            </li>
            <li>
              <Heading level={3}>Budget Planning</Heading>
              <Text>AI-powered budget recommendations based on spending patterns and financial goals</Text>
            </li>
            <li>
              <Heading level={3}>Security</Heading>
              <Text>End-to-end encryption and secure data storage with regular backups</Text>
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
              <Text>React with TypeScript for type-safe development and better maintainability</Text>
            </li>
            <li>
              <Heading level={3}>Backend</Heading>
              <Text>Node.js with Express for scalable API development and real-time updates</Text>
            </li>
            <li>
              <Heading level={3}>Machine Learning</Heading>
              <Text>TensorFlow.js for client-side ML and scikit-learn for server-side processing</Text>
            </li>
            <li>
              <Heading level={3}>Database</Heading>
              <Text>MongoDB for flexible document storage and Redis for caching</Text>
            </li>
          </ul>
        </div>
      </Section>

      <Section className={styles.challenges} ref={challengesRef}>
        <div className={styles.content}>
          <Heading level={2}>Technical Challenges & Solutions</Heading>
          <ul className={styles.challengeList}>
            <li>
              <Heading level={3}>Data Processing</Heading>
              <Text>Implemented efficient data pipelines and caching strategies for real-time analysis</Text>
            </li>
            <li>
              <Heading level={3}>Security</Heading>
              <Text>Developed robust encryption and authentication systems for financial data protection</Text>
            </li>
            <li>
              <Heading level={3}>Scalability</Heading>
              <Text>Built a microservices architecture with load balancing and auto-scaling</Text>
            </li>
          </ul>
        </div>
      </Section>

      <Section className={styles.demo} ref={demoRef}>
        <div className={styles.content}>
          <Heading level={2}>Implementation Details</Heading>
          <div className={styles.demoContainer}>
            <div className={styles.demoCode}>
              <pre>
                <code>
{`// Example of expense categorization using TensorFlow.js
async function categorizeExpense(transaction) {
  const model = await tf.loadLayersModel('expense-categorizer/model.json');
  
  // Preprocess transaction data
  const features = preprocessTransaction(transaction);
  
  // Make prediction
  const prediction = model.predict(features);
  const category = await prediction.argMax().data();
  
  return {
    category: CATEGORIES[category],
    confidence: prediction.max().dataSync()[0]
  };
}

// Real-time budget analysis
function analyzeBudget(transactions, goals) {
  const spending = calculateSpending(transactions);
  const trends = identifyTrends(transactions);
  
  return {
    recommendations: generateRecommendations(spending, trends, goals),
    insights: extractInsights(spending, trends),
    alerts: checkThresholds(spending, goals)
  };
}`}
                </code>
              </pre>
            </div>
            <div className={styles.demoStats}>
              <div className={styles.stat}>
                <Heading level={3}>ML Model</Heading>
                <Text>TensorFlow.js with 95% accuracy in expense categorization</Text>
              </div>
              <div className={styles.stat}>
                <Heading level={3}>Performance</Heading>
                <Text>Real-time analysis with {'<'} 100ms response time</Text>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.cta}>
        <div className={styles.content}>
          <Heading level={2}>Start Managing Your Finances</Heading>
          <Text size="l">
            Take control of your financial future with AI-powered insights and automated tracking. 
            Get started today and make smarter financial decisions.
          </Text>
          <Button
            className={styles.button}
            href="/contact"
            icon="send"
          >
            Get Started
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default BudgetAnalyzerProject; 