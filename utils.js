exports.getStringPattern = function(regexp, string) {

  if(regexp.exec(string)) {
    var result = regexp.exec(string);
    return result[1];
  } else {
    return false;
  }
}

/*export function getURLParam(name) {

  let params = document.location.search.replace('?', '').split('&');
  let o = {};
  params.forEach(function(param) {
    if(param) {
      let elem = param.split('=');
      o[elem[0]] = elem[1];
    }
  });
  if(name) return o[name]; else return o;
}

export function sortArray(array, reference) {

  array.sort(function(a, b){
    return reference.indexOf(a.name) - reference.indexOf(b.name)
  });
  return array;
}
*/
