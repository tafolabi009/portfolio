import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageTaskr from '~/assets/Taskr.png';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageTaskrDark from '~/assets/Taskr.png';
import imageTaskrLightLarge from '~/assets/Taskr.png';
import imageSprLessonBuilderLightPlaceholder from '~/assets/spr-lesson-builder-light-placeholder.jpg';
import imageTaskrLight from '~/assets/Taskr.png';
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
import styles from './taskr.module.css';

const title = 'Taskr - Flutter Marketplace Platform';
const description =
  'A full-featured marketplace platform built with Flutter and Node.js, integrated with Firebase for real-time data and Stripe/Paystack for payments. Designed for service providers and customers in NG/US/UK markets.';
const roles = [
  'Founder',
  'Lead Developer',
  'UI/UX Designer',
  'Backend Architecture',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Taskr = () => {
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
          url="https://genovotech.com/taskr"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageTaskrDark} 720w, ${imageTaskrDark} 1440w`
                  : `${imageTaskrLight} 720w, ${imageTaskrLightLarge} 1440w`
              }
              width={800}
              height={600}
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Taskr marketplace application interface showing service listings"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              In many emerging markets, connecting service providers with customers remains a fragmented process, 
              often reliant on word-of-mouth, social media, or inefficient local directories. This creates barriers 
              for skilled individuals to monetize their services and for customers to find reliable providers. 
              Existing platforms often fail to address local payment challenges, trust issues, and the unique 
              economic dynamics of markets like Nigeria, while global platforms don't adequately serve these regions.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The solution</ProjectSectionHeading>
              <ProjectSectionText>
                Taskr is a comprehensive marketplace platform that connects service providers with customers 
                in a seamless, secure environment. Built with Flutter for cross-platform functionality, the 
                application features real-time service matching, integrated payment processing (supporting 
                both global and local payment methods), and a reputation system designed to foster trust.
              </ProjectSectionText>
              <ProjectSectionText>
                The platform was designed with a mobile-first approach to accommodate the predominant mobile 
                usage patterns in target markets, while ensuring a responsive experience across all devices. 
                Deep localization features address the unique needs of each market, including currency handling, 
                language options, and region-specific service categories.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectSectionHeading>Technical implementation</ProjectSectionHeading>
              <ProjectSectionText>
                Taskr was built using a modern tech stack featuring Flutter for the frontend and Node.js for 
                the backend. The application leverages Firebase for real-time database capabilities, authentication, 
                and cloud functions.
              </ProjectSectionText>
              <ProjectSectionText>
                Key features of the implementation include:
              </ProjectSectionText>
              <ul>
                <li>Custom state management system for efficient UI updates</li>
                <li>Secure multi-provider payment integration (Stripe/Paystack)</li>
                <li>Real-time messaging system with end-to-end encryption</li>
                <li>Geolocation-based service matching algorithm</li>
                <li>Offline capabilities for unstable network environments</li>
                <li>Scalable cloud architecture supporting thousands of concurrent users</li>
              </ul>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectSectionHeading>Outcomes & impact</ProjectSectionHeading>
              <ProjectSectionText>
                Since its launch, Taskr has successfully facilitated over 5,000 service transactions 
                across Nigeria, the United States, and the United Kingdom. The platform has enabled 
                more than 500 service providers to establish sustainable income streams, with many 
                reporting 30%+ increases in their client base.
              </ProjectSectionText>
              <ProjectSectionText>
                The marketplace has proved particularly valuable for cross-border service offerings, 
                allowing providers in Nigeria to access international markets while navigating the 
                complexities of global payments and customer acquisition. The reputation system has 
                achieved a 92% satisfaction rate among users, significantly higher than local 
                alternatives.
              </ProjectSectionText>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Future developments</ProjectSectionHeading>
              <ProjectSectionText>
                The roadmap for Taskr includes expanding to additional markets across Africa and 
                Southeast Asia, introducing an AI-powered service matching system, and developing 
                specialized tools for service providers to manage their operations more efficiently. 
                We're also exploring blockchain-based verification systems to further strengthen 
                trust and security on the platform.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
}; 
