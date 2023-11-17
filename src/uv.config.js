/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',
    bare: 'https://bare-server-node-1.team-8630464.repl.co/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv.handler.js',
    client: '/uv.client.js',
    bundle: '/uv.bundle.js',
    config: '/uv.config.js',
    sw: '/uv.sw.js',
};
