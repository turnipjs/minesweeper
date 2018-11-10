(function() {
  let boardEl = $("#board");
  let board;
  let difficulty;
  let height;
  let width;
  let mines;
  let tilesOpen = 0;
  let started = false;
  
  function getTileEl(y, x) {
    return $(`.tile[y=${y}][x=${x}]`)
  }
  
  function donutIterator(y, x) {
    return {
      *[Symbol.iterator]() {
        yield {
          y: y-1,
          x: x-1,
          el: getTileEl(y-1, x-1)
        };
        yield {
          y: y,
          x: x-1,
          el: getTileEl(y, x-1)
        };
        yield {
          y: y+1,
          x: x-1,
          el: getTileEl(y+1, x-1)
        };
        yield {
          y: y-1,
          x: x,
          el: getTileEl(y-1, x)
        };
        yield {
          y: y+1,
          x: x,
          el: getTileEl(y+1, x)
        };
        yield {
          y: y-1,
          x: x+1,
          el: getTileEl(y-1, x+1)
        };
        yield {
          y: y,
          x: x+1,
          el: getTileEl(y, x+1)
        };
        yield {
          y: y+1,
          x: x+1,
          el: getTileEl(y+1, x+1)
        };
      }
    }
  }
  
  function generate(y, x) { // run on first tile opening, x,y must be blank
    // fill board with `mines` mines (using string "mine" as value)
    // choose 1-8 tiles around opening to be 0 as well
    // if there are mines in 3x3 around opening or the other 0s
      // move them elsewhere
    // fill rest of board with numbers as one does
  }
  
  function fillBoard() { // does not give tiles value yet!! that happens after first tile is opened.
    board = CONST.make2DArr(height, width);
    // edit css of boardEl
    // fill grid with `height*width` `div.tile`s with x="a" y="b" in html and order in css (for grid)
  }
  
  function newGame(difficulty, height=CONST.defaults.custom.height, width=CONST.defaults.custom.width, mines=CONST.defaults.custom.mines) {
    // clear board
    // change vars
    // fillBoard()
    tilesOpen = 0;
    started = false;
  }
  
  function endGame(win) {
    // if !win
      // open all 
  }
  
  function done() {
    return tilesOpen == height*width - mines;
  }
  
  function openSurrounding(y, x) {
    for (tile of donutIterator(y, x)) {
      open(tile.y, tile.x, tile.el)
    }
  }
  
  function open(y, x, tile) {
    // add .open to tile
    // if mine
      // insert mine (icon: brightness_7) in tile
      // endGame(false);
    // else
      // insert number in tile
      // tilesOpen++;
      // if board[y][x] == 0
        // openSurrounding(y,x); half of a mutual recursion where it will call open on all of the surrounding tiles
      // if done()
        // endGame(true);
  }
  
  $(".tile").click(function() {
    let y = $(this).attr("y");
    let x = $(this).attr("x");
    if (!started) {
      generate(y, x);
      started = true;
    }
    open(y, x, $(this));
  });
  
  $("#custom-form").submit(function(e) {
    e.preventDefault();
    newGame("custom", $("#height").val(), $("#width").val(), $("#mines").val());
  });
  
  $("#new-game").click(function(e) {
    newGame(difficulty, height, width, mines);
  });
  
  $(".tile").hover(function(e) {
    
  });
  
  $(document).ready(function() {
    newGame(CONST.defaults.difficulty);
  });
})();
