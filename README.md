jquery.dateAgo
=======

Plugin for jquery to calculate date from past until current date.

Usage
-----

````javascript
$('.twitter .tweet .date').dateAgo();
````

Where innerHTML of the element ```.twitter .tweet .date``` is the date integer, ie, integer value representing the number of milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch) [source: [MDN](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date#Parameters)].

Options
-------

Defaults:

````javascript
{
    texts: {
        now: 'just now',
        minutes: 'minutes ago',
        hour: 'hour ago',
        hours: 'hours ago',
        yesterday: 'yesterday',
        days: 'dasy ago'
    }
}
````

Use the ````texts```` property for translation and internationalization.