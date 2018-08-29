var font_test = Array('오징어','땅콩','드래곤볼','드라군','화곡','질럿','apple','김삐짐','정매너', '김김김' ,'윤삐짐',
	'Big','Application', '개발자', '김호수','김호구','김백수','윤백수','백수왕','매국노', '나그네','우왕', '아니', '되이', '디이디이디이');
var cho = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];

function cho_hangul(str) {
  result = "";

  for(i=0;i<str.length;i++) {
    code = str.charCodeAt(i)-44032;
    if(code>=0) result += cho[Math.floor(code/588)]; 
  }
  return result;
}

for (var i = 0; i < this.data.length; i++) {
	extract(this.data[i]);
	var cho_name = cho_hangul(name);
	var chk = 0;

	if (this.search == '') {
		result.push(val);
	} else {
		for (j = 0; j < name.length; j++) {
			var idx = 0;
			var cut = name.substring(j);

			for (var k = 0; k < cut.length; k++) {
				var st = cut[k];
				var cho_st = cho_hangul(st);
				var se = this.search[idx] || "";
				var cho_se = cho_hangul(se);

				var bol = (cho_se == se) ? (cho_st == cho_se) : (st == se);

				if (bol) {
					if (++idx == this.search.length) {
						chk = 1;
						break;
					}
				} else if(idx > 0) {
					chk = 0;
					break;
				}
			}
			if (chk) {
				result.push(this.data[i])
				break;
			}
		}
	}
}
