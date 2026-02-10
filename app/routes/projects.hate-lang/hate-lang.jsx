import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageHateLarge from '~/assets/hate-lang-large.jpg';
import imageHatePlaceholder from '~/assets/hate-lang-placeholder.jpg';
import imageHate from '~/assets/hate-lang.jpg';
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
import styles from './hate-lang.module.css';

const title = 'Hate — A Blazingly Fast Language';
const description =
  'A complete programming language built in Rust featuring a register-based VM with NaN-boxing, V8-style hidden classes, generational GC, and a full toolchain: REPL, compiler, formatter, linter, LSP, debugger, package manager, and WebAssembly target (~500KB).';
const roles = [
  'Language Designer',
  'VM Engineer',
  'Toolchain Developer',
  'Rust Systems Programmer',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const HateLang = () => {
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
          url="https://github.com/tafolabi009/hate"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={`${imageHate} 1280w, ${imageHateLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={imageHatePlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Hate programming language code sample with toolchain overview"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Motivation</ProjectSectionHeading>
            <ProjectSectionText>
              Most language projects stop at a parser and a tree-walk interpreter. Hate was 
              built to answer a different question: what does it take to ship a complete 
              programming language — not just the language itself, but every tool a developer 
              needs to be productive? From REPL to debugger, from package manager to LSP, 
              from formatter to WebAssembly compilation — all implemented in Rust, all fast.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectSectionHeading>VM architecture</ProjectSectionHeading>
              <ProjectSectionText>
                The language runs on a register-based bytecode VM with 60+ opcodes and NaN-boxed 
                value representation — fitting every value (numbers, booleans, objects, nil) 
                into exactly 8 bytes by exploiting the NaN payload space of IEEE 754 doubles.
              </ProjectSectionText>
              <ProjectSectionText>
                Performance is driven by V8-inspired hidden classes with inline caching for 
                property access optimization, and a generational garbage collector with young 
                generation copying and old generation mark-sweep. Bytecode passes include 
                constant folding, dead code elimination, and peephole optimization.
              </ProjectSectionText>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectSectionHeading>Complete toolchain</ProjectSectionHeading>
              <ProjectSectionText>
                The toolchain includes 8 integrated tools: an interactive REPL, ahead-of-time 
                compiler, code formatter, linter with 17 configurable rules, Language Server 
                Protocol (LSP) implementation for editor integration, Debug Adapter Protocol 
                (DAP) debugger, a package manager with semantic versioning, and a WebAssembly 
                compilation target.
              </ProjectSectionText>
              <ProjectSectionText>
                The WASM output is approximately 500KB (~150KB gzipped) and includes JavaScript 
                bridges for Console, DOM, Fetch, Storage, Canvas, and WebSocket APIs — making 
                Hate programs runnable in the browser with full platform access.
              </ProjectSectionText>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Language features</ProjectSectionHeading>
              <ProjectSectionText>
                Hate provides a modern, expressive feature set: first-class functions and 
                closures, pattern matching with guards, async/await, optional types with 
                null-safety operators (?? and ?.), string interpolation, destructuring, and 
                classes with single inheritance. The syntax is clean and familiar — drawing 
                from Rust, TypeScript, and Swift while maintaining its own identity.
              </ProjectSectionText>
              <ProjectSectionText>
                Built entirely in Rust 1.70+ across 20+ source files covering the full compiler 
                pipeline from lexing through codegen. A Windows installer is available via NSIS, 
                and JIT compilation is on the roadmap.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
