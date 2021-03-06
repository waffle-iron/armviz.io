import React, { ComponentType, SFC } from 'react';
import styled from 'styled-components';
import { TreeNode } from './tree-node';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export interface TreeViewProps {
  namespace: string[];
  parentId?: string;
  depth?: number;
  nodeIds: string[];
  NodeContent: ComponentType<{ data: any }>;
}

export const TreeView: SFC<TreeViewProps> = ({ namespace, parentId, depth, nodeIds, NodeContent }) => (
  <List>
    {nodeIds.map(nodeId => (
      <TreeNode
        key={nodeId}
        id={nodeId}
        parentId={parentId}
        depth={depth ? depth : 0}
        namespace={namespace}
        Content={NodeContent}
      />
    ))}
  </List>
);
