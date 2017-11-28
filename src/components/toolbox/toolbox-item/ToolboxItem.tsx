import React, { SFC } from 'react';
import { ConnectDragSource, DragSource, DragSourceCollector, DragSourceSpec } from 'react-dnd';
import { TOOLBOX_ITEM } from '../../../constants';

export interface ToolboxItemProps {
  data: { resourceName: string };
  className: string;
  connectDragSource: ConnectDragSource;
}

const ToolboxItem: SFC<ToolboxItemProps> = ({ data, className, connectDragSource }) => {
  return connectDragSource(
    <div className={className}>
      <span>{data.resourceName}</span>
    </div>
  );
};

const toolboxSource: DragSourceSpec<ToolboxItemProps> = ({
  beginDrag: (props) => props.data
});

const collect: DragSourceCollector = (connect, monitor) => ({
  connectDragSource: connect.dragSource()
});

export default DragSource<ToolboxItemProps>(TOOLBOX_ITEM, toolboxSource, collect)(ToolboxItem);
