describe('Example Tests', () => {
  test('should add two numbers correctly', () => {
    const result = 2 + 3;
    expect(result).toBe(5);
  });

  test('should check if array contains item', () => {
    const fruits = ['apple', 'banana', 'orange'];
    expect(fruits).toContain('banana');
  });

  test('should test async function', async () => {
    const promise = Promise.resolve('Hello World');
    await expect(promise).resolves.toBe('Hello World');
  });
});
