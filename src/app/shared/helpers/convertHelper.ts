export class Converthelper {
  primitiveToBoolean(
    value: string | number | boolean | null | undefined
  ): boolean {
    if (value === 'true' || value === 'True') {
      return true;
    }

    return typeof value === 'string'
      ? !!+value // we parse string to integer first
      : !!value;
  }
}
