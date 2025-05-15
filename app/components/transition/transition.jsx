import { AnimatePresence, motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * A lightweight Framer Motion `AnimatePresence` implementation of
 * `react-transition-group` to be used for simple vanilla css transitions
 */
const defaultTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const defaultVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export const Transition = ({
  children,
  show = true,
  showDelay = 0,
  transition = defaultTransition,
  variants = defaultVariants,
  className,
  ...rest
}) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsReducedMotion(prefersReducedMotion);
  }, [prefersReducedMotion]);

  const adjustedTransition = isReducedMotion
    ? { ...transition, duration: 0 }
    : transition;

  const adjustedVariants = isReducedMotion
    ? {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 1, y: 0 },
      }
    : variants;

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={adjustedVariants}
          transition={adjustedTransition}
          className={className}
          {...rest}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TransitionContent = ({
  children,
  timeout = 0,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  initial,
  nodeRef: defaultNodeRef,
  in: show,
  isReducedMotion,
}) => {
  const [status, setStatus] = useState(initial ? 'exited' : 'entered');
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(initial ? false : true);
  const splitTimeout = typeof timeout === 'object';
  const internalNodeRef = useRef(null);
  const nodeRef = defaultNodeRef || internalNodeRef;
  const visible = hasEntered && show ? isPresent : false;

  useEffect(() => {
    if (hasEntered || !show) return;

    const actualTimeout = isReducedMotion ? 0 : (splitTimeout ? timeout.enter : timeout);

    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);

    setHasEntered(true);
    setStatus('entering');
    onEnter?.();

    if (!isReducedMotion) {
      // Force reflow
      nodeRef.current?.offsetHeight;
    }

    enterTimeout.current = setTimeout(() => {
      setStatus('entered');
      onEntered?.();
    }, actualTimeout);
  }, [show, hasEntered, timeout, splitTimeout, onEnter, onEntered, nodeRef, isReducedMotion]);

  useEffect(() => {
    if (!hasEntered || show) return;

    const actualTimeout = isReducedMotion ? 0 : (splitTimeout ? timeout.exit : timeout);

    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);

    setStatus('exiting');
    onExit?.();

    exitTimeout.current = setTimeout(() => {
      setStatus('exited');
      onExited?.();
      safeToRemove?.();
    }, actualTimeout);
  }, [show, hasEntered, timeout, splitTimeout, onExit, onExited, safeToRemove, isReducedMotion]);

  return (
    <div
      ref={nodeRef}
      data-status={status}
      data-visible={visible}
      style={{
        transition: isReducedMotion ? 'none' : undefined,
      }}
    >
      {children}
    </div>
  );
};
