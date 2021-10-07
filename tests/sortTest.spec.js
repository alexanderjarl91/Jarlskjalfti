//testing the sortData

describe("Filter function", () => {
  test("this test should sort data", () => {
    const sortData = (data) => {
      return data.sort((a, b) => {
        return b.size - a.size;
      });
    };
    const data = [
      { size: 1, timestamp: 1 },
      { size: 2, timestamp: 2 },
      { size: 3, timestamp: 3 },
    ];
    const output = [
      { size: 3, timestamp: 3 },
      { size: 2, timestamp: 2 },
      { size: 1, timestamp: 1 },
    ];
    expect(sortData(data, "link")).toEqual(output);
  });
});
