import React, { ComponentType, SFC  } from 'react';
import styled from 'styled-components';
import { TreeView } from '..';
import { Caret } from '../../caret';

const NodeWrapper = styled.div`
  position: relative;
  user-select: none;
  &:hover {
    background-color: #efefef;
  }
`;

const ListItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export interface TreeNodeProps {
  namespace: string[];
  id: string;
  parentId?: string;
  depth: number;
  data: any;
  Content: ComponentType<{ data: any }>;
  expanded?: boolean;
  childIds?: string[];
  toggle: (namespace: string[], nodeId: string, expanded: boolean) => any;
}

export const TreeNode: SFC<TreeNodeProps> = ({
  namespace, id, parentId, depth, data, Content, expanded, childIds, toggle
}) => {
  const CaretWrapper = styled.div`
    position: absolute;
    left: ${depth * 12 + 6 + 'px'};
    height: 100%;
    cursor: pointer;
  `;

  const StyledContent = styled(Content as any) `
    padding: 6px 0;
    padding-left: ${depth * 12 + 24 + 'px'};
  `;

  const renderNode = () => (
    <NodeWrapper>
      <CaretWrapper>
        {childIds && <Caret onClick={() => toggle(namespace, id, expanded)} expanded={expanded} />}
      </CaretWrapper>
      <StyledContent data={data} />
    </NodeWrapper>
  );

  return (
    <ListItem>
      {renderNode()}
      {childIds && expanded &&
        <TreeView
          namespace={namespace}
          parentId={id}
          depth={depth + 1}
          nodeIds={childIds}
          NodeContent={Content}
        />
      }
    </ListItem>
  );
};
