# _Mr. Roboger's Neighborhood_

***

### A simple webpage designed to take a number from the user and return a range of numbers, from 0 to the user inputted number, with specific substitutions.

<br>

#### By Hayley McVay <https://github.com/hmcvay>

<br>

***
<br>

## Description

_This webpage contains a form to gather a number from the user. The webpage will then display results based on the following criteria:_
- _Numbers that contain a 1: all digits are replaced (all digits) with **"Beep!"**_
- _Numbers that contain a 2: all digits are replaced (all digits) with **"Boop!"**_ 
- _Numbers that contain a 3: all digits are replaced (all digits) with **"Won't you be my neighbor?"**_

_Live site: <https://hmcvay.github.io/code-review-3>_

<br>

***

<br>

## Setup/Installation Requirements

- _Connect to wifi (or hard-wire connection)_
- _Install git via the computer terminal_
- _Use the "cd desktop" command to navigate to the desktop_
- _Go to [this](https://github.com/hmcvay) GitHub account, and select the "code-review-3" repository_
- _Once you have selected the repository, copy the URL_
- _Use the terminal to paste the URL by entering: "git clone 'PASTE URL HERE'" (do not include the " ")_
- _You may now enter the file saved to your desktop, and open the index.html file_

<br>

***

<br>

## Technologies Used

- _Javascript_
- _jQuery_
- _HTML_
- _CSS_

<br>

***

<br>

## Tests
### Describe: beepBoop()

Test: "It should return false if user inputs a non-number."
<br>Code:
<br>**const num = "123abc";**
<br>**beepBoop(num);**
<br>Expected Output: false

<br>

Test: "It should return false if user inputs negative number."
<br>Code:
<br>**const num = "-5";**
<br>**beepBoop(num);**
<br>Expected Output: false

<br>

Test: "It should return string array of range of values within inputted number."
<br>Code:
<br>**const num = "5";**
<br>**beepBoop(num);**
<br>Expected Output: "[0, 1, 2, 3, 4, 5]"

<br>

Test: "If the string array of values includes 3, push 'Won't you be my neighbor' instead of '3'."
<br>Code:
<br>**const num = "5";**
<br>**beepBoop(num);**
<br>Expected Output: "[0, 1, 2, "Won't you be my neighbor?", 4, 5]"

<br>

Test: "If the string array of values includes 2, push 'boop' instead of '2'."
<br>Code:
<br>**const num = "5";**
<br>**beepBoop(num);**
<br>Expected Output: "[0, 1, "boop", 3, 4, 5]"

<br>

Test: "If the string array of values includes 1, push 'beep' instead of '1'."
<br>Code:
<br>**const num = "5";**
<br>**beepBoop(num);**
<br>Expected Output: "[0, "beep", 2, 3, 4, 5]"

<br>

***

<br>

## Known Bugs

- _No known issues yet._
- _Please report any you find._

<br>

***

<br>

## License

[ISC](https://choosealicense.com/licenses/isc)

_For any problems, please file an issue on Github. Pull Requests welcome._

Copyright (c) _2022_ _Hayley McVay_