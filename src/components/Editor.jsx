import React, { useEffect } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/material-ocean.css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/lib/codemirror.css';

const Editor = () => {

  useEffect(() => {
    async function init() {
      CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
        mode: { name: 'javascript', json: true },
        theme: 'material-ocean',
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      })
    };

    init();
  }, []);

  return <textarea id="codeEditor"></textarea>;
};

export default Editor;
