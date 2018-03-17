import $ from 'jquery';

import Prompt from './prompt';
import prompt_container_str from './prompt_container.html';
import './prompt_container.scss';

let prompt_container = $(prompt_container_str);
let prompt = new Prompt();
prompt.appendTo(prompt_container.find('#right_panel'));

export default {
    appendTo: e => prompt_container.appendTo(e),
    prompt: (text, type) => prompt.prompt(text, type)
};
