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
import styles from './tocin.module.css';

const TocinProject = () => {
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
    <div className={styles.tocin}>
      <Meta
        title="Tocin - Modern Programming Language"
        description="A modern programming language built on LLVM with Python-like syntax, featuring type inference, memory safety, and high-performance computing capabilities."
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
                <DecoderText text="Tocin Language" start={visible} delay={500} />
              </Heading>
              <Text className={styles.description} data-visible={visible} size="l">
                A modern, high-performance programming language with Python-like syntax and LLVM backend.
              </Text>
              <div className={styles.links} data-visible={visible}>
                <Button
                  className={styles.githubButton}
                  href="https://github.com/yourusername/tocin"
                  icon="github"
                >
                  View on GitHub
                </Button>
                <Button
                  className={styles.demoButton}
                  href="https://playground.tocin-lang.org"
                  icon="external"
                >
                  Try Online
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
            Tocin is a modern programming language designed to combine the ease of use of Python with the performance 
            of compiled languages. Built on top of LLVM, it features type inference, memory safety, and powerful 
            metaprogramming capabilities.
          </Text>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <Heading level={3}>2x</Heading>
              <Text>Faster than Python</Text>
            </div>
            <div className={styles.stat}>
              <Heading level={3}>100%</Heading>
              <Text>Memory Safe</Text>
            </div>
            <div className={styles.stat}>
              <Heading level={3}>10K+</Heading>
              <Text>Lines of Code</Text>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.features} ref={featuresRef}>
        <div className={styles.content}>
          <Heading level={2}>Language Features</Heading>
          <ul className={styles.featureList}>
            <li>
              <Heading level={3}>Type Inference</Heading>
              <Text>Advanced type inference system with compile-time type checking</Text>
            </li>
            <li>
              <Heading level={3}>Memory Safety</Heading>
              <Text>Ownership model and automatic memory management</Text>
            </li>
            <li>
              <Heading level={3}>Metaprogramming</Heading>
              <Text>Powerful compile-time code generation and reflection</Text>
            </li>
            <li>
              <Heading level={3}>Concurrency</Heading>
              <Text>Built-in support for async/await and parallel processing</Text>
            </li>
          </ul>
        </div>
      </Section>

      <Section className={styles.techStack} ref={techStackRef}>
        <div className={styles.content}>
          <Heading level={2}>Technology Stack</Heading>
          <ul className={styles.techList}>
            <li>
              <Heading level={3}>Compiler</Heading>
              <Text>Custom LLVM-based compiler with optimization passes</Text>
            </li>
            <li>
              <Heading level={3}>Runtime</Heading>
              <Text>Lightweight runtime with garbage collection</Text>
            </li>
            <li>
              <Heading level={3}>Standard Library</Heading>
              <Text>Comprehensive standard library with modern features</Text>
            </li>
            <li>
              <Heading level={3}>Tooling</Heading>
              <Text>Language server, debugger, and package manager</Text>
            </li>
          </ul>
        </div>
      </Section>

      <Section className={styles.challenges} ref={challengesRef}>
        <div className={styles.content}>
          <Heading level={2}>Technical Challenges & Solutions</Heading>
          <ul className={styles.challengeList}>
            <li>
              <Heading level={3}>Compiler Design</Heading>
              <Text>Built custom LLVM passes for optimal code generation</Text>
            </li>
            <li>
              <Heading level={3}>Type System</Heading>
              <Text>Developed advanced type inference algorithm</Text>
            </li>
            <li>
              <Heading level={3}>Performance</Heading>
              <Text>Implemented aggressive optimization strategies</Text>
            </li>
          </ul>
        </div>
      </Section>

      <Section className={styles.demo} ref={demoRef}>
        <div className={styles.content}>
          <Heading level={2}>Code Examples</Heading>
          <div className={styles.demoContainer}>
            <div className={styles.demoCode}>
              <pre>
                <code>
{`// Example of Tocin code
fn fibonacci(n: int) -> int {
    if n <= 1 {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

// Type inference example
let numbers = [1, 2, 3, 4, 5]
let sum = numbers.reduce(0, (acc, x) => acc + x)

// Async/await example
async fn fetch_data(url: string) -> Result<Data> {
    let response = await http.get(url)
    return response.json()
}`}
                </code>
              </pre>
            </div>
            <div className={styles.demoStats}>
              <div className={styles.stat}>
                <Heading level={3}>Syntax Features</Heading>
                <Text>Python-like syntax with modern language features</Text>
              </div>
              <div className={styles.stat}>
                <Heading level={3}>Performance</Heading>
                <Text>Compiled to native code via LLVM</Text>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.cta}>
        <div className={styles.content}>
          <Heading level={2}>Try Tocin Today</Heading>
          <Text size="l">
            Whether you're looking for a modern alternative to Python or want to explore a new programming language,
            Tocin offers a powerful and developer-friendly experience.
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

export default TocinProject; 