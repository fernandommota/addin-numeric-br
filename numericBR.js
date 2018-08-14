/** start addIn numericBR **/
define([
  "cdf/AddIn",
  "cdf/Dashboard.Clean",
  "cdf/lib/CCC/pvc",
  "cdf/lib/jquery"
], function(AddIn, Dashboard, pvc, $) {
  //function for format with mask BR
  formatFunction = pvc.data.numberFormat({
    mask: "R$ #,##0.00",
    style: {
      decimal: ",",
      group: "."
    }
  });

  //register addIn
  Dashboard.registerGlobalAddIn(
    "Table",
    "colType",
    new AddIn({
      name: "numericBR",
      label: "Numeric BR",
      defaults: {},
      implementation: function(tgt, st, opt) {
        valueFormatted = formatFunction(st.value);
        $(tgt)
          .empty()
          .append(`<span>${valueFormatted}</span>`);
      }
    })
  );
});
/** end addIn numericBR **/
