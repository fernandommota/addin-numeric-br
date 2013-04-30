/** start addIn numericBR **/
 var numericBR = {
    name: "numericBR",
    label: "Numeric BR",
    defaults: {
      textFormat: function(v, st) {
          var nStr= v.toFixed(2)+'';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? ',' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + '.' + '$2');
		}
		return x1 + x2}
    },
    init: function(){
      $.fn.dataTableExt.oSort[this.name+'-asc'] = $.fn.dataTableExt.oSort['numeric-asc'];
      $.fn.dataTableExt.oSort[this.name+'-desc'] = $.fn.dataTableExt.oSort['numeric-desc'];
    },
    
    implementation: function(tgt, st, opt){
      var text = opt.textFormat.call(this, st.value, st, opt);
      $(tgt).empty().append("<span style='text-align:right;'>"+text+"</span>");
    }
    
  };
  Dashboards.registerAddIn("Table", "colType", new AddIn(numericBR));
/** end addIn numericBR **/