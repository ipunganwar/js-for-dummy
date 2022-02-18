# TS-COMPILER

## if only you want to run only specific directory/file without need quit and re-compiler, just using:
- tsc filename.ts --watch

## if you want compile all the entire project, just using:
- tsc --init
- then run tsc in terminal (manual)

## Exlude & Include file in tsconfig.json
- just adding property `"exlude"` or `"include"` after `"compilerOptions"` 

## tsconfig.json Explanation
- "sourceMap": true => allow map .ts file showing in source devtools / debugging purpose
- "outDir": "./dist" => specific output dir
- "removeComments": true => remove any comment after compile into .js file
- "noEmitOnError": true => stop compile if any error in file