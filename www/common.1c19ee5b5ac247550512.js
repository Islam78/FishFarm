(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0v3p":function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return l});var n=i("1OyB"),s=i("vuIU"),a=i("fXoL"),o=i("ofXK");function u(e,t){if(1&e&&(a.kc(),a.Wb(0,"text",5),a.Tc(1),a.Vb()),2&e){var i=a.lc();a.Eb("x",50)("y",57)("fill",i.textColor)("name",i.name),a.Db(1),a.Uc(i.valueToDisplay())}}var h={provide:i("3Pt+").k,useExisting:Object(a.V)(function(){return r}),multi:!0},r=function(){var e=function(){function e(t,i){Object(n.a)(this,e),this.cd=t,this.el=i,this.valueColor="var(--primary-color, Black)",this.rangeColor="var(--surface-d, LightGray)",this.textColor="var(--text-color-secondary, Black)",this.valueTemplate="{value}",this.size=100,this.step=1,this.min=0,this.max=100,this.strokeWidth=14,this.showValue=!0,this.readonly=!1,this.onChange=new a.n,this.radius=40,this.midX=50,this.midY=50,this.minRadians=4*Math.PI/3,this.maxRadians=-Math.PI/3,this.value=null,this.onModelChange=function(){},this.onModelTouched=function(){}}return Object(s.a)(e,[{key:"mapRange",value:function(e,t,i,n,s){return(e-t)*(s-n)/(i-t)+n}},{key:"onClick",value:function(e){this.disabled||this.readonly||this.updateValue(e.offsetX,e.offsetY)}},{key:"updateValue",value:function(e,t){var i=Math.atan2(this.size/2-t,e-this.size/2),n=-Math.PI/2-Math.PI/6;this.updateModel(i,n)}},{key:"updateModel",value:function(e,t){var i;if(e>this.maxRadians)i=this.mapRange(e,this.minRadians,this.maxRadians,this.min,this.max);else{if(!(e<t))return;i=this.mapRange(e+2*Math.PI,this.minRadians,this.maxRadians,this.min,this.max)}var n=Math.round((i-this.min)/this.step)*this.step+this.min;this.value=n,this.onModelChange(this.value),this.onChange.emit(this.value)}},{key:"onMouseDown",value:function(e){this.disabled||this.readonly||(this.windowMouseMoveListener=this.onMouseMove.bind(this),this.windowMouseUpListener=this.onMouseUp.bind(this),window.addEventListener("mousemove",this.windowMouseMoveListener),window.addEventListener("mouseup",this.windowMouseUpListener),e.preventDefault())}},{key:"onMouseUp",value:function(e){this.disabled||this.readonly||(window.removeEventListener("mousemove",this.windowMouseMoveListener),window.removeEventListener("mouseup",this.windowMouseUpListener),this.windowMouseUpListener=null,this.windowMouseMoveListener=null,e.preventDefault())}},{key:"onTouchStart",value:function(e){this.disabled||this.readonly||(this.windowTouchMoveListener=this.onTouchMove.bind(this),this.windowTouchEndListener=this.onTouchEnd.bind(this),window.addEventListener("touchmove",this.windowTouchMoveListener),window.addEventListener("touchend",this.windowTouchEndListener),e.preventDefault())}},{key:"onTouchEnd",value:function(e){this.disabled||this.readonly||(window.removeEventListener("touchmove",this.windowTouchMoveListener),window.removeEventListener("touchend",this.windowTouchEndListener),this.windowTouchMoveListener=null,this.windowTouchEndListener=null,e.preventDefault())}},{key:"onMouseMove",value:function(e){this.disabled||this.readonly||(this.updateValue(e.offsetX,e.offsetY),e.preventDefault())}},{key:"onTouchMove",value:function(e){if(!this.disabled&&!this.readonly&&1==e.touches.length){var t=this.el.nativeElement.children[0].getBoundingClientRect(),i=e.targetTouches.item(0);this.updateValue(i.clientX-t.left,i.clientY-t.top)}}},{key:"writeValue",value:function(e){this.value=e,this.cd.markForCheck()}},{key:"registerOnChange",value:function(e){this.onModelChange=e}},{key:"registerOnTouched",value:function(e){this.onModelTouched=e}},{key:"setDisabledState",value:function(e){this.disabled=e,this.cd.markForCheck()}},{key:"containerClass",value:function(){return{"p-knob p-component":!0,"p-disabled":this.disabled}}},{key:"rangePath",value:function(){return"M ".concat(this.minX()," ").concat(this.minY()," A ").concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.maxX()," ").concat(this.maxY())}},{key:"valuePath",value:function(){return"M ".concat(this.zeroX()," ").concat(this.zeroY()," A ").concat(this.radius," ").concat(this.radius," 0 ").concat(this.largeArc()," ").concat(this.sweep()," ").concat(this.valueX()," ").concat(this.valueY())}},{key:"zeroRadians",value:function(){return this.mapRange(this.min>0&&this.max>0?this.min:0,this.min,this.max,this.minRadians,this.maxRadians)}},{key:"valueRadians",value:function(){return this.mapRange(this._value,this.min,this.max,this.minRadians,this.maxRadians)}},{key:"minX",value:function(){return this.midX+Math.cos(this.minRadians)*this.radius}},{key:"minY",value:function(){return this.midY-Math.sin(this.minRadians)*this.radius}},{key:"maxX",value:function(){return this.midX+Math.cos(this.maxRadians)*this.radius}},{key:"maxY",value:function(){return this.midY-Math.sin(this.maxRadians)*this.radius}},{key:"zeroX",value:function(){return this.midX+Math.cos(this.zeroRadians())*this.radius}},{key:"zeroY",value:function(){return this.midY-Math.sin(this.zeroRadians())*this.radius}},{key:"valueX",value:function(){return this.midX+Math.cos(this.valueRadians())*this.radius}},{key:"valueY",value:function(){return this.midY-Math.sin(this.valueRadians())*this.radius}},{key:"largeArc",value:function(){return Math.abs(this.zeroRadians()-this.valueRadians())<Math.PI?0:1}},{key:"sweep",value:function(){return this.valueRadians()>this.zeroRadians()?0:1}},{key:"valueToDisplay",value:function(){return this.valueTemplate.replace("{value}",this._value.toString())}},{key:"_value",get:function(){return null!=this.value?this.value:this.min}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Qb(a.h),a.Qb(a.l))},e.\u0275cmp=a.Kb({type:e,selectors:[["p-knob"]],inputs:{valueColor:"valueColor",rangeColor:"rangeColor",textColor:"textColor",valueTemplate:"valueTemplate",size:"size",step:"step",min:"min",max:"max",strokeWidth:"strokeWidth",showValue:"showValue",readonly:"readonly",disabled:"disabled",styleClass:"styleClass",style:"style",severity:"severity",name:"name"},outputs:{onChange:"onChange"},features:[a.Cb([h])],decls:5,vars:15,consts:[[3,"ngClass","ngStyle"],["viewBox","0 0 100 100",3,"click","mousedown","mouseup","touchstart","touchend"],[1,"p-knob-range"],[1,"p-knob-value"],["text-anchor","middle","class","p-knob-text",4,"ngIf"],["text-anchor","middle",1,"p-knob-text"]],template:function(e,t){1&e&&(a.Wb(0,"div",0),a.kc(),a.Wb(1,"svg",1),a.hc("click",function(e){return t.onClick(e)})("mousedown",function(e){return t.onMouseDown(e)})("mouseup",function(e){return t.onMouseUp(e)})("touchstart",function(e){return t.onTouchStart(e)})("touchend",function(e){return t.onTouchEnd(e)}),a.Rb(2,"path",2),a.Rb(3,"path",3),a.Rc(4,u,2,5,"text",4),a.Vb(),a.Vb()),2&e&&(a.Fb(t.styleClass),a.sc("ngClass",t.containerClass())("ngStyle",t.style),a.Db(1),a.Oc("width",t.size+"px")("height",t.size+"px"),a.Db(1),a.Eb("d",t.rangePath())("stroke-width",t.strokeWidth)("stroke",t.rangeColor),a.Db(1),a.Eb("d",t.valuePath())("stroke-width",t.strokeWidth)("stroke",t.valueColor),a.Db(1),a.sc("ngIf",t.showValue))},directives:[o.k,o.n,o.m],styles:["@keyframes dash-frame{to{stroke-dashoffset:0}}.p-knob-range{fill:none;transition:stroke .1s ease-in}.p-knob-value{animation-fill-mode:forwards;animation-name:dash-frame;fill:none}.p-knob-text{font-size:1.3rem;text-align:center}"],encapsulation:2,changeDetection:0}),e}(),l=function(){var e=function e(){Object(n.a)(this,e)};return e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({factory:function(t){return new(t||e)},imports:[[o.b]]}),e}()}}]);