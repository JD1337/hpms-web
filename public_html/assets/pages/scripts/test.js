   var jsonObject = {
       "responses": [
        {
            "took": 5,
            "timed_out": false,
            "_shards": {
                "total": 10,
                "successful": 10,
                "failed": 0
            },
            "hits": {
                "total": 4001,
                "max_score": 0,
                "hits": []
            },
            "aggregations": {
                "1": {
                    "value": 101.03560990466235
                },
                "2": {
                    "value": 239.9712136
                },
                "3": {
                    "value": 0.03073842
                },
                "4": {
                    "value": 1.5055978916528368
                },
                "5": {
                    "value": 2.99869039
                },
                "6": {
                    "value": 0.002442595
                },
                "7": {
                    "value": 150.84587334636507
                },
                "8": {
                    "value": 708.9589119138891
                },
                "9": {
                    "value": 0.004405278151138792
                },
                "10": {
                    "value": 603.5343392588068
                }
            },
            "status": 200
        }
    ]
   };
   
   (function ($){
       $("#currentEnergyUsage").attr('data-value', Math.round(jsonObject.responses[0].aggregations["1"].value));
       $("#totalDailyEnergyUsage").attr('data-value', Math.round(jsonObject.responses[0].aggregations["2"].value));
       $("#temperature").attr('data-value', Math.round(jsonObject.responses[0].aggregations["5"].value));
       $("#humidity").attr('data-value', Math.round(jsonObject.responses[0].aggregations["7"].value));
       console.log("test");
   })(jQuery);


