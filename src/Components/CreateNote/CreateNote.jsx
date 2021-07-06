import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import Box from '@material-ui/core/Box';
//import './createnote/createnote.scss';
import "./CreateNote.scss";

export  default function CreateNote() {
    return (
        <div className="main_note">
            <div>
                <input className="note-title" type="text" placeholder="Title" />
                {/* <textarea rows="" column="" placeholder="Take a note"></textarea> */}
           
                <Button>
                    <DoneIcon />
                </Button>
           </div>
        </div>
    );
}

