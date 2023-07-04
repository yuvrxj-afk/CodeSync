import React, { useEffect, useRef } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/material-ocean.css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/lib/codemirror.css';
import ACTIONS from '../actions';

const Editor = ({ socketRef, roomId }) => {
  const editorRef = useRef(null);
  useEffect(() => {
    async function init() {
      editorRef.current = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
        mode: { name: 'javascript', json: true },
        theme: 'material-ocean',
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      })
      editorRef.current.on('change', (instance, changes) => {
        // console.log('changes', changes);
        const { origin } = changes;
        const code = instance.getValue();
        if (origin !== 'setValue') {

          socketRef.current.emit(ACTIONS.CODE_CHANGE, {
            roomId,
            code,
          })
        }
        // console.log('code', code);
      })

      // editorRef.current.setValue(`console.log('Hello World');`)
    };


    init();
  }, []);


  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          editorRef.current.setValue(code);
        }
      })
    }
  }, [socketRef.current])

  return <textarea id="codeEditor"></textarea>;
};

export default Editor;
