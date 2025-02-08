function minEnergy(
    start: number,
    shops: number[],
    stations: number[],
    target: number
  ): number {
    const shopSet = new Set(shops);
    const stationSet = new Set(stations);
    const priorityQueue: [number, number, Set<number>][] = [];
    priorityQueue.push([0, start, new Set()]);
  
    const visitedShopBookings = new Map<string, number>();
  
    while (true) {
      priorityQueue.sort((a, b) => a[0] - b[0]);
      const [energy, position, visitedShops] = priorityQueue.shift()!;
      const shopSearchKey = `Shop-${position}-${Array.from(visitedShops).join(
        ","
      )}`;
      if (
        visitedShopBookings.has(shopSearchKey) &&
        visitedShopBookings.get(shopSearchKey)! <= energy
      )
        continue;
      visitedShopBookings.set(shopSearchKey, energy);
  
      if (shopSet.has(position)) visitedShops.add(position);
  
      if (position === target && visitedShops.size === shops.length)
        return energy;
  
      for (const nextPostion of [position - 1, position + 1]) {
        if (nextPostion < 0) continue;
        priorityQueue.push([energy + 1, nextPostion, new Set(visitedShops)]);
      }
  
      if (stationSet.has(position)) {
        stations.forEach((station) => {
          if (station !== position) {
            priorityQueue.push([energy, station, new Set(visitedShops)]);
          }
        });
      }
    }
  }