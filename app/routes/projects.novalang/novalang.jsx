import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageNovalangLarge from '~/assets/novalang-large.jpg';
import imageNovalangPlaceholder from '~/assets/novalang-placeholder.jpg';
import imageNovalang from '~/assets/novalang.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { useTheme } from '~/components/theme-provider';
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
import styles from './novalang.module.css';

const title = 'NovaLang — Next-Gen Systems Language';
const description =
  'A modern systems programming language combining C++ performance, Python ergonomics, and Rust safety. Features hybrid memory management (GC/manual/arena), built-in ML support with @differentiable, async/await with actors, and LLVM-backed codegen.';
const roles = [
  'Language Designer',
  'Compiler Engineer',
  'LLVM Backend Developer',
  'Runtime Architect',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const NovaLang = () => {
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
          url="https://github.com/tafolabi009/NovaLang"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={`${imageNovalang} 1280w, ${imageNovalangLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={imageNovalangPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="NovaLang code editor showing syntax with compiler pipeline visualization"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The vision</ProjectSectionHeading>
            <ProjectSectionText>
              Every major systems language forces painful trade-offs. C++ offers raw performance 
              but its syntax is hostile and memory management error-prone. Rust provides safety 
              but has a steep learning curve and rigid ownership rules. Python is ergonomic but 
              fundamentally too slow for systems work. NovaLang (.nv) is designed to unite all 
              three: the performance ceiling of C++, the developer experience of Python, and the 
              memory safety guarantees of Rust — without the baggage of any.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectSectionHeading>Hybrid memory management</ProjectSectionHeading>
              <ProjectSectionText>
                NovaLang's most distinctive feature is per-module memory strategy selection 
                via the @memory annotation. Developers choose between garbage collection, 
                manual management, arena allocation, or linear types — matching memory 
                strategy to domain requirements rather than fighting a one-size-fits-all model.
              </ProjectSectionText>
              <ProjectSectionText>
                A high-throughput network service might use arena allocation for request 
                processing, while a data science module uses GC for convenience, and a 
                kernel driver uses manual management for deterministic cleanup — all in the 
                same project.
              </ProjectSectionText>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectSectionHeading>Built-in ML primitives</ProjectSectionHeading>
              <ProjectSectionText>
                NovaLang includes first-class tensor types and the @differentiable annotation 
                for automatic differentiation — no external frameworks needed for basic ML 
                workloads. This makes it possible to embed gradient-based optimization directly 
                into systems code.
              </ProjectSectionText>
              <ProjectSectionText>
                Combined with async/await backed by an actor model with channels, compile-time 
                metaprogramming (comptime), algebraic types with pattern matching, and classes 
                with interfaces, the language provides a cohesive feature set for modern systems 
                development.
              </ProjectSectionText>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Compiler pipeline</ProjectSectionHeading>
              <ProjectSectionText>
                The compiler follows a classic multi-stage pipeline: Lexer → Parser → AST → 
                Type Checker → MIR (Mid-level IR) → LLVM IR → Native code or WebAssembly. 
                Built in C++20 with CMake, it uses LLVM 14+ for backend codegen and NASM for 
                assembly components. The lexer, parser, AST infrastructure, and type system are 
                complete, with LLVM codegen and runtime actively in development.
              </ProjectSectionText>
              <ProjectSectionText>
                A built-in REPL with AST/token display toggles enables interactive development 
                and language exploration. The language supports both modern syntax (def, class, 
                var) and legacy keywords (fn, struct, mut, trait, impl) for developer familiarity, 
                drawing inspiration from Rust, Go, Python, Swift, and Julia.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
