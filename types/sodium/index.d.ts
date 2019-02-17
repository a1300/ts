// Type definitions for sodium 2.0.3
// Project: https://github.com/paixaop/node-sodium
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare module 'sodium' {

  interface KeyPair {
    publicKey: Buffer;
    secretKey: Buffer;
  }

  interface API {
    crypto_sign_seed_keypair: (hash: Buffer) => KeyPair;
    crypto_sign_detached: (hash: Buffer, privateKey: Buffer) => Buffer;
    crypto_sign_verify_detached: (hash: Buffer, signature: Buffer, publicKey: Buffer) => boolean;
  }

  export const api: API;

}

