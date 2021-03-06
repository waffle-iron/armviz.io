import React, { SFC } from 'react';
import styled from 'styled-components';
import { Caret } from '../caret';

const Title = styled.h1`
  font-size: 14px;
  margin: 0;
  display: inline-block;
`;

const HeaderWrapper = styled.div`
  background-color: #efefef;
  padding: 6px 0;
  user-select: none;
  cursor: pointer;
`;

const CaretWrapper = styled.div`
  display: inline-block;
  padding: 0 6px;
  height: 100%;
`;

export interface CollapseProps {
  namespace: string[];
  id: string;
  title: string;
  isOpen: boolean;
  toggle: (namespace: string[], collapseId: string, expanded: boolean) => any;
}

export const Collapse: SFC<CollapseProps> = ({ namespace, id, title, isOpen, toggle, children }) => (
  <div>
    <HeaderWrapper onClick={() => toggle(namespace, id, isOpen)}>
      <CaretWrapper>
        <Caret expanded={isOpen} />
      </CaretWrapper>
      <Title>
        {title}
      </Title>
    </HeaderWrapper>
    {isOpen && children}
  </div>
);
