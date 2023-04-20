import React, { lazy, Suspense } from 'react';

const LazyInstructionPane = lazy(() => import('./InstructionPane'));

const InstructionPane = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyInstructionPane {...props} />
  </Suspense>
);

export default InstructionPane;
