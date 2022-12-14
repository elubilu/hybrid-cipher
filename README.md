# Hybrid Cipher

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





