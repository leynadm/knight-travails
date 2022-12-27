/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function knightMoves(start, end) {\n    // Create a queue for storing the nodes to be visited\n    const queue = [start];\n  \n    // Create a set for storing the visited nodes\n    const visited = new Set();\n  \n    // Create a mapping for storing the previous node for each node\n    const previous = new Map();\n  \n    // While the queue is not empty\n    while (queue.length > 0) {\n      // Dequeue the first node from the queue\n      let current = queue.shift();\n  \n      // If the current node is the end node, we have found the shortest path\n      if (current[0] === end[0] && current[1] === end[1]) {\n        // Create a list for storing the shortest path\n        const path = [];\n  \n        // Starting from the end node, trace back the path by following the previous nodes\n        while (current) {\n          path.unshift(current);\n          current = previous.get(current);\n        }\n  \n        // Return the shortest path\n        console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);\n        console.log(path.join(\"\\n\"));\n        return path;\n      }\n  \n      // Generate the valid moves for the current node\n      const moves = getValidMoves(current, visited);\n  \n      // For each valid move\n      for (const move of moves) {\n        // If the move has not been visited\n        if (!visited.has(move)) {\n          // Mark the move as visited\n          visited.add(move);\n  \n          // Add the move to the queue\n          queue.push(move);\n  \n          // Set the previous node for the move to the current node\n          previous.set(move, current);\n        }\n      }\n    }\n  \n    // If we get here, it means that there is no path from the start node to the end node\n    return null;\n  }\n  \n  function getValidMoves(current, visited) {\n    // Create a list for storing the valid moves\n    const moves = [];\n  \n    // The possible movements of the knight\n    const dx = [-2, -2, -1, -1, 1, 1, 2, 2];\n    const dy = [-1, 1, -2, 2, -2, 2, -1, 1];\n  \n    // For each possible movement\n    for (let i = 0; i < dx.length; i++) {\n      // Calculate the new position of the knight\n      const x = current[0] + dx[i];\n      const y = current[1] + dy[i];\n  \n      // If the new position is within the board and has not been visited\n      if (isValid(x, y, visited)) {\n        // Add the new position to the list of valid moves\n        moves.push([x, y]);\n      }\n    }\n  \n    // Return the valid moves\n    return moves;\n  }\n  \n  function isValid(x, y, visited) {\n    // Check if the position is within the board and has not been visited\n    return x >= 0 && x < 8 && y >= 0 && y < 8 && !visited.has([x, y]);\n  }\n\n  knightMoves([0, 0], [6, 6]);\n\n//# sourceURL=webpack://knight-travails/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;