
function zipList(l1, l2) {
  let rtn = [];
  let i;
  for(i = 0; i < l1.length || i < l2.length; i++) {
    rtn[i * 2] = l1[i];
    rtn[i * 2 + 1] = l2[i];
  }


  return rtn;
}

function zipListTheSimpleWay(l1, l2) {
  return _.flatten(_.zip(l1, l2));
}