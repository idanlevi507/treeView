import './treeview.css';
import React from 'react';
import { DocumentTextIcon} from '@heroicons/react/outline'


const FileItem= (props)=> {
    return (
      <div ><DocumentTextIcon className='documentTextIcon' />{props.name}</div>
    );
  }

export default FileItem;