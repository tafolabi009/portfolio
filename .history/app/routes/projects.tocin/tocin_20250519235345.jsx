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
import styles from './tocin.module.css';

const title = 'Tocin Programming Language';
const description =
  'LLVM-based Python-like programming language designed for educational purposes and system programming. Features modern syntax with low-level capabilities.';
const roles = [
  'Language Designer',
  'Compiler Developer',
  'Documentation Author',
  'Community Lead',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Tocin = () => {
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
          url="https://github.com/tafolabi009/tocin"
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
              alt="Tocin programming language code example in a code editor"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Modern programming languages often present a steep learning curve for beginners, while 
              simultaneously lacking the low-level control required for system programming. Python offers 
              excellent readability but falls short for performance-critical applications, while C/C++ 
              provides performance at the cost of safety and readability. Additionally, there's a gap in 
              languages specifically designed for educational contexts that can scale from teaching basic 
              programming concepts to advanced system-level programming.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The solution</ProjectSectionHeading>
              <ProjectSectionText>
                Tocin is a programming language designed to bridge this gap by combining Python-like syntax 
                and readability with LLVM-based compilation for performance. The language provides gradual 
                typing, memory safety guarantees, and intuitive syntax for beginners, while offering escape 
                hatches for systems programming when required.
              </ProjectSectionText>
              <ProjectSectionText>
                Key language features include automatic memory management with optional manual control, a 
                comprehensive standard library, first-class functions and pattern matching, and excellent 
                interoperability with C libraries. The compiler produces optimized native code via LLVM, 
                allowing Tocin programs to achieve near-C performance while maintaining a more approachable 
                syntax.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectSectionHeading>Technical implementation</ProjectSectionHeading>
              <ProjectSectionText>
                The Tocin language implementation consists of a custom lexer, parser, semantic analyzer, 
                and LLVM-based code generator. The compiler is written in C++ with extensive use of modern 
                language features, and supports cross-platform compilation for Linux, macOS, and Windows.
              </ProjectSectionText>
              <ProjectSectionText>
                Key components of the implementation include:
              </ProjectSectionText>
              <ul>
                <li>Recursive descent parser with comprehensive error recovery</li>
                <li>Advanced type inference system with gradual typing</li>
                <li>Memory-safe runtime with region-based allocation</li>
                <li>Zero-cost abstractions for high-level constructs</li>
                <li>Integrated package manager and build system</li>
                <li>LLVM-based backend producing optimized native code</li>
              </ul>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectSectionHeading>Outcomes & impact</ProjectSectionHeading>
              <ProjectSectionText>
                Since its initial release, Tocin has been adopted by several educational institutions 
                as a teaching language, helping students transition from basic programming concepts to 
                systems-level understanding. The language has also found use in certain performance-critical 
                domains, particularly in embedded systems and data processing applications.
              </ProjectSectionText>
              <ProjectSectionText>
                The open-source Tocin community has grown to include contributors from various backgrounds, 
                contributing to language features, documentation, and standard library implementations. 
                Several educational resources have been developed around the language, including interactive 
                tutorials, comprehensive documentation, and programming challenges specifically designed for 
                learning Tocin.
              </ProjectSectionText>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Future developments</ProjectSectionHeading>
              <ProjectSectionText>
                The roadmap for Tocin includes enhancing concurrency support with a task-based async model, 
                implementing more advanced compilation optimizations, and expanding the standard library 
                with additional modules for web development, scientific computing, and systems programming. 
                We're also developing interactive development environments and better debugging tools to 
                make the language even more accessible to beginners while maintaining its power for advanced 
                users.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
}; 
