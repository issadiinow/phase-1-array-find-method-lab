// code your solution here
function superbowlWin(record) {
    // Use the find() method to locate the first win (where result is 'W')
    const winRecord = record.find(game => game.result === "W");
  
    // If a win is found, return the year of the win; otherwise, return undefined
    if (winRecord) {
      return winRecord.year;
    } else {
      return undefined;
    }
  }
  