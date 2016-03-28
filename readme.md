# React Lib

Test for building a library of ReactJS components

## Instructions:

Install: `npm i`

Run app: `npm start`

[localhost:8009](http://localhost:8009)

## Structure

- `src` is where you develop your actual components in ES6
- `web-app` import lib of components and render to app for testing
- `lib` generated from src ES6 to ES5.1

## Tech

- Web pack to deal with bundling and building library
- Babel to compile from ES6 to ES5.1 and convert ReactJS JSX

See `package.json` for details

## Lib components

** PhotoSlider example **

```javascript
<PhotoSlider>
  <Photo src="/test/image1.jpg" alt="First test image" /> 
  <Photo src="/test/image2.jpg" alt="Second test image" />
  ... more
</PhotoSlider>
```