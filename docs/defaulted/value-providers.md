---
name: Value Providers
---

# Value Providers and You
A constant value provider can be given in the form of a number.

However usually, a value provider takes the field `type` to define which kind of value provider to use (and thus what fields to provide), can be one of the following:
1. `constant`: A constant number as its singular field `value`, equivalent to inlining a number as the value provider.
2. `invert`: Makes the value provider of its field `invert` negative if positive, and positive if negative.
3. `function`: Performs a mathematical operation from the field `operation` and its fields, with the following operations:
  - `add`, `sub`, `mul`, `div`: Standard mathematical operations, you know what these are. Takes additional value providers `left` and `right`, representing which side of the sign they are on.
  - `mod`: Returns the remainder of dividing `left` by `right`. Takes additional value providers `left` and `right`, representing which side of the sign they are on.
  - `pow`: Returns the result of raising `left` to the power of `right`. Takes additional value providers `left` and `right`, representing which side of the sign they are on.
  - `sqrt`: Returns the square root of `operand`. Takes value provider `operand`.
  - `sin`, `asin`, `cos`, `acos`, `tan`, `atan`: Returns the result of running their respective trigonometric on `operand`. Takes value provider `operand`.
  - `min`: Returns the smaller between `left` and `right`. Takes additional value providers `left` and `right`, representing which side of the sign they are on.
  - `max`: Returns the larger between `left` and `right`. Takes additional value providers `left` and `right`, representing which side of the sign they are on.
  - `round`, `floor`, `ceil`: Returns the result of the rounding operation on `operand`. Takes value provider `operand`.
4. `variable`: Stand-in for the variable present in context, optionally takes in `var` as a variable name, defaulting to `"input"` if not present.