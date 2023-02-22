function load() {
  let column_1 = [
    4, 2, 1, 7, 6, 8, 10, 9, 3, 4, 8, 2, 6, 5, 1, 10, 8, 5, 9, 7, 6, 1, 7, 5, 9,
    10, 1, 5, 6, 9,
  ];

  let column_2 = [
    3, 6, 2, 1, 7, 9, 8, 7, 5, 2, 10, 1, 5, 7, 9, 10, 8, 6, 5, 9, 4, 7, 8, 1, 3,
    2, 5, 6, 4, 10,
  ];

  let column_3 = [
    45, 58, 96, 66, 80, 77, 57, 69, 91, 56, 72, 42, 89, 62, 41, 52, 71, 94, 89,
    62, 94, 51, 63, 40, 60, 83, 94, 63, 65, 61,
  ];

  let column_4 = [
    47, 62, 58, 50, 92, 55, 65, 73, 79, 60, 50, 54, 78, 68, 91, 82, 47, 87, 80,
    95, 80, 53, 99, 75, 77, 82, 67, 60, 74, 84,
  ];

  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 0;
  let sums = [];
  let total_score = 0;

  for (let i = 0; i < 30; i++) {
    sum1 += column_1[i];
  }
  for (let i = 0; i < 30; i++) {
    sum2 += column_2[i];
  }
  for (let i = 0; i < 30; i++) {
    sum3 += column_3[i];
  }
  for (let i = 0; i < 30; i++) {
    sum4 += column_4[i];
  }

  sums = [sum1, sum2, sum3, sum4];

  for (let i = 0; i < 4; i++) {
    total_score += sums[i];
  }

  const results = {
    column_1,
    column_2,
    column_3,
    column_4,
    sums,
    total_score,
  };

  console.log(results);
}
load();
