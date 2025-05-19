import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageSprLessonBuilderDarkLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from '~/assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from '~/assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from '~/assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from '~/assets/spr-lesson-builder-light.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './threat-detection.module.css';

const title = 'Threat Detection AI';
const description =
  'An artificial neural network (ANN) model for live threat classification in cybersecurity applications, achieving 95% accuracy in identifying potential security threats.';
const roles = [
  'Machine Learning Engineer',
  'Cybersecurity Specialist',
  'Software Developer',
  'Data Scientist',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const ThreatDetection = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://genovotech.com/threat-detection"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprLessonBuilderDark} 1280w, ${imageSprLessonBuilderDarkLarge} 2560w`
                  : `${imageSprLessonBuilderLight} 1280w, ${imageSprLessonBuilderLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Threat Detection AI dashboard showing real-time threat analysis"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Modern cybersecurity systems face an ever-growing volume and sophistication of threats. 
              Traditional signature-based detection methods are increasingly ineffective against zero-day 
              exploits and advanced persistent threats. Security teams are overwhelmed by the sheer number 
              of alerts, many of which are false positives, leading to alert fatigue and potentially 
              missing critical security incidents.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The solution</ProjectSectionHeading>
              <ProjectSectionText>
                The Threat Detection AI system leverages artificial neural networks (ANNs) to analyze 
                network traffic, system logs, and user behavior patterns in real-time. The model was 
                trained on a diverse dataset of benign and malicious activities to recognize subtle 
                patterns indicating potential threats, even those not previously encountered.
              </ProjectSectionText>
              <ProjectSectionText>
                Unlike traditional rule-based systems, our AI model continuously learns from new data 
                and adapts to evolving threat landscapes. It provides context-aware analysis by considering 
                multiple data points together, significantly reducing false positives while maintaining 
                high detection sensitivity for genuine threats.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectSectionHeading>Technical implementation</ProjectSectionHeading>
              <ProjectSectionText>
                The Threat Detection AI system was built using a hybrid architecture combining supervised 
                and unsupervised learning techniques. We implemented a multi-layer ANN with specialized 
                layers for different types of data inputs (network packets, log entries, user actions).
              </ProjectSectionText>
              <ProjectSectionText>
                Key features of the implementation include:
              </ProjectSectionText>
              <ul>
                <li>Deep neural network architecture with 95% detection accuracy</li>
                <li>Real-time processing capabilities (under 500ms latency)</li>
                <li>Transfer learning from pre-existing security models</li>
                <li>Anomaly detection for zero-day threat identification</li>
                <li>Automatic feature extraction from raw security data</li>
                <li>Explainable AI components for security analyst review</li>
              </ul>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectSectionHeading>Outcomes & impact</ProjectSectionHeading>
              <ProjectSectionText>
                The Threat Detection AI system has been successfully deployed in multiple enterprise 
                environments, processing over 10TB of security data daily. The system has demonstrated 
                a 95% accuracy rate in identifying genuine security threats, while reducing false 
                positives by 70% compared to traditional detection methods.
              </ProjectSectionText>
              <ProjectSectionText>
                Security teams using the system report significant improvements in their operational 
                efficiency, with analysts able to focus on genuine threats rather than triaging false 
                positives. The system has successfully detected several sophisticated attack attempts 
                that would have likely gone unnoticed by conventional security tools, including a 
                targeted spear-phishing campaign and a novel lateral movement technique.
              </ProjectSectionText>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Future developments</ProjectSectionHeading>
              <ProjectSectionText>
                We are currently enhancing the system with federated learning capabilities to allow 
                organizations to benefit from cross-organizational threat intelligence without sharing 
                sensitive security data. Future versions will also include specialized modules for IoT 
                security, supply chain threat detection, and increased support for cloud-native 
                environments. Additionally, we're developing an advanced threat hunting feature that 
                proactively searches for indicators of compromise based on the latest threat intelligence.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
}; 
