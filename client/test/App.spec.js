import React from 'react';
import {expect} from "chai"
import {shallow} from 'enzyme';

import App from "../src/js/App";

describe('App', () => {
    describe('on load', () => {
        it('gets JSON with message from repository', (done) => {
            const stubMessageRepository = {
                getMessage: () => {
                    return Promise.resolve('Hello, World');
                }
            };

            const wrapper = shallow(<App messageRepository={stubMessageRepository}/>);

            setImmediate(() => {
                expect(wrapper.text()).contains('Hello, World');

                done();
            })
        })
    });
});