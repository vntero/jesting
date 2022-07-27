export function move(pos: number, roll: number): number {
    let roller = roll * 2
    return pos + roller
  }