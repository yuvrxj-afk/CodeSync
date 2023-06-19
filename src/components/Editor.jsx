import React, { useEffect, useRef } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/material-ocean.css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/lib/codemirror.css';

const Editor = () => {
  const textareaRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    const options = {
      mode: { name: 'javascript', json: true },
      theme: 'material-ocean',
      autoCloseTags: true,
      autoCloseBrackets: true,
      lineNumbers: true,
    };
    editorRef.current = CodeMirror.fromTextArea(textarea, options);

    return () => {
      editorRef.current.toTextArea(); // Cleanup CodeMirror instance when component unmounts
    };
  }, []);

  return <textarea ref={textareaRef}></textarea>;
};

export default Editor;
