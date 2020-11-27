function power(base, times, total) {
  if (times === 0) {
    return total ? total : 1;
  }

  if (times === 1) {
    return total ? power(base, times - 1, total) : power(base, times - 1, base);
  }

  return total
    ? power(base, times - 1, (total = total * base))
    : power(base, times - 1, (total = base * base));
}

function factorial(n) {
  return (n * (n - 1)) / 2;
}

function productOfArray(arrayNumber = [], total) {
  if (arrayNumber.length === 0) {
    return total || 0;
  }

  const [n, ...rest] = arrayNumber;
  total = total ? total * n : n;

  return productOfArray(rest, total);
}
