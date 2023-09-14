function cancellable(fn, args, t) {
  let intervalId;

  const initialResult = fn(...args);

  const cancelFn = () => {
    clearInterval(intervalId);
  };

  intervalId = setInterval(() => {
    const result = fn(...args);
  }, t);

  return cancelFn;
}
