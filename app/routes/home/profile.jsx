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
      <DecoderText text="Hi, I'm Folabi" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Founder & CEO at{' '}
      <Link href="https://genovotech.com">Genovo Technologies</Link> (NVIDIA Inception) —
      bridging the gap between low-level systems (C++, Assembly) and advanced AI
      architectures. I build technology that is both technically robust and human-centric,
      with a background in Computer Science and ongoing studies in Psychology.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I specialize in compiler design ({' '}
      <Link href="/projects/tocin">TosinLang</Link>,{' '}
      <Link href="/projects/novalang">NovaLang</Link>), operating systems ({' '}
      <Link href="/projects/tosin-rtos">tosin_rtos</Link>), distributed version
      control (<Link href="/projects/epoch-vcs">EPOCH VCS</Link>), and novel ML
      architectures — including AAAI 2026 Workshop–accepted research on O(n log n)
      spectral sequence modeling achieving 3–28× speedups over transformers. I've authored
      6 research papers with rigorous mathematical proofs.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I hold a B.Sc. in Computer Science from the University of the People and a B.Sc. in
      Psychology from Redeemer's University. Certifications include AWS Cloud Practitioner,
      Certified Ethical Hacker (CEH), Google ML Certificate, and Software Engineering. I
      lead an 11-person team at Genovo, directing R&D across{' '}
      <Link href="/projects/synthos">SynthOS</Link>, AI agents, and next-generation
      model architectures.
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
