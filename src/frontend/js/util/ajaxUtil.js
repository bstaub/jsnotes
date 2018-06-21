(function (util, $) {
  function ajax(metod, url, data, headers) {
    return $.ajax({
      dataType: 'json',
      contentType: 'application/json',
      headers,
      method: metod,
      url,
      data: data ? JSON.stringify(data) : undefined,
    });
  }
  util.ajax = { ajax };
}(window.util = window.util || { }, jQuery));
