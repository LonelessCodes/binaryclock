# Binary Clock

A clock. In binary. Displaying three 6bit numbers: hours, minutes and seconds.

Demo at [http://loneless.org/clock](http://loneless.org/clock)

JS has got a neat feature in the Number prototype function `#toString`: represent a number in characters. The most famous range of characters would be 0-1 (2, binary), 0-f (16, hexadecimal). 

```Javascript
Number(200).toString(2);// outputs '11001000'
Number(200).toString(3); // outputs '21102'
// ...
Number(200).toString(16); // outputs 'c8'
```

That's all that it takes.

```
001101 => 13
111010 => 58
110011 => 51

13:58:51
```

I chose 6-bit numbers, because it's all that was needed for displaying hour, minute or second.

2^6 = 64