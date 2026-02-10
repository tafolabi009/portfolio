import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageRtosLarge from '~/assets/tosin-rtos-large.jpg';
import imageRtosPlaceholder from '~/assets/tosin-rtos-placeholder.jpg';
import imageRtos from '~/assets/tosin-rtos.jpg';
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
import styles from './tosin-rtos.module.css';

const title = 'tosin_rtos — Real-Time Operating System';
const description =
  'A complete from-scratch RTOS for x86 with custom bootloader, preemptive multitasking, 16-priority scheduler, best-fit heap allocator, IPC primitives, and interactive shell — all in ~20KB and ~4,050 lines of C and x86 Assembly.';
const roles = [
  'OS Kernel Developer',
  'Bootloader Engineer',
  'Systems Architect',
  'Assembly Programmer',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const TosinRtos = () => {
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
          url="https://github.com/tafolabi009/tosin_rtos"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={`${imageRtos} 1280w, ${imageRtosLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={imageRtosPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="tosin_rtos terminal showing shell commands and kernel diagnostics"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Why build an OS from scratch?</ProjectSectionHeading>
            <ProjectSectionText>
              To truly understand systems engineering, you have to go all the way down. 
              tosin_rtos started as a deep dive into how hardware and software meet — 
              from the very first instruction the CPU executes after power-on to a fully 
              interactive shell running user processes. No libraries, no OS calls, no 
              safety nets — just raw metal, registers, and memory.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectSectionHeading>Bootloader & kernel</ProjectSectionHeading>
              <ProjectSectionText>
                The system starts with a custom 512-byte MBR bootloader written in x86 
                Assembly (NASM) that transitions the CPU from 16-bit real mode to 32-bit 
                protected mode, sets up the GDT, and loads the kernel from disk.
              </ProjectSectionText>
              <ProjectSectionText>
                The kernel implements preemptive round-robin scheduling across 16 priority 
                levels with context switching completing in approximately 100 CPU cycles 
                (~0.1μs at 1GHz). Scheduler overhead stays below 1% at 100Hz tick rate. 
                The entire kernel fits in roughly 20KB.
              </ProjectSectionText>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectSectionHeading>Memory & IPC</ProjectSectionHeading>
              <ProjectSectionText>
                Memory management uses a best-fit heap allocator with block splitting and 
                coalescing to minimize fragmentation. The allocator tracks free blocks 
                efficiently and reclaims memory deterministically.
              </ProjectSectionText>
              <ProjectSectionText>
                Inter-process communication is built on counting semaphores with timeout 
                support and circular buffer message queues — all O(1) operations. Processes 
                can synchronize and exchange data without spinning or polling.
              </ProjectSectionText>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Interactive shell & drivers</ProjectSectionHeading>
              <ProjectSectionText>
                The built-in shell provides commands including ps (process listing), meminfo 
                (heap diagnostics), uname (system info), test (benchmark suite), echo, clear, 
                and help. All output goes through a custom VGA text mode driver (80×25) with 
                a full printf implementation and PS/2 keyboard input handler.
              </ProjectSectionText>
              <ProjectSectionText>
                The entire system comprises ~4,050 lines of code across 27 files — C for the 
                kernel logic and x86 Assembly (NASM) for the bootloader and low-level CPU 
                operations. It boots and runs in QEMU, demonstrating real preemptive 
                multitasking on bare x86 hardware.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
