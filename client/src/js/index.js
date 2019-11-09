import '../css/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';

import MessageRepository from './MessageRepository';
import App from "./App";

const messageRepository = new MessageRepository(fetch);

ReactDOM.render(
    <App messageRepository={messageRepository}/>,
    document.getElementById('app')
);