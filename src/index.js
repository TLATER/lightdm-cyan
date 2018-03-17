import $ from 'jquery';

import './index.scss';
import ui from './ui/prompt_container';

ui.appendTo($('body'));

$(window).on('GreeterReady', () => {
    function start_authentication() {
        // Authenticating without specifying a user appears to be broken
        ui.prompt("Username", "username").then(text => {
            lightdm.authenticate(text);
        });
    }

    lightdm.show_prompt.connect((text, type) => {
        // It appears that 'type' is always null
        if (text === 'Password: ')
            type = 'password';

        ui.prompt(text, type).then(text => lightdm.respond(text));
    });

    lightdm.show_message.connect((text, type) => {
        console.log(`${type}: ${text}`);
    });

    lightdm.authentication_complete.connect(() => {
        // Using the default session appears to be broken
        let session = lightdm.sessions[0];

        if (lightdm.is_authenticated) {
            console.log(`Starting session ${session.name}`);
            lightdm.start_session(session.key);
        } else {
            console.log("Authentication failed.");
            start_authentication();
        }
    });

    start_authentication();
});
