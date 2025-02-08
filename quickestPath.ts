function quickestPath(board: {
  ladders: [number, number][];
  snakes: [number, number][];
}): number[] {
  const endPoint = 100;
  const visitedPositions: number[] = Array(endPoint + 1).fill(0);
  const ladderMap = new Map(board.ladders);
  const snakeMap = new Map(board.snakes);
  const queue: [number, number[]][] = [[1, []]];

  visitedPositions[1] = 1;
  while (queue.length > 0) {
    const [position, path] = queue.shift()!;

    if (position === endPoint) return path;

    for (let dice = 1; dice <= 6; dice++) {
      let nextPostion = position + dice;

      if (nextPostion > endPoint)
        nextPostion = endPoint - (position + dice - endPoint);

      if (ladderMap.has(nextPostion)) {
        nextPostion = ladderMap.get(nextPostion)!;
      } else if (snakeMap.has(nextPostion)) {
        nextPostion = snakeMap.get(nextPostion)!;
      }

      if (visitedPositions[nextPostion] === 0) {
        visitedPositions[nextPostion] = 1;
        queue.push([nextPostion, [...path, dice]]);
      }
    }
  }
  return [];
}
