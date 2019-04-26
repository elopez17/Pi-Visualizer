# Pi-Visualizer
---
### Background and Overview
The idea for this project is inspired by Martin Krzywinski's artwork which aims to visually represent significant mathematical numbers.
This project will focus on the number Pi, which will attempt to create a visual representation by using a circle to represent numbers 0-9 then graphing lines within the circle from one number to the next based off of the sequence of numbers in Pi.

### Functionality and MVP Features
* User can press start to begin rendering
* Once the rendering has begun
  * lines will be drawn one after another based off the current number to next number
  * numbers that have been plotted on the canvas will be displayed below the canvas
  * the current number and next number that is being plotted on canvas will be emphasized
* User can decide how many digits of Pi to visually represent
* User can skip drawing process to reach final result quickly
* Lines will be color coded
### Architecture and Technologies
* Canvas
  * An HTML element used to draw graphics using JavaScript
* Vanilla JavaScript
  * For DOM manipulations and graphics logic
### Implementation Timeline
##### Day 1:
- [x] Setup file tree structure
- [x] learn how to use canvas
- [x] implement form for user inputs
- [x] add start button
- [x] display numbers one by one 
- [x] add emphasis to current number
##### Day 2:
- [x] draw circle graph
- [x] draw lines based on current number and next number
##### Day 3:
- [x] curve lines
##### Day 4:
- [x] sort mid points of each segment in an array
- [x] position lines according to the digits index in the entire number
##### Day 5:
- [x] display each number next to given base segment
- [x] add functionality to sideform
- [x] Host Live
- [x] debugging and final styling
