function checkUrl(inputText) {
    var reg = new RegExp(/^(http|https):\/\/[^ "]+$/);
  return reg.test(inputText);
}

export default checkUrl;
