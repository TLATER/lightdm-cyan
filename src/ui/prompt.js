import $ from 'jquery';
import './prompt.scss';

class Prompt {
    constructor() {
        this.container = $('<div id="prompt"></div>');

        this.label = $('<label for="prompt_input"></label>');

        this.input = $('<input id="prompt_input"></div>');
        this.input.attr('autofocus', 'true');
        this.input.prop('disabled', true);
        this.input.attr('inputmode', 'text');
        this.input.attr('required', 'true');
        this.input.attr('spellcheck', 'false');

        this.container.append(this.label);
        this.container.append(this.input);
    }

    appendTo(e) {
        this.container.appendTo(e);
    }

    prompt(text, type) {
        console.log(`Showing prompt: ${type}: ${text}`);

        return new Promise((resolve, reject) => {
            this.input.attr('placeholder', text.split(':')[0]);

            // It seems that the 'type' is broken
            if (type === 'password')
                this.input.attr('type', 'password');
            else
                this.input.attr('type', 'text');

            // this.container.show();
            this.input.prop('disabled', false);
            this.input.focus();

            this.input.on('keypress.enter', e => {
                if (e.which == 13) {
                    let text = this.input.val();
                    this.input.val("");

                    this.input.off('keypress.enter');
                    this.input.attr('placeholder', '');
                    this.input.prop('disabled', true);

                    resolve(text);
                    return false;
                };
            });
        });
    }
}

export default Prompt;
