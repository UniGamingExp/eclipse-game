var jg=0,rf=1,Qg=2;var fr=1,e0=2,mo=3,Us=0,gn=1,nn=2,hs=0,go=1,ii=2,of=3,af=4,t0=5;var pr=100,n0=101,i0=102,s0=103,r0=104,o0=200,a0=201,l0=202,c0=203,lf=204,cf=205,h0=206,u0=207,d0=208,f0=209,p0=210,m0=211,g0=212,_0=213,v0=214,yc=0,Sc=1,Mc=2,eo=3,bc=4,Ec=5,wc=6,Tc=7,hf=0,x0=1,y0=2,Hi=0,Oa=1,Fa=2,Ua=3,Ba=4,ka=5,za=6,mr=7;var uf=300,gr=301,_o=302,eh=303,th=304,to=1e3,Di=1001,Ac=1002,mn=1003,S0=1004;var Ha=1005;var Dn=1006,nh=1007;var us=1008;var qn=1009,df=1010,ff=1011,vo=1012,ih=1013,Ti=1014,di=1015,ln=1016,sh=1017,rh=1018,_r=1020,pf=35902,mf=35899,gf=1021,_f=1022,Ai=1023,rs=1026,ds=1027,oh=1028,ah=1029,Bs=1030,lh=1031;var ch=1033,Ga=33776,Va=33777,Wa=33778,Xa=33779,hh=35840,uh=35841,dh=35842,fh=35843,ph=36196,mh=37492,gh=37496,_h=37488,vh=37489,qa=37490,xh=37491,yh=37808,Sh=37809,Mh=37810,bh=37811,Eh=37812,wh=37813,Th=37814,Ah=37815,Ch=37816,Rh=37817,Ih=37818,Ph=37819,Nh=37820,Lh=37821,Dh=36492,Oh=36494,Fh=36495,Uh=36283,Bh=36284,Ya=36285,kh=36286;var sa=2300,Cc=2301,vc=2302,Xd=2303,qd=2400,Yd=2401,$d=2402;var M0=3200;var zh=0,b0=1,fs="",Qt="srgb",ra="srgb-linear",oa="linear",xt="srgb";var xc=7680;var E0=519,w0=512,T0=513,A0=514,vf=515,C0=516,R0=517,xf=518,yf=519,I0=35044;var Sf="300 es",ci=2e3,no=2001;function iS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sS(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function P0(){let n=aa("canvas");return n.style.display="block",n}var xg={},io=null;function Mf(...n){let e="THREE."+n.shift();io?io("log",e,...n):console.log(e,...n)}function N0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=N0(n);let e="THREE."+n.shift();if(io)io("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function We(...n){n=N0(n);let e="THREE."+n.shift();if(io)io("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function rr(...n){let e=n.join(" ");e in xg||(xg[e]=!0,Ge(...n))}function L0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var D0={[yc]:yc,[Mc]:wc,[bc]:bc,[eo]:Ec,[Sc]:Sc,[wc]:Mc,[Tc]:Tc,[Ec]:eo},Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yd=Math.PI/180,Rc=180/Math.PI;function xo(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function rS(n,e){return(n%e+e)%e}function Sd(n,e,t){return(1-t)*n+t*e}function O0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bf(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function oS(n,e){if(e.constructor===Float32Array)return n;let t=bf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function aS(n,e){if(e.constructor===Float32Array)return n;let t=bf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Rf=class Rf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rf.prototype.isVector2=!0;var re=Rf,Ui=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(u!==_||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let x=Math.acos(m),S=Math.sin(x);g=Math.sin(g*x)/S,a=Math.sin(a*x)/S,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+_*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+_*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},If=class If{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Md.copy(this).projectOnVector(e),this.sub(Md)}reflect(e){return this.sub(Md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};If.prototype.isVector3=!0;var P=If,Md=new P,yg=new Ui,Pf=class Pf{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],_=s[0],m=s[3],g=s[6],x=s[1],S=s[4],M=s[7],b=s[2],E=s[5],v=s[8];return r[0]=o*_+a*x+l*b,r[3]=o*m+a*S+l*E,r[6]=o*g+a*M+l*v,r[1]=c*_+h*x+u*b,r[4]=c*m+h*S+u*E,r[7]=c*g+h*M+u*v,r[2]=d*_+f*x+p*b,r[5]=d*m+f*S+p*E,r[8]=d*g+f*M+p*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bd.makeScale(e,t)),this}rotate(e){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bd.makeRotation(-e)),this}translate(e,t){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pf.prototype.isMatrix3=!0;var Ye=Pf,bd=new Ye,Sg=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mg=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lS(){let n={enabled:!0,workingColorSpace:ra,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=Qr(s.r),s.g=Qr(s.g),s.b=Qr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fs?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ra]:{primaries:e,whitePoint:i,transfer:oa,toXYZ:Sg,fromXYZ:Mg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:Sg,fromXYZ:Mg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}var rt=lS();function ss(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var kr,Ic=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{kr===void 0&&(kr=aa("canvas")),kr.width=e.width,kr.height=e.height;let s=kr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=kr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=aa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ss(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ss(t[i]/255)*255):t[i]=ss(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cS=0,so=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ed(s[o].image)):r.push(Ed(s[o]))}else r=Ed(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ed(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ic.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var hS=0,wd=new P,On=class n extends Fi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Di,s=Di,r=Dn,o=us,a=Ai,l=qn,c=n.DEFAULT_ANISOTROPY,h=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=xo(),this.name="",this.source=new so(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case to:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case to:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=uf;On.DEFAULT_ANISOTROPY=1;var Nf=class Nf{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(f+1)/2,b=(g+1)/2,E=(h+d)/4,v=(u+_)/4,y=(p+m)/4;return S>M&&S>b?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=E/i,r=v/i):M>b?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=E/s,r=y/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=v/r,s=y/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nf.prototype.isVector4=!0;var kt=Nf,Pc=class extends Fi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new On({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new so(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Pc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},la=class extends On{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nc=class extends On{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Qc=class Qc{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,p,_,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/zr.setFromMatrixColumn(e,0).length(),r=1/zr.setFromMatrixColumn(e,1).length(),o=1/zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uS,e,dS)}lookAt(e,t,i){let s=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),ws.crossVectors(i,jn),ws.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),ws.crossVectors(i,jn)),ws.normalize(),Yl.crossVectors(jn,ws),s[0]=ws.x,s[4]=Yl.x,s[8]=jn.x,s[1]=ws.y,s[5]=Yl.y,s[9]=jn.y,s[2]=ws.z,s[6]=Yl.z,s[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],_=i[6],m=i[10],g=i[14],x=i[3],S=i[7],M=i[11],b=i[15],E=s[0],v=s[4],y=s[8],C=s[12],A=s[1],N=s[5],D=s[9],B=s[13],I=s[2],k=s[6],W=s[10],H=s[14],oe=s[3],q=s[7],Z=s[11],K=s[15];return r[0]=o*E+a*A+l*I+c*oe,r[4]=o*v+a*N+l*k+c*q,r[8]=o*y+a*D+l*W+c*Z,r[12]=o*C+a*B+l*H+c*K,r[1]=h*E+u*A+d*I+f*oe,r[5]=h*v+u*N+d*k+f*q,r[9]=h*y+u*D+d*W+f*Z,r[13]=h*C+u*B+d*H+f*K,r[2]=p*E+_*A+m*I+g*oe,r[6]=p*v+_*N+m*k+g*q,r[10]=p*y+_*D+m*W+g*Z,r[14]=p*C+_*B+m*H+g*K,r[3]=x*E+S*A+M*I+b*oe,r[7]=x*v+S*N+M*k+b*q,r[11]=x*y+S*D+M*W+b*Z,r[15]=x*C+S*B+M*H+b*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],x=l*f-c*d,S=a*f-c*u,M=a*d-l*u,b=o*f-c*h,E=o*d-l*h,v=o*u-a*h;return t*(_*x-m*S+g*M)-i*(p*x-m*b+g*E)+s*(p*S-_*b+g*v)-r*(p*M-_*E+m*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],x=t*a-i*o,S=t*l-s*o,M=t*c-r*o,b=i*l-s*a,E=i*c-r*a,v=s*c-r*l,y=h*_-u*p,C=h*m-d*p,A=h*g-f*p,N=u*m-d*_,D=u*g-f*_,B=d*g-f*m,I=x*B-S*D+M*N+b*A-E*C+v*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return e[0]=(a*B-l*D+c*N)*k,e[1]=(s*D-i*B-r*N)*k,e[2]=(_*v-m*E+g*b)*k,e[3]=(d*E-u*v-f*b)*k,e[4]=(l*A-o*B-c*C)*k,e[5]=(t*B-s*A+r*C)*k,e[6]=(m*M-p*v-g*S)*k,e[7]=(h*v-d*M+f*S)*k,e[8]=(o*D-a*A+c*y)*k,e[9]=(i*A-t*D-r*y)*k,e[10]=(p*E-_*M+g*x)*k,e[11]=(u*M-h*E-f*x)*k,e[12]=(a*C-o*N-l*y)*k,e[13]=(t*N-i*C+s*y)*k,e[14]=(_*S-p*b-m*x)*k,e[15]=(h*b-u*S+d*x)*k,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,_=o*h,m=o*u,g=a*u,x=l*c,S=l*h,M=l*u,b=i.x,E=i.y,v=i.z;return s[0]=(1-(_+g))*b,s[1]=(f+M)*b,s[2]=(p-S)*b,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(d+g))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(p+S)*v,s[9]=(m-x)*v,s[10]=(1-(d+_))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=zr.set(s[0],s[1],s[2]).length(),a=zr.set(s[4],s[5],s[6]).length(),l=zr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yi.copy(this);let c=1/o,h=1/a,u=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=u,yi.elements[9]*=u,yi.elements[10]*=u,t.setFromRotationMatrix(yi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=ci,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===ci)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===no)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ci,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===ci)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===no)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Qc.prototype.isMatrix4=!0;var bt=Qc,zr=new P,yi=new bt,uS=new P(0,0,0),dS=new P(1,1,1),ws=new P,Yl=new P,jn=new P,bg=new bt,Eg=new Ui,os=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eg.setFromEuler(this),this.setFromQuaternion(Eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};os.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fS=0,wg=new P,Hr=new Ui,Qi=new bt,$l=new P,Jo=new P,pS=new P,mS=new Ui,Tg=new P(1,0,0),Ag=new P(0,1,0),Cg=new P(0,0,1),Rg={type:"added"},gS={type:"removed"},Gr={type:"childadded",child:null},Td={type:"childremoved",child:null},tn=class n extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new os,i=new Ui,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ye}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(Ag,e)}rotateZ(e){return this.rotateOnAxis(Cg,e)}translateOnAxis(e,t){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(Ag,e)}translateZ(e){return this.translateOnAxis(Cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$l.copy(e):$l.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Jo,$l,this.up):Qi.lookAt($l,Jo,this.up),this.quaternion.setFromRotationMatrix(Qi),s&&(Qi.extractRotation(s.matrixWorld),Hr.setFromRotationMatrix(Qi),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rg),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gS),Td.child=e,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rg),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,pS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,mS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new P(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pt=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},_S={type:"move"},ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_S)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function Ad(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var de=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=rS(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ad(o,r,e+1/3),this.g=Ad(o,r,e),this.b=Ad(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){let i=F0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return rt.workingToColorSpace(Cn.copy(this),e),Math.round(nt(Cn.r*255,0,255))*65536+Math.round(nt(Cn.g*255,0,255))*256+Math.round(nt(Cn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Cn.copy(this),t);let i=Cn.r,s=Cn.g,r=Cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Qt){rt.workingToColorSpace(Cn.copy(this),e);let t=Cn.r,i=Cn.g,s=Cn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ts),this.setHSL(Ts.h+e,Ts.s+t,Ts.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ts),e.getHSL(Jl);let i=Sd(Ts.h,Jl.h,t),s=Sd(Ts.s,Jl.s,t),r=Sd(Ts.l,Jl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new de;de.NAMES=F0;var or=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ha=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Si=new P,es=new P,Cd=new P,ts=new P,Vr=new P,Wr=new P,Ig=new P,Rd=new P,Id=new P,Pd=new P,Nd=new kt,Ld=new kt,Dd=new kt,Is=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Si.subVectors(e,t),s.cross(Si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Si.subVectors(s,t),es.subVectors(i,t),Cd.subVectors(e,t);let o=Si.dot(Si),a=Si.dot(es),l=Si.dot(Cd),c=es.dot(es),h=es.dot(Cd),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ts.x),l.addScaledVector(o,ts.y),l.addScaledVector(a,ts.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Nd.setScalar(0),Ld.setScalar(0),Dd.setScalar(0),Nd.fromBufferAttribute(e,t),Ld.fromBufferAttribute(e,i),Dd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Nd,r.x),o.addScaledVector(Ld,r.y),o.addScaledVector(Dd,r.z),o}static isFrontFacing(e,t,i,s){return Si.subVectors(i,t),es.subVectors(e,t),Si.cross(es).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),es.subVectors(this.a,this.b),Si.cross(es).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Vr.subVectors(s,i),Wr.subVectors(r,i),Rd.subVectors(e,i);let l=Vr.dot(Rd),c=Wr.dot(Rd);if(l<=0&&c<=0)return t.copy(i);Id.subVectors(e,s);let h=Vr.dot(Id),u=Wr.dot(Id);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Vr,o);Pd.subVectors(e,r);let f=Vr.dot(Pd),p=Wr.dot(Pd);if(p>=0&&f<=p)return t.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Wr,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Ig.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(Ig,a);let g=1/(m+_+d);return o=_*g,a=d*g,t.copy(i).addScaledVector(Vr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mi):Mi.fromBufferAttribute(r,o),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kl.copy(i.boundingBox)),Kl.applyMatrix4(e.matrixWorld),this.union(Kl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Zl.subVectors(this.max,Ko),Xr.subVectors(e.a,Ko),qr.subVectors(e.b,Ko),Yr.subVectors(e.c,Ko),As.subVectors(qr,Xr),Cs.subVectors(Yr,qr),tr.subVectors(Xr,Yr);let t=[0,-As.z,As.y,0,-Cs.z,Cs.y,0,-tr.z,tr.y,As.z,0,-As.x,Cs.z,0,-Cs.x,tr.z,0,-tr.x,-As.y,As.x,0,-Cs.y,Cs.x,0,-tr.y,tr.x,0];return!Od(t,Xr,qr,Yr,Zl)||(t=[1,0,0,0,1,0,0,0,1],!Od(t,Xr,qr,Yr,Zl))?!1:(jl.crossVectors(As,Cs),t=[jl.x,jl.y,jl.z],Od(t,Xr,qr,Yr,Zl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ns),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ns=[new P,new P,new P,new P,new P,new P,new P,new P],Mi=new P,Kl=new Bi,Xr=new P,qr=new P,Yr=new P,As=new P,Cs=new P,tr=new P,Ko=new P,Zl=new P,jl=new P,nr=new P;function Od(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){nr.fromArray(n,r);let a=s.x*Math.abs(nr.x)+s.y*Math.abs(nr.y)+s.z*Math.abs(nr.z),l=e.dot(nr),c=t.dot(nr),h=i.dot(nr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var on=new P,Ql=new re,vS=0,Ln=class extends Fi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=I0,this.updateRanges=[],this.gpuType=di,this.version=0,this._normalizationScale=e!==void 0?bf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ql.fromBufferAttribute(this,t),Ql.applyMatrix3(e),this.setXY(t,Ql.x,Ql.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):oS(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):aS(e,this.array)}};var ua=class extends Ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var da=class extends Ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var qe=class extends Ln{constructor(e,t,i){super(new Float32Array(e),t,i)}},xS=new Bi,Zo=new P,Fd=new P,Ei=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):xS.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);let t=Zo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Zo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(Fd)),this.expandByPoint(Zo.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yS=0,li=new bt,Ud=new tn,$r=new P,Qn=new Bi,jo=new Bi,pn=new P,Ft=class n extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iS(e)?da:ua)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(Qn.min,jo.min),Qn.expandByPoint(pn),pn.addVectors(Qn.max,jo.max),Qn.expandByPoint(pn)):(Qn.expandByPoint(jo.min),Qn.expandByPoint(jo.max))}Qn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)pn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(pn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)pn.fromBufferAttribute(a,c),l&&($r.fromBufferAttribute(e,c),pn.add($r)),s=Math.max(s,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ln(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)a[C]=new P,l[C]=new P;let h=new P,u=new P,d=new P,f=new re,p=new re,_=new re,m=new P,g=new P;function x(C,A,N){c[C]=c[A]=c[N]=1,h.fromBufferAttribute(i,C),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,N),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,N),u.sub(h),d.sub(h),p.sub(f),_.sub(f);let D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(D),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),a[C].add(m),a[A].add(m),a[N].add(m),l[C].add(g),l[A].add(g),l[N].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,A=S.length;C<A;++C){let N=S[C],D=N.start,B=N.count;for(let I=D,k=D+B;I<k;I+=3)x(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new P,b=new P,E=new P,v=new P;function y(C){E.fromBufferAttribute(s,C),v.copy(E);let A=a[C];M.copy(A),M.sub(E.multiplyScalar(E.dot(A))).normalize(),b.crossVectors(v,A);let D=b.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,D)}for(let C=0,A=i.count;C<A;++C)c[C]&&y(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Ln(d,h,u)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Bd=new P,SS=new P,MS=new Ye,bi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Bd.subVectors(i,t).cross(SS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Bd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||MS.getNormalMatrix(e),s=this.coplanarPoint(Bd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bS=0,as=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=go,this.side=Us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=cf,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xc,this.stencilZFail=xc,this.stencilZPass=xc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new de().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new bi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new re().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var is=new P,kd=new P,ec=new P,tc=new P,fa=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,is)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=is.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(is.copy(this.origin).addScaledVector(this.direction,t),is.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){kd.copy(e).add(t).multiplyScalar(.5),ec.copy(t).sub(e).normalize(),tc.copy(this.origin).sub(kd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ec),a=tc.dot(this.direction),l=-tc.dot(ec),c=tc.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(kd).addScaledVector(ec,d),f}intersectSphere(e,t){if(e.radius<0)return null;is.subVectors(e.center,this.origin);let i=is.dot(this.direction),s=is.dot(is)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,is)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=i.x-o.x,x=i.y-o.y,S=i.z-o.z,M=Math.abs(l),b=Math.abs(c),E=Math.abs(h),v,y,C,A,N,D,B,I,k,W,H,oe;if(M>=b&&M>=E?(C=l,D=u,k=p,oe=g,l>=0?(v=c,y=h,A=d,N=f,B=_,I=m,W=x,H=S):(v=h,y=c,A=f,N=d,B=m,I=_,W=S,H=x)):b>=E?(C=c,D=d,k=_,oe=x,c>=0?(v=h,y=l,A=f,N=u,B=m,I=p,W=S,H=g):(v=l,y=h,A=u,N=f,B=p,I=m,W=g,H=S)):(C=h,D=f,k=m,oe=S,h>=0?(v=l,y=c,A=u,N=d,B=p,I=_,W=g,H=x):(v=c,y=l,A=d,N=u,B=_,I=p,W=x,H=g)),C===0)return null;let q=v/C,Z=y/C,K=1/C,Ae=A-q*D,Le=N-Z*D,$=B-q*k,X=I-Z*k,te=W-q*oe,ie=H-Z*oe,ae=te*X-ie*$,Re=Ae*ie-Le*te,Ut=$*Le-X*Ae;if(s){if(ae<0||Re<0||Ut<0)return null}else if((ae<0||Re<0||Ut<0)&&(ae>0||Re>0||Ut>0))return null;let He=ae+Re+Ut;if(He===0)return null;let tt=K*(ae*D+Re*k+Ut*oe);return(He>0?tt<0:tt>0)?null:this.at(tt/He,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},In=class extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pg=new bt,ir=new fa,nc=new Ei,Ng=new P,ic=new P,sc=new P,rc=new P,zd=new P,oc=new P,Lg=new P,ac=new P,Et=class extends tn{constructor(e=new Ft,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){oc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(zd.fromBufferAttribute(u,e),o?oc.addScaledVector(zd,h):oc.addScaledVector(zd.sub(t),h))}t.add(oc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(r),ir.copy(e.ray).recast(e.near),!(nc.containsPoint(ir.origin)===!1&&(ir.intersectSphere(nc,Ng)===null||ir.origin.distanceToSquared(Ng)>(e.far-e.near)**2))&&(Pg.copy(r).invert(),ir.copy(e.ray).applyMatrix4(Pg),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,b=S;M<b;M+=3){let E=a.getX(M),v=a.getX(M+1),y=a.getX(M+2);s=lc(this,g,e,i,c,h,u,E,v,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let x=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);s=lc(this,o,e,i,c,h,u,x,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,b=S;M<b;M+=3){let E=M,v=M+1,y=M+2;s=lc(this,g,e,i,c,h,u,E,v,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let x=m,S=m+1,M=m+2;s=lc(this,o,e,i,c,h,u,x,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ES(n,e,t,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Us,a),l===null)return null;ac.copy(a),ac.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ac);return c<t.near||c>t.far?null:{distance:c,point:ac.clone(),object:n}}function lc(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ic),n.getVertexPosition(l,sc),n.getVertexPosition(c,rc);let h=ES(n,e,t,i,ic,sc,rc,Lg);if(h){let u=new P;Is.getBarycoord(Lg,ic,sc,rc,u),s&&(h.uv=Is.getInterpolatedAttribute(s,a,l,c,u,new re)),r&&(h.uv1=Is.getInterpolatedAttribute(r,a,l,c,u,new re)),o&&(h.normal=Is.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};Is.getNormal(ic,sc,rc,d.normal),h.face=d,h.barycoord=u}return h}var pa=class extends On{constructor(e=null,t=1,i=1,s,r,o,a,l,c=mn,h=mn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ma=class extends Ln{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Jr=new bt,Dg=new bt,cc=[],Og=new Bi,wS=new bt,Qo=new Et,ea=new Ei,ls=class extends Et{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ma(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jr),Og.copy(e.boundingBox).applyMatrix4(Jr),this.boundingBox.union(Og)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jr),ea.copy(e.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Qo.geometry=this.geometry,Qo.material=this.material,Qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(i),e.ray.intersectsSphere(ea)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Jr),Dg.multiplyMatrices(i,Jr),Qo.matrixWorld=Dg,Qo.raycast(e,cc);for(let o=0,a=cc.length;o<a;o++){let l=cc[o];l.instanceId=r,l.object=this,t.push(l)}cc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ma(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pa(new Float32Array(s*this.count),s,this.count,oh,di));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},sr=new Ei,TS=new re(.5,.5),hc=new P,Ps=class{constructor(e=new bi,t=new bi,i=new bi,s=new bi,r=new bi,o=new bi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],x=r[12],S=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-o,f-h,g-p,b-x).normalize(),s[1].setComponents(c+o,f+h,g+p,b+x).normalize(),s[2].setComponents(c+a,f+u,g+_,b+S).normalize(),s[3].setComponents(c-a,f-u,g-_,b-S).normalize(),i)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,f-d,g-m,b-M).normalize();else if(s[4].setComponents(c-l,f-d,g-m,b-M).normalize(),t===ci)s[5].setComponents(c+l,f+d,g+m,b+M).normalize();else if(t===no)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){sr.center.set(0,0,0);let t=TS.distanceTo(e.center);return sr.radius=.7071067811865476+t,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(hc.x=s.normal.x>0?e.max.x:e.min.x,hc.y=s.normal.y>0?e.max.y:e.min.y,hc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fg=new bt,Lc=class n{constructor(){this.coordinateSystem=ci,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Fg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ps),i[s].setFromProjectionMatrix(Fg,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ps),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Ns=class extends as{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ug=new bt,Jd=new fa,uc=new Ei,dc=new P,ar=class extends tn{constructor(e=new Ft,t=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(s),uc.radius+=r,e.ray.intersectsSphere(uc)===!1)return;Ug.copy(s).invert(),Jd.copy(e.ray).applyMatrix4(Ug);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){let m=c.getX(p);dc.fromBufferAttribute(u,m),Bg(dc,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,_=f;p<_;p++)dc.fromBufferAttribute(u,p),Bg(dc,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bg(n,e,t,i,s,r,o){let a=Jd.distanceSqToPoint(n);if(a<t){let l=new P;Jd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ga=class extends On{constructor(e=[],t=gr,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ei=class extends On{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cs=class extends On{constructor(e,t,i=Ti,s,r,o,a=mn,l=mn,c,h=rs,u=1){if(h!==rs&&h!==ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new so(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},_a=class extends cs{constructor(e,t=Ti,i=gr,s,r,o=mn,a=mn,l,c=rs){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},va=class extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fn=class n extends Ft{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(u,2));function p(_,m,g,x,S,M,b,E,v,y,C){let A=M/v,N=b/y,D=M/2,B=b/2,I=E/2,k=v+1,W=y+1,H=0,oe=0,q=new P;for(let Z=0;Z<W;Z++){let K=Z*N-B;for(let Ae=0;Ae<k;Ae++){let Le=Ae*A-D;q[_]=Le*x,q[m]=K*S,q[g]=I,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[g]=E>0?1:-1,h.push(q.x,q.y,q.z),u.push(Ae/v),u.push(1-Z/y),H+=1}}for(let Z=0;Z<y;Z++)for(let K=0;K<v;K++){let Ae=d+K+k*Z,Le=d+K+k*(Z+1),$=d+(K+1)+k*(Z+1),X=d+(K+1)+k*Z;l.push(Ae,Le,X),l.push(Le,$,X),oe+=6}a.addGroup(f,oe,C),f+=oe,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},xa=class n extends Ft{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=i*2+r,_=s+1,m=new P,g=new P;for(let x=0;x<=p;x++){let S=0,M=0,b=0,E=0;if(x<=i){let C=x/i,A=C*Math.PI/2;M=-h-e*Math.cos(A),b=e*Math.sin(A),E=-e*Math.cos(A),S=C*u}else if(x<=i+r){let C=(x-i)/r;M=-h+C*t,b=e,E=0,S=u+C*d}else{let C=(x-i-r)/i,A=C*Math.PI/2;M=h+e*Math.sin(A),b=e*Math.cos(A),E=e*Math.sin(A),S=u+d+C*u}let v=Math.max(0,Math.min(1,S/f)),y=0;x===0?y=.5/s:x===p&&(y=-.5/s);for(let C=0;C<=s;C++){let A=C/s,N=A*Math.PI*2,D=Math.sin(N),B=Math.cos(N);g.x=-b*B,g.y=M,g.z=b*D,a.push(g.x,g.y,g.z),m.set(-b*B,E,b*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+y,v)}if(x>0){let C=(x-1)*_;for(let A=0;A<s;A++){let N=C+A,D=C+A+1,B=x*_+A,I=x*_+A+1;o.push(N,D,B),o.push(D,I,B)}}}this.setIndex(o),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(l,3)),this.setAttribute("uv",new qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var zt=class n extends Ft{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,_=[],m=i/2,g=0;x(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(f,2));function x(){let M=new P,b=new P,E=0,v=(t-e)/i;for(let y=0;y<=r;y++){let C=[],A=y/r,N=A*(t-e)+e;for(let D=0;D<=s;D++){let B=D/s,I=B*l+a,k=Math.sin(I),W=Math.cos(I);b.x=N*k,b.y=-A*i+m,b.z=N*W,u.push(b.x,b.y,b.z),M.set(k,v,W).normalize(),d.push(M.x,M.y,M.z),f.push(B,1-A),C.push(p++)}_.push(C)}for(let y=0;y<s;y++)for(let C=0;C<r;C++){let A=_[C][y],N=_[C+1][y],D=_[C+1][y+1],B=_[C][y+1];(e>0||C!==0)&&(h.push(A,N,B),E+=3),(t>0||C!==r-1)&&(h.push(N,D,B),E+=3)}c.addGroup(g,E,0),g+=E}function S(M){let b=p,E=new re,v=new P,y=0,C=M===!0?e:t,A=M===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),p++;let N=p;for(let D=0;D<=s;D++){let I=D/s*l+a,k=Math.cos(I),W=Math.sin(I);v.x=C*W,v.y=m*A,v.z=C*k,u.push(v.x,v.y,v.z),d.push(0,A,0),E.x=k*.5+.5,E.y=W*.5*A+.5,f.push(E.x,E.y),p++}for(let D=0;D<s;D++){let B=b+D,I=N+D;M===!0?h.push(I,I+1,B):h.push(I+1,I,B),y+=3}c.addGroup(g,y,M===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hi=class n extends zt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},oo=class n extends Ft{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(r.slice(),3)),this.setAttribute("uv",new qe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let S=new P,M=new P,b=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],S),f(t[E+1],M),f(t[E+2],b),l(S,M,b,x)}function l(x,S,M,b){let E=b+1,v=[];for(let y=0;y<=E;y++){v[y]=[];let C=x.clone().lerp(M,y/E),A=S.clone().lerp(M,y/E),N=E-y;for(let D=0;D<=N;D++)D===0&&y===E?v[y][D]=C:v[y][D]=C.clone().lerp(A,D/N)}for(let y=0;y<E;y++)for(let C=0;C<2*(E-y)-1;C++){let A=Math.floor(C/2);C%2===0?(d(v[y][A+1]),d(v[y+1][A]),d(v[y][A])):(d(v[y][A+1]),d(v[y+1][A+1]),d(v[y+1][A]))}}function c(x){let S=new P;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(x),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){let x=new P;for(let S=0;S<r.length;S+=3){x.x=r[S+0],x.y=r[S+1],x.z=r[S+2];let M=m(x)/2/Math.PI+.5,b=g(x)/Math.PI+.5;o.push(M,1-b)}p(),u()}function u(){for(let x=0;x<o.length;x+=6){let S=o[x+0],M=o[x+2],b=o[x+4],E=Math.max(S,M,b),v=Math.min(S,M,b);E>.9&&v<.1&&(S<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,S){let M=x*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function p(){let x=new P,S=new P,M=new P,b=new P,E=new re,v=new re,y=new re;for(let C=0,A=0;C<r.length;C+=9,A+=6){x.set(r[C+0],r[C+1],r[C+2]),S.set(r[C+3],r[C+4],r[C+5]),M.set(r[C+6],r[C+7],r[C+8]),E.set(o[A+0],o[A+1]),v.set(o[A+2],o[A+3]),y.set(o[A+4],o[A+5]),b.copy(x).add(S).add(M).divideScalar(3);let N=m(b);_(E,A+0,x,N),_(v,A+2,S,N),_(y,A+4,M,N)}}function _(x,S,M,b){b<0&&x.x===1&&(o[S]=x.x-1),M.x===0&&M.z===0&&(o[S]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},ao=class n extends oo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],r=[],o=[],a=new P,l=new bt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(nt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(nt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},lo=class extends ti{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dc=class extends lo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ef(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var kg=new P,zg=new P,Hd=new Ef,Gd=new Ef,Vd=new Ef,Oc=class extends ti{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(zg.subVectors(s[0],s[1]).add(s[0]),c=zg);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(kg.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=kg),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Hd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,m),Gd.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,m),Vd.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(Hd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Gd.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Vd.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Hd.calc(l),Gd.calc(l),Vd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Hg(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function AS(n,e){let t=1-n;return t*t*e}function CS(n,e){return 2*(1-n)*n*e}function RS(n,e){return n*n*e}function na(n,e,t,i){return AS(n,e)+CS(n,t)+RS(n,i)}function IS(n,e){let t=1-n;return t*t*t*e}function PS(n,e){let t=1-n;return 3*t*t*n*e}function NS(n,e){return 3*(1-n)*n*n*e}function LS(n,e){return n*n*n*e}function ia(n,e,t,i,s){return IS(n,e)+PS(n,t)+NS(n,i)+LS(n,s)}var ya=class extends ti{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ia(e,s.x,r.x,o.x,a.x),ia(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fc=class extends ti{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ia(e,s.x,r.x,o.x,a.x),ia(e,s.y,r.y,o.y,a.y),ia(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sa=class extends ti{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uc=class extends ti{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends ti{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(na(e,s.x,r.x,o.x),na(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bc=class extends ti{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(na(e,s.x,r.x,o.x),na(e,s.y,r.y,o.y),na(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Hg(a,l.x,c.x,h.x,u.x),Hg(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},Kd=Object.freeze({__proto__:null,ArcCurve:Dc,CatmullRomCurve3:Oc,CubicBezierCurve:ya,CubicBezierCurve3:Fc,EllipseCurve:lo,LineCurve:Sa,LineCurve3:Uc,QuadraticBezierCurve:Ma,QuadraticBezierCurve3:Bc,SplineCurve:ba}),kc=class extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Kd[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},lr=class extends kc{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Sa(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ma(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ya(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ba(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new lo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ki=class extends lr{constructor(e){super(e),this.uuid=xo(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new lr().fromJSON(s))}return this}};function DS(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=U0(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=kS(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,u=l;for(let d=t;d<s;d+=t){let f=n[d],p=n[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ea(r,o,t,a,l,c,0),o}function U0(n,e,t,i,s){let r;if(s===KS(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Gg(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Gg(o/i|0,n[o],n[o+1],r);return r&&co(r,r.next)&&(Ta(r),r=r.next),r}function cr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(co(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Ta(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ea(n,e,t,i,s,r,o){if(!n)return;!o&&r&&WS(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?FS(n,i,s,r):OS(n)){e.push(l.i,n.i,c.i),Ta(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=US(cr(n),e),Ea(n,e,t,i,s,r,2)):o===2&&BS(n,e,t,i,s,r):Ea(cr(n),e,t,i,s,r,1);break}}}function OS(n){let e=n.prev,t=n,i=n.next;if(Wt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ta(s,a,r,l,o,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function FS(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Wt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),_=Math.max(a,l,c),m=Math.max(h,u,d),g=Zd(f,p,e,t,i),x=Zd(_,m,e,t,i),S=n.prevZ,M=n.nextZ;for(;S&&S.z>=g&&M&&M.z<=x;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&ta(a,h,l,u,c,d,S.x,S.y)&&Wt(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&ta(a,h,l,u,c,d,M.x,M.y)&&Wt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&ta(a,h,l,u,c,d,S.x,S.y)&&Wt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=x;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&ta(a,h,l,u,c,d,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function US(n,e){let t=n;do{let i=t.prev,s=t.next.next;!co(i,s)&&k0(i,t,t.next,s)&&wa(i,s)&&wa(s,i)&&(e.push(i.i,t.i,s.i),Ta(t),Ta(t.next),t=n=s),t=t.next}while(t!==n);return cr(t)}function BS(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&YS(o,a)){let l=z0(o,a);o=cr(o,o.next),l=cr(l,l.next),Ea(o,e,t,i,s,r,0),Ea(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function kS(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=U0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(qS(c))}s.sort(zS);for(let r=0;r<s.length;r++)t=HS(s[r],t);return t}function zS(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function HS(n,e){let t=GS(n,e);if(!t)return e;let i=z0(t,n);return cr(i,i.next),cr(t,t.next)}function GS(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(co(n,t))return t;do{if(co(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&B0(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);wa(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&VS(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function VS(n,e){return Wt(n.prev,n,e.prev)<0&&Wt(e.next,n,n.next)<0}function WS(n,e,t,i){let s=n;do s.z===0&&(s.z=Zd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,XS(s)}function XS(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Zd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function qS(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function B0(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ta(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&B0(n,e,t,i,s,r,o,a)}function YS(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!$S(n,e)&&(wa(n,e)&&wa(e,n)&&JS(n,e)&&(Wt(n.prev,n,e.prev)||Wt(n,e.prev,e))||co(n,e)&&Wt(n.prev,n,n.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function co(n,e){return n.x===e.x&&n.y===e.y}function k0(n,e,t,i){let s=pc(Wt(n,e,t)),r=pc(Wt(n,e,i)),o=pc(Wt(t,i,n)),a=pc(Wt(t,i,e));return!!(s!==r&&o!==a||s===0&&fc(n,t,e)||r===0&&fc(n,i,e)||o===0&&fc(t,n,i)||a===0&&fc(t,e,i))}function fc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function pc(n){return n>0?1:n<0?-1:0}function $S(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&k0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function wa(n,e){return Wt(n.prev,n,n.next)<0?Wt(n,e,n.next)>=0&&Wt(n,n.prev,e)>=0:Wt(n,e,n.prev)<0||Wt(n,n.next,e)<0}function JS(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function z0(n,e){let t=jd(n.i,n.x,n.y),i=jd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Gg(n,e,t,i){let s=jd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ta(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function jd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function KS(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Qd=class{static triangulate(e,t,i=2){return DS(e,t,i)}},Oi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Vg(e),Wg(i,e);let o=e.length;t.forEach(Vg);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Wg(i,t[l]);let a=Qd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Vg(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Wg(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var wi=class n extends Ft{constructor(e=new ki([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new qe(s,3)),this.setAttribute("uv",new qe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:ZS,S,M=!1,b,E,v,y;if(g){S=g.getSpacedPoints(h),M=!0,d=!1;let se=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,se),E=new P,v=new P,y=new P}d||(m=0,f=0,p=0,_=0);let C=a.extractPoints(c),A=C.shape,N=C.holes;if(!Oi.isClockWise(A)){A=A.reverse();for(let se=0,ge=N.length;se<ge;se++){let fe=N[se];Oi.isClockWise(fe)&&(N[se]=fe.reverse())}}function B(se){let fe=10000000000000001e-36,Ce=se[0];for(let be=1;be<=se.length;be++){let Ze=be%se.length,Oe=se[Ze],ht=Oe.x-Ce.x,ut=Oe.y-Ce.y,vt=ht*ht+ut*ut,U=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(Ce.x),Math.abs(Ce.y)),sn=fe*U*U;if(vt<=sn){se.splice(Ze,1),be--;continue}Ce=Oe}}B(A),N.forEach(B);let I=N.length,k=A;for(let se=0;se<I;se++){let ge=N[se];A=A.concat(ge)}function W(se,ge,fe){return ge||We("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ge,fe)}let H=A.length;function oe(se,ge,fe){let Ce,be,Ze,Oe=se.x-ge.x,ht=se.y-ge.y,ut=fe.x-se.x,vt=fe.y-se.y,U=Oe*Oe+ht*ht,sn=Oe*vt-ht*ut;if(Math.abs(sn)>Number.EPSILON){let st=Math.sqrt(U),It=Math.sqrt(ut*ut+vt*vt),ye=ge.x-ht/st,Jt=ge.y+Oe/st,ze=fe.x-vt/It,Xe=fe.y+ut/It,R=((ze-ye)*vt-(Xe-Jt)*ut)/(Oe*vt-ht*ut);Ce=ye+Oe*R-se.x,be=Jt+ht*R-se.y;let w=Ce*Ce+be*be;if(w<=2)return new re(Ce,be);Ze=Math.sqrt(w/2)}else{let st=!1;Oe>Number.EPSILON?ut>Number.EPSILON&&(st=!0):Oe<-Number.EPSILON?ut<-Number.EPSILON&&(st=!0):Math.sign(ht)===Math.sign(vt)&&(st=!0),st?(Ce=-ht,be=Oe,Ze=Math.sqrt(U)):(Ce=Oe,be=ht,Ze=Math.sqrt(U/2))}return new re(Ce/Ze,be/Ze)}let q=[];for(let se=0,ge=k.length,fe=ge-1,Ce=se+1;se<ge;se++,fe++,Ce++)fe===ge&&(fe=0),Ce===ge&&(Ce=0),q[se]=oe(k[se],k[fe],k[Ce]);let Z=[],K,Ae=q.concat();for(let se=0,ge=I;se<ge;se++){let fe=N[se];K=[];for(let Ce=0,be=fe.length,Ze=be-1,Oe=Ce+1;Ce<be;Ce++,Ze++,Oe++)Ze===be&&(Ze=0),Oe===be&&(Oe=0),K[Ce]=oe(fe[Ce],fe[Ze],fe[Oe]);Z.push(K),Ae=Ae.concat(K)}let Le;if(m===0)Le=Oi.triangulateShape(k,N);else{let se=[],ge=[];for(let fe=0;fe<m;fe++){let Ce=fe/m,be=f*Math.cos(Ce*Math.PI/2),Ze=p*Math.sin(Ce*Math.PI/2)+_;for(let Oe=0,ht=k.length;Oe<ht;Oe++){let ut=W(k[Oe],q[Oe],Ze);Re(ut.x,ut.y,-be),Ce===0&&se.push(ut)}for(let Oe=0,ht=I;Oe<ht;Oe++){let ut=N[Oe];K=Z[Oe];let vt=[];for(let U=0,sn=ut.length;U<sn;U++){let st=W(ut[U],K[U],Ze);Re(st.x,st.y,-be),Ce===0&&vt.push(st)}Ce===0&&ge.push(vt)}}Le=Oi.triangulateShape(se,ge)}let $=Le.length,X=p+_;for(let se=0;se<H;se++){let ge=d?W(A[se],Ae[se],X):A[se];M?(v.copy(b.normals[0]).multiplyScalar(ge.x),E.copy(b.binormals[0]).multiplyScalar(ge.y),y.copy(S[0]).add(v).add(E),Re(y.x,y.y,y.z)):Re(ge.x,ge.y,0)}for(let se=1;se<=h;se++)for(let ge=0;ge<H;ge++){let fe=d?W(A[ge],Ae[ge],X):A[ge];M?(v.copy(b.normals[se]).multiplyScalar(fe.x),E.copy(b.binormals[se]).multiplyScalar(fe.y),y.copy(S[se]).add(v).add(E),Re(y.x,y.y,y.z)):Re(fe.x,fe.y,u/h*se)}for(let se=m-1;se>=0;se--){let ge=se/m,fe=f*Math.cos(ge*Math.PI/2),Ce=p*Math.sin(ge*Math.PI/2)+_;for(let be=0,Ze=k.length;be<Ze;be++){let Oe=W(k[be],q[be],Ce);Re(Oe.x,Oe.y,u+fe)}for(let be=0,Ze=N.length;be<Ze;be++){let Oe=N[be];K=Z[be];for(let ht=0,ut=Oe.length;ht<ut;ht++){let vt=W(Oe[ht],K[ht],Ce);M?Re(vt.x,vt.y+S[h-1].y,S[h-1].x+fe):Re(vt.x,vt.y,u+fe)}}}te(),ie();function te(){let se=s.length/3;if(d){let ge=0,fe=H*ge;for(let Ce=0;Ce<$;Ce++){let be=Le[Ce];Ut(be[2]+fe,be[1]+fe,be[0]+fe)}ge=h+m*2,fe=H*ge;for(let Ce=0;Ce<$;Ce++){let be=Le[Ce];Ut(be[0]+fe,be[1]+fe,be[2]+fe)}}else{for(let ge=0;ge<$;ge++){let fe=Le[ge];Ut(fe[2],fe[1],fe[0])}for(let ge=0;ge<$;ge++){let fe=Le[ge];Ut(fe[0]+H*h,fe[1]+H*h,fe[2]+H*h)}}i.addGroup(se,s.length/3-se,0)}function ie(){let se=s.length/3,ge=0;ae(k,ge),ge+=k.length;for(let fe=0,Ce=N.length;fe<Ce;fe++){let be=N[fe];ae(be,ge),ge+=be.length}i.addGroup(se,s.length/3-se,1)}function ae(se,ge){let fe=se.length;for(;--fe>=0;){let Ce=fe,be=fe-1;be<0&&(be=se.length-1);for(let Ze=0,Oe=h+m*2;Ze<Oe;Ze++){let ht=H*Ze,ut=H*(Ze+1),vt=ge+Ce+ht,U=ge+be+ht,sn=ge+be+ut,st=ge+Ce+ut;He(vt,U,sn,st)}}}function Re(se,ge,fe){l.push(se),l.push(ge),l.push(fe)}function Ut(se,ge,fe){tt(se),tt(ge),tt(fe);let Ce=s.length/3,be=x.generateTopUV(i,s,Ce-3,Ce-2,Ce-1);ct(be[0]),ct(be[1]),ct(be[2])}function He(se,ge,fe,Ce){tt(se),tt(ge),tt(Ce),tt(ge),tt(fe),tt(Ce);let be=s.length/3,Ze=x.generateSideWallUV(i,s,be-6,be-3,be-2,be-1);ct(Ze[0]),ct(Ze[1]),ct(Ze[3]),ct(Ze[1]),ct(Ze[2]),ct(Ze[3])}function tt(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function ct(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return jS(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Kd[s.type]().fromJSON(s)),new n(i,e.options)}},ZS={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-u),new re(d,1-p),new re(_,1-g)]:[new re(a,1-l),new re(h,1-u),new re(f,1-p),new re(m,1-g)]}};function jS(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var zi=class n extends oo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ls=class n extends Ft{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=nt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new P,d=new re,f=new P,p=new P,_=new P,m=0,g=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,f.x=g*1,f.y=-m,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let x=0;x<=t;x++){let S=i+x*h*s,M=Math.sin(S),b=Math.cos(S);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*M,u.y=e[E].y,u.z=e[E].x*b,o.push(u.x,u.y,u.z),d.x=x/t,d.y=E/(e.length-1),a.push(d.x,d.y);let v=l[3*E+0]*M,y=l[3*E+1],C=l[3*E+0]*b;c.push(v,y,C)}}for(let x=0;x<t;x++)for(let S=0;S<e.length-1;S++){let M=S+x*e.length,b=M,E=M+e.length,v=M+e.length+1,y=M+1;r.push(b,E,y),r.push(v,y,E)}this.setIndex(r),this.setAttribute("position",new qe(o,3)),this.setAttribute("uv",new qe(a,2)),this.setAttribute("normal",new qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Aa=class n extends oo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ui=class n extends Ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let x=g*d-o;for(let S=0;S<c;S++){let M=S*u-r;p.push(M,-x,0),_.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){let S=x+c*g,M=x+c*(g+1),b=x+1+c*(g+1),E=x+1+c*g;f.push(S,M,E),f.push(M,b,E)}this.setIndex(f),this.setAttribute("position",new qe(p,3)),this.setAttribute("normal",new qe(_,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},hr=class n extends Ft{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new P,p=new re;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let g=r+m/i*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<s;_++){let m=_*(i+1);for(let g=0;g<i;g++){let x=g+m,S=x,M=x+i+1,b=x+i+2,E=x+1;a.push(S,M,E),a.push(M,b,E)}}this.setIndex(a),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ca=class n extends Ft{constructor(e=new ki([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new qe(s,3)),this.setAttribute("normal",new qe(r,3)),this.setAttribute("uv",new qe(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;Oi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let x=p[m];Oi.isClockWise(x)===!0&&(p[m]=x.reverse())}let _=Oi.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let x=p[m];f=f.concat(x)}for(let m=0,g=f.length;m<g;m++){let x=f[m];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,g=_.length;m<g;m++){let x=_[m],S=x[0]+u,M=x[1]+u,b=x[2]+u;i.push(S,M,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return QS(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function QS(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Ht=class n extends Ft{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,d=new P,f=[],p=[],_=[],m=[];for(let g=0;g<=i;g++){let x=[],S=g/i,M=o+S*a,b=e*Math.cos(M),E=Math.sqrt(e*e-b*b),v=0;g===0&&o===0?v=.5/t:g===i&&l===Math.PI&&(v=-.5/t);for(let y=0;y<=t;y++){let C=y/t,A=s+C*r;u.x=-E*Math.cos(A),u.y=b,u.z=E*Math.sin(A),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+v,1-S),x.push(c++)}h.push(x)}for(let g=0;g<i;g++)for(let x=0;x<t;x++){let S=h[g][x+1],M=h[g][x],b=h[g+1][x],E=h[g+1][x+1];(g!==0||o>0)&&f.push(S,M,E),(g!==i-1||l<Math.PI)&&f.push(M,b,E)}this.setIndex(f),this.setAttribute("position",new qe(p,3)),this.setAttribute("normal",new qe(_,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xn=class n extends Ft{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new P,f=new P,p=new P;for(let _=0;_<=i;_++){let m=o+_/i*a;for(let g=0;g<=s;g++){let x=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){let g=(s+1)*_+m-1,x=(s+1)*(_-1)+m-1,S=(s+1)*(_-1)+m,M=(s+1)*_+m;l.push(g,x,M),l.push(x,S,M)}this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function vr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Xg(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Xg(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Pn(n){let e={};for(let t=0;t<n.length;t++){let i=vr(n[t]);for(let s in i)e[s]=i[s]}return e}function Xg(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function eM(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var ps={clone:vr,merge:Pn},tM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gt=class extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tM,this.fragmentShader=nM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=eM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new de().setHex(s.value);break;case"v2":this.uniforms[i].value=new re().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new kt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ho=class extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xt=class extends as{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},uo=class extends Xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return rr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){rr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var zc=class extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hc=class extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Kr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function mc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ds=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Gc=class extends Ds{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qd,endingEnd:qd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yd:r=e,a=2*t-i;break;case $d:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yd:o=e,l=2*i-t;break;case $d:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,S=(-1-f)*m+(1.5+f)*_+.5*p,M=f*m-f*_;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+x*o[c+b]+S*o[l+b]+M*o[u+b];return r}},Vc=class extends Ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Wc=class extends Ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xc=class extends Ds{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(s-t),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=f*d+p*2,x=u[g],S=u[g+1],M=e*d+p*2,b=h[M],E=h[M+1],v=sM(i,t,x,b,s);r[p]=H0(v,_,S,E,m)}return r}};function H0(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function iM(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function sM(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=H0(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=iM(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ni=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kr(t,this.TimeBufferType),this.values=Kr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Kr(e.times,Array),values:Kr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),mc(e.settings)&&(i.settings={inTangents:Kr(e.settings.inTangents,Array),outTangents:Kr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case sa:t=this.InterpolantFactoryMethodDiscrete;break;case Cc:t=this.InterpolantFactoryMethodLinear;break;case vc:t=this.InterpolantFactoryMethodSmooth;break;case Xd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sa;case this.InterpolantFactoryMethodLinear:return Cc;case this.InterpolantFactoryMethodSmooth:return vc;case this.InterpolantFactoryMethodBezier:return Xd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;mc(this.settings)&&(qg(this.settings.inTangents,e),qg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;mc(this.settings)&&(Yg(this.settings.inTangents,e),Yg(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&sS(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===vc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,mc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function qg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Yg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Cc;var Os=class extends ni{constructor(e,t,i){super(e,t,i)}};Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=sa;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var qc=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}};qc.prototype.ValueTypeName="color";var Yc=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}};Yc.prototype.ValueTypeName="number";var $c=class extends Ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ui.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ra=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}};Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Fs=class extends ni{constructor(e,t,i){super(e,t,i)}};Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=sa;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}};Jc.prototype.ValueTypeName="vector";var Kc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},G0=new Kc,Zc=class{constructor(e){this.manager=e!==void 0?e:G0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var fo=class extends tn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ia=class extends fo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Wd=new bt,$g=new P,Jg=new P,Pa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ps,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;$g.setFromMatrixPosition(e.matrixWorld),t.position.copy($g),Jg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Wd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Wd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===no||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gc=new P,_c=new Ui,Li=new P,Na=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gc,_c,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gc,_c,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(gc,_c,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gc,_c,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Rs=new P,Kg=new re,Zg=new re,Rn=class extends Na{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rc*2*Math.atan(Math.tan(yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rs.x,Rs.y).multiplyScalar(-e/Rs.z),Rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rs.x,Rs.y).multiplyScalar(-e/Rs.z)}getViewSize(e,t){return this.getViewBounds(e,Kg,Zg),t.subVectors(Zg,Kg)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yd*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ef=class extends Pa{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0}},ur=class extends fo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ef}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},dr=class extends Na{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tf=class extends Pa{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},La=class extends fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new tf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Zr=-90,jr=1,po=class extends tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(Zr,jr,e,t);s.layers=this.layers,this.add(s);let r=new Rn(Zr,jr,e,t);r.layers=this.layers,this.add(r);let o=new Rn(Zr,jr,e,t);o.layers=this.layers,this.add(o);let a=new Rn(Zr,jr,e,t);a.layers=this.layers,this.add(a);let l=new Rn(Zr,jr,e,t);l.layers=this.layers,this.add(l);let c=new Rn(Zr,jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===no)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},jc=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Da=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=rM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function rM(){this._document.hidden===!1&&this.reset()}var Tf="\\[\\]\\.:\\/",oM=new RegExp("["+Tf+"]","g"),Af="[^"+Tf+"]",aM="[^"+Tf.replace("\\.","")+"]",lM=/((?:WC+[\/:])*)/.source.replace("WC",Af),cM=/(WCOD+)?/.source.replace("WCOD",aM),hM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Af),uM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Af),dM=new RegExp("^"+lM+cM+hM+uM+"$"),fM=["material","materials","bones","map"],nf=class{constructor(e,t,i){let s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oM,"")}static parseTrackName(e){let t=dM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);fM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=nf;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var a2=new Float32Array(1);var Lf=class Lf{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Lf.prototype.isMatrix2=!0;var sf=Lf;function Cf(n,e,t,i){let s=pM(i);switch(t){case gf:return n*e;case oh:return n*e/s.components*s.byteLength;case ah:return n*e/s.components*s.byteLength;case Bs:return n*e*2/s.components*s.byteLength;case lh:return n*e*2/s.components*s.byteLength;case _f:return n*e*3/s.components*s.byteLength;case Ai:return n*e*4/s.components*s.byteLength;case ch:return n*e*4/s.components*s.byteLength;case Ga:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uh:case fh:return Math.max(n,16)*Math.max(e,8)/4;case hh:case dh:return Math.max(n,8)*Math.max(e,8)/2;case ph:case mh:case _h:case vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gh:case qa:case xh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Th:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Dh:case Oh:case Fh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Uh:case Bh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ya:case kh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pM(n){switch(n){case qn:case df:return{byteLength:1,components:1};case vo:case ff:case ln:return{byteLength:2,components:1};case sh:case rh:return{byteLength:2,components:4};case Ti:case ih:case di:return{byteLength:4,components:1};case pf:case mf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function h_(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function gM(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,TM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,UM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qM="gl_FragColor = linearToOutputTexel( gl_FragColor );",YM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ib=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ab=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_b=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vb=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ib=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ob=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_E=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,EE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$E=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:_M,alphahash_pars_fragment:vM,alphamap_fragment:xM,alphamap_pars_fragment:yM,alphatest_fragment:SM,alphatest_pars_fragment:MM,aomap_fragment:bM,aomap_pars_fragment:EM,batching_pars_vertex:wM,batching_vertex:TM,begin_vertex:AM,beginnormal_vertex:CM,bsdfs:RM,iridescence_fragment:IM,bumpmap_pars_fragment:PM,clipping_planes_fragment:NM,clipping_planes_pars_fragment:LM,clipping_planes_pars_vertex:DM,clipping_planes_vertex:OM,color_fragment:FM,color_pars_fragment:UM,color_pars_vertex:BM,color_vertex:kM,common:zM,defaultnormal_vertex:HM,displacementmap_pars_vertex:GM,displacementmap_vertex:VM,emissivemap_fragment:WM,emissivemap_pars_fragment:XM,colorspace_fragment:qM,colorspace_pars_fragment:YM,envmap_fragment:$M,envmap_common_pars_fragment:JM,envmap_pars_fragment:KM,envmap_pars_vertex:ZM,envmap_physical_pars_fragment:lb,envmap_vertex:jM,fog_vertex:QM,fog_pars_vertex:eb,fog_fragment:tb,fog_pars_fragment:nb,gradientmap_pars_fragment:ib,lightmap_pars_fragment:sb,lights_lambert_fragment:rb,lights_lambert_pars_fragment:ob,lights_pars_begin:ab,lights_toon_fragment:cb,lights_toon_pars_fragment:hb,lights_phong_fragment:ub,lights_phong_pars_fragment:db,lights_physical_fragment:fb,lights_physical_pars_fragment:pb,lights_fragment_begin:mb,lights_fragment_maps:gb,lights_fragment_end:_b,lightprobes_pars_fragment:vb,logdepthbuf_fragment:xb,logdepthbuf_pars_fragment:yb,logdepthbuf_pars_vertex:Sb,logdepthbuf_vertex:Mb,map_fragment:bb,map_pars_fragment:Eb,map_particle_fragment:wb,map_particle_pars_fragment:Tb,metalnessmap_fragment:Ab,metalnessmap_pars_fragment:Cb,morphinstance_vertex:Rb,morphcolor_vertex:Ib,morphnormal_vertex:Pb,morphtarget_pars_vertex:Nb,morphtarget_vertex:Lb,normal_fragment_begin:Db,normal_fragment_maps:Ob,normal_pars_fragment:Fb,normal_pars_vertex:Ub,normal_vertex:Bb,normalmap_pars_fragment:kb,clearcoat_normal_fragment_begin:zb,clearcoat_normal_fragment_maps:Hb,clearcoat_pars_fragment:Gb,iridescence_pars_fragment:Vb,opaque_fragment:Wb,packing:Xb,premultiplied_alpha_fragment:qb,project_vertex:Yb,dithering_fragment:$b,dithering_pars_fragment:Jb,roughnessmap_fragment:Kb,roughnessmap_pars_fragment:Zb,shadowmap_pars_fragment:jb,shadowmap_pars_vertex:Qb,shadowmap_vertex:eE,shadowmask_pars_fragment:tE,skinbase_vertex:nE,skinning_pars_vertex:iE,skinning_vertex:sE,skinnormal_vertex:rE,specularmap_fragment:oE,specularmap_pars_fragment:aE,tonemapping_fragment:lE,tonemapping_pars_fragment:cE,transmission_fragment:hE,transmission_pars_fragment:uE,uv_pars_fragment:dE,uv_pars_vertex:fE,uv_vertex:pE,worldpos_vertex:mE,background_vert:gE,background_frag:_E,backgroundCube_vert:vE,backgroundCube_frag:xE,cube_vert:yE,cube_frag:SE,depth_vert:ME,depth_frag:bE,distance_vert:EE,distance_frag:wE,equirect_vert:TE,equirect_frag:AE,linedashed_vert:CE,linedashed_frag:RE,meshbasic_vert:IE,meshbasic_frag:PE,meshlambert_vert:NE,meshlambert_frag:LE,meshmatcap_vert:DE,meshmatcap_frag:OE,meshnormal_vert:FE,meshnormal_frag:UE,meshphong_vert:BE,meshphong_frag:kE,meshphysical_vert:zE,meshphysical_frag:HE,meshtoon_vert:GE,meshtoon_frag:VE,points_vert:WE,points_frag:XE,shadow_vert:qE,shadow_frag:YE,sprite_vert:$E,sprite_frag:JE},we={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Vi={basic:{uniforms:Pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Pn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Pn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new de(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Pn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Pn([we.points,we.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Pn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Pn([we.common,we.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Pn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Pn([we.sprite,we.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Pn([we.common,we.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Pn([we.lights,we.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Vi.physical={uniforms:Pn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Hh={r:0,b:0,g:0},KE=new bt,u_=new Ye;u_.set(-1,0,0,0,1,0,0,0,1);function ZE(n,e,t,i,s,r){let o=new de(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){let M=x.backgroundBlurriness>0;S=e.get(S,M)}return S}function p(x){let S=!1,M=f(x);M===null?m(o,a):M&&M.isColor&&(m(M,1),S=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(x,S){let M=f(S);M&&M.isCubeTexture?(c===void 0&&(c=new Et(new Fn(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:vr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(KE.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(u_),c.material.toneMapped=rt.getTransfer(M.colorSpace)!==xt,(h!==M||u!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Et(new ui(2,2),new Gt({name:"BackgroundMaterial",uniforms:vr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=rt.getTransfer(M.colorSpace)!==xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,S){x.getRGB(Hh,wf(n)),t.buffers.color.setClear(Hh.r,Hh.g,Hh.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:_,dispose:g}}function jE(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(N,D,B,I,k){let W=!1,H=u(N,I,B,D);r!==H&&(r=H,c(r.object)),W=f(N,I,B,k),W&&p(N,I,B,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(N,D,B,I),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function u(N,D,B,I){let k=I.wireframe===!0,W=i[D.id];W===void 0&&(W={},i[D.id]=W);let H=N.isInstancedMesh===!0?N.id:0,oe=W[H];oe===void 0&&(oe={},W[H]=oe);let q=oe[B.id];q===void 0&&(q={},oe[B.id]=q);let Z=q[k];return Z===void 0&&(Z=d(l()),q[k]=Z),Z}function d(N){let D=[],B=[],I=[];for(let k=0;k<t;k++)D[k]=0,B[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,D,B,I){let k=r.attributes,W=D.attributes,H=0,oe=B.getAttributes();for(let q in oe)if(oe[q].location>=0){let K=k[q],Ae=W[q];if(Ae===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(Ae=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(Ae=N.instanceColor)),K===void 0||K.attribute!==Ae||Ae&&K.data!==Ae.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function p(N,D,B,I){let k={},W=D.attributes,H=0,oe=B.getAttributes();for(let q in oe)if(oe[q].location>=0){let K=W[q];K===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(K=N.instanceColor));let Ae={};Ae.attribute=K,K&&K.data&&(Ae.data=K.data),k[q]=Ae,H++}r.attributes=k,r.attributesNum=H,r.index=I}function _(){let N=r.newAttributes;for(let D=0,B=N.length;D<B;D++)N[D]=0}function m(N){g(N,0)}function g(N,D){let B=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;B[N]=1,I[N]===0&&(n.enableVertexAttribArray(N),I[N]=1),k[N]!==D&&(n.vertexAttribDivisor(N,D),k[N]=D)}function x(){let N=r.newAttributes,D=r.enabledAttributes;for(let B=0,I=D.length;B<I;B++)D[B]!==N[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function S(N,D,B,I,k,W,H){H===!0?n.vertexAttribIPointer(N,D,B,k,W):n.vertexAttribPointer(N,D,B,I,k,W)}function M(N,D,B,I){_();let k=I.attributes,W=B.getAttributes(),H=D.defaultAttributeValues;for(let oe in W){let q=W[oe];if(q.location>=0){let Z=k[oe];if(Z===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),Z!==void 0){let K=Z.normalized,Ae=Z.itemSize,Le=e.get(Z);if(Le===void 0)continue;let $=Le.buffer,X=Le.type,te=Le.bytesPerElement,ie=X===n.INT||X===n.UNSIGNED_INT||Z.gpuType===ih;if(Z.isInterleavedBufferAttribute){let ae=Z.data,Re=ae.isInterleavedBuffer===!0?ae.stride:ae.itemSize,Ut=Z.offset;if(ae.isInstancedInterleavedBuffer||ae.isInstancedBufferAttribute){for(let He=0;He<q.locationSize;He++)g(q.location+He,ae.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let He=0;He<q.locationSize;He++)m(q.location+He);n.bindBuffer(n.ARRAY_BUFFER,$);for(let He=0;He<q.locationSize;He++)S(q.location+He,Ae/q.locationSize,X,K,Re*te,(Ut+Ae/q.locationSize*He)*te,ie)}else{if(Z.isInstancedBufferAttribute){for(let ae=0;ae<q.locationSize;ae++)g(q.location+ae,Z.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ae=0;ae<q.locationSize;ae++)m(q.location+ae);n.bindBuffer(n.ARRAY_BUFFER,$);for(let ae=0;ae<q.locationSize;ae++)S(q.location+ae,Ae/q.locationSize,X,K,Ae*te,Ae/q.locationSize*ae*te,ie)}}else if(H!==void 0){let K=H[oe];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(q.location,K);break;case 3:n.vertexAttrib3fv(q.location,K);break;case 4:n.vertexAttrib4fv(q.location,K);break;default:n.vertexAttrib1fv(q.location,K)}}}}x()}function b(){C();for(let N in i){let D=i[N];for(let B in D){let I=D[B];for(let k in I){let W=I[k];for(let H in W)h(W[H].object),delete W[H];delete I[k]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;let D=i[N.id];for(let B in D){let I=D[B];for(let k in I){let W=I[k];for(let H in W)h(W[H].object),delete W[H];delete I[k]}}delete i[N.id]}function v(N){for(let D in i){let B=i[D];for(let I in B){let k=B[I];if(k[N.id]===void 0)continue;let W=k[N.id];for(let H in W)h(W[H].object),delete W[H];delete k[N.id]}}}function y(N){for(let D in i){let B=i[D],I=N.isInstancedMesh===!0?N.id:0,k=B[I];if(k!==void 0){for(let W in k){let H=k[W];for(let oe in H)h(H[oe].object),delete H[oe];delete k[W]}delete B[I],Object.keys(B).length===0&&delete i[D]}}}function C(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function QE(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ew(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Ai&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let y=v===ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==qn&&v!==di&&!y&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:M,maxSamples:b,samples:E}}function tw(n){let e=this,t=null,i=0,s=!1,r=!1,o=new bi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=n.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let x=r?0:i,S=x*4,M=g.clippingState||null;l.value=M,M=h(p,d,S,f);for(let b=0;b!==S;++b)M[b]=t[b];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,p){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,M=f;S!==_;++S,M+=4)o.copy(u[S]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Ka=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ga(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fn(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:hs});r.uniforms.tEquirect.value=t;let o=new Et(s,r),a=t.minFilter;return t.minFilter===us&&(t.minFilter=Dn),new po(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},V0=256,nw=3,iw=20,d_=256,f_=16,sw=3,rw=new P,ow=new de,Vh=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new po(1,10,null),this._boxMesh=new Et(new Fn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=rw}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(ow));let m=new po(i,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(V0,O0(e))}_fromTexture(e,t){e.mapping===gr||e.mapping===_o?this._setSize(e.image.length===0?V0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=W0(e,!1,!1),i=Math.log2(e)-nw;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=W0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===gr||e.mapping===_o?(this._cubemapMaterial===null&&(this._cubemapMaterial=q0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=X0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=aw(),this._integrationMaterial=lw());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/f_);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-sw)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(d_*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=cw());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function W0(n,e,t){return new Ka(n,{minFilter:us,generateMipmaps:e,type:ln,colorSpace:ra,depthBuffer:t})}function Za(n,e,t){return new Gt({name:n,uniforms:e,vertexShader:je.cube_vert,fragmentShader:t,side:gn,blending:hs,depthTest:!1,depthWrite:!1})}function aw(){return Za("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${d_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function lw(){return Za("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:f_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function cw(){return Za("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${iw}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function X0(){return Za("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function q0(){return Za("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function hw(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===eh||f===th)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let _=new Ka(p.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===eh||f===th,_=f===gr||f===_o;if(p||_){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new Vh(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let x=d.image;return p&&x&&x.height>0||_&&x&&l(x)?(i===null&&(i=new Vh(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===eh?d.mapping=gr:f===th&&(d.mapping=_o),d}function l(d){let f=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function uw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&rr("WebGLRenderer: "+i+" extension not supported."),s}}}function dw(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)e.update(_[m],n.ARRAY_BUFFER)}function u(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let x=_!==null?_.array.length:m.array.length/3-1,S=m.count>=65535?da:ua,M=new S(Math.ceil(x/3)*6,1),b=M.array;if(_!==null){let v=_.array;g=_.version;for(let y=0,C=0;y<x;y+=3){let A=v[y+0],N=v[y+1],D=v[y+2];b[C++]=A,b[C++]=N,b[C++]=N,b[C++]=D,b[C++]=D,b[C++]=A}}else{g=m.version;for(let v=0,y=0;v<x;v+=3){let C=v+0,A=v+1,N=v+2;b[y++]=C,b[y++]=A,b[y++]=A,b[y++]=N,b[y++]=N,b[y++]=C}}M.version=g;let E=r.get(p);E&&e.remove(E),r.set(p,M)}function d(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function fw(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),t.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*o,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function pw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function mw(n,e,t){let i=new WeakMap,s=new kt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let C=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let M=a.attributes.position.count*S,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*b*4*u),v=new la(E,M,b,u);v.type=di,v.needsUpdate=!0;let y=S*4;for(let A=0;A<u;A++){let N=m[A],D=g[A],B=x[A],I=M*b*4*A;for(let k=0;k<N.count;k++){let W=k*y;f===!0&&(s.fromBufferAttribute(N,k),E[I+W+0]=s.x,E[I+W+1]=s.y,E[I+W+2]=s.z,E[I+W+3]=0),p===!0&&(s.fromBufferAttribute(D,k),E[I+W+4]=s.x,E[I+W+5]=s.y,E[I+W+6]=s.z,E[I+W+7]=0),_===!0&&(s.fromBufferAttribute(B,k),E[I+W+8]=s.x,E[I+W+9]=s.y,E[I+W+10]=s.z,E[I+W+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:v,size:new re(M,b)},i.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function gw(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var _w={[Oa]:"LINEAR_TONE_MAPPING",[Fa]:"REINHARD_TONE_MAPPING",[Ua]:"CINEON_TONE_MAPPING",[Ba]:"ACES_FILMIC_TONE_MAPPING",[za]:"AGX_TONE_MAPPING",[mr]:"NEUTRAL_TONE_MAPPING",[ka]:"CUSTOM_TONE_MAPPING"};function vw(n,e,t,i,s,r){let o=new en(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ft;h.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new qe([0,2,0,0,2,0],2));let u=new ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Et(h,u),f=new dr(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,x=null,S=[],M=!1;this.setSize=function(b,E){o.setSize(b,E),a!==null&&a.setSize(b,E),l!==null&&l.setSize(b,E);for(let v=0;v<S.length;v++){let y=S[v];y.setSize&&y.setSize(b,E)}},this.setEffects=function(b){S=b,M=S.length>0&&S[0].isRenderPass===!0;let E=o.width,v=o.height;S.length>0&&a===null&&(a=new en(E,v,{type:ln,depthBuffer:!1,stencilBuffer:!1}),l=new en(E,v,{type:ln,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&S.some(C=>C.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new cs(E,v),r===!0&&(c.format=ds,c.type=_r)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let C=0;C<S.length;C++){let A=S[C];A.setSize&&A.setSize(E,v),y&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,E){if(m||b.toneMapping===Hi&&S.length===0)return!1;if(x=E,E!==null){let v=E.width,y=E.height;(o.width!==v||o.height!==y)&&this.setSize(v,y)}return M===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Hi,!0},this.hasRenderPass=function(){return M},this.end=function(b,E){b.toneMapping=g,m=!0;let v=o,y=a;for(let C=0;C<S.length;C++){let A=S[C];A.enabled!==!1&&(A.render(b,y,v,E),A.needsSwap!==!1&&(v=y,y=y===a?l:a))}if(p!==b.outputColorSpace||_!==b.toneMapping){p=b.outputColorSpace,_=b.toneMapping,u.defines={},rt.getTransfer(p)===xt&&(u.defines.SRGB_TRANSFER="");let C=_w[_];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,b.setRenderTarget(x),b.render(d,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var p_=new On,m_=new cs(1,1),g_=new _a(1),__=new la,v_=new Nc,x_=new ga,Y0=[],$0=[],J0=new Float32Array(16),K0=new Float32Array(9),Z0=new Float32Array(4);function So(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Y0[s];if(r===void 0&&(r=new Float32Array(s),Y0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function cn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xh(n,e){let t=$0[e];t===void 0&&(t=new Int32Array(e),$0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function Sw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function Mw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function bw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,i))return;Z0.set(i),n.uniformMatrix2fv(this.addr,!1,Z0),hn(t,i)}}function Ew(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,i))return;K0.set(i),n.uniformMatrix3fv(this.addr,!1,K0),hn(t,i)}}function ww(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,i))return;J0.set(i),n.uniformMatrix4fv(this.addr,!1,J0),hn(t,i)}}function Tw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Aw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function Cw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function Rw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function Iw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Pw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function Nw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function Lw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function qh(n){return n.version===0&&(n.compareFunction=yf,n.needsUpdate=!0),n}function Dw(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=qh(m_):r=p_,t.setTexture2D(e||r,s)}function Ow(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||v_,s)}function Fw(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=qh(g_):r=x_,t.setTextureCube(e||r,s)}function Uw(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||__,s)}function Bw(n){switch(n){case 5126:return xw;case 35664:return yw;case 35665:return Sw;case 35666:return Mw;case 35674:return bw;case 35675:return Ew;case 35676:return ww;case 5124:case 35670:return Tw;case 35667:case 35671:return Aw;case 35668:case 35672:return Cw;case 35669:case 35673:return Rw;case 5125:return Iw;case 36294:return Pw;case 36295:return Nw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Uw}}function kw(n,e){n.uniform1fv(this.addr,e)}function zw(n,e){let t=So(e,this.size,2);n.uniform2fv(this.addr,t)}function Hw(n,e){let t=So(e,this.size,3);n.uniform3fv(this.addr,t)}function Gw(n,e){let t=So(e,this.size,4);n.uniform4fv(this.addr,t)}function Vw(n,e){let t=So(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ww(n,e){let t=So(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Xw(n,e){let t=So(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qw(n,e){n.uniform1iv(this.addr,e)}function Yw(n,e){n.uniform2iv(this.addr,e)}function $w(n,e){n.uniform3iv(this.addr,e)}function Jw(n,e){n.uniform4iv(this.addr,e)}function Kw(n,e){n.uniform1uiv(this.addr,e)}function Zw(n,e){n.uniform2uiv(this.addr,e)}function jw(n,e){n.uniform3uiv(this.addr,e)}function Qw(n,e){n.uniform4uiv(this.addr,e)}function eT(n,e,t){let i=this.cache,s=e.length,r=Xh(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=qh(m_):o=p_;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function tT(n,e,t){let i=this.cache,s=e.length,r=Xh(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||v_,r[o])}function nT(n,e,t){let i=this.cache,s=e.length,r=Xh(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=qh(g_):o=x_;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function iT(n,e,t){let i=this.cache,s=e.length,r=Xh(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||__,r[o])}function sT(n){switch(n){case 5126:return kw;case 35664:return zw;case 35665:return Hw;case 35666:return Gw;case 35674:return Vw;case 35675:return Ww;case 35676:return Xw;case 5124:case 35670:return qw;case 35667:case 35671:return Yw;case 35668:case 35672:return $w;case 35669:case 35673:return Jw;case 5125:return Kw;case 36294:return Zw;case 36295:return jw;case 36296:return Qw;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}var Ff=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Bw(t.type)}},Uf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sT(t.type)}},Bf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Df=/(\w+)(\])?(\[|\.)?/g;function j0(n,e){n.seq.push(e),n.map[e.id]=e}function rT(n,e,t){let i=n.name,s=i.length;for(Df.lastIndex=0;;){let r=Df.exec(i),o=Df.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){j0(t,c===void 0?new Ff(a,n,e):new Uf(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Bf(a),j0(t,u)),t=u}}}var yo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);rT(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Q0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var oT=37297,aT=0;function lT(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var e_=new Ye;function cT(n){rt._getMatrix(e_,rt.workingColorSpace,n);let e=`mat3( ${e_.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case oa:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function t_(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+lT(n.getShaderSource(e),a)}else return r}function hT(n,e){let t=cT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var uT={[Oa]:"Linear",[Fa]:"Reinhard",[Ua]:"Cineon",[Ba]:"ACESFilmic",[za]:"AgX",[mr]:"Neutral",[ka]:"Custom"};function dT(n,e){let t=uT[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gh=new P;function fT(){rt.getLuminanceCoefficients(Gh);let n=Gh.x.toFixed(4),e=Gh.y.toFixed(4),t=Gh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function mT(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gT(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ja(n){return n!==""}function n_(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function i_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _T=/^[ \t]*#include +<([\w\d./]+)>/gm;function kf(n){return n.replace(_T,vT)}function vT(n,e){let t=je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return kf(t)}var xT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function s_(n){return n.replace(xT,yT)}function yT(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function r_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ST={[fr]:"SHADOWMAP_TYPE_PCF",[mo]:"SHADOWMAP_TYPE_VSM"};function MT(n){return ST[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bT={[_o]:"ENVMAP_MODE_REFRACTION"};function ET(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":bT[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wT={[hf]:"ENVMAP_BLENDING_MULTIPLY",[x0]:"ENVMAP_BLENDING_MIX",[y0]:"ENVMAP_BLENDING_ADD"};function TT(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":wT[n.combine]||"ENVMAP_BLENDING_NONE"}function AT(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=MT(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ET(t),u=TT(t),d=pT(t),f=mT(r),p=s.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ja).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ja).join(`
`),m.length>0&&(m+=`
`)):(_=[r_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),m=[r_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?je.tonemapping_pars_fragment:"",t.toneMapping!==Hi?dT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,hT("linearToOutputTexel",t.outputColorSpace),fT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ja).join(`
`)),o=kf(o),o=n_(o,t),o=i_(o,t),a=kf(a),a=n_(a,t),a=i_(a,t),o=s_(o),a=s_(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=g+_+o,S=g+m+a,M=Q0(s,s.VERTEX_SHADER,x),b=Q0(s,s.FRAGMENT_SHADER,S);s.attachShader(p,M),s.attachShader(p,b),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(A){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(p)||"",D=s.getShaderInfoLog(M)||"",B=s.getShaderInfoLog(b)||"",I=N.trim(),k=D.trim(),W=B.trim(),H=!0,oe=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,M,b);else{let q=t_(s,M,"vertex"),Z=t_(s,b,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+q+`
`+Z)}else I!==""?Ge("WebGLProgram: Program Info Log:",I):(k===""||W==="")&&(oe=!1);oe&&(A.diagnostics={runnable:H,programLog:I,vertexShader:{log:k,prefix:_},fragmentShader:{log:W,prefix:m}})}s.deleteShader(M),s.deleteShader(b),v=new yo(s,p),y=gT(s,p)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(p,oT)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=b,this}var CT=0,zf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Hf(e),t.set(e,i)),i}},Hf=class{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}};function RT(n){return n===Bs||n===qa||n===Ya}function IT(n,e,t,i,s,r){let o=new ca,a=new zf,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,y,C,A,N,D){let B=A.fog,I=N.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,H=e.get(v.envMap||k,W),oe=d[v.type],q=i.precision;v.precision!==null&&(q=i.getMaxPrecision(v.precision),q!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",q,"instead."));let Z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=Z!==void 0?Z.length:0,Ae=0;I.morphAttributes.position!==void 0&&(Ae=1),I.morphAttributes.normal!==void 0&&(Ae=2),I.morphAttributes.color!==void 0&&(Ae=3);let Le,$,X,te;if(oe){let Ee=Vi[oe];Le=Ee.vertexShader,$=Ee.fragmentShader}else{Le=v.vertexShader,$=v.fragmentShader;let Ee=a.getVertexShaderStage(v),Rt=a.getFragmentShaderStage(v);a.update(v,Ee,Rt),X=Ee.id,te=Rt.id}let ie=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),Re=N.isInstancedMesh===!0,Ut=N.isBatchedMesh===!0,He=!!v.map,tt=!!v.matcap,ct=!!H,se=ct&&H.isPMREMTexture===!0,ge=!!v.aoMap,fe=!!v.lightMap,Ce=!!v.bumpMap&&v.wireframe===!1,be=!!v.normalMap,Ze=!!v.displacementMap,Oe=!!v.emissiveMap,ht=!!v.metalnessMap,ut=!!v.roughnessMap,vt=v.anisotropy>0,U=v.clearcoat>0,sn=v.diffuseRoughness>0,st=v.dispersion>0,It=v.retroreflectivity>0,ye=v.iridescence>0,Jt=v.sheen>0,ze=v.transmission>0,Xe=vt&&!!v.anisotropyMap,R=U&&!!v.clearcoatMap,w=U&&!!v.clearcoatNormalMap,G=U&&!!v.clearcoatRoughnessMap,le=sn&&!!v.diffuseRoughnessMap,ne=ye&&!!v.iridescenceMap,pe=ye&&!!v.iridescenceThicknessMap,Se=Jt&&!!v.sheenColorMap,j=Jt&&!!v.sheenRoughnessMap,Q=!!v.specularMap,_e=!!v.specularColorMap,L=!!v.specularIntensityMap,ee=ze&&!!v.transmissionMap,J=ze&&!!v.thicknessMap,ve=!!v.gradientMap,ue=!!v.alphaMap,me=v.alphaTest>0,Fe=!!v.alphaHash,et=!!v.extensions,ce=Hi;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ce=n.toneMapping);let Be=se?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Qe={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:Le,fragmentShader:$,defines:v.defines,customVertexShaderID:X,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:q,batching:Ut,batchingColor:Ut&&N._colorsTexture!==null,instancing:Re,instancingColor:Re&&N.instanceColor!==null,instancingMorph:Re&&N.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:He,matcap:tt,envMap:ct,envMapMode:ct&&H.mapping,envMapPMREM:se,envMapMaxLod:se?Be.length-1:null,envMapSize:se?Be[0].width:null,aoMap:ge,lightMap:fe,bumpMap:Ce,normalMap:be,displacementMap:Ze,emissiveMap:Oe,normalMapObjectSpace:be&&v.normalMapType===b0,normalMapTangentSpace:be&&v.normalMapType===zh,packedNormalMap:be&&v.normalMapType===zh&&RT(v.normalMap.format),metalnessMap:ht,roughnessMap:ut,anisotropy:vt,anisotropyMap:Xe,clearcoat:U,clearcoatMap:R,clearcoatNormalMap:w,clearcoatRoughnessMap:G,diffuseRoughness:sn,diffuseRoughnessMap:le,dispersion:st,retroreflection:It,iridescence:ye,iridescenceMap:ne,iridescenceThicknessMap:pe,sheen:Jt,sheenColorMap:Se,sheenRoughnessMap:j,specularMap:Q,specularColorMap:_e,specularIntensityMap:L,transmission:ze,transmissionMap:ee,thicknessMap:J,gradientMap:ve,opaque:v.transparent===!1&&v.blending===go&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:me,alphaHash:Fe,combine:v.combine,mapUv:He&&f(v.map.channel),aoMapUv:ge&&f(v.aoMap.channel),lightMapUv:fe&&f(v.lightMap.channel),bumpMapUv:Ce&&f(v.bumpMap.channel),normalMapUv:be&&f(v.normalMap.channel),displacementMapUv:Ze&&f(v.displacementMap.channel),emissiveMapUv:Oe&&f(v.emissiveMap.channel),metalnessMapUv:ht&&f(v.metalnessMap.channel),roughnessMapUv:ut&&f(v.roughnessMap.channel),anisotropyMapUv:Xe&&f(v.anisotropyMap.channel),clearcoatMapUv:R&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(v.sheenRoughnessMap.channel),specularMapUv:Q&&f(v.specularMap.channel),specularColorMapUv:_e&&f(v.specularColorMap.channel),specularIntensityMapUv:L&&f(v.specularIntensityMap.channel),transmissionMapUv:ee&&f(v.transmissionMap.channel),thicknessMapUv:J&&f(v.thicknessMap.channel),alphaMapUv:ue&&f(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(be||vt),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(He||ue),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&be===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ae,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Ae,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:D.filter(Ee=>Ee.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:He&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:Oe&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===nn,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:et&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&v.extensions.multiDraw===!0||Ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function _(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)y.push(C),y.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(y,v),g(y,v),y.push(n.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function m(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapPMREM),v.push(y.envMapMaxLod),v.push(y.envMapSize),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.diffuseRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.numSunLights),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numSunLightShadows),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.numLightProbeGrids),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function g(v,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function x(v){let y=d[v.type],C;if(y){let A=Vi[y];C=ps.clone(A.uniforms)}else C=v.uniforms;return C}function S(v,y){let C=h.get(y);return C!==void 0?++C.usedTimes:(C=new AT(n,y,v,s),c.push(C),h.set(y,C)),C}function M(v){if(--v.usedTimes===0){let y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:x,acquireProgram:S,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:E}}function PT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function NT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function o_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function a_(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,_,m,g){let x=n[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},n[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=p,x.materialVariant=o(d),x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=m,x.group=g),e++,x}function l(d,f,p,_,m,g,x){x.reversedDepth===!0&&(m=-m);let S=a(d,f,p,_,m,g);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):t.push(S)}function c(d,f,p,_,m,g){let x=a(d,f,p,_,m,g);p.transmission>0?i.unshift(x):p.transparent===!0?s.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||NT),i.length>1&&i.sort(f||o_),s.length>1&&s.sort(f||o_)}function u(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function LT(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new a_,n.set(i,[o])):s>=r.length?(o=new a_,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function DT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new de};break;case"SpotLight":t={position:new P,direction:new P,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function OT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var FT=0;function UT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function BT(n){let e=new DT,t=OT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new bt,o=new bt;function a(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,x=0,S=0,M=0,b=0,E=0,v=0,y=0,C=0,A=0;c.sort(UT);for(let D=0,B=c.length;D<B;D++){let I=c[D],k=I.color,W=I.intensity,H=I.distance,oe=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Bs?oe=I.shadow.map.texture:oe=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*W,u+=k.g*W,d+=k.b*W;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],W);A++}else if(I.isSunLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,K=t.get(I);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[p]=K,i.sunShadowMap[p]=oe;let Ae=Z.getViewportCount();for(let Le=0;Le<Ae;Le++)i.sunShadowMatrix[_+Le]=Z.getMatrix(Le),i.sunShadowCascade[_+Le]=Z._cascadeData[Le];_+=Ae,p++}i.sun[f]=q,f++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,K=t.get(I);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=oe,i.directionalShadowMatrix[m]=I.shadow.matrix,b++}i.directional[m]=q,m++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(k).multiplyScalar(W),q.distance=H,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[x]=q;let Z=I.shadow;if(I.map&&(i.spotLightMap[y]=I.map,y++,Z.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[x]=Z.matrix,I.castShadow){let K=t.get(I);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,i.spotShadow[x]=K,i.spotShadowMap[x]=oe,v++}x++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(k).multiplyScalar(W),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[S]=q,S++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let Z=I.shadow,K=t.get(I);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,i.pointShadow[g]=K,i.pointShadowMap[g]=oe,i.pointShadowMatrix[g]=I.shadow.matrix,E++}i.point[g]=q,g++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(W),q.groundColor.copy(I.groundColor).multiplyScalar(W),i.hemi[M]=q,M++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let N=i.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==S||N.hemiLength!==M||N.numSunShadows!==p||N.numDirectionalShadows!==b||N.numPointShadows!==E||N.numSpotShadows!==v||N.numSpotMaps!==y||N.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=m,i.spot.length=x,i.rectArea.length=S,i.point.length=g,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+y-C,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,N.sunLength=f,N.directionalLength=m,N.pointLength=g,N.spotLength=x,N.rectAreaLength=S,N.hemiLength=M,N.numSunShadows=p,N.numDirectionalShadows=b,N.numPointShadows=E,N.numSpotShadows=v,N.numSpotMaps=y,N.numLightProbes=A,i.version=FT++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let x=0,S=c.length;x<S;x++){let M=c[x];if(M.isSunLight){let b=i.sun[u];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(M.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let b=i.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function l_(n){let e=new BT(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){i.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function kT(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new l_(n),e.set(s,[a])):r>=o.length?(a=new l_(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var zT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,GT=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],VT=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],c_=new bt,$a=new P,Of=new P;function WT(n,e,t){let i=new Ps,s=new re,r=new re,o=new kt,a=new zc,l=new Hc,c={},h=t.maxTextureSize,u={[Us]:gn,[gn]:Us,[nn]:nn},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:zT,fragmentShader:HT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ft;p.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Et(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fr;let g=this.type;this.render=function(E,v,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===e0&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fr);let C=n.getRenderTarget(),A=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),D=n.state;D.setBlending(hs),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=g!==this.type;B&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=E.length;I<k;I++){let W=E[I],H=W.shadow;if(H===void 0){Ge("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let oe=H.getFrameExtents();s.multiply(oe),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,H.mapSize.y=r.y));let q=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===mo){if(W.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new en(s.x,s.y,{format:Bs,type:ln,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new cs(s.x,s.y,di),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=rs,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=mn,H.map.depthTexture.magFilter=mn}else W.isPointLight?(H.map=new Ka(s.x),H.map.depthTexture=new _a(s.x,Ti)):(H.map=new en(s.x,s.y),H.map.depthTexture=new cs(s.x,s.y,Ti)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=rs,this.type===fr?(H.map.depthTexture.compareFunction=q?xf:vf,H.map.depthTexture.minFilter=Dn,H.map.depthTexture.magFilter=Dn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=mn,H.map.depthTexture.magFilter=mn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();W.isPointLight!==!0&&H.updateMatrices(W,y);let K=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:y.layers;for(let Ae=0;Ae<Z;Ae++){let Le=H.getCamera(Ae);if(W.isPointLight){let $=H.camera,X=H.matrix,te=W.distance||$.far;te!==$.far&&($.far=te,$.updateProjectionMatrix()),$a.setFromMatrixPosition(W.matrixWorld),$.position.copy($a),Of.copy($.position),Of.add(GT[Ae]),$.up.copy(VT[Ae]),$.lookAt(Of),$.updateMatrixWorld(),X.makeTranslation(-$a.x,-$a.y,-$a.z),c_.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),H._frustum.setFromProjectionMatrix(c_,$.coordinateSystem,$.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,Ae),n.clear();else{Ae===0&&(n.setRenderTarget(H.map),n.clear());let $=H.getViewport(Ae);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),D.viewport(o)}i=H.getFrustum(Ae),M(v,y,Le,W,K,this.type)}H.isPointLightShadow!==!0&&this.type===mo&&x(H,y),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(C,A,N)};function x(E,v){let y=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new en(s.x,s.y,{format:Bs,type:ln}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(v,null,y,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(v,null,y,f,_,null)}function S(E,v,y,C){let A=null,N=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)A=N;else if(A=y.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let D=A.uuid,B=v.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let k=I[B];k===void 0&&(k=A.clone(),I[B]=k,v.addEventListener("dispose",b)),A=k}if(A.visible=v.visible,A.wireframe=v.wireframe,C===mo?A.side=v.shadowSide!==null?v.shadowSide:v.side:A.side=v.shadowSide!==null?v.shadowSide:u[v.side],A.alphaMap=v.alphaMap,A.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,A.map=v.map,A.clipShadows=v.clipShadows,A.clippingPlanes=v.clippingPlanes,A.clipIntersection=v.clipIntersection,A.displacementMap=v.displacementMap,A.displacementScale=v.displacementScale,A.displacementBias=v.displacementBias,A.wireframeLinewidth=v.wireframeLinewidth,A.linewidth=v.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=n.properties.get(A);D.light=y}return A}function M(E,v,y,C,A,N){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===mo)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let I=e.update(E),k=E.material;if(Array.isArray(k)){let W=I.groups;for(let H=0,oe=W.length;H<oe;H++){let q=W[H],Z=k[q.materialIndex];if(Z&&Z.visible){let K=S(E,Z,C,N);E.onBeforeShadow(n,E,v,y,I,K,q),n.renderBufferDirect(y,null,I,K,E,q),E.onAfterShadow(n,E,v,y,I,K,q)}}}else if(k.visible){let W=S(E,k,C,N);E.onBeforeShadow(n,E,v,y,I,W,null),n.renderBufferDirect(y,null,I,W,E,null),E.onAfterShadow(n,E,v,y,I,W,null)}}let B=E.children;for(let I=0,k=B.length;I<k;I++)M(B[I],v,y,C,A,N)}function b(E){E.target.removeEventListener("dispose",b);for(let y in c){let C=c[y],A=E.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function XT(n,e){function t(){let L=!1,ee=new kt,J=null,ve=new kt(0,0,0,0);return{setMask:function(ue){J!==ue&&!L&&(n.colorMask(ue,ue,ue,ue),J=ue)},setLocked:function(ue){L=ue},setClear:function(ue,me,Fe,et,ce){ce===!0&&(ue*=et,me*=et,Fe*=et),ee.set(ue,me,Fe,et),ve.equals(ee)===!1&&(n.clearColor(ue,me,Fe,et),ve.copy(ee))},reset:function(){L=!1,J=null,ve.set(-1,0,0,0)}}}function i(){let L=!1,ee=!1,J=null,ve=null,ue=null;return{setReversed:function(me){if(ee!==me){let Fe=e.get("EXT_clip_control");me?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ee=me;let et=ue;ue=null,this.setClear(et)}},getReversed:function(){return ee},setTest:function(me){me?ae(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(me){J!==me&&!L&&(n.depthMask(me),J=me)},setFunc:function(me){if(ee&&(me=D0[me]),ve!==me){switch(me){case yc:n.depthFunc(n.NEVER);break;case Sc:n.depthFunc(n.ALWAYS);break;case Mc:n.depthFunc(n.LESS);break;case eo:n.depthFunc(n.LEQUAL);break;case bc:n.depthFunc(n.EQUAL);break;case Ec:n.depthFunc(n.GEQUAL);break;case wc:n.depthFunc(n.GREATER);break;case Tc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=me}},setLocked:function(me){L=me},setClear:function(me){ue!==me&&(ue=me,ee&&(me=1-me),n.clearDepth(me))},reset:function(){L=!1,J=null,ve=null,ue=null,ee=!1}}}function s(){let L=!1,ee=null,J=null,ve=null,ue=null,me=null,Fe=null,et=null,ce=null;return{setTest:function(Be){L||(Be?ae(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(Be){ee!==Be&&!L&&(n.stencilMask(Be),ee=Be)},setFunc:function(Be,Qe,Ee){(J!==Be||ve!==Qe||ue!==Ee)&&(n.stencilFunc(Be,Qe,Ee),J=Be,ve=Qe,ue=Ee)},setOp:function(Be,Qe,Ee){(me!==Be||Fe!==Qe||et!==Ee)&&(n.stencilOp(Be,Qe,Ee),me=Be,Fe=Qe,et=Ee)},setLocked:function(Be){L=Be},setClear:function(Be){ce!==Be&&(n.clearStencil(Be),ce=Be)},reset:function(){L=!1,ee=null,J=null,ve=null,ue=null,me=null,Fe=null,et=null,ce=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,x=null,S=null,M=null,b=null,E=null,v=null,y=new de(0,0,0),C=0,A=!1,N=null,D=null,B=null,I=null,k=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,oe=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=oe>=1):q.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=oe>=2);let Z=null,K={},Ae=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),$=new kt().fromArray(Ae),X=new kt().fromArray(Le);function te(L,ee,J,ve){let ue=new Uint8Array(4),me=n.createTexture();n.bindTexture(L,me),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<J;Fe++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(ee+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return me}let ie={};ie[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(n.DEPTH_TEST),o.setFunc(eo),Ce(!1),be(rf),ae(n.CULL_FACE),ge(hs);function ae(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Re(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Ut(L,ee){return d[L]!==ee?(n.bindFramebuffer(L,ee),d[L]=ee,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ee),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function He(L,ee){let J=p,ve=!1;if(L){J=f.get(ee),J===void 0&&(J=[],f.set(ee,J));let ue=L.textures;if(J.length!==ue.length||J[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Fe=ue.length;me<Fe;me++)J[me]=n.COLOR_ATTACHMENT0+me;J.length=ue.length,ve=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ve=!0);ve&&n.drawBuffers(J)}function tt(L){return _!==L?(n.useProgram(L),_=L,!0):!1}let ct={[pr]:n.FUNC_ADD,[n0]:n.FUNC_SUBTRACT,[i0]:n.FUNC_REVERSE_SUBTRACT};ct[s0]=n.MIN,ct[r0]=n.MAX;let se={[o0]:n.ZERO,[a0]:n.ONE,[l0]:n.SRC_COLOR,[lf]:n.SRC_ALPHA,[p0]:n.SRC_ALPHA_SATURATE,[d0]:n.DST_COLOR,[h0]:n.DST_ALPHA,[c0]:n.ONE_MINUS_SRC_COLOR,[cf]:n.ONE_MINUS_SRC_ALPHA,[f0]:n.ONE_MINUS_DST_COLOR,[u0]:n.ONE_MINUS_DST_ALPHA,[m0]:n.CONSTANT_COLOR,[g0]:n.ONE_MINUS_CONSTANT_COLOR,[_0]:n.CONSTANT_ALPHA,[v0]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(L,ee,J,ve,ue,me,Fe,et,ce,Be){if(L===hs){m===!0&&(Re(n.BLEND),m=!1);return}if(m===!1&&(ae(n.BLEND),m=!0),L!==t0){if(L!==g||Be!==A){if((x!==pr||b!==pr)&&(n.blendEquation(n.FUNC_ADD),x=pr,b=pr),Be)switch(L){case go:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ii:n.blendFunc(n.ONE,n.ONE);break;case of:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case af:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:We("WebGLState: Invalid blending: ",L);break}else switch(L){case go:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case of:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case af:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",L);break}S=null,M=null,E=null,v=null,y.set(0,0,0),C=0,g=L,A=Be}return}ue=ue||ee,me=me||J,Fe=Fe||ve,(ee!==x||ue!==b)&&(n.blendEquationSeparate(ct[ee],ct[ue]),x=ee,b=ue),(J!==S||ve!==M||me!==E||Fe!==v)&&(n.blendFuncSeparate(se[J],se[ve],se[me],se[Fe]),S=J,M=ve,E=me,v=Fe),(et.equals(y)===!1||ce!==C)&&(n.blendColor(et.r,et.g,et.b,ce),y.copy(et),C=ce),g=L,A=!1}function fe(L,ee){L.side===nn?Re(n.CULL_FACE):ae(n.CULL_FACE);let J=L.side===gn;ee&&(J=!J),Ce(J),L.blending===go&&L.transparent===!1?ge(hs):ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let ve=L.stencilWrite;a.setTest(ve),ve&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(L){N!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),N=L)}function be(L){L!==jg?(ae(n.CULL_FACE),L!==D&&(L===rf?n.cullFace(n.BACK):L===Qg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),D=L}function Ze(L){L!==B&&(H&&n.lineWidth(L),B=L)}function Oe(L,ee,J){L?(ae(n.POLYGON_OFFSET_FILL),(I!==ee||k!==J)&&(I=ee,k=J,o.getReversed()&&(ee=-ee,J=-J),n.polygonOffset(ee,J))):Re(n.POLYGON_OFFSET_FILL)}function ht(L){L?ae(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function ut(L){L===void 0&&(L=n.TEXTURE0+W-1),Z!==L&&(n.activeTexture(L),Z=L)}function vt(L,ee,J){J===void 0&&(Z===null?J=n.TEXTURE0+W-1:J=Z);let ve=K[J];ve===void 0&&(ve={type:void 0,texture:void 0},K[J]=ve),(ve.type!==L||ve.texture!==ee)&&(Z!==J&&(n.activeTexture(J),Z=J),n.bindTexture(L,ee||ie[L]),ve.type=L,ve.texture=ee)}function U(){let L=K[Z];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function sn(){try{n.compressedTexImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function st(){try{n.compressedTexImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function It(){try{n.texSubImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function ye(){try{n.texSubImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function Jt(){try{n.compressedTexSubImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function ze(){try{n.compressedTexSubImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function Xe(){try{n.texStorage2D(...arguments)}catch(L){We("WebGLState:",L)}}function R(){try{n.texStorage3D(...arguments)}catch(L){We("WebGLState:",L)}}function w(){try{n.texImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function G(){try{n.texImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function le(L){return u[L]!==void 0?u[L]:n.getParameter(L)}function ne(L,ee){u[L]!==ee&&(n.pixelStorei(L,ee),u[L]=ee)}function pe(L){$.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),$.copy(L))}function Se(L){X.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function j(L,ee){let J=c.get(ee);J===void 0&&(J=new WeakMap,c.set(ee,J));let ve=J.get(L);ve===void 0&&(ve=n.getUniformBlockIndex(ee,L.name),n.uniformBlockBinding(ee,ve,ve),J.set(L,ve))}function Q(L,ee,J){let ue=c.get(ee).get(L);l[ue]!==J&&(n.bindBufferBase(n.UNIFORM_BUFFER,ue,J),l[ue]=J)}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,K={},d={},l={},f=new WeakMap,p=[],_=null,m=!1,g=null,x=null,S=null,M=null,b=null,E=null,v=null,y=new de(0,0,0),C=0,A=!1,N=null,D=null,B=null,I=null,k=null,$.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Re,bindFramebuffer:Ut,drawBuffers:He,useProgram:tt,setBlending:ge,setMaterial:fe,setFlipSided:Ce,setCullFace:be,setLineWidth:Ze,setPolygonOffset:Oe,setScissorTest:ht,activeTexture:ut,bindTexture:vt,unbindTexture:U,compressedTexImage2D:sn,compressedTexImage3D:st,texImage2D:w,texImage3D:G,pixelStorei:ne,getParameter:le,updateUBOMapping:j,uniformBlockBinding:Q,texStorage2D:Xe,texStorage3D:R,texSubImage2D:It,texSubImage3D:ye,compressedTexSubImage2D:Jt,compressedTexSubImage3D:ze,scissor:pe,viewport:Se,reset:_e}}function qT(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,_=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return m?new OffscreenCanvas(R,w):aa("canvas")}function x(R,w,G){let le=1,ne=Xe(R);if((ne.width>G||ne.height>G)&&(le=G/Math.max(ne.width,ne.height)),le<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pe=Math.floor(le*ne.width),Se=Math.floor(le*ne.height);d===void 0&&(d=g(pe,Se));let j=w?g(pe,Se):d;return j.width=pe,j.height=Se,j.getContext("2d").drawImage(R,0,0,pe,Se),Ge("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+pe+"x"+Se+")."),j}else return"data"in R&&Ge("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function S(R){return R.generateMipmaps}function M(R){n.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(R,w,G,le,ne,pe=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Se;le&&(Se=e.get("EXT_texture_norm16"),Se||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=w;if(w===n.RED&&(G===n.FLOAT&&(j=n.R32F),G===n.HALF_FLOAT&&(j=n.R16F),G===n.UNSIGNED_BYTE&&(j=n.R8),G===n.UNSIGNED_SHORT&&Se&&(j=Se.R16_EXT),G===n.SHORT&&Se&&(j=Se.R16_SNORM_EXT)),w===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.R8UI),G===n.UNSIGNED_SHORT&&(j=n.R16UI),G===n.UNSIGNED_INT&&(j=n.R32UI),G===n.BYTE&&(j=n.R8I),G===n.SHORT&&(j=n.R16I),G===n.INT&&(j=n.R32I)),w===n.RG&&(G===n.FLOAT&&(j=n.RG32F),G===n.HALF_FLOAT&&(j=n.RG16F),G===n.UNSIGNED_BYTE&&(j=n.RG8),G===n.UNSIGNED_SHORT&&Se&&(j=Se.RG16_EXT),G===n.SHORT&&Se&&(j=Se.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RG8UI),G===n.UNSIGNED_SHORT&&(j=n.RG16UI),G===n.UNSIGNED_INT&&(j=n.RG32UI),G===n.BYTE&&(j=n.RG8I),G===n.SHORT&&(j=n.RG16I),G===n.INT&&(j=n.RG32I)),w===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGB8UI),G===n.UNSIGNED_SHORT&&(j=n.RGB16UI),G===n.UNSIGNED_INT&&(j=n.RGB32UI),G===n.BYTE&&(j=n.RGB8I),G===n.SHORT&&(j=n.RGB16I),G===n.INT&&(j=n.RGB32I)),w===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),G===n.UNSIGNED_INT&&(j=n.RGBA32UI),G===n.BYTE&&(j=n.RGBA8I),G===n.SHORT&&(j=n.RGBA16I),G===n.INT&&(j=n.RGBA32I)),w===n.RGB&&(G===n.UNSIGNED_SHORT&&Se&&(j=Se.RGB16_EXT),G===n.SHORT&&Se&&(j=Se.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),w===n.RGBA){let Q=pe?oa:rt.getTransfer(ne);G===n.FLOAT&&(j=n.RGBA32F),G===n.HALF_FLOAT&&(j=n.RGBA16F),G===n.UNSIGNED_BYTE&&(j=Q===xt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&Se&&(j=Se.RGBA16_EXT),G===n.SHORT&&Se&&(j=Se.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(R,w){let G;return R?w===null||w===Ti||w===_r?G=n.DEPTH24_STENCIL8:w===di?G=n.DEPTH32F_STENCIL8:w===vo&&(G=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ti||w===_r?G=n.DEPTH_COMPONENT24:w===di?G=n.DEPTH_COMPONENT32F:w===vo&&(G=n.DEPTH_COMPONENT16),G}function y(R,w){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==mn&&R.minFilter!==Dn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function C(R){let w=new WeakRef(R);i.get(R).__ref=w,p.add(w),_.register(R,w,w)}function A(R){let w=i.get(R).__ref;w!==void 0&&(p.delete(w),_.unregister(w))}function N(R){B(R.target)}function D(R){I(R.target)}function B(R){R.removeEventListener("dispose",N),A(R),W(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function I(R){R.removeEventListener("dispose",D),A(R),oe(R)}function k(){for(let R of p){let w=R.deref();w!==void 0&&(w.isRenderTarget===!0?I(w):B(w))}p.clear(),u.clear()}function W(R){let w=i.get(R);if(w.__webglInit===void 0)return;let G=R.source,le=f.get(G);if(le){let ne=le[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&H(R),Object.keys(le).length===0&&f.delete(G)}i.remove(R)}function H(R){let w=i.get(R);n.deleteTexture(w.__webglTexture);let G=R.source,le=f.get(G);delete le[w.__cacheKey],o.memory.textures--}function oe(R){let w=i.get(R);w.__depthDisposeCallback&&w.__depthDisposeCallback();let G=R.depthTexture;if(G&&G.renderTarget===R&&B(G),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let pe=0;pe<w.__webglFramebuffer[ne].length;pe++)n.deleteFramebuffer(w.__webglFramebuffer[ne][pe]);else n.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)n.deleteFramebuffer(w.__webglFramebuffer[ne]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let le=R.textures;for(let ne=0,pe=le.length;ne<pe;ne++){let Se=i.get(le[ne]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(le[ne])}i.remove(R)}let q=0;function Z(){q=0}function K(){return q}function Ae(R){q=R}function Le(){let R=q;return R>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,R}function $(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.mipmapsAutoUpdate),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function X(R,w){let G=i.get(R);if(R.isVideoTexture&&Jt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let le=R.image;if(le===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(G,R,w);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+w)}function te(R,w){let G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){fe(G,R,w);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+w)}function ie(R,w){let G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){fe(G,R,w);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+w)}function ae(R,w){let G=i.get(R);if(R.version>0&&G.__version!==R.version){Ce(G,R,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+w)}let Re={[to]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[Ac]:n.MIRRORED_REPEAT},Ut={[mn]:n.NEAREST,[S0]:n.NEAREST_MIPMAP_NEAREST,[Ha]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[nh]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},He={[w0]:n.NEVER,[yf]:n.ALWAYS,[T0]:n.LESS,[vf]:n.LEQUAL,[A0]:n.EQUAL,[xf]:n.GEQUAL,[C0]:n.GREATER,[R0]:n.NOTEQUAL};function tt(R,w){if(w.type===di&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Dn||w.magFilter===nh||w.magFilter===Ha||w.magFilter===us||w.minFilter===Dn||w.minFilter===nh||w.minFilter===Ha||w.minFilter===us)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Re[w.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Re[w.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Re[w.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ut[w.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ut[w.minFilter]),w.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,He[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===mn||w.minFilter!==Ha&&w.minFilter!==us||w.type===di&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ct(R,w){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",N),C(w));let le=w.source,ne=f.get(le);ne===void 0&&(ne={},f.set(le,ne));let pe=$(w);if(pe!==R.__cacheKey){ne[pe]===void 0&&(ne[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[pe].usedTimes++;let Se=ne[R.__cacheKey];Se!==void 0&&(ne[R.__cacheKey].usedTimes--,Se.usedTimes===0&&H(w)),R.__cacheKey=pe,R.__webglTexture=ne[pe].texture}return G}function se(R,w,G){return Math.floor(Math.floor(R/G)/w)}function ge(R,w,G,le){let pe=R.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,G,le,w.data);else{pe.sort((L,ee)=>L.start-ee.start);let Se=0;for(let L=1;L<pe.length;L++){let ee=pe[Se],J=pe[L],ve=ee.start+ee.count,ue=se(J.start,w.width,4),me=se(ee.start,w.width,4);J.start<=ve+1&&ue===me&&se(J.start+J.count-1,w.width,4)===ue?ee.count=Math.max(ee.count,J.start+J.count-ee.start):(++Se,pe[Se]=J)}pe.length=Se+1;let j=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),_e=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let L=0,ee=pe.length;L<ee;L++){let J=pe[L],ve=Math.floor(J.start/4),ue=Math.ceil(J.count/4),me=ve%w.width,Fe=Math.floor(ve/w.width),et=ue,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(n.TEXTURE_2D,0,me,Fe,et,ce,G,le,w.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function fe(R,w,G){let le=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(le=n.TEXTURE_3D);let ne=ct(R,w),pe=w.source;t.bindTexture(le,R.__webglTexture,n.TEXTURE0+G);let Se=i.get(pe);if(pe.version!==Se.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ce=rt.getPrimaries(rt.workingColorSpace),Be=w.colorSpace===fs?null:rt.getPrimaries(w.colorSpace),Qe=w.colorSpace===fs||ce===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let Q=x(w.image,!1,s.maxTextureSize);Q=ze(w,Q);let _e=r.convert(w.format,w.colorSpace),L=r.convert(w.type),ee=E(w.internalFormat,_e,L,w.normalized,w.colorSpace,w.isVideoTexture);tt(le,w);let J,ve=w.mipmaps,ue=w.isVideoTexture!==!0,me=Se.__version===void 0||ne===!0,Fe=pe.dataReady,et=y(w,Q);if(w.isDepthTexture)ee=v(w.format===ds,w.type),me&&(ue?t.texStorage2D(n.TEXTURE_2D,1,ee,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ee,Q.width,Q.height,0,_e,L,null));else if(w.isDataTexture)if(ve.length>0){ue&&me&&t.texStorage2D(n.TEXTURE_2D,et,ee,ve[0].width,ve[0].height);for(let ce=0,Be=ve.length;ce<Be;ce++)J=ve[ce],ue?Fe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,J.width,J.height,_e,L,J.data):t.texImage2D(n.TEXTURE_2D,ce,ee,J.width,J.height,0,_e,L,J.data);w.generateMipmaps=!1}else ue?(me&&t.texStorage2D(n.TEXTURE_2D,et,ee,Q.width,Q.height),Fe&&ge(w,Q,_e,L)):t.texImage2D(n.TEXTURE_2D,0,ee,Q.width,Q.height,0,_e,L,Q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ue&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,et,ee,ve[0].width,ve[0].height,Q.depth);for(let ce=0,Be=ve.length;ce<Be;ce++)if(J=ve[ce],w.format!==Ai)if(_e!==null)if(ue){if(Fe)if(w.layerUpdates.size>0){let Qe=Cf(J.width,J.height,w.format,w.type);for(let Ee of w.layerUpdates){let Rt=J.data.subarray(Ee*Qe/J.data.BYTES_PER_ELEMENT,(Ee+1)*Qe/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Ee,J.width,J.height,1,_e,Rt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,J.width,J.height,Q.depth,_e,J.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,ee,J.width,J.height,Q.depth,0,J.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?Fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,J.width,J.height,Q.depth,_e,L,J.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,ee,J.width,J.height,Q.depth,0,_e,L,J.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ue&&me&&t.texStorage2D(n.TEXTURE_2D,et,ee,ve[0].width,ve[0].height);for(let ce=0,Be=ve.length;ce<Be;ce++)J=ve[ce],w.format!==Ai?_e!==null?ue?Fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,J.width,J.height,_e,J.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,ee,J.width,J.height,0,J.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?Fe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,J.width,J.height,_e,L,J.data):t.texImage2D(n.TEXTURE_2D,ce,ee,J.width,J.height,0,_e,L,J.data)}else if(w.isDataArrayTexture)if(ue){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,et,ee,Q.width,Q.height,Q.depth),Fe)if(w.layerUpdates.size>0){let ce=Cf(Q.width,Q.height,w.format,w.type);for(let Be of w.layerUpdates){let Qe=Q.data.subarray(Be*ce/Q.data.BYTES_PER_ELEMENT,(Be+1)*ce/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Be,Q.width,Q.height,1,_e,L,Qe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,_e,L,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ee,Q.width,Q.height,Q.depth,0,_e,L,Q.data);else if(w.isData3DTexture)ue?(me&&t.texStorage3D(n.TEXTURE_3D,et,ee,Q.width,Q.height,Q.depth),Fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,_e,L,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ee,Q.width,Q.height,Q.depth,0,_e,L,Q.data);else if(w.isFramebufferTexture){if(me)if(ue)t.texStorage2D(n.TEXTURE_2D,et,ee,Q.width,Q.height);else{let ce=Q.width,Be=Q.height;for(let Qe=0;Qe<et;Qe++)t.texImage2D(n.TEXTURE_2D,Qe,ee,ce,Be,0,_e,L,null),ce>>=1,Be>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),Q.parentNode!==ce){ce.appendChild(Q),u.add(w),ce.onpaint=Be=>{let Qe=Be.changedElements;for(let Ee of u)Qe.includes(Ee.image)&&(Ee.needsUpdate=!0)},ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let Qe=n.RGBA,Ee=n.RGBA,Rt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Qe,Ee,Rt,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ve.length>0){if(ue&&me){let ce=Xe(ve[0]);t.texStorage2D(n.TEXTURE_2D,et,ee,ce.width,ce.height)}for(let ce=0,Be=ve.length;ce<Be;ce++)J=ve[ce],ue?Fe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,_e,L,J):t.texImage2D(n.TEXTURE_2D,ce,ee,_e,L,J);w.generateMipmaps=!1}else if(ue){if(me){let ce=Xe(Q);t.texStorage2D(n.TEXTURE_2D,et,ee,ce.width,ce.height)}Fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,L,Q)}else t.texImage2D(n.TEXTURE_2D,0,ee,_e,L,Q);S(w)&&w.mipmapsAutoUpdate===!0&&M(le),Se.__version=pe.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Ce(R,w,G){if(w.image.length!==6)return;let le=ct(R,w),ne=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);let pe=i.get(ne);if(ne.version!==pe.__version||le===!0){t.activeTexture(n.TEXTURE0+G);let Se=rt.getPrimaries(rt.workingColorSpace),j=w.colorSpace===fs?null:rt.getPrimaries(w.colorSpace),Q=w.colorSpace===fs||Se===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let _e=w.isCompressedTexture||w.image[0].isCompressedTexture,L=w.image[0]&&w.image[0].isDataTexture,ee=[];for(let Ee=0;Ee<6;Ee++)!_e&&!L?ee[Ee]=x(w.image[Ee],!0,s.maxCubemapSize):ee[Ee]=L?w.image[Ee].image:w.image[Ee],ee[Ee]=ze(w,ee[Ee]);let J=ee[0],ve=r.convert(w.format,w.colorSpace),ue=r.convert(w.type),me=E(w.internalFormat,ve,ue,w.normalized,w.colorSpace),Fe=w.isVideoTexture!==!0,et=pe.__version===void 0||le===!0,ce=ne.dataReady,Be=y(w,J);tt(n.TEXTURE_CUBE_MAP,w);let Qe;if(w.isDepthTexture){if(me=v(w.format===ds,w.type),et)if(Fe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,me,J.width,J.height);else for(let Ee=0;Ee<6;Ee++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,J.width,J.height,0,ve,ue,null)}else if(_e){Fe&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,me,J.width,J.height);for(let Ee=0;Ee<6;Ee++){Qe=ee[Ee].mipmaps;for(let Rt=0;Rt<Qe.length;Rt++){let dn=Qe[Rt];w.format!==Ai?ve!==null?Fe?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Rt,0,0,dn.width,dn.height,ve,dn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Rt,me,dn.width,dn.height,0,dn.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Rt,0,0,dn.width,dn.height,ve,ue,dn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Rt,me,dn.width,dn.height,0,ve,ue,dn.data)}}}else{if(Qe=w.mipmaps,Fe&&et){Qe.length>0&&Be++;let Ee=Xe(ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,me,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(L){Fe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ee[Ee].width,ee[Ee].height,ve,ue,ee[Ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,ee[Ee].width,ee[Ee].height,0,ve,ue,ee[Ee].data);for(let Rt=0;Rt<Qe.length;Rt++){let bs=Qe[Rt].image[Ee].image;Fe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Rt+1,0,0,bs.width,bs.height,ve,ue,bs.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Rt+1,me,bs.width,bs.height,0,ve,ue,bs.data)}}else{Fe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ve,ue,ee[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,ve,ue,ee[Ee]);for(let Rt=0;Rt<Qe.length;Rt++){let dn=Qe[Rt];Fe?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Rt+1,0,0,ve,ue,dn.image[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Rt+1,me,ve,ue,dn.image[Ee])}}}S(w)&&w.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),pe.__version=ne.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function be(R,w,G,le,ne,pe){let Se=r.convert(G.format,G.colorSpace),j=r.convert(G.type),Q=E(G.internalFormat,Se,j,G.normalized,G.colorSpace),_e=i.get(w),L=i.get(G);if(L.__renderTarget=w,!_e.__hasExternalTextures){let ee=Math.max(1,w.width>>pe),J=Math.max(1,w.height>>pe);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,pe,Q,ee,J,w.depth,0,Se,j,null):t.texImage2D(ne,pe,Q,ee,J,0,Se,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ye(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ne,L.__webglTexture,0,It(w)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,ne,L.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(R,w,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),w.depthBuffer){let le=w.depthTexture,ne=le&&le.isDepthTexture?le.type:null,pe=v(w.stencilBuffer,ne),Se=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ye(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It(w),pe,w.width,w.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,It(w),pe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,pe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,R)}else{let le=w.textures;for(let ne=0;ne<le.length;ne++){let pe=le[ne],Se=r.convert(pe.format,pe.colorSpace),j=r.convert(pe.type),Q=E(pe.internalFormat,Se,j,pe.normalized,pe.colorSpace);ye(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It(w),Q,w.width,w.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,It(w),Q,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Q,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(R,w,G){let le=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(w.depthTexture);ne.__renderTarget=w;let pe=le?w.depthTexture.image[0]:w.depthTexture.image;(!ne.__webglTexture||pe.width!==w.width||pe.height!==w.height)&&(pe.width=w.width,pe.height=w.height,w.depthTexture.needsUpdate=!0),le?ae(w.depthTexture,0):X(w.depthTexture,0);let Se=ne.__webglTexture,j=It(w),Q=le?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,_e=w.depthTexture.format===ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===rs)ye(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,Q,Se,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,_e,Q,Se,0);else if(w.depthTexture.format===ds)ye(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,Q,Se,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,_e,Q,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(R){let w=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let le=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),le){let ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,le.removeEventListener("dispose",ne)};le.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=le}if(R.depthTexture&&!w.__autoAllocateDepthBuffer)if(G)for(let le=0;le<6;le++)Oe(w.__webglFramebuffer[le],R,le);else R.texture.mipmaps.length>0?Oe(w.__webglFramebuffer[0],R,0):Oe(w.__webglFramebuffer,R,0);else if(G){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]===void 0)w.__webglDepthbuffer[le]=n.createRenderbuffer(),Ze(w.__webglDepthbuffer[le],R,!1);else{let ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=w.__webglDepthbuffer[le];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,pe)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ze(w.__webglDepthbuffer,R,!1);else{let ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,pe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(R,w,G){let le=i.get(R);w!==void 0&&be(le.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ht(R)}function vt(R){let w=R.texture,G=i.get(R),le=i.get(w);R.addEventListener("dispose",D),C(R);let ne=R.textures,pe=R.isWebGLCubeRenderTarget===!0,Se=ne.length>1;if(Se||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=w.version,o.memory.textures++),pe){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(w.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let Q=0;Q<w.mipmaps.length;Q++)G.__webglFramebuffer[j][Q]=n.createFramebuffer()}else G.__webglFramebuffer[j]=n.createFramebuffer()}else{if(w.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<w.mipmaps.length;j++)G.__webglFramebuffer[j]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Se)for(let j=0,Q=ne.length;j<Q;j++){let _e=i.get(ne[j]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ye(R)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<ne.length;j++){let Q=ne[j];G.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[j]);let _e=r.convert(Q.format,Q.colorSpace),L=r.convert(Q.type),ee=E(Q.internalFormat,_e,L,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),J=It(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,ee,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,G.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),tt(n.TEXTURE_CUBE_MAP,w);for(let j=0;j<6;j++)if(w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)be(G.__webglFramebuffer[j][Q],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else be(G.__webglFramebuffer[j],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);S(w)?M(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Se){for(let j=0,Q=ne.length;j<Q;j++){let _e=ne[j],L=i.get(_e),ee=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,L.__webglTexture),tt(ee,_e),be(G.__webglFramebuffer,R,_e,n.COLOR_ATTACHMENT0+j,ee,0),S(_e)&&M(ee)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,le.__webglTexture),tt(j,w),w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)be(G.__webglFramebuffer[Q],R,w,n.COLOR_ATTACHMENT0,j,Q);else be(G.__webglFramebuffer,R,w,n.COLOR_ATTACHMENT0,j,0);S(w)?M(j):w.mipmaps.length>0&&n.texParameteri(j,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&ht(R)}function U(R){let w=R.textures;for(let G=0,le=w.length;G<le;G++){let ne=w[G];if(S(ne)&&ne.mipmapsAutoUpdate===!0){let pe=b(R),Se=i.get(ne).__webglTexture;t.bindTexture(pe,Se),M(pe),t.unbindTexture()}}}let sn=[];function st(R){if(R.samples>0){if(ye(R)===!1){let w=R.textures,G=R.width,le=R.height,ne=n.COLOR_BUFFER_BIT,pe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(R),j=w.length>1;if(j)for(let _e=0;_e<w.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let _e=0;_e<w.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);let L=i.get(w[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,G,le,0,0,G,le,ne,n.NEAREST),l===!0&&(sn.length=0,sn.push(n.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&sn.push(pe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,sn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let _e=0;_e<w.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);let L=i.get(w[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,L,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let w=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function It(R){return Math.min(s.maxSamples,R.samples)}function ye(R){let w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Jt(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function ze(R,w){let G=R.colorSpace,le=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==ra&&G!==fs&&(rt.getTransfer(G)===xt?(le!==Ai||ne!==qn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",G)),w}function Xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Le,this.resetTextureUnits=Z,this.getTextureUnits=K,this.setTextureUnits=Ae,this.setTexture2D=X,this.setTexture2DArray=te,this.setTexture3D=ie,this.setTextureCube=ae,this.rebindTextures=ut,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ye,this.dispose=k}function YT(n,e){function t(i,s=fs){let r,o=rt.getTransfer(s);if(i===qn)return n.UNSIGNED_BYTE;if(i===sh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===df)return n.BYTE;if(i===ff)return n.SHORT;if(i===vo)return n.UNSIGNED_SHORT;if(i===ih)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===ln)return n.HALF_FLOAT;if(i===gf)return n.ALPHA;if(i===_f)return n.RGB;if(i===Ai)return n.RGBA;if(i===rs)return n.DEPTH_COMPONENT;if(i===ds)return n.DEPTH_STENCIL;if(i===oh)return n.RED;if(i===ah)return n.RED_INTEGER;if(i===Bs)return n.RG;if(i===lh)return n.RG_INTEGER;if(i===ch)return n.RGBA_INTEGER;if(i===Ga||i===Va||i===Wa||i===Xa)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hh||i===uh||i===dh||i===fh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ph||i===mh||i===gh||i===_h||i===vh||i===qa||i===xh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ph||i===mh)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===_h)return r.COMPRESSED_R11_EAC;if(i===vh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===qa)return r.COMPRESSED_RG11_EAC;if(i===xh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yh||i===Sh||i===Mh||i===bh||i===Eh||i===wh||i===Th||i===Ah||i===Ch||i===Rh||i===Ih||i===Ph||i===Nh||i===Lh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Eh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Th)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ah)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ch)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ih)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ph)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dh||i===Oh||i===Fh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Dh)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uh||i===Bh||i===Ya||i===kh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Uh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var $T=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new va(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Gt({vertexShader:$T,fragmentShader:JT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vf=class extends Fi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new Gf,g={},x=t.getContextAttributes(),S=null,M=null,b=[],E=[],v=new re,y=null,C=null,A=new Rn;A.viewport=new kt;let N=new Rn;N.viewport=new kt;let D=[A,N],B=new jc,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let X=b[$];return X===void 0&&(X=new ro,b[$]=X),X.getTargetRaySpace()},this.getControllerGrip=function($){let X=b[$];return X===void 0&&(X=new ro,b[$]=X),X.getGripSpace()},this.getHand=function($){let X=b[$];return X===void 0&&(X=new ro,b[$]=X),X.getHandSpace()};function W($){let X=E.indexOf($.inputSource);if(X===-1)return;let te=b[X];te!==void 0&&(te.update($.inputSource,$.frame,c||o),te.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",oe);for(let $=0;$<b.length;$++){let X=E[$];X!==null&&(E[$]=null,b[$].disconnect(X))}I=null,k=null,m.reset();for(let $ in g)delete g[$];if(e.setRenderTarget(S),f=null,d=null,u=null,s=null,M=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(v.width,v.height,!1),C!==null){let $=C.camera;$.fov=C.fov,$.zoom=C.zoom,$.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",H),s.addEventListener("inputsourceschange",oe),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,ie=null,ae=null;x.depth&&(ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=x.stencil?ds:rs,ie=x.stencil?_r:Ti);let Re={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new en(d.textureWidth,d.textureHeight,{format:Ai,type:qn,depthTexture:new cs(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let te={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new en(f.framebufferWidth,f.framebufferHeight,{format:Ai,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Le.setContext(s),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe($){for(let X=0;X<$.removed.length;X++){let te=$.removed[X],ie=E.indexOf(te);ie>=0&&(E[ie]=null,b[ie].disconnect(te))}for(let X=0;X<$.added.length;X++){let te=$.added[X],ie=E.indexOf(te);if(ie===-1){for(let Re=0;Re<b.length;Re++)if(Re>=E.length){E.push(te),ie=Re;break}else if(E[Re]===null){E[Re]=te,ie=Re;break}if(ie===-1)break}let ae=b[ie];ae&&ae.connect(te)}}function q($,X){X===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(X.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let X=$.near,te=$.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(te=m.depthFar)),B.near=N.near=A.near=X,B.far=N.far=A.far=te,(I!==B.near||k!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,k=B.far),B.layers.mask=$.layers.mask|6,A.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;let ie=$.parent,ae=B.cameras;q(B,ie);for(let Re=0;Re<ae.length;Re++)q(ae[Re],ie);B.projectionMatrix.copy(A.projectionMatrix),B.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&$.isPerspectiveCamera&&(C={camera:$,fov:$.fov,zoom:$.zoom}),Z($,B,ie)};function Z($,X,te){te===null?$.matrix.copy(X.matrixWorld):($.matrix.copy(te.matrixWorld),$.matrix.invert(),$.matrix.multiply(X.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(X.projectionMatrix),$.projectionMatrixInverse.copy(X.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Rc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function($){return g[$]};let K=null;function Ae($,X){if(h=X.getViewerPose(c||o),p=X,h!==null){let te=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ie=!1;te.length!==B.cameras.length&&(B.cameras.length=0,ie=!0);for(let He=0;He<te.length;He++){let tt=te[He],ct=null;if(f!==null)ct=f.getViewport(tt);else{let ge=u.getViewSubImage(d,tt);ct=ge.viewport,He===0&&(e.setRenderTargetTextures(M,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(M))}let se=D[He];se===void 0&&(se=new Rn,se.layers.enable(He),se.viewport=new kt,D[He]=se),se.matrix.fromArray(tt.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(tt.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ct.x,ct.y,ct.width,ct.height),He===0&&(B.matrix.copy(se.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ie===!0&&B.cameras.push(se)}let ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let He=u.getDepthInformation(te[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(ae&&ae.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let He=0;He<te.length;He++){let tt=te[He].camera;if(tt){let ct=g[tt];ct||(ct=new va,g[tt]=ct);let se=u.getCameraImage(tt);ct.sourceTexture=se}}}}for(let te=0;te<b.length;te++){let ie=E[te],ae=b[te];ie!==null&&ae!==void 0&&ae.update(ie,X,c||o)}K&&K($,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),p=null}let Le=new h_;Le.setAnimationLoop(Ae),this.setAnimationLoop=function($){K=$},this.dispose=function(){}}},KT=new bt,y_=new Ye;y_.set(-1,0,0,0,1,0,0,0,1);function ZT(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,wf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,S,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===gn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===gn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=e.get(g),S=x.envMap,M=x.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(KT.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(y_),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jT(n,e,t,i){let s={},r={};function o(x,S){let M=S.program;i.uniformBlockBinding(x,M,s[x.id])}function a(x,S){let M=s[x.id];M===void 0&&(p(x),M=l(x),s[x.id]=M,x.addEventListener("dispose",m));let b=S.program;i.updateUBOMapping(x,b);let E=e.render.frame;r[x.id]!==E&&(c(x),r[x.id]=E)}function l(x){let S=n.createBuffer(),M=x.__size,b=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,b),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(x){let S=s[x.id],M=x.uniforms,b=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let E=0,v=M.length;E<v;E++){let y=M[E];if(Array.isArray(y))for(let C=0,A=y.length;C<A;C++)h(y[C],E,C,b);else h(y,E,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,S,M,b){if(d(x,S,M,b)===!0){let E=x.__offset,v=x.value;if(Array.isArray(v)){let y=0;for(let C=0;C<v.length;C++){let A=v[C],N=_(A,!0);u(A,x.__data,y),y+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,x.__data)}}function u(x,S,M){typeof x=="number"||typeof x=="boolean"?S[M]=x:x.isMatrix3?(S[M]=x.elements[0],S[M+1]=x.elements[1],S[M+2]=x.elements[2],S[M+3]=0,S[M+4]=x.elements[3],S[M+5]=x.elements[4],S[M+6]=x.elements[5],S[M+7]=0,S[M+8]=x.elements[6],S[M+9]=x.elements[7],S[M+10]=x.elements[8],S[M+11]=0):ArrayBuffer.isView(x)?S.set(x.subarray(0,S.length-M),M):x.toArray(S,M)}function d(x,S,M,b){let E=x.value,v=S+"_"+M;if(Array.isArray(E)){b[v]===void 0&&(b[v]=[]);let y=b[v],C=!1;for(let A=0;A<E.length;A++)f(E[A],y,A)===!0&&(C=!0);return C}return f(E,b,v)}function f(x,S,M){if(S[M]===void 0)return typeof x=="number"||typeof x=="boolean"?S[M]=x:ArrayBuffer.isView(x)?S[M]=x.slice():S[M]=x.clone(),!0;{let b=S[M];if(typeof x=="number"||typeof x=="boolean"){if(b!==x)return S[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(b.equals(x)===!1)return b.copy(x),!0}}return!1}function p(x){let S=x.uniforms,M=0,b=16;for(let v=0,y=S.length;v<y;v++){let C=Array.isArray(S[v])?S[v]:[S[v]];for(let A=0,N=C.length;A<N;A++){let D=C[A],B=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(S[v])||Array.isArray(D.value),k=M;for(let H=0,oe=B.length;H<oe;H++){let q=B[H],Z=_(q,I),K=M%b,Ae=K%Z.boundary,Le=K+Ae;M+=Ae,Le!==0&&b-Le<Z.storage&&(M+=b-Le),H===0&&(k=M),M+=Z.storage}let W=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new W((M-k)/Float32Array.BYTES_PER_ELEMENT),D.__offset=k}}let E=M%b;return E>0&&(M+=b-E),x.__size=M,x.__cache={},this}function _(x,S){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=16,M.storage=48):x.isMatrix4?(M.boundary=16,M.storage=64):x.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",x),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(x){let S=x.target;S.removeEventListener("dispose",m),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let x in s)n.deleteBuffer(s[x]);s={},r={}}return{bind:o,update:a,dispose:g}}var QT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function e1(){return Gi===null&&(Gi=new pa(QT,16,16,Bs,ln),Gi.name="DFG_LUT",Gi.minFilter=Dn,Gi.magFilter=Dn,Gi.wrapS=Di,Gi.wrapT=Di,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var Wh=class{constructor(e={}){let{canvas:t=P0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=qn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let _=f,m=new Set([ch,lh,ah]),g=new Set([qn,Ti,vo,_r,sh,rh]),x=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},b=null,E=null,v=[],y=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,N=!1,D=null,B=null,I=null,k=null;this._outputColorSpace=Qt;let W=0,H=0,oe=null,q=-1,Z=null,K=new kt,Ae=new kt,Le=null,$=new de(0),X=0,te=t.width,ie=t.height,ae=1,Re=null,Ut=null,He=new kt(0,0,te,ie),tt=new kt(0,0,te,ie),ct=!1,se=new Ps,ge=new Lc,fe=!1,Ce=!1,be=new bt,Ze=new P,Oe=new kt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function vt(){return oe===null?ae:1}let U=i;function sn(T,F){return t.getContext(T,F)}let st,It,ye,Jt,ze,Xe,R,w,G,le,ne,pe,Se,j,Q,_e,L,ee,J,ve,ue,me,Fe;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),U===null){let F="webgl2";if(U=sn(F,T),U===null)throw sn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(T){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),We("WebGLRenderer: "+T.message),T}function et(){st=new uw(U),st.init(),ue=new YT(U,st),It=new ew(U,st,e,ue),ye=new XT(U,st),It.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),B=U.createFramebuffer(),I=U.createFramebuffer(),k=U.createFramebuffer(),Jt=new pw(U),ze=new PT,Xe=new qT(U,st,ye,ze,It,ue,Jt),R=new hw(A),w=new gM(U),me=new jE(U,w),G=new dw(U,w,Jt,me),le=new gw(U,G,w,me,Jt),ee=new mw(U,It,Xe),Q=new tw(ze),ne=new IT(A,R,st,It,me,Q),pe=new ZT(A,ze),Se=new LT,j=new kT(st),L=new ZE(A,R,ye,le,p,l),_e=new WT(A,le,It),Fe=new jT(U,Jt,It,ye),J=new QE(U,st,Jt),ve=new fw(U,st,Jt),Jt.programs=ne.programs,A.capabilities=It,A.extensions=st,A.properties=ze,A.renderLists=Se,A.shadowMap=_e,A.state=ye,A.info=Jt}_!==qn&&(C=new vw(_,t.width,t.height,a,s,r));let ce=new Vf(A,U);this.xr=ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(T){T!==void 0&&(ae=T,this.setSize(te,ie,!1))},this.getSize=function(T){return T.set(te,ie)},this.setSize=function(T,F,Y=!0){if(ce.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,ie=F,t.width=Math.floor(T*ae),t.height=Math.floor(F*ae),Y===!0&&(t.style.width=T+"px",t.style.height=F+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(te*ae,ie*ae).floor()},this.setDrawingBufferSize=function(T,F,Y){te=T,ie=F,ae=Y,t.width=Math.floor(T*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(_===qn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(K)},this.getViewport=function(T){return T.copy(He)},this.setViewport=function(T,F,Y,z){T.isVector4?He.set(T.x,T.y,T.z,T.w):He.set(T,F,Y,z),ye.viewport(K.copy(He).multiplyScalar(vt()).round())},this.getScissor=function(T){return T.copy(tt)},this.setScissor=function(T,F,Y,z){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,F,Y,z),ye.scissor(Ae.copy(tt).multiplyScalar(vt()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(T){ye.setScissorTest(ct=T)},this.setOpaqueSort=function(T){Re=T},this.setTransparentSort=function(T){Ut=T},this.getClearColor=function(T){return T.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,Y=!0){let z=0;if(T){let V=!1;if(oe!==null){let Me=oe.texture.format;V=m.has(Me)}if(V){let Me=oe.texture.type,Ie=g.has(Me),xe=L.getClearColor(),Te=L.getClearAlpha(),De=xe.r,Ke=xe.g,dt=xe.b;Ie?(x[0]=De,x[1]=Ke,x[2]=dt,x[3]=Te,U.clearBufferuiv(U.COLOR,0,x)):(S[0]=De,S[1]=Ke,S[2]=dt,S[3]=Te,U.clearBufferiv(U.COLOR,0,S))}else z|=U.COLOR_BUFFER_BIT}F&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),L.dispose(),Se.dispose(),j.dispose(),Xe.dispose(),ze.dispose(),R.dispose(),le.dispose(),G.dispose(),me.dispose(),Fe.dispose(),ne.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",cg),ce.removeEventListener("sessionend",hg),js.stop()};function Be(T){T.preventDefault(),Mf("WebGLRenderer: Context Lost."),N=!0}function Qe(){Mf("WebGLRenderer: Context Restored."),N=!1;let T=Jt.autoReset,F=_e.enabled,Y=_e.autoUpdate,z=_e.needsUpdate,V=_e.type;et(),Jt.autoReset=T,_e.enabled=F,_e.autoUpdate=Y,_e.needsUpdate=z,_e.type=V}function Ee(T){We("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Rt(T){let F=T.target;F.removeEventListener("dispose",Rt),dn(F)}function dn(T){bs(T),ze.remove(T)}function bs(T){let F=ze.get(T).programs;F!==void 0&&(F.forEach(function(Y){ne.releaseProgram(Y)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,Y,z,V,Me){F===null&&(F=ht);let Ie=V.isMesh&&V.matrixWorld.determinantAffine()<0,xe=eS(T,F,Y,z,V);ye.setMaterial(z,Ie);let Te=Y.index,De=1;if(z.wireframe===!0){if(Te=G.getWireframeAttribute(Y),Te===void 0)return;De=2}let Ke=Y.drawRange,dt=Y.attributes.position,Pe=Ke.start*De,ft=(Ke.start+Ke.count)*De;Me!==null&&(Pe=Math.max(Pe,Me.start*De),ft=Math.min(ft,(Me.start+Me.count)*De)),Te!==null?(Pe=Math.max(Pe,0),ft=Math.min(ft,Te.count)):dt!=null&&(Pe=Math.max(Pe,0),ft=Math.min(ft,dt.count));let rn=ft-Pe;if(rn<0||rn===1/0)return;me.setup(V,z,xe,Y,Te);let Ot,Pt=J;if(Te!==null&&(Ot=w.get(Te),Pt=ve,Pt.setIndex(Ot)),V.isMesh)z.wireframe===!0?(ye.setLineWidth(z.wireframeLinewidth*vt()),Pt.setMode(U.LINES)):Pt.setMode(U.TRIANGLES);else if(V.isLine){let wn=z.linewidth;wn===void 0&&(wn=1),ye.setLineWidth(wn*vt()),V.isLineSegments?Pt.setMode(U.LINES):V.isLineLoop?Pt.setMode(U.LINE_LOOP):Pt.setMode(U.LINE_STRIP)}else V.isPoints?Pt.setMode(U.POINTS):V.isSprite&&Pt.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let wn=V._multiDrawStarts,Ne=V._multiDrawCounts,Nn=V._multiDrawCount,Mt=Te?w.get(Te).bytesPerElement:1,Qs=ze.get(z).currentProgram.getUniforms();for(let Tn=0;Tn<Nn;Tn++)Qs.setValue(U,"_gl_DrawID",Tn),Pt.render(wn[Tn]/Mt,Ne[Tn])}else if(V.isInstancedMesh)Pt.renderInstances(Pe,rn,V.count);else if(Y.isInstancedBufferGeometry){let wn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ne=Math.min(Y.instanceCount,wn);Pt.renderInstances(Pe,rn,Ne)}else Pt.render(Pe,rn)};function lg(T,F,Y,z){D!==null&&T.isNodeMaterial&&D.setObject(z,T),fe===!0&&Q.setState(T,Y,!1),T.transparent===!0&&T.side===nn&&T.forceSinglePass===!1?(T.side=gn,T.needsUpdate=!0,$o(T,F,z),T.side=Us,T.needsUpdate=!0,$o(T,F,z),T.side=nn):$o(T,F,z)}this.compile=function(T,F,Y=null){Y===null&&(Y=T),D!==null&&D.renderStart(T,F,Y),E=j.get(Y),E.init(F),y.push(E),Y.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),T!==Y&&T.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),Ce=this.localClippingEnabled,fe=Q.init(this.clippingPlanes,Ce),fe===!0&&Q.setGlobalState(this.clippingPlanes,F),D!==null&&_e.render(E.state.shadowsArray,Y,F);let z=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Me=V.material;if(Me)if(Array.isArray(Me))for(let Ie=0;Ie<Me.length;Ie++){let xe=Me[Ie];lg(xe,Y,F,V),z.add(xe)}else lg(Me,Y,F,V),z.add(Me)}),E=y.pop(),D!==null&&D.renderEnd(),z},this.compileAsync=function(T,F,Y=null){let z=this.compile(T,F,Y);return new Promise(V=>{function Me(){if(z.forEach(function(Ie){let Te=ze.get(Ie).currentProgram;(Te===void 0||Te.isReady())&&z.delete(Ie)}),z.size===0){V(T);return}setTimeout(Me,10)}st.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let vd=null;function jy(T){vd&&vd(T)}function cg(){js.stop()}function hg(){js.start()}let js=new h_;js.setAnimationLoop(jy),typeof self<"u"&&js.setContext(self),this.setAnimationLoop=function(T){vd=T,ce.setAnimationLoop(T),T===null?js.stop():js.start()},ce.addEventListener("sessionstart",cg),ce.addEventListener("sessionend",hg),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(T,F);let Y=ce.enabled===!0&&ce.isPresenting===!0,z=C!==null&&(oe===null||Y)&&C.begin(A,oe);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,F,oe),E=j.get(T,y.length),E.init(F),E.state.textureUnits=Xe.getTextureUnits(),y.push(E),be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?ge.setFromArrayCamera(F):se.setFromProjectionMatrix(be,ci,F.reversedDepth),Ce=this.localClippingEnabled,fe=Q.init(this.clippingPlanes,Ce),b=Se.get(T,v.length),b.init(),v.push(b),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let Ie=A.xr.getDepthSensingMesh();Ie!==null&&xd(Ie,F,-1/0,A.sortObjects)}xd(T,F,0,A.sortObjects),b.finish(),D!==null&&D.updateLights(E.state.lightsArray),A.sortObjects===!0&&b.sort(Re,Ut),ut=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ut&&L.addToRenderList(b,T),this.info.autoReset===!0&&this.info.reset(),fe===!0&&Q.beginShadows();let V=E.state.shadowsArray;if(_e.render(V,T,F),fe===!0&&Q.endShadows(),(z&&C.hasRenderPass())===!1){let Ie=b.opaque,xe=b.transmissive;if(E.setupLights(),F.isArrayCamera){let Te=F.cameras;if(xe.length>0)for(let De=0,Ke=Te.length;De<Ke;De++){let dt=Te[De];dg(Ie,xe,T,dt)}ut&&L.render(T);for(let De=0,Ke=Te.length;De<Ke;De++){let dt=Te[De];ug(b,T,dt,dt.viewport)}}else xe.length>0&&dg(Ie,xe,T,F),ut&&L.render(T),ug(b,T,F)}oe!==null&&H===0&&(Xe.updateMultisampleRenderTarget(oe),Xe.updateRenderTargetMipmap(oe)),z&&C.end(A),T.isScene===!0&&T.onAfterRender(A,T,F),me.resetDefaultState(),q=-1,Z=null,y.pop(),y.length>0?(E=y[y.length-1],Xe.setTextureUnits(E.state.textureUnits),fe===!0&&Q.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,v.pop(),v.length>0?b=v[v.length-1]:b=null,D!==null&&D.renderEnd()};function xd(T,F,Y,z){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){let Ie=F.isArrayCamera?ge:se;if(!T.frustumCulled||T.intersectsFrustum(Ie)){z&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(be);let xe=le.update(T),Te=T.material;Te.visible&&b.push(T,xe,Te,Y,Oe.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){let Ie=F.isArrayCamera?ge:se;if(!T.frustumCulled||T.intersectsFrustum(Ie)){let xe=le.update(T),Te=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Oe.copy(xe.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(be)),Array.isArray(Te)){let De=xe.groups;for(let Ke=0,dt=De.length;Ke<dt;Ke++){let Pe=De[Ke],ft=Te[Pe.materialIndex];ft&&ft.visible&&b.push(T,xe,ft,Y,Oe.z,Pe,F)}}else Te.visible&&b.push(T,xe,Te,Y,Oe.z,null,F)}}}let Me=T.children;for(let Ie=0,xe=Me.length;Ie<xe;Ie++)xd(Me[Ie],F,Y,z)}function ug(T,F,Y,z){let{opaque:V,transmissive:Me,transparent:Ie}=T;E.setupLightsView(Y),fe===!0&&Q.setGlobalState(A.clippingPlanes,Y),z&&ye.viewport(K.copy(z)),V.length>0&&Xl(V,F,Y),Me.length>0&&Xl(Me,F,Y),Ie.length>0&&Xl(Ie,F,Y),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function dg(T,F,Y,z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Pe=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new en(1,1,{generateMipmaps:!0,type:Pe?ln:qn,minFilter:us,samples:Math.max(4,It.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let Me=E.state.transmissionRenderTarget[z.id],Ie=z.viewport||K;Me.setSize(Ie.z*A.transmissionResolutionScale,Ie.w*A.transmissionResolutionScale);let xe=A.getRenderTarget(),Te=A.getActiveCubeFace(),De=A.getActiveMipmapLevel();A.setRenderTarget(Me),A.getClearColor($),X=A.getClearAlpha(),X<1&&A.setClearColor(16777215,.5),A.clear(),ut&&L.render(Y);let Ke=A.toneMapping;A.toneMapping=Hi;let dt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),fe===!0&&Q.setGlobalState(A.clippingPlanes,z),Xl(T,Y,z),Xe.updateMultisampleRenderTarget(Me),Xe.updateRenderTargetMipmap(Me),st.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ft=0,rn=F.length;ft<rn;ft++){let Ot=F[ft],{object:Pt,geometry:wn,material:Ne,group:Nn}=Ot;if(Ne.side===nn&&Pt.layers.test(z.layers)){let Mt=Ne.side;Ne.side=gn,Ne.needsUpdate=!0,fg(Pt,Y,z,wn,Ne,Nn),Ne.side=Mt,Ne.needsUpdate=!0,Pe=!0}}Pe===!0&&(Xe.updateMultisampleRenderTarget(Me),Xe.updateRenderTargetMipmap(Me))}A.setRenderTarget(xe,Te,De),A.setClearColor($,X),dt!==void 0&&(z.viewport=dt),A.toneMapping=Ke}function Xl(T,F,Y){let z=F.isScene===!0?F.overrideMaterial:null;for(let V=0,Me=T.length;V<Me;V++){let Ie=T[V],{object:xe,geometry:Te,group:De}=Ie,Ke=Ie.material;Ke.allowOverride===!0&&z!==null&&(Ke=z),xe.layers.test(Y.layers)&&fg(xe,F,Y,Te,Ke,De)}}function fg(T,F,Y,z,V,Me){D!==null&&V.isNodeMaterial&&D.setObject(T,V),T.onBeforeRender(A,F,Y,z,V,Me),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(A,F,Y,z,T,Me),V.transparent===!0&&V.side===nn&&V.forceSinglePass===!1?(V.side=gn,V.needsUpdate=!0,A.renderBufferDirect(Y,F,z,V,T,Me),V.side=Us,V.needsUpdate=!0,A.renderBufferDirect(Y,F,z,V,T,Me),V.side=nn):A.renderBufferDirect(Y,F,z,V,T,Me),T.onAfterRender(A,F,Y,z,V,Me)}function pg(T){let F=0;for(let Y of T)Y.texture!==null&&F++;return F}function $o(T,F,Y){F.isScene!==!0&&(F=ht);let z=ze.get(T),V=E.state.lights,Me=E.state.shadowsArray,Ie=V.state.version,xe=ne.getParameters(T,V.state,Me,F,Y,E.state.lightProbeGridArray),Te=ne.getProgramCacheKey(xe),De=z.programs;z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;let Ke=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;z.envMap=R.get(T.envMap||z.environment,Ke),z.envMapRotation=z.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",Rt),De=new Map,z.programs=De,z.programVariants=new Map);let dt=De.get(Te);if(dt!==void 0){if(z.currentProgram===dt&&z.lightsStateVersion===Ie)return gg(T,xe),dt}else xe.uniforms=ne.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,Y,xe),T.onBeforeCompile(xe,A),dt=ne.acquireProgram(xe,Te),De.set(Te,dt),z.uniforms=xe.uniforms;let Pe=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=Q.uniform),gg(T,xe),z.needsLights=nS(T),z.lightsStateVersion=Ie,z.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.sunLights.value=V.state.sun,Pe.sunLightShadows.value=V.state.sunShadow,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.sunShadowMatrix.value=V.state.sunShadowMatrix,Pe.sunShadowCascade.value=V.state.sunShadowCascade,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),z.numLightProbeGrids=pg(E.state.lightProbeGridArray),z.currentProgram=dt,z.uniformsList=null,dt}function Qy(T,F,Y,z,V){let Me=ze.get(T),Ie=Me.currentProgram.id+","+z+","+V,xe=Me.programVariants.get(Ie);return xe===void 0?(xe=$o(T,F,Y),Me.programVariants.set(Ie,xe)):(Me.currentProgram=xe,Me.uniformsList=null,Me.outputColorSpace=z,Me.toneMapping=V),xe}function mg(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=yo.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function gg(T,F){let Y=ze.get(T);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function eS(T,F,Y,z,V){F.isScene!==!0&&(F=ht),Xe.resetTextureUnits();let Me=F.fog,Ie=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,xe=oe===null?A.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:rt.workingColorSpace,Te=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,De=R.get(z.envMap||Ie,Te),Ke=z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,dt=!!Y.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!Y.morphAttributes.position,ft=!!Y.morphAttributes.normal,rn=!!Y.morphAttributes.color,Ot=Hi;z.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ot=A.toneMapping);let Pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,wn=Pt!==void 0?Pt.length:0,Ne=ze.get(z),Nn=E.state.lights;if(fe===!0&&(Ce===!0||T!==Z)){let Vt=T===Z&&z.id===q;Q.setState(z,T,Vt)}let Mt=!1,Qs=!1;z.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==Nn.state.version||V.isBatchedMesh&&Ne.batching===!1||!V.isBatchedMesh&&Ne.batching===!0||V.isBatchedMesh&&Ne.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ne.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ne.instancing===!1||!V.isInstancedMesh&&Ne.instancing===!0||V.isSkinnedMesh&&Ne.skinning===!1||!V.isSkinnedMesh&&Ne.skinning===!0||V.isInstancedMesh&&Ne.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ne.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ne.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ne.instancingMorph===!1&&V.morphTexture!==null||Ne.envMap!==De||z.fog===!0&&Ne.fog!==Me||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Q.numPlanes||Ne.numIntersection!==Q.numIntersection)||Ne.vertexAlphas!==Ke||Ne.vertexTangents!==dt||Ne.morphTargets!==Pe||Ne.morphNormals!==ft||Ne.morphColors!==rn||Ne.morphTargetsCount!==wn||Ne.numLightProbeGrids!==pg(E.state.lightProbeGridArray)?Mt=!0:(Ne.outputColorSpace!==xe||Ne.toneMapping!==Ot)&&(Qs=!0):(Mt=!0,Ne.__version=z.version);let Tn=Ne.currentProgram;(Mt===!0||Qs===!0)&&(Tn=Qs===!0?Qy(z,F,V,xe,Ot):$o(z,F,V),D&&z.isNodeMaterial&&D.onUpdateProgram(z,Tn,Ne));let ql=!1,Es=!1,er=!1,gt=Tn.getUniforms(),Mn=Ne.uniforms;if(ye.useProgram(Tn.program)&&(ql=!0,Es=!0,er=!0),z.id!==q&&(q=z.id,Es=!0),ql||Z!==T){ye.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),gt.setValue(U,"projectionMatrix",T.projectionMatrix),gt.setValue(U,"viewMatrix",T.matrixWorldInverse);let fn=gt.map.cameraPosition;fn!==void 0&&fn.setValue(U,Ze.setFromMatrixPosition(T.matrixWorld)),It.logarithmicDepthBuffer&&gt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&gt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),Z!==T&&(Z=T,Es=!0,er=!0)}if(Ne.needsLights&&(Nn.state.sunShadowMap.length>0&&gt.setValue(U,"sunShadowMap",Nn.state.sunShadowMap,Xe),Nn.state.directionalShadowMap.length>0&&gt.setValue(U,"directionalShadowMap",Nn.state.directionalShadowMap,Xe),Nn.state.spotShadowMap.length>0&&gt.setValue(U,"spotShadowMap",Nn.state.spotShadowMap,Xe),Nn.state.pointShadowMap.length>0&&gt.setValue(U,"pointShadowMap",Nn.state.pointShadowMap,Xe)),V.isSkinnedMesh){gt.setOptional(U,V,"bindMatrix"),gt.setOptional(U,V,"bindMatrixInverse");let Vt=V.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),gt.setValue(U,"boneTexture",Vt.boneTexture,Xe))}V.isBatchedMesh&&(gt.setOptional(U,V,"batchingTexture"),gt.setValue(U,"batchingTexture",V._matricesTexture,Xe),gt.setOptional(U,V,"batchingIdTexture"),gt.setValue(U,"batchingIdTexture",V._indirectTexture,Xe),gt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&gt.setValue(U,"batchingColorTexture",V._colorsTexture,Xe));let xi=Y.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&ee.update(V,Y,Tn),(Es||Ne.receiveShadow!==V.receiveShadow)&&(Ne.receiveShadow=V.receiveShadow,gt.setValue(U,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(Mn.envMapIntensity.value=F.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=e1()),Es){if(gt.setValue(U,"toneMappingExposure",A.toneMappingExposure),Ne.needsLights&&tS(Mn,er),Me&&z.fog===!0&&pe.refreshFogUniforms(Mn,Me),pe.refreshMaterialUniforms(Mn,z,ae,ie,E.state.transmissionRenderTarget[T.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){let Vt=M,fn=0;for(let ji of E.state.lightProbeGridArray)ji.texture!==null&&(Vt.textures[fn]=ji.texture,Vt.min[fn]=ji.boundingBox.min,Vt.max[fn]=ji.boundingBox.max,Vt.resolution[fn]=ji.resolution,fn++);for(let ji in Vt)Vt[ji].length=fn;Mn.probesSH.value=Vt.textures,Mn.probesMin.value=Vt.min,Mn.probesMax.value=Vt.max,Mn.probesResolution.value=Vt.resolution}yo.upload(U,mg(Ne),Mn,Xe)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(yo.upload(U,mg(Ne),Mn,Xe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&gt.setValue(U,"center",V.center),gt.setValue(U,"modelViewMatrix",V.modelViewMatrix),gt.setValue(U,"normalMatrix",V.normalMatrix),gt.setValue(U,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let Vt=z.uniformsGroups;for(let fn=0,ji=Vt.length;fn<ji;fn++){let vg=Vt[fn];Fe.update(vg,Tn),Fe.bind(vg,Tn)}}return Tn}function tS(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function nS(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(T,F,Y){let z=ze.get(T);z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ze.get(T.texture).__webglTexture=F,ze.get(T.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:Y,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let Y=ze.get(T);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,Y=0){oe=T,W=F,H=Y;let z=null,V=!1,Me=!1;if(T){let xe=ze.get(T);if(xe.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(U.FRAMEBUFFER,xe.__webglFramebuffer),K.copy(T.viewport),Ae.copy(T.scissor),Le=T.scissorTest,ye.viewport(K),ye.scissor(Ae),ye.setScissorTest(Le),q=-1;return}else if(xe.__webglFramebuffer===void 0)Xe.setupRenderTarget(T);else if(xe.__hasExternalTextures)Xe.rebindTextures(T,ze.get(T.texture).__webglTexture,ze.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ke=T.depthTexture;if(xe.__boundDepthTexture!==Ke){if(Ke!==null&&ze.has(Ke)&&(T.width!==Ke.image.width||T.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(T)}}let Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(Me=!0);let De=ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[F])?z=De[F][Y]:z=De[F],V=!0):T.samples>0&&Xe.useMultisampledRTT(T)===!1?z=ze.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?z=De[Y]:z=De,K.copy(T.viewport),Ae.copy(T.scissor),Le=T.scissorTest}else K.copy(He).multiplyScalar(ae).floor(),Ae.copy(tt).multiplyScalar(ae).floor(),Le=ct;if(Y!==0&&(z=B),ye.bindFramebuffer(U.FRAMEBUFFER,z)&&ye.drawBuffers(T,z),ye.viewport(K),ye.scissor(Ae),ye.setScissorTest(Le),V){let xe=ze.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,Y)}else if(Me){let xe=F;for(let Te=0;Te<T.textures.length;Te++){let De=ze.get(T.textures[Te]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Te,De.__webglTexture,Y,xe)}}else if(T!==null&&Y!==0){let xe=ze.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xe.__webglTexture,Y)}q=-1};function _g(T){let F=ze.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=It.textureFormatReadable(T.format),F.__typeReadable=It.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,Y,z,V,Me,Ie,xe=0){if(!(T&&T.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Te=Te[Ie],Array.isArray(Te)&&(Te=Te[0])),Te){ye.bindFramebuffer(U.FRAMEBUFFER,Te);try{let De=T.textures[xe],Ke=De.format,dt=De.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe);let Pe=_g(De);if(Pe.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-z&&Y>=0&&Y<=T.height-V&&U.readPixels(F,Y,z,V,ue.convert(Ke),ue.convert(dt),Me)}finally{let De=oe!==null?ze.get(oe).__webglFramebuffer:null;ye.bindFramebuffer(U.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,F,Y,z,V,Me,Ie,xe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Te=Te[Ie],Array.isArray(Te)&&(Te=Te[0])),Te)if(F>=0&&F<=T.width-z&&Y>=0&&Y<=T.height-V){ye.bindFramebuffer(U.FRAMEBUFFER,Te);let De=T.textures[xe],Ke=De.format,dt=De.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe);let Pe=_g(De);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ft),U.bufferData(U.PIXEL_PACK_BUFFER,Me.byteLength,U.STREAM_READ),U.readPixels(F,Y,z,V,ue.convert(Ke),ue.convert(dt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let rn=oe!==null?ze.get(oe).__webglFramebuffer:null;ye.bindFramebuffer(U.FRAMEBUFFER,rn);let Ot=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await L0(U,Ot,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ft),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Me),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ft),U.deleteSync(Ot),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,Y=0){let z=Math.pow(2,-Y),V=Math.floor(T.image.width*z),Me=Math.floor(T.image.height*z),Ie=F!==null?F.x:0,xe=F!==null?F.y:0;Xe.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Ie,xe,V,Me),ye.unbindTexture()},this.copyTextureToTexture=function(T,F,Y=null,z=null,V=0,Me=0){let Ie,xe,Te,De,Ke,dt,Pe,ft,rn,Ot=T.isCompressedTexture?T.mipmaps[Me]:T.image;if(Y!==null)Ie=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,De=Y.min.x,Ke=Y.min.y,dt=Y.isBox3?Y.min.z:0;else{let gt=Math.pow(2,-V);Ie=Math.floor(Ot.width*gt),xe=Math.floor(Ot.height*gt),T.isDataArrayTexture?Te=Ot.depth:T.isData3DTexture?Te=Math.floor(Ot.depth*gt):Te=1,De=0,Ke=0,dt=0}z!==null?(Pe=z.x,ft=z.y,rn=z.z):(Pe=0,ft=0,rn=0);let Pt=ue.convert(F.format),wn=ue.convert(F.type),Ne;F.isData3DTexture?(Xe.setTexture3D(F,0),Ne=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Xe.setTexture2DArray(F,0),Ne=U.TEXTURE_2D_ARRAY):(Xe.setTexture2D(F,0),Ne=U.TEXTURE_2D),ye.activeTexture(U.TEXTURE0),ye.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),ye.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ye.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let Nn=ye.getParameter(U.UNPACK_ROW_LENGTH),Mt=ye.getParameter(U.UNPACK_IMAGE_HEIGHT),Qs=ye.getParameter(U.UNPACK_SKIP_PIXELS),Tn=ye.getParameter(U.UNPACK_SKIP_ROWS),ql=ye.getParameter(U.UNPACK_SKIP_IMAGES);ye.pixelStorei(U.UNPACK_ROW_LENGTH,Ot.width),ye.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ot.height),ye.pixelStorei(U.UNPACK_SKIP_PIXELS,De),ye.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),ye.pixelStorei(U.UNPACK_SKIP_IMAGES,dt);let Es=T.isDataArrayTexture||T.isData3DTexture,er=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let gt=ze.get(T),Mn=ze.get(F),xi=ze.get(gt.__renderTarget),Vt=ze.get(Mn.__renderTarget);ye.bindFramebuffer(U.READ_FRAMEBUFFER,xi.__webglFramebuffer),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let fn=0;fn<Te;fn++)Es&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ze.get(T).__webglTexture,V,dt+fn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ze.get(F).__webglTexture,Me,rn+fn)),U.blitFramebuffer(De,Ke,De+Ie,Ke+xe,Pe,ft,Pe+Ie,ft+xe,U.DEPTH_BUFFER_BIT,U.NEAREST);ye.bindFramebuffer(U.READ_FRAMEBUFFER,null),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||ze.has(T)){let gt=ze.get(T),Mn=ze.get(F);ye.bindFramebuffer(U.READ_FRAMEBUFFER,I),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,k);for(let xi=0;xi<Te;xi++)Es?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,gt.__webglTexture,V,dt+xi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gt.__webglTexture,V),er?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mn.__webglTexture,Me,rn+xi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mn.__webglTexture,Me),V!==0?U.blitFramebuffer(De,Ke,De+Ie,Ke+xe,Pe,ft,Pe+Ie,ft+xe,U.COLOR_BUFFER_BIT,U.NEAREST):er?U.copyTexSubImage3D(Ne,Me,Pe,ft,rn+xi,De,Ke,Ie,xe):U.copyTexSubImage2D(Ne,Me,Pe,ft,De,Ke,Ie,xe);ye.bindFramebuffer(U.READ_FRAMEBUFFER,null),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else er?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Ne,Me,Pe,ft,rn,Ie,xe,Te,Pt,wn,Ot.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ne,Me,Pe,ft,rn,Ie,xe,Te,Pt,Ot.data):U.texSubImage3D(Ne,Me,Pe,ft,rn,Ie,xe,Te,Pt,wn,Ot):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Me,Pe,ft,Ie,xe,Pt,wn,Ot.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Me,Pe,ft,Ot.width,Ot.height,Pt,Ot.data):U.texSubImage2D(U.TEXTURE_2D,Me,Pe,ft,Ie,xe,Pt,wn,Ot);ye.pixelStorei(U.UNPACK_ROW_LENGTH,Nn),ye.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt),ye.pixelStorei(U.UNPACK_SKIP_PIXELS,Qs),ye.pixelStorei(U.UNPACK_SKIP_ROWS,Tn),ye.pixelStorei(U.UNPACK_SKIP_IMAGES,ql),Me===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&U.generateMipmap(Ne),ye.unbindTexture()},this.initRenderTarget=function(T){ze.get(T).__webglFramebuffer===void 0&&Xe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Xe.setTextureCube(T,0):T.isData3DTexture?Xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Xe.setTexture2DArray(T,0):Xe.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){W=0,H=0,oe=null,ye.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var Mo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var si=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},t1=new dr(-1,1,1,-1,0,1),Wf=class extends Ft{constructor(){super(),this.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qe([0,2,0,0,2,0],2))}},n1=new Wf,ks=class{constructor(e){this._mesh=new Et(n1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,t1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var bo=class extends si{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ps.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ks(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ja=class extends si{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Yh=class extends si{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var $h=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new re);this._width=i.width,this._height=i.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ln}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bo(Mo),this.copyPass.material.blending=hs,this.timer=new Da}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ja!==void 0&&(o instanceof ja?i=!0:o instanceof Yh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Jh=class extends si{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new de}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var S_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Eo=class n extends si{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new en(r,o,{type:ln,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new en(r,o,{type:ln,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new en(r,o,{type:ln,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=S_;this.highPassUniforms=ps.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ps.clone(Mo.uniforms),this.blendMaterial=new Gt({uniforms:this.copyUniforms,vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader,premultipliedAlpha:!0,blending:ii,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new In,this._fsQuad=new ks(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Gt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Eo.BlurDirectionX=new re(1,0);Eo.BlurDirectionY=new re(0,1);var Qa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Kh=class extends si{constructor(){super(),this.isOutputPass=!0,this.uniforms=ps.clone(Qa.uniforms),this.material=new ho({name:Qa.name,uniforms:this.uniforms,vertexShader:Qa.vertexShader,fragmentShader:Qa.fragmentShader}),this._fsQuad=new ks(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ua?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===za?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ka&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};je.lights_fragment_end+=`
#ifndef NO_RIM
{
  float rimF = pow(1.0 - saturate(dot(geometryNormal, geometryViewDir)), 3.0);
  totalEmissiveRadiance += (diffuseColor.rgb * 0.55 + vec3(0.06, 0.04, 0.08)) * rimF * 0.42;
}
#endif
`;function M_(){return new bo({uniforms:{tDiffuse:{value:null},vignette:{value:.32},sat:{value:1.1},aspect:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform sampler2D tDiffuse; uniform float vignette, sat, aspect; varying vec2 vUv;
      void main(){
        vec4 t = texture2D(tDiffuse, vUv);
        vec3 c = t.rgb;
        float l = dot(c, vec3(0.299, 0.587, 0.114));
        c = mix(vec3(l), c, sat);
        c = c * vec3(1.02, 1.0, 0.98) + vec3(0.012, 0.006, 0.02) * (1.0 - l);   // warm highs, plum-tinted shadows
        vec2 d = (vUv - 0.5) * vec2(aspect, 1.0) / max(aspect, 1.0);
        float v = smoothstep(0.85, 0.25, length(d) * 1.25);
        c *= mix(1.0 - vignette, 1.0, v);
        gl_FragColor = vec4(c, t.a);
      }`})}function i1(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,240,250,0.8)"),t.addColorStop(1,"rgba(255,220,240,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let i=new ei(n);return i.colorSpace=Qt,i}function b_(n,e=90){let i=new Float32Array(e*3),s=new Float32Array(e);for(let c=0;c<e;c++)i[c*3]=(Math.random()-.5)*22,i[c*3+1]=Math.random()*7-1,i[c*3+2]=(Math.random()-.5)*22,s[c]=Math.random()*100;let r=new Ft;r.setAttribute("position",new Ln(i,3));let o=new Ns({size:.16,map:i1(),color:new de(1.6,1.35,1.5),transparent:!0,opacity:.8,depthWrite:!1,blending:ii,fog:!1}),a=new ar(r,o);a.frustumCulled=!1,n.add(a);let l=new P;return{points:a,update(c,h,u){l.lerp(c,1-Math.exp(-u*2));let d=r.attributes.position.array;for(let f=0;f<e;f++){let p=s[f],_=d[f*3]+Math.sin(h*.4+p)*.25*u,m=d[f*3+1]+(.12+Math.sin(p)*.06)*u,g=d[f*3+2]+Math.cos(h*.33+p*1.7)*.25*u,x=_+a.position.x-l.x,S=g+a.position.z-l.z;x>22/2?_-=22:x<-22/2&&(_+=22),S>22/2?g-=22:S<-22/2&&(g+=22),m>l.y+6?m-=8:m<l.y-2.5&&(m+=8),d[f*3]=_,d[f*3+1]=m,d[f*3+2]=g}r.attributes.position.needsUpdate=!0,o.opacity=.55+.25*Math.sin(h*.7)}}}var Xf=[],el={value:0};function Zh(n){Xf.push(n)}function E_(){Xf.length=0}function w_(n,e,t){el.value=n;for(let i of Xf)i(n,e,t)}function qf(n=1){let e=new ki;return e.moveTo(0,-.35*n),e.bezierCurveTo(-.15*n,-.22*n,-.5*n,-.02*n,-.5*n,.2*n),e.bezierCurveTo(-.5*n,.42*n,-.25*n,.52*n,0,.32*n),e.bezierCurveTo(.25*n,.52*n,.5*n,.42*n,.5*n,.2*n),e.bezierCurveTo(.5*n,-.02*n,.15*n,-.22*n,0,-.35*n),e}function Qh(n=.5,e=.22){let t=new ki;for(let i=0;i<10;i++){let s=Math.PI/2+i/10*Math.PI*2,r=i%2?e:n;i===0?t.moveTo(Math.cos(s)*r,Math.sin(s)*r):t.lineTo(Math.cos(s)*r,Math.sin(s)*r)}return t.closePath(),t}var s1=new Ca(qf(.6),12),T_=new Ht(1,10,8),A_=new hr(.86,1,48);A_.rotateX(-Math.PI/2);var r1=new Aa(.07,0),jh=class{constructor(e,t){this.scene=e,this.camera=t,this.items=[],this._initFireflies()}_add(e,t,i){this.scene.add(e),this.items.push({obj:e,life:t,age:0,update:i})}hearts(e,t=16736162){for(let i=0;i<4;i++){let s=new Et(s1,new In({color:new de(t).multiplyScalar(2.2),transparent:!0,side:nn,depthWrite:!1})),r=(Math.random()-.5)*.7,o=(Math.random()-.5)*.7,a=i*.14;s.position.copy(e).add(new P(r,1.1,o)),s.scale.setScalar(.001);let l=s.position.clone();this._add(s,1.8+a,(c,h)=>{let u=Math.max(0,c.age-a),d=Math.min(1,u*5)*(.55+i*.12);s.scale.setScalar(Math.max(.001,d)),s.position.set(l.x+Math.sin(u*6+i)*.15,l.y+u*1.2,l.z),s.quaternion.copy(this.camera.quaternion),s.material.opacity=Math.min(1,(c.life-c.age)*2)})}}shine(e){e.glow.intensity=40;let t=new Et(T_,new In({color:new de(1.6,1.15,.4),transparent:!0,opacity:.5,depthWrite:!1,blending:ii}));t.position.copy(e.root.position).add(new P(0,.55,0)),this._add(t,.7,i=>{let s=i.age/i.life;t.scale.setScalar(.5+s*3.2),t.material.opacity=.45*(1-s)}),this.sparks(e.root.position,16765024,14,1.2)}tide(e){e.glow.intensity=25;for(let t=0;t<3;t++){let i=new Et(A_,new In({color:new de(.6,.75,2),transparent:!0,depthWrite:!1,side:nn}));i.position.copy(e.root.position).add(new P(0,.06,0));let s=t*.18;i.scale.setScalar(.001),this._add(i,1.1+s,r=>{let o=Math.max(0,r.age-s),a=Math.min(1,o/1.1);i.scale.setScalar(.3+a*3.5),i.material.opacity=o>0?.9*(1-a):0})}}dust(e,t=6){for(let i=0;i<t;i++){let s=new Et(T_,new Xt({color:16777215,transparent:!0,opacity:.8,roughness:1,depthWrite:!1})),r=i/t*Math.PI*2+Math.random(),o=new P(Math.cos(r)*1.6,.4+Math.random()*.4,Math.sin(r)*1.6);s.position.copy(e).add(new P(0,.08,0)),this._add(s,.45,(a,l)=>{s.position.addScaledVector(o,l),o.multiplyScalar(.9);let c=a.age/a.life;s.scale.setScalar(.08+c*.14),s.material.opacity=.8*(1-c)})}}sparks(e,t=16769658,i=18,s=2.5){for(let r=0;r<i;r++){let o=new Et(r1,new In({color:new de(t).multiplyScalar(2.5),transparent:!0,depthWrite:!1})),a=new P(Math.random()-.5,Math.random()*.9+.2,Math.random()-.5).normalize().multiplyScalar(s*(.6+Math.random()*.6));o.position.copy(e).add(new P(0,.6,0)),this._add(o,.9,(l,c)=>{o.position.addScaledVector(a,c),a.y-=4*c,o.rotation.x+=c*8,o.rotation.y+=c*6,o.material.opacity=1-l.age/l.life})}}_initFireflies(){let t=new Float32Array(270);this.ffSeed=[];for(let r=0;r<90;r++){let o=Math.random()*Math.PI*2,a=2+Math.random()*24;this.ffSeed.push({x:Math.cos(o)*a+6,y:.6+Math.random()*6,z:Math.sin(o)*a-2,p:Math.random()*10})}let i=new Ft;i.setAttribute("position",new Ln(t,3));let s=(()=>{let r=document.createElement("canvas");r.width=r.height=64;let o=r.getContext("2d"),a=o.createRadialGradient(32,32,0,32,32,32);return a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.3,"rgba(255,240,200,0.8)"),a.addColorStop(1,"rgba(255,220,180,0)"),o.fillStyle=a,o.fillRect(0,0,64,64),new ei(r)})();this.fireflies=new ar(i,new Ns({size:.28,map:s,color:new de(1.8,1.5,1),transparent:!0,depthWrite:!1,blending:ii})),this.fireflies.frustumCulled=!1,this.scene.add(this.fireflies)}update(e,t){for(let s=this.items.length-1;s>=0;s--){let r=this.items[s];if(r.age+=e,r.age>=r.life){this.scene.remove(r.obj),r.obj.material?.dispose(),this.items.splice(s,1);continue}r.update(r,e)}let i=this.fireflies.geometry.attributes.position;for(let s=0;s<this.ffSeed.length;s++){let r=this.ffSeed[s];i.setXYZ(s,r.x+Math.sin(t*.3+r.p)*1.2,r.y+Math.sin(t*.7+r.p*2)*.5,r.z+Math.cos(t*.25+r.p)*1.2)}i.needsUpdate=!0}};var Ci=(n,e,t)=>n<e?e:n>t?t:n,o1=(n,e,t)=>n+(e-n)*t,_n=(n,e,t,i)=>o1(n,e,1-Math.exp(-t*i)),gs=n=>n*n*n*(n*(n*6-15)+10);function tl(n,e){let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}var eu=(n,e,t,i)=>n+tl(n,e)*(1-Math.exp(-t*i)),Yn=n=>Math.round(n*1e3)/1e3;function C_(n){let e=(n||"").normalize("NFKC").trim().toLowerCase().replace(/\s+/g," "),t=new TextEncoder().encode("eclipse:"+e),i=2166136261,s=2654435769;for(let r of t)i=Math.imul(i^r,16777619)>>>0,s=Math.imul(s^r,2246822519)>>>0,s=(s<<13|s>>>19)>>>0;return"r"+i.toString(36)+s.toString(36)}var _t={get(n,e=null){try{let t=localStorage.getItem("eclipse."+n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem("eclipse."+n,JSON.stringify(e))}catch{}}},xr=new URLSearchParams(location.search),Yf=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,R_=/iP(hone|ad|od)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,$n={sun:"\u2600\uFE0F",moon:"\u{1F319}"},bn={sun:"Sun",moon:"Moon"},Kt=n=>n==="sun"?"moon":"sun";var nl=new P;function fi(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;nl.copy(e),nl[i]=0,nl.normalize();let c=.5*o/(o+a),h=1-nl.angleTo(n)/l;return Math.sign(nl[t])===1?h*c:a/(o+a)+c+c*(1-h)}var tu=class n extends Fn{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,h=new P(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,_=new P,m=.5/o;for(let g=0,x=0;g<u.length;g+=3,x+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*r,u[g+1]=h.y*Math.sign(l.y)+c.y*r,u[g+2]=h.z*Math.sign(l.z)+c.z*r,d[g+0]=c.x,d[g+1]=c.y,d[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),f[x+0]=fi(_,c,"z","y",r,i),f[x+1]=1-fi(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),f[x+0]=1-fi(_,c,"z","y",r,i),f[x+1]=1-fi(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),f[x+0]=1-fi(_,c,"x","z",r,e),f[x+1]=fi(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),f[x+0]=1-fi(_,c,"x","z",r,e),f[x+1]=1-fi(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),f[x+0]=1-fi(_,c,"x","y",r,e),f[x+1]=1-fi(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),f[x+0]=fi(_,c,"x","y",r,e),f[x+1]=1-fi(_,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var a1=`
  float h31(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float vnoise(vec3 x){
    vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h31(i), h31(i + vec3(1,0,0)), f.x), mix(h31(i + vec3(0,1,0)), h31(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h31(i + vec3(0,0,1)), h31(i + vec3(1,0,1)), f.x), mix(h31(i + vec3(0,1,1)), h31(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
  float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vnoise(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
`;function l1(n,e){let t=new Et(new Ht(450,40,20),new Gt({side:gn,depthWrite:!1,fog:!1,uniforms:{top:{value:new de(e.top)},mid:{value:new de(e.mid)},low:{value:new de(e.low)},neb1:{value:new de(e.neb1)},neb2:{value:new de(e.neb2)},starAmt:{value:e.stars},nebAmt:{value:e.nebula},time:el},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 top, mid, low, neb1, neb2; uniform float starAmt, nebAmt, time; varying vec3 vP;
      ${a1}
      void main(){
        vec3 d = normalize(vP); float h = d.y;
        vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.02, 0.6, h)) : mix(mid, low, smoothstep(0.0, -0.35, h));
        float up = smoothstep(0.02, 0.45, h);
        // nebula: two soft coloured veils
        float n1 = fbm(d * 2.6 + vec3(0.0, 0.0, time * 0.004));
        float n2 = fbm(d * 4.1 + vec3(5.2, 1.3, -time * 0.003));
        float band = smoothstep(0.45, 0.85, n1) * up;
        c = mix(c, c + neb1 * 0.55, band * nebAmt);
        c = mix(c, c + neb2 * 0.45, smoothstep(0.55, 0.9, n2) * up * nebAmt);
        // stars: one jittered star per grid cell, three layers of size
        float s = 0.0;
        for (int L = 0; L < 3; L++) {
          float sc = 55.0 + float(L) * 45.0;
          vec3 p = d * sc; vec3 id = floor(p);
          float r = h31(id + float(L) * 13.0);
          if (r > 0.55) {
            vec3 o = vec3(h31(id + 1.7), h31(id + 4.3), h31(id + 9.1));
            float dist = length(fract(p) - o);
            float tw = 0.65 + 0.35 * sin(time * (1.5 + r * 3.0) + r * 40.0);
            float size = 0.07 + 0.1 * (r - 0.55) / 0.45 - float(L) * 0.015;
            s += smoothstep(size, 0.0, dist) * tw * (0.6 + (r - 0.55) * 2.0);
          }
        }
        c += vec3(1.0, 0.96, 0.9) * s * starAmt * up * 2.2;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}));return t.renderOrder=-10,t.frustumCulled=!1,n.add(t),t}function $f(n){let e=n*9301+49297;return()=>(e=e*16807%2147483647)/2147483647}function c1(n){let e=$f(n),t=new Float32Array(512);for(let s=0;s<512;s++)t[s]=e();let i=(s,r)=>{let o=Math.floor(s),a=Math.floor(r),l=s-o,c=r-a,h=(f,p)=>t[(f&15)*31+(p&15)*17&511],u=l*l*(3-2*l),d=c*c*(3-2*c);return(h(o,a)*(1-u)+h(o+1,a)*u)*(1-d)+(h(o,a+1)*(1-u)+h(o+1,a+1)*u)*d};return(s,r)=>i(s,r)*.55+i(s*2.1+3,r*2.1)*.3+i(s*4.3,r*4.3+5)*.15}function I_(n,e,t){let r=document.createElement("canvas");r.width=256,r.height=128;let o=r.getContext("2d"),a=o.createImageData(256,128),l=a.data,c=c1(t),h=$f(t+3),u=e.map(_=>new de(_)),d=new de,f=[];if(n==="rock")for(let _=0;_<26;_++)f.push([h()*256,14+h()*100,3+h()*11]);for(let _=0;_<128;_++)for(let m=0;m<256;m++){let g=m/256*16,x=_/128*8,S;if(n==="bands"){let b=c(g*.5,x*.9)*1.8;S=.5+.5*Math.sin(_/128*19+b*1.7+c(g*2,x*3)*.6);let E=S*(u.length-1),v=Math.min(u.length-2,Math.floor(E));d.copy(u[v]).lerp(u[v+1],E-v)}else if(n==="rock"){S=c(g,x),d.copy(u[0]).lerp(u[1],S);for(let[b,E,v]of f){let y=Math.min(Math.abs(m-b),256-Math.abs(m-b)),C=_-E,A=Math.hypot(y,C)/v;A<1?d.lerp(u[2],.55*(1-A*A)):A<1.25&&d.lerp(u[3]||u[1],.35*(1-(A-1)/.25))}}else{S=c(g*.8,x*.8),S>.56?d.copy(u[1]).lerp(u[2],Math.min(1,(S-.56)*4)):d.copy(u[0]).lerp(new de(u[0]).multiplyScalar(.8),S);let b=c(g*1.4+9,x*2.2);b>.55&&d.lerp(new de(16777215),Math.min(.85,(b-.55)*3.5))}let M=(_*256+m)*4;l[M]=d.r*255,l[M+1]=d.g*255,l[M+2]=d.b*255,l[M+3]=255}o.putImageData(a,0,0);let p=new ei(r);return p.colorSpace=Qt,p.wrapS=to,p}var P_=(n,e,t)=>new Gt({fog:!1,uniforms:{map:{value:n},lightDir:{value:e},glow:{value:new de(t)}},vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV;
    void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); vec4 wp = modelMatrix * vec4(position, 1.0);
      vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`uniform sampler2D map; uniform vec3 lightDir; uniform vec3 glow; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
    void main(){
      vec3 base = texture2D(map, vUv).rgb;
      float l = dot(normalize(vN), normalize(lightDir));
      float lit = smoothstep(-0.25, 0.6, l);
      vec3 c = base * (0.42 + 0.8 * lit);
      float rim = pow(1.0 - max(dot(normalize(vN), vV), 0.0), 2.5);
      c += glow * rim * (0.35 + 0.65 * lit);
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
    }`}),h1=(n,e)=>new Gt({fog:!1,transparent:!0,depthWrite:!1,blending:ii,side:gn,uniforms:{color:{value:new de(n)},k:{value:e}},vertexShader:`varying vec3 vN; varying vec3 vV;
    void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 wp = modelMatrix * vec4(position, 1.0);
      vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`uniform vec3 color; uniform float k; varying vec3 vN; varying vec3 vV;
    void main(){ float f = 1.0 - abs(dot(normalize(vN), vV)); float a = pow(smoothstep(0.0, 1.0, 1.0 - f), 3.0) * k;
      gl_FragColor = vec4(color * a, a); }`});function u1(n,e,t,i=.85){let s=new hr(n,e,128,1),r=new Et(s,new Gt({fog:!1,transparent:!0,depthWrite:!1,side:nn,uniforms:{a:{value:new de(t[0])},b:{value:new de(t[1])},inner:{value:n},outer:{value:e},op:{value:i}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 a, b; uniform float inner, outer, op; varying vec3 vP;
      void main(){ float r = (length(vP.xy) - inner) / (outer - inner);
        float bands = 0.5 + 0.5 * sin(r * 46.0) * sin(r * 17.0 + 1.3);
        float gap = smoothstep(0.52, 0.55, r) * (1.0 - smoothstep(0.6, 0.63, r));
        float edge = smoothstep(0.0, 0.08, r) * (1.0 - smoothstep(0.9, 1.0, r));
        vec3 c = mix(a, b, bands);
        gl_FragColor = vec4(c, op * edge * (0.55 + 0.45 * bands) * (1.0 - gap * 0.85));
        #include <colorspace_fragment>
      }`}));return r.rotation.x=-Math.PI/2,r}function N_(n,e,t,i,s){return new P(n+Math.sin(t)*Math.cos(i)*s,Math.sin(i)*s,e-Math.cos(t)*Math.cos(i)*s)}var d1={giant:{kind:"bands",cols:[16767416,16230560,16771535,15181513,16765094],glow:16763360,r:34,ring:[16770764,14264025]},lilac:{kind:"rock",cols:[13087728,10850016,9073353,14931711],glow:14272767,r:15},ocean:{kind:"ocean",cols:[7259110,10476691,15261862],glow:12577023,r:19},ember:{kind:"bands",cols:[16748403,14704730,16757642,14047850],glow:16756896,r:9},mint:{kind:"rock",cols:[12576980,10475200,8372134,14745586],glow:14221296,r:6},rose:{kind:"bands",cols:[16761560,16095936,16769260],glow:16766696,r:11,ring:[16777215,16761560]}};function f1(n,e,t,i,s,r=.4,o=1){let a={...d1[e]};a.r*=o;let l=new pt;l.position.copy(t),n.add(l);let c=new Et(new Ht(a.r,48,32),P_(I_(a.kind,a.cols,s),i,a.glow));c.rotation.z=r*.4,l.add(c);let h=new Et(new Ht(a.r*1.22,32,20),h1(a.glow,.55));l.add(h);let u=null;if(a.ring){u=u1(a.r*1.35,a.r*2.3,a.ring);let d=new pt;d.rotation.set(r,0,r*.6),d.add(u),l.add(d)}for(let d of l.children)d.frustumCulled=!1,d.renderOrder=-8;return{g:l,body:c,ring:u,r:a.r}}function p1(n,e,t){let i=new ui(1,1);i.translate(-.5,0,0);let s=new Gt({fog:!1,transparent:!0,depthWrite:!1,blending:ii,side:nn,uniforms:{a:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float a; varying vec2 vUv; void main(){ float k = pow(vUv.x, 2.5) * (1.0 - abs(vUv.y - 0.5) * 2.0); gl_FragColor = vec4(vec3(1.0, 0.95, 0.85) * k * a * 2.0, k * a); }"}),r=new Et(i,s);r.frustumCulled=!1,r.renderOrder=-7,r.visible=!1,n.add(r);let o=3+Math.random()*5,a=0,l=.9,c=new P,h=new P,u=new P,d=new P,f=new P,p=new bt;Zh((_,m,g)=>{if(!r.visible&&_>o){g.getWorldDirection(u);let x=Math.atan2(u.x,-u.z)+(Math.random()-.5)*1.6;c.copy(N_(g.position.x,g.position.z,x,.35+Math.random()*.45,300));let S=Math.random()<.5?-1:1;h.set(Math.cos(x)*S,-.35-Math.random()*.25,Math.sin(x)*S).normalize(),a=_,l=.7+Math.random()*.5,r.visible=!0}if(r.visible){let x=(_-a)/l;if(x>=1){r.visible=!1,o=_+4+Math.random()*9;return}r.position.copy(c).addScaledVector(h,x*140),f.copy(g.position).sub(r.position).normalize(),d.crossVectors(f,h).normalize(),f.crossVectors(h,d),r.quaternion.setFromRotationMatrix(p.makeBasis(h,d,f)),r.scale.set(34*Math.sin(x*Math.PI),.9,1),s.uniforms.a.value=Math.sin(x*Math.PI)}})}function m1(n,e){let t=new zi(1,2),i=190,s=new ls(t,new Xt({color:16777215,emissive:e.cloud,emissiveIntensity:.4,roughness:1}),i),r=new tn,o=$f(7);for(let l=0;l<i;l++){let c=o()*Math.PI*2,h=12+Math.pow(o(),.7)*170;r.position.set(Math.cos(c)*h+e.cx,-13-o()*5,Math.sin(c)*h);let u=4+o()*8;r.scale.set(u*1.5,u*.5,u),r.rotation.y=o()*3,r.updateMatrix(),s.setMatrixAt(l,r.matrix)}s.receiveShadow=!1,n.add(s);let a=s.position.clone();Zh(l=>{s.position.x=a.x+Math.sin(l*.03)*3,s.position.z=a.z+Math.cos(l*.025)*2})}function L_(n,e={}){let t={top:"#7d8fe6",mid:"#ffc9dc",low:"#ffe7cf",neb1:"#b38cff",neb2:"#ff8fc8",stars:.35,nebula:.35,cloud:16767464,cx:8,cz:0,lightDir:[.6,.5,.4],planets:[["giant",-.55,.15,290,.42],["lilac",.9,.2,240,.2],["ocean",2.5,.1,270,.3],["ember",-2.1,.26,230,.1],["mint",1.6,.36,220,.3],["rose",3.7,.18,250,-.5]],...e};l1(n,t);let i=new P(...t.lightDir).normalize(),s=[];(t.planets||[]).forEach(([o,a,l,c,h,u],d)=>s.push(f1(n,o,N_(t.cx,t.cz,a,l,c),i,11+d*7,h,u)));let r=[];for(let o of s.slice(0,2)){let a=new Et(new Ht(o.r*.14,20,14),P_(I_("rock",[15920383,14209008,12432093],99+r.length),i,16777215));a.frustumCulled=!1,a.renderOrder=-8,o.g.add(a),r.push({mm:a,R:o.r*(o.ring?2.8:1.9),ph:r.length*2.3,sp:.05+r.length*.03})}return Zh(o=>{for(let a of s)a.body.rotation.y=o*.012*(30/a.r),a.ring&&(a.ring.rotation.z=o*.01);for(let a of r){let l=o*a.sp+a.ph;a.mm.position.set(Math.cos(l)*a.R,Math.sin(l)*a.R*.25,Math.sin(l)*a.R)}}),t.stars>.2&&p1(n,t.cx,t.cz),m1(n,t),{planets:s}}var Jf=new Map;function $e(n,e={}){let t=n+JSON.stringify(e);return Jf.has(t)||Jf.set(t,new Xt({color:n,roughness:.85,...e})),Jf.get(t)}function Ue(n,e,t,i=0,s=0,r=0,{cast:o=!0,receive:a=!0}={}){let l=new Et(e,t);return l.position.set(i,s,r),l.castShadow=o,l.receiveShadow=a,n.add(l),l}var un=(n,e,t,i=.12)=>new tu(n,e,t,3,Math.min(i,n/2-.01,e/2-.01,t/2-.01));function wo(n,e,t,i,s,r,o,a,l){let c=new pt;c.position.set(e,s,t),n.add(c);let h=[[i*.985,-.62],[i*1.005,-.36],[i*.99,-.13],[i*.955,-.02],[i*.9,0],[.001,0]].map(([M,b])=>new re(M,b)),u=Ue(c,new Ls(h,64),_1(o),0,0,0,{cast:!1});u.receiveShadow=!0;let d=9,f=[];for(let M=0;M<=d;M++){let b=M/d,E=-r+b*(r-.5),v=.001+i*.98*Math.pow(b,.6);f.push(new re(v,E))}let p=new Ls(f,26),_=p.attributes.position,m=[],g=new de(a),x=new de(l),S=new de;for(let M=0;M<_.count;M++){let b=_.getX(M),E=_.getY(M),v=_.getZ(M),y=Math.atan2(v,b);if(E<-.55){let C=1+Math.sin(y*5+E*1.7)*.07+Math.sin(y*13-E*2.3)*.05;_.setX(M,b*C),_.setZ(M,v*C),_.setY(M,E+Math.sin(y*7)*.15)}S.copy(x).lerp(g,Math.min(1,Math.max(0,1+E/r))),m.push(S.r,S.g,S.b)}return p.setAttribute("color",new qe(m,3)),p.computeVertexNormals(),Ue(c,p,new Xt({vertexColors:!0,flatShading:!0,roughness:.95}),0,0,0),c}function yr(n,e,t,i,s=1,r=0){let o=new pt;o.position.set(e,t,i),o.scale.setScalar(s),n.add(o),Ue(o,new zt(.17,.26,1.5,10),$e(11039055),0,.75,0);let a=[8177003,9622638,7059562,10804348],l=new zi(1,1);return[[0,1.95,0,.95],[.45,2.55,.1,.68],[-.4,2.45,-.15,.62],[.05,2.95,-.05,.5]].forEach(([h,u,d,f],p)=>{let _=Ue(o,l,$e(a[(p+r)%a.length],{flatShading:!0}),h,u,d);_.scale.setScalar(f),_.rotation.set(p,p*2,0)}),o}function Wi(n,e,t,i,s){let r=new pt;r.position.set(e,0,t),r.rotation.y=i,n.add(r),Ue(r,new zt(.07,.08,1.2,8),$e(10119755),0,.6,0),Ue(r,un(1.9,.82,.12,.08),$e(15251850),0,1.25,0);let o=document.createElement("canvas");o.width=512,o.height=220;let a=o.getContext("2d");a.fillStyle="#f6dcbc",a.fillRect(0,0,512,220),a.fillStyle="#4a3352",a.textAlign="center",a.textBaseline="middle";let l=s.length>1?58:76;a.font=`800 ${l}px ui-rounded, "SF Pro Rounded", system-ui, sans-serif`,s.forEach((u,d)=>a.fillText(u,256,110+(d-(s.length-1)/2)*(l*1.15),490));let c=new ei(o);c.colorSpace=Qt,c.anisotropy=4;let h=Ue(r,new ui(1.76,.7),new Xt({map:c,roughness:.9}),0,1.25,.065,{cast:!1});return h.receiveShadow=!0,r}function To(n,e,t,i,s,r,o=1){let a=new pt;a.position.set(e,t,i),n.add(a);let l=$e(16777215,{roughness:1,emissive:16771570,emissiveIntensity:.18});Ue(a,un(s,.42,r,.2),l,0,-.21,0);let c=new Ht(1,18,12),h=o,u=()=>(h=h*16807%2147483647)/2147483647,d=Math.round((s+r)*2.2);for(let f=0;f<d;f++){let p=f/d*Math.PI*2,_=Math.cos(p)*(s/2-.15),m=Math.sin(p)*(r/2-.15);Ue(a,c,l,_,-.22+u()*.08,m).scale.set(.32+u()*.15,.25+u()*.12,.32+u()*.15)}for(let f=0;f<3;f++)Ue(a,c,l,(u()-.5)*s*.7,-.45,(u()-.5)*r*.7).scale.set(s*.35,.3,r*.35);return a}function nu(n,e={}){let t={far:!0,cx:8,...e},i=L_(n,t);if(!t.far)return i;let s=[[-38,4,-40,3],[52,-2,-55,4],[-60,7,10,3.5],[45,9,40,2.6],[-20,-5,60,4.5],[85,3,-10,3]];for(let[r,o,a,l]of s)wo(n,r,a,l,o,l*1.4,10212730,14263682,10123944),yr(n,r+l*.2,o,a-l*.1,l*.35)}var D_=new wi(Qh(.34,.15),{depth:.1,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});D_.center();var g1=new Xt({color:16765773,emissive:16757504,emissiveIntensity:1.3,roughness:.3,metalness:.1});function iu(n,e,t,i,s,r=0){let o=Ue(n,D_,g1,t,i,s,{receive:!1});return o.userData.noHide=!0,{id:e,mesh:o,pos:new P(t,i,s),collected:!1,phase:r*2}}function su(n,e){for(let t of n)t.mesh.visible=!t.collected,t.mesh.rotation.y=e*1.8+t.phase,t.mesh.position.y=t.pos.y+Math.sin(e*2.2+t.phase)*.12}function ru(n,{sunColor:e=16773599,sunI:t=2.6,hemiSky:i=14673663,hemiGround:s=16765624,hemiI:r=1.4,pos:o=[18,26,14],target:a=[9,0,-2],extent:l=26}={}){let c=new Ia(i,s,r);n.add(c);let h=new La(e,t);h.position.set(...o),h.target.position.set(...a),h.castShadow=!0,h.shadow.mapSize.set(2048,2048);let u=h.shadow.camera;return u.left=-l,u.right=l,u.top=l*.8,u.bottom=-l*.8,u.near=1,u.far=90,h.shadow.bias=-4e-4,h.shadow.normalBias=.03,h.shadow.radius=3,n.add(h,h.target),{hemi:c,sun:h}}var Kf=new Map;function _1(n){if(Kf.has(n))return Kf.get(n);let e=new Xt({color:n,roughness:.95});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vGW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vGW;
      float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(gh(i), gh(i + vec2(1, 0)), f.x), mix(gh(i + vec2(0, 1)), gh(i + vec2(1, 1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
      { float n = gn(vGW.xz * 0.35) * 0.6 + gn(vGW.xz * 1.3) * 0.3 + gn(vGW.xz * 5.0) * 0.1;
        diffuseColor.rgb *= mix(0.84, 1.13, n);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.12, 1.08, 0.78), smoothstep(0.62, 0.8, gn(vGW.xz * 0.18 + 3.0)) * 0.6); }`)},Kf.set(n,e),e}function v1(){let n=[],e=[],t=[];for(let o=0;o<3;o++){let a=o*2.1+.3,l=Math.cos(a),c=Math.sin(a),h=.06+o*.025,u=.34*(.8+o*.15),d=n.length/3,f=l*.04,p=c*.04,_=[[0,.05],[.5,.05*.7],[1,0]];for(let[m,g]of _){let x=h*m*m,S=f+l*x,M=p+c*x,b=u*m;g>0?(n.push(S-c*g,b,M+l*g,S+c*g,b,M-l*g),e.push(m,m,m,m,m,m)):(n.push(S,b,M),e.push(1,1,1))}t.push(d,d+1,d+2,d+1,d+3,d+2,d+2,d+3,d+4)}let r=new Ft;return r.setAttribute("position",new qe(n,3)),r.setAttribute("normal",new qe(n.map((o,a)=>a%3===1?1:0),3)),r.setAttribute("shade",new qe(e.filter((o,a)=>a%3===0),1)),r.setIndex(t),r}function x1(n){let e=new Xt({color:n,roughness:.9,side:nn});return e.onBeforeCompile=t=>{t.uniforms.time=el,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform float time; attribute float shade; varying float vShade;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vShade = shade;
        #ifdef USE_INSTANCING
          vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        #else
          vec3 ip = vec3(0.0);
        #endif
        vec3 wp0 = (modelMatrix * vec4(ip, 1.0)).xyz;
        float k = position.y / 0.34; k *= k;
        float w = sin(time * 1.9 + wp0.x * 0.55 + wp0.z * 0.35) + 0.5 * sin(time * 3.1 + wp0.x * 1.7 - wp0.z * 1.1);
        transformed.x += w * 0.05 * k;
        transformed.z += cos(time * 1.4 + wp0.z * 0.6 - wp0.x * 0.3) * 0.035 * k;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vShade;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= mix(0.55, 1.18, vShade);`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
normal = normalize(vNormal);`)},e}function ou(n,e,t,{flowerCols:i=[16752324,16777215,16769658,13022207,16747146],tuftColor:s=8178020}={}){let r=(m,g)=>t.every(([x,S,M])=>(m-x)**2+(g-S)**2>M*M),o=0,a=0;for(let m of e)o+=m.flowers??100,a+=m.grass??Math.round(m.r*m.r*9);let l=new zi(.09,1);l.scale(1,.75,1);let c=new ls(l,new Xt({roughness:.6,emissive:16777215,emissiveIntensity:.06}),o),h=new ls(new zt(.012,.016,.2,4).translate(0,.1,0),new Xt({color:6270549,roughness:.9}),o),u=new ls(v1(),x1(s),a),d=new tn,f=new de,p=0,_=0;for(let{x:m,z:g,r:x,y:S=0,flowers:M=100,grass:b,tint:E}of e){let v=b??Math.round(x*x*9),y=0,C=0;for(;y<M+v&&C++<(M+v)*10;){let A=Math.random()*Math.PI*2,N=Math.sqrt(Math.random())*(x-.45),D=m+Math.cos(A)*N,B=g+Math.sin(A)*N;if(r(D,B)){if(y<M){let I=.8+Math.random()*.6,k=.12+Math.random()*.12;d.position.set(D,S,B),d.rotation.set(0,0,0),d.scale.set(1,k/.2,1),d.updateMatrix(),h.setMatrixAt(p,d.matrix),d.position.set(D,S+k,B),d.scale.setScalar(I),d.rotation.set(0,Math.random()*3,0),d.updateMatrix(),c.setMatrixAt(p,d.matrix),c.setColorAt(p,f.setHex(i[p%i.length])),p++}else{d.position.set(D,S,B),d.rotation.set(0,Math.random()*Math.PI*2,0);let I=.7+Math.random()*.7;d.scale.set(I,I*(.8+Math.random()*.5),I),d.updateMatrix(),u.setMatrixAt(_,d.matrix),f.setHex(E??s).offsetHSL((Math.random()-.5)*.04,0,(Math.random()-.5)*.08),u.setColorAt(_++,f)}y++}}}c.count=p,h.count=p,u.count=_;for(let m of[c,h,u])m.receiveShadow=!0,m.castShadow=!1,m.userData.noHide=!0;n.add(c,h,u)}function O_(n,e){let t=[],i=[],s=[],r=new pt;n.add(r),e.fog=new or(new de("#f9cfe0"),55,190),nu(n);let{sun:o}=ru(n);wo(r,0,0,9,0,7,9425262,14722684,9399452),t.push({type:"cyl",x:0,z:0,r:8.95,top:0,bottom:-1.2,safe:!0});let a=$e(16770286),l=$e(16744112,{emissive:16732051,emissiveIntensity:.35});for(let X of[-1.7,1.7])Ue(r,new zt(.2,.24,2.3,14),a,X,1.15,3),Ue(r,un(.62,.2,.62,.08),a,X,.1,3),t.push({type:"cyl",x:X,z:3,r:.26,top:2.4,bottom:0});let c=Ue(r,new Xn(1.7,.17,12,40,Math.PI),a,0,2.3,3);c.rotation.z=0;let h=Ue(r,new wi(qf(1.1),{depth:.22,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:3}),l,0,4,2.89);s.push(X=>{h.rotation.y=Math.sin(X*1.2)*.25,h.position.y=4+Math.sin(X*2)*.06});let u=5.2;[16169160,16766362,12575656,11127029,14140151].forEach((X,te)=>{let ie=Ue(r,un(3.2,1.04,2.7,.14),$e(X),0,.52+te*1.04,-5.25);ie.rotation.y=(te%2?1:-1)*.035}),Ue(r,un(3.3,.18,2.8,.08),$e(9425262),0,u,-5.25);let f={type:"box",x0:-1.6,x1:1.6,z0:-6.6,z1:-3.9,top:u+.08,bottom:0,safe:!0};t.push(f),Wi(r,-2.7,-2.5,.15,["Too high?","Stack up, or Sun throws Moon!"]);let p=[];[[1.3,-6.1],[2.6,-5.2],[3.9,-4.3]].forEach(([X,te],ie)=>{let ae=Ue(r,un(1,X,.86,.1),$e([16757703,16765836,10473717][ie]),1.1,X/2,te),Re={type:"box",x0:0,x1:0,z0:te-.43,z1:te+.43,top:X,bottom:0,safe:!0,disabled:!0};t.push(Re),p.push({m:ae,col:Re,out:0})});let _=!1;s.push((X,te)=>{for(let ie of p){ie.out=Math.min(1,ie.out+(_?te*1.2:0));let ae=1.1+gs(ie.out)*1;ie.m.position.x=ae,ie.col.x0=ae-.5,ie.col.x1=ae+.5,ie.col.disabled=ie.out<.98}});let m=3.3;[[0,11133138],[1,16239013],[2,13087733]].forEach(([X,te])=>Ue(r,un(2.2,1.1,2.2,.12),$e(te),3,.55+X*1.1,.8)),Ue(r,un(2.28,.14,2.28,.06),$e(9425262),3,m,.8),t.push({type:"box",x0:1.9,x1:4.1,z0:-.3,z1:1.9,top:m+.07,bottom:0,safe:!0}),Wi(r,4.3,2.6,-.3,["Jump, then","grab the edge!"]);let g=5.4;for(let[X,te]of[[-7,-6],[-4,-3]]){for(let ie=0;ie<5;ie++)Ue(r,un(1,g/5,1.8,.1),$e([10473717,13087733,16757703,16765836,12182688][(ie+(X<-5?0:2))%5]),(X+te)/2,(ie+.5)*(g/5),-4.5);Ue(r,un(1.06,.14,1.86,.06),$e(9425262),(X+te)/2,g,-4.5),t.push({type:"box",x0:X,x1:te,z0:-5.4,z1:-3.6,top:g+.07,bottom:0,safe:!0,wallJump:!0});for(let ie=0;ie<4;ie++){let ae=X<-5?te+.01:X-.01,Re=Ue(r,new hi(.16,.3,3),$e(16777215,{emissive:16777215,emissiveIntensity:.25}),ae,1+ie*1.15,-4.5,{cast:!1});Re.rotation.z=0,Re.scale.set(1,1,.25),Re.rotation.y=Math.PI/2}}Wi(r,-5,-2.9,.1,["Wall jump!","Jump from wall to wall"]);let x=[16757703,16765836,12182688,10473717,13087733];for(let X=0;X<5;X++){let te=.4*(X+1),ie=4.1-X*.9;Ue(r,un(1.6,te,.9,.1),$e(x[X]),5.8,te/2,ie),t.push({type:"box",x0:5,x1:6.6,z0:ie-.45,z1:ie+.45,top:te,bottom:0,safe:!0})}Ue(r,un(2,2,1.7,.14),$e(16239013),5.8,1,-.78),Ue(r,un(2.06,.14,1.76,.06),$e(9425262),5.8,2,-.78),t.push({type:"box",x0:4.8,x1:6.8,z0:-1.63,z1:.07,top:2.07,bottom:0,safe:!0}),Ue(r,new zt(.04,.04,1.6,8),$e(16777215),6.55,2.8,-1.45);let S=Ue(r,new hi(.22,.6,3),$e(16744112),6.55,3.3,-1.15);S.rotation.x=Math.PI/2,s.push(X=>{S.rotation.z=Math.sin(X*4)*.15});let M=new pt;M.position.set(-4.5,0,1.5),r.add(M);for(let X=0;X<8;X++){let te=X/8*Math.PI*2;Ue(M,new ao(.16,0),$e(12170185,{flatShading:!0}),Math.cos(te)*.5,.08,Math.sin(te)*.5).rotation.set(X,X*1.3,0)}for(let X=0;X<3;X++){let te=Ue(M,new zt(.06,.07,.7,8),$e(9067068),0,.12,0);te.rotation.order="YXZ",te.rotation.set(Math.PI/2-.2,X/3*Math.PI,0)}let b=Ue(M,new hi(.22,.6,10),new In({color:new de(2.4,1,.25)}),0,.45,0,{cast:!1}),E=Ue(M,new hi(.12,.38,10),new In({color:new de(2.6,2.1,.7)}),0,.38,0,{cast:!1}),v=new ur(16753226,6,7,2);v.position.set(0,.8,0),M.add(v),s.push(X=>{let te=1+Math.sin(X*13)*.08+Math.sin(X*7.3)*.06;b.scale.set(1,te,1),E.scale.set(1,2-te,1),b.rotation.y=X*2,v.intensity=5+te*2}),t.push({type:"cyl",x:-4.5,z:1.5,r:.55,top:.25,bottom:0});for(let[X,te,ie]of[[-4.5,3,0],[-3,1.2,Math.PI/2.4]])Ue(r,new zt(.22,.22,1.3,12),$e(11565909),X,.22,te).rotation.set(0,ie,Math.PI/2),t.push({type:"box",x0:X-(ie?.3:.65),x1:X+(ie?.3:.65),z0:te-(ie?.65:.25),z1:te+(ie?.65:.25),top:.42,bottom:0});let y=new pt;y.position.set(-6.3,0,-1.2),y.rotation.y=.9,r.add(y);let C=Ue(y,new hi(1.3,1.9,4,1),$e(16751754,{flatShading:!0}),0,.95,0);C.rotation.y=Math.PI/4;let A=Ue(y,new hi(.5,1.05,3,1),$e(7031418,{flatShading:!0}),0,.5,.6,{cast:!1});A.scale.z=.2,t.push({type:"cyl",x:-6.3,z:-1.2,r:1,top:1.8,bottom:0,noStep:!0}),[[-7,3.9,1,0],[-2.5,-7.9,1.05,1],[3.4,-7.4,.95,2],[-7.9,-.3,.8,2],[8,2.4,.75,3]].forEach(([X,te,ie,ae])=>{yr(r,X,0,te,ie,ae),t.push({type:"cyl",x:X,z:te,r:.3*ie,top:3.2*ie,bottom:0,noStep:!0})});let N=$e(12958937,{flatShading:!0});[[2.6,-2.2,.45],[-1.8,-8,.4],[7.4,4.4,.5],[-7.2,5.2,.35],[1.2,8.4,.3]].forEach(([X,te,ie],ae)=>{let Re=Ue(r,new ao(1,0),N,X,ie*.55,te);Re.scale.set(ie*1.2,ie,ie),Re.rotation.set(ae,ae*2,0),t.push({type:"cyl",x:X,z:te,r:ie*1.05,top:ie*1.2,bottom:0})});let D=-3.5,B=10.2,I=18.4,k=To(r,B,.05,D,3,3,7),W={type:"box",id:"raft",x0:0,x1:0,z0:D-1.5,z1:D+1.5,top:.05,bottom:-.4,dx:0,dy:0,dz:0};t.push(W);let H=X=>{let ie=(X%9e3+9e3)%9e3/9e3*9;return ie<1.5?B:ie<4.5?B+(I-B)*gs((ie-1.5)/3):ie<6?I:I+(B-I)*gs((ie-6)/3)},oe={raft:{pos:(X,te=new P)=>te.set(H(X),.05,D)}};Wi(r,6.6,-5.6,.35,["Cloud raft \u2192"]),wo(r,24,-3.5,4.2,0,4.5,10147959,15052422,10123430),t.push({type:"cyl",x:24,z:-3.5,r:4.15,top:0,bottom:-1.2,safe:!0});let q=new pt;q.position.set(24.5,0,-2.5),r.add(q),Ue(q,new zt(.36,.48,.8,16),$e(16773596),0,.4,0);let Z=new pt;Z.position.y=.75,q.add(Z);let K=Ue(Z,new Ht(1.3,32,14,0,Math.PI*2,0,Math.PI/2),$e(16740221,{roughness:.6}),0,0,0);K.scale.y=.46;for(let X=0;X<7;X++){let te=X/7*Math.PI*2,ie=X===0?0:.8,ae=Ue(Z,new Ht(.16,12,8),$e(16777215),Math.cos(te)*ie,X===0?.6:.42,Math.sin(te)*ie,{cast:!1});ae.scale.y=.4}let Ae={type:"cyl",x:24.5,z:-2.5,r:1.25,top:1.35,bottom:0,bounce:17,isMushroom:!0};t.push(Ae);let Le=0;return s.push((X,te)=>{Le=Math.max(0,Le-te*3);let ie=1-Math.sin(Le*Math.PI)*.25*Le;Z.scale.set(1+(1-ie)*.6,ie,1+(1-ie)*.6)}),yr(r,26.6,0,-1.5,.8,2),t.push({type:"cyl",x:26.6,z:-1.5,r:.25,top:2.6,bottom:0,noStep:!0}),Wi(r,21.2,-.6,-Math.PI/2+.5,["Bounce!"]),To(r,24.5,5.5,-7.5,3.4,3.4,3),t.push({type:"box",x0:22.8,x1:26.2,z0:-9.2,z1:-5.8,top:5.5,bottom:5,safe:!0}),ou(r,[{x:0,z:0,r:9,flowers:150,tint:8834150},{x:24,z:-3.5,r:4.2,flowers:40,tint:9425262}],[[3,.8,1.7],[-5,-4.5,2.4],[2.1,-5.2,1],[4.3,2.6,.4],[-5,-2.9,.4],[0,5.5,1.4],[-1.7,3,.5],[1.7,3,.5],[0,-5.25,2.3],[5.8,2.2,2.6],[5.8,-.8,1.5],[-4.5,1.5,1.2],[-6.3,-1.2,1.5],[-4.5,3,.8],[-3,1.2,.8],[24.5,-2.5,1.5],[-2.7,-2.5,.4]],{tuftColor:8834150}),[["ledge",0,u+.75,-5.25],["lookout",5.8,2.7,-.8],["grab",3,m+.7,.8],["chimney",-5,g+.3,-4.5],["cloud",24.5,6.15,-7.5]].forEach(([X,te,ie,ae],Re)=>i.push(iu(r,X,te,ie,ae,Re))),{colliders:t,stars:i,movers:oe,id:"playground",title:"Playground Isle",kid:!1,spawn:{sun:new P(-1.2,0,5.6),moon:new P(1.2,0,5.6)},lobbyCam:{cx:6,cz:-2,r:24,h:10},killY:-14,sunLight:o,bounce(X){X.isMushroom&&(Le=1)},towerTop:{x0:-1.6,x1:1.6,z0:-6.6,z1:-3.9,y:u},setTowerOccupied(X){X&&(_=!0)},update(X,te,ie){let ae=H(X);W.dx=ae-1.5-W.x0,W.dy=0,W.dz=0,W.x0===0&&(W.dx=0),W.x0=ae-1.5,W.x1=ae+1.5,k.position.x=ae,k.position.y=.05+Math.sin(te*1.6)*.03,su(i,te);for(let Re of s)Re(te,ie)}}}var Ri=30,zs=9,Jn=2.3,au=4.4;function Zf(n,e,t,i,s){let r=new pt;r.position.set(e,0,t),r.scale.setScalar(i),n.add(r);let o=new zi(1,1);[[0,.55,0,.6],[.45,.45,.2,.45],[-.4,.5,-.1,.48],[.1,.95,-.05,.4]].forEach(([l,c,h,u],d)=>{Ue(r,o,$e([6270554,7125859,5809238][d%3],{flatShading:!0}),l,c,h).scale.setScalar(u)});let a=new Ht(.075,8,6);for(let l=0;l<16;l++){let c=l*2.39,h=.3+l%5*.17,u=.55+l%3*.08;Ue(r,a,$e(s,{emissive:s,emissiveIntensity:.15}),Math.cos(c)*u,h+.2,Math.sin(c)*u,{cast:!1})}return r}function y1(n,e,t,i=1){let s=new pt;s.position.set(e,0,t),s.scale.setScalar(i),n.add(s);for(let r=0;r<6;r++){let o=Ue(s,new zt(.17-r*.012,.2-r*.012,.6,9),$e(11568480),Math.sin(r*.5)*.08*r,.3+r*.56,0);o.rotation.z=-.05*r}for(let r=0;r<7;r++){let o=new pt;o.position.set(.25,3.45,0),o.rotation.y=r/7*Math.PI*2,s.add(o);let a=Ue(o,new hi(.3,2,4),$e(7321695,{flatShading:!0}),.95,-.2,0);a.scale.set(1,1,.22),a.rotation.z=-1.25}return s}function S1(n,e,t,i,s){let r=new pt;r.position.set(e,t,i),n.add(r);let o=$e(14068042,{metalness:.6,roughness:.35});for(let l=0;l<3;l++){let c=l/3*Math.PI*2;Ue(r,new zt(.03,.03,1.15,6),$e(9067068),Math.cos(c)*.22,.55,Math.sin(c)*.22).rotation.set(Math.sin(c)*.25,0,-Math.cos(c)*.25)}let a=Ue(r,new zt(.09,.13,1.1,14),o,0,1.25,0);return a.rotation.z=-Math.sign(s)*.9,Ue(r,new zt(.135,.135,.06,14),$e(3813194),Math.sign(s)*.43,1.55,0).rotation.z=-Math.sign(s)*.9,r}function F_(n,e,t,i){let s=i==="sun",r=s?1:-1,o=-r*Ri,a=x=>o+r*x,l=s?9425262:10934666;wo(n,o,0,zs,0,7,l,s?14722684:14264480,s?9399452:8153768),e.push({type:"cyl",x:o,z:0,r:zs-.05,top:0,bottom:-1.2,safe:!0});let c=new Fn(.9,.06,.9);for(let x=0;x<9;x++)for(let S=-1;S<=1;S++)(x+S)%2&&Math.random()<.3||Ue(n,c,$e((x+S)%2?15260875:14206642),a(-7+x*.95),.03,S*.95,{cast:!1});let h=s?16740264:16777215;for(let x of[-1,1])Ue(n,un(.42,1.6,.42,.06),$e(16052198),a(-5),.8,x*1.35),Zf(n,a(-5.6),x*2.4,1.15,h),s||Zf(n,a(-4.4),x*2.6,.8,13018096),e.push({type:"cyl",x:a(-5),z:x*1.35,r:.3,top:1.6,bottom:0,noStep:!0});for(let x of[-1,1]){let S=new pt;S.position.set(a(-5),0,x*1.15),S.rotation.y=x*r*1.2,n.add(S);for(let M=0;M<6;M++)Ue(S,new zt(.02,.02,1.1,5),$e(4864850,{metalness:.5,roughness:.4}),0,.6,-x*(.1+M*.17));Ue(S,new Fn(.04,.05,1),$e(4864850),0,1.1,-x*.5)}s?y1(n,a(-6.5),-4.2,.85):yr(n,a(-6.5),0,-4.2,.9,1),yr(n,a(-2),0,-6.6,.8,2),e.push({type:"cyl",x:a(-6.5),z:-4.2,r:.25,top:3,bottom:0,noStep:!0}),e.push({type:"cyl",x:a(-2),z:-6.6,r:.25,top:2.6,bottom:0,noStep:!0});let u=Math.sqrt(zs*zs-2.6*2.6)-.5;Ue(n,un(.6,.85,u*2,.2),$e(s?6270554:12032992),a(-2.6),.425,0),e.push({type:"box",x0:Math.min(a(-2.9),a(-2.3)),x1:Math.max(a(-2.9),a(-2.3)),z0:-u,z1:u,top:.85,bottom:0,noStep:!0});let d=-r*Math.PI/2;Wi(n,a(-3.9),2.3,d+.35*r,["Jump!"]);let f=Math.sqrt(zs*zs-4.5*4.5)-.4,p=$e(s?15918031:15391986);Ue(n,un(5,Jn,f*2,.15),p,a(2),Jn/2,0),Ue(n,un(5.08,.16,f*2+.08,.06),$e(l),a(2),Jn,0),e.push({type:"box",x0:Math.min(a(-.5),a(4.5)),x1:Math.max(a(-.5),a(4.5)),z0:-f,z1:f,top:Jn+.08,bottom:0,safe:!0}),Wi(n,a(-1.4),2.7,d+.3*r,["Too high? Jump twice,","or grab the edge!"]);for(let x of[-3.2,3.2])Zf(n,a(2.6),x,.7,h).position.y=Jn;let _=Wi(n,a(3.7),2.6,d+.25*r,s?["Jump, jump again,","then DASH \xBB"]:["Jump, then hold Jump","to float (or dash \xBB)"]);_.position.y=Jn;let m=14.5;To(n,a(m),Jn,0,3.2,3.2,s?5:9),e.push({type:"box",x0:Math.min(a(m-1.6),a(m+1.6)),x1:Math.max(a(m-1.6),a(m+1.6)),z0:-1.6,z1:1.6,top:Jn,bottom:Jn-.5,safe:!0});let g=S1(n,a(m+.8),Jn,.5,r);return t.push(iu(n,s?"pro-sun":"pro-moon",a(m-.6),Jn+1,-.6,s?0:1)),{cx:o,dir:r,scopePos:new P(a(m+.8),Jn,.5),scope:g}}function U_(n,e){let t=[],i=[],s=[],r=new pt;n.add(r),e.fog=new or(new de("#e9a9c6"),60,210),nu(n,{top:"#2c2f7a",mid:"#f4a9c6",low:"#ffd7b5",neb1:"#9a7bff",neb2:"#ff7fb8",stars:1,nebula:.8,cloud:15975133,far:!1,cx:0,lightDir:[.2,.35,1],planets:[["giant",0,.17,300,.42],["lilac",1.45,.1,230,.2,1.5],["ember",-1.45,.1,220,.1,2.2],["ocean",2.6,.12,270,.3],["mint",-2.4,.33,220,.3],["rose",3.6,.2,250,-.5]]}),ru(n,{sunColor:16765616,sunI:2.3,hemiSky:13223167,hemiGround:16762536,hemiI:1.35,pos:[0,28,22],target:[0,0,0],extent:46});let o={sun:F_(r,t,i,"sun"),moon:F_(r,t,i,"moon")};ou(r,[{x:-Ri,z:0,r:zs,flowers:90,tufts:150},{x:Ri,z:0,r:zs,flowers:90,tufts:150}],[[-Ri-6,0,1.4],[Ri+6,0,1.4],[-Ri+2,0,7.2],[Ri-2,0,7.2],[-Ri-2.6,0,9],[Ri+2.6,0,9]],{flowerCols:[16748479,16777215,16769658,13022207,16740264]});let a=new wi(Qh(.85,.45),{depth:.18,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2});a.rotateX(-Math.PI/2);let l=new Xt({color:16773560,emissive:16763213,emissiveIntensity:2.2,roughness:.4}),c=[];for(let S of["sun","moon"]){let M=o[S].dir;for(let b=0;b<6;b++){let E=-M*(12.6-b*1.65),v=Jn+.25+b*.36,y=Math.sin(b*1.3)*.6,C=Ue(r,a,l,E,v-.2,y,{receive:!1});C.scale.setScalar(.001);let A={type:"cyl",x:E,z:y,r:.78,top:v,bottom:v-.3,disabled:!0,safe:!0};t.push(A),c.push({m:C,col:A,delay:b*.35+(S==="moon"?.15:0),y:v})}}let h=new pt;r.add(h),h.position.set(0,au,0),h.scale.setScalar(.001),To(h,0,0,0,7,7,12);let u=Ue(h,new Xn(3.7,.06,8,64),new In({color:new de(2.4,2,1.1)}),0,.05,0,{cast:!1});u.rotation.x=Math.PI/2;let d={type:"cyl",x:0,z:0,r:3.5,top:au,bottom:au-.6,disabled:!0,safe:!0};t.push(d);let f=-1,p=!1,_=0,m=-1,g={sun:!1,moon:!1};s.push((S,M)=>{if(f>=0){f+=M;for(let E of c){let v=Math.min(1,Math.max(0,(f-E.delay)/.6));E.m.scale.setScalar(Math.max(.001,gs(v))),E.m.rotation.y=(1-v)*2,E.col.disabled=v<.7}let b=Math.min(1,Math.max(0,(f-2.2)/1));h.scale.setScalar(Math.max(.001,gs(b))),d.disabled=b<.8,u.rotation.z=S*.3}});let x=S=>S&&S.y>au-.6&&Math.hypot(S.x,S.z)<3.6;return{id:"prologue",title:"Prologue \xB7 Two Skies",kid:!0,colliders:t,stars:i,movers:{},spawn:{sun:new P(-Ri-6.5,0,0),moon:new P(Ri+6.5,0,0)},camYaw:{sun:-Math.PI/2,moon:Math.PI/2},lobbyCam:{cx:0,cz:0,r:46,h:16},killY:-14,intro:{all:["Prologue \xB7 Two Skies","Long before they met\u2026"],sun:"Little Sun, in his garden",moon:"Little Moon, in her garden"},bounce(){},story(S,M){let b=S.save.prologue||{};for(let v of S.roles){let y=S.pos[v];y&&y.y>Jn-.3&&Math.hypot(y.x-o[v].scopePos.x,y.z-o[v].scopePos.z)<1.8&&!b[v+"Look"]&&S.setSave(`prologue/${v}Look`,!0),b[v+"Look"]&&!g[v]&&!(b.sunLook&&b.moonLook)&&(g[v]=!0,S.caption("You look up at the sky\u2026 someone far away is looking at the same stars \u2728",4500))}b.sunLook&&b.moonLook&&f<0&&(f=0),f>=0&&!p&&(p=!0,S.caption("A bridge of stars appears. Meet in the middle!",4500)),x(S.pos.sun)&&x(S.pos.moon)&&!b.done&&(S.holding?S.setSave("prologue/done",!0):M>_&&(_=M+7,S.caption("Stand close and tap \u2665 to hold hands",4e3))),b.done&&m<0&&f>=0&&(m=M,S.caption("Two kids. Two cities. One sky.",3200),setTimeout(()=>S.caption("One day, they would find each other\u2026",3200),3400),setTimeout(()=>S.finish(),7e3))},update(S,M,b){su(i,M);for(let E of s)E(M,b)}}}var Ao={prologue:{build:U_,title:"Prologue \xB7 Two Skies",chip:"\u{1F4D6} Prologue"},playground:{build:O_,title:"Playground Isle",chip:"\u{1F3DD}\uFE0F Playground"}};function jf(n,e){let t=Ao[e]||Ao.playground;E_();let i=new pt;n.add(i);let s=t.build(i,n);return s.id=e in Ao?e:"playground",s.root=i,s.dispose=()=>{n.remove(i),i.traverse(r=>{r.geometry&&r.geometry.dispose()})},s}var Tt={normal:0,hang:1,wall:2,carried:3,carry:4,glide:5,climb:6,dash:7},Qf={sun:{r:.4,h:1.45},moon:{r:.32,h:1.2}},ep={sun:{r:.3,h:1.05},moon:{r:.28,h:.95}},M1={sun:.72,moon:.79},il=new Ht(1,28,20),Un=new Ht(1,14,10),Kn=(n,e)=>new xa(n,e,6,14),wt=(n,e={})=>new Xt({color:n,roughness:.75,...e});function ke(n,e,t,i=0,s=0,r=0,o=1,a=o,l=o,c=!0){let h=new Et(e,t);return h.position.set(i,s,r),h.scale.set(o,a,l),h.castShadow=c,n.add(h),h}function pi(n,e=0,t=0,i=0){let s=new pt;return s.position.set(e,t,i),n.add(s),s}function b1(n,e,t,i){let s=new ki,r=(a,l,c,h)=>{a.moveTo(-l/2+h,-c/2),a.lineTo(l/2-h,-c/2),a.quadraticCurveTo(l/2,-c/2,l/2,-c/2+h),a.lineTo(l/2,c/2-h),a.quadraticCurveTo(l/2,c/2,l/2-h,c/2),a.lineTo(-l/2+h,c/2),a.quadraticCurveTo(-l/2,c/2,-l/2,c/2-h),a.lineTo(-l/2,-c/2+h),a.quadraticCurveTo(-l/2,-c/2,-l/2+h,-c/2)};r(s,n,e,i);let o=new lr;return r(o,n-t*2,e-t*2,Math.max(.002,i-t)),s.holes.push(o),new wi(s,{depth:.012,bevelEnabled:!1,curveSegments:4})}function E1(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.translate(64,64),e.fillStyle="#ffd34d";for(let i=0;i<10;i++)e.rotate(Math.PI/5),e.beginPath(),e.moveTo(-9,-34),e.lineTo(0,-58),e.lineTo(9,-34),e.fill();e.beginPath(),e.arc(0,0,30,0,Math.PI*2),e.fill();let t=new ei(n);return t.colorSpace=Qt,t}function B_(n,e,t){let i={};for(let s of[-1,1]){let r=pi(n,s*t.shoulderX,t.shoulderY,0);ke(r,Kn(t.armR,t.armLen),t.sleeveMat,0,-(t.armLen/2+t.armR*.6),0);let o=ke(r,Un,t.skinMat,0,-(t.armLen+t.armR*1.6),.01,t.handR,t.handR*1.05,t.handR),a=pi(e,s*t.hipX,t.hipY,0);ke(a,Kn(t.legR,t.legLen),t.legMat,0,-(t.legLen/2+t.legR),0),ke(a,new Fn(t.shoe[0],t.shoe[1],t.shoe[2]),t.shoeMat,0,-(t.hipY-t.shoe[1]/2),t.shoe[2]*.22),i[s<0?"lArm":"rArm"]=r,i[s<0?"lHand":"rHand"]=o,i[s<0?"lLeg":"rLeg"]=a}return i}function w1(n,e=!1){let t=wt(16243915,{roughness:.6}),i=e?wt(16044604,{roughness:.85}):wt(14172989,{roughness:.9,emissive:8000520,emissiveIntensity:.12}),s=e?wt(14859560,{roughness:.85}):wt(11875119,{roughness:.9}),r=e?wt(7311300,{roughness:.9}):wt(3424350,{roughness:.9}),o=wt(2763315,{roughness:.6}),a=wt(2759958,{roughness:1}),l=wt(4930094,{roughness:1}),c=wt(8079909,{roughness:.35,metalness:.1}),h=pi(n,0,0,0),u=pi(n,0,.42,0);if(ke(u,Kn(.32,.12),i,0,.27,0,1,.76,.82),e)ke(u,Kn(.16,.06),r,0,0,0,1.75,.55,1.35);else{ke(u,Kn(.15,.2),s,0,.13,.2,1,.5,.35);let S=ke(u,new Xn(.19,.075,10,24),s,0,.53,-.06);S.rotation.x=Math.PI/2-.25;for(let M of[-1,1])ke(u,new zt(.012,.012,.16,6),wt(16777215),M*.06,.4,.25)}let d=ke(u,new ui(.2,.2),new Xt({map:E1(),transparent:!0,emissive:16757504,emissiveMap:null,emissiveIntensity:.9,roughness:.6}),.1,.33,.265,1,1,1,!1);d.material.emissiveMap=d.material.map;let f=B_(u,h,{shoulderX:.37,shoulderY:.46,armR:.095,armLen:.22,handR:.088,hipX:.14,hipY:.42,legR:.115,legLen:.2,shoe:[.21,.1,.32],skinMat:t,sleeveMat:e?t:i,legMat:e?t:r,shoeMat:e?wt(9071186):o}),p=pi(u,0,.55,0),_=pi(p,0,.25,0);if(e&&_.scale.setScalar(1.18),ke(_,il,t,0,0,0,.27,.28,.27),e){let S=wt(7031346,{roughness:.9}),M=ke(_,new Ht(.283,24,12,0,Math.PI*2,0,Math.PI*.5),S,0,.01,-.01);M.rotation.x=-.12;let b=ke(_,Un,S,.02,.17,.2,.2,.07,.08);b.rotation.x=-.5}else{let S=ke(_,new Ht(.278,24,12,0,Math.PI*2,0,Math.PI*.4),l,0,.01,-.02);S.rotation.x=-.32,ke(_,il,a,0,-.09,.06,.288,.2,.235),ke(_,il,a,0,-.17,.12,.17,.12,.15);let M=ke(_,Kn(.03,.11),a,0,-.03,.262);M.rotation.z=Math.PI/2}ke(_,Un,t,0,0,.272,.042,.04,.035,!1);let m=ke(_,new Xn(.032,.009,6,14,Math.PI),wt(13070440),0,e?-.1:-.07,e?.258:.288,1,.8,1,!1);m.rotation.z=Math.PI;for(let S of[-1,1]){ke(_,Un,t,S*.27,0,0,.045,.07,.04);let M=ke(_,Kn(.016,.07),e?wt(7031346):a,S*.1,.115,.25,1,1,1,!1);M.rotation.z=Math.PI/2+S*.12}let g=[];for(let S of[-1,1])g.push(ke(_,Kn(.026,.035),wt(1906464,{roughness:.3}),S*.095,.035,.252,1,1,1,!1));let x=b1(.14,.095,.018,.025);for(let S of[-1,1]){ke(_,x,c,S*.098,.035,.262,1,1,1,!1),ke(_,new ui(.11,.065),new Xt({color:13625087,transparent:!0,opacity:.18,roughness:.1}),S*.098,.035,.27,1,1,1,!1);let M=ke(_,new Fn(.012,.014,.24),c,S*.168,.05,.15,1,1,1,!1);M.rotation.y=S*.12}return ke(_,new Fn(.06,.014,.014),c,0,.055,.272,1,1,1,!1),{hips:h,torso:u,neck:p,head:_,eyes:g,...f,extra:{}}}function T1(n,e=!1){let t=wt(15912889,{roughness:.55}),i=new uo({color:e?13215464:4857720,roughness:.5,sheen:1,sheenColor:new de(10185686),sheenRoughness:.4}),s=new uo({color:12032992,roughness:.35,metalness:.15,sheen:1,sheenColor:new de(16769279),iridescence:.4}),r=wt(1708566,{roughness:.5}),o=wt(2038308,{roughness:.35}),a=pi(n,0,0,0),l=[[.31,.16],[.33,.19],[.3,.28],[.24,.4],[.19,.5],[.17,.56]].map(([y,C])=>new re(y,C)),c=ke(a,new Ls(l,28),i,0,0,0);c.material.side=nn;let h=pi(n,0,.5,0);if(ke(h,Kn(.19,.12),i,0,.17,0,1,.85,.8),e)for(let y of[-1,1])ke(h,Un,i,y*.2,.28,0,.09,.08,.09);else{let y=ke(h,new zt(.205,.2,.3,20,1,!0,Math.PI*.24,Math.PI*1.52),s,0,.17,0,1,1,.84);y.material.side=nn}let u=B_(h,a,{shoulderX:.24,shoulderY:.3,armR:.062,armLen:.2,handR:.058,hipX:.08,hipY:.3,legR:.07,legLen:.14,shoe:[.11,.07,.2],skinMat:t,sleeveMat:e?t:s,legMat:t,shoeMat:e?wt(16777215,{roughness:.5}):o}),d=ke(u.rHand.parent,new Xn(.055,.012,8,20),wt(14672874,{metalness:1,roughness:.25}),0,-.235,0,1,1,1,!1);d.rotation.x=Math.PI/2,d.visible=!e;let f=pi(h,0,.33,0);ke(f,Kn(.05,.05),t,0,.02,0);let p=pi(f,0,.21,0);e&&p.scale.setScalar(1.14),ke(p,il,t,0,0,0,.235,.245,.235);let _=ke(p,new Ht(.252,26,14,0,Math.PI*2,0,Math.PI*.52),r,0,.01,-.012);_.rotation.x=-.18;let m=ke(p,Un,r,-.05,.14,.15,.2,.075,.1);m.rotation.z=.35,m.rotation.x=-.4;let g=pi(p,0,0,0);if(e){ke(g,il,r,0,-.06,-.04,.27,.22,.25),ke(p,Un,r,0,.12,.17,.2,.07,.08).rotation.x=-.35;let y=wt(13215464,{roughness:.8});ke(p,new zt(.42,.44,.03,32),y,0,.2,0),ke(p,new Ht(.26,24,12,0,Math.PI*2,0,Math.PI/2),y,0,.19,-.01),ke(p,new Xn(.255,.025,8,28),wt(16181503),0,.22,-.01).rotation.x=Math.PI/2}e||ke(g,Kn(.2,.26),r,0,-.16,-.1,1.15,1,.68);let x=[[-.16,-.38,-.1],[.16,-.38,-.1],[0,-.43,-.15]];if(!e)for(let[y,C,A]of x)ke(g,Un,r,y,C,A,.075,.08,.065);for(let y of e?[]:[-1,1]){let C=ke(p,Kn(.05,.26),r,y*.2,-.16,.02,1,1,.8);C.rotation.z=y*.1;let A=ke(p,Un,r,y*.215,-.33,.035,.06,.055,.05);A.rotation.z=y*.4}let S=[];for(let y of[-1,1]){S.push(ke(p,Kn(.028,.03),wt(2758162,{roughness:.25}),y*.085,.02,.222,1,1,1,!1)),ke(p,Un,wt(16777215,{emissive:16777215,emissiveIntensity:.4}),y*.085+.01,.035,.248,.009,.009,.006,!1);let C=ke(p,Kn(.012,.06),r,y*.088,.085,.215,1,1,1,!1);C.rotation.z=Math.PI/2-y*.18;let A=ke(p,Un,r,y*.115,.04,.21,.022,.008,.01,!1);A.rotation.z=y*.4,ke(p,Un,wt(16748451,{transparent:!0,opacity:.75}),y*.14,-.05,.19,.045,.028,.02,!1)}ke(p,Un,t,0,-.025,.236,.024,.026,.02,!1);let M=ke(p,new Xn(.03,.011,6,14,Math.PI),wt(e?14709374:11540522,{roughness:.35}),0,-.088,.226,1,.75,1,!1);M.rotation.z=Math.PI;let b=pi(p,-.17,.14,.12);b.visible=!e,b.rotation.set(.3,-.6,0);let E=wt(16777215,{emissive:16774888,emissiveIntensity:.35});for(let y=0;y<5;y++){let C=y/5*Math.PI*2;ke(b,Un,E,Math.cos(C)*.028,Math.sin(C)*.028,0,.026,.016,.008,!1)}ke(b,Un,wt(16766282),0,0,.006,.012,.012,.008,!1);let v=ke(p,new Xn(.04,.011,8,18,Math.PI*1.25),wt(16766842,{emissive:16757504,emissiveIntensity:1.1,metalness:.4}),.19,.12,.09,1,1,1,!1);return v.rotation.set(0,.7,.4),v.visible=!e,{hips:a,torso:h,neck:f,head:p,eyes:S,...u,extra:{skirt:c,backHair:g}}}function k_(n,{kid:e=!1}={}){let t=new pt,i=new pt;t.add(i),i.position.y=0;let s=new pt;i.add(s);let r=n==="sun",o=r?w1(s,e):T1(s,e);e&&i.scale.setScalar(M1[n]);let a=(e?ep:Qf)[n].h,l=new ur(r?16747100:11570431,0,7,2);l.position.set(0,a*.6,0),t.add(l);let c={lax:0,laz:0,rax:0,raz:0,llx:0,rlx:0,lean:0,headX:0},h=0,u=0,d=0,f=2+Math.random()*3,p=0,_=!0,m=0,g=0,x=1;return{root:t,kind:n,glow:l,height:a,kid:e,get yaw(){return p},setYaw(S){p=S,t.rotation.y=S},land(S=8){u=Math.max(u,Math.min(1,S/16))},spin(){m=.42},throwAnim(){g=.3},animate(S,M){d+=S;let{speed:b,grounded:E,vy:v}=M,y=M.mode||0;E&&!_&&(u=Math.max(u,.45)),_=E;let C=Math.min(1,b/5.2);h+=S*(5+b*2.1),u=_n(u,0,9,S);let A=0,N=0,D=-.14,B=.14,I=0,k=0,W=0,H=0,oe=Math.sin(h);if(y===Tt.hang)A=N=-2.95,D=-.22,B=.22,I=Math.sin(d*2.2)*.12,k=-I,W=.05,H=-.25;else if(y===Tt.climb)A=N=-1.2,D=-.3,B=.3,I=1.1,k=.3,W=.45;else if(y===Tt.wall)A=-2.2,N=-1.6,D=-.4,B=.5,I=.6,k=.2,W=-.1;else if(y===Tt.carry)A=N=-2.9,D=-.38,B=.38,E&&(I=oe*.7*C,k=-I),H=-.15;else if(y===Tt.carried)A=N=-.4,D=-1.1,B=1.1,I=1.25,k=1.05,W=-.15;else if(y===Tt.dash)A=N=.95,D=-.35,B=.35,I=-.7,k=.5,W=.55,H=-.25;else if(y===Tt.glide)A=N=0,D=-1.45+Math.sin(d*6)*.08,B=1.45-Math.sin(d*6)*.08,I=-.15,k=-.25,W=.18;else if(!E)v>0?(A=-.6,N=-.6,D=-1,B=1,I=.75,k=-.35):(D=-1.7+Math.sin(d*14)*.15,B=1.7-Math.sin(d*14)*.15,A=N=-.2,I=.35,k=-.2),W=.08;else{I=oe*.85*C,k=-I,A=-oe*.75*C*x,N=oe*.75*C*x;let $=1-C;D=-.14-Math.sin(d*1.8)*.03*$,B=.14+Math.sin(d*1.8)*.03*$,W=C*.18,H=Math.sin(d*.9)*.04*$}if(M.hold&&y===Tt.normal&&(M.hold<0?(D=-1,A=-.35):(B=1,N=-.35)),g>0){g-=S;let $=g/.3;A=N=-2.9*$-.6*(1-$),D=-.3,B=.3}let q=16;c.lax=_n(c.lax,A,q,S),c.rax=_n(c.rax,N,q,S),c.laz=_n(c.laz,D,q,S),c.raz=_n(c.raz,B,q,S),c.llx=_n(c.llx,I,q,S),c.rlx=_n(c.rlx,k,q,S),c.lean=_n(c.lean,W,10,S),c.headX=_n(c.headX,H,8,S),o.lArm.rotation.set(c.lax,0,c.laz),o.rArm.rotation.set(c.rax,0,c.raz),o.lLeg.rotation.x=c.llx,o.rLeg.rotation.x=c.rlx,o.torso.rotation.x=c.lean,o.head.rotation.x=c.headX;let Z=E&&y!==Tt.carried?Math.abs(Math.sin(h))*.05*C:0;s.position.y=Z;let K=1+Math.sin(d*2.4)*.015*(1-C);!E&&y===Tt.normal&&(K+=Math.max(-.06,Math.min(.1,v*.01))),K-=u*.25;let Ae=1/Math.sqrt(Math.max(.5,K));if(s.scale.set(Ae,K,Ae),o.extra.skirt){let $=y===Tt.glide?1.18:E?1+C*.04:1.08,X=_n(o.extra.skirt.scale.x,$,8,S);o.extra.skirt.scale.set(X,1,X),o.extra.backHair.rotation.x=_n(o.extra.backHair.rotation.x,C*.25+(E?0:-.15),6,S)}if(m>0){m=Math.max(0,m-S);let $=1-m/.42,X=$*$*(3-2*$);r?(i.position.y=a*.5,s.position.y-=a*.5/i.scale.y,i.rotation.x=X*Math.PI*2):i.rotation.y=X*Math.PI*2}else i.rotation.set(0,0,0),i.position.y=0;f-=S;let Le=f<.12;for(let $ of o.eyes)$.scale.y=Le?.15:1;f<0&&(f=2.5+Math.random()*3.5),l.intensity=_n(l.intensity,0,3,S)}}}var A1=30,C1=.45,R1=28,lu=class{constructor(e=.36,t=1){this.pos=new P,this.vel=new P,this.r=e,this.h=t,this.grounded=!1,this.ground=null,this.maxFall=R1,this.wallC=null,this.wallNX=0,this.wallNZ=0}},Zt={x:0,z:0};function I1(n,e,t,i){let s=n<i.x0?i.x0:n>i.x1?i.x1:n,r=e<i.z0?i.z0:e>i.z1?i.z1:e,o=n-s,a=e-r,l=o*o+a*a;if(l>=t*t)return!1;if(l>1e-10){let p=Math.sqrt(l);return Zt.x=o/p*(t-p),Zt.z=a/p*(t-p),!0}let c=n-i.x0,h=i.x1-n,u=e-i.z0,d=i.z1-e,f=Math.min(c,h,u,d);return Zt.x=0,Zt.z=0,f===c?Zt.x=-(c+t):f===h?Zt.x=h+t:f===u?Zt.z=-(u+t):Zt.z=d+t,!0}function P1(n,e,t,i){let s=n-i.x,r=e-i.z,o=t+i.r,a=s*s+r*r;if(a>=o*o)return!1;let l=Math.sqrt(a);return l<1e-6?(Zt.x=o,Zt.z=0,!0):(Zt.x=s/l*(o-l),Zt.z=r/l*(o-l),!0)}var sl=(n,e,t,i)=>i.type==="box"?I1(n,e,t,i):P1(n,e,t,i);function N1(n,e,t){let i=n.grounded;n.pos.x+=n.vel.x*t,n.pos.z+=n.vel.z*t;for(let o of e){if(o.owner===n||o.disabled)continue;let a=n.pos.y,l=a+n.h;if(a>=o.top-.001||l<=o.bottom+.001||!sl(n.pos.x,n.pos.z,n.r,o))continue;let c=o.top-a;if(!o.noStep&&n.vel.y<=.01&&(i?c<=C1:c<=.35)){n.pos.y=o.top;continue}n.pos.x+=Zt.x,n.pos.z+=Zt.z;let h=Math.hypot(Zt.x,Zt.z);if(h>1e-6){let u=Zt.x/h,d=Zt.z/h;!o.isPlayer&&o.top>a+.7&&o.bottom<a+.3&&(n.wallC=o,n.wallNX=u,n.wallNZ=d);let f=n.vel.x*u+n.vel.z*d;f<0&&(n.vel.x-=f*u,n.vel.z-=f*d)}}let s=n.pos.y;n.vel.y=Math.max(n.vel.y-A1*t,-n.maxFall),n.pos.y+=n.vel.y*t,n.grounded=!1,n.ground=null;let r=null;for(let o of e)o.owner===n||o.disabled||sl(n.pos.x,n.pos.z,n.r,o)&&(n.vel.y<=0?s>=o.top-.25&&n.pos.y<=o.top&&(!r||o.top>r.top)&&(r=o):s+n.h<=o.bottom+.05&&n.pos.y+n.h>o.bottom&&(n.pos.y=o.bottom-n.h,n.vel.y=0));if(r){let o=-n.vel.y;if(n.pos.y=r.top,n.vel.y=0,n.grounded=!0,n.ground=r,!i)return{collider:r,impact:o}}return null}function z_(n,e,t){n.wallC=null;let i=n.ground;i&&i.dx!==void 0&&i.dx*i.dx+i.dy*i.dy+i.dz*i.dz<1&&(n.pos.x+=i.dx,n.pos.y+=i.dy,n.pos.z+=i.dz);let s=Math.hypot(n.vel.x,n.vel.y,n.vel.z)+1,r=Math.min(8,Math.max(1,Math.ceil(s*t/.12))),o=null;for(let a=0;a<r;a++){let l=N1(n,e,t/r);l&&(o=l,l.collider.bounce&&(n.vel.y=l.collider.bounce,n.grounded=!1,n.ground=null))}return o}function H_(n,e){let t=n.pos.y,i=t+n.h*.9;for(let s of e){if(s.isPlayer||s.noGrab||s.disabled||s.owner===n||s.top<=t+n.h*.45||s.top>i+.35||s.top<i-.5||s.bottom>t+n.h*.5||!sl(n.pos.x,n.pos.z,n.r+.16,s))continue;let r=Math.hypot(Zt.x,Zt.z);if(r<1e-5)continue;let o=Zt.x/r,a=Zt.z/r,l=n.pos.x-o*(n.r+.32),c=n.pos.z-a*(n.r+.32);if(!sl(l,c,.02,s))continue;let h=!1;for(let u of e)if(!(u===s||u.isPlayer||u.disabled||u.owner===n)&&u.bottom<s.top+n.h&&u.top>s.top+.05&&sl(l,c,n.r*.8,u)){h=!0;break}if(!h)return{c:s,nx:o,nz:a,top:s.top,lx:l,lz:c}}return null}function G_(n){return{type:"cyl",x:0,z:0,r:n.r*.92,top:1,bottom:0,dx:0,dy:0,dz:0,isPlayer:!0,owner:n,ready:!1,px:0,py:0,pz:0}}function cu(n,e,t){n.ready?(n.dx=e.x-n.px,n.dy=e.y-n.py,n.dz=e.z-n.pz):n.dx=n.dy=n.dz=0,n.px=e.x,n.py=e.y,n.pz=e.z,n.ready=!0,n.x=e.x,n.z=e.z,n.bottom=e.y,n.top=e.y+t}var ri=null,Sr=null,Hs=_t.get("sound",!0);function V_(){try{if(!ri){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;ri=new t,Sr=ri.createGain(),Sr.gain.value=Hs?.5:0,Sr.connect(ri.destination)}ri.state!=="running"&&ri.resume();let n=ri.createBuffer(1,1,22050),e=ri.createBufferSource();e.buffer=n,e.connect(Sr),e.start(0)}catch{}}var qt={get enabled(){return Hs},toggle(){return Hs=!Hs,_t.set("sound",Hs),Sr&&(Sr.gain.value=Hs?.5:0),Hs},play(n){if(!ri||!Hs||ri.state!=="running")return;let e=L1[n];if(e)try{e(ri.currentTime)}catch{}}};function Bn(n,{type:e="sine",f0:t,f1:i=t,dur:s=.15,vol:r=.3,attack:o=.005}){let a=ri.createOscillator(),l=ri.createGain();a.type=e,a.frequency.setValueAtTime(t,n),a.frequency.exponentialRampToValueAtTime(Math.max(1,i),n+s),l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(r,n+o),l.gain.exponentialRampToValueAtTime(1e-4,n+s),a.connect(l),l.connect(Sr),a.start(n),a.stop(n+s+.02)}var L1={jump:n=>Bn(n,{type:"triangle",f0:320,f1:620,dur:.14,vol:.22}),jump2:n=>Bn(n,{type:"triangle",f0:480,f1:900,dur:.14,vol:.2}),land:n=>Bn(n,{type:"sine",f0:160,f1:70,dur:.1,vol:.25}),bounce:n=>{Bn(n,{type:"sine",f0:180,f1:720,dur:.32,vol:.32}),Bn(n+.05,{type:"triangle",f0:360,f1:1100,dur:.25,vol:.12})},star:n=>[784,988,1175,1568].forEach((e,t)=>Bn(n+t*.07,{type:"triangle",f0:e,dur:.22,vol:.18})),heart:n=>{Bn(n,{type:"sine",f0:660,dur:.12,vol:.22}),Bn(n+.11,{type:"sine",f0:880,dur:.2,vol:.22})},shine:n=>[523,659,784].forEach((e,t)=>Bn(n+t*.04,{type:"sine",f0:e,f1:e*1.5,dur:.4,vol:.12})),tide:n=>{Bn(n,{type:"sine",f0:300,f1:150,dur:.5,vol:.2}),Bn(n+.1,{type:"sine",f0:450,f1:220,dur:.5,vol:.12})},dash:n=>{Bn(n,{type:"sawtooth",f0:900,f1:180,dur:.16,vol:.06}),Bn(n,{type:"sine",f0:500,f1:120,dur:.18,vol:.14})},join:n=>[523,784].forEach((e,t)=>Bn(n+t*.12,{type:"triangle",f0:e,dur:.25,vol:.18})),respawn:n=>Bn(n,{type:"sine",f0:900,f1:300,dur:.35,vol:.15})};function W_({canvas:n,joyZone:e,joyBase:t,joyKnob:i,buttons:s}){let r={move:{x:0,y:0},jumpHeld:!1,pressed:new Set,camDX:0,camDY:0,zoom:1,enabled:!1,lastUse:0},o=b=>{r.enabled&&r.pressed.add(b)},a=()=>V_();window.addEventListener("pointerdown",a,{passive:!0}),window.addEventListener("touchend",a,{passive:!0}),window.addEventListener("keydown",a);for(let b of["gesturestart","gesturechange","dblclick"])document.addEventListener(b,E=>E.preventDefault(),{passive:!1});let l=52,c=null,h=0,u=0;e.addEventListener("pointerdown",b=>{if(b.pointerType==="mouse"){p(b);return}if(c!==null)return;b.preventDefault(),c=b.pointerId,e.setPointerCapture(b.pointerId);let E=e.getBoundingClientRect();h=b.clientX,u=b.clientY,t.hidden=!1,t.style.transform=`translate(${h-E.left}px, ${u-E.top}px)`,t.dataset.ox=E.left,t.dataset.oy=E.top,i.style.transform="translate(0px, 0px)",e.classList.add("active"),r.lastUse=performance.now()}),e.addEventListener("pointermove",b=>{if(b.pointerId===c){let E=+t.dataset.ox,v=+t.dataset.oy,y=b.clientX-h,C=b.clientY-u,A=Math.hypot(y,C);if(A>l){let B=(A-l)/A;h+=y*B,u+=C*B,y=b.clientX-h,C=b.clientY-u}t.style.transform=`translate(${h-E}px, ${u-v}px)`,i.style.transform=`translate(${y}px, ${C}px)`;let N=y/l,D=-C/l;Math.hypot(N,D)<.12&&(N=0,D=0),r.move.x=N,r.move.y=D}else g(b)});let d=b=>{if(b.pointerId!==c){x(b);return}c=null,r.move.x=0,r.move.y=0,t.hidden=!0,e.classList.remove("active")};e.addEventListener("pointerup",d),e.addEventListener("pointercancel",d);let f=new Map;function p(b){f.set(b.pointerId,{x:b.clientX,y:b.clientY});try{b.target.setPointerCapture(b.pointerId)}catch{}}let _=0,m=()=>{let[b,E]=[...f.values()];return Math.hypot(b.x-E.x,b.y-E.y)};function g(b){let E=f.get(b.pointerId);if(E){if(f.size>=2){E.x=b.clientX,E.y=b.clientY;let v=m();_>0&&v>0&&(r.zoom*=_/v),_=v;return}r.camDX+=b.clientX-E.x,r.camDY+=b.clientY-E.y,E.x=b.clientX,E.y=b.clientY}}function x(b){f.delete(b.pointerId),_=0}n.addEventListener("wheel",b=>{b.preventDefault(),r.zoom*=Math.exp(b.deltaY*.001)},{passive:!1}),n.addEventListener("pointerdown",b=>{b.preventDefault(),p(b)}),n.addEventListener("pointermove",g),n.addEventListener("pointerup",x),n.addEventListener("pointercancel",x);for(let[b,E]of Object.entries(s)){E.addEventListener("pointerdown",y=>{y.preventDefault();try{E.setPointerCapture(y.pointerId)}catch{}E.classList.add("pressed"),o(b),b==="jump"&&(r.jumpHeld=!0)});let v=()=>{E.classList.remove("pressed"),b==="jump"&&(r.jumpHeld=!1)};E.addEventListener("pointerup",v),E.addEventListener("pointercancel",v),E.addEventListener("lostpointercapture",v),E.addEventListener("contextmenu",y=>y.preventDefault())}let S=new Set,M=()=>{if(c!==null)return;let b=0,E=0;(S.has("KeyA")||S.has("ArrowLeft"))&&(b-=1),(S.has("KeyD")||S.has("ArrowRight"))&&(b+=1),(S.has("KeyW")||S.has("ArrowUp"))&&(E+=1),(S.has("KeyS")||S.has("ArrowDown"))&&(E-=1);let v=Math.hypot(b,E)||1;r.move.x=b/v,r.move.y=E/v};return window.addEventListener("keydown",b=>{b.target.tagName!=="INPUT"&&(b.repeat||(S.add(b.code),b.code==="Space"&&(o("jump"),r.jumpHeld=!0,b.preventDefault()),b.code==="KeyE"&&o("ability"),b.code==="KeyH"&&o("heart"),b.code==="KeyQ"&&o("swap"),(b.code==="ShiftLeft"||b.code==="ShiftRight"||b.code==="KeyK")&&o("dash"),M()))}),window.addEventListener("keyup",b=>{S.delete(b.code),b.code==="Space"&&(r.jumpHeld=!1),M()}),window.addEventListener("blur",()=>{S.clear(),r.jumpHeld=!1,r.move.x=r.move.y=0}),{state:r,consume(b){let E=r.pressed.has(b);return r.pressed.delete(b),E},takeZoom(){let b=r.zoom;return r.zoom=1,b},takeCam(){let b={x:r.camDX,y:r.camDY};return r.camDX=0,r.camDY=0,b},setEnabled(b){r.enabled=b,b||(r.pressed.clear(),r.move.x=r.move.y=0,r.jumpHeld=!1)}}}var X_=new P,D1=new P,O1=new P,hu=class{constructor(){this.buf=[],this.lat=[],this.delay=null,this.pos=new P,this.vel=new P,this.yaw=0,this.grounded=!0,this.mode=0,this.has=!1,this.lastRecv=0}push(e,t){let i=this.buf[this.buf.length-1];i&&e.t<=i.t||(i&&e.t-i.t>2500&&(this.buf.length=0),this.buf.push(e),this.buf.length>60&&this.buf.shift(),this.lat.push(t-e.t),this.lat.length>40&&this.lat.shift(),this.lastRecv=performance.now())}snap(){this.buf.splice(0,this.buf.length-1)}targetDelay(){let e=[...this.lat].sort((i,s)=>i-s);return e[Math.min(e.length-1,Math.floor(e.length*.9))]+45}jitter(){if(this.lat.length<2)return 0;let e=[...this.lat].sort((t,i)=>t-i);return Math.round(e[Math.floor(e.length*.9)]-e[0])}sample(e,t,i){if(!this.buf.length)return!1;let s=this.targetDelay();this.delay===null||Math.abs(s-this.delay)>1e3?this.delay=s:this.delay+=(s-this.delay)*Math.min(1,t*1.5);let r=e-this.delay,o=this.buf,a=(p,_)=>{if(_.set(p.p[0],p.p[1],p.p[2]),p.b){let m=i(p.b,O1);if(!m)return null;_.add(m)}return _};for(;o.length>2&&o[1].t<=r;)o.shift();let l=o[0],c=o[1];if(c&&r>=l.t&&r<=c.t){let p=(r-l.t)/Math.max(1,c.t-l.t),_=a(l,X_),m=a(c,D1);if(_&&m){if(!l.b&&!c.b&&l.b===c.b){let g=(c.t-l.t)/1e3,x=p*p,S=x*p,M=2*S-3*x+1,b=S-2*x+p,E=-2*S+3*x,v=S-x,y=g<.25;for(let C of["x","y","z"]){let A=C==="x"?0:C==="y"?1:2,N=_[C]+(m[C]-_[C])*p,D=M*_[C]+b*g*l.v[A]+E*m[C]+v*g*c.v[A];this.pos[C]=y?D:N}(l.g||c.g)&&y&&(this.pos.y=_.y+(m.y-_.y)*p)}else this.pos.lerpVectors(_,m,p);return this.vel.set(l.v[0]+(c.v[0]-l.v[0])*p,l.v[1]+(c.v[1]-l.v[1])*p,l.v[2]+(c.v[2]-l.v[2])*p),this.yaw=l.r+tl(l.r,c.r)*p,this.grounded=p<.5?!!l.g:!!c.g,this.mode=(p<.5?l.m:c.m)||0,this.has=!0,!0}}let h=r<l.t?l:o[o.length-1],u=a(h,X_);if(!u)return this.has;let d=Ci((r-h.t)/1e3,0,.25),f=Math.hypot(h.v[0],h.v[2])>.05||!h.g;return this.pos.set(u.x+(f?h.v[0]*d:0),u.y+(h.g?0:h.v[1]*d),u.z+(f?h.v[2]*d:0)),h.g&&(this.pos.y=u.y),this.vel.set(h.v[0],h.v[1],h.v[2]),this.yaw=h.r,this.grounded=!!h.g,this.mode=h.m||0,this.has=!0,!0}};var q_=()=>{};var tp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};var he=function(n,e){if(!n)throw br(e)},br=function(n){return new Error("Firebase Database ("+tp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};var $_=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},F1=function(n){let e=[],t=0,i=0;for(;t<n.length;){let s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){let r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){let r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{let r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},fu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){let r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4,d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(t[h],t[u],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):F1(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){let r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;let c=s<n.length?t[n.charAt(s)]:64;++s;let u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new np;let d=r<<2|a>>4;if(i.push(d),c!==64){let f=a<<4&240|c>>2;if(i.push(f),u!==64){let p=c<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},np=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},ip=function(n){let e=$_(n);return fu.encodeByteArray(e,!0)},rl=function(n){return ip(n).replace(/\./g,"")},uu=function(n){try{return fu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function J_(n){return K_(void 0,n)}function K_(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:let t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(let t in e)!e.hasOwnProperty(t)||!U1(t)||(n[t]=K_(n[t],e[t]));return n}function U1(n){return n!=="__proto__"}function B1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var k1=()=>B1().__FIREBASE_DEFAULTS__,z1=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},H1=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&uu(n[1]);return e&&JSON.parse(e)},Z_=()=>{try{return q_()||k1()||z1()||H1()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},G1=n=>Z_()?.emulatorHosts?.[n],j_=n=>{let e=G1(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},sp=()=>Z_()?.config;var Zn=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}};function Q_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[rl(JSON.stringify(t)),rl(JSON.stringify(o)),""].join(".")}function V1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(V1())}function ev(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xi(){return tp.NODE_CLIENT===!0||tp.NODE_ADMIN===!0}function tv(){try{return typeof indexedDB=="object"}catch{return!1}}function nv(){return new Promise((n,e)=>{try{let t=!0,i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}var W1="FirebaseError",Mr=class n extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=W1,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ol.prototype.create)}},ol=class{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?X1(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Mr(s,a,i)}};function X1(n,e){try{let t=0,i="";for(;t<n.length;){let s=n.indexOf("{$",t);if(s===-1){i+=n.substring(t);break}let r=n.indexOf("}",s+2);if(r===-1){i+=n.substring(t);break}let o=n.substring(s+2,r),a=e[o];i+=n.substring(t,s)+(a!=null?String(a):`<${o}?>`),t=r+1}return i}catch{return n}}function Co(n){return JSON.parse(n)}function an(n){return JSON.stringify(n)}var iv=function(n){let e={},t={},i={},s="";try{let r=n.split(".");e=Co(uu(r[0])||""),t=Co(uu(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}};var sv=function(n){let e=iv(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},rv=function(n){let e=iv(n).claims;return typeof e=="object"&&e.admin===!0};function Ii(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Er(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function pu(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function al(n,e,t){let i={};for(let s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Ro(n,e){if(n===e)return!0;let t=Object.keys(n),i=Object.keys(e);for(let s of t){if(!i.includes(s))return!1;let r=n[s],o=e[s];if(Y_(r)&&Y_(o)){if(!Ro(r,o))return!1}else if(r!==o)return!1}for(let s of i)if(!t.includes(s))return!1;return!0}function Y_(n){return n!==null&&typeof n=="object"}function ov(n){let e=[];for(let[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}var du=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);let i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){let d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);let d=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);let i=t-this.blockSize,s=0,r=this.buf_,o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){let e=[],t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}};function wr(n,e){return`${n} failed: ${e} argument `}var av=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){let r=s-55296;i++,he(i<n.length,"Surrogate pair missing trail surrogate.");let o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ll=function(n){let e=0;for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};var bL=14400*1e3;function qi(n){return n&&n._delegate?n._delegate:n}function op(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lv(n){return(await fetch(n,{credentials:"include"})).ok}var _s=class{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Tr="[DEFAULT]";var mu=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let i=new Zn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{let s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Y1(e))try{this.getOrInitializeService({instanceIdentifier:Tr})}catch{}for(let[t,i]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(t);try{let r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tr){return this.instances.has(e)}getOptions(e=Tr){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(let[r,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){let i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);let r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:q1(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Tr){return this.component?this.component.multipleInstances?e:Tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function q1(n){return n===Tr?void 0:n}function Y1(n){return n.instantiationMode==="EAGER"}var cl=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new mu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var $1=[],Nt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Nt||(Nt={}));var J1={debug:Nt.DEBUG,verbose:Nt.VERBOSE,info:Nt.INFO,warn:Nt.WARN,error:Nt.ERROR,silent:Nt.SILENT},K1=Nt.INFO,Z1={[Nt.DEBUG]:"log",[Nt.VERBOSE]:"log",[Nt.INFO]:"info",[Nt.WARN]:"warn",[Nt.ERROR]:"error"},j1=(n,e,...t)=>{if(e<n.logLevel)return;let i=new Date().toISOString(),s=Z1[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Io=class{constructor(e){this.name=e,this._logLevel=K1,this._logHandler=j1,this._userLogHandler=null,$1.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Nt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?J1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Nt.DEBUG,...e),this._logHandler(this,Nt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Nt.VERBOSE,...e),this._logHandler(this,Nt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Nt.INFO,...e),this._logHandler(this,Nt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Nt.WARN,...e),this._logHandler(this,Nt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Nt.ERROR,...e),this._logHandler(this,Nt.ERROR,...e)}};var Q1=(n,e)=>e.some(t=>n instanceof t),cv,hv;function eA(){return cv||(cv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tA(){return hv||(hv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var uv=new WeakMap,lp=new WeakMap,dv=new WeakMap,ap=new WeakMap,hp=new WeakMap;function nA(n){let e=new Promise((t,i)=>{let s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Yi(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&uv.set(t,n)}).catch(()=>{}),hp.set(e,n),e}function iA(n){if(lp.has(n))return;let e=new Promise((t,i)=>{let s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});lp.set(n,e)}var cp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return lp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||dv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Yi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fv(n){cp=n(cp)}function sA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let i=n.call(gu(this),e,...t);return dv.set(i,e.sort?e.sort():[e]),Yi(i)}:tA().includes(n)?function(...e){return n.apply(gu(this),e),Yi(uv.get(this))}:function(...e){return Yi(n.apply(gu(this),e))}}function rA(n){return typeof n=="function"?sA(n):(n instanceof IDBTransaction&&iA(n),Q1(n,eA())?new Proxy(n,cp):n)}function Yi(n){if(n instanceof IDBRequest)return nA(n);if(ap.has(n))return ap.get(n);let e=rA(n);return e!==n&&(ap.set(n,e),hp.set(e,n)),e}var gu=n=>hp.get(n);function mv(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){let o=indexedDB.open(n,e),a=Yi(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Yi(o.result),l.oldVersion,l.newVersion,Yi(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}var oA=["get","getKey","getAll","getAllKeys","count"],aA=["put","add","delete","clear"],up=new Map;function pv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(up.get(e))return up.get(e);let t=e.replace(/FromIndex$/,""),i=e!==t,s=aA.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||oA.includes(t)))return;let r=async function(o,...a){let l=this.transaction(o,s?"readwrite":"readonly"),c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return up.set(e,r),r}fv(n=>({...n,get:(e,t,i)=>pv(e,t)||n.get(e,t,i),has:(e,t)=>!!pv(e,t)||n.has(e,t)}));var fp=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lA(t)){let i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}};function lA(n){return n.getComponent()?.type==="VERSION"}var pp="@firebase/app",gv="0.16.5";var xs=new Io("@firebase/app"),cA="@firebase/app-compat",hA="@firebase/analytics-compat",uA="@firebase/analytics",dA="@firebase/app-check-compat",fA="@firebase/app-check",pA="@firebase/auth",mA="@firebase/auth-compat",gA="@firebase/crashlytics",_A="@firebase/database",vA="@firebase/data-connect",xA="@firebase/database-compat",yA="@firebase/functions",SA="@firebase/functions-compat",MA="@firebase/installations",bA="@firebase/installations-compat",EA="@firebase/messaging",wA="@firebase/messaging-compat",TA="@firebase/performance",AA="@firebase/performance-compat",CA="@firebase/remote-config",RA="@firebase/remote-config-compat",IA="@firebase/storage",PA="@firebase/storage-compat",NA="@firebase/firestore",LA="@firebase/ai",DA="@firebase/firestore-compat",OA="firebase",FA="13.2.0";var mp="[DEFAULT]",UA={[pp]:"fire-core",[cA]:"fire-core-compat",[uA]:"fire-analytics",[hA]:"fire-analytics-compat",[fA]:"fire-app-check",[dA]:"fire-app-check-compat",[pA]:"fire-auth",[mA]:"fire-auth-compat",[gA]:"fire-cls",[_A]:"fire-rtdb",[vA]:"fire-data-connect",[xA]:"fire-rtdb-compat",[yA]:"fire-fn",[SA]:"fire-fn-compat",[MA]:"fire-iid",[bA]:"fire-iid-compat",[EA]:"fire-fcm",[wA]:"fire-fcm-compat",[TA]:"fire-perf",[AA]:"fire-perf-compat",[CA]:"fire-rc",[RA]:"fire-rc-compat",[IA]:"fire-gcs",[PA]:"fire-gcs-compat",[NA]:"fire-fst",[DA]:"fire-fst-compat",[LA]:"fire-vertex","fire-js":"fire-js",[OA]:"fire-js-all"};var _u=new Map,BA=new Map,gp=new Map;function _v(n,e){try{n.container.addComponent(e)}catch(t){xs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hl(n){let e=n.name;if(gp.has(e))return xs.debug(`There were multiple attempts to register component ${e}.`),!1;gp.set(e,n);for(let t of _u.values())_v(t,n);for(let t of BA.values())_v(t,n);return!0}function Sv(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Mv(n){return n==null?!1:n.settings!==void 0}var kA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vs=new ol("app","Firebase",kA);var _p=class{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vs.create("app-deleted",{appName:this._name})}};var bv=FA;function yp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let i={name:mp,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw vs.create("bad-app-name",{appName:String(s)});if(t||(t=sp()),!t)throw vs.create("no-options");let r=_u.get(s);if(r)if(Ro(t,r.options)){if(Ro(i,r.config))return r;throw vs.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(i)})}else throw vs.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(t)});let o=new cl(s);for(let l of gp.values())o.addComponent(l);let a=new _p(t,i,o);return _u.set(s,a),a}function Ev(n=mp){let e=_u.get(n);if(!e&&n===mp&&sp())return yp();if(!e)throw vs.create("no-app",{appName:n});return e}function Gs(n,e,t){let i=UA[n]??n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){let o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xs.warn(o.join(" "));return}hl(new _s(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var zA="firebase-heartbeat-database",HA=1,ul="firebase-heartbeat-store",dp=null;function wv(){return dp||(dp=mv(zA,HA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ul)}catch(t){console.warn(t)}}}}).catch(n=>{throw vs.create("idb-open",{originalErrorMessage:n.message})})),dp}async function GA(n){try{let t=(await wv()).transaction(ul),i=await t.objectStore(ul).get(Tv(n));return await t.done,i}catch(e){if(e instanceof Mr)xs.warn(e.message);else{let t=vs.create("idb-get",{originalErrorMessage:e?.message});xs.warn(t.message)}}}async function vv(n,e){try{let i=(await wv()).transaction(ul,"readwrite");await i.objectStore(ul).put(e,Tv(n)),await i.done}catch(t){if(t instanceof Mr)xs.warn(t.message);else{let i=vs.create("idb-set",{originalErrorMessage:t?.message});xs.warn(i.message)}}}function Tv(n){return`${n.name}!${n.options.appId}`}var VA=1024,WA=30,vp=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new xp(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{let t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>WA){let s=qA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){xs.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let e=xv(),{heartbeatsToSend:t,unsentEntries:i}=XA(this._heartbeatsCache.heartbeats),s=rl(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return xs.warn(e),""}}};function xv(){return new Date().toISOString().substring(0,10)}function XA(n,e=VA){let t=[],i=n.slice();for(let s of n){let r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),yv(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),yv(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}var xp=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tv()?nv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await GA(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let i=await this.read();return vv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){let i=await this.read();return vv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function yv(n){return rl(JSON.stringify({version:2,heartbeats:n})).length}function qA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}function YA(n){hl(new _s("platform-logger",e=>new fp(e),"PRIVATE")),hl(new _s("heartbeat",e=>new vp(e),"PRIVATE")),Gs(pp,gv,n),Gs(pp,gv,"esm2020"),Gs("fire-js","")}YA("");var $A="firebase",JA="13.2.0";Gs($A,JA,"app");var Av="@firebase/database",Cv="1.1.5";var Em="";function KA(n){Em=n}var Cp=class{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),an(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Co(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}};var Rp=class{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ii(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}};var ax=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){let e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Cp(e)}}catch{}return new Rp},Cr=ax("localStorage"),Ip=ax("sessionStorage");var Lo=new Io("@firebase/database"),ZA=(function(){let n=1;return function(){return n++}})(),lx=function(n){let e=av(n),t=new du;t.update(e);let i=t.digest();return fu.encodeByteArray(i)},Rl=function(...n){let e="";for(let t=0;t<n.length;t++){let i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Rl.apply(null,i):typeof i=="object"?e+=an(i):e+=i,e+=" "}return e},Ir=null,Rv=!0,jA=function(n,e){he(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Lo.logLevel=Nt.VERBOSE,Ir=Lo.log.bind(Lo),e&&Ip.set("logging_enabled",!0)):typeof n=="function"?Ir=n:(Ir=null,Ip.remove("logging_enabled"))},vn=function(...n){if(Rv===!0&&(Rv=!1,Ir===null&&Ip.get("logging_enabled")===!0&&jA(!0)),Ir){let e=Rl.apply(null,n);Ir(e)}},Il=function(n){return function(...e){vn(n,...e)}},Pp=function(...n){let e="FIREBASE INTERNAL ERROR: "+Rl(...n);Lo.error(e)},Ss=function(...n){let e=`FIREBASE FATAL ERROR: ${Rl(...n)}`;throw Lo.error(e),new Error(e)},Hn=function(...n){let e="FIREBASE WARNING: "+Rl(...n);Lo.warn(e)},QA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Hn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xu=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},eC=function(n){if(Xi()||document.readyState==="complete")n();else{let e=!1,t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Oo="[MIN_NAME]",Pr="[MAX_NAME]",Dr=function(n,e){if(n===e)return 0;if(n===Oo||e===Pr)return-1;if(e===Oo||n===Pr)return 1;{let t=Iv(n),i=Iv(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},tC=function(n,e){return n===e?0:n<e?-1:1},dl=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+an(e))},wm=function(n){if(typeof n!="object"||n===null)return an(n);let e=[];for(let i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=an(e[i]),t+=":",t+=wm(n[e[i]]);return t+="}",t},cx=function(n,e){let t=n.length;if(t<=e)return[n];let i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function xn(n,e){for(let t in n)n.hasOwnProperty(t)&&e(t,n[t])}var hx=function(n){he(!Xu(n),"Invalid JSON number");let e=11,t=52,i=(1<<e-1)-1,s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));let c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();let h=c.join(""),u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},nC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sC(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");let i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}var rC=new RegExp("^-?(0*)\\d{1,10}$"),oC=-2147483648,aC=2147483647,Iv=function(n){if(rC.test(n)){let e=Number(n);if(e>=oC&&e<=aC)return e}return null},Vo=function(n){try{n()}catch(e){setTimeout(()=>{let t=e.stack||"";throw Hn("Exception was thrown by user callback.",t),e},Math.floor(0))}},lC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gl=function(n,e){let t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};var Np=class{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Mv(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Hn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}};var Lp=class{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(vn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Hn(e)}},Ws=class{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};Ws.OWNER="owner";var xu="5",ux="v",dx="s",fx="r",px="f",mx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gx="ls",_x="p",Dp="ac",vx="websocket",xx="long_polling";var yu=class{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}};function cC(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function yx(n,e,t){he(typeof e=="string","typeof type must == string"),he(typeof t=="object","typeof params must == object");let i;if(e===vx)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===xx)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);cC(n)&&(t.ns=n.namespace);let s=[];return xn(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}var Op=class{constructor(){this.counters_={}}incrementCounter(e,t=1){Ii(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return J_(this.counters_)}};var Sp={},Mp={};function Tm(n){let e=n.toString();return Sp[e]||(Sp[e]=new Op),Sp[e]}function hC(n,e){let t=n.toString();return Mp[t]||(Mp[t]=e()),Mp[t]}var Fp=class{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Vo(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}};var Pv="start",uC="close",dC="pLPCommand",fC="pRTLPCB",Sx="id",Mx="pw",bx="ser",pC="cb",mC="seg",gC="ts",_C="d",vC="dframe",Ex=1870,wx=30,xC=Ex-wx,yC=25e3,SC=3e4,Up=class n{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Il(e),this.stats_=Tm(t),this.urlFn=l=>(this.appCheckToken&&(l[Dp]=this.appCheckToken),yx(t,xx,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Fp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(SC)),eC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bp((...r)=>{let[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Pv)this.id=a,this.password=l;else if(o===uC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{let[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);let i={};i[Pv]="t",i[bx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[pC]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ux]=xu,this.transportSessionId&&(i[dx]=this.transportSessionId),this.lastSessionId&&(i[gx]=this.lastSessionId),this.applicationId&&(i[_x]=this.applicationId),this.appCheckToken&&(i[Dp]=this.appCheckToken),typeof location<"u"&&location.hostname&&mx.test(location.hostname)&&(i[fx]=px);let s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){n.forceAllow_=!0}static forceDisallow(){n.forceDisallow_=!0}static isAvailable(){return Xi()?!1:n.forceAllow_?!0:!n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nC()&&!iC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=an(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=ip(t),s=cx(i,xC);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Xi())return;this.myDisconnFrame=document.createElement("iframe");let i={};i[vC]="t",i[Sx]=e,i[Mx]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=an(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}},Bp=class n{constructor(e,t,i,s){if(this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0,Xi())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=ZA(),window[dC+this.uniqueCallbackIdentifier]=e,window[fC+this.uniqueCallbackIdentifier]=t,this.myIFrame=n.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');let o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){vn("frame writing exception"),a.stack&&vn(a.stack),vn(a)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||vn("No IE domain setting required")}catch{let i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;let e={};e[Sx]=this.myID,e[Mx]=this.myPW,e[bx]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wx+i.length<=Ex;){let o=this.pendingSegs.shift();i=i+"&"+mC+s+"="+o.seg+"&"+gC+s+"="+o.ts+"&"+_C+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(yC)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){Xi()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){let s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{vn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}};var MC=16384,bC=45e3,Su=null;typeof MozWebSocket<"u"?Su=MozWebSocket:typeof WebSocket<"u"&&(Su=WebSocket);var ys=class n{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Il(this.connId),this.stats_=Tm(t),this.connURL=n.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){let o={};return o[ux]=xu,!Xi()&&typeof location<"u"&&location.hostname&&mx.test(location.hostname)&&(o[fx]=px),t&&(o[dx]=t),i&&(o[gx]=i),s&&(o[Dp]=s),r&&(o[_x]=r),yx(e,vx,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cr.set("previous_websocket_failure",!0);try{let i;if(Xi()){let s=this.nodeAdmin?"AdminNode":"Node";i={headers:{"User-Agent":`Firebase/${xu}/${Em}/${process.platform}/${s}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(i.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(i.headers["X-Firebase-AppCheck"]=this.appCheckToken);let r=process.env,o=this.connURL.indexOf("wss://")===0?r.HTTPS_PROXY||r.https_proxy:r.HTTP_PROXY||r.http_proxy;o&&(i.proxy={origin:o})}this.mySock=new Su(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");let s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");let s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){n.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){let t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Su!==null&&!n.forceDisallow_}static previouslyFailed(){return Cr.isInMemoryStorage||Cr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let t=this.frames.join("");this.frames=null;let i=Co(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(he(this.frames===null,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{let i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();let t=an(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=cx(t,MC);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bC))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}};ys.responsesRequiredToBeHealthy=2;ys.healthyTimeout=3e4;var Mu=class n{static get ALL_TRANSPORTS(){return[Up,ys]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){let t=ys&&ys.isAvailable(),i=t&&!ys.previouslyFailed();if(e.webSocketOnly&&(t||Hn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ys];else{let s=this.transports_=[];for(let r of n.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);n.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};Mu.globalTransportInitialized_=!1;var EC=6e4,wC=5e3,TC=10*1024,AC=100*1024,bp="t",Nv="d",CC="s",Lv="r",RC="e",Dv="o",Ov="a",Fv="n",Uv="p",IC="h",kp=class{constructor(e,t,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Il("c:"+this.id+":"),this.transportManager_=new Mu(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));let s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=gl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>AC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){let t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bp in e){let t=e[bp];t===Ov?this.upgradeIfSecondaryHealthy_():t===Lv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Dv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=dl("t",e),i=dl("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Uv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ov,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=dl("t",e),i=dl("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=dl(bp,e);if(Nv in e){let i=e[Nv];if(t===IC){let s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Fv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===CC?this.onConnectionShutdown_(i):t===Lv?this.onReset_(i):t===RC?Pp("Server Error: "+i):t===Dv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Pp("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),xu!==i&&Hn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),gl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(EC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Uv,d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}};var bu=class{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}};var Eu=class{constructor(e){this.allowedEvents_=e,this.listeners_={},he(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});let s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);let s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){he(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}};var wu=class n extends Eu{static getInstance(){return new n}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return he(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}};var Bv=32,kv=768,At=class{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}};function yt(){return new At("")}function it(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ys(n){return n.pieces_.length-n.pieceNum_}function Lt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new At(n.pieces_,e)}function Am(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function PC(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function yl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Tx(n){if(n.pieceNum_>=n.pieces_.length)return null;let e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new At(e,0)}function Yt(n,e){let t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof At)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{let i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new At(t,0)}function ot(n){return n.pieceNum_>=n.pieces_.length}function zn(n,e){let t=it(n),i=it(e);if(t===null)return e;if(t===i)return zn(Lt(n),Lt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function NC(n,e){let t=yl(n,0),i=yl(e,0);for(let s=0;s<t.length&&s<i.length;s++){let r=Dr(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function Cm(n,e){if(Ys(n)!==Ys(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function mi(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ys(n)>Ys(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}var zp=class{constructor(e,t){this.errorPrefix_=t,this.parts_=yl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ll(this.parts_[i]);Ax(this)}};function LC(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ll(e),Ax(n)}function DC(n){let e=n.parts_.pop();n.byteLength_-=ll(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ax(n){if(n.byteLength_>kv)throw new Error(n.errorPrefix_+"has a key path longer than "+kv+" bytes ("+n.byteLength_+").");if(n.parts_.length>Bv)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bv+") or object contains a cycle "+Ar(n))}function Ar(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}var Hp=class n extends Eu{static getInstance(){return new n}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return he(e==="visible","Unknown event type: "+e),[this.visible_]}};var fl=1e3,OC=300*1e3,zv=30*1e3,FC=1.3,UC=3e4,BC="server_kill",Hv=3,Nr=class n extends bu{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=n.nextPersistentConnectionId_++,this.log_=Il("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fl,this.maxReconnectDelay_=OC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Xi())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){let s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(an(r)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();let t=new Zn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{let a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;let r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();let r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),he(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");let a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){let t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);let r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{let l=a.d,c=a.s;n.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ii(e,"w")){let i=Er(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){let s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Hn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=sv(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{let r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){let i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),he(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);let r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){let r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();let o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;let a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){let r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+an(e));let t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Pp("Unrecognized action received from server: "+an(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UC&&(this.reconnectDelay_=fl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_),t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*FC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+n.nextConnectionId_++,r=this.lastSessionId,o=!1,a=null,l=function(){a?a.close():(o=!0,i())},c=function(u){he(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};let h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?vn("getToken() completed but was canceled"):(vn("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new kp(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{Hn(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(BC)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Hn(u),l())}}}interrupt(e){vn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){vn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pu(this.interruptReasons_)&&(this.reconnectDelay_=fl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>wm(r)).join("$"):i="default";let s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){let i=new At(e).toString(),s;if(this.listens.has(i)){let r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){vn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hv&&(this.reconnectDelay_=zv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){vn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(let e of this.listens.values())for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";Xi()&&(this.repoInfo_.nodeAdmin?t="admin_node":t="node"),e["sdk."+t+"."+Em.replace(/\./g,"-")]=1,rp()?e["framework.cordova"]=1:ev()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=wu.getInstance().currentlyOnline();return pu(this.interruptReasons_)&&e}};Nr.nextPersistentConnectionId_=0;Nr.nextConnectionId_=0;var at=class n{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new n(e,t)}};var Fo=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let i=new at(Oo,e),s=new at(Oo,t);return this.compare(i,s)!==0}minPost(){return at.MIN}};var vu,Tu=class extends Fo{static get __EMPTY_NODE(){return vu}static set __EMPTY_NODE(e){vu=e}compare(e,t){return Dr(e.name,t.name)}isDefinedOn(e){throw br("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return at.MIN}maxPost(){return new at(Pr,vu)}makePost(e,t){return he(typeof e=="string","KeyIndex indexValue must always be a string."),new at(e,vu)}toString(){return".key"}},Do=new Tu;var No=class{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},kn=class n{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??n.RED,this.left=s??gi.EMPTY_NODE,this.right=r??gi.EMPTY_NODE}copy(e,t,i,s,r){return new n(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this,r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return gi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return gi.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};kn.RED=!0;kn.BLACK=!1;var Gp=class{copy(e,t,i,s,r){return this}insert(e,t,i){return new kn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}},gi=class n{constructor(e,t=n.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new n(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,kn.BLACK,null,null))}remove(e){return new n(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,kn.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new No(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new No(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new No(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new No(this.root_,null,this.comparator_,!0,e)}};gi.EMPTY_NODE=new Gp;function kC(n,e){return Dr(n.name,e.name)}function Rm(n,e){return Dr(n,e)}var Vp;function zC(n){Vp=n}var Cx=function(n){return typeof n=="number"?"number:"+hx(n):"string:"+n},Rx=function(n){if(n.isLeafNode()){let e=n.val();he(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ii(e,".sv"),"Priority must be a string or number.")}else he(n===Vp||n.isEmpty(),"priority of unexpected type.");he(n===Vp||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};var Gv,Ms=class n{static set __childrenNodeConstructor(e){Gv=e}static get __childrenNodeConstructor(){return Gv}constructor(e,t=n.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rx(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new n(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:n.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ot(e)?this:it(e)===".priority"?this.priorityNode_:n.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:n.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let i=it(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(he(i!==".priority"||Ys(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,n.__childrenNodeConstructor.EMPTY_NODE.updateChild(Lt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cx(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":",t==="number"?e+=hx(this.value_):e+=this.value_,this.lazyHash_=lx(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===n.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof n.__childrenNodeConstructor?-1:(he(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,i=typeof this.value_,s=n.VALUE_TYPE_ORDER.indexOf(t),r=n.VALUE_TYPE_ORDER.indexOf(i);return he(s>=0,"Unknown leaf type: "+t),he(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){let t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}};Ms.VALUE_TYPE_ORDER=["object","boolean","number","string"];var Ix,Px;function HC(n){Ix=n}function GC(n){Px=n}var Wp=class extends Fo{compare(e,t){let i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Dr(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return at.MIN}maxPost(){return new at(Pr,new Ms("[PRIORITY-POST]",Px))}makePost(e,t){let i=Ix(e);return new at(t,new Ms("[PRIORITY-POST]",i))}toString(){return".priority"}},$t=new Wp;var VC=Math.log(2),Xp=class{constructor(e){let t=r=>parseInt(Math.log(r)/VC,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;let s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}},Au=function(n,e,t,i){n.sort(e);let s=function(l,c){let h=c-l,u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new kn(d,u.node,kn.BLACK,null,null);{let f=parseInt(h/2,10)+l,p=s(l,f),_=s(f+1,c);return u=n[f],d=t?t(u):u,new kn(d,u.node,kn.BLACK,p,_)}},r=function(l){let c=null,h=null,u=n.length,d=function(p,_){let m=u-p,g=u;u-=p;let x=s(m+1,g),S=n[m],M=t?t(S):S;f(new kn(M,S.node,_,null,x))},f=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<l.count;++p){let _=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));_?d(m,kn.BLACK):(d(m,kn.BLACK),d(m,kn.RED))}return h},o=new Xp(n.length),a=r(o);return new gi(i||e,a)};var Ep,Po={},Uo=class n{static get Default(){return he(Po&&$t,"ChildrenNode.ts has not been loaded"),Ep=Ep||new n({".priority":Po},{".priority":$t}),Ep}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=Er(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof gi?t:null}hasIndex(e){return Ii(this.indexSet_,e.toString())}addIndex(e,t){he(e!==Do,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],s=!1,r=t.getIterator(at.Wrap),o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Au(i,e.getCompare()):a=Po;let l=e.toString(),c={...this.indexSet_};c[l]=e;let h={...this.indexes_};return h[l]=a,new n(h,c)}addToIndexes(e,t){let i=al(this.indexes_,(s,r)=>{let o=Er(this.indexSet_,r);if(he(o,"Missing index implementation for "+r),s===Po)if(o.isDefinedOn(e.node)){let a=[],l=t.getIterator(at.Wrap),c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Au(a,o.getCompare())}else return Po;else{let a=t.get(e.name),l=s;return a&&(l=l.remove(new at(e.name,a))),l.insert(e,e.node)}});return new n(i,this.indexSet_)}removeFromIndexes(e,t){let i=al(this.indexes_,s=>{if(s===Po)return s;{let r=t.get(e.name);return r?s.remove(new at(e.name,r)):s}});return new n(i,this.indexSet_)}};var pl,Je=class n{static get EMPTY_NODE(){return pl||(pl=new n(new gi(Rm),null,Uo.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Rx(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pl}updatePriority(e){return this.children_.isEmpty()?this:new n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{let t=this.children_.get(e);return t===null?pl:t}}getChild(e){let t=it(e);return t===null?this:this.getImmediateChild(t).getChild(Lt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(he(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{let i=new at(e,t),s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));let o=s.isEmpty()?pl:this.priorityNode_;return new n(s,o,r)}}updateChild(e,t){let i=it(e);if(i===null)return t;{he(it(e)!==".priority"||Ys(e)===1,".priority must be the last token in a path");let s=this.getImmediateChild(i).updateChild(Lt(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},i=0,s=0,r=!0;if(this.forEachChild($t,(o,a)=>{t[o]=a.val(e),i++,r&&n.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){let o=[];for(let a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cx(this.getPriority().val())+":"),this.forEachChild($t,(t,i)=>{let s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":lx(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){let s=this.resolveIndex_(i);if(s){let r=s.getPredecessorKey(new at(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){let t=this.resolveIndex_(e);if(t){let i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){let t=this.getFirstChildName(e);return t?new at(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(t){let i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){let t=this.getLastChildName(e);return t?new at(t,this.children_.get(t)):null}forEachChild(e,t){let i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{let s=this.children_.getIteratorFrom(e.name,at.Wrap),r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{let s=this.children_.getReverseIteratorFrom(e.name,at.Wrap),r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pl?-1:0}withIndex(e){if(e===Do||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Do||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{let t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){let i=this.getIterator($t),s=t.getIterator($t),r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Do?null:this.indexMap_.get(e.toString())}};Je.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var qp=class extends Je{constructor(){super(new gi(Rm),Je.EMPTY_NODE,Uo.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Je.EMPTY_NODE}isEmpty(){return!1}},Pl=new qp;Object.defineProperties(at,{MIN:{value:new at(Oo,Je.EMPTY_NODE)},MAX:{value:new at(Pr,Pl)}});Tu.__EMPTY_NODE=Je.EMPTY_NODE;Ms.__childrenNodeConstructor=Je;zC(Pl);GC(Pl);var WC=!0;function jt(n,e=null){if(n===null)return Je.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),he(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){let t=n;return new Ms(t,jt(e))}if(!(n instanceof Array)&&WC){let t=[],i=!1;if(xn(n,(o,a)=>{if(o.substring(0,1)!=="."){let l=jt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new at(o,l)))}}),t.length===0)return Je.EMPTY_NODE;let r=Au(t,kC,o=>o.name,Rm);if(i){let o=Au(t,$t.getCompare());return new Je(r,jt(e),new Uo({".priority":o},{".priority":$t}))}else return new Je(r,jt(e),Uo.Default)}else{let t=Je.EMPTY_NODE;return xn(n,(i,s)=>{if(Ii(n,i)&&i.substring(0,1)!=="."){let r=jt(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(jt(e))}}HC(jt);var Yp=class extends Fo{constructor(e){super(),this.indexPath_=e,he(!ot(e)&&it(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Dr(e.name,t.name):r}makePost(e,t){let i=jt(e),s=Je.EMPTY_NODE.updateChild(this.indexPath_,i);return new at(t,s)}maxPost(){let e=Je.EMPTY_NODE.updateChild(this.indexPath_,Pl);return new at(Pr,e)}toString(){return yl(this.indexPath_,0).join("/")}};var $p=class extends Fo{compare(e,t){let i=e.node.compareTo(t.node);return i===0?Dr(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return at.MIN}maxPost(){return at.MAX}makePost(e,t){let i=jt(e);return new at(t,i)}toString(){return".value"}},XC=new $p;function Nx(n){return{type:"value",snapshotNode:n}}function Bo(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Sl(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ml(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function qC(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}var bl=class{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){he(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Sl(t,a)):he(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bo(t,i)):o.trackChildChange(Ml(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild($t,(s,r)=>{t.hasChild(s)||i.trackChildChange(Sl(s,r))}),t.isLeafNode()||t.forEachChild($t,(s,r)=>{if(e.hasChild(s)){let o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Ml(s,r,o))}else i.trackChildChange(Bo(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Je.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}};var Cu=class n{constructor(e){this.indexedFilter_=new bl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=n.getStartPost_(e),this.endPost_=n.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new at(t,i))||(i=Je.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=Je.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Je.EMPTY_NODE);let r=this;return t.forEachChild($t,(o,a)=>{r.matches(new at(o,a))||(s=s.updateImmediateChild(o,Je.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}};var Jp=class{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{let i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{let i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Cu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new at(t,i))||(i=Je.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=Je.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Je.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){let a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Je.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){let a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Je.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){let u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();let a=e;he(a.numChildren()===this.limit_,"");let l=new at(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){let u=a.getImmediateChild(t),d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);let f=d==null?1:o(d,l);if(h&&!i.isEmpty()&&f>=0)return r?.trackChildChange(Ml(t,i,u)),a.updateImmediateChild(t,i);{r?.trackChildChange(Sl(t,u));let _=a.updateImmediateChild(t,Je.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r?.trackChildChange(Bo(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Sl(c.name,c.node)),r.trackChildChange(Bo(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,Je.EMPTY_NODE)):e}};var Kp=class n{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$t}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Oo}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$t}copy(){let e=new n;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}};function YC(n){return n.loadsAllData()?new bl(n.getIndex()):n.hasLimit()?new Jp(n):new Cu(n)}function Vv(n){let e={};if(n.isDefault())return e;let t;if(n.index_===$t?t="$priority":n.index_===XC?t="$value":n.index_===Do?t="$key":(he(n.index_ instanceof Yp,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=an(t),n.startSet_){let i=n.startAfterSet_?"startAfter":"startAt";e[i]=an(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+an(n.indexStartName_))}if(n.endSet_){let i=n.endBeforeSet_?"endBefore":"endAt";e[i]=an(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+an(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Wv(n){let e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==$t&&(e.i=n.index_.toString()),e}var Zp=class n extends bu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(he(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Il("p:rest:"),this.listens_={}}listen(e,t,i,s){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let o=n.getListenId_(e,i),a={};this.listens_[o]=a;let l=Vv(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),Er(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){let i=n.getListenId_(e,t);delete this.listens_[i]}get(e){let t=Vv(e._queryParams),i=e._path.toString(),s=new Zn;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);let o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ov(t);this.log_("Sending REST request for "+o);let a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Co(a.responseText)}catch{Hn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Hn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}};var jp=class{constructor(){this.rootNode_=Je.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}};function Ru(){return{value:null,children:new Map}}function Wo(n,e,t){if(ot(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{let i=it(e);n.children.has(i)||n.children.set(i,Ru());let s=n.children.get(i);e=Lt(e),Wo(s,e,t)}}function Qp(n,e){if(ot(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{let t=n.value;return n.value=null,t.forEachChild($t,(i,s)=>{Wo(n,new At(i),s)}),Qp(n,e)}}else if(n.children.size>0){let t=it(e);return e=Lt(e),n.children.has(t)&&Qp(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function em(n,e,t){n.value!==null?t(e,n.value):$C(n,(i,s)=>{let r=new At(e.toString()+"/"+i);em(s,r,t)})}function $C(n,e){n.children.forEach((t,i)=>{e(i,t)})}var tm=class{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t={...e};return this.last_&&xn(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}};var Xv=10*1e3,JC=30*1e3,KC=300*1e3,nm=class{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new tm(e);let i=Xv+(JC-Xv)*Math.random();gl(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){let e=this.statsListener_.get(),t={},i=!1;xn(e,(s,r)=>{r>0&&Ii(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),gl(this.reportStats_.bind(this),Math.floor(Math.random()*2*KC))}};var Pi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pi||(Pi={}));function Im(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Pm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Nm(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}var im=class n{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Pi.ACK_USER_WRITE,this.source=Im()}operationForChild(e){if(ot(this.path)){if(this.affectedTree.value!=null)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new At(e));return new n(yt(),t,this.revert)}}else return he(it(this.path)===e,"operationForChild called for unrelated child."),new n(Lt(this.path),this.affectedTree,this.revert)}};var Iu=class n{constructor(e,t){this.source=e,this.path=t,this.type=Pi.LISTEN_COMPLETE}operationForChild(e){return ot(this.path)?new n(this.source,yt()):new n(this.source,Lt(this.path))}};var ko=class n{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Pi.OVERWRITE}operationForChild(e){return ot(this.path)?new n(this.source,yt(),this.snap.getImmediateChild(e)):new n(this.source,Lt(this.path),this.snap)}};var El=class n{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Pi.MERGE}operationForChild(e){if(ot(this.path)){let t=this.children.subtree(new At(e));return t.isEmpty()?null:t.value?new ko(this.source,yt(),t.value):new n(this.source,yt(),t)}else return he(it(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new n(this.source,Lt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}};var $i=class{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ot(e))return this.isFullyInitialized()&&!this.filtered_;let t=it(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}};var sm=class{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}};function ZC(n,e,t,i){let s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(qC(o.childName,o.snapshotNode))}),ml(n,s,"child_removed",e,i,t),ml(n,s,"child_added",e,i,t),ml(n,s,"child_moved",r,i,t),ml(n,s,"child_changed",e,i,t),ml(n,s,"value",e,i,t),s}function ml(n,e,t,i,s,r){let o=i.filter(a=>a.type===t);o.sort((a,l)=>QC(n,a,l)),o.forEach(a=>{let l=jC(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function jC(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function QC(n,e,t){if(e.childName==null||t.childName==null)throw br("Should only compare child_ events.");let i=new at(e.childName,e.snapshotNode),s=new at(t.childName,t.snapshotNode);return n.index_.compare(i,s)}function qu(n,e){return{eventCache:n,serverCache:e}}function _l(n,e,t,i){return qu(new $i(e,t,i),n.serverCache)}function Lx(n,e,t,i){return qu(n.eventCache,new $i(e,t,i))}function Pu(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Lr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}var wp,eR=()=>(wp||(wp=new gi(tC)),wp),Gn=class n{static fromObject(e){let t=new n(null);return xn(e,(i,s)=>{t=t.set(new At(i),s)}),t}constructor(e,t=eR()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:yt(),value:this.value};if(ot(e))return null;{let i=it(e),s=this.children.get(i);if(s!==null){let r=s.findRootMostMatchingPathAndValue(Lt(e),t);return r!=null?{path:Yt(new At(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ot(e))return this;{let t=it(e),i=this.children.get(t);return i!==null?i.subtree(Lt(e)):new n(null)}}set(e,t){if(ot(e))return new n(t,this.children);{let i=it(e),r=(this.children.get(i)||new n(null)).set(Lt(e),t),o=this.children.insert(i,r);return new n(this.value,o)}}remove(e){if(ot(e))return this.children.isEmpty()?new n(null):new n(null,this.children);{let t=it(e),i=this.children.get(t);if(i){let s=i.remove(Lt(e)),r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new n(null):new n(this.value,r)}else return this}}get(e){if(ot(e))return this.value;{let t=it(e),i=this.children.get(t);return i?i.get(Lt(e)):null}}setTree(e,t){if(ot(e))return t;{let i=it(e),r=(this.children.get(i)||new n(null)).setTree(Lt(e),t),o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new n(this.value,o)}}fold(e){return this.fold_(yt(),e)}fold_(e,t){let i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Yt(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,yt(),t)}findOnPath_(e,t,i){let s=this.value?i(t,this.value):!1;if(s)return s;if(ot(e))return null;{let r=it(e),o=this.children.get(r);return o?o.findOnPath_(Lt(e),Yt(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,yt(),t)}foreachOnPath_(e,t,i){if(ot(e))return this;{this.value&&i(t,this.value);let s=it(e),r=this.children.get(s);return r?r.foreachOnPath_(Lt(e),Yt(t,s),i):new n(null)}}foreach(e){this.foreach_(yt(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Yt(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}};var Ni=class n{constructor(e){this.writeTree_=e}static empty(){return new n(new Gn(null))}};function vl(n,e,t){if(ot(e))return new Ni(new Gn(t));{let i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){let s=i.path,r=i.value,o=zn(s,e);return r=r.updateChild(o,t),new Ni(n.writeTree_.set(s,r))}else{let s=new Gn(t),r=n.writeTree_.setTree(e,s);return new Ni(r)}}}function rm(n,e,t){let i=n;return xn(t,(s,r)=>{i=vl(i,Yt(e,s),r)}),i}function qv(n,e){if(ot(e))return Ni.empty();{let t=n.writeTree_.setTree(e,new Gn(null));return new Ni(t)}}function om(n,e){return Or(n,e)!=null}function Or(n,e){let t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(zn(t.path,e)):null}function Yv(n){let e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild($t,(i,s)=>{e.push(new at(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new at(i,s.value))}),e}function Xs(n,e){if(ot(e))return n;{let t=Or(n,e);return t!=null?new Ni(new Gn(t)):new Ni(n.writeTree_.subtree(e))}}function am(n){return n.writeTree_.isEmpty()}function zo(n,e){return Dx(yt(),n.writeTree_,e)}function Dx(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(he(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Dx(Yt(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Yt(n,".priority"),i)),t}}function Yu(n,e){return Bx(e,n)}function tR(n,e,t,i,s){he(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=vl(n.visibleWrites,e,t)),n.lastWriteId=i}function nR(n,e,t,i){he(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=rm(n.visibleWrites,e,t),n.lastWriteId=i}function iR(n,e){for(let t=0;t<n.allWrites.length;t++){let i=n.allWrites[t];if(i.writeId===e)return i}return null}function sR(n,e){let t=n.allWrites.findIndex(a=>a.writeId===e);he(t>=0,"removeWrite called with nonexistent writeId.");let i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){let a=n.allWrites[o];a.visible&&(o>=t&&rR(a,i.path)?s=!1:mi(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return oR(n),!0;if(i.snap)n.visibleWrites=qv(n.visibleWrites,i.path);else{let a=i.children;xn(a,l=>{n.visibleWrites=qv(n.visibleWrites,Yt(i.path,l))})}return!0}else return!1}function rR(n,e){if(n.snap)return mi(n.path,e);for(let t in n.children)if(n.children.hasOwnProperty(t)&&mi(Yt(n.path,t),e))return!0;return!1}function oR(n){n.visibleWrites=Ox(n.allWrites,aR,yt()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function aR(n){return n.visible}function Ox(n,e,t){let i=Ni.empty();for(let s=0;s<n.length;++s){let r=n[s];if(e(r)){let o=r.path,a;if(r.snap)mi(t,o)?(a=zn(t,o),i=vl(i,a,r.snap)):mi(o,t)&&(a=zn(o,t),i=vl(i,yt(),r.snap.getChild(a)));else if(r.children){if(mi(t,o))a=zn(t,o),i=rm(i,a,r.children);else if(mi(o,t))if(a=zn(o,t),ot(a))i=rm(i,yt(),r.children);else{let l=Er(r.children,it(a));if(l){let c=l.getChild(Lt(a));i=vl(i,yt(),c)}}}else throw br("WriteRecord should have .snap or .children")}}return i}function Fx(n,e,t,i,s){if(!i&&!s){let r=Or(n.visibleWrites,e);if(r!=null)return r;{let o=Xs(n.visibleWrites,e);if(am(o))return t;if(t==null&&!om(o,yt()))return null;{let a=t||Je.EMPTY_NODE;return zo(o,a)}}}else{let r=Xs(n.visibleWrites,e);if(!s&&am(r))return t;if(!s&&t==null&&!om(r,yt()))return null;{let o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(mi(c.path,e)||mi(e,c.path))},a=Ox(n.allWrites,o,e),l=t||Je.EMPTY_NODE;return zo(a,l)}}}function lR(n,e,t){let i=Je.EMPTY_NODE,s=Or(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild($t,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){let r=Xs(n.visibleWrites,e);return t.forEachChild($t,(o,a)=>{let l=zo(Xs(r,new At(o)),a);i=i.updateImmediateChild(o,l)}),Yv(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{let r=Xs(n.visibleWrites,e);return Yv(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function cR(n,e,t,i,s){he(i||s,"Either existingEventSnap or existingServerSnap must exist");let r=Yt(e,t);if(om(n.visibleWrites,r))return null;{let o=Xs(n.visibleWrites,r);return am(o)?s.getChild(t):zo(o,s.getChild(t))}}function hR(n,e,t,i){let s=Yt(e,t),r=Or(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){let o=Xs(n.visibleWrites,s);return zo(o,i.getNode().getImmediateChild(t))}else return null}function uR(n,e){return Or(n.visibleWrites,e)}function dR(n,e,t,i,s,r,o){let a,l=Xs(n.visibleWrites,e),c=Or(l,yt());if(c!=null)a=c;else if(t!=null)a=zo(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){let h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),f=d.getNext();for(;f&&h.length<s;)u(f,i)!==0&&h.push(f),f=d.getNext();return h}else return[]}function fR(){return{visibleWrites:Ni.empty(),allWrites:[],lastWriteId:-1}}function Nu(n,e,t,i){return Fx(n.writeTree,n.treePath,e,t,i)}function Lm(n,e){return lR(n.writeTree,n.treePath,e)}function $v(n,e,t,i){return cR(n.writeTree,n.treePath,e,t,i)}function Lu(n,e){return uR(n.writeTree,Yt(n.treePath,e))}function pR(n,e,t,i,s,r){return dR(n.writeTree,n.treePath,e,t,i,s,r)}function Dm(n,e,t){return hR(n.writeTree,n.treePath,e,t)}function Ux(n,e){return Bx(Yt(n.treePath,e),n.writeTree)}function Bx(n,e){return{treePath:n,writeTree:e}}var lm=class{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,i=e.childName;he(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),he(i!==".priority","Only non-priority child changes can be tracked.");let s=this.changeMap.get(i);if(s){let r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Ml(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Sl(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Bo(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Ml(i,e.snapshotNode,s.oldSnap));else throw br("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}};var cm=class{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}},kx=new cm,wl=class{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let i=this.optCompleteServerCache_!=null?new $i(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dm(this.writes_,e,i)}}getChildAfterChild(e,t,i){let s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Lr(this.viewCache_),r=pR(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}};function mR(n){return{filter:n}}function gR(n,e){he(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),he(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function _R(n,e,t,i,s){let r=new lm,o,a;if(t.type===Pi.OVERWRITE){let c=t;c.source.fromUser?o=hm(n,e,c.path,c.snap,i,s,r):(he(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ot(c.path),o=Du(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===Pi.MERGE){let c=t;c.source.fromUser?o=xR(n,e,c.path,c.children,i,s,r):(he(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=um(n,e,c.path,c.children,i,s,a,r))}else if(t.type===Pi.ACK_USER_WRITE){let c=t;c.revert?o=MR(n,e,c.path,i,s,r):o=yR(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Pi.LISTEN_COMPLETE)o=SR(n,e,t.path,i,r);else throw br("Unknown operation type: "+t.type);let l=r.getChanges();return vR(e,o,l),{viewCache:o,changes:l}}function vR(n,e,t){let i=e.eventCache;if(i.isFullyInitialized()){let s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Pu(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Nx(Pu(e)))}}function zx(n,e,t,i,s,r){let o=e.eventCache;if(Lu(i,t)!=null)return e;{let a,l;if(ot(t))if(he(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){let c=Lr(e),h=c instanceof Je?c:Je.EMPTY_NODE,u=Lm(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{let c=Nu(i,Lr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{let c=it(t);if(c===".priority"){he(Ys(t)===1,"Can't have a priority with additional path components");let h=o.getNode();l=e.serverCache.getNode();let u=$v(i,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{let h=Lt(t),u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();let d=$v(i,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Dm(i,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return _l(e,a,o.isFullyInitialized()||ot(t),n.filter.filtersNodes())}}function Du(n,e,t,i,s,r,o,a){let l=e.serverCache,c,h=o?n.filter:n.filter.getIndexedFilter();if(ot(t))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){let f=l.getNode().updateChild(t,i);c=h.updateFullNode(l.getNode(),f,null)}else{let f=it(t);if(!l.isCompleteForPath(t)&&Ys(t)>1)return e;let p=Lt(t),m=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=h.updatePriority(l.getNode(),m):c=h.updateChild(l.getNode(),f,m,p,kx,null)}let u=Lx(e,c,l.isFullyInitialized()||ot(t),h.filtersNodes()),d=new wl(s,u,r);return zx(n,u,t,s,d,a)}function hm(n,e,t,i,s,r,o){let a=e.eventCache,l,c,h=new wl(s,e,r);if(ot(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=_l(e,c,!0,n.filter.filtersNodes());else{let u=it(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=_l(e,c,a.isFullyInitialized(),a.isFiltered());else{let d=Lt(t),f=a.getNode().getImmediateChild(u),p;if(ot(d))p=i;else{let _=h.getCompleteChild(u);_!=null?Am(d)===".priority"&&_.getChild(Tx(d)).isEmpty()?p=_:p=_.updateChild(d,i):p=Je.EMPTY_NODE}if(f.equals(p))l=e;else{let _=n.filter.updateChild(a.getNode(),u,p,d,h,o);l=_l(e,_,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Jv(n,e){return n.eventCache.isCompleteForChild(e)}function xR(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{let h=Yt(t,l);Jv(e,it(h))&&(a=hm(n,a,h,c,s,r,o))}),i.foreach((l,c)=>{let h=Yt(t,l);Jv(e,it(h))||(a=hm(n,a,h,c,s,r,o))}),a}function Kv(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function um(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ot(t)?c=i:c=new Gn(null).setTree(t,i);let h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){let f=e.serverCache.getNode().getImmediateChild(u),p=Kv(n,f,d);l=Du(n,l,new At(u),p,s,r,o,a)}}),c.children.inorderTraversal((u,d)=>{let f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){let p=e.serverCache.getNode().getImmediateChild(u),_=Kv(n,p,d);l=Du(n,l,new At(u),_,s,r,o,a)}}),l}function yR(n,e,t,i,s,r,o){if(Lu(s,t)!=null)return e;let a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(ot(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Du(n,e,t,l.getNode().getChild(t),s,r,a,o);if(ot(t)){let c=new Gn(null);return l.getNode().forEachChild(Do,(h,u)=>{c=c.set(new At(h),u)}),um(n,e,t,c,s,r,a,o)}else return e}else{let c=new Gn(null);return i.foreach((h,u)=>{let d=Yt(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),um(n,e,t,c,s,r,a,o)}}function SR(n,e,t,i,s){let r=e.serverCache,o=Lx(e,r.getNode(),r.isFullyInitialized()||ot(t),r.isFiltered());return zx(n,o,t,i,kx,s)}function MR(n,e,t,i,s,r){let o;if(Lu(i,t)!=null)return e;{let a=new wl(i,e,s),l=e.eventCache.getNode(),c;if(ot(t)||it(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Nu(i,Lr(e));else{let u=e.serverCache.getNode();he(u instanceof Je,"serverChildren would be complete if leaf node"),h=Lm(i,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{let h=it(t),u=Dm(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,Lt(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,Je.EMPTY_NODE,Lt(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Nu(i,Lr(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Lu(i,yt())!=null,_l(e,c,o,n.filter.filtersNodes())}}var dm=class{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let i=this.query_._queryParams,s=new bl(i.getIndex()),r=YC(i);this.processor_=mR(r);let o=t.serverCache,a=t.eventCache,l=s.updateFullNode(Je.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Je.EMPTY_NODE,a.getNode(),null),h=new $i(l,o.isFullyInitialized(),s.filtersNodes()),u=new $i(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=qu(u,h),this.eventGenerator_=new sm(this.query_)}get query(){return this.query_}};function bR(n){return n.viewCache_.serverCache.getNode()}function ER(n){return Pu(n.viewCache_)}function wR(n,e){let t=Lr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ot(e)&&!t.getImmediateChild(it(e)).isEmpty())?t.getChild(e):null}function Zv(n){return n.eventRegistrations_.length===0}function TR(n,e){n.eventRegistrations_.push(e)}function jv(n,e,t){let i=[];if(t){he(e==null,"A cancel should cancel all event registrations.");let s=n.query._path;n.eventRegistrations_.forEach(r=>{let o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){let o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Qv(n,e,t,i){e.type===Pi.MERGE&&e.source.queryId!==null&&(he(Lr(n.viewCache_),"We should always have a full cache before handling merges"),he(Pu(n.viewCache_),"Missing event cache, even though we have a server cache"));let s=n.viewCache_,r=_R(n.processor_,s,e,t,i);return gR(n.processor_,r.viewCache),he(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Hx(n,r.changes,r.viewCache.eventCache.getNode(),null)}function AR(n,e){let t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild($t,(r,o)=>{i.push(Bo(r,o))}),t.isFullyInitialized()&&i.push(Nx(t.getNode())),Hx(n,i,t.getNode(),e)}function Hx(n,e,t,i){let s=i?[i]:n.eventRegistrations_;return ZC(n.eventGenerator_,e,t,s)}var Ou,Fu=class{constructor(){this.views=new Map}};function CR(n){he(!Ou,"__referenceConstructor has already been defined"),Ou=n}function RR(){return he(Ou,"Reference.ts has not been loaded"),Ou}function IR(n){return n.views.size===0}function Om(n,e,t,i){let s=e.source.queryId;if(s!==null){let r=n.views.get(s);return he(r!=null,"SyncTree gave us an op for an invalid query."),Qv(r,e,t,i)}else{let r=[];for(let o of n.views.values())r=r.concat(Qv(o,e,t,i));return r}}function Gx(n,e,t,i,s){let r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Nu(t,s?i:null),l=!1;a?l=!0:i instanceof Je?(a=Lm(t,i),l=!1):(a=Je.EMPTY_NODE,l=!1);let c=qu(new $i(a,l,!1),new $i(i,s,!1));return new dm(e,c)}return o}function PR(n,e,t,i,s,r){let o=Gx(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),TR(o,t),AR(o,t)}function NR(n,e,t,i){let s=e._queryIdentifier,r=[],o=[],a=$s(n);if(s==="default")for(let[l,c]of n.views.entries())o=o.concat(jv(c,t,i)),Zv(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{let l=n.views.get(s);l&&(o=o.concat(jv(l,t,i)),Zv(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!$s(n)&&r.push(new(RR())(e._repo,e._path)),{removed:r,events:o}}function Vx(n){let e=[];for(let t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function qs(n,e){let t=null;for(let i of n.views.values())t=t||wR(i,e);return t}function Wx(n,e){if(e._queryParams.loadsAllData())return $u(n);{let i=e._queryIdentifier;return n.views.get(i)}}function Xx(n,e){return Wx(n,e)!=null}function $s(n){return $u(n)!=null}function $u(n){for(let e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}var Uu;function LR(n){he(!Uu,"__referenceConstructor has already been defined"),Uu=n}function DR(){return he(Uu,"Reference.ts has not been loaded"),Uu}var OR=1,Bu=class{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Gn(null),this.pendingWriteTree_=fR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function qx(n,e,t,i,s){return tR(n.pendingWriteTree_,e,t,i,s),s?Xo(n,new ko(Im(),e,t)):[]}function FR(n,e,t,i){nR(n.pendingWriteTree_,e,t,i);let s=Gn.fromObject(t);return Xo(n,new El(Im(),e,s))}function Vs(n,e,t=!1){let i=iR(n.pendingWriteTree_,e);if(sR(n.pendingWriteTree_,e)){let r=new Gn(null);return i.snap!=null?r=r.set(yt(),!0):xn(i.children,o=>{r=r.set(new At(o),!0)}),Xo(n,new im(i.path,r,t))}else return[]}function Nl(n,e,t){return Xo(n,new ko(Pm(),e,t))}function UR(n,e,t){let i=Gn.fromObject(t);return Xo(n,new El(Pm(),e,i))}function BR(n,e){return Xo(n,new Iu(Pm(),e))}function kR(n,e,t){let i=Um(n,t);if(i){let s=Bm(i),r=s.path,o=s.queryId,a=zn(r,e),l=new Iu(Nm(o),a);return km(n,r,l)}else return[]}function ku(n,e,t,i,s=!1){let r=e._path,o=n.syncPointTree_.get(r),a=[];if(o&&(e._queryIdentifier==="default"||Xx(o,e))){let l=NR(o,e,t,i);IR(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));let c=l.removed;if(a=l.events,!s){let h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,f)=>$s(f));if(h&&!u){let d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){let f=GR(d);for(let p=0;p<f.length;++p){let _=f[p],m=_.query,g=Kx(n,_);n.listenProvider_.startListening(xl(m),Tl(n,m),g.hashFn,g.onComplete)}}}!u&&c.length>0&&!i&&(h?n.listenProvider_.stopListening(xl(e),null):c.forEach(d=>{let f=n.queryToTagMap.get(Ju(d));n.listenProvider_.stopListening(xl(d),f)}))}VR(n,c)}return a}function Yx(n,e,t,i){let s=Um(n,i);if(s!=null){let r=Bm(s),o=r.path,a=r.queryId,l=zn(o,e),c=new ko(Nm(a),l,t);return km(n,o,c)}else return[]}function zR(n,e,t,i){let s=Um(n,i);if(s){let r=Bm(s),o=r.path,a=r.queryId,l=zn(o,e),c=Gn.fromObject(t),h=new El(Nm(a),l,c);return km(n,o,h)}else return[]}function fm(n,e,t,i=!1){let s=e._path,r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,f)=>{let p=zn(d,s);r=r||qs(f,p),o=o||$s(f)});let a=n.syncPointTree_.get(s);a?(o=o||$s(a),r=r||qs(a,yt())):(a=new Fu,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=Je.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,p)=>{let _=qs(p,yt());_&&(r=r.updateImmediateChild(f,_))}));let c=Xx(a,e);if(!c&&!e._queryParams.loadsAllData()){let d=Ju(e);he(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");let f=WR();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}let h=Yu(n.pendingWriteTree_,s),u=PR(a,e,t,h,r,l);if(!c&&!o&&!i){let d=Wx(a,e);u=u.concat(XR(n,e,d))}return u}function Fm(n,e,t){let s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{let l=zn(o,e),c=qs(a,l);if(c)return c});return Fx(s,e,r,t,!0)}function HR(n,e){let t=e._path,i=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{let u=zn(c,t);i=i||qs(h,u)});let s=n.syncPointTree_.get(t);s?i=i||qs(s,yt()):(s=new Fu,n.syncPointTree_=n.syncPointTree_.set(t,s));let r=i!=null,o=r?new $i(i,!0,!1):null,a=Yu(n.pendingWriteTree_,e._path),l=Gx(s,e,a,r?o.getNode():Je.EMPTY_NODE,r);return ER(l)}function Xo(n,e){return $x(e,n.syncPointTree_,null,Yu(n.pendingWriteTree_,yt()))}function $x(n,e,t,i){if(ot(n.path))return Jx(n,e,t,i);{let s=e.get(yt());t==null&&s!=null&&(t=qs(s,yt()));let r=[],o=it(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){let c=t?t.getImmediateChild(o):null,h=Ux(i,o);r=r.concat($x(a,l,c,h))}return s&&(r=r.concat(Om(s,n,i,t))),r}}function Jx(n,e,t,i){let s=e.get(yt());t==null&&s!=null&&(t=qs(s,yt()));let r=[];return e.children.inorderTraversal((o,a)=>{let l=t?t.getImmediateChild(o):null,c=Ux(i,o),h=n.operationForChild(o);h&&(r=r.concat(Jx(h,a,l,c)))}),s&&(r=r.concat(Om(s,n,i,t))),r}function Kx(n,e){let t=e.query,i=Tl(n,t);return{hashFn:()=>(bR(e)||Je.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?kR(n,t._path,i):BR(n,t._path);{let r=sC(s,t);return ku(n,t,null,r)}}}}function Tl(n,e){let t=Ju(e);return n.queryToTagMap.get(t)}function Ju(n){return n._path.toString()+"$"+n._queryIdentifier}function Um(n,e){return n.tagToQueryMap.get(e)}function Bm(n){let e=n.indexOf("$");return he(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new At(n.substr(0,e))}}function km(n,e,t){let i=n.syncPointTree_.get(e);he(i,"Missing sync point for query tag that we're tracking");let s=Yu(n.pendingWriteTree_,e);return Om(i,t,s,null)}function GR(n){return n.fold((e,t,i)=>{if(t&&$s(t))return[$u(t)];{let s=[];return t&&(s=Vx(t)),xn(i,(r,o)=>{s=s.concat(o)}),s}})}function xl(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(DR())(n._repo,n._path):n}function VR(n,e){for(let t=0;t<e.length;++t){let i=e[t];if(!i._queryParams.loadsAllData()){let s=Ju(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function WR(){return OR++}function XR(n,e,t){let i=e._path,s=Tl(n,e),r=Kx(n,t),o=n.listenProvider_.startListening(xl(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)he(!$s(a.value),"If we're adding a query, it shouldn't be shadowed");else{let l=a.fold((c,h,u)=>{if(!ot(c)&&h&&$s(h))return[$u(h).query];{let d=[];return h&&(d=d.concat(Vx(h).map(f=>f.query))),xn(u,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){let h=l[c];n.listenProvider_.stopListening(xl(h),Tl(n,h))}}return o}var pm=class n{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new n(t)}node(){return this.node_}},mm=class n{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=Yt(this.path_,e);return new n(this.syncTree_,t)}node(){return Fm(this.syncTree_,this.path_)}},qR=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ex=function(n,e,t){if(!n||typeof n!="object")return n;if(he(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return YR(n[".sv"],e,t);if(typeof n[".sv"]=="object")return $R(n[".sv"],e);he(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},YR=function(n,e,t){if(n==="timestamp")return t.timestamp;he(!1,"Unexpected server value: "+n)},$R=function(n,e,t){n.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(n,null,2));let i=n.increment;typeof i!="number"&&he(!1,"Unexpected increment value: "+i);let s=e.node();if(he(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;let o=s.getValue();return typeof o!="number"?i:o+i},Zx=function(n,e,t,i){return zm(e,new mm(t,n),i)},jx=function(n,e,t){return zm(n,new pm(e),t)};function zm(n,e,t){let i=n.getPriority().val(),s=ex(i,e.getImmediateChild(".priority"),t),r;if(n.isLeafNode()){let o=n,a=ex(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Ms(a,jt(s)):n}else{let o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ms(s))),o.forEachChild($t,(a,l)=>{let c=zm(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}var Al=class{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}};function Hm(n,e){let t=e instanceof At?e:new At(e),i=n,s=it(t);for(;s!==null;){let r=Er(i.node.children,s)||{children:{},childCount:0};i=new Al(s,i,r),t=Lt(t),s=it(t)}return i}function qo(n){return n.node.value}function Qx(n,e){n.node.value=e,gm(n)}function ey(n){return n.node.childCount>0}function JR(n){return qo(n)===void 0&&!ey(n)}function Ku(n,e){xn(n.node.children,(t,i)=>{e(new Al(t,n,i))})}function ty(n,e,t,i){t&&e(n),Ku(n,s=>{ty(s,e,!0)})}function KR(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ll(n){return new At(n.parent===null?n.name:Ll(n.parent)+"/"+n.name)}function gm(n){n.parent!==null&&ZR(n.parent,n.name,n)}function ZR(n,e,t){let i=JR(t),s=Ii(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,gm(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,gm(n))}var jR=/[\[\].#$\/\u0000-\u001F\u007F]/,QR=/[\[\].#$\u0000-\u001F\u007F]/,Tp=10*1024*1024,Gm=function(n){return typeof n=="string"&&n.length!==0&&!jR.test(n)},ny=function(n){return typeof n=="string"&&n.length!==0&&!QR.test(n)},eI=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ny(n)},iy=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Xu(n)||n&&typeof n=="object"&&Ii(n,".sv")},zu=function(n,e,t,i){i&&e===void 0||Zu(wr(n,"value"),e,t)},Zu=function(n,e,t){let i=t instanceof At?new zp(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ar(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ar(i)+" with contents = "+e.toString());if(Xu(e))throw new Error(n+"contains "+e.toString()+" "+Ar(i));if(typeof e=="string"&&e.length>Tp/3&&ll(e)>Tp)throw new Error(n+"contains a string greater than "+Tp+" utf8 bytes "+Ar(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(xn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Gm(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ar(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LC(i,o),Zu(n,a,i),DC(i)}),s&&r)throw new Error(n+' contains ".value" child '+Ar(i)+" in addition to actual children.")}},tI=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];let r=yl(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Gm(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(NC);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&mi(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},sy=function(n,e,t,i){let s=wr(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");let r=[];xn(e,(o,a)=>{let l=new At(o);if(Zu(s,a,Yt(t,l)),Am(l)===".priority"&&!iy(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),tI(s,r)},nI=function(n,e,t){if(Xu(e))throw new Error(wr(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!iy(e))throw new Error(wr(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")};var ry=function(n,e,t,i){if(!(i&&t===void 0)&&!ny(t))throw new Error(wr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},iI=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ry(n,e,t,i)},Rr=function(n,e){if(it(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},sI=function(n,e){let t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Gm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!eI(t))throw new Error(wr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};var _m=class{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function ju(n,e){let t=null;for(let i=0;i<e.length;i++){let s=e[i],r=s.getPath();t!==null&&!Cm(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function oy(n,e,t){ju(n,t),ay(n,i=>Cm(i,e))}function _i(n,e,t){ju(n,t),ay(n,i=>mi(i,e)||mi(e,i))}function ay(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){let s=n.eventLists_[i];if(s){let r=s.path;e(r)?(rI(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function rI(n){for(let e=0;e<n.events.length;e++){let t=n.events[e];if(t!==null){n.events[e]=null;let i=t.getEventRunner();Ir&&vn("event: "+t.toString()),Vo(i)}}}var oI="repo_interrupt",aI=25,vm=class{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _m,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ru(),this.transactionQueueTree_=new Al,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}};function lI(n,e,t){if(n.stats_=Tm(n.repoInfo_),n.forceRestClient_||lC())n.server_=new Zp(n.repoInfo_,(i,s,r,o)=>{tx(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>nx(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{an(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Nr(n.repoInfo_,e,(i,s,r,o)=>{tx(n,i,s,r,o)},i=>{nx(n,i)},i=>{cI(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=hC(n.repoInfo_,()=>new nm(n.stats_,n.server_)),n.infoData_=new jp,n.infoSyncTree_=new Bu({startListening:(i,s,r,o)=>{let a=[],l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Nl(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vm(n,"connected",!1),n.serverSyncTree_=new Bu({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{let c=o(a,l);_i(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function ly(n){let t=n.infoData_.getNode(new At(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Qu(n){return qR({timestamp:ly(n)})}function tx(n,e,t,i,s){n.dataUpdateCount++;let r=new At(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){let l=al(t,c=>jt(c));o=zR(n.serverSyncTree_,r,l,s)}else{let l=jt(t);o=Yx(n.serverSyncTree_,r,l,s)}else if(i){let l=al(t,c=>jt(c));o=UR(n.serverSyncTree_,r,l)}else{let l=jt(t);o=Nl(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ho(n,r)),_i(n.eventQueue_,a,o)}function nx(n,e){Vm(n,"connected",e),e===!1&&fI(n)}function cI(n,e){xn(e,(t,i)=>{Vm(n,t,i)})}function Vm(n,e,t){let i=new At("/.info/"+e),s=jt(t);n.infoData_.updateSnapshot(i,s);let r=Nl(n.infoSyncTree_,i,s);_i(n.eventQueue_,i,r)}function Wm(n){return n.nextWriteId_++}function hI(n,e,t){let i=HR(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{let r=jt(s).withIndex(e._queryParams.getIndex());fm(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Nl(n.serverSyncTree_,e._path,r);else{let a=Tl(n.serverSyncTree_,e);o=Yx(n.serverSyncTree_,e._path,r,a)}return _i(n.eventQueue_,e._path,o),ku(n.serverSyncTree_,e,t,null,!0),r},s=>(Dl(n,"get for query "+an(e)+" failed: "+s),Promise.reject(new Error(s))))}function uI(n,e,t,i,s){Dl(n,"set",{path:e.toString(),value:t,priority:i});let r=Qu(n),o=jt(t,i),a=Fm(n.serverSyncTree_,e),l=jx(o,a,r),c=Wm(n),h=qx(n.serverSyncTree_,e,l,c,!0);ju(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,f)=>{let p=d==="ok";p||Hn("set at "+e+" failed: "+d);let _=Vs(n.serverSyncTree_,c,!p);_i(n.eventQueue_,e,_),Js(n,s,d,f)});let u=qm(n,e);Ho(n,u),_i(n.eventQueue_,u,[])}function dI(n,e,t,i){Dl(n,"update",{path:e.toString(),value:t});let s=!0,r=Qu(n),o={};if(xn(t,(a,l)=>{s=!1,o[a]=Zx(Yt(e,a),jt(l),n.serverSyncTree_,r)}),s)vn("update() called with empty data.  Don't do anything."),Js(n,i,"ok",void 0);else{let a=Wm(n),l=FR(n.serverSyncTree_,e,o,a);ju(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,h)=>{let u=c==="ok";u||Hn("update at "+e+" failed: "+c);let d=Vs(n.serverSyncTree_,a,!u),f=d.length>0?Ho(n,e):e;_i(n.eventQueue_,f,d),Js(n,i,c,h)}),xn(t,c=>{let h=qm(n,Yt(e,c));Ho(n,h)}),_i(n.eventQueue_,e,[])}}function fI(n){Dl(n,"onDisconnectEvents");let e=Qu(n),t=Ru();em(n.onDisconnect_,yt(),(s,r)=>{let o=Zx(s,r,n.serverSyncTree_,e);Wo(t,s,o)});let i=[];em(t,yt(),(s,r)=>{i=i.concat(Nl(n.serverSyncTree_,s,r));let o=qm(n,s);Ho(n,o)}),n.onDisconnect_=Ru(),_i(n.eventQueue_,yt(),i)}function pI(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&Qp(n.onDisconnect_,e),Js(n,t,i,s)})}function ix(n,e,t,i){let s=jt(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&Wo(n.onDisconnect_,e,s),Js(n,i,r,o)})}function mI(n,e,t,i,s){let r=jt(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Wo(n.onDisconnect_,e,r),Js(n,s,o,a)})}function gI(n,e,t,i){if(pu(t)){vn("onDisconnect().update() called with empty data.  Don't do anything."),Js(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&xn(t,(o,a)=>{let l=jt(a);Wo(n.onDisconnect_,Yt(e,o),l)}),Js(n,i,s,r)})}function _I(n,e,t){let i;it(e._path)===".info"?i=fm(n.infoSyncTree_,e,t):i=fm(n.serverSyncTree_,e,t),oy(n.eventQueue_,e._path,i)}function sx(n,e,t){let i;it(e._path)===".info"?i=ku(n.infoSyncTree_,e,t):i=ku(n.serverSyncTree_,e,t),oy(n.eventQueue_,e._path,i)}function cy(n){n.persistentConnection_&&n.persistentConnection_.interrupt(oI)}function Dl(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),vn(t,...e)}function Js(n,e,t,i){e&&Vo(()=>{if(t==="ok")e(null);else{let s=(t||"error").toUpperCase(),r=s;i&&(r+=": "+i);let o=new Error(r);o.code=s,e(o)}})}function hy(n,e,t){return Fm(n.serverSyncTree_,e,t)||Je.EMPTY_NODE}function Xm(n,e=n.transactionQueueTree_){if(e||ed(n,e),qo(e)){let t=dy(n,e);he(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&vI(n,Ll(e),t)}else ey(e)&&Ku(e,t=>{Xm(n,t)})}function vI(n,e,t){let i=t.map(c=>c.currentWriteId),s=hy(n,e,i),r=s,o=s.hash();for(let c=0;c<t.length;c++){let h=t[c];he(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;let u=zn(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}let a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Dl(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){let u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Vs(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();ed(n,Hm(n.transactionQueueTree_,e)),Xm(n,n.transactionQueueTree_),_i(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)Vo(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{Hn("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}Ho(n,e)}},o)}function Ho(n,e){let t=uy(n,e),i=Ll(t),s=dy(n,t);return xI(n,s,i),i}function xI(n,e,t){if(e.length===0)return;let i=[],s=[],o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){let l=e[a],c=zn(t,l.path),h=!1,u;if(he(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(Vs(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=aI)h=!0,u="maxretry",s=s.concat(Vs(n.serverSyncTree_,l.currentWriteId,!0));else{let d=hy(n,l.path,o);l.currentInputSnapshot=d;let f=e[a].update(d.val());if(f!==void 0){Zu("transaction failed: Data returned ",f,l.path);let p=jt(f);typeof f=="object"&&f!=null&&Ii(f,".priority")||(p=p.updatePriority(d.getPriority()));let m=l.currentWriteId,g=Qu(n),x=jx(p,d,g);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=x,l.currentWriteId=Wm(n),o.splice(o.indexOf(m),1),s=s.concat(qx(n.serverSyncTree_,l.path,x,l.currentWriteId,l.applyLocally)),s=s.concat(Vs(n.serverSyncTree_,m,!0))}else h=!0,u="nodata",s=s.concat(Vs(n.serverSyncTree_,l.currentWriteId,!0))}_i(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,(function(d){setTimeout(d,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}ed(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Vo(i[a]);Xm(n,n.transactionQueueTree_)}function uy(n,e){let t,i=n.transactionQueueTree_;for(t=it(e);t!==null&&qo(i)===void 0;)i=Hm(i,t),e=Lt(e),t=it(e);return i}function dy(n,e){let t=[];return fy(n,e,t),t.sort((i,s)=>i.order-s.order),t}function fy(n,e,t){let i=qo(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Ku(e,s=>{fy(n,s,t)})}function ed(n,e){let t=qo(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Qx(e,t.length>0?t:void 0)}Ku(e,i=>{ed(n,i)})}function qm(n,e){let t=Ll(uy(n,e)),i=Hm(n.transactionQueueTree_,e);return KR(i,s=>{Ap(n,s)}),Ap(n,i),ty(i,s=>{Ap(n,s)}),t}function Ap(n,e){let t=qo(e);if(t){let i=[],s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(he(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(he(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Vs(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Qx(e,void 0):t.length=r+1,_i(n.eventQueue_,Ll(e),s);for(let o=0;o<i.length;o++)Vo(i[o])}}function yI(n){let e="",t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function SI(n){let e={};n.charAt(0)==="?"&&(n=n.substring(1));for(let t of n.split("&")){if(t.length===0)continue;let i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Hn(`Invalid query segment '${t}' in query '${n}'`)}return e}var rx=function(n,e){let t=MI(n),i=t.namespace;t.domain==="firebase.com"&&Ss(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ss("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||QA();let s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new yu(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new At(t.pathString)}},MI=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(s=yI(n.substring(h,u)));let d=SI(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;let f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{let p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};var ox="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",bI=(function(){let n=0,e=[];return function(t){let i=t===n;n=t;let s,r=new Array(8);for(s=7;s>=0;s--)r[s]=ox.charAt(t%64),t=Math.floor(t/64);he(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=ox.charAt(e[s]);return he(o.length===20,"nextPushId: Length should be 20."),o}})();var Hu=class{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){let e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+an(this.snapshot.exportVal())}},Gu=class{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}};var Vu=class{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return he(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}};var xm=class{constructor(e,t){this._repo=e,this._path=t}cancel(){let e=new Zn;return pI(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Rr("OnDisconnect.remove",this._path);let e=new Zn;return ix(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Rr("OnDisconnect.set",this._path),zu("OnDisconnect.set",e,this._path,!1);let t=new Zn;return ix(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Rr("OnDisconnect.setWithPriority",this._path),zu("OnDisconnect.setWithPriority",e,this._path,!1),nI("OnDisconnect.setWithPriority",t);let i=new Zn;return mI(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){Rr("OnDisconnect.update",this._path),sy("OnDisconnect.update",e,this._path);let t=new Zn;return gI(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};var ym=class n{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return ot(this._path)?null:Am(this._path)}get ref(){return new Ji(this._repo,this._path)}get _queryIdentifier(){let e=Wv(this._queryParams),t=wm(e);return t==="{}"?"default":t}get _queryObject(){return Wv(this._queryParams)}isEqual(e){if(e=qi(e),!(e instanceof n))return!1;let t=this._repo===e._repo,i=Cm(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+PC(this._path)}};var Ji=class n extends ym{constructor(e,t){super(e,t,new Kp,!1)}get parent(){let e=Tx(this._path);return e===null?null:new n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}},Cl=class n{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new At(e),i=Go(this.ref,e);return new n(this._node.getChild(t),i,$t)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new n(s,Go(this.ref,i),$t)))}hasChild(e){let t=new At(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function oi(n,e){return n=qi(n),n._checkNotDeleted("ref"),e!==void 0?Go(n._root,e):n._root}function Go(n,e){return n=qi(n),it(n._path)===null?iI("child","path",e,!1):ry("child","path",e,!1),new Ji(n._repo,Yt(n._path,e))}function py(n){return n=qi(n),new xm(n._repo,n._path)}function my(n,e){n=qi(n),Rr("push",n._path),zu("push",e,n._path,!0);let t=ly(n._repo),i=bI(t),s=Go(n,i),r=Go(n,i),o;return e!=null?o=Fr(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Ol(n){return Rr("remove",n._path),Fr(n,null)}function Fr(n,e){n=qi(n),Rr("set",n._path),zu("set",e,n._path,!1);let t=new Zn;return uI(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Fl(n,e){sy("update",e,n._path);let t=new Zn;return dI(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function gy(n){n=qi(n);let e=new Vu(()=>{}),t=new Wu(e);return hI(n._repo,n,t).then(i=>new Cl(i,new Ji(n._repo,n._path),n._queryParams.getIndex()))}var Wu=class n{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){let i=t._queryParams.getIndex();return new Hu("value",this,new Cl(e.snapshotNode,new Ji(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Gu(this,e,t):null}matches(e){return e instanceof n?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}},Sm=class n{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Gu(this,e,t):null}createEvent(e,t){he(e.childName!=null,"Child events should have a childName.");let i=Go(new Ji(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Hu(e.type,this,new Cl(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof n?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}};function _y(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){let l=t,c=(h,u)=>{sx(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}let o=new Vu(t,r||void 0),a=e==="value"?new Wu(o):new Sm(e,o);return _I(n._repo,n,a),()=>sx(n._repo,n,a)}function Ki(n,e,t,i){return _y(n,"value",e,t,i)}function vy(n,e,t,i){return _y(n,"child_added",e,t,i)}CR(Ji);LR(Ji);var EI="FIREBASE_DATABASE_EMULATOR_HOST",Mm={},wI=!1;function TI(n,e,t,i){let s=e.lastIndexOf(":"),r=e.substring(0,s),o=op(r);n.repoInfo_=new yu(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function AI(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Ss("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vn("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=rx(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[EI]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=rx(r,s),a=o.repoInfo):l=!o.repoInfo.secure;let h=s&&l?new Ws(Ws.OWNER):new Lp(n.name,n.options,e);sI("Invalid Firebase Database URL",o),ot(o.path)||Ss("Database URL must point to the root of a Firebase Database (not including a child path).");let u=RI(a,n,h,new Np(n,t));return new bm(u,n)}function CI(n,e){let t=Mm[e];(!t||t[n.key]!==n)&&Ss(`Database ${e}(${n.repoInfo_}) has already been deleted.`),cy(n),delete t[n.key]}function RI(n,e,t,i){let s=Mm[e.name];s||(s={},Mm[e.name]=s);let r=s[n.toURLString()];return r&&Ss("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new vm(n,wI,t,i),s[n.toURLString()]=r,r}var bm=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ji(this._repo,yt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ss("Cannot call "+e+" on a deleted database.")}};function xy(n=Ev(),e){let t=Sv(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){let i=j_("database");i&&II(t,...i)}return t}function II(n,e,t,i={}){n=qi(n),n._checkNotDeleted("useEmulator");let s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Ro(i,r.repoInfo_.emulatorOptions))return;Ss("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Ss('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ws(Ws.OWNER);else if(i.mockUserToken){let a=typeof i.mockUserToken=="string"?i.mockUserToken:Q_(i.mockUserToken,n.app.options.projectId);o=new Ws(a)}op(e)&&lv(e),TI(r,s,i,o)}function Ym(n){n=qi(n),n._checkNotDeleted("goOffline"),cy(n._repo)}function PI(n){KA(bv),hl(new _s("database",(e,{instanceIdentifier:t})=>{let i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return AI(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Gs(Av,Cv,n),Gs(Av,Cv,"esm2020")}var NI={".sv":"timestamp"};function Ul(){return NI}Nr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Nr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};PI();var yy={apiKey:"AIzaSyDtHx2vGHhMd7Sv0UMwL3JU35iLD7eD9nM",authDomain:"eclipse-game-865ae.firebaseapp.com",databaseURL:"https://eclipse-game-865ae-default-rtdb.europe-west1.firebasedatabase.app",projectId:"eclipse-game-865ae",storageBucket:"eclipse-game-865ae.firebasestorage.app",messagingSenderId:"578340682575",appId:"1:578340682575:web:5087cb3782c19b8f52e33a"};var Sy=12e3,Bl=class{constructor(){this.h={}}on(e,t){var i;((i=this.h)[e]||(i[e]=[])).push(t)}emit(e,...t){for(let i of this.h[e]||[])i(...t)}};function LI(n){if(!n.length)return null;let e=[...n].sort((t,i)=>t-i);return e[Math.floor(e.length/2)]}var My=()=>Math.random().toString(36).slice(2,10);function td(n,e,t){let i=e.split("/"),s=n;for(let r=0;r<i.length-1;r++)s=s[i[r]]=s[i[r]]&&typeof s[i[r]]=="object"?s[i[r]]:{};return s[i[i.length-1]]=t,n}var nd=class extends Bl{constructor(){super(),this.kind="online",this.offset=0,this.status={server:"connecting",ping:null,partnerOnline:!1,partnerPing:null,error:null,conflict:!1},this.pings=[],this.sid=My(),this.connected=!1}serverNow(){return Date.now()+this.offset}join(e,t){this.role=t,this.other=Kt(t);let i=yp(yy),s=this.db=xy(i),r=this.base=`rooms/${e}`;this.meRef=oi(s,`${r}/players/${t}/meta`),this.stateRef=oi(s,`${r}/players/${t}/s`),this.evRef=oi(s,`${r}/ev`),this.starsRef=oi(s,`${r}/stars`),this.joinedAt=Date.now(),Ki(oi(s,".info/serverTimeOffset"),o=>{this.offset=o.val()||0}),this.timeout=setTimeout(()=>{this.everConnected||(this.status.server="unreachable",this.emit("status",this.status))},12e3),Ki(oi(s,".info/connected"),async o=>{this.connected=!!o.val(),this.connected?(this.everConnected=!0,clearTimeout(this.timeout),this.status.server="ok",this.emit("status",this.status),await this._claim()):this.everConnected&&(this.status.server="reconnecting",this.emit("status",this.status))},o=>this._fail(o)),Ki(oi(s,`${r}/players/${this.other}/meta`),o=>{let a=o.val();this.partnerMeta=a,this._updatePartner()},o=>this._fail(o)),Ki(oi(s,`${r}/players/${this.other}/s`),o=>{let a=o.val();a&&a.p&&this.emit("state",a)},o=>this._fail(o)),Ki(this.meRef,o=>{let a=o.val();this.claimed&&a&&a.sid&&a.sid!==this.sid&&a.online&&(this.status.conflict=!0,this.emit("status",this.status))}),vy(this.evRef,o=>{let a=o.val();if(!a||typeof a.t!="number")return;let l=this.serverNow()-a.t;if(l>6e4){Ol(o.ref).catch(()=>{});return}a.from===this.role||l>5e3||this.emit("event",a)},o=>this._fail(o)),Ki(this.starsRef,o=>this.emit("stars",o.val()||{}),o=>this._fail(o)),this.saveRef=oi(s,`${r}/save`),this.save={},Ki(this.saveRef,o=>{this.save=o.val()||{},this.saveLoaded=!0,this.emit("save",this.save)},o=>this._fail(o)),this.quizMineRef=oi(s,`${r}/quiz/${t}`),Ki(this.quizMineRef,o=>{this.quizMine=o.val(),this.quizLoaded=!0,this._emitQuiz()},o=>this._fail(o)),Ki(oi(s,`${r}/quiz/${this.other}`),o=>{this.quizPartner=o.val(),this._emitQuiz()},o=>this._fail(o)),this.hb=setInterval(()=>this._heartbeat(),1500),this.pt=setInterval(()=>this._updatePartner(),1e3)}async _claim(){try{if(!this.claimed){let e=(await gy(this.meRef)).val();if(e&&e.online&&e.sid!==this.sid&&this.serverNow()-(e.seen||0)<Sy){this.status.conflict=!0,this.emit("status",this.status);return}}await py(this.meRef).update({online:!1}),await Fl(this.meRef,{online:!0,sid:this.sid,seen:Ul(),ping:Math.round(this.status.ping||0),v:"2026-11-07.1641"}),this.claimed=!0,this._heartbeat()}catch(e){this._fail(e)}}_heartbeat(){if(!this.connected||!this.claimed||this.status.conflict)return;let e=performance.now();Fl(this.meRef,{online:!0,sid:this.sid,seen:Ul(),ping:Math.round(this.status.ping||0)}).then(()=>{let t=performance.now()-e;this.pings.push(t),this.pings.length>7&&this.pings.shift(),this.status.ping=LI(this.pings),this.emit("status",this.status)}).catch(t=>this._fail(t))}_updatePartner(){let e=this.partnerMeta,t=!!(e&&e.online&&this.serverNow()-(e.seen||0)<Sy),i=t!==this.status.partnerOnline;this.status.partnerOnline=t,this.status.partnerPing=t&&e.ping?e.ping:null,i&&this.emit("partner",t),this.emit("status",this.status)}_fail(e){console.warn("[net]",e);let t=String(e&&(e.code||e.message||e));this.status.error=/permission/i.test(t)?"rules":t,this.emit("status",this.status)}sendState(e){!this.connected||!this.claimed||this.status.conflict||Fr(this.stateRef,e).catch(()=>{})}sendEvent(e,t={}){if(!this.connected||!this.claimed)return;let i=my(this.evRef);Fr(i,{...t,type:e,from:this.role,t:Ul()}).catch(()=>{}),setTimeout(()=>Ol(i).catch(()=>{}),15e3)}collectStar(e){Fr(oi(this.db,`${this.base}/stars/${e}`),!0).catch(()=>{})}_emitQuiz(){this.emit("quiz",this.quizMine||null,this.quizPartner||null)}setSave(e,t){td(this.save,e,t),this.emit("save",this.save),Fl(this.saveRef,{[e]:t}).catch(i=>this._fail(i))}saveQuiz(e){return e.length?Fr(this.quizMineRef,{t:Ul(),items:e}):Ol(this.quizMineRef)}resetStars(){Ol(this.starsRef).catch(()=>{})}leave(){if(clearInterval(this.hb),clearInterval(this.pt),this.claimed)return Fl(this.meRef,{online:!1}).catch(()=>{}).finally(()=>Ym(this.db));try{Ym(this.db)}catch{}return Promise.resolve()}},id=class extends Bl{constructor(e=0){super(),this.kind="local",this.lag=e,this.status={server:"ok",ping:e*2,partnerOnline:!1,partnerPing:null,error:null,conflict:!1},this.stars={},this.sid=My(),this.partnerSeen=0}serverNow(){return Date.now()}join(e,t){this.role=t,this.other=Kt(t),this.bc=new BroadcastChannel("eclipse-"+e),this.bc.onmessage=s=>{let r=s.data;if(!r||r.from===this.role)return;let o=()=>this._recv(r);this.lag?setTimeout(o,this.lag*(.75+Math.random()*.5)):o()},this.room=e,this.save=_t.get(`save.${e}`,{}),this.saveLoaded=!0,setTimeout(()=>this.emit("save",this.save),0),this.quizMine=_t.get(`quiz.${e}.${t}`,null),this.quizPartner=_t.get(`quiz.${e}.${this.other}`,null),this.quizLoaded=!0,setTimeout(()=>this._emitQuiz(),0);let i=()=>this._send({k:"meta",ping:this.lag*2});i(),this._send({k:"hello"}),this.hb=setInterval(()=>{i(),this._check()},1e3),setTimeout(()=>this.emit("status",this.status),0)}_send(e){this.bc.postMessage({...e,from:this.role})}_recv(e){e.k==="meta"?(this.partnerSeen=Date.now(),this.status.partnerPing=e.ping,this._check()):e.k==="hello"?(this._send({k:"meta",ping:this.lag*2}),this._send({k:"stars",stars:this.stars})):e.k==="state"?(this.partnerSeen=Date.now(),this._check(),this.emit("state",e.s)):e.k==="ev"?this.emit("event",e.e):e.k==="stars"?(Object.assign(this.stars,e.stars),e.reset&&(this.stars={}),this.emit("stars",{...this.stars})):e.k==="bye"?(this.partnerSeen=0,this._check()):e.k==="quiz"?(this.quizPartner=e.v,this._emitQuiz()):e.k==="save"&&(td(this.save,e.path,e.value),_t.set(`save.${this.room}`,this.save),this.emit("save",this.save))}_check(){let e=Date.now()-this.partnerSeen<4e3;e!==this.status.partnerOnline&&(this.status.partnerOnline=e,this.emit("partner",e)),this.emit("status",this.status)}sendState(e){this._send({k:"state",s:e})}sendEvent(e,t={}){this._send({k:"ev",e:{...t,type:e,from:this.role,t:Date.now()}})}collectStar(e){this.stars[e]=!0,this._send({k:"stars",stars:{[e]:!0}}),this.emit("stars",{...this.stars})}resetStars(){this.stars={},this._send({k:"stars",stars:{},reset:!0}),this.emit("stars",{})}_emitQuiz(){this.emit("quiz",this.quizMine,this.quizPartner)}setSave(e,t){td(this.save,e,t),_t.set(`save.${this.room}`,this.save),this._send({k:"save",path:e,value:t}),this.emit("save",this.save)}saveQuiz(e){let t=e.length?{t:Date.now(),items:e}:null;return _t.set(`quiz.${this.room}.${this.role}`,t),this.quizMine=t,this._send({k:"quiz",v:t}),this._emitQuiz(),Promise.resolve()}leave(){return this._send({k:"bye"}),clearInterval(this.hb),this.bc.close(),Promise.resolve()}},sd=class extends Bl{constructor(){super(),this.kind="solo",this.status={server:"solo",ping:null,partnerOnline:!0,partnerPing:null,error:null,conflict:!1},this.stars={}}serverNow(){return Date.now()}join(e,t){this.role=t,this.other=Kt(t),this.quizMine=_t.get(`quiz.solo.${t}`,null),this.quizLoaded=!0,this.save=_t.get("save.solo",{}),this.saveLoaded=!0,setTimeout(()=>{this.emit("quiz",this.quizMine,null),this.emit("save",this.save)},0)}setSave(e,t){td(this.save,e,t),_t.set("save.solo",this.save),this.emit("save",this.save)}saveQuiz(e){return this.quizMine=e.length?{t:Date.now(),items:e}:null,_t.set(`quiz.solo.${this.role}`,this.quizMine),this.emit("quiz",this.quizMine,null),Promise.resolve()}sendState(){}sendEvent(){}collectStar(e){this.stars[e]=!0,this.emit("stars",{...this.stars})}resetStars(){this.stars={},this.emit("stars",{})}leave(){return Promise.resolve()}};var Ct=n=>document.querySelector(n);function by({onJoin:n,onSolo:e,onStart:t,onRetry:i,onLeave:s,onResetStars:r,onToggleSound:o,onFullscreen:a,canFullscreen:l}){let c=Ct("#lobby"),h=Ct("#conn"),u=Ct("#hud"),d=_t.get("role",null),f=Ct("#word");f.value=_t.get("word",""),Ct("#ver").textContent="version 2026-11-07.1641";let p=[...document.querySelectorAll(".role")],_=()=>p.forEach(y=>y.classList.toggle("sel",y.dataset.role===d));_(),p.forEach(y=>y.addEventListener("click",()=>{d=y.dataset.role,_t.set("role",d),_(),m("")}));let m=y=>{Ct("#lobby-err").textContent=y};Ct("#join").addEventListener("click",()=>{let y=f.value.trim();if(!d)return m("Pick Sun or Moon first.");if(y.length<2)return m("Type a secret word (you both use the same one).");_t.set("word",y),f.blur(),n(d,y)}),f.addEventListener("keydown",y=>{y.key==="Enter"&&Ct("#join").click()}),Ct("#solo").addEventListener("click",()=>{f.blur(),e(d||"sun")}),Ct("#conn-start").addEventListener("click",()=>t()),Ct("#conn-retry").addEventListener("click",()=>i()),Ct("#conn-leave").addEventListener("click",()=>s()),Ct("#opt-stars").addEventListener("click",()=>{r(),v("Stars reset")});let g=Ct("#opt-sound"),x=y=>{g.textContent=y?"\u{1F50A} Sound on":"\u{1F508} Sound off"};g.addEventListener("click",()=>x(o())),Ct("#opt-full").hidden=!l,Ct("#opt-full").addEventListener("click",()=>a());let S="join";function M(y,C,A,N,D=""){let B=Ct(y),I=B.querySelector(".ic");I.className="ic "+C,I.textContent=C==="good"?"\u2713":C==="bad"?"\u2715":C==="ok"?"!":"",B.querySelector("b").textContent=A,B.querySelector("small").textContent=N,B.querySelector(".ms").textContent=D}let b=y=>y<120?["good","Great"]:y<220?["good","Good"]:y<400?["ok","OK"]:["bad","Laggy"];function E(y,C,A){let N=Kt(C),D=`${$n[N]} ${bn[N]}`;Ct("#conn-who").textContent=A==="solo"?"Practice alone: you control both.":`You are ${$n[C]} ${bn[C]}`+(A==="local"?" (two-tab test)":"");let B="",I=!1,k=!1;if(A==="solo")M("#row-server","good","Practice mode","No internet needed"),I=!0;else if(A==="local")M("#row-server","good","Test mode","Two tabs on this computer",y.ping?`${y.ping} ms fake lag`:""),I=!0;else if(y.error==="rules")M("#row-server","bad","Game server said no","The database rules need to be set"),B="The database is still locked. Paste the rules from database.rules.json into Firebase \u2192 Realtime Database \u2192 Rules, then tap Try again.",k=!0;else if(y.server==="ok"){let K=y.ping!=null?Math.round(y.ping):null;M("#row-server",K==null?"good":b(K)[0],"Game server",K==null?"Connected, measuring\u2026":`Connected \xB7 ${b(K)[1]}`,K==null?"":`${K} ms`),I=!0}else y.server==="reconnecting"?(M("#row-server","wait","Game server","Connection lost, reconnecting\u2026"),I=S==="menu"):y.server==="unreachable"?(M("#row-server","bad","Game server","Can't reach it from this network"),B="Couldn't reach the game server. Check the internet connection and tap Try again. If it keeps failing, a VPN is the backup plan.",k=!0):M("#row-server","wait","Game server","Connecting\u2026");A==="solo"?M("#row-partner","good","Both characters","Tap \u21C4 to switch who you control"):y.conflict?(M("#row-partner","bad",`${bn[C]} is taken`,`Someone is already ${bn[C]} with this word`),B=`Someone is already playing as ${bn[C]} with this secret word. Tap Leave and pick ${bn[N]}.`,I=!1):y.partnerOnline?M("#row-partner",y.partnerPing?b(y.partnerPing)[0]:"good",`${D} is here`,y.partnerPing?`Their connection \xB7 ${b(y.partnerPing)[1]}`:"Connected",y.partnerPing?`${Math.round(y.partnerPing)} ms`:""):M("#row-partner","wait",`Waiting for ${D}\u2026`,`Same secret word, pick ${bn[N]}`);let W=A!=="solo"&&y.partnerOnline&&y.ping!=null&&y.partnerPing!=null;if(Ct("#row-delay").hidden=!W,W){let K=Math.round((y.ping+y.partnerPing)/2),[Ae,Le]=b(K);M("#row-delay",Ae,"Delay between you",Le,`\u2248 ${K} ms`)}Ct("#conn-msg").textContent=B;let H=Ct("#conn-start");H.disabled=!I,H.textContent=S==="menu"?"Back to game":A!=="solo"&&!y.partnerOnline&&I?`Start (${bn[N]} can join any time)`:"Start playing",Ct("#conn-retry").hidden=!k;let oe=Ct("#status-pill .dot"),q="good",Z="";if(A==="solo")Z="Practice";else if(y.server!=="ok"&&A!=="local")q=y.server==="unreachable"||y.error?"bad":"ok",Z=y.server==="reconnecting"?"Reconnecting\u2026":"Offline";else{let K=y.ping!=null?Math.round(y.ping):null;K!=null&&(q=b(K)[0]),Z=`${K!=null?K+" ms":"\u2026"} \xB7 ${$n[N]} ${y.partnerOnline?"here":"away"}`}oe.className="dot "+q,Ct("#status-text").textContent=Z}function v(y){let C=document.createElement("div");C.className="toast",C.textContent=y,Ct("#toasts").appendChild(C),setTimeout(()=>C.remove(),2900);let A=Ct("#toasts").children;A.length>3&&A[0].remove()}return{toast:v,renderStatus:E,paintSound:x,showLobby(){c.hidden=!1,h.hidden=!0,u.hidden=!0},showConn(y){S=y,c.hidden=!0,h.hidden=!1,Ct("#conn-title").textContent=y==="menu"?"Menu":"Connection",Ct("#conn-extras").hidden=y!=="menu",Ct("#level-chips").hidden=y!=="menu"},showHud(){c.hidden=!0,h.hidden=!0,u.hidden=!1},setStars(y,C){Ct("#star-count").textContent=y,Ct("#star-total").textContent=C},get connOpen(){return!h.hidden}}}var DI=n=>n.normalize("NFKC").trim().toLowerCase().replace(/\s+/g,""),rd=null;async function OI(){let n=await fetch("memories.enc?v=2026-11-07.1641");if(!n.ok)throw new Error("missing");return new Uint8Array(await n.arrayBuffer())}async function Ey(n){if(rd)return rd;if(!crypto?.subtle)throw new Error("unsupported");let e=await OI();if(new TextDecoder().decode(e.slice(0,4))!=="ECLM")throw new Error("missing");let t=new DataView(e.buffer,e.byteOffset).getUint32(5),i=e.slice(9,25),s=e.slice(25,37),r=e.slice(37),o=await crypto.subtle.importKey("raw",new TextEncoder().encode(DI(n)),"PBKDF2",!1,["deriveKey"]),a=await crypto.subtle.deriveKey({name:"PBKDF2",salt:i,iterations:t,hash:"SHA-256"},o,{name:"AES-GCM",length:256},!1,["decrypt"]),l;try{l=await crypto.subtle.decrypt({name:"AES-GCM",iv:s},a,r)}catch{throw new Error("wrong-password")}return rd=JSON.parse(new TextDecoder().decode(l)).items.map(h=>{let u=atob(h.data),d=new Uint8Array(u.length);for(let f=0;f<u.length;f++)d[f]=u.charCodeAt(f);return{...h,data:void 0,url:URL.createObjectURL(new Blob([d],{type:h.mime}))}}),_t.set("memPw",n),rd}var wy=()=>_t.get("memPw","");var yn=n=>document.querySelector(n);function Ty(){let n=yn("#mem"),e=yn("#mem-view"),t=yn("#mem-grid"),i=yn("#mem-lock"),s=yn("#mem-pw"),r=yn("#mem-err"),o=yn("#mem-open"),a=null,l=[],c=0;function h(_){l=_,i.hidden=!0,t.hidden=!1,t.innerHTML="",_.forEach((m,g)=>{let x=document.createElement("button"),S=document.createElement("img");S.src=m.url,S.alt=m.title,S.loading="lazy";let M=document.createElement("span");M.textContent=m.title,x.append(S,M),x.addEventListener("click",()=>p(g)),t.appendChild(x)})}async function u(_,m){if(_){o.disabled=!0,r.textContent=m?"":"Unlocking\u2026";try{h(await Ey(_)),r.textContent=""}catch(g){let x=String(g.message);m||(r.textContent=x==="wrong-password"?"That's not the password.":x==="unsupported"?"This browser can\u2019t open them. Try Safari or Chrome.":"Couldn\u2019t load the memories. Check the internet connection.")}finally{o.disabled=!1}}}function d(_){if(a=_,_&&(_.hidden=!0),n.hidden=!1,!l.length){i.hidden=!1,t.hidden=!0;let m=wy();m&&u(m,!0)}}function f(){n.hidden=!0,a&&(a.hidden=!1)}function p(_){c=(_+l.length)%l.length;let m=l[c];yn("#mem-img").src=m.url,yn("#mem-title").textContent=m.title,yn("#mem-caption").textContent=m.caption||"",e.hidden=!1}o.addEventListener("click",()=>u(s.value,!1)),s.addEventListener("keydown",_=>{_.key==="Enter"&&u(s.value,!1)}),yn("#mem-close").addEventListener("click",f),yn("#mem-x").addEventListener("click",()=>{e.hidden=!0}),yn("#mem-prev").addEventListener("click",()=>p(c-1)),yn("#mem-next").addEventListener("click",()=>p(c+1)),yn("#lobby-mem").addEventListener("click",()=>d(yn("#lobby"))),yn("#opt-mem").addEventListener("click",()=>d(yn("#conn")))}var ai=n=>document.querySelector(n),FI=[{q:"What would be my dream vacation?",a:"The longest road + sea trip around the world",w:"A week at a luxury beach resort, Skiing in the Alps, A city trip to New York"},{q:"Which hobby of mine don't I do as often lately?",a:"Photography (nature, no people)",w:"Drawing, Playing guitar, Cooking"},{q:"What is my favourite show?",a:"Breaking Bad / Game of Thrones / Sherlock / Silo",w:"Friends, The Office, Money Heist"},{q:"What is my favourite anime?",a:"Fullmetal Alchemist",w:"Naruto, Attack on Titan, One Piece"}],od=3,Ay=10;function Cy({getNet:n,getRole:e}){let t=ai("#quiz-ed"),i=ai("#qe-list"),s=ai("#qe-msg"),r=null,o=null,a=null;function l(f={q:"",a:"",w:""}){let p=document.createElement("div");p.className="qe-item",p.innerHTML=`<span class="num"></span>
      <button class="del" aria-label="Remove">\u2715</button>
      <input class="q" maxlength="200" dir="auto" placeholder="Question, e.g. What's my favourite food?">
      <input class="ans" maxlength="200" dir="auto" placeholder="The right answer">
      <details><summary>Make it multiple choice (optional)</summary>
        <input class="w" maxlength="300" dir="auto" placeholder="Wrong answers, separated by commas">
      </details>`,p.querySelector(".q").value=f.q||"",p.querySelector(".ans").value=f.a||"",p.querySelector(".w").value=f.w||"",f.w&&(p.querySelector("details").open=!0),p.querySelector(".del").addEventListener("click",()=>{p.remove(),c()}),i.appendChild(p),c()}function c(){[...i.children].forEach((f,p)=>{f.querySelector(".num").textContent=`Question ${p+1}`}),ai("#qe-add").hidden=i.children.length>=Ay}function h(){return[...i.children].map(f=>{let p={q:f.querySelector(".q").value.trim(),a:f.querySelector(".ans").value.trim()},_=f.querySelector(".w").value.trim();return _&&(p.w=_),p}).filter(f=>f.q&&f.a)}function u(f){let p=e(),_=Kt(p);for(r=f,f&&(f.hidden=!0),t.hidden=!1,ai("#qe-intro").textContent=`Write ${od}\u2013${Ay} questions about yourself, with the right answers. ${$n[_]} ${bn[_]} will have to guess them later, and never sees your answers before that.`,i.innerHTML="",(o?.items?.length?o.items:p==="sun"?FI:[]).forEach(l);i.children.length<od;)l();s.textContent=o?`${o.items.length} saved \u2713`:""}function d(){t.hidden=!0,r&&(r.hidden=!1)}return ai("#qe-add").addEventListener("click",()=>{l(),i.lastElementChild.querySelector(".q").focus()}),ai("#qe-save").addEventListener("click",async()=>{let f=h();if(f.length<od){s.textContent=`Please write at least ${od} questions, each with an answer.`;return}s.textContent="Saving\u2026";let p=n(),_=setTimeout(()=>{s.textContent="Waiting for the connection\u2026 it will save as soon as you are online."},2500);try{await p.saveQuiz(f),clearTimeout(_),s.textContent=`${f.length} saved \u2713`,setTimeout(d,700)}catch(m){clearTimeout(_),s.textContent="Could not save: "+(String(m?.code||m?.message||m).includes("PERMISSION")?"the database rules need updating.":"please try again.")}}),ai("#qe-close").addEventListener("click",d),ai("#row-quiz").addEventListener("click",()=>u(ai("#conn"))),ai("#opt-quiz").addEventListener("click",()=>u(ai("#conn"))),{update(f,p){o=f,a=p;let _=e(),m=Kt(_),g=ai("#row-quiz");g.hidden=!1;let x=f?.items?.length||0,S=p?.items?.length||0;g.classList.toggle("todo",x===0),g.querySelector("b").textContent=x?`Your quiz: ${x} questions \u2713`:"Before you play: write your quiz",g.querySelector("small").textContent=`${$n[m]} ${bn[m]} has written ${S||"no"} question${S===1?"":"s"}${S?" \u2713":" yet"}`,g.querySelector(".ms").textContent=x?"Edit \u203A":"Write \u203A"}}}var Dt=n=>document.querySelector(n),UI=xr.has("debug"),Dy=Dt("#game"),Ks=new Wh({canvas:Dy,antialias:!1,powerPreference:"high-performance"});Ks.toneMapping=mr;Ks.toneMappingExposure=1;Ks.shadowMap.enabled=!0;Ks.shadowMap.type=fr;var Ur=new ha,Sn=new Rn(55,1,.1,700),BI=new en(4,4,{type:ln,samples:4}),Br=new $h(Ks,BI);Br.addPass(new Jh(Ur,Sn));var Oy=new Eo(new re(256,256),.5,.5,1.3);Br.addPass(Oy);Br.addPass(new Kh);var Fy=M_();Br.addPass(Fy);var Uy=[{dpr:Math.min(devicePixelRatio,2),bloom:!0,shadow:2048},{dpr:Math.min(devicePixelRatio,1.6),bloom:!0,shadow:2048},{dpr:Math.min(devicePixelRatio,1.25),bloom:!0,shadow:1024},{dpr:1,bloom:!1,shadow:1024}],hd=Ci(+xr.get("q")||0,0,3);function gd(){let n=window.innerWidth,e=window.innerHeight,t=Uy[hd];Ks.setPixelRatio(t.dpr),Ks.setSize(n,e,!1),Br.setPixelRatio(t.dpr),Br.setSize(n,e),Oy.enabled=t.bloom,Sn.aspect=n/e,Sn.fov=n<e?74:62,Fy.uniforms.aspect.value=n/e,Sn.updateProjectionMatrix(),n>e&&(Dt("#rotate-hint").hidden=!0)}window.addEventListener("resize",gd);window.visualViewport?.addEventListener("resize",gd);var Ve=jf(Ur,_t.get("lastLevel","prologue")),Vn=new jh(Ur,Sn),kI=b_(Ur),Zs=["sun","moon"],mt={},lt={},En={},St={},fd=n=>(Ve.kid?ep:Qf)[n];function By(){for(let n of Zs){let e=mt[n];e&&Ur.remove(e.root),mt[n]=k_(n,{kid:!!Ve.kid}),e&&(mt[n].root.position.copy(e.root.position),mt[n].setYaw(e.yaw)),Ur.add(mt[n].root)}}By();for(let n of Zs)lt[n]=new lu(fd(n).r,fd(n).h),En[n]=G_(lt[n]),En[n].disabled=!0,St[n]={role:n,body:lt[n],coyote:0,buffer:0,jumps:0,cut:!0,safe:Ve.spawn[n].clone(),safeT:0,k:0,lastMoving:0,airT:0,state:"free",anim:Tt.normal,wallT:0,wallNX:0,wallNZ:0,wjLock:0,regrab:0,dashT:0,dashCd:0,dashX:0,dashZ:0,airDashUsed:!1,ledge:null,hangT:0,climbT:0,from:new P,to:new P,carrying:!1,liftT:0,liftSeen:!1,notCarriedT:0,forceJump:!1};var zI=n=>(Ve.camYaw?Ve.camYaw[n]:0)+Math.PI;function ky(n){lt[n].pos.copy(Ve.spawn[n]),lt[n].vel.set(0,0,0),lt[n].grounded=!1,lt[n].ground=null,mt[n].root.position.copy(Ve.spawn[n]),mt[n].setYaw(zI(n))}Zs.forEach(ky);var pd=[];function zy(){pd.length=0,pd.push(...Ve.colliders,En.sun,En.moon)}zy();var O={mode:"lobby",kind:null,role:"sun",active:"sun",net:null,track:new hu,partnerK:null,cam:{yaw:0,pitch:.3,dist:8.6,zoom:Ci(+_t.get("camZoom",1)||1,.55,1.8),cur:8.6,target:new P(0,1,5),lastDrag:-10},lastSend:0,stars:{},cooldown:{ability:0,heart:0},t:0,save:null,starsMap:{},hold:!1,holdHeartT:0},jm=[],Qm=!1,eg="";function Gl(n,e=3500){n===eg||jm.some(t=>t[0]===n)||(jm.push([n,e]),Qm||Hy())}function Hy(){let n=jm.shift(),e=Dt("#caption");if(!n){Qm=!1,eg="";return}Qm=!0,eg=n[0],e.textContent=n[0],e.classList.add("on"),setTimeout(()=>{e.classList.remove("on"),setTimeout(Hy,450)},n[1])}function Gy(){let n=Ve.intro;if(!n){Gl(Ve.title,2600);return}n.all.forEach(t=>Gl(t,2700));let e=O.kind==="solo"?null:n[O.role];e&&Gl(e,3e3)}function Vy(n){if(Ve.id===n||!Ao[n])return;let e=!!Ve.kid;Ve.dispose(),Ve=jf(Ur,n),_t.set("lastLevel",n),!!Ve.kid!==e&&By();for(let t of Zs){let i=fd(t),s=lt[t],r=St[t];s.r=i.r,s.h=i.h,En[t].r=i.r*.92,En[t].ready=!1,r.state="free",r.anim=Tt.normal,r.carrying=!1,r.wallT=0,r.dashT=0,r.k++,r.safe.copy(Ve.spawn[t]),ky(t)}O.hold=!1,O.track.buf.length=0,O.track.has=!1,O.partnerK=null,zy(),dd=!1,qy(O.starsMap),(O.mode==="play"||O.mode==="menu")&&(O.cam.yaw=Ve.camYaw?Ve.camYaw[O.active]:0,O.cam.pitch=.3,O.cam.target.copy(lt[O.active].pos),md.classList.add("on"),setTimeout(()=>md.classList.remove("on"),350),Gy())}function HI(n){O.net&&(n==="prologue"&&O.net.setSave("prologue",null),O.net.setSave("level",n),O.mode==="menu"&&ag())}function GI(){Ve.id==="prologue"&&(Gl("Chapter 1 \xB7 Syria Unfiltered is coming next \u2728",3500),setTimeout(()=>O.net?.setSave("level","playground"),1500))}var VI=Dt("#level-chips");for(let[n,e]of Object.entries(Ao)){let t=document.createElement("button");t.className="chip",t.textContent=e.chip,t.addEventListener("click",()=>HI(n)),VI.appendChild(t)}var Vl=()=>O.net?O.net.serverNow():Date.now(),vi=W_({canvas:Dy,joyZone:Dt("#joy-zone"),joyBase:Dt("#joy-base"),joyKnob:Dt("#joy-knob"),buttons:{jump:Dt("#btn-jump"),ability:Dt("#btn-ability"),heart:Dt("#btn-heart"),swap:Dt("#btn-swap"),dash:Dt("#btn-dash")}}),og=Yf&&!R_&&!!document.documentElement.requestFullscreen;function Wy(){!og||document.fullscreenElement||document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}var Wn=by({canFullscreen:og,onJoin:(n,e)=>tg(xr.get("net")==="local"?"local":"online",n,e),onSolo:n=>tg("solo",n,""),onStart:()=>ag(),onRetry:()=>{sessionStorage.setItem("eclipse.autojoin","1"),location.reload()},onLeave:()=>{sessionStorage.removeItem("eclipse.autojoin"),(O.net?O.net.leave():Promise.resolve()).finally(()=>location.reload())},onResetStars:()=>O.net?.resetStars(),onToggleSound:()=>qt.toggle(),onFullscreen:Wy});Wn.paintSound(qt.enabled);Ty();var WI=Cy({getNet:()=>O.net,getRole:()=>O.role});Wn.setStars(0,Ve.stars.length);Dt("#menu-btn").addEventListener("click",()=>{O.mode==="play"&&(O.mode="menu",vi.setEnabled(!1),Wn.showConn("menu"),ud())});Dt("#status-pill").addEventListener("click",()=>Dt("#menu-btn").click());Dt("#rotate-ok").addEventListener("click",()=>{Dt("#rotate-hint").hidden=!0,_t.set("rotateOk",!0)});function ud(){O.net&&Wn.renderStatus(O.net.status,O.role,O.kind)}function tg(n,e,t){O.kind=n,O.role=e,O.active=e,document.body.classList.remove("sun","moon"),document.body.classList.add(e),Dt("#ability-label").textContent=e==="sun"?"Shine":"Tide",Dt("#partner-arrow-icon").textContent=$n[Kt(e)],Dt("#btn-swap").hidden=n!=="solo",n==="solo"&&(En.sun.disabled=En.moon.disabled=!1),og&&Wy();let i=O.net=n==="online"?new nd:n==="local"?new id(+xr.get("lag")||0):new sd;if(i.on("status",ud),i.on("state",s=>{if(O.partnerK!==s.k){O.partnerK=s.k,O.track.push(s,Date.now()),O.track.snap();return}O.track.push(s,Date.now())}),i.on("partner",s=>{if(O.mode!=="play"&&O.mode!=="menu")return;let r=Kt(O.role);Wn.toast(s?`${$n[r]} ${bn[r]} joined!`:`${$n[r]} ${bn[r]} left`),s&&qt.play("join")}),i.on("event",XI),i.on("stars",qy),i.on("quiz",(s,r)=>WI.update(s,r)),i.on("save",s=>{O.save=s,s.level&&s.level!==Ve.id&&Vy(s.level)}),i.join(n==="solo"?"solo":C_(t),e),n==="solo"){ud(),ag();return}O.mode="connecting",Wn.showConn("join"),ud()}function ag(){let n=O.mode==="connecting"||O.mode==="lobby";O.mode="play",Wn.showHud(),vi.setEnabled(!0),n&&(O.cam.yaw=Ve.camYaw?Ve.camYaw[O.active]:0,O.cam.pitch=.3,O.cam.target.copy(lt[O.active].pos).add(new P(0,1.1,0)),Yf&&innerHeight>innerWidth&&!_t.get("rotateOk",!1)&&(Dt("#rotate-hint").hidden=!1),O.kind==="solo"&&Wn.toast("Practice: tap \u21C4 to switch characters"),Gy())}sessionStorage.getItem("eclipse.autojoin")&&_t.get("role")&&_t.get("word")?(sessionStorage.removeItem("eclipse.autojoin"),tg(xr.get("net")==="local"?"local":"online",_t.get("role"),_t.get("word"))):Wn.showLobby();function XI(n){let e=mt[n.from];if(e)if(n.type==="heart")Vn.hearts(e.root.position,n.from==="sun"?16754253:11832575),Wn.toast(`${$n[n.from]} ${bn[n.from]} sent you a heart ${n.from==="sun"?"\u{1F9E1}":"\u{1F49C}"}`),qt.play("heart");else if(n.type==="ability")Xy(n.from);else if(n.type==="lift"&&O.role==="moon"){let t=St.moon,i=lt.moon;t.state==="free"&&O.track.has&&i.pos.distanceTo(O.track.pos)<2.6&&(t.state="carried",qt.play("jump2"))}else n.type==="throw"&&O.role==="moon"?St.moon.state==="carried"&&Array.isArray(n.v)&&Wl(St.moon,new P(n.v[0],n.v[1],n.v[2])):n.type==="drop"&&O.role==="sun"?St.sun.carrying=!1:n.type==="hold"?n.on&&sg(O.role,3.2)?Yo(!0,!1):n.on||Yo(!1,!1):n.type==="hjump"&&O.hold&&(St[O.role].forceJump=!0)}function Xy(n){n==="sun"?(Vn.shine(mt.sun),qt.play("shine")):(Vn.tide(mt.moon),qt.play("tide"))}function qy(n){O.starsMap=n||{},n=O.starsMap;for(let e of Ve.stars){let t=!!n[e.id];t&&!e.collected&&(Vn.sparks(e.pos.clone().setY(e.pos.y-.6),16769658,22),qt.play("star")),e.collected=t}Yy(!1)}var dd=!1;function Yy(n){let e=Ve.stars.filter(t=>t.collected).length;Wn.setStars(e,Ve.stars.length),n&&Wn.toast(`\u2B50 ${e}/${Ve.stars.length}`),e===Ve.stars.length&&!dd&&O.mode==="play"&&(dd=!0,setTimeout(()=>Wn.toast("All stars found! You two make a great team \u2728"),600)),e<Ve.stars.length&&(dd=!1)}var $y=5.6,$m=11,qI=9.5,YI=10.5,Ry=6.2,Iy=14,$I=.17,ng=new P,md=Dt("#fade");function ig(n,e,t,i,s,r=!1){let o=n.body,a=n.role,l=O.cam.yaw,c=-Math.sin(l),h=-Math.cos(l),u=Math.cos(l),d=-Math.sin(l),f=Math.min(1,Math.hypot(e.x,e.y)),p=u*e.x+c*e.y,_=d*e.x+h*e.y,m=Math.hypot(p,_);m>1e-4?(p/=m,_/=m):(p=0,_=0),n.regrab=Math.max(0,n.regrab-s),n.wjLock=Math.max(0,n.wjLock-s);let g=n.forceJump;if(g&&(t=!0,n.forceJump=!1),n.state==="carried")return jI(n,t);if(n.state==="hang")return KI(n,p,_,f,t,s);if(n.state==="climb")return ZI(n,s);if(n.dashCd-=s,o.grounded&&(n.airDashUsed=!1),r&&n.dashCd<=0&&!n.carrying&&(o.grounded||!n.airDashUsed)){let b=p,E=_;if(f<.2){let v=mt[a].yaw;b=Math.sin(v),E=Math.cos(v)}n.dashX=b,n.dashZ=E,n.dashT=$I,n.dashCd=.45,o.grounded||(n.airDashUsed=!0),mt[a].setYaw(Math.atan2(b,E)),qt.play("dash"),Vn.dust(o.pos,4)}let x=$y*(n.carrying?.82:1);if(n.dashT>0)n.dashT-=s,o.vel.x=n.dashX*Iy,o.vel.z=n.dashZ*Iy,o.grounded||(o.vel.y=Math.max(o.vel.y,0)),Math.random()<.6&&Vn.dust(ng.copy(o.pos).add(new P(0,o.h*.4,0)),1);else{if(O.hold){let N=_d(a);if(N){let D=N.x-o.pos.x,B=N.z-o.pos.z,I=Math.hypot(D,B);if(I>1.05){let k=Math.min(20,(I-1.05)*14)*s;o.vel.x+=D/I*k,o.vel.z+=B/I*k,I>1.9&&(o.pos.x+=D/I*(I-1.9)*.5,o.pos.z+=B/I*(I-1.9)*.5)}}}let b=p*x*f,E=_*x*f,v=(o.grounded?48:n.wjLock>0?5:24)*s,y=b-o.vel.x,C=E-o.vel.z,A=Math.hypot(y,C);A>v&&(y*=v/A,C*=v/A),o.vel.x+=y,o.vel.z+=C}o.grounded?(n.coyote=.13,n.jumps=0,n.airT=0,n.wallT=0):(n.coyote-=s,n.airT+=s),n.buffer=t?.16:n.buffer-s,n.buffer>0&&(o.grounded||n.coyote>0?(o.vel.y=n.carrying?$m*.88:O.hold?$m*1.12:$m,n.jumps=1,n.coyote=0,n.buffer=0,n.cut=O.hold,o.grounded=!1,o.ground=null,qt.play("jump"),Vn.dust(o.pos,4),O.hold&&(mt[a].spin(),g||(O.kind==="solo"?St[Kt(a)].forceJump=!0:O.net.sendEvent("hjump")))):n.wallT>0&&!n.carrying?(o.vel.set(n.wallNX*Ry,YI,n.wallNZ*Ry),n.jumps=1,n.buffer=0,n.cut=!0,n.wallT=0,n.wjLock=.2,mt[a].setYaw(Math.atan2(n.wallNX,n.wallNZ)),qt.play("jump"),Vn.dust(ng.copy(o.pos).add(new P(-n.wallNX*o.r,o.h*.5,-n.wallNZ*o.r)),3)):n.jumps<2&&!n.carrying&&(o.vel.y=qI,n.jumps=2,n.buffer=0,n.cut=!0,mt[a].spin(),qt.play("jump2"),Vn.sparks(o.pos.clone().setY(o.pos.y-.5),a==="sun"?16756864:13215999,8,1.5))),!i&&!n.cut&&o.vel.y>6&&(o.vel.y=6,n.cut=!0);let S=a==="moon"&&!o.grounded&&i&&o.vel.y<0&&n.airT>.15&&n.wallT<=0;o.maxFall=S?2.2:n.wallT>0?3.2:28;let M=z_(o,pd,s);if(M&&(M.collider.bounce?(qt.play("bounce"),Ve.bounce(M.collider),n.jumps=1,n.cut=!0,mt[a].land(10)):(M.impact>7&&(qt.play("land"),Vn.dust(o.pos,6)),mt[a].land(M.impact))),!o.grounded&&o.wallC&&o.wallC.wallJump&&o.vel.y<2.5?(n.wallT=.18,n.wallNX=o.wallNX,n.wallNZ=o.wallNZ):n.wallT-=s,o.grounded&&(n.wallT=0),!o.grounded&&!n.carrying&&n.regrab<=0&&o.vel.y<3.5){let b=H_(o,pd);if(b){let E=-(p*b.nx+_*b.nz)*f,v=-(o.vel.x*b.nx+o.vel.z*b.nz);(E>.2||v>.8||n.wallT>0)&&JI(n,b)}}(n.wallT>0||n.state==="hang")&&(n.airDashUsed=!1),n.state==="free"&&(n.anim=n.dashT>0?Tt.dash:S?Tt.glide:n.wallT>0&&!o.grounded?Tt.wall:n.carrying?Tt.carry:Tt.normal),o.grounded&&o.ground&&o.ground.safe?(n.safeT+=s,n.safeT>.35&&n.safe.copy(o.pos)):n.safeT=0,o.pos.y<Ve.killY&&QI(n)}function JI(n,e){let t=n.body;n.dashT=0,n.airDashUsed=!1,n.state="hang",n.ledge=e,n.hangT=0,n.anim=Tt.hang,t.vel.set(0,0,0),t.grounded=!1,t.ground=null,t.pos.y=e.top-t.h*.92,mt[n.role].setYaw(Math.atan2(-e.nx,-e.nz)),qt.play("land")}function KI(n,e,t,i,s,r){let o=n.body,a=n.ledge;o.vel.set(0,0,0),o.grounded=!1,n.hangT+=r,n.anim=Tt.hang;let l=-(e*a.nx+t*a.nz)*i;if(a.c.disabled){n.state="free",n.regrab=.4;return}s||l>.5&&n.hangT>.12?(n.state="climb",n.climbT=0,n.anim=Tt.climb,n.from.copy(o.pos),n.to.set(a.lx,a.top,a.lz),qt.play("jump")):l<-.6&&n.hangT>.15&&(n.state="free",n.regrab=.45,o.vel.set(a.nx*1.5,0,a.nz*1.5))}function ZI(n,e){let t=n.body;n.climbT+=e/.34;let i=Math.min(1,n.climbT);t.pos.y=n.from.y+(n.to.y-n.from.y)*Math.min(1,i*1.7);let s=gs(Ci((i-.35)/.65,0,1));t.pos.x=n.from.x+(n.to.x-n.from.x)*s,t.pos.z=n.from.z+(n.to.z-n.from.z)*s,n.anim=Tt.climb,i>=1&&(n.state="free",n.anim=Tt.normal,t.pos.copy(n.to),t.vel.set(0,0,0),t.grounded=!0,t.ground=n.ledge.c,n.jumps=0)}function _d(n){let e=Kt(n);return O.kind==="solo"?lt[e].pos:O.track.has&&O.net?.status.partnerOnline?O.track.pos:null}function Jy(){if(Ve.kid)return!1;let n=lt.sun,e=_d("sun");return!e||!n.grounded||St.sun.state!=="free"||O.kind==="solo"&&St.moon.state!=="free"?!1:Math.hypot(e.x-n.pos.x,e.z-n.pos.z)<1.5&&Math.abs(e.y-n.pos.y)<1.2}function Ky(){let n=St.sun;if(n.carrying){let e=mt.sun.yaw,t=lt.sun,i=new P(Math.sin(e)*6.5+t.vel.x*.5,12.5,Math.cos(e)*6.5+t.vel.z*.5);return n.carrying=!1,mt.sun.throwAnim(),qt.play("bounce"),O.kind==="solo"?Wl(St.moon,i):O.net.sendEvent("throw",{v:[Yn(i.x),Yn(i.y),Yn(i.z)]}),!0}return Jy()?(n.carrying=!0,n.liftT=performance.now(),n.liftSeen=!1,n.notCarriedT=0,qt.play("jump2"),O.kind==="solo"?St.moon.state="carried":O.net.sendEvent("lift"),!0):!1}function jI(n,e){let t=n.body,i=O.kind==="solo"?lt.sun.pos:O.track.has&&O.net.status.partnerOnline?O.track.pos:null;if(!i){Wl(n,new P(0,4,0));return}t.pos.set(i.x,i.y+fd("sun").h+.02,i.z),t.vel.set(0,0,0),t.grounded=!0,t.ground=null,n.anim=Tt.carried,mt[n.role].setYaw(mt.sun.yaw),e&&(Wl(n,new P(0,9.5,0)),O.kind==="solo"?St.sun.carrying=!1:O.net.sendEvent("drop"))}function Wl(n,e){let t=n.body;n.state="free",n.anim=Tt.normal,t.vel.copy(e),t.grounded=!1,t.ground=null,n.jumps=1,n.cut=!0,n.regrab=.25,n.airT=.2,n.coyote=0,Math.hypot(e.x,e.z)>2&&(n.wjLock=.5)}function QI(n){let e=n.body;n.state="free",n.anim=Tt.normal,n.wallT=0,n.role==="sun"&&n.carrying&&(n.carrying=!1,O.kind==="solo"&&Wl(St.moon,new P(0,2,0))),e.pos.copy(n.safe).add(ng.set(0,.3,0)),e.vel.set(0,0,0),e.ground=null,e.grounded=!1,n.k++,En[n.role].ready=!1,mt[n.role].root.position.copy(e.pos),n.role===O.active&&(md.classList.add("on"),setTimeout(()=>md.classList.remove("on"),180),qt.play("respawn"))}function sg(n,e=1.9){let t=_d(n),i=lt[n];return!t||St[n].state!=="free"||St.sun.carrying?!1:Math.hypot(t.x-i.pos.x,t.z-i.pos.z)<e&&Math.abs(t.y-i.pos.y)<1}function Yo(n,e){if(O.hold!==n&&(O.hold=n,e&&O.kind!=="solo"&&O.net.sendEvent("hold",{on:n}),n)){qt.play("heart");let t=lt.sun.pos,i=lt.moon.pos;Vn.hearts(new P().addVectors(t,_d("sun")||i).multiplyScalar(.5),16744118),O.holdHintShown||(O.holdHintShown=!0,Wn.toast("Holding hands \u{1F49E} Jump together!"))}}function e2(n){let e=St[O.role],t=e.body;(Math.hypot(t.vel.x,t.vel.z)>.05||!t.grounded)&&(e.lastMoving=n);let s=n-e.lastMoving<600?66:500;if(n-O.lastSend<s)return;O.lastSend=n;let r={t:Math.round(Vl()),v:[Yn(t.vel.x),Yn(t.vel.y),Yn(t.vel.z)],r:Yn(mt[O.role].yaw),g:t.grounded?1:0,k:e.k,m:e.anim},o=null;e.state==="carried"&&O.track.has?(o=O.track.pos,r.b=Kt(O.role)):t.grounded&&t.ground&&(t.ground.id==="raft"&&Ve.movers?.raft?o=Ve.movers.raft.pos(Vl(),new P):t.ground===En[Kt(O.role)]&&O.track.has&&(o=O.track.pos),o&&(r.b=t.ground.id==="raft"?"raft":Kt(O.role))),r.p=o?[Yn(t.pos.x-o.x),Yn(t.pos.y-o.y),Yn(t.pos.z-o.z)]:[Yn(t.pos.x),Yn(t.pos.y),Yn(t.pos.z)],O.net.sendState(r)}function t2(n,e){return n==="raft"?Ve.movers?.raft?Ve.movers.raft.pos(Vl(),e):null:n===O.role?e.copy(lt[O.role].pos):null}var kl=new P;function n2(n){let e=O.cam;if(O.mode==="lobby"||O.mode==="connecting"){let h=O.t*.06,u=Ve.lobbyCam||{cx:6,cz:-2,r:24,h:10},d=u.r*(Sn.aspect<1?1.5:1);Sn.position.set(u.cx+Math.sin(h)*d,u.h+Math.sin(O.t*.1)*1.5,u.cz+Math.cos(h)*d),Sn.lookAt(u.cx,.5,u.cz);return}let t=vi.takeCam();(t.x||t.y)&&(e.yaw-=t.x*.0065,e.pitch=Ci(e.pitch+t.y*.0045,-.2,1.2),e.lastDrag=O.t);let i=lt[O.active],s=Math.hypot(i.vel.x,i.vel.z);if(s>1.5&&O.t-e.lastDrag>1.2){let h=Math.atan2(-i.vel.x,-i.vel.z),u=tl(e.yaw,h);Math.abs(u)<1.75&&(e.yaw+=Ci(u,-1,1)*Math.min(1,s/$y)*.9*n)}kl.copy(i.pos),kl.y+=i.h*.8,e.target.x=_n(e.target.x,kl.x,12,n),e.target.z=_n(e.target.z,kl.z,12,n),e.target.y=_n(e.target.y,kl.y,i.grounded?8:3.5,n);let r=vi.takeZoom();r!==1&&(e.zoom=Ci(e.zoom*r,.55,1.8),_t.set("camZoom",+e.zoom.toFixed(2)));let o=e.dist*e.zoom*(Sn.aspect<1?1.2:1)*(Ve.kid?.88:1),a=Math.cos(e.pitch);Jm.set(Math.sin(e.yaw)*a,Math.sin(e.pitch),Math.cos(e.yaw)*a);let l=i2(e.target,Jm,o),c=Math.min(o,Math.max(1.4,l-.35));e.cur=c<e.cur?c:_n(e.cur,c,2.5,n),Sn.position.copy(e.target).addScaledVector(Jm,e.cur),Sn.position.y<e.target.y-1&&(Sn.position.y=e.target.y-1),Sn.lookAt(e.target),s2()}var Jm=new P;function i2(n,e,t){let i=1/0,s=.25;for(let r of Ve.colliders){if(r.disabled||r.noCam||(r.type==="box"?Math.min(r.x1-r.x0,r.z1-r.z0)<.5:r.r<.45))continue;let o=0,a=t,l=r.bottom-s,c=r.top+.08;if(Math.abs(e.y)<1e-6){if(n.y<l||n.y>c)continue}else{let h=(l-n.y)/e.y,u=(c-n.y)/e.y;if(h>u&&([h,u]=[u,h]),o=Math.max(o,h),a=Math.min(a,u),o>a)continue}if(r.type==="box")for(let[h,u,d,f]of[[n.x,e.x,r.x0-s,r.x1+s],[n.z,e.z,r.z0-s,r.z1+s]]){if(Math.abs(u)<1e-6){(h<d||h>f)&&(o=1,a=0);continue}let p=(d-h)/u,_=(f-h)/u;p>_&&([p,_]=[_,p]),o=Math.max(o,p),a=Math.min(a,_)}else{let h=n.x-r.x,u=n.z-r.z,d=r.r+s,f=e.x*e.x+e.z*e.z,p=2*(h*e.x+u*e.z),_=h*h+u*u-d*d;if(f<1e-8){if(_>0)continue}else{let m=p*p-4*f*_;if(m<0)continue;let g=Math.sqrt(m);o=Math.max(o,(-p-g)/(2*f)),a=Math.min(a,(-p+g)/(2*f))}}o<=a&&o>.05&&o<i&&(i=o)}return i}var zl=new Ei,Hl=new P,ad=new P,Km=null,Py=null;function s2(){Py!==Ve&&(Py=Ve,Km=[],Ve.root.traverse(e=>{!e.isMesh||e.isInstancedMesh||e.userData.noHide||!e.frustumCulled||(e.geometry.boundingSphere||e.geometry.computeBoundingSphere(),Km.push(e))})),Hl.copy(r2()).sub(Sn.position);let n=Hl.length();Hl.divideScalar(n||1);for(let e of Km){if(e.userData.hidCam&&(e.visible=!0),zl.copy(e.geometry.boundingSphere).applyMatrix4(e.matrixWorld),zl.radius>2.4)continue;ad.copy(zl.center).sub(Sn.position);let t=Math.max(0,Math.min(ad.dot(Hl),n-.8));ad.copy(Sn.position).addScaledVector(Hl,t),ad.distanceToSquared(zl.center)<(zl.radius*.85)**2?(e.visible=!1,e.userData.hidCam=!0):e.userData.hidCam&&(e.userData.hidCam=!1)}}var r2=()=>O.cam.target,ld=Dt("#partner-arrow"),Zi=new P;function o2(n){if(!n||O.mode!=="play"){ld.hidden=!0;return}let e=O.kind==="solo"?Kt(O.active):Kt(O.role);Zi.copy(mt[e].root.position),Zi.y+=.6,Zi.project(Sn);let t=Zi.z>1;if(!t&&Math.abs(Zi.x)<.95&&Math.abs(Zi.y)<.92){ld.hidden=!0;return}let i=t?-Zi.x:Zi.x,s=t?-Zi.y:Zi.y,r=Math.max(Math.abs(i),Math.abs(s))||1;i/=r,s/=r;let o=innerWidth,a=innerHeight;ld.hidden=!1,Dt("#partner-arrow-icon").textContent=$n[e];let l=Ci((i*.5+.5)*o,34,o-34),c=Ci((-s*.5+.5)*a,70,l>o-240?a-200:a-34);ld.style.transform=`translate(${l}px, ${c}px)`}var Ny=performance.now(),cd=0,Zm=0,Ly=0,rg={x:0,y:0};gd();function Zy(n){requestAnimationFrame(Zy);let e=(n-Ny)/1e3;Ny=n;let t=Math.min(.05,Math.max(.001,e));O.t+=t;let i=Vl();Ve.update(i,O.t,t);let s=O.mode==="play"||O.mode==="menu",r=Kt(O.role),o=!1;if(s){if(O.kind!=="solo"){let f=O.net.status.partnerOnline&&O.track.sample(Date.now(),t,t2);o=!!f,f&&(mt[r].root.position.copy(O.track.pos),mt[r].setYaw(eu(mt[r].yaw,O.track.yaw,18,t)),cu(En[r],O.track.pos,lt[r].h)),En[r].disabled=!f||O.track.mode===Tt.carried;let p=St.sun;O.role==="sun"&&p.carrying&&(O.track.mode===Tt.carried?(p.liftSeen=!0,p.notCarriedT=0):(!p.liftSeen&&performance.now()-p.liftT>4e3||p.liftSeen&&(p.notCarriedT+=t)>.6)&&(p.carrying=!1))}else o=!0,En.moon.disabled=St.moon.state==="carried";O.cooldown.ability-=t,O.cooldown.heart-=t;let a=vi.consume("jump"),l=vi.consume("dash");if(vi.consume("ability")&&O.cooldown.ability<=0){O.cooldown.ability=.45;let f=O.kind==="solo"?O.active:O.role;f==="sun"&&Ky()||(Xy(f),O.net.sendEvent("ability"))}if(vi.consume("heart")&&O.cooldown.heart<=0){O.cooldown.heart=.6;let f=O.kind==="solo"?O.active:O.role;O.hold?Yo(!1,!0):sg(f)?Yo(!0,!0):(Vn.hearts(mt[f].root.position,f==="sun"?16754253:11832575),qt.play("heart"),O.net.sendEvent("heart"))}if(O.hold){let f=O.kind==="solo"?O.active:O.role;sg(f,3.2)?(O.holdHeartT-=t)<0&&(O.holdHeartT=2.6,Vn.hearts(mt[f].root.position,16744118)):Yo(!1,!1)}vi.consume("swap")&&O.kind==="solo"&&(O.active=Kt(O.active),document.body.classList.remove("sun","moon"),document.body.classList.add(O.active),Wn.toast(`Now playing ${$n[O.active]} ${bn[O.active]}`));let c=O.kind==="solo"?Zs:[O.role];for(let f of c){let p=f===O.active&&O.mode==="play";ig(St[f],p?vi.state.move:rg,p&&a,p&&vi.state.jumpHeld,t,p&&l)}for(let f of c){cu(En[f],lt[f].pos,lt[f].h);let p=lt[f],_=mt[f];_.root.position.copy(p.pos);let m=St[f],g=Math.hypot(p.vel.x,p.vel.z);m.state==="free"&&m.anim===Tt.wall?_.setYaw(eu(_.yaw,Math.atan2(-m.wallNX,-m.wallNZ),14,t)):m.state==="free"&&g>.4&&_.setYaw(eu(_.yaw,Math.atan2(p.vel.x,p.vel.z),14,t))}let h=Ve.towerTop;if(h){let f=p=>p&&p.y>h.y-.15&&p.x>h.x0&&p.x<h.x1&&p.z>h.z0&&p.z<h.z1;(c.some(p=>f(lt[p].pos))||o&&O.kind!=="solo"&&f(O.track.pos))&&Ve.setTowerOccupied(!0)}if(Ve.story&&O.save){let f={sun:null,moon:null};for(let p of c)f[p]=lt[p].pos;O.kind!=="solo"&&o&&(f[r]=O.track.pos),Ve.story({roles:c,pos:f,holding:O.hold,save:O.save,setSave:(p,_)=>O.net.setSave(p,_),caption:Gl,finish:GI},O.t)}let d=(O.kind==="solo"?O.active:O.role)==="sun"?St.sun.carrying?"Throw":Jy()?"Lift":"Shine":"Tide";d!==O.abilityLabel&&(O.abilityLabel=d,Dt("#ability-label").textContent=d);for(let f of Ve.stars)if(!f.collected)for(let p of c){let _=lt[p];if(Math.abs(_.pos.x-f.pos.x)<.95&&Math.abs(_.pos.z-f.pos.z)<.95&&f.pos.y-_.pos.y>-.6&&f.pos.y-_.pos.y<1.6){f.collected=!0,Vn.sparks(f.pos.clone().setY(f.pos.y-.6),16769658,24),qt.play("star"),O.net.collectStar(f.id),Yy(!0);break}}O.kind!=="solo"&&e2(n)}for(let a of Zs){let l=mt[a],c=!s||O.kind==="solo"||a===O.role||o;if(l.root.visible=c,!c)continue;let h=0;if(s&&O.hold){let u=l.root.position,d=mt[Kt(a)].root.position,f=l.yaw;h=Math.cos(f)*(d.x-u.x)-Math.sin(f)*(d.z-u.z)>=0?1:-1}if(s&&(O.kind==="solo"||a===O.role)){let u=lt[a];l.animate(t,{speed:Math.hypot(u.vel.x,u.vel.z),grounded:u.grounded,vy:u.vel.y,mode:St[a].anim,hold:h})}else if(s){let u=O.track.vel;l.animate(t,{speed:Math.hypot(u.x,u.z),grounded:O.track.grounded,vy:u.y,mode:O.track.mode,hold:h})}else l.animate(t,{speed:0,grounded:!0,vy:0,mode:Tt.normal})}if(n2(t),w_(O.t,t,Sn),kI.update(O.cam.target,O.t,t),o2(o),Vn.update(t,O.t),Br.render(t),e<.1&&(cd+=e,Zm++),cd>2.5){let a=cd/Zm;Ly=1/a,a>1/48&&hd<Uy.length-1&&O.t>4&&!xr.has("q")&&(hd++,gd()),cd=0,Zm=0}UI&&(Dt("#debug").hidden=!1,Dt("#debug").textContent=`fps ${Ly.toFixed(0)}  q${hd} dpr ${Ks.getPixelRatio()}
delay ${Math.round(O.track.delay??0)}ms  jitter ${O.track.jitter()}ms  buf ${O.track.buf.length}
ping ${O.net?.status.ping??"-"}  partner ${O.net?.status.partnerPing??"-"}
pos ${lt[O.active].pos.toArray().map(a=>a.toFixed(1)).join(", ")}`)}requestAnimationFrame(Zy);window.__eclipse={G:O,bodies:lt,chars:mt,get world(){return Ve},input:vi,pcols:En,ctls:St,switchLevel:Vy,setHold:Yo,sim(n,e={}){let t=e.role||O.active,i=1/60,s=[],r=e.t0??Vl();for(let o=0;o<n;o++){r+=1e3/60,Ve.update(r,O.t,i);for(let a of Zs)cu(En[a],lt[a].pos,lt[a].h);if(O.kind==="solo"&&(En.moon.disabled=St.moon.state==="carried"),ig(St[t],e.move||rg,(e.jumpAt||[]).includes(o),e.hold??!0,i,(e.dashAt||[]).includes(o)),O.kind==="solo")for(let a of Zs)a!==t&&ig(St[a],rg,(e.otherJumpAt||[]).includes(o),!1,i);e.actionAt&&e.actionAt.includes(o)&&Ky(),e.every&&o%e.every===0&&s.push([+lt[t].pos.x.toFixed(2),+lt[t].pos.y.toFixed(2),+lt[t].pos.z.toFixed(2),lt[t].grounded?1:0,St[t].state[0]+St[t].anim])}return{pos:lt[t].pos.toArray().map(o=>+o.toFixed(3)),grounded:lt[t].grounded,state:St[t].state,anim:St[t].anim,trace:s}}};
