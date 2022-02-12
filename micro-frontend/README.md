# Micro Frontend Project

In this case i've create 2 project directori with pnpx
```
    pnpx create-mf-app
```

## Module Federation
The architectural concept that will be used in this project is the module federation module.

### What is ?
- The concept for sharing component between app from other app.

### What if one app is goes down ?
- the other app will error

### What is solution if one app is goes down ?
- save the sharing component into static asset store like S3 AWS etc.

### What will causing app will crash other than as above ?
- Changes of API Contract in 1 app, but the main team (Home team) not actually tell the other team (PDP Team)

example:
```
before

Header.jsx
export default function Header () {
  return (
    <div>
      Fidget Spinner World II
    </div>
  )
}

After Changes
export default function Header ({ app }) {
  return (
    <div>
      Fidget Spinner World II || { app.name }
    </div>
  )
}
```

### How we can prevent Error if something changes in sharing component ?
- We can use / create Error Boundary component to handle that 