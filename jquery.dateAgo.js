/**
 * Author: Bruno Germano
 * Date: 2012-09-26 19:45
 */

/**
 * Date Ago
 * @param  object $ jQuery variable 
 * @return object
 */
(function($){

    $.fn.dateAgo = function(){
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
                        dataText = 'agora';
                    else{
                        dataText = minutos.toString() + ' minutos atrás';
                    }
                }else{
                    var horas = Math.floor(diff/(1000*60*60));
                    dataText = horas.toString() + (horas==1?' hora atrás':' horas atrás');    
                }
            }else{
                var dias = Math.floor(diff/(1000*60*60*24));
                if(dias==1){
                    dataText = 'ontem';
                }else{
                    dataText = dias.toString() + ' dias atrás';    
                }
            }

            $(this).addClass('dateAgo').text(dataText);
        });
    };
}(jQuery));

//