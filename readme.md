# Technical Test 
The theme of this test is the game of go.

The goal is to write a function that determines whether the stone at an x, y position on a goban is taken or not.

Vocabulary: 

- Goban: the board on which stones are placed to play 
- Shape: a group of one or more adjacent stones of the same color (adjacent: stones that are left, right, top, bottom of each other, diagonals do not count) 
- Freedom: empty space adjacent to a shape

Reminder of the rules: 
- The goban has an indefinite size 
- There are two players and everyone plays a stone color: black or white 
- The stones are laid one after the other each turn - When a form has no more freedom it is taken

The objective of the test is to write an is_taken function which takes in parameter x, y and which returns true if the stone with the position x,y is taken there and false otherwise. To do this function we use a function get_status (x, y) which returns: 

- Status.BLACK: when the stone at position x, y is black #
- Status.WHITE: when the stone at the x position, y is white 
- Status.EMPTY: when there is no stone at position x, y
- Status.OUT: when the position x, y is out of the goban

Write the is_taken with your favorite language. This one must respect the good practices of the chosen language. You will test your solution too. 

Examples: 

``` 
# = black
o = white 
. = empty

... 
# o # <= o is not taken because she has a freedom over 
. #.

o # <= o is taken because she has no freedom (the top and the left are out of the goban so they are not freedoms) 
#.

oo. 
## o <= the form # is taken because it has no freedom 
o o # 
.o.

oo. 
##. <= the form # is not taken because it has a freedom in x = 2, y = 1 (0, 0 on the top left) 
o o # 
.o. 

```

Python starting implementation 

```python 
import enum 

class Status(enum.Enum): 
  """ 
  Enum representing the Status of a position on a goban 
  """ 
  WHITE = 1 
  BLACK = 2 
  EMPTY = 3 
  OUT = 4

class Goban(object): 
  def __init__(self, goban): 
    self.goban = goban 
    
  def get_status(self, x, y):
     """ 
     Get the status of a given position Args: x: the x coordinate y: the y coordinate Returns: a Status 
     """ 
     if ( not self.goban or x < 0 or y < 0 or y >= len(self.goban) or x >= len(self.goban[0]) ): 
      return Status.OUT 
     elif self.goban[y][x] == ".": return Status.EMPTY 
     elif self.goban[y][x] == "o": return Status.WHITE 
     elif self.goban[y][x] == "#": return Status.BLACK 
     
  def is_taken(self, x, y): 
    pass 

```# goban
