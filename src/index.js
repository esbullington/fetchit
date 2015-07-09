
exports.fetch = function (options) {
  var req = new XMLHttpRequest();
 
  req.open(options.method || 'GET', options.url, true);
 
  Object.keys(options.headers || {}).forEach(function (key) {
    req.setRequestHeader(key, options.headers[key]);
  });
 
  var promise = new Promise((resolve, reject)=> {
    req.onreadystatechange = (e)=> {
      if(req.readyState !== 4) {
        return;
      }
   
      if([200,304].indexOf(req.status) === -1) {
        reject(new Error('Server responded with a status of ' + req.status));
      } else {
        resolve(e.target);
      }
    };
  });
 
  req.send(options.data || void 0);
 
  return promise;
}
