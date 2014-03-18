/**
 * Author: Bruno Germano
 * Date: 2012-09-26 19:45
 * URL: https://github.com/egermano/jquery.dateAgo
 */

/**
 * Date Ago
 * @param  object $ jQuery variable 
 * @param  object options 
 * @return object
 */
(function($){

    $.fn.dateAgo = function(options){

        // This is the easiest way to have default options.
        var settings = $.extend({
            texts: {
                now: 'just now',
                minutes: 'minutes ago',
                hour: 'hour ago',
                hours: 'hours ago',
                yesterday: 'yesterday',
                days: 'dasy ago'
            }
        }, options );


        return this.each(function(){
            var baseDate = $(this).text();

            //date from menssage
            var date = new Date(Date.parse(baseDate)).toLocaleDateString();
            var hour = new Date(Date.parse(baseDate)).toLocaleTimeString();
            var _agoDate = new Date(date + ' ' + hour);
            var today = new Date();

            var diff = (today.getTime()-_agoDate.getTime());
            var dataText = '';

            if(diff<(1000*60*60*24)){
                if(diff<(1000*60*60)){
                    var minutos = Math.floor(diff/(1000*60));
                    if(minutos <= 1)
                        dataText = settings.texts.now;
                    else
                        dataText = minutos.toString() + ' ' + settings.texts.minutes;
                }else{
                    var horas = Math.floor(diff/(1000*60*60));
                    dataText = horas.toString() + (horas==1?' ' + settings.texts.hour:' ' + settings.texts.hours);
                }
            }else{
                var dias = Math.floor(diff/(1000*60*60*24));
                if(dias==1)
                    dataText = settings.texts.yesterday;
                else
                    dataText = dias.toString() + ' ' + settings.texts.days;
            }

            $(this).addClass('dateAgo').text(dataText);
        });
    };
}(jQuery));