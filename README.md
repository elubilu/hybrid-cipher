[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/elubilu/hybrid-cypher)
[![npm version](https://badge.fury.io/js/password-meter-pro.svg)](https://badge.fury.io/js/hybrid-cipher)
[![Downloads](https://img.shields.io/npm/dm/hybrid-cipher.svg)](https://www.npmjs.com/package/hybrid-cipher)

# Hybrid Cipher
### This is a hybrid encryption and decryption model consist of Vigenere Cipher and Polybius Cipher

## What is the Polybius cipher?

 #### The Polybius cipher, also called Polybius square, is a negotiation cipher using a square grid. Each character of the plain communication is replaced by a couple of equals defining its position in the grid. 

## How to Encrypt using Polybius cipher?
#### Polybius square uses a 8x8 grid filled with letters for encryption.

| \ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| - | - | - | - | - | - | - | - | - |
| 1 | z | e | b | r | a | c | d | f |
| 2 | g | h | i | k | l | m | n | o |
| 3 | p | q | s | t | u | v | w | x |
| 4 | y | j | Z | E | B | R | A | C |
| 5 | D | F | G | H | I | K | L | M |
| 6 | N | O | P | Q | S | T | U | V |
| 7 | W | X | Y | J | [ | \ | ] | ^ |
| 8 | _ | ` | @ | { | \| | } | ~ | z |


#### As the latin alphabet has 52 letters (including samll and capital) and the grid has 64 cells, I have added 12 more sign to make it more versatile. The order of the letters in the grid can be modified using a key to generate a deranged alphabet.

##### The encryption phase is a substitution of each letter by its coordinates (row, column) in the grid.

#### Example: D is located row 5, column 1, so coded 51; c is located row 1, column 6, it is coded 16. The ciphered message `Dcode` is then `5116281712`

## How to Decrypt Polybius cipher?

#### Polybius decryption requires to know the grid and consists in a substitution of couples of coordinates by the corresponding letter in the grid.
#### Example: `57283612`, 57 stands for 5th row, 7th column, so letter `L`, and so on. The plain message is `Love`

## What is the Vigenere cipher?

#### The Vigenère cipher is a method of encrypting alphabetic text by using a series of interwoven Caesar ciphers, based on the letters of a keyword. It employs a form of polyalphabetic substitution

## How to Encrypt using Vigenere cipher?

#### Encryption with Vigenere uses a key made of letters (and an alphabet). There are several ways to achieve the ciphering manually:

#### In order to cipher a text, take the first letter of the message and the first letter of the key, add their ASCII value and  (letters have a value depending on their rank in the alphabet, starting with 0). The result of the addition modulo 128 (128= highest ASCII value) gives the rank of the ciphered letter. 

## How to Decrypt using Vigenere cipher?

#### To decrypt, take the first letter of the ciphertext and the first letter of the key, and subtract their value (letters have a value equal to their position in the alphabet starting from 0). If the result is negative, add 128 (128=highest ASCII value), the result gives the rank of the plain letter.


## Installation

Use the package manager [npm](https://www.npmjs.com/package/hybrid-cipher) to install [Hybrid Cipher](https://www.npmjs.com/package/hybrid-cipher).

```bash
npm i hybrid-cipher

```

## Usage

It's very easy configure on your application. just follow on below: 
For hybridCypherEncryption you need to provide message(which is Alphabet), then the secrete key(which is Alphabet)
For hybridCypherDecryption you need to provide generated key(which is numeric), then the secrete key(which is Alphabet)

```javascript
let app = require("hybrid-cipher");

app.hybridCypherEncryption("encode", "secretekey") # return 726552155573
app.hybridCypherDecryption("726552155573", 'secretekey') # return  encode

app.hybridCypherEncryption("Encode", "secretekey") # return 386552155573
app.hybridCypherDecryption("386552155573", 'secretekey') # return  Encode

app.hybridCypherEncryption("Encode", "Secretekey") # return 726552155573
app.hybridCypherDecryption("726552155573", 'Secretekey') # return  Encode

app.hybridCypherEncryption("HelloWorld", "something") # return 846673641672826571
app.hybridCypherDecryption("846673641672826571", 'something') # return  HelloWorld

```
In such scenario, hacker knows your app generated key(which is numeric), they can't steal your data as it's stored in two layers

```javascript
let app = require("hybrid-cipher");

app.hybridCypherDecryption("726552155573", 'something') # return  edY|Uq  // Here the result is wrong,  it supposed to be 'encode'

app.hybridCypherDecryption("386552155573", 'key') # return  EdY|^t // here the result is wrong, it supposed to be 'Encode'

app.hybridCypherDecryption("846673641672826571", 'Secretekey') # return  hov_~d{hr // here the result is wrong, it supposed to be 'HelloWorld' 

```
In such scenario, hacker knows your app generated key and secrete key  they can't steal your data as we have used two layers of cipher model which are Vigenere Cipher and Polybius Cipher.
The generated key will looks like Vigenere Cipher so they will try to get the data by decrypting this methodology where we have used a new and custom methods for it. 

