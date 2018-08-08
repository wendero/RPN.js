# RPN.js
RPN.js is a Javascript library for Reverse Polish Notation (RPN). 

A easy way to include external logic into your projects.

## Usage

### Full Evaluation
Full Evaluation function is able to process a full expression at once and returns its value:

<code>console.log(RPN.Eval("3 5 * 2 / 7.5 + 15 / 1 =="));</code>

*Output:*

<code>true</code>

### Single Evaluation
Single Evaluation will process just the latest operation and return the resultant stack:

<code>console.log(RPN.Single("5 5 2 *"));</code>

*Output:*

<code>[ 5, 10 ]</code>

## Basic Operations
| Operation | Operator | Description | Example | Result |
| --- |:---:| --- | --- | ---:|
| Addition | + | a + b | 3 5 + | 8 |
| Subtraction | - | a - b | 10 7 - | 3 |
| Multiplication | * | a * b | 2 5 * | 10 |
| Division | / | a / b | 20 2 / | 10 |
| Remainder | % | a % b | 11 3 / | 2 |
| Percent | *num*% | b percent of a | 500 10% + | 550 |
| Percentage | perc | The percentage b is from a | 1000 670 perc | 67 |

## Math Operations
| Operation | Operator | Description | Example | Result |
| --- |:---:| --- | --- | ---:|
| &pi; | pi | Constant value of &pi; | pi | 3.14159265358979 |
| Exponentiation | pow | a pow b | 3 2 pow | 9 |
| Powers of 10 | E | x &times; 10<sup>y</sup> | 3 3 E | 3000 |
| Absolute | abs | Absolute value of a number | -1 abs | 1 |
| Sign change | +- | Sign change | 5 +- | -5 |
| Round | round | Rounds a at b decimal places | pi 2 round | 3.14 |
| Ceiling | ceiling | Rounds up | 3.12534 ceiling | 4 |
| Floor | floor | Rounds down | pi floor | 3 |
| Truncate | truncate | Ignore all decimal places | pi truncate | 3 |
| Square root | sqrt | Square root of a | 25 sqrt | 5 |
| Sum | sum | Sums the entire stack | 1 2 3 5 8 13 21 sum | 53 |
| Sum k | sumk | Sums k items in stack | 1 2 3 5 8 13 21 3 sumk | 42 |
| Log<sub>2</sub> | log | Binary log of a | 8 log | 3 |
| Log<sub>b</sub> | logb | Log of a at base b | 8 2 logb | 3 |
| Log<sub>10</sub> | log10 | Log of a at base 10 | pi log10 | 0.497149872694134 |
| Euler exp | exp | Euler's exp | pi exp | 23.1406926327793 |

## Trigonometric Operations
| Operation | Operator | Description | Example | Result |
| --- |:---:| --- | --- | ---:|
| Sine | sin | Sin of a radians | pi sin | 0 |
| Hyperbolic Sine | sinh | Hyperbolic sine of a | pi sinh | 11.5487393572577 |
| Arcsine | asin | The angle in radians which the sin is a | 0.5 asin | 0.523598775598299 |
| Cosine | cos | Cosine of a radians | pi cos | -1 |
| Hyperbolic Cosine | cosh | Hyperbolic cosine of a | pi cosh | 11.5919532755215 |
| Arccosine | acos | The angle in radians which the cosine is a | 0.5 acos | 1.0471975511966 |
| Tangent | tan | Tangent of a radians | 0.5 tan | 0.54630248984379 |
| Hyperbolic Tangent | tanh | Hyperbolic tangent of a | 0.5 tanh | 0.46211715726001 |
| Arctangent | atan | The angle in radians which the tangent is a | 0.5 atan | 0.463647609000806 |
| Arctangent of a and b | atan2 | The angle whose tangent is the quotient a and b | 0.6 0.7 atan2 | 0.70862627212767 |

## Logic Operations
| Operation | Operator | Description | Example | Result |
| --- |:---:| --- | --- | ---:|
| Greater than | > | a > b | 5 3 > | True |
| Less than | < | a < b | 5 3 < | False |
| Equals | = | a = b | 3 3 = | True |
| Different | != | a != b | 3 3 != | False |
| | <> | a <> b | 3 3 <> | False |
| And | & | a & b | true true & | True |
| Or | \| | a \| b | true false \| | True |
| Not | ! | xxx | true ! | False |
| Greater or equals to | >= | a >= b | 5 3 >= | True |
| Less or equals to | <= | a <= b | 3 5 <= | True |

## Other Math Operations
| Operation | Operator | Description | Example | Result |
| --- |:---:| --- | --- | ---:|
| Increment 1 | ++ | a + 1 | 5 ++ | 6 |
| Decrement 1 | -- | a - 1 | 5 -- | 4 |
| Increment b | += | a + b | 5 2 += | 7 |
| Decrement b | -= | a - b | 5 2 -= | 3 |
| Minimum | min | The minor number in stack | 10 20 30 40 50 5 3 2 min | 2 |
| Maximum | man | The major number in stack | 10 20 30 40 50 5 3 2 max | 50 |

## String Operations

String operations are some functions that can be applied to transform text and JSON.

Once RPN uses the whitespace character to split its stack items, a string with whitespace must be set inside \`\`, i.e. \`easy peasy\`.

| Operation | Operator | Description | Example | Result |
| --- |:---:| --- | --- | ---:|
| Uppercase | ucase | Set a string as uppercase | bazinga ucase | BAZINGA |
| Lowercase | lcase | Set a string as lowercase | BAZINGA lcase | bazinga |
| String Format | strfmt | Format a string based on a format string where positions are set between {} | hel wor lo ld \`{0}{2} {1}{3}\` strfmt | hello world |
Date | date | Convert a set of *n*, where *n* is between 1 and 7, stack items into Datetime | 2018 12 31 23 59 58 123 7 date | Create the datetime object for 2018-12-31 23:59:58.123 |
Date Format | todate | Convert a date object into a specific string format: <br> dd(day), MM(month), yyyy(year) HH(hours), mm(minutes), ss(seconds) fffff(seconds decimals) or default for yyyy-MM-dd HH:mm:ss.fff | 2018 12 31 23 59 58 123 7 date \`dd/MM/yyyy HH:mm:ss\` todate | 31/12/2018 23:59:58 |
| Stringify | stringify | Serializes a parameter into a JSON string | $0 stringify | $0 JSON |
| Parse JSON | parse | Parses a JSON into a object and store it | \`{"Name": "Bazinga"}\` parse | Stores a object parameter $0 into Data list with with property *Name* of value *Bazinga* |

## Control Operations
| Operation | Operator | Description | Example | Result |
| --- |:---:| --- | --- | ---:|
| Pop | pop | Discards the top stack item | 3 5 pop | 3 |
| Pop X | popx | Discard the *k* index item from stack (0...n) | 1 2 4 8 50 16 32 64 3 popx sum | Discards the item indexed 3 (50) and sum all others &rarr; 127 |
| Clear | clr | Clear stack | 10 20 30 40 50 5 3 2 clr 1 | 1 |
| Return | ret | Return the top value in stack before the operator | 10 20 30 40 50 5 3 20 ret 30 | 20 |
| Return if | retif | Return the a if b | 10 true ret 20 | 10 |
| Function | @\<label> | Creates a function that can be called later | @a 10 20 + @a | Function @a is stored |
| Call | @@\<label> | Calls a stored function | @@a 3 + | 33 |
| If | if | If a then b | true 10 if | 10 |
| If-else | ife | If a then b else c | false 10 20 ife | 20 |
| Case | case | Check N conditions in format *a condition1 value1 case ... conditionN valueN case valueDefault end* | 3 1 one case 2 two case 3 three case 4 end | three |
| From Index | fromindex | Return the *k* item (0..l) of *l* items and discard all others inside *l* | 10 20 30 40 3 1 fromindex | The item k=1 of next l=3 values (40 30 20) &rarr; 30 

## Parameters
Parameters are complex objects that can be input to any RPN internally.

These parameters are stored into a different place called Data list.

The order which parameters are added is the same order they are stored.

Parameters can be accessed by $\<index>, i.e. $0, $1, $2, etc.:

```$0 $1 + ``` is the sum of parameters $0 and $1

Complex parameter can have its attributes accessed as:

```$0.NumA $0.NumB +``` is the sum of attributes NumA and NumB of a complex object parameter $0

<sub>*For security reasons methods  weren't implemented to be accessed via RPN*</sub>

Array parameters can have its items retrieved by set the index between []:

```$0[0] $0[1] + ``` is the sum of item 0 and item 1 of an array parameter $0

For arrays there is also the **spread operator** that will get the same property for all array items and add them into the stack:

```$0 Num ... sum``` the property Num of all items of $0 array will be stacked and sum

Dictionary parameters can have its items retrieved by set the dictionary key between []:

```$0[a] $0[b] +``` is the sum  of item *a* and item *b* of a dictionary parameter $0