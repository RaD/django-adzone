(function($){
    $(document).ready(function(){
        var r = Raphael('adzone_clicks'),
            txtattr = { font: '12px sans-serif' },
            data = {{ module.children|safe }},
            ad_labels = [], ad_series = [];

        for (var i=0; i<data.length; i++) {
            var values = [], labels = [];
            var base_title = data[i][0];
            var base_items = data[i][1];
            for (var j=0; j<base_items.length; j++) {
                labels.push(base_items[j][0]);
                values.push(base_items[j][1]);
            }
            if (i == 0)
                ad_labels = labels;
            ad_series.push([labels, values]);
        }
        console.log(ad_labels, ad_series);

        r.text(10, 10, "Click for last 30 days").attr(txtattr);

        var lines = r.linechart(0, 0, 300, 220, ad_labels, ad_series,
            { nostroke: false, axis: "0 0 1 1", symbol: "circle", smooth: true }
            );
    });
})(jQuery.noConflict());
