import './treeview.css';
import React from 'react';
import FileItem from './FileItem';
import { FolderAddIcon, FolderRemoveIcon } from '@heroicons/react/outline'


class TreeView extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(...args) {
        this.setState({ collapsed: !this.state.collapsed });
        if (this.props.onClick) {
            this.props.onClick(...args);
        }
    }

    render() {
        const { data } = this.props
        const {
            collapsed = this.state.collapsed,
            nodeLabel = data.name,
            children = data.children,
            ...rest
        } = this.props;

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
                onClick={this.handleClick}
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
                        console.log('test: ', collapsed);
                        if (_data.type == 'directory') {
                            return <TreeView data={_data} />
                        } else {
                            return <FileItem name={_data.name} />
                        }
                    }
                    )}
                </div>
            </div>
        );
    }
}

export default TreeView;