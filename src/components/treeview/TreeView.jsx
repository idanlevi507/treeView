import './treeview.css';
import React, { useState } from 'react';
import FileItem from './FileItem';
import { FolderAddIcon, FolderRemoveIcon } from '@heroicons/react/outline'


const TreeView = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const {
        data = props,
        nodeLabel = data.name,
        children = data.children,
        ...rest
    } = props;

    let arrowClassName = 'tree-view_arrow';
    let containerClassName = 'tree-view_children';
    if (collapsed) {
        arrowClassName += ' tree-view_arrow-collapsed';
        containerClassName += ' tree-view_children collapsed';
    }

    const arrow = (
        <div
            {...rest}
            className={'tree-view ' + arrowClassName}
            onClick={()=>setCollapsed(!collapsed)}
        >
            {collapsed ? <FolderAddIcon /> : <FolderRemoveIcon />}
        </div>
    );

    return (
        <div className={'tree-view'}>
            <div className={'tree-view_item'}>
                {arrow}
                {nodeLabel}
            </div>
            <div className={containerClassName}>
                {children.map((_data) => {
                    if (_data.type == 'directory') {
                        return <TreeView data={_data} />
                    } else {
                        return <FileItem name={_data.name} />
                    }
                })}
            </div>
        </div>
    );
}

export default TreeView;