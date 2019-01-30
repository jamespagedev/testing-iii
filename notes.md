# Extra Packages Reqauired

- https://jestjs.io/docs/en/tutorial-react
  - yarn add --dev enzyme
  - yarn add --dev react-addons-test-utils
- Use Case Example: https://github.com/airbnb/enzyme/issues/1177 ...

```
it('It finds the className on the shallow()\'d wrapper', () => {
    const shallowWrapper = shallow(<Comp />)
    expect(shallowWrapper.hasClass('test')).toBe(true)
})
```
