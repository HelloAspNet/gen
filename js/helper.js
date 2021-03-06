template.helper('kToIndex', function (i, format) {
  i += 1;
  if (!format) return i;

  var len = ('' + format).length;
  i = 0..toFixed(len) + i;
  i = i.substring(i.length - len);
  return i;
});

template.helper('kToEnIndex', function (i) {
  return 'abcdefghijklmnopqrstuvwxyz'.charAt(i % 26);
});

template.helper('kToInt', function (i, format) {
  i += 1;
  if (!format) return i;

  var len = ('' + format).length;
  i = 0..toFixed(len) + i;
  i = i.substring(i.length - len);
  return i;
});

template.helper('kToNumber', function (v) {
  v = parseFloat(v);
  return isNaN(v) ? 0 : v;
});

template.helper('kToPrice', function (v) {
  if (v == null) return '';
  return '￥' + parseFloat(v);
});
