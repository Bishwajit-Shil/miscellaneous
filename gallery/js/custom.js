$(function () {

  $('.jprt-container').jportilio({

  filter: [],

  // the ratio of item's width to item's height 
  ratio: "0.75",

  // number of items in row for small devices 
  // <768px 
  ws_xs: 1,

  //  768px < x < 992px 
  ws_sm: 2,

  // 992px < x < 1200px 
  ws_md: 3,

  // 1200px < x
  ws_lg: 4
  
  }); 

});