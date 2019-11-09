import {expect} from "chai"

import MessageRepository from "../src/js/MessageRepository";

describe('MessageRepository', () => {
    describe('getMessage', () => {
        it('requests GET /api/message', () => {
            let actualUrl;
            const spyFetch = (url) => {
                actualUrl = url;
                return Promise.resolve({
                    json: () => Promise.resolve({message: ''})
                })
            };

            const repository = new MessageRepository(spyFetch);

            repository.getMessage();

            expect(actualUrl).to.equal('/api/message');
        });

        it('gets JSON from response', (done) => {
            const stubFetch = () => {
                return Promise.resolve({
                    json: () => {
                        return Promise.resolve({message: 'Hello, World'})
                    }
                })
            };

            const repository = new MessageRepository(stubFetch);


            setImmediate(() => {
                repository.getMessage().then(message => {
                    expect(message).to.equal('Hello, World');

                    done();
                });
            })
        });
    });
});