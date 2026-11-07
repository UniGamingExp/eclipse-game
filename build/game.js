var fg=0,Nd=1,pg=2;var tr=1,mg=2,Qr=3,Cs=0,_n=1,wn=2,ts=0,eo=1,Rs=2,Ld=3,Dd=4,gg=5;var nr=100,_g=101,yg=102,vg=103,xg=104,Sg=200,Mg=201,bg=202,Eg=203,Od=204,Fd=205,wg=206,Tg=207,Ag=208,Cg=209,Rg=210,Ig=211,Pg=212,Ng=213,Lg=214,ic=0,sc=1,rc=2,kr=3,oc=4,ac=5,lc=6,cc=7,Ud=0,Dg=1,Og=2,Ni=0,Ma=1,ba=2,Ea=3,wa=4,Ta=5,Aa=6,ir=7;var Bd=300,sr=301,to=302,Bc=303,kc=304,hc=1e3,wi=1001,uc=1002,cn=1003,Fg=1004;var Ca=1005;var Cn=1006,zc=1007;var ns=1008;var Un=1009,kd=1010,zd=1011,no=1012,Hc=1013,yi=1014,ii=1015,nn=1016,Gc=1017,Vc=1018,rr=1020,Hd=35902,Gd=35899,Vd=1021,Wd=1022,vi=1023,Ji=1026,is=1027,Wc=1028,Xc=1029,Is=1030,qc=1031;var Yc=1033,Ra=33776,Ia=33777,Pa=33778,Na=33779,$c=35840,Jc=35841,Kc=35842,Zc=35843,jc=36196,Qc=37492,eh=37496,th=37488,nh=37489,La=37490,ih=37491,sh=37808,rh=37809,oh=37810,ah=37811,lh=37812,ch=37813,hh=37814,uh=37815,dh=37816,fh=37817,ph=37818,mh=37819,gh=37820,_h=37821,yh=36492,vh=36494,xh=36495,Sh=36283,Mh=36284,Da=36285,bh=36286;var Ho=2300,dc=2301,tc=2302,vd=2303,xd=2400,Sd=2401,Md=2402;var Ug=3200;var Eh=0,Bg=1,ss="",mn="srgb",Go="srgb-linear",Vo="linear",ft="srgb";var nc=7680;var kg=519,zg=512,Hg=513,Gg=514,Xd=515,Vg=516,Wg=517,qd=518,Yd=519,Xg=35044;var $d="300 es",ti=2e3,zr=2001;function sx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qg(){let n=Wo("canvas");return n.style.display="block",n}var Dm={},Hr=null;function Jd(...n){let e="THREE."+n.shift();Hr?Hr("log",e,...n):console.log(e,...n)}function Yg(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function We(...n){n=Yg(n);let e="THREE."+n.shift();if(Hr)Hr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Xe(...n){n=Yg(n);let e="THREE."+n.shift();if(Hr)Hr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Js(...n){let e=n.join(" ");e in Dm||(Dm[e]=!0,We(...n))}function $g(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Jg={[ic]:ic,[rc]:lc,[oc]:oc,[kr]:ac,[sc]:sc,[lc]:rc,[cc]:cc,[ac]:kr},Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $u=Math.PI/180,fc=180/Math.PI;function io(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function ox(n,e){return(n%e+e)%e}function Ju(n,e,t){return(1-t)*n+t*e}function Kg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Kd(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ax(n,e){if(e.constructor===Float32Array)return n;let t=Kd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function lx(n,e){if(e.constructor===Float32Array)return n;let t=Kd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var nf=class nf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nf.prototype.isVector2=!0;var re=nf,Ci=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(u!==_||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*_;m<0&&(f=-f,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);g=Math.sin(g*y)/M,a=Math.sin(a*y)/M,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+_*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+_*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sf=class sf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Om.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Om.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ku.copy(this).projectOnVector(e),this.sub(Ku)}reflect(e){return this.sub(Ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sf.prototype.isVector3=!0;var P=sf,Ku=new P,Om=new Ci,rf=class rf{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],_=s[0],m=s[3],g=s[6],y=s[1],M=s[4],S=s[7],w=s[2],T=s[5],v=s[8];return r[0]=o*_+a*y+l*w,r[3]=o*m+a*M+l*T,r[6]=o*g+a*S+l*v,r[1]=c*_+h*y+u*w,r[4]=c*m+h*M+u*T,r[7]=c*g+h*S+u*v,r[2]=f*_+d*y+p*w,r[5]=f*m+d*M+p*T,r[8]=f*g+d*S+p*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zu.makeScale(e,t)),this}rotate(e){return Js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zu.makeRotation(-e)),this}translate(e,t){return Js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rf.prototype.isMatrix3=!0;var Ye=rf,Zu=new Ye,Fm=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cx(){let n={enabled:!0,workingColorSpace:Go,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=Br(s.r),s.g=Br(s.g),s.b=Br(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?Vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Go]:{primaries:e,whitePoint:i,transfer:Vo,toXYZ:Fm,fromXYZ:Um,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Fm,fromXYZ:Um,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}var at=cx();function $i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Br(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Er,pc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Er===void 0&&(Er=Wo("canvas")),Er.width=e.width,Er.height=e.height;let s=Er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Er}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($i(t[i]/255)*255):t[i]=$i(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hx=0,Gr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ju(s[o].image)):r.push(ju(s[o]))}else r=ju(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ju(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var ux=0,Qu=new P,Rn=class n extends Ai{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=wi,s=wi,r=Cn,o=ns,a=vi,l=Un,c=n.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=io(),this.name="",this.source=new Gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Qu).x}get height(){return this.source.getSize(Qu).y}get depth(){return this.source.getSize(Qu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hc:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hc:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Bd;Rn.DEFAULT_ANISOTROPY=1;var of=class of{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,S=(d+1)/2,w=(g+1)/2,T=(h+f)/4,v=(u+_)/4,x=(p+m)/4;return M>S&&M>w?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=T/i,r=v/i):S>w?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=v/r,s=x/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};of.prototype.isVector4=!0;var Dt=of,mc=class extends Ai{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Rn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends mc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Xo=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gc=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Uc=class Uc{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,p,_,m)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/wr.setFromMatrixColumn(e,0).length(),r=1/wr.setFromMatrixColumn(e,1).length(),o=1/wr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dx,e,fx)}lookAt(e,t,i){let s=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),gs.crossVectors(i,Vn),gs.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),gs.crossVectors(i,Vn)),gs.normalize(),Il.crossVectors(Vn,gs),s[0]=gs.x,s[4]=Il.x,s[8]=Vn.x,s[1]=gs.y,s[5]=Il.y,s[9]=Vn.y,s[2]=gs.z,s[6]=Il.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],_=i[6],m=i[10],g=i[14],y=i[3],M=i[7],S=i[11],w=i[15],T=s[0],v=s[4],x=s[8],C=s[12],A=s[1],N=s[5],F=s[9],U=s[13],I=s[2],B=s[6],W=s[10],k=s[14],se=s[3],X=s[7],K=s[11],J=s[15];return r[0]=o*T+a*A+l*I+c*se,r[4]=o*v+a*N+l*B+c*X,r[8]=o*x+a*F+l*W+c*K,r[12]=o*C+a*U+l*k+c*J,r[1]=h*T+u*A+f*I+d*se,r[5]=h*v+u*N+f*B+d*X,r[9]=h*x+u*F+f*W+d*K,r[13]=h*C+u*U+f*k+d*J,r[2]=p*T+_*A+m*I+g*se,r[6]=p*v+_*N+m*B+g*X,r[10]=p*x+_*F+m*W+g*K,r[14]=p*C+_*U+m*k+g*J,r[3]=y*T+M*A+S*I+w*se,r[7]=y*v+M*N+S*B+w*X,r[11]=y*x+M*F+S*W+w*K,r[15]=y*C+M*U+S*k+w*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],y=l*d-c*f,M=a*d-c*u,S=a*f-l*u,w=o*d-c*h,T=o*f-l*h,v=o*u-a*h;return t*(_*y-m*M+g*S)-i*(p*y-m*w+g*T)+s*(p*M-_*w+g*v)-r*(p*S-_*T+m*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],y=t*a-i*o,M=t*l-s*o,S=t*c-r*o,w=i*l-s*a,T=i*c-r*a,v=s*c-r*l,x=h*_-u*p,C=h*m-f*p,A=h*g-d*p,N=u*m-f*_,F=u*g-d*_,U=f*g-d*m,I=y*U-M*F+S*N+w*A-T*C+v*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(a*U-l*F+c*N)*B,e[1]=(s*F-i*U-r*N)*B,e[2]=(_*v-m*T+g*w)*B,e[3]=(f*T-u*v-d*w)*B,e[4]=(l*A-o*U-c*C)*B,e[5]=(t*U-s*A+r*C)*B,e[6]=(m*S-p*v-g*M)*B,e[7]=(h*v-f*S+d*M)*B,e[8]=(o*F-a*A+c*x)*B,e[9]=(i*A-t*F-r*x)*B,e[10]=(p*T-_*S+g*y)*B,e[11]=(u*S-h*T-d*y)*B,e[12]=(a*C-o*N-l*x)*B,e[13]=(t*N-i*C+s*x)*B,e[14]=(_*M-p*w-m*y)*B,e[15]=(h*w-u*M+f*y)*B,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,_=o*h,m=o*u,g=a*u,y=l*c,M=l*h,S=l*u,w=i.x,T=i.y,v=i.z;return s[0]=(1-(_+g))*w,s[1]=(d+S)*w,s[2]=(p-M)*w,s[3]=0,s[4]=(d-S)*T,s[5]=(1-(f+g))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(p+M)*v,s[9]=(m-y)*v,s[10]=(1-(f+_))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=wr.set(s[0],s[1],s[2]).length(),a=wr.set(s[4],s[5],s[6]).length(),l=wr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),di.copy(this);let c=1/o,h=1/a,u=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,t.setFromRotationMatrix(di),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=ti,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===ti)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===zr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ti,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===ti)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===zr)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Uc.prototype.isMatrix4=!0;var bt=Uc,wr=new P,di=new bt,dx=new P(0,0,0),fx=new P(1,1,1),gs=new P,Il=new P,Vn=new P,Bm=new bt,km=new Ci,Ki=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return km.setFromEuler(this),this.setFromQuaternion(km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ki.DEFAULT_ORDER="XYZ";var qo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},px=0,zm=new P,Tr=new Ci,Vi=new bt,Pl=new P,No=new P,mx=new P,gx=new Ci,Hm=new P(1,0,0),Gm=new P(0,1,0),Vm=new P(0,0,1),Wm={type:"added"},_x={type:"removed"},Ar={type:"childadded",child:null},ed={type:"childremoved",child:null},jt=class n extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new Ki,i=new Ci,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ye}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(Hm,e)}rotateY(e){return this.rotateOnAxis(Gm,e)}rotateZ(e){return this.rotateOnAxis(Vm,e)}translateOnAxis(e,t){return zm.copy(e).applyQuaternion(this.quaternion),this.position.add(zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hm,e)}translateY(e){return this.translateOnAxis(Gm,e)}translateZ(e){return this.translateOnAxis(Vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pl.copy(e):Pl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(No,Pl,this.up):Vi.lookAt(Pl,No,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),Tr.setFromRotationMatrix(Vi),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wm),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_x),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wm),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};jt.DEFAULT_UP=new P(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},yx={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function td(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ie=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=ox(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=td(o,r,e+1/3),this.g=td(o,r,e),this.b=td(o,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=mn){function i(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){let i=Zg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return at.workingToColorSpace(bn.copy(this),e),Math.round(st(bn.r*255,0,255))*65536+Math.round(st(bn.g*255,0,255))*256+Math.round(st(bn.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(bn.copy(this),t);let i=bn.r,s=bn.g,r=bn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=mn){at.workingToColorSpace(bn.copy(this),e);let t=bn.r,i=bn.g,s=bn.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+t,_s.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_s),e.getHSL(Nl);let i=Ju(_s.h,Nl.h,t),s=Ju(_s.s,Nl.s,t),r=Ju(_s.l,Nl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Ie;Ie.NAMES=Zg;var Yo=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$o=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fi=new P,Wi=new P,nd=new P,Xi=new P,Cr=new P,Rr=new P,Xm=new P,id=new P,sd=new P,rd=new P,od=new Dt,ad=new Dt,ld=new Dt,Ss=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),fi.subVectors(e,t),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){fi.subVectors(s,t),Wi.subVectors(i,t),nd.subVectors(e,t);let o=fi.dot(fi),a=fi.dot(Wi),l=fi.dot(nd),c=Wi.dot(Wi),h=Wi.dot(nd),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return od.setScalar(0),ad.setScalar(0),ld.setScalar(0),od.fromBufferAttribute(e,t),ad.fromBufferAttribute(e,i),ld.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(od,r.x),o.addScaledVector(ad,r.y),o.addScaledVector(ld,r.z),o}static isFrontFacing(e,t,i,s){return fi.subVectors(i,t),Wi.subVectors(e,t),fi.cross(Wi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),fi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Cr.subVectors(s,i),Rr.subVectors(r,i),id.subVectors(e,i);let l=Cr.dot(id),c=Rr.dot(id);if(l<=0&&c<=0)return t.copy(i);sd.subVectors(e,s);let h=Cr.dot(sd),u=Rr.dot(sd);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Cr,o);rd.subVectors(e,r);let d=Cr.dot(rd),p=Rr.dot(rd);if(p>=0&&d<=p)return t.copy(r);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Rr,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Xm.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(Xm,a);let g=1/(m+_+f);return o=_*g,a=f*g,t.copy(i).addScaledVector(Cr,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ri=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ll.copy(i.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),Dl.subVectors(this.max,Lo),Ir.subVectors(e.a,Lo),Pr.subVectors(e.b,Lo),Nr.subVectors(e.c,Lo),ys.subVectors(Pr,Ir),vs.subVectors(Nr,Pr),Xs.subVectors(Ir,Nr);let t=[0,-ys.z,ys.y,0,-vs.z,vs.y,0,-Xs.z,Xs.y,ys.z,0,-ys.x,vs.z,0,-vs.x,Xs.z,0,-Xs.x,-ys.y,ys.x,0,-vs.y,vs.x,0,-Xs.y,Xs.x,0];return!cd(t,Ir,Pr,Nr,Dl)||(t=[1,0,0,0,1,0,0,0,1],!cd(t,Ir,Pr,Nr,Dl))?!1:(Ol.crossVectors(ys,vs),t=[Ol.x,Ol.y,Ol.z],cd(t,Ir,Pr,Nr,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qi=[new P,new P,new P,new P,new P,new P,new P,new P],pi=new P,Ll=new Ri,Ir=new P,Pr=new P,Nr=new P,ys=new P,vs=new P,Xs=new P,Lo=new P,Dl=new P,Ol=new P,qs=new P;function cd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){qs.fromArray(n,r);let a=s.x*Math.abs(qs.x)+s.y*Math.abs(qs.y)+s.z*Math.abs(qs.z),l=e.dot(qs),c=t.dot(qs),h=i.dot(qs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Zt=new P,Fl=new re,vx=0,Xn=class extends Ai{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xg,this.updateRanges=[],this.gpuType=ii,this.version=0,this._normalizationScale=e!==void 0?Kd(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fl.fromBufferAttribute(this,t),Fl.applyMatrix3(e),this.setXY(t,Fl.x,Fl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ax(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):lx(e,this.array)}};var Jo=class extends Xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ko=class extends Xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var je=class extends Xn{constructor(e,t,i){super(new Float32Array(e),t,i)}},xx=new Ri,Do=new P,hd=new P,Zi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):xx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);let t=Do.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Do,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(hd)),this.expandByPoint(Do.copy(e.center).sub(hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sx=0,ei=new bt,ud=new jt,Lr=new P,Wn=new Ri,Oo=new Ri,ln=new P,Vt=class n extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sx(e)?Ko:Jo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Wn.min,Oo.min),Wn.expandByPoint(ln),ln.addVectors(Wn.max,Oo.max),Wn.expandByPoint(ln)):(Wn.expandByPoint(Oo.min),Wn.expandByPoint(Oo.max))}Wn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ln));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ln.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(e,c),ln.add(Lr)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Xn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)a[C]=new P,l[C]=new P;let h=new P,u=new P,f=new P,d=new re,p=new re,_=new re,m=new P,g=new P;function y(C,A,N){c[C]=c[A]=c[N]=1,h.fromBufferAttribute(i,C),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,N),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,N),u.sub(h),f.sub(h),p.sub(d),_.sub(d);let F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(F),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(F),a[C].add(m),a[A].add(m),a[N].add(m),l[C].add(g),l[A].add(g),l[N].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,A=M.length;C<A;++C){let N=M[C],F=N.start,U=N.count;for(let I=F,B=F+U;I<B;I+=3)y(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let S=new P,w=new P,T=new P,v=new P;function x(C){T.fromBufferAttribute(s,C),v.copy(T);let A=a[C];S.copy(A),S.sub(T.multiplyScalar(T.dot(A))).normalize(),w.crossVectors(v,A);let F=w.dot(l[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,F)}for(let C=0,A=i.count;C<A;++C)c[C]&&x(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Xn(f,h,u)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dd=new P,Mx=new P,bx=new Ye,mi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=dd.subVectors(i,t).cross(Mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(dd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||bx.getNormalMatrix(e),s=this.coplanarPoint(dd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ex=0,ji=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=io(),this.name="",this.type="Material",this.blending=eo,this.side=Cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=Fd,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nc,this.stencilZFail=nc,this.stencilZPass=nc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new mi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new re().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Yi=new P,fd=new P,Ul=new P,Bl=new P,Zo=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){fd.copy(e).add(t).multiplyScalar(.5),Ul.copy(t).sub(e).normalize(),Bl.copy(this.origin).sub(fd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ul),a=Bl.dot(this.direction),l=-Bl.dot(Ul),c=Bl.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fd).addScaledVector(Ul,f),d}intersectSphere(e,t){if(e.radius<0)return null;Yi.subVectors(e.center,this.origin);let i=Yi.dot(this.direction),s=Yi.dot(Yi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=i.x-o.x,y=i.y-o.y,M=i.z-o.z,S=Math.abs(l),w=Math.abs(c),T=Math.abs(h),v,x,C,A,N,F,U,I,B,W,k,se;if(S>=w&&S>=T?(C=l,F=u,B=p,se=g,l>=0?(v=c,x=h,A=f,N=d,U=_,I=m,W=y,k=M):(v=h,x=c,A=d,N=f,U=m,I=_,W=M,k=y)):w>=T?(C=c,F=f,B=_,se=y,c>=0?(v=h,x=l,A=d,N=u,U=m,I=p,W=M,k=g):(v=l,x=h,A=u,N=d,U=p,I=m,W=g,k=M)):(C=h,F=d,B=m,se=M,h>=0?(v=l,x=c,A=u,N=f,U=p,I=_,W=g,k=y):(v=c,x=l,A=f,N=u,U=_,I=p,W=y,k=g)),C===0)return null;let X=v/C,K=x/C,J=1/C,Ae=A-X*F,Ce=N-K*F,Y=U-X*B,Me=I-K*B,Pe=W-X*se,ze=k-K*se,be=Pe*Me-ze*Y,Ue=Ae*ze-Ce*Pe,_t=Y*Ce-Me*Ae;if(s){if(be<0||Ue<0||_t<0)return null}else if((be<0||Ue<0||_t<0)&&(be>0||Ue>0||_t>0))return null;let Fe=be+Ue+_t;if(Fe===0)return null;let Qe=J*(be*F+Ue*B+_t*se);return(Fe>0?Qe<0:Qe>0)?null:this.at(Qe/Fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fn=class extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qm=new bt,Ys=new Zo,kl=new Zi,Ym=new P,zl=new P,Hl=new P,Gl=new P,pd=new P,Vl=new P,$m=new P,Wl=new P,Lt=class extends jt{constructor(e=new Vt,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Vl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(pd.fromBufferAttribute(u,e),o?Vl.addScaledVector(pd,h):Vl.addScaledVector(pd.sub(t),h))}t.add(Vl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(r),Ys.copy(e.ray).recast(e.near),!(kl.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(kl,Ym)===null||Ys.origin.distanceToSquared(Ym)>(e.far-e.near)**2))&&(qm.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(qm),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,w=M;S<w;S+=3){let T=a.getX(S),v=a.getX(S+1),x=a.getX(S+2);s=Xl(this,g,e,i,c,h,u,T,v,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);s=Xl(this,o,e,i,c,h,u,y,M,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,w=M;S<w;S+=3){let T=S,v=S+1,x=S+2;s=Xl(this,g,e,i,c,h,u,T,v,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=m,M=m+1,S=m+2;s=Xl(this,o,e,i,c,h,u,y,M,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function wx(n,e,t,i,s,r,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Cs,a),l===null)return null;Wl.copy(a),Wl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Wl);return c<t.near||c>t.far?null:{distance:c,point:Wl.clone(),object:n}}function Xl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,zl),n.getVertexPosition(l,Hl),n.getVertexPosition(c,Gl);let h=wx(n,e,t,i,zl,Hl,Gl,$m);if(h){let u=new P;Ss.getBarycoord($m,zl,Hl,Gl,u),s&&(h.uv=Ss.getInterpolatedAttribute(s,a,l,c,u,new re)),r&&(h.uv1=Ss.getInterpolatedAttribute(r,a,l,c,u,new re)),o&&(h.normal=Ss.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};Ss.getNormal(zl,Hl,Gl,f.normal),h.face=f,h.barycoord=u}return h}var jo=class extends Rn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=cn,h=cn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qo=class extends Xn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Dr=new bt,Jm=new bt,ql=[],Km=new Ri,Tx=new bt,Fo=new Lt,Uo=new Zi,Ks=class extends Lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Tx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Dr),Km.copy(e.boundingBox).applyMatrix4(Dr),this.boundingBox.union(Km)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Dr),Uo.copy(e.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(Uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(i),e.ray.intersectsSphere(Uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Dr),Jm.multiplyMatrices(i,Dr),Fo.matrixWorld=Jm,Fo.raycast(e,ql);for(let o=0,a=ql.length;o<a;o++){let l=ql[o];l.instanceId=r,l.object=this,t.push(l)}ql.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new jo(new Float32Array(s*this.count),s,this.count,Wc,ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$s=new Zi,Ax=new re(.5,.5),Yl=new P,Ms=class{constructor(e=new mi,t=new mi,i=new mi,s=new mi,r=new mi,o=new mi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],y=r[12],M=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-o,d-h,g-p,w-y).normalize(),s[1].setComponents(c+o,d+h,g+p,w+y).normalize(),s[2].setComponents(c+a,d+u,g+_,w+M).normalize(),s[3].setComponents(c-a,d-u,g-_,w-M).normalize(),i)s[4].setComponents(l,f,m,S).normalize(),s[5].setComponents(c-l,d-f,g-m,w-S).normalize();else if(s[4].setComponents(c-l,d-f,g-m,w-S).normalize(),t===ti)s[5].setComponents(c+l,d+f,g+m,w+S).normalize();else if(t===zr)s[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){$s.center.set(0,0,0);let t=Ax.distanceTo(e.center);return $s.radius=.7071067811865476+t,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Yl.x=s.normal.x>0?e.max.x:e.min.x,Yl.y=s.normal.y>0?e.max.y:e.min.y,Yl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zm=new bt,_c=class n{constructor(){this.coordinateSystem=ti,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Zm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ms),i[s].setFromProjectionMatrix(Zm,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ms),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Wr=class extends ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jm=new bt,bd=new Zo,$l=new Zi,Jl=new P,ea=class extends jt{constructor(e=new Vt,t=new Wr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(s),$l.radius+=r,e.ray.intersectsSphere($l)===!1)return;jm.copy(s).invert(),bd.copy(e.ray).applyMatrix4(jm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,_=d;p<_;p++){let m=c.getX(p);Jl.fromBufferAttribute(u,m),Qm(Jl,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,_=d;p<_;p++)Jl.fromBufferAttribute(u,p),Qm(Jl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qm(n,e,t,i,s,r,o){let a=bd.distanceSqToPoint(n);if(a<t){let l=new P;bd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ta=class extends Rn{constructor(e=[],t=sr,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qi=class extends Rn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var es=class extends Rn{constructor(e,t,i=yi,s,r,o,a=cn,l=cn,c,h=Ji,u=1){if(h!==Ji&&h!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},na=class extends es{constructor(e,t=yi,i=sr,s,r,o=cn,a=cn,l,c=Ji){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ia=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ni=class n extends Vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(u,2));function p(_,m,g,y,M,S,w,T,v,x,C){let A=S/v,N=w/x,F=S/2,U=w/2,I=T/2,B=v+1,W=x+1,k=0,se=0,X=new P;for(let K=0;K<W;K++){let J=K*N-U;for(let Ae=0;Ae<B;Ae++){let Ce=Ae*A-F;X[_]=Ce*y,X[m]=J*M,X[g]=I,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[g]=T>0?1:-1,h.push(X.x,X.y,X.z),u.push(Ae/v),u.push(1-K/x),k+=1}}for(let K=0;K<x;K++)for(let J=0;J<v;J++){let Ae=f+J+B*K,Ce=f+J+B*(K+1),Y=f+(J+1)+B*(K+1),Me=f+(J+1)+B*K;l.push(Ae,Ce,Me),l.push(Ce,Y,Me),se+=6}a.addGroup(d,se,C),d+=se,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},sa=class n extends Vt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=i*2+r,_=s+1,m=new P,g=new P;for(let y=0;y<=p;y++){let M=0,S=0,w=0,T=0;if(y<=i){let C=y/i,A=C*Math.PI/2;S=-h-e*Math.cos(A),w=e*Math.sin(A),T=-e*Math.cos(A),M=C*u}else if(y<=i+r){let C=(y-i)/r;S=-h+C*t,w=e,T=0,M=u+C*f}else{let C=(y-i-r)/i,A=C*Math.PI/2;S=h+e*Math.sin(A),w=e*Math.cos(A),T=e*Math.sin(A),M=u+f+C*u}let v=Math.max(0,Math.min(1,M/d)),x=0;y===0?x=.5/s:y===p&&(x=-.5/s);for(let C=0;C<=s;C++){let A=C/s,N=A*Math.PI*2,F=Math.sin(N),U=Math.cos(N);g.x=-w*U,g.y=S,g.z=w*F,a.push(g.x,g.y,g.z),m.set(-w*U,T,w*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+x,v)}if(y>0){let C=(y-1)*_;for(let A=0;A<s;A++){let N=C+A,F=C+A+1,U=y*_+A,I=y*_+A+1;o.push(N,F,U),o.push(F,I,U)}}}this.setIndex(o),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var In=class n extends Vt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,_=[],m=i/2,g=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(d,2));function y(){let S=new P,w=new P,T=0,v=(t-e)/i;for(let x=0;x<=r;x++){let C=[],A=x/r,N=A*(t-e)+e;for(let F=0;F<=s;F++){let U=F/s,I=U*l+a,B=Math.sin(I),W=Math.cos(I);w.x=N*B,w.y=-A*i+m,w.z=N*W,u.push(w.x,w.y,w.z),S.set(B,v,W).normalize(),f.push(S.x,S.y,S.z),d.push(U,1-A),C.push(p++)}_.push(C)}for(let x=0;x<s;x++)for(let C=0;C<r;C++){let A=_[C][x],N=_[C+1][x],F=_[C+1][x+1],U=_[C][x+1];(e>0||C!==0)&&(h.push(A,N,U),T+=3),(t>0||C!==r-1)&&(h.push(N,F,U),T+=3)}c.addGroup(g,T,0),g+=T}function M(S){let w=p,T=new re,v=new P,x=0,C=S===!0?e:t,A=S===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*A,0),f.push(0,A,0),d.push(.5,.5),p++;let N=p;for(let F=0;F<=s;F++){let I=F/s*l+a,B=Math.cos(I),W=Math.sin(I);v.x=C*W,v.y=m*A,v.z=C*B,u.push(v.x,v.y,v.z),f.push(0,A,0),T.x=B*.5+.5,T.y=W*.5*A+.5,d.push(T.x,T.y),p++}for(let F=0;F<s;F++){let U=w+F,I=N+F;S===!0?h.push(I,I+1,U):h.push(I+1,I,U),x+=3}c.addGroup(g,x,S===!0?1:2),g+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gi=class n extends In{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xr=class n extends Vt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new P,S=new P,w=new P;for(let T=0;T<t.length;T+=3)d(t[T+0],M),d(t[T+1],S),d(t[T+2],w),l(M,S,w,y)}function l(y,M,S,w){let T=w+1,v=[];for(let x=0;x<=T;x++){v[x]=[];let C=y.clone().lerp(S,x/T),A=M.clone().lerp(S,x/T),N=T-x;for(let F=0;F<=N;F++)F===0&&x===T?v[x][F]=C:v[x][F]=C.clone().lerp(A,F/N)}for(let x=0;x<T;x++)for(let C=0;C<2*(T-x)-1;C++){let A=Math.floor(C/2);C%2===0?(f(v[x][A+1]),f(v[x+1][A]),f(v[x][A])):(f(v[x][A+1]),f(v[x+1][A+1]),f(v[x+1][A]))}}function c(y){let M=new P;for(let S=0;S<r.length;S+=3)M.x=r[S+0],M.y=r[S+1],M.z=r[S+2],M.normalize().multiplyScalar(y),r[S+0]=M.x,r[S+1]=M.y,r[S+2]=M.z}function h(){let y=new P;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let S=m(y)/2/Math.PI+.5,w=g(y)/Math.PI+.5;o.push(S,1-w)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let M=o[y+0],S=o[y+2],w=o[y+4],T=Math.max(M,S,w),v=Math.min(M,S,w);T>.9&&v<.1&&(M<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,M){let S=y*3;M.x=e[S+0],M.y=e[S+1],M.z=e[S+2]}function p(){let y=new P,M=new P,S=new P,w=new P,T=new re,v=new re,x=new re;for(let C=0,A=0;C<r.length;C+=9,A+=6){y.set(r[C+0],r[C+1],r[C+2]),M.set(r[C+3],r[C+4],r[C+5]),S.set(r[C+6],r[C+7],r[C+8]),T.set(o[A+0],o[A+1]),v.set(o[A+2],o[A+3]),x.set(o[A+4],o[A+5]),w.copy(y).add(M).add(S).divideScalar(3);let N=m(w);_(T,A+0,y,N),_(v,A+2,M,N),_(x,A+4,S,N)}}function _(y,M,S,w){w<0&&y.x===1&&(o[M]=y.x-1),S.x===0&&S.z===0&&(o[M]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},qr=class n extends Xr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],r=[],o=[],a=new P,l=new bt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(st(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(st(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Yr=class extends qn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yc=class extends Yr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zd(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var eg=new P,tg=new P,md=new Zd,gd=new Zd,_d=new Zd,vc=class extends qn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(tg.subVectors(s[0],s[1]).add(s[0]),c=tg);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(eg.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=eg),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),md.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,_,m),gd.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,_,m),_d.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(md.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),gd.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),_d.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(md.calc(l),gd.calc(l),_d.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ng(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Cx(n,e){let t=1-n;return t*t*e}function Rx(n,e){return 2*(1-n)*n*e}function Ix(n,e){return n*n*e}function ko(n,e,t,i){return Cx(n,e)+Rx(n,t)+Ix(n,i)}function Px(n,e){let t=1-n;return t*t*t*e}function Nx(n,e){let t=1-n;return 3*t*t*n*e}function Lx(n,e){return 3*(1-n)*n*n*e}function Dx(n,e){return n*n*n*e}function zo(n,e,t,i,s){return Px(n,e)+Nx(n,t)+Lx(n,i)+Dx(n,s)}var ra=class extends qn{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,s.x,r.x,o.x,a.x),zo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xc=class extends qn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,s.x,r.x,o.x,a.x),zo(e,s.y,r.y,o.y,a.y),zo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oa=class extends qn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sc=class extends qn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends qn{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ko(e,s.x,r.x,o.x),ko(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mc=class extends qn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ko(e,s.x,r.x,o.x),ko(e,s.y,r.y,o.y),ko(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(ng(a,l.x,c.x,h.x,u.x),ng(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},Ed=Object.freeze({__proto__:null,ArcCurve:yc,CatmullRomCurve3:vc,CubicBezierCurve:ra,CubicBezierCurve3:xc,EllipseCurve:Yr,LineCurve:oa,LineCurve3:Sc,QuadraticBezierCurve:aa,QuadraticBezierCurve3:Mc,SplineCurve:la}),bc=class extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ed[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Ed[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Zs=class extends bc{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new oa(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new aa(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ra(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new la(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Yr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ii=class extends Zs{constructor(e){super(e),this.uuid=io(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Zs().fromJSON(s))}return this}};function Ox(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=jg(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=zx(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,u=l;for(let f=t;f<s;f+=t){let d=n[f],p=n[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ca(r,o,t,a,l,c,0),o}function jg(n,e,t,i,s){let r;if(s===Zx(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=ig(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=ig(o/i|0,n[o],n[o+1],r);return r&&$r(r,r.next)&&(ua(r),r=r.next),r}function js(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&($r(t,t.next)||Bt(t.prev,t,t.next)===0)){if(ua(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ca(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Xx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Ux(n,i,s,r):Fx(n)){e.push(l.i,n.i,c.i),ua(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Bx(js(n),e),ca(n,e,t,i,s,r,2)):o===2&&kx(n,e,t,i,s,r):ca(js(n),e,t,i,s,r,1);break}}}function Fx(n){let e=n.prev,t=n,i=n.next;if(Bt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Bo(s,a,r,l,o,c,p.x,p.y)&&Bt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ux(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),_=Math.max(a,l,c),m=Math.max(h,u,f),g=wd(d,p,e,t,i),y=wd(_,m,e,t,i),M=n.prevZ,S=n.nextZ;for(;M&&M.z>=g&&S&&S.z<=y;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Bo(a,h,l,u,c,f,M.x,M.y)&&Bt(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=d&&S.x<=_&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Bo(a,h,l,u,c,f,S.x,S.y)&&Bt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=g;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Bo(a,h,l,u,c,f,M.x,M.y)&&Bt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=y;){if(S.x>=d&&S.x<=_&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Bo(a,h,l,u,c,f,S.x,S.y)&&Bt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Bx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!$r(i,s)&&e_(i,t,t.next,s)&&ha(i,s)&&ha(s,i)&&(e.push(i.i,t.i,s.i),ua(t),ua(t.next),t=n=s),t=t.next}while(t!==n);return js(t)}function kx(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$x(o,a)){let l=t_(o,a);o=js(o,o.next),l=js(l,l.next),ca(o,e,t,i,s,r,0),ca(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function zx(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=jg(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Yx(c))}s.sort(Hx);for(let r=0;r<s.length;r++)t=Gx(s[r],t);return t}function Hx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Gx(n,e){let t=Vx(n,e);if(!t)return e;let i=t_(t,n);return js(i,i.next),js(t,t.next)}function Vx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if($r(n,t))return t;do{if($r(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Qg(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);ha(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Wx(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Wx(n,e){return Bt(n.prev,n,e.prev)<0&&Bt(e.next,n,n.next)<0}function Xx(n,e,t,i){let s=n;do s.z===0&&(s.z=wd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,qx(s)}function qx(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function wd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Yx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Qg(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Bo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Qg(n,e,t,i,s,r,o,a)}function $x(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Jx(n,e)&&(ha(n,e)&&ha(e,n)&&Kx(n,e)&&(Bt(n.prev,n,e.prev)||Bt(n,e.prev,e))||$r(n,e)&&Bt(n.prev,n,n.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function $r(n,e){return n.x===e.x&&n.y===e.y}function e_(n,e,t,i){let s=Zl(Bt(n,e,t)),r=Zl(Bt(n,e,i)),o=Zl(Bt(t,i,n)),a=Zl(Bt(t,i,e));return!!(s!==r&&o!==a||s===0&&Kl(n,t,e)||r===0&&Kl(n,i,e)||o===0&&Kl(t,n,i)||a===0&&Kl(t,e,i))}function Kl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Zl(n){return n>0?1:n<0?-1:0}function Jx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&e_(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ha(n,e){return Bt(n.prev,n,n.next)<0?Bt(n,e,n.next)>=0&&Bt(n,n.prev,e)>=0:Bt(n,e,n.prev)<0||Bt(n,n.next,e)<0}function Kx(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function t_(n,e){let t=Td(n.i,n.x,n.y),i=Td(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ig(n,e,t,i){let s=Td(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ua(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Td(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zx(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ad=class{static triangulate(e,t,i=2){return Ox(e,t,i)}},Ti=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];sg(e),rg(i,e);let o=e.length;t.forEach(sg);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,rg(i,t[l]);let a=Ad.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function sg(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function rg(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var bs=class n extends Vt{constructor(e=new Ii([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:jx,M,S=!1,w,T,v,x;if(g){M=g.getSpacedPoints(h),S=!0,f=!1;let ne=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(h,ne),T=new P,v=new P,x=new P}f||(m=0,d=0,p=0,_=0);let C=a.extractPoints(c),A=C.shape,N=C.holes;if(!Ti.isClockWise(A)){A=A.reverse();for(let ne=0,de=N.length;ne<de;ne++){let ue=N[ne];Ti.isClockWise(ue)&&(N[ne]=ue.reverse())}}function U(ne){let ue=10000000000000001e-36,Re=ne[0];for(let ve=1;ve<=ne.length;ve++){let j=ve%ne.length,ee=ne[j],oe=ee.x-Re.x,Ne=ee.y-Re.y,ke=oe*oe+Ne*Ne,O=Math.max(Math.abs(ee.x),Math.abs(ee.y),Math.abs(Re.x),Math.abs(Re.y)),Ht=ue*O*O;if(ke<=Ht){ne.splice(j,1),ve--;continue}Re=ee}}U(A),N.forEach(U);let I=N.length,B=A;for(let ne=0;ne<I;ne++){let de=N[ne];A=A.concat(de)}function W(ne,de,ue){return de||Xe("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(de,ue)}let k=A.length;function se(ne,de,ue){let Re,ve,j,ee=ne.x-de.x,oe=ne.y-de.y,Ne=ue.x-ne.x,ke=ue.y-ne.y,O=ee*ee+oe*oe,Ht=ee*ke-oe*Ne;if(Math.abs(Ht)>Number.EPSILON){let et=Math.sqrt(O),yt=Math.sqrt(Ne*Ne+ke*ke),fe=de.x-oe/et,Pt=de.y+ee/et,Ve=ue.x-ke/yt,qe=ue.y+Ne/yt,R=((Ve-fe)*ke-(qe-Pt)*Ne)/(ee*ke-oe*Ne);Re=fe+ee*R-ne.x,ve=Pt+oe*R-ne.y;let b=Re*Re+ve*ve;if(b<=2)return new re(Re,ve);j=Math.sqrt(b/2)}else{let et=!1;ee>Number.EPSILON?Ne>Number.EPSILON&&(et=!0):ee<-Number.EPSILON?Ne<-Number.EPSILON&&(et=!0):Math.sign(oe)===Math.sign(ke)&&(et=!0),et?(Re=-oe,ve=ee,j=Math.sqrt(O)):(Re=ee,ve=oe,j=Math.sqrt(O/2))}return new re(Re/j,ve/j)}let X=[];for(let ne=0,de=B.length,ue=de-1,Re=ne+1;ne<de;ne++,ue++,Re++)ue===de&&(ue=0),Re===de&&(Re=0),X[ne]=se(B[ne],B[ue],B[Re]);let K=[],J,Ae=X.concat();for(let ne=0,de=I;ne<de;ne++){let ue=N[ne];J=[];for(let Re=0,ve=ue.length,j=ve-1,ee=Re+1;Re<ve;Re++,j++,ee++)j===ve&&(j=0),ee===ve&&(ee=0),J[Re]=se(ue[Re],ue[j],ue[ee]);K.push(J),Ae=Ae.concat(J)}let Ce;if(m===0)Ce=Ti.triangulateShape(B,N);else{let ne=[],de=[];for(let ue=0;ue<m;ue++){let Re=ue/m,ve=d*Math.cos(Re*Math.PI/2),j=p*Math.sin(Re*Math.PI/2)+_;for(let ee=0,oe=B.length;ee<oe;ee++){let Ne=W(B[ee],X[ee],j);Ue(Ne.x,Ne.y,-ve),Re===0&&ne.push(Ne)}for(let ee=0,oe=I;ee<oe;ee++){let Ne=N[ee];J=K[ee];let ke=[];for(let O=0,Ht=Ne.length;O<Ht;O++){let et=W(Ne[O],J[O],j);Ue(et.x,et.y,-ve),Re===0&&ke.push(et)}Re===0&&de.push(ke)}}Ce=Ti.triangulateShape(ne,de)}let Y=Ce.length,Me=p+_;for(let ne=0;ne<k;ne++){let de=f?W(A[ne],Ae[ne],Me):A[ne];S?(v.copy(w.normals[0]).multiplyScalar(de.x),T.copy(w.binormals[0]).multiplyScalar(de.y),x.copy(M[0]).add(v).add(T),Ue(x.x,x.y,x.z)):Ue(de.x,de.y,0)}for(let ne=1;ne<=h;ne++)for(let de=0;de<k;de++){let ue=f?W(A[de],Ae[de],Me):A[de];S?(v.copy(w.normals[ne]).multiplyScalar(ue.x),T.copy(w.binormals[ne]).multiplyScalar(ue.y),x.copy(M[ne]).add(v).add(T),Ue(x.x,x.y,x.z)):Ue(ue.x,ue.y,u/h*ne)}for(let ne=m-1;ne>=0;ne--){let de=ne/m,ue=d*Math.cos(de*Math.PI/2),Re=p*Math.sin(de*Math.PI/2)+_;for(let ve=0,j=B.length;ve<j;ve++){let ee=W(B[ve],X[ve],Re);Ue(ee.x,ee.y,u+ue)}for(let ve=0,j=N.length;ve<j;ve++){let ee=N[ve];J=K[ve];for(let oe=0,Ne=ee.length;oe<Ne;oe++){let ke=W(ee[oe],J[oe],Re);S?Ue(ke.x,ke.y+M[h-1].y,M[h-1].x+ue):Ue(ke.x,ke.y,u+ue)}}}Pe(),ze();function Pe(){let ne=s.length/3;if(f){let de=0,ue=k*de;for(let Re=0;Re<Y;Re++){let ve=Ce[Re];_t(ve[2]+ue,ve[1]+ue,ve[0]+ue)}de=h+m*2,ue=k*de;for(let Re=0;Re<Y;Re++){let ve=Ce[Re];_t(ve[0]+ue,ve[1]+ue,ve[2]+ue)}}else{for(let de=0;de<Y;de++){let ue=Ce[de];_t(ue[2],ue[1],ue[0])}for(let de=0;de<Y;de++){let ue=Ce[de];_t(ue[0]+k*h,ue[1]+k*h,ue[2]+k*h)}}i.addGroup(ne,s.length/3-ne,0)}function ze(){let ne=s.length/3,de=0;be(B,de),de+=B.length;for(let ue=0,Re=N.length;ue<Re;ue++){let ve=N[ue];be(ve,de),de+=ve.length}i.addGroup(ne,s.length/3-ne,1)}function be(ne,de){let ue=ne.length;for(;--ue>=0;){let Re=ue,ve=ue-1;ve<0&&(ve=ne.length-1);for(let j=0,ee=h+m*2;j<ee;j++){let oe=k*j,Ne=k*(j+1),ke=de+Re+oe,O=de+ve+oe,Ht=de+ve+Ne,et=de+Re+Ne;Fe(ke,O,Ht,et)}}}function Ue(ne,de,ue){l.push(ne),l.push(de),l.push(ue)}function _t(ne,de,ue){Qe(ne),Qe(de),Qe(ue);let Re=s.length/3,ve=y.generateTopUV(i,s,Re-3,Re-2,Re-1);Ke(ve[0]),Ke(ve[1]),Ke(ve[2])}function Fe(ne,de,ue,Re){Qe(ne),Qe(de),Qe(Re),Qe(de),Qe(ue),Qe(Re);let ve=s.length/3,j=y.generateSideWallUV(i,s,ve-6,ve-3,ve-2,ve-1);Ke(j[0]),Ke(j[1]),Ke(j[3]),Ke(j[1]),Ke(j[2]),Ke(j[3])}function Qe(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function Ke(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Qx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ed[s.type]().fromJSON(s)),new n(i,e.options)}},jx={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-u),new re(f,1-p),new re(_,1-g)]:[new re(a,1-l),new re(h,1-u),new re(d,1-p),new re(m,1-g)]}};function Qx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var da=class n extends Xr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Es=class n extends Vt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=st(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new P,f=new re,d=new P,p=new P,_=new P,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(p)}for(let y=0;y<=t;y++){let M=i+y*h*s,S=Math.sin(M),w=Math.cos(M);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*S,u.y=e[T].y,u.z=e[T].x*w,o.push(u.x,u.y,u.z),f.x=y/t,f.y=T/(e.length-1),a.push(f.x,f.y);let v=l[3*T+0]*S,x=l[3*T+1],C=l[3*T+0]*w;c.push(v,x,C)}}for(let y=0;y<t;y++)for(let M=0;M<e.length-1;M++){let S=M+y*e.length,w=S,T=S+e.length,v=S+e.length+1,x=S+1;r.push(w,T,x),r.push(v,x,T)}this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},fa=class n extends Xr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Pi=class n extends Vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let y=g*f-o;for(let M=0;M<c;M++){let S=M*u-r;p.push(S,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let M=y+c*g,S=y+c*(g+1),w=y+1+c*(g+1),T=y+1+c*g;d.push(M,S,T),d.push(S,w,T)}this.setIndex(d),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},pa=class n extends Vt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new P,p=new re;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let g=r+m/i*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let _=0;_<s;_++){let m=_*(i+1);for(let g=0;g<i;g++){let y=g+m,M=y,S=y+i+1,w=y+i+2,T=y+1;a.push(M,S,T),a.push(S,w,T)}}this.setIndex(a),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ma=class n extends Vt{constructor(e=new Ii([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;Ti.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];Ti.isClockWise(y)===!0&&(p[m]=y.reverse())}let _=Ti.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];d=d.concat(y)}for(let m=0,g=d.length;m<g;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=_.length;m<g;m++){let y=_[m],M=y[0]+u,S=y[1]+u,w=y[2]+u;i.push(M,S,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return eS(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function eS(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var gn=class n extends Vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,f=new P,d=[],p=[],_=[],m=[];for(let g=0;g<=i;g++){let y=[],M=g/i,S=o+M*a,w=e*Math.cos(S),T=Math.sqrt(e*e-w*w),v=0;g===0&&o===0?v=.5/t:g===i&&l===Math.PI&&(v=-.5/t);for(let x=0;x<=t;x++){let C=x/t,A=s+C*r;u.x=-T*Math.cos(A),u.y=w,u.z=T*Math.sin(A),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(C+v,1-M),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let M=h[g][y+1],S=h[g][y],w=h[g+1][y],T=h[g+1][y+1];(g!==0||o>0)&&d.push(M,S,T),(g!==i-1||l<Math.PI)&&d.push(S,w,T)}this.setIndex(d),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _i=class n extends Vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new P,d=new P,p=new P;for(let _=0;_<=i;_++){let m=o+_/i*a;for(let g=0;g<=s;g++){let y=g/s*r;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){let g=(s+1)*_+m-1,y=(s+1)*(_-1)+m-1,M=(s+1)*(_-1)+m,S=(s+1)*_+m;l.push(g,y,S),l.push(y,M,S)}this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function or(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(og(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(og(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Tn(n){let e={};for(let t=0;t<n.length;t++){let i=or(n[t]);for(let s in i)e[s]=i[s]}return e}function og(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function tS(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var rs={clone:or,merge:Tn},nS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qt=class extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nS,this.fragmentShader=iS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=tS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ie().setHex(s.value);break;case"v2":this.uniforms[i].value=new re().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Jr=class extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},hn=class extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Kr=class extends hn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Js('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Js('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ec=class extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wc=class extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Or(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function jl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ws=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Tc=class extends ws{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xd,endingEnd:xd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sd:r=e,a=2*t-i;break;case Md:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Sd:o=e,l=2*i-t;break;case Md:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,M=(-1-d)*m+(1.5+d)*_+.5*p,S=d*m-d*_;for(let w=0;w!==a;++w)r[w]=g*o[h+w]+y*o[c+w]+M*o[l+w]+S*o[u+w];return r}},Ac=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Cc=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Rc=class extends ws{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(s-t),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=d*f+p*2,y=u[g],M=u[g+1],S=e*f+p*2,w=h[S],T=h[S+1],v=rS(i,t,y,w,s);r[p]=n_(v,_,M,T,m)}return r}};function n_(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function sS(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function rS(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=n_(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=sS(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Yn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Or(t,this.TimeBufferType),this.values=Or(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Or(e.times,Array),values:Or(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),jl(e.settings)&&(i.settings={inTangents:Or(e.settings.inTangents,Array),outTangents:Or(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Rc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ho:t=this.InterpolantFactoryMethodDiscrete;break;case dc:t=this.InterpolantFactoryMethodLinear;break;case tc:t=this.InterpolantFactoryMethodSmooth;break;case vd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return We("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ho;case this.InterpolantFactoryMethodLinear:return dc;case this.InterpolantFactoryMethodSmooth:return tc;case this.InterpolantFactoryMethodBezier:return vd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;jl(this.settings)&&(ag(this.settings.inTangents,e),ag(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;jl(this.settings)&&(lg(this.settings.inTangents,e),lg(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&rx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===tc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let _=t[u+p];if(_!==t[f+p]||_!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,jl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ag(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function lg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=dc;var Ts=class extends Yn{constructor(e,t,i){super(e,t,i)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Ho;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Ic=class extends Yn{constructor(e,t,i,s){super(e,t,i,s)}};Ic.prototype.ValueTypeName="color";var Pc=class extends Yn{constructor(e,t,i,s){super(e,t,i,s)}};Pc.prototype.ValueTypeName="number";var Nc=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ci.slerpFlat(r,0,o,c-a,o,c,l);return r}},ga=class extends Yn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Nc(this.times,this.values,this.getValueSize(),e)}};ga.prototype.ValueTypeName="quaternion";ga.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends Yn{constructor(e,t,i){super(e,t,i)}};As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Ho;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var Lc=class extends Yn{constructor(e,t,i,s){super(e,t,i,s)}};Lc.prototype.ValueTypeName="vector";var Dc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},i_=new Dc,Oc=class{constructor(e){this.manager=e!==void 0?e:i_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Oc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zr=class extends jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_a=class extends Zr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yd=new bt,cg=new P,hg=new P,ya=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;cg.setFromMatrixPosition(e.matrixWorld),t.position.copy(cg),hg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){yd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(yd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===zr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(yd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ql=new P,ec=new Ci,Ei=new P,va=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ql,ec,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ql,ec,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new P,ug=new re,dg=new re,En=class extends va{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fc*2*Math.atan(Math.tan($u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,ug,dg),t.subVectors(dg,ug)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($u*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Cd=class extends ya{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0}},Qs=class extends Zr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Cd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},er=class extends va{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rd=class extends ya{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xa=class extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Rd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Fr=-90,Ur=1,jr=class extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new En(Fr,Ur,e,t);s.layers=this.layers,this.add(s);let r=new En(Fr,Ur,e,t);r.layers=this.layers,this.add(r);let o=new En(Fr,Ur,e,t);o.layers=this.layers,this.add(o);let a=new En(Fr,Ur,e,t);a.layers=this.layers,this.add(a);let l=new En(Fr,Ur,e,t);l.layers=this.layers,this.add(l);let c=new En(Fr,Ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Fc=class extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Sa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=oS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function oS(){this._document.hidden===!1&&this.reset()}var Qd="\\[\\]\\.:\\/",aS=new RegExp("["+Qd+"]","g"),ef="[^"+Qd+"]",lS="[^"+Qd.replace("\\.","")+"]",cS=/((?:WC+[\/:])*)/.source.replace("WC",ef),hS=/(WCOD+)?/.source.replace("WCOD",lS),uS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ef),dS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ef),fS=new RegExp("^"+cS+hS+uS+dS+"$"),pS=["material","materials","bones","map"],Id=class{constructor(e,t,i){let s=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(aS,"")}static parseTrackName(e){let t=fS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);pS.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Id;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zR=new Float32Array(1);var af=class af{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};af.prototype.isMatrix2=!0;var Pd=af;function tf(n,e,t,i){let s=mS(i);switch(t){case Vd:return n*e;case Wc:return n*e/s.components*s.byteLength;case Xc:return n*e/s.components*s.byteLength;case Is:return n*e*2/s.components*s.byteLength;case qc:return n*e*2/s.components*s.byteLength;case Wd:return n*e*3/s.components*s.byteLength;case vi:return n*e*4/s.components*s.byteLength;case Yc:return n*e*4/s.components*s.byteLength;case Ra:case Ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pa:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jc:case Zc:return Math.max(n,16)*Math.max(e,8)/4;case $c:case Kc:return Math.max(n,8)*Math.max(e,8)/2;case jc:case Qc:case th:case nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case eh:case La:case ih:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case oh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ah:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case lh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ch:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case hh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ph:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case mh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case gh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _h:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yh:case vh:case xh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Sh:case Mh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Da:case bh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mS(n){switch(n){case Un:case kd:return{byteLength:1,components:1};case no:case zd:case nn:return{byteLength:2,components:1};case Gc:case Vc:return{byteLength:2,components:4};case yi:case Hc:case ii:return{byteLength:4,components:1};case Hd:case Gd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function w_(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function _S(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let _=u[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var yS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vS=`#ifdef USE_ALPHAHASH
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
#endif`,xS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ES=`#ifdef USE_AOMAP
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
#endif`,wS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TS=`#ifdef USE_BATCHING
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
#endif`,AS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PS=`#ifdef USE_IRIDESCENCE
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
#endif`,NS=`#ifdef USE_BUMPMAP
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
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,US=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,BS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,HS=`#define PI 3.141592653589793
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
} // validated`,GS=`vec3 transformedNormal = objectNormal;
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
#endif`,VS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YS="gl_FragColor = linearToOutputTexel( gl_FragColor );",$S=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JS=`#ifdef USE_ENVMAP
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
#endif`,KS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
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
#endif`,jS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QS=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
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
}`,rM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cM=`#ifdef USE_ENVMAP
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
#endif`,hM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pM=`PhysicalMaterial material;
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
#endif`,mM=`uniform sampler2D dfgLUT;
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
}`,gM=`
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
#endif`,_M=`#if defined( RE_IndirectDiffuse )
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
#endif`,yM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,xM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AM=`#if defined( USE_POINTS_UV )
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
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PM=`#if defined( USE_MORPHCOLORS )
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
#endif`,NM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LM=`#ifdef USE_MORPHTARGETS
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
#endif`,DM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zM=`#ifdef USE_NORMALMAP
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
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$M=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nb=`float getShadowMask() {
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
}`,ib=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sb=`#ifdef USE_SKINNING
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
#endif`,rb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ob=`#ifdef USE_SKINNING
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
#endif`,ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ub=`#ifdef USE_TRANSMISSION
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
#endif`,db=`#ifdef USE_TRANSMISSION
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
#endif`,fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yb=`uniform sampler2D t2D;
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
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`uniform float backgroundBlurriness;
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`#include <common>
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
}`,Eb=`#if DEPTH_PACKING == 3200
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
}`,wb=`#define DISTANCE
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
}`,Tb=`#define DISTANCE
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
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`uniform float scale;
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
}`,Ib=`uniform vec3 diffuse;
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
}`,Pb=`#include <common>
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
}`,Nb=`uniform vec3 diffuse;
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
}`,Lb=`#define LAMBERT
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
}`,Db=`#define LAMBERT
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
}`,Ob=`#define MATCAP
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
}`,Fb=`#define MATCAP
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
}`,Ub=`#define NORMAL
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
}`,Bb=`#define NORMAL
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
}`,kb=`#define PHONG
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
}`,zb=`#define PHONG
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
}`,Hb=`#define STANDARD
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
}`,Gb=`#define STANDARD
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
}`,Vb=`#define TOON
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
}`,Wb=`#define TOON
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
}`,Xb=`uniform float size;
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
}`,qb=`uniform vec3 diffuse;
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
}`,Yb=`#include <common>
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
}`,$b=`uniform vec3 color;
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
}`,Jb=`uniform float rotation;
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
}`,Kb=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:yS,alphahash_pars_fragment:vS,alphamap_fragment:xS,alphamap_pars_fragment:SS,alphatest_fragment:MS,alphatest_pars_fragment:bS,aomap_fragment:ES,aomap_pars_fragment:wS,batching_pars_vertex:TS,batching_vertex:AS,begin_vertex:CS,beginnormal_vertex:RS,bsdfs:IS,iridescence_fragment:PS,bumpmap_pars_fragment:NS,clipping_planes_fragment:LS,clipping_planes_pars_fragment:DS,clipping_planes_pars_vertex:OS,clipping_planes_vertex:FS,color_fragment:US,color_pars_fragment:BS,color_pars_vertex:kS,color_vertex:zS,common:HS,defaultnormal_vertex:GS,displacementmap_pars_vertex:VS,displacementmap_vertex:WS,emissivemap_fragment:XS,emissivemap_pars_fragment:qS,colorspace_fragment:YS,colorspace_pars_fragment:$S,envmap_fragment:JS,envmap_common_pars_fragment:KS,envmap_pars_fragment:ZS,envmap_pars_vertex:jS,envmap_physical_pars_fragment:cM,envmap_vertex:QS,fog_vertex:eM,fog_pars_vertex:tM,fog_fragment:nM,fog_pars_fragment:iM,gradientmap_pars_fragment:sM,lightmap_pars_fragment:rM,lights_lambert_fragment:oM,lights_lambert_pars_fragment:aM,lights_pars_begin:lM,lights_toon_fragment:hM,lights_toon_pars_fragment:uM,lights_phong_fragment:dM,lights_phong_pars_fragment:fM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:gM,lights_fragment_maps:_M,lights_fragment_end:yM,lightprobes_pars_fragment:vM,logdepthbuf_fragment:xM,logdepthbuf_pars_fragment:SM,logdepthbuf_pars_vertex:MM,logdepthbuf_vertex:bM,map_fragment:EM,map_pars_fragment:wM,map_particle_fragment:TM,map_particle_pars_fragment:AM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:RM,morphinstance_vertex:IM,morphcolor_vertex:PM,morphnormal_vertex:NM,morphtarget_pars_vertex:LM,morphtarget_vertex:DM,normal_fragment_begin:OM,normal_fragment_maps:FM,normal_pars_fragment:UM,normal_pars_vertex:BM,normal_vertex:kM,normalmap_pars_fragment:zM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:GM,clearcoat_pars_fragment:VM,iridescence_pars_fragment:WM,opaque_fragment:XM,packing:qM,premultiplied_alpha_fragment:YM,project_vertex:$M,dithering_fragment:JM,dithering_pars_fragment:KM,roughnessmap_fragment:ZM,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:QM,shadowmap_pars_vertex:eb,shadowmap_vertex:tb,shadowmask_pars_fragment:nb,skinbase_vertex:ib,skinning_pars_vertex:sb,skinning_vertex:rb,skinnormal_vertex:ob,specularmap_fragment:ab,specularmap_pars_fragment:lb,tonemapping_fragment:cb,tonemapping_pars_fragment:hb,transmission_fragment:ub,transmission_pars_fragment:db,uv_pars_fragment:fb,uv_pars_vertex:pb,uv_vertex:mb,worldpos_vertex:gb,background_vert:_b,background_frag:yb,backgroundCube_vert:vb,backgroundCube_frag:xb,cube_vert:Sb,cube_frag:Mb,depth_vert:bb,depth_frag:Eb,distance_vert:wb,distance_frag:Tb,equirect_vert:Ab,equirect_frag:Cb,linedashed_vert:Rb,linedashed_frag:Ib,meshbasic_vert:Pb,meshbasic_frag:Nb,meshlambert_vert:Lb,meshlambert_frag:Db,meshmatcap_vert:Ob,meshmatcap_frag:Fb,meshnormal_vert:Ub,meshnormal_frag:Bb,meshphong_vert:kb,meshphong_frag:zb,meshphysical_vert:Hb,meshphysical_frag:Gb,meshtoon_vert:Vb,meshtoon_frag:Wb,points_vert:Xb,points_frag:qb,shadow_vert:Yb,shadow_frag:$b,sprite_vert:Jb,sprite_frag:Kb},we={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Di={basic:{uniforms:Tn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Tn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Tn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Tn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Tn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ie(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Tn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Tn([we.points,we.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Tn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Tn([we.common,we.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Tn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Tn([we.sprite,we.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Tn([we.common,we.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Tn([we.lights,we.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Di.physical={uniforms:Tn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var wh={r:0,b:0,g:0},Zb=new bt,T_=new Ye;T_.set(-1,0,0,0,1,0,0,0,1);function jb(n,e,t,i,s,r){let o=new Ie(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let S=y.backgroundBlurriness>0;M=e.get(M,S)}return M}function p(y){let M=!1,S=d(y);S===null?m(o,a):S&&S.isColor&&(m(S,1),M=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,M){let S=d(M);S&&S.isCubeTexture?(c===void 0&&(c=new Lt(new ni(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:or(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zb.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(T_),c.material.toneMapped=at.getTransfer(S.colorSpace)!==ft,(h!==S||u!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Lt(new Pi(2,2),new Qt({name:"BackgroundMaterial",uniforms:or(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=at.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(wh,jd(n)),t.buffers.color.setClear(wh.r,wh.g,wh.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:_,dispose:g}}function Qb(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(N,F,U,I,B){let W=!1,k=u(N,I,U,F);r!==k&&(r=k,c(r.object)),W=d(N,I,U,B),W&&p(N,I,U,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(N,F,U,I),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function u(N,F,U,I){let B=I.wireframe===!0,W=i[F.id];W===void 0&&(W={},i[F.id]=W);let k=N.isInstancedMesh===!0?N.id:0,se=W[k];se===void 0&&(se={},W[k]=se);let X=se[U.id];X===void 0&&(X={},se[U.id]=X);let K=X[B];return K===void 0&&(K=f(l()),X[B]=K),K}function f(N){let F=[],U=[],I=[];for(let B=0;B<t;B++)F[B]=0,U[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:I,object:N,attributes:{},index:null}}function d(N,F,U,I){let B=r.attributes,W=F.attributes,k=0,se=U.getAttributes();for(let X in se)if(se[X].location>=0){let J=B[X],Ae=W[X];if(Ae===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Ae=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Ae=N.instanceColor)),J===void 0||J.attribute!==Ae||Ae&&J.data!==Ae.data)return!0;k++}return r.attributesNum!==k||r.index!==I}function p(N,F,U,I){let B={},W=F.attributes,k=0,se=U.getAttributes();for(let X in se)if(se[X].location>=0){let J=W[X];J===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));let Ae={};Ae.attribute=J,J&&J.data&&(Ae.data=J.data),B[X]=Ae,k++}r.attributes=B,r.attributesNum=k,r.index=I}function _(){let N=r.newAttributes;for(let F=0,U=N.length;F<U;F++)N[F]=0}function m(N){g(N,0)}function g(N,F){let U=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;U[N]=1,I[N]===0&&(n.enableVertexAttribArray(N),I[N]=1),B[N]!==F&&(n.vertexAttribDivisor(N,F),B[N]=F)}function y(){let N=r.newAttributes,F=r.enabledAttributes;for(let U=0,I=F.length;U<I;U++)F[U]!==N[U]&&(n.disableVertexAttribArray(U),F[U]=0)}function M(N,F,U,I,B,W,k){k===!0?n.vertexAttribIPointer(N,F,U,B,W):n.vertexAttribPointer(N,F,U,I,B,W)}function S(N,F,U,I){_();let B=I.attributes,W=U.getAttributes(),k=F.defaultAttributeValues;for(let se in W){let X=W[se];if(X.location>=0){let K=B[se];if(K===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){let J=K.normalized,Ae=K.itemSize,Ce=e.get(K);if(Ce===void 0)continue;let Y=Ce.buffer,Me=Ce.type,Pe=Ce.bytesPerElement,ze=Me===n.INT||Me===n.UNSIGNED_INT||K.gpuType===Hc;if(K.isInterleavedBufferAttribute){let be=K.data,Ue=be.isInterleavedBuffer===!0?be.stride:be.itemSize,_t=K.offset;if(be.isInstancedInterleavedBuffer||be.isInstancedBufferAttribute){for(let Fe=0;Fe<X.locationSize;Fe++)g(X.location+Fe,be.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Fe=0;Fe<X.locationSize;Fe++)m(X.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let Fe=0;Fe<X.locationSize;Fe++)M(X.location+Fe,Ae/X.locationSize,Me,J,Ue*Pe,(_t+Ae/X.locationSize*Fe)*Pe,ze)}else{if(K.isInstancedBufferAttribute){for(let be=0;be<X.locationSize;be++)g(X.location+be,K.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let be=0;be<X.locationSize;be++)m(X.location+be);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let be=0;be<X.locationSize;be++)M(X.location+be,Ae/X.locationSize,Me,J,Ae*Pe,Ae/X.locationSize*be*Pe,ze)}}else if(k!==void 0){let J=k[se];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(X.location,J);break;case 3:n.vertexAttrib3fv(X.location,J);break;case 4:n.vertexAttrib4fv(X.location,J);break;default:n.vertexAttrib1fv(X.location,J)}}}}y()}function w(){C();for(let N in i){let F=i[N];for(let U in F){let I=F[U];for(let B in I){let W=I[B];for(let k in W)h(W[k].object),delete W[k];delete I[B]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;let F=i[N.id];for(let U in F){let I=F[U];for(let B in I){let W=I[B];for(let k in W)h(W[k].object),delete W[k];delete I[B]}}delete i[N.id]}function v(N){for(let F in i){let U=i[F];for(let I in U){let B=U[I];if(B[N.id]===void 0)continue;let W=B[N.id];for(let k in W)h(W[k].object),delete W[k];delete B[N.id]}}}function x(N){for(let F in i){let U=i[F],I=N.isInstancedMesh===!0?N.id:0,B=U[I];if(B!==void 0){for(let W in B){let k=B[W];for(let se in k)h(k[se].object),delete k[se];delete B[W]}delete U[I],Object.keys(U).length===0&&delete i[F]}}}function C(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function eE(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function tE(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==vi&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let x=v===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Un&&v!==ii&&!x&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(We("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:S,maxSamples:w,samples:T}}function nE(n){let e=this,t=null,i=0,s=!1,r=!1,o=new mi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=n.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,M=y*4,S=g.clippingState||null;l.value=S,S=h(p,f,M,d);for(let w=0;w!==M;++w)S[w]=t[w];g.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,S=d;M!==_;++M,S+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Ua=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ta(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ni(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:ts});r.uniforms.tEquirect.value=t;let o=new Lt(s,r),a=t.minFilter;return t.minFilter===ns&&(t.minFilter=Cn),new jr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},s_=256,iE=3,sE=20,A_=256,C_=16,rE=3,oE=new P,aE=new Ie,Ah=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new jr(1,10,null),this._boxMesh=new Lt(new ni(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=oE}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(aE));let m=new jr(i,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(s_,Kg(e))}_fromTexture(e,t){e.mapping===sr||e.mapping===to?this._setSize(e.image.length===0?s_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=r_(e,!1,!1),i=Math.log2(e)-iE;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=r_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===sr||e.mapping===to?(this._cubemapMaterial===null&&(this._cubemapMaterial=a_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=o_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=lE(),this._integrationMaterial=cE());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/C_);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-rE)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(A_*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=hE());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function r_(n,e,t){return new Ua(n,{minFilter:ns,generateMipmaps:e,type:nn,colorSpace:Go,depthBuffer:t})}function Ba(n,e,t){return new Qt({name:n,uniforms:e,vertexShader:it.cube_vert,fragmentShader:t,side:_n,blending:ts,depthTest:!1,depthWrite:!1})}function lE(){return Ba("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${A_}u

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
	`)}function cE(){return Ba("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:C_}},`

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
	`)}function hE(){return Ba("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${sE}
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
	`)}function o_(){return Ba("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function a_(){return Ba("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function uE(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Bc||d===kc)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new Ua(p.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Bc||d===kc,_=d===sr||d===to;if(p||_){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new Ah(n)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Ah(n)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===Bc?f.mapping=sr:d===kc&&(f.mapping=to),f}function l(f){let d=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function dE(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Js("WebGLRenderer: "+i+" extension not supported."),s}}}function fE(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)e.update(_[m],n.ARRAY_BUFFER)}function u(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,M=m.count>=65535?Ko:Jo,S=new M(Math.ceil(y/3)*6,1),w=S.array;if(_!==null){let v=_.array;g=_.version;for(let x=0,C=0;x<y;x+=3){let A=v[x+0],N=v[x+1],F=v[x+2];w[C++]=A,w[C++]=N,w[C++]=N,w[C++]=F,w[C++]=F,w[C++]=A}}else{g=m.version;for(let v=0,x=0;v<y;v+=3){let C=v+0,A=v+1,N=v+2;w[x++]=C,w[x++]=A,w[x++]=A,w[x++]=N,w[x++]=N,w[x++]=C}}S.version=g;let T=r.get(p);T&&e.remove(T),r.set(p,S)}function f(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function pE(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function c(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*o,d),t.update(f,i,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function mE(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function gE(n,e,t){let i=new WeakMap,s=new Dt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let C=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let S=a.attributes.position.count*M,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let T=new Float32Array(S*w*4*u),v=new Xo(T,S,w,u);v.type=ii,v.needsUpdate=!0;let x=M*4;for(let A=0;A<u;A++){let N=m[A],F=g[A],U=y[A],I=S*w*4*A;for(let B=0;B<N.count;B++){let W=B*x;d===!0&&(s.fromBufferAttribute(N,B),T[I+W+0]=s.x,T[I+W+1]=s.y,T[I+W+2]=s.z,T[I+W+3]=0),p===!0&&(s.fromBufferAttribute(F,B),T[I+W+4]=s.x,T[I+W+5]=s.y,T[I+W+6]=s.z,T[I+W+7]=0),_===!0&&(s.fromBufferAttribute(U,B),T[I+W+8]=s.x,T[I+W+9]=s.y,T[I+W+10]=s.z,T[I+W+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:v,size:new re(S,w)},i.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function _E(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var yE={[Ma]:"LINEAR_TONE_MAPPING",[ba]:"REINHARD_TONE_MAPPING",[Ea]:"CINEON_TONE_MAPPING",[wa]:"ACES_FILMIC_TONE_MAPPING",[Aa]:"AGX_TONE_MAPPING",[ir]:"NEUTRAL_TONE_MAPPING",[Ta]:"CUSTOM_TONE_MAPPING"};function vE(n,e,t,i,s,r){let o=new Yt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Vt;h.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new je([0,2,0,0,2,0],2));let u=new Jr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Lt(h,u),d=new er(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,y=null,M=[],S=!1;this.setSize=function(w,T){o.setSize(w,T),a!==null&&a.setSize(w,T),l!==null&&l.setSize(w,T);for(let v=0;v<M.length;v++){let x=M[v];x.setSize&&x.setSize(w,T)}},this.setEffects=function(w){M=w,S=M.length>0&&M[0].isRenderPass===!0;let T=o.width,v=o.height;M.length>0&&a===null&&(a=new Yt(T,v,{type:nn,depthBuffer:!1,stencilBuffer:!1}),l=new Yt(T,v,{type:nn,depthBuffer:!1,stencilBuffer:!1}));let x=s===!0&&M.some(C=>C.needsDepthTexture===!0);x!==(o.depthTexture!==null)&&(x===!0&&c===null&&(c=new es(T,v),r===!0&&(c.format=is,c.type=rr)),o.dispose(),o.depthTexture=x?c:null,o.resolveDepthBuffer=x,o.storeMultisampledDepthBuffer=x);for(let C=0;C<M.length;C++){let A=M[C];A.setSize&&A.setSize(T,v),x&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(w,T){if(m||w.toneMapping===Ni&&M.length===0)return!1;if(y=T,T!==null){let v=T.width,x=T.height;(o.width!==v||o.height!==x)&&this.setSize(v,x)}return S===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=Ni,!0},this.hasRenderPass=function(){return S},this.end=function(w,T){w.toneMapping=g,m=!0;let v=o,x=a;for(let C=0;C<M.length;C++){let A=M[C];A.enabled!==!1&&(A.render(w,x,v,T),A.needsSwap!==!1&&(v=x,x=x===a?l:a))}if(p!==w.outputColorSpace||_!==w.toneMapping){p=w.outputColorSpace,_=w.toneMapping,u.defines={},at.getTransfer(p)===ft&&(u.defines.SRGB_TRANSFER="");let C=yE[_];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(y),w.render(f,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var R_=new Rn,I_=new es(1,1),P_=new na(1),N_=new Xo,L_=new gc,D_=new ta,l_=[],c_=[],h_=new Float32Array(16),u_=new Float32Array(9),d_=new Float32Array(4);function ro(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=l_[s];if(r===void 0&&(r=new Float32Array(s),l_[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rh(n,e){let t=c_[e];t===void 0&&(t=new Int32Array(e),c_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function SE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function ME(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function bE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function EE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;d_.set(i),n.uniformMatrix2fv(this.addr,!1,d_),rn(t,i)}}function wE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;u_.set(i),n.uniformMatrix3fv(this.addr,!1,u_),rn(t,i)}}function TE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;h_.set(i),n.uniformMatrix4fv(this.addr,!1,h_),rn(t,i)}}function AE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function CE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function RE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function IE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function PE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function NE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function LE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function DE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function Ih(n){return n.version===0&&(n.compareFunction=Yd,n.needsUpdate=!0),n}function OE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Ih(I_):r=R_,t.setTexture2D(e||r,s)}function FE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||L_,s)}function UE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Ih(P_):r=D_,t.setTextureCube(e||r,s)}function BE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||N_,s)}function kE(n){switch(n){case 5126:return xE;case 35664:return SE;case 35665:return ME;case 35666:return bE;case 35674:return EE;case 35675:return wE;case 35676:return TE;case 5124:case 35670:return AE;case 35667:case 35671:return CE;case 35668:case 35672:return RE;case 35669:case 35673:return IE;case 5125:return PE;case 36294:return NE;case 36295:return LE;case 36296:return DE;case 35678:case 36198:case 36298:case 36306:case 35682:return OE;case 35679:case 36299:case 36307:return FE;case 35680:case 36300:case 36308:case 36293:return UE;case 36289:case 36303:case 36311:case 36292:return BE}}function zE(n,e){n.uniform1fv(this.addr,e)}function HE(n,e){let t=ro(e,this.size,2);n.uniform2fv(this.addr,t)}function GE(n,e){let t=ro(e,this.size,3);n.uniform3fv(this.addr,t)}function VE(n,e){let t=ro(e,this.size,4);n.uniform4fv(this.addr,t)}function WE(n,e){let t=ro(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function XE(n,e){let t=ro(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qE(n,e){let t=ro(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function YE(n,e){n.uniform1iv(this.addr,e)}function $E(n,e){n.uniform2iv(this.addr,e)}function JE(n,e){n.uniform3iv(this.addr,e)}function KE(n,e){n.uniform4iv(this.addr,e)}function ZE(n,e){n.uniform1uiv(this.addr,e)}function jE(n,e){n.uniform2uiv(this.addr,e)}function QE(n,e){n.uniform3uiv(this.addr,e)}function ew(n,e){n.uniform4uiv(this.addr,e)}function tw(n,e,t){let i=this.cache,s=e.length,r=Rh(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ih(I_):o=R_;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function nw(n,e,t){let i=this.cache,s=e.length,r=Rh(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||L_,r[o])}function iw(n,e,t){let i=this.cache,s=e.length,r=Rh(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Ih(P_):o=D_;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function sw(n,e,t){let i=this.cache,s=e.length,r=Rh(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||N_,r[o])}function rw(n){switch(n){case 5126:return zE;case 35664:return HE;case 35665:return GE;case 35666:return VE;case 35674:return WE;case 35675:return XE;case 35676:return qE;case 5124:case 35670:return YE;case 35667:case 35671:return $E;case 35668:case 35672:return JE;case 35669:case 35673:return KE;case 5125:return ZE;case 36294:return jE;case 36295:return QE;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return sw}}var hf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kE(t.type)}},uf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rw(t.type)}},df=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},lf=/(\w+)(\])?(\[|\.)?/g;function f_(n,e){n.seq.push(e),n.map[e.id]=e}function ow(n,e,t){let i=n.name,s=i.length;for(lf.lastIndex=0;;){let r=lf.exec(i),o=lf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){f_(t,c===void 0?new hf(a,n,e):new uf(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new df(a),f_(t,u)),t=u}}}var so=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ow(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function p_(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var aw=37297,lw=0;function cw(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var m_=new Ye;function hw(n){at._getMatrix(m_,at.workingColorSpace,n);let e=`mat3( ${m_.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case Vo:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function g_(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+cw(n.getShaderSource(e),a)}else return r}function uw(n,e){let t=hw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var dw={[Ma]:"Linear",[ba]:"Reinhard",[Ea]:"Cineon",[wa]:"ACESFilmic",[Aa]:"AgX",[ir]:"Neutral",[Ta]:"Custom"};function fw(n,e){let t=dw[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Th=new P;function pw(){at.getLuminanceCoefficients(Th);let n=Th.x.toFixed(4),e=Th.y.toFixed(4),t=Th.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function gw(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _w(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fa(n){return n!==""}function __(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function y_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(n){return n.replace(yw,vw)}function vw(n,e){let t=it[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ff(t)}var xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(n){return n.replace(xw,Sw)}function Sw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function x_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Mw={[tr]:"SHADOWMAP_TYPE_PCF",[Qr]:"SHADOWMAP_TYPE_VSM"};function bw(n){return Mw[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ew={[to]:"ENVMAP_MODE_REFRACTION"};function ww(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ew[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Tw={[Ud]:"ENVMAP_BLENDING_MULTIPLY",[Dg]:"ENVMAP_BLENDING_MIX",[Og]:"ENVMAP_BLENDING_ADD"};function Aw(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Tw[n.combine]||"ENVMAP_BLENDING_NONE"}function Cw(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=bw(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ww(t),u=Aw(t),f=mw(t),d=gw(r),p=s.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Fa).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Fa).join(`
`),m.length>0&&(m+=`
`)):(_=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),m=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?it.tonemapping_pars_fragment:"",t.toneMapping!==Ni?fw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,uw("linearToOutputTexel",t.outputColorSpace),pw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),o=ff(o),o=__(o,t),o=y_(o,t),a=ff(a),a=__(a,t),a=y_(a,t),o=v_(o),a=v_(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===$d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+_+o,M=g+m+a,S=p_(s,s.VERTEX_SHADER,y),w=p_(s,s.FRAGMENT_SHADER,M);s.attachShader(p,S),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(A){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(p)||"",F=s.getShaderInfoLog(S)||"",U=s.getShaderInfoLog(w)||"",I=N.trim(),B=F.trim(),W=U.trim(),k=!0,se=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,S,w);else{let X=g_(s,S,"vertex"),K=g_(s,w,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+X+`
`+K)}else I!==""?We("WebGLProgram: Program Info Log:",I):(B===""||W==="")&&(se=!1);se&&(A.diagnostics={runnable:k,programLog:I,vertexShader:{log:B,prefix:_},fragmentShader:{log:W,prefix:m}})}s.deleteShader(S),s.deleteShader(w),v=new so(s,p),x=_w(s,p)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(p,aw)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=w,this}var Rw=0,pf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new mf(e),t.set(e,i)),i}},mf=class{constructor(e){this.id=Rw++,this.code=e,this.usedTimes=0}};function Iw(n){return n===Is||n===La||n===Da}function Pw(n,e,t,i,s,r){let o=new qo,a=new pf,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,x,C,A,N,F){let U=A.fog,I=N.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,k=e.get(v.envMap||B,W),se=f[v.type],X=i.precision;v.precision!==null&&(X=i.getMaxPrecision(v.precision),X!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",X,"instead."));let K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,J=K!==void 0?K.length:0,Ae=0;I.morphAttributes.position!==void 0&&(Ae=1),I.morphAttributes.normal!==void 0&&(Ae=2),I.morphAttributes.color!==void 0&&(Ae=3);let Ce,Y,Me,Pe;if(se){let Ee=Di[se];Ce=Ee.vertexShader,Y=Ee.fragmentShader}else{Ce=v.vertexShader,Y=v.fragmentShader;let Ee=a.getVertexShaderStage(v),Mt=a.getFragmentShaderStage(v);a.update(v,Ee,Mt),Me=Ee.id,Pe=Mt.id}let ze=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,_t=N.isBatchedMesh===!0,Fe=!!v.map,Qe=!!v.matcap,Ke=!!k,ne=Ke&&k.isPMREMTexture===!0,de=!!v.aoMap,ue=!!v.lightMap,Re=!!v.bumpMap&&v.wireframe===!1,ve=!!v.normalMap,j=!!v.displacementMap,ee=!!v.emissiveMap,oe=!!v.metalnessMap,Ne=!!v.roughnessMap,ke=v.anisotropy>0,O=v.clearcoat>0,Ht=v.diffuseRoughness>0,et=v.dispersion>0,yt=v.retroreflectivity>0,fe=v.iridescence>0,Pt=v.sheen>0,Ve=v.transmission>0,qe=ke&&!!v.anisotropyMap,R=O&&!!v.clearcoatMap,b=O&&!!v.clearcoatNormalMap,H=O&&!!v.clearcoatRoughnessMap,ae=Ht&&!!v.diffuseRoughnessMap,ie=fe&&!!v.iridescenceMap,pe=fe&&!!v.iridescenceThicknessMap,xe=Pt&&!!v.sheenColorMap,Z=Pt&&!!v.sheenRoughnessMap,Q=!!v.specularMap,ge=!!v.specularColorMap,L=!!v.specularIntensityMap,te=Ve&&!!v.transmissionMap,$=Ve&&!!v.thicknessMap,_e=!!v.gradientMap,he=!!v.alphaMap,me=v.alphaTest>0,He=!!v.alphaHash,nt=!!v.extensions,le=Ni;v.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(le=n.toneMapping);let Ge=ne?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,tt={shaderID:se,shaderType:v.type,shaderName:v.name,vertexShader:Ce,fragmentShader:Y,defines:v.defines,customVertexShaderID:Me,customFragmentShaderID:Pe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:X,batching:_t,batchingColor:_t&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:ze===null?n.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Fe,matcap:Qe,envMap:Ke,envMapMode:Ke&&k.mapping,envMapPMREM:ne,envMapMaxLod:ne?Ge.length-1:null,envMapSize:ne?Ge[0].width:null,aoMap:de,lightMap:ue,bumpMap:Re,normalMap:ve,displacementMap:j,emissiveMap:ee,normalMapObjectSpace:ve&&v.normalMapType===Bg,normalMapTangentSpace:ve&&v.normalMapType===Eh,packedNormalMap:ve&&v.normalMapType===Eh&&Iw(v.normalMap.format),metalnessMap:oe,roughnessMap:Ne,anisotropy:ke,anisotropyMap:qe,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:H,diffuseRoughness:Ht,diffuseRoughnessMap:ae,dispersion:et,retroreflection:yt,iridescence:fe,iridescenceMap:ie,iridescenceThicknessMap:pe,sheen:Pt,sheenColorMap:xe,sheenRoughnessMap:Z,specularMap:Q,specularColorMap:ge,specularIntensityMap:L,transmission:Ve,transmissionMap:te,thicknessMap:$,gradientMap:_e,opaque:v.transparent===!1&&v.blending===eo&&v.alphaToCoverage===!1,alphaMap:he,alphaTest:me,alphaHash:He,combine:v.combine,mapUv:Fe&&d(v.map.channel),aoMapUv:de&&d(v.aoMap.channel),lightMapUv:ue&&d(v.lightMap.channel),bumpMapUv:Re&&d(v.bumpMap.channel),normalMapUv:ve&&d(v.normalMap.channel),displacementMapUv:j&&d(v.displacementMap.channel),emissiveMapUv:ee&&d(v.emissiveMap.channel),metalnessMapUv:oe&&d(v.metalnessMap.channel),roughnessMapUv:Ne&&d(v.roughnessMap.channel),anisotropyMapUv:qe&&d(v.anisotropyMap.channel),clearcoatMapUv:R&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&d(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&d(v.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:Z&&d(v.sheenRoughnessMap.channel),specularMapUv:Q&&d(v.specularMap.channel),specularColorMapUv:ge&&d(v.specularColorMap.channel),specularIntensityMapUv:L&&d(v.specularIntensityMap.channel),transmissionMapUv:te&&d(v.transmissionMap.channel),thicknessMapUv:$&&d(v.thicknessMap.channel),alphaMapUv:he&&d(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ve||ke),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Fe||he),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&ve===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Ae,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:F.filter(Ee=>Ee.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:Fe&&v.map.isVideoTexture===!0&&at.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:ee&&v.emissiveMap.isVideoTexture===!0&&at.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wn,flipSided:v.side===_n,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:nt&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&v.extensions.multiDraw===!0||_t)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function _(v){let x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)x.push(C),x.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(x,v),g(x,v),x.push(n.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function m(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapPMREM),v.push(x.envMapMaxLod),v.push(x.envMapSize),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.diffuseRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.numSunLights),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numSunLightShadows),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.numLightProbeGrids),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function g(v,x){o.disableAll(),x.instancing&&o.enable(0),x.instancingColor&&o.enable(1),x.instancingMorph&&o.enable(2),x.matcap&&o.enable(3),x.envMap&&o.enable(4),x.normalMapObjectSpace&&o.enable(5),x.normalMapTangentSpace&&o.enable(6),x.clearcoat&&o.enable(7),x.iridescence&&o.enable(8),x.alphaTest&&o.enable(9),x.vertexColors&&o.enable(10),x.vertexAlphas&&o.enable(11),x.vertexUv1s&&o.enable(12),x.vertexUv2s&&o.enable(13),x.vertexUv3s&&o.enable(14),x.vertexTangents&&o.enable(15),x.anisotropy&&o.enable(16),x.alphaHash&&o.enable(17),x.batching&&o.enable(18),x.dispersion&&o.enable(19),x.retroreflection&&o.enable(24),x.diffuseRoughness&&o.enable(25),x.batchingColor&&o.enable(20),x.gradientMap&&o.enable(21),x.packedNormalMap&&o.enable(22),x.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),x.numLightProbeGrids>0&&o.enable(22),x.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function y(v){let x=f[v.type],C;if(x){let A=Di[x];C=rs.clone(A.uniforms)}else C=v.uniforms;return C}function M(v,x){let C=h.get(x);return C!==void 0?++C.usedTimes:(C=new Cw(n,x,v,s),c.push(C),h.set(x,C)),C}function S(v){if(--v.usedTimes===0){let x=c.indexOf(v);c[x]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:y,acquireProgram:M,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:T}}function Nw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Lw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function S_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function M_(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,_,m,g){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},n[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=m,y.group=g),e++,y}function l(f,d,p,_,m,g,y){y.reversedDepth===!0&&(m=-m);let M=a(f,d,p,_,m,g);p.transmission>0?i.push(M):p.transparent===!0?s.push(M):t.push(M)}function c(f,d,p,_,m,g){let y=a(f,d,p,_,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(f,d){t.length>1&&t.sort(f||Lw),i.length>1&&i.sort(d||S_),s.length>1&&s.sort(d||S_)}function u(){for(let f=e,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Dw(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new M_,n.set(i,[o])):s>=r.length?(o=new M_,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ow(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ie};break;case"SpotLight":t={position:new P,direction:new P,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Fw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Uw=0;function Bw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kw(n){let e=new Ow,t=Fw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new bt,o=new bt;function a(c){let h=0,u=0,f=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,y=0,M=0,S=0,w=0,T=0,v=0,x=0,C=0,A=0;c.sort(Bw);for(let F=0,U=c.length;F<U;F++){let I=c[F],B=I.color,W=I.intensity,k=I.distance,se=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Is?se=I.shadow.map.texture:se=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*W,u+=B.g*W,f+=B.b*W;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],W);A++}else if(I.isSunLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,J=t.get(I);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[p]=J,i.sunShadowMap[p]=se;let Ae=K.getViewportCount();for(let Ce=0;Ce<Ae;Ce++)i.sunShadowMatrix[_+Ce]=K.getMatrix(Ce),i.sunShadowCascade[_+Ce]=K._cascadeData[Ce];_+=Ae,p++}i.sun[d]=X,d++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,J=t.get(I);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=se,i.directionalShadowMatrix[m]=I.shadow.matrix,w++}i.directional[m]=X,m++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(B).multiplyScalar(W),X.distance=k,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[y]=X;let K=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,K.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[y]=K.matrix,I.castShadow){let J=t.get(I);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.spotShadow[y]=J,i.spotShadowMap[y]=se,v++}y++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(B).multiplyScalar(W),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=X,M++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let K=I.shadow,J=t.get(I);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=se,i.pointShadowMatrix[g]=I.shadow.matrix,T++}i.point[g]=X,g++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(W),X.groundColor.copy(I.groundColor).multiplyScalar(W),i.hemi[S]=X,S++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let N=i.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==M||N.hemiLength!==S||N.numSunShadows!==p||N.numDirectionalShadows!==w||N.numPointShadows!==T||N.numSpotShadows!==v||N.numSpotMaps!==x||N.numLightProbes!==A)&&(i.sun.length=d,i.directional.length=m,i.spot.length=y,i.rectArea.length=M,i.point.length=g,i.hemi.length=S,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+x-C,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,N.sunLength=d,N.directionalLength=m,N.pointLength=g,N.spotLength=y,N.rectAreaLength=M,N.hemiLength=S,N.numSunShadows=p,N.numDirectionalShadows=w,N.numPointShadows=T,N.numSpotShadows=v,N.numSpotMaps=x,N.numLightProbes=A,i.version=Uw++)}function l(c,h){let u=0,f=0,d=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let S=c[y];if(S.isSunLight){let w=i.sun[u];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(g),u++}else if(S.isDirectionalLight){let w=i.directional[f];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),f++}else if(S.isSpotLight){let w=i.spot[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),p++}else if(S.isRectAreaLight){let w=i.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function b_(n){let e=new kw(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){i.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function zw(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new b_(n),e.set(s,[a])):r>=o.length?(a=new b_(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gw=`uniform sampler2D shadow_pass;
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
}`,Vw=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Ww=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],E_=new bt,Oa=new P,cf=new P;function Xw(n,e,t){let i=new Ms,s=new re,r=new re,o=new Dt,a=new Ec,l=new wc,c={},h=t.maxTextureSize,u={[Cs]:_n,[_n]:Cs,[wn]:wn},f=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Hw,fragmentShader:Gw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Vt;p.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Lt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let g=this.type;this.render=function(T,v,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===mg&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tr);let C=n.getRenderTarget(),A=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ts),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let U=g!==this.type;U&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=T.length;I<B;I++){let W=T[I],k=W.shadow;if(k===void 0){We("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let se=k.getFrameExtents();s.multiply(se),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,k.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||U===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Qr){if(W.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Yt(s.x,s.y,{format:Is,type:nn,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new es(s.x,s.y,ii),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=Ji,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=cn,k.map.depthTexture.magFilter=cn}else W.isPointLight?(k.map=new Ua(s.x),k.map.depthTexture=new na(s.x,yi)):(k.map=new Yt(s.x,s.y),k.map.depthTexture=new es(s.x,s.y,yi)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=Ji,this.type===tr?(k.map.depthTexture.compareFunction=X?qd:Xd,k.map.depthTexture.minFilter=Cn,k.map.depthTexture.magFilter=Cn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=cn,k.map.depthTexture.magFilter=cn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let K=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();W.isPointLight!==!0&&k.updateMatrices(W,x);let J=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:x.layers;for(let Ae=0;Ae<K;Ae++){let Ce=k.getCamera(Ae);if(W.isPointLight){let Y=k.camera,Me=k.matrix,Pe=W.distance||Y.far;Pe!==Y.far&&(Y.far=Pe,Y.updateProjectionMatrix()),Oa.setFromMatrixPosition(W.matrixWorld),Y.position.copy(Oa),cf.copy(Y.position),cf.add(Vw[Ae]),Y.up.copy(Ww[Ae]),Y.lookAt(cf),Y.updateMatrixWorld(),Me.makeTranslation(-Oa.x,-Oa.y,-Oa.z),E_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),k._frustum.setFromProjectionMatrix(E_,Y.coordinateSystem,Y.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,Ae),n.clear();else{Ae===0&&(n.setRenderTarget(k.map),n.clear());let Y=k.getViewport(Ae);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),F.viewport(o)}i=k.getFrustum(Ae),S(v,x,Ce,W,J,this.type)}k.isPointLightShadow!==!0&&this.type===Qr&&y(k,x),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(C,A,N)};function y(T,v){let x=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Yt(s.x,s.y,{format:Is,type:nn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(v,null,x,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(v,null,x,d,_,null)}function M(T,v,x,C){let A=null,N=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)A=N;else if(A=x.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let F=A.uuid,U=v.uuid,I=c[F];I===void 0&&(I={},c[F]=I);let B=I[U];B===void 0&&(B=A.clone(),I[U]=B,v.addEventListener("dispose",w)),A=B}if(A.visible=v.visible,A.wireframe=v.wireframe,C===Qr?A.side=v.shadowSide!==null?v.shadowSide:v.side:A.side=v.shadowSide!==null?v.shadowSide:u[v.side],A.alphaMap=v.alphaMap,A.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,A.map=v.map,A.clipShadows=v.clipShadows,A.clippingPlanes=v.clippingPlanes,A.clipIntersection=v.clipIntersection,A.displacementMap=v.displacementMap,A.displacementScale=v.displacementScale,A.displacementBias=v.displacementBias,A.wireframeLinewidth=v.wireframeLinewidth,A.linewidth=v.linewidth,x.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let F=n.properties.get(A);F.light=x}return A}function S(T,v,x,C,A,N){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Qr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let I=e.update(T),B=T.material;if(Array.isArray(B)){let W=I.groups;for(let k=0,se=W.length;k<se;k++){let X=W[k],K=B[X.materialIndex];if(K&&K.visible){let J=M(T,K,C,N);T.onBeforeShadow(n,T,v,x,I,J,X),n.renderBufferDirect(x,null,I,J,T,X),T.onAfterShadow(n,T,v,x,I,J,X)}}}else if(B.visible){let W=M(T,B,C,N);T.onBeforeShadow(n,T,v,x,I,W,null),n.renderBufferDirect(x,null,I,W,T,null),T.onAfterShadow(n,T,v,x,I,W,null)}}let U=T.children;for(let I=0,B=U.length;I<B;I++)S(U[I],v,x,C,A,N)}function w(T){T.target.removeEventListener("dispose",w);for(let x in c){let C=c[x],A=T.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function qw(n,e){function t(){let L=!1,te=new Dt,$=null,_e=new Dt(0,0,0,0);return{setMask:function(he){$!==he&&!L&&(n.colorMask(he,he,he,he),$=he)},setLocked:function(he){L=he},setClear:function(he,me,He,nt,le){le===!0&&(he*=nt,me*=nt,He*=nt),te.set(he,me,He,nt),_e.equals(te)===!1&&(n.clearColor(he,me,He,nt),_e.copy(te))},reset:function(){L=!1,$=null,_e.set(-1,0,0,0)}}}function i(){let L=!1,te=!1,$=null,_e=null,he=null;return{setReversed:function(me){if(te!==me){let He=e.get("EXT_clip_control");me?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),te=me;let nt=he;he=null,this.setClear(nt)}},getReversed:function(){return te},setTest:function(me){me?be(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(me){$!==me&&!L&&(n.depthMask(me),$=me)},setFunc:function(me){if(te&&(me=Jg[me]),_e!==me){switch(me){case ic:n.depthFunc(n.NEVER);break;case sc:n.depthFunc(n.ALWAYS);break;case rc:n.depthFunc(n.LESS);break;case kr:n.depthFunc(n.LEQUAL);break;case oc:n.depthFunc(n.EQUAL);break;case ac:n.depthFunc(n.GEQUAL);break;case lc:n.depthFunc(n.GREATER);break;case cc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=me}},setLocked:function(me){L=me},setClear:function(me){he!==me&&(he=me,te&&(me=1-me),n.clearDepth(me))},reset:function(){L=!1,$=null,_e=null,he=null,te=!1}}}function s(){let L=!1,te=null,$=null,_e=null,he=null,me=null,He=null,nt=null,le=null;return{setTest:function(Ge){L||(Ge?be(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(Ge){te!==Ge&&!L&&(n.stencilMask(Ge),te=Ge)},setFunc:function(Ge,tt,Ee){($!==Ge||_e!==tt||he!==Ee)&&(n.stencilFunc(Ge,tt,Ee),$=Ge,_e=tt,he=Ee)},setOp:function(Ge,tt,Ee){(me!==Ge||He!==tt||nt!==Ee)&&(n.stencilOp(Ge,tt,Ee),me=Ge,He=tt,nt=Ee)},setLocked:function(Ge){L=Ge},setClear:function(Ge){le!==Ge&&(n.clearStencil(Ge),le=Ge)},reset:function(){L=!1,te=null,$=null,_e=null,he=null,me=null,He=null,nt=null,le=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,M=null,S=null,w=null,T=null,v=null,x=new Ie(0,0,0),C=0,A=!1,N=null,F=null,U=null,I=null,B=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,se=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=se>=2);let K=null,J={},Ae=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Y=new Dt().fromArray(Ae),Me=new Dt().fromArray(Ce);function Pe(L,te,$,_e){let he=new Uint8Array(4),me=n.createTexture();n.bindTexture(L,me),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<$;He++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(te+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return me}let ze={};ze[n.TEXTURE_2D]=Pe(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=Pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[n.TEXTURE_2D_ARRAY]=Pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=Pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),be(n.DEPTH_TEST),o.setFunc(kr),Re(!1),ve(Nd),be(n.CULL_FACE),de(ts);function be(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Ue(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function _t(L,te){return f[L]!==te?(n.bindFramebuffer(L,te),f[L]=te,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=te),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Fe(L,te){let $=p,_e=!1;if(L){$=d.get(te),$===void 0&&($=[],d.set(te,$));let he=L.textures;if($.length!==he.length||$[0]!==n.COLOR_ATTACHMENT0){for(let me=0,He=he.length;me<He;me++)$[me]=n.COLOR_ATTACHMENT0+me;$.length=he.length,_e=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,_e=!0);_e&&n.drawBuffers($)}function Qe(L){return _!==L?(n.useProgram(L),_=L,!0):!1}let Ke={[nr]:n.FUNC_ADD,[_g]:n.FUNC_SUBTRACT,[yg]:n.FUNC_REVERSE_SUBTRACT};Ke[vg]=n.MIN,Ke[xg]=n.MAX;let ne={[Sg]:n.ZERO,[Mg]:n.ONE,[bg]:n.SRC_COLOR,[Od]:n.SRC_ALPHA,[Rg]:n.SRC_ALPHA_SATURATE,[Ag]:n.DST_COLOR,[wg]:n.DST_ALPHA,[Eg]:n.ONE_MINUS_SRC_COLOR,[Fd]:n.ONE_MINUS_SRC_ALPHA,[Cg]:n.ONE_MINUS_DST_COLOR,[Tg]:n.ONE_MINUS_DST_ALPHA,[Ig]:n.CONSTANT_COLOR,[Pg]:n.ONE_MINUS_CONSTANT_COLOR,[Ng]:n.CONSTANT_ALPHA,[Lg]:n.ONE_MINUS_CONSTANT_ALPHA};function de(L,te,$,_e,he,me,He,nt,le,Ge){if(L===ts){m===!0&&(Ue(n.BLEND),m=!1);return}if(m===!1&&(be(n.BLEND),m=!0),L!==gg){if(L!==g||Ge!==A){if((y!==nr||w!==nr)&&(n.blendEquation(n.FUNC_ADD),y=nr,w=nr),Ge)switch(L){case eo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rs:n.blendFunc(n.ONE,n.ONE);break;case Ld:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",L);break}else switch(L){case eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ld:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dd:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",L);break}M=null,S=null,T=null,v=null,x.set(0,0,0),C=0,g=L,A=Ge}return}he=he||te,me=me||$,He=He||_e,(te!==y||he!==w)&&(n.blendEquationSeparate(Ke[te],Ke[he]),y=te,w=he),($!==M||_e!==S||me!==T||He!==v)&&(n.blendFuncSeparate(ne[$],ne[_e],ne[me],ne[He]),M=$,S=_e,T=me,v=He),(nt.equals(x)===!1||le!==C)&&(n.blendColor(nt.r,nt.g,nt.b,le),x.copy(nt),C=le),g=L,A=!1}function ue(L,te){L.side===wn?Ue(n.CULL_FACE):be(n.CULL_FACE);let $=L.side===_n;te&&($=!$),Re($),L.blending===eo&&L.transparent===!1?de(ts):de(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let _e=L.stencilWrite;a.setTest(_e),_e&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(L){N!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),N=L)}function ve(L){L!==fg?(be(n.CULL_FACE),L!==F&&(L===Nd?n.cullFace(n.BACK):L===pg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),F=L}function j(L){L!==U&&(k&&n.lineWidth(L),U=L)}function ee(L,te,$){L?(be(n.POLYGON_OFFSET_FILL),(I!==te||B!==$)&&(I=te,B=$,o.getReversed()&&(te=-te,$=-$),n.polygonOffset(te,$))):Ue(n.POLYGON_OFFSET_FILL)}function oe(L){L?be(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function Ne(L){L===void 0&&(L=n.TEXTURE0+W-1),K!==L&&(n.activeTexture(L),K=L)}function ke(L,te,$){$===void 0&&(K===null?$=n.TEXTURE0+W-1:$=K);let _e=J[$];_e===void 0&&(_e={type:void 0,texture:void 0},J[$]=_e),(_e.type!==L||_e.texture!==te)&&(K!==$&&(n.activeTexture($),K=$),n.bindTexture(L,te||ze[L]),_e.type=L,_e.texture=te)}function O(){let L=J[K];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ht(){try{n.compressedTexImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function et(){try{n.compressedTexImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function yt(){try{n.texSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function fe(){try{n.texSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Pt(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Ve(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function qe(){try{n.texStorage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function R(){try{n.texStorage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function b(){try{n.texImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function H(){try{n.texImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function ae(L){return u[L]!==void 0?u[L]:n.getParameter(L)}function ie(L,te){u[L]!==te&&(n.pixelStorei(L,te),u[L]=te)}function pe(L){Y.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Y.copy(L))}function xe(L){Me.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Me.copy(L))}function Z(L,te){let $=c.get(te);$===void 0&&($=new WeakMap,c.set(te,$));let _e=$.get(L);_e===void 0&&(_e=n.getUniformBlockIndex(te,L.name),n.uniformBlockBinding(te,_e,_e),$.set(L,_e))}function Q(L,te,$){let he=c.get(te).get(L);l[he]!==$&&(n.bindBufferBase(n.UNIFORM_BUFFER,he,$),l[he]=$)}function ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},K=null,J={},f={},l={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,M=null,S=null,w=null,T=null,v=null,x=new Ie(0,0,0),C=0,A=!1,N=null,F=null,U=null,I=null,B=null,Y.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:be,disable:Ue,bindFramebuffer:_t,drawBuffers:Fe,useProgram:Qe,setBlending:de,setMaterial:ue,setFlipSided:Re,setCullFace:ve,setLineWidth:j,setPolygonOffset:ee,setScissorTest:oe,activeTexture:Ne,bindTexture:ke,unbindTexture:O,compressedTexImage2D:Ht,compressedTexImage3D:et,texImage2D:b,texImage3D:H,pixelStorei:ie,getParameter:ae,updateUBOMapping:Z,uniformBlockBinding:Q,texStorage2D:qe,texStorage3D:R,texSubImage2D:yt,texSubImage3D:fe,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Ve,scissor:pe,viewport:xe,reset:ge}}function Yw(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,_=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return m?new OffscreenCanvas(R,b):Wo("canvas")}function y(R,b,H){let ae=1,ie=qe(R);if((ie.width>H||ie.height>H)&&(ae=H/Math.max(ie.width,ie.height)),ae<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pe=Math.floor(ae*ie.width),xe=Math.floor(ae*ie.height);f===void 0&&(f=g(pe,xe));let Z=b?g(pe,xe):f;return Z.width=pe,Z.height=xe,Z.getContext("2d").drawImage(R,0,0,pe,xe),We("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+pe+"x"+xe+")."),Z}else return"data"in R&&We("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function M(R){return R.generateMipmaps}function S(R){n.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(R,b,H,ae,ie,pe=!1){if(R!==null){if(n[R]!==void 0)return n[R];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let xe;ae&&(xe=e.get("EXT_texture_norm16"),xe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=b;if(b===n.RED&&(H===n.FLOAT&&(Z=n.R32F),H===n.HALF_FLOAT&&(Z=n.R16F),H===n.UNSIGNED_BYTE&&(Z=n.R8),H===n.UNSIGNED_SHORT&&xe&&(Z=xe.R16_EXT),H===n.SHORT&&xe&&(Z=xe.R16_SNORM_EXT)),b===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.R8UI),H===n.UNSIGNED_SHORT&&(Z=n.R16UI),H===n.UNSIGNED_INT&&(Z=n.R32UI),H===n.BYTE&&(Z=n.R8I),H===n.SHORT&&(Z=n.R16I),H===n.INT&&(Z=n.R32I)),b===n.RG&&(H===n.FLOAT&&(Z=n.RG32F),H===n.HALF_FLOAT&&(Z=n.RG16F),H===n.UNSIGNED_BYTE&&(Z=n.RG8),H===n.UNSIGNED_SHORT&&xe&&(Z=xe.RG16_EXT),H===n.SHORT&&xe&&(Z=xe.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RG8UI),H===n.UNSIGNED_SHORT&&(Z=n.RG16UI),H===n.UNSIGNED_INT&&(Z=n.RG32UI),H===n.BYTE&&(Z=n.RG8I),H===n.SHORT&&(Z=n.RG16I),H===n.INT&&(Z=n.RG32I)),b===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),H===n.UNSIGNED_INT&&(Z=n.RGB32UI),H===n.BYTE&&(Z=n.RGB8I),H===n.SHORT&&(Z=n.RGB16I),H===n.INT&&(Z=n.RGB32I)),b===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),H===n.UNSIGNED_INT&&(Z=n.RGBA32UI),H===n.BYTE&&(Z=n.RGBA8I),H===n.SHORT&&(Z=n.RGBA16I),H===n.INT&&(Z=n.RGBA32I)),b===n.RGB&&(H===n.UNSIGNED_SHORT&&xe&&(Z=xe.RGB16_EXT),H===n.SHORT&&xe&&(Z=xe.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),b===n.RGBA){let Q=pe?Vo:at.getTransfer(ie);H===n.FLOAT&&(Z=n.RGBA32F),H===n.HALF_FLOAT&&(Z=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Z=Q===ft?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&xe&&(Z=xe.RGBA16_EXT),H===n.SHORT&&xe&&(Z=xe.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(R,b){let H;return R?b===null||b===yi||b===rr?H=n.DEPTH24_STENCIL8:b===ii?H=n.DEPTH32F_STENCIL8:b===no&&(H=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===yi||b===rr?H=n.DEPTH_COMPONENT24:b===ii?H=n.DEPTH_COMPONENT32F:b===no&&(H=n.DEPTH_COMPONENT16),H}function x(R,b){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==Cn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){let b=new WeakRef(R);i.get(R).__ref=b,p.add(b),_.register(R,b,b)}function A(R){let b=i.get(R).__ref;b!==void 0&&(p.delete(b),_.unregister(b))}function N(R){U(R.target)}function F(R){I(R.target)}function U(R){R.removeEventListener("dispose",N),A(R),W(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function I(R){R.removeEventListener("dispose",F),A(R),se(R)}function B(){for(let R of p){let b=R.deref();b!==void 0&&(b.isRenderTarget===!0?I(b):U(b))}p.clear(),u.clear()}function W(R){let b=i.get(R);if(b.__webglInit===void 0)return;let H=R.source,ae=d.get(H);if(ae){let ie=ae[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&k(R),Object.keys(ae).length===0&&d.delete(H)}i.remove(R)}function k(R){let b=i.get(R);n.deleteTexture(b.__webglTexture);let H=R.source,ae=d.get(H);delete ae[b.__cacheKey],o.memory.textures--}function se(R){let b=i.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();let H=R.depthTexture;if(H&&H.renderTarget===R&&U(H),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let pe=0;pe<b.__webglFramebuffer[ie].length;pe++)n.deleteFramebuffer(b.__webglFramebuffer[ie][pe]);else n.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)n.deleteFramebuffer(b.__webglFramebuffer[ie]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ae=R.textures;for(let ie=0,pe=ae.length;ie<pe;ie++){let xe=i.get(ae[ie]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(ae[ie])}i.remove(R)}let X=0;function K(){X=0}function J(){return X}function Ae(R){X=R}function Ce(){let R=X;return R>=s.maxTextures&&We("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,R}function Y(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function Me(R,b){let H=i.get(R);if(R.isVideoTexture&&Pt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let ae=R.image;if(ae===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(H,R,b);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+b)}function Pe(R,b){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ue(H,R,b);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+b)}function ze(R,b){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ue(H,R,b);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+b)}function be(R,b){let H=i.get(R);if(R.version>0&&H.__version!==R.version){Re(H,R,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+b)}let Ue={[hc]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[uc]:n.MIRRORED_REPEAT},_t={[cn]:n.NEAREST,[Fg]:n.NEAREST_MIPMAP_NEAREST,[Ca]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[zc]:n.LINEAR_MIPMAP_NEAREST,[ns]:n.LINEAR_MIPMAP_LINEAR},Fe={[zg]:n.NEVER,[Yd]:n.ALWAYS,[Hg]:n.LESS,[Xd]:n.LEQUAL,[Gg]:n.EQUAL,[qd]:n.GEQUAL,[Vg]:n.GREATER,[Wg]:n.NOTEQUAL};function Qe(R,b){if(b.type===ii&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Cn||b.magFilter===zc||b.magFilter===Ca||b.magFilter===ns||b.minFilter===Cn||b.minFilter===zc||b.minFilter===Ca||b.minFilter===ns)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Ue[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Ue[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Ue[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,_t[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,_t[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Fe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===cn||b.minFilter!==Ca&&b.minFilter!==ns||b.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ke(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",N),C(b));let ae=b.source,ie=d.get(ae);ie===void 0&&(ie={},d.set(ae,ie));let pe=Y(b);if(pe!==R.__cacheKey){ie[pe]===void 0&&(ie[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ie[pe].usedTimes++;let xe=ie[R.__cacheKey];xe!==void 0&&(ie[R.__cacheKey].usedTimes--,xe.usedTimes===0&&k(b)),R.__cacheKey=pe,R.__webglTexture=ie[pe].texture}return H}function ne(R,b,H){return Math.floor(Math.floor(R/H)/b)}function de(R,b,H,ae){let pe=R.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,H,ae,b.data);else{pe.sort((L,te)=>L.start-te.start);let xe=0;for(let L=1;L<pe.length;L++){let te=pe[xe],$=pe[L],_e=te.start+te.count,he=ne($.start,b.width,4),me=ne(te.start,b.width,4);$.start<=_e+1&&he===me&&ne($.start+$.count-1,b.width,4)===he?te.count=Math.max(te.count,$.start+$.count-te.start):(++xe,pe[xe]=$)}pe.length=xe+1;let Z=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let L=0,te=pe.length;L<te;L++){let $=pe[L],_e=Math.floor($.start/4),he=Math.ceil($.count/4),me=_e%b.width,He=Math.floor(_e/b.width),nt=he,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,He),t.texSubImage2D(n.TEXTURE_2D,0,me,He,nt,le,H,ae,b.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function ue(R,b,H){let ae=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=n.TEXTURE_3D);let ie=Ke(R,b),pe=b.source;t.bindTexture(ae,R.__webglTexture,n.TEXTURE0+H);let xe=i.get(pe);if(pe.version!==xe.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let le=at.getPrimaries(at.workingColorSpace),Ge=b.colorSpace===ss?null:at.getPrimaries(b.colorSpace),tt=b.colorSpace===ss||le===Ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let Q=y(b.image,!1,s.maxTextureSize);Q=Ve(b,Q);let ge=r.convert(b.format,b.colorSpace),L=r.convert(b.type),te=T(b.internalFormat,ge,L,b.normalized,b.colorSpace,b.isVideoTexture);Qe(ae,b);let $,_e=b.mipmaps,he=b.isVideoTexture!==!0,me=xe.__version===void 0||ie===!0,He=pe.dataReady,nt=x(b,Q);if(b.isDepthTexture)te=v(b.format===is,b.type),me&&(he?t.texStorage2D(n.TEXTURE_2D,1,te,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,te,Q.width,Q.height,0,ge,L,null));else if(b.isDataTexture)if(_e.length>0){he&&me&&t.texStorage2D(n.TEXTURE_2D,nt,te,_e[0].width,_e[0].height);for(let le=0,Ge=_e.length;le<Ge;le++)$=_e[le],he?He&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,$.width,$.height,ge,L,$.data):t.texImage2D(n.TEXTURE_2D,le,te,$.width,$.height,0,ge,L,$.data);b.generateMipmaps=!1}else he?(me&&t.texStorage2D(n.TEXTURE_2D,nt,te,Q.width,Q.height),He&&de(b,Q,ge,L)):t.texImage2D(n.TEXTURE_2D,0,te,Q.width,Q.height,0,ge,L,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){he&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,te,_e[0].width,_e[0].height,Q.depth);for(let le=0,Ge=_e.length;le<Ge;le++)if($=_e[le],b.format!==vi)if(ge!==null)if(he){if(He)if(b.layerUpdates.size>0){let tt=tf($.width,$.height,b.format,b.type);for(let Ee of b.layerUpdates){let Mt=$.data.subarray(Ee*tt/$.data.BYTES_PER_ELEMENT,(Ee+1)*tt/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,Ee,$.width,$.height,1,ge,Mt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,$.width,$.height,Q.depth,ge,$.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,te,$.width,$.height,Q.depth,0,$.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?He&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,$.width,$.height,Q.depth,ge,L,$.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,te,$.width,$.height,Q.depth,0,ge,L,$.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{he&&me&&t.texStorage2D(n.TEXTURE_2D,nt,te,_e[0].width,_e[0].height);for(let le=0,Ge=_e.length;le<Ge;le++)$=_e[le],b.format!==vi?ge!==null?he?He&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,$.width,$.height,ge,$.data):t.compressedTexImage2D(n.TEXTURE_2D,le,te,$.width,$.height,0,$.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?He&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,$.width,$.height,ge,L,$.data):t.texImage2D(n.TEXTURE_2D,le,te,$.width,$.height,0,ge,L,$.data)}else if(b.isDataArrayTexture)if(he){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,te,Q.width,Q.height,Q.depth),He)if(b.layerUpdates.size>0){let le=tf(Q.width,Q.height,b.format,b.type);for(let Ge of b.layerUpdates){let tt=Q.data.subarray(Ge*le/Q.data.BYTES_PER_ELEMENT,(Ge+1)*le/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ge,Q.width,Q.height,1,ge,L,tt)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ge,L,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,te,Q.width,Q.height,Q.depth,0,ge,L,Q.data);else if(b.isData3DTexture)he?(me&&t.texStorage3D(n.TEXTURE_3D,nt,te,Q.width,Q.height,Q.depth),He&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ge,L,Q.data)):t.texImage3D(n.TEXTURE_3D,0,te,Q.width,Q.height,Q.depth,0,ge,L,Q.data);else if(b.isFramebufferTexture){if(me)if(he)t.texStorage2D(n.TEXTURE_2D,nt,te,Q.width,Q.height);else{let le=Q.width,Ge=Q.height;for(let tt=0;tt<nt;tt++)t.texImage2D(n.TEXTURE_2D,tt,te,le,Ge,0,ge,L,null),le>>=1,Ge>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),Q.parentNode!==le){le.appendChild(Q),u.add(b),le.onpaint=Ge=>{let tt=Ge.changedElements;for(let Ee of u)tt.includes(Ee.image)&&(Ee.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let tt=n.RGBA,Ee=n.RGBA,Mt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,tt,Ee,Mt,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(_e.length>0){if(he&&me){let le=qe(_e[0]);t.texStorage2D(n.TEXTURE_2D,nt,te,le.width,le.height)}for(let le=0,Ge=_e.length;le<Ge;le++)$=_e[le],he?He&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ge,L,$):t.texImage2D(n.TEXTURE_2D,le,te,ge,L,$);b.generateMipmaps=!1}else if(he){if(me){let le=qe(Q);t.texStorage2D(n.TEXTURE_2D,nt,te,le.width,le.height)}He&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,L,Q)}else t.texImage2D(n.TEXTURE_2D,0,te,ge,L,Q);M(b)&&b.mipmapsAutoUpdate===!0&&S(ae),xe.__version=pe.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Re(R,b,H){if(b.image.length!==6)return;let ae=Ke(R,b),ie=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);let pe=i.get(ie);if(ie.version!==pe.__version||ae===!0){t.activeTexture(n.TEXTURE0+H);let xe=at.getPrimaries(at.workingColorSpace),Z=b.colorSpace===ss?null:at.getPrimaries(b.colorSpace),Q=b.colorSpace===ss||xe===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ge=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,te=[];for(let Ee=0;Ee<6;Ee++)!ge&&!L?te[Ee]=y(b.image[Ee],!0,s.maxCubemapSize):te[Ee]=L?b.image[Ee].image:b.image[Ee],te[Ee]=Ve(b,te[Ee]);let $=te[0],_e=r.convert(b.format,b.colorSpace),he=r.convert(b.type),me=T(b.internalFormat,_e,he,b.normalized,b.colorSpace),He=b.isVideoTexture!==!0,nt=pe.__version===void 0||ae===!0,le=ie.dataReady,Ge=x(b,$);Qe(n.TEXTURE_CUBE_MAP,b);let tt;if(b.isDepthTexture){if(me=v(b.format===is,b.type),nt)if(He)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,me,$.width,$.height);else for(let Ee=0;Ee<6;Ee++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,$.width,$.height,0,_e,he,null)}else if(ge){He&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,me,$.width,$.height);for(let Ee=0;Ee<6;Ee++){tt=te[Ee].mipmaps;for(let Mt=0;Mt<tt.length;Mt++){let on=tt[Mt];b.format!==vi?_e!==null?He?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt,0,0,on.width,on.height,_e,on.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt,me,on.width,on.height,0,on.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt,0,0,on.width,on.height,_e,he,on.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt,me,on.width,on.height,0,_e,he,on.data)}}}else{if(tt=b.mipmaps,He&&nt){tt.length>0&&Ge++;let Ee=qe(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,me,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(L){He?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,te[Ee].width,te[Ee].height,_e,he,te[Ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,te[Ee].width,te[Ee].height,0,_e,he,te[Ee].data);for(let Mt=0;Mt<tt.length;Mt++){let ps=tt[Mt].image[Ee].image;He?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt+1,0,0,ps.width,ps.height,_e,he,ps.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt+1,me,ps.width,ps.height,0,_e,he,ps.data)}}else{He?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,_e,he,te[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,_e,he,te[Ee]);for(let Mt=0;Mt<tt.length;Mt++){let on=tt[Mt];He?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt+1,0,0,_e,he,on.image[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Mt+1,me,_e,he,on.image[Ee])}}}M(b)&&b.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),pe.__version=ie.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ve(R,b,H,ae,ie,pe){let xe=r.convert(H.format,H.colorSpace),Z=r.convert(H.type),Q=T(H.internalFormat,xe,Z,H.normalized,H.colorSpace),ge=i.get(b),L=i.get(H);if(L.__renderTarget=b,!ge.__hasExternalTextures){let te=Math.max(1,b.width>>pe),$=Math.max(1,b.height>>pe);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,pe,Q,te,$,b.depth,0,xe,Z,null):t.texImage2D(ie,pe,Q,te,$,0,xe,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),fe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ie,L.__webglTexture,0,yt(b)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,ie,L.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(R,b,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){let ae=b.depthTexture,ie=ae&&ae.isDepthTexture?ae.type:null,pe=v(b.stencilBuffer,ie),xe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt(b),pe,b.width,b.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt(b),pe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,pe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,R)}else{let ae=b.textures;for(let ie=0;ie<ae.length;ie++){let pe=ae[ie],xe=r.convert(pe.format,pe.colorSpace),Z=r.convert(pe.type),Q=T(pe.internalFormat,xe,Z,pe.normalized,pe.colorSpace);fe(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt(b),Q,b.width,b.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt(b),Q,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Q,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ee(R,b,H){let ae=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=i.get(b.depthTexture);ie.__renderTarget=b;let pe=ae?b.depthTexture.image[0]:b.depthTexture.image;(!ie.__webglTexture||pe.width!==b.width||pe.height!==b.height)&&(pe.width=b.width,pe.height=b.height,b.depthTexture.needsUpdate=!0),ae?be(b.depthTexture,0):Me(b.depthTexture,0);let xe=ie.__webglTexture,Z=yt(b),Q=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,ge=b.depthTexture.format===is?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ji)fe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,Q,xe,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,ge,Q,xe,0);else if(b.depthTexture.format===is)fe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,Q,xe,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,ge,Q,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(R){let b=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let ae=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){let ie=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",ie)};ae.addEventListener("dispose",ie),b.__depthDisposeCallback=ie}b.__boundDepthTexture=ae}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let ae=0;ae<6;ae++)ee(b.__webglFramebuffer[ae],R,ae);else R.texture.mipmaps.length>0?ee(b.__webglFramebuffer[0],R,0):ee(b.__webglFramebuffer,R,0);else if(H){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=n.createRenderbuffer(),j(b.__webglDepthbuffer[ae],R,!1);else{let ie=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,pe)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),j(b.__webglDepthbuffer,R,!1);else{let ie=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,pe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(R,b,H){let ae=i.get(R);b!==void 0&&ve(ae.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&oe(R)}function ke(R){let b=R.texture,H=i.get(R),ae=i.get(b);R.addEventListener("dispose",F),C(R);let ie=R.textures,pe=R.isWebGLCubeRenderTarget===!0,xe=ie.length>1;if(xe||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=b.version,o.memory.textures++),pe){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(b.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let Q=0;Q<b.mipmaps.length;Q++)H.__webglFramebuffer[Z][Q]=n.createFramebuffer()}else H.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(b.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<b.mipmaps.length;Z++)H.__webglFramebuffer[Z]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(xe)for(let Z=0,Q=ie.length;Z<Q;Z++){let ge=i.get(ie[Z]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&fe(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<ie.length;Z++){let Q=ie[Z];H.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);let ge=r.convert(Q.format,Q.colorSpace),L=r.convert(Q.type),te=T(Q.internalFormat,ge,L,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),$=yt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,$,te,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),j(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,b);for(let Z=0;Z<6;Z++)if(b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)ve(H.__webglFramebuffer[Z][Q],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else ve(H.__webglFramebuffer[Z],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);M(b)?S(n.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let Z=0,Q=ie.length;Z<Q;Z++){let ge=ie[Z],L=i.get(ge),te=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,L.__webglTexture),Qe(te,ge),ve(H.__webglFramebuffer,R,ge,n.COLOR_ATTACHMENT0+Z,te,0),M(ge)&&S(te)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,ae.__webglTexture),Qe(Z,b),b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)ve(H.__webglFramebuffer[Q],R,b,n.COLOR_ATTACHMENT0,Z,Q);else ve(H.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,Z,0);M(b)?S(Z):b.mipmaps.length>0&&n.texParameteri(Z,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&oe(R)}function O(R){let b=R.textures;for(let H=0,ae=b.length;H<ae;H++){let ie=b[H];if(M(ie)&&ie.mipmapsAutoUpdate===!0){let pe=w(R),xe=i.get(ie).__webglTexture;t.bindTexture(pe,xe),S(pe),t.unbindTexture()}}}let Ht=[];function et(R){if(R.samples>0){if(fe(R)===!1){let b=R.textures,H=R.width,ae=R.height,ie=n.COLOR_BUFFER_BIT,pe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(R),Z=b.length>1;if(Z)for(let ge=0;ge<b.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ge=0;ge<b.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);let L=i.get(b[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,H,ae,0,0,H,ae,ie,n.NEAREST),l===!0&&(Ht.length=0,Ht.push(n.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Ht.push(pe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ge=0;ge<b.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);let L=i.get(b[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,L,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function yt(R){return Math.min(s.maxSamples,R.samples)}function fe(R){let b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pt(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Ve(R,b){let H=R.colorSpace,ae=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Go&&H!==ss&&(at.getTransfer(H)===ft?(ae!==vi||ie!==Un)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",H)),b}function qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ce,this.resetTextureUnits=K,this.getTextureUnits=J,this.setTextureUnits=Ae,this.setTexture2D=Me,this.setTexture2DArray=Pe,this.setTexture3D=ze,this.setTextureCube=be,this.rebindTextures=Ne,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=fe,this.dispose=B}function $w(n,e){function t(i,s=ss){let r,o=at.getTransfer(s);if(i===Un)return n.UNSIGNED_BYTE;if(i===Gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kd)return n.BYTE;if(i===zd)return n.SHORT;if(i===no)return n.UNSIGNED_SHORT;if(i===Hc)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===nn)return n.HALF_FLOAT;if(i===Vd)return n.ALPHA;if(i===Wd)return n.RGB;if(i===vi)return n.RGBA;if(i===Ji)return n.DEPTH_COMPONENT;if(i===is)return n.DEPTH_STENCIL;if(i===Wc)return n.RED;if(i===Xc)return n.RED_INTEGER;if(i===Is)return n.RG;if(i===qc)return n.RG_INTEGER;if(i===Yc)return n.RGBA_INTEGER;if(i===Ra||i===Ia||i===Pa||i===Na)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$c||i===Jc||i===Kc||i===Zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jc||i===Qc||i===eh||i===th||i===nh||i===La||i===ih)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===jc||i===Qc)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===eh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===th)return r.COMPRESSED_R11_EAC;if(i===nh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===La)return r.COMPRESSED_RG11_EAC;if(i===ih)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sh||i===rh||i===oh||i===ah||i===lh||i===ch||i===hh||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===_h)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ah)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ch)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ph)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_h)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yh||i===vh||i===xh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===yh)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sh||i===Mh||i===Da||i===bh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Sh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Mh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Jw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kw=`
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

}`,gf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Qt({vertexShader:Jw,fragmentShader:Kw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Pi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_f=class extends Ai{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new gf,g={},y=t.getContextAttributes(),M=null,S=null,w=[],T=[],v=new re,x=null,C=null,A=new En;A.viewport=new Dt;let N=new En;N.viewport=new Dt;let F=[A,N],U=new Fc,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Me=w[Y];return Me===void 0&&(Me=new Vr,w[Y]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(Y){let Me=w[Y];return Me===void 0&&(Me=new Vr,w[Y]=Me),Me.getGripSpace()},this.getHand=function(Y){let Me=w[Y];return Me===void 0&&(Me=new Vr,w[Y]=Me),Me.getHandSpace()};function W(Y){let Me=T.indexOf(Y.inputSource);if(Me===-1)return;let Pe=w[Me];Pe!==void 0&&(Pe.update(Y.inputSource,Y.frame,c||o),Pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",se);for(let Y=0;Y<w.length;Y++){let Me=T[Y];Me!==null&&(T[Y]=null,w[Y].disconnect(Me))}I=null,B=null,m.reset();for(let Y in g)delete g[Y];if(e.setRenderTarget(M),d=null,f=null,u=null,s=null,S=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(v.width,v.height,!1),C!==null){let Y=C.camera;Y.fov=C.fov,Y.zoom=C.zoom,Y.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",k),s.addEventListener("inputsourceschange",se),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,ze=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=y.stencil?is:Ji,ze=y.stencil?rr:yi);let Ue={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ue),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Yt(f.textureWidth,f.textureHeight,{format:vi,type:Un,depthTexture:new es(f.textureWidth,f.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Pe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Pe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Yt(d.framebufferWidth,d.framebufferHeight,{format:vi,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(Y){for(let Me=0;Me<Y.removed.length;Me++){let Pe=Y.removed[Me],ze=T.indexOf(Pe);ze>=0&&(T[ze]=null,w[ze].disconnect(Pe))}for(let Me=0;Me<Y.added.length;Me++){let Pe=Y.added[Me],ze=T.indexOf(Pe);if(ze===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=T.length){T.push(Pe),ze=Ue;break}else if(T[Ue]===null){T[Ue]=Pe,ze=Ue;break}if(ze===-1)break}let be=w[ze];be&&be.connect(Pe)}}function X(Y,Me){Me===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Me.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Me=Y.near,Pe=Y.far;m.texture!==null&&(m.depthNear>0&&(Me=m.depthNear),m.depthFar>0&&(Pe=m.depthFar)),U.near=N.near=A.near=Me,U.far=N.far=A.far=Pe,(I!==U.near||B!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,B=U.far),U.layers.mask=Y.layers.mask|6,A.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;let ze=Y.parent,be=U.cameras;X(U,ze);for(let Ue=0;Ue<be.length;Ue++)X(be[Ue],ze);U.projectionMatrix.copy(A.projectionMatrix),U.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&Y.isPerspectiveCamera&&(C={camera:Y,fov:Y.fov,zoom:Y.zoom}),K(Y,U,ze)};function K(Y,Me,Pe){Pe===null?Y.matrix.copy(Me.matrixWorld):(Y.matrix.copy(Pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Me.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Me.projectionMatrix),Y.projectionMatrixInverse.copy(Me.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=fc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return g[Y]};let J=null;function Ae(Y,Me){if(h=Me.getViewerPose(c||o),p=Me,h!==null){let Pe=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ze=!1;Pe.length!==U.cameras.length&&(U.cameras.length=0,ze=!0);for(let Fe=0;Fe<Pe.length;Fe++){let Qe=Pe[Fe],Ke=null;if(d!==null)Ke=d.getViewport(Qe);else{let de=u.getViewSubImage(f,Qe);Ke=de.viewport,Fe===0&&(e.setRenderTargetTextures(S,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(S))}let ne=F[Fe];ne===void 0&&(ne=new En,ne.layers.enable(Fe),ne.viewport=new Dt,F[Fe]=ne),ne.matrix.fromArray(Qe.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Qe.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Fe===0&&(U.matrix.copy(ne.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ze===!0&&U.cameras.push(ne)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let Fe=u.getDepthInformation(Pe[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,s.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let Fe=0;Fe<Pe.length;Fe++){let Qe=Pe[Fe].camera;if(Qe){let Ke=g[Qe];Ke||(Ke=new ia,g[Qe]=Ke);let ne=u.getCameraImage(Qe);Ke.sourceTexture=ne}}}}for(let Pe=0;Pe<w.length;Pe++){let ze=T[Pe],be=w[Pe];ze!==null&&be!==void 0&&be.update(ze,Me,c||o)}J&&J(Y,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),p=null}let Ce=new w_;Ce.setAnimationLoop(Ae),this.setAnimationLoop=function(Y){J=Y},this.dispose=function(){}}},Zw=new bt,O_=new Ye;O_.set(-1,0,0,0,1,0,0,0,1);function jw(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,jd(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,M,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,S)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===_n&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===_n&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),M=y.envMap,S=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Zw.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(O_),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===_n&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Qw(n,e,t,i){let s={},r={};function o(y,M){let S=M.program;i.uniformBlockBinding(y,S,s[y.id])}function a(y,M){let S=s[y.id];S===void 0&&(p(y),S=l(y),s[y.id]=S,y.addEventListener("dispose",m));let w=M.program;i.updateUBOMapping(y,w);let T=e.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let M=n.createBuffer(),S=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,S,w),n.bindBuffer(n.UNIFORM_BUFFER,null),M}function c(y){let M=s[y.id],S=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,v=S.length;T<v;T++){let x=S[T];if(Array.isArray(x))for(let C=0,A=x.length;C<A;C++)h(x[C],T,C,w);else h(x,T,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,M,S,w){if(f(y,M,S,w)===!0){let T=y.__offset,v=y.value;if(Array.isArray(v)){let x=0;for(let C=0;C<v.length;C++){let A=v[C],N=_(A,!0);u(A,y.__data,x),x+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,y.__data)}}function u(y,M,S){typeof y=="number"||typeof y=="boolean"?M[S]=y:y.isMatrix3?(M[S]=y.elements[0],M[S+1]=y.elements[1],M[S+2]=y.elements[2],M[S+3]=0,M[S+4]=y.elements[3],M[S+5]=y.elements[4],M[S+6]=y.elements[5],M[S+7]=0,M[S+8]=y.elements[6],M[S+9]=y.elements[7],M[S+10]=y.elements[8],M[S+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-S),S):y.toArray(M,S)}function f(y,M,S,w){let T=y.value,v=M+"_"+S;if(Array.isArray(T)){w[v]===void 0&&(w[v]=[]);let x=w[v],C=!1;for(let A=0;A<T.length;A++)d(T[A],x,A)===!0&&(C=!0);return C}return d(T,w,v)}function d(y,M,S){if(M[S]===void 0)return typeof y=="number"||typeof y=="boolean"?M[S]=y:ArrayBuffer.isView(y)?M[S]=y.slice():M[S]=y.clone(),!0;{let w=M[S];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return M[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function p(y){let M=y.uniforms,S=0,w=16;for(let v=0,x=M.length;v<x;v++){let C=Array.isArray(M[v])?M[v]:[M[v]];for(let A=0,N=C.length;A<N;A++){let F=C[A],U=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(M[v])||Array.isArray(F.value),B=S;for(let k=0,se=U.length;k<se;k++){let X=U[k],K=_(X,I),J=S%w,Ae=J%K.boundary,Ce=J+Ae;S+=Ae,Ce!==0&&w-Ce<K.storage&&(S+=w-Ce),k===0&&(B=S),S+=K.storage}let W=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new W((S-B)/Float32Array.BYTES_PER_ELEMENT),F.__offset=B}}let T=S%w;return T>0&&(S+=w-T),y.__size=S,y.__cache={},this}function _(y,M){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=16,S.storage=48):y.isMatrix4?(S.boundary=16,S.storage=64):y.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):We("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(y){let M=y.target;M.removeEventListener("dispose",m),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var eT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Li=null;function tT(){return Li===null&&(Li=new jo(eT,16,16,Is,nn),Li.name="DFG_LUT",Li.minFilter=Cn,Li.magFilter=Cn,Li.wrapS=wi,Li.wrapT=wi,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}var Ch=class{constructor(e={}){let{canvas:t=qg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Un}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let _=d,m=new Set([Yc,qc,Xc]),g=new Set([Un,yi,no,rr,Gc,Vc]),y=new Uint32Array(4),M=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},w=null,T=null,v=[],x=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,N=!1,F=null,U=null,I=null,B=null;this._outputColorSpace=mn;let W=0,k=0,se=null,X=-1,K=null,J=new Dt,Ae=new Dt,Ce=null,Y=new Ie(0),Me=0,Pe=t.width,ze=t.height,be=1,Ue=null,_t=null,Fe=new Dt(0,0,Pe,ze),Qe=new Dt(0,0,Pe,ze),Ke=!1,ne=new Ms,de=new _c,ue=!1,Re=!1,ve=new bt,j=new P,ee=new Dt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function ke(){return se===null?be:1}let O=i;function Ht(E,D){return t.getContext(E,D)}let et,yt,fe,Pt,Ve,qe,R,b,H,ae,ie,pe,xe,Z,Q,ge,L,te,$,_e,he,me,He;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),O===null){let D="webgl2";if(O=Ht(D,E),O===null)throw Ht(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(E){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Xe("WebGLRenderer: "+E.message),E}function nt(){et=new dE(O),et.init(),he=new $w(O,et),yt=new tE(O,et,e,he),fe=new qw(O,et),yt.reversedDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),U=O.createFramebuffer(),I=O.createFramebuffer(),B=O.createFramebuffer(),Pt=new mE(O),Ve=new Nw,qe=new Yw(O,et,fe,Ve,yt,he,Pt),R=new uE(A),b=new _S(O),me=new Qb(O,b),H=new fE(O,b,Pt,me),ae=new _E(O,H,b,me,Pt),te=new gE(O,yt,qe),Q=new nE(Ve),ie=new Pw(A,R,et,yt,me,Q),pe=new jw(A,Ve),xe=new Dw,Z=new zw(et),L=new jb(A,R,fe,ae,p,l),ge=new Xw(A,ae,yt),He=new Qw(O,Pt,yt,fe),$=new eE(O,et,Pt),_e=new pE(O,et,Pt),Pt.programs=ie.programs,A.capabilities=yt,A.extensions=et,A.properties=Ve,A.renderLists=xe,A.shadowMap=ge,A.state=fe,A.info=Pt}_!==Un&&(C=new vE(_,t.width,t.height,a,s,r));let le=new _f(A,O);this.xr=le,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(E){E!==void 0&&(be=E,this.setSize(Pe,ze,!1))},this.getSize=function(E){return E.set(Pe,ze)},this.setSize=function(E,D,q=!0){if(le.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=E,ze=D,t.width=Math.floor(E*be),t.height=Math.floor(D*be),q===!0&&(t.style.width=E+"px",t.style.height=D+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(Pe*be,ze*be).floor()},this.setDrawingBufferSize=function(E,D,q){Pe=E,ze=D,be=q,t.width=Math.floor(E*q),t.height=Math.floor(D*q),this.setViewport(0,0,E,D)},this.setEffects=function(E){if(_===Un){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let D=0;D<E.length;D++)if(E[D].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(Fe)},this.setViewport=function(E,D,q,z){E.isVector4?Fe.set(E.x,E.y,E.z,E.w):Fe.set(E,D,q,z),fe.viewport(J.copy(Fe).multiplyScalar(ke()).round())},this.getScissor=function(E){return E.copy(Qe)},this.setScissor=function(E,D,q,z){E.isVector4?Qe.set(E.x,E.y,E.z,E.w):Qe.set(E,D,q,z),fe.scissor(Ae.copy(Qe).multiplyScalar(ke()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(E){fe.setScissorTest(Ke=E)},this.setOpaqueSort=function(E){Ue=E},this.setTransparentSort=function(E){_t=E},this.getClearColor=function(E){return E.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(E=!0,D=!0,q=!0){let z=0;if(E){let G=!1;if(se!==null){let Se=se.texture.format;G=m.has(Se)}if(G){let Se=se.texture.type,Le=g.has(Se),ye=L.getClearColor(),Te=L.getClearAlpha(),Be=ye.r,Ze=ye.g,ht=ye.b;Le?(y[0]=Be,y[1]=Ze,y[2]=ht,y[3]=Te,O.clearBufferuiv(O.COLOR,0,y)):(M[0]=Be,M[1]=Ze,M[2]=ht,M[3]=Te,O.clearBufferiv(O.COLOR,0,M))}else z|=O.COLOR_BUFFER_BIT}D&&(z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),L.dispose(),xe.dispose(),Z.dispose(),qe.dispose(),Ve.dispose(),R.dispose(),ae.dispose(),H.dispose(),me.dispose(),He.dispose(),ie.dispose(),le.dispose(),le.removeEventListener("sessionstart",Em),le.removeEventListener("sessionend",wm),Gs.stop()};function Ge(E){E.preventDefault(),Jd("WebGLRenderer: Context Lost."),N=!0}function tt(){Jd("WebGLRenderer: Context Restored."),N=!1;let E=Pt.autoReset,D=ge.enabled,q=ge.autoUpdate,z=ge.needsUpdate,G=ge.type;nt(),Pt.autoReset=E,ge.enabled=D,ge.autoUpdate=q,ge.needsUpdate=z,ge.type=G}function Ee(E){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Mt(E){let D=E.target;D.removeEventListener("dispose",Mt),on(D)}function on(E){ps(E),Ve.remove(E)}function ps(E){let D=Ve.get(E).programs;D!==void 0&&(D.forEach(function(q){ie.releaseProgram(q)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,q,z,G,Se){D===null&&(D=oe);let Le=G.isMesh&&G.matrixWorld.determinantAffine()<0,ye=tx(E,D,q,z,G);fe.setMaterial(z,Le);let Te=q.index,Be=1;if(z.wireframe===!0){if(Te=H.getWireframeAttribute(q),Te===void 0)return;Be=2}let Ze=q.drawRange,ht=q.attributes.position,De=Ze.start*Be,ut=(Ze.start+Ze.count)*Be;Se!==null&&(De=Math.max(De,Se.start*Be),ut=Math.min(ut,(Se.start+Se.count)*Be)),Te!==null?(De=Math.max(De,0),ut=Math.min(ut,Te.count)):ht!=null&&(De=Math.max(De,0),ut=Math.min(ut,ht.count));let Kt=ut-De;if(Kt<0||Kt===1/0)return;me.setup(G,z,ye,q,Te);let It,Et=$;if(Te!==null&&(It=b.get(Te),Et=_e,Et.setIndex(It)),G.isMesh)z.wireframe===!0?(fe.setLineWidth(z.wireframeLinewidth*ke()),Et.setMode(O.LINES)):Et.setMode(O.TRIANGLES);else if(G.isLine){let xn=z.linewidth;xn===void 0&&(xn=1),fe.setLineWidth(xn*ke()),G.isLineSegments?Et.setMode(O.LINES):G.isLineLoop?Et.setMode(O.LINE_LOOP):Et.setMode(O.LINE_STRIP)}else G.isPoints?Et.setMode(O.POINTS):G.isSprite&&Et.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Et.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let xn=G._multiDrawStarts,Oe=G._multiDrawCounts,An=G._multiDrawCount,mt=Te?b.get(Te).bytesPerElement:1,Vs=Ve.get(z).currentProgram.getUniforms();for(let Sn=0;Sn<An;Sn++)Vs.setValue(O,"_gl_DrawID",Sn),Et.render(xn[Sn]/mt,Oe[Sn])}else if(G.isInstancedMesh)Et.renderInstances(De,Kt,G.count);else if(q.isInstancedBufferGeometry){let xn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Oe=Math.min(q.instanceCount,xn);Et.renderInstances(De,Kt,Oe)}else Et.render(De,Kt)};function bm(E,D,q,z){F!==null&&E.isNodeMaterial&&F.setObject(z,E),ue===!0&&Q.setState(E,q,!1),E.transparent===!0&&E.side===wn&&E.forceSinglePass===!1?(E.side=_n,E.needsUpdate=!0,Po(E,D,z),E.side=Cs,E.needsUpdate=!0,Po(E,D,z),E.side=wn):Po(E,D,z)}this.compile=function(E,D,q=null){q===null&&(q=E),F!==null&&F.renderStart(E,D,q),T=Z.get(q),T.init(D),x.push(T),q.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),E!==q&&E.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),Re=this.localClippingEnabled,ue=Q.init(this.clippingPlanes,Re),ue===!0&&Q.setGlobalState(this.clippingPlanes,D),F!==null&&ge.render(T.state.shadowsArray,q,D);let z=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Se=G.material;if(Se)if(Array.isArray(Se))for(let Le=0;Le<Se.length;Le++){let ye=Se[Le];bm(ye,q,D,G),z.add(ye)}else bm(Se,q,D,G),z.add(Se)}),T=x.pop(),F!==null&&F.renderEnd(),z},this.compileAsync=function(E,D,q=null){let z=this.compile(E,D,q);return new Promise(G=>{function Se(){if(z.forEach(function(Le){let Te=Ve.get(Le).currentProgram;(Te===void 0||Te.isReady())&&z.delete(Le)}),z.size===0){G(E);return}setTimeout(Se,10)}et.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let qu=null;function Qv(E){qu&&qu(E)}function Em(){Gs.stop()}function wm(){Gs.start()}let Gs=new w_;Gs.setAnimationLoop(Qv),typeof self<"u"&&Gs.setContext(self),this.setAnimationLoop=function(E){qu=E,le.setAnimationLoop(E),E===null?Gs.stop():Gs.start()},le.addEventListener("sessionstart",Em),le.addEventListener("sessionend",wm),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(E,D);let q=le.enabled===!0&&le.isPresenting===!0,z=C!==null&&(se===null||q)&&C.begin(A,se);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(D),D=le.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,D,se),T=Z.get(E,x.length),T.init(D),T.state.textureUnits=qe.getTextureUnits(),x.push(T),ve.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?de.setFromArrayCamera(D):ne.setFromProjectionMatrix(ve,ti,D.reversedDepth),Re=this.localClippingEnabled,ue=Q.init(this.clippingPlanes,Re),w=xe.get(E,v.length),w.init(),v.push(w),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Le=A.xr.getDepthSensingMesh();Le!==null&&Yu(Le,D,-1/0,A.sortObjects)}Yu(E,D,0,A.sortObjects),w.finish(),F!==null&&F.updateLights(T.state.lightsArray),A.sortObjects===!0&&w.sort(Ue,_t),Ne=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ne&&L.addToRenderList(w,E),this.info.autoReset===!0&&this.info.reset(),ue===!0&&Q.beginShadows();let G=T.state.shadowsArray;if(ge.render(G,E,D),ue===!0&&Q.endShadows(),(z&&C.hasRenderPass())===!1){let Le=w.opaque,ye=w.transmissive;if(T.setupLights(),D.isArrayCamera){let Te=D.cameras;if(ye.length>0)for(let Be=0,Ze=Te.length;Be<Ze;Be++){let ht=Te[Be];Am(Le,ye,E,ht)}Ne&&L.render(E);for(let Be=0,Ze=Te.length;Be<Ze;Be++){let ht=Te[Be];Tm(w,E,ht,ht.viewport)}}else ye.length>0&&Am(Le,ye,E,D),Ne&&L.render(E),Tm(w,E,D)}se!==null&&k===0&&(qe.updateMultisampleRenderTarget(se),qe.updateRenderTargetMipmap(se)),z&&C.end(A),E.isScene===!0&&E.onAfterRender(A,E,D),me.resetDefaultState(),X=-1,K=null,x.pop(),x.length>0?(T=x[x.length-1],qe.setTextureUnits(T.state.textureUnits),ue===!0&&Q.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?w=v[v.length-1]:w=null,F!==null&&F.renderEnd()};function Yu(E,D,q,z){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Le=D.isArrayCamera?de:ne;if(!E.frustumCulled||E.intersectsFrustum(Le)){z&&ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ve);let ye=ae.update(E),Te=E.material;Te.visible&&w.push(E,ye,Te,q,ee.z,null,D)}}else if(E.isMesh||E.isLine||E.isPoints){let Le=D.isArrayCamera?de:ne;if(!E.frustumCulled||E.intersectsFrustum(Le)){let ye=ae.update(E),Te=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ee.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ee.copy(ye.boundingSphere.center)),ee.applyMatrix4(E.matrixWorld).applyMatrix4(ve)),Array.isArray(Te)){let Be=ye.groups;for(let Ze=0,ht=Be.length;Ze<ht;Ze++){let De=Be[Ze],ut=Te[De.materialIndex];ut&&ut.visible&&w.push(E,ye,ut,q,ee.z,De,D)}}else Te.visible&&w.push(E,ye,Te,q,ee.z,null,D)}}}let Se=E.children;for(let Le=0,ye=Se.length;Le<ye;Le++)Yu(Se[Le],D,q,z)}function Tm(E,D,q,z){let{opaque:G,transmissive:Se,transparent:Le}=E;T.setupLightsView(q),ue===!0&&Q.setGlobalState(A.clippingPlanes,q),z&&fe.viewport(J.copy(z)),G.length>0&&Cl(G,D,q),Se.length>0&&Cl(Se,D,q),Le.length>0&&Cl(Le,D,q),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Am(E,D,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let De=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Yt(1,1,{generateMipmaps:!0,type:De?nn:Un,minFilter:ns,samples:Math.max(4,yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let Se=T.state.transmissionRenderTarget[z.id],Le=z.viewport||J;Se.setSize(Le.z*A.transmissionResolutionScale,Le.w*A.transmissionResolutionScale);let ye=A.getRenderTarget(),Te=A.getActiveCubeFace(),Be=A.getActiveMipmapLevel();A.setRenderTarget(Se),A.getClearColor(Y),Me=A.getClearAlpha(),Me<1&&A.setClearColor(16777215,.5),A.clear(),Ne&&L.render(q);let Ze=A.toneMapping;A.toneMapping=Ni;let ht=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),ue===!0&&Q.setGlobalState(A.clippingPlanes,z),Cl(E,q,z),qe.updateMultisampleRenderTarget(Se),qe.updateRenderTargetMipmap(Se),et.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ut=0,Kt=D.length;ut<Kt;ut++){let It=D[ut],{object:Et,geometry:xn,material:Oe,group:An}=It;if(Oe.side===wn&&Et.layers.test(z.layers)){let mt=Oe.side;Oe.side=_n,Oe.needsUpdate=!0,Cm(Et,q,z,xn,Oe,An),Oe.side=mt,Oe.needsUpdate=!0,De=!0}}De===!0&&(qe.updateMultisampleRenderTarget(Se),qe.updateRenderTargetMipmap(Se))}A.setRenderTarget(ye,Te,Be),A.setClearColor(Y,Me),ht!==void 0&&(z.viewport=ht),A.toneMapping=Ze}function Cl(E,D,q){let z=D.isScene===!0?D.overrideMaterial:null;for(let G=0,Se=E.length;G<Se;G++){let Le=E[G],{object:ye,geometry:Te,group:Be}=Le,Ze=Le.material;Ze.allowOverride===!0&&z!==null&&(Ze=z),ye.layers.test(q.layers)&&Cm(ye,D,q,Te,Ze,Be)}}function Cm(E,D,q,z,G,Se){F!==null&&G.isNodeMaterial&&F.setObject(E,G),E.onBeforeRender(A,D,q,z,G,Se),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(A,D,q,z,E,Se),G.transparent===!0&&G.side===wn&&G.forceSinglePass===!1?(G.side=_n,G.needsUpdate=!0,A.renderBufferDirect(q,D,z,G,E,Se),G.side=Cs,G.needsUpdate=!0,A.renderBufferDirect(q,D,z,G,E,Se),G.side=wn):A.renderBufferDirect(q,D,z,G,E,Se),E.onAfterRender(A,D,q,z,G,Se)}function Rm(E){let D=0;for(let q of E)q.texture!==null&&D++;return D}function Po(E,D,q){D.isScene!==!0&&(D=oe);let z=Ve.get(E),G=T.state.lights,Se=T.state.shadowsArray,Le=G.state.version,ye=ie.getParameters(E,G.state,Se,D,q,T.state.lightProbeGridArray),Te=ie.getProgramCacheKey(ye),Be=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=R.get(E.envMap||z.environment,Ze),z.envMapRotation=z.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",Mt),Be=new Map,z.programs=Be,z.programVariants=new Map);let ht=Be.get(Te);if(ht!==void 0){if(z.currentProgram===ht&&z.lightsStateVersion===Le)return Pm(E,ye),ht}else ye.uniforms=ie.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,q,ye),E.onBeforeCompile(ye,A),ht=ie.acquireProgram(ye,Te),Be.set(Te,ht),z.uniforms=ye.uniforms;let De=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=Q.uniform),Pm(E,ye),z.needsLights=ix(E),z.lightsStateVersion=Le,z.needsLights&&(De.ambientLightColor.value=G.state.ambient,De.lightProbe.value=G.state.probe,De.sunLights.value=G.state.sun,De.sunLightShadows.value=G.state.sunShadow,De.directionalLights.value=G.state.directional,De.directionalLightShadows.value=G.state.directionalShadow,De.spotLights.value=G.state.spot,De.spotLightShadows.value=G.state.spotShadow,De.rectAreaLights.value=G.state.rectArea,De.ltc_1.value=G.state.rectAreaLTC1,De.ltc_2.value=G.state.rectAreaLTC2,De.pointLights.value=G.state.point,De.pointLightShadows.value=G.state.pointShadow,De.hemisphereLights.value=G.state.hemi,De.sunShadowMatrix.value=G.state.sunShadowMatrix,De.sunShadowCascade.value=G.state.sunShadowCascade,De.directionalShadowMatrix.value=G.state.directionalShadowMatrix,De.spotLightMatrix.value=G.state.spotLightMatrix,De.spotLightMap.value=G.state.spotLightMap,De.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=Rm(T.state.lightProbeGridArray),z.currentProgram=ht,z.uniformsList=null,ht}function ex(E,D,q,z,G){let Se=Ve.get(E),Le=Se.currentProgram.id+","+z+","+G,ye=Se.programVariants.get(Le);return ye===void 0?(ye=Po(E,D,q),Se.programVariants.set(Le,ye)):(Se.currentProgram=ye,Se.uniformsList=null,Se.outputColorSpace=z,Se.toneMapping=G),ye}function Im(E){if(E.uniformsList===null){let D=E.currentProgram.getUniforms();E.uniformsList=so.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Pm(E,D){let q=Ve.get(E);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function tx(E,D,q,z,G){D.isScene!==!0&&(D=oe),qe.resetTextureUnits();let Se=D.fog,Le=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,ye=se===null?A.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:at.workingColorSpace,Te=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Be=R.get(z.envMap||Le,Te),Ze=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ht=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),De=!!q.morphAttributes.position,ut=!!q.morphAttributes.normal,Kt=!!q.morphAttributes.color,It=Ni;z.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(It=A.toneMapping);let Et=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xn=Et!==void 0?Et.length:0,Oe=Ve.get(z),An=T.state.lights;if(ue===!0&&(Re===!0||E!==K)){let Ut=E===K&&z.id===X;Q.setState(z,E,Ut)}let mt=!1,Vs=!1;z.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==An.state.version||G.isBatchedMesh&&Oe.batching===!1||!G.isBatchedMesh&&Oe.batching===!0||G.isBatchedMesh&&Oe.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Oe.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Oe.instancing===!1||!G.isInstancedMesh&&Oe.instancing===!0||G.isSkinnedMesh&&Oe.skinning===!1||!G.isSkinnedMesh&&Oe.skinning===!0||G.isInstancedMesh&&Oe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Oe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Oe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Oe.instancingMorph===!1&&G.morphTexture!==null||Oe.envMap!==Be||z.fog===!0&&Oe.fog!==Se||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Q.numPlanes||Oe.numIntersection!==Q.numIntersection)||Oe.vertexAlphas!==Ze||Oe.vertexTangents!==ht||Oe.morphTargets!==De||Oe.morphNormals!==ut||Oe.morphColors!==Kt||Oe.morphTargetsCount!==xn||Oe.numLightProbeGrids!==Rm(T.state.lightProbeGridArray)?mt=!0:(Oe.outputColorSpace!==ye||Oe.toneMapping!==It)&&(Vs=!0):(mt=!0,Oe.__version=z.version);let Sn=Oe.currentProgram;(mt===!0||Vs===!0)&&(Sn=Vs===!0?ex(z,D,G,ye,It):Po(z,D,G),F&&z.isNodeMaterial&&F.onUpdateProgram(z,Sn,Oe));let Rl=!1,ms=!1,Ws=!1,dt=Sn.getUniforms(),pn=Oe.uniforms;if(fe.useProgram(Sn.program)&&(Rl=!0,ms=!0,Ws=!0),z.id!==X&&(X=z.id,ms=!0),Rl||K!==E){fe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),dt.setValue(O,"projectionMatrix",E.projectionMatrix),dt.setValue(O,"viewMatrix",E.matrixWorldInverse);let an=dt.map.cameraPosition;an!==void 0&&an.setValue(O,j.setFromMatrixPosition(E.matrixWorld)),yt.logarithmicDepthBuffer&&dt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&dt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,ms=!0,Ws=!0)}if(Oe.needsLights&&(An.state.sunShadowMap.length>0&&dt.setValue(O,"sunShadowMap",An.state.sunShadowMap,qe),An.state.directionalShadowMap.length>0&&dt.setValue(O,"directionalShadowMap",An.state.directionalShadowMap,qe),An.state.spotShadowMap.length>0&&dt.setValue(O,"spotShadowMap",An.state.spotShadowMap,qe),An.state.pointShadowMap.length>0&&dt.setValue(O,"pointShadowMap",An.state.pointShadowMap,qe)),G.isSkinnedMesh){dt.setOptional(O,G,"bindMatrix"),dt.setOptional(O,G,"bindMatrixInverse");let Ut=G.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),dt.setValue(O,"boneTexture",Ut.boneTexture,qe))}G.isBatchedMesh&&(dt.setOptional(O,G,"batchingTexture"),dt.setValue(O,"batchingTexture",G._matricesTexture,qe),dt.setOptional(O,G,"batchingIdTexture"),dt.setValue(O,"batchingIdTexture",G._indirectTexture,qe),dt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&dt.setValue(O,"batchingColorTexture",G._colorsTexture,qe));let ui=q.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&te.update(G,q,Sn),(ms||Oe.receiveShadow!==G.receiveShadow)&&(Oe.receiveShadow=G.receiveShadow,dt.setValue(O,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(pn.envMapIntensity.value=D.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=tT()),ms){if(dt.setValue(O,"toneMappingExposure",A.toneMappingExposure),Oe.needsLights&&nx(pn,Ws),Se&&z.fog===!0&&pe.refreshFogUniforms(pn,Se),pe.refreshMaterialUniforms(pn,z,be,ze,T.state.transmissionRenderTarget[E.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let Ut=S,an=0;for(let Gi of T.state.lightProbeGridArray)Gi.texture!==null&&(Ut.textures[an]=Gi.texture,Ut.min[an]=Gi.boundingBox.min,Ut.max[an]=Gi.boundingBox.max,Ut.resolution[an]=Gi.resolution,an++);for(let Gi in Ut)Ut[Gi].length=an;pn.probesSH.value=Ut.textures,pn.probesMin.value=Ut.min,pn.probesMax.value=Ut.max,pn.probesResolution.value=Ut.resolution}so.upload(O,Im(Oe),pn,qe)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(so.upload(O,Im(Oe),pn,qe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&dt.setValue(O,"center",G.center),dt.setValue(O,"modelViewMatrix",G.modelViewMatrix),dt.setValue(O,"normalMatrix",G.normalMatrix),dt.setValue(O,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let Ut=z.uniformsGroups;for(let an=0,Gi=Ut.length;an<Gi;an++){let Lm=Ut[an];He.update(Lm,Sn),He.bind(Lm,Sn)}}return Sn}function nx(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.sunLights.needsUpdate=D,E.sunLightShadows.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function ix(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(E,D,q){let z=Ve.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ve.get(E.texture).__webglTexture=D,Ve.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,D){let q=Ve.get(E);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,q=0){se=E,W=D,k=q;let z=null,G=!1,Se=!1;if(E){let ye=Ve.get(E);if(ye.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(O.FRAMEBUFFER,ye.__webglFramebuffer),J.copy(E.viewport),Ae.copy(E.scissor),Ce=E.scissorTest,fe.viewport(J),fe.scissor(Ae),fe.setScissorTest(Ce),X=-1;return}else if(ye.__webglFramebuffer===void 0)qe.setupRenderTarget(E);else if(ye.__hasExternalTextures)qe.rebindTextures(E,Ve.get(E.texture).__webglTexture,Ve.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ze=E.depthTexture;if(ye.__boundDepthTexture!==Ze){if(Ze!==null&&Ve.has(Ze)&&(E.width!==Ze.image.width||E.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(E)}}let Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(Se=!0);let Be=Ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Be[D])?z=Be[D][q]:z=Be[D],G=!0):E.samples>0&&qe.useMultisampledRTT(E)===!1?z=Ve.get(E).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[q]:z=Be,J.copy(E.viewport),Ae.copy(E.scissor),Ce=E.scissorTest}else J.copy(Fe).multiplyScalar(be).floor(),Ae.copy(Qe).multiplyScalar(be).floor(),Ce=Ke;if(q!==0&&(z=U),fe.bindFramebuffer(O.FRAMEBUFFER,z)&&fe.drawBuffers(E,z),fe.viewport(J),fe.scissor(Ae),fe.setScissorTest(Ce),G){let ye=Ve.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,ye.__webglTexture,q)}else if(Se){let ye=D;for(let Te=0;Te<E.textures.length;Te++){let Be=Ve.get(E.textures[Te]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Te,Be.__webglTexture,q,ye)}}else if(E!==null&&q!==0){let ye=Ve.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ye.__webglTexture,q)}X=-1};function Nm(E){let D=Ve.get(E);return(D.__readFormat!==E.format||D.__readType!==E.type)&&(D.__readFormat=E.format,D.__readType=E.type,D.__formatReadable=yt.textureFormatReadable(E.format),D.__typeReadable=yt.textureTypeReadable(E.type)),D}this.readRenderTargetPixels=function(E,D,q,z,G,Se,Le,ye=0){if(!(E&&E.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Te=Te[Le],Array.isArray(Te)&&(Te=Te[0])),Te){fe.bindFramebuffer(O.FRAMEBUFFER,Te);try{let Be=E.textures[ye],Ze=Be.format,ht=Be.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye);let De=Nm(Be);if(De.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-z&&q>=0&&q<=E.height-G&&O.readPixels(D,q,z,G,he.convert(Ze),he.convert(ht),Se)}finally{let Be=se!==null?Ve.get(se).__webglFramebuffer:null;fe.bindFramebuffer(O.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(E,D,q,z,G,Se,Le,ye=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Te=Te[Le],Array.isArray(Te)&&(Te=Te[0])),Te)if(D>=0&&D<=E.width-z&&q>=0&&q<=E.height-G){fe.bindFramebuffer(O.FRAMEBUFFER,Te);let Be=E.textures[ye],Ze=Be.format,ht=Be.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye);let De=Nm(Be);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ut),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),O.readPixels(D,q,z,G,he.convert(Ze),he.convert(ht),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Kt=se!==null?Ve.get(se).__webglFramebuffer:null;fe.bindFramebuffer(O.FRAMEBUFFER,Kt);let It=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await $g(O,It,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ut),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ut),O.deleteSync(It),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,D=null,q=0){let z=Math.pow(2,-q),G=Math.floor(E.image.width*z),Se=Math.floor(E.image.height*z),Le=D!==null?D.x:0,ye=D!==null?D.y:0;qe.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,Le,ye,G,Se),fe.unbindTexture()},this.copyTextureToTexture=function(E,D,q=null,z=null,G=0,Se=0){let Le,ye,Te,Be,Ze,ht,De,ut,Kt,It=E.isCompressedTexture?E.mipmaps[Se]:E.image;if(q!==null)Le=q.max.x-q.min.x,ye=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,Be=q.min.x,Ze=q.min.y,ht=q.isBox3?q.min.z:0;else{let dt=Math.pow(2,-G);Le=Math.floor(It.width*dt),ye=Math.floor(It.height*dt),E.isDataArrayTexture?Te=It.depth:E.isData3DTexture?Te=Math.floor(It.depth*dt):Te=1,Be=0,Ze=0,ht=0}z!==null?(De=z.x,ut=z.y,Kt=z.z):(De=0,ut=0,Kt=0);let Et=he.convert(D.format),xn=he.convert(D.type),Oe;D.isData3DTexture?(qe.setTexture3D(D,0),Oe=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(qe.setTexture2DArray(D,0),Oe=O.TEXTURE_2D_ARRAY):(qe.setTexture2D(D,0),Oe=O.TEXTURE_2D),fe.activeTexture(O.TEXTURE0),fe.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),fe.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),fe.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let An=fe.getParameter(O.UNPACK_ROW_LENGTH),mt=fe.getParameter(O.UNPACK_IMAGE_HEIGHT),Vs=fe.getParameter(O.UNPACK_SKIP_PIXELS),Sn=fe.getParameter(O.UNPACK_SKIP_ROWS),Rl=fe.getParameter(O.UNPACK_SKIP_IMAGES);fe.pixelStorei(O.UNPACK_ROW_LENGTH,It.width),fe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,It.height),fe.pixelStorei(O.UNPACK_SKIP_PIXELS,Be),fe.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),fe.pixelStorei(O.UNPACK_SKIP_IMAGES,ht);let ms=E.isDataArrayTexture||E.isData3DTexture,Ws=D.isDataArrayTexture||D.isData3DTexture;if(E.isDepthTexture){let dt=Ve.get(E),pn=Ve.get(D),ui=Ve.get(dt.__renderTarget),Ut=Ve.get(pn.__renderTarget);fe.bindFramebuffer(O.READ_FRAMEBUFFER,ui.__webglFramebuffer),fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let an=0;an<Te;an++)ms&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ve.get(E).__webglTexture,G,ht+an),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ve.get(D).__webglTexture,Se,Kt+an)),O.blitFramebuffer(Be,Ze,Be+Le,Ze+ye,De,ut,De+Le,ut+ye,O.DEPTH_BUFFER_BIT,O.NEAREST);fe.bindFramebuffer(O.READ_FRAMEBUFFER,null),fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||Ve.has(E)){let dt=Ve.get(E),pn=Ve.get(D);fe.bindFramebuffer(O.READ_FRAMEBUFFER,I),fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let ui=0;ui<Te;ui++)ms?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,dt.__webglTexture,G,ht+ui):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,dt.__webglTexture,G),Ws?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,pn.__webglTexture,Se,Kt+ui):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pn.__webglTexture,Se),G!==0?O.blitFramebuffer(Be,Ze,Be+Le,Ze+ye,De,ut,De+Le,ut+ye,O.COLOR_BUFFER_BIT,O.NEAREST):Ws?O.copyTexSubImage3D(Oe,Se,De,ut,Kt+ui,Be,Ze,Le,ye):O.copyTexSubImage2D(Oe,Se,De,ut,Be,Ze,Le,ye);fe.bindFramebuffer(O.READ_FRAMEBUFFER,null),fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ws?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Oe,Se,De,ut,Kt,Le,ye,Te,Et,xn,It.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(Oe,Se,De,ut,Kt,Le,ye,Te,Et,It.data):O.texSubImage3D(Oe,Se,De,ut,Kt,Le,ye,Te,Et,xn,It):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Se,De,ut,Le,ye,Et,xn,It.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Se,De,ut,It.width,It.height,Et,It.data):O.texSubImage2D(O.TEXTURE_2D,Se,De,ut,Le,ye,Et,xn,It);fe.pixelStorei(O.UNPACK_ROW_LENGTH,An),fe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mt),fe.pixelStorei(O.UNPACK_SKIP_PIXELS,Vs),fe.pixelStorei(O.UNPACK_SKIP_ROWS,Sn),fe.pixelStorei(O.UNPACK_SKIP_IMAGES,Rl),Se===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&O.generateMipmap(Oe),fe.unbindTexture()},this.initRenderTarget=function(E){Ve.get(E).__webglFramebuffer===void 0&&qe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?qe.setTextureCube(E,0):E.isData3DTexture?qe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?qe.setTexture2DArray(E,0):qe.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){W=0,k=0,se=null,fe.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var oo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var $n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},nT=new er(-1,1,1,-1,0,1),yf=class extends Vt{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},iT=new yf,Ps=class{constructor(e){this._mesh=new Lt(iT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Nh=class extends $n{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rs.clone(e.uniforms),this.material=new Qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ps(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ka=class extends $n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Lh=class extends $n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Dh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new re);this._width=i.width,this._height=i.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nh(oo),this.copyPass.material.blending=ts,this.timer=new Sa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ka!==void 0&&(o instanceof ka?i=!0:o instanceof Lh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Oh=class extends $n{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ie}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var F_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ao=class n extends $n{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(r,o,{type:nn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Yt(r,o,{type:nn,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Yt(r,o,{type:nn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=F_;this.highPassUniforms=rs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=rs.clone(oo.uniforms),this.blendMaterial=new Qt({uniforms:this.copyUniforms,vertexShader:oo.vertexShader,fragmentShader:oo.fragmentShader,premultipliedAlpha:!0,blending:Rs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ie,this._oldClearAlpha=1,this._basic=new Fn,this._fsQuad=new Ps(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Qt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ao.BlurDirectionX=new re(1,0);ao.BlurDirectionY=new re(0,1);var za={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Fh=class extends $n{constructor(){super(),this.isOutputPass=!0,this.uniforms=rs.clone(za.uniforms),this.material=new Jr({name:za.name,uniforms:this.uniforms,vertexShader:za.vertexShader,fragmentShader:za.fragmentShader}),this._fsQuad=new Ps(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ma?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ea?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Aa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ir?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ta&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ha=new P;function si(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ha.copy(e),Ha[i]=0,Ha.normalize();let c=.5*o/(o+a),h=1-Ha.angleTo(n)/l;return Math.sign(Ha[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Uh=class n extends ni{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,h=new P(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,_=new P,m=.5/o;for(let g=0,y=0;g<u.length;g+=3,y+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*r,u[g+1]=h.y*Math.sign(l.y)+c.y*r,u[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),d[y+0]=si(_,c,"z","y",r,i),d[y+1]=1-si(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),d[y+0]=1-si(_,c,"z","y",r,i),d[y+1]=1-si(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),d[y+0]=1-si(_,c,"x","z",r,e),d[y+1]=si(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),d[y+0]=1-si(_,c,"x","z",r,e),d[y+1]=1-si(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),d[y+0]=1-si(_,c,"x","y",r,e),d[y+1]=1-si(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),d[y+0]=si(_,c,"x","y",r,e),d[y+1]=1-si(_,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function vf(n=1){let e=new Ii;return e.moveTo(0,-.35*n),e.bezierCurveTo(-.15*n,-.22*n,-.5*n,-.02*n,-.5*n,.2*n),e.bezierCurveTo(-.5*n,.42*n,-.25*n,.52*n,0,.32*n),e.bezierCurveTo(.25*n,.52*n,.5*n,.42*n,.5*n,.2*n),e.bezierCurveTo(.5*n,-.02*n,.15*n,-.22*n,0,-.35*n),e}function B_(n=.5,e=.22){let t=new Ii;for(let i=0;i<10;i++){let s=Math.PI/2+i/10*Math.PI*2,r=i%2?e:n;i===0?t.moveTo(Math.cos(s)*r,Math.sin(s)*r):t.lineTo(Math.cos(s)*r,Math.sin(s)*r)}return t.closePath(),t}var sT=new ma(vf(.6),12),U_=new gn(1,10,8),k_=new pa(.86,1,48);k_.rotateX(-Math.PI/2);var rT=new fa(.07,0),Bh=class{constructor(e,t){this.scene=e,this.camera=t,this.items=[],this._initFireflies()}_add(e,t,i){this.scene.add(e),this.items.push({obj:e,life:t,age:0,update:i})}hearts(e,t=16736162){for(let i=0;i<4;i++){let s=new Lt(sT,new Fn({color:new Ie(t).multiplyScalar(2.2),transparent:!0,side:wn,depthWrite:!1})),r=(Math.random()-.5)*.7,o=(Math.random()-.5)*.7,a=i*.14;s.position.copy(e).add(new P(r,1.1,o)),s.scale.setScalar(.001);let l=s.position.clone();this._add(s,1.8+a,(c,h)=>{let u=Math.max(0,c.age-a),f=Math.min(1,u*5)*(.55+i*.12);s.scale.setScalar(Math.max(.001,f)),s.position.set(l.x+Math.sin(u*6+i)*.15,l.y+u*1.2,l.z),s.quaternion.copy(this.camera.quaternion),s.material.opacity=Math.min(1,(c.life-c.age)*2)})}}shine(e){e.glow.intensity=40;let t=new Lt(U_,new Fn({color:new Ie(1.6,1.15,.4),transparent:!0,opacity:.5,depthWrite:!1,blending:Rs}));t.position.copy(e.root.position).add(new P(0,.55,0)),this._add(t,.7,i=>{let s=i.age/i.life;t.scale.setScalar(.5+s*3.2),t.material.opacity=.45*(1-s)}),this.sparks(e.root.position,16765024,14,1.2)}tide(e){e.glow.intensity=25;for(let t=0;t<3;t++){let i=new Lt(k_,new Fn({color:new Ie(.6,.75,2),transparent:!0,depthWrite:!1,side:wn}));i.position.copy(e.root.position).add(new P(0,.06,0));let s=t*.18;i.scale.setScalar(.001),this._add(i,1.1+s,r=>{let o=Math.max(0,r.age-s),a=Math.min(1,o/1.1);i.scale.setScalar(.3+a*3.5),i.material.opacity=o>0?.9*(1-a):0})}}dust(e,t=6){for(let i=0;i<t;i++){let s=new Lt(U_,new hn({color:16777215,transparent:!0,opacity:.8,roughness:1,depthWrite:!1})),r=i/t*Math.PI*2+Math.random(),o=new P(Math.cos(r)*1.6,.4+Math.random()*.4,Math.sin(r)*1.6);s.position.copy(e).add(new P(0,.08,0)),this._add(s,.45,(a,l)=>{s.position.addScaledVector(o,l),o.multiplyScalar(.9);let c=a.age/a.life;s.scale.setScalar(.08+c*.14),s.material.opacity=.8*(1-c)})}}sparks(e,t=16769658,i=18,s=2.5){for(let r=0;r<i;r++){let o=new Lt(rT,new Fn({color:new Ie(t).multiplyScalar(2.5),transparent:!0,depthWrite:!1})),a=new P(Math.random()-.5,Math.random()*.9+.2,Math.random()-.5).normalize().multiplyScalar(s*(.6+Math.random()*.6));o.position.copy(e).add(new P(0,.6,0)),this._add(o,.9,(l,c)=>{o.position.addScaledVector(a,c),a.y-=4*c,o.rotation.x+=c*8,o.rotation.y+=c*6,o.material.opacity=1-l.age/l.life})}}_initFireflies(){let t=new Float32Array(270);this.ffSeed=[];for(let r=0;r<90;r++){let o=Math.random()*Math.PI*2,a=2+Math.random()*24;this.ffSeed.push({x:Math.cos(o)*a+6,y:.6+Math.random()*6,z:Math.sin(o)*a-2,p:Math.random()*10})}let i=new Vt;i.setAttribute("position",new Xn(t,3));let s=(()=>{let r=document.createElement("canvas");r.width=r.height=64;let o=r.getContext("2d"),a=o.createRadialGradient(32,32,0,32,32,32);return a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.3,"rgba(255,240,200,0.8)"),a.addColorStop(1,"rgba(255,220,180,0)"),o.fillStyle=a,o.fillRect(0,0,64,64),new Qi(r)})();this.fireflies=new ea(i,new Wr({size:.28,map:s,color:new Ie(1.8,1.5,1),transparent:!0,depthWrite:!1,blending:Rs})),this.fireflies.frustumCulled=!1,this.scene.add(this.fireflies)}update(e,t){for(let s=this.items.length-1;s>=0;s--){let r=this.items[s];if(r.age+=e,r.age>=r.life){this.scene.remove(r.obj),r.obj.material?.dispose(),this.items.splice(s,1);continue}r.update(r,e)}let i=this.fireflies.geometry.attributes.position;for(let s=0;s<this.ffSeed.length;s++){let r=this.ffSeed[s];i.setXYZ(s,r.x+Math.sin(t*.3+r.p)*1.2,r.y+Math.sin(t*.7+r.p*2)*.5,r.z+Math.cos(t*.25+r.p)*1.2)}i.needsUpdate=!0}};var os=(n,e,t)=>n<e?e:n>t?t:n,oT=(n,e,t)=>n+(e-n)*t,yn=(n,e,t,i)=>oT(n,e,1-Math.exp(-t*i)),lo=n=>n*n*n*(n*(n*6-15)+10);function Ga(n,e){let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}var kh=(n,e,t,i)=>n+Ga(n,e)*(1-Math.exp(-t*i)),Bn=n=>Math.round(n*1e3)/1e3;function z_(n){let e=(n||"").normalize("NFKC").trim().toLowerCase().replace(/\s+/g," "),t=new TextEncoder().encode("eclipse:"+e),i=2166136261,s=2654435769;for(let r of t)i=Math.imul(i^r,16777619)>>>0,s=Math.imul(s^r,2246822519)>>>0,s=(s<<13|s>>>19)>>>0;return"r"+i.toString(36)+s.toString(36)}var Ot={get(n,e=null){try{let t=localStorage.getItem("eclipse."+n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem("eclipse."+n,JSON.stringify(e))}catch{}}},ar=new URLSearchParams(location.search),xf=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,H_=/iP(hone|ad|od)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,kn={sun:"\u2600\uFE0F",moon:"\u{1F319}"},vn={sun:"Sun",moon:"Moon"},en=n=>n==="sun"?"moon":"sun";var Sf=new Map;function vt(n,e={}){let t=n+JSON.stringify(e);return Sf.has(t)||Sf.set(t,new hn({color:n,roughness:.85,...e})),Sf.get(t)}function rt(n,e,t,i=0,s=0,r=0,{cast:o=!0,receive:a=!0}={}){let l=new Lt(e,t);return l.position.set(i,s,r),l.castShadow=o,l.receiveShadow=a,n.add(l),l}var Jn=(n,e,t,i=.12)=>new Uh(n,e,t,3,Math.min(i,n/2-.01,e/2-.01,t/2-.01));function Mf(n,e,t,i,s,r,o,a,l){let c=new Gt;c.position.set(e,s,t),n.add(c);let h=[[i*.985,-.62],[i*1.005,-.36],[i*.99,-.13],[i*.955,-.02],[i*.9,0],[.001,0]].map(([S,w])=>new re(S,w)),u=rt(c,new Es(h,64),vt(o),0,0,0,{cast:!1});u.receiveShadow=!0;let f=9,d=[];for(let S=0;S<=f;S++){let w=S/f,T=-r+w*(r-.5),v=.001+i*.98*Math.pow(w,.6);d.push(new re(v,T))}let p=new Es(d,26),_=p.attributes.position,m=[],g=new Ie(a),y=new Ie(l),M=new Ie;for(let S=0;S<_.count;S++){let w=_.getX(S),T=_.getY(S),v=_.getZ(S),x=Math.atan2(v,w);if(T<-.55){let C=1+Math.sin(x*5+T*1.7)*.07+Math.sin(x*13-T*2.3)*.05;_.setX(S,w*C),_.setZ(S,v*C),_.setY(S,T+Math.sin(x*7)*.15)}M.copy(y).lerp(g,Math.min(1,Math.max(0,1+T/r))),m.push(M.r,M.g,M.b)}return p.setAttribute("color",new je(m,3)),p.computeVertexNormals(),rt(c,p,new hn({vertexColors:!0,flatShading:!0,roughness:.95}),0,0,0),c}function bf(n,e,t,i,s=1,r=0){let o=new Gt;o.position.set(e,t,i),o.scale.setScalar(s),n.add(o),rt(o,new In(.17,.26,1.5,10),vt(11039055),0,.75,0);let a=[8177003,9622638,7059562,10804348],l=new da(1,1);return[[0,1.95,0,.95],[.45,2.55,.1,.68],[-.4,2.45,-.15,.62],[.05,2.95,-.05,.5]].forEach(([h,u,f,d],p)=>{let _=rt(o,l,vt(a[(p+r)%a.length],{flatShading:!0}),h,u,f);_.scale.setScalar(d),_.rotation.set(p,p*2,0)}),o}function Va(n,e,t,i,s){let r=new Gt;r.position.set(e,0,t),r.rotation.y=i,n.add(r),rt(r,new In(.07,.08,1.2,8),vt(10119755),0,.6,0),rt(r,Jn(1.9,.82,.12,.08),vt(15251850),0,1.25,0);let o=document.createElement("canvas");o.width=512,o.height=220;let a=o.getContext("2d");a.fillStyle="#f6dcbc",a.fillRect(0,0,512,220),a.fillStyle="#4a3352",a.textAlign="center",a.textBaseline="middle";let l=s.length>1?58:76;a.font=`800 ${l}px ui-rounded, "SF Pro Rounded", system-ui, sans-serif`,s.forEach((u,f)=>a.fillText(u,256,110+(f-(s.length-1)/2)*(l*1.15),490));let c=new Qi(o);c.colorSpace=mn,c.anisotropy=4;let h=rt(r,new Pi(1.76,.7),new hn({map:c,roughness:.9}),0,1.25,.065,{cast:!1});return h.receiveShadow=!0,r}function G_(n,e,t,i,s,r,o=1){let a=new Gt;a.position.set(e,t,i),n.add(a);let l=vt(16777215,{roughness:1,emissive:16771570,emissiveIntensity:.18});rt(a,Jn(s,.42,r,.2),l,0,-.21,0);let c=new gn(1,18,12),h=o,u=()=>(h=h*16807%2147483647)/2147483647,f=Math.round((s+r)*2.2);for(let d=0;d<f;d++){let p=d/f*Math.PI*2,_=Math.cos(p)*(s/2-.15),m=Math.sin(p)*(r/2-.15);rt(a,c,l,_,-.22+u()*.08,m).scale.set(.32+u()*.15,.25+u()*.12,.32+u()*.15)}for(let d=0;d<3;d++)rt(a,c,l,(u()-.5)*s*.7,-.45,(u()-.5)*r*.7).scale.set(s*.35,.3,r*.35);return a}function aT(n){let e=new gn(400,32,16),t=new Lt(e,new Qt({side:_n,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ie("#7d8fe6")},mid:{value:new Ie("#ffc9dc")},low:{value:new Ie("#ffe7cf")}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 low; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.02, 0.55, h)) : mix(mid, low, smoothstep(0.0, -0.35, h));
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
      }`}));t.renderOrder=-10,t.frustumCulled=!1,n.add(t);let i=new gn(1,14,10),s=150,r=new Ks(i,new hn({color:16777215,emissive:16767464,emissiveIntensity:.35,roughness:1}),s),o=new jt;for(let l=0;l<s;l++){let c=Math.random()*Math.PI*2,h=10+Math.pow(Math.random(),.7)*150;o.position.set(Math.cos(c)*h+8,-13-Math.random()*4,Math.sin(c)*h);let u=4+Math.random()*7;o.scale.set(u*1.4,u*.5,u),o.updateMatrix(),r.setMatrixAt(l,o.matrix)}n.add(r);let a=[[-38,4,-40,3],[52,-2,-55,4],[-60,7,10,3.5],[45,9,40,2.6],[-20,-5,60,4.5],[85,3,-10,3]];for(let[l,c,h,u]of a)Mf(n,l,h,u,c,u*1.4,10212730,14263682,10123944),bf(n,l+u*.2,c,h-u*.1,u*.35)}function V_(n){let e=[],t=[],i=[],s=new Gt;n.add(s),n.fog=new Yo(new Ie("#f9cfe0"),55,190),aT(n);let r=new _a(14673663,16765624,1.4);n.add(r);let o=new xa(16773599,2.6);o.position.set(18,26,14),o.target.position.set(9,0,-2),o.castShadow=!0,o.shadow.mapSize.set(2048,2048);let a=o.shadow.camera;a.left=-26,a.right=26,a.top=20,a.bottom=-20,a.near=1,a.far=80,o.shadow.bias=-4e-4,o.shadow.normalBias=.03,o.shadow.radius=3,n.add(o,o.target),Mf(s,0,0,9,0,7,9425262,14722684,9399452),e.push({type:"cyl",x:0,z:0,r:8.95,top:0,bottom:-1.2,safe:!0});let l=vt(16770286),c=vt(16744112,{emissive:16732051,emissiveIntensity:.35});for(let j of[-1.7,1.7])rt(s,new In(.2,.24,2.3,14),l,j,1.15,3),rt(s,Jn(.62,.2,.62,.08),l,j,.1,3),e.push({type:"cyl",x:j,z:3,r:.26,top:2.4,bottom:0});let h=rt(s,new _i(1.7,.17,12,40,Math.PI),l,0,2.3,3);h.rotation.z=0;let u=rt(s,new bs(vf(1.1),{depth:.22,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:3}),c,0,4,2.89);i.push(j=>{u.rotation.y=Math.sin(j*1.2)*.25,u.position.y=4+Math.sin(j*2)*.06});let f=5.2;[16169160,16766362,12575656,11127029,14140151].forEach((j,ee)=>{let oe=rt(s,Jn(3.2,1.04,2.7,.14),vt(j),0,.52+ee*1.04,-5.25);oe.rotation.y=(ee%2?1:-1)*.035}),rt(s,Jn(3.3,.18,2.8,.08),vt(9425262),0,f,-5.25);let p={type:"box",x0:-1.6,x1:1.6,z0:-6.6,z1:-3.9,top:f+.08,bottom:0,safe:!0};e.push(p),Va(s,-2.7,-2.5,.15,["Too high?","Stack up, or Sun throws Moon!"]);let _=[];[[1.3,-6.1],[2.6,-5.2],[3.9,-4.3]].forEach(([j,ee],oe)=>{let Ne=rt(s,Jn(1,j,.86,.1),vt([16757703,16765836,10473717][oe]),1.1,j/2,ee),ke={type:"box",x0:0,x1:0,z0:ee-.43,z1:ee+.43,top:j,bottom:0,safe:!0,disabled:!0};e.push(ke),_.push({m:Ne,col:ke,out:0})});let m=!1;i.push((j,ee)=>{for(let oe of _){oe.out=Math.min(1,oe.out+(m?ee*1.2:0));let Ne=1.1+lo(oe.out)*1;oe.m.position.x=Ne,oe.col.x0=Ne-.5,oe.col.x1=Ne+.5,oe.col.disabled=oe.out<.98}});let g=3.3;[[0,11133138],[1,16239013],[2,13087733]].forEach(([j,ee])=>rt(s,Jn(2.2,1.1,2.2,.12),vt(ee),3,.55+j*1.1,.8)),rt(s,Jn(2.28,.14,2.28,.06),vt(9425262),3,g,.8),e.push({type:"box",x0:1.9,x1:4.1,z0:-.3,z1:1.9,top:g+.07,bottom:0,safe:!0}),Va(s,4.3,2.6,-.3,["Jump, then","grab the edge!"]);let y=5.4;for(let[j,ee]of[[-7,-6],[-4,-3]]){for(let oe=0;oe<5;oe++)rt(s,Jn(1,y/5,1.8,.1),vt([10473717,13087733,16757703,16765836,12182688][(oe+(j<-5?0:2))%5]),(j+ee)/2,(oe+.5)*(y/5),-4.5);rt(s,Jn(1.06,.14,1.86,.06),vt(9425262),(j+ee)/2,y,-4.5),e.push({type:"box",x0:j,x1:ee,z0:-5.4,z1:-3.6,top:y+.07,bottom:0,safe:!0,wallJump:!0});for(let oe=0;oe<4;oe++){let Ne=j<-5?ee+.01:j-.01,ke=rt(s,new gi(.16,.3,3),vt(16777215,{emissive:16777215,emissiveIntensity:.25}),Ne,1+oe*1.15,-4.5,{cast:!1});ke.rotation.z=0,ke.scale.set(1,1,.25),ke.rotation.y=Math.PI/2}}Va(s,-5,-2.9,.1,["Wall jump!","Jump from wall to wall"]);let M=[16757703,16765836,12182688,10473717,13087733];for(let j=0;j<5;j++){let ee=.4*(j+1),oe=4.1-j*.9;rt(s,Jn(1.6,ee,.9,.1),vt(M[j]),5.8,ee/2,oe),e.push({type:"box",x0:5,x1:6.6,z0:oe-.45,z1:oe+.45,top:ee,bottom:0,safe:!0})}rt(s,Jn(2,2,1.7,.14),vt(16239013),5.8,1,-.78),rt(s,Jn(2.06,.14,1.76,.06),vt(9425262),5.8,2,-.78),e.push({type:"box",x0:4.8,x1:6.8,z0:-1.63,z1:.07,top:2.07,bottom:0,safe:!0}),rt(s,new In(.04,.04,1.6,8),vt(16777215),6.55,2.8,-1.45);let S=rt(s,new gi(.22,.6,3),vt(16744112),6.55,3.3,-1.15);S.rotation.x=Math.PI/2,i.push(j=>{S.rotation.z=Math.sin(j*4)*.15});let w=new Gt;w.position.set(-4.5,0,1.5),s.add(w);for(let j=0;j<8;j++){let ee=j/8*Math.PI*2;rt(w,new qr(.16,0),vt(12170185,{flatShading:!0}),Math.cos(ee)*.5,.08,Math.sin(ee)*.5).rotation.set(j,j*1.3,0)}for(let j=0;j<3;j++){let ee=rt(w,new In(.06,.07,.7,8),vt(9067068),0,.12,0);ee.rotation.order="YXZ",ee.rotation.set(Math.PI/2-.2,j/3*Math.PI,0)}let T=rt(w,new gi(.22,.6,10),new Fn({color:new Ie(2.4,1,.25)}),0,.45,0,{cast:!1}),v=rt(w,new gi(.12,.38,10),new Fn({color:new Ie(2.6,2.1,.7)}),0,.38,0,{cast:!1}),x=new Qs(16753226,6,7,2);x.position.set(0,.8,0),w.add(x),i.push(j=>{let ee=1+Math.sin(j*13)*.08+Math.sin(j*7.3)*.06;T.scale.set(1,ee,1),v.scale.set(1,2-ee,1),T.rotation.y=j*2,x.intensity=5+ee*2}),e.push({type:"cyl",x:-4.5,z:1.5,r:.55,top:.25,bottom:0});for(let[j,ee,oe]of[[-4.5,3,0],[-3,1.2,Math.PI/2.4]])rt(s,new In(.22,.22,1.3,12),vt(11565909),j,.22,ee).rotation.set(0,oe,Math.PI/2),e.push({type:"box",x0:j-(oe?.3:.65),x1:j+(oe?.3:.65),z0:ee-(oe?.65:.25),z1:ee+(oe?.65:.25),top:.42,bottom:0});let C=new Gt;C.position.set(-6.3,0,-1.2),C.rotation.y=.9,s.add(C);let A=rt(C,new gi(1.3,1.9,4,1),vt(16751754,{flatShading:!0}),0,.95,0);A.rotation.y=Math.PI/4;let N=rt(C,new gi(.5,1.05,3,1),vt(7031418,{flatShading:!0}),0,.5,.6,{cast:!1});N.scale.z=.2,e.push({type:"cyl",x:-6.3,z:-1.2,r:1,top:1.8,bottom:0,noStep:!0}),[[-7,3.9,1,0],[-2.5,-7.9,1.05,1],[3.4,-7.4,.95,2],[-7.9,-.3,.8,2],[8,2.4,.75,3]].forEach(([j,ee,oe,Ne])=>{bf(s,j,0,ee,oe,Ne),e.push({type:"cyl",x:j,z:ee,r:.3*oe,top:3.2*oe,bottom:0,noStep:!0})});let F=vt(12958937,{flatShading:!0});[[2.6,-2.2,.45],[-1.8,-8,.4],[7.4,4.4,.5],[-7.2,5.2,.35],[1.2,8.4,.3]].forEach(([j,ee,oe],Ne)=>{let ke=rt(s,new qr(1,0),F,j,oe*.55,ee);ke.scale.set(oe*1.2,oe,oe),ke.rotation.set(Ne,Ne*2,0),e.push({type:"cyl",x:j,z:ee,r:oe*1.05,top:oe*1.2,bottom:0})});let U=-3.5,I=10.2,B=18.4,W=G_(s,I,.05,U,3,3,7),k={type:"box",id:"raft",x0:0,x1:0,z0:U-1.5,z1:U+1.5,top:.05,bottom:-.4,dx:0,dy:0,dz:0};e.push(k);let se=j=>{let oe=(j%9e3+9e3)%9e3/9e3*9;return oe<1.5?I:oe<4.5?I+(B-I)*lo((oe-1.5)/3):oe<6?B:B+(I-B)*lo((oe-6)/3)},X={raft:{pos:(j,ee=new P)=>ee.set(se(j),.05,U)}};Va(s,6.6,-5.6,.35,["Cloud raft \u2192"]),Mf(s,24,-3.5,4.2,0,4.5,10147959,15052422,10123430),e.push({type:"cyl",x:24,z:-3.5,r:4.15,top:0,bottom:-1.2,safe:!0});let K=new Gt;K.position.set(24.5,0,-2.5),s.add(K),rt(K,new In(.36,.48,.8,16),vt(16773596),0,.4,0);let J=new Gt;J.position.y=.75,K.add(J);let Ae=rt(J,new gn(1.3,32,14,0,Math.PI*2,0,Math.PI/2),vt(16740221,{roughness:.6}),0,0,0);Ae.scale.y=.46;for(let j=0;j<7;j++){let ee=j/7*Math.PI*2,oe=j===0?0:.8,Ne=rt(J,new gn(.16,12,8),vt(16777215),Math.cos(ee)*oe,j===0?.6:.42,Math.sin(ee)*oe,{cast:!1});Ne.scale.y=.4}let Ce={type:"cyl",x:24.5,z:-2.5,r:1.25,top:1.35,bottom:0,bounce:17,isMushroom:!0};e.push(Ce);let Y=0;i.push((j,ee)=>{Y=Math.max(0,Y-ee*3);let oe=1-Math.sin(Y*Math.PI)*.25*Y;J.scale.set(1+(1-oe)*.6,oe,1+(1-oe)*.6)}),bf(s,26.6,0,-1.5,.8,2),e.push({type:"cyl",x:26.6,z:-1.5,r:.25,top:2.6,bottom:0,noStep:!0}),Va(s,21.2,-.6,-Math.PI/2+.5,["Bounce!"]),G_(s,24.5,5.5,-7.5,3.4,3.4,3),e.push({type:"box",x0:22.8,x1:26.2,z0:-9.2,z1:-5.8,top:5.5,bottom:5,safe:!0});let Me=[[3,.8,1.7],[-5,-4.5,2.4],[2.1,-5.2,1],[4.3,2.6,.4],[-5,-2.9,.4],[0,5.5,1.4],[-1.7,3,.5],[1.7,3,.5],[0,-5.25,2.3],[5.8,2.2,2.6],[5.8,-.8,1.5],[-4.5,1.5,1.2],[-6.3,-1.2,1.5],[-4.5,3,.8],[-3,1.2,.8],[24.5,-2.5,1.5],[-2.7,-2.5,.4]],Pe=(j,ee)=>Me.every(([oe,Ne,ke])=>(j-oe)**2+(ee-Ne)**2>ke*ke),ze=(j,ee,oe,Ne,ke)=>{let O=0,Ht=0;for(;O<Ne&&Ht++<Ne*10;){let et=Math.random()*Math.PI*2,yt=Math.sqrt(Math.random())*(oe-.6),fe=j+Math.cos(et)*yt,Pt=ee+Math.sin(et)*yt;Pe(fe,Pt)&&ke(fe,Pt,O++)}},be=[16752324,16777215,16769658,13022207,16747146],Ue=new Ks(new gn(.085,8,6),new hn({roughness:.7}),190),_t=new Ks(new gi(.07,.3,4),new hn({color:8178020,roughness:.9,flatShading:!0}),360),Fe=new jt,Qe=new Ie,Ke=0,ne=0,de=(j,ee)=>{Ke>=190||(Fe.position.set(j,.09,ee),Fe.scale.setScalar(.8+Math.random()*.6),Fe.rotation.set(0,0,0),Fe.updateMatrix(),Ue.setMatrixAt(Ke,Fe.matrix),Ue.setColorAt(Ke,Qe.setHex(be[Ke%be.length])),Ke++)},ue=(j,ee)=>{ne>=360||(Fe.position.set(j,.12,ee),Fe.scale.set(1,.7+Math.random()*.8,1),Fe.rotation.set((Math.random()-.5)*.4,0,(Math.random()-.5)*.4),Fe.updateMatrix(),_t.setMatrixAt(ne++,Fe.matrix))};ze(0,0,9,150,de),ze(24,-3.5,4.2,40,de),ze(0,0,9,220,ue),ze(24,-3.5,4.2,70,ue),Ue.count=Ke,_t.count=ne,Ue.castShadow=!1,Ue.receiveShadow=!0,_t.receiveShadow=!0,s.add(Ue,_t);let Re=new bs(B_(.34,.15),{depth:.1,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});Re.center();let ve=new hn({color:16765773,emissive:16757504,emissiveIntensity:1.3,roughness:.3,metalness:.1});return[["ledge",0,f+.75,-5.25],["lookout",5.8,2.7,-.8],["grab",3,g+.7,.8],["chimney",-5,y+.3,-4.5],["cloud",24.5,6.15,-7.5]].forEach(([j,ee,oe,Ne],ke)=>{let O=rt(s,Re,ve,ee,oe,Ne,{receive:!1});t.push({id:j,mesh:O,pos:new P(ee,oe,Ne),collected:!1,phase:ke*2})}),{colliders:e,stars:t,movers:X,spawn:{sun:new P(-1.2,0,5.6),moon:new P(1.2,0,5.6)},killY:-14,sunLight:o,bounce(j){j.isMushroom&&(Y=1)},towerTop:{x0:-1.6,x1:1.6,z0:-6.6,z1:-3.9,y:f},setTowerOccupied(j){j&&(m=!0)},update(j,ee,oe){let Ne=se(j);k.dx=Ne-1.5-k.x0,k.dy=0,k.dz=0,k.x0===0&&(k.dx=0),k.x0=Ne-1.5,k.x1=Ne+1.5,W.position.x=Ne,W.position.y=.05+Math.sin(ee*1.6)*.03;for(let ke of t)ke.mesh.visible=!ke.collected,ke.mesh.rotation.y=ee*1.8+ke.phase,ke.mesh.position.y=ke.pos.y+Math.sin(ee*2.2+ke.phase)*.12;for(let ke of i)ke(ee,oe)}}}var wt={normal:0,hang:1,wall:2,carried:3,carry:4,glide:5,climb:6},Wa={sun:{r:.4,h:1.45},moon:{r:.32,h:1.2}},zh=new gn(1,28,20),ri=new gn(1,14,10),Kn=(n,e)=>new sa(n,e,6,14),Wt=(n,e={})=>new hn({color:n,roughness:.75,...e});function $e(n,e,t,i=0,s=0,r=0,o=1,a=o,l=o,c=!0){let h=new Lt(e,t);return h.position.set(i,s,r),h.scale.set(o,a,l),h.castShadow=c,n.add(h),h}function oi(n,e=0,t=0,i=0){let s=new Gt;return s.position.set(e,t,i),n.add(s),s}function lT(n,e,t,i){let s=new Ii,r=(a,l,c,h)=>{a.moveTo(-l/2+h,-c/2),a.lineTo(l/2-h,-c/2),a.quadraticCurveTo(l/2,-c/2,l/2,-c/2+h),a.lineTo(l/2,c/2-h),a.quadraticCurveTo(l/2,c/2,l/2-h,c/2),a.lineTo(-l/2+h,c/2),a.quadraticCurveTo(-l/2,c/2,-l/2,c/2-h),a.lineTo(-l/2,-c/2+h),a.quadraticCurveTo(-l/2,-c/2,-l/2+h,-c/2)};r(s,n,e,i);let o=new Zs;return r(o,n-t*2,e-t*2,Math.max(.002,i-t)),s.holes.push(o),new bs(s,{depth:.012,bevelEnabled:!1,curveSegments:4})}function cT(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.translate(64,64),e.fillStyle="#ffd34d";for(let i=0;i<10;i++)e.rotate(Math.PI/5),e.beginPath(),e.moveTo(-9,-34),e.lineTo(0,-58),e.lineTo(9,-34),e.fill();e.beginPath(),e.arc(0,0,30,0,Math.PI*2),e.fill();let t=new Qi(n);return t.colorSpace=mn,t}function W_(n,e,t){let i={};for(let s of[-1,1]){let r=oi(n,s*t.shoulderX,t.shoulderY,0);$e(r,Kn(t.armR,t.armLen),t.sleeveMat,0,-(t.armLen/2+t.armR*.6),0);let o=$e(r,ri,t.skinMat,0,-(t.armLen+t.armR*1.6),.01,t.handR,t.handR*1.05,t.handR),a=oi(e,s*t.hipX,t.hipY,0);$e(a,Kn(t.legR,t.legLen),t.legMat,0,-(t.legLen/2+t.legR),0),$e(a,new ni(t.shoe[0],t.shoe[1],t.shoe[2]),t.shoeMat,0,-(t.hipY-t.shoe[1]/2),t.shoe[2]*.22),i[s<0?"lArm":"rArm"]=r,i[s<0?"lHand":"rHand"]=o,i[s<0?"lLeg":"rLeg"]=a}return i}function hT(n){let e=Wt(16243915,{roughness:.6}),t=Wt(14172989,{roughness:.9,emissive:8000520,emissiveIntensity:.12}),i=Wt(11875119,{roughness:.9}),s=Wt(3424350,{roughness:.9}),r=Wt(2763315,{roughness:.6}),o=Wt(2759958,{roughness:1}),a=Wt(4930094,{roughness:1}),l=Wt(8079909,{roughness:.35,metalness:.1}),c=oi(n,0,0,0),h=oi(n,0,.42,0);$e(h,Kn(.32,.12),t,0,.27,0,1,.76,.82),$e(h,Kn(.15,.2),i,0,.13,.2,1,.5,.35);let u=$e(h,new _i(.19,.075,10,24),i,0,.53,-.06);u.rotation.x=Math.PI/2-.25;for(let w of[-1,1])$e(h,new In(.012,.012,.16,6),Wt(16777215),w*.06,.4,.25);let f=$e(h,new Pi(.2,.2),new hn({map:cT(),transparent:!0,emissive:16757504,emissiveMap:null,emissiveIntensity:.9,roughness:.6}),.1,.33,.265,1,1,1,!1);f.material.emissiveMap=f.material.map;let d=W_(h,c,{shoulderX:.37,shoulderY:.46,armR:.095,armLen:.22,handR:.088,hipX:.14,hipY:.42,legR:.115,legLen:.2,shoe:[.21,.1,.32],skinMat:e,sleeveMat:t,legMat:s,shoeMat:r}),p=oi(h,0,.55,0),_=oi(p,0,.25,0);$e(_,zh,e,0,0,0,.27,.28,.27);let m=$e(_,new gn(.278,24,12,0,Math.PI*2,0,Math.PI*.4),a,0,.01,-.02);m.rotation.x=-.32,$e(_,zh,o,0,-.09,.06,.288,.2,.235),$e(_,zh,o,0,-.17,.12,.17,.12,.15);let g=$e(_,Kn(.03,.11),o,0,-.03,.262);g.rotation.z=Math.PI/2,$e(_,ri,e,0,0,.272,.042,.04,.035,!1);let y=$e(_,new _i(.032,.009,6,14,Math.PI),Wt(13070440),0,-.07,.288,1,.8,1,!1);y.rotation.z=Math.PI;for(let w of[-1,1]){$e(_,ri,e,w*.27,0,0,.045,.07,.04);let T=$e(_,Kn(.016,.07),o,w*.1,.115,.25,1,1,1,!1);T.rotation.z=Math.PI/2+w*.12}let M=[];for(let w of[-1,1])M.push($e(_,Kn(.026,.035),Wt(1906464,{roughness:.3}),w*.095,.035,.252,1,1,1,!1));let S=lT(.14,.095,.018,.025);for(let w of[-1,1]){$e(_,S,l,w*.098,.035,.262,1,1,1,!1),$e(_,new Pi(.11,.065),new hn({color:13625087,transparent:!0,opacity:.18,roughness:.1}),w*.098,.035,.27,1,1,1,!1);let T=$e(_,new ni(.012,.014,.24),l,w*.168,.05,.15,1,1,1,!1);T.rotation.y=w*.12}return $e(_,new ni(.06,.014,.014),l,0,.055,.272,1,1,1,!1),{hips:c,torso:h,neck:p,head:_,eyes:M,...d,extra:{}}}function uT(n){let e=Wt(15912889,{roughness:.55}),t=new Kr({color:4857720,roughness:.5,sheen:1,sheenColor:new Ie(10185686),sheenRoughness:.4}),i=new Kr({color:12032992,roughness:.35,metalness:.15,sheen:1,sheenColor:new Ie(16769279),iridescence:.4}),s=Wt(1708566,{roughness:.5}),r=Wt(2038308,{roughness:.35}),o=oi(n,0,0,0),a=[[.31,.16],[.33,.19],[.3,.28],[.24,.4],[.19,.5],[.17,.56]].map(([x,C])=>new re(x,C)),l=$e(o,new Es(a,28),t,0,0,0);l.material.side=wn;let c=oi(n,0,.5,0);$e(c,Kn(.19,.12),t,0,.17,0,1,.85,.8);let h=$e(c,new In(.205,.2,.3,20,1,!0,Math.PI*.24,Math.PI*1.52),i,0,.17,0,1,1,.84);h.material.side=wn;let u=W_(c,o,{shoulderX:.24,shoulderY:.3,armR:.062,armLen:.2,handR:.058,hipX:.08,hipY:.3,legR:.07,legLen:.14,shoe:[.11,.07,.2],skinMat:e,sleeveMat:i,legMat:e,shoeMat:r}),f=$e(u.rHand.parent,new _i(.055,.012,8,20),Wt(14672874,{metalness:1,roughness:.25}),0,-.235,0,1,1,1,!1);f.rotation.x=Math.PI/2;let d=oi(c,0,.33,0);$e(d,Kn(.05,.05),e,0,.02,0);let p=oi(d,0,.21,0);$e(p,zh,e,0,0,0,.235,.245,.235);let _=$e(p,new gn(.252,26,14,0,Math.PI*2,0,Math.PI*.52),s,0,.01,-.012);_.rotation.x=-.18;let m=$e(p,ri,s,-.05,.14,.15,.2,.075,.1);m.rotation.z=.35,m.rotation.x=-.4;let g=oi(p,0,0,0);$e(g,Kn(.2,.26),s,0,-.16,-.1,1.15,1,.68);let y=[[-.16,-.38,-.1],[.16,-.38,-.1],[0,-.43,-.15]];for(let[x,C,A]of y)$e(g,ri,s,x,C,A,.075,.08,.065);for(let x of[-1,1]){let C=$e(p,Kn(.05,.26),s,x*.2,-.16,.02,1,1,.8);C.rotation.z=x*.1;let A=$e(p,ri,s,x*.215,-.33,.035,.06,.055,.05);A.rotation.z=x*.4}let M=[];for(let x of[-1,1]){M.push($e(p,Kn(.028,.03),Wt(2758162,{roughness:.25}),x*.085,.02,.222,1,1,1,!1)),$e(p,ri,Wt(16777215,{emissive:16777215,emissiveIntensity:.4}),x*.085+.01,.035,.248,.009,.009,.006,!1);let C=$e(p,Kn(.012,.06),s,x*.088,.085,.215,1,1,1,!1);C.rotation.z=Math.PI/2-x*.18;let A=$e(p,ri,s,x*.115,.04,.21,.022,.008,.01,!1);A.rotation.z=x*.4,$e(p,ri,Wt(16748451,{transparent:!0,opacity:.75}),x*.14,-.05,.19,.045,.028,.02,!1)}$e(p,ri,e,0,-.025,.236,.024,.026,.02,!1);let S=$e(p,new _i(.03,.011,6,14,Math.PI),Wt(11540522,{roughness:.35}),0,-.088,.226,1,.75,1,!1);S.rotation.z=Math.PI;let w=oi(p,-.17,.14,.12);w.rotation.set(.3,-.6,0);let T=Wt(16777215,{emissive:16774888,emissiveIntensity:.35});for(let x=0;x<5;x++){let C=x/5*Math.PI*2;$e(w,ri,T,Math.cos(C)*.028,Math.sin(C)*.028,0,.026,.016,.008,!1)}return $e(w,ri,Wt(16766282),0,0,.006,.012,.012,.008,!1),$e(p,new _i(.04,.011,8,18,Math.PI*1.25),Wt(16766842,{emissive:16757504,emissiveIntensity:1.1,metalness:.4}),.19,.12,.09,1,1,1,!1).rotation.set(0,.7,.4),{hips:o,torso:c,neck:d,head:p,eyes:M,...u,extra:{skirt:l,backHair:g}}}function X_(n){let e=new Gt,t=new Gt;e.add(t),t.position.y=0;let i=new Gt;t.add(i);let s=n==="sun",r=s?hT(i):uT(i),o=Wa[n].h,a=new Qs(s?16747100:11570431,0,7,2);a.position.set(0,o*.6,0),e.add(a);let l={lax:0,laz:0,rax:0,raz:0,llx:0,rlx:0,lean:0,headX:0},c=0,h=0,u=0,f=2+Math.random()*3,d=0,p=!0,_=0,m=0,g=1;return{root:e,kind:n,glow:a,height:o,get yaw(){return d},setYaw(y){d=y,e.rotation.y=y},land(y=8){h=Math.max(h,Math.min(1,y/16))},spin(){_=.42},throwAnim(){m=.3},animate(y,M){u+=y;let{speed:S,grounded:w,vy:T}=M,v=M.mode||0;w&&!p&&(h=Math.max(h,.45)),p=w;let x=Math.min(1,S/5.2);c+=y*(5+S*2.1),h=yn(h,0,9,y);let C=0,A=0,N=-.14,F=.14,U=0,I=0,B=0,W=0,k=Math.sin(c);if(v===wt.hang)C=A=-2.95,N=-.22,F=.22,U=Math.sin(u*2.2)*.12,I=-U,B=.05,W=-.25;else if(v===wt.climb)C=A=-1.2,N=-.3,F=.3,U=1.1,I=.3,B=.45;else if(v===wt.wall)C=-2.2,A=-1.6,N=-.4,F=.5,U=.6,I=.2,B=-.1;else if(v===wt.carry)C=A=-2.9,N=-.38,F=.38,w&&(U=k*.7*x,I=-U),W=-.15;else if(v===wt.carried)C=A=-.4,N=-1.1,F=1.1,U=1.25,I=1.05,B=-.15;else if(v===wt.glide)C=A=0,N=-1.45+Math.sin(u*6)*.08,F=1.45-Math.sin(u*6)*.08,U=-.15,I=-.25,B=.18;else if(!w)T>0?(C=-.6,A=-.6,N=-1,F=1,U=.75,I=-.35):(N=-1.7+Math.sin(u*14)*.15,F=1.7-Math.sin(u*14)*.15,C=A=-.2,U=.35,I=-.2),B=.08;else{U=k*.85*x,I=-U,C=-k*.75*x*g,A=k*.75*x*g;let Ce=1-x;N=-.14-Math.sin(u*1.8)*.03*Ce,F=.14+Math.sin(u*1.8)*.03*Ce,B=x*.18,W=Math.sin(u*.9)*.04*Ce}if(m>0){m-=y;let Ce=m/.3;C=A=-2.9*Ce-.6*(1-Ce),N=-.3,F=.3}let se=16;l.lax=yn(l.lax,C,se,y),l.rax=yn(l.rax,A,se,y),l.laz=yn(l.laz,N,se,y),l.raz=yn(l.raz,F,se,y),l.llx=yn(l.llx,U,se,y),l.rlx=yn(l.rlx,I,se,y),l.lean=yn(l.lean,B,10,y),l.headX=yn(l.headX,W,8,y),r.lArm.rotation.set(l.lax,0,l.laz),r.rArm.rotation.set(l.rax,0,l.raz),r.lLeg.rotation.x=l.llx,r.rLeg.rotation.x=l.rlx,r.torso.rotation.x=l.lean,r.head.rotation.x=l.headX;let X=w&&v!==wt.carried?Math.abs(Math.sin(c))*.05*x:0;i.position.y=X;let K=1+Math.sin(u*2.4)*.015*(1-x);!w&&v===wt.normal&&(K+=Math.max(-.06,Math.min(.1,T*.01))),K-=h*.25;let J=1/Math.sqrt(Math.max(.5,K));if(i.scale.set(J,K,J),r.extra.skirt){let Ce=v===wt.glide?1.18:w?1+x*.04:1.08,Y=yn(r.extra.skirt.scale.x,Ce,8,y);r.extra.skirt.scale.set(Y,1,Y),r.extra.backHair.rotation.x=yn(r.extra.backHair.rotation.x,x*.25+(w?0:-.15),6,y)}if(_>0){_=Math.max(0,_-y);let Ce=1-_/.42,Y=Ce*Ce*(3-2*Ce);s?(t.position.y=o*.5,i.position.y-=o*.5,t.rotation.x=Y*Math.PI*2):t.rotation.y=Y*Math.PI*2}else t.rotation.set(0,0,0),t.position.y=0;f-=y;let Ae=f<.12;for(let Ce of r.eyes)Ce.scale.y=Ae?.15:1;f<0&&(f=2.5+Math.random()*3.5),a.intensity=yn(a.intensity,0,3,y)}}}var dT=30,fT=.45,pT=28,Hh=class{constructor(e=.36,t=1){this.pos=new P,this.vel=new P,this.r=e,this.h=t,this.grounded=!1,this.ground=null,this.maxFall=pT,this.wallC=null,this.wallNX=0,this.wallNZ=0}},Xt={x:0,z:0};function mT(n,e,t,i){let s=n<i.x0?i.x0:n>i.x1?i.x1:n,r=e<i.z0?i.z0:e>i.z1?i.z1:e,o=n-s,a=e-r,l=o*o+a*a;if(l>=t*t)return!1;if(l>1e-10){let p=Math.sqrt(l);return Xt.x=o/p*(t-p),Xt.z=a/p*(t-p),!0}let c=n-i.x0,h=i.x1-n,u=e-i.z0,f=i.z1-e,d=Math.min(c,h,u,f);return Xt.x=0,Xt.z=0,d===c?Xt.x=-(c+t):d===h?Xt.x=h+t:d===u?Xt.z=-(u+t):Xt.z=f+t,!0}function gT(n,e,t,i){let s=n-i.x,r=e-i.z,o=t+i.r,a=s*s+r*r;if(a>=o*o)return!1;let l=Math.sqrt(a);return l<1e-6?(Xt.x=o,Xt.z=0,!0):(Xt.x=s/l*(o-l),Xt.z=r/l*(o-l),!0)}var Xa=(n,e,t,i)=>i.type==="box"?mT(n,e,t,i):gT(n,e,t,i);function _T(n,e,t){let i=n.grounded;n.pos.x+=n.vel.x*t,n.pos.z+=n.vel.z*t;for(let o of e){if(o.owner===n||o.disabled)continue;let a=n.pos.y,l=a+n.h;if(a>=o.top-.001||l<=o.bottom+.001||!Xa(n.pos.x,n.pos.z,n.r,o))continue;let c=o.top-a;if(!o.noStep&&n.vel.y<=.01&&(i?c<=fT:c<=.35)){n.pos.y=o.top;continue}n.pos.x+=Xt.x,n.pos.z+=Xt.z;let h=Math.hypot(Xt.x,Xt.z);if(h>1e-6){let u=Xt.x/h,f=Xt.z/h;!o.isPlayer&&o.top>a+.7&&o.bottom<a+.3&&(n.wallC=o,n.wallNX=u,n.wallNZ=f);let d=n.vel.x*u+n.vel.z*f;d<0&&(n.vel.x-=d*u,n.vel.z-=d*f)}}let s=n.pos.y;n.vel.y=Math.max(n.vel.y-dT*t,-n.maxFall),n.pos.y+=n.vel.y*t,n.grounded=!1,n.ground=null;let r=null;for(let o of e)o.owner===n||o.disabled||Xa(n.pos.x,n.pos.z,n.r,o)&&(n.vel.y<=0?s>=o.top-.25&&n.pos.y<=o.top&&(!r||o.top>r.top)&&(r=o):s+n.h<=o.bottom+.05&&n.pos.y+n.h>o.bottom&&(n.pos.y=o.bottom-n.h,n.vel.y=0));if(r){let o=-n.vel.y;if(n.pos.y=r.top,n.vel.y=0,n.grounded=!0,n.ground=r,!i)return{collider:r,impact:o}}return null}function q_(n,e,t){n.wallC=null;let i=n.ground;i&&i.dx!==void 0&&i.dx*i.dx+i.dy*i.dy+i.dz*i.dz<1&&(n.pos.x+=i.dx,n.pos.y+=i.dy,n.pos.z+=i.dz);let s=Math.hypot(n.vel.x,n.vel.y,n.vel.z)+1,r=Math.min(8,Math.max(1,Math.ceil(s*t/.12))),o=null;for(let a=0;a<r;a++){let l=_T(n,e,t/r);l&&(o=l,l.collider.bounce&&(n.vel.y=l.collider.bounce,n.grounded=!1,n.ground=null))}return o}function Y_(n,e){let t=n.pos.y,i=t+n.h*.9;for(let s of e){if(s.isPlayer||s.noGrab||s.disabled||s.owner===n||s.top<=t+n.h*.45||s.top>i+.35||s.top<i-.5||s.bottom>t+n.h*.5||!Xa(n.pos.x,n.pos.z,n.r+.16,s))continue;let r=Math.hypot(Xt.x,Xt.z);if(r<1e-5)continue;let o=Xt.x/r,a=Xt.z/r,l=n.pos.x-o*(n.r+.32),c=n.pos.z-a*(n.r+.32);if(!Xa(l,c,.02,s))continue;let h=!1;for(let u of e)if(!(u===s||u.isPlayer||u.disabled||u.owner===n)&&u.bottom<s.top+n.h&&u.top>s.top+.05&&Xa(l,c,n.r*.8,u)){h=!0;break}if(!h)return{c:s,nx:o,nz:a,top:s.top,lx:l,lz:c}}return null}function $_(n){return{type:"cyl",x:0,z:0,r:n.r*.92,top:1,bottom:0,dx:0,dy:0,dz:0,isPlayer:!0,owner:n,ready:!1,px:0,py:0,pz:0}}function Gh(n,e,t){n.ready?(n.dx=e.x-n.px,n.dy=e.y-n.py,n.dz=e.z-n.pz):n.dx=n.dy=n.dz=0,n.px=e.x,n.py=e.y,n.pz=e.z,n.ready=!0,n.x=e.x,n.z=e.z,n.bottom=e.y,n.top=e.y+t}var jn=null,lr=null,Ns=Ot.get("sound",!0);function J_(){try{if(!jn){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;jn=new t,lr=jn.createGain(),lr.gain.value=Ns?.5:0,lr.connect(jn.destination)}jn.state!=="running"&&jn.resume();let n=jn.createBuffer(1,1,22050),e=jn.createBufferSource();e.buffer=n,e.connect(lr),e.start(0)}catch{}}var $t={get enabled(){return Ns},toggle(){return Ns=!Ns,Ot.set("sound",Ns),lr&&(lr.gain.value=Ns?.5:0),Ns},play(n){if(!jn||!Ns||jn.state!=="running")return;let e=yT[n];if(e)try{e(jn.currentTime)}catch{}}};function Zn(n,{type:e="sine",f0:t,f1:i=t,dur:s=.15,vol:r=.3,attack:o=.005}){let a=jn.createOscillator(),l=jn.createGain();a.type=e,a.frequency.setValueAtTime(t,n),a.frequency.exponentialRampToValueAtTime(Math.max(1,i),n+s),l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(r,n+o),l.gain.exponentialRampToValueAtTime(1e-4,n+s),a.connect(l),l.connect(lr),a.start(n),a.stop(n+s+.02)}var yT={jump:n=>Zn(n,{type:"triangle",f0:320,f1:620,dur:.14,vol:.22}),jump2:n=>Zn(n,{type:"triangle",f0:480,f1:900,dur:.14,vol:.2}),land:n=>Zn(n,{type:"sine",f0:160,f1:70,dur:.1,vol:.25}),bounce:n=>{Zn(n,{type:"sine",f0:180,f1:720,dur:.32,vol:.32}),Zn(n+.05,{type:"triangle",f0:360,f1:1100,dur:.25,vol:.12})},star:n=>[784,988,1175,1568].forEach((e,t)=>Zn(n+t*.07,{type:"triangle",f0:e,dur:.22,vol:.18})),heart:n=>{Zn(n,{type:"sine",f0:660,dur:.12,vol:.22}),Zn(n+.11,{type:"sine",f0:880,dur:.2,vol:.22})},shine:n=>[523,659,784].forEach((e,t)=>Zn(n+t*.04,{type:"sine",f0:e,f1:e*1.5,dur:.4,vol:.12})),tide:n=>{Zn(n,{type:"sine",f0:300,f1:150,dur:.5,vol:.2}),Zn(n+.1,{type:"sine",f0:450,f1:220,dur:.5,vol:.12})},join:n=>[523,784].forEach((e,t)=>Zn(n+t*.12,{type:"triangle",f0:e,dur:.25,vol:.18})),respawn:n=>Zn(n,{type:"sine",f0:900,f1:300,dur:.35,vol:.15})};function K_({canvas:n,joyZone:e,joyBase:t,joyKnob:i,buttons:s}){let r={move:{x:0,y:0},jumpHeld:!1,pressed:new Set,camDX:0,camDY:0,enabled:!1,lastUse:0},o=M=>{r.enabled&&r.pressed.add(M)},a=()=>J_();window.addEventListener("pointerdown",a,{passive:!0}),window.addEventListener("touchend",a,{passive:!0}),window.addEventListener("keydown",a);for(let M of["gesturestart","gesturechange","dblclick"])document.addEventListener(M,S=>S.preventDefault(),{passive:!1});let l=52,c=null,h=0,u=0;e.addEventListener("pointerdown",M=>{if(M.pointerType==="mouse"){p(M);return}if(c!==null)return;M.preventDefault(),c=M.pointerId,e.setPointerCapture(M.pointerId);let S=e.getBoundingClientRect();h=M.clientX,u=M.clientY,t.hidden=!1,t.style.transform=`translate(${h-S.left}px, ${u-S.top}px)`,t.dataset.ox=S.left,t.dataset.oy=S.top,i.style.transform="translate(0px, 0px)",e.classList.add("active"),r.lastUse=performance.now()}),e.addEventListener("pointermove",M=>{if(M.pointerId===c){let S=+t.dataset.ox,w=+t.dataset.oy,T=M.clientX-h,v=M.clientY-u,x=Math.hypot(T,v);if(x>l){let N=(x-l)/x;h+=T*N,u+=v*N,T=M.clientX-h,v=M.clientY-u}t.style.transform=`translate(${h-S}px, ${u-w}px)`,i.style.transform=`translate(${T}px, ${v}px)`;let C=T/l,A=-v/l;Math.hypot(C,A)<.12&&(C=0,A=0),r.move.x=C,r.move.y=A}else _(M)});let f=M=>{if(M.pointerId!==c){m(M);return}c=null,r.move.x=0,r.move.y=0,t.hidden=!0,e.classList.remove("active")};e.addEventListener("pointerup",f),e.addEventListener("pointercancel",f);let d=new Map;function p(M){d.set(M.pointerId,{x:M.clientX,y:M.clientY});try{M.target.setPointerCapture(M.pointerId)}catch{}}function _(M){let S=d.get(M.pointerId);S&&(r.camDX+=M.clientX-S.x,r.camDY+=M.clientY-S.y,S.x=M.clientX,S.y=M.clientY)}function m(M){d.delete(M.pointerId)}n.addEventListener("pointerdown",M=>{M.preventDefault(),p(M)}),n.addEventListener("pointermove",_),n.addEventListener("pointerup",m),n.addEventListener("pointercancel",m);for(let[M,S]of Object.entries(s)){S.addEventListener("pointerdown",T=>{T.preventDefault();try{S.setPointerCapture(T.pointerId)}catch{}S.classList.add("pressed"),o(M),M==="jump"&&(r.jumpHeld=!0)});let w=()=>{S.classList.remove("pressed"),M==="jump"&&(r.jumpHeld=!1)};S.addEventListener("pointerup",w),S.addEventListener("pointercancel",w),S.addEventListener("lostpointercapture",w),S.addEventListener("contextmenu",T=>T.preventDefault())}let g=new Set,y=()=>{if(c!==null)return;let M=0,S=0;(g.has("KeyA")||g.has("ArrowLeft"))&&(M-=1),(g.has("KeyD")||g.has("ArrowRight"))&&(M+=1),(g.has("KeyW")||g.has("ArrowUp"))&&(S+=1),(g.has("KeyS")||g.has("ArrowDown"))&&(S-=1);let w=Math.hypot(M,S)||1;r.move.x=M/w,r.move.y=S/w};return window.addEventListener("keydown",M=>{M.target.tagName!=="INPUT"&&(M.repeat||(g.add(M.code),M.code==="Space"&&(o("jump"),r.jumpHeld=!0,M.preventDefault()),M.code==="KeyE"&&o("ability"),M.code==="KeyH"&&o("heart"),M.code==="KeyQ"&&o("swap"),y()))}),window.addEventListener("keyup",M=>{g.delete(M.code),M.code==="Space"&&(r.jumpHeld=!1),y()}),window.addEventListener("blur",()=>{g.clear(),r.jumpHeld=!1,r.move.x=r.move.y=0}),{state:r,consume(M){let S=r.pressed.has(M);return r.pressed.delete(M),S},takeCam(){let M={x:r.camDX,y:r.camDY};return r.camDX=0,r.camDY=0,M},setEnabled(M){r.enabled=M,M||(r.pressed.clear(),r.move.x=r.move.y=0,r.jumpHeld=!1)}}}var Z_=new P,vT=new P,xT=new P,Vh=class{constructor(){this.buf=[],this.lat=[],this.delay=null,this.pos=new P,this.vel=new P,this.yaw=0,this.grounded=!0,this.mode=0,this.has=!1,this.lastRecv=0}push(e,t){let i=this.buf[this.buf.length-1];i&&e.t<=i.t||(i&&e.t-i.t>2500&&(this.buf.length=0),this.buf.push(e),this.buf.length>60&&this.buf.shift(),this.lat.push(t-e.t),this.lat.length>40&&this.lat.shift(),this.lastRecv=performance.now())}snap(){this.buf.splice(0,this.buf.length-1)}targetDelay(){let e=[...this.lat].sort((i,s)=>i-s);return e[Math.min(e.length-1,Math.floor(e.length*.9))]+45}jitter(){if(this.lat.length<2)return 0;let e=[...this.lat].sort((t,i)=>t-i);return Math.round(e[Math.floor(e.length*.9)]-e[0])}sample(e,t,i){if(!this.buf.length)return!1;let s=this.targetDelay();this.delay===null||Math.abs(s-this.delay)>1e3?this.delay=s:this.delay+=(s-this.delay)*Math.min(1,t*1.5);let r=e-this.delay,o=this.buf,a=(p,_)=>{if(_.set(p.p[0],p.p[1],p.p[2]),p.b){let m=i(p.b,xT);if(!m)return null;_.add(m)}return _};for(;o.length>2&&o[1].t<=r;)o.shift();let l=o[0],c=o[1];if(c&&r>=l.t&&r<=c.t){let p=(r-l.t)/Math.max(1,c.t-l.t),_=a(l,Z_),m=a(c,vT);if(_&&m){if(!l.b&&!c.b&&l.b===c.b){let g=(c.t-l.t)/1e3,y=p*p,M=y*p,S=2*M-3*y+1,w=M-2*y+p,T=-2*M+3*y,v=M-y,x=g<.25;for(let C of["x","y","z"]){let A=C==="x"?0:C==="y"?1:2,N=_[C]+(m[C]-_[C])*p,F=S*_[C]+w*g*l.v[A]+T*m[C]+v*g*c.v[A];this.pos[C]=x?F:N}(l.g||c.g)&&x&&(this.pos.y=_.y+(m.y-_.y)*p)}else this.pos.lerpVectors(_,m,p);return this.vel.set(l.v[0]+(c.v[0]-l.v[0])*p,l.v[1]+(c.v[1]-l.v[1])*p,l.v[2]+(c.v[2]-l.v[2])*p),this.yaw=l.r+Ga(l.r,c.r)*p,this.grounded=p<.5?!!l.g:!!c.g,this.mode=(p<.5?l.m:c.m)||0,this.has=!0,!0}}let h=r<l.t?l:o[o.length-1],u=a(h,Z_);if(!u)return this.has;let f=os((r-h.t)/1e3,0,.25),d=Math.hypot(h.v[0],h.v[2])>.05||!h.g;return this.pos.set(u.x+(d?h.v[0]*f:0),u.y+(h.g?0:h.v[1]*f),u.z+(d?h.v[2]*f:0)),h.g&&(this.pos.y=u.y),this.vel.set(h.v[0],h.v[1],h.v[2]),this.yaw=h.r,this.grounded=!!h.g,this.mode=h.m||0,this.has=!0,!0}};var j_=()=>{};var Ef={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};var ce=function(n,e){if(!n)throw hr(e)},hr=function(n){return new Error("Firebase Database ("+Ef.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};var e0=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ST=function(n){let e=[],t=0,i=0;for(;t<n.length;){let s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){let r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){let r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{let r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},qh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){let r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4,f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(t[h],t[u],t[f],t[d])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(e0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ST(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){let r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;let c=s<n.length?t[n.charAt(s)]:64;++s;let u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new wf;let f=r<<2|a>>4;if(i.push(f),c!==64){let d=a<<4&240|c>>2;if(i.push(d),u!==64){let p=c<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},wf=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Tf=function(n){let e=e0(n);return qh.encodeByteArray(e,!0)},qa=function(n){return Tf(n).replace(/\./g,"")},Wh=function(n){try{return qh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function t0(n){return n0(void 0,n)}function n0(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:let t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(let t in e)!e.hasOwnProperty(t)||!MT(t)||(n[t]=n0(n[t],e[t]));return n}function MT(n){return n!=="__proto__"}function bT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var ET=()=>bT().__FIREBASE_DEFAULTS__,wT=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},TT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Wh(n[1]);return e&&JSON.parse(e)},i0=()=>{try{return j_()||ET()||wT()||TT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},AT=n=>i0()?.emulatorHosts?.[n],s0=n=>{let e=AT(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Af=()=>i0()?.config;var zn=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}};function r0(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[qa(JSON.stringify(t)),qa(JSON.stringify(o)),""].join(".")}function CT(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(CT())}function o0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Oi(){return Ef.NODE_CLIENT===!0||Ef.NODE_ADMIN===!0}function a0(){try{return typeof indexedDB=="object"}catch{return!1}}function l0(){return new Promise((n,e)=>{try{let t=!0,i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}var RT="FirebaseError",cr=class n extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=RT,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}},Ya=class{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?IT(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new cr(s,a,i)}};function IT(n,e){try{let t=0,i="";for(;t<n.length;){let s=n.indexOf("{$",t);if(s===-1){i+=n.substring(t);break}let r=n.indexOf("}",s+2);if(r===-1){i+=n.substring(t);break}let o=n.substring(s+2,r),a=e[o];i+=n.substring(t,s)+(a!=null?String(a):`<${o}?>`),t=r+1}return i}catch{return n}}function co(n){return JSON.parse(n)}function tn(n){return JSON.stringify(n)}var c0=function(n){let e={},t={},i={},s="";try{let r=n.split(".");e=co(Wh(r[0])||""),t=co(Wh(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}};var h0=function(n){let e=c0(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},u0=function(n){let e=c0(n).claims;return typeof e=="object"&&e.admin===!0};function xi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ur(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Yh(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $a(n,e,t){let i={};for(let s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function ho(n,e){if(n===e)return!0;let t=Object.keys(n),i=Object.keys(e);for(let s of t){if(!i.includes(s))return!1;let r=n[s],o=e[s];if(Q_(r)&&Q_(o)){if(!ho(r,o))return!1}else if(r!==o)return!1}for(let s of i)if(!t.includes(s))return!1;return!0}function Q_(n){return n!==null&&typeof n=="object"}function d0(n){let e=[];for(let[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}var Xh=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);let i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){let f=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);let f=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);let i=t-this.blockSize,s=0,r=this.buf_,o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){let e=[],t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}};function dr(n,e){return`${n} failed: ${e} argument `}var f0=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){let r=s-55296;i++,ce(i<n.length,"Surrogate pair missing trail surrogate.");let o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ja=function(n){let e=0;for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};var UN=14400*1e3;function Fi(n){return n&&n._delegate?n._delegate:n}function Rf(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function p0(n){return(await fetch(n,{credentials:"include"})).ok}var as=class{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var fr="[DEFAULT]";var $h=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let i=new zn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{let s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NT(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(let[t,i]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(t);try{let r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(let[r,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){let i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);let r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:PT(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function PT(n){return n===fr?void 0:n}function NT(n){return n.instantiationMode==="EAGER"}var Ka=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new $h(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var LT=[],Tt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Tt||(Tt={}));var DT={debug:Tt.DEBUG,verbose:Tt.VERBOSE,info:Tt.INFO,warn:Tt.WARN,error:Tt.ERROR,silent:Tt.SILENT},OT=Tt.INFO,FT={[Tt.DEBUG]:"log",[Tt.VERBOSE]:"log",[Tt.INFO]:"info",[Tt.WARN]:"warn",[Tt.ERROR]:"error"},UT=(n,e,...t)=>{if(e<n.logLevel)return;let i=new Date().toISOString(),s=FT[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},uo=class{constructor(e){this.name=e,this._logLevel=OT,this._logHandler=UT,this._userLogHandler=null,LT.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Tt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Tt.DEBUG,...e),this._logHandler(this,Tt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Tt.VERBOSE,...e),this._logHandler(this,Tt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Tt.INFO,...e),this._logHandler(this,Tt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Tt.WARN,...e),this._logHandler(this,Tt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Tt.ERROR,...e),this._logHandler(this,Tt.ERROR,...e)}};var BT=(n,e)=>e.some(t=>n instanceof t),m0,g0;function kT(){return m0||(m0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zT(){return g0||(g0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var _0=new WeakMap,Pf=new WeakMap,y0=new WeakMap,If=new WeakMap,Lf=new WeakMap;function HT(n){let e=new Promise((t,i)=>{let s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ui(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_0.set(t,n)}).catch(()=>{}),Lf.set(e,n),e}function GT(n){if(Pf.has(n))return;let e=new Promise((t,i)=>{let s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Pf.set(n,e)}var Nf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Pf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||y0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ui(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function v0(n){Nf=n(Nf)}function VT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let i=n.call(Jh(this),e,...t);return y0.set(i,e.sort?e.sort():[e]),Ui(i)}:zT().includes(n)?function(...e){return n.apply(Jh(this),e),Ui(_0.get(this))}:function(...e){return Ui(n.apply(Jh(this),e))}}function WT(n){return typeof n=="function"?VT(n):(n instanceof IDBTransaction&&GT(n),BT(n,kT())?new Proxy(n,Nf):n)}function Ui(n){if(n instanceof IDBRequest)return HT(n);if(If.has(n))return If.get(n);let e=WT(n);return e!==n&&(If.set(n,e),Lf.set(e,n)),e}var Jh=n=>Lf.get(n);function S0(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){let o=indexedDB.open(n,e),a=Ui(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ui(o.result),l.oldVersion,l.newVersion,Ui(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}var XT=["get","getKey","getAll","getAllKeys","count"],qT=["put","add","delete","clear"],Df=new Map;function x0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Df.get(e))return Df.get(e);let t=e.replace(/FromIndex$/,""),i=e!==t,s=qT.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||XT.includes(t)))return;let r=async function(o,...a){let l=this.transaction(o,s?"readwrite":"readonly"),c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Df.set(e,r),r}v0(n=>({...n,get:(e,t,i)=>x0(e,t)||n.get(e,t,i),has:(e,t)=>!!x0(e,t)||n.has(e,t)}));var Ff=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(YT(t)){let i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}};function YT(n){return n.getComponent()?.type==="VERSION"}var Uf="@firebase/app",M0="0.16.5";var cs=new uo("@firebase/app"),$T="@firebase/app-compat",JT="@firebase/analytics-compat",KT="@firebase/analytics",ZT="@firebase/app-check-compat",jT="@firebase/app-check",QT="@firebase/auth",eA="@firebase/auth-compat",tA="@firebase/crashlytics",nA="@firebase/database",iA="@firebase/data-connect",sA="@firebase/database-compat",rA="@firebase/functions",oA="@firebase/functions-compat",aA="@firebase/installations",lA="@firebase/installations-compat",cA="@firebase/messaging",hA="@firebase/messaging-compat",uA="@firebase/performance",dA="@firebase/performance-compat",fA="@firebase/remote-config",pA="@firebase/remote-config-compat",mA="@firebase/storage",gA="@firebase/storage-compat",_A="@firebase/firestore",yA="@firebase/ai",vA="@firebase/firestore-compat",xA="firebase",SA="13.2.0";var Bf="[DEFAULT]",MA={[Uf]:"fire-core",[$T]:"fire-core-compat",[KT]:"fire-analytics",[JT]:"fire-analytics-compat",[jT]:"fire-app-check",[ZT]:"fire-app-check-compat",[QT]:"fire-auth",[eA]:"fire-auth-compat",[tA]:"fire-cls",[nA]:"fire-rtdb",[iA]:"fire-data-connect",[sA]:"fire-rtdb-compat",[rA]:"fire-fn",[oA]:"fire-fn-compat",[aA]:"fire-iid",[lA]:"fire-iid-compat",[cA]:"fire-fcm",[hA]:"fire-fcm-compat",[uA]:"fire-perf",[dA]:"fire-perf-compat",[fA]:"fire-rc",[pA]:"fire-rc-compat",[mA]:"fire-gcs",[gA]:"fire-gcs-compat",[_A]:"fire-fst",[vA]:"fire-fst-compat",[yA]:"fire-vertex","fire-js":"fire-js",[xA]:"fire-js-all"};var Kh=new Map,bA=new Map,kf=new Map;function b0(n,e){try{n.container.addComponent(e)}catch(t){cs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Za(n){let e=n.name;if(kf.has(e))return cs.debug(`There were multiple attempts to register component ${e}.`),!1;kf.set(e,n);for(let t of Kh.values())b0(t,n);for(let t of bA.values())b0(t,n);return!0}function A0(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function C0(n){return n==null?!1:n.settings!==void 0}var EA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ls=new Ya("app","Firebase",EA);var zf=class{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ls.create("app-deleted",{appName:this._name})}};var R0=SA;function Vf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let i={name:Bf,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw ls.create("bad-app-name",{appName:String(s)});if(t||(t=Af()),!t)throw ls.create("no-options");let r=Kh.get(s);if(r)if(ho(t,r.options)){if(ho(i,r.config))return r;throw ls.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(i)})}else throw ls.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(t)});let o=new Ka(s);for(let l of kf.values())o.addComponent(l);let a=new zf(t,i,o);return Kh.set(s,a),a}function I0(n=Bf){let e=Kh.get(n);if(!e&&n===Bf&&Af())return Vf();if(!e)throw ls.create("no-app",{appName:n});return e}function Ls(n,e,t){let i=MA[n]??n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){let o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cs.warn(o.join(" "));return}Za(new as(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var wA="firebase-heartbeat-database",TA=1,ja="firebase-heartbeat-store",Of=null;function P0(){return Of||(Of=S0(wA,TA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ja)}catch(t){console.warn(t)}}}}).catch(n=>{throw ls.create("idb-open",{originalErrorMessage:n.message})})),Of}async function AA(n){try{let t=(await P0()).transaction(ja),i=await t.objectStore(ja).get(N0(n));return await t.done,i}catch(e){if(e instanceof cr)cs.warn(e.message);else{let t=ls.create("idb-get",{originalErrorMessage:e?.message});cs.warn(t.message)}}}async function E0(n,e){try{let i=(await P0()).transaction(ja,"readwrite");await i.objectStore(ja).put(e,N0(n)),await i.done}catch(t){if(t instanceof cr)cs.warn(t.message);else{let i=ls.create("idb-set",{originalErrorMessage:t?.message});cs.warn(i.message)}}}function N0(n){return`${n.name}!${n.options.appId}`}var CA=1024,RA=30,Hf=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Gf(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{let t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=w0();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>RA){let s=PA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){cs.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let e=w0(),{heartbeatsToSend:t,unsentEntries:i}=IA(this._heartbeatsCache.heartbeats),s=qa(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return cs.warn(e),""}}};function w0(){return new Date().toISOString().substring(0,10)}function IA(n,e=CA){let t=[],i=n.slice();for(let s of n){let r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),T0(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),T0(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}var Gf=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return a0()?l0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await AA(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let i=await this.read();return E0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){let i=await this.read();return E0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function T0(n){return qa(JSON.stringify({version:2,heartbeats:n})).length}function PA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}function NA(n){Za(new as("platform-logger",e=>new Ff(e),"PRIVATE")),Za(new as("heartbeat",e=>new Hf(e),"PRIVATE")),Ls(Uf,M0,n),Ls(Uf,M0,"esm2020"),Ls("fire-js","")}NA("");var LA="firebase",DA="13.2.0";Ls(LA,DA,"app");var L0="@firebase/database",D0="1.1.5";var Yp="";function OA(n){Yp=n}var Zf=class{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tn(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:co(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}};var jf=class{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return xi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}};var fy=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){let e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Zf(e)}}catch{}return new jf},mr=fy("localStorage"),Qf=fy("sessionStorage");var mo=new uo("@firebase/database"),FA=(function(){let n=1;return function(){return n++}})(),py=function(n){let e=f0(n),t=new Xh;t.update(e);let i=t.digest();return qh.encodeByteArray(i)},gl=function(...n){let e="";for(let t=0;t<n.length;t++){let i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=gl.apply(null,i):typeof i=="object"?e+=tn(i):e+=i,e+=" "}return e},_r=null,O0=!0,UA=function(n,e){ce(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(mo.logLevel=Tt.VERBOSE,_r=mo.log.bind(mo),e&&Qf.set("logging_enabled",!0)):typeof n=="function"?_r=n:(_r=null,Qf.remove("logging_enabled"))},un=function(...n){if(O0===!0&&(O0=!1,_r===null&&Qf.get("logging_enabled")===!0&&UA(!0)),_r){let e=gl.apply(null,n);_r(e)}},_l=function(n){return function(...e){un(n,...e)}},ep=function(...n){let e="FIREBASE INTERNAL ERROR: "+gl(...n);mo.error(e)},us=function(...n){let e=`FIREBASE FATAL ERROR: ${gl(...n)}`;throw mo.error(e),new Error(e)},Ln=function(...n){let e="FIREBASE WARNING: "+gl(...n);mo.warn(e)},BA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ln("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Eu=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},kA=function(n){if(Oi()||document.readyState==="complete")n();else{let e=!1,t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},_o="[MIN_NAME]",yr="[MAX_NAME]",Sr=function(n,e){if(n===e)return 0;if(n===_o||e===yr)return-1;if(e===_o||n===yr)return 1;{let t=F0(n),i=F0(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},zA=function(n,e){return n===e?0:n<e?-1:1},Qa=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+tn(e))},$p=function(n){if(typeof n!="object"||n===null)return tn(n);let e=[];for(let i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=tn(e[i]),t+=":",t+=$p(n[e[i]]);return t+="}",t},my=function(n,e){let t=n.length;if(t<=e)return[n];let i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function dn(n,e){for(let t in n)n.hasOwnProperty(t)&&e(t,n[t])}var gy=function(n){ce(!Eu(n),"Invalid JSON number");let e=11,t=52,i=(1<<e-1)-1,s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));let c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();let h=c.join(""),u="";for(l=0;l<64;l+=8){let f=parseInt(h.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},HA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},GA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function VA(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");let i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}var WA=new RegExp("^-?(0*)\\d{1,10}$"),XA=-2147483648,qA=2147483647,F0=function(n){if(WA.test(n)){let e=Number(n);if(e>=XA&&e<=qA)return e}return null},wo=function(n){try{n()}catch(e){setTimeout(()=>{let t=e.stack||"";throw Ln("Exception was thrown by user callback.",t),e},Math.floor(0))}},YA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},il=function(n,e){let t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};var tp=class{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,C0(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Ln(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}};var np=class{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(un("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ln(e)}},Os=class{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};Os.OWNER="owner";var jh="5",_y="v",yy="s",vy="r",xy="f",Sy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,My="ls",by="p",ip="ac",Ey="websocket",wy="long_polling";var Qh=class{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=mr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&mr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}};function $A(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ty(n,e,t){ce(typeof e=="string","typeof type must == string"),ce(typeof t=="object","typeof params must == object");let i;if(e===Ey)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===wy)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$A(n)&&(t.ns=n.namespace);let s=[];return dn(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}var sp=class{constructor(){this.counters_={}}incrementCounter(e,t=1){xi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return t0(this.counters_)}};var Wf={},Xf={};function Jp(n){let e=n.toString();return Wf[e]||(Wf[e]=new sp),Wf[e]}function JA(n,e){let t=n.toString();return Xf[t]||(Xf[t]=e()),Xf[t]}var rp=class{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&wo(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}};var U0="start",KA="close",ZA="pLPCommand",jA="pRTLPCB",Ay="id",Cy="pw",Ry="ser",QA="cb",e1="seg",t1="ts",n1="d",i1="dframe",Iy=1870,Py=30,s1=Iy-Py,r1=25e3,o1=3e4,op=class n{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_l(e),this.stats_=Jp(t),this.urlFn=l=>(this.appCheckToken&&(l[ip]=this.appCheckToken),Ty(t,wy,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new rp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(o1)),kA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ap((...r)=>{let[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===U0)this.id=a,this.password=l;else if(o===KA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{let[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);let i={};i[U0]="t",i[Ry]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[QA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[_y]=jh,this.transportSessionId&&(i[yy]=this.transportSessionId),this.lastSessionId&&(i[My]=this.lastSessionId),this.applicationId&&(i[by]=this.applicationId),this.appCheckToken&&(i[ip]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sy.test(location.hostname)&&(i[vy]=xy);let s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){n.forceAllow_=!0}static forceDisallow(){n.forceDisallow_=!0}static isAvailable(){return Oi()?!1:n.forceAllow_?!0:!n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!HA()&&!GA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=tn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=Tf(t),s=my(i,s1);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Oi())return;this.myDisconnFrame=document.createElement("iframe");let i={};i[i1]="t",i[Ay]=e,i[Cy]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=tn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}},ap=class n{constructor(e,t,i,s){if(this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0,Oi())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=FA(),window[ZA+this.uniqueCallbackIdentifier]=e,window[jA+this.uniqueCallbackIdentifier]=t,this.myIFrame=n.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');let o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){un("frame writing exception"),a.stack&&un(a.stack),un(a)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||un("No IE domain setting required")}catch{let i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;let e={};e[Ay]=this.myID,e[Cy]=this.myPW,e[Ry]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Py+i.length<=Iy;){let o=this.pendingSegs.shift();i=i+"&"+e1+s+"="+o.seg+"&"+t1+s+"="+o.ts+"&"+n1+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(r1)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){Oi()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){let s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{un("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}};var a1=16384,l1=45e3,eu=null;typeof MozWebSocket<"u"?eu=MozWebSocket:typeof WebSocket<"u"&&(eu=WebSocket);var hs=class n{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_l(this.connId),this.stats_=Jp(t),this.connURL=n.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){let o={};return o[_y]=jh,!Oi()&&typeof location<"u"&&location.hostname&&Sy.test(location.hostname)&&(o[vy]=xy),t&&(o[yy]=t),i&&(o[My]=i),s&&(o[ip]=s),r&&(o[by]=r),Ty(e,Ey,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,mr.set("previous_websocket_failure",!0);try{let i;if(Oi()){let s=this.nodeAdmin?"AdminNode":"Node";i={headers:{"User-Agent":`Firebase/${jh}/${Yp}/${process.platform}/${s}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(i.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(i.headers["X-Firebase-AppCheck"]=this.appCheckToken);let r=process.env,o=this.connURL.indexOf("wss://")===0?r.HTTPS_PROXY||r.https_proxy:r.HTTP_PROXY||r.http_proxy;o&&(i.proxy={origin:o})}this.mySock=new eu(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");let s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");let s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){n.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){let t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&eu!==null&&!n.forceDisallow_}static previouslyFailed(){return mr.isInMemoryStorage||mr.get("previous_websocket_failure")===!0}markConnectionHealthy(){mr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let t=this.frames.join("");this.frames=null;let i=co(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ce(this.frames===null,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{let i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();let t=tn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=my(t,a1);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(l1))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}};hs.responsesRequiredToBeHealthy=2;hs.healthyTimeout=3e4;var tu=class n{static get ALL_TRANSPORTS(){return[op,hs]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){let t=hs&&hs.isAvailable(),i=t&&!hs.previouslyFailed();if(e.webSocketOnly&&(t||Ln("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[hs];else{let s=this.transports_=[];for(let r of n.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);n.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};tu.globalTransportInitialized_=!1;var c1=6e4,h1=5e3,u1=10*1024,d1=100*1024,qf="t",B0="d",f1="s",k0="r",p1="e",z0="o",H0="a",G0="n",V0="p",m1="h",lp=class{constructor(e,t,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_l("c:"+this.id+":"),this.transportManager_=new tu(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));let s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=il(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>d1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>u1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){let t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qf in e){let t=e[qf];t===H0?this.upgradeIfSecondaryHealthy_():t===k0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===z0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=Qa("t",e),i=Qa("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:V0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:H0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:G0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=Qa("t",e),i=Qa("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=Qa(qf,e);if(B0 in e){let i=e[B0];if(t===m1){let s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===G0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===f1?this.onConnectionShutdown_(i):t===k0?this.onReset_(i):t===p1?ep("Server Error: "+i):t===z0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ep("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),jh!==i&&Ln("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),il(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(c1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):il(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(h1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:V0,d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(mr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}};var nu=class{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}};var iu=class{constructor(e){this.allowedEvents_=e,this.listeners_={},ce(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});let s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);let s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){ce(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}};var su=class n extends iu{static getInstance(){return new n}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Cf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ce(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}};var W0=32,X0=768,gt=class{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}};function pt(){return new gt("")}function ot(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Bs(n){return n.pieces_.length-n.pieceNum_}function At(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new gt(n.pieces_,e)}function Kp(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function g1(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function al(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ny(n){if(n.pieceNum_>=n.pieces_.length)return null;let e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new gt(e,0)}function kt(n,e){let t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof gt)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{let i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new gt(t,0)}function lt(n){return n.pieceNum_>=n.pieces_.length}function Nn(n,e){let t=ot(n),i=ot(e);if(t===null)return e;if(t===i)return Nn(At(n),At(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function _1(n,e){let t=al(n,0),i=al(e,0);for(let s=0;s<t.length&&s<i.length;s++){let r=Sr(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function Zp(n,e){if(Bs(n)!==Bs(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ai(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Bs(n)>Bs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}var cp=class{constructor(e,t){this.errorPrefix_=t,this.parts_=al(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ja(this.parts_[i]);Ly(this)}};function y1(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ja(e),Ly(n)}function v1(n){let e=n.parts_.pop();n.byteLength_-=Ja(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ly(n){if(n.byteLength_>X0)throw new Error(n.errorPrefix_+"has a key path longer than "+X0+" bytes ("+n.byteLength_+").");if(n.parts_.length>W0)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+W0+") or object contains a cycle "+pr(n))}function pr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}var hp=class n extends iu{static getInstance(){return new n}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return ce(e==="visible","Unknown event type: "+e),[this.visible_]}};var el=1e3,x1=300*1e3,q0=30*1e3,S1=1.3,M1=3e4,b1="server_kill",Y0=3,vr=class n extends nu{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=n.nextPersistentConnectionId_++,this.log_=_l("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=el,this.maxReconnectDelay_=x1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Oi())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&su.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){let s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(tn(r)),ce(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();let t=new zn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{let a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;let r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();let r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ce(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");let a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){let t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);let r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{let l=a.d,c=a.s;n.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&xi(e,"w")){let i=ur(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){let s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ln(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||u0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=q0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=h0(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{let r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){let i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);let r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){let r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();let o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;let a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){let r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tn(e));let t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ep("Unrecognized action received from server: "+tn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ce(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=el,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=el,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>M1&&(this.reconnectDelay_=el),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_),t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*S1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+n.nextConnectionId_++,r=this.lastSessionId,o=!1,a=null,l=function(){a?a.close():(o=!0,i())},c=function(u){ce(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};let h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[u,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?un("getToken() completed but was canceled"):(un("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new lp(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,d=>{Ln(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(b1)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Ln(u),l())}}}interrupt(e){un("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){un("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yh(this.interruptReasons_)&&(this.reconnectDelay_=el,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>$p(r)).join("$"):i="default";let s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){let i=new gt(e).toString(),s;if(this.listens.has(i)){let r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){un("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Y0&&(this.reconnectDelay_=q0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){un("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Y0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(let e of this.listens.values())for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";Oi()&&(this.repoInfo_.nodeAdmin?t="admin_node":t="node"),e["sdk."+t+"."+Yp.replace(/\./g,"-")]=1,Cf()?e["framework.cordova"]=1:o0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=su.getInstance().currentlyOnline();return Yh(this.interruptReasons_)&&e}};vr.nextPersistentConnectionId_=0;vr.nextConnectionId_=0;var ct=class n{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new n(e,t)}};var yo=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let i=new ct(_o,e),s=new ct(_o,t);return this.compare(i,s)!==0}minPost(){return ct.MIN}};var Zh,ru=class extends yo{static get __EMPTY_NODE(){return Zh}static set __EMPTY_NODE(e){Zh=e}compare(e,t){return Sr(e.name,t.name)}isDefinedOn(e){throw hr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ct.MIN}maxPost(){return new ct(yr,Zh)}makePost(e,t){return ce(typeof e=="string","KeyIndex indexValue must always be a string."),new ct(e,Zh)}toString(){return".key"}},go=new ru;var po=class{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Pn=class n{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??n.RED,this.left=s??li.EMPTY_NODE,this.right=r??li.EMPTY_NODE}copy(e,t,i,s,r){return new n(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this,r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return li.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return li.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Pn.RED=!0;Pn.BLACK=!1;var up=class{copy(e,t,i,s,r){return this}insert(e,t,i){return new Pn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}},li=class n{constructor(e,t=n.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new n(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Pn.BLACK,null,null))}remove(e){return new n(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pn.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new po(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new po(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new po(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new po(this.root_,null,this.comparator_,!0,e)}};li.EMPTY_NODE=new up;function E1(n,e){return Sr(n.name,e.name)}function jp(n,e){return Sr(n,e)}var dp;function w1(n){dp=n}var Dy=function(n){return typeof n=="number"?"number:"+gy(n):"string:"+n},Oy=function(n){if(n.isLeafNode()){let e=n.val();ce(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xi(e,".sv"),"Priority must be a string or number.")}else ce(n===dp||n.isEmpty(),"priority of unexpected type.");ce(n===dp||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};var $0,ds=class n{static set __childrenNodeConstructor(e){$0=e}static get __childrenNodeConstructor(){return $0}constructor(e,t=n.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ce(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Oy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new n(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:n.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return lt(e)?this:ot(e)===".priority"?this.priorityNode_:n.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:n.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let i=ot(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(ce(i!==".priority"||Bs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,n.__childrenNodeConstructor.EMPTY_NODE.updateChild(At(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dy(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":",t==="number"?e+=gy(this.value_):e+=this.value_,this.lazyHash_=py(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===n.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof n.__childrenNodeConstructor?-1:(ce(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,i=typeof this.value_,s=n.VALUE_TYPE_ORDER.indexOf(t),r=n.VALUE_TYPE_ORDER.indexOf(i);return ce(s>=0,"Unknown leaf type: "+t),ce(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){let t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}};ds.VALUE_TYPE_ORDER=["object","boolean","number","string"];var Fy,Uy;function T1(n){Fy=n}function A1(n){Uy=n}var fp=class extends yo{compare(e,t){let i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Sr(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ct.MIN}maxPost(){return new ct(yr,new ds("[PRIORITY-POST]",Uy))}makePost(e,t){let i=Fy(e);return new ct(t,new ds("[PRIORITY-POST]",i))}toString(){return".priority"}},zt=new fp;var C1=Math.log(2),pp=class{constructor(e){let t=r=>parseInt(Math.log(r)/C1,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;let s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}},ou=function(n,e,t,i){n.sort(e);let s=function(l,c){let h=c-l,u,f;if(h===0)return null;if(h===1)return u=n[l],f=t?t(u):u,new Pn(f,u.node,Pn.BLACK,null,null);{let d=parseInt(h/2,10)+l,p=s(l,d),_=s(d+1,c);return u=n[d],f=t?t(u):u,new Pn(f,u.node,Pn.BLACK,p,_)}},r=function(l){let c=null,h=null,u=n.length,f=function(p,_){let m=u-p,g=u;u-=p;let y=s(m+1,g),M=n[m],S=t?t(M):M;d(new Pn(S,M.node,_,null,y))},d=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<l.count;++p){let _=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));_?f(m,Pn.BLACK):(f(m,Pn.BLACK),f(m,Pn.RED))}return h},o=new pp(n.length),a=r(o);return new li(i||e,a)};var Yf,fo={},vo=class n{static get Default(){return ce(fo&&zt,"ChildrenNode.ts has not been loaded"),Yf=Yf||new n({".priority":fo},{".priority":zt}),Yf}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=ur(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof li?t:null}hasIndex(e){return xi(this.indexSet_,e.toString())}addIndex(e,t){ce(e!==go,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],s=!1,r=t.getIterator(ct.Wrap),o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=ou(i,e.getCompare()):a=fo;let l=e.toString(),c={...this.indexSet_};c[l]=e;let h={...this.indexes_};return h[l]=a,new n(h,c)}addToIndexes(e,t){let i=$a(this.indexes_,(s,r)=>{let o=ur(this.indexSet_,r);if(ce(o,"Missing index implementation for "+r),s===fo)if(o.isDefinedOn(e.node)){let a=[],l=t.getIterator(ct.Wrap),c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ou(a,o.getCompare())}else return fo;else{let a=t.get(e.name),l=s;return a&&(l=l.remove(new ct(e.name,a))),l.insert(e,e.node)}});return new n(i,this.indexSet_)}removeFromIndexes(e,t){let i=$a(this.indexes_,s=>{if(s===fo)return s;{let r=t.get(e.name);return r?s.remove(new ct(e.name,r)):s}});return new n(i,this.indexSet_)}};var tl,Je=class n{static get EMPTY_NODE(){return tl||(tl=new n(new li(jp),null,vo.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Oy(this.priorityNode_),this.children_.isEmpty()&&ce(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||tl}updatePriority(e){return this.children_.isEmpty()?this:new n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{let t=this.children_.get(e);return t===null?tl:t}}getChild(e){let t=ot(e);return t===null?this:this.getImmediateChild(t).getChild(At(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ce(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{let i=new ct(e,t),s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));let o=s.isEmpty()?tl:this.priorityNode_;return new n(s,o,r)}}updateChild(e,t){let i=ot(e);if(i===null)return t;{ce(ot(e)!==".priority"||Bs(e)===1,".priority must be the last token in a path");let s=this.getImmediateChild(i).updateChild(At(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},i=0,s=0,r=!0;if(this.forEachChild(zt,(o,a)=>{t[o]=a.val(e),i++,r&&n.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){let o=[];for(let a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dy(this.getPriority().val())+":"),this.forEachChild(zt,(t,i)=>{let s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":py(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){let s=this.resolveIndex_(i);if(s){let r=s.getPredecessorKey(new ct(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){let t=this.resolveIndex_(e);if(t){let i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){let t=this.getFirstChildName(e);return t?new ct(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(t){let i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){let t=this.getLastChildName(e);return t?new ct(t,this.children_.get(t)):null}forEachChild(e,t){let i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{let s=this.children_.getIteratorFrom(e.name,ct.Wrap),r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{let s=this.children_.getReverseIteratorFrom(e.name,ct.Wrap),r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yl?-1:0}withIndex(e){if(e===go||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===go||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{let t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){let i=this.getIterator(zt),s=t.getIterator(zt),r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===go?null:this.indexMap_.get(e.toString())}};Je.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var mp=class extends Je{constructor(){super(new li(jp),Je.EMPTY_NODE,vo.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Je.EMPTY_NODE}isEmpty(){return!1}},yl=new mp;Object.defineProperties(ct,{MIN:{value:new ct(_o,Je.EMPTY_NODE)},MAX:{value:new ct(yr,yl)}});ru.__EMPTY_NODE=Je.EMPTY_NODE;ds.__childrenNodeConstructor=Je;w1(yl);A1(yl);var R1=!0;function qt(n,e=null){if(n===null)return Je.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ce(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){let t=n;return new ds(t,qt(e))}if(!(n instanceof Array)&&R1){let t=[],i=!1;if(dn(n,(o,a)=>{if(o.substring(0,1)!=="."){let l=qt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new ct(o,l)))}}),t.length===0)return Je.EMPTY_NODE;let r=ou(t,E1,o=>o.name,jp);if(i){let o=ou(t,zt.getCompare());return new Je(r,qt(e),new vo({".priority":o},{".priority":zt}))}else return new Je(r,qt(e),vo.Default)}else{let t=Je.EMPTY_NODE;return dn(n,(i,s)=>{if(xi(n,i)&&i.substring(0,1)!=="."){let r=qt(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(qt(e))}}T1(qt);var gp=class extends yo{constructor(e){super(),this.indexPath_=e,ce(!lt(e)&&ot(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Sr(e.name,t.name):r}makePost(e,t){let i=qt(e),s=Je.EMPTY_NODE.updateChild(this.indexPath_,i);return new ct(t,s)}maxPost(){let e=Je.EMPTY_NODE.updateChild(this.indexPath_,yl);return new ct(yr,e)}toString(){return al(this.indexPath_,0).join("/")}};var _p=class extends yo{compare(e,t){let i=e.node.compareTo(t.node);return i===0?Sr(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ct.MIN}maxPost(){return ct.MAX}makePost(e,t){let i=qt(e);return new ct(t,i)}toString(){return".value"}},I1=new _p;function By(n){return{type:"value",snapshotNode:n}}function xo(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ll(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function cl(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function P1(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}var hl=class{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){ce(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(ll(t,a)):ce(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(xo(t,i)):o.trackChildChange(cl(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(zt,(s,r)=>{t.hasChild(s)||i.trackChildChange(ll(s,r))}),t.isLeafNode()||t.forEachChild(zt,(s,r)=>{if(e.hasChild(s)){let o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(cl(s,r,o))}else i.trackChildChange(xo(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Je.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}};var au=class n{constructor(e){this.indexedFilter_=new hl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=n.getStartPost_(e),this.endPost_=n.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new ct(t,i))||(i=Je.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=Je.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Je.EMPTY_NODE);let r=this;return t.forEachChild(zt,(o,a)=>{r.matches(new ct(o,a))||(s=s.updateImmediateChild(o,Je.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}};var yp=class{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{let i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{let i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new au(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new ct(t,i))||(i=Je.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=Je.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Je.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){let a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Je.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){let a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Je.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){let u=this.index_.getCompare();o=(f,d)=>u(d,f)}else o=this.index_.getCompare();let a=e;ce(a.numChildren()===this.limit_,"");let l=new ct(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){let u=a.getImmediateChild(t),f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);let d=f==null?1:o(f,l);if(h&&!i.isEmpty()&&d>=0)return r?.trackChildChange(cl(t,i,u)),a.updateImmediateChild(t,i);{r?.trackChildChange(ll(t,u));let _=a.updateImmediateChild(t,Je.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r?.trackChildChange(xo(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ll(c.name,c.node)),r.trackChildChange(xo(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,Je.EMPTY_NODE)):e}};var vp=class n{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=zt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ce(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ce(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_o}hasEnd(){return this.endSet_}getIndexEndValue(){return ce(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ce(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:yr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ce(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===zt}copy(){let e=new n;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}};function N1(n){return n.loadsAllData()?new hl(n.getIndex()):n.hasLimit()?new yp(n):new au(n)}function J0(n){let e={};if(n.isDefault())return e;let t;if(n.index_===zt?t="$priority":n.index_===I1?t="$value":n.index_===go?t="$key":(ce(n.index_ instanceof gp,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=tn(t),n.startSet_){let i=n.startAfterSet_?"startAfter":"startAt";e[i]=tn(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+tn(n.indexStartName_))}if(n.endSet_){let i=n.endBeforeSet_?"endBefore":"endAt";e[i]=tn(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+tn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function K0(n){let e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==zt&&(e.i=n.index_.toString()),e}var xp=class n extends nu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ce(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=_l("p:rest:"),this.listens_={}}listen(e,t,i,s){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let o=n.getListenId_(e,i),a={};this.listens_[o]=a;let l=J0(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),ur(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,t){let i=n.getListenId_(e,t);delete this.listens_[i]}get(e){let t=J0(e._queryParams),i=e._path.toString(),s=new zn;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);let o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+d0(t);this.log_("Sending REST request for "+o);let a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=co(a.responseText)}catch{Ln("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Ln("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}};var Sp=class{constructor(){this.rootNode_=Je.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}};function lu(){return{value:null,children:new Map}}function To(n,e,t){if(lt(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{let i=ot(e);n.children.has(i)||n.children.set(i,lu());let s=n.children.get(i);e=At(e),To(s,e,t)}}function Mp(n,e){if(lt(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{let t=n.value;return n.value=null,t.forEachChild(zt,(i,s)=>{To(n,new gt(i),s)}),Mp(n,e)}}else if(n.children.size>0){let t=ot(e);return e=At(e),n.children.has(t)&&Mp(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function bp(n,e,t){n.value!==null?t(e,n.value):L1(n,(i,s)=>{let r=new gt(e.toString()+"/"+i);bp(s,r,t)})}function L1(n,e){n.children.forEach((t,i)=>{e(i,t)})}var Ep=class{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t={...e};return this.last_&&dn(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}};var Z0=10*1e3,D1=30*1e3,O1=300*1e3,wp=class{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ep(e);let i=Z0+(D1-Z0)*Math.random();il(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){let e=this.statsListener_.get(),t={},i=!1;dn(e,(s,r)=>{r>0&&xi(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),il(this.reportStats_.bind(this),Math.floor(Math.random()*2*O1))}};var Si;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Si||(Si={}));function Qp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function em(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tm(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}var Tp=class n{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Si.ACK_USER_WRITE,this.source=Qp()}operationForChild(e){if(lt(this.path)){if(this.affectedTree.value!=null)return ce(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new gt(e));return new n(pt(),t,this.revert)}}else return ce(ot(this.path)===e,"operationForChild called for unrelated child."),new n(At(this.path),this.affectedTree,this.revert)}};var cu=class n{constructor(e,t){this.source=e,this.path=t,this.type=Si.LISTEN_COMPLETE}operationForChild(e){return lt(this.path)?new n(this.source,pt()):new n(this.source,At(this.path))}};var So=class n{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Si.OVERWRITE}operationForChild(e){return lt(this.path)?new n(this.source,pt(),this.snap.getImmediateChild(e)):new n(this.source,At(this.path),this.snap)}};var ul=class n{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Si.MERGE}operationForChild(e){if(lt(this.path)){let t=this.children.subtree(new gt(e));return t.isEmpty()?null:t.value?new So(this.source,pt(),t.value):new n(this.source,pt(),t)}else return ce(ot(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new n(this.source,At(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}};var Bi=class{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(lt(e))return this.isFullyInitialized()&&!this.filtered_;let t=ot(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}};var Ap=class{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}};function F1(n,e,t,i){let s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(P1(o.childName,o.snapshotNode))}),nl(n,s,"child_removed",e,i,t),nl(n,s,"child_added",e,i,t),nl(n,s,"child_moved",r,i,t),nl(n,s,"child_changed",e,i,t),nl(n,s,"value",e,i,t),s}function nl(n,e,t,i,s,r){let o=i.filter(a=>a.type===t);o.sort((a,l)=>B1(n,a,l)),o.forEach(a=>{let l=U1(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function U1(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function B1(n,e,t){if(e.childName==null||t.childName==null)throw hr("Should only compare child_ events.");let i=new ct(e.childName,e.snapshotNode),s=new ct(t.childName,t.snapshotNode);return n.index_.compare(i,s)}function wu(n,e){return{eventCache:n,serverCache:e}}function sl(n,e,t,i){return wu(new Bi(e,t,i),n.serverCache)}function ky(n,e,t,i){return wu(n.eventCache,new Bi(e,t,i))}function hu(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function xr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}var $f,k1=()=>($f||($f=new li(zA)),$f),Dn=class n{static fromObject(e){let t=new n(null);return dn(e,(i,s)=>{t=t.set(new gt(i),s)}),t}constructor(e,t=k1()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:pt(),value:this.value};if(lt(e))return null;{let i=ot(e),s=this.children.get(i);if(s!==null){let r=s.findRootMostMatchingPathAndValue(At(e),t);return r!=null?{path:kt(new gt(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(lt(e))return this;{let t=ot(e),i=this.children.get(t);return i!==null?i.subtree(At(e)):new n(null)}}set(e,t){if(lt(e))return new n(t,this.children);{let i=ot(e),r=(this.children.get(i)||new n(null)).set(At(e),t),o=this.children.insert(i,r);return new n(this.value,o)}}remove(e){if(lt(e))return this.children.isEmpty()?new n(null):new n(null,this.children);{let t=ot(e),i=this.children.get(t);if(i){let s=i.remove(At(e)),r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new n(null):new n(this.value,r)}else return this}}get(e){if(lt(e))return this.value;{let t=ot(e),i=this.children.get(t);return i?i.get(At(e)):null}}setTree(e,t){if(lt(e))return t;{let i=ot(e),r=(this.children.get(i)||new n(null)).setTree(At(e),t),o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new n(this.value,o)}}fold(e){return this.fold_(pt(),e)}fold_(e,t){let i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(kt(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,pt(),t)}findOnPath_(e,t,i){let s=this.value?i(t,this.value):!1;if(s)return s;if(lt(e))return null;{let r=ot(e),o=this.children.get(r);return o?o.findOnPath_(At(e),kt(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,pt(),t)}foreachOnPath_(e,t,i){if(lt(e))return this;{this.value&&i(t,this.value);let s=ot(e),r=this.children.get(s);return r?r.foreachOnPath_(At(e),kt(t,s),i):new n(null)}}foreach(e){this.foreach_(pt(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(kt(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}};var Mi=class n{constructor(e){this.writeTree_=e}static empty(){return new n(new Dn(null))}};function rl(n,e,t){if(lt(e))return new Mi(new Dn(t));{let i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){let s=i.path,r=i.value,o=Nn(s,e);return r=r.updateChild(o,t),new Mi(n.writeTree_.set(s,r))}else{let s=new Dn(t),r=n.writeTree_.setTree(e,s);return new Mi(r)}}}function Cp(n,e,t){let i=n;return dn(t,(s,r)=>{i=rl(i,kt(e,s),r)}),i}function j0(n,e){if(lt(e))return Mi.empty();{let t=n.writeTree_.setTree(e,new Dn(null));return new Mi(t)}}function Rp(n,e){return Mr(n,e)!=null}function Mr(n,e){let t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Nn(t.path,e)):null}function Q0(n){let e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(zt,(i,s)=>{e.push(new ct(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ct(i,s.value))}),e}function Fs(n,e){if(lt(e))return n;{let t=Mr(n,e);return t!=null?new Mi(new Dn(t)):new Mi(n.writeTree_.subtree(e))}}function Ip(n){return n.writeTree_.isEmpty()}function Mo(n,e){return zy(pt(),n.writeTree_,e)}function zy(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(ce(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=zy(kt(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(kt(n,".priority"),i)),t}}function Tu(n,e){return Wy(e,n)}function z1(n,e,t,i,s){ce(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=rl(n.visibleWrites,e,t)),n.lastWriteId=i}function H1(n,e,t,i){ce(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Cp(n.visibleWrites,e,t),n.lastWriteId=i}function G1(n,e){for(let t=0;t<n.allWrites.length;t++){let i=n.allWrites[t];if(i.writeId===e)return i}return null}function V1(n,e){let t=n.allWrites.findIndex(a=>a.writeId===e);ce(t>=0,"removeWrite called with nonexistent writeId.");let i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){let a=n.allWrites[o];a.visible&&(o>=t&&W1(a,i.path)?s=!1:ai(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return X1(n),!0;if(i.snap)n.visibleWrites=j0(n.visibleWrites,i.path);else{let a=i.children;dn(a,l=>{n.visibleWrites=j0(n.visibleWrites,kt(i.path,l))})}return!0}else return!1}function W1(n,e){if(n.snap)return ai(n.path,e);for(let t in n.children)if(n.children.hasOwnProperty(t)&&ai(kt(n.path,t),e))return!0;return!1}function X1(n){n.visibleWrites=Hy(n.allWrites,q1,pt()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function q1(n){return n.visible}function Hy(n,e,t){let i=Mi.empty();for(let s=0;s<n.length;++s){let r=n[s];if(e(r)){let o=r.path,a;if(r.snap)ai(t,o)?(a=Nn(t,o),i=rl(i,a,r.snap)):ai(o,t)&&(a=Nn(o,t),i=rl(i,pt(),r.snap.getChild(a)));else if(r.children){if(ai(t,o))a=Nn(t,o),i=Cp(i,a,r.children);else if(ai(o,t))if(a=Nn(o,t),lt(a))i=Cp(i,pt(),r.children);else{let l=ur(r.children,ot(a));if(l){let c=l.getChild(At(a));i=rl(i,pt(),c)}}}else throw hr("WriteRecord should have .snap or .children")}}return i}function Gy(n,e,t,i,s){if(!i&&!s){let r=Mr(n.visibleWrites,e);if(r!=null)return r;{let o=Fs(n.visibleWrites,e);if(Ip(o))return t;if(t==null&&!Rp(o,pt()))return null;{let a=t||Je.EMPTY_NODE;return Mo(o,a)}}}else{let r=Fs(n.visibleWrites,e);if(!s&&Ip(r))return t;if(!s&&t==null&&!Rp(r,pt()))return null;{let o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ai(c.path,e)||ai(e,c.path))},a=Hy(n.allWrites,o,e),l=t||Je.EMPTY_NODE;return Mo(a,l)}}}function Y1(n,e,t){let i=Je.EMPTY_NODE,s=Mr(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(zt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){let r=Fs(n.visibleWrites,e);return t.forEachChild(zt,(o,a)=>{let l=Mo(Fs(r,new gt(o)),a);i=i.updateImmediateChild(o,l)}),Q0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{let r=Fs(n.visibleWrites,e);return Q0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function $1(n,e,t,i,s){ce(i||s,"Either existingEventSnap or existingServerSnap must exist");let r=kt(e,t);if(Rp(n.visibleWrites,r))return null;{let o=Fs(n.visibleWrites,r);return Ip(o)?s.getChild(t):Mo(o,s.getChild(t))}}function J1(n,e,t,i){let s=kt(e,t),r=Mr(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){let o=Fs(n.visibleWrites,s);return Mo(o,i.getNode().getImmediateChild(t))}else return null}function K1(n,e){return Mr(n.visibleWrites,e)}function Z1(n,e,t,i,s,r,o){let a,l=Fs(n.visibleWrites,e),c=Mr(l,pt());if(c!=null)a=c;else if(t!=null)a=Mo(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){let h=[],u=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),d=f.getNext();for(;d&&h.length<s;)u(d,i)!==0&&h.push(d),d=f.getNext();return h}else return[]}function j1(){return{visibleWrites:Mi.empty(),allWrites:[],lastWriteId:-1}}function uu(n,e,t,i){return Gy(n.writeTree,n.treePath,e,t,i)}function nm(n,e){return Y1(n.writeTree,n.treePath,e)}function ey(n,e,t,i){return $1(n.writeTree,n.treePath,e,t,i)}function du(n,e){return K1(n.writeTree,kt(n.treePath,e))}function Q1(n,e,t,i,s,r){return Z1(n.writeTree,n.treePath,e,t,i,s,r)}function im(n,e,t){return J1(n.writeTree,n.treePath,e,t)}function Vy(n,e){return Wy(kt(n.treePath,e),n.writeTree)}function Wy(n,e){return{treePath:n,writeTree:e}}var Pp=class{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,i=e.childName;ce(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ce(i!==".priority","Only non-priority child changes can be tracked.");let s=this.changeMap.get(i);if(s){let r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,cl(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,ll(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,xo(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,cl(i,e.snapshotNode,s.oldSnap));else throw hr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}};var Np=class{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}},Xy=new Np,dl=class{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let i=this.optCompleteServerCache_!=null?new Bi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return im(this.writes_,e,i)}}getChildAfterChild(e,t,i){let s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),r=Q1(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}};function eC(n){return{filter:n}}function tC(n,e){ce(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ce(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function nC(n,e,t,i,s){let r=new Pp,o,a;if(t.type===Si.OVERWRITE){let c=t;c.source.fromUser?o=Lp(n,e,c.path,c.snap,i,s,r):(ce(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!lt(c.path),o=fu(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===Si.MERGE){let c=t;c.source.fromUser?o=sC(n,e,c.path,c.children,i,s,r):(ce(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Dp(n,e,c.path,c.children,i,s,a,r))}else if(t.type===Si.ACK_USER_WRITE){let c=t;c.revert?o=aC(n,e,c.path,i,s,r):o=rC(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Si.LISTEN_COMPLETE)o=oC(n,e,t.path,i,r);else throw hr("Unknown operation type: "+t.type);let l=r.getChanges();return iC(e,o,l),{viewCache:o,changes:l}}function iC(n,e,t){let i=e.eventCache;if(i.isFullyInitialized()){let s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=hu(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(By(hu(e)))}}function qy(n,e,t,i,s,r){let o=e.eventCache;if(du(i,t)!=null)return e;{let a,l;if(lt(t))if(ce(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){let c=xr(e),h=c instanceof Je?c:Je.EMPTY_NODE,u=nm(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{let c=uu(i,xr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{let c=ot(t);if(c===".priority"){ce(Bs(t)===1,"Can't have a priority with additional path components");let h=o.getNode();l=e.serverCache.getNode();let u=ey(i,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{let h=At(t),u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();let f=ey(i,t,o.getNode(),l);f!=null?u=o.getNode().getImmediateChild(c).updateChild(h,f):u=o.getNode().getImmediateChild(c)}else u=im(i,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return sl(e,a,o.isFullyInitialized()||lt(t),n.filter.filtersNodes())}}function fu(n,e,t,i,s,r,o,a){let l=e.serverCache,c,h=o?n.filter:n.filter.getIndexedFilter();if(lt(t))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){let d=l.getNode().updateChild(t,i);c=h.updateFullNode(l.getNode(),d,null)}else{let d=ot(t);if(!l.isCompleteForPath(t)&&Bs(t)>1)return e;let p=At(t),m=l.getNode().getImmediateChild(d).updateChild(p,i);d===".priority"?c=h.updatePriority(l.getNode(),m):c=h.updateChild(l.getNode(),d,m,p,Xy,null)}let u=ky(e,c,l.isFullyInitialized()||lt(t),h.filtersNodes()),f=new dl(s,u,r);return qy(n,u,t,s,f,a)}function Lp(n,e,t,i,s,r,o){let a=e.eventCache,l,c,h=new dl(s,e,r);if(lt(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=sl(e,c,!0,n.filter.filtersNodes());else{let u=ot(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=sl(e,c,a.isFullyInitialized(),a.isFiltered());else{let f=At(t),d=a.getNode().getImmediateChild(u),p;if(lt(f))p=i;else{let _=h.getCompleteChild(u);_!=null?Kp(f)===".priority"&&_.getChild(Ny(f)).isEmpty()?p=_:p=_.updateChild(f,i):p=Je.EMPTY_NODE}if(d.equals(p))l=e;else{let _=n.filter.updateChild(a.getNode(),u,p,f,h,o);l=sl(e,_,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function ty(n,e){return n.eventCache.isCompleteForChild(e)}function sC(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{let h=kt(t,l);ty(e,ot(h))&&(a=Lp(n,a,h,c,s,r,o))}),i.foreach((l,c)=>{let h=kt(t,l);ty(e,ot(h))||(a=Lp(n,a,h,c,s,r,o))}),a}function ny(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Dp(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;lt(t)?c=i:c=new Dn(null).setTree(t,i);let h=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(h.hasChild(u)){let d=e.serverCache.getNode().getImmediateChild(u),p=ny(n,d,f);l=fu(n,l,new gt(u),p,s,r,o,a)}}),c.children.inorderTraversal((u,f)=>{let d=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!h.hasChild(u)&&!d){let p=e.serverCache.getNode().getImmediateChild(u),_=ny(n,p,f);l=fu(n,l,new gt(u),_,s,r,o,a)}}),l}function rC(n,e,t,i,s,r,o){if(du(s,t)!=null)return e;let a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(lt(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return fu(n,e,t,l.getNode().getChild(t),s,r,a,o);if(lt(t)){let c=new Dn(null);return l.getNode().forEachChild(go,(h,u)=>{c=c.set(new gt(h),u)}),Dp(n,e,t,c,s,r,a,o)}else return e}else{let c=new Dn(null);return i.foreach((h,u)=>{let f=kt(t,h);l.isCompleteForPath(f)&&(c=c.set(h,l.getNode().getChild(f)))}),Dp(n,e,t,c,s,r,a,o)}}function oC(n,e,t,i,s){let r=e.serverCache,o=ky(e,r.getNode(),r.isFullyInitialized()||lt(t),r.isFiltered());return qy(n,o,t,i,Xy,s)}function aC(n,e,t,i,s,r){let o;if(du(i,t)!=null)return e;{let a=new dl(i,e,s),l=e.eventCache.getNode(),c;if(lt(t)||ot(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=uu(i,xr(e));else{let u=e.serverCache.getNode();ce(u instanceof Je,"serverChildren would be complete if leaf node"),h=nm(i,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{let h=ot(t),u=im(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,At(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,Je.EMPTY_NODE,At(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=uu(i,xr(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||du(i,pt())!=null,sl(e,c,o,n.filter.filtersNodes())}}var Op=class{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let i=this.query_._queryParams,s=new hl(i.getIndex()),r=N1(i);this.processor_=eC(r);let o=t.serverCache,a=t.eventCache,l=s.updateFullNode(Je.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Je.EMPTY_NODE,a.getNode(),null),h=new Bi(l,o.isFullyInitialized(),s.filtersNodes()),u=new Bi(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=wu(u,h),this.eventGenerator_=new Ap(this.query_)}get query(){return this.query_}};function lC(n){return n.viewCache_.serverCache.getNode()}function cC(n){return hu(n.viewCache_)}function hC(n,e){let t=xr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!lt(e)&&!t.getImmediateChild(ot(e)).isEmpty())?t.getChild(e):null}function iy(n){return n.eventRegistrations_.length===0}function uC(n,e){n.eventRegistrations_.push(e)}function sy(n,e,t){let i=[];if(t){ce(e==null,"A cancel should cancel all event registrations.");let s=n.query._path;n.eventRegistrations_.forEach(r=>{let o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){let o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function ry(n,e,t,i){e.type===Si.MERGE&&e.source.queryId!==null&&(ce(xr(n.viewCache_),"We should always have a full cache before handling merges"),ce(hu(n.viewCache_),"Missing event cache, even though we have a server cache"));let s=n.viewCache_,r=nC(n.processor_,s,e,t,i);return tC(n.processor_,r.viewCache),ce(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Yy(n,r.changes,r.viewCache.eventCache.getNode(),null)}function dC(n,e){let t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(zt,(r,o)=>{i.push(xo(r,o))}),t.isFullyInitialized()&&i.push(By(t.getNode())),Yy(n,i,t.getNode(),e)}function Yy(n,e,t,i){let s=i?[i]:n.eventRegistrations_;return F1(n.eventGenerator_,e,t,s)}var pu,mu=class{constructor(){this.views=new Map}};function fC(n){ce(!pu,"__referenceConstructor has already been defined"),pu=n}function pC(){return ce(pu,"Reference.ts has not been loaded"),pu}function mC(n){return n.views.size===0}function sm(n,e,t,i){let s=e.source.queryId;if(s!==null){let r=n.views.get(s);return ce(r!=null,"SyncTree gave us an op for an invalid query."),ry(r,e,t,i)}else{let r=[];for(let o of n.views.values())r=r.concat(ry(o,e,t,i));return r}}function $y(n,e,t,i,s){let r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=uu(t,s?i:null),l=!1;a?l=!0:i instanceof Je?(a=nm(t,i),l=!1):(a=Je.EMPTY_NODE,l=!1);let c=wu(new Bi(a,l,!1),new Bi(i,s,!1));return new Op(e,c)}return o}function gC(n,e,t,i,s,r){let o=$y(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),uC(o,t),dC(o,t)}function _C(n,e,t,i){let s=e._queryIdentifier,r=[],o=[],a=ks(n);if(s==="default")for(let[l,c]of n.views.entries())o=o.concat(sy(c,t,i)),iy(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{let l=n.views.get(s);l&&(o=o.concat(sy(l,t,i)),iy(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ks(n)&&r.push(new(pC())(e._repo,e._path)),{removed:r,events:o}}function Jy(n){let e=[];for(let t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Us(n,e){let t=null;for(let i of n.views.values())t=t||hC(i,e);return t}function Ky(n,e){if(e._queryParams.loadsAllData())return Au(n);{let i=e._queryIdentifier;return n.views.get(i)}}function Zy(n,e){return Ky(n,e)!=null}function ks(n){return Au(n)!=null}function Au(n){for(let e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}var gu;function yC(n){ce(!gu,"__referenceConstructor has already been defined"),gu=n}function vC(){return ce(gu,"Reference.ts has not been loaded"),gu}var xC=1,_u=class{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Dn(null),this.pendingWriteTree_=j1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function jy(n,e,t,i,s){return z1(n.pendingWriteTree_,e,t,i,s),s?Ao(n,new So(Qp(),e,t)):[]}function SC(n,e,t,i){H1(n.pendingWriteTree_,e,t,i);let s=Dn.fromObject(t);return Ao(n,new ul(Qp(),e,s))}function Ds(n,e,t=!1){let i=G1(n.pendingWriteTree_,e);if(V1(n.pendingWriteTree_,e)){let r=new Dn(null);return i.snap!=null?r=r.set(pt(),!0):dn(i.children,o=>{r=r.set(new gt(o),!0)}),Ao(n,new Tp(i.path,r,t))}else return[]}function vl(n,e,t){return Ao(n,new So(em(),e,t))}function MC(n,e,t){let i=Dn.fromObject(t);return Ao(n,new ul(em(),e,i))}function bC(n,e){return Ao(n,new cu(em(),e))}function EC(n,e,t){let i=om(n,t);if(i){let s=am(i),r=s.path,o=s.queryId,a=Nn(r,e),l=new cu(tm(o),a);return lm(n,r,l)}else return[]}function yu(n,e,t,i,s=!1){let r=e._path,o=n.syncPointTree_.get(r),a=[];if(o&&(e._queryIdentifier==="default"||Zy(o,e))){let l=_C(o,e,t,i);mC(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));let c=l.removed;if(a=l.events,!s){let h=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(f,d)=>ks(d));if(h&&!u){let f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){let d=AC(f);for(let p=0;p<d.length;++p){let _=d[p],m=_.query,g=nv(n,_);n.listenProvider_.startListening(ol(m),fl(n,m),g.hashFn,g.onComplete)}}}!u&&c.length>0&&!i&&(h?n.listenProvider_.stopListening(ol(e),null):c.forEach(f=>{let d=n.queryToTagMap.get(Cu(f));n.listenProvider_.stopListening(ol(f),d)}))}CC(n,c)}return a}function Qy(n,e,t,i){let s=om(n,i);if(s!=null){let r=am(s),o=r.path,a=r.queryId,l=Nn(o,e),c=new So(tm(a),l,t);return lm(n,o,c)}else return[]}function wC(n,e,t,i){let s=om(n,i);if(s){let r=am(s),o=r.path,a=r.queryId,l=Nn(o,e),c=Dn.fromObject(t),h=new ul(tm(a),l,c);return lm(n,o,h)}else return[]}function Fp(n,e,t,i=!1){let s=e._path,r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(f,d)=>{let p=Nn(f,s);r=r||Us(d,p),o=o||ks(d)});let a=n.syncPointTree_.get(s);a?(o=o||ks(a),r=r||Us(a,pt())):(a=new mu,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=Je.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((d,p)=>{let _=Us(p,pt());_&&(r=r.updateImmediateChild(d,_))}));let c=Zy(a,e);if(!c&&!e._queryParams.loadsAllData()){let f=Cu(e);ce(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");let d=RC();n.queryToTagMap.set(f,d),n.tagToQueryMap.set(d,f)}let h=Tu(n.pendingWriteTree_,s),u=gC(a,e,t,h,r,l);if(!c&&!o&&!i){let f=Ky(a,e);u=u.concat(IC(n,e,f))}return u}function rm(n,e,t){let s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{let l=Nn(o,e),c=Us(a,l);if(c)return c});return Gy(s,e,r,t,!0)}function TC(n,e){let t=e._path,i=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{let u=Nn(c,t);i=i||Us(h,u)});let s=n.syncPointTree_.get(t);s?i=i||Us(s,pt()):(s=new mu,n.syncPointTree_=n.syncPointTree_.set(t,s));let r=i!=null,o=r?new Bi(i,!0,!1):null,a=Tu(n.pendingWriteTree_,e._path),l=$y(s,e,a,r?o.getNode():Je.EMPTY_NODE,r);return cC(l)}function Ao(n,e){return ev(e,n.syncPointTree_,null,Tu(n.pendingWriteTree_,pt()))}function ev(n,e,t,i){if(lt(n.path))return tv(n,e,t,i);{let s=e.get(pt());t==null&&s!=null&&(t=Us(s,pt()));let r=[],o=ot(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){let c=t?t.getImmediateChild(o):null,h=Vy(i,o);r=r.concat(ev(a,l,c,h))}return s&&(r=r.concat(sm(s,n,i,t))),r}}function tv(n,e,t,i){let s=e.get(pt());t==null&&s!=null&&(t=Us(s,pt()));let r=[];return e.children.inorderTraversal((o,a)=>{let l=t?t.getImmediateChild(o):null,c=Vy(i,o),h=n.operationForChild(o);h&&(r=r.concat(tv(h,a,l,c)))}),s&&(r=r.concat(sm(s,n,i,t))),r}function nv(n,e){let t=e.query,i=fl(n,t);return{hashFn:()=>(lC(e)||Je.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?EC(n,t._path,i):bC(n,t._path);{let r=VA(s,t);return yu(n,t,null,r)}}}}function fl(n,e){let t=Cu(e);return n.queryToTagMap.get(t)}function Cu(n){return n._path.toString()+"$"+n._queryIdentifier}function om(n,e){return n.tagToQueryMap.get(e)}function am(n){let e=n.indexOf("$");return ce(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new gt(n.substr(0,e))}}function lm(n,e,t){let i=n.syncPointTree_.get(e);ce(i,"Missing sync point for query tag that we're tracking");let s=Tu(n.pendingWriteTree_,e);return sm(i,t,s,null)}function AC(n){return n.fold((e,t,i)=>{if(t&&ks(t))return[Au(t)];{let s=[];return t&&(s=Jy(t)),dn(i,(r,o)=>{s=s.concat(o)}),s}})}function ol(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(vC())(n._repo,n._path):n}function CC(n,e){for(let t=0;t<e.length;++t){let i=e[t];if(!i._queryParams.loadsAllData()){let s=Cu(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function RC(){return xC++}function IC(n,e,t){let i=e._path,s=fl(n,e),r=nv(n,t),o=n.listenProvider_.startListening(ol(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)ce(!ks(a.value),"If we're adding a query, it shouldn't be shadowed");else{let l=a.fold((c,h,u)=>{if(!lt(c)&&h&&ks(h))return[Au(h).query];{let f=[];return h&&(f=f.concat(Jy(h).map(d=>d.query))),dn(u,(d,p)=>{f=f.concat(p)}),f}});for(let c=0;c<l.length;++c){let h=l[c];n.listenProvider_.stopListening(ol(h),fl(n,h))}}return o}var Up=class n{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new n(t)}node(){return this.node_}},Bp=class n{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=kt(this.path_,e);return new n(this.syncTree_,t)}node(){return rm(this.syncTree_,this.path_)}},PC=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},oy=function(n,e,t){if(!n||typeof n!="object")return n;if(ce(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return NC(n[".sv"],e,t);if(typeof n[".sv"]=="object")return LC(n[".sv"],e);ce(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},NC=function(n,e,t){if(n==="timestamp")return t.timestamp;ce(!1,"Unexpected server value: "+n)},LC=function(n,e,t){n.hasOwnProperty("increment")||ce(!1,"Unexpected server value: "+JSON.stringify(n,null,2));let i=n.increment;typeof i!="number"&&ce(!1,"Unexpected increment value: "+i);let s=e.node();if(ce(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;let o=s.getValue();return typeof o!="number"?i:o+i},iv=function(n,e,t,i){return cm(e,new Bp(t,n),i)},sv=function(n,e,t){return cm(n,new Up(e),t)};function cm(n,e,t){let i=n.getPriority().val(),s=oy(i,e.getImmediateChild(".priority"),t),r;if(n.isLeafNode()){let o=n,a=oy(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new ds(a,qt(s)):n}else{let o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ds(s))),o.forEachChild(zt,(a,l)=>{let c=cm(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}var pl=class{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}};function hm(n,e){let t=e instanceof gt?e:new gt(e),i=n,s=ot(t);for(;s!==null;){let r=ur(i.node.children,s)||{children:{},childCount:0};i=new pl(s,i,r),t=At(t),s=ot(t)}return i}function Co(n){return n.node.value}function rv(n,e){n.node.value=e,kp(n)}function ov(n){return n.node.childCount>0}function DC(n){return Co(n)===void 0&&!ov(n)}function Ru(n,e){dn(n.node.children,(t,i)=>{e(new pl(t,n,i))})}function av(n,e,t,i){t&&e(n),Ru(n,s=>{av(s,e,!0)})}function OC(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function xl(n){return new gt(n.parent===null?n.name:xl(n.parent)+"/"+n.name)}function kp(n){n.parent!==null&&FC(n.parent,n.name,n)}function FC(n,e,t){let i=DC(t),s=xi(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,kp(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,kp(n))}var UC=/[\[\].#$\/\u0000-\u001F\u007F]/,BC=/[\[\].#$\u0000-\u001F\u007F]/,Jf=10*1024*1024,um=function(n){return typeof n=="string"&&n.length!==0&&!UC.test(n)},lv=function(n){return typeof n=="string"&&n.length!==0&&!BC.test(n)},kC=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),lv(n)},cv=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Eu(n)||n&&typeof n=="object"&&xi(n,".sv")},vu=function(n,e,t,i){i&&e===void 0||Iu(dr(n,"value"),e,t)},Iu=function(n,e,t){let i=t instanceof gt?new cp(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+pr(i));if(typeof e=="function")throw new Error(n+"contains a function "+pr(i)+" with contents = "+e.toString());if(Eu(e))throw new Error(n+"contains "+e.toString()+" "+pr(i));if(typeof e=="string"&&e.length>Jf/3&&Ja(e)>Jf)throw new Error(n+"contains a string greater than "+Jf+" utf8 bytes "+pr(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(dn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!um(o)))throw new Error(n+" contains an invalid key ("+o+") "+pr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);y1(i,o),Iu(n,a,i),v1(i)}),s&&r)throw new Error(n+' contains ".value" child '+pr(i)+" in addition to actual children.")}},zC=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];let r=al(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!um(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(_1);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&ai(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},hv=function(n,e,t,i){let s=dr(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");let r=[];dn(e,(o,a)=>{let l=new gt(o);if(Iu(s,a,kt(t,l)),Kp(l)===".priority"&&!cv(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),zC(s,r)},HC=function(n,e,t){if(Eu(e))throw new Error(dr(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!cv(e))throw new Error(dr(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")};var uv=function(n,e,t,i){if(!(i&&t===void 0)&&!lv(t))throw new Error(dr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},GC=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),uv(n,e,t,i)},gr=function(n,e){if(ot(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},VC=function(n,e){let t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!um(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!kC(t))throw new Error(dr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};var zp=class{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function Pu(n,e){let t=null;for(let i=0;i<e.length;i++){let s=e[i],r=s.getPath();t!==null&&!Zp(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function dv(n,e,t){Pu(n,t),fv(n,i=>Zp(i,e))}function ci(n,e,t){Pu(n,t),fv(n,i=>ai(i,e)||ai(e,i))}function fv(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){let s=n.eventLists_[i];if(s){let r=s.path;e(r)?(WC(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function WC(n){for(let e=0;e<n.events.length;e++){let t=n.events[e];if(t!==null){n.events[e]=null;let i=t.getEventRunner();_r&&un("event: "+t.toString()),wo(i)}}}var XC="repo_interrupt",qC=25,Hp=class{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zp,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=lu(),this.transactionQueueTree_=new pl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}};function YC(n,e,t){if(n.stats_=Jp(n.repoInfo_),n.forceRestClient_||YA())n.server_=new xp(n.repoInfo_,(i,s,r,o)=>{ay(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ly(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tn(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new vr(n.repoInfo_,e,(i,s,r,o)=>{ay(n,i,s,r,o)},i=>{ly(n,i)},i=>{$C(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=JA(n.repoInfo_,()=>new wp(n.stats_,n.server_)),n.infoData_=new Sp,n.infoSyncTree_=new _u({startListening:(i,s,r,o)=>{let a=[],l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=vl(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),dm(n,"connected",!1),n.serverSyncTree_=new _u({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{let c=o(a,l);ci(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function pv(n){let t=n.infoData_.getNode(new gt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Nu(n){return PC({timestamp:pv(n)})}function ay(n,e,t,i,s){n.dataUpdateCount++;let r=new gt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){let l=$a(t,c=>qt(c));o=wC(n.serverSyncTree_,r,l,s)}else{let l=qt(t);o=Qy(n.serverSyncTree_,r,l,s)}else if(i){let l=$a(t,c=>qt(c));o=MC(n.serverSyncTree_,r,l)}else{let l=qt(t);o=vl(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=bo(n,r)),ci(n.eventQueue_,a,o)}function ly(n,e){dm(n,"connected",e),e===!1&&jC(n)}function $C(n,e){dn(e,(t,i)=>{dm(n,t,i)})}function dm(n,e,t){let i=new gt("/.info/"+e),s=qt(t);n.infoData_.updateSnapshot(i,s);let r=vl(n.infoSyncTree_,i,s);ci(n.eventQueue_,i,r)}function fm(n){return n.nextWriteId_++}function JC(n,e,t){let i=TC(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{let r=qt(s).withIndex(e._queryParams.getIndex());Fp(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=vl(n.serverSyncTree_,e._path,r);else{let a=fl(n.serverSyncTree_,e);o=Qy(n.serverSyncTree_,e._path,r,a)}return ci(n.eventQueue_,e._path,o),yu(n.serverSyncTree_,e,t,null,!0),r},s=>(Sl(n,"get for query "+tn(e)+" failed: "+s),Promise.reject(new Error(s))))}function KC(n,e,t,i,s){Sl(n,"set",{path:e.toString(),value:t,priority:i});let r=Nu(n),o=qt(t,i),a=rm(n.serverSyncTree_,e),l=sv(o,a,r),c=fm(n),h=jy(n.serverSyncTree_,e,l,c,!0);Pu(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(f,d)=>{let p=f==="ok";p||Ln("set at "+e+" failed: "+f);let _=Ds(n.serverSyncTree_,c,!p);ci(n.eventQueue_,e,_),zs(n,s,f,d)});let u=mm(n,e);bo(n,u),ci(n.eventQueue_,u,[])}function ZC(n,e,t,i){Sl(n,"update",{path:e.toString(),value:t});let s=!0,r=Nu(n),o={};if(dn(t,(a,l)=>{s=!1,o[a]=iv(kt(e,a),qt(l),n.serverSyncTree_,r)}),s)un("update() called with empty data.  Don't do anything."),zs(n,i,"ok",void 0);else{let a=fm(n),l=SC(n.serverSyncTree_,e,o,a);Pu(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,h)=>{let u=c==="ok";u||Ln("update at "+e+" failed: "+c);let f=Ds(n.serverSyncTree_,a,!u),d=f.length>0?bo(n,e):e;ci(n.eventQueue_,d,f),zs(n,i,c,h)}),dn(t,c=>{let h=mm(n,kt(e,c));bo(n,h)}),ci(n.eventQueue_,e,[])}}function jC(n){Sl(n,"onDisconnectEvents");let e=Nu(n),t=lu();bp(n.onDisconnect_,pt(),(s,r)=>{let o=iv(s,r,n.serverSyncTree_,e);To(t,s,o)});let i=[];bp(t,pt(),(s,r)=>{i=i.concat(vl(n.serverSyncTree_,s,r));let o=mm(n,s);bo(n,o)}),n.onDisconnect_=lu(),ci(n.eventQueue_,pt(),i)}function QC(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&Mp(n.onDisconnect_,e),zs(n,t,i,s)})}function cy(n,e,t,i){let s=qt(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&To(n.onDisconnect_,e,s),zs(n,i,r,o)})}function eR(n,e,t,i,s){let r=qt(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&To(n.onDisconnect_,e,r),zs(n,s,o,a)})}function tR(n,e,t,i){if(Yh(t)){un("onDisconnect().update() called with empty data.  Don't do anything."),zs(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&dn(t,(o,a)=>{let l=qt(a);To(n.onDisconnect_,kt(e,o),l)}),zs(n,i,s,r)})}function nR(n,e,t){let i;ot(e._path)===".info"?i=Fp(n.infoSyncTree_,e,t):i=Fp(n.serverSyncTree_,e,t),dv(n.eventQueue_,e._path,i)}function hy(n,e,t){let i;ot(e._path)===".info"?i=yu(n.infoSyncTree_,e,t):i=yu(n.serverSyncTree_,e,t),dv(n.eventQueue_,e._path,i)}function mv(n){n.persistentConnection_&&n.persistentConnection_.interrupt(XC)}function Sl(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),un(t,...e)}function zs(n,e,t,i){e&&wo(()=>{if(t==="ok")e(null);else{let s=(t||"error").toUpperCase(),r=s;i&&(r+=": "+i);let o=new Error(r);o.code=s,e(o)}})}function gv(n,e,t){return rm(n.serverSyncTree_,e,t)||Je.EMPTY_NODE}function pm(n,e=n.transactionQueueTree_){if(e||Lu(n,e),Co(e)){let t=yv(n,e);ce(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&iR(n,xl(e),t)}else ov(e)&&Ru(e,t=>{pm(n,t)})}function iR(n,e,t){let i=t.map(c=>c.currentWriteId),s=gv(n,e,i),r=s,o=s.hash();for(let c=0;c<t.length;c++){let h=t[c];ce(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;let u=Nn(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}let a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Sl(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){let u=[];for(let f=0;f<t.length;f++)t[f].status=2,h=h.concat(Ds(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&u.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Lu(n,hm(n.transactionQueueTree_,e)),pm(n,n.transactionQueueTree_),ci(n.eventQueue_,e,h);for(let f=0;f<u.length;f++)wo(u[f])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{Ln("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}bo(n,e)}},o)}function bo(n,e){let t=_v(n,e),i=xl(t),s=yv(n,t);return sR(n,s,i),i}function sR(n,e,t){if(e.length===0)return;let i=[],s=[],o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){let l=e[a],c=Nn(t,l.path),h=!1,u;if(ce(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(Ds(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=qC)h=!0,u="maxretry",s=s.concat(Ds(n.serverSyncTree_,l.currentWriteId,!0));else{let f=gv(n,l.path,o);l.currentInputSnapshot=f;let d=e[a].update(f.val());if(d!==void 0){Iu("transaction failed: Data returned ",d,l.path);let p=qt(d);typeof d=="object"&&d!=null&&xi(d,".priority")||(p=p.updatePriority(f.getPriority()));let m=l.currentWriteId,g=Nu(n),y=sv(p,f,g);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=y,l.currentWriteId=fm(n),o.splice(o.indexOf(m),1),s=s.concat(jy(n.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),s=s.concat(Ds(n.serverSyncTree_,m,!0))}else h=!0,u="nodata",s=s.concat(Ds(n.serverSyncTree_,l.currentWriteId,!0))}ci(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,(function(f){setTimeout(f,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Lu(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)wo(i[a]);pm(n,n.transactionQueueTree_)}function _v(n,e){let t,i=n.transactionQueueTree_;for(t=ot(e);t!==null&&Co(i)===void 0;)i=hm(i,t),e=At(e),t=ot(e);return i}function yv(n,e){let t=[];return vv(n,e,t),t.sort((i,s)=>i.order-s.order),t}function vv(n,e,t){let i=Co(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Ru(e,s=>{vv(n,s,t)})}function Lu(n,e){let t=Co(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,rv(e,t.length>0?t:void 0)}Ru(e,i=>{Lu(n,i)})}function mm(n,e){let t=xl(_v(n,e)),i=hm(n.transactionQueueTree_,e);return OC(i,s=>{Kf(n,s)}),Kf(n,i),av(i,s=>{Kf(n,s)}),t}function Kf(n,e){let t=Co(e);if(t){let i=[],s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(ce(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(ce(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Ds(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?rv(e,void 0):t.length=r+1,ci(n.eventQueue_,xl(e),s);for(let o=0;o<i.length;o++)wo(i[o])}}function rR(n){let e="",t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function oR(n){let e={};n.charAt(0)==="?"&&(n=n.substring(1));for(let t of n.split("&")){if(t.length===0)continue;let i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ln(`Invalid query segment '${t}' in query '${n}'`)}return e}var uy=function(n,e){let t=aR(n),i=t.namespace;t.domain==="firebase.com"&&us(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&us("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||BA();let s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Qh(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new gt(t.pathString)}},aR=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(s=rR(n.substring(h,u)));let f=oR(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;let d=e.slice(0,c);if(d.toLowerCase()==="localhost")t="localhost";else if(d.split(".").length<=2)t=d;else{let p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};var dy="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",lR=(function(){let n=0,e=[];return function(t){let i=t===n;n=t;let s,r=new Array(8);for(s=7;s>=0;s--)r[s]=dy.charAt(t%64),t=Math.floor(t/64);ce(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=dy.charAt(e[s]);return ce(o.length===20,"nextPushId: Length should be 20."),o}})();var xu=class{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){let e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+tn(this.snapshot.exportVal())}},Su=class{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}};var Mu=class{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ce(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}};var Gp=class{constructor(e,t){this._repo=e,this._path=t}cancel(){let e=new zn;return QC(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){gr("OnDisconnect.remove",this._path);let e=new zn;return cy(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){gr("OnDisconnect.set",this._path),vu("OnDisconnect.set",e,this._path,!1);let t=new zn;return cy(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){gr("OnDisconnect.setWithPriority",this._path),vu("OnDisconnect.setWithPriority",e,this._path,!1),HC("OnDisconnect.setWithPriority",t);let i=new zn;return eR(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){gr("OnDisconnect.update",this._path),hv("OnDisconnect.update",e,this._path);let t=new zn;return tR(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};var Vp=class n{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return lt(this._path)?null:Kp(this._path)}get ref(){return new ki(this._repo,this._path)}get _queryIdentifier(){let e=K0(this._queryParams),t=$p(e);return t==="{}"?"default":t}get _queryObject(){return K0(this._queryParams)}isEqual(e){if(e=Fi(e),!(e instanceof n))return!1;let t=this._repo===e._repo,i=Zp(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+g1(this._path)}};var ki=class n extends Vp{constructor(e,t){super(e,t,new vp,!1)}get parent(){let e=Ny(this._path);return e===null?null:new n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}},ml=class n{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new gt(e),i=Eo(this.ref,e);return new n(this._node.getChild(t),i,zt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new n(s,Eo(this.ref,i),zt)))}hasChild(e){let t=new gt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function hi(n,e){return n=Fi(n),n._checkNotDeleted("ref"),e!==void 0?Eo(n._root,e):n._root}function Eo(n,e){return n=Fi(n),ot(n._path)===null?GC("child","path",e,!1):uv("child","path",e,!1),new ki(n._repo,kt(n._path,e))}function xv(n){return n=Fi(n),new Gp(n._repo,n._path)}function Sv(n,e){n=Fi(n),gr("push",n._path),vu("push",e,n._path,!0);let t=pv(n._repo),i=lR(t),s=Eo(n,i),r=Eo(n,i),o;return e!=null?o=br(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Ml(n){return gr("remove",n._path),br(n,null)}function br(n,e){n=Fi(n),gr("set",n._path),vu("set",e,n._path,!1);let t=new zn;return KC(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Du(n,e){hv("update",e,n._path);let t=new zn;return ZC(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Mv(n){n=Fi(n);let e=new Mu(()=>{}),t=new bu(e);return JC(n._repo,n,t).then(i=>new ml(i,new ki(n._repo,n._path),n._queryParams.getIndex()))}var bu=class n{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){let i=t._queryParams.getIndex();return new xu("value",this,new ml(e.snapshotNode,new ki(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Su(this,e,t):null}matches(e){return e instanceof n?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}},Wp=class n{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Su(this,e,t):null}createEvent(e,t){ce(e.childName!=null,"Child events should have a childName.");let i=Eo(new ki(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new xu(e.type,this,new ml(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof n?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}};function bv(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){let l=t,c=(h,u)=>{hy(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}let o=new Mu(t,r||void 0),a=e==="value"?new bu(o):new Wp(e,o);return nR(n._repo,n,a),()=>hy(n._repo,n,a)}function fs(n,e,t,i){return bv(n,"value",e,t,i)}function Ev(n,e,t,i){return bv(n,"child_added",e,t,i)}fC(ki);yC(ki);var cR="FIREBASE_DATABASE_EMULATOR_HOST",Xp={},hR=!1;function uR(n,e,t,i){let s=e.lastIndexOf(":"),r=e.substring(0,s),o=Rf(r);n.repoInfo_=new Qh(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function dR(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||us("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),un("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=uy(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[cR]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=uy(r,s),a=o.repoInfo):l=!o.repoInfo.secure;let h=s&&l?new Os(Os.OWNER):new np(n.name,n.options,e);VC("Invalid Firebase Database URL",o),lt(o.path)||us("Database URL must point to the root of a Firebase Database (not including a child path).");let u=pR(a,n,h,new tp(n,t));return new qp(u,n)}function fR(n,e){let t=Xp[e];(!t||t[n.key]!==n)&&us(`Database ${e}(${n.repoInfo_}) has already been deleted.`),mv(n),delete t[n.key]}function pR(n,e,t,i){let s=Xp[e.name];s||(s={},Xp[e.name]=s);let r=s[n.toURLString()];return r&&us("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Hp(n,hR,t,i),s[n.toURLString()]=r,r}var qp=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ki(this._repo,pt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(fR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&us("Cannot call "+e+" on a deleted database.")}};function wv(n=I0(),e){let t=A0(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){let i=s0("database");i&&mR(t,...i)}return t}function mR(n,e,t,i={}){n=Fi(n),n._checkNotDeleted("useEmulator");let s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&ho(i,r.repoInfo_.emulatorOptions))return;us("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&us('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Os(Os.OWNER);else if(i.mockUserToken){let a=typeof i.mockUserToken=="string"?i.mockUserToken:r0(i.mockUserToken,n.app.options.projectId);o=new Os(a)}Rf(e)&&p0(e),uR(r,s,i,o)}function gm(n){n=Fi(n),n._checkNotDeleted("goOffline"),mv(n._repo)}function gR(n){OA(R0),Za(new as("database",(e,{instanceIdentifier:t})=>{let i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return dR(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Ls(L0,D0,n),Ls(L0,D0,"esm2020")}var _R={".sv":"timestamp"};function bl(){return _R}vr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};vr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};gR();var Tv={apiKey:"AIzaSyDtHx2vGHhMd7Sv0UMwL3JU35iLD7eD9nM",authDomain:"eclipse-game-865ae.firebaseapp.com",databaseURL:"https://eclipse-game-865ae-default-rtdb.europe-west1.firebasedatabase.app",projectId:"eclipse-game-865ae",storageBucket:"eclipse-game-865ae.firebasestorage.app",messagingSenderId:"578340682575",appId:"1:578340682575:web:5087cb3782c19b8f52e33a"};var Av=12e3,El=class{constructor(){this.h={}}on(e,t){var i;((i=this.h)[e]||(i[e]=[])).push(t)}emit(e,...t){for(let i of this.h[e]||[])i(...t)}};function yR(n){if(!n.length)return null;let e=[...n].sort((t,i)=>t-i);return e[Math.floor(e.length/2)]}var Cv=()=>Math.random().toString(36).slice(2,10),Ou=class extends El{constructor(){super(),this.kind="online",this.offset=0,this.status={server:"connecting",ping:null,partnerOnline:!1,partnerPing:null,error:null,conflict:!1},this.pings=[],this.sid=Cv(),this.connected=!1}serverNow(){return Date.now()+this.offset}join(e,t){this.role=t,this.other=en(t);let i=Vf(Tv),s=this.db=wv(i),r=this.base=`rooms/${e}`;this.meRef=hi(s,`${r}/players/${t}/meta`),this.stateRef=hi(s,`${r}/players/${t}/s`),this.evRef=hi(s,`${r}/ev`),this.starsRef=hi(s,`${r}/stars`),this.joinedAt=Date.now(),fs(hi(s,".info/serverTimeOffset"),o=>{this.offset=o.val()||0}),this.timeout=setTimeout(()=>{this.everConnected||(this.status.server="unreachable",this.emit("status",this.status))},12e3),fs(hi(s,".info/connected"),async o=>{this.connected=!!o.val(),this.connected?(this.everConnected=!0,clearTimeout(this.timeout),this.status.server="ok",this.emit("status",this.status),await this._claim()):this.everConnected&&(this.status.server="reconnecting",this.emit("status",this.status))},o=>this._fail(o)),fs(hi(s,`${r}/players/${this.other}/meta`),o=>{let a=o.val();this.partnerMeta=a,this._updatePartner()},o=>this._fail(o)),fs(hi(s,`${r}/players/${this.other}/s`),o=>{let a=o.val();a&&a.p&&this.emit("state",a)},o=>this._fail(o)),fs(this.meRef,o=>{let a=o.val();this.claimed&&a&&a.sid&&a.sid!==this.sid&&a.online&&(this.status.conflict=!0,this.emit("status",this.status))}),Ev(this.evRef,o=>{let a=o.val();if(!a||typeof a.t!="number")return;let l=this.serverNow()-a.t;if(l>6e4){Ml(o.ref).catch(()=>{});return}a.from===this.role||l>5e3||this.emit("event",a)},o=>this._fail(o)),fs(this.starsRef,o=>this.emit("stars",o.val()||{}),o=>this._fail(o)),this.quizMineRef=hi(s,`${r}/quiz/${t}`),fs(this.quizMineRef,o=>{this.quizMine=o.val(),this.quizLoaded=!0,this._emitQuiz()},o=>this._fail(o)),fs(hi(s,`${r}/quiz/${this.other}`),o=>{this.quizPartner=o.val(),this._emitQuiz()},o=>this._fail(o)),this.hb=setInterval(()=>this._heartbeat(),1500),this.pt=setInterval(()=>this._updatePartner(),1e3)}async _claim(){try{if(!this.claimed){let e=(await Mv(this.meRef)).val();if(e&&e.online&&e.sid!==this.sid&&this.serverNow()-(e.seen||0)<Av){this.status.conflict=!0,this.emit("status",this.status);return}}await xv(this.meRef).update({online:!1}),await Du(this.meRef,{online:!0,sid:this.sid,seen:bl(),ping:Math.round(this.status.ping||0),v:"2026-11-07.1542"}),this.claimed=!0,this._heartbeat()}catch(e){this._fail(e)}}_heartbeat(){if(!this.connected||!this.claimed||this.status.conflict)return;let e=performance.now();Du(this.meRef,{online:!0,sid:this.sid,seen:bl(),ping:Math.round(this.status.ping||0)}).then(()=>{let t=performance.now()-e;this.pings.push(t),this.pings.length>7&&this.pings.shift(),this.status.ping=yR(this.pings),this.emit("status",this.status)}).catch(t=>this._fail(t))}_updatePartner(){let e=this.partnerMeta,t=!!(e&&e.online&&this.serverNow()-(e.seen||0)<Av),i=t!==this.status.partnerOnline;this.status.partnerOnline=t,this.status.partnerPing=t&&e.ping?e.ping:null,i&&this.emit("partner",t),this.emit("status",this.status)}_fail(e){console.warn("[net]",e);let t=String(e&&(e.code||e.message||e));this.status.error=/permission/i.test(t)?"rules":t,this.emit("status",this.status)}sendState(e){!this.connected||!this.claimed||this.status.conflict||br(this.stateRef,e).catch(()=>{})}sendEvent(e,t={}){if(!this.connected||!this.claimed)return;let i=Sv(this.evRef);br(i,{...t,type:e,from:this.role,t:bl()}).catch(()=>{}),setTimeout(()=>Ml(i).catch(()=>{}),15e3)}collectStar(e){br(hi(this.db,`${this.base}/stars/${e}`),!0).catch(()=>{})}_emitQuiz(){this.emit("quiz",this.quizMine||null,this.quizPartner||null)}saveQuiz(e){return e.length?br(this.quizMineRef,{t:bl(),items:e}):Ml(this.quizMineRef)}resetStars(){Ml(this.starsRef).catch(()=>{})}leave(){if(clearInterval(this.hb),clearInterval(this.pt),this.claimed)return Du(this.meRef,{online:!1}).catch(()=>{}).finally(()=>gm(this.db));try{gm(this.db)}catch{}return Promise.resolve()}},Fu=class extends El{constructor(e=0){super(),this.kind="local",this.lag=e,this.status={server:"ok",ping:e*2,partnerOnline:!1,partnerPing:null,error:null,conflict:!1},this.stars={},this.sid=Cv(),this.partnerSeen=0}serverNow(){return Date.now()}join(e,t){this.role=t,this.other=en(t),this.bc=new BroadcastChannel("eclipse-"+e),this.bc.onmessage=s=>{let r=s.data;if(!r||r.from===this.role)return;let o=()=>this._recv(r);this.lag?setTimeout(o,this.lag*(.75+Math.random()*.5)):o()},this.room=e,this.quizMine=Ot.get(`quiz.${e}.${t}`,null),this.quizPartner=Ot.get(`quiz.${e}.${this.other}`,null),this.quizLoaded=!0,setTimeout(()=>this._emitQuiz(),0);let i=()=>this._send({k:"meta",ping:this.lag*2});i(),this._send({k:"hello"}),this.hb=setInterval(()=>{i(),this._check()},1e3),setTimeout(()=>this.emit("status",this.status),0)}_send(e){this.bc.postMessage({...e,from:this.role})}_recv(e){e.k==="meta"?(this.partnerSeen=Date.now(),this.status.partnerPing=e.ping,this._check()):e.k==="hello"?(this._send({k:"meta",ping:this.lag*2}),this._send({k:"stars",stars:this.stars})):e.k==="state"?(this.partnerSeen=Date.now(),this._check(),this.emit("state",e.s)):e.k==="ev"?this.emit("event",e.e):e.k==="stars"?(Object.assign(this.stars,e.stars),e.reset&&(this.stars={}),this.emit("stars",{...this.stars})):e.k==="bye"?(this.partnerSeen=0,this._check()):e.k==="quiz"&&(this.quizPartner=e.v,this._emitQuiz())}_check(){let e=Date.now()-this.partnerSeen<4e3;e!==this.status.partnerOnline&&(this.status.partnerOnline=e,this.emit("partner",e)),this.emit("status",this.status)}sendState(e){this._send({k:"state",s:e})}sendEvent(e,t={}){this._send({k:"ev",e:{...t,type:e,from:this.role,t:Date.now()}})}collectStar(e){this.stars[e]=!0,this._send({k:"stars",stars:{[e]:!0}}),this.emit("stars",{...this.stars})}resetStars(){this.stars={},this._send({k:"stars",stars:{},reset:!0}),this.emit("stars",{})}_emitQuiz(){this.emit("quiz",this.quizMine,this.quizPartner)}saveQuiz(e){let t=e.length?{t:Date.now(),items:e}:null;return Ot.set(`quiz.${this.room}.${this.role}`,t),this.quizMine=t,this._send({k:"quiz",v:t}),this._emitQuiz(),Promise.resolve()}leave(){return this._send({k:"bye"}),clearInterval(this.hb),this.bc.close(),Promise.resolve()}},Uu=class extends El{constructor(){super(),this.kind="solo",this.status={server:"solo",ping:null,partnerOnline:!0,partnerPing:null,error:null,conflict:!1},this.stars={}}serverNow(){return Date.now()}join(e,t){this.role=t,this.other=en(t),this.quizMine=Ot.get(`quiz.solo.${t}`,null),this.quizLoaded=!0,setTimeout(()=>this.emit("quiz",this.quizMine,null),0)}saveQuiz(e){return this.quizMine=e.length?{t:Date.now(),items:e}:null,Ot.set(`quiz.solo.${this.role}`,this.quizMine),this.emit("quiz",this.quizMine,null),Promise.resolve()}sendState(){}sendEvent(){}collectStar(e){this.stars[e]=!0,this.emit("stars",{...this.stars})}resetStars(){this.stars={},this.emit("stars",{})}leave(){return Promise.resolve()}};var xt=n=>document.querySelector(n);function Rv({onJoin:n,onSolo:e,onStart:t,onRetry:i,onLeave:s,onResetStars:r,onToggleSound:o,onFullscreen:a,canFullscreen:l}){let c=xt("#lobby"),h=xt("#conn"),u=xt("#hud"),f=Ot.get("role",null),d=xt("#word");d.value=Ot.get("word",""),xt("#ver").textContent="version 2026-11-07.1542";let p=[...document.querySelectorAll(".role")],_=()=>p.forEach(x=>x.classList.toggle("sel",x.dataset.role===f));_(),p.forEach(x=>x.addEventListener("click",()=>{f=x.dataset.role,Ot.set("role",f),_(),m("")}));let m=x=>{xt("#lobby-err").textContent=x};xt("#join").addEventListener("click",()=>{let x=d.value.trim();if(!f)return m("Pick Sun or Moon first.");if(x.length<2)return m("Type a secret word (you both use the same one).");Ot.set("word",x),d.blur(),n(f,x)}),d.addEventListener("keydown",x=>{x.key==="Enter"&&xt("#join").click()}),xt("#solo").addEventListener("click",()=>{d.blur(),e(f||"sun")}),xt("#conn-start").addEventListener("click",()=>t()),xt("#conn-retry").addEventListener("click",()=>i()),xt("#conn-leave").addEventListener("click",()=>s()),xt("#opt-stars").addEventListener("click",()=>{r(),v("Stars reset")});let g=xt("#opt-sound"),y=x=>{g.textContent=x?"\u{1F50A} Sound on":"\u{1F508} Sound off"};g.addEventListener("click",()=>y(o())),xt("#opt-full").hidden=!l,xt("#opt-full").addEventListener("click",()=>a());let M="join";function S(x,C,A,N,F=""){let U=xt(x),I=U.querySelector(".ic");I.className="ic "+C,I.textContent=C==="good"?"\u2713":C==="bad"?"\u2715":C==="ok"?"!":"",U.querySelector("b").textContent=A,U.querySelector("small").textContent=N,U.querySelector(".ms").textContent=F}let w=x=>x<120?["good","Great"]:x<220?["good","Good"]:x<400?["ok","OK"]:["bad","Laggy"];function T(x,C,A){let N=en(C),F=`${kn[N]} ${vn[N]}`;xt("#conn-who").textContent=A==="solo"?"Practice alone: you control both.":`You are ${kn[C]} ${vn[C]}`+(A==="local"?" (two-tab test)":"");let U="",I=!1,B=!1;if(A==="solo")S("#row-server","good","Practice mode","No internet needed"),I=!0;else if(A==="local")S("#row-server","good","Test mode","Two tabs on this computer",x.ping?`${x.ping} ms fake lag`:""),I=!0;else if(x.error==="rules")S("#row-server","bad","Game server said no","The database rules need to be set"),U="The database is still locked. Paste the rules from database.rules.json into Firebase \u2192 Realtime Database \u2192 Rules, then tap Try again.",B=!0;else if(x.server==="ok"){let J=x.ping!=null?Math.round(x.ping):null;S("#row-server",J==null?"good":w(J)[0],"Game server",J==null?"Connected, measuring\u2026":`Connected \xB7 ${w(J)[1]}`,J==null?"":`${J} ms`),I=!0}else x.server==="reconnecting"?(S("#row-server","wait","Game server","Connection lost, reconnecting\u2026"),I=M==="menu"):x.server==="unreachable"?(S("#row-server","bad","Game server","Can't reach it from this network"),U="Couldn't reach the game server. Check the internet connection and tap Try again. If it keeps failing, a VPN is the backup plan.",B=!0):S("#row-server","wait","Game server","Connecting\u2026");A==="solo"?S("#row-partner","good","Both characters","Tap \u21C4 to switch who you control"):x.conflict?(S("#row-partner","bad",`${vn[C]} is taken`,`Someone is already ${vn[C]} with this word`),U=`Someone is already playing as ${vn[C]} with this secret word. Tap Leave and pick ${vn[N]}.`,I=!1):x.partnerOnline?S("#row-partner",x.partnerPing?w(x.partnerPing)[0]:"good",`${F} is here`,x.partnerPing?`Their connection \xB7 ${w(x.partnerPing)[1]}`:"Connected",x.partnerPing?`${Math.round(x.partnerPing)} ms`:""):S("#row-partner","wait",`Waiting for ${F}\u2026`,`Same secret word, pick ${vn[N]}`);let W=A!=="solo"&&x.partnerOnline&&x.ping!=null&&x.partnerPing!=null;if(xt("#row-delay").hidden=!W,W){let J=Math.round((x.ping+x.partnerPing)/2),[Ae,Ce]=w(J);S("#row-delay",Ae,"Delay between you",Ce,`\u2248 ${J} ms`)}xt("#conn-msg").textContent=U;let k=xt("#conn-start");k.disabled=!I,k.textContent=M==="menu"?"Back to game":A!=="solo"&&!x.partnerOnline&&I?`Start (${vn[N]} can join any time)`:"Start playing",xt("#conn-retry").hidden=!B;let se=xt("#status-pill .dot"),X="good",K="";if(A==="solo")K="Practice";else if(x.server!=="ok"&&A!=="local")X=x.server==="unreachable"||x.error?"bad":"ok",K=x.server==="reconnecting"?"Reconnecting\u2026":"Offline";else{let J=x.ping!=null?Math.round(x.ping):null;J!=null&&(X=w(J)[0]),K=`${J!=null?J+" ms":"\u2026"} \xB7 ${kn[N]} ${x.partnerOnline?"here":"away"}`}se.className="dot "+X,xt("#status-text").textContent=K}function v(x){let C=document.createElement("div");C.className="toast",C.textContent=x,xt("#toasts").appendChild(C),setTimeout(()=>C.remove(),2900);let A=xt("#toasts").children;A.length>3&&A[0].remove()}return{toast:v,renderStatus:T,paintSound:y,showLobby(){c.hidden=!1,h.hidden=!0,u.hidden=!0},showConn(x){M=x,c.hidden=!0,h.hidden=!1,xt("#conn-title").textContent=x==="menu"?"Menu":"Connection",xt("#conn-extras").hidden=x!=="menu"},showHud(){c.hidden=!0,h.hidden=!0,u.hidden=!1},setStars(x,C){xt("#star-count").textContent=x,xt("#star-total").textContent=C},get connOpen(){return!h.hidden}}}var vR=n=>n.normalize("NFKC").trim().toLowerCase().replace(/\s+/g,""),Bu=null;async function xR(){let n=await fetch("memories.enc?v=2026-11-07.1542");if(!n.ok)throw new Error("missing");return new Uint8Array(await n.arrayBuffer())}async function Iv(n){if(Bu)return Bu;if(!crypto?.subtle)throw new Error("unsupported");let e=await xR();if(new TextDecoder().decode(e.slice(0,4))!=="ECLM")throw new Error("missing");let t=new DataView(e.buffer,e.byteOffset).getUint32(5),i=e.slice(9,25),s=e.slice(25,37),r=e.slice(37),o=await crypto.subtle.importKey("raw",new TextEncoder().encode(vR(n)),"PBKDF2",!1,["deriveKey"]),a=await crypto.subtle.deriveKey({name:"PBKDF2",salt:i,iterations:t,hash:"SHA-256"},o,{name:"AES-GCM",length:256},!1,["decrypt"]),l;try{l=await crypto.subtle.decrypt({name:"AES-GCM",iv:s},a,r)}catch{throw new Error("wrong-password")}return Bu=JSON.parse(new TextDecoder().decode(l)).items.map(h=>{let u=atob(h.data),f=new Uint8Array(u.length);for(let d=0;d<u.length;d++)f[d]=u.charCodeAt(d);return{...h,data:void 0,url:URL.createObjectURL(new Blob([f],{type:h.mime}))}}),Ot.set("memPw",n),Bu}var Pv=()=>Ot.get("memPw","");var fn=n=>document.querySelector(n);function Nv(){let n=fn("#mem"),e=fn("#mem-view"),t=fn("#mem-grid"),i=fn("#mem-lock"),s=fn("#mem-pw"),r=fn("#mem-err"),o=fn("#mem-open"),a=null,l=[],c=0;function h(_){l=_,i.hidden=!0,t.hidden=!1,t.innerHTML="",_.forEach((m,g)=>{let y=document.createElement("button"),M=document.createElement("img");M.src=m.url,M.alt=m.title,M.loading="lazy";let S=document.createElement("span");S.textContent=m.title,y.append(M,S),y.addEventListener("click",()=>p(g)),t.appendChild(y)})}async function u(_,m){if(_){o.disabled=!0,r.textContent=m?"":"Unlocking\u2026";try{h(await Iv(_)),r.textContent=""}catch(g){let y=String(g.message);m||(r.textContent=y==="wrong-password"?"That's not the password.":y==="unsupported"?"This browser can\u2019t open them. Try Safari or Chrome.":"Couldn\u2019t load the memories. Check the internet connection.")}finally{o.disabled=!1}}}function f(_){if(a=_,_&&(_.hidden=!0),n.hidden=!1,!l.length){i.hidden=!1,t.hidden=!0;let m=Pv();m&&u(m,!0)}}function d(){n.hidden=!0,a&&(a.hidden=!1)}function p(_){c=(_+l.length)%l.length;let m=l[c];fn("#mem-img").src=m.url,fn("#mem-title").textContent=m.title,fn("#mem-caption").textContent=m.caption||"",e.hidden=!1}o.addEventListener("click",()=>u(s.value,!1)),s.addEventListener("keydown",_=>{_.key==="Enter"&&u(s.value,!1)}),fn("#mem-close").addEventListener("click",d),fn("#mem-x").addEventListener("click",()=>{e.hidden=!0}),fn("#mem-prev").addEventListener("click",()=>p(c-1)),fn("#mem-next").addEventListener("click",()=>p(c+1)),fn("#lobby-mem").addEventListener("click",()=>f(fn("#lobby"))),fn("#opt-mem").addEventListener("click",()=>f(fn("#conn")))}var Qn=n=>document.querySelector(n),SR=[{q:"What would be my dream vacation?",a:"The longest road + sea trip around the world",w:"A week at a luxury beach resort, Skiing in the Alps, A city trip to New York"},{q:"Which hobby of mine don't I do as often lately?",a:"Photography (nature, no people)",w:"Drawing, Playing guitar, Cooking"},{q:"What is my favourite show?",a:"Breaking Bad / Game of Thrones / Sherlock / Silo",w:"Friends, The Office, Money Heist"},{q:"What is my favourite anime?",a:"Fullmetal Alchemist",w:"Naruto, Attack on Titan, One Piece"}],ku=3,Lv=10;function Dv({getNet:n,getRole:e}){let t=Qn("#quiz-ed"),i=Qn("#qe-list"),s=Qn("#qe-msg"),r=null,o=null,a=null;function l(d={q:"",a:"",w:""}){let p=document.createElement("div");p.className="qe-item",p.innerHTML=`<span class="num"></span>
      <button class="del" aria-label="Remove">\u2715</button>
      <input class="q" maxlength="200" dir="auto" placeholder="Question, e.g. What's my favourite food?">
      <input class="ans" maxlength="200" dir="auto" placeholder="The right answer">
      <details><summary>Make it multiple choice (optional)</summary>
        <input class="w" maxlength="300" dir="auto" placeholder="Wrong answers, separated by commas">
      </details>`,p.querySelector(".q").value=d.q||"",p.querySelector(".ans").value=d.a||"",p.querySelector(".w").value=d.w||"",d.w&&(p.querySelector("details").open=!0),p.querySelector(".del").addEventListener("click",()=>{p.remove(),c()}),i.appendChild(p),c()}function c(){[...i.children].forEach((d,p)=>{d.querySelector(".num").textContent=`Question ${p+1}`}),Qn("#qe-add").hidden=i.children.length>=Lv}function h(){return[...i.children].map(d=>{let p={q:d.querySelector(".q").value.trim(),a:d.querySelector(".ans").value.trim()},_=d.querySelector(".w").value.trim();return _&&(p.w=_),p}).filter(d=>d.q&&d.a)}function u(d){let p=e(),_=en(p);for(r=d,d&&(d.hidden=!0),t.hidden=!1,Qn("#qe-intro").textContent=`Write ${ku}\u2013${Lv} questions about yourself, with the right answers. ${kn[_]} ${vn[_]} will have to guess them later, and never sees your answers before that.`,i.innerHTML="",(o?.items?.length?o.items:p==="sun"?SR:[]).forEach(l);i.children.length<ku;)l();s.textContent=o?`${o.items.length} saved \u2713`:""}function f(){t.hidden=!0,r&&(r.hidden=!1)}return Qn("#qe-add").addEventListener("click",()=>{l(),i.lastElementChild.querySelector(".q").focus()}),Qn("#qe-save").addEventListener("click",async()=>{let d=h();if(d.length<ku){s.textContent=`Please write at least ${ku} questions, each with an answer.`;return}s.textContent="Saving\u2026";let p=n(),_=setTimeout(()=>{s.textContent="Waiting for the connection\u2026 it will save as soon as you are online."},2500);try{await p.saveQuiz(d),clearTimeout(_),s.textContent=`${d.length} saved \u2713`,setTimeout(f,700)}catch(m){clearTimeout(_),s.textContent="Could not save: "+(String(m?.code||m?.message||m).includes("PERMISSION")?"the database rules need updating.":"please try again.")}}),Qn("#qe-close").addEventListener("click",f),Qn("#row-quiz").addEventListener("click",()=>u(Qn("#conn"))),Qn("#opt-quiz").addEventListener("click",()=>u(Qn("#conn"))),{update(d,p){o=d,a=p;let _=e(),m=en(_),g=Qn("#row-quiz");g.hidden=!1;let y=d?.items?.length||0,M=p?.items?.length||0;g.classList.toggle("todo",y===0),g.querySelector("b").textContent=y?`Your quiz: ${y} questions \u2713`:"Before you play: write your quiz",g.querySelector("small").textContent=`${kn[m]} ${vn[m]} has written ${M||"no"} question${M===1?"":"s"}${M?" \u2713":" yet"}`,g.querySelector(".ms").textContent=y?"Edit \u203A":"Write \u203A"}}}var Ft=n=>document.querySelector(n),MR=ar.has("debug"),Hv=Ft("#game"),Hs=new Ch({canvas:Hv,antialias:!1,powerPreference:"high-performance"});Hs.toneMapping=ir;Hs.toneMappingExposure=1;Hs.shadowMap.enabled=!0;Hs.shadowMap.type=tr;var Wu=new $o,Hn=new En(55,1,.1,700),bR=new Yt(4,4,{type:nn,samples:4}),Ro=new Dh(Hs,bR);Ro.addPass(new Oh(Wu,Hn));var Gv=new ao(new re(256,256),.5,.5,1.3);Ro.addPass(Gv);Ro.addPass(new Fh);var Vv=[{dpr:Math.min(devicePixelRatio,2),bloom:!0,shadow:2048},{dpr:Math.min(devicePixelRatio,1.6),bloom:!0,shadow:2048},{dpr:Math.min(devicePixelRatio,1.25),bloom:!0,shadow:1024},{dpr:1,bloom:!1,shadow:1024}],Gu=os(+ar.get("q")||0,0,3);function Xu(){let n=window.innerWidth,e=window.innerHeight,t=Vv[Gu];Hs.setPixelRatio(t.dpr),Hs.setSize(n,e,!1),Ro.setPixelRatio(t.dpr),Ro.setSize(n,e),Gv.enabled=t.bloom,Hn.aspect=n/e,Hn.fov=n<e?70:55,Hn.updateProjectionMatrix(),n>e&&(Ft("#rotate-hint").hidden=!0)}window.addEventListener("resize",Xu);window.visualViewport?.addEventListener("resize",Xu);var Jt=V_(Wu),bi=new Bh(Wu,Hn),Io=["sun","moon"],Rt={},St={},On={},Ct={};for(let n of Io)Rt[n]=X_(n),Wu.add(Rt[n].root),St[n]=new Hh(Wa[n].r,Wa[n].h),On[n]=$_(St[n]),On[n].disabled=!0,Ct[n]={role:n,body:St[n],coyote:0,buffer:0,jumps:0,cut:!0,safe:Jt.spawn[n].clone(),safeT:0,k:0,lastMoving:0,airT:0,state:"free",anim:wt.normal,wallT:0,wallNX:0,wallNZ:0,wjLock:0,regrab:0,ledge:null,hangT:0,climbT:0,from:new P,to:new P,carrying:!1,liftT:0,liftSeen:!1,notCarriedT:0};function ER(n){St[n].pos.copy(Jt.spawn[n]),St[n].vel.set(0,0,0),Rt[n].root.position.copy(Jt.spawn[n]),Rt[n].setYaw(Math.PI)}Io.forEach(ER);var Ov=[...Jt.colliders,On.sun,On.moon],V={mode:"lobby",kind:null,role:"sun",active:"sun",net:null,track:new Vh,partnerK:null,cam:{yaw:0,pitch:.3,dist:7.2,target:new P(0,1,5),lastDrag:-10},lastSend:0,stars:{},cooldown:{ability:0,heart:0},t:0},Tl=()=>V.net?V.net.serverNow():Date.now(),Hi=K_({canvas:Hv,joyZone:Ft("#joy-zone"),joyBase:Ft("#joy-base"),joyKnob:Ft("#joy-knob"),buttons:{jump:Ft("#btn-jump"),ability:Ft("#btn-ability"),heart:Ft("#btn-heart"),swap:Ft("#btn-swap")}}),Mm=xf&&!H_&&!!document.documentElement.requestFullscreen;function Wv(){!Mm||document.fullscreenElement||document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}var Gn=Rv({canFullscreen:Mm,onJoin:(n,e)=>vm(ar.get("net")==="local"?"local":"online",n,e),onSolo:n=>vm("solo",n,""),onStart:()=>Xv(),onRetry:()=>{sessionStorage.setItem("eclipse.autojoin","1"),location.reload()},onLeave:()=>{sessionStorage.removeItem("eclipse.autojoin"),(V.net?V.net.leave():Promise.resolve()).finally(()=>location.reload())},onResetStars:()=>V.net?.resetStars(),onToggleSound:()=>$t.toggle(),onFullscreen:Wv});Gn.paintSound($t.enabled);Nv();var wR=Dv({getNet:()=>V.net,getRole:()=>V.role});Gn.setStars(0,Jt.stars.length);Ft("#menu-btn").addEventListener("click",()=>{V.mode==="play"&&(V.mode="menu",Hi.setEnabled(!1),Gn.showConn("menu"),Vu())});Ft("#status-pill").addEventListener("click",()=>Ft("#menu-btn").click());Ft("#rotate-ok").addEventListener("click",()=>{Ft("#rotate-hint").hidden=!0,Ot.set("rotateOk",!0)});function Vu(){V.net&&Gn.renderStatus(V.net.status,V.role,V.kind)}function vm(n,e,t){V.kind=n,V.role=e,V.active=e,document.body.classList.remove("sun","moon"),document.body.classList.add(e),Ft("#ability-label").textContent=e==="sun"?"Shine":"Tide",Ft("#partner-arrow-icon").textContent=kn[en(e)],Ft("#btn-swap").hidden=n!=="solo",n==="solo"&&(On.sun.disabled=On.moon.disabled=!1),Mm&&Wv();let i=V.net=n==="online"?new Ou:n==="local"?new Fu(+ar.get("lag")||0):new Uu;if(i.on("status",Vu),i.on("state",s=>{if(V.partnerK!==s.k){V.partnerK=s.k,V.track.push(s,Date.now()),V.track.snap();return}V.track.push(s,Date.now())}),i.on("partner",s=>{if(V.mode!=="play"&&V.mode!=="menu")return;let r=en(V.role);Gn.toast(s?`${kn[r]} ${vn[r]} joined!`:`${kn[r]} ${vn[r]} left`),s&&$t.play("join")}),i.on("event",TR),i.on("stars",AR),i.on("quiz",(s,r)=>wR.update(s,r)),i.join(n==="solo"?"solo":z_(t),e),n==="solo"){Vu(),Xv();return}V.mode="connecting",Gn.showConn("join"),Vu()}function Xv(){let n=V.mode==="connecting"||V.mode==="lobby";V.mode="play",Gn.showHud(),Hi.setEnabled(!0),n&&(V.cam.yaw=0,V.cam.pitch=.3,V.cam.target.copy(St[V.active].pos).add(new P(0,1.1,0)),xf&&innerHeight>innerWidth&&!Ot.get("rotateOk",!1)&&(Ft("#rotate-hint").hidden=!1),Gn.toast(V.kind==="solo"?"Practice: tap \u21C4 to switch characters":"Find the 3 stars together \u2B50"))}sessionStorage.getItem("eclipse.autojoin")&&Ot.get("role")&&Ot.get("word")?(sessionStorage.removeItem("eclipse.autojoin"),vm(ar.get("net")==="local"?"local":"online",Ot.get("role"),Ot.get("word"))):Gn.showLobby();function TR(n){let e=Rt[n.from];if(e)if(n.type==="heart")bi.hearts(e.root.position,n.from==="sun"?16754253:11832575),Gn.toast(`${kn[n.from]} ${vn[n.from]} sent you a heart ${n.from==="sun"?"\u{1F9E1}":"\u{1F49C}"}`),$t.play("heart");else if(n.type==="ability")qv(n.from);else if(n.type==="lift"&&V.role==="moon"){let t=Ct.moon,i=St.moon;t.state==="free"&&V.track.has&&i.pos.distanceTo(V.track.pos)<2.6&&(t.state="carried",$t.play("jump2"))}else n.type==="throw"&&V.role==="moon"?Ct.moon.state==="carried"&&Array.isArray(n.v)&&Al(Ct.moon,new P(n.v[0],n.v[1],n.v[2])):n.type==="drop"&&V.role==="sun"&&(Ct.sun.carrying=!1)}function qv(n){n==="sun"?(bi.shine(Rt.sun),$t.play("shine")):(bi.tide(Rt.moon),$t.play("tide"))}function AR(n){for(let e of Jt.stars){let t=!!n[e.id];t&&!e.collected&&(bi.sparks(e.pos.clone().setY(e.pos.y-.6),16769658,22),$t.play("star")),e.collected=t}Yv(!1)}var _m=!1;function Yv(n){let e=Jt.stars.filter(t=>t.collected).length;Gn.setStars(e,Jt.stars.length),n&&Gn.toast(`\u2B50 ${e}/${Jt.stars.length}`),e===Jt.stars.length&&!_m&&V.mode==="play"&&(_m=!0,setTimeout(()=>Gn.toast("All stars found! You two make a great team \u2728"),600)),e<Jt.stars.length&&(_m=!1)}var $v=5.6,Fv=11,CR=9.5,RR=10.5,Uv=6.2,Jv=new P,Bv=Ft("#fade");function xm(n,e,t,i,s){let r=n.body,o=n.role,a=V.cam.yaw,l=-Math.sin(a),c=-Math.cos(a),h=Math.cos(a),u=-Math.sin(a),f=Math.min(1,Math.hypot(e.x,e.y)),d=h*e.x+l*e.y,p=u*e.x+c*e.y,_=Math.hypot(d,p);if(_>1e-4?(d/=_,p/=_):(d=0,p=0),n.regrab=Math.max(0,n.regrab-s),n.wjLock=Math.max(0,n.wjLock-s),n.state==="carried")return DR(n,t);if(n.state==="hang")return PR(n,d,p,f,t,s);if(n.state==="climb")return NR(n,s);let m=$v*(n.carrying?.82:1),g=d*m*f,y=p*m*f,M=(r.grounded?48:n.wjLock>0?5:24)*s,S=g-r.vel.x,w=y-r.vel.z,T=Math.hypot(S,w);T>M&&(S*=M/T,w*=M/T),r.vel.x+=S,r.vel.z+=w,r.grounded?(n.coyote=.13,n.jumps=0,n.airT=0,n.wallT=0):(n.coyote-=s,n.airT+=s),n.buffer=t?.16:n.buffer-s,n.buffer>0&&(r.grounded||n.coyote>0?(r.vel.y=n.carrying?Fv*.88:Fv,n.jumps=1,n.coyote=0,n.buffer=0,n.cut=!1,r.grounded=!1,r.ground=null,$t.play("jump"),bi.dust(r.pos,4)):n.wallT>0&&!n.carrying?(r.vel.set(n.wallNX*Uv,RR,n.wallNZ*Uv),n.jumps=1,n.buffer=0,n.cut=!0,n.wallT=0,n.wjLock=.2,Rt[o].setYaw(Math.atan2(n.wallNX,n.wallNZ)),$t.play("jump"),bi.dust(Jv.copy(r.pos).add(new P(-n.wallNX*r.r,r.h*.5,-n.wallNZ*r.r)),3)):n.jumps<2&&!n.carrying&&(r.vel.y=CR,n.jumps=2,n.buffer=0,n.cut=!0,Rt[o].spin(),$t.play("jump2"),bi.sparks(r.pos.clone().setY(r.pos.y-.5),o==="sun"?16756864:13215999,8,1.5))),!i&&!n.cut&&r.vel.y>6&&(r.vel.y=6,n.cut=!0);let v=o==="moon"&&!r.grounded&&i&&r.vel.y<0&&n.airT>.15&&n.wallT<=0;r.maxFall=v?2.2:n.wallT>0?3.2:28;let x=q_(r,Ov,s);if(x&&(x.collider.bounce?($t.play("bounce"),Jt.bounce(x.collider),n.jumps=1,n.cut=!0,Rt[o].land(10)):(x.impact>7&&($t.play("land"),bi.dust(r.pos,6)),Rt[o].land(x.impact))),!r.grounded&&r.wallC&&r.wallC.wallJump&&r.vel.y<2.5?(n.wallT=.18,n.wallNX=r.wallNX,n.wallNZ=r.wallNZ):n.wallT-=s,r.grounded&&(n.wallT=0),!r.grounded&&!n.carrying&&n.regrab<=0&&r.vel.y<3.5){let C=Y_(r,Ov);if(C){let A=-(d*C.nx+p*C.nz)*f,N=-(r.vel.x*C.nx+r.vel.z*C.nz);(A>.2||N>.8||n.wallT>0)&&IR(n,C)}}n.state==="free"&&(n.anim=v?wt.glide:n.wallT>0&&!r.grounded?wt.wall:n.carrying?wt.carry:wt.normal),r.grounded&&r.ground&&r.ground.safe?(n.safeT+=s,n.safeT>.35&&n.safe.copy(r.pos)):n.safeT=0,r.pos.y<Jt.killY&&OR(n)}function IR(n,e){let t=n.body;n.state="hang",n.ledge=e,n.hangT=0,n.anim=wt.hang,t.vel.set(0,0,0),t.grounded=!1,t.ground=null,t.pos.y=e.top-t.h*.92,Rt[n.role].setYaw(Math.atan2(-e.nx,-e.nz)),$t.play("land")}function PR(n,e,t,i,s,r){let o=n.body,a=n.ledge;o.vel.set(0,0,0),o.grounded=!1,n.hangT+=r,n.anim=wt.hang;let l=-(e*a.nx+t*a.nz)*i;if(a.c.disabled){n.state="free",n.regrab=.4;return}s||l>.5&&n.hangT>.12?(n.state="climb",n.climbT=0,n.anim=wt.climb,n.from.copy(o.pos),n.to.set(a.lx,a.top,a.lz),$t.play("jump")):l<-.6&&n.hangT>.15&&(n.state="free",n.regrab=.45,o.vel.set(a.nx*1.5,0,a.nz*1.5))}function NR(n,e){let t=n.body;n.climbT+=e/.34;let i=Math.min(1,n.climbT);t.pos.y=n.from.y+(n.to.y-n.from.y)*Math.min(1,i*1.7);let s=lo(os((i-.35)/.65,0,1));t.pos.x=n.from.x+(n.to.x-n.from.x)*s,t.pos.z=n.from.z+(n.to.z-n.from.z)*s,n.anim=wt.climb,i>=1&&(n.state="free",n.anim=wt.normal,t.pos.copy(n.to),t.vel.set(0,0,0),t.grounded=!0,t.ground=n.ledge.c,n.jumps=0)}function LR(n){let e=en(n);return V.kind==="solo"?St[e].pos:V.track.has&&V.net?.status.partnerOnline?V.track.pos:null}function Kv(){let n=St.sun,e=LR("sun");return!e||!n.grounded||Ct.sun.state!=="free"||V.kind==="solo"&&Ct.moon.state!=="free"?!1:Math.hypot(e.x-n.pos.x,e.z-n.pos.z)<1.5&&Math.abs(e.y-n.pos.y)<1.2}function Zv(){let n=Ct.sun;if(n.carrying){let e=Rt.sun.yaw,t=St.sun,i=new P(Math.sin(e)*6.5+t.vel.x*.5,12.5,Math.cos(e)*6.5+t.vel.z*.5);return n.carrying=!1,Rt.sun.throwAnim(),$t.play("bounce"),V.kind==="solo"?Al(Ct.moon,i):V.net.sendEvent("throw",{v:[Bn(i.x),Bn(i.y),Bn(i.z)]}),!0}return Kv()?(n.carrying=!0,n.liftT=performance.now(),n.liftSeen=!1,n.notCarriedT=0,$t.play("jump2"),V.kind==="solo"?Ct.moon.state="carried":V.net.sendEvent("lift"),!0):!1}function DR(n,e){let t=n.body,i=V.kind==="solo"?St.sun.pos:V.track.has&&V.net.status.partnerOnline?V.track.pos:null;if(!i){Al(n,new P(0,4,0));return}t.pos.set(i.x,i.y+Wa.sun.h+.02,i.z),t.vel.set(0,0,0),t.grounded=!0,t.ground=null,n.anim=wt.carried,Rt[n.role].setYaw(Rt.sun.yaw),e&&(Al(n,new P(0,9.5,0)),V.kind==="solo"?Ct.sun.carrying=!1:V.net.sendEvent("drop"))}function Al(n,e){let t=n.body;n.state="free",n.anim=wt.normal,t.vel.copy(e),t.grounded=!1,t.ground=null,n.jumps=1,n.cut=!0,n.regrab=.25,n.airT=.2,n.coyote=0,Math.hypot(e.x,e.z)>2&&(n.wjLock=.5)}function OR(n){let e=n.body;n.state="free",n.anim=wt.normal,n.wallT=0,n.role==="sun"&&n.carrying&&(n.carrying=!1,V.kind==="solo"&&Al(Ct.moon,new P(0,2,0))),e.pos.copy(n.safe).add(Jv.set(0,.3,0)),e.vel.set(0,0,0),e.ground=null,e.grounded=!1,n.k++,On[n.role].ready=!1,Rt[n.role].root.position.copy(e.pos),n.role===V.active&&(Bv.classList.add("on"),setTimeout(()=>Bv.classList.remove("on"),180),$t.play("respawn"))}function FR(n){let e=Ct[V.role],t=e.body;(Math.hypot(t.vel.x,t.vel.z)>.05||!t.grounded)&&(e.lastMoving=n);let s=n-e.lastMoving<600?66:500;if(n-V.lastSend<s)return;V.lastSend=n;let r={t:Math.round(Tl()),v:[Bn(t.vel.x),Bn(t.vel.y),Bn(t.vel.z)],r:Bn(Rt[V.role].yaw),g:t.grounded?1:0,k:e.k,m:e.anim},o=null;e.state==="carried"&&V.track.has?(o=V.track.pos,r.b=en(V.role)):t.grounded&&t.ground&&(t.ground.id==="raft"?o=Jt.movers.raft.pos(Tl(),new P):t.ground===On[en(V.role)]&&V.track.has&&(o=V.track.pos),o&&(r.b=t.ground.id==="raft"?"raft":en(V.role))),r.p=o?[Bn(t.pos.x-o.x),Bn(t.pos.y-o.y),Bn(t.pos.z-o.z)]:[Bn(t.pos.x),Bn(t.pos.y),Bn(t.pos.z)],V.net.sendState(r)}function UR(n,e){return n==="raft"?Jt.movers.raft.pos(Tl(),e):n===V.role?e.copy(St[V.role].pos):null}var wl=new P;function BR(n){let e=V.cam;if(V.mode==="lobby"||V.mode==="connecting"){let a=V.t*.06,l=Hn.aspect<1?36:24;Hn.position.set(6+Math.sin(a)*l,10+Math.sin(V.t*.1)*1.5,-2+Math.cos(a)*l),Hn.lookAt(6,.5,-2);return}let t=Hi.takeCam();(t.x||t.y)&&(e.yaw-=t.x*.0065,e.pitch=os(e.pitch+t.y*.0045,-.2,1.2),e.lastDrag=V.t);let i=St[V.active],s=Math.hypot(i.vel.x,i.vel.z);if(s>1.5&&V.t-e.lastDrag>1.2){let a=Math.atan2(-i.vel.x,-i.vel.z),l=Ga(e.yaw,a);Math.abs(l)<1.75&&(e.yaw+=os(l,-1,1)*Math.min(1,s/$v)*.9*n)}wl.copy(i.pos),wl.y+=i.h*.8,e.target.x=yn(e.target.x,wl.x,12,n),e.target.z=yn(e.target.z,wl.z,12,n),e.target.y=yn(e.target.y,wl.y,i.grounded?8:3.5,n);let r=e.dist*(Hn.aspect<1?1.25:1),o=Math.cos(e.pitch);Hn.position.set(e.target.x+Math.sin(e.yaw)*o*r,e.target.y+Math.sin(e.pitch)*r,e.target.z+Math.cos(e.yaw)*o*r),Hn.position.y<e.target.y-1&&(Hn.position.y=e.target.y-1),Hn.lookAt(e.target)}var zu=Ft("#partner-arrow"),zi=new P;function kR(n){if(!n||V.mode!=="play"){zu.hidden=!0;return}let e=V.kind==="solo"?en(V.active):en(V.role);zi.copy(Rt[e].root.position),zi.y+=.6,zi.project(Hn);let t=zi.z>1;if(!t&&Math.abs(zi.x)<.95&&Math.abs(zi.y)<.92){zu.hidden=!0;return}let i=t?-zi.x:zi.x,s=t?-zi.y:zi.y,r=Math.max(Math.abs(i),Math.abs(s))||1;i/=r,s/=r;let o=innerWidth,a=innerHeight;zu.hidden=!1,Ft("#partner-arrow-icon").textContent=kn[e];let l=os((i*.5+.5)*o,34,o-34),c=os((-s*.5+.5)*a,70,l>o-240?a-200:a-34);zu.style.transform=`translate(${l}px, ${c}px)`}var kv=performance.now(),Hu=0,ym=0,zv=0,Sm={x:0,y:0};Xu();function jv(n){requestAnimationFrame(jv);let e=(n-kv)/1e3;kv=n;let t=Math.min(.05,Math.max(.001,e));V.t+=t;let i=Tl();Jt.update(i,V.t,t);let s=V.mode==="play"||V.mode==="menu",r=en(V.role),o=!1;if(s){if(V.kind!=="solo"){let d=V.net.status.partnerOnline&&V.track.sample(Date.now(),t,UR);o=!!d,d&&(Rt[r].root.position.copy(V.track.pos),Rt[r].setYaw(kh(Rt[r].yaw,V.track.yaw,18,t)),Gh(On[r],V.track.pos,St[r].h)),On[r].disabled=!d||V.track.mode===wt.carried;let p=Ct.sun;V.role==="sun"&&p.carrying&&(V.track.mode===wt.carried?(p.liftSeen=!0,p.notCarriedT=0):(!p.liftSeen&&performance.now()-p.liftT>4e3||p.liftSeen&&(p.notCarriedT+=t)>.6)&&(p.carrying=!1))}else o=!0,On.moon.disabled=Ct.moon.state==="carried";V.cooldown.ability-=t,V.cooldown.heart-=t;let a=Hi.consume("jump");if(Hi.consume("ability")&&V.cooldown.ability<=0){V.cooldown.ability=.45;let d=V.kind==="solo"?V.active:V.role;d==="sun"&&Zv()||(qv(d),V.net.sendEvent("ability"))}if(Hi.consume("heart")&&V.cooldown.heart<=0){V.cooldown.heart=.8;let d=V.kind==="solo"?V.active:V.role;bi.hearts(Rt[d].root.position,d==="sun"?16754253:11832575),$t.play("heart"),V.net.sendEvent("heart")}Hi.consume("swap")&&V.kind==="solo"&&(V.active=en(V.active),document.body.classList.remove("sun","moon"),document.body.classList.add(V.active),Gn.toast(`Now playing ${kn[V.active]} ${vn[V.active]}`));let l=V.kind==="solo"?Io:[V.role];for(let d of l){let p=d===V.active&&V.mode==="play";xm(Ct[d],p?Hi.state.move:Sm,p&&a,p&&Hi.state.jumpHeld,t)}for(let d of l){Gh(On[d],St[d].pos,St[d].h);let p=St[d],_=Rt[d];_.root.position.copy(p.pos);let m=Ct[d],g=Math.hypot(p.vel.x,p.vel.z);m.state==="free"&&m.anim===wt.wall?_.setYaw(kh(_.yaw,Math.atan2(-m.wallNX,-m.wallNZ),14,t)):m.state==="free"&&g>.4&&_.setYaw(kh(_.yaw,Math.atan2(p.vel.x,p.vel.z),14,t))}let c=Jt.towerTop,h=d=>d&&d.y>c.y-.15&&d.x>c.x0&&d.x<c.x1&&d.z>c.z0&&d.z<c.z1;(l.some(d=>h(St[d].pos))||o&&V.kind!=="solo"&&h(V.track.pos))&&Jt.setTowerOccupied(!0);let f=(V.kind==="solo"?V.active:V.role)==="sun"?Ct.sun.carrying?"Throw":Kv()?"Lift":"Shine":"Tide";f!==V.abilityLabel&&(V.abilityLabel=f,Ft("#ability-label").textContent=f);for(let d of Jt.stars)if(!d.collected)for(let p of l){let _=St[p];if(Math.abs(_.pos.x-d.pos.x)<.95&&Math.abs(_.pos.z-d.pos.z)<.95&&d.pos.y-_.pos.y>-.6&&d.pos.y-_.pos.y<1.6){d.collected=!0,bi.sparks(d.pos.clone().setY(d.pos.y-.6),16769658,24),$t.play("star"),V.net.collectStar(d.id),Yv(!0);break}}V.kind!=="solo"&&FR(n)}for(let a of Io){let l=Rt[a],c=!s||V.kind==="solo"||a===V.role||o;if(l.root.visible=c,!!c)if(s&&(V.kind==="solo"||a===V.role)){let h=St[a];l.animate(t,{speed:Math.hypot(h.vel.x,h.vel.z),grounded:h.grounded,vy:h.vel.y,mode:Ct[a].anim})}else if(s){let h=V.track.vel;l.animate(t,{speed:Math.hypot(h.x,h.z),grounded:V.track.grounded,vy:h.y,mode:V.track.mode})}else l.animate(t,{speed:0,grounded:!0,vy:0,mode:wt.normal})}if(BR(t),kR(o),bi.update(t,V.t),Ro.render(t),e<.1&&(Hu+=e,ym++),Hu>2.5){let a=Hu/ym;zv=1/a,a>1/48&&Gu<Vv.length-1&&V.t>4&&!ar.has("q")&&(Gu++,Xu()),Hu=0,ym=0}MR&&(Ft("#debug").hidden=!1,Ft("#debug").textContent=`fps ${zv.toFixed(0)}  q${Gu} dpr ${Hs.getPixelRatio()}
delay ${Math.round(V.track.delay??0)}ms  jitter ${V.track.jitter()}ms  buf ${V.track.buf.length}
ping ${V.net?.status.ping??"-"}  partner ${V.net?.status.partnerPing??"-"}
pos ${St[V.active].pos.toArray().map(a=>a.toFixed(1)).join(", ")}`)}requestAnimationFrame(jv);window.__eclipse={G:V,bodies:St,chars:Rt,world:Jt,input:Hi,pcols:On,ctls:Ct,sim(n,e={}){let t=e.role||V.active,i=1/60,s=[],r=e.t0??Tl();for(let o=0;o<n;o++){r+=1e3/60,Jt.update(r,V.t,i);for(let a of Io)Gh(On[a],St[a].pos,St[a].h);if(V.kind==="solo"&&(On.moon.disabled=Ct.moon.state==="carried"),xm(Ct[t],e.move||Sm,(e.jumpAt||[]).includes(o),e.hold??!0,i),V.kind==="solo")for(let a of Io)a!==t&&xm(Ct[a],Sm,(e.otherJumpAt||[]).includes(o),!1,i);e.actionAt&&e.actionAt.includes(o)&&Zv(),e.every&&o%e.every===0&&s.push([+St[t].pos.x.toFixed(2),+St[t].pos.y.toFixed(2),+St[t].pos.z.toFixed(2),St[t].grounded?1:0,Ct[t].state[0]+Ct[t].anim])}return{pos:St[t].pos.toArray().map(o=>+o.toFixed(3)),grounded:St[t].grounded,state:Ct[t].state,anim:Ct[t].anim,trace:s}}};
