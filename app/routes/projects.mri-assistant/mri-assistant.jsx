import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageMriLarge from '~/assets/mri-assistant-new-large.jpg';
import imageMriPlaceholder from '~/assets/mri-assistant-new-placeholder.jpg';
import imageMri from '~/assets/mri-assistant-new.jpg';
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
import styles from './mri-assistant.module.css';

const title = 'ML-based MRI Assistant';
const description =
  'Developed a machine learning solution for rural diagnostics, enhancing healthcare access in underserved regions by providing automated analysis of MRI scans.';
const roles = [
  'Machine Learning Engineer',
  'Software Developer',
  'UI/UX Design',
  'Healthcare Integration',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const MRIAssistant = () => {
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
          url="https://genovotech.com/mri-assistant"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={`${imageMri} 1280w, ${imageMriLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={imageMriPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="MRI Assistant application interface showing brain scan analysis and diagnostic report"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              In many rural and underserved regions, access to specialized radiologists is limited, 
              resulting in delayed diagnoses and treatment for patients requiring MRI analysis. 
              The shortage of qualified medical professionals in these areas leads to bottlenecks in 
              healthcare delivery, potentially worsening patient outcomes and increasing healthcare disparities.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The solution</ProjectSectionHeading>
              <ProjectSectionText>
                The MRI Assistant uses advanced machine learning algorithms to analyze MRI scans and 
                provide preliminary diagnostics to healthcare providers. By combining convolutional neural networks 
                (CNNs) with traditional image processing techniques, the system can identify anomalies 
                in brain, spine, and joint MRIs with high accuracy.
              </ProjectSectionText>
              <ProjectSectionText>
                The platform was designed with a user-friendly interface that allows healthcare workers 
                with minimal specialized training to upload scans and receive automated analysis within minutes. 
                The system highlights potential areas of concern and provides probability scores for various 
                conditions, serving as a valuable decision support tool for medical professionals.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectSectionHeading>Technical implementation</ProjectSectionHeading>
              <ProjectSectionText>
                The MRI Assistant was built using a Python backend with TensorFlow and PyTorch for the 
                machine learning components. The model was trained on a dataset of over 10,000 annotated 
                MRI scans, representing various conditions and anatomical regions.
              </ProjectSectionText>
              <ProjectSectionText>
                Key features of the implementation include:
              </ProjectSectionText>
              <ul>
                <li>Transfer learning from pre-trained medical imaging models</li>
                <li>Region-specific segmentation and analysis</li>
                <li>Automated report generation with visualization of findings</li>
                <li>HIPAA-compliant data handling and encryption</li>
                <li>Low-bandwidth operation for areas with limited internet connectivity</li>
              </ul>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectSectionHeading>Outcomes & impact</ProjectSectionHeading>
              <ProjectSectionText>
                The MRI Assistant has been deployed in five rural clinics across underserved regions,
                providing support for healthcare workers and improving diagnostic capabilities. Initial
                results show that the system achieves 87% accuracy in identifying abnormalities, with
                a false positive rate of less than 8%.
              </ProjectSectionText>
              <ProjectSectionText>
                This implementation has reduced the average wait time for MRI analysis from 14 days to
                less than 24 hours in pilot locations, potentially improving patient outcomes through
                earlier intervention and treatment planning.
              </ProjectSectionText>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Future developments</ProjectSectionHeading>
              <ProjectSectionText>
                The next phase of the MRI Assistant project includes expanding the model to cover additional
                scan types (CT, X-ray, ultrasound) and developing an offline-capable version for areas with
                intermittent internet access. We're also working on incorporating automated follow-up
                recommendations and treatment planning assistance based on detected conditions.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
}; 
