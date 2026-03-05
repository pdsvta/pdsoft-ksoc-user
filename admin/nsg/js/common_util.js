/*
var protocol = document.location.protocol;
var hostname = document.location.hostname;
var port = document.location.port;
var pathname = document.location.pathname;
var newUrl = "";

if(protocol=="http:") {
  newUrl = "https://" + hostname + ":443" + pathname;
  document.location.href = newUrl;
}
*/	
	function CheckPassword(ObjUserID, ObjUserPassWord, objUserPassWordRe) {
		return CheckPassword2Composite(ObjUserID, ObjUserPassWord, objUserPassWordRe)
	}
	
	/**
	 * 비밀번호 확인
	 * 두가지 조합으로 확인
	 */
	function CheckPassword2Composite(ObjUserID, ObjUserPassWord, objUserPassWordRe) {
	    if(ObjUserPassWord.value != objUserPassWordRe.value) {
	        alert("입력하신 비밀번호와 비밀번호확인이 일치하지 않습니다");
	        return false;
	    }
		
	    if(ObjUserPassWord.value.length<10) {
	        alert("비밀번호는 영문자, 숫자의 조합으로 10~16자리로 입력해주세요.");
	        return false;
	    }
	    
		var chk_num = ObjUserPassWord.value.search(/[0-9]/); 
		var chk_eng = ObjUserPassWord.value.search(/[a-zA-Z]/); 
		var chk_special = ObjUserPassWord.value.search(/[!,@,#,$,%,^,&,*,?,_,~]/);
		
	  if(chk_num <0 || chk_eng<0) {
	  	alert("비밀번호는 영문자, 숫자의 조합으로 10~16자리로 입력해주세요.");
	      return false;
	  }
	    
		if(ObjUserPassWord.value.indexOf(ObjUserID.value) != -1) {
			alert("비밀번호에 아이디를 사용할 수 없습니다.");
			return false;
		}
		
	  var SamePass_0 = 0; //동일문자 카운트
	  var SamePass_1 = 0; //연속성(+) 카운드
	  var SamePass_2 = 0; //연속성(-) 카운드
	  
	  var chr_pass_0;
	  var chr_pass_1;
	  var chr_pass_2;
	    
	  for(var i=0; i < ObjUserPassWord.value.length; i++) {
	    chr_pass_0 = ObjUserPassWord.value.charAt(i);
	    chr_pass_1 = ObjUserPassWord.value.charAt(i+1);
	    
	    //동일문자 카운트
	    if(chr_pass_0 == chr_pass_1) {
	        SamePass_0 = SamePass_0 + 1
	    }
	    
	    chr_pass_2 = ObjUserPassWord.value.charAt(i+2);
		
	    //연속성(+) 카운드
			if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == 1) {
	        SamePass_1 = SamePass_1 + 1
	    }
	      
	    //연속성(-) 카운드
	    if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == -1) {
	        SamePass_2 = SamePass_2 + 1
	    }
		}
	    
		if(SamePass_0 > 1) {
	    alert("동일문자를 3번 이상 사용할 수 없습니다.");
	    return false;
	  }
	   
	  if(SamePass_1 > 1 || SamePass_2 > 1 ) {
	      alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
	      return false;
	  }
	 	return true;
	}
	
	/**
	 * 비밀번호 확인
	 * 세가지 조합으로 확인
	 */
	function CheckPassword3Composite(ObjUserID, ObjUserPassWord, objUserPassWordRe) {
	    if(ObjUserPassWord.value != objUserPassWordRe.value) {
	        alert("입력하신 비밀번호와 비밀번호확인이 일치하지 않습니다");
	        return false;
	    }
		
	    if(ObjUserPassWord.value.length<8) {
	        alert("비밀번호는 영문자, 숫자, 특수문자의 조합으로 8~16자리로 입력해주세요.");
	        return false;
	    }
	
		var chk_num = ObjUserPassWord.value.search(/[0-9]/); 
		var chk_eng = ObjUserPassWord.value.search(/[a-zA-Z]/); 
		var chk_special = ObjUserPassWord.value.search(/[!,@,#,$,%,^,&,*,?,_,~]/);
		//alert(chk_num + "/" + chk_eng + "/" + chk_special);
		
	  if(chk_num <0 || chk_eng<0 || chk_special<0) {
	  	alert("비밀번호는 영문자, 숫자, 특수문자의 조합으로 8~16자리로 입력해주세요2.");
	      return false;
	  }
	    
	    
		if(ObjUserPassWord.value.indexOf(ObjUserID.value) != -1) {
			alert("비밀번호에 아이디를 사용할 수 없습니다.");
			return false;
		}
		
	  var SamePass_0 = 0; //동일문자 카운트
	  var SamePass_1 = 0; //연속성(+) 카운드
	  var SamePass_2 = 0; //연속성(-) 카운드
	  
	  var chr_pass_0;
	  var chr_pass_1;
	  var chr_pass_2;
	  
	  for(var i=0; i < ObjUserPassWord.value.length; i++)
	  {
	    chr_pass_0 = ObjUserPassWord.value.charAt(i);
	    chr_pass_1 = ObjUserPassWord.value.charAt(i+1);
	    
	    //동일문자 카운트
	    if(chr_pass_0 == chr_pass_1) {
	        SamePass_0 = SamePass_0 + 1
	    }
	   	
	    chr_pass_2 = ObjUserPassWord.value.charAt(i+2);
	    
	    //연속성(+) 카운드
			if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == 1) {
	        SamePass_1 = SamePass_1 + 1
	    }
	    
	    //연속성(-) 카운드
	    if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == -1) {
	        SamePass_2 = SamePass_2 + 1
	    }
	  }
	    
	  if(SamePass_0 > 1) {
	      alert("동일문자를 3번 이상 사용할 수 없습니다.");
	      return false;
	  }
	   
	  if(SamePass_1 > 1 || SamePass_2 > 1 ) {
	      alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
	      return false;
	  }
	 	return true;
	}

	/**
	 * =====================================================
	 * 문자열 값이 유효한 값인지 검사한다.
	 * @ Parameter
	 *	val : 검사할 문자열
	 * @ Return
	 *	boolean : true(유효한 문자열) / false(유효하지 않은 문자열)
	 * =====================================================
	 */
	function isValidStr(val) {
		if(val!=undefined && val!=null && String(val).length>0 && val!="undefined" && val!="null")
			return true;
		else
			return false;
	}

	/**
	 * =====================================================
	 * 유효한 오브젝트인지 검사한다.
	 * @ Parameter
	 *	val : 검사할 객체
	 * @ Return
	 *	boolean : true(유효한 객체) / false(유효하지 않은 객체)
	 * =====================================================
	 */
	function isValidObj(obj) {
		if(obj!=undefined && obj!=null)
			return true;
		else
			return false;
	}


	/**
	 * =====================================================
	 * Object를 찾아서 리턴한다.
	 * @ Parameter
	 *	objName : 객체 아이디
	 * @ Return
	 *	Object : ID가 일치하는 Object
	 * =====================================================
	 */
	function findObject(objName) {
		var obj = document.getElementById(objName);
		//if(obj==null || obj==undefined)
		//	alert(objName);

		return obj;
	}

	/**
	 * =====================================================
	 * Select Box의 Option을 삭제
	 * @ Parameter
	 *	e : select
	 * @ Return
	 *	void
	 * =====================================================
	 */
	function removeAll(e){
		//console.log(e.options)
	  for(var i = 0, limit = e.options.length; i < limit - 1; ++i){
	      e.remove(1);
	  }
	}

	/**
	 * =====================================================
	 * Select 박스에 특정값을 찾아 선택된 상태로 처리
	 * =====================================================
	 */
	function setSelectValue(obj, val) {
		if(obj==null || obj==undefined) {
			alert("Object is null");
			return;
		}

		for(var idx=0; idx<obj.options.length; idx++) {
			if(obj.options[idx].value==val) {
				obj.options.selectedIndex = idx;
				break;
			}
		}
	}

	/**
	 * =====================================================
	 * Select 박스에 선택된 값을 리턴
	 * =====================================================
	 */
	function getSelectValue(obj) {
		var retVal = "";

		if(obj==null || obj==undefined) {
			alert("Object is null");
			return null;
		}

		for(var idx=0; idx<obj.options.length; idx++) {
			if(obj.options[idx].selected) {
				retVal = obj.options[idx].value;
				break;
			}
		}
		return retVal;
	}

	/**
	 * =====================================================
	 * Select 박스에 선택된 텍스트를 리턴
	 * =====================================================
	 */
	function getSelectText(obj) {
		var retVal = "";

		if(obj==null || obj==undefined) {
			alert("Object is null");
			return null;
		}

		for(var idx=0; idx<obj.options.length; idx++) {
			if(obj.options[idx].selected) {
				retVal = obj.options[idx].text;
				break;
			}
		}
		return retVal;
	}

	/**
	 * =====================================================
	 * Select 박스에 선택된 텍스트를 리턴
	 * =====================================================
	 */
	function getSelectLabel(obj) {
		var retVal = "";

		if(obj==null || obj==undefined) {
			alert("Object is null");
			return null;
		}

		for(var idx=0; idx<obj.options.length; idx++) {
			if(obj.options[idx].selected) {
				retVal = obj.options[idx].label;
				break;
			}
		}
		return retVal;
	}

	/**
	 * =====================================================
	 * Input 생성
	 * @ Parameter
	 *	oType : Input type(hidden, text ...)
	 *	oName : Input 이름
	 *	oValue : Input Object에 셋팅될 초기값
	 * =====================================================
	 */
	function createInput(oType, oName, oValue) {
		var obj = document.createElement("input");
		obj.setAttribute("type", oType);
		obj.setAttribute("class", "form2");
		obj.setAttribute("name", oName);
		obj.setAttribute("id", oName);
		obj.setAttribute("value", oValue);


		return obj;
	}

	/**
	 * =====================================================
	 * 회원이름이 유효한지 확인한다.
	 * 이 함수는 본인 인증을 사용하므로 더이상 사용하지 않음
	 * =====================================================
	 */
	function isValid_name(str) {
		str = str.replace(/(^\s*)|(\s*$)/g, "");
		if( str == '' ){
			alert("이름을 입력하세요.");
			return false;
		}

		var retVal = checkSpace( str );

		if( retVal ){
			alert("이름은 띄어쓰기 없이 입력하세요.");
			return false;
		}

		if( !isHangul(str) ) {
			alert("이름을 정확하게 입력해 주세요.");
			return false;
		}
		if( str.length > 10 ) {
			alert("이름은 10자까지만 사용할 수 있습니다.");
			return false;
		}

		return true;
	}

	/**
	 * =====================================================
	 * 한글인지 확인
	 * =====================================================
	 */
	function isHangul(s){
		var len;
		len = s.length;

		for (var i = 0; i < len; i++)  {
			if (s.charCodeAt(i) != 32 && (s.charCodeAt(i) < 44032 || s.charCodeAt(i) > 55203))
			return false;
		}

		return true;
	}

	/**
	 * =====================================================
	 * 비밀번호 유효성 검사
	 * =====================================================
	 */
	function isValid_passwd(str) {
		var cnt = 0;

		if( str == ""){
			alert("비밀번호를 입력하세요.");
			return false;
		}

		/* check whether input value is included space or not  */
		var retVal = checkSpace( str );
		if( retVal ) {
			alert("비밀번호는 공백없이 입력해 주세요.");
			return false;
		}
		if( str.length < 6 ){
			alert("비밀번호는 6~16자의 영문 대소문자와 숫자, 특수문자를 사용할 수 있습니다.");
			return false;
		}

		for( var i=0; i < str.length; ++i){
			if( str.charAt(0) == str.substring( i, i+1 ) ) ++cnt;
		}
		if( cnt == str.length ) {
			alert("안전도가 너무 낮습니다. 다른 비밀번호를 입력해 주세요.");
			return false;
		}

		var isPW = /^[A-Za-z0-9`\-=\\\[\];',\./~!@#\$%\^&\*\(\)_\+|\{\}:"<>\?]{6,16}$/;
		if( !isPW.test(str) ) {
			alert("비밀번호는 6~16자의 영문 대소문자와 숫자, 특수문자를 사용할 수 있습니다.");
			return false;
		}
		return true;
	}

	/**
	 * =====================================================
	 * 이메일 유효성 검사
	 * =====================================================
	 */
	function isValid_email(str){
		/* check whether input value is included space or not  */
		if(str == ""){
			alert("이메일 주소를 입력해 주세요.");
			return false;
		}
		var retVal = checkSpace( str );
		if( retVal ) {
			alert("이메일주소를 정확하게 입력해 주세요..");
			return false;
		}

		if( -1 == str.indexOf('.') ) {
			alert("이메일 주소를 정확하게 입력해 주세요.");
			return false;
		}

		/* checkFormat */
		var isEmail = /[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*@[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*/;
		if( !isEmail.test(str) ) {
			alert("이메일 주소를 정확하게 입력해 주세요.");
			return false;
		}
		if( str.length > 60 ) {
			alert("이메일 주소를 정확하게 입력해 주세요.");
			return false;
		}

		return true;
	}

	/**
	 * =====================================================
	 * 이메일 마스킹 1
	 * =====================================================
	 */
	function maskEmail(email, firstLen, lastLen) {
		//alert(email + "/" + firstLen + "/" + lastLen);

		if(email==null || email.length==0)
			return "";

		var tmpA = email.split("@");

		if(tmpA.length < 2)
			return email;

		var email_id = tmpA[0];
		var email_host = tmpA[1];

		var dispLen = firstLen + lastLen;
		var idLen = email_id==null ? 0 : email_id.length;

		if(idLen <= dispLen)
			return email;

		//alert(email_id);


		var retStr = "";
		var prefix = email_id.substring(0, firstLen);
		var surfix = email_id.substring(email_id.length-lastLen, email_id.length);
		var remain = email_id.length - (firstLen + lastLen);

		//alert(prefix + "/" + surfix + "/"  + remain);
		for(var idx=0; idx<remain; idx++) {
			retStr += "*";
		}

		retStr = prefix + retStr + surfix + "@" + email_host;
		//alert(retStr);

		return retStr;
	}

	/**
	 * =====================================================
	 * 이메일 마스킹 2
	 * =====================================================
	 */
	function maskEmail2(email, firstLen, lastLen) {
		//alert(email + "/" + firstLen + "/" + lastLen);

		if(email==null || email.length==0)
			return "";

		var tmpA = email.split("@");

		if(tmpA.length < 2)
			return email;

		var email_id = tmpA[0];
		var email_host = tmpA[1];

		var dispLen = firstLen + lastLen;
		var idLen = email_id==null ? 0 : email_id.length;

		if(idLen <= dispLen)
			return email;

		//alert(email_id);


		var retStr = "";
		var prefix = email_id.substring(0, firstLen);
		var surfix = email_id.substring(email_id.length-lastLen, email_id.length);
		var remain = email_id.length - (firstLen + lastLen);

		//alert(prefix + "/" + surfix + "/"  + remain);
		for(var idx=0; idx<remain; idx++) {
			retStr += "*";
		}

		//retStr = prefix + retStr + surfix + "@" + email_host;
		//alert(retStr);

		var maskHost = "";
		var hostA = email_host.split(".");
		if(hostA==null || hostA.length<2)
			return email;

		for(var idx=0; idx<hostA.length; idx++) {
			var tmp = hostA[idx];
			var len = tmp.length;

			if(idx==0) {
				maskHost += tmp.substring(0,1);
				for(var sidx=1; sidx<tmp.length; sidx++) {
					maskHost += "*";
				}
			} else if(idx==hostA.length-1) {
				maskHost += tmp;
			} else {
				for(var sidx=0; sidx<tmp.length; sidx++) {
					maskHost += "*";
				}
			}
			if(idx<hostA.length-1)
				maskHost += ".";
		}

		retStr = prefix + retStr + surfix + "@" + maskHost;
		//alert(retStr);

		return retStr;
	}

	/**
	 * =====================================================
	 * 핸드폰 마스킹
	 * =====================================================
	 */
	function maskMobile(mobile) {

		mobile = mobile.split("-").join("").split(" ").join("");

		if(mobile==null || mobile.length==0 )
			return "";

		if(mobile.length < 10)
			return mobile;

		var retStr = "";
		var str1 = mobile.substring(0, 3);
		var str2 = mobile.substring(3, (mobile.length-4));
		var str3 = mobile.substring(mobile.length-4, mobile.length);

		//alert(str1 + "/" + str2 + "/" + str3);
		for(var idx=0; idx<str2.length; idx++) {
			retStr += "*";
		}

		retStr = str1 + "-" + retStr + "-" + str3;
		//alert(retStr);

		return retStr;
	}

	/**
	 * =====================================================
	 * 일반전화 마스킹
	 * =====================================================
	 */
	function maskPhone(mobile) {

		// '-' 구분자 제거
		mobile = mobile.split("-").join("").split(" ").join("");

		if(mobile==null || mobile.length==0 )
			return "";

		// @가 없으면 그냥 리턴
		if(mobile.length < 9)
			return mobile;

		var retStr = "";
		var str1 = mobile.substring(0,2)=="02" ? mobile.substring(0,2) : mobile.substring(0, 3);
		var str2 = mobile.substring((mobile.substring(0,2)=="02" ? 2 : 3), (mobile.length-4));
		var str3 = mobile.substring(mobile.length-4, mobile.length);

		//alert(str1 + "/" + str2 + "/" + str3);
		for(var idx=0; idx<str2.length; idx++) {
			retStr += "*";
		}

		retStr = str1 + "-" + retStr + "-" + str3;
		//alert(retStr);

		return retStr;
	}

	/**
	 * =====================================================
	 * 핸드폰 split
	 * =====================================================
	 */
	function splitMobile(mobile) {

		mobile = mobile.split("-").join("").split(" ").join("");

		if(mobile==null || mobile.length==0 )
			return "";

		if(mobile.length < 10)
			return mobile;

		var retStr = "";
		var str1 = mobile.substring(0, 3);
		var str2 = mobile.substring(3, (mobile.length-4));
		var str3 = mobile.substring(mobile.length-4, mobile.length);

		return str1 + "-" + str2 + "-" + str3;
	}

	/**
	 * =====================================================
	 * 공백이 입력되었는지 검사
	 * =====================================================
	 */
	function checkSpace( str ) {
		if(str.search(/\s/) != -1){
			return true;
		} else {
			return false;
		}
	}

	function onlyNumberInput(obj)
	{
		var str = obj.value;
		str = new String(str);
		var rex = /[^0-9]/g;
		str=str.replace(rex,'');
		obj.value = str;
	}


	/**
	 * =====================================================
	 * Added by CWYOO at 2014.09.02
	 * 만 14세 미만 확인(생년월일로 비교)
	 * =====================================================
	 */
	function calculateAge2(birthDt){
		var rcode = -1;
		var sql = "SPOCLUB.GET.SERVER.DATE";
		var param = new Array();
		rcode = ajaxobj.HR_SELECTINTO(dbname, sql, param, true);

		if(rcode<0){
			alert(ajaxobj.errmsg);
			return;
		}

		var now = ajaxobj.results[0][0];

		var todayYear = Number(now.substr(0,4));
		var todayMonth = Number(now.substr(4,2));
		var todayDay = Number(now.substr(6,2));

		var ssnYear = Number(birthDt.substr(0,4));
		var ssnMonth = Number(birthDt.substr(4,2));
		var ssnDay = Number(birthDt.substr(6,2));

		var manAge = todayYear - ssnYear;

		if(todayMonth < ssnMonth){
			manAge = manAge -1;
		}else if(todayMonth == ssnMonth){
			if(todayDay < ssnDay){
				manAge = manAge -1;
			}
		}
		return manAge;
	}

	/**
	 * =====================================================
	 * 형식검사 관련 함수
	 * =====================================================
	 */
	// 0 ~ 9
	/*
	function CheckNumber(){
		//alert(event.keyCode);
		//if ((event.keyCode>=48 && event.keyCode<=57)) { event.returnValue=true;  }
		if ((event.keyCode>=48 && event.keyCode<=57) || event.keyCode==8 || event.keyCode==46 || event.keyCode==37 || event.keyCode==39 || event.keyCode==9) { event.returnValue=true;  }
		else  { event.returnValue=false;  }
	}
	*/
	// 0 ~ 9
	function CheckNumber(){
		/*
		event.preventDefault();
		if ((event.keyCode>=48 && event.keyCode<=57)) { event.returnValue=true;  }
		else  { event.returnValue=false;  }
		*/
		//alert(event.keyCode);
		if((event.keyCode>=48 && event.keyCode<=57)|| (96<=event.keyCode && event.keyCode<=105) || (event.keyCode==9) || (event.keyCode==8) || (event.keyCode==46)) {
			return;
		}
		event.preventDefault();
	}

	// 0 ~ 9,"-"(45)
	function CheckNumberBar(){
		//console.log(event.keyCode);
		if ((48<=event.keyCode && event.keyCode<=57) || (96<=event.keyCode && event.keyCode<=105) || (event.keyCode==8)||(event.keyCode==9) ||(event.keyCode==109)|| (event.keyCode==189)) {
			return;
			}
		event.preventDefault();
	}

	// 0 ~ 9,"."(46)
	function CheckNumberDot(){
		if ((48<=event.keyCode && event.keyCode<=57) || (event.keyCode==46)) { event.returnValue=true;  }
		else  { event.returnValue=false;  }
	}

	// 0 ~ 9,"."(46),"-"(45)
	function CheckNumberBarDot(){
		if ((48<=event.keyCode && event.keyCode<=57) || (event.keyCode==45) || (event.keyCode==46)) { event.returnValue=true;  }
		else  { event.returnValue=false;  }
	}

	// 0 ~ 9,"-"," "(32),":"(58),"/"(47)
	function CheckNumberDateTime(){
		if ((48<=event.keyCode && event.keyCode<=58) || (event.keyCode==45) || (event.keyCode==47) || (event.keyCode==32)) { event.returnValue=true;  }
		else  { event.returnValue=false;  }
	}

	// 0 ~ 9,"-", "."(46)
	function CheckMoney(){
		if ((48<=event.keyCode && event.keyCode<=57) || (event.keyCode==45) || (event.keyCode==46)) { event.returnValue=true;  }
		else  { event.returnValue=false;  }
	}

	// A~Z, " "(SPACE)
	function CheckCapital(){
		if ((65<=event.keyCode && event.keyCode<=90) || (event.keyCode==32)) { event.returnValue=true;  }
		else  { event.returnValue=false;  }
	}

	// A~Z, a~z, " "(SPACE)
	function CheckAlphabet(){
		if ((65<=event.keyCode && event.keyCode<=90) || (97<=event.keyCode && event.keyCode<=122) || (event.keyCode==32)) { event.returnValue=true;  }
		else  { event.returnValue=false;  }
	}



/*****************************************************
               HTML 관련 함수
*****************************************************/
  // 설  명 : 입력상자의 값에 해당하는 선택박스의 인덱스를 설정한다.
  function set_select ( txt_ele, sel_ele )
  {
      ok_flag = 0;
      txt_value = txt_ele.value.toUpperCase();
      if (txt_value == "") {  sel_ele.options[0].selected = true;  ok_flag = 1;  }
      else
      {
          for(var i = 0; i < sel_ele.length; i++)
          {
              if(txt_value == sel_ele.options[i].value)
              {
                  sel_ele.options[i].selected = true;
                  ok_flag = 1;
              }
          }
      }
      if (ok_flag == 0)
      {
          if (MESSAGE_FG=="ENG") {
              alert("[" + txt_value +"] is not Found.");
          }else{
              alert("[" + txt_value +"]코드는 존재하지 않습니다. 확인후 다시 선택하세요.");
          }
          txt_ele.value = '';
          sel_ele.options[0].selected = true;
          txt_ele.focus();
          return false;
      }
      return true;
  }
  
	/**
	 * =====================================================
	 * 필수입력항목 체크
	 * =====================================================
	 */
	function requiredField(obj,errMsg){
		if (trim(obj.value) == ""){
			alert(errMsg);
			obj.focus();
			return false;
		}
		return true;
	}

	/**
	 * =====================================================
	 * 앞/뒤에서 White Space가 제거된 값반환
	 * =====================================================
	 */
	function trim(value)  {
  		return value.replace(/^\s+|\s+$/g,"");
	}


	/**
	 * =====================================================
	 * RADIO BUTTON Checked value get : set  ....
	 * =====================================================
	 */
	function getRadioCheckedValue(radioObj) {
		if(!radioObj)
			return "";
		var radioLength = radioObj.length;
		if(radioLength == undefined) {
			if(radioObj.checked)
				return radioObj.value;
			else
				return "";
		}
		for(var i = 0; i < radioLength; i++) {
			if(radioObj[i].checked) {
				return radioObj[i].value;
			}
		}
		return "";
	}

	function setRadioCheckedValue(radioObj, newValue) {
		if(!radioObj)
			return;
		var radioLength = radioObj.length;
		if(radioLength == undefined) {
			radioObj.checked = (radioObj.value == newValue.toString());
			return;
		}
		for(var i = 0; i < radioLength; i++) {
			radioObj[i].checked = false;
			if(radioObj[i].value == newValue.toString()) {
				radioObj[i].checked = true;
			}
		}
	}
	
	// Added by CWYOO at 2016.11.09
  function convnullspace(obj) {
    var result = new Object();
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          if ( obj[i] == null ) {
            result[i] = "";
          }
          else {
            result[i] = obj[i];
          }
          if($.isArray( result[i])) {
              result[i] = convArraynullspace(obj[i]);
          }
      }
    }
    return result;
  }
  
  // Added by CWYOO at 2016.11.09
  function convArraynullspace(arr) {
    var retobj = new Object();
    var retarr = new Array();
    for (var j=0;j<arr.length;j++) {
      retobj = convnullspace(arr[j]);
      retarr.push(retobj);
    }
    return retarr;
  }
  
  // Added by CWYOO at 2016.11.09
  function isArray(s) {
    return s.constructor.toString().indexOf("Array") > -1; //  배열이면 true  배열이 아니면  false값을 반환
  }

  /**
   * Added by CWYOO at 2017.12.18
   */
  function resizeImg(imgId) {
    //alert(imgId);
    var obj = findObject(imgId);
	if(isValidObj(obj)) {
      if(obj.width > 800) {
        obj.width = 800;
      } else {
        //alert(obj.width);
      }
    }
  }
  
  
  



	function getElement(query){
	
		if(query == undefined || query.length == 0){
			throw new Error('== param Error ==');
		}
		else{
			return document.querySelector(query);
		}
	}
	function getElementAll(query){
		
		if(query == undefined || query.length == 0){
			throw new Error('== param Error ==');
		}
		else{
			return document.querySelectorAll(query);
		}
	}
	/**
	 * maxlength 
	 */
	function maxLengthCheck(object){
	
		if(object.value.length > object.maxLength) {
	
			object.value = object.value.slice(0, object.maxLength);
		}
	}	


	function fn_checked(el) {
		var val = $(el).val();
		var chk = $(el).prop('checked');
		//console.log(val)
		//console.log(chk)
		return chk
	}

	function fn_selected(el) {
		var val = $(el).val();
		//console.log(val)
	}


/**
* 
* 체크박스 체크 여부
*/
function isChecked(name){
	var classAtt = document.querySelector('label[for="'+name+'"]').getAttribute('class');
	if(classAtt == null){
		return false;
	}
	else{
		return classAtt.indexOf('is_active') >= 0 ? true : false;
	}
}

function selectInit(id){
		// select
		//id = 'searchDetailClassCd';
		var selectBox =  $('#' + id).closest('.formInput-select');
		//console.log(selectBox)

		selectBox.find('dl dt').removeClass('is_active');
		selectBox.find('dd ul').css('display', 'none');



		selectBox.each(function() {
			
		var selectOption = $(this).find('option')
				selectList = $(this).find('ul');
				appendSelectLi = '<li data="1">'
				+'<a href="javascript:void(0)"></a>'
				+'</li>';

		
		selectList.html('')
		
		var optionVal = $(this).find('option[selected]').text()
		if(optionVal.trim() == ''){
			optionVal = selectOption.eq(0).text();
		}
		$(this).find('dt').text(optionVal);
		


		for(i = 0; i < selectOption.length; i++){
				selectList.append(appendSelectLi);
				$(this).find('li').eq(i).find('a').text(selectOption.eq(i).text());
		}

		selectList.find('a').on('click',function(e){
				e.preventDefault();
				$(this).closest('ul').stop().slideUp();
				$(this).parents('dd').siblings('dt').removeClass('is_active');
				var opIndex = $(this).parents('li').index()
						eachBox = $(this).parents('.formInput-select')
						onSelect = $(this).parents('.formInput-select').children('select')
				eachBox.find('option').removeAttr('selected');
				eachBox.find('option').eq(opIndex).attr('selected','selected');
				$(this).closest('dd').siblings('dt').text(eachBox.find('option[selected]').text());
				onSelect.trigger('change');
		});
	});




}


function setSelectBoxValue(id, value){

	var selectBox = document.querySelector('#' + id);
	var optionList = selectBox.querySelectorAll('option');
	var idx;
	for(var i=0; i<optionList.length; i++ ){
		optionList[i].removeAttribute('selected');
	}

	if(value != null){
		selectBox.value = value;
		idx = selectBox.selectedIndex;

		

		if(idx < 0 || isNaN(idx)){
			return false;
		}

		optionList[idx].setAttribute('selected', 'selected');
		selectInit(id);
	}


}
function setSelectBoxIndex(id, index){

	var selectBox = document.querySelector('#' + id);
	var optionList = selectBox.querySelectorAll('option');
	for(var i=0; i<optionList.length; i++ ){
		optionList[i].removeAttribute('selected');
	}

	if(index != null && index != undefined && !isNaN(index)){
		selectBox.selectedIndex = index;
		optionList[index].setAttribute('selected', 'selected');
		selectInit(id);
	}

}



function setValue(id, v) {
    var el = document.getElementById(id);
		var tagName;
		var type;

		if(el !== null){
			tagName = el.tagName;
			type = el.type;
		}

    if (el === null || type === 'radio' || type === 'checkbox' ) {
        var el = document.getElementsByName(id);
        if (el.length <= 0) return;

        if (el[0].type === 'radio') setRadioValue(el, v);
        else if (el[0].type === 'checkbox') setCheckboxValue(el, v);

    } else {

        
        if (tagName === 'INPUT') el.value = v;
        else if (tagName === 'SELECT') setSelectValue(el, v);
        else if (tagName === 'SPAN') el.innerText = v;
    }
}





function setCheckboxValue(el, v) {
		var len = el.length;
    for (var i = 0; i < el.length; i++) {
        if (isValidStr(v)) {
            if (len <= 2 && el[i].value === v) check(el[i]);
						else if (len > 2 && v.indexOf(el[i].value) >= 0 && el[i].value !== "") check(el[i]);
            else unCheck(el[i]);
        } else {
						if(len === 1) unCheck(el[i]);
            else check(el[i]);
        }
    }
}

function check(el) {
    el.setAttribute('checked', 'checked');
    el.nextElementSibling.classList.add('is_active');
}
function unCheck(el) {
    el.removeAttribute('checked');
    el.nextElementSibling.classList.remove('is_active');
}

function setRadioValue(el, v) {
    for (var i = 0; i < el.length; i++) {
        if (el[i].value === v) check(el[i]);
        else unCheck(el[i]);
    }
}


function getNumber(val){
	var regex = /[^0-9]/g;				
	var result = val.replace(regex, "");
	return result;
}




/**
* 페이지 이동
*/
function linkPageSub(){
	if(event.keyCode =='13'){
		var pageNum = document.querySelector('#page').value;
		var maxnum = document.querySelector('#page').getAttribute('max');

		if(pageNum == ''){
			alert('페이지번호가 입력되지 않았습니다.')
			return;
		}
		else if(maxnum == null){
			alert('최대 페이지 범위가 설정되지 않았습니다.');
			return;
		}
		else if(Number(maxnum) < Number(pageNum)){
			alert('최대 페이지 범위 밖입니다.');
			return;
		}
			

		linkPage(pageNum);
	}
}


/*
 *  만 14세 미만 확인
 *  2020.05.29 JINJIN SYSTEM
 *  birth를 넣는다. YYYYMMDD 포맵
 *  2020.11.26 YYYYMMDD,YYMMDD,YYMMDDS 지원
 *  7자리 YYMMDD+성별 (주빈번호) 코드시에도 절삭해서 적용.
 */
function isUnderAge(age){
   var date = new Date();
   var year = date.getFullYear();
   var month=(date.getMonth()+1);
   var day = date.getDate();
   
   if(month < 10) month='0'+month;
   if(day < 10) day = '0'+day;
   var monthDay = ''+month + day;
   age = age.replace('-','').replace('-','').replace('.','');
   var by='';
   var agemonthDay='';
   
   
   if(age.length==8){
      //YYYYMMDD형식
      by = age.substr(0,4);
      agemonthDay = age.substr(4,4);
      
      var dmd = year - by;
      if(agemonthDay>monthDay)
      {//생일이 안지났음.
         dmd = dmd-1;
      }
      return dmd<14;
      
   }
   else if(age.length==6||age.length==7){
       //YYMMDD
      by = age.substr(0,2);
      var fc =by.substr(0,1);
      agemonthDay = age.substr(2,4);
      if(fc=='0'||fc=='1')
      {
         by ='20'+by;
      }
      else
      {
         by = '19'+by;
      }
      var dmd = year - by;
      if(agemonthDay>monthDay)
      {//생일이 안지났음.
         dmd = dmd-1;
      }
      return dmd<14;
   }
   else{
      return true;
   }
   
}



/**
* 페이지 표시건수 변경
* @param {*} id = form id
* @param {*} that = this
* @param {*} searchList = 검색함수
*/
function pageUnitChange(id, that, searchList){
	var frm = findObject(id);
	frm.pageUnit.value = that.value;
	searchList();
}  

/*
$(document).click(function(e){
	var selectBox = $('.formInput-select');	
	if($(e.target).closest('.formInput-select').length == 0){
		selectBox.find('ul').stop().hide();
		selectBox.find('dt').removeClass('is_active');
	}
	else if($(e.target).closest('.formInput-select').length > 0){
		
	}
});  
*/

document.addEventListener("DOMContentLoaded", function(){
	
	var numberInputList = getElementAll('input[type=number]');

	for(var i=0; i<numberInputList.length; i++){
		numberInputList[i].addEventListener('input', maxLengthCheck);
		numberInputList[i].addEventListener('keyup', numberReplaceBlank);
		
	}
});	


  /**
   * 
   */
	function maxLengthCheck(){
		if (this.value.length > this.maxLength && this.maxLength > 0){
			this.value = this.value.slice(0, this.maxLength);
		}    
	}
	function numberReplaceBlank(e){
		this.value=this.value.replace(/[^.0-9]/g,'');
	}



  /**
   * IE9이상 작동
   * closest polyfill
   */
	 if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var el = this;

      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }  
  
  /**
   * trim polyfill
   */
  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  }
  
  

/**
 * classList polyfill
 */
// 1. String.prototype.trim polyfill
if (!"".trim) String.prototype.trim = function(){ return this.replace(/^[\s﻿]+|[\s﻿]+$/g, ''); };
(function(window){"use strict"; // prevent global namespace pollution
if(!window.DOMException) (DOMException = function(reason){this.message = reason}).prototype = new Error;
var wsRE = /[\11\12\14\15\40]/, wsIndex = 0, checkIfValidClassListEntry = function(O, V) {
  if (V === "") throw new DOMException(
    "Failed to execute '" + O + "' on 'DOMTokenList': The token provided must not be empty." );
  if((wsIndex=V.search(wsRE))!==-1) throw new DOMException("Failed to execute '"+O+"' on 'DOMTokenList': " +
    "The token provided ('"+V[wsIndex]+"') contains HTML space characters, which are not valid in tokens.");
}
// 2. Implement the barebones DOMTokenList livelyness polyfill
if (typeof DOMTokenList !== "function") (function(window){
    var document = window.document, Object = window.Object, hasOwnProp = Object.prototype.hasOwnProperty;
    var defineProperty = Object.defineProperty, allowTokenListConstruction = 0, skipPropChange = 0;
    function DOMTokenList(){
        if (!allowTokenListConstruction) throw TypeError("Illegal constructor"); // internally let it through
    }
    DOMTokenList.prototype.toString = DOMTokenList.prototype.toLocaleString = function(){return this.value};
    DOMTokenList.prototype.add = function(){
        a: for(var v=0, argLen=arguments.length,val="",ele=this[" uCL"],proto=ele[" uCLp"]; v!==argLen; ++v) {
            val = arguments[v] + "", checkIfValidClassListEntry("add", val);
            for (var i=0, Len=proto.length, resStr=val; i !== Len; ++i)
                if (this[i] === val) continue a; else resStr += " " + this[i];
            this[Len] = val, proto.length += 1, proto.value = resStr;
        }
        skipPropChange = 1, ele.className = proto.value, skipPropChange = 0;
    };
    DOMTokenList.prototype.remove = function(){
        for (var v=0, argLen=arguments.length,val="",ele=this[" uCL"],proto=ele[" uCLp"]; v !== argLen; ++v) {
            val = arguments[v] + "", checkIfValidClassListEntry("remove", val);
            for (var i=0, Len=proto.length, resStr="", is=0; i !== Len; ++i)
                if(is){ this[i-1]=this[i] }else{ if(this[i] !== val){ resStr+=this[i]+" "; }else{ is=1; } }
            if (!is) continue;
            delete this[Len], proto.length -= 1, proto.value = resStr;
        }
        skipPropChange = 1, ele.className = proto.value, skipPropChange = 0;
    };
    window.DOMTokenList = DOMTokenList;
    function whenPropChanges(){
        var evt = window.event, prop = evt.propertyName;
        if ( !skipPropChange && (prop==="className" || (prop==="classList" && !defineProperty)) ) {
            var target = evt.srcElement, protoObjProto = target[" uCLp"], strval = "" + target[prop];
            var tokens=strval.trim().split(wsRE), resTokenList=target[prop==="classList"?" uCL":"classList"];
            var oldLen = protoObjProto.length;
            a: for(var cI = 0, cLen = protoObjProto.length = tokens.length, sub = 0; cI !== cLen; ++cI){
                for(var innerI=0; innerI!==cI; ++innerI) if(tokens[innerI]===tokens[cI]) {sub++; continue a;}
                resTokenList[cI-sub] = tokens[cI];
            }
            for (var i=cLen-sub; i < oldLen; ++i) delete resTokenList[i]; //remove trailing indexs
            if(prop !== "classList") return;
            skipPropChange = 1, target.classList = resTokenList, target.className = strval;
            skipPropChange = 0, resTokenList.length = tokens.length - sub;
        }
    }
    function polyfillClassList(ele){
        if (!ele || !("innerHTML" in ele)) throw TypeError("Illegal invocation");
        ele.detachEvent( "onpropertychange", whenPropChanges ); // prevent duplicate handler infinite loop
        allowTokenListConstruction = 1;
        try{ function protoObj(){} protoObj.prototype = new DOMTokenList(); }
        finally { allowTokenListConstruction = 0 }
        var protoObjProto = protoObj.prototype, resTokenList = new protoObj();
        a: for(var toks=ele.className.trim().split(wsRE), cI=0, cLen=toks.length, sub=0; cI !== cLen; ++cI){
            for (var innerI=0; innerI !== cI; ++innerI) if (toks[innerI] === toks[cI]) { sub++; continue a; }
            this[cI-sub] = toks[cI];
        }
        protoObjProto.length = cLen-sub, protoObjProto.value = ele.className, protoObjProto[" uCL"] = ele;
        if (defineProperty) { defineProperty(ele, "classList", { // IE8 & IE9 allow defineProperty on the DOM
            enumerable:   1, get: function(){return resTokenList},
            configurable: 0, set: function(newVal){
                skipPropChange = 1, ele.className = protoObjProto.value = (newVal += ""), skipPropChange = 0;
                var toks = newVal.trim().split(wsRE), oldLen = protoObjProto.length;
                a: for(var cI = 0, cLen = protoObjProto.length = toks.length, sub = 0; cI !== cLen; ++cI){
                    for(var innerI=0; innerI!==cI; ++innerI) if(toks[innerI]===toks[cI]) {sub++; continue a;}
                    resTokenList[cI-sub] = toks[cI];
                }
                for (var i=cLen-sub; i < oldLen; ++i) delete resTokenList[i]; //remove trailing indexs
            }
        }); defineProperty(ele, " uCLp", { // for accessing the hidden prototype
            enumerable: 0, configurable: 0, writeable: 0, value: protoObj.prototype
        }); defineProperty(protoObjProto, " uCL", {
            enumerable: 0, configurable: 0, writeable: 0, value: ele
        }); } else { ele.classList=resTokenList, ele[" uCL"]=resTokenList, ele[" uCLp"]=protoObj.prototype; }
        ele.attachEvent( "onpropertychange", whenPropChanges );
    }
    try { // Much faster & cleaner version for IE8 & IE9:
        // Should work in IE8 because Element.prototype instanceof Node is true according to the specs
        window.Object.defineProperty(window.Element.prototype, "classList", {
            enumerable: 1,   get: function(val){
                                 if (!hasOwnProp.call(this, "classList")) polyfillClassList(this);
                                 return this.classList;
                             },
            configurable: 0, set: function(val){this.className = val}
        });
    } catch(e) { // Less performant fallback for older browsers (IE 6-8):
        window[" uCL"] = polyfillClassList;
        // the below code ensures polyfillClassList is applied to all current and future elements in the doc.
        document.documentElement.firstChild.appendChild(document.createElement('style')).styleSheet.cssText=(
            '_*{x-uCLp:expression(!this.hasOwnProperty("classList")&&window[" uCL"](this))}' + //  IE6
            '[class]{x-uCLp/**/:expression(!this.hasOwnProperty("classList")&&window[" uCL"](this))}' //IE7-8
        );
    }
})(window);
// 3. Patch in unsupported methods in DOMTokenList
(function(DOMTokenListProto, testClass){
    if (!DOMTokenListProto.item) DOMTokenListProto.item = function(i){
        function NullCheck(n) {return n===void 0 ? null : n} return NullCheck(this[i]);
    };
    if (!DOMTokenListProto.toggle || testClass.toggle("a",0)!==false) DOMTokenListProto.toggle=function(val){
        if (arguments.length > 1) return (this[arguments[1] ? "add" : "remove"](val), !!arguments[1]);
        var oldValue = this.value;
        return (this.remove(oldValue), oldValue === this.value && (this.add(val), true) /*|| false*/);
    };
    if (!DOMTokenListProto.replace || typeof testClass.replace("a", "b") !== "boolean")
        DOMTokenListProto.replace = function(oldToken, newToken){
            checkIfValidClassListEntry("replace", oldToken), checkIfValidClassListEntry("replace", newToken);
            var oldValue = this.value;
            return (this.remove(oldToken), this.value !== oldValue && (this.add(newToken), true));
        };
    if (!DOMTokenListProto.contains) DOMTokenListProto.contains = function(value){
        for (var i=0,Len=this.length; i !== Len; ++i) if (this[i] === value) return true;
        return false;
    };
    if (!DOMTokenListProto.forEach) DOMTokenListProto.forEach = function(f){
        if (arguments.length === 1) for (var i = 0, Len = this.length; i !== Len; ++i) f( this[i], i, this);
        else for (var i=0,Len=this.length,tArg=arguments[1]; i !== Len; ++i) f.call(tArg, this[i], i, this);
    };
    if (!DOMTokenListProto.entries) DOMTokenListProto.entries = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex<that.length ? {value: [nextIndex, that[nextIndex]], done: false} : {done: true};
        }};
    };
    if (!DOMTokenListProto.values) DOMTokenListProto.values = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex<that.length ? {value: that[nextIndex], done: false} : {done: true};
        }};
    };
    if (!DOMTokenListProto.keys) DOMTokenListProto.keys = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex<that.length ? {value: nextIndex, done: false} : {done: true};
        }};
    };
})(window.DOMTokenList.prototype, window.document.createElement("div").classList);
})(window);




