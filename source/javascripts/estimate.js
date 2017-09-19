var EstimationController = function ($scope) {
	$scope.name = 'Kevin';
	$scope.questions = questions;
	// fadeOut("member");
	$scope.next = function(next, now){
		$("#ques-"+now).hide();
		$("#ques-"+next).fadeIn();
		// alert(name);
	};
}
$(function(){
	fadeIn("member");
})
function fadeIn(name) {
	$("#ques-"+name).fadeIn();
}

var questions = {
	// type: {
	// 	question: "這個網站的類型是？",
	// 	options: [
	// 		{
	// 			title: "形象網站",
	// 			icon: "smile",
	// 			next: "chart",
	// 			flow: ["member", "ec", "ui", "other"]
	// 		},
	// 		{
	// 			title: "購物網站",
	// 			icon: "chart",
	// 			next: "loginType",
	// 			dependency: ["chart", "member"],
	// 			flow: ["member", "ec", "ui", "other"]
	// 		},
	// 		{
	// 			title: "公司內部系統",
	// 			icon: "home",
	// 			next: "importing",
	// 			dependency: ["member"],
	// 			flow: ["member", "ec", "ui", "other"]
	// 		},
	// 		{
	// 			title: "以上皆非",
	// 			icon: "question",
	// 			next: "",
	// 			flow: ["member", "ec", "ui", "other"]
	// 		}
	// 	]
	// },


	//===== 會員功能 =====//
	// {
	// 	begin: "member",
	// 	member: {
	// 		question: "有會員登入的需求嗎？",
	// 		options: [
	// 			{
	// 				title: "YES",
	// 				text: "YES",
	// 				next: "loginType"
	// 			},
	// 			{
	// 				title: "NO",
	// 				text: "NO",
	// 				next: "end"
	// 			}
	// 		]
	// 	},
	// 	loginType: {
	// 		question: "會員登入方式？",
	// 		options: [
	// 			{
	// 				title: "原生",
	// 				icon: "home",
	// 				next: "auth"
	// 			},
	// 			{
	// 				title: "社群網站",
	// 				icon: "facebook",
	// 				next: "auth"
	// 			},
	// 			{
	// 				title: "兩者皆有",
	// 				text: "Both",
	// 				next: "auth"
	// 			}
	// 		]
	// 	},
	// 	auth: {
	// 		question: "會員是否有權限分級？",
	// 		options: [
	// 			{
	// 				title: "有",
	// 				text: "YES",
	// 				next: "post"
	// 			},
	// 			{
	// 				title: "無",
	// 				text: "NO",
	// 				next: "post"
	// 			}
	// 		]
	// 	},
	// 	post: {
	// 		question: "會員是否能發文、回應？",
	// 		options: [
	// 			{
	// 				title: "YES",
	// 				text: "YES",
	// 				next: "end"
	// 			},
	// 			{
	// 				title: "NO",
	// 				text: "NO",
	// 				next: "end"
	// 			}
	// 		]
	// 	}
	// },

	// //===== 電子商務 =====//
	// {
	// 	begin: "chart",
	// 	chart: {
	// 		question: "有購物車的需求嗎？",
	// 		options: [
	// 			{
	// 				title: "YES",
	// 				text: "YES",
	// 				next: "payment",
	// 				price: 20000
	// 			},
	// 			{
	// 				title: "NO",
	// 				text: "NO",
	// 				next: "payment"
	// 			}
	// 		]
	// 	},
	// 	payment: {
	// 		question: "需要進行線上付款嗎？(如paypal)",
	// 		options: [
	// 			{
	// 				title: "YES",
	// 				text: "YES",
	// 				next: "member",
	// 				price: 20000
	// 			},
	// 			{
	// 				title: "NO",
	// 				text: "NO",
	// 				next: "member"
	// 			}
	// 		]
	// 	}
	// },

	// //===== UI =====//
	// {
	// 	begin: "design",
	// 	design: {
	// 		question: "這個網站目前的設計階段為...",
	// 		options: [
	// 			{
	// 				title: "零",
	// 				text: "0",
	// 				next: "cis",
	// 				price: 100000
	// 			},
	// 			{
	// 				title: "草稿",
	// 				icon: "pencil",
	// 				next: "cis",
	// 				price: 80000
	// 			},
	// 			{
	// 				title: "已有介面輪廓",
	// 				icon: "columns",
	// 				next: "cis",
	// 				price: 50000
	// 			},
	// 			{
	// 				title: "已完成設計",
	// 				icon: "picture",
	// 				next: "end",
	// 				price: 40000
	// 			}
	// 		]
	// 	},
	// 	cis: {
	// 		question: "有企業視覺識別(CIS)代入的需求嗎？",
	// 		options: [
	// 			{
	// 				title: "YES",
	// 				text: "YES",
	// 				next: "",
	// 				price: 50000
	// 			},
	// 			{
	// 				title: "NO",
	// 				text: "NO",
	// 				next: "",
	// 				price: 0
	// 			}
	// 		]
	// 	}
	// },

	// //===== 資料匯入及輸出 =====//
	// {
	// 	begin: "importing",
	// 	importing: {
	// 		question: "支援資料匯入的功能嗎？",
	// 		options: [
	// 			{
	// 				title: "Excel",
	// 				icon: "table",
	// 				next: "exporting",
	// 				price: 30000
	// 			},
	// 			{
	// 				title: "API",
	// 				icon: "link",
	// 				next: "exporting",
	// 				price: 40000
	// 			},
	// 			{
	// 				title: "都要",
	// 				text: "BOTH",
	// 				next: "exporting",
	// 				price: 70000
	// 			},
	// 			{
	// 				title: "NO",
	// 				text: "NO",
	// 				next: "exporting"
	// 			}
	// 		]
	// 	},

	// 	//===== 輸出 =====//
	// 	exporting: {
	// 		question: "支援資料匯出的功能嗎？",
	// 		options: [
	// 			{
	// 				title: "Excel",
	// 				icon: "table",
	// 				next: "end",
	// 				price: 30000
	// 			},
	// 			{
	// 				title: "PDF",
	// 				icon: "file",
	// 				next: "end",
	// 				price: 40000
	// 			},
	// 			{
	// 				title: "都要",
	// 				text: "BOTH",
	// 				next: "end",
	// 				price: 70000
	// 			},
	// 			{
	// 				title: "NO",
	// 				text: "NO",
	// 				next: "end"
	// 			}
	// 		]
	// 	}
	// },

	// //===== 其他 =====//
	// {
	// 	begin: "inforgraphic",
	// 	inforgraphic: {
	// 		question: "是否需要進行資訊圖像化？",
	// 		options: [
	// 			{
	// 				title: "YES",
	// 				text: "YES",
	// 				next: "api",
	// 				price: 100000
	// 			},
	// 			{
	// 				title: "NO",
	// 				text: "NO",
	// 				next: "api"
	// 			}
	// 		]
	// 	},
	// 	api: {
	// 		question: "是否需要開放api供他人使用？",
	// 		options: [
	// 			{
	// 				title: "YES",
	// 				text: "YES",
	// 				next: "finish",
	// 				price: 100000
	// 			},
	// 			{
	// 				title: "NO",
	// 				text: "NO",
	// 				next: "finish"
	// 			}
	// 		]
	// 	}
	// }

	member: {
		name: "member",
		question: "有會員登入的需求嗎？",
		options: [
			{
				title: "YES",
				text: "YES",
				next: "loginType"
			},
			{
				title: "NO",
				text: "NO",
				next: "chart"
			}
		]
	},
	loginType: {
		name: "loginType",
		question: "會員登入方式？",
		options: [
			{
				title: "原生",
				icon: "home",
				next: "auth"
			},
			{
				title: "社群網站",
				icon: "facebook",
				next: "auth"
			},
			{
				title: "兩者皆有",
				text: "Both",
				next: "auth"
			}
		]
	},
	auth: {
		name: "auth",
		question: "會員是否有權限分級？",
		options: [
			{
				title: "有",
				text: "YES",
				next: "post"
			},
			{
				title: "無",
				text: "NO",
				next: "post"
			}
		]
	},
	post: {
		name: "post",
		question: "會員是否能發文、回應？",
		options: [
			{
				title: "YES",
				text: "YES",
				next: "chart"
			},
			{
				title: "NO",
				text: "NO",
				next: "chart"
			}
		]
	},

	//===== 電子商務 =====//
	chart: {
		name: "chart",
		question: "有購物車的需求嗎？",
		options: [
			{
				title: "YES",
				text: "YES",
				next: "payment",
				price: 20000
			},
			{
				title: "NO",
				text: "NO",
				next: "payment"
			}
		]
	},
	payment: {
		name: "payment",
		question: "需要結合線上金流系統嗎？(如paypal)",
		options: [
			{
				title: "YES",
				text: "YES",
				next: "design",
				price: 20000
			},
			{
				title: "NO",
				text: "NO",
				next: "design"
			}
		]
	},

	//===== UI =====//
	design: {
		name: "design",
		question: "這個網站目前的設計階段為...",
		options: [
			{
				title: "零",
				text: "0",
				next: "cis",
				price: 100000
			},
			{
				title: "草稿",
				icon: "pencil",
				next: "cis",
				price: 80000
			},
			{
				title: "已有介面輪廓",
				icon: "columns",
				next: "cis",
				price: 50000
			},
			{
				title: "已完成設計",
				icon: "picture",
				next: "importing",
				price: 40000
			}
		]
	},
	cis: {
		name: "cis",
		question: "有企業視覺識別(CIS)代入的需求嗎？",
		options: [
			{
				title: "YES",
				text: "YES",
				next: "importing",
				price: 50000
			},
			{
				title: "NO",
				text: "NO",
				next: "importing",
				price: 0
			}
		]
	},

	//===== 資料匯入及輸出 =====//
	importing: {
		name: "importing",
		question: "支援資料匯入的功能嗎？",
		options: [
			{
				title: "Excel",
				icon: "table",
				next: "exporting",
				price: 30000
			},
			{
				title: "API",
				icon: "link",
				next: "exporting",
				price: 40000
			},
			{
				title: "都要",
				text: "BOTH",
				next: "exporting",
				price: 70000
			},
			{
				title: "NO",
				text: "NO",
				next: "exporting"
			}
		]
	},

	//===== 輸出 =====//
	exporting: {
		name: "exporting",
		question: "支援資料匯出的功能嗎？",
		options: [
			{
				title: "Excel",
				icon: "table",
				next: "inforgraphic",
				price: 30000
			},
			{
				title: "PDF",
				icon: "file",
				next: "inforgraphic",
				price: 40000
			},
			{
				title: "都要",
				text: "BOTH",
				next: "inforgraphic",
				price: 70000
			},
			{
				title: "NO",
				text: "NO",
				next: "inforgraphic"
			}
		]
	},

	inforgraphic: {
		name: "inforgraphic",
		question: "是否需要進行資訊圖像化？",
		options: [
			{
				title: "YES",
				text: "YES",
				next: "api",
				price: 100000
			},
			{
				title: "NO",
				text: "NO",
				next: "api"
			}
		]
	},
	api: {
		name: "api",
		question: "是否需要開放api供他人使用？",
		options: [
			{
				title: "YES",
				text: "YES",
				next: "finish",
				price: 100000
			},
			{
				title: "NO",
				text: "NO",
				next: "finish"
			}
		]
	}

};