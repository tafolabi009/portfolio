import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Afolabi, a Systems Architect and ML Researcher with 8+ years of professional experience 
      and a decade-long coding trajectory. As the Founder & CEO of {' '}
      <Link href="https://genovotech.com">Genovo Technologies</Link> (Member, NVIDIA Inception Program), 
      I specialize in low-level systems engineering, distributed infrastructure, and novel neural 
      architecture research — including AAAI-accepted work on O(n log n) architectures achieving 
      3-28× speedup over transformers.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My deep expertise spans compilers (built{' '}
      <Link href="/projects/tocin">TosinLang from scratch</Link>), OS kernels, 
      distributed version control ({' '}
      <Link href="/projects/epoch-vcs">EPOCH VCS</Link>), and mission-critical 
      broadcast automation. I combine theoretical rigor with production engineering — equally 
      comfortable proving universal approximation theorems and shipping high-performance Rust 
      microservices handling 50K+ daily active users. My technical stack includes Python, Rust, 
      C++, PyTorch, LLVM, AWS, and Kubernetes.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I hold a B.Sc. in Computer Science (Honors) from UoPeople and professional certifications 
      including AWS Cloud Practitioner, Certified Ethical Hacker (CEH), and Google ML Certificate. 
      I've published 3 research papers with rigorous mathematical proofs, led workshops for 30+ 
      engineers, and maintain open-source libraries serving 10K+ developers.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Afolabi in professional attire"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
