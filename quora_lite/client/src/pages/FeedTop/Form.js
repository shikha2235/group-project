import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import CreateIcon from '@mui/icons-material/Create';
import { Avatar, dividerClasses } from '@mui/material';
import styled from 'styled-components';
import './Form.css'
import './Feed_modal'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import Feed_modal from "./Feed_modal";

const Form = () => {

  const [isOpen,setisOpen]=useState(false);
  const [isQues,setisQues]=useState(true);
  const [isPost,setisPost]=useState(false);
   useEffect(() => {
    // Update the document title using the browser API
    setisOpen(false);
    setisQues(true);
    setisPost(false);
  },[]);
  const handleClick=()=>{
      console.log("ques");
      setisQues(true);
      setisPost(false);
      console.log("Q");
      console.log(isQues);
      console.log("P");
      console.log(isPost);
  }
    const handleClick1=()=>{
              console.log("post");

      setisPost(true);
      setisQues(false);
       console.log("Q");
      console.log(isQues);
      console.log("P");
      console.log(isPost);
  }
   const handleClick3=()=>{
    setisOpen(false);
    setisQues(true);
    setisPost(false);
  }

  return (
    <>
      <div className="col1" onClick={()=>setisOpen(true)}>
          <div className="col2">
        <div>
          <Avatar className="ava">SS</Avatar>
        </div>
        <div className="col3">

           Shweta Sinha

        </div>
      </div>
      <div>
           <h2>What do you want to ask or share?</h2>
       </div>
      </div>
      <Feed_modal open={isOpen}  onClose={()=>handleClick3()}>
        <div className="col11">
        <div className="col14">
        <div className="col12">
         <div className="col22">
          <div className="Qicon"><LiveHelpIcon/></div>
          <div className="AddQs" onClick={()=>handleClick()}>Add Question</div>
         </div>
         <div className="col33">
          <div className="Cicon"><CreateIcon/></div>
          <div className="Create" onClick={()=>handleClick1()}>Create Post</div>
         </div>
         </div>
         <hr></hr>
         </div>

        <div className="col44" style={isPost?{display:"none"}:{display:"block"}}>
        <div>
          <Avatar className="ava">SS</Avatar>
        </div>
        <div className="text">
         <textarea

  placeholder="Start your Question with What,Why,How etc.."
  className="feild"
/>
        </div>
        <div className="but">
                <button className="cancel">Cancel</button>

        <button className="Add">Add Question</button>
        </div>
        </div>
        <div className="col44" style={isQues?{display:"none"}:{display:"block"}}>
        <div>
          <Avatar className="ava">SS</Avatar>
        </div>
        <div className="text">

         <textarea
  placeholder="Say Something..."
  className="feild"
/>
        </div>

       <div className="but1">
        <div><PhotoLibraryIcon></PhotoLibraryIcon></div>
        <div><button className="Add">Post</button></div>
        </div>
        </div>
        </div>
      </Feed_modal>


      </>
  );
};
export default Form;
