import Goban from "./goban"

describe('Goban game', () => {
  
  test('o is not taken because she has a freedom over', () => {
    const board = [
      '...',
      '#o#',
      '.#.'
    ]
    const game = new Goban(board);
    expect(game.isTaken(1,1)).toBeFalsy();
   })

  test('. is not taken because it is empty', () => {
    const board = [
      '...',
      '#.#',
      '.#.'
    ]
    const game = new Goban(board);
    expect(game.isTaken(1,1)).toBeFalsy();
   })

  test('position 3,3 is not taken because it is out', () => {
    const board = [
      '...',
      '#.#',
      '.#.'
    ]
    const game = new Goban(board);
    expect(game.isTaken(3,3)).toBeFalsy();
   })

  test('o is not taken because she has a freedom all round', () => {
    const board = [
      '...',
      '.o.',
      '...'
    ]
    const game = new Goban(board);
    expect(game.isTaken(1,1)).toBeFalsy();
   })

  test('o is taken because she is surrounded', () => {
    const board = [
      '###',
      '#o#',
      '###'
    ]
    const game = new Goban(board);
    expect(game.isTaken(1,1)).toBeTruthy();
   })

  test('o is taken because she has no freedom', () => {
    const board = [
      'o#',
      '#.',
    ]
    const game = new Goban(board);
    expect(game.isTaken(0,0)).toBeTruthy();
   })

  test('the form # is taken because it has no freedom', () => {
    const board = [
      'oo.',
      '##o',
      'oo#',
      '.o.'
    ]
    const game = new Goban(board);
    expect(game.isTaken(0,1)).toBeTruthy();
    expect(game.isTaken(1,1)).toBeTruthy();
   })

  test('the form # is not taken because it has a freedom in x = 2, y = 1', () => {
    const board = [
      'oo.',
      '##.',
    ]
    const game = new Goban(board);
    expect(game.isTaken(1,1)).toBeFalsy();
    expect(game.isTaken(0,1)).toBeFalsy();
   })

   test('the form # is not taken because freedom in 1,4', () => {
    const board = [
      'ooo',
      '###',
      'o#o',
      'o#o',
      'o.o',
    ]
    const game = new Goban(board);
    expect(game.isTaken(0,1)).toBeFalsy();
    expect(game.isTaken(1,1)).toBeFalsy();
    expect(game.isTaken(1,2)).toBeFalsy();
    expect(game.isTaken(1,3)).toBeFalsy();
   })

   test('the form # is taken because it has no freedom', () => {
    const board = [
      'ooo',
      '###',
      'o#o',
      'o#o',
      'o#o',
      'ooo',
    ]
    const game = new Goban(board);
    expect(game.isTaken(0,1)).toBeTruthy();
    expect(game.isTaken(1,1)).toBeTruthy();
    expect(game.isTaken(1,2)).toBeTruthy();
    expect(game.isTaken(1,3)).toBeTruthy();
   })

   test('the form # is not taken because it has freedom on large board', () => {
    const board = [
      'oooooo######oo',
      'ooooo######ooo',
      'ooo########ooo',
      'ooo######ooooo',
      'oooo#####ooooo',
      'ooooo####.oooo',
    ]
    const game = new Goban(board);
    expect(game.isTaken(6,0)).toBeFalsy();
   })

   test('the form o is not taken because it has freedom on large board', () => {
    const board = [
      '..#######.........',
      '..##oooo###.........',
      '.######ooo###......',
      '..##ooooo####........',
      '..##oooooo##........',
      '..oooooo######........'
    ]
    const game = new Goban(board);
    expect(game.isTaken(4,1)).toBeFalsy();
   })

   test('the form o is taken because it has no freedom on large board', () => {
    const board = [
      '..#######.........',
      '..##oooo###.........',
      '.######ooo###......',
      '..##ooooo####........',
      '..##oooooo##........',
      '.#oooooo######........'
    ]
    const game = new Goban(board);
    expect(game.isTaken(4,1)).toBeTruthy();
   })
 })