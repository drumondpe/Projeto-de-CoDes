const counter_id = ['counter', 'counter2', 'counter3'];
    "use strict"
    var hh = 0;
    var mm = 0;
    var ss = 0;

    var hh2 = 0;
    var mm2 = 0;
    var ss2 = 0;

    var hh3 = 0;
    var mm3 = 0;
    var ss3 = 0;

    var tempo = 1000; //Quantos milésimos, valem um segundo
    var cron;

    var cron2;

    var cron3;
    
        
      

        function start(){
            cron = setInterval(() => {timer();}, tempo)
        }

        function pause(){
            clearInterval(cron);
        }

        function stop(){
            
            hh = 0;
            mm = 0;
            ss = 0;
            clearInterval(cron);
            document.getElementById("counter").innerText = '00:00:00';
            
        }

        function timer(){
        
            ss++; //Incrementa +1 na variável ss

            if (ss == 59) { //Verifica se deu 59 segundos
                ss = 0; //Volta os segundos para 0
                mm++; //Adiciona +1 na variável mm

                if (mm == 59) { //Verifica se deu 59 minutos
                    mm = 0;//Volta os minutos para 0
                    hh++;//Adiciona +1 na variável hora
                }
            }

            var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
            document.getElementById("counter").innerText = format;
            
        }

        function start2(){
            console.log(2)
            cron2 = setInterval(() => {timer2();}, tempo)
        }

        function pause2(){
            clearInterval(cron2);
        }

        function stop2(){
            
            hh2 = 0;
            mm2 = 0;
            ss2 = 0;
            clearInterval(cron2);
            document.getElementById("counter2").innerText = '00:00:00';
            
        }

        function timer2(){
        
            ss2++; //Incrementa +1 na variável ss

            if (ss2 == 59) { //Verifica se deu 59 segundos
                ss2 = 0; //Volta os segundos para 0
                mm2++; //Adiciona +1 na variável mm

                if (mm2 == 59) { //Verifica se deu 59 minutos
                    mm2 = 0;//Volta os minutos para 0
                    hh2++;//Adiciona +1 na variável hora
                }
            }

            var format = (hh2 < 10 ? '0' + hh2 : hh2) + ':' + (mm2 < 10 ? '0' + mm2 : mm2) + ':' + (ss2 < 10 ? '0' + ss2 : ss2);
            document.getElementById("counter2").innerText = format;
        }

        function start3(){
            console.log(3)
            cron3 = setInterval(() => {timer3();}, tempo)
        }

        function pause3(){
            clearInterval(cron3);
        }

        function stop3(){
            
            hh3 = 0;
            mm3 = 0;
            ss3 = 0;
            clearInterval(cron3);
            document.getElementById("counter3").innerText = '00:00:00';
            
        }

        function timer3(){
        
            ss3++; //Incrementa +1 na variável ss

            if (ss3 == 59) { //Verifica se deu 59 segundos
                ss3 = 0; //Volta os segundos para 0
                mm3++; //Adiciona +1 na variável mm

                if (mm3 == 59) { //Verifica se deu 59 minutos
                    mm3 = 0;//Volta os minutos para 0
                    hh3++;//Adiciona +1 na variável hora
                }
            }

            var format = (hh3 < 10 ? '0' + hh3 : hh3) + ':' + (mm3 < 10 ? '0' + mm3 : mm3) + ':' + (ss3 < 10 ? '0' + ss3 : ss3);
            document.getElementById("counter3").innerText = format;
        }
    
    