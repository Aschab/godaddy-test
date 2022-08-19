INTRODUCTION
------------
This is a solution to the problem for godaddy at :

[link to the problem](GodaddyCodeChallenge.pdf)

How to run
------------
Go daddy Test for Dynamic Programming: Good Sequence.

To run simply execute
`node godaddy.js < nameOfTest`

For example:
`node godaddy.js < test.godaddy.1.txt`

It will print the final result.
You can add new tests or modify the existing ones.

Proof of the successfull runs with the current tests:
![Proof](https://github.com/Aschab/godaddy-test/blob/main/proof.png)

Apart from the 3 tests given on the PDF challenge I added 3 extra ones with interesting cases:

case 4:

The optimal solution is to add 1 to each tower on reverse

case 5:

The optimal solution is to add twice to the second to last tower instead of going in reverse

case 6:

Two optimal solutions, adding one to all the even or all the odd ones.
