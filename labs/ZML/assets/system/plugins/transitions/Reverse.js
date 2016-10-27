ZML.Transition.Reverse=function(){this.view=this.container=this.ct1=this.ct0=null};
ZML.Transition.Reverse.prototype.start=function(a,c,b,e){var i=this,h=a.controller.view.width(),g=a.controller.view.height(),f=$("<div>");f.css("position","absolute");$(c).appendTo(f);f.width(h);f.height(g);var d=$("<div>");d.css("position","absolute");$(b).css("visibility","visible");$(b).appendTo(d);d.width(h);d.height(g);c=$("<div>");c.css("position","absolute");c.css("pointer-events","none");c.appendTo(a.controller.view);f.appendTo(c);b=[];b.left={fx0:0,fx1:0,fy0:0,fy1:-90,tx0:0,tx1:0,ty0:90,
ty1:0};b.right={fx0:0,fx1:0,fy0:0,fy1:90,tx0:0,tx1:0,ty0:-90,ty1:0};b.up={fx0:0,fx1:90,fy0:0,fy1:0,tx0:-90,tx1:0,ty0:0,ty1:0};b.down={fx0:0,fx1:-90,fy0:0,fy1:0,tx0:90,tx1:0,ty0:0,ty1:0};var g=b[a.direction].fx0,j=b[a.direction].fx1,k=b[a.direction].fy0,l=b[a.direction].fy1,m=b[a.direction].tx0,n=b[a.direction].tx1,o=b[a.direction].ty0,p=b[a.direction].ty1;d.appendTo(c);d.css("opacity",0);TweenLite.set(c,{perspective:h});TweenLite.to(d,0,{rotationX:m,rotationY:o,z:-200});TweenLite.fromTo(f,0.5,{rotationX:g,
rotationY:k,z:0},{rotationX:j,rotationY:l,z:-200,ease:Expo.easeIn,onComplete:function(){f.css("opacity",0);d.css("opacity",1);TweenLite.to(d,0.5,{rotationX:n,rotationY:p,z:0,ease:Expo.easeOut,onComplete:function(){i.dispose();e()}})}});this.ct0=f;this.ct1=d;this.container=c;this.view=a.controller.view};
ZML.Transition.Reverse.prototype.dispose=function(){if(this.ct0){TweenLite.killTweensOf(this.ct0);var a=this.ct0.children().eq(0);a.css("left","0px");a.css("top","0px");a.appendTo(this.view);a.css("visibility","hidden");this.ct0.remove();this.ct0=null}if(this.ct1)TweenLite.killTweensOf(this.ct1),a=this.ct1.children().eq(0),a.appendTo(this.view),a.css("left","0px"),a.css("top","0px"),this.ct1.remove(),this.ct1=null;if(this.container)this.container.remove(),this.container=null;this.view=null};
ZML.Transition.LeftReverse=function(a,c,b,e){a.direction="left";ZML.Transition.Reverse.prototype.start.call(this,a,c,b,e)};ZML.Transition.LeftReverse.prototype=new ZML.Transition.Reverse;ZML.Transition.RightReverse=function(a,c,b,e){a.direction="right";ZML.Transition.Reverse.prototype.start.call(this,a,c,b,e)};ZML.Transition.RightReverse.prototype=new ZML.Transition.Reverse;ZML.Transition.UpReverse=function(a,c,b,e){a.direction="up";ZML.Transition.Reverse.prototype.start.call(this,a,c,b,e)};
ZML.Transition.UpReverse.prototype=new ZML.Transition.Reverse;ZML.Transition.DownReverse=function(a,c,b,e){a.direction="down";ZML.Transition.Reverse.prototype.start.call(this,a,c,b,e)};ZML.Transition.DownReverse.prototype=new ZML.Transition.Reverse;ZML.TransitionMap.leftReverse=ZML.Transition.LeftReverse;ZML.TransitionMap.rightReverse=ZML.Transition.RightReverse;ZML.TransitionMap.upReverse=ZML.Transition.UpReverse;ZML.TransitionMap.downReverse=ZML.Transition.DownReverse;
