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
  * user can decide how many digits of Pi to visually represent
* Lines will be color coded
### Architecture and Technologies
* Canvas
  * An HTML element used to draw graphics using JavaScript
* Vanilla JavaScript
  * For DOM manipulations and graphics logic
### Implementation Timeline
##### Day 1:
- [ ] Setup file tree structure
- [ ] learn how to use canvas
- [ ] implement form for user inputs
- [ ] add start button
- [ ] display numbers one by one 
- [ ] add emphasis to current number
##### Day 2:
- [ ] draw circle graph
- [ ] draw lines based on current number and next number
- [ ] parse the number Pi from a file
- [ ] use the parsed data instead of hard coded number
- [ ] curve lines
##### Day 3:
- [ ] add styling to page
- [ ] Host Live
##### Day 4:
- [ ] consider bonus features such as allowing user input to decide which number to use for visualizer instead of Pi
##### Day 5:
- [ ] debugging and final styling
