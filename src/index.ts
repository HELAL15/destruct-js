type PathArray = string | [string, any];

export function destruct<T = any>(
  obj: Record<string, any>,
  map: Record<string, PathArray>
): T {
  const getValue = (path: string, fallback: any = undefined): any => {
    return path.split('.').reduce((acc, key) => {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj) ?? fallback;
  };

  const result: any = {};

  for (const key in map) {
    const pathValue = map[key];
    if (typeof pathValue === 'string') {
      result[key] = getValue(pathValue);
    } else if (Array.isArray(pathValue)) {
      const [path, fallback] = pathValue;
      result[key] = getValue(path, fallback);
    }
  }

  return result;
}
