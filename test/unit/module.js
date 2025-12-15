import { beforeEach, describe, expect, it } from 'vitest';
import { connect, disconnect, isSupported } from '../../src/module';

describe('module', () => {
    describe('connect()', () => {
        it('should connect a port', () => {
            return connect().then((port) => {
                expect(port).to.be.an.instanceOf(MessagePort);
            });
        });
    });

    describe('deregister()', ({ skip }) => {
        skip();
        // @todo
    });

    describe('disconnect()', () => {
        let port;

        beforeEach(() => connect().then((prt) => (port = prt)));

        it('should disconnect a port', () => {
            return disconnect(port);
        });
    });

    describe('encode()', ({ skip }) => {
        skip();
        // @todo
    });

    describe('instantiate()', ({ skip }) => {
        skip();
        // @todo
    });

    describe('isSupported()', () => {
        it('should check the browser support', () => {
            return isSupported();
        });
    });

    describe('register()', ({ skip }) => {
        skip();
        // @todo
    });
});
