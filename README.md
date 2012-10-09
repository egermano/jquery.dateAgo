jquery.dateAgo
=======

Plugin for jquery to calculate date from past until current date.

I`m brazilian guy and this plugins works only in brazilian portuguese. In the near future I will create a multilanguage support.

Usage
-----

````javascript
$('.twitter .tweet .date').dateAgo();
````

Where innerHTML of the element ```.twitter .tweet .date``` is the date integer, ie, integer value representing the number of milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch) [source: [MDN](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date#Parameters)].