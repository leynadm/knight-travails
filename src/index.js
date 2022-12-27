function knightMoves(start, end) {
    // Create a queue for storing the nodes to be visited
    const queue = [start];
  
    // Create a set for storing the visited nodes
    const visited = new Set();
  
    // Create a mapping for storing the previous node for each node
    const previous = new Map();
  
    // While the queue is not empty
    while (queue.length > 0) {
      // Dequeue the first node from the queue
      let current = queue.shift();
  
      // If the current node is the end node, we have found the shortest path
      if (current[0] === end[0] && current[1] === end[1]) {
        // Create a list for storing the shortest path
        const path = [];
  
        // Starting from the end node, trace back the path by following the previous nodes
        while (current) {
          path.unshift(current);
          current = previous.get(current);
        }
  
        // Return the shortest path
        console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);
        console.log(path.join("\n"));
        return path;
      }
  
      // Generate the valid moves for the current node
      const moves = getValidMoves(current, visited);
  
      // For each valid move
      for (const move of moves) {
        // If the move has not been visited
        if (!visited.has(move)) {
          // Mark the move as visited
          visited.add(move);
  
          // Add the move to the queue
          queue.push(move);
  
          // Set the previous node for the move to the current node
          previous.set(move, current);
        }
      }
    }
  
    // If we get here, it means that there is no path from the start node to the end node
    return null;
  }
  
  function getValidMoves(current, visited) {
    // Create a list for storing the valid moves
    const moves = [];
  
    // The possible movements of the knight
    const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
    const dy = [-1, 1, -2, 2, -2, 2, -1, 1];
  
    // For each possible movement
    for (let i = 0; i < dx.length; i++) {
      // Calculate the new position of the knight
      const x = current[0] + dx[i];
      const y = current[1] + dy[i];
  
      // If the new position is within the board and has not been visited
      if (isValid(x, y, visited)) {
        // Add the new position to the list of valid moves
        moves.push([x, y]);
      }
    }
  
    // Return the valid moves
    return moves;
  }
  
  function isValid(x, y, visited) {
    // Check if the position is within the board and has not been visited
    return x >= 0 && x < 8 && y >= 0 && y < 8 && !visited.has([x, y]);
  }

  knightMoves([0, 0], [6, 6]);