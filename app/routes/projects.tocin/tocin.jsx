import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageTocinLarge from '~/assets/tocin-language-new-large.jpg';
import imageTocinPlaceholder from '~/assets/tocin-language-new-placeholder.jpg';
import imageTocin from '~/assets/tocin-language-new.jpg';
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

const title = 'TosinLang Compiler (Tocin)';
const description =
  'A statically-typed systems programming language targeting LLVM IR with goroutine-style concurrency, NUMA-aware scheduling, and V8 JavaScript integration. Built from scratch with custom Lexer, Parser, and Semantic Analyzer.';
const roles = [
  'Language Designer',
  'Compiler Engineer',
  'LLVM Backend Developer',
  'Systems Architect',
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
              srcSet={`${imageTocin} 1280w, ${imageTocinLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={imageTocinPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Tocin programming language code showcasing work-stealing scheduler and trait-based polymorphism"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Modern systems programming languages force developers to choose between safety and performance,
              or between high-level abstractions and low-level control. Existing languages lack integrated
              concurrency models that scale to millions of lightweight tasks while maintaining NUMA-awareness
              and memory safety. Furthermore, bridging systems programming with JavaScript ecosystems remains
              cumbersome, requiring extensive FFI boilerplate.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The solution</ProjectSectionHeading>
              <ProjectSectionText>
                Tocin is a statically-typed systems programming language that targets LLVM IR, combining
                goroutine-style concurrency with NUMA-aware scheduling and V8 JavaScript integration.
                The language features fiber-based execution with 4KB stacks supporting millions of concurrent
                goroutines, a work-stealing scheduler with 5-level priority queues, and trait-based polymorphism.
              </ProjectSectionText>
              <ProjectSectionText>
                Key language features include comprehensive null safety, LINQ-style collections, automatic
                memory management with optional manual control, and seamless JavaScript interop via V8.
                The compiler produces optimized native code via LLVM 11.0+, achieving near-C performance
                while maintaining expressive, modern syntax.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectSectionHeading>Technical implementation</ProjectSectionHeading>
              <ProjectSectionText>
                The Tocin compiler is implemented in C++17 with extensive use of modern language features.
                The architecture consists of a custom lexer, recursive descent parser, semantic analyzer
                with type inference, and LLVM IR code generator. The runtime includes a sophisticated
                work-stealing scheduler inspired by Go's goroutine model.
              </ProjectSectionText>
              <ProjectSectionText>
                Key components of the implementation include:
              </ProjectSectionText>
              <ul>
                <li>Custom Lexer, Parser, and Semantic Analyzer pipeline</li>
                <li>Fiber-based execution with 4KB stacks (millions of goroutines)</li>
                <li>Work-stealing scheduler with 5-level priority queues</li>
                <li>NUMA-aware memory scheduling for multi-socket systems</li>
                <li>V8 JavaScript engine integration for seamless interop</li>
                <li>Trait-based polymorphism and LINQ-style collections</li>
                <li>LLVM 11.0+ backend producing optimized native code</li>
              </ul>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectSectionHeading>Outcomes & impact</ProjectSectionHeading>
              <ProjectSectionText>
                Building a production compiler from scratch is work typically requiring a senior/staff
                engineer with 8+ years of experience. The project demonstrates deep expertise in compiler
                theory, language design, and systems programming — from lexical analysis through LLVM
                code generation.
              </ProjectSectionText>
              <ProjectSectionText>
                The Tocin compiler serves as both a practical systems programming tool and a demonstration
                of advanced computer science concepts. The concurrent runtime has been benchmarked to
                handle millions of lightweight fibers efficiently, and the NUMA-aware scheduler shows
                significant performance improvements on multi-socket systems.
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
