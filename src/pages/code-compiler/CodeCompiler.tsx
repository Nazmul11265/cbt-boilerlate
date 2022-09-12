/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { languageOptions } from "../../data/languages";
import "./CodeCompiler.scss";
import axiosInstance from "../../utils/axios";
import {Buffer} from 'buffer';

const CodeCompiler = () => {
    const [language, setLanguage] = useState("javascript");
    const [code, setCode] = useState("");
    const [output, setOutput] = useState();

    const changeLanguage = (event: any) => {
        setLanguage(event.target.value);
    }
    const handleEditorChange = (value: any) => {
        console.log(value);
        setCode(value);
    }
    const codeSubmit = async() => {
        const data:any = {
            language: language,
            sourceCode:Buffer.from(code).toString('base64')
        }; 
        console.log(data);
        const res = await axiosInstance.post('/run',data);
        console.log(res);
        if(res.status === 200) {
            setOutput(res.data.message)
        }
        
    }
    return (
        <div className="main-div">
            <select className="main-div__language-dropdown" onChange={changeLanguage}>
                <option>Select a language</option>
                {languageOptions.map((item: any, index: any) => {
                    return (
                        <option value={item.value} key={index}>{item.name}</option>
                    )
                })}
            </select>
            <div className="main-div__content">
                <div>
                    <Editor
                        width="1000px"
                        height="600px"
                        language={language}
                        defaultValue="// write your code here"
                        onChange={handleEditorChange}
                    />
                    <button className="main-div__code-submit-btn" onClick={codeSubmit}>
                        Submit your code
                    </button>
                </div>
                <div>
                    <p className="main-div__output-text">Output:</p>
                    <div className="main-div__output-content">
                        {output}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CodeCompiler;