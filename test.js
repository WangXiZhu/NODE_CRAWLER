var index = require('./index.js');

// var page = 1;
var result = [];
var params = {
  query: '伟明环保分红',
  from: 'index-nologin',
  sugsuv:1490161110032286,
  sut:1071,
  sugtime:1490161117220,
  sst0:1490161117220,
  ie: 'utf8',
  p:40040100,
  dp:1,
  w: '01019900',
  dr: 1,
  page : 1
}
function getParams (params){
  var json = [];
  Object.keys(params).forEach(function(key,i){
    json.push(key+'='+encodeURI(params[key]));
  });
  return 'https://www.sogou.com/web?' + json.join('&');
}


function run(url){
  console.info('-----------正在抓去第 '+params.page+' 的数据-----------');
  index(url,function($){
    params.page = ++params.page;
    var $dom = $('.rb .fb');
    var arr = [];
    $dom.each(function(index, element){
      result.push($(element).find('cite').text());
    });

    if($dom.length){
      run(getParams(params));
    }else{
      console.log('\n\n\n总的数据条数为： '+result.length);
      console.log(result.join('\n'));
    }
  });
}



function excute(keyword){
  params.query = keyword || params.query;
  run(getParams(params));
}

excute();     //