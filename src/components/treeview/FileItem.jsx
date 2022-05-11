import './treeview.css';
import React from 'react';
import { DocumentTextIcon} from '@heroicons/react/outline'


class FileItem extends React.PureComponent {

  render() {
    const { name } = this.props
    return (
      <div ><DocumentTextIcon className='documentTextIcon' />{name}</div>
    );
  }
}

export default FileItem;