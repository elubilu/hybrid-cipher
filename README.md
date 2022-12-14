# Hybrid Cipher

## What is the Polybius cipher?

 #### The Polybius cipher, also called Polybius square, is a negotiation cipher using a square grid. Each character of the plain communication is replaced by a couple of equals defining its position in the grid. 

## How to encrypt using Polybius cipher?
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


#### As the latin alphabet has 26 letters and the grid has 25 cells, a letter to remove is chosen, usually it's J, V, W or Z which are deleted. The order of the letters in the grid can be modified using a key to generate a deranged alphabet.

##### The encryption phase is a substitution of each letter by its coordinates (row, column) in the grid.

#### Example: D is located row 5, column 1, so coded 51; c is located row 1, column 6, it is coded 16. The ciphered message `Dcode` is then `5116281712`

## How to decrypt Polybius cipher?

#### Polybius decryption requires to know the grid and consists in a substitution of couples of coordinates by the corresponding letter in the grid.
#### Example: `57283612`, 57 stands for 5th row, 7th column, so letter `L`, and so on. The plain message is `Love`



