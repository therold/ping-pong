# _Ping Pong_

#### _A word replacement game, 8/19/2016_

#### By _**Timothy Herold**_

## Description

_This game counts accepts a positive number as input. It counts_
_from 1 to the input number, replacing numbers divisible by_
_3 with "ping" and numbers divisible by 5 with "pong". Numbers_
_divisible by 15 will be replaced with "ping-pong"._

## Setup/Installation Requirements

* _No setup is required._
* _Simply open index.html in a web browser._
* _This page can be viewed on GitHub by [clicking here] (https://therold.github.io/ping-pong/)._

## Specification
* The program should give an error for non-numerical input.
  * **Example Input**: Hello!
  * **Example Output**: Error
* The program should give an error for numerical values less than 1.
  * **Example Input**: -5
  * **Example Output**: Error
* The program should count from 1 to the input number.
  * **Example Input**: 2
  * **Example Output**: [1, 2]
* The program should replace any number divisible by 3 with the word "ping".
  * **Example Input**: 3
  * **Example Output**: [1, 2, ping]
* The program should replace any number divisible by 5 with the word "pong".
  * **Example Input**: 5
  * **Example Output**: [1, 2, ping, 4, pong]
* The program should replace any number divisible by 15 with the word "ping-pong".
  * **Example Input**: 15
  * **Example Output**: [1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, ping-pong]

## Technologies Used

* _HTML/CSS_
* _JavaScript_
* _Bootstrap_
* _jQuery_

### License

*GPL*

Copyright (c) 2016 **_Timothy Herold_**
