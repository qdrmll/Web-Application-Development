const cancellable = (fn, args, t) => {
  let timeoutId;
  let cancelled = false;
  
  const executeFn = () => {
    if (!cancelled) {
      const result = fn(...args);
      console.log({"time": t, "returned": result});
    }
  };
  
  timeoutId = setTimeout(executeFn, t);
  
  const cancelFn = () => {
    clearTimeout(timeoutId);
    cancelled = true;
  };

  return cancelFn;
};
