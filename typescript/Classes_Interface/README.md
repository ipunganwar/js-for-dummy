# CLASSES & INTERFACE

## KEYWORD
| keyword | desc | sample |
|--|--|--|
| private | can only acces variable inside base class, cant ovveride outscope base class file | private name: string |
| public | default config inside ts class | name: string or public name: string |
| readonly | only can change 1 time in init class | public readonly name: string |
| protected | can ovveride inside base class and sub class, not like private property | protected name: string |


## INHERITANCE
- passing down the blue print of parent into child class

| Property needed | desc |
|---|---|
| extends | passing down object base/parent class into sub/child class |
| super | call the constructor from the base/parent class into sub/child class |