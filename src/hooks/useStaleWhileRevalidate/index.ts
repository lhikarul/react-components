import { useEffect, useRef, useState } from "react";
import isEqual from "lodash/isEqual";

class LRUCache {
  cache;
  capacity;
  constructor(capacity: number) {
    this.cache = new Map();
    this.capacity = capacity;
  }
  get(key: string) {
    if (this.cache.has(key)) {
      const temp = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, temp);
      return temp;
    }
  }

  set(key: string, value: any) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}

const MAP_CACHE = new LRUCache(2);

function hashArgs(...args: any[]) {
  return args.reduce((acc, arg) => stringify(arg) + ":" + acc, "");
}

function stringify(val: any) {
  return typeof val === "object" ? JSON.stringify(val) : String(val);
}

function useStaleWhileRevalidate(
  fn: (params: any) => Promise<any>,
  args: any,
  defaultValue = [],
  cacheTime = 0
) {
  const prevArgs = useRef(null);
  const [data, setData] = useState<any[]>(defaultValue);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (isEqual(args, prevArgs.current)) return;

    const cacheId = hashArgs(fn.name, ...args);
    const cachedData = MAP_CACHE.get(cacheId);

    const isStaled = Date.now() - (cachedData?.time || 0) > cacheTime;

    if (cachedData) {
      setData(MAP_CACHE.get(cacheId).data);
    } else {
      setLoading(true);
    }

    if (isStaled) {
      //@ts-ignore
      fn(...args).then((newData) => {
        MAP_CACHE.set(cacheId, {
          data: newData,
          time: Date.now(),
        });

        setData(newData);
        setLoading(false);
      });
    }
  }, [fn, args, cacheTime]);

  useEffect(() => {
    prevArgs.current = args;
  });

  return {
    data,
    isLoading,
  };
}

export default useStaleWhileRevalidate;
