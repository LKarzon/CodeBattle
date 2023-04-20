import React, { FC } from 'react';
import { InstructionPaneWrapper } from './InstructionPane.styled';

interface InstructionPaneProps {}

const InstructionPane: FC<InstructionPaneProps> = () => (
 <InstructionPaneWrapper>
    InstructionPane Component
 </InstructionPaneWrapper>
);

export default InstructionPane;
