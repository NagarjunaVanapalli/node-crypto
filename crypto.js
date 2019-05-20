'use strict'

// HMAC Encryption

const hmacCrypto = require('crypto');  
const secret = 'Nagarjuna';  
const hmacEncrypted = hmacCrypto.createHmac('sha256', secret).update("HMAC Created . . .").digest('base64');
console.log("HMAC Encrypted: "+hmacEncrypted);

// Cipher Encryption

const cipherCrypto = require('crypto');  
const cipher = cipherCrypto.createCipher('aes192', 'Nag1234');  
var cipherEncrypted = cipher.update('Cipher Created', 'utf8', 'hex');  
cipherEncrypted += cipher.final('hex');  
console.log("Cipher Encrypted:"+cipherEncrypted);   