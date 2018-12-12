# Typescript watch bug

## Preperation
```bash
yarn install
# or npm install
```

## Testing

When executing typescript on the clean git clone of this repo with the following command ...
```bash
node_modules/.bin/tsc -w -p .
```
... it corretly outputs:
```
src/index.ts:3:26 - error TS2339: Property 'x' does not exist on type 'Coords'.

3 console.log(getPoint().c.x);
                           ~

src/lib.ts:7:13 - error TS2322: Type '{ x: number; y: number; }' is not assignable to type 'Coords'.
  Object literal may only specify known properties, and 'x' does not exist in type 'Coords'.

7             x: 1,
              ~~~~

  src/interfaces/Point.ts:3:5
    3     c: Coords
          ~
    The expected type comes from property 'c' which is declared here on type 'PointWrapper'

[16:39:08] Found 2 errors. Watching for file changes.
```

When we now change line 7 in src/interfaces/Point.ts to the correct form `x: number` (instead of x2), while the watch is still running, a bug occurs:
```
src/index.ts:3:26 - error TS2339: Property 'x' does not exist on type 'Coords'.

3 console.log(getPoint().c.x);
                           ~

[16:39:31] Found 1 error. Watching for file changes.
```

If we now stop the tsc process and run it again it works correctly:
```
[16:39:54] Found 0 errors. Watching for file changes.
```