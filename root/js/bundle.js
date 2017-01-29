"use strict";

//constructor
var FollowingHeader = function(id){
	this.id = id;
};

//初期値を更新
FollowingHeader.prototype.init = function (){
	this.updatePosition();
	this.updateClass();
	this.scrollEvent();
	this.reizeEvent();
};

// スクロールの位置値をセット、更新
FollowingHeader.prototype.setScrollPosition = function () {
	this.scrollPosition = $(window).scrollTop();
}

// ヘッダーの位置値をセット、更新
FollowingHeader.prototype.setHeaderPosition = function () {
	this.headerPosition = $(this.id).offset().top;
}

// スクロール＋ヘッダーの位置値をセット、更新
FollowingHeader.prototype.updatePosition = function () {
	this.setScrollPosition();
	this.setHeaderPosition();
}

//ヘッダーの判定
FollowingHeader.prototype.updateClass = function (){
	if(this.scrollPosition >= this.headerPosition ) {
		this.addActive();
	} else {
		this.removeActive();
	}
};

//ヘッダーにactiveをつける
FollowingHeader.prototype.addActive = function () {
	$(this.id).addClass('is-active');
	this.updateActiveNextBlock($(this.id).innerHeight());
}

FollowingHeader.prototype.updateActiveNextBlock = function (activeHeight) {
	$(this.id).next().css({
		marginTop: activeHeight + 'px'
	})
}

//ヘッダーのactiveを外す
FollowingHeader.prototype.removeActive = function () {
	$(this.id).removeClass('is-active');
	this.updateActiveNextBlock(0);
}


//scroll イベント
FollowingHeader.prototype.scrollEvent = function (){
	var _this = this;
	$(window).on('scroll touchmove',function () {
		_this.setScrollPosition();
		_this.updateClass();
	});
};

//resize イベント
FollowingHeader.prototype.reizeEvent = function (){
	var _this = this;
	$(window).on('resize',function () {
		_this.removeActive();
		_this.updatePosition();
		_this.updateClass();
	});
};

var followingHeader = new FollowingHeader('header');
followingHeader.init();


console.log(window);