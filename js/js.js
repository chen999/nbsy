var json={
	closeNode:$('.close i'),
	contactNode:$('.contact'),
	selectTitleNode:$('.link-detail'),
	newsBigImgs:$('.news-left-big a'),
	newsSmallImgs:$('.news-left-small a'),
	newsRightList:$('.news-right li'),
	serviceImgs:$('.service i'),
	serviceList:$('.service li'),
	serviceSpanNodes:$('.service span'),
	roomImgs:$('.room h4 a'),
	timeList:$('.dayTimeNav li'),
	navTitleNodes:$('.nav-detail'),
	newsCenterImgs:$('.flash-img li'),
	newsCenterSpanNodes:$('.flash-span span'),
	newsCenterRightList:$('.newsCenter-news dd'),
	interServiceRightList:$('.interService-right p'),
	newsLeftBigINodes:$('.news-left-big i'),
	closeFun:function(){
		var that=this;
		that.closeNode.click(function(){
			that.contactNode.hide();
		})
	},
	selectListShowAndHide:function(){
		var that=this;
		that.selectTitleNode.mouseenter(function(){
			$(this).children('.select-list').show();
		});
		that.selectTitleNode.mouseleave(function(){
			$(this).children('.select-list').hide();
		})
	},
	imgDraw:function(obj,x,y){
		for(var i in obj){
			if(x!=0)
            	obj.eq(i).css({backgroundPositionX:-i*x+"px"});
            if(y!=0)
            	obj.eq(i).css({backgroundPositionY:-i*y+"px"});
        }
	},
	nbImgDraw:function(){
		this.imgDraw(this.newsSmallImgs,0,40);
		this.imgDraw(this.newsBigImgs,0,185);
		this.imgDraw(this.serviceImgs,85,0);
		this.imgDraw(this.roomImgs,79,0);
		this.imgDraw(this.interServiceRightList,0,85);
	},
    newsMoveFun:function(oldPos,newPos){
        var that=this;
        that.newsRightList.eq(newPos).addClass('current');
        that.newsRightList.eq(oldPos).removeClass();
        that.newsSmallImgs.parent().eq(newPos).addClass('current');
        that.newsSmallImgs.parent().eq(oldPos).removeClass('current');
        that.newsBigImgs.parent().eq(newPos).stop(false,true).fadeIn(1000);
        that.newsBigImgs.parent().eq(oldPos).stop(false,true).fadeOut(1000);
        that.newsLeftBigINodes.css({top:(14+35*newPos)+"px"});
    },
	newsSmallMove:function(){
		var that=this;
		that.newsSmallImgs.mouseenter(function(){
            if($(this).parent().hasClass('current'))
                return;
            var oldPos=$('.news-left-small .current').index();
            var newPos=$(this).parent().index();
            that.newsMoveFun(oldPos,newPos);
            //console.log($(this).parent(),newPos,oldPos);
		})
	},
	newsRightMove:function(){
		var that=this;
		that.newsRightList.mouseenter(function(){
			if($(this).hasClass('current'))
                return;
            var oldPos=$('.news-right .current').index();
            var newPos=$(this).index();
            that.newsMoveFun(oldPos,newPos);
		})
	},
	serviceColor:function(){
    	var colorArr=['#80c559','#3bc4ad','#10c4e4','#e9b025','#d383e0','#f56852','#ea6386'];
    	var i=$('.service .current').index();
    	this.serviceSpanNodes.css({color:"#333"});
    	this.serviceSpanNodes.eq(i).css({color:colorArr[i]});
    },
	serviceMove:function(){
		var that=this;
		that.serviceList.mouseenter(function(){
			if($(this).hasClass('current'))
                return;
            var oldPos=$('.service .current').index();
            var newPos=$(this).index();
            that.serviceList.eq(newPos).addClass('current');
        	that.serviceList.eq(oldPos).removeClass();
        	that.serviceColor();
		})
	},
    timeListFun:function(){
    	var that=this;
    	that.timeList.click(function(){
    		if($(this).hasClass('current'))
                return;
            var oldPos=$('.dayTimeNav .current').index();
            var newPos=$(this).index();
            that.timeList.eq(newPos).addClass('current');
        	that.timeList.eq(oldPos).removeClass();
    	})
    },
    newsCenterMoveFun:function(oldPos,newPos){
        this.newsCenterImgs.eq(newPos).addClass('current');
        this.newsCenterImgs.eq(oldPos).removeClass();
        this.newsCenterSpanNodes.eq(newPos).addClass('current');
        this.newsCenterSpanNodes.eq(oldPos).removeClass();
        this.newsCenterRightList.eq(newPos).addClass('current');
        this.newsCenterRightList.eq(oldPos).removeClass();
        this.newsCenterImgs.eq(newPos).stop(false,true).fadeIn(1000);
        this.newsCenterImgs.eq(oldPos).stop(false,true).fadeOut(1000);
    },
	newsCenterSpanMove:function(){
		var that=this;
		that.newsCenterSpanNodes.mouseenter(function(){
            if($(this).hasClass('current'))
                return;
            var oldPos=$('.flash-span .current').index();
            var newPos=$(this).index();
            that.newsCenterMoveFun(oldPos,newPos);
            //console.log($(this).parent(),newPos,oldPos);
		})
	},
	newsCenterRightMove:function(){
		var that=this;
		that.newsCenterRightList.mouseenter(function(){
//			console.log($(this).index()-1);
			if($(this).hasClass('current'))
                return;
            var oldPos=$('.flash-span .current').index();
            var newPos=$(this).index()-1;
            that.newsCenterMoveFun(oldPos,newPos);
		})
	},
    dropFun:function(){
    	var that=this;
    	that.navTitleNodes.mouseenter(function(){
//  		console.log(1);
    		$(this).children('.drop').show();
		})
    	that.navTitleNodes.mouseleave(function(){
//  		console.log(2);
    		$(this).children('.drop').hide();
		})
    },
	initFun:function(){
		this.closeFun();
		this.selectListShowAndHide();
		this.nbImgDraw();
		this.newsSmallMove();
		this.newsRightMove();
		this.serviceMove();
		this.serviceColor();
		this.timeListFun();
		this.newsCenterSpanMove();
		this.newsCenterRightMove();
		this.dropFun();
	}
	
}
json.initFun();







