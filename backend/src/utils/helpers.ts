import { validate } from 'class-validator';

async function transformAndValidate<T, U extends object>(
  source: T,
  dtoClass: { new (): U },
): Promise<U> {
  const dest = new dtoClass();
  Object.assign(dest, source);
  const errors = await validate(dest, { whitelist: true });
  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return dest;
}
export { transformAndValidate };
