function convertScript() {
  inputStr = document.querySelector("#githubScript").value;
  if (inputStr == "") {
    return;
  }

  ghproxy = document.querySelector("#ghproxy").value;
  perlcmdbegin = ' | perl -pe "$(curl -L ';
  perlcmdend = ')"';
  perlrule = ghproxy + 'perl-pe-para';

  // 先给裸的git类链接前面加上 https://
  inputStr = inputStr.replace(/ git/g, ' https://git');

  // 再进行加github proxy的转换
  regex = /(bash.*?)(https?:\/\/.*?)(\).*)/s;
  replacement = '$1' + ghproxy + '$2' + perlcmdbegin + perlrule + perlcmdend + '$3';

  resultStr = inputStr.replace(regex, replacement);

  document.querySelector("#scriptAfterGhproxy").value = resultStr;
}

function copyResult() {
  resultStr = document.querySelector("#scriptAfterGhproxy").value;
  navigator.clipboard.writeText(resultStr);
}

function getLocalUrl() {
  document.querySelector("#ghproxy").value = window.location.href;
}

function convertRes() {
  inputStr = document.querySelector("#githubRes").value;
  if (inputStr == "") {
    return;
  }

  ghproxy = document.querySelector("#ghproxy").value;

  // 先给裸的git类链接前面加上 https://
  inputStr = inputStr.replace(/ git/g, ' https://git');

  resultStr = ghproxy + inputStr;

  document.querySelector("#resAfterGhproxy").value = resultStr;
}

function fetchRes() {
  window.open(document.querySelector("#resAfterGhproxy").value);
}