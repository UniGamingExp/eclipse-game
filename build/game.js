var Hg=0,jd=1,Gg=2;var ur=1,Vg=2,ho=3,Ds=0,xn=1,Rn=2,as=0,uo=1,Os=2,Qd=3,ef=4,Wg=5;var dr=100,Xg=101,qg=102,Yg=103,$g=104,Jg=200,Kg=201,Zg=202,jg=203,tf=204,nf=205,Qg=206,e0=207,t0=208,n0=209,i0=210,s0=211,r0=212,o0=213,a0=214,mc=0,gc=1,_c=2,Zr=3,yc=4,xc=5,vc=6,Sc=7,sf=0,l0=1,c0=2,Ui=0,La=1,Da=2,Oa=3,Fa=4,Ua=5,Ba=6,fr=7;var rf=300,pr=301,fo=302,Kc=303,Zc=304,Mc=1e3,Ri=1001,bc=1002,fn=1003,h0=1004;var ka=1005;var Ln=1006,jc=1007;var ls=1008;var qn=1009,of=1010,af=1011,po=1012,Qc=1013,Si=1014,ci=1015,on=1016,eh=1017,th=1018,mr=1020,lf=35902,cf=35899,hf=1021,uf=1022,Mi=1023,ts=1026,cs=1027,nh=1028,ih=1029,Fs=1030,sh=1031;var rh=1033,za=33776,Ha=33777,Ga=33778,Va=33779,oh=35840,ah=35841,lh=35842,ch=35843,hh=36196,uh=37492,dh=37496,fh=37488,ph=37489,Wa=37490,mh=37491,gh=37808,_h=37809,yh=37810,xh=37811,vh=37812,Sh=37813,Mh=37814,bh=37815,Eh=37816,wh=37817,Th=37818,Ah=37819,Ch=37820,Rh=37821,Ih=36492,Ph=36494,Nh=36495,Lh=36283,Dh=36284,Xa=36285,Oh=36286;var ta=2300,Ec=2301,fc=2302,kd=2303,zd=2400,Hd=2401,Gd=2402;var u0=3200;var Fh=0,d0=1,hs="",yn="srgb",na="srgb-linear",ia="linear",xt="srgb";var pc=7680;var f0=519,p0=512,m0=513,g0=514,df=515,_0=516,y0=517,ff=518,pf=519,x0=35044;var mf="300 es",li=2e3,jr=2001;function Uv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Bv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function v0(){let n=sa("canvas");return n.style.display="block",n}var lg={},Qr=null;function gf(...n){let e="THREE."+n.shift();Qr?Qr("log",e,...n):console.log(e,...n)}function S0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=S0(n);let e="THREE."+n.shift();if(Qr)Qr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function We(...n){n=S0(n);let e="THREE."+n.shift();if(Qr)Qr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ir(...n){let e=n.join(" ");e in lg||(lg[e]=!0,Ve(...n))}function M0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var b0={[mc]:mc,[_c]:vc,[yc]:yc,[Zr]:xc,[gc]:gc,[vc]:_c,[Sc]:Sc,[xc]:Zr},Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pd=Math.PI/180,wc=180/Math.PI;function mo(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function kv(n,e){return(n%e+e)%e}function md(n,e,t){return(1-t)*n+t*e}function E0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _f(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zv(n,e){if(e.constructor===Float32Array)return n;let t=_f(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Hv(n,e){if(e.constructor===Float32Array)return n;let t=_f(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var bf=class bf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bf.prototype.isVector2=!0;var re=bf,Ni=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],y=r[o+3];if(u!==y||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*y;m<0&&(f=-f,d=-d,p=-p,y=-y,m=-m);let g=1-a;if(m<.9995){let x=Math.acos(m),v=Math.sin(x);g=Math.sin(g*x)/v,a=Math.sin(a*x)/v,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+y*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+y*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ef=class Ef{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gd.copy(this).projectOnVector(e),this.sub(gd)}reflect(e){return this.sub(gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ef.prototype.isVector3=!0;var N=Ef,gd=new N,cg=new Ni,wf=class wf{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],y=s[0],m=s[3],g=s[6],x=s[1],v=s[4],M=s[7],T=s[2],w=s[5],_=s[8];return r[0]=o*y+a*x+l*T,r[3]=o*m+a*v+l*w,r[6]=o*g+a*M+l*_,r[1]=c*y+h*x+u*T,r[4]=c*m+h*v+u*w,r[7]=c*g+h*M+u*_,r[2]=f*y+d*x+p*T,r[5]=f*m+d*v+p*w,r[8]=f*g+d*M+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=u*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=f*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=d*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_d.makeScale(e,t)),this}rotate(e){return ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_d.makeRotation(-e)),this}translate(e,t){return ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_d.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wf.prototype.isMatrix3=!0;var Ye=wf,_d=new Ye,hg=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ug=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gv(){let n={enabled:!0,workingColorSpace:na,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=Kr(s.r),s.g=Kr(s.g),s.b=Kr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hs?ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[na]:{primaries:e,whitePoint:i,transfer:ia,toXYZ:hg,fromXYZ:ug,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:hg,fromXYZ:ug,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}var lt=Gv();function es(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Kr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Fr,Tc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fr===void 0&&(Fr=sa("canvas")),Fr.width=e.width,Fr.height=e.height;let s=Fr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Fr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=sa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(es(t[i]/255)*255):t[i]=es(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vv=0,eo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yd(s[o].image)):r.push(yd(s[o]))}else r=yd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function yd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Tc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var Wv=0,xd=new N,Dn=class n extends Pi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ri,s=Ri,r=Ln,o=ls,a=Mi,l=qn,c=n.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=mo(),this.name="",this.source=new eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xd).x}get height(){return this.source.getSize(xd).y}get depth(){return this.source.getSize(xd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mc:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mc:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=rf;Dn.DEFAULT_ANISOTROPY=1;var Tf=class Tf{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(d+1)/2,T=(g+1)/2,w=(h+f)/4,_=(u+y)/4,S=(p+m)/4;return v>M&&v>T?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=w/i,r=_/i):M>T?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=w/s,r=S/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=_/r,s=S/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-y)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tf.prototype.isVector4=!0;var Bt=Tf,Ac=class extends Pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Dn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new eo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Ac{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ra=class extends Dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cc=class extends Dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Jc=class Jc{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,p,y,m)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,p,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ur.setFromMatrixColumn(e,0).length(),r=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,y=c*u;t[0]=f+y*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,y=c*u;t[0]=f-y*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,y=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+y,t[1]=l*u,t[5]=y*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,y=a*c;t[0]=l*h,t[4]=y-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-y*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+y,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xv,e,qv)}lookAt(e,t,i){let s=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ms.crossVectors(i,Qn),Ms.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ms.crossVectors(i,Qn)),Ms.normalize(),Gl.crossVectors(Qn,Ms),s[0]=Ms.x,s[4]=Gl.x,s[8]=Qn.x,s[1]=Ms.y,s[5]=Gl.y,s[9]=Qn.y,s[2]=Ms.z,s[6]=Gl.z,s[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],y=i[6],m=i[10],g=i[14],x=i[3],v=i[7],M=i[11],T=i[15],w=s[0],_=s[4],S=s[8],C=s[12],A=s[1],P=s[5],D=s[9],B=s[13],I=s[2],k=s[6],X=s[10],G=s[14],oe=s[3],q=s[7],Q=s[11],Z=s[15];return r[0]=o*w+a*A+l*I+c*oe,r[4]=o*_+a*P+l*k+c*q,r[8]=o*S+a*D+l*X+c*Q,r[12]=o*C+a*B+l*G+c*Z,r[1]=h*w+u*A+f*I+d*oe,r[5]=h*_+u*P+f*k+d*q,r[9]=h*S+u*D+f*X+d*Q,r[13]=h*C+u*B+f*G+d*Z,r[2]=p*w+y*A+m*I+g*oe,r[6]=p*_+y*P+m*k+g*q,r[10]=p*S+y*D+m*X+g*Q,r[14]=p*C+y*B+m*G+g*Z,r[3]=x*w+v*A+M*I+T*oe,r[7]=x*_+v*P+M*k+T*q,r[11]=x*S+v*D+M*X+T*Q,r[15]=x*C+v*B+M*G+T*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],y=e[7],m=e[11],g=e[15],x=l*d-c*f,v=a*d-c*u,M=a*f-l*u,T=o*d-c*h,w=o*f-l*h,_=o*u-a*h;return t*(y*x-m*v+g*M)-i*(p*x-m*T+g*w)+s*(p*v-y*T+g*_)-r*(p*M-y*w+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],y=e[13],m=e[14],g=e[15],x=t*a-i*o,v=t*l-s*o,M=t*c-r*o,T=i*l-s*a,w=i*c-r*a,_=s*c-r*l,S=h*y-u*p,C=h*m-f*p,A=h*g-d*p,P=u*m-f*y,D=u*g-d*y,B=f*g-d*m,I=x*B-v*D+M*P+T*A-w*C+_*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return e[0]=(a*B-l*D+c*P)*k,e[1]=(s*D-i*B-r*P)*k,e[2]=(y*_-m*w+g*T)*k,e[3]=(f*w-u*_-d*T)*k,e[4]=(l*A-o*B-c*C)*k,e[5]=(t*B-s*A+r*C)*k,e[6]=(m*M-p*_-g*v)*k,e[7]=(h*_-f*M+d*v)*k,e[8]=(o*D-a*A+c*S)*k,e[9]=(i*A-t*D-r*S)*k,e[10]=(p*w-y*M+g*x)*k,e[11]=(u*M-h*w-d*x)*k,e[12]=(a*C-o*P-l*S)*k,e[13]=(t*P-i*C+s*S)*k,e[14]=(y*v-p*T-m*x)*k,e[15]=(h*T-u*v+f*x)*k,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,y=o*h,m=o*u,g=a*u,x=l*c,v=l*h,M=l*u,T=i.x,w=i.y,_=i.z;return s[0]=(1-(y+g))*T,s[1]=(d+M)*T,s[2]=(p-v)*T,s[3]=0,s[4]=(d-M)*w,s[5]=(1-(f+g))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(p+v)*_,s[9]=(m-x)*_,s[10]=(1-(f+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ur.set(s[0],s[1],s[2]).length(),a=Ur.set(s[4],s[5],s[6]).length(),l=Ur.set(s[8],s[9],s[10]).length();r<0&&(o=-o),gi.copy(this);let c=1/o,h=1/a,u=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=u,gi.elements[9]*=u,gi.elements[10]*=u,t.setFromRotationMatrix(gi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=li,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,y;if(l)p=r/(o-r),y=o*r/(o-r);else if(a===li)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===jr)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=li,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,y;if(l)p=1/(o-r),y=o/(o-r);else if(a===li)p=-2/(o-r),y=-(o+r)/(o-r);else if(a===jr)p=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Jc.prototype.isMatrix4=!0;var Rt=Jc,Ur=new N,gi=new Rt,Xv=new N(0,0,0),qv=new N(1,1,1),Ms=new N,Gl=new N,Qn=new N,dg=new Rt,fg=new Ni,ns=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fg.setFromEuler(this),this.setFromQuaternion(fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ns.DEFAULT_ORDER="XYZ";var oa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yv=0,pg=new N,Br=new Ni,Ji=new Rt,Vl=new N,qo=new N,$v=new N,Jv=new Ni,mg=new N(1,0,0),gg=new N(0,1,0),_g=new N(0,0,1),yg={type:"added"},Kv={type:"removed"},kr={type:"childadded",child:null},vd={type:"childremoved",child:null},Kt=class n extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new ns,i=new Ni,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ye}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(mg,e)}rotateY(e){return this.rotateOnAxis(gg,e)}rotateZ(e){return this.rotateOnAxis(_g,e)}translateOnAxis(e,t){return pg.copy(e).applyQuaternion(this.quaternion),this.position.add(pg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mg,e)}translateY(e){return this.translateOnAxis(gg,e)}translateZ(e){return this.translateOnAxis(_g,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vl.copy(e):Vl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(qo,Vl,this.up):Ji.lookAt(Vl,qo,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),Br.setFromRotationMatrix(Ji),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yg),kr.child=e,this.dispatchEvent(kr),kr.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kv),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yg),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,$v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,Jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Kt.DEFAULT_UP=new N(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yt=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zv={type:"move"},to=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function Sd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ee=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=kv(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Sd(o,r,e+1/3),this.g=Sd(o,r,e),this.b=Sd(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=yn){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){let i=w0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return lt.workingToColorSpace(Tn.copy(this),e),Math.round(rt(Tn.r*255,0,255))*65536+Math.round(rt(Tn.g*255,0,255))*256+Math.round(rt(Tn.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Tn.copy(this),t);let i=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=yn){lt.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,i=Tn.g,s=Tn.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(bs),this.setHSL(bs.h+e,bs.s+t,bs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bs),e.getHSL(Wl);let i=md(bs.h,Wl.h,t),s=md(bs.s,Wl.s,t),r=md(bs.l,Wl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new Ee;Ee.NAMES=w0;var sr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},aa=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_i=new N,Ki=new N,Md=new N,Zi=new N,zr=new N,Hr=new N,xg=new N,bd=new N,Ed=new N,wd=new N,Td=new Bt,Ad=new Bt,Cd=new Bt,As=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_i.subVectors(e,t),s.cross(_i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_i.subVectors(s,t),Ki.subVectors(i,t),Md.subVectors(e,t);let o=_i.dot(_i),a=_i.dot(Ki),l=_i.dot(Md),c=Ki.dot(Ki),h=Ki.dot(Md),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zi.x),l.addScaledVector(o,Zi.y),l.addScaledVector(a,Zi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Td.setScalar(0),Ad.setScalar(0),Cd.setScalar(0),Td.fromBufferAttribute(e,t),Ad.fromBufferAttribute(e,i),Cd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Td,r.x),o.addScaledVector(Ad,r.y),o.addScaledVector(Cd,r.z),o}static isFrontFacing(e,t,i,s){return _i.subVectors(i,t),Ki.subVectors(e,t),_i.cross(Ki).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),_i.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;zr.subVectors(s,i),Hr.subVectors(r,i),bd.subVectors(e,i);let l=zr.dot(bd),c=Hr.dot(bd);if(l<=0&&c<=0)return t.copy(i);Ed.subVectors(e,s);let h=zr.dot(Ed),u=Hr.dot(Ed);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(zr,o);wd.subVectors(e,r);let d=zr.dot(wd),p=Hr.dot(wd);if(p>=0&&d<=p)return t.copy(r);let y=d*c-l*p;if(y<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Hr,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return xg.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(xg,a);let g=1/(m+y+f);return o=y*g,a=f*g,t.copy(i).addScaledVector(zr,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Li=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yi):yi.fromBufferAttribute(r,o),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xl.copy(i.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),ql.subVectors(this.max,Yo),Gr.subVectors(e.a,Yo),Vr.subVectors(e.b,Yo),Wr.subVectors(e.c,Yo),Es.subVectors(Vr,Gr),ws.subVectors(Wr,Vr),Qs.subVectors(Gr,Wr);let t=[0,-Es.z,Es.y,0,-ws.z,ws.y,0,-Qs.z,Qs.y,Es.z,0,-Es.x,ws.z,0,-ws.x,Qs.z,0,-Qs.x,-Es.y,Es.x,0,-ws.y,ws.x,0,-Qs.y,Qs.x,0];return!Rd(t,Gr,Vr,Wr,ql)||(t=[1,0,0,0,1,0,0,0,1],!Rd(t,Gr,Vr,Wr,ql))?!1:(Yl.crossVectors(Es,ws),t=[Yl.x,Yl.y,Yl.z],Rd(t,Gr,Vr,Wr,ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ji=[new N,new N,new N,new N,new N,new N,new N,new N],yi=new N,Xl=new Li,Gr=new N,Vr=new N,Wr=new N,Es=new N,ws=new N,Qs=new N,Yo=new N,ql=new N,Yl=new N,er=new N;function Rd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){er.fromArray(n,r);let a=s.x*Math.abs(er.x)+s.y*Math.abs(er.y)+s.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),h=i.dot(er);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var nn=new N,$l=new re,jv=0,Nn=class extends Pi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=x0,this.updateRanges=[],this.gpuType=ci,this.version=0,this._normalizationScale=e!==void 0?_f(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$l.fromBufferAttribute(this,t),$l.applyMatrix3(e),this.setXY(t,$l.x,$l.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zv(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hv(e,this.array)}};var la=class extends Nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ca=class extends Nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var je=class extends Nn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Qv=new Li,$o=new N,Id=new N,is=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Qv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);let t=$o.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector($o,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(Id)),this.expandByPoint($o.copy(e.center).sub(Id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},eS=0,ai=new Rt,Pd=new Kt,Xr=new N,ei=new Li,Jo=new Li,dn=new N,kt=class n extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uv(e)?ca:la)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,i){return ai.makeTranslation(e,t,i),this.applyMatrix4(ai),this}scale(e,t,i){return ai.makeScale(e,t,i),this.applyMatrix4(ai),this}lookAt(e){return Pd.lookAt(e),Pd.updateMatrix(),this.applyMatrix4(Pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(ei.min,Jo.min),ei.expandByPoint(dn),dn.addVectors(ei.max,Jo.max),ei.expandByPoint(dn)):(ei.expandByPoint(Jo.min),ei.expandByPoint(Jo.max))}ei.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(dn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dn.fromBufferAttribute(a,c),l&&(Xr.fromBufferAttribute(e,c),dn.add(Xr)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Nn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)a[C]=new N,l[C]=new N;let h=new N,u=new N,f=new N,d=new re,p=new re,y=new re,m=new N,g=new N;function x(C,A,P){c[C]=c[A]=c[P]=1,h.fromBufferAttribute(i,C),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,P),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,A),y.fromBufferAttribute(r,P),u.sub(h),f.sub(h),p.sub(d),y.sub(d);let D=1/(p.x*y.y-y.x*p.y);isFinite(D)&&(m.copy(u).multiplyScalar(y.y).addScaledVector(f,-p.y).multiplyScalar(D),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(D),a[C].add(m),a[A].add(m),a[P].add(m),l[C].add(g),l[A].add(g),l[P].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,A=v.length;C<A;++C){let P=v[C],D=P.start,B=P.count;for(let I=D,k=D+B;I<k;I+=3)x(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new N,T=new N,w=new N,_=new N;function S(C){w.fromBufferAttribute(s,C),_.copy(w);let A=a[C];M.copy(A),M.sub(w.multiplyScalar(w.dot(A))).normalize(),T.crossVectors(_,A);let D=T.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,D)}for(let C=0,A=i.count;C<A;++C)c[C]&&S(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Nn(f,h,u)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Nd=new N,tS=new N,nS=new Ye,xi=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Nd.subVectors(i,t).cross(tS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Nd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||nS.getNormalMatrix(e),s=this.coplanarPoint(Nd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},iS=0,ss=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=uo,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tf,this.blendDst=nf,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pc,this.stencilZFail=pc,this.stencilZPass=pc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ee().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new xi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new re().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Qi=new N,Ld=new N,Jl=new N,Kl=new N,ha=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ld.copy(e).add(t).multiplyScalar(.5),Jl.copy(t).sub(e).normalize(),Kl.copy(this.origin).sub(Ld);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Jl),a=Kl.dot(this.direction),l=-Kl.dot(Jl),c=Kl.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ld).addScaledVector(Jl,f),d}intersectSphere(e,t){if(e.radius<0)return null;Qi.subVectors(e.center,this.origin);let i=Qi.dot(this.direction),s=Qi.dot(Qi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,y=t.y-o.y,m=t.z-o.z,g=i.x-o.x,x=i.y-o.y,v=i.z-o.z,M=Math.abs(l),T=Math.abs(c),w=Math.abs(h),_,S,C,A,P,D,B,I,k,X,G,oe;if(M>=T&&M>=w?(C=l,D=u,k=p,oe=g,l>=0?(_=c,S=h,A=f,P=d,B=y,I=m,X=x,G=v):(_=h,S=c,A=d,P=f,B=m,I=y,X=v,G=x)):T>=w?(C=c,D=f,k=y,oe=x,c>=0?(_=h,S=l,A=d,P=u,B=m,I=p,X=v,G=g):(_=l,S=h,A=u,P=d,B=p,I=m,X=g,G=v)):(C=h,D=d,k=m,oe=v,h>=0?(_=l,S=c,A=u,P=f,B=p,I=y,X=g,G=x):(_=c,S=l,A=f,P=u,B=y,I=p,X=x,G=g)),C===0)return null;let q=_/C,Q=S/C,Z=1/C,Ae=A-q*D,Le=P-Q*D,$=B-q*k,de=I-Q*k,Re=X-q*oe,Be=G-Q*oe,me=Re*de-Be*$,Oe=Ae*Be-Le*Re,dt=$*Le-de*Ae;if(s){if(me<0||Oe<0||dt<0)return null}else if((me<0||Oe<0||dt<0)&&(me>0||Oe>0||dt>0))return null;let He=me+Oe+dt;if(He===0)return null;let qe=Z*(me*D+Oe*k+dt*oe);return(He>0?qe<0:qe>0)?null:this.at(qe/He,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cn=class extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vg=new Rt,tr=new ha,Zl=new is,Sg=new N,jl=new N,Ql=new N,ec=new N,Dd=new N,tc=new N,Mg=new N,nc=new N,Ut=class extends Kt{constructor(e=new kt,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){tc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Dd.fromBufferAttribute(u,e),o?tc.addScaledVector(Dd,h):tc.addScaledVector(Dd.sub(t),h))}t.add(tc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(r),tr.copy(e.ray).recast(e.near),!(Zl.containsPoint(tr.origin)===!1&&(tr.intersectSphere(Zl,Sg)===null||tr.origin.distanceToSquared(Sg)>(e.far-e.near)**2))&&(vg.copy(r).invert(),tr.copy(e.ray).applyMatrix4(vg),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){let m=f[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,T=v;M<T;M+=3){let w=a.getX(M),_=a.getX(M+1),S=a.getX(M+2);s=ic(this,g,e,i,c,h,u,w,_,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=p,g=y;m<g;m+=3){let x=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);s=ic(this,o,e,i,c,h,u,x,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){let m=f[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,T=v;M<T;M+=3){let w=M,_=M+1,S=M+2;s=ic(this,g,e,i,c,h,u,w,_,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=p,g=y;m<g;m+=3){let x=m,v=m+1,M=m+2;s=ic(this,o,e,i,c,h,u,x,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function sS(n,e,t,i,s,r,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ds,a),l===null)return null;nc.copy(a),nc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(nc);return c<t.near||c>t.far?null:{distance:c,point:nc.clone(),object:n}}function ic(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,jl),n.getVertexPosition(l,Ql),n.getVertexPosition(c,ec);let h=sS(n,e,t,i,jl,Ql,ec,Mg);if(h){let u=new N;As.getBarycoord(Mg,jl,Ql,ec,u),s&&(h.uv=As.getInterpolatedAttribute(s,a,l,c,u,new re)),r&&(h.uv1=As.getInterpolatedAttribute(r,a,l,c,u,new re)),o&&(h.normal=As.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};As.getNormal(jl,Ql,ec,f.normal),h.face=f,h.barycoord=u}return h}var ua=class extends Dn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=fn,h=fn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var da=class extends Nn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qr=new Rt,bg=new Rt,sc=[],Eg=new Li,rS=new Rt,Ko=new Ut,Zo=new is,Di=class extends Ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new da(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,rS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qr),Eg.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(Eg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qr),Zo.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(Zo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ko.geometry=this.geometry,Ko.material=this.material,Ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zo.copy(this.boundingSphere),Zo.applyMatrix4(i),e.ray.intersectsSphere(Zo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qr),bg.multiplyMatrices(i,qr),Ko.matrixWorld=bg,Ko.raycast(e,sc);for(let o=0,a=sc.length;o<a;o++){let l=sc[o];l.instanceId=r,l.object=this,t.push(l)}sc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ua(new Float32Array(s*this.count),s,this.count,nh,ci));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},nr=new is,oS=new re(.5,.5),rc=new N,Cs=class{constructor(e=new xi,t=new xi,i=new xi,s=new xi,r=new xi,o=new xi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],y=r[9],m=r[10],g=r[11],x=r[12],v=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-o,d-h,g-p,T-x).normalize(),s[1].setComponents(c+o,d+h,g+p,T+x).normalize(),s[2].setComponents(c+a,d+u,g+y,T+v).normalize(),s[3].setComponents(c-a,d-u,g-y,T-v).normalize(),i)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,d-f,g-m,T-M).normalize();else if(s[4].setComponents(c-l,d-f,g-m,T-M).normalize(),t===li)s[5].setComponents(c+l,d+f,g+m,T+M).normalize();else if(t===jr)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){nr.center.set(0,0,0);let t=oS.distanceTo(e.center);return nr.radius=.7071067811865476+t,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(rc.x=s.normal.x>0?e.max.x:e.min.x,rc.y=s.normal.y>0?e.max.y:e.min.y,rc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wg=new Rt,Rc=class n{constructor(){this.coordinateSystem=li,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];wg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Cs),i[s].setFromProjectionMatrix(wg,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Cs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Rs=class extends ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tg=new Rt,Vd=new ha,oc=new is,ac=new N,rr=class extends Kt{constructor(e=new kt,t=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oc.copy(i.boundingSphere),oc.applyMatrix4(s),oc.radius+=r,e.ray.intersectsSphere(oc)===!1)return;Tg.copy(s).invert(),Vd.copy(e.ray).applyMatrix4(Tg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,y=d;p<y;p++){let m=c.getX(p);ac.fromBufferAttribute(u,m),Ag(ac,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,y=d;p<y;p++)ac.fromBufferAttribute(u,p),Ag(ac,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ag(n,e,t,i,s,r,o){let a=Vd.distanceSqToPoint(n);if(a<t){let l=new N;Vd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var fa=class extends Dn{constructor(e=[],t=pr,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rs=class extends Dn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var os=class extends Dn{constructor(e,t,i=Si,s,r,o,a=fn,l=fn,c,h=ts,u=1){if(h!==ts&&h!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},pa=class extends os{constructor(e,t=Si,i=pr,s,r,o=fn,a=fn,l,c=ts){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ma=class extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},On=class n extends kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(u,2));function p(y,m,g,x,v,M,T,w,_,S,C){let A=M/_,P=T/S,D=M/2,B=T/2,I=w/2,k=_+1,X=S+1,G=0,oe=0,q=new N;for(let Q=0;Q<X;Q++){let Z=Q*P-B;for(let Ae=0;Ae<k;Ae++){let Le=Ae*A-D;q[y]=Le*x,q[m]=Z*v,q[g]=I,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[g]=w>0?1:-1,h.push(q.x,q.y,q.z),u.push(Ae/_),u.push(1-Q/S),G+=1}}for(let Q=0;Q<S;Q++)for(let Z=0;Z<_;Z++){let Ae=f+Z+k*Q,Le=f+Z+k*(Q+1),$=f+(Z+1)+k*(Q+1),de=f+(Z+1)+k*Q;l.push(Ae,Le,de),l.push(Le,$,de),oe+=6}a.addGroup(d,oe,C),d+=oe,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ga=class n extends kt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=i*2+r,y=s+1,m=new N,g=new N;for(let x=0;x<=p;x++){let v=0,M=0,T=0,w=0;if(x<=i){let C=x/i,A=C*Math.PI/2;M=-h-e*Math.cos(A),T=e*Math.sin(A),w=-e*Math.cos(A),v=C*u}else if(x<=i+r){let C=(x-i)/r;M=-h+C*t,T=e,w=0,v=u+C*f}else{let C=(x-i-r)/i,A=C*Math.PI/2;M=h+e*Math.sin(A),T=e*Math.cos(A),w=e*Math.sin(A),v=u+f+C*u}let _=Math.max(0,Math.min(1,v/d)),S=0;x===0?S=.5/s:x===p&&(S=-.5/s);for(let C=0;C<=s;C++){let A=C/s,P=A*Math.PI*2,D=Math.sin(P),B=Math.cos(P);g.x=-T*B,g.y=M,g.z=T*D,a.push(g.x,g.y,g.z),m.set(-T*B,w,T*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+S,_)}if(x>0){let C=(x-1)*y;for(let A=0;A<s;A++){let P=C+A,D=C+A+1,B=x*y+A,I=x*y+A+1;o.push(P,D,B),o.push(D,I,B)}}}this.setIndex(o),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Vt=class n extends kt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,y=[],m=i/2,g=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(d,2));function x(){let M=new N,T=new N,w=0,_=(t-e)/i;for(let S=0;S<=r;S++){let C=[],A=S/r,P=A*(t-e)+e;for(let D=0;D<=s;D++){let B=D/s,I=B*l+a,k=Math.sin(I),X=Math.cos(I);T.x=P*k,T.y=-A*i+m,T.z=P*X,u.push(T.x,T.y,T.z),M.set(k,_,X).normalize(),f.push(M.x,M.y,M.z),d.push(B,1-A),C.push(p++)}y.push(C)}for(let S=0;S<s;S++)for(let C=0;C<r;C++){let A=y[C][S],P=y[C+1][S],D=y[C+1][S+1],B=y[C][S+1];(e>0||C!==0)&&(h.push(A,P,B),w+=3),(t>0||C!==r-1)&&(h.push(P,D,B),w+=3)}c.addGroup(g,w,0),g+=w}function v(M){let T=p,w=new re,_=new N,S=0,C=M===!0?e:t,A=M===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*A,0),f.push(0,A,0),d.push(.5,.5),p++;let P=p;for(let D=0;D<=s;D++){let I=D/s*l+a,k=Math.cos(I),X=Math.sin(I);_.x=C*X,_.y=m*A,_.z=C*k,u.push(_.x,_.y,_.z),f.push(0,A,0),w.x=k*.5+.5,w.y=X*.5*A+.5,d.push(w.x,w.y),p++}for(let D=0;D<s;D++){let B=T+D,I=P+D;M===!0?h.push(I,I+1,B):h.push(I+1,I,B),S+=3}c.addGroup(g,S,M===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fn=class n extends Vt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},no=class n extends kt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let v=new N,M=new N,T=new N;for(let w=0;w<t.length;w+=3)d(t[w+0],v),d(t[w+1],M),d(t[w+2],T),l(v,M,T,x)}function l(x,v,M,T){let w=T+1,_=[];for(let S=0;S<=w;S++){_[S]=[];let C=x.clone().lerp(M,S/w),A=v.clone().lerp(M,S/w),P=w-S;for(let D=0;D<=P;D++)D===0&&S===w?_[S][D]=C:_[S][D]=C.clone().lerp(A,D/P)}for(let S=0;S<w;S++)for(let C=0;C<2*(w-S)-1;C++){let A=Math.floor(C/2);C%2===0?(f(_[S][A+1]),f(_[S+1][A]),f(_[S][A])):(f(_[S][A+1]),f(_[S+1][A+1]),f(_[S+1][A]))}}function c(x){let v=new N;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(x),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let x=new N;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let M=m(x)/2/Math.PI+.5,T=g(x)/Math.PI+.5;o.push(M,1-T)}p(),u()}function u(){for(let x=0;x<o.length;x+=6){let v=o[x+0],M=o[x+2],T=o[x+4],w=Math.max(v,M,T),_=Math.min(v,M,T);w>.9&&_<.1&&(v<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,v){let M=x*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function p(){let x=new N,v=new N,M=new N,T=new N,w=new re,_=new re,S=new re;for(let C=0,A=0;C<r.length;C+=9,A+=6){x.set(r[C+0],r[C+1],r[C+2]),v.set(r[C+3],r[C+4],r[C+5]),M.set(r[C+6],r[C+7],r[C+8]),w.set(o[A+0],o[A+1]),_.set(o[A+2],o[A+3]),S.set(o[A+4],o[A+5]),T.copy(x).add(v).add(M).divideScalar(3);let P=m(T);y(w,A+0,x,P),y(_,A+2,v,P),y(S,A+4,M,P)}}function y(x,v,M,T){T<0&&x.x===1&&(o[v]=x.x-1),M.x===0&&M.z===0&&(o[v]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},io=class n extends no{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new N,s=[],r=[],o=[],a=new N,l=new Rt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(rt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(rt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},so=class extends ti{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ic=class extends so{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function yf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Cg=new N,Rg=new N,Od=new yf,Fd=new yf,Ud=new yf,Pc=class extends ti{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new N){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Rg.subVectors(s[0],s[1]).add(s[0]),c=Rg);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Cg.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cg),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),Od.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,y,m),Fd.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,y,m),Ud.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,y,m)}else this.curveType==="catmullrom"&&(Od.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Fd.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ud.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Od.calc(l),Fd.calc(l),Ud.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ig(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function aS(n,e){let t=1-n;return t*t*e}function lS(n,e){return 2*(1-n)*n*e}function cS(n,e){return n*n*e}function Qo(n,e,t,i){return aS(n,e)+lS(n,t)+cS(n,i)}function hS(n,e){let t=1-n;return t*t*t*e}function uS(n,e){let t=1-n;return 3*t*t*n*e}function dS(n,e){return 3*(1-n)*n*n*e}function fS(n,e){return n*n*n*e}function ea(n,e,t,i,s){return hS(n,e)+uS(n,t)+dS(n,i)+fS(n,s)}var _a=class extends ti{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ea(e,s.x,r.x,o.x,a.x),ea(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nc=class extends ti{constructor(e=new N,t=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new N){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ea(e,s.x,r.x,o.x,a.x),ea(e,s.y,r.y,o.y,a.y),ea(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ya=class extends ti{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lc=class extends ti{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends ti{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Qo(e,s.x,r.x,o.x),Qo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dc=class extends ti{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Qo(e,s.x,r.x,o.x),Qo(e,s.y,r.y,o.y),Qo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Ig(a,l.x,c.x,h.x,u.x),Ig(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},Wd=Object.freeze({__proto__:null,ArcCurve:Ic,CatmullRomCurve3:Pc,CubicBezierCurve:_a,CubicBezierCurve3:Nc,EllipseCurve:so,LineCurve:ya,LineCurve3:Lc,QuadraticBezierCurve:xa,QuadraticBezierCurve3:Dc,SplineCurve:va}),Oc=class extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Wd[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},or=class extends Oc{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ya(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new xa(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new _a(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new va(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new so(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Oi=class extends or{constructor(e){super(e),this.uuid=mo(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new or().fromJSON(s))}return this}};function pS(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=T0(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=xS(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,u=l;for(let f=t;f<s;f+=t){let d=n[f],p=n[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Sa(r,o,t,a,l,c,0),o}function T0(n,e,t,i,s){let r;if(s===IS(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Pg(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Pg(o/i|0,n[o],n[o+1],r);return r&&ro(r,r.next)&&(ba(r),r=r.next),r}function ar(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ro(t,t.next)||Gt(t.prev,t,t.next)===0)){if(ba(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Sa(n,e,t,i,s,r,o){if(!n)return;!o&&r&&ES(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?gS(n,i,s,r):mS(n)){e.push(l.i,n.i,c.i),ba(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=_S(ar(n),e),Sa(n,e,t,i,s,r,2)):o===2&&yS(n,e,t,i,s,r):Sa(ar(n),e,t,i,s,r,1);break}}}function mS(n){let e=n.prev,t=n,i=n.next;if(Gt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&jo(s,a,r,l,o,c,p.x,p.y)&&Gt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function gS(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Gt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),y=Math.max(a,l,c),m=Math.max(h,u,f),g=Xd(d,p,e,t,i),x=Xd(y,m,e,t,i),v=n.prevZ,M=n.nextZ;for(;v&&v.z>=g&&M&&M.z<=x;){if(v.x>=d&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&jo(a,h,l,u,c,f,v.x,v.y)&&Gt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=y&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&jo(a,h,l,u,c,f,M.x,M.y)&&Gt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&jo(a,h,l,u,c,f,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=x;){if(M.x>=d&&M.x<=y&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&jo(a,h,l,u,c,f,M.x,M.y)&&Gt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function _S(n,e){let t=n;do{let i=t.prev,s=t.next.next;!ro(i,s)&&C0(i,t,t.next,s)&&Ma(i,s)&&Ma(s,i)&&(e.push(i.i,t.i,s.i),ba(t),ba(t.next),t=n=s),t=t.next}while(t!==n);return ar(t)}function yS(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&AS(o,a)){let l=R0(o,a);o=ar(o,o.next),l=ar(l,l.next),Sa(o,e,t,i,s,r,0),Sa(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function xS(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=T0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(TS(c))}s.sort(vS);for(let r=0;r<s.length;r++)t=SS(s[r],t);return t}function vS(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function SS(n,e){let t=MS(n,e);if(!t)return e;let i=R0(t,n);return ar(i,i.next),ar(t,t.next)}function MS(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(ro(n,t))return t;do{if(ro(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&A0(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);Ma(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&bS(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function bS(n,e){return Gt(n.prev,n,e.prev)<0&&Gt(e.next,n,n.next)<0}function ES(n,e,t,i){let s=n;do s.z===0&&(s.z=Xd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,wS(s)}function wS(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Xd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function TS(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function A0(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function jo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&A0(n,e,t,i,s,r,o,a)}function AS(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!CS(n,e)&&(Ma(n,e)&&Ma(e,n)&&RS(n,e)&&(Gt(n.prev,n,e.prev)||Gt(n,e.prev,e))||ro(n,e)&&Gt(n.prev,n,n.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ro(n,e){return n.x===e.x&&n.y===e.y}function C0(n,e,t,i){let s=cc(Gt(n,e,t)),r=cc(Gt(n,e,i)),o=cc(Gt(t,i,n)),a=cc(Gt(t,i,e));return!!(s!==r&&o!==a||s===0&&lc(n,t,e)||r===0&&lc(n,i,e)||o===0&&lc(t,n,i)||a===0&&lc(t,e,i))}function lc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function cc(n){return n>0?1:n<0?-1:0}function CS(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&C0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ma(n,e){return Gt(n.prev,n,n.next)<0?Gt(n,e,n.next)>=0&&Gt(n,n.prev,e)>=0:Gt(n,e,n.prev)<0||Gt(n,n.next,e)<0}function RS(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function R0(n,e){let t=qd(n.i,n.x,n.y),i=qd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Pg(n,e,t,i){let s=qd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ba(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function IS(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Yd=class{static triangulate(e,t,i=2){return pS(e,t,i)}},Ii=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Ng(e),Lg(i,e);let o=e.length;t.forEach(Ng);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Lg(i,t[l]);let a=Yd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ng(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Lg(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var vi=class n extends kt{constructor(e=new Oi([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:PS,v,M=!1,T,w,_,S;if(g){v=g.getSpacedPoints(h),M=!0,f=!1;let ie=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,ie),w=new N,_=new N,S=new N}f||(m=0,d=0,p=0,y=0);let C=a.extractPoints(c),A=C.shape,P=C.holes;if(!Ii.isClockWise(A)){A=A.reverse();for(let ie=0,ue=P.length;ie<ue;ie++){let z=P[ie];Ii.isClockWise(z)&&(P[ie]=z.reverse())}}function B(ie){let z=10000000000000001e-36,j=ie[0];for(let J=1;J<=ie.length;J++){let Ce=J%ie.length,Me=ie[Ce],nt=Me.x-j.x,at=Me.y-j.y,mt=nt*nt+at*at,F=Math.max(Math.abs(Me.x),Math.abs(Me.y),Math.abs(j.x),Math.abs(j.y)),zt=z*F*F;if(mt<=zt){ie.splice(Ce,1),J--;continue}j=Me}}B(A),P.forEach(B);let I=P.length,k=A;for(let ie=0;ie<I;ie++){let ue=P[ie];A=A.concat(ue)}function X(ie,ue,z){return ue||We("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ue,z)}let G=A.length;function oe(ie,ue,z){let j,J,Ce,Me=ie.x-ue.x,nt=ie.y-ue.y,at=z.x-ie.x,mt=z.y-ie.y,F=Me*Me+nt*nt,zt=Me*mt-nt*at;if(Math.abs(zt)>Number.EPSILON){let et=Math.sqrt(F),It=Math.sqrt(at*at+mt*mt),xe=ue.x-nt/et,Jt=ue.y+Me/et,Ge=z.x-mt/It,Xe=z.y+at/It,R=((Ge-xe)*mt-(Xe-Jt)*at)/(Me*mt-nt*at);j=xe+Me*R-ie.x,J=Jt+nt*R-ie.y;let b=j*j+J*J;if(b<=2)return new re(j,J);Ce=Math.sqrt(b/2)}else{let et=!1;Me>Number.EPSILON?at>Number.EPSILON&&(et=!0):Me<-Number.EPSILON?at<-Number.EPSILON&&(et=!0):Math.sign(nt)===Math.sign(mt)&&(et=!0),et?(j=-nt,J=Me,Ce=Math.sqrt(F)):(j=Me,J=nt,Ce=Math.sqrt(F/2))}return new re(j/Ce,J/Ce)}let q=[];for(let ie=0,ue=k.length,z=ue-1,j=ie+1;ie<ue;ie++,z++,j++)z===ue&&(z=0),j===ue&&(j=0),q[ie]=oe(k[ie],k[z],k[j]);let Q=[],Z,Ae=q.concat();for(let ie=0,ue=I;ie<ue;ie++){let z=P[ie];Z=[];for(let j=0,J=z.length,Ce=J-1,Me=j+1;j<J;j++,Ce++,Me++)Ce===J&&(Ce=0),Me===J&&(Me=0),Z[j]=oe(z[j],z[Ce],z[Me]);Q.push(Z),Ae=Ae.concat(Z)}let Le;if(m===0)Le=Ii.triangulateShape(k,P);else{let ie=[],ue=[];for(let z=0;z<m;z++){let j=z/m,J=d*Math.cos(j*Math.PI/2),Ce=p*Math.sin(j*Math.PI/2)+y;for(let Me=0,nt=k.length;Me<nt;Me++){let at=X(k[Me],q[Me],Ce);Oe(at.x,at.y,-J),j===0&&ie.push(at)}for(let Me=0,nt=I;Me<nt;Me++){let at=P[Me];Z=Q[Me];let mt=[];for(let F=0,zt=at.length;F<zt;F++){let et=X(at[F],Z[F],Ce);Oe(et.x,et.y,-J),j===0&&mt.push(et)}j===0&&ue.push(mt)}}Le=Ii.triangulateShape(ie,ue)}let $=Le.length,de=p+y;for(let ie=0;ie<G;ie++){let ue=f?X(A[ie],Ae[ie],de):A[ie];M?(_.copy(T.normals[0]).multiplyScalar(ue.x),w.copy(T.binormals[0]).multiplyScalar(ue.y),S.copy(v[0]).add(_).add(w),Oe(S.x,S.y,S.z)):Oe(ue.x,ue.y,0)}for(let ie=1;ie<=h;ie++)for(let ue=0;ue<G;ue++){let z=f?X(A[ue],Ae[ue],de):A[ue];M?(_.copy(T.normals[ie]).multiplyScalar(z.x),w.copy(T.binormals[ie]).multiplyScalar(z.y),S.copy(v[ie]).add(_).add(w),Oe(S.x,S.y,S.z)):Oe(z.x,z.y,u/h*ie)}for(let ie=m-1;ie>=0;ie--){let ue=ie/m,z=d*Math.cos(ue*Math.PI/2),j=p*Math.sin(ue*Math.PI/2)+y;for(let J=0,Ce=k.length;J<Ce;J++){let Me=X(k[J],q[J],j);Oe(Me.x,Me.y,u+z)}for(let J=0,Ce=P.length;J<Ce;J++){let Me=P[J];Z=Q[J];for(let nt=0,at=Me.length;nt<at;nt++){let mt=X(Me[nt],Z[nt],j);M?Oe(mt.x,mt.y+v[h-1].y,v[h-1].x+z):Oe(mt.x,mt.y,u+z)}}}Re(),Be();function Re(){let ie=s.length/3;if(f){let ue=0,z=G*ue;for(let j=0;j<$;j++){let J=Le[j];dt(J[2]+z,J[1]+z,J[0]+z)}ue=h+m*2,z=G*ue;for(let j=0;j<$;j++){let J=Le[j];dt(J[0]+z,J[1]+z,J[2]+z)}}else{for(let ue=0;ue<$;ue++){let z=Le[ue];dt(z[2],z[1],z[0])}for(let ue=0;ue<$;ue++){let z=Le[ue];dt(z[0]+G*h,z[1]+G*h,z[2]+G*h)}}i.addGroup(ie,s.length/3-ie,0)}function Be(){let ie=s.length/3,ue=0;me(k,ue),ue+=k.length;for(let z=0,j=P.length;z<j;z++){let J=P[z];me(J,ue),ue+=J.length}i.addGroup(ie,s.length/3-ie,1)}function me(ie,ue){let z=ie.length;for(;--z>=0;){let j=z,J=z-1;J<0&&(J=ie.length-1);for(let Ce=0,Me=h+m*2;Ce<Me;Ce++){let nt=G*Ce,at=G*(Ce+1),mt=ue+j+nt,F=ue+J+nt,zt=ue+J+at,et=ue+j+at;He(mt,F,zt,et)}}}function Oe(ie,ue,z){l.push(ie),l.push(ue),l.push(z)}function dt(ie,ue,z){qe(ie),qe(ue),qe(z);let j=s.length/3,J=x.generateTopUV(i,s,j-3,j-2,j-1);Qe(J[0]),Qe(J[1]),Qe(J[2])}function He(ie,ue,z,j){qe(ie),qe(ue),qe(j),qe(ue),qe(z),qe(j);let J=s.length/3,Ce=x.generateSideWallUV(i,s,J-6,J-3,J-2,J-1);Qe(Ce[0]),Qe(Ce[1]),Qe(Ce[3]),Qe(Ce[1]),Qe(Ce[2]),Qe(Ce[3])}function qe(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function Qe(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return NS(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wd[s.type]().fromJSON(s)),new n(i,e.options)}},PS={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],y=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-u),new re(f,1-p),new re(y,1-g)]:[new re(a,1-l),new re(h,1-u),new re(d,1-p),new re(m,1-g)]}};function NS(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var lr=class n extends no{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Is=class n extends kt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=rt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new N,f=new re,d=new N,p=new N,y=new N,m=0,g=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,d.x=g*1,d.y=-m,d.z=g*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(p)}for(let x=0;x<=t;x++){let v=i+x*h*s,M=Math.sin(v),T=Math.cos(v);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*M,u.y=e[w].y,u.z=e[w].x*T,o.push(u.x,u.y,u.z),f.x=x/t,f.y=w/(e.length-1),a.push(f.x,f.y);let _=l[3*w+0]*M,S=l[3*w+1],C=l[3*w+0]*T;c.push(_,S,C)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){let M=v+x*e.length,T=M,w=M+e.length,_=M+e.length+1,S=M+1;r.push(T,w,S),r.push(_,S,w)}this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Ea=class n extends no{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Fi=class n extends kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],y=[],m=[];for(let g=0;g<h;g++){let x=g*f-o;for(let v=0;v<c;v++){let M=v*u-r;p.push(M,-x,0),y.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){let v=x+c*g,M=x+c*(g+1),T=x+1+c*(g+1),w=x+1+c*g;d.push(v,M,w),d.push(M,T,w)}this.setIndex(d),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(y,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},wa=class n extends kt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new N,p=new re;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let g=r+m/i*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let y=0;y<s;y++){let m=y*(i+1);for(let g=0;g<i;g++){let x=g+m,v=x,M=x+i+1,T=x+i+2,w=x+1;a.push(v,M,w),a.push(M,T,w)}}this.setIndex(a),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ta=class n extends kt{constructor(e=new Oi([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;Ii.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){let x=p[m];Ii.isClockWise(x)===!0&&(p[m]=x.reverse())}let y=Ii.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){let x=p[m];d=d.concat(x)}for(let m=0,g=d.length;m<g;m++){let x=d[m];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,g=y.length;m<g;m++){let x=y[m],v=x[0]+u,M=x[1]+u,T=x[2]+u;i.push(v,M,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return LS(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function LS(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Wt=class n extends kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,f=new N,d=[],p=[],y=[],m=[];for(let g=0;g<=i;g++){let x=[],v=g/i,M=o+v*a,T=e*Math.cos(M),w=Math.sqrt(e*e-T*T),_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let C=S/t,A=s+C*r;u.x=-w*Math.cos(A),u.y=T,u.z=w*Math.sin(A),p.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(C+_,1-v),x.push(c++)}h.push(x)}for(let g=0;g<i;g++)for(let x=0;x<t;x++){let v=h[g][x+1],M=h[g][x],T=h[g+1][x],w=h[g+1][x+1];(g!==0||o>0)&&d.push(v,M,w),(g!==i-1||l<Math.PI)&&d.push(M,T,w)}this.setIndex(d),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(y,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xn=class n extends kt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new N,d=new N,p=new N;for(let y=0;y<=i;y++){let m=o+y/i*a;for(let g=0;g<=s;g++){let x=g/s*r;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let g=(s+1)*y+m-1,x=(s+1)*(y-1)+m-1,v=(s+1)*(y-1)+m,M=(s+1)*y+m;l.push(g,x,M),l.push(x,v,M)}this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function gr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Dg(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Dg(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function In(n){let e={};for(let t=0;t<n.length;t++){let i=gr(n[t]);for(let s in i)e[s]=i[s]}return e}function Dg(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function DS(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var us={clone:gr,merge:In},OS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OS,this.fragmentShader=FS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=DS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ee().setHex(s.value);break;case"v2":this.uniforms[i].value=new re().fromArray(s.value);break;case"v3":this.uniforms[i].value=new N().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Bt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Rt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},oo=class extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xt=class extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ao=class extends Xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ir('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ir('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Fc=class extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uc=class extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Yr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function hc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ps=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bc=class extends Ps{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zd,endingEnd:zd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hd:r=e,a=2*t-i;break;case Gd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hd:o=e,l=2*i-t;break;case Gd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),y=p*p,m=y*p,g=-f*m+2*f*y-f*p,x=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*p+1,v=(-1-d)*m+(1.5+d)*y+.5*p,M=d*m-d*y;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+x*o[c+T]+v*o[l+T]+M*o[u+T];return r}},kc=class extends Ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},zc=class extends Ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Hc=class extends Ps{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(s-t),y=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let y=o[c+p],m=o[l+p],g=d*f+p*2,x=u[g],v=u[g+1],M=e*f+p*2,T=h[M],w=h[M+1],_=BS(i,t,x,T,s);r[p]=I0(_,y,v,w,m)}return r}};function I0(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function US(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function BS(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=I0(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=US(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ni=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yr(t,this.TimeBufferType),this.values=Yr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Yr(e.times,Array),values:Yr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),hc(e.settings)&&(i.settings={inTangents:Yr(e.settings.inTangents,Array),outTangents:Yr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Hc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ta:t=this.InterpolantFactoryMethodDiscrete;break;case Ec:t=this.InterpolantFactoryMethodLinear;break;case fc:t=this.InterpolantFactoryMethodSmooth;break;case kd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ve("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return Ec;case this.InterpolantFactoryMethodSmooth:return fc;case this.InterpolantFactoryMethodBezier:return kd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;hc(this.settings)&&(Og(this.settings.inTangents,e),Og(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;hc(this.settings)&&(Fg(this.settings.inTangents,e),Fg(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Bv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let y=t[u+p];if(y!==t[f+p]||y!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,hc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Og(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Fg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Ec;var Ns=class extends ni{constructor(e,t,i){super(e,t,i)}};Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=ta;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}};Gc.prototype.ValueTypeName="color";var Vc=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}};Vc.prototype.ValueTypeName="number";var Wc=class extends Ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ni.slerpFlat(r,0,o,c-a,o,c,l);return r}},Aa=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}};Aa.prototype.ValueTypeName="quaternion";Aa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends ni{constructor(e,t,i){super(e,t,i)}};Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ta;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}};Xc.prototype.ValueTypeName="vector";var qc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},P0=new qc,Yc=class{constructor(e){this.manager=e!==void 0?e:P0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Yc.DEFAULT_MATERIAL_NAME="__DEFAULT";var lo=class extends Kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ca=class extends lo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bd=new Rt,Ug=new N,Bg=new N,Ra=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ug.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ug),Bg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Bd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Bd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===jr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uc=new N,dc=new Ni,Ci=new N,Ia=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uc,dc,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,dc,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(uc,dc,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,dc,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ts=new N,kg=new re,zg=new re,An=class extends Ia{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wc*2*Math.atan(Math.tan(pd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z)}getViewSize(e,t){return this.getViewBounds(e,kg,zg),t.subVectors(zg,kg)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pd*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var $d=class extends Ra{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}},cr=class extends lo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $d}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},hr=class extends Ia{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jd=class extends Ra{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pa=class extends lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Jd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var $r=-90,Jr=1,co=class extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new An($r,Jr,e,t);s.layers=this.layers,this.add(s);let r=new An($r,Jr,e,t);r.layers=this.layers,this.add(r);let o=new An($r,Jr,e,t);o.layers=this.layers,this.add(o);let a=new An($r,Jr,e,t);a.layers=this.layers,this.add(a);let l=new An($r,Jr,e,t);l.layers=this.layers,this.add(l);let c=new An($r,Jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},$c=class extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Na=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=kS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function kS(){this._document.hidden===!1&&this.reset()}var vf="\\[\\]\\.:\\/",zS=new RegExp("["+vf+"]","g"),Sf="[^"+vf+"]",HS="[^"+vf.replace("\\.","")+"]",GS=/((?:WC+[\/:])*)/.source.replace("WC",Sf),VS=/(WCOD+)?/.source.replace("WCOD",HS),WS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sf),XS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sf),qS=new RegExp("^"+GS+VS+WS+XS+"$"),YS=["material","materials","bones","map"],Kd=class{constructor(e,t,i){let s=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ft=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zS,"")}static parseTrackName(e){let t=qS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);YS.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Kd;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var EI=new Float32Array(1);var Af=class Af{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Af.prototype.isMatrix2=!0;var Zd=Af;function Mf(n,e,t,i){let s=$S(i);switch(t){case hf:return n*e;case nh:return n*e/s.components*s.byteLength;case ih:return n*e/s.components*s.byteLength;case Fs:return n*e*2/s.components*s.byteLength;case sh:return n*e*2/s.components*s.byteLength;case uf:return n*e*3/s.components*s.byteLength;case Mi:return n*e*4/s.components*s.byteLength;case rh:return n*e*4/s.components*s.byteLength;case za:case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ah:case ch:return Math.max(n,16)*Math.max(e,8)/4;case oh:case lh:return Math.max(n,8)*Math.max(e,8)/2;case hh:case uh:case fh:case ph:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dh:case Wa:case mh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Th:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ih:case Ph:case Nh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lh:case Dh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xa:case Oh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $S(n){switch(n){case qn:case of:return{byteLength:1,components:1};case po:case af:case on:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case Si:case Qc:case ci:return{byteLength:4,components:1};case lf:case cf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Q0(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function KS(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],y=u[d];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let y=u[d];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ZS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jS=`#ifdef USE_ALPHAHASH
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
#endif`,QS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iM=`#ifdef USE_AOMAP
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
#endif`,sM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rM=`#ifdef USE_BATCHING
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
#endif`,oM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hM=`#ifdef USE_IRIDESCENCE
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
#endif`,uM=`#ifdef USE_BUMPMAP
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
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vM=`#define PI 3.141592653589793
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
} // validated`,SM=`vec3 transformedNormal = objectNormal;
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
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",AM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UM=`#ifdef USE_GRADIENTMAP
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
}`,BM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,GM=`#ifdef USE_ENVMAP
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
#endif`,VM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
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
#endif`,$M=`uniform sampler2D dfgLUT;
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
}`,JM=`
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
#endif`,KM=`#if defined( RE_IndirectDiffuse )
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
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,QM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ob=`#if defined( USE_POINTS_UV )
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
#endif`,ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hb=`#if defined( USE_MORPHCOLORS )
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
#endif`,ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`#ifdef USE_MORPHTARGETS
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
#endif`,fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xb=`#ifdef USE_NORMALMAP
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
#endif`,vb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ob=`float getShadowMask() {
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
}`,Fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ub=`#ifdef USE_SKINNING
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
#endif`,Bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kb=`#ifdef USE_SKINNING
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
#endif`,zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wb=`#ifdef USE_TRANSMISSION
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
#endif`,Xb=`#ifdef USE_TRANSMISSION
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
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zb=`uniform sampler2D t2D;
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
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`uniform float backgroundBlurriness;
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
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`#include <common>
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
}`,iE=`#if DEPTH_PACKING == 3200
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
}`,sE=`#define DISTANCE
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
}`,rE=`#define DISTANCE
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
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`uniform float scale;
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
}`,cE=`uniform vec3 diffuse;
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
}`,hE=`#include <common>
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
}`,uE=`uniform vec3 diffuse;
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
}`,dE=`#define LAMBERT
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
}`,fE=`#define LAMBERT
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
}`,pE=`#define MATCAP
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
}`,mE=`#define MATCAP
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
}`,gE=`#define NORMAL
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
}`,_E=`#define NORMAL
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
}`,yE=`#define PHONG
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
}`,xE=`#define PHONG
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
}`,vE=`#define STANDARD
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
}`,SE=`#define STANDARD
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
}`,ME=`#define TOON
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
}`,bE=`#define TOON
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
}`,EE=`uniform float size;
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
}`,wE=`uniform vec3 diffuse;
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
}`,TE=`#include <common>
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
}`,AE=`uniform vec3 color;
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
}`,CE=`uniform float rotation;
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
}`,RE=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:ZS,alphahash_pars_fragment:jS,alphamap_fragment:QS,alphamap_pars_fragment:eM,alphatest_fragment:tM,alphatest_pars_fragment:nM,aomap_fragment:iM,aomap_pars_fragment:sM,batching_pars_vertex:rM,batching_vertex:oM,begin_vertex:aM,beginnormal_vertex:lM,bsdfs:cM,iridescence_fragment:hM,bumpmap_pars_fragment:uM,clipping_planes_fragment:dM,clipping_planes_pars_fragment:fM,clipping_planes_pars_vertex:pM,clipping_planes_vertex:mM,color_fragment:gM,color_pars_fragment:_M,color_pars_vertex:yM,color_vertex:xM,common:vM,defaultnormal_vertex:SM,displacementmap_pars_vertex:MM,displacementmap_vertex:bM,emissivemap_fragment:EM,emissivemap_pars_fragment:wM,colorspace_fragment:TM,colorspace_pars_fragment:AM,envmap_fragment:CM,envmap_common_pars_fragment:RM,envmap_pars_fragment:IM,envmap_pars_vertex:PM,envmap_physical_pars_fragment:GM,envmap_vertex:NM,fog_vertex:LM,fog_pars_vertex:DM,fog_fragment:OM,fog_pars_fragment:FM,gradientmap_pars_fragment:UM,lightmap_pars_fragment:BM,lights_lambert_fragment:kM,lights_lambert_pars_fragment:zM,lights_pars_begin:HM,lights_toon_fragment:VM,lights_toon_pars_fragment:WM,lights_phong_fragment:XM,lights_phong_pars_fragment:qM,lights_physical_fragment:YM,lights_physical_pars_fragment:$M,lights_fragment_begin:JM,lights_fragment_maps:KM,lights_fragment_end:ZM,lightprobes_pars_fragment:jM,logdepthbuf_fragment:QM,logdepthbuf_pars_fragment:eb,logdepthbuf_pars_vertex:tb,logdepthbuf_vertex:nb,map_fragment:ib,map_pars_fragment:sb,map_particle_fragment:rb,map_particle_pars_fragment:ob,metalnessmap_fragment:ab,metalnessmap_pars_fragment:lb,morphinstance_vertex:cb,morphcolor_vertex:hb,morphnormal_vertex:ub,morphtarget_pars_vertex:db,morphtarget_vertex:fb,normal_fragment_begin:pb,normal_fragment_maps:mb,normal_pars_fragment:gb,normal_pars_vertex:_b,normal_vertex:yb,normalmap_pars_fragment:xb,clearcoat_normal_fragment_begin:vb,clearcoat_normal_fragment_maps:Sb,clearcoat_pars_fragment:Mb,iridescence_pars_fragment:bb,opaque_fragment:Eb,packing:wb,premultiplied_alpha_fragment:Tb,project_vertex:Ab,dithering_fragment:Cb,dithering_pars_fragment:Rb,roughnessmap_fragment:Ib,roughnessmap_pars_fragment:Pb,shadowmap_pars_fragment:Nb,shadowmap_pars_vertex:Lb,shadowmap_vertex:Db,shadowmask_pars_fragment:Ob,skinbase_vertex:Fb,skinning_pars_vertex:Ub,skinning_vertex:Bb,skinnormal_vertex:kb,specularmap_fragment:zb,specularmap_pars_fragment:Hb,tonemapping_fragment:Gb,tonemapping_pars_fragment:Vb,transmission_fragment:Wb,transmission_pars_fragment:Xb,uv_pars_fragment:qb,uv_pars_vertex:Yb,uv_vertex:$b,worldpos_vertex:Jb,background_vert:Kb,background_frag:Zb,backgroundCube_vert:jb,backgroundCube_frag:Qb,cube_vert:eE,cube_frag:tE,depth_vert:nE,depth_frag:iE,distance_vert:sE,distance_frag:rE,equirect_vert:oE,equirect_frag:aE,linedashed_vert:lE,linedashed_frag:cE,meshbasic_vert:hE,meshbasic_frag:uE,meshlambert_vert:dE,meshlambert_frag:fE,meshmatcap_vert:pE,meshmatcap_frag:mE,meshnormal_vert:gE,meshnormal_frag:_E,meshphong_vert:yE,meshphong_frag:xE,meshphysical_vert:vE,meshphysical_frag:SE,meshtoon_vert:ME,meshtoon_frag:bE,points_vert:EE,points_frag:wE,shadow_vert:TE,shadow_frag:AE,sprite_vert:CE,sprite_frag:RE},we={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ki={basic:{uniforms:In([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:In([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:In([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:In([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:In([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ee(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:In([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:In([we.points,we.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:In([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:In([we.common,we.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:In([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:In([we.sprite,we.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:In([we.common,we.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:In([we.lights,we.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ki.physical={uniforms:In([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Uh={r:0,b:0,g:0},IE=new Rt,e_=new Ye;e_.set(-1,0,0,0,1,0,0,0,1);function PE(n,e,t,i,s,r){let o=new Ee(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let M=x.backgroundBlurriness>0;v=e.get(v,M)}return v}function p(x){let v=!1,M=d(x);M===null?m(o,a):M&&M.isColor&&(m(M,1),v=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(x,v){let M=d(v);M&&M.isCubeTexture?(c===void 0&&(c=new Ut(new On(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:gr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(IE.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(e_),c.material.toneMapped=lt.getTransfer(M.colorSpace)!==xt,(h!==M||u!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ut(new Fi(2,2),new sn({name:"BackgroundMaterial",uniforms:gr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=lt.getTransfer(M.colorSpace)!==xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,v){x.getRGB(Uh,xf(n)),t.buffers.color.setClear(Uh.r,Uh.g,Uh.b,v,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:y,dispose:g}}function NE(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(P,D,B,I,k){let X=!1,G=u(P,I,B,D);r!==G&&(r=G,c(r.object)),X=d(P,I,B,k),X&&p(P,I,B,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(P,D,B,I),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function u(P,D,B,I){let k=I.wireframe===!0,X=i[D.id];X===void 0&&(X={},i[D.id]=X);let G=P.isInstancedMesh===!0?P.id:0,oe=X[G];oe===void 0&&(oe={},X[G]=oe);let q=oe[B.id];q===void 0&&(q={},oe[B.id]=q);let Q=q[k];return Q===void 0&&(Q=f(l()),q[k]=Q),Q}function f(P){let D=[],B=[],I=[];for(let k=0;k<t;k++)D[k]=0,B[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:I,object:P,attributes:{},index:null}}function d(P,D,B,I){let k=r.attributes,X=D.attributes,G=0,oe=B.getAttributes();for(let q in oe)if(oe[q].location>=0){let Z=k[q],Ae=X[q];if(Ae===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Ae=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Ae=P.instanceColor)),Z===void 0||Z.attribute!==Ae||Ae&&Z.data!==Ae.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function p(P,D,B,I){let k={},X=D.attributes,G=0,oe=B.getAttributes();for(let q in oe)if(oe[q].location>=0){let Z=X[q];Z===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));let Ae={};Ae.attribute=Z,Z&&Z.data&&(Ae.data=Z.data),k[q]=Ae,G++}r.attributes=k,r.attributesNum=G,r.index=I}function y(){let P=r.newAttributes;for(let D=0,B=P.length;D<B;D++)P[D]=0}function m(P){g(P,0)}function g(P,D){let B=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;B[P]=1,I[P]===0&&(n.enableVertexAttribArray(P),I[P]=1),k[P]!==D&&(n.vertexAttribDivisor(P,D),k[P]=D)}function x(){let P=r.newAttributes,D=r.enabledAttributes;for(let B=0,I=D.length;B<I;B++)D[B]!==P[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function v(P,D,B,I,k,X,G){G===!0?n.vertexAttribIPointer(P,D,B,k,X):n.vertexAttribPointer(P,D,B,I,k,X)}function M(P,D,B,I){y();let k=I.attributes,X=B.getAttributes(),G=D.defaultAttributeValues;for(let oe in X){let q=X[oe];if(q.location>=0){let Q=k[oe];if(Q===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){let Z=Q.normalized,Ae=Q.itemSize,Le=e.get(Q);if(Le===void 0)continue;let $=Le.buffer,de=Le.type,Re=Le.bytesPerElement,Be=de===n.INT||de===n.UNSIGNED_INT||Q.gpuType===Qc;if(Q.isInterleavedBufferAttribute){let me=Q.data,Oe=me.isInterleavedBuffer===!0?me.stride:me.itemSize,dt=Q.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let He=0;He<q.locationSize;He++)g(q.location+He,me.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let He=0;He<q.locationSize;He++)m(q.location+He);n.bindBuffer(n.ARRAY_BUFFER,$);for(let He=0;He<q.locationSize;He++)v(q.location+He,Ae/q.locationSize,de,Z,Oe*Re,(dt+Ae/q.locationSize*He)*Re,Be)}else{if(Q.isInstancedBufferAttribute){for(let me=0;me<q.locationSize;me++)g(q.location+me,Q.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let me=0;me<q.locationSize;me++)m(q.location+me);n.bindBuffer(n.ARRAY_BUFFER,$);for(let me=0;me<q.locationSize;me++)v(q.location+me,Ae/q.locationSize,de,Z,Ae*Re,Ae/q.locationSize*me*Re,Be)}}else if(G!==void 0){let Z=G[oe];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(q.location,Z);break;case 3:n.vertexAttrib3fv(q.location,Z);break;case 4:n.vertexAttrib4fv(q.location,Z);break;default:n.vertexAttrib1fv(q.location,Z)}}}}x()}function T(){C();for(let P in i){let D=i[P];for(let B in D){let I=D[B];for(let k in I){let X=I[k];for(let G in X)h(X[G].object),delete X[G];delete I[k]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;let D=i[P.id];for(let B in D){let I=D[B];for(let k in I){let X=I[k];for(let G in X)h(X[G].object),delete X[G];delete I[k]}}delete i[P.id]}function _(P){for(let D in i){let B=i[D];for(let I in B){let k=B[I];if(k[P.id]===void 0)continue;let X=k[P.id];for(let G in X)h(X[G].object),delete X[G];delete k[P.id]}}}function S(P){for(let D in i){let B=i[D],I=P.isInstancedMesh===!0?P.id:0,k=B[I];if(k!==void 0){for(let X in k){let G=k[X];for(let oe in G)h(G[oe].object),delete G[oe];delete k[X]}delete B[I],Object.keys(B).length===0&&delete i[D]}}}function C(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function LE(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function DE(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Mi&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===on&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==qn&&_!==ci&&!S&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:M,maxSamples:T,samples:w}}function OE(n){let e=this,t=null,i=0,s=!1,r=!1,o=new xi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,g=n.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let x=r?0:i,v=x*4,M=g.clippingState||null;l.value=M,M=h(p,f,v,d);for(let T=0;T!==v;++T)M[T]=t[T];g.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let g=d+y*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,M=d;v!==y;++v,M+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var $a=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new On(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:as});r.uniforms.tEquirect.value=t;let o=new Ut(s,r),a=t.minFilter;return t.minFilter===ls&&(t.minFilter=Ln),new co(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},N0=256,FE=3,UE=20,t_=256,n_=16,BE=3,kE=new N,zE=new Ee,kh=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new co(1,10,null),this._boxMesh=new Ut(new On(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=kE}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(zE));let m=new co(i,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(N0,E0(e))}_fromTexture(e,t){e.mapping===pr||e.mapping===fo?this._setSize(e.image.length===0?N0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=L0(e,!1,!1),i=Math.log2(e)-FE;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=L0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===pr||e.mapping===fo?(this._cubemapMaterial===null&&(this._cubemapMaterial=O0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=D0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=HE(),this._integrationMaterial=GE());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/n_);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-BE)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(t_*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=VE());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function L0(n,e,t){return new $a(n,{minFilter:ls,generateMipmaps:e,type:on,colorSpace:na,depthBuffer:t})}function Ja(n,e,t){return new sn({name:n,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:xn,blending:as,depthTest:!1,depthWrite:!1})}function HE(){return Ja("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${t_}u

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
	`)}function GE(){return Ja("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:n_}},`

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
	`)}function VE(){return Ja("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${UE}
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
	`)}function D0(){return Ja("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function O0(){return Ja("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function WE(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Kc||d===Zc)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let y=new $a(p.height);return y.fromEquirectangularTexture(n,f),e.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Kc||d===Zc,y=d===pr||d===fo;if(p||y){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new kh(n)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let x=f.image;return p&&x&&x.height>0||y&&x&&l(x)?(i===null&&(i=new kh(n)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===Kc?f.mapping=pr:d===Zc&&(f.mapping=fo),f}function l(f){let d=0,p=6;for(let y=0;y<p;y++)f[y]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function XE(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ir("WebGLRenderer: "+i+" extension not supported."),s}}}function qE(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let y=r.get(p);y&&(e.remove(y),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function h(p){let y=p.attributes;for(let m in y)e.update(y[m],n.ARRAY_BUFFER)}function u(p){let y=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let x=y!==null?y.array.length:m.array.length/3-1,v=m.count>=65535?ca:la,M=new v(Math.ceil(x/3)*6,1),T=M.array;if(y!==null){let _=y.array;g=y.version;for(let S=0,C=0;S<x;S+=3){let A=_[S+0],P=_[S+1],D=_[S+2];T[C++]=A,T[C++]=P,T[C++]=P,T[C++]=D,T[C++]=D,T[C++]=A}}else{g=m.version;for(let _=0,S=0;_<x;_+=3){let C=_+0,A=_+1,P=_+2;T[S++]=C,T[S++]=A,T[S++]=A,T[S++]=P,T[S++]=P,T[S++]=C}}M.version=g;let w=r.get(p);w&&e.remove(w),r.set(p,M)}function f(p){let y=r.get(p);if(y){let m=p.index;m!==null&&y.version<m.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let y=s[p].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function YE(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function c(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*o,d),t.update(f,i,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let y=0;for(let m=0;m<d;m++)y+=f[m];t.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function $E(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function JE(n,e,t){let i=new WeakMap,s=new Bt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let C=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),y===!0&&(v=3);let M=a.attributes.position.count*v,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*T*4*u),_=new ra(w,M,T,u);_.type=ci,_.needsUpdate=!0;let S=v*4;for(let A=0;A<u;A++){let P=m[A],D=g[A],B=x[A],I=M*T*4*A;for(let k=0;k<P.count;k++){let X=k*S;d===!0&&(s.fromBufferAttribute(P,k),w[I+X+0]=s.x,w[I+X+1]=s.y,w[I+X+2]=s.z,w[I+X+3]=0),p===!0&&(s.fromBufferAttribute(D,k),w[I+X+4]=s.x,w[I+X+5]=s.y,w[I+X+6]=s.z,w[I+X+7]=0),y===!0&&(s.fromBufferAttribute(B,k),w[I+X+8]=s.x,w[I+X+9]=s.y,w[I+X+10]=s.z,w[I+X+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:_,size:new re(M,T)},i.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function KE(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var ZE={[La]:"LINEAR_TONE_MAPPING",[Da]:"REINHARD_TONE_MAPPING",[Oa]:"CINEON_TONE_MAPPING",[Fa]:"ACES_FILMIC_TONE_MAPPING",[Ba]:"AGX_TONE_MAPPING",[fr]:"NEUTRAL_TONE_MAPPING",[Ua]:"CUSTOM_TONE_MAPPING"};function jE(n,e,t,i,s,r){let o=new en(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new kt;h.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new je([0,2,0,0,2,0],2));let u=new oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ut(h,u),d=new hr(-1,1,1,-1,0,1),p=null,y=null,m=!1,g,x=null,v=[],M=!1;this.setSize=function(T,w){o.setSize(T,w),a!==null&&a.setSize(T,w),l!==null&&l.setSize(T,w);for(let _=0;_<v.length;_++){let S=v[_];S.setSize&&S.setSize(T,w)}},this.setEffects=function(T){v=T,M=v.length>0&&v[0].isRenderPass===!0;let w=o.width,_=o.height;v.length>0&&a===null&&(a=new en(w,_,{type:on,depthBuffer:!1,stencilBuffer:!1}),l=new en(w,_,{type:on,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&v.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new os(w,_),r===!0&&(c.format=cs,c.type=mr)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<v.length;C++){let A=v[C];A.setSize&&A.setSize(w,_),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(T,w){if(m||T.toneMapping===Ui&&v.length===0)return!1;if(x=w,w!==null){let _=w.width,S=w.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return M===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=Ui,!0},this.hasRenderPass=function(){return M},this.end=function(T,w){T.toneMapping=g,m=!0;let _=o,S=a;for(let C=0;C<v.length;C++){let A=v[C];A.enabled!==!1&&(A.render(T,S,_,w),A.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(p!==T.outputColorSpace||y!==T.toneMapping){p=T.outputColorSpace,y=T.toneMapping,u.defines={},lt.getTransfer(p)===xt&&(u.defines.SRGB_TRANSFER="");let C=ZE[y];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(x),T.render(f,d),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var i_=new Dn,s_=new os(1,1),r_=new pa(1),o_=new ra,a_=new Cc,l_=new fa,F0=[],U0=[],B0=new Float32Array(16),k0=new Float32Array(9),z0=new Float32Array(4);function _o(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=F0[s];if(r===void 0&&(r=new Float32Array(s),F0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ln(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hh(n,e){let t=U0[e];t===void 0&&(t=new Int32Array(e),U0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function QE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ew(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),ln(t,e)}}function tw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),ln(t,e)}}function nw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),ln(t,e)}}function iw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;z0.set(i),n.uniformMatrix2fv(this.addr,!1,z0),ln(t,i)}}function sw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;k0.set(i),n.uniformMatrix3fv(this.addr,!1,k0),ln(t,i)}}function rw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;B0.set(i),n.uniformMatrix4fv(this.addr,!1,B0),ln(t,i)}}function ow(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function aw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),ln(t,e)}}function lw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),ln(t,e)}}function cw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),ln(t,e)}}function hw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),ln(t,e)}}function dw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),ln(t,e)}}function fw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),ln(t,e)}}function Gh(n){return n.version===0&&(n.compareFunction=pf,n.needsUpdate=!0),n}function pw(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Gh(s_):r=i_,t.setTexture2D(e||r,s)}function mw(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||a_,s)}function gw(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Gh(r_):r=l_,t.setTextureCube(e||r,s)}function _w(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||o_,s)}function yw(n){switch(n){case 5126:return QE;case 35664:return ew;case 35665:return tw;case 35666:return nw;case 35674:return iw;case 35675:return sw;case 35676:return rw;case 5124:case 35670:return ow;case 35667:case 35671:return aw;case 35668:case 35672:return lw;case 35669:case 35673:return cw;case 5125:return hw;case 36294:return uw;case 36295:return dw;case 36296:return fw;case 35678:case 36198:case 36298:case 36306:case 35682:return pw;case 35679:case 36299:case 36307:return mw;case 35680:case 36300:case 36308:case 36293:return gw;case 36289:case 36303:case 36311:case 36292:return _w}}function xw(n,e){n.uniform1fv(this.addr,e)}function vw(n,e){let t=_o(e,this.size,2);n.uniform2fv(this.addr,t)}function Sw(n,e){let t=_o(e,this.size,3);n.uniform3fv(this.addr,t)}function Mw(n,e){let t=_o(e,this.size,4);n.uniform4fv(this.addr,t)}function bw(n,e){let t=_o(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ew(n,e){let t=_o(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ww(n,e){let t=_o(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Tw(n,e){n.uniform1iv(this.addr,e)}function Aw(n,e){n.uniform2iv(this.addr,e)}function Cw(n,e){n.uniform3iv(this.addr,e)}function Rw(n,e){n.uniform4iv(this.addr,e)}function Iw(n,e){n.uniform1uiv(this.addr,e)}function Pw(n,e){n.uniform2uiv(this.addr,e)}function Nw(n,e){n.uniform3uiv(this.addr,e)}function Lw(n,e){n.uniform4uiv(this.addr,e)}function Dw(n,e,t){let i=this.cache,s=e.length,r=Hh(t,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Gh(s_):o=i_;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Ow(n,e,t){let i=this.cache,s=e.length,r=Hh(t,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||a_,r[o])}function Fw(n,e,t){let i=this.cache,s=e.length,r=Hh(t,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Gh(r_):o=l_;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Uw(n,e,t){let i=this.cache,s=e.length,r=Hh(t,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||o_,r[o])}function Bw(n){switch(n){case 5126:return xw;case 35664:return vw;case 35665:return Sw;case 35666:return Mw;case 35674:return bw;case 35675:return Ew;case 35676:return ww;case 5124:case 35670:return Tw;case 35667:case 35671:return Aw;case 35668:case 35672:return Cw;case 35669:case 35673:return Rw;case 5125:return Iw;case 36294:return Pw;case 36295:return Nw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Uw}}var If=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yw(t.type)}},Pf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bw(t.type)}},Nf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Cf=/(\w+)(\])?(\[|\.)?/g;function H0(n,e){n.seq.push(e),n.map[e.id]=e}function kw(n,e,t){let i=n.name,s=i.length;for(Cf.lastIndex=0;;){let r=Cf.exec(i),o=Cf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){H0(t,c===void 0?new If(a,n,e):new Pf(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Nf(a),H0(t,u)),t=u}}}var go=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);kw(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function G0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var zw=37297,Hw=0;function Gw(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var V0=new Ye;function Vw(n){lt._getMatrix(V0,lt.workingColorSpace,n);let e=`mat3( ${V0.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case ia:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function W0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Gw(n.getShaderSource(e),a)}else return r}function Ww(n,e){let t=Vw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Xw={[La]:"Linear",[Da]:"Reinhard",[Oa]:"Cineon",[Fa]:"ACESFilmic",[Ba]:"AgX",[fr]:"Neutral",[Ua]:"Custom"};function qw(n,e){let t=Xw[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bh=new N;function Yw(){lt.getLuminanceCoefficients(Bh);let n=Bh.x.toFixed(4),e=Bh.y.toFixed(4),t=Bh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $w(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function Jw(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kw(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ya(n){return n!==""}function X0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function q0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(n){return n.replace(Zw,jw)}function jw(n,e){let t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Lf(t)}var Qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y0(n){return n.replace(Qw,eT)}function eT(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var tT={[ur]:"SHADOWMAP_TYPE_PCF",[ho]:"SHADOWMAP_TYPE_VSM"};function nT(n){return tT[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var iT={[fo]:"ENVMAP_MODE_REFRACTION"};function sT(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":iT[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var rT={[sf]:"ENVMAP_BLENDING_MULTIPLY",[l0]:"ENVMAP_BLENDING_MIX",[c0]:"ENVMAP_BLENDING_ADD"};function oT(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":rT[n.combine]||"ENVMAP_BLENDING_NONE"}function aT(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=nT(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=sT(t),u=oT(t),f=$w(t),d=Jw(r),p=s.createProgram(),y,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ya).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ya).join(`
`),m.length>0&&(m+=`
`)):(y=[$0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),m=[$0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?st.tonemapping_pars_fragment:"",t.toneMapping!==Ui?qw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Ww("linearToOutputTexel",t.outputColorSpace),Yw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),o=Lf(o),o=X0(o,t),o=q0(o,t),a=Lf(a),a=X0(a,t),a=q0(a,t),o=Y0(o),a=Y0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=g+y+o,v=g+m+a,M=G0(s,s.VERTEX_SHADER,x),T=G0(s,s.FRAGMENT_SHADER,v);s.attachShader(p,M),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(A){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(p)||"",D=s.getShaderInfoLog(M)||"",B=s.getShaderInfoLog(T)||"",I=P.trim(),k=D.trim(),X=B.trim(),G=!0,oe=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,M,T);else{let q=W0(s,M,"vertex"),Q=W0(s,T,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+q+`
`+Q)}else I!==""?Ve("WebGLProgram: Program Info Log:",I):(k===""||X==="")&&(oe=!1);oe&&(A.diagnostics={runnable:G,programLog:I,vertexShader:{log:k,prefix:y},fragmentShader:{log:X,prefix:m}})}s.deleteShader(M),s.deleteShader(T),_=new go(s,p),S=Kw(s,p)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(p,zw)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=T,this}var lT=0,Df=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Of(e),t.set(e,i)),i}},Of=class{constructor(e){this.id=lT++,this.code=e,this.usedTimes=0}};function cT(n){return n===Fs||n===Wa||n===Xa}function hT(n,e,t,i,s,r){let o=new oa,a=new Df,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,C,A,P,D){let B=A.fog,I=P.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||k,X),oe=f[_.type],q=i.precision;_.precision!==null&&(q=i.getMaxPrecision(_.precision),q!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=Q!==void 0?Q.length:0,Ae=0;I.morphAttributes.position!==void 0&&(Ae=1),I.morphAttributes.normal!==void 0&&(Ae=2),I.morphAttributes.color!==void 0&&(Ae=3);let Le,$,de,Re;if(oe){let be=ki[oe];Le=be.vertexShader,$=be.fragmentShader}else{Le=_.vertexShader,$=_.fragmentShader;let be=a.getVertexShaderStage(_),Ct=a.getFragmentShaderStage(_);a.update(_,be,Ct),de=be.id,Re=Ct.id}let Be=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Oe=P.isInstancedMesh===!0,dt=P.isBatchedMesh===!0,He=!!_.map,qe=!!_.matcap,Qe=!!G,ie=Qe&&G.isPMREMTexture===!0,ue=!!_.aoMap,z=!!_.lightMap,j=!!_.bumpMap&&_.wireframe===!1,J=!!_.normalMap,Ce=!!_.displacementMap,Me=!!_.emissiveMap,nt=!!_.metalnessMap,at=!!_.roughnessMap,mt=_.anisotropy>0,F=_.clearcoat>0,zt=_.diffuseRoughness>0,et=_.dispersion>0,It=_.retroreflectivity>0,xe=_.iridescence>0,Jt=_.sheen>0,Ge=_.transmission>0,Xe=mt&&!!_.anisotropyMap,R=F&&!!_.clearcoatMap,b=F&&!!_.clearcoatNormalMap,V=F&&!!_.clearcoatRoughnessMap,ae=zt&&!!_.diffuseRoughnessMap,se=xe&&!!_.iridescenceMap,fe=xe&&!!_.iridescenceThicknessMap,ve=Jt&&!!_.sheenColorMap,ee=Jt&&!!_.sheenRoughnessMap,te=!!_.specularMap,ge=!!_.specularColorMap,L=!!_.specularIntensityMap,ne=Ge&&!!_.transmissionMap,K=Ge&&!!_.thicknessMap,_e=!!_.gradientMap,he=!!_.alphaMap,pe=_.alphaTest>0,Fe=!!_.alphaHash,it=!!_.extensions,le=Ui;_.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(le=n.toneMapping);let ke=ie?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,tt={shaderID:oe,shaderType:_.type,shaderName:_.name,vertexShader:Le,fragmentShader:$,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:Re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:dt,batchingColor:dt&&P._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&P.instanceColor!==null,instancingMorph:Oe&&P.morphTexture!==null,outputColorSpace:Be===null?n.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:qe,envMap:Qe,envMapMode:Qe&&G.mapping,envMapPMREM:ie,envMapMaxLod:ie?ke.length-1:null,envMapSize:ie?ke[0].width:null,aoMap:ue,lightMap:z,bumpMap:j,normalMap:J,displacementMap:Ce,emissiveMap:Me,normalMapObjectSpace:J&&_.normalMapType===d0,normalMapTangentSpace:J&&_.normalMapType===Fh,packedNormalMap:J&&_.normalMapType===Fh&&cT(_.normalMap.format),metalnessMap:nt,roughnessMap:at,anisotropy:mt,anisotropyMap:Xe,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:V,diffuseRoughness:zt,diffuseRoughnessMap:ae,dispersion:et,retroreflection:It,iridescence:xe,iridescenceMap:se,iridescenceThicknessMap:fe,sheen:Jt,sheenColorMap:ve,sheenRoughnessMap:ee,specularMap:te,specularColorMap:ge,specularIntensityMap:L,transmission:Ge,transmissionMap:ne,thicknessMap:K,gradientMap:_e,opaque:_.transparent===!1&&_.blending===uo&&_.alphaToCoverage===!1,alphaMap:he,alphaTest:pe,alphaHash:Fe,combine:_.combine,mapUv:He&&d(_.map.channel),aoMapUv:ue&&d(_.aoMap.channel),lightMapUv:z&&d(_.lightMap.channel),bumpMapUv:j&&d(_.bumpMap.channel),normalMapUv:J&&d(_.normalMap.channel),displacementMapUv:Ce&&d(_.displacementMap.channel),emissiveMapUv:Me&&d(_.emissiveMap.channel),metalnessMapUv:nt&&d(_.metalnessMap.channel),roughnessMapUv:at&&d(_.roughnessMap.channel),anisotropyMapUv:Xe&&d(_.anisotropyMap.channel),clearcoatMapUv:R&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:se&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:ee&&d(_.sheenRoughnessMap.channel),specularMapUv:te&&d(_.specularMap.channel),specularColorMapUv:ge&&d(_.specularColorMap.channel),specularIntensityMapUv:L&&d(_.specularIntensityMap.channel),transmissionMapUv:ne&&d(_.transmissionMap.channel),thicknessMapUv:K&&d(_.thicknessMap.channel),alphaMapUv:he&&d(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(J||mt),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(He||he),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&J===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Ae,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:Me&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rn,flipSided:_.side===xn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:it&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&_.extensions.multiDraw===!0||dt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function y(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)S.push(C),S.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(S,_),g(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function x(_){let S=f[_.type],C;if(S){let A=ki[S];C=us.clone(A.uniforms)}else C=_.uniforms;return C}function v(_,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new aT(n,S,_,s),c.push(C),h.set(S,C)),C}function M(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:x,acquireProgram:v,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:w}}function uT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function dT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function J0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function K0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,y,m,g){let x=n[e];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:g},n[e]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=o(f),x.groupOrder=y,x.renderOrder=f.renderOrder,x.z=m,x.group=g),e++,x}function l(f,d,p,y,m,g,x){x.reversedDepth===!0&&(m=-m);let v=a(f,d,p,y,m,g);p.transmission>0?i.push(v):p.transparent===!0?s.push(v):t.push(v)}function c(f,d,p,y,m,g){let x=a(f,d,p,y,m,g);p.transmission>0?i.unshift(x):p.transparent===!0?s.unshift(x):t.unshift(x)}function h(f,d){t.length>1&&t.sort(f||dT),i.length>1&&i.sort(d||J0),s.length>1&&s.sort(d||J0)}function u(){for(let f=e,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function fT(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new K0,n.set(i,[o])):s>=r.length?(o=new K0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function pT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Ee};break;case"SpotLight":t={position:new N,direction:new N,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function mT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var gT=0;function _T(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yT(n){let e=new pT,t=mT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,r=new Rt,o=new Rt;function a(c){let h=0,u=0,f=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,p=0,y=0,m=0,g=0,x=0,v=0,M=0,T=0,w=0,_=0,S=0,C=0,A=0;c.sort(_T);for(let D=0,B=c.length;D<B;D++){let I=c[D],k=I.color,X=I.intensity,G=I.distance,oe=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Fs?oe=I.shadow.map.texture:oe=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*X,u+=k.g*X,f+=k.b*X;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],X);A++}else if(I.isSunLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,Z=t.get(I);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[p]=Z,i.sunShadowMap[p]=oe;let Ae=Q.getViewportCount();for(let Le=0;Le<Ae;Le++)i.sunShadowMatrix[y+Le]=Q.getMatrix(Le),i.sunShadowCascade[y+Le]=Q._cascadeData[Le];y+=Ae,p++}i.sun[d]=q,d++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,Z=t.get(I);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=oe,i.directionalShadowMatrix[m]=I.shadow.matrix,T++}i.directional[m]=q,m++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(k).multiplyScalar(X),q.distance=G,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[x]=q;let Q=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,Q.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[x]=Q.matrix,I.castShadow){let Z=t.get(I);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=oe,_++}x++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(k).multiplyScalar(X),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=q,v++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let Q=I.shadow,Z=t.get(I);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=oe,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=q,g++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(X),q.groundColor.copy(I.groundColor).multiplyScalar(X),i.hemi[M]=q,M++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let P=i.hash;(P.sunLength!==d||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==v||P.hemiLength!==M||P.numSunShadows!==p||P.numDirectionalShadows!==T||P.numPointShadows!==w||P.numSpotShadows!==_||P.numSpotMaps!==S||P.numLightProbes!==A)&&(i.sun.length=d,i.directional.length=m,i.spot.length=x,i.rectArea.length=v,i.point.length=g,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-C,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,P.sunLength=d,P.directionalLength=m,P.pointLength=g,P.spotLength=x,P.rectAreaLength=v,P.hemiLength=M,P.numSunShadows=p,P.numDirectionalShadows=T,P.numPointShadows=w,P.numSpotShadows=_,P.numSpotMaps=S,P.numLightProbes=A,i.version=gT++)}function l(c,h){let u=0,f=0,d=0,p=0,y=0,m=0,g=h.matrixWorldInverse;for(let x=0,v=c.length;x<v;x++){let M=c[x];if(M.isSunLight){let T=i.sun[u];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let T=i.directional[f];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),f++}else if(M.isSpotLight){let T=i.spot[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let T=i.rectArea[y];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function Z0(n){let e=new yT(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){i.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function xT(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Z0(n),e.set(s,[a])):r>=o.length?(a=new Z0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var vT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ST=`uniform sampler2D shadow_pass;
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
}`,MT=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],bT=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],j0=new Rt,qa=new N,Rf=new N;function ET(n,e,t){let i=new Cs,s=new re,r=new re,o=new Bt,a=new Fc,l=new Uc,c={},h=t.maxTextureSize,u={[Ds]:xn,[xn]:Ds,[Rn]:Rn},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:vT,fragmentShader:ST}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new kt;p.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ut(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let g=this.type;this.render=function(w,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Vg&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ur);let C=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(as),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=g!==this.type;B&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=w.length;I<k;I++){let X=w[I],G=X.shadow;if(G===void 0){Ve("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let oe=G.getFrameExtents();s.multiply(oe),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,G.mapSize.y=r.y));let q=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||B===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ho){if(X.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new en(s.x,s.y,{format:Fs,type:on,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new os(s.x,s.y,ci),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=ts,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=fn,G.map.depthTexture.magFilter=fn}else X.isPointLight?(G.map=new $a(s.x),G.map.depthTexture=new pa(s.x,Si)):(G.map=new en(s.x,s.y),G.map.depthTexture=new os(s.x,s.y,Si)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=ts,this.type===ur?(G.map.depthTexture.compareFunction=q?ff:df,G.map.depthTexture.minFilter=Ln,G.map.depthTexture.magFilter=Ln):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=fn,G.map.depthTexture.magFilter=fn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,S);let Z=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let Ae=0;Ae<Q;Ae++){let Le=G.getCamera(Ae);if(X.isPointLight){let $=G.camera,de=G.matrix,Re=X.distance||$.far;Re!==$.far&&($.far=Re,$.updateProjectionMatrix()),qa.setFromMatrixPosition(X.matrixWorld),$.position.copy(qa),Rf.copy($.position),Rf.add(MT[Ae]),$.up.copy(bT[Ae]),$.lookAt(Rf),$.updateMatrixWorld(),de.makeTranslation(-qa.x,-qa.y,-qa.z),j0.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),G._frustum.setFromProjectionMatrix(j0,$.coordinateSystem,$.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,Ae),n.clear();else{Ae===0&&(n.setRenderTarget(G.map),n.clear());let $=G.getViewport(Ae);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),D.viewport(o)}i=G.getFrustum(Ae),M(_,S,Le,X,Z,this.type)}G.isPointLightShadow!==!0&&this.type===ho&&x(G,S),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(C,A,P)};function x(w,_){let S=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new en(s.x,s.y,{format:Fs,type:on}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(_,null,S,f,y,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(_,null,S,d,y,null)}function v(w,_,S,C){let A=null,P=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)A=P;else if(A=S.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let D=A.uuid,B=_.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let k=I[B];k===void 0&&(k=A.clone(),I[B]=k,_.addEventListener("dispose",T)),A=k}if(A.visible=_.visible,A.wireframe=_.wireframe,C===ho?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:u[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=n.properties.get(A);D.light=S}return A}function M(w,_,S,C,A,P){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===ho)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let I=e.update(w),k=w.material;if(Array.isArray(k)){let X=I.groups;for(let G=0,oe=X.length;G<oe;G++){let q=X[G],Q=k[q.materialIndex];if(Q&&Q.visible){let Z=v(w,Q,C,P);w.onBeforeShadow(n,w,_,S,I,Z,q),n.renderBufferDirect(S,null,I,Z,w,q),w.onAfterShadow(n,w,_,S,I,Z,q)}}}else if(k.visible){let X=v(w,k,C,P);w.onBeforeShadow(n,w,_,S,I,X,null),n.renderBufferDirect(S,null,I,X,w,null),w.onAfterShadow(n,w,_,S,I,X,null)}}let B=w.children;for(let I=0,k=B.length;I<k;I++)M(B[I],_,S,C,A,P)}function T(w){w.target.removeEventListener("dispose",T);for(let S in c){let C=c[S],A=w.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function wT(n,e){function t(){let L=!1,ne=new Bt,K=null,_e=new Bt(0,0,0,0);return{setMask:function(he){K!==he&&!L&&(n.colorMask(he,he,he,he),K=he)},setLocked:function(he){L=he},setClear:function(he,pe,Fe,it,le){le===!0&&(he*=it,pe*=it,Fe*=it),ne.set(he,pe,Fe,it),_e.equals(ne)===!1&&(n.clearColor(he,pe,Fe,it),_e.copy(ne))},reset:function(){L=!1,K=null,_e.set(-1,0,0,0)}}}function i(){let L=!1,ne=!1,K=null,_e=null,he=null;return{setReversed:function(pe){if(ne!==pe){let Fe=e.get("EXT_clip_control");pe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ne=pe;let it=he;he=null,this.setClear(it)}},getReversed:function(){return ne},setTest:function(pe){pe?me(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(pe){K!==pe&&!L&&(n.depthMask(pe),K=pe)},setFunc:function(pe){if(ne&&(pe=b0[pe]),_e!==pe){switch(pe){case mc:n.depthFunc(n.NEVER);break;case gc:n.depthFunc(n.ALWAYS);break;case _c:n.depthFunc(n.LESS);break;case Zr:n.depthFunc(n.LEQUAL);break;case yc:n.depthFunc(n.EQUAL);break;case xc:n.depthFunc(n.GEQUAL);break;case vc:n.depthFunc(n.GREATER);break;case Sc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=pe}},setLocked:function(pe){L=pe},setClear:function(pe){he!==pe&&(he=pe,ne&&(pe=1-pe),n.clearDepth(pe))},reset:function(){L=!1,K=null,_e=null,he=null,ne=!1}}}function s(){let L=!1,ne=null,K=null,_e=null,he=null,pe=null,Fe=null,it=null,le=null;return{setTest:function(ke){L||(ke?me(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(ke){ne!==ke&&!L&&(n.stencilMask(ke),ne=ke)},setFunc:function(ke,tt,be){(K!==ke||_e!==tt||he!==be)&&(n.stencilFunc(ke,tt,be),K=ke,_e=tt,he=be)},setOp:function(ke,tt,be){(pe!==ke||Fe!==tt||it!==be)&&(n.stencilOp(ke,tt,be),pe=ke,Fe=tt,it=be)},setLocked:function(ke){L=ke},setClear:function(ke){le!==ke&&(n.clearStencil(ke),le=ke)},reset:function(){L=!1,ne=null,K=null,_e=null,he=null,pe=null,Fe=null,it=null,le=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],y=null,m=!1,g=null,x=null,v=null,M=null,T=null,w=null,_=null,S=new Ee(0,0,0),C=0,A=!1,P=null,D=null,B=null,I=null,k=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,oe=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=oe>=1):q.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=oe>=2);let Q=null,Z={},Ae=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),$=new Bt().fromArray(Ae),de=new Bt().fromArray(Le);function Re(L,ne,K,_e){let he=new Uint8Array(4),pe=n.createTexture();n.bindTexture(L,pe),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<K;Fe++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ne+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return pe}let Be={};Be[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(Zr),j(!1),J(jd),me(n.CULL_FACE),ue(as);function me(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Oe(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function dt(L,ne){return f[L]!==ne?(n.bindFramebuffer(L,ne),f[L]=ne,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ne),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function He(L,ne){let K=p,_e=!1;if(L){K=d.get(ne),K===void 0&&(K=[],d.set(ne,K));let he=L.textures;if(K.length!==he.length||K[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Fe=he.length;pe<Fe;pe++)K[pe]=n.COLOR_ATTACHMENT0+pe;K.length=he.length,_e=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,_e=!0);_e&&n.drawBuffers(K)}function qe(L){return y!==L?(n.useProgram(L),y=L,!0):!1}let Qe={[dr]:n.FUNC_ADD,[Xg]:n.FUNC_SUBTRACT,[qg]:n.FUNC_REVERSE_SUBTRACT};Qe[Yg]=n.MIN,Qe[$g]=n.MAX;let ie={[Jg]:n.ZERO,[Kg]:n.ONE,[Zg]:n.SRC_COLOR,[tf]:n.SRC_ALPHA,[i0]:n.SRC_ALPHA_SATURATE,[t0]:n.DST_COLOR,[Qg]:n.DST_ALPHA,[jg]:n.ONE_MINUS_SRC_COLOR,[nf]:n.ONE_MINUS_SRC_ALPHA,[n0]:n.ONE_MINUS_DST_COLOR,[e0]:n.ONE_MINUS_DST_ALPHA,[s0]:n.CONSTANT_COLOR,[r0]:n.ONE_MINUS_CONSTANT_COLOR,[o0]:n.CONSTANT_ALPHA,[a0]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(L,ne,K,_e,he,pe,Fe,it,le,ke){if(L===as){m===!0&&(Oe(n.BLEND),m=!1);return}if(m===!1&&(me(n.BLEND),m=!0),L!==Wg){if(L!==g||ke!==A){if((x!==dr||T!==dr)&&(n.blendEquation(n.FUNC_ADD),x=dr,T=dr),ke)switch(L){case uo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Os:n.blendFunc(n.ONE,n.ONE);break;case Qd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ef:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:We("WebGLState: Invalid blending: ",L);break}else switch(L){case uo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Qd:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ef:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",L);break}v=null,M=null,w=null,_=null,S.set(0,0,0),C=0,g=L,A=ke}return}he=he||ne,pe=pe||K,Fe=Fe||_e,(ne!==x||he!==T)&&(n.blendEquationSeparate(Qe[ne],Qe[he]),x=ne,T=he),(K!==v||_e!==M||pe!==w||Fe!==_)&&(n.blendFuncSeparate(ie[K],ie[_e],ie[pe],ie[Fe]),v=K,M=_e,w=pe,_=Fe),(it.equals(S)===!1||le!==C)&&(n.blendColor(it.r,it.g,it.b,le),S.copy(it),C=le),g=L,A=!1}function z(L,ne){L.side===Rn?Oe(n.CULL_FACE):me(n.CULL_FACE);let K=L.side===xn;ne&&(K=!K),j(K),L.blending===uo&&L.transparent===!1?ue(as):ue(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let _e=L.stencilWrite;a.setTest(_e),_e&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(L){P!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),P=L)}function J(L){L!==Hg?(me(n.CULL_FACE),L!==D&&(L===jd?n.cullFace(n.BACK):L===Gg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),D=L}function Ce(L){L!==B&&(G&&n.lineWidth(L),B=L)}function Me(L,ne,K){L?(me(n.POLYGON_OFFSET_FILL),(I!==ne||k!==K)&&(I=ne,k=K,o.getReversed()&&(ne=-ne,K=-K),n.polygonOffset(ne,K))):Oe(n.POLYGON_OFFSET_FILL)}function nt(L){L?me(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function at(L){L===void 0&&(L=n.TEXTURE0+X-1),Q!==L&&(n.activeTexture(L),Q=L)}function mt(L,ne,K){K===void 0&&(Q===null?K=n.TEXTURE0+X-1:K=Q);let _e=Z[K];_e===void 0&&(_e={type:void 0,texture:void 0},Z[K]=_e),(_e.type!==L||_e.texture!==ne)&&(Q!==K&&(n.activeTexture(K),Q=K),n.bindTexture(L,ne||Be[L]),_e.type=L,_e.texture=ne)}function F(){let L=Z[Q];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function zt(){try{n.compressedTexImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function et(){try{n.compressedTexImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function It(){try{n.texSubImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function xe(){try{n.texSubImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function Jt(){try{n.compressedTexSubImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function Ge(){try{n.compressedTexSubImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function Xe(){try{n.texStorage2D(...arguments)}catch(L){We("WebGLState:",L)}}function R(){try{n.texStorage3D(...arguments)}catch(L){We("WebGLState:",L)}}function b(){try{n.texImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function V(){try{n.texImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function ae(L){return u[L]!==void 0?u[L]:n.getParameter(L)}function se(L,ne){u[L]!==ne&&(n.pixelStorei(L,ne),u[L]=ne)}function fe(L){$.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),$.copy(L))}function ve(L){de.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),de.copy(L))}function ee(L,ne){let K=c.get(ne);K===void 0&&(K=new WeakMap,c.set(ne,K));let _e=K.get(L);_e===void 0&&(_e=n.getUniformBlockIndex(ne,L.name),n.uniformBlockBinding(ne,_e,_e),K.set(L,_e))}function te(L,ne,K){let he=c.get(ne).get(L);l[he]!==K&&(n.bindBufferBase(n.UNIFORM_BUFFER,he,K),l[he]=K)}function ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,Z={},f={},l={},d=new WeakMap,p=[],y=null,m=!1,g=null,x=null,v=null,M=null,T=null,w=null,_=null,S=new Ee(0,0,0),C=0,A=!1,P=null,D=null,B=null,I=null,k=null,$.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:Oe,bindFramebuffer:dt,drawBuffers:He,useProgram:qe,setBlending:ue,setMaterial:z,setFlipSided:j,setCullFace:J,setLineWidth:Ce,setPolygonOffset:Me,setScissorTest:nt,activeTexture:at,bindTexture:mt,unbindTexture:F,compressedTexImage2D:zt,compressedTexImage3D:et,texImage2D:b,texImage3D:V,pixelStorei:se,getParameter:ae,updateUBOMapping:ee,uniformBlockBinding:te,texStorage2D:Xe,texStorage3D:R,texSubImage2D:It,texSubImage3D:xe,compressedTexSubImage2D:Jt,compressedTexSubImage3D:Ge,scissor:fe,viewport:ve,reset:ge}}function TT(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,y=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return m?new OffscreenCanvas(R,b):sa("canvas")}function x(R,b,V){let ae=1,se=Xe(R);if((se.width>V||se.height>V)&&(ae=V/Math.max(se.width,se.height)),ae<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let fe=Math.floor(ae*se.width),ve=Math.floor(ae*se.height);f===void 0&&(f=g(fe,ve));let ee=b?g(fe,ve):f;return ee.width=fe,ee.height=ve,ee.getContext("2d").drawImage(R,0,0,fe,ve),Ve("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+fe+"x"+ve+")."),ee}else return"data"in R&&Ve("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function v(R){return R.generateMipmaps}function M(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,b,V,ae,se,fe=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ve;ae&&(ve=e.get("EXT_texture_norm16"),ve||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=b;if(b===n.RED&&(V===n.FLOAT&&(ee=n.R32F),V===n.HALF_FLOAT&&(ee=n.R16F),V===n.UNSIGNED_BYTE&&(ee=n.R8),V===n.UNSIGNED_SHORT&&ve&&(ee=ve.R16_EXT),V===n.SHORT&&ve&&(ee=ve.R16_SNORM_EXT)),b===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(ee=n.R8UI),V===n.UNSIGNED_SHORT&&(ee=n.R16UI),V===n.UNSIGNED_INT&&(ee=n.R32UI),V===n.BYTE&&(ee=n.R8I),V===n.SHORT&&(ee=n.R16I),V===n.INT&&(ee=n.R32I)),b===n.RG&&(V===n.FLOAT&&(ee=n.RG32F),V===n.HALF_FLOAT&&(ee=n.RG16F),V===n.UNSIGNED_BYTE&&(ee=n.RG8),V===n.UNSIGNED_SHORT&&ve&&(ee=ve.RG16_EXT),V===n.SHORT&&ve&&(ee=ve.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(ee=n.RG8UI),V===n.UNSIGNED_SHORT&&(ee=n.RG16UI),V===n.UNSIGNED_INT&&(ee=n.RG32UI),V===n.BYTE&&(ee=n.RG8I),V===n.SHORT&&(ee=n.RG16I),V===n.INT&&(ee=n.RG32I)),b===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),V===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),V===n.UNSIGNED_INT&&(ee=n.RGB32UI),V===n.BYTE&&(ee=n.RGB8I),V===n.SHORT&&(ee=n.RGB16I),V===n.INT&&(ee=n.RGB32I)),b===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),V===n.UNSIGNED_INT&&(ee=n.RGBA32UI),V===n.BYTE&&(ee=n.RGBA8I),V===n.SHORT&&(ee=n.RGBA16I),V===n.INT&&(ee=n.RGBA32I)),b===n.RGB&&(V===n.UNSIGNED_SHORT&&ve&&(ee=ve.RGB16_EXT),V===n.SHORT&&ve&&(ee=ve.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),b===n.RGBA){let te=fe?ia:lt.getTransfer(se);V===n.FLOAT&&(ee=n.RGBA32F),V===n.HALF_FLOAT&&(ee=n.RGBA16F),V===n.UNSIGNED_BYTE&&(ee=te===xt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&ve&&(ee=ve.RGBA16_EXT),V===n.SHORT&&ve&&(ee=ve.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(R,b){let V;return R?b===null||b===Si||b===mr?V=n.DEPTH24_STENCIL8:b===ci?V=n.DEPTH32F_STENCIL8:b===po&&(V=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Si||b===mr?V=n.DEPTH_COMPONENT24:b===ci?V=n.DEPTH_COMPONENT32F:b===po&&(V=n.DEPTH_COMPONENT16),V}function S(R,b){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==Ln?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){let b=new WeakRef(R);i.get(R).__ref=b,p.add(b),y.register(R,b,b)}function A(R){let b=i.get(R).__ref;b!==void 0&&(p.delete(b),y.unregister(b))}function P(R){B(R.target)}function D(R){I(R.target)}function B(R){R.removeEventListener("dispose",P),A(R),X(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function I(R){R.removeEventListener("dispose",D),A(R),oe(R)}function k(){for(let R of p){let b=R.deref();b!==void 0&&(b.isRenderTarget===!0?I(b):B(b))}p.clear(),u.clear()}function X(R){let b=i.get(R);if(b.__webglInit===void 0)return;let V=R.source,ae=d.get(V);if(ae){let se=ae[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&G(R),Object.keys(ae).length===0&&d.delete(V)}i.remove(R)}function G(R){let b=i.get(R);n.deleteTexture(b.__webglTexture);let V=R.source,ae=d.get(V);delete ae[b.__cacheKey],o.memory.textures--}function oe(R){let b=i.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();let V=R.depthTexture;if(V&&V.renderTarget===R&&B(V),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let fe=0;fe<b.__webglFramebuffer[se].length;fe++)n.deleteFramebuffer(b.__webglFramebuffer[se][fe]);else n.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)n.deleteFramebuffer(b.__webglFramebuffer[se]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ae=R.textures;for(let se=0,fe=ae.length;se<fe;se++){let ve=i.get(ae[se]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(ae[se])}i.remove(R)}let q=0;function Q(){q=0}function Z(){return q}function Ae(R){q=R}function Le(){let R=q;return R>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,R}function $(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function de(R,b){let V=i.get(R);if(R.isVideoTexture&&Jt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let ae=R.image;if(ae===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{z(V,R,b);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+b)}function Re(R,b){let V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){z(V,R,b);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+b)}function Be(R,b){let V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){z(V,R,b);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+b)}function me(R,b){let V=i.get(R);if(R.version>0&&V.__version!==R.version){j(V,R,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+b)}let Oe={[Mc]:n.REPEAT,[Ri]:n.CLAMP_TO_EDGE,[bc]:n.MIRRORED_REPEAT},dt={[fn]:n.NEAREST,[h0]:n.NEAREST_MIPMAP_NEAREST,[ka]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[jc]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},He={[p0]:n.NEVER,[pf]:n.ALWAYS,[m0]:n.LESS,[df]:n.LEQUAL,[g0]:n.EQUAL,[ff]:n.GEQUAL,[_0]:n.GREATER,[y0]:n.NOTEQUAL};function qe(R,b){if(b.type===ci&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ln||b.magFilter===jc||b.magFilter===ka||b.magFilter===ls||b.minFilter===Ln||b.minFilter===jc||b.minFilter===ka||b.minFilter===ls)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Oe[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Oe[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Oe[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,dt[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,dt[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,He[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fn||b.minFilter!==ka&&b.minFilter!==ls||b.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Qe(R,b){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P),C(b));let ae=b.source,se=d.get(ae);se===void 0&&(se={},d.set(ae,se));let fe=$(b);if(fe!==R.__cacheKey){se[fe]===void 0&&(se[fe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),se[fe].usedTimes++;let ve=se[R.__cacheKey];ve!==void 0&&(se[R.__cacheKey].usedTimes--,ve.usedTimes===0&&G(b)),R.__cacheKey=fe,R.__webglTexture=se[fe].texture}return V}function ie(R,b,V){return Math.floor(Math.floor(R/V)/b)}function ue(R,b,V,ae){let fe=R.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,V,ae,b.data);else{fe.sort((L,ne)=>L.start-ne.start);let ve=0;for(let L=1;L<fe.length;L++){let ne=fe[ve],K=fe[L],_e=ne.start+ne.count,he=ie(K.start,b.width,4),pe=ie(ne.start,b.width,4);K.start<=_e+1&&he===pe&&ie(K.start+K.count-1,b.width,4)===he?ne.count=Math.max(ne.count,K.start+K.count-ne.start):(++ve,fe[ve]=K)}fe.length=ve+1;let ee=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let L=0,ne=fe.length;L<ne;L++){let K=fe[L],_e=Math.floor(K.start/4),he=Math.ceil(K.count/4),pe=_e%b.width,Fe=Math.floor(_e/b.width),it=he,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(n.TEXTURE_2D,0,pe,Fe,it,le,V,ae,b.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function z(R,b,V){let ae=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=n.TEXTURE_3D);let se=Qe(R,b),fe=b.source;t.bindTexture(ae,R.__webglTexture,n.TEXTURE0+V);let ve=i.get(fe);if(fe.version!==ve.__version||se===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let le=lt.getPrimaries(lt.workingColorSpace),ke=b.colorSpace===hs?null:lt.getPrimaries(b.colorSpace),tt=b.colorSpace===hs||le===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let te=x(b.image,!1,s.maxTextureSize);te=Ge(b,te);let ge=r.convert(b.format,b.colorSpace),L=r.convert(b.type),ne=w(b.internalFormat,ge,L,b.normalized,b.colorSpace,b.isVideoTexture);qe(ae,b);let K,_e=b.mipmaps,he=b.isVideoTexture!==!0,pe=ve.__version===void 0||se===!0,Fe=fe.dataReady,it=S(b,te);if(b.isDepthTexture)ne=_(b.format===cs,b.type),pe&&(he?t.texStorage2D(n.TEXTURE_2D,1,ne,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,ne,te.width,te.height,0,ge,L,null));else if(b.isDataTexture)if(_e.length>0){he&&pe&&t.texStorage2D(n.TEXTURE_2D,it,ne,_e[0].width,_e[0].height);for(let le=0,ke=_e.length;le<ke;le++)K=_e[le],he?Fe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,K.width,K.height,ge,L,K.data):t.texImage2D(n.TEXTURE_2D,le,ne,K.width,K.height,0,ge,L,K.data);b.generateMipmaps=!1}else he?(pe&&t.texStorage2D(n.TEXTURE_2D,it,ne,te.width,te.height),Fe&&ue(b,te,ge,L)):t.texImage2D(n.TEXTURE_2D,0,ne,te.width,te.height,0,ge,L,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){he&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,ne,_e[0].width,_e[0].height,te.depth);for(let le=0,ke=_e.length;le<ke;le++)if(K=_e[le],b.format!==Mi)if(ge!==null)if(he){if(Fe)if(b.layerUpdates.size>0){let tt=Mf(K.width,K.height,b.format,b.type);for(let be of b.layerUpdates){let Ct=K.data.subarray(be*tt/K.data.BYTES_PER_ELEMENT,(be+1)*tt/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,be,K.width,K.height,1,ge,Ct)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,K.width,K.height,te.depth,ge,K.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,ne,K.width,K.height,te.depth,0,K.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,K.width,K.height,te.depth,ge,L,K.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,ne,K.width,K.height,te.depth,0,ge,L,K.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{he&&pe&&t.texStorage2D(n.TEXTURE_2D,it,ne,_e[0].width,_e[0].height);for(let le=0,ke=_e.length;le<ke;le++)K=_e[le],b.format!==Mi?ge!==null?he?Fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,K.width,K.height,ge,K.data):t.compressedTexImage2D(n.TEXTURE_2D,le,ne,K.width,K.height,0,K.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Fe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,K.width,K.height,ge,L,K.data):t.texImage2D(n.TEXTURE_2D,le,ne,K.width,K.height,0,ge,L,K.data)}else if(b.isDataArrayTexture)if(he){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,ne,te.width,te.height,te.depth),Fe)if(b.layerUpdates.size>0){let le=Mf(te.width,te.height,b.format,b.type);for(let ke of b.layerUpdates){let tt=te.data.subarray(ke*le/te.data.BYTES_PER_ELEMENT,(ke+1)*le/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ke,te.width,te.height,1,ge,L,tt)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,L,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,ge,L,te.data);else if(b.isData3DTexture)he?(pe&&t.texStorage3D(n.TEXTURE_3D,it,ne,te.width,te.height,te.depth),Fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,L,te.data)):t.texImage3D(n.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,ge,L,te.data);else if(b.isFramebufferTexture){if(pe)if(he)t.texStorage2D(n.TEXTURE_2D,it,ne,te.width,te.height);else{let le=te.width,ke=te.height;for(let tt=0;tt<it;tt++)t.texImage2D(n.TEXTURE_2D,tt,ne,le,ke,0,ge,L,null),le>>=1,ke>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),te.parentNode!==le){le.appendChild(te),u.add(b),le.onpaint=ke=>{let tt=ke.changedElements;for(let be of u)tt.includes(be.image)&&(be.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{let tt=n.RGBA,be=n.RGBA,Ct=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,tt,be,Ct,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(_e.length>0){if(he&&pe){let le=Xe(_e[0]);t.texStorage2D(n.TEXTURE_2D,it,ne,le.width,le.height)}for(let le=0,ke=_e.length;le<ke;le++)K=_e[le],he?Fe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ge,L,K):t.texImage2D(n.TEXTURE_2D,le,ne,ge,L,K);b.generateMipmaps=!1}else if(he){if(pe){let le=Xe(te);t.texStorage2D(n.TEXTURE_2D,it,ne,le.width,le.height)}Fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,L,te)}else t.texImage2D(n.TEXTURE_2D,0,ne,ge,L,te);v(b)&&b.mipmapsAutoUpdate===!0&&M(ae),ve.__version=fe.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function j(R,b,V){if(b.image.length!==6)return;let ae=Qe(R,b),se=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);let fe=i.get(se);if(se.version!==fe.__version||ae===!0){t.activeTexture(n.TEXTURE0+V);let ve=lt.getPrimaries(lt.workingColorSpace),ee=b.colorSpace===hs?null:lt.getPrimaries(b.colorSpace),te=b.colorSpace===hs||ve===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ge=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,ne=[];for(let be=0;be<6;be++)!ge&&!L?ne[be]=x(b.image[be],!0,s.maxCubemapSize):ne[be]=L?b.image[be].image:b.image[be],ne[be]=Ge(b,ne[be]);let K=ne[0],_e=r.convert(b.format,b.colorSpace),he=r.convert(b.type),pe=w(b.internalFormat,_e,he,b.normalized,b.colorSpace),Fe=b.isVideoTexture!==!0,it=fe.__version===void 0||ae===!0,le=se.dataReady,ke=S(b,K);qe(n.TEXTURE_CUBE_MAP,b);let tt;if(b.isDepthTexture){if(pe=_(b.format===cs,b.type),it)if(Fe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,pe,K.width,K.height);else for(let be=0;be<6;be++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,pe,K.width,K.height,0,_e,he,null)}else if(ge){Fe&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,pe,K.width,K.height);for(let be=0;be<6;be++){tt=ne[be].mipmaps;for(let Ct=0;Ct<tt.length;Ct++){let hn=tt[Ct];b.format!==Mi?_e!==null?Fe?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct,0,0,hn.width,hn.height,_e,hn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct,pe,hn.width,hn.height,0,hn.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct,0,0,hn.width,hn.height,_e,he,hn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct,pe,hn.width,hn.height,0,_e,he,hn.data)}}}else{if(tt=b.mipmaps,Fe&&it){tt.length>0&&ke++;let be=Xe(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,pe,be.width,be.height)}for(let be=0;be<6;be++)if(L){Fe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ne[be].width,ne[be].height,_e,he,ne[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,pe,ne[be].width,ne[be].height,0,_e,he,ne[be].data);for(let Ct=0;Ct<tt.length;Ct++){let vs=tt[Ct].image[be].image;Fe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct+1,0,0,vs.width,vs.height,_e,he,vs.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct+1,pe,vs.width,vs.height,0,_e,he,vs.data)}}else{Fe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,_e,he,ne[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,pe,_e,he,ne[be]);for(let Ct=0;Ct<tt.length;Ct++){let hn=tt[Ct];Fe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct+1,0,0,_e,he,hn.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct+1,pe,_e,he,hn.image[be])}}}v(b)&&b.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),fe.__version=se.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function J(R,b,V,ae,se,fe){let ve=r.convert(V.format,V.colorSpace),ee=r.convert(V.type),te=w(V.internalFormat,ve,ee,V.normalized,V.colorSpace),ge=i.get(b),L=i.get(V);if(L.__renderTarget=b,!ge.__hasExternalTextures){let ne=Math.max(1,b.width>>fe),K=Math.max(1,b.height>>fe);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,fe,te,ne,K,b.depth,0,ve,ee,null):t.texImage2D(se,fe,te,ne,K,0,ve,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),xe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,se,L.__webglTexture,0,It(b)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,se,L.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(R,b,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){let ae=b.depthTexture,se=ae&&ae.isDepthTexture?ae.type:null,fe=_(b.stencilBuffer,se),ve=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It(b),fe,b.width,b.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,It(b),fe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,fe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,R)}else{let ae=b.textures;for(let se=0;se<ae.length;se++){let fe=ae[se],ve=r.convert(fe.format,fe.colorSpace),ee=r.convert(fe.type),te=w(fe.internalFormat,ve,ee,fe.normalized,fe.colorSpace);xe(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It(b),te,b.width,b.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,It(b),te,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,te,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(R,b,V){let ae=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=i.get(b.depthTexture);se.__renderTarget=b;let fe=ae?b.depthTexture.image[0]:b.depthTexture.image;(!se.__webglTexture||fe.width!==b.width||fe.height!==b.height)&&(fe.width=b.width,fe.height=b.height,b.depthTexture.needsUpdate=!0),ae?me(b.depthTexture,0):de(b.depthTexture,0);let ve=se.__webglTexture,ee=It(b),te=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,ge=b.depthTexture.format===cs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===ts)xe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,te,ve,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,ge,te,ve,0);else if(b.depthTexture.format===cs)xe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,te,ve,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,ge,te,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(R){let b=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let ae=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){let se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",se)};ae.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=ae}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(V)for(let ae=0;ae<6;ae++)Me(b.__webglFramebuffer[ae],R,ae);else R.texture.mipmaps.length>0?Me(b.__webglFramebuffer[0],R,0):Me(b.__webglFramebuffer,R,0);else if(V){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=n.createRenderbuffer(),Ce(b.__webglDepthbuffer[ae],R,!1);else{let se=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,fe)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Ce(b.__webglDepthbuffer,R,!1);else{let se=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,fe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(R,b,V){let ae=i.get(R);b!==void 0&&J(ae.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&nt(R)}function mt(R){let b=R.texture,V=i.get(R),ae=i.get(b);R.addEventListener("dispose",D),C(R);let se=R.textures,fe=R.isWebGLCubeRenderTarget===!0,ve=se.length>1;if(ve||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=b.version,o.memory.textures++),fe){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(b.mipmaps.length>0){V.__webglFramebuffer[ee]=[];for(let te=0;te<b.mipmaps.length;te++)V.__webglFramebuffer[ee][te]=n.createFramebuffer()}else V.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(b.mipmaps.length>0){V.__webglFramebuffer=[];for(let ee=0;ee<b.mipmaps.length;ee++)V.__webglFramebuffer[ee]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(ve)for(let ee=0,te=se.length;ee<te;ee++){let ge=i.get(se[ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&xe(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ee=0;ee<se.length;ee++){let te=se[ee];V.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ee]);let ge=r.convert(te.format,te.colorSpace),L=r.convert(te.type),ne=w(te.internalFormat,ge,L,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),K=It(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,K,ne,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,V.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),qe(n.TEXTURE_CUBE_MAP,b);for(let ee=0;ee<6;ee++)if(b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)J(V.__webglFramebuffer[ee][te],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,te);else J(V.__webglFramebuffer[ee],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);v(b)?M(n.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(ve){for(let ee=0,te=se.length;ee<te;ee++){let ge=se[ee],L=i.get(ge),ne=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,L.__webglTexture),qe(ne,ge),J(V.__webglFramebuffer,R,ge,n.COLOR_ATTACHMENT0+ee,ne,0),v(ge)&&M(ne)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,ae.__webglTexture),qe(ee,b),b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)J(V.__webglFramebuffer[te],R,b,n.COLOR_ATTACHMENT0,ee,te);else J(V.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,ee,0);v(b)?M(ee):b.mipmaps.length>0&&n.texParameteri(ee,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&nt(R)}function F(R){let b=R.textures;for(let V=0,ae=b.length;V<ae;V++){let se=b[V];if(v(se)&&se.mipmapsAutoUpdate===!0){let fe=T(R),ve=i.get(se).__webglTexture;t.bindTexture(fe,ve),M(fe),t.unbindTexture()}}}let zt=[];function et(R){if(R.samples>0){if(xe(R)===!1){let b=R.textures,V=R.width,ae=R.height,se=n.COLOR_BUFFER_BIT,fe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(R),ee=b.length>1;if(ee)for(let ge=0;ge<b.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ge=0;ge<b.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[ge]);let L=i.get(b[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,V,ae,0,0,V,ae,se,n.NEAREST),l===!0&&(zt.length=0,zt.push(n.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&zt.push(fe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,zt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let ge=0;ge<b.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,ve.__webglColorRenderbuffer[ge]);let L=i.get(b[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,L,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function It(R){return Math.min(s.maxSamples,R.samples)}function xe(R){let b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Jt(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Ge(R,b){let V=R.colorSpace,ae=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==na&&V!==hs&&(lt.getTransfer(V)===xt?(ae!==Mi||se!==qn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",V)),b}function Xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Le,this.resetTextureUnits=Q,this.getTextureUnits=Z,this.setTextureUnits=Ae,this.setTexture2D=de,this.setTexture2DArray=Re,this.setTexture3D=Be,this.setTextureCube=me,this.rebindTextures=at,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=xe,this.dispose=k}function AT(n,e){function t(i,s=hs){let r,o=lt.getTransfer(s);if(i===qn)return n.UNSIGNED_BYTE;if(i===eh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===th)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===of)return n.BYTE;if(i===af)return n.SHORT;if(i===po)return n.UNSIGNED_SHORT;if(i===Qc)return n.INT;if(i===Si)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===on)return n.HALF_FLOAT;if(i===hf)return n.ALPHA;if(i===uf)return n.RGB;if(i===Mi)return n.RGBA;if(i===ts)return n.DEPTH_COMPONENT;if(i===cs)return n.DEPTH_STENCIL;if(i===nh)return n.RED;if(i===ih)return n.RED_INTEGER;if(i===Fs)return n.RG;if(i===sh)return n.RG_INTEGER;if(i===rh)return n.RGBA_INTEGER;if(i===za||i===Ha||i===Ga||i===Va)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oh||i===ah||i===lh||i===ch)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===oh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ah)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ch)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hh||i===uh||i===dh||i===fh||i===ph||i===Wa||i===mh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hh||i===uh)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===dh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===fh)return r.COMPRESSED_R11_EAC;if(i===ph)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Wa)return r.COMPRESSED_RG11_EAC;if(i===mh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gh||i===_h||i===yh||i===xh||i===vh||i===Sh||i===Mh||i===bh||i===Eh||i===wh||i===Th||i===Ah||i===Ch||i===Rh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_h)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Th)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ah)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ch)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ih||i===Ph||i===Nh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ih)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ph)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lh||i===Dh||i===Xa||i===Oh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Lh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var CT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RT=`
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

}`,Ff=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ma(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new sn({vertexShader:CT,fragmentShader:RT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uf=class extends Pi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,y=typeof XRWebGLBinding<"u",m=new Ff,g={},x=t.getContextAttributes(),v=null,M=null,T=[],w=[],_=new re,S=null,C=null,A=new An;A.viewport=new Bt;let P=new An;P.viewport=new Bt;let D=[A,P],B=new $c,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let de=T[$];return de===void 0&&(de=new to,T[$]=de),de.getTargetRaySpace()},this.getControllerGrip=function($){let de=T[$];return de===void 0&&(de=new to,T[$]=de),de.getGripSpace()},this.getHand=function($){let de=T[$];return de===void 0&&(de=new to,T[$]=de),de.getHandSpace()};function X($){let de=w.indexOf($.inputSource);if(de===-1)return;let Re=T[de];Re!==void 0&&(Re.update($.inputSource,$.frame,c||o),Re.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",oe);for(let $=0;$<T.length;$++){let de=w[$];de!==null&&(w[$]=null,T[$].disconnect(de))}I=null,k=null,m.reset();for(let $ in g)delete g[$];if(e.setRenderTarget(v),d=null,f=null,u=null,s=null,M=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),C!==null){let $=C.camera;$.fov=C.fov,$.zoom=C.zoom,$.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",oe),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Be=null,me=null;x.depth&&(me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=x.stencil?cs:ts,Be=x.stencil?mr:Si);let Oe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Oe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new en(f.textureWidth,f.textureHeight,{format:Mi,type:qn,depthTexture:new os(f.textureWidth,f.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Re={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new en(d.framebufferWidth,d.framebufferHeight,{format:Mi,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Le.setContext(s),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe($){for(let de=0;de<$.removed.length;de++){let Re=$.removed[de],Be=w.indexOf(Re);Be>=0&&(w[Be]=null,T[Be].disconnect(Re))}for(let de=0;de<$.added.length;de++){let Re=$.added[de],Be=w.indexOf(Re);if(Be===-1){for(let Oe=0;Oe<T.length;Oe++)if(Oe>=w.length){w.push(Re),Be=Oe;break}else if(w[Oe]===null){w[Oe]=Re,Be=Oe;break}if(Be===-1)break}let me=T[Be];me&&me.connect(Re)}}function q($,de){de===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(de.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let de=$.near,Re=$.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(Re=m.depthFar)),B.near=P.near=A.near=de,B.far=P.far=A.far=Re,(I!==B.near||k!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,k=B.far),B.layers.mask=$.layers.mask|6,A.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let Be=$.parent,me=B.cameras;q(B,Be);for(let Oe=0;Oe<me.length;Oe++)q(me[Oe],Be);B.projectionMatrix.copy(A.projectionMatrix),B.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&$.isPerspectiveCamera&&(C={camera:$,fov:$.fov,zoom:$.zoom}),Q($,B,Be)};function Q($,de,Re){Re===null?$.matrix.copy(de.matrixWorld):($.matrix.copy(Re.matrixWorld),$.matrix.invert(),$.matrix.multiply(de.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(de.projectionMatrix),$.projectionMatrixInverse.copy(de.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=wc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function($){return g[$]};let Z=null;function Ae($,de){if(h=de.getViewerPose(c||o),p=de,h!==null){let Re=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Be=!1;Re.length!==B.cameras.length&&(B.cameras.length=0,Be=!0);for(let He=0;He<Re.length;He++){let qe=Re[He],Qe=null;if(d!==null)Qe=d.getViewport(qe);else{let ue=u.getViewSubImage(f,qe);Qe=ue.viewport,He===0&&(e.setRenderTargetTextures(M,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(M))}let ie=D[He];ie===void 0&&(ie=new An,ie.layers.enable(He),ie.viewport=new Bt,D[He]=ie),ie.matrix.fromArray(qe.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(qe.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),He===0&&(B.matrix.copy(ie.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Be===!0&&B.cameras.push(ie)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let He=u.getDepthInformation(Re[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(me&&me.includes("camera-access")&&y){e.state.unbindTexture(),u=i.getBinding();for(let He=0;He<Re.length;He++){let qe=Re[He].camera;if(qe){let Qe=g[qe];Qe||(Qe=new ma,g[qe]=Qe);let ie=u.getCameraImage(qe);Qe.sourceTexture=ie}}}}for(let Re=0;Re<T.length;Re++){let Be=w[Re],me=T[Re];Be!==null&&me!==void 0&&me.update(Be,de,c||o)}Z&&Z($,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),p=null}let Le=new Q0;Le.setAnimationLoop(Ae),this.setAnimationLoop=function($){Z=$},this.dispose=function(){}}},IT=new Rt,c_=new Ye;c_.set(-1,0,0,0,1,0,0,0,1);function PT(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,xf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,v,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===xn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===xn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=e.get(g),v=x.envMap,M=x.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(IT.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(c_),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=v*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function NT(n,e,t,i){let s={},r={};function o(x,v){let M=v.program;i.uniformBlockBinding(x,M,s[x.id])}function a(x,v){let M=s[x.id];M===void 0&&(p(x),M=l(x),s[x.id]=M,x.addEventListener("dispose",m));let T=v.program;i.updateUBOMapping(x,T);let w=e.render.frame;r[x.id]!==w&&(c(x),r[x.id]=w)}function l(x){let v=n.createBuffer(),M=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,M,T),n.bindBuffer(n.UNIFORM_BUFFER,null),v}function c(x){let v=s[x.id],M=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,_=M.length;w<_;w++){let S=M[w];if(Array.isArray(S))for(let C=0,A=S.length;C<A;C++)h(S[C],w,C,T);else h(S,w,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,v,M,T){if(f(x,v,M,T)===!0){let w=x.__offset,_=x.value;if(Array.isArray(_)){let S=0;for(let C=0;C<_.length;C++){let A=_[C],P=y(A,!0);u(A,x.__data,S),S+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,x.__data)}}function u(x,v,M){typeof x=="number"||typeof x=="boolean"?v[M]=x:x.isMatrix3?(v[M]=x.elements[0],v[M+1]=x.elements[1],v[M+2]=x.elements[2],v[M+3]=0,v[M+4]=x.elements[3],v[M+5]=x.elements[4],v[M+6]=x.elements[5],v[M+7]=0,v[M+8]=x.elements[6],v[M+9]=x.elements[7],v[M+10]=x.elements[8],v[M+11]=0):ArrayBuffer.isView(x)?v.set(x.subarray(0,v.length-M),M):x.toArray(v,M)}function f(x,v,M,T){let w=x.value,_=v+"_"+M;if(Array.isArray(w)){T[_]===void 0&&(T[_]=[]);let S=T[_],C=!1;for(let A=0;A<w.length;A++)d(w[A],S,A)===!0&&(C=!0);return C}return d(w,T,_)}function d(x,v,M){if(v[M]===void 0)return typeof x=="number"||typeof x=="boolean"?v[M]=x:ArrayBuffer.isView(x)?v[M]=x.slice():v[M]=x.clone(),!0;{let T=v[M];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return v[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function p(x){let v=x.uniforms,M=0,T=16;for(let _=0,S=v.length;_<S;_++){let C=Array.isArray(v[_])?v[_]:[v[_]];for(let A=0,P=C.length;A<P;A++){let D=C[A],B=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(v[_])||Array.isArray(D.value),k=M;for(let G=0,oe=B.length;G<oe;G++){let q=B[G],Q=y(q,I),Z=M%T,Ae=Z%Q.boundary,Le=Z+Ae;M+=Ae,Le!==0&&T-Le<Q.storage&&(M+=T-Le),G===0&&(k=M),M+=Q.storage}let X=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new X((M-k)/Float32Array.BYTES_PER_ELEMENT),D.__offset=k}}let w=M%T;return w>0&&(M+=T-w),x.__size=M,x.__cache={},this}function y(x,v){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=16,M.storage=48):x.isMatrix4?(M.boundary=16,M.storage=64):x.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",x),v===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(x){let v=x.target;v.removeEventListener("dispose",m),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let x in s)n.deleteBuffer(s[x]);s={},r={}}return{bind:o,update:a,dispose:g}}var LT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function DT(){return Bi===null&&(Bi=new ua(LT,16,16,Fs,on),Bi.name="DFG_LUT",Bi.minFilter=Ln,Bi.magFilter=Ln,Bi.wrapS=Ri,Bi.wrapT=Ri,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var zh=class{constructor(e={}){let{canvas:t=v0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=qn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let y=d,m=new Set([rh,sh,ih]),g=new Set([qn,Si,po,mr,eh,th]),x=new Uint32Array(4),v=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},T=null,w=null,_=[],S=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,D=null,B=null,I=null,k=null;this._outputColorSpace=yn;let X=0,G=0,oe=null,q=-1,Q=null,Z=new Bt,Ae=new Bt,Le=null,$=new Ee(0),de=0,Re=t.width,Be=t.height,me=1,Oe=null,dt=null,He=new Bt(0,0,Re,Be),qe=new Bt(0,0,Re,Be),Qe=!1,ie=new Cs,ue=new Rc,z=!1,j=!1,J=new Rt,Ce=new N,Me=new Bt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function mt(){return oe===null?me:1}let F=i;function zt(E,O){return t.getContext(E,O)}let et,It,xe,Jt,Ge,Xe,R,b,V,ae,se,fe,ve,ee,te,ge,L,ne,K,_e,he,pe,Fe;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",be,!1),F===null){let O="webgl2";if(F=zt(O,E),F===null)throw zt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(E){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",be,!1),We("WebGLRenderer: "+E.message),E}function it(){et=new XE(F),et.init(),he=new AT(F,et),It=new DE(F,et,e,he),xe=new wT(F,et),It.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),B=F.createFramebuffer(),I=F.createFramebuffer(),k=F.createFramebuffer(),Jt=new $E(F),Ge=new uT,Xe=new TT(F,et,xe,Ge,It,he,Jt),R=new WE(A),b=new KS(F),pe=new NE(F,b),V=new qE(F,b,Jt,pe),ae=new KE(F,V,b,pe,Jt),ne=new JE(F,It,Xe),te=new OE(Ge),se=new hT(A,R,et,It,pe,te),fe=new PT(A,Ge),ve=new fT,ee=new xT(et),L=new PE(A,R,xe,ae,p,l),ge=new ET(A,ae,It),Fe=new NT(F,Jt,It,xe),K=new LE(F,et,Jt),_e=new YE(F,et,Jt),Jt.programs=se.programs,A.capabilities=It,A.extensions=et,A.properties=Ge,A.renderLists=ve,A.shadowMap=ge,A.state=xe,A.info=Jt}y!==qn&&(C=new jE(y,t.width,t.height,a,s,r));let le=new Uf(A,F);this.xr=le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(E){E!==void 0&&(me=E,this.setSize(Re,Be,!1))},this.getSize=function(E){return E.set(Re,Be)},this.setSize=function(E,O,Y=!0){if(le.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=E,Be=O,t.width=Math.floor(E*me),t.height=Math.floor(O*me),Y===!0&&(t.style.width=E+"px",t.style.height=O+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Re*me,Be*me).floor()},this.setDrawingBufferSize=function(E,O,Y){Re=E,Be=O,me=Y,t.width=Math.floor(E*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(y===qn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Z)},this.getViewport=function(E){return E.copy(He)},this.setViewport=function(E,O,Y,H){E.isVector4?He.set(E.x,E.y,E.z,E.w):He.set(E,O,Y,H),xe.viewport(Z.copy(He).multiplyScalar(mt()).round())},this.getScissor=function(E){return E.copy(qe)},this.setScissor=function(E,O,Y,H){E.isVector4?qe.set(E.x,E.y,E.z,E.w):qe.set(E,O,Y,H),xe.scissor(Ae.copy(qe).multiplyScalar(mt()).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(E){xe.setScissorTest(Qe=E)},this.setOpaqueSort=function(E){Oe=E},this.setTransparentSort=function(E){dt=E},this.getClearColor=function(E){return E.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,Y=!0){let H=0;if(E){let W=!1;if(oe!==null){let Se=oe.texture.format;W=m.has(Se)}if(W){let Se=oe.texture.type,Ie=g.has(Se),ye=L.getClearColor(),Te=L.getClearAlpha(),De=ye.r,Ze=ye.g,ft=ye.b;Ie?(x[0]=De,x[1]=Ze,x[2]=ft,x[3]=Te,F.clearBufferuiv(F.COLOR,0,x)):(v[0]=De,v[1]=Ze,v[2]=ft,v[3]=Te,F.clearBufferiv(F.COLOR,0,v))}else H|=F.COLOR_BUFFER_BIT}O&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",be,!1),L.dispose(),ve.dispose(),ee.dispose(),Xe.dispose(),Ge.dispose(),R.dispose(),ae.dispose(),V.dispose(),pe.dispose(),Fe.dispose(),se.dispose(),le.dispose(),le.removeEventListener("sessionstart",jm),le.removeEventListener("sessionend",Qm),Ks.stop()};function ke(E){E.preventDefault(),gf("WebGLRenderer: Context Lost."),P=!0}function tt(){gf("WebGLRenderer: Context Restored."),P=!1;let E=Jt.autoReset,O=ge.enabled,Y=ge.autoUpdate,H=ge.needsUpdate,W=ge.type;it(),Jt.autoReset=E,ge.enabled=O,ge.autoUpdate=Y,ge.needsUpdate=H,ge.type=W}function be(E){We("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ct(E){let O=E.target;O.removeEventListener("dispose",Ct),hn(O)}function hn(E){vs(E),Ge.remove(E)}function vs(E){let O=Ge.get(E).programs;O!==void 0&&(O.forEach(function(Y){se.releaseProgram(Y)}),E.isShaderMaterial&&se.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,Y,H,W,Se){O===null&&(O=nt);let Ie=W.isMesh&&W.matrixWorld.determinantAffine()<0,ye=Dv(E,O,Y,H,W);xe.setMaterial(H,Ie);let Te=Y.index,De=1;if(H.wireframe===!0){if(Te=V.getWireframeAttribute(Y),Te===void 0)return;De=2}let Ze=Y.drawRange,ft=Y.attributes.position,Pe=Ze.start*De,pt=(Ze.start+Ze.count)*De;Se!==null&&(Pe=Math.max(Pe,Se.start*De),pt=Math.min(pt,(Se.start+Se.count)*De)),Te!==null?(Pe=Math.max(Pe,0),pt=Math.min(pt,Te.count)):ft!=null&&(Pe=Math.max(Pe,0),pt=Math.min(pt,ft.count));let tn=pt-Pe;if(tn<0||tn===1/0)return;pe.setup(W,H,ye,Y,Te);let Ot,Pt=K;if(Te!==null&&(Ot=b.get(Te),Pt=_e,Pt.setIndex(Ot)),W.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*mt()),Pt.setMode(F.LINES)):Pt.setMode(F.TRIANGLES);else if(W.isLine){let bn=H.linewidth;bn===void 0&&(bn=1),xe.setLineWidth(bn*mt()),W.isLineSegments?Pt.setMode(F.LINES):W.isLineLoop?Pt.setMode(F.LINE_LOOP):Pt.setMode(F.LINE_STRIP)}else W.isPoints?Pt.setMode(F.POINTS):W.isSprite&&Pt.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Pt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let bn=W._multiDrawStarts,Ne=W._multiDrawCounts,Pn=W._multiDrawCount,Mt=Te?b.get(Te).bytesPerElement:1,Zs=Ge.get(H).currentProgram.getUniforms();for(let En=0;En<Pn;En++)Zs.setValue(F,"_gl_DrawID",En),Pt.render(bn[En]/Mt,Ne[En])}else if(W.isInstancedMesh)Pt.renderInstances(Pe,tn,W.count);else if(Y.isInstancedBufferGeometry){let bn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ne=Math.min(Y.instanceCount,bn);Pt.renderInstances(Pe,tn,Ne)}else Pt.render(Pe,tn)};function Zm(E,O,Y,H){D!==null&&E.isNodeMaterial&&D.setObject(H,E),z===!0&&te.setState(E,Y,!1),E.transparent===!0&&E.side===Rn&&E.forceSinglePass===!1?(E.side=xn,E.needsUpdate=!0,Xo(E,O,H),E.side=Ds,E.needsUpdate=!0,Xo(E,O,H),E.side=Rn):Xo(E,O,H)}this.compile=function(E,O,Y=null){Y===null&&(Y=E),D!==null&&D.renderStart(E,O,Y),w=ee.get(Y),w.init(O),S.push(w),Y.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),E!==Y&&E.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),j=this.localClippingEnabled,z=te.init(this.clippingPlanes,j),z===!0&&te.setGlobalState(this.clippingPlanes,O),D!==null&&ge.render(w.state.shadowsArray,Y,O);let H=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Se=W.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){let ye=Se[Ie];Zm(ye,Y,O,W),H.add(ye)}else Zm(Se,Y,O,W),H.add(Se)}),w=S.pop(),D!==null&&D.renderEnd(),H},this.compileAsync=function(E,O,Y=null){let H=this.compile(E,O,Y);return new Promise(W=>{function Se(){if(H.forEach(function(Ie){let Te=Ge.get(Ie).currentProgram;(Te===void 0||Te.isReady())&&H.delete(Ie)}),H.size===0){W(E);return}setTimeout(Se,10)}et.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let dd=null;function Nv(E){dd&&dd(E)}function jm(){Ks.stop()}function Qm(){Ks.start()}let Ks=new Q0;Ks.setAnimationLoop(Nv),typeof self<"u"&&Ks.setContext(self),this.setAnimationLoop=function(E){dd=E,le.setAnimationLoop(E),E===null?Ks.stop():Ks.start()},le.addEventListener("sessionstart",jm),le.addEventListener("sessionend",Qm),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(E,O);let Y=le.enabled===!0&&le.isPresenting===!0,H=C!==null&&(oe===null||Y)&&C.begin(A,oe);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(O),O=le.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,O,oe),w=ee.get(E,S.length),w.init(O),w.state.textureUnits=Xe.getTextureUnits(),S.push(w),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?ue.setFromArrayCamera(O):ie.setFromProjectionMatrix(J,li,O.reversedDepth),j=this.localClippingEnabled,z=te.init(this.clippingPlanes,j),T=ve.get(E,_.length),T.init(),_.push(T),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ie=A.xr.getDepthSensingMesh();Ie!==null&&fd(Ie,O,-1/0,A.sortObjects)}fd(E,O,0,A.sortObjects),T.finish(),D!==null&&D.updateLights(w.state.lightsArray),A.sortObjects===!0&&T.sort(Oe,dt),at=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,at&&L.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),z===!0&&te.beginShadows();let W=w.state.shadowsArray;if(ge.render(W,E,O),z===!0&&te.endShadows(),(H&&C.hasRenderPass())===!1){let Ie=T.opaque,ye=T.transmissive;if(w.setupLights(),O.isArrayCamera){let Te=O.cameras;if(ye.length>0)for(let De=0,Ze=Te.length;De<Ze;De++){let ft=Te[De];tg(Ie,ye,E,ft)}at&&L.render(E);for(let De=0,Ze=Te.length;De<Ze;De++){let ft=Te[De];eg(T,E,ft,ft.viewport)}}else ye.length>0&&tg(Ie,ye,E,O),at&&L.render(E),eg(T,E,O)}oe!==null&&G===0&&(Xe.updateMultisampleRenderTarget(oe),Xe.updateRenderTargetMipmap(oe)),H&&C.end(A),E.isScene===!0&&E.onAfterRender(A,E,O),pe.resetDefaultState(),q=-1,Q=null,S.pop(),S.length>0?(w=S[S.length-1],Xe.setTextureUnits(w.state.textureUnits),z===!0&&te.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,D!==null&&D.renderEnd()};function fd(E,O,Y,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Ie=O.isArrayCamera?ue:ie;if(!E.frustumCulled||E.intersectsFrustum(Ie)){H&&Me.setFromMatrixPosition(E.matrixWorld).applyMatrix4(J);let ye=ae.update(E),Te=E.material;Te.visible&&T.push(E,ye,Te,Y,Me.z,null,O)}}else if(E.isMesh||E.isLine||E.isPoints){let Ie=O.isArrayCamera?ue:ie;if(!E.frustumCulled||E.intersectsFrustum(Ie)){let ye=ae.update(E),Te=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Me.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Me.copy(ye.boundingSphere.center)),Me.applyMatrix4(E.matrixWorld).applyMatrix4(J)),Array.isArray(Te)){let De=ye.groups;for(let Ze=0,ft=De.length;Ze<ft;Ze++){let Pe=De[Ze],pt=Te[Pe.materialIndex];pt&&pt.visible&&T.push(E,ye,pt,Y,Me.z,Pe,O)}}else Te.visible&&T.push(E,ye,Te,Y,Me.z,null,O)}}}let Se=E.children;for(let Ie=0,ye=Se.length;Ie<ye;Ie++)fd(Se[Ie],O,Y,H)}function eg(E,O,Y,H){let{opaque:W,transmissive:Se,transparent:Ie}=E;w.setupLightsView(Y),z===!0&&te.setGlobalState(A.clippingPlanes,Y),H&&xe.viewport(Z.copy(H)),W.length>0&&zl(W,O,Y),Se.length>0&&zl(Se,O,Y),Ie.length>0&&zl(Ie,O,Y),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function tg(E,O,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Pe=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new en(1,1,{generateMipmaps:!0,type:Pe?on:qn,minFilter:ls,samples:Math.max(4,It.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Se=w.state.transmissionRenderTarget[H.id],Ie=H.viewport||Z;Se.setSize(Ie.z*A.transmissionResolutionScale,Ie.w*A.transmissionResolutionScale);let ye=A.getRenderTarget(),Te=A.getActiveCubeFace(),De=A.getActiveMipmapLevel();A.setRenderTarget(Se),A.getClearColor($),de=A.getClearAlpha(),de<1&&A.setClearColor(16777215,.5),A.clear(),at&&L.render(Y);let Ze=A.toneMapping;A.toneMapping=Ui;let ft=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),z===!0&&te.setGlobalState(A.clippingPlanes,H),zl(E,Y,H),Xe.updateMultisampleRenderTarget(Se),Xe.updateRenderTargetMipmap(Se),et.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let pt=0,tn=O.length;pt<tn;pt++){let Ot=O[pt],{object:Pt,geometry:bn,material:Ne,group:Pn}=Ot;if(Ne.side===Rn&&Pt.layers.test(H.layers)){let Mt=Ne.side;Ne.side=xn,Ne.needsUpdate=!0,ng(Pt,Y,H,bn,Ne,Pn),Ne.side=Mt,Ne.needsUpdate=!0,Pe=!0}}Pe===!0&&(Xe.updateMultisampleRenderTarget(Se),Xe.updateRenderTargetMipmap(Se))}A.setRenderTarget(ye,Te,De),A.setClearColor($,de),ft!==void 0&&(H.viewport=ft),A.toneMapping=Ze}function zl(E,O,Y){let H=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Se=E.length;W<Se;W++){let Ie=E[W],{object:ye,geometry:Te,group:De}=Ie,Ze=Ie.material;Ze.allowOverride===!0&&H!==null&&(Ze=H),ye.layers.test(Y.layers)&&ng(ye,O,Y,Te,Ze,De)}}function ng(E,O,Y,H,W,Se){D!==null&&W.isNodeMaterial&&D.setObject(E,W),E.onBeforeRender(A,O,Y,H,W,Se),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(A,O,Y,H,E,Se),W.transparent===!0&&W.side===Rn&&W.forceSinglePass===!1?(W.side=xn,W.needsUpdate=!0,A.renderBufferDirect(Y,O,H,W,E,Se),W.side=Ds,W.needsUpdate=!0,A.renderBufferDirect(Y,O,H,W,E,Se),W.side=Rn):A.renderBufferDirect(Y,O,H,W,E,Se),E.onAfterRender(A,O,Y,H,W,Se)}function ig(E){let O=0;for(let Y of E)Y.texture!==null&&O++;return O}function Xo(E,O,Y){O.isScene!==!0&&(O=nt);let H=Ge.get(E),W=w.state.lights,Se=w.state.shadowsArray,Ie=W.state.version,ye=se.getParameters(E,W.state,Se,O,Y,w.state.lightProbeGridArray),Te=se.getProgramCacheKey(ye),De=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;let Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=R.get(E.envMap||H.environment,Ze),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",Ct),De=new Map,H.programs=De,H.programVariants=new Map);let ft=De.get(Te);if(ft!==void 0){if(H.currentProgram===ft&&H.lightsStateVersion===Ie)return rg(E,ye),ft}else ye.uniforms=se.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,Y,ye),E.onBeforeCompile(ye,A),ft=se.acquireProgram(ye,Te),De.set(Te,ft),H.uniforms=ye.uniforms;let Pe=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=te.uniform),rg(E,ye),H.needsLights=Fv(E),H.lightsStateVersion=Ie,H.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.sunLights.value=W.state.sun,Pe.sunLightShadows.value=W.state.sunShadow,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.sunShadowMatrix.value=W.state.sunShadowMatrix,Pe.sunShadowCascade.value=W.state.sunShadowCascade,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),H.numLightProbeGrids=ig(w.state.lightProbeGridArray),H.currentProgram=ft,H.uniformsList=null,ft}function Lv(E,O,Y,H,W){let Se=Ge.get(E),Ie=Se.currentProgram.id+","+H+","+W,ye=Se.programVariants.get(Ie);return ye===void 0?(ye=Xo(E,O,Y),Se.programVariants.set(Ie,ye)):(Se.currentProgram=ye,Se.uniformsList=null,Se.outputColorSpace=H,Se.toneMapping=W),ye}function sg(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=go.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function rg(E,O){let Y=Ge.get(E);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Dv(E,O,Y,H,W){O.isScene!==!0&&(O=nt),Xe.resetTextureUnits();let Se=O.fog,Ie=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,ye=oe===null?A.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:lt.workingColorSpace,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,De=R.get(H.envMap||Ie,Te),Ze=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ft=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!Y.morphAttributes.position,pt=!!Y.morphAttributes.normal,tn=!!Y.morphAttributes.color,Ot=Ui;H.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ot=A.toneMapping);let Pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,bn=Pt!==void 0?Pt.length:0,Ne=Ge.get(H),Pn=w.state.lights;if(z===!0&&(j===!0||E!==Q)){let Ht=E===Q&&H.id===q;te.setState(H,E,Ht)}let Mt=!1,Zs=!1;H.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==Pn.state.version||W.isBatchedMesh&&Ne.batching===!1||!W.isBatchedMesh&&Ne.batching===!0||W.isBatchedMesh&&Ne.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ne.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ne.instancing===!1||!W.isInstancedMesh&&Ne.instancing===!0||W.isSkinnedMesh&&Ne.skinning===!1||!W.isSkinnedMesh&&Ne.skinning===!0||W.isInstancedMesh&&Ne.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ne.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ne.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ne.instancingMorph===!1&&W.morphTexture!==null||Ne.envMap!==De||H.fog===!0&&Ne.fog!==Se||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==te.numPlanes||Ne.numIntersection!==te.numIntersection)||Ne.vertexAlphas!==Ze||Ne.vertexTangents!==ft||Ne.morphTargets!==Pe||Ne.morphNormals!==pt||Ne.morphColors!==tn||Ne.morphTargetsCount!==bn||Ne.numLightProbeGrids!==ig(w.state.lightProbeGridArray)?Mt=!0:(Ne.outputColorSpace!==ye||Ne.toneMapping!==Ot)&&(Zs=!0):(Mt=!0,Ne.__version=H.version);let En=Ne.currentProgram;(Mt===!0||Zs===!0)&&(En=Zs===!0?Lv(H,O,W,ye,Ot):Xo(H,O,W),D&&H.isNodeMaterial&&D.onUpdateProgram(H,En,Ne));let Hl=!1,Ss=!1,js=!1,_t=En.getUniforms(),_n=Ne.uniforms;if(xe.useProgram(En.program)&&(Hl=!0,Ss=!0,js=!0),H.id!==q&&(q=H.id,Ss=!0),Hl||Q!==E){xe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),_t.setValue(F,"projectionMatrix",E.projectionMatrix),_t.setValue(F,"viewMatrix",E.matrixWorldInverse);let un=_t.map.cameraPosition;un!==void 0&&un.setValue(F,Ce.setFromMatrixPosition(E.matrixWorld)),It.logarithmicDepthBuffer&&_t.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_t.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,Ss=!0,js=!0)}if(Ne.needsLights&&(Pn.state.sunShadowMap.length>0&&_t.setValue(F,"sunShadowMap",Pn.state.sunShadowMap,Xe),Pn.state.directionalShadowMap.length>0&&_t.setValue(F,"directionalShadowMap",Pn.state.directionalShadowMap,Xe),Pn.state.spotShadowMap.length>0&&_t.setValue(F,"spotShadowMap",Pn.state.spotShadowMap,Xe),Pn.state.pointShadowMap.length>0&&_t.setValue(F,"pointShadowMap",Pn.state.pointShadowMap,Xe)),W.isSkinnedMesh){_t.setOptional(F,W,"bindMatrix"),_t.setOptional(F,W,"bindMatrixInverse");let Ht=W.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),_t.setValue(F,"boneTexture",Ht.boneTexture,Xe))}W.isBatchedMesh&&(_t.setOptional(F,W,"batchingTexture"),_t.setValue(F,"batchingTexture",W._matricesTexture,Xe),_t.setOptional(F,W,"batchingIdTexture"),_t.setValue(F,"batchingIdTexture",W._indirectTexture,Xe),_t.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&_t.setValue(F,"batchingColorTexture",W._colorsTexture,Xe));let mi=Y.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&ne.update(W,Y,En),(Ss||Ne.receiveShadow!==W.receiveShadow)&&(Ne.receiveShadow=W.receiveShadow,_t.setValue(F,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(_n.envMapIntensity.value=O.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=DT()),Ss){if(_t.setValue(F,"toneMappingExposure",A.toneMappingExposure),Ne.needsLights&&Ov(_n,js),Se&&H.fog===!0&&fe.refreshFogUniforms(_n,Se),fe.refreshMaterialUniforms(_n,H,me,Be,w.state.transmissionRenderTarget[E.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){let Ht=M,un=0;for(let $i of w.state.lightProbeGridArray)$i.texture!==null&&(Ht.textures[un]=$i.texture,Ht.min[un]=$i.boundingBox.min,Ht.max[un]=$i.boundingBox.max,Ht.resolution[un]=$i.resolution,un++);for(let $i in Ht)Ht[$i].length=un;_n.probesSH.value=Ht.textures,_n.probesMin.value=Ht.min,_n.probesMax.value=Ht.max,_n.probesResolution.value=Ht.resolution}go.upload(F,sg(Ne),_n,Xe)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(go.upload(F,sg(Ne),_n,Xe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_t.setValue(F,"center",W.center),_t.setValue(F,"modelViewMatrix",W.modelViewMatrix),_t.setValue(F,"normalMatrix",W.normalMatrix),_t.setValue(F,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let Ht=H.uniformsGroups;for(let un=0,$i=Ht.length;un<$i;un++){let ag=Ht[un];Fe.update(ag,En),Fe.bind(ag,En)}}return En}function Ov(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Fv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(E,O,Y){let H=Ge.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ge.get(E.texture).__webglTexture=O,Ge.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let Y=Ge.get(E);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,Y=0){oe=E,X=O,G=Y;let H=null,W=!1,Se=!1;if(E){let ye=Ge.get(E);if(ye.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(F.FRAMEBUFFER,ye.__webglFramebuffer),Z.copy(E.viewport),Ae.copy(E.scissor),Le=E.scissorTest,xe.viewport(Z),xe.scissor(Ae),xe.setScissorTest(Le),q=-1;return}else if(ye.__webglFramebuffer===void 0)Xe.setupRenderTarget(E);else if(ye.__hasExternalTextures)Xe.rebindTextures(E,Ge.get(E.texture).__webglTexture,Ge.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ze=E.depthTexture;if(ye.__boundDepthTexture!==Ze){if(Ze!==null&&Ge.has(Ze)&&(E.width!==Ze.image.width||E.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(E)}}let Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(Se=!0);let De=Ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[O])?H=De[O][Y]:H=De[O],W=!0):E.samples>0&&Xe.useMultisampledRTT(E)===!1?H=Ge.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?H=De[Y]:H=De,Z.copy(E.viewport),Ae.copy(E.scissor),Le=E.scissorTest}else Z.copy(He).multiplyScalar(me).floor(),Ae.copy(qe).multiplyScalar(me).floor(),Le=Qe;if(Y!==0&&(H=B),xe.bindFramebuffer(F.FRAMEBUFFER,H)&&xe.drawBuffers(E,H),xe.viewport(Z),xe.scissor(Ae),xe.setScissorTest(Le),W){let ye=Ge.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,ye.__webglTexture,Y)}else if(Se){let ye=O;for(let Te=0;Te<E.textures.length;Te++){let De=Ge.get(E.textures[Te]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Te,De.__webglTexture,Y,ye)}}else if(E!==null&&Y!==0){let ye=Ge.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ye.__webglTexture,Y)}q=-1};function og(E){let O=Ge.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=It.textureFormatReadable(E.format),O.__typeReadable=It.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,Y,H,W,Se,Ie,ye=0){if(!(E&&E.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Te=Te[Ie],Array.isArray(Te)&&(Te=Te[0])),Te){xe.bindFramebuffer(F.FRAMEBUFFER,Te);try{let De=E.textures[ye],Ze=De.format,ft=De.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);let Pe=og(De);if(Pe.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&Y>=0&&Y<=E.height-W&&F.readPixels(O,Y,H,W,he.convert(Ze),he.convert(ft),Se)}finally{let De=oe!==null?Ge.get(oe).__webglFramebuffer:null;xe.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,O,Y,H,W,Se,Ie,ye=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Te=Te[Ie],Array.isArray(Te)&&(Te=Te[0])),Te)if(O>=0&&O<=E.width-H&&Y>=0&&Y<=E.height-W){xe.bindFramebuffer(F.FRAMEBUFFER,Te);let De=E.textures[ye],Ze=De.format,ft=De.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);let Pe=og(De);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pt),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),F.readPixels(O,Y,H,W,he.convert(Ze),he.convert(ft),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let tn=oe!==null?Ge.get(oe).__webglFramebuffer:null;xe.bindFramebuffer(F.FRAMEBUFFER,tn);let Ot=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await M0(F,Ot,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(pt),F.deleteSync(Ot),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,Y=0){let H=Math.pow(2,-Y),W=Math.floor(E.image.width*H),Se=Math.floor(E.image.height*H),Ie=O!==null?O.x:0,ye=O!==null?O.y:0;Xe.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Ie,ye,W,Se),xe.unbindTexture()},this.copyTextureToTexture=function(E,O,Y=null,H=null,W=0,Se=0){let Ie,ye,Te,De,Ze,ft,Pe,pt,tn,Ot=E.isCompressedTexture?E.mipmaps[Se]:E.image;if(Y!==null)Ie=Y.max.x-Y.min.x,ye=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,De=Y.min.x,Ze=Y.min.y,ft=Y.isBox3?Y.min.z:0;else{let _t=Math.pow(2,-W);Ie=Math.floor(Ot.width*_t),ye=Math.floor(Ot.height*_t),E.isDataArrayTexture?Te=Ot.depth:E.isData3DTexture?Te=Math.floor(Ot.depth*_t):Te=1,De=0,Ze=0,ft=0}H!==null?(Pe=H.x,pt=H.y,tn=H.z):(Pe=0,pt=0,tn=0);let Pt=he.convert(O.format),bn=he.convert(O.type),Ne;O.isData3DTexture?(Xe.setTexture3D(O,0),Ne=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Xe.setTexture2DArray(O,0),Ne=F.TEXTURE_2D_ARRAY):(Xe.setTexture2D(O,0),Ne=F.TEXTURE_2D),xe.activeTexture(F.TEXTURE0),xe.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),xe.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),xe.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let Pn=xe.getParameter(F.UNPACK_ROW_LENGTH),Mt=xe.getParameter(F.UNPACK_IMAGE_HEIGHT),Zs=xe.getParameter(F.UNPACK_SKIP_PIXELS),En=xe.getParameter(F.UNPACK_SKIP_ROWS),Hl=xe.getParameter(F.UNPACK_SKIP_IMAGES);xe.pixelStorei(F.UNPACK_ROW_LENGTH,Ot.width),xe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot.height),xe.pixelStorei(F.UNPACK_SKIP_PIXELS,De),xe.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),xe.pixelStorei(F.UNPACK_SKIP_IMAGES,ft);let Ss=E.isDataArrayTexture||E.isData3DTexture,js=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let _t=Ge.get(E),_n=Ge.get(O),mi=Ge.get(_t.__renderTarget),Ht=Ge.get(_n.__renderTarget);xe.bindFramebuffer(F.READ_FRAMEBUFFER,mi.__webglFramebuffer),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let un=0;un<Te;un++)Ss&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.get(E).__webglTexture,W,ft+un),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.get(O).__webglTexture,Se,tn+un)),F.blitFramebuffer(De,Ze,De+Ie,Ze+ye,Pe,pt,Pe+Ie,pt+ye,F.DEPTH_BUFFER_BIT,F.NEAREST);xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||Ge.has(E)){let _t=Ge.get(E),_n=Ge.get(O);xe.bindFramebuffer(F.READ_FRAMEBUFFER,I),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let mi=0;mi<Te;mi++)Ss?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_t.__webglTexture,W,ft+mi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_t.__webglTexture,W),js?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_n.__webglTexture,Se,tn+mi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_n.__webglTexture,Se),W!==0?F.blitFramebuffer(De,Ze,De+Ie,Ze+ye,Pe,pt,Pe+Ie,pt+ye,F.COLOR_BUFFER_BIT,F.NEAREST):js?F.copyTexSubImage3D(Ne,Se,Pe,pt,tn+mi,De,Ze,Ie,ye):F.copyTexSubImage2D(Ne,Se,Pe,pt,De,Ze,Ie,ye);xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else js?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Ne,Se,Pe,pt,tn,Ie,ye,Te,Pt,bn,Ot.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Ne,Se,Pe,pt,tn,Ie,ye,Te,Pt,Ot.data):F.texSubImage3D(Ne,Se,Pe,pt,tn,Ie,ye,Te,Pt,bn,Ot):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Se,Pe,pt,Ie,ye,Pt,bn,Ot.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Se,Pe,pt,Ot.width,Ot.height,Pt,Ot.data):F.texSubImage2D(F.TEXTURE_2D,Se,Pe,pt,Ie,ye,Pt,bn,Ot);xe.pixelStorei(F.UNPACK_ROW_LENGTH,Pn),xe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt),xe.pixelStorei(F.UNPACK_SKIP_PIXELS,Zs),xe.pixelStorei(F.UNPACK_SKIP_ROWS,En),xe.pixelStorei(F.UNPACK_SKIP_IMAGES,Hl),Se===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&F.generateMipmap(Ne),xe.unbindTexture()},this.initRenderTarget=function(E){Ge.get(E).__webglFramebuffer===void 0&&Xe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Xe.setTextureCube(E,0):E.isData3DTexture?Xe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Xe.setTexture2DArray(E,0):Xe.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){X=0,G=0,oe=null,xe.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var yo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ii=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},OT=new hr(-1,1,1,-1,0,1),Bf=class extends kt{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},FT=new Bf,Us=class{constructor(e){this._mesh=new Ut(FT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,OT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Vh=class extends ii{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=us.clone(e.uniforms),this.material=new sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Us(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ka=class extends ii{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Wh=class extends ii{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Xh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new re);this._width=i.width,this._height=i.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vh(yo),this.copyPass.material.blending=as,this.timer=new Na}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ka!==void 0&&(o instanceof Ka?i=!0:o instanceof Wh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qh=class extends ii{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ee}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var h_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ee(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var xo=class n extends ii{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Ee(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new en(r,o,{type:on,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new en(r,o,{type:on,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new en(r,o,{type:on,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=h_;this.highPassUniforms=us.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=us.clone(yo.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader,premultipliedAlpha:!0,blending:Os,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ee,this._oldClearAlpha=1,this._basic=new Cn,this._fsQuad=new Us(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new sn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new sn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};xo.BlurDirectionX=new re(1,0);xo.BlurDirectionY=new re(0,1);var Za={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Yh=class extends ii{constructor(){super(),this.isOutputPass=!0,this.uniforms=us.clone(Za.uniforms),this.material=new oo({name:Za.name,uniforms:this.uniforms,vertexShader:Za.vertexShader,fragmentShader:Za.fragmentShader}),this._fsQuad=new Us(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===La?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Da?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ua&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function kf(n=1){let e=new Oi;return e.moveTo(0,-.35*n),e.bezierCurveTo(-.15*n,-.22*n,-.5*n,-.02*n,-.5*n,.2*n),e.bezierCurveTo(-.5*n,.42*n,-.25*n,.52*n,0,.32*n),e.bezierCurveTo(.25*n,.52*n,.5*n,.42*n,.5*n,.2*n),e.bezierCurveTo(.5*n,-.02*n,.15*n,-.22*n,0,-.35*n),e}function Jh(n=.5,e=.22){let t=new Oi;for(let i=0;i<10;i++){let s=Math.PI/2+i/10*Math.PI*2,r=i%2?e:n;i===0?t.moveTo(Math.cos(s)*r,Math.sin(s)*r):t.lineTo(Math.cos(s)*r,Math.sin(s)*r)}return t.closePath(),t}var UT=new Ta(kf(.6),12),u_=new Wt(1,10,8),d_=new wa(.86,1,48);d_.rotateX(-Math.PI/2);var BT=new Ea(.07,0),$h=class{constructor(e,t){this.scene=e,this.camera=t,this.items=[],this._initFireflies()}_add(e,t,i){this.scene.add(e),this.items.push({obj:e,life:t,age:0,update:i})}hearts(e,t=16736162){for(let i=0;i<4;i++){let s=new Ut(UT,new Cn({color:new Ee(t).multiplyScalar(2.2),transparent:!0,side:Rn,depthWrite:!1})),r=(Math.random()-.5)*.7,o=(Math.random()-.5)*.7,a=i*.14;s.position.copy(e).add(new N(r,1.1,o)),s.scale.setScalar(.001);let l=s.position.clone();this._add(s,1.8+a,(c,h)=>{let u=Math.max(0,c.age-a),f=Math.min(1,u*5)*(.55+i*.12);s.scale.setScalar(Math.max(.001,f)),s.position.set(l.x+Math.sin(u*6+i)*.15,l.y+u*1.2,l.z),s.quaternion.copy(this.camera.quaternion),s.material.opacity=Math.min(1,(c.life-c.age)*2)})}}shine(e){e.glow.intensity=40;let t=new Ut(u_,new Cn({color:new Ee(1.6,1.15,.4),transparent:!0,opacity:.5,depthWrite:!1,blending:Os}));t.position.copy(e.root.position).add(new N(0,.55,0)),this._add(t,.7,i=>{let s=i.age/i.life;t.scale.setScalar(.5+s*3.2),t.material.opacity=.45*(1-s)}),this.sparks(e.root.position,16765024,14,1.2)}tide(e){e.glow.intensity=25;for(let t=0;t<3;t++){let i=new Ut(d_,new Cn({color:new Ee(.6,.75,2),transparent:!0,depthWrite:!1,side:Rn}));i.position.copy(e.root.position).add(new N(0,.06,0));let s=t*.18;i.scale.setScalar(.001),this._add(i,1.1+s,r=>{let o=Math.max(0,r.age-s),a=Math.min(1,o/1.1);i.scale.setScalar(.3+a*3.5),i.material.opacity=o>0?.9*(1-a):0})}}dust(e,t=6){for(let i=0;i<t;i++){let s=new Ut(u_,new Xt({color:16777215,transparent:!0,opacity:.8,roughness:1,depthWrite:!1})),r=i/t*Math.PI*2+Math.random(),o=new N(Math.cos(r)*1.6,.4+Math.random()*.4,Math.sin(r)*1.6);s.position.copy(e).add(new N(0,.08,0)),this._add(s,.45,(a,l)=>{s.position.addScaledVector(o,l),o.multiplyScalar(.9);let c=a.age/a.life;s.scale.setScalar(.08+c*.14),s.material.opacity=.8*(1-c)})}}sparks(e,t=16769658,i=18,s=2.5){for(let r=0;r<i;r++){let o=new Ut(BT,new Cn({color:new Ee(t).multiplyScalar(2.5),transparent:!0,depthWrite:!1})),a=new N(Math.random()-.5,Math.random()*.9+.2,Math.random()-.5).normalize().multiplyScalar(s*(.6+Math.random()*.6));o.position.copy(e).add(new N(0,.6,0)),this._add(o,.9,(l,c)=>{o.position.addScaledVector(a,c),a.y-=4*c,o.rotation.x+=c*8,o.rotation.y+=c*6,o.material.opacity=1-l.age/l.life})}}_initFireflies(){let t=new Float32Array(270);this.ffSeed=[];for(let r=0;r<90;r++){let o=Math.random()*Math.PI*2,a=2+Math.random()*24;this.ffSeed.push({x:Math.cos(o)*a+6,y:.6+Math.random()*6,z:Math.sin(o)*a-2,p:Math.random()*10})}let i=new kt;i.setAttribute("position",new Nn(t,3));let s=(()=>{let r=document.createElement("canvas");r.width=r.height=64;let o=r.getContext("2d"),a=o.createRadialGradient(32,32,0,32,32,32);return a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.3,"rgba(255,240,200,0.8)"),a.addColorStop(1,"rgba(255,220,180,0)"),o.fillStyle=a,o.fillRect(0,0,64,64),new rs(r)})();this.fireflies=new rr(i,new Rs({size:.28,map:s,color:new Ee(1.8,1.5,1),transparent:!0,depthWrite:!1,blending:Os})),this.fireflies.frustumCulled=!1,this.scene.add(this.fireflies)}update(e,t){for(let s=this.items.length-1;s>=0;s--){let r=this.items[s];if(r.age+=e,r.age>=r.life){this.scene.remove(r.obj),r.obj.material?.dispose(),this.items.splice(s,1);continue}r.update(r,e)}let i=this.fireflies.geometry.attributes.position;for(let s=0;s<this.ffSeed.length;s++){let r=this.ffSeed[s];i.setXYZ(s,r.x+Math.sin(t*.3+r.p)*1.2,r.y+Math.sin(t*.7+r.p*2)*.5,r.z+Math.cos(t*.25+r.p)*1.2)}i.needsUpdate=!0}};var ds=(n,e,t)=>n<e?e:n>t?t:n,kT=(n,e,t)=>n+(e-n)*t,vn=(n,e,t,i)=>kT(n,e,1-Math.exp(-t*i)),fs=n=>n*n*n*(n*(n*6-15)+10);function ja(n,e){let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}var Kh=(n,e,t,i)=>n+ja(n,e)*(1-Math.exp(-t*i)),Yn=n=>Math.round(n*1e3)/1e3;function f_(n){let e=(n||"").normalize("NFKC").trim().toLowerCase().replace(/\s+/g," "),t=new TextEncoder().encode("eclipse:"+e),i=2166136261,s=2654435769;for(let r of t)i=Math.imul(i^r,16777619)>>>0,s=Math.imul(s^r,2246822519)>>>0,s=(s<<13|s>>>19)>>>0;return"r"+i.toString(36)+s.toString(36)}var bt={get(n,e=null){try{let t=localStorage.getItem("eclipse."+n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem("eclipse."+n,JSON.stringify(e))}catch{}}},yr=new URLSearchParams(location.search),zf=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,p_=/iP(hone|ad|od)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,$n={sun:"\u2600\uFE0F",moon:"\u{1F319}"},Sn={sun:"Sun",moon:"Moon"},Zt=n=>n==="sun"?"moon":"sun";var Qa=new N;function hi(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Qa.copy(e),Qa[i]=0,Qa.normalize();let c=.5*o/(o+a),h=1-Qa.angleTo(n)/l;return Math.sign(Qa[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Zh=class n extends On{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new N,c=new N,h=new N(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,y=new N,m=.5/o;for(let g=0,x=0;g<u.length;g+=3,x+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*r,u[g+1]=h.y*Math.sign(l.y)+c.y*r,u[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:y.set(1,0,0),d[x+0]=hi(y,c,"z","y",r,i),d[x+1]=1-hi(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),d[x+0]=1-hi(y,c,"z","y",r,i),d[x+1]=1-hi(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),d[x+0]=1-hi(y,c,"x","z",r,e),d[x+1]=hi(y,c,"z","x",r,i);break;case 3:y.set(0,-1,0),d[x+0]=1-hi(y,c,"x","z",r,e),d[x+1]=1-hi(y,c,"z","x",r,i);break;case 4:y.set(0,0,1),d[x+0]=1-hi(y,c,"x","y",r,e),d[x+1]=1-hi(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),d[x+0]=hi(y,c,"x","y",r,e),d[x+1]=1-hi(y,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var Hf=new Map;function $e(n,e={}){let t=n+JSON.stringify(e);return Hf.has(t)||Hf.set(t,new Xt({color:n,roughness:.85,...e})),Hf.get(t)}function Ue(n,e,t,i=0,s=0,r=0,{cast:o=!0,receive:a=!0}={}){let l=new Ut(e,t);return l.position.set(i,s,r),l.castShadow=o,l.receiveShadow=a,n.add(l),l}var cn=(n,e,t,i=.12)=>new Zh(n,e,t,3,Math.min(i,n/2-.01,e/2-.01,t/2-.01));function vo(n,e,t,i,s,r,o,a,l){let c=new yt;c.position.set(e,s,t),n.add(c);let h=[[i*.985,-.62],[i*1.005,-.36],[i*.99,-.13],[i*.955,-.02],[i*.9,0],[.001,0]].map(([M,T])=>new re(M,T)),u=Ue(c,new Is(h,64),$e(o),0,0,0,{cast:!1});u.receiveShadow=!0;let f=9,d=[];for(let M=0;M<=f;M++){let T=M/f,w=-r+T*(r-.5),_=.001+i*.98*Math.pow(T,.6);d.push(new re(_,w))}let p=new Is(d,26),y=p.attributes.position,m=[],g=new Ee(a),x=new Ee(l),v=new Ee;for(let M=0;M<y.count;M++){let T=y.getX(M),w=y.getY(M),_=y.getZ(M),S=Math.atan2(_,T);if(w<-.55){let C=1+Math.sin(S*5+w*1.7)*.07+Math.sin(S*13-w*2.3)*.05;y.setX(M,T*C),y.setZ(M,_*C),y.setY(M,w+Math.sin(S*7)*.15)}v.copy(x).lerp(g,Math.min(1,Math.max(0,1+w/r))),m.push(v.r,v.g,v.b)}return p.setAttribute("color",new je(m,3)),p.computeVertexNormals(),Ue(c,p,new Xt({vertexColors:!0,flatShading:!0,roughness:.95}),0,0,0),c}function xr(n,e,t,i,s=1,r=0){let o=new yt;o.position.set(e,t,i),o.scale.setScalar(s),n.add(o),Ue(o,new Vt(.17,.26,1.5,10),$e(11039055),0,.75,0);let a=[8177003,9622638,7059562,10804348],l=new lr(1,1);return[[0,1.95,0,.95],[.45,2.55,.1,.68],[-.4,2.45,-.15,.62],[.05,2.95,-.05,.5]].forEach(([h,u,f,d],p)=>{let y=Ue(o,l,$e(a[(p+r)%a.length],{flatShading:!0}),h,u,f);y.scale.setScalar(d),y.rotation.set(p,p*2,0)}),o}function zi(n,e,t,i,s){let r=new yt;r.position.set(e,0,t),r.rotation.y=i,n.add(r),Ue(r,new Vt(.07,.08,1.2,8),$e(10119755),0,.6,0),Ue(r,cn(1.9,.82,.12,.08),$e(15251850),0,1.25,0);let o=document.createElement("canvas");o.width=512,o.height=220;let a=o.getContext("2d");a.fillStyle="#f6dcbc",a.fillRect(0,0,512,220),a.fillStyle="#4a3352",a.textAlign="center",a.textBaseline="middle";let l=s.length>1?58:76;a.font=`800 ${l}px ui-rounded, "SF Pro Rounded", system-ui, sans-serif`,s.forEach((u,f)=>a.fillText(u,256,110+(f-(s.length-1)/2)*(l*1.15),490));let c=new rs(o);c.colorSpace=yn,c.anisotropy=4;let h=Ue(r,new Fi(1.76,.7),new Xt({map:c,roughness:.9}),0,1.25,.065,{cast:!1});return h.receiveShadow=!0,r}function So(n,e,t,i,s,r,o=1){let a=new yt;a.position.set(e,t,i),n.add(a);let l=$e(16777215,{roughness:1,emissive:16771570,emissiveIntensity:.18});Ue(a,cn(s,.42,r,.2),l,0,-.21,0);let c=new Wt(1,18,12),h=o,u=()=>(h=h*16807%2147483647)/2147483647,f=Math.round((s+r)*2.2);for(let d=0;d<f;d++){let p=d/f*Math.PI*2,y=Math.cos(p)*(s/2-.15),m=Math.sin(p)*(r/2-.15);Ue(a,c,l,y,-.22+u()*.08,m).scale.set(.32+u()*.15,.25+u()*.12,.32+u()*.15)}for(let d=0;d<3;d++)Ue(a,c,l,(u()-.5)*s*.7,-.45,(u()-.5)*r*.7).scale.set(s*.35,.3,r*.35);return a}function jh(n,e={}){let t={top:"#7d8fe6",mid:"#ffc9dc",low:"#ffe7cf",cloud:16767464,far:!0,cx:8,...e},i=new Wt(400,32,16),s=new Ut(i,new sn({side:xn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ee(t.top)},mid:{value:new Ee(t.mid)},low:{value:new Ee(t.low)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 low; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.02, 0.55, h)) : mix(mid, low, smoothstep(0.0, -0.35, h));
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
      }`}));s.renderOrder=-10,s.frustumCulled=!1,n.add(s);let r=new Wt(1,14,10),o=150,a=new Di(r,new Xt({color:16777215,emissive:t.cloud,emissiveIntensity:.35,roughness:1}),o),l=new Kt;for(let h=0;h<o;h++){let u=Math.random()*Math.PI*2,f=10+Math.pow(Math.random(),.7)*150;l.position.set(Math.cos(u)*f+t.cx,-13-Math.random()*4,Math.sin(u)*f);let d=4+Math.random()*7;l.scale.set(d*1.4,d*.5,d),l.updateMatrix(),a.setMatrixAt(h,l.matrix)}if(n.add(a),!t.far)return s;let c=[[-38,4,-40,3],[52,-2,-55,4],[-60,7,10,3.5],[45,9,40,2.6],[-20,-5,60,4.5],[85,3,-10,3]];for(let[h,u,f,d]of c)vo(n,h,f,d,u,d*1.4,10212730,14263682,10123944),xr(n,h+d*.2,u,f-d*.1,d*.35)}var m_=new vi(Jh(.34,.15),{depth:.1,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});m_.center();var zT=new Xt({color:16765773,emissive:16757504,emissiveIntensity:1.3,roughness:.3,metalness:.1});function Qh(n,e,t,i,s,r=0){let o=Ue(n,m_,zT,t,i,s,{receive:!1});return{id:e,mesh:o,pos:new N(t,i,s),collected:!1,phase:r*2}}function eu(n,e){for(let t of n)t.mesh.visible=!t.collected,t.mesh.rotation.y=e*1.8+t.phase,t.mesh.position.y=t.pos.y+Math.sin(e*2.2+t.phase)*.12}function tu(n,{sunColor:e=16773599,sunI:t=2.6,hemiSky:i=14673663,hemiGround:s=16765624,hemiI:r=1.4,pos:o=[18,26,14],target:a=[9,0,-2],extent:l=26}={}){let c=new Ca(i,s,r);n.add(c);let h=new Pa(e,t);h.position.set(...o),h.target.position.set(...a),h.castShadow=!0,h.shadow.mapSize.set(2048,2048);let u=h.shadow.camera;return u.left=-l,u.right=l,u.top=l*.8,u.bottom=-l*.8,u.near=1,u.far=90,h.shadow.bias=-4e-4,h.shadow.normalBias=.03,h.shadow.radius=3,n.add(h,h.target),{hemi:c,sun:h}}function g_(n,e,t,{flowerCols:i=[16752324,16777215,16769658,13022207,16747146],tuftColor:s=8178020}={}){let r=(p,y)=>t.every(([m,g,x])=>(p-m)**2+(y-g)**2>x*x),l=new Di(new Wt(.085,8,6),new Xt({roughness:.7}),260),c=new Di(new Fn(.07,.3,4),new Xt({color:s,roughness:.9,flatShading:!0}),420),h=new Kt,u=new Ee,f=0,d=0;for(let{x:p,z:y,r:m,y:g=0,flowers:x=100,tufts:v=160}of e){let M=0,T=0;for(;M<x+v&&T++<(x+v)*10;){let w=Math.random()*Math.PI*2,_=Math.sqrt(Math.random())*(m-.6),S=p+Math.cos(w)*_,C=y+Math.sin(w)*_;r(S,C)&&(M<x&&f<260?(h.position.set(S,g+.09,C),h.scale.setScalar(.8+Math.random()*.6),h.rotation.set(0,0,0),h.updateMatrix(),l.setMatrixAt(f,h.matrix),l.setColorAt(f,u.setHex(i[f%i.length])),f++):d<420&&(h.position.set(S,g+.12,C),h.scale.set(1,.7+Math.random()*.8,1),h.rotation.set((Math.random()-.5)*.4,0,(Math.random()-.5)*.4),h.updateMatrix(),c.setMatrixAt(d++,h.matrix)),M++)}}l.count=f,c.count=d,l.receiveShadow=!0,c.receiveShadow=!0,n.add(l,c)}function __(n,e){let t=[],i=[],s=[],r=new yt;n.add(r),e.fog=new sr(new Ee("#f9cfe0"),55,190),jh(n);let{sun:o}=tu(n);vo(r,0,0,9,0,7,9425262,14722684,9399452),t.push({type:"cyl",x:0,z:0,r:8.95,top:0,bottom:-1.2,safe:!0});let a=$e(16770286),l=$e(16744112,{emissive:16732051,emissiveIntensity:.35});for(let z of[-1.7,1.7])Ue(r,new Vt(.2,.24,2.3,14),a,z,1.15,3),Ue(r,cn(.62,.2,.62,.08),a,z,.1,3),t.push({type:"cyl",x:z,z:3,r:.26,top:2.4,bottom:0});let c=Ue(r,new Xn(1.7,.17,12,40,Math.PI),a,0,2.3,3);c.rotation.z=0;let h=Ue(r,new vi(kf(1.1),{depth:.22,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:3}),l,0,4,2.89);s.push(z=>{h.rotation.y=Math.sin(z*1.2)*.25,h.position.y=4+Math.sin(z*2)*.06});let u=5.2;[16169160,16766362,12575656,11127029,14140151].forEach((z,j)=>{let J=Ue(r,cn(3.2,1.04,2.7,.14),$e(z),0,.52+j*1.04,-5.25);J.rotation.y=(j%2?1:-1)*.035}),Ue(r,cn(3.3,.18,2.8,.08),$e(9425262),0,u,-5.25);let d={type:"box",x0:-1.6,x1:1.6,z0:-6.6,z1:-3.9,top:u+.08,bottom:0,safe:!0};t.push(d),zi(r,-2.7,-2.5,.15,["Too high?","Stack up, or Sun throws Moon!"]);let p=[];[[1.3,-6.1],[2.6,-5.2],[3.9,-4.3]].forEach(([z,j],J)=>{let Ce=Ue(r,cn(1,z,.86,.1),$e([16757703,16765836,10473717][J]),1.1,z/2,j),Me={type:"box",x0:0,x1:0,z0:j-.43,z1:j+.43,top:z,bottom:0,safe:!0,disabled:!0};t.push(Me),p.push({m:Ce,col:Me,out:0})});let y=!1;s.push((z,j)=>{for(let J of p){J.out=Math.min(1,J.out+(y?j*1.2:0));let Ce=1.1+fs(J.out)*1;J.m.position.x=Ce,J.col.x0=Ce-.5,J.col.x1=Ce+.5,J.col.disabled=J.out<.98}});let m=3.3;[[0,11133138],[1,16239013],[2,13087733]].forEach(([z,j])=>Ue(r,cn(2.2,1.1,2.2,.12),$e(j),3,.55+z*1.1,.8)),Ue(r,cn(2.28,.14,2.28,.06),$e(9425262),3,m,.8),t.push({type:"box",x0:1.9,x1:4.1,z0:-.3,z1:1.9,top:m+.07,bottom:0,safe:!0}),zi(r,4.3,2.6,-.3,["Jump, then","grab the edge!"]);let g=5.4;for(let[z,j]of[[-7,-6],[-4,-3]]){for(let J=0;J<5;J++)Ue(r,cn(1,g/5,1.8,.1),$e([10473717,13087733,16757703,16765836,12182688][(J+(z<-5?0:2))%5]),(z+j)/2,(J+.5)*(g/5),-4.5);Ue(r,cn(1.06,.14,1.86,.06),$e(9425262),(z+j)/2,g,-4.5),t.push({type:"box",x0:z,x1:j,z0:-5.4,z1:-3.6,top:g+.07,bottom:0,safe:!0,wallJump:!0});for(let J=0;J<4;J++){let Ce=z<-5?j+.01:z-.01,Me=Ue(r,new Fn(.16,.3,3),$e(16777215,{emissive:16777215,emissiveIntensity:.25}),Ce,1+J*1.15,-4.5,{cast:!1});Me.rotation.z=0,Me.scale.set(1,1,.25),Me.rotation.y=Math.PI/2}}zi(r,-5,-2.9,.1,["Wall jump!","Jump from wall to wall"]);let x=[16757703,16765836,12182688,10473717,13087733];for(let z=0;z<5;z++){let j=.4*(z+1),J=4.1-z*.9;Ue(r,cn(1.6,j,.9,.1),$e(x[z]),5.8,j/2,J),t.push({type:"box",x0:5,x1:6.6,z0:J-.45,z1:J+.45,top:j,bottom:0,safe:!0})}Ue(r,cn(2,2,1.7,.14),$e(16239013),5.8,1,-.78),Ue(r,cn(2.06,.14,1.76,.06),$e(9425262),5.8,2,-.78),t.push({type:"box",x0:4.8,x1:6.8,z0:-1.63,z1:.07,top:2.07,bottom:0,safe:!0}),Ue(r,new Vt(.04,.04,1.6,8),$e(16777215),6.55,2.8,-1.45);let v=Ue(r,new Fn(.22,.6,3),$e(16744112),6.55,3.3,-1.15);v.rotation.x=Math.PI/2,s.push(z=>{v.rotation.z=Math.sin(z*4)*.15});let M=new yt;M.position.set(-4.5,0,1.5),r.add(M);for(let z=0;z<8;z++){let j=z/8*Math.PI*2;Ue(M,new io(.16,0),$e(12170185,{flatShading:!0}),Math.cos(j)*.5,.08,Math.sin(j)*.5).rotation.set(z,z*1.3,0)}for(let z=0;z<3;z++){let j=Ue(M,new Vt(.06,.07,.7,8),$e(9067068),0,.12,0);j.rotation.order="YXZ",j.rotation.set(Math.PI/2-.2,z/3*Math.PI,0)}let T=Ue(M,new Fn(.22,.6,10),new Cn({color:new Ee(2.4,1,.25)}),0,.45,0,{cast:!1}),w=Ue(M,new Fn(.12,.38,10),new Cn({color:new Ee(2.6,2.1,.7)}),0,.38,0,{cast:!1}),_=new cr(16753226,6,7,2);_.position.set(0,.8,0),M.add(_),s.push(z=>{let j=1+Math.sin(z*13)*.08+Math.sin(z*7.3)*.06;T.scale.set(1,j,1),w.scale.set(1,2-j,1),T.rotation.y=z*2,_.intensity=5+j*2}),t.push({type:"cyl",x:-4.5,z:1.5,r:.55,top:.25,bottom:0});for(let[z,j,J]of[[-4.5,3,0],[-3,1.2,Math.PI/2.4]])Ue(r,new Vt(.22,.22,1.3,12),$e(11565909),z,.22,j).rotation.set(0,J,Math.PI/2),t.push({type:"box",x0:z-(J?.3:.65),x1:z+(J?.3:.65),z0:j-(J?.65:.25),z1:j+(J?.65:.25),top:.42,bottom:0});let S=new yt;S.position.set(-6.3,0,-1.2),S.rotation.y=.9,r.add(S);let C=Ue(S,new Fn(1.3,1.9,4,1),$e(16751754,{flatShading:!0}),0,.95,0);C.rotation.y=Math.PI/4;let A=Ue(S,new Fn(.5,1.05,3,1),$e(7031418,{flatShading:!0}),0,.5,.6,{cast:!1});A.scale.z=.2,t.push({type:"cyl",x:-6.3,z:-1.2,r:1,top:1.8,bottom:0,noStep:!0}),[[-7,3.9,1,0],[-2.5,-7.9,1.05,1],[3.4,-7.4,.95,2],[-7.9,-.3,.8,2],[8,2.4,.75,3]].forEach(([z,j,J,Ce])=>{xr(r,z,0,j,J,Ce),t.push({type:"cyl",x:z,z:j,r:.3*J,top:3.2*J,bottom:0,noStep:!0})});let P=$e(12958937,{flatShading:!0});[[2.6,-2.2,.45],[-1.8,-8,.4],[7.4,4.4,.5],[-7.2,5.2,.35],[1.2,8.4,.3]].forEach(([z,j,J],Ce)=>{let Me=Ue(r,new io(1,0),P,z,J*.55,j);Me.scale.set(J*1.2,J,J),Me.rotation.set(Ce,Ce*2,0),t.push({type:"cyl",x:z,z:j,r:J*1.05,top:J*1.2,bottom:0})});let D=-3.5,B=10.2,I=18.4,k=So(r,B,.05,D,3,3,7),X={type:"box",id:"raft",x0:0,x1:0,z0:D-1.5,z1:D+1.5,top:.05,bottom:-.4,dx:0,dy:0,dz:0};t.push(X);let G=z=>{let J=(z%9e3+9e3)%9e3/9e3*9;return J<1.5?B:J<4.5?B+(I-B)*fs((J-1.5)/3):J<6?I:I+(B-I)*fs((J-6)/3)},oe={raft:{pos:(z,j=new N)=>j.set(G(z),.05,D)}};zi(r,6.6,-5.6,.35,["Cloud raft \u2192"]),vo(r,24,-3.5,4.2,0,4.5,10147959,15052422,10123430),t.push({type:"cyl",x:24,z:-3.5,r:4.15,top:0,bottom:-1.2,safe:!0});let q=new yt;q.position.set(24.5,0,-2.5),r.add(q),Ue(q,new Vt(.36,.48,.8,16),$e(16773596),0,.4,0);let Q=new yt;Q.position.y=.75,q.add(Q);let Z=Ue(Q,new Wt(1.3,32,14,0,Math.PI*2,0,Math.PI/2),$e(16740221,{roughness:.6}),0,0,0);Z.scale.y=.46;for(let z=0;z<7;z++){let j=z/7*Math.PI*2,J=z===0?0:.8,Ce=Ue(Q,new Wt(.16,12,8),$e(16777215),Math.cos(j)*J,z===0?.6:.42,Math.sin(j)*J,{cast:!1});Ce.scale.y=.4}let Ae={type:"cyl",x:24.5,z:-2.5,r:1.25,top:1.35,bottom:0,bounce:17,isMushroom:!0};t.push(Ae);let Le=0;s.push((z,j)=>{Le=Math.max(0,Le-j*3);let J=1-Math.sin(Le*Math.PI)*.25*Le;Q.scale.set(1+(1-J)*.6,J,1+(1-J)*.6)}),xr(r,26.6,0,-1.5,.8,2),t.push({type:"cyl",x:26.6,z:-1.5,r:.25,top:2.6,bottom:0,noStep:!0}),zi(r,21.2,-.6,-Math.PI/2+.5,["Bounce!"]),So(r,24.5,5.5,-7.5,3.4,3.4,3),t.push({type:"box",x0:22.8,x1:26.2,z0:-9.2,z1:-5.8,top:5.5,bottom:5,safe:!0});let $=[[3,.8,1.7],[-5,-4.5,2.4],[2.1,-5.2,1],[4.3,2.6,.4],[-5,-2.9,.4],[0,5.5,1.4],[-1.7,3,.5],[1.7,3,.5],[0,-5.25,2.3],[5.8,2.2,2.6],[5.8,-.8,1.5],[-4.5,1.5,1.2],[-6.3,-1.2,1.5],[-4.5,3,.8],[-3,1.2,.8],[24.5,-2.5,1.5],[-2.7,-2.5,.4]],de=(z,j)=>$.every(([J,Ce,Me])=>(z-J)**2+(j-Ce)**2>Me*Me),Re=(z,j,J,Ce,Me)=>{let nt=0,at=0;for(;nt<Ce&&at++<Ce*10;){let mt=Math.random()*Math.PI*2,F=Math.sqrt(Math.random())*(J-.6),zt=z+Math.cos(mt)*F,et=j+Math.sin(mt)*F;de(zt,et)&&Me(zt,et,nt++)}},Be=[16752324,16777215,16769658,13022207,16747146],me=new Di(new Wt(.085,8,6),new Xt({roughness:.7}),190),Oe=new Di(new Fn(.07,.3,4),new Xt({color:8178020,roughness:.9,flatShading:!0}),360),dt=new Kt,He=new Ee,qe=0,Qe=0,ie=(z,j)=>{qe>=190||(dt.position.set(z,.09,j),dt.scale.setScalar(.8+Math.random()*.6),dt.rotation.set(0,0,0),dt.updateMatrix(),me.setMatrixAt(qe,dt.matrix),me.setColorAt(qe,He.setHex(Be[qe%Be.length])),qe++)},ue=(z,j)=>{Qe>=360||(dt.position.set(z,.12,j),dt.scale.set(1,.7+Math.random()*.8,1),dt.rotation.set((Math.random()-.5)*.4,0,(Math.random()-.5)*.4),dt.updateMatrix(),Oe.setMatrixAt(Qe++,dt.matrix))};return Re(0,0,9,150,ie),Re(24,-3.5,4.2,40,ie),Re(0,0,9,220,ue),Re(24,-3.5,4.2,70,ue),me.count=qe,Oe.count=Qe,me.castShadow=!1,me.receiveShadow=!0,Oe.receiveShadow=!0,r.add(me,Oe),[["ledge",0,u+.75,-5.25],["lookout",5.8,2.7,-.8],["grab",3,m+.7,.8],["chimney",-5,g+.3,-4.5],["cloud",24.5,6.15,-7.5]].forEach(([z,j,J,Ce],Me)=>i.push(Qh(r,z,j,J,Ce,Me))),{colliders:t,stars:i,movers:oe,id:"playground",title:"Playground Isle",kid:!1,spawn:{sun:new N(-1.2,0,5.6),moon:new N(1.2,0,5.6)},lobbyCam:{cx:6,cz:-2,r:24,h:10},killY:-14,sunLight:o,bounce(z){z.isMushroom&&(Le=1)},towerTop:{x0:-1.6,x1:1.6,z0:-6.6,z1:-3.9,y:u},setTowerOccupied(z){z&&(y=!0)},update(z,j,J){let Ce=G(z);X.dx=Ce-1.5-X.x0,X.dy=0,X.dz=0,X.x0===0&&(X.dx=0),X.x0=Ce-1.5,X.x1=Ce+1.5,k.position.x=Ce,k.position.y=.05+Math.sin(j*1.6)*.03,eu(i,j);for(let Me of s)Me(j,J)}}}var bi=30,Bs=9,Jn=2.3,nu=4.4;function Gf(n,e,t,i,s){let r=new yt;r.position.set(e,0,t),r.scale.setScalar(i),n.add(r);let o=new lr(1,1);[[0,.55,0,.6],[.45,.45,.2,.45],[-.4,.5,-.1,.48],[.1,.95,-.05,.4]].forEach(([l,c,h,u],f)=>{Ue(r,o,$e([6270554,7125859,5809238][f%3],{flatShading:!0}),l,c,h).scale.setScalar(u)});let a=new Wt(.075,8,6);for(let l=0;l<16;l++){let c=l*2.39,h=.3+l%5*.17,u=.55+l%3*.08;Ue(r,a,$e(s,{emissive:s,emissiveIntensity:.15}),Math.cos(c)*u,h+.2,Math.sin(c)*u,{cast:!1})}return r}function HT(n,e,t,i=1){let s=new yt;s.position.set(e,0,t),s.scale.setScalar(i),n.add(s);for(let r=0;r<6;r++){let o=Ue(s,new Vt(.17-r*.012,.2-r*.012,.6,9),$e(11568480),Math.sin(r*.5)*.08*r,.3+r*.56,0);o.rotation.z=-.05*r}for(let r=0;r<7;r++){let o=new yt;o.position.set(.25,3.45,0),o.rotation.y=r/7*Math.PI*2,s.add(o);let a=Ue(o,new Fn(.3,2,4),$e(7321695,{flatShading:!0}),.95,-.2,0);a.scale.set(1,1,.22),a.rotation.z=-1.25}return s}function GT(n,e,t,i,s){let r=new yt;r.position.set(e,t,i),n.add(r);let o=$e(14068042,{metalness:.6,roughness:.35});for(let l=0;l<3;l++){let c=l/3*Math.PI*2;Ue(r,new Vt(.03,.03,1.15,6),$e(9067068),Math.cos(c)*.22,.55,Math.sin(c)*.22).rotation.set(Math.sin(c)*.25,0,-Math.cos(c)*.25)}let a=Ue(r,new Vt(.09,.13,1.1,14),o,0,1.25,0);return a.rotation.z=-Math.sign(s)*.9,Ue(r,new Vt(.135,.135,.06,14),$e(3813194),Math.sign(s)*.43,1.55,0).rotation.z=-Math.sign(s)*.9,r}function y_(n,e,t,i){let s=i==="sun",r=s?1:-1,o=-r*bi,a=x=>o+r*x,l=s?9425262:10934666;vo(n,o,0,Bs,0,7,l,s?14722684:14264480,s?9399452:8153768),e.push({type:"cyl",x:o,z:0,r:Bs-.05,top:0,bottom:-1.2,safe:!0});let c=new On(.9,.06,.9);for(let x=0;x<9;x++)for(let v=-1;v<=1;v++)(x+v)%2&&Math.random()<.3||Ue(n,c,$e((x+v)%2?15260875:14206642),a(-7+x*.95),.03,v*.95,{cast:!1});let h=s?16740264:16777215;for(let x of[-1,1])Ue(n,cn(.42,1.6,.42,.06),$e(16052198),a(-5),.8,x*1.35),Gf(n,a(-5.6),x*2.4,1.15,h),s||Gf(n,a(-4.4),x*2.6,.8,13018096),e.push({type:"cyl",x:a(-5),z:x*1.35,r:.3,top:1.6,bottom:0,noStep:!0});for(let x of[-1,1]){let v=new yt;v.position.set(a(-5),0,x*1.15),v.rotation.y=x*r*1.2,n.add(v);for(let M=0;M<6;M++)Ue(v,new Vt(.02,.02,1.1,5),$e(4864850,{metalness:.5,roughness:.4}),0,.6,-x*(.1+M*.17));Ue(v,new On(.04,.05,1),$e(4864850),0,1.1,-x*.5)}s?HT(n,a(-6.5),-4.2,.85):xr(n,a(-6.5),0,-4.2,.9,1),xr(n,a(-2),0,-6.6,.8,2),e.push({type:"cyl",x:a(-6.5),z:-4.2,r:.25,top:3,bottom:0,noStep:!0}),e.push({type:"cyl",x:a(-2),z:-6.6,r:.25,top:2.6,bottom:0,noStep:!0});let u=Math.sqrt(Bs*Bs-2.6*2.6)-.5;Ue(n,cn(.6,.85,u*2,.2),$e(s?6270554:12032992),a(-2.6),.425,0),e.push({type:"box",x0:Math.min(a(-2.9),a(-2.3)),x1:Math.max(a(-2.9),a(-2.3)),z0:-u,z1:u,top:.85,bottom:0,noStep:!0});let f=-r*Math.PI/2;zi(n,a(-3.9),2.3,f+.35*r,["Jump!"]);let d=Math.sqrt(Bs*Bs-4.5*4.5)-.4,p=$e(s?15918031:15391986);Ue(n,cn(5,Jn,d*2,.15),p,a(2),Jn/2,0),Ue(n,cn(5.08,.16,d*2+.08,.06),$e(l),a(2),Jn,0),e.push({type:"box",x0:Math.min(a(-.5),a(4.5)),x1:Math.max(a(-.5),a(4.5)),z0:-d,z1:d,top:Jn+.08,bottom:0,safe:!0}),zi(n,a(-1.4),2.7,f+.3*r,["Too high? Jump twice,","or grab the edge!"]);for(let x of[-3.2,3.2])Gf(n,a(2.6),x,.7,h).position.y=Jn;let y=zi(n,a(3.7),2.6,f+.25*r,s?["Jump, jump again,","then DASH \xBB"]:["Jump, then hold Jump","to float (or dash \xBB)"]);y.position.y=Jn;let m=14.5;So(n,a(m),Jn,0,3.2,3.2,s?5:9),e.push({type:"box",x0:Math.min(a(m-1.6),a(m+1.6)),x1:Math.max(a(m-1.6),a(m+1.6)),z0:-1.6,z1:1.6,top:Jn,bottom:Jn-.5,safe:!0});let g=GT(n,a(m+.8),Jn,.5,r);return t.push(Qh(n,s?"pro-sun":"pro-moon",a(m-.6),Jn+1,-.6,s?0:1)),{cx:o,dir:r,scopePos:new N(a(m+.8),Jn,.5),scope:g}}function x_(n,e){let t=[],i=[],s=[],r=new yt;n.add(r),e.fog=new sr(new Ee("#e9a9c6"),60,210),jh(n,{top:"#3b3f8f",mid:"#f4a9c6",low:"#ffd7b5",cloud:15975133,far:!1,cx:0});let o=700,a=new Float32Array(o*3);for(let _=0;_<o;_++){let S=Math.random()*Math.PI*2,C=.12+Math.random()*1.3;a[_*3]=Math.cos(S)*Math.cos(C)*320,a[_*3+1]=Math.sin(C)*320,a[_*3+2]=Math.sin(S)*Math.cos(C)*320}let l=new kt;l.setAttribute("position",new Nn(a,3));let c=new rr(l,new Rs({size:1.6,color:new Ee(2.2,2.1,1.8),transparent:!0,opacity:.85,fog:!1,depthWrite:!1}));n.add(c),tu(n,{sunColor:16765616,sunI:2.3,hemiSky:13223167,hemiGround:16762536,hemiI:1.35,pos:[0,28,22],target:[0,0,0],extent:46});let h={sun:y_(r,t,i,"sun"),moon:y_(r,t,i,"moon")};g_(r,[{x:-bi,z:0,r:Bs,flowers:90,tufts:150},{x:bi,z:0,r:Bs,flowers:90,tufts:150}],[[-bi-6,0,1.4],[bi+6,0,1.4],[-bi+2,0,7.2],[bi-2,0,7.2],[-bi-2.6,0,9],[bi+2.6,0,9]],{flowerCols:[16748479,16777215,16769658,13022207,16740264]});let u=new vi(Jh(.85,.45),{depth:.18,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2});u.rotateX(-Math.PI/2);let f=new Xt({color:16773560,emissive:16763213,emissiveIntensity:2.2,roughness:.4}),d=[];for(let _ of["sun","moon"]){let S=h[_].dir;for(let C=0;C<6;C++){let A=-S*(12.6-C*1.65),P=Jn+.25+C*.36,D=Math.sin(C*1.3)*.6,B=Ue(r,u,f,A,P-.2,D,{receive:!1});B.scale.setScalar(.001);let I={type:"cyl",x:A,z:D,r:.78,top:P,bottom:P-.3,disabled:!0,safe:!0};t.push(I),d.push({m:B,col:I,delay:C*.35+(_==="moon"?.15:0),y:P})}}let p=new yt;r.add(p),p.position.set(0,nu,0),p.scale.setScalar(.001),So(p,0,0,0,7,7,12);let y=Ue(p,new Xn(3.7,.06,8,64),new Cn({color:new Ee(2.4,2,1.1)}),0,.05,0,{cast:!1});y.rotation.x=Math.PI/2;let m={type:"cyl",x:0,z:0,r:3.5,top:nu,bottom:nu-.6,disabled:!0,safe:!0};t.push(m);let g=-1,x=!1,v=0,M=-1,T={sun:!1,moon:!1};s.push((_,S)=>{if(c.rotation.y=_*.004,g>=0){g+=S;for(let A of d){let P=Math.min(1,Math.max(0,(g-A.delay)/.6));A.m.scale.setScalar(Math.max(.001,fs(P))),A.m.rotation.y=(1-P)*2,A.col.disabled=P<.7}let C=Math.min(1,Math.max(0,(g-2.2)/1));p.scale.setScalar(Math.max(.001,fs(C))),m.disabled=C<.8,y.rotation.z=_*.3}});let w=_=>_&&_.y>nu-.6&&Math.hypot(_.x,_.z)<3.6;return{id:"prologue",title:"Prologue \xB7 Two Skies",kid:!0,colliders:t,stars:i,movers:{},spawn:{sun:new N(-bi-6.5,0,0),moon:new N(bi+6.5,0,0)},camYaw:{sun:-Math.PI/2,moon:Math.PI/2},lobbyCam:{cx:0,cz:0,r:46,h:16},killY:-14,intro:{all:["Prologue \xB7 Two Skies","Long before they met\u2026"],sun:"Little Sun, in his garden",moon:"Little Moon, in her garden"},bounce(){},story(_,S){let C=_.save.prologue||{};for(let P of _.roles){let D=_.pos[P];D&&D.y>Jn-.3&&Math.hypot(D.x-h[P].scopePos.x,D.z-h[P].scopePos.z)<1.8&&!C[P+"Look"]&&_.setSave(`prologue/${P}Look`,!0),C[P+"Look"]&&!T[P]&&!(C.sunLook&&C.moonLook)&&(T[P]=!0,_.caption("You look up at the sky\u2026 someone far away is looking at the same stars \u2728",4500))}C.sunLook&&C.moonLook&&g<0&&(g=0),g>=0&&!x&&(x=!0,_.caption("A bridge of stars appears. Meet in the middle!",4500)),w(_.pos.sun)&&w(_.pos.moon)&&!C.done&&(_.holding?_.setSave("prologue/done",!0):S>v&&(v=S+7,_.caption("Stand close and tap \u2665 to hold hands",4e3))),C.done&&M<0&&g>=0&&(M=S,_.caption("Two kids. Two cities. One sky.",3200),setTimeout(()=>_.caption("One day, they would find each other\u2026",3200),3400),setTimeout(()=>_.finish(),7e3))},update(_,S,C){eu(i,S);for(let A of s)A(S,C)}}}var Mo={prologue:{build:x_,title:"Prologue \xB7 Two Skies",chip:"\u{1F4D6} Prologue"},playground:{build:__,title:"Playground Isle",chip:"\u{1F3DD}\uFE0F Playground"}};function Vf(n,e){let t=Mo[e]||Mo.playground,i=new yt;n.add(i);let s=t.build(i,n);return s.id=e in Mo?e:"playground",s.root=i,s.dispose=()=>{n.remove(i),i.traverse(r=>{r.geometry&&r.geometry.dispose()})},s}var wt={normal:0,hang:1,wall:2,carried:3,carry:4,glide:5,climb:6,dash:7},Wf={sun:{r:.4,h:1.45},moon:{r:.32,h:1.2}},Xf={sun:{r:.3,h:1.05},moon:{r:.28,h:.95}},VT={sun:.72,moon:.79},el=new Wt(1,28,20),Un=new Wt(1,14,10),Kn=(n,e)=>new ga(n,e,6,14),Et=(n,e={})=>new Xt({color:n,roughness:.75,...e});function ze(n,e,t,i=0,s=0,r=0,o=1,a=o,l=o,c=!0){let h=new Ut(e,t);return h.position.set(i,s,r),h.scale.set(o,a,l),h.castShadow=c,n.add(h),h}function ui(n,e=0,t=0,i=0){let s=new yt;return s.position.set(e,t,i),n.add(s),s}function WT(n,e,t,i){let s=new Oi,r=(a,l,c,h)=>{a.moveTo(-l/2+h,-c/2),a.lineTo(l/2-h,-c/2),a.quadraticCurveTo(l/2,-c/2,l/2,-c/2+h),a.lineTo(l/2,c/2-h),a.quadraticCurveTo(l/2,c/2,l/2-h,c/2),a.lineTo(-l/2+h,c/2),a.quadraticCurveTo(-l/2,c/2,-l/2,c/2-h),a.lineTo(-l/2,-c/2+h),a.quadraticCurveTo(-l/2,-c/2,-l/2+h,-c/2)};r(s,n,e,i);let o=new or;return r(o,n-t*2,e-t*2,Math.max(.002,i-t)),s.holes.push(o),new vi(s,{depth:.012,bevelEnabled:!1,curveSegments:4})}function XT(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.translate(64,64),e.fillStyle="#ffd34d";for(let i=0;i<10;i++)e.rotate(Math.PI/5),e.beginPath(),e.moveTo(-9,-34),e.lineTo(0,-58),e.lineTo(9,-34),e.fill();e.beginPath(),e.arc(0,0,30,0,Math.PI*2),e.fill();let t=new rs(n);return t.colorSpace=yn,t}function v_(n,e,t){let i={};for(let s of[-1,1]){let r=ui(n,s*t.shoulderX,t.shoulderY,0);ze(r,Kn(t.armR,t.armLen),t.sleeveMat,0,-(t.armLen/2+t.armR*.6),0);let o=ze(r,Un,t.skinMat,0,-(t.armLen+t.armR*1.6),.01,t.handR,t.handR*1.05,t.handR),a=ui(e,s*t.hipX,t.hipY,0);ze(a,Kn(t.legR,t.legLen),t.legMat,0,-(t.legLen/2+t.legR),0),ze(a,new On(t.shoe[0],t.shoe[1],t.shoe[2]),t.shoeMat,0,-(t.hipY-t.shoe[1]/2),t.shoe[2]*.22),i[s<0?"lArm":"rArm"]=r,i[s<0?"lHand":"rHand"]=o,i[s<0?"lLeg":"rLeg"]=a}return i}function qT(n,e=!1){let t=Et(16243915,{roughness:.6}),i=e?Et(16044604,{roughness:.85}):Et(14172989,{roughness:.9,emissive:8000520,emissiveIntensity:.12}),s=e?Et(14859560,{roughness:.85}):Et(11875119,{roughness:.9}),r=e?Et(7311300,{roughness:.9}):Et(3424350,{roughness:.9}),o=Et(2763315,{roughness:.6}),a=Et(2759958,{roughness:1}),l=Et(4930094,{roughness:1}),c=Et(8079909,{roughness:.35,metalness:.1}),h=ui(n,0,0,0),u=ui(n,0,.42,0);if(ze(u,Kn(.32,.12),i,0,.27,0,1,.76,.82),e)ze(u,Kn(.16,.06),r,0,0,0,1.75,.55,1.35);else{ze(u,Kn(.15,.2),s,0,.13,.2,1,.5,.35);let v=ze(u,new Xn(.19,.075,10,24),s,0,.53,-.06);v.rotation.x=Math.PI/2-.25;for(let M of[-1,1])ze(u,new Vt(.012,.012,.16,6),Et(16777215),M*.06,.4,.25)}let f=ze(u,new Fi(.2,.2),new Xt({map:XT(),transparent:!0,emissive:16757504,emissiveMap:null,emissiveIntensity:.9,roughness:.6}),.1,.33,.265,1,1,1,!1);f.material.emissiveMap=f.material.map;let d=v_(u,h,{shoulderX:.37,shoulderY:.46,armR:.095,armLen:.22,handR:.088,hipX:.14,hipY:.42,legR:.115,legLen:.2,shoe:[.21,.1,.32],skinMat:t,sleeveMat:e?t:i,legMat:e?t:r,shoeMat:e?Et(9071186):o}),p=ui(u,0,.55,0),y=ui(p,0,.25,0);if(e&&y.scale.setScalar(1.18),ze(y,el,t,0,0,0,.27,.28,.27),e){let v=Et(7031346,{roughness:.9}),M=ze(y,new Wt(.283,24,12,0,Math.PI*2,0,Math.PI*.5),v,0,.01,-.01);M.rotation.x=-.12;let T=ze(y,Un,v,.02,.17,.2,.2,.07,.08);T.rotation.x=-.5}else{let v=ze(y,new Wt(.278,24,12,0,Math.PI*2,0,Math.PI*.4),l,0,.01,-.02);v.rotation.x=-.32,ze(y,el,a,0,-.09,.06,.288,.2,.235),ze(y,el,a,0,-.17,.12,.17,.12,.15);let M=ze(y,Kn(.03,.11),a,0,-.03,.262);M.rotation.z=Math.PI/2}ze(y,Un,t,0,0,.272,.042,.04,.035,!1);let m=ze(y,new Xn(.032,.009,6,14,Math.PI),Et(13070440),0,e?-.1:-.07,e?.258:.288,1,.8,1,!1);m.rotation.z=Math.PI;for(let v of[-1,1]){ze(y,Un,t,v*.27,0,0,.045,.07,.04);let M=ze(y,Kn(.016,.07),e?Et(7031346):a,v*.1,.115,.25,1,1,1,!1);M.rotation.z=Math.PI/2+v*.12}let g=[];for(let v of[-1,1])g.push(ze(y,Kn(.026,.035),Et(1906464,{roughness:.3}),v*.095,.035,.252,1,1,1,!1));let x=WT(.14,.095,.018,.025);for(let v of[-1,1]){ze(y,x,c,v*.098,.035,.262,1,1,1,!1),ze(y,new Fi(.11,.065),new Xt({color:13625087,transparent:!0,opacity:.18,roughness:.1}),v*.098,.035,.27,1,1,1,!1);let M=ze(y,new On(.012,.014,.24),c,v*.168,.05,.15,1,1,1,!1);M.rotation.y=v*.12}return ze(y,new On(.06,.014,.014),c,0,.055,.272,1,1,1,!1),{hips:h,torso:u,neck:p,head:y,eyes:g,...d,extra:{}}}function YT(n,e=!1){let t=Et(15912889,{roughness:.55}),i=new ao({color:e?13215464:4857720,roughness:.5,sheen:1,sheenColor:new Ee(10185686),sheenRoughness:.4}),s=new ao({color:12032992,roughness:.35,metalness:.15,sheen:1,sheenColor:new Ee(16769279),iridescence:.4}),r=Et(1708566,{roughness:.5}),o=Et(2038308,{roughness:.35}),a=ui(n,0,0,0),l=[[.31,.16],[.33,.19],[.3,.28],[.24,.4],[.19,.5],[.17,.56]].map(([S,C])=>new re(S,C)),c=ze(a,new Is(l,28),i,0,0,0);c.material.side=Rn;let h=ui(n,0,.5,0);if(ze(h,Kn(.19,.12),i,0,.17,0,1,.85,.8),e)for(let S of[-1,1])ze(h,Un,i,S*.2,.28,0,.09,.08,.09);else{let S=ze(h,new Vt(.205,.2,.3,20,1,!0,Math.PI*.24,Math.PI*1.52),s,0,.17,0,1,1,.84);S.material.side=Rn}let u=v_(h,a,{shoulderX:.24,shoulderY:.3,armR:.062,armLen:.2,handR:.058,hipX:.08,hipY:.3,legR:.07,legLen:.14,shoe:[.11,.07,.2],skinMat:t,sleeveMat:e?t:s,legMat:t,shoeMat:e?Et(16777215,{roughness:.5}):o}),f=ze(u.rHand.parent,new Xn(.055,.012,8,20),Et(14672874,{metalness:1,roughness:.25}),0,-.235,0,1,1,1,!1);f.rotation.x=Math.PI/2,f.visible=!e;let d=ui(h,0,.33,0);ze(d,Kn(.05,.05),t,0,.02,0);let p=ui(d,0,.21,0);e&&p.scale.setScalar(1.14),ze(p,el,t,0,0,0,.235,.245,.235);let y=ze(p,new Wt(.252,26,14,0,Math.PI*2,0,Math.PI*.52),r,0,.01,-.012);y.rotation.x=-.18;let m=ze(p,Un,r,-.05,.14,.15,.2,.075,.1);m.rotation.z=.35,m.rotation.x=-.4;let g=ui(p,0,0,0);if(e){ze(g,el,r,0,-.06,-.04,.27,.22,.25),ze(p,Un,r,0,.12,.17,.2,.07,.08).rotation.x=-.35;let S=Et(13215464,{roughness:.8});ze(p,new Vt(.42,.44,.03,32),S,0,.2,0),ze(p,new Wt(.26,24,12,0,Math.PI*2,0,Math.PI/2),S,0,.19,-.01),ze(p,new Xn(.255,.025,8,28),Et(16181503),0,.22,-.01).rotation.x=Math.PI/2}e||ze(g,Kn(.2,.26),r,0,-.16,-.1,1.15,1,.68);let x=[[-.16,-.38,-.1],[.16,-.38,-.1],[0,-.43,-.15]];if(!e)for(let[S,C,A]of x)ze(g,Un,r,S,C,A,.075,.08,.065);for(let S of e?[]:[-1,1]){let C=ze(p,Kn(.05,.26),r,S*.2,-.16,.02,1,1,.8);C.rotation.z=S*.1;let A=ze(p,Un,r,S*.215,-.33,.035,.06,.055,.05);A.rotation.z=S*.4}let v=[];for(let S of[-1,1]){v.push(ze(p,Kn(.028,.03),Et(2758162,{roughness:.25}),S*.085,.02,.222,1,1,1,!1)),ze(p,Un,Et(16777215,{emissive:16777215,emissiveIntensity:.4}),S*.085+.01,.035,.248,.009,.009,.006,!1);let C=ze(p,Kn(.012,.06),r,S*.088,.085,.215,1,1,1,!1);C.rotation.z=Math.PI/2-S*.18;let A=ze(p,Un,r,S*.115,.04,.21,.022,.008,.01,!1);A.rotation.z=S*.4,ze(p,Un,Et(16748451,{transparent:!0,opacity:.75}),S*.14,-.05,.19,.045,.028,.02,!1)}ze(p,Un,t,0,-.025,.236,.024,.026,.02,!1);let M=ze(p,new Xn(.03,.011,6,14,Math.PI),Et(e?14709374:11540522,{roughness:.35}),0,-.088,.226,1,.75,1,!1);M.rotation.z=Math.PI;let T=ui(p,-.17,.14,.12);T.visible=!e,T.rotation.set(.3,-.6,0);let w=Et(16777215,{emissive:16774888,emissiveIntensity:.35});for(let S=0;S<5;S++){let C=S/5*Math.PI*2;ze(T,Un,w,Math.cos(C)*.028,Math.sin(C)*.028,0,.026,.016,.008,!1)}ze(T,Un,Et(16766282),0,0,.006,.012,.012,.008,!1);let _=ze(p,new Xn(.04,.011,8,18,Math.PI*1.25),Et(16766842,{emissive:16757504,emissiveIntensity:1.1,metalness:.4}),.19,.12,.09,1,1,1,!1);return _.rotation.set(0,.7,.4),_.visible=!e,{hips:a,torso:h,neck:d,head:p,eyes:v,...u,extra:{skirt:c,backHair:g}}}function S_(n,{kid:e=!1}={}){let t=new yt,i=new yt;t.add(i),i.position.y=0;let s=new yt;i.add(s);let r=n==="sun",o=r?qT(s,e):YT(s,e);e&&i.scale.setScalar(VT[n]);let a=(e?Xf:Wf)[n].h,l=new cr(r?16747100:11570431,0,7,2);l.position.set(0,a*.6,0),t.add(l);let c={lax:0,laz:0,rax:0,raz:0,llx:0,rlx:0,lean:0,headX:0},h=0,u=0,f=0,d=2+Math.random()*3,p=0,y=!0,m=0,g=0,x=1;return{root:t,kind:n,glow:l,height:a,kid:e,get yaw(){return p},setYaw(v){p=v,t.rotation.y=v},land(v=8){u=Math.max(u,Math.min(1,v/16))},spin(){m=.42},throwAnim(){g=.3},animate(v,M){f+=v;let{speed:T,grounded:w,vy:_}=M,S=M.mode||0;w&&!y&&(u=Math.max(u,.45)),y=w;let C=Math.min(1,T/5.2);h+=v*(5+T*2.1),u=vn(u,0,9,v);let A=0,P=0,D=-.14,B=.14,I=0,k=0,X=0,G=0,oe=Math.sin(h);if(S===wt.hang)A=P=-2.95,D=-.22,B=.22,I=Math.sin(f*2.2)*.12,k=-I,X=.05,G=-.25;else if(S===wt.climb)A=P=-1.2,D=-.3,B=.3,I=1.1,k=.3,X=.45;else if(S===wt.wall)A=-2.2,P=-1.6,D=-.4,B=.5,I=.6,k=.2,X=-.1;else if(S===wt.carry)A=P=-2.9,D=-.38,B=.38,w&&(I=oe*.7*C,k=-I),G=-.15;else if(S===wt.carried)A=P=-.4,D=-1.1,B=1.1,I=1.25,k=1.05,X=-.15;else if(S===wt.dash)A=P=.95,D=-.35,B=.35,I=-.7,k=.5,X=.55,G=-.25;else if(S===wt.glide)A=P=0,D=-1.45+Math.sin(f*6)*.08,B=1.45-Math.sin(f*6)*.08,I=-.15,k=-.25,X=.18;else if(!w)_>0?(A=-.6,P=-.6,D=-1,B=1,I=.75,k=-.35):(D=-1.7+Math.sin(f*14)*.15,B=1.7-Math.sin(f*14)*.15,A=P=-.2,I=.35,k=-.2),X=.08;else{I=oe*.85*C,k=-I,A=-oe*.75*C*x,P=oe*.75*C*x;let $=1-C;D=-.14-Math.sin(f*1.8)*.03*$,B=.14+Math.sin(f*1.8)*.03*$,X=C*.18,G=Math.sin(f*.9)*.04*$}if(M.hold&&S===wt.normal&&(M.hold<0?(D=-1,A=-.35):(B=1,P=-.35)),g>0){g-=v;let $=g/.3;A=P=-2.9*$-.6*(1-$),D=-.3,B=.3}let q=16;c.lax=vn(c.lax,A,q,v),c.rax=vn(c.rax,P,q,v),c.laz=vn(c.laz,D,q,v),c.raz=vn(c.raz,B,q,v),c.llx=vn(c.llx,I,q,v),c.rlx=vn(c.rlx,k,q,v),c.lean=vn(c.lean,X,10,v),c.headX=vn(c.headX,G,8,v),o.lArm.rotation.set(c.lax,0,c.laz),o.rArm.rotation.set(c.rax,0,c.raz),o.lLeg.rotation.x=c.llx,o.rLeg.rotation.x=c.rlx,o.torso.rotation.x=c.lean,o.head.rotation.x=c.headX;let Q=w&&S!==wt.carried?Math.abs(Math.sin(h))*.05*C:0;s.position.y=Q;let Z=1+Math.sin(f*2.4)*.015*(1-C);!w&&S===wt.normal&&(Z+=Math.max(-.06,Math.min(.1,_*.01))),Z-=u*.25;let Ae=1/Math.sqrt(Math.max(.5,Z));if(s.scale.set(Ae,Z,Ae),o.extra.skirt){let $=S===wt.glide?1.18:w?1+C*.04:1.08,de=vn(o.extra.skirt.scale.x,$,8,v);o.extra.skirt.scale.set(de,1,de),o.extra.backHair.rotation.x=vn(o.extra.backHair.rotation.x,C*.25+(w?0:-.15),6,v)}if(m>0){m=Math.max(0,m-v);let $=1-m/.42,de=$*$*(3-2*$);r?(i.position.y=a*.5,s.position.y-=a*.5/i.scale.y,i.rotation.x=de*Math.PI*2):i.rotation.y=de*Math.PI*2}else i.rotation.set(0,0,0),i.position.y=0;d-=v;let Le=d<.12;for(let $ of o.eyes)$.scale.y=Le?.15:1;d<0&&(d=2.5+Math.random()*3.5),l.intensity=vn(l.intensity,0,3,v)}}}var $T=30,JT=.45,KT=28,iu=class{constructor(e=.36,t=1){this.pos=new N,this.vel=new N,this.r=e,this.h=t,this.grounded=!1,this.ground=null,this.maxFall=KT,this.wallC=null,this.wallNX=0,this.wallNZ=0}},jt={x:0,z:0};function ZT(n,e,t,i){let s=n<i.x0?i.x0:n>i.x1?i.x1:n,r=e<i.z0?i.z0:e>i.z1?i.z1:e,o=n-s,a=e-r,l=o*o+a*a;if(l>=t*t)return!1;if(l>1e-10){let p=Math.sqrt(l);return jt.x=o/p*(t-p),jt.z=a/p*(t-p),!0}let c=n-i.x0,h=i.x1-n,u=e-i.z0,f=i.z1-e,d=Math.min(c,h,u,f);return jt.x=0,jt.z=0,d===c?jt.x=-(c+t):d===h?jt.x=h+t:d===u?jt.z=-(u+t):jt.z=f+t,!0}function jT(n,e,t,i){let s=n-i.x,r=e-i.z,o=t+i.r,a=s*s+r*r;if(a>=o*o)return!1;let l=Math.sqrt(a);return l<1e-6?(jt.x=o,jt.z=0,!0):(jt.x=s/l*(o-l),jt.z=r/l*(o-l),!0)}var tl=(n,e,t,i)=>i.type==="box"?ZT(n,e,t,i):jT(n,e,t,i);function QT(n,e,t){let i=n.grounded;n.pos.x+=n.vel.x*t,n.pos.z+=n.vel.z*t;for(let o of e){if(o.owner===n||o.disabled)continue;let a=n.pos.y,l=a+n.h;if(a>=o.top-.001||l<=o.bottom+.001||!tl(n.pos.x,n.pos.z,n.r,o))continue;let c=o.top-a;if(!o.noStep&&n.vel.y<=.01&&(i?c<=JT:c<=.35)){n.pos.y=o.top;continue}n.pos.x+=jt.x,n.pos.z+=jt.z;let h=Math.hypot(jt.x,jt.z);if(h>1e-6){let u=jt.x/h,f=jt.z/h;!o.isPlayer&&o.top>a+.7&&o.bottom<a+.3&&(n.wallC=o,n.wallNX=u,n.wallNZ=f);let d=n.vel.x*u+n.vel.z*f;d<0&&(n.vel.x-=d*u,n.vel.z-=d*f)}}let s=n.pos.y;n.vel.y=Math.max(n.vel.y-$T*t,-n.maxFall),n.pos.y+=n.vel.y*t,n.grounded=!1,n.ground=null;let r=null;for(let o of e)o.owner===n||o.disabled||tl(n.pos.x,n.pos.z,n.r,o)&&(n.vel.y<=0?s>=o.top-.25&&n.pos.y<=o.top&&(!r||o.top>r.top)&&(r=o):s+n.h<=o.bottom+.05&&n.pos.y+n.h>o.bottom&&(n.pos.y=o.bottom-n.h,n.vel.y=0));if(r){let o=-n.vel.y;if(n.pos.y=r.top,n.vel.y=0,n.grounded=!0,n.ground=r,!i)return{collider:r,impact:o}}return null}function M_(n,e,t){n.wallC=null;let i=n.ground;i&&i.dx!==void 0&&i.dx*i.dx+i.dy*i.dy+i.dz*i.dz<1&&(n.pos.x+=i.dx,n.pos.y+=i.dy,n.pos.z+=i.dz);let s=Math.hypot(n.vel.x,n.vel.y,n.vel.z)+1,r=Math.min(8,Math.max(1,Math.ceil(s*t/.12))),o=null;for(let a=0;a<r;a++){let l=QT(n,e,t/r);l&&(o=l,l.collider.bounce&&(n.vel.y=l.collider.bounce,n.grounded=!1,n.ground=null))}return o}function b_(n,e){let t=n.pos.y,i=t+n.h*.9;for(let s of e){if(s.isPlayer||s.noGrab||s.disabled||s.owner===n||s.top<=t+n.h*.45||s.top>i+.35||s.top<i-.5||s.bottom>t+n.h*.5||!tl(n.pos.x,n.pos.z,n.r+.16,s))continue;let r=Math.hypot(jt.x,jt.z);if(r<1e-5)continue;let o=jt.x/r,a=jt.z/r,l=n.pos.x-o*(n.r+.32),c=n.pos.z-a*(n.r+.32);if(!tl(l,c,.02,s))continue;let h=!1;for(let u of e)if(!(u===s||u.isPlayer||u.disabled||u.owner===n)&&u.bottom<s.top+n.h&&u.top>s.top+.05&&tl(l,c,n.r*.8,u)){h=!0;break}if(!h)return{c:s,nx:o,nz:a,top:s.top,lx:l,lz:c}}return null}function E_(n){return{type:"cyl",x:0,z:0,r:n.r*.92,top:1,bottom:0,dx:0,dy:0,dz:0,isPlayer:!0,owner:n,ready:!1,px:0,py:0,pz:0}}function su(n,e,t){n.ready?(n.dx=e.x-n.px,n.dy=e.y-n.py,n.dz=e.z-n.pz):n.dx=n.dy=n.dz=0,n.px=e.x,n.py=e.y,n.pz=e.z,n.ready=!0,n.x=e.x,n.z=e.z,n.bottom=e.y,n.top=e.y+t}var si=null,vr=null,ks=bt.get("sound",!0);function w_(){try{if(!si){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;si=new t,vr=si.createGain(),vr.gain.value=ks?.5:0,vr.connect(si.destination)}si.state!=="running"&&si.resume();let n=si.createBuffer(1,1,22050),e=si.createBufferSource();e.buffer=n,e.connect(vr),e.start(0)}catch{}}var qt={get enabled(){return ks},toggle(){return ks=!ks,bt.set("sound",ks),vr&&(vr.gain.value=ks?.5:0),ks},play(n){if(!si||!ks||si.state!=="running")return;let e=e1[n];if(e)try{e(si.currentTime)}catch{}}};function Bn(n,{type:e="sine",f0:t,f1:i=t,dur:s=.15,vol:r=.3,attack:o=.005}){let a=si.createOscillator(),l=si.createGain();a.type=e,a.frequency.setValueAtTime(t,n),a.frequency.exponentialRampToValueAtTime(Math.max(1,i),n+s),l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(r,n+o),l.gain.exponentialRampToValueAtTime(1e-4,n+s),a.connect(l),l.connect(vr),a.start(n),a.stop(n+s+.02)}var e1={jump:n=>Bn(n,{type:"triangle",f0:320,f1:620,dur:.14,vol:.22}),jump2:n=>Bn(n,{type:"triangle",f0:480,f1:900,dur:.14,vol:.2}),land:n=>Bn(n,{type:"sine",f0:160,f1:70,dur:.1,vol:.25}),bounce:n=>{Bn(n,{type:"sine",f0:180,f1:720,dur:.32,vol:.32}),Bn(n+.05,{type:"triangle",f0:360,f1:1100,dur:.25,vol:.12})},star:n=>[784,988,1175,1568].forEach((e,t)=>Bn(n+t*.07,{type:"triangle",f0:e,dur:.22,vol:.18})),heart:n=>{Bn(n,{type:"sine",f0:660,dur:.12,vol:.22}),Bn(n+.11,{type:"sine",f0:880,dur:.2,vol:.22})},shine:n=>[523,659,784].forEach((e,t)=>Bn(n+t*.04,{type:"sine",f0:e,f1:e*1.5,dur:.4,vol:.12})),tide:n=>{Bn(n,{type:"sine",f0:300,f1:150,dur:.5,vol:.2}),Bn(n+.1,{type:"sine",f0:450,f1:220,dur:.5,vol:.12})},dash:n=>{Bn(n,{type:"sawtooth",f0:900,f1:180,dur:.16,vol:.06}),Bn(n,{type:"sine",f0:500,f1:120,dur:.18,vol:.14})},join:n=>[523,784].forEach((e,t)=>Bn(n+t*.12,{type:"triangle",f0:e,dur:.25,vol:.18})),respawn:n=>Bn(n,{type:"sine",f0:900,f1:300,dur:.35,vol:.15})};function T_({canvas:n,joyZone:e,joyBase:t,joyKnob:i,buttons:s}){let r={move:{x:0,y:0},jumpHeld:!1,pressed:new Set,camDX:0,camDY:0,enabled:!1,lastUse:0},o=v=>{r.enabled&&r.pressed.add(v)},a=()=>w_();window.addEventListener("pointerdown",a,{passive:!0}),window.addEventListener("touchend",a,{passive:!0}),window.addEventListener("keydown",a);for(let v of["gesturestart","gesturechange","dblclick"])document.addEventListener(v,M=>M.preventDefault(),{passive:!1});let l=52,c=null,h=0,u=0;e.addEventListener("pointerdown",v=>{if(v.pointerType==="mouse"){p(v);return}if(c!==null)return;v.preventDefault(),c=v.pointerId,e.setPointerCapture(v.pointerId);let M=e.getBoundingClientRect();h=v.clientX,u=v.clientY,t.hidden=!1,t.style.transform=`translate(${h-M.left}px, ${u-M.top}px)`,t.dataset.ox=M.left,t.dataset.oy=M.top,i.style.transform="translate(0px, 0px)",e.classList.add("active"),r.lastUse=performance.now()}),e.addEventListener("pointermove",v=>{if(v.pointerId===c){let M=+t.dataset.ox,T=+t.dataset.oy,w=v.clientX-h,_=v.clientY-u,S=Math.hypot(w,_);if(S>l){let P=(S-l)/S;h+=w*P,u+=_*P,w=v.clientX-h,_=v.clientY-u}t.style.transform=`translate(${h-M}px, ${u-T}px)`,i.style.transform=`translate(${w}px, ${_}px)`;let C=w/l,A=-_/l;Math.hypot(C,A)<.12&&(C=0,A=0),r.move.x=C,r.move.y=A}else y(v)});let f=v=>{if(v.pointerId!==c){m(v);return}c=null,r.move.x=0,r.move.y=0,t.hidden=!0,e.classList.remove("active")};e.addEventListener("pointerup",f),e.addEventListener("pointercancel",f);let d=new Map;function p(v){d.set(v.pointerId,{x:v.clientX,y:v.clientY});try{v.target.setPointerCapture(v.pointerId)}catch{}}function y(v){let M=d.get(v.pointerId);M&&(r.camDX+=v.clientX-M.x,r.camDY+=v.clientY-M.y,M.x=v.clientX,M.y=v.clientY)}function m(v){d.delete(v.pointerId)}n.addEventListener("pointerdown",v=>{v.preventDefault(),p(v)}),n.addEventListener("pointermove",y),n.addEventListener("pointerup",m),n.addEventListener("pointercancel",m);for(let[v,M]of Object.entries(s)){M.addEventListener("pointerdown",w=>{w.preventDefault();try{M.setPointerCapture(w.pointerId)}catch{}M.classList.add("pressed"),o(v),v==="jump"&&(r.jumpHeld=!0)});let T=()=>{M.classList.remove("pressed"),v==="jump"&&(r.jumpHeld=!1)};M.addEventListener("pointerup",T),M.addEventListener("pointercancel",T),M.addEventListener("lostpointercapture",T),M.addEventListener("contextmenu",w=>w.preventDefault())}let g=new Set,x=()=>{if(c!==null)return;let v=0,M=0;(g.has("KeyA")||g.has("ArrowLeft"))&&(v-=1),(g.has("KeyD")||g.has("ArrowRight"))&&(v+=1),(g.has("KeyW")||g.has("ArrowUp"))&&(M+=1),(g.has("KeyS")||g.has("ArrowDown"))&&(M-=1);let T=Math.hypot(v,M)||1;r.move.x=v/T,r.move.y=M/T};return window.addEventListener("keydown",v=>{v.target.tagName!=="INPUT"&&(v.repeat||(g.add(v.code),v.code==="Space"&&(o("jump"),r.jumpHeld=!0,v.preventDefault()),v.code==="KeyE"&&o("ability"),v.code==="KeyH"&&o("heart"),v.code==="KeyQ"&&o("swap"),(v.code==="ShiftLeft"||v.code==="ShiftRight"||v.code==="KeyK")&&o("dash"),x()))}),window.addEventListener("keyup",v=>{g.delete(v.code),v.code==="Space"&&(r.jumpHeld=!1),x()}),window.addEventListener("blur",()=>{g.clear(),r.jumpHeld=!1,r.move.x=r.move.y=0}),{state:r,consume(v){let M=r.pressed.has(v);return r.pressed.delete(v),M},takeCam(){let v={x:r.camDX,y:r.camDY};return r.camDX=0,r.camDY=0,v},setEnabled(v){r.enabled=v,v||(r.pressed.clear(),r.move.x=r.move.y=0,r.jumpHeld=!1)}}}var A_=new N,t1=new N,n1=new N,ru=class{constructor(){this.buf=[],this.lat=[],this.delay=null,this.pos=new N,this.vel=new N,this.yaw=0,this.grounded=!0,this.mode=0,this.has=!1,this.lastRecv=0}push(e,t){let i=this.buf[this.buf.length-1];i&&e.t<=i.t||(i&&e.t-i.t>2500&&(this.buf.length=0),this.buf.push(e),this.buf.length>60&&this.buf.shift(),this.lat.push(t-e.t),this.lat.length>40&&this.lat.shift(),this.lastRecv=performance.now())}snap(){this.buf.splice(0,this.buf.length-1)}targetDelay(){let e=[...this.lat].sort((i,s)=>i-s);return e[Math.min(e.length-1,Math.floor(e.length*.9))]+45}jitter(){if(this.lat.length<2)return 0;let e=[...this.lat].sort((t,i)=>t-i);return Math.round(e[Math.floor(e.length*.9)]-e[0])}sample(e,t,i){if(!this.buf.length)return!1;let s=this.targetDelay();this.delay===null||Math.abs(s-this.delay)>1e3?this.delay=s:this.delay+=(s-this.delay)*Math.min(1,t*1.5);let r=e-this.delay,o=this.buf,a=(p,y)=>{if(y.set(p.p[0],p.p[1],p.p[2]),p.b){let m=i(p.b,n1);if(!m)return null;y.add(m)}return y};for(;o.length>2&&o[1].t<=r;)o.shift();let l=o[0],c=o[1];if(c&&r>=l.t&&r<=c.t){let p=(r-l.t)/Math.max(1,c.t-l.t),y=a(l,A_),m=a(c,t1);if(y&&m){if(!l.b&&!c.b&&l.b===c.b){let g=(c.t-l.t)/1e3,x=p*p,v=x*p,M=2*v-3*x+1,T=v-2*x+p,w=-2*v+3*x,_=v-x,S=g<.25;for(let C of["x","y","z"]){let A=C==="x"?0:C==="y"?1:2,P=y[C]+(m[C]-y[C])*p,D=M*y[C]+T*g*l.v[A]+w*m[C]+_*g*c.v[A];this.pos[C]=S?D:P}(l.g||c.g)&&S&&(this.pos.y=y.y+(m.y-y.y)*p)}else this.pos.lerpVectors(y,m,p);return this.vel.set(l.v[0]+(c.v[0]-l.v[0])*p,l.v[1]+(c.v[1]-l.v[1])*p,l.v[2]+(c.v[2]-l.v[2])*p),this.yaw=l.r+ja(l.r,c.r)*p,this.grounded=p<.5?!!l.g:!!c.g,this.mode=(p<.5?l.m:c.m)||0,this.has=!0,!0}}let h=r<l.t?l:o[o.length-1],u=a(h,A_);if(!u)return this.has;let f=ds((r-h.t)/1e3,0,.25),d=Math.hypot(h.v[0],h.v[2])>.05||!h.g;return this.pos.set(u.x+(d?h.v[0]*f:0),u.y+(h.g?0:h.v[1]*f),u.z+(d?h.v[2]*f:0)),h.g&&(this.pos.y=u.y),this.vel.set(h.v[0],h.v[1],h.v[2]),this.yaw=h.r,this.grounded=!!h.g,this.mode=h.m||0,this.has=!0,!0}};var C_=()=>{};var qf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};var ce=function(n,e){if(!n)throw Mr(e)},Mr=function(n){return new Error("Firebase Database ("+qf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};var I_=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},i1=function(n){let e=[],t=0,i=0;for(;t<n.length;){let s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){let r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){let r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{let r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},lu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){let r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4,f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(t[h],t[u],t[f],t[d])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(I_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):i1(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){let r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;let c=s<n.length?t[n.charAt(s)]:64;++s;let u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new Yf;let f=r<<2|a>>4;if(i.push(f),c!==64){let d=a<<4&240|c>>2;if(i.push(d),u!==64){let p=c<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Yf=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},$f=function(n){let e=I_(n);return lu.encodeByteArray(e,!0)},nl=function(n){return $f(n).replace(/\./g,"")},ou=function(n){try{return lu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function P_(n){return N_(void 0,n)}function N_(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:let t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(let t in e)!e.hasOwnProperty(t)||!s1(t)||(n[t]=N_(n[t],e[t]));return n}function s1(n){return n!=="__proto__"}function r1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var o1=()=>r1().__FIREBASE_DEFAULTS__,a1=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},l1=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&ou(n[1]);return e&&JSON.parse(e)},L_=()=>{try{return C_()||o1()||a1()||l1()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},c1=n=>L_()?.emulatorHosts?.[n],D_=n=>{let e=c1(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Jf=()=>L_()?.config;var Zn=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}};function O_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[nl(JSON.stringify(t)),nl(JSON.stringify(o)),""].join(".")}function h1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h1())}function F_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hi(){return qf.NODE_CLIENT===!0||qf.NODE_ADMIN===!0}function U_(){try{return typeof indexedDB=="object"}catch{return!1}}function B_(){return new Promise((n,e)=>{try{let t=!0,i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}var u1="FirebaseError",Sr=class n extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=u1,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,il.prototype.create)}},il=class{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?d1(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Sr(s,a,i)}};function d1(n,e){try{let t=0,i="";for(;t<n.length;){let s=n.indexOf("{$",t);if(s===-1){i+=n.substring(t);break}let r=n.indexOf("}",s+2);if(r===-1){i+=n.substring(t);break}let o=n.substring(s+2,r),a=e[o];i+=n.substring(t,s)+(a!=null?String(a):`<${o}?>`),t=r+1}return i}catch{return n}}function bo(n){return JSON.parse(n)}function rn(n){return JSON.stringify(n)}var k_=function(n){let e={},t={},i={},s="";try{let r=n.split(".");e=bo(ou(r[0])||""),t=bo(ou(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}};var z_=function(n){let e=k_(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},H_=function(n){let e=k_(n).claims;return typeof e=="object"&&e.admin===!0};function Ei(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function br(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function cu(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function sl(n,e,t){let i={};for(let s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Eo(n,e){if(n===e)return!0;let t=Object.keys(n),i=Object.keys(e);for(let s of t){if(!i.includes(s))return!1;let r=n[s],o=e[s];if(R_(r)&&R_(o)){if(!Eo(r,o))return!1}else if(r!==o)return!1}for(let s of i)if(!t.includes(s))return!1;return!0}function R_(n){return n!==null&&typeof n=="object"}function G_(n){let e=[];for(let[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}var au=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);let i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){let f=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);let f=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);let i=t-this.blockSize,s=0,r=this.buf_,o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){let e=[],t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}};function Er(n,e){return`${n} failed: ${e} argument `}var V_=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){let r=s-55296;i++,ce(i<n.length,"Surrogate pair missing trail surrogate.");let o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rl=function(n){let e=0;for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};var PL=14400*1e3;function Gi(n){return n&&n._delegate?n._delegate:n}function Zf(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function W_(n){return(await fetch(n,{credentials:"include"})).ok}var ps=class{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var wr="[DEFAULT]";var hu=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let i=new Zn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{let s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(p1(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(let[t,i]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(t);try{let r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(let[r,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){let i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);let r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:f1(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function f1(n){return n===wr?void 0:n}function p1(n){return n.instantiationMode==="EAGER"}var ol=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new hu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var m1=[],Nt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Nt||(Nt={}));var g1={debug:Nt.DEBUG,verbose:Nt.VERBOSE,info:Nt.INFO,warn:Nt.WARN,error:Nt.ERROR,silent:Nt.SILENT},_1=Nt.INFO,y1={[Nt.DEBUG]:"log",[Nt.VERBOSE]:"log",[Nt.INFO]:"info",[Nt.WARN]:"warn",[Nt.ERROR]:"error"},x1=(n,e,...t)=>{if(e<n.logLevel)return;let i=new Date().toISOString(),s=y1[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},wo=class{constructor(e){this.name=e,this._logLevel=_1,this._logHandler=x1,this._userLogHandler=null,m1.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Nt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?g1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Nt.DEBUG,...e),this._logHandler(this,Nt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Nt.VERBOSE,...e),this._logHandler(this,Nt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Nt.INFO,...e),this._logHandler(this,Nt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Nt.WARN,...e),this._logHandler(this,Nt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Nt.ERROR,...e),this._logHandler(this,Nt.ERROR,...e)}};var v1=(n,e)=>e.some(t=>n instanceof t),X_,q_;function S1(){return X_||(X_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M1(){return q_||(q_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Y_=new WeakMap,Qf=new WeakMap,$_=new WeakMap,jf=new WeakMap,tp=new WeakMap;function b1(n){let e=new Promise((t,i)=>{let s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Vi(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Y_.set(t,n)}).catch(()=>{}),tp.set(e,n),e}function E1(n){if(Qf.has(n))return;let e=new Promise((t,i)=>{let s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Qf.set(n,e)}var ep={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function J_(n){ep=n(ep)}function w1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let i=n.call(uu(this),e,...t);return $_.set(i,e.sort?e.sort():[e]),Vi(i)}:M1().includes(n)?function(...e){return n.apply(uu(this),e),Vi(Y_.get(this))}:function(...e){return Vi(n.apply(uu(this),e))}}function T1(n){return typeof n=="function"?w1(n):(n instanceof IDBTransaction&&E1(n),v1(n,S1())?new Proxy(n,ep):n)}function Vi(n){if(n instanceof IDBRequest)return b1(n);if(jf.has(n))return jf.get(n);let e=T1(n);return e!==n&&(jf.set(n,e),tp.set(e,n)),e}var uu=n=>tp.get(n);function Z_(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){let o=indexedDB.open(n,e),a=Vi(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Vi(o.result),l.oldVersion,l.newVersion,Vi(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}var A1=["get","getKey","getAll","getAllKeys","count"],C1=["put","add","delete","clear"],np=new Map;function K_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(np.get(e))return np.get(e);let t=e.replace(/FromIndex$/,""),i=e!==t,s=C1.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||A1.includes(t)))return;let r=async function(o,...a){let l=this.transaction(o,s?"readwrite":"readonly"),c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return np.set(e,r),r}J_(n=>({...n,get:(e,t,i)=>K_(e,t)||n.get(e,t,i),has:(e,t)=>!!K_(e,t)||n.has(e,t)}));var sp=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(R1(t)){let i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}};function R1(n){return n.getComponent()?.type==="VERSION"}var rp="@firebase/app",j_="0.16.5";var gs=new wo("@firebase/app"),I1="@firebase/app-compat",P1="@firebase/analytics-compat",N1="@firebase/analytics",L1="@firebase/app-check-compat",D1="@firebase/app-check",O1="@firebase/auth",F1="@firebase/auth-compat",U1="@firebase/crashlytics",B1="@firebase/database",k1="@firebase/data-connect",z1="@firebase/database-compat",H1="@firebase/functions",G1="@firebase/functions-compat",V1="@firebase/installations",W1="@firebase/installations-compat",X1="@firebase/messaging",q1="@firebase/messaging-compat",Y1="@firebase/performance",$1="@firebase/performance-compat",J1="@firebase/remote-config",K1="@firebase/remote-config-compat",Z1="@firebase/storage",j1="@firebase/storage-compat",Q1="@firebase/firestore",eA="@firebase/ai",tA="@firebase/firestore-compat",nA="firebase",iA="13.2.0";var op="[DEFAULT]",sA={[rp]:"fire-core",[I1]:"fire-core-compat",[N1]:"fire-analytics",[P1]:"fire-analytics-compat",[D1]:"fire-app-check",[L1]:"fire-app-check-compat",[O1]:"fire-auth",[F1]:"fire-auth-compat",[U1]:"fire-cls",[B1]:"fire-rtdb",[k1]:"fire-data-connect",[z1]:"fire-rtdb-compat",[H1]:"fire-fn",[G1]:"fire-fn-compat",[V1]:"fire-iid",[W1]:"fire-iid-compat",[X1]:"fire-fcm",[q1]:"fire-fcm-compat",[Y1]:"fire-perf",[$1]:"fire-perf-compat",[J1]:"fire-rc",[K1]:"fire-rc-compat",[Z1]:"fire-gcs",[j1]:"fire-gcs-compat",[Q1]:"fire-fst",[tA]:"fire-fst-compat",[eA]:"fire-vertex","fire-js":"fire-js",[nA]:"fire-js-all"};var du=new Map,rA=new Map,ap=new Map;function Q_(n,e){try{n.container.addComponent(e)}catch(t){gs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function al(n){let e=n.name;if(ap.has(e))return gs.debug(`There were multiple attempts to register component ${e}.`),!1;ap.set(e,n);for(let t of du.values())Q_(t,n);for(let t of rA.values())Q_(t,n);return!0}function iy(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function sy(n){return n==null?!1:n.settings!==void 0}var oA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ms=new il("app","Firebase",oA);var lp=class{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ps("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}};var ry=iA;function up(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let i={name:op,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw ms.create("bad-app-name",{appName:String(s)});if(t||(t=Jf()),!t)throw ms.create("no-options");let r=du.get(s);if(r)if(Eo(t,r.options)){if(Eo(i,r.config))return r;throw ms.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(i)})}else throw ms.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(t)});let o=new ol(s);for(let l of ap.values())o.addComponent(l);let a=new lp(t,i,o);return du.set(s,a),a}function oy(n=op){let e=du.get(n);if(!e&&n===op&&Jf())return up();if(!e)throw ms.create("no-app",{appName:n});return e}function zs(n,e,t){let i=sA[n]??n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){let o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gs.warn(o.join(" "));return}al(new ps(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var aA="firebase-heartbeat-database",lA=1,ll="firebase-heartbeat-store",ip=null;function ay(){return ip||(ip=Z_(aA,lA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ll)}catch(t){console.warn(t)}}}}).catch(n=>{throw ms.create("idb-open",{originalErrorMessage:n.message})})),ip}async function cA(n){try{let t=(await ay()).transaction(ll),i=await t.objectStore(ll).get(ly(n));return await t.done,i}catch(e){if(e instanceof Sr)gs.warn(e.message);else{let t=ms.create("idb-get",{originalErrorMessage:e?.message});gs.warn(t.message)}}}async function ey(n,e){try{let i=(await ay()).transaction(ll,"readwrite");await i.objectStore(ll).put(e,ly(n)),await i.done}catch(t){if(t instanceof Sr)gs.warn(t.message);else{let i=ms.create("idb-set",{originalErrorMessage:t?.message});gs.warn(i.message)}}}function ly(n){return`${n.name}!${n.options.appId}`}var hA=1024,uA=30,cp=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new hp(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{let t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ty();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>uA){let s=fA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){gs.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let e=ty(),{heartbeatsToSend:t,unsentEntries:i}=dA(this._heartbeatsCache.heartbeats),s=nl(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return gs.warn(e),""}}};function ty(){return new Date().toISOString().substring(0,10)}function dA(n,e=hA){let t=[],i=n.slice();for(let s of n){let r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ny(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ny(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}var hp=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return U_()?B_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await cA(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let i=await this.read();return ey(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){let i=await this.read();return ey(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function ny(n){return nl(JSON.stringify({version:2,heartbeats:n})).length}function fA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}function pA(n){al(new ps("platform-logger",e=>new sp(e),"PRIVATE")),al(new ps("heartbeat",e=>new cp(e),"PRIVATE")),zs(rp,j_,n),zs(rp,j_,"esm2020"),zs("fire-js","")}pA("");var mA="firebase",gA="13.2.0";zs(mA,gA,"app");var cy="@firebase/database",hy="1.1.5";var mm="";function _A(n){mm=n}var xp=class{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rn(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:bo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}};var vp=class{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ei(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}};var Vy=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){let e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xp(e)}}catch{}return new vp},Ar=Vy("localStorage"),Sp=Vy("sessionStorage");var Co=new wo("@firebase/database"),yA=(function(){let n=1;return function(){return n++}})(),Wy=function(n){let e=V_(n),t=new au;t.update(e);let i=t.digest();return lu.encodeByteArray(i)},Tl=function(...n){let e="";for(let t=0;t<n.length;t++){let i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Tl.apply(null,i):typeof i=="object"?e+=rn(i):e+=i,e+=" "}return e},Rr=null,uy=!0,xA=function(n,e){ce(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Co.logLevel=Nt.VERBOSE,Rr=Co.log.bind(Co),e&&Sp.set("logging_enabled",!0)):typeof n=="function"?Rr=n:(Rr=null,Sp.remove("logging_enabled"))},pn=function(...n){if(uy===!0&&(uy=!1,Rr===null&&Sp.get("logging_enabled")===!0&&xA(!0)),Rr){let e=Tl.apply(null,n);Rr(e)}},Al=function(n){return function(...e){pn(n,...e)}},Mp=function(...n){let e="FIREBASE INTERNAL ERROR: "+Tl(...n);Co.error(e)},ys=function(...n){let e=`FIREBASE FATAL ERROR: ${Tl(...n)}`;throw Co.error(e),new Error(e)},Hn=function(...n){let e="FIREBASE WARNING: "+Tl(...n);Co.warn(e)},vA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Hn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zu=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},SA=function(n){if(Hi()||document.readyState==="complete")n();else{let e=!1,t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Io="[MIN_NAME]",Ir="[MAX_NAME]",Lr=function(n,e){if(n===e)return 0;if(n===Io||e===Ir)return-1;if(e===Io||n===Ir)return 1;{let t=dy(n),i=dy(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},MA=function(n,e){return n===e?0:n<e?-1:1},cl=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+rn(e))},gm=function(n){if(typeof n!="object"||n===null)return rn(n);let e=[];for(let i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=rn(e[i]),t+=":",t+=gm(n[e[i]]);return t+="}",t},Xy=function(n,e){let t=n.length;if(t<=e)return[n];let i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function mn(n,e){for(let t in n)n.hasOwnProperty(t)&&e(t,n[t])}var qy=function(n){ce(!zu(n),"Invalid JSON number");let e=11,t=52,i=(1<<e-1)-1,s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));let c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();let h=c.join(""),u="";for(l=0;l<64;l+=8){let f=parseInt(h.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},bA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},EA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wA(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");let i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}var TA=new RegExp("^-?(0*)\\d{1,10}$"),AA=-2147483648,CA=2147483647,dy=function(n){if(TA.test(n)){let e=Number(n);if(e>=AA&&e<=CA)return e}return null},Bo=function(n){try{n()}catch(e){setTimeout(()=>{let t=e.stack||"";throw Hn("Exception was thrown by user callback.",t),e},Math.floor(0))}},RA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fl=function(n,e){let t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};var bp=class{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,sy(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Hn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}};var Ep=class{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(pn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Hn(e)}},Gs=class{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};Gs.OWNER="owner";var pu="5",Yy="v",$y="s",Jy="r",Ky="f",Zy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jy="ls",Qy="p",wp="ac",ex="websocket",tx="long_polling";var mu=class{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ar.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ar.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}};function IA(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function nx(n,e,t){ce(typeof e=="string","typeof type must == string"),ce(typeof t=="object","typeof params must == object");let i;if(e===ex)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===tx)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);IA(n)&&(t.ns=n.namespace);let s=[];return mn(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}var Tp=class{constructor(){this.counters_={}}incrementCounter(e,t=1){Ei(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return P_(this.counters_)}};var dp={},fp={};function _m(n){let e=n.toString();return dp[e]||(dp[e]=new Tp),dp[e]}function PA(n,e){let t=n.toString();return fp[t]||(fp[t]=e()),fp[t]}var Ap=class{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Bo(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}};var fy="start",NA="close",LA="pLPCommand",DA="pRTLPCB",ix="id",sx="pw",rx="ser",OA="cb",FA="seg",UA="ts",BA="d",kA="dframe",ox=1870,ax=30,zA=ox-ax,HA=25e3,GA=3e4,Cp=class n{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Al(e),this.stats_=_m(t),this.urlFn=l=>(this.appCheckToken&&(l[wp]=this.appCheckToken),nx(t,tx,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ap(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GA)),SA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rp((...r)=>{let[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fy)this.id=a,this.password=l;else if(o===NA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{let[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);let i={};i[fy]="t",i[rx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[OA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Yy]=pu,this.transportSessionId&&(i[$y]=this.transportSessionId),this.lastSessionId&&(i[jy]=this.lastSessionId),this.applicationId&&(i[Qy]=this.applicationId),this.appCheckToken&&(i[wp]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zy.test(location.hostname)&&(i[Jy]=Ky);let s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){n.forceAllow_=!0}static forceDisallow(){n.forceDisallow_=!0}static isAvailable(){return Hi()?!1:n.forceAllow_?!0:!n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bA()&&!EA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=rn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=$f(t),s=Xy(i,zA);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Hi())return;this.myDisconnFrame=document.createElement("iframe");let i={};i[kA]="t",i[ix]=e,i[sx]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=rn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}},Rp=class n{constructor(e,t,i,s){if(this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0,Hi())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=yA(),window[LA+this.uniqueCallbackIdentifier]=e,window[DA+this.uniqueCallbackIdentifier]=t,this.myIFrame=n.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');let o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pn("frame writing exception"),a.stack&&pn(a.stack),pn(a)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pn("No IE domain setting required")}catch{let i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;let e={};e[ix]=this.myID,e[sx]=this.myPW,e[rx]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ax+i.length<=ox;){let o=this.pendingSegs.shift();i=i+"&"+FA+s+"="+o.seg+"&"+UA+s+"="+o.ts+"&"+BA+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(HA)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){Hi()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){let s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{pn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}};var VA=16384,WA=45e3,gu=null;typeof MozWebSocket<"u"?gu=MozWebSocket:typeof WebSocket<"u"&&(gu=WebSocket);var _s=class n{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Al(this.connId),this.stats_=_m(t),this.connURL=n.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){let o={};return o[Yy]=pu,!Hi()&&typeof location<"u"&&location.hostname&&Zy.test(location.hostname)&&(o[Jy]=Ky),t&&(o[$y]=t),i&&(o[jy]=i),s&&(o[wp]=s),r&&(o[Qy]=r),nx(e,ex,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ar.set("previous_websocket_failure",!0);try{let i;if(Hi()){let s=this.nodeAdmin?"AdminNode":"Node";i={headers:{"User-Agent":`Firebase/${pu}/${mm}/${process.platform}/${s}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(i.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(i.headers["X-Firebase-AppCheck"]=this.appCheckToken);let r=process.env,o=this.connURL.indexOf("wss://")===0?r.HTTPS_PROXY||r.https_proxy:r.HTTP_PROXY||r.http_proxy;o&&(i.proxy={origin:o})}this.mySock=new gu(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");let s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");let s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){n.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){let t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&gu!==null&&!n.forceDisallow_}static previouslyFailed(){return Ar.isInMemoryStorage||Ar.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ar.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let t=this.frames.join("");this.frames=null;let i=bo(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ce(this.frames===null,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{let i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();let t=rn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=Xy(t,VA);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(WA))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}};_s.responsesRequiredToBeHealthy=2;_s.healthyTimeout=3e4;var _u=class n{static get ALL_TRANSPORTS(){return[Cp,_s]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){let t=_s&&_s.isAvailable(),i=t&&!_s.previouslyFailed();if(e.webSocketOnly&&(t||Hn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[_s];else{let s=this.transports_=[];for(let r of n.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);n.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};_u.globalTransportInitialized_=!1;var XA=6e4,qA=5e3,YA=10*1024,$A=100*1024,pp="t",py="d",JA="s",my="r",KA="e",gy="o",_y="a",yy="n",xy="p",ZA="h",Ip=class{constructor(e,t,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Al("c:"+this.id+":"),this.transportManager_=new _u(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));let s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=fl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$A?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){let t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pp in e){let t=e[pp];t===_y?this.upgradeIfSecondaryHealthy_():t===my?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===gy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=cl("t",e),i=cl("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:xy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_y,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=cl("t",e),i=cl("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=cl(pp,e);if(py in e){let i=e[py];if(t===ZA){let s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===yy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===JA?this.onConnectionShutdown_(i):t===my?this.onReset_(i):t===KA?Mp("Server Error: "+i):t===gy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mp("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),pu!==i&&Hn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),fl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(XA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:xy,d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ar.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}};var yu=class{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}};var xu=class{constructor(e){this.allowedEvents_=e,this.listeners_={},ce(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});let s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);let s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){ce(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}};var vu=class n extends xu{static getInstance(){return new n}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ce(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}};var vy=32,Sy=768,Tt=class{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}};function vt(){return new Tt("")}function ot(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Xs(n){return n.pieces_.length-n.pieceNum_}function Lt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Tt(n.pieces_,e)}function ym(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function jA(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function _l(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function lx(n){if(n.pieceNum_>=n.pieces_.length)return null;let e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Tt(e,0)}function Yt(n,e){let t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof Tt)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{let i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new Tt(t,0)}function ct(n){return n.pieceNum_>=n.pieces_.length}function zn(n,e){let t=ot(n),i=ot(e);if(t===null)return e;if(t===i)return zn(Lt(n),Lt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function QA(n,e){let t=_l(n,0),i=_l(e,0);for(let s=0;s<t.length&&s<i.length;s++){let r=Lr(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function xm(n,e){if(Xs(n)!==Xs(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function di(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Xs(n)>Xs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}var Pp=class{constructor(e,t){this.errorPrefix_=t,this.parts_=_l(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=rl(this.parts_[i]);cx(this)}};function eC(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=rl(e),cx(n)}function tC(n){let e=n.parts_.pop();n.byteLength_-=rl(e),n.parts_.length>0&&(n.byteLength_-=1)}function cx(n){if(n.byteLength_>Sy)throw new Error(n.errorPrefix_+"has a key path longer than "+Sy+" bytes ("+n.byteLength_+").");if(n.parts_.length>vy)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vy+") or object contains a cycle "+Tr(n))}function Tr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}var Np=class n extends xu{static getInstance(){return new n}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return ce(e==="visible","Unknown event type: "+e),[this.visible_]}};var hl=1e3,nC=300*1e3,My=30*1e3,iC=1.3,sC=3e4,rC="server_kill",by=3,Pr=class n extends yu{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=n.nextPersistentConnectionId_++,this.log_=Al("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hl,this.maxReconnectDelay_=nC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Hi())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Np.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){let s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(rn(r)),ce(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();let t=new Zn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{let a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;let r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();let r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ce(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");let a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){let t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);let r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{let l=a.d,c=a.s;n.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ei(e,"w")){let i=br(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){let s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Hn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||H_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=My)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=z_(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{let r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){let i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);let r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){let r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();let o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;let a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){let r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rn(e));let t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Mp("Unrecognized action received from server: "+rn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ce(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sC&&(this.reconnectDelay_=hl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_),t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+n.nextConnectionId_++,r=this.lastSessionId,o=!1,a=null,l=function(){a?a.close():(o=!0,i())},c=function(u){ce(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};let h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[u,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?pn("getToken() completed but was canceled"):(pn("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new Ip(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,d=>{Hn(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(rC)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Hn(u),l())}}}interrupt(e){pn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cu(this.interruptReasons_)&&(this.reconnectDelay_=hl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>gm(r)).join("$"):i="default";let s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){let i=new Tt(e).toString(),s;if(this.listens.has(i)){let r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){pn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=by&&(this.reconnectDelay_=My,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){pn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=by&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(let e of this.listens.values())for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";Hi()&&(this.repoInfo_.nodeAdmin?t="admin_node":t="node"),e["sdk."+t+"."+mm.replace(/\./g,"-")]=1,Kf()?e["framework.cordova"]=1:F_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=vu.getInstance().currentlyOnline();return cu(this.interruptReasons_)&&e}};Pr.nextPersistentConnectionId_=0;Pr.nextConnectionId_=0;var ht=class n{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new n(e,t)}};var Po=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let i=new ht(Io,e),s=new ht(Io,t);return this.compare(i,s)!==0}minPost(){return ht.MIN}};var fu,Su=class extends Po{static get __EMPTY_NODE(){return fu}static set __EMPTY_NODE(e){fu=e}compare(e,t){return Lr(e.name,t.name)}isDefinedOn(e){throw Mr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ht.MIN}maxPost(){return new ht(Ir,fu)}makePost(e,t){return ce(typeof e=="string","KeyIndex indexValue must always be a string."),new ht(e,fu)}toString(){return".key"}},Ro=new Su;var Ao=class{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},kn=class n{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??n.RED,this.left=s??fi.EMPTY_NODE,this.right=r??fi.EMPTY_NODE}copy(e,t,i,s,r){return new n(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this,r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return fi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return fi.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};kn.RED=!0;kn.BLACK=!1;var Lp=class{copy(e,t,i,s,r){return this}insert(e,t,i){return new kn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}},fi=class n{constructor(e,t=n.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new n(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,kn.BLACK,null,null))}remove(e){return new n(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,kn.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ao(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ao(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ao(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ao(this.root_,null,this.comparator_,!0,e)}};fi.EMPTY_NODE=new Lp;function oC(n,e){return Lr(n.name,e.name)}function vm(n,e){return Lr(n,e)}var Dp;function aC(n){Dp=n}var hx=function(n){return typeof n=="number"?"number:"+qy(n):"string:"+n},ux=function(n){if(n.isLeafNode()){let e=n.val();ce(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ei(e,".sv"),"Priority must be a string or number.")}else ce(n===Dp||n.isEmpty(),"priority of unexpected type.");ce(n===Dp||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};var Ey,xs=class n{static set __childrenNodeConstructor(e){Ey=e}static get __childrenNodeConstructor(){return Ey}constructor(e,t=n.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ce(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ux(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new n(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:n.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ct(e)?this:ot(e)===".priority"?this.priorityNode_:n.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:n.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let i=ot(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(ce(i!==".priority"||Xs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,n.__childrenNodeConstructor.EMPTY_NODE.updateChild(Lt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hx(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":",t==="number"?e+=qy(this.value_):e+=this.value_,this.lazyHash_=Wy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===n.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof n.__childrenNodeConstructor?-1:(ce(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,i=typeof this.value_,s=n.VALUE_TYPE_ORDER.indexOf(t),r=n.VALUE_TYPE_ORDER.indexOf(i);return ce(s>=0,"Unknown leaf type: "+t),ce(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){let t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}};xs.VALUE_TYPE_ORDER=["object","boolean","number","string"];var dx,fx;function lC(n){dx=n}function cC(n){fx=n}var Op=class extends Po{compare(e,t){let i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Lr(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ht.MIN}maxPost(){return new ht(Ir,new xs("[PRIORITY-POST]",fx))}makePost(e,t){let i=dx(e);return new ht(t,new xs("[PRIORITY-POST]",i))}toString(){return".priority"}},$t=new Op;var hC=Math.log(2),Fp=class{constructor(e){let t=r=>parseInt(Math.log(r)/hC,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;let s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}},Mu=function(n,e,t,i){n.sort(e);let s=function(l,c){let h=c-l,u,f;if(h===0)return null;if(h===1)return u=n[l],f=t?t(u):u,new kn(f,u.node,kn.BLACK,null,null);{let d=parseInt(h/2,10)+l,p=s(l,d),y=s(d+1,c);return u=n[d],f=t?t(u):u,new kn(f,u.node,kn.BLACK,p,y)}},r=function(l){let c=null,h=null,u=n.length,f=function(p,y){let m=u-p,g=u;u-=p;let x=s(m+1,g),v=n[m],M=t?t(v):v;d(new kn(M,v.node,y,null,x))},d=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<l.count;++p){let y=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));y?f(m,kn.BLACK):(f(m,kn.BLACK),f(m,kn.RED))}return h},o=new Fp(n.length),a=r(o);return new fi(i||e,a)};var mp,To={},No=class n{static get Default(){return ce(To&&$t,"ChildrenNode.ts has not been loaded"),mp=mp||new n({".priority":To},{".priority":$t}),mp}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=br(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof fi?t:null}hasIndex(e){return Ei(this.indexSet_,e.toString())}addIndex(e,t){ce(e!==Ro,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],s=!1,r=t.getIterator(ht.Wrap),o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Mu(i,e.getCompare()):a=To;let l=e.toString(),c={...this.indexSet_};c[l]=e;let h={...this.indexes_};return h[l]=a,new n(h,c)}addToIndexes(e,t){let i=sl(this.indexes_,(s,r)=>{let o=br(this.indexSet_,r);if(ce(o,"Missing index implementation for "+r),s===To)if(o.isDefinedOn(e.node)){let a=[],l=t.getIterator(ht.Wrap),c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Mu(a,o.getCompare())}else return To;else{let a=t.get(e.name),l=s;return a&&(l=l.remove(new ht(e.name,a))),l.insert(e,e.node)}});return new n(i,this.indexSet_)}removeFromIndexes(e,t){let i=sl(this.indexes_,s=>{if(s===To)return s;{let r=t.get(e.name);return r?s.remove(new ht(e.name,r)):s}});return new n(i,this.indexSet_)}};var ul,Ke=class n{static get EMPTY_NODE(){return ul||(ul=new n(new fi(vm),null,No.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&ux(this.priorityNode_),this.children_.isEmpty()&&ce(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ul}updatePriority(e){return this.children_.isEmpty()?this:new n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{let t=this.children_.get(e);return t===null?ul:t}}getChild(e){let t=ot(e);return t===null?this:this.getImmediateChild(t).getChild(Lt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ce(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{let i=new ht(e,t),s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));let o=s.isEmpty()?ul:this.priorityNode_;return new n(s,o,r)}}updateChild(e,t){let i=ot(e);if(i===null)return t;{ce(ot(e)!==".priority"||Xs(e)===1,".priority must be the last token in a path");let s=this.getImmediateChild(i).updateChild(Lt(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},i=0,s=0,r=!0;if(this.forEachChild($t,(o,a)=>{t[o]=a.val(e),i++,r&&n.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){let o=[];for(let a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hx(this.getPriority().val())+":"),this.forEachChild($t,(t,i)=>{let s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Wy(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){let s=this.resolveIndex_(i);if(s){let r=s.getPredecessorKey(new ht(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){let t=this.resolveIndex_(e);if(t){let i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){let t=this.getFirstChildName(e);return t?new ht(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(t){let i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){let t=this.getLastChildName(e);return t?new ht(t,this.children_.get(t)):null}forEachChild(e,t){let i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{let s=this.children_.getIteratorFrom(e.name,ht.Wrap),r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{let s=this.children_.getReverseIteratorFrom(e.name,ht.Wrap),r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cl?-1:0}withIndex(e){if(e===Ro||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ro||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{let t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){let i=this.getIterator($t),s=t.getIterator($t),r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ro?null:this.indexMap_.get(e.toString())}};Ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var Up=class extends Ke{constructor(){super(new fi(vm),Ke.EMPTY_NODE,No.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ke.EMPTY_NODE}isEmpty(){return!1}},Cl=new Up;Object.defineProperties(ht,{MIN:{value:new ht(Io,Ke.EMPTY_NODE)},MAX:{value:new ht(Ir,Cl)}});Su.__EMPTY_NODE=Ke.EMPTY_NODE;xs.__childrenNodeConstructor=Ke;aC(Cl);cC(Cl);var uC=!0;function Qt(n,e=null){if(n===null)return Ke.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ce(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){let t=n;return new xs(t,Qt(e))}if(!(n instanceof Array)&&uC){let t=[],i=!1;if(mn(n,(o,a)=>{if(o.substring(0,1)!=="."){let l=Qt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new ht(o,l)))}}),t.length===0)return Ke.EMPTY_NODE;let r=Mu(t,oC,o=>o.name,vm);if(i){let o=Mu(t,$t.getCompare());return new Ke(r,Qt(e),new No({".priority":o},{".priority":$t}))}else return new Ke(r,Qt(e),No.Default)}else{let t=Ke.EMPTY_NODE;return mn(n,(i,s)=>{if(Ei(n,i)&&i.substring(0,1)!=="."){let r=Qt(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(Qt(e))}}lC(Qt);var Bp=class extends Po{constructor(e){super(),this.indexPath_=e,ce(!ct(e)&&ot(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Lr(e.name,t.name):r}makePost(e,t){let i=Qt(e),s=Ke.EMPTY_NODE.updateChild(this.indexPath_,i);return new ht(t,s)}maxPost(){let e=Ke.EMPTY_NODE.updateChild(this.indexPath_,Cl);return new ht(Ir,e)}toString(){return _l(this.indexPath_,0).join("/")}};var kp=class extends Po{compare(e,t){let i=e.node.compareTo(t.node);return i===0?Lr(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ht.MIN}maxPost(){return ht.MAX}makePost(e,t){let i=Qt(e);return new ht(t,i)}toString(){return".value"}},dC=new kp;function px(n){return{type:"value",snapshotNode:n}}function Lo(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function yl(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function xl(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function fC(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}var vl=class{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){ce(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(yl(t,a)):ce(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Lo(t,i)):o.trackChildChange(xl(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild($t,(s,r)=>{t.hasChild(s)||i.trackChildChange(yl(s,r))}),t.isLeafNode()||t.forEachChild($t,(s,r)=>{if(e.hasChild(s)){let o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(xl(s,r,o))}else i.trackChildChange(Lo(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ke.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}};var bu=class n{constructor(e){this.indexedFilter_=new vl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=n.getStartPost_(e),this.endPost_=n.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new ht(t,i))||(i=Ke.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=Ke.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Ke.EMPTY_NODE);let r=this;return t.forEachChild($t,(o,a)=>{r.matches(new ht(o,a))||(s=s.updateImmediateChild(o,Ke.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}};var zp=class{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{let i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{let i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new bu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new ht(t,i))||(i=Ke.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=Ke.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Ke.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){let a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Ke.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){let a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Ke.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){let u=this.index_.getCompare();o=(f,d)=>u(d,f)}else o=this.index_.getCompare();let a=e;ce(a.numChildren()===this.limit_,"");let l=new ht(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){let u=a.getImmediateChild(t),f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);let d=f==null?1:o(f,l);if(h&&!i.isEmpty()&&d>=0)return r?.trackChildChange(xl(t,i,u)),a.updateImmediateChild(t,i);{r?.trackChildChange(yl(t,u));let y=a.updateImmediateChild(t,Ke.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r?.trackChildChange(Lo(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(yl(c.name,c.node)),r.trackChildChange(Lo(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,Ke.EMPTY_NODE)):e}};var Hp=class n{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$t}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ce(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ce(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Io}hasEnd(){return this.endSet_}getIndexEndValue(){return ce(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ce(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ce(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$t}copy(){let e=new n;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}};function pC(n){return n.loadsAllData()?new vl(n.getIndex()):n.hasLimit()?new zp(n):new bu(n)}function wy(n){let e={};if(n.isDefault())return e;let t;if(n.index_===$t?t="$priority":n.index_===dC?t="$value":n.index_===Ro?t="$key":(ce(n.index_ instanceof Bp,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=rn(t),n.startSet_){let i=n.startAfterSet_?"startAfter":"startAt";e[i]=rn(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+rn(n.indexStartName_))}if(n.endSet_){let i=n.endBeforeSet_?"endBefore":"endAt";e[i]=rn(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+rn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ty(n){let e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==$t&&(e.i=n.index_.toString()),e}var Gp=class n extends yu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ce(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Al("p:rest:"),this.listens_={}}listen(e,t,i,s){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let o=n.getListenId_(e,i),a={};this.listens_[o]=a;let l=wy(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),br(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,t){let i=n.getListenId_(e,t);delete this.listens_[i]}get(e){let t=wy(e._queryParams),i=e._path.toString(),s=new Zn;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);let o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+G_(t);this.log_("Sending REST request for "+o);let a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=bo(a.responseText)}catch{Hn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Hn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}};var Vp=class{constructor(){this.rootNode_=Ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}};function Eu(){return{value:null,children:new Map}}function ko(n,e,t){if(ct(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{let i=ot(e);n.children.has(i)||n.children.set(i,Eu());let s=n.children.get(i);e=Lt(e),ko(s,e,t)}}function Wp(n,e){if(ct(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{let t=n.value;return n.value=null,t.forEachChild($t,(i,s)=>{ko(n,new Tt(i),s)}),Wp(n,e)}}else if(n.children.size>0){let t=ot(e);return e=Lt(e),n.children.has(t)&&Wp(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Xp(n,e,t){n.value!==null?t(e,n.value):mC(n,(i,s)=>{let r=new Tt(e.toString()+"/"+i);Xp(s,r,t)})}function mC(n,e){n.children.forEach((t,i)=>{e(i,t)})}var qp=class{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t={...e};return this.last_&&mn(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}};var Ay=10*1e3,gC=30*1e3,_C=300*1e3,Yp=class{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new qp(e);let i=Ay+(gC-Ay)*Math.random();fl(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){let e=this.statsListener_.get(),t={},i=!1;mn(e,(s,r)=>{r>0&&Ei(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),fl(this.reportStats_.bind(this),Math.floor(Math.random()*2*_C))}};var wi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wi||(wi={}));function Sm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Mm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bm(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}var $p=class n{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=wi.ACK_USER_WRITE,this.source=Sm()}operationForChild(e){if(ct(this.path)){if(this.affectedTree.value!=null)return ce(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new Tt(e));return new n(vt(),t,this.revert)}}else return ce(ot(this.path)===e,"operationForChild called for unrelated child."),new n(Lt(this.path),this.affectedTree,this.revert)}};var wu=class n{constructor(e,t){this.source=e,this.path=t,this.type=wi.LISTEN_COMPLETE}operationForChild(e){return ct(this.path)?new n(this.source,vt()):new n(this.source,Lt(this.path))}};var Do=class n{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=wi.OVERWRITE}operationForChild(e){return ct(this.path)?new n(this.source,vt(),this.snap.getImmediateChild(e)):new n(this.source,Lt(this.path),this.snap)}};var Sl=class n{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=wi.MERGE}operationForChild(e){if(ct(this.path)){let t=this.children.subtree(new Tt(e));return t.isEmpty()?null:t.value?new Do(this.source,vt(),t.value):new n(this.source,vt(),t)}else return ce(ot(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new n(this.source,Lt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}};var Wi=class{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ct(e))return this.isFullyInitialized()&&!this.filtered_;let t=ot(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}};var Jp=class{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}};function yC(n,e,t,i){let s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(fC(o.childName,o.snapshotNode))}),dl(n,s,"child_removed",e,i,t),dl(n,s,"child_added",e,i,t),dl(n,s,"child_moved",r,i,t),dl(n,s,"child_changed",e,i,t),dl(n,s,"value",e,i,t),s}function dl(n,e,t,i,s,r){let o=i.filter(a=>a.type===t);o.sort((a,l)=>vC(n,a,l)),o.forEach(a=>{let l=xC(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function xC(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function vC(n,e,t){if(e.childName==null||t.childName==null)throw Mr("Should only compare child_ events.");let i=new ht(e.childName,e.snapshotNode),s=new ht(t.childName,t.snapshotNode);return n.index_.compare(i,s)}function Hu(n,e){return{eventCache:n,serverCache:e}}function pl(n,e,t,i){return Hu(new Wi(e,t,i),n.serverCache)}function mx(n,e,t,i){return Hu(n.eventCache,new Wi(e,t,i))}function Tu(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Nr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}var gp,SC=()=>(gp||(gp=new fi(MA)),gp),Gn=class n{static fromObject(e){let t=new n(null);return mn(e,(i,s)=>{t=t.set(new Tt(i),s)}),t}constructor(e,t=SC()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:vt(),value:this.value};if(ct(e))return null;{let i=ot(e),s=this.children.get(i);if(s!==null){let r=s.findRootMostMatchingPathAndValue(Lt(e),t);return r!=null?{path:Yt(new Tt(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ct(e))return this;{let t=ot(e),i=this.children.get(t);return i!==null?i.subtree(Lt(e)):new n(null)}}set(e,t){if(ct(e))return new n(t,this.children);{let i=ot(e),r=(this.children.get(i)||new n(null)).set(Lt(e),t),o=this.children.insert(i,r);return new n(this.value,o)}}remove(e){if(ct(e))return this.children.isEmpty()?new n(null):new n(null,this.children);{let t=ot(e),i=this.children.get(t);if(i){let s=i.remove(Lt(e)),r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new n(null):new n(this.value,r)}else return this}}get(e){if(ct(e))return this.value;{let t=ot(e),i=this.children.get(t);return i?i.get(Lt(e)):null}}setTree(e,t){if(ct(e))return t;{let i=ot(e),r=(this.children.get(i)||new n(null)).setTree(Lt(e),t),o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new n(this.value,o)}}fold(e){return this.fold_(vt(),e)}fold_(e,t){let i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Yt(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,vt(),t)}findOnPath_(e,t,i){let s=this.value?i(t,this.value):!1;if(s)return s;if(ct(e))return null;{let r=ot(e),o=this.children.get(r);return o?o.findOnPath_(Lt(e),Yt(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,vt(),t)}foreachOnPath_(e,t,i){if(ct(e))return this;{this.value&&i(t,this.value);let s=ot(e),r=this.children.get(s);return r?r.foreachOnPath_(Lt(e),Yt(t,s),i):new n(null)}}foreach(e){this.foreach_(vt(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Yt(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}};var Ti=class n{constructor(e){this.writeTree_=e}static empty(){return new n(new Gn(null))}};function ml(n,e,t){if(ct(e))return new Ti(new Gn(t));{let i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){let s=i.path,r=i.value,o=zn(s,e);return r=r.updateChild(o,t),new Ti(n.writeTree_.set(s,r))}else{let s=new Gn(t),r=n.writeTree_.setTree(e,s);return new Ti(r)}}}function Kp(n,e,t){let i=n;return mn(t,(s,r)=>{i=ml(i,Yt(e,s),r)}),i}function Cy(n,e){if(ct(e))return Ti.empty();{let t=n.writeTree_.setTree(e,new Gn(null));return new Ti(t)}}function Zp(n,e){return Dr(n,e)!=null}function Dr(n,e){let t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(zn(t.path,e)):null}function Ry(n){let e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild($t,(i,s)=>{e.push(new ht(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ht(i,s.value))}),e}function Vs(n,e){if(ct(e))return n;{let t=Dr(n,e);return t!=null?new Ti(new Gn(t)):new Ti(n.writeTree_.subtree(e))}}function jp(n){return n.writeTree_.isEmpty()}function Oo(n,e){return gx(vt(),n.writeTree_,e)}function gx(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(ce(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=gx(Yt(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Yt(n,".priority"),i)),t}}function Gu(n,e){return vx(e,n)}function MC(n,e,t,i,s){ce(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=ml(n.visibleWrites,e,t)),n.lastWriteId=i}function bC(n,e,t,i){ce(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Kp(n.visibleWrites,e,t),n.lastWriteId=i}function EC(n,e){for(let t=0;t<n.allWrites.length;t++){let i=n.allWrites[t];if(i.writeId===e)return i}return null}function wC(n,e){let t=n.allWrites.findIndex(a=>a.writeId===e);ce(t>=0,"removeWrite called with nonexistent writeId.");let i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){let a=n.allWrites[o];a.visible&&(o>=t&&TC(a,i.path)?s=!1:di(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return AC(n),!0;if(i.snap)n.visibleWrites=Cy(n.visibleWrites,i.path);else{let a=i.children;mn(a,l=>{n.visibleWrites=Cy(n.visibleWrites,Yt(i.path,l))})}return!0}else return!1}function TC(n,e){if(n.snap)return di(n.path,e);for(let t in n.children)if(n.children.hasOwnProperty(t)&&di(Yt(n.path,t),e))return!0;return!1}function AC(n){n.visibleWrites=_x(n.allWrites,CC,vt()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function CC(n){return n.visible}function _x(n,e,t){let i=Ti.empty();for(let s=0;s<n.length;++s){let r=n[s];if(e(r)){let o=r.path,a;if(r.snap)di(t,o)?(a=zn(t,o),i=ml(i,a,r.snap)):di(o,t)&&(a=zn(o,t),i=ml(i,vt(),r.snap.getChild(a)));else if(r.children){if(di(t,o))a=zn(t,o),i=Kp(i,a,r.children);else if(di(o,t))if(a=zn(o,t),ct(a))i=Kp(i,vt(),r.children);else{let l=br(r.children,ot(a));if(l){let c=l.getChild(Lt(a));i=ml(i,vt(),c)}}}else throw Mr("WriteRecord should have .snap or .children")}}return i}function yx(n,e,t,i,s){if(!i&&!s){let r=Dr(n.visibleWrites,e);if(r!=null)return r;{let o=Vs(n.visibleWrites,e);if(jp(o))return t;if(t==null&&!Zp(o,vt()))return null;{let a=t||Ke.EMPTY_NODE;return Oo(o,a)}}}else{let r=Vs(n.visibleWrites,e);if(!s&&jp(r))return t;if(!s&&t==null&&!Zp(r,vt()))return null;{let o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(di(c.path,e)||di(e,c.path))},a=_x(n.allWrites,o,e),l=t||Ke.EMPTY_NODE;return Oo(a,l)}}}function RC(n,e,t){let i=Ke.EMPTY_NODE,s=Dr(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild($t,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){let r=Vs(n.visibleWrites,e);return t.forEachChild($t,(o,a)=>{let l=Oo(Vs(r,new Tt(o)),a);i=i.updateImmediateChild(o,l)}),Ry(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{let r=Vs(n.visibleWrites,e);return Ry(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function IC(n,e,t,i,s){ce(i||s,"Either existingEventSnap or existingServerSnap must exist");let r=Yt(e,t);if(Zp(n.visibleWrites,r))return null;{let o=Vs(n.visibleWrites,r);return jp(o)?s.getChild(t):Oo(o,s.getChild(t))}}function PC(n,e,t,i){let s=Yt(e,t),r=Dr(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){let o=Vs(n.visibleWrites,s);return Oo(o,i.getNode().getImmediateChild(t))}else return null}function NC(n,e){return Dr(n.visibleWrites,e)}function LC(n,e,t,i,s,r,o){let a,l=Vs(n.visibleWrites,e),c=Dr(l,vt());if(c!=null)a=c;else if(t!=null)a=Oo(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){let h=[],u=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),d=f.getNext();for(;d&&h.length<s;)u(d,i)!==0&&h.push(d),d=f.getNext();return h}else return[]}function DC(){return{visibleWrites:Ti.empty(),allWrites:[],lastWriteId:-1}}function Au(n,e,t,i){return yx(n.writeTree,n.treePath,e,t,i)}function Em(n,e){return RC(n.writeTree,n.treePath,e)}function Iy(n,e,t,i){return IC(n.writeTree,n.treePath,e,t,i)}function Cu(n,e){return NC(n.writeTree,Yt(n.treePath,e))}function OC(n,e,t,i,s,r){return LC(n.writeTree,n.treePath,e,t,i,s,r)}function wm(n,e,t){return PC(n.writeTree,n.treePath,e,t)}function xx(n,e){return vx(Yt(n.treePath,e),n.writeTree)}function vx(n,e){return{treePath:n,writeTree:e}}var Qp=class{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,i=e.childName;ce(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ce(i!==".priority","Only non-priority child changes can be tracked.");let s=this.changeMap.get(i);if(s){let r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,xl(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,yl(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Lo(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,xl(i,e.snapshotNode,s.oldSnap));else throw Mr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}};var em=class{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}},Sx=new em,Ml=class{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let i=this.optCompleteServerCache_!=null?new Wi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wm(this.writes_,e,i)}}getChildAfterChild(e,t,i){let s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),r=OC(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}};function FC(n){return{filter:n}}function UC(n,e){ce(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ce(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function BC(n,e,t,i,s){let r=new Qp,o,a;if(t.type===wi.OVERWRITE){let c=t;c.source.fromUser?o=tm(n,e,c.path,c.snap,i,s,r):(ce(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ct(c.path),o=Ru(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===wi.MERGE){let c=t;c.source.fromUser?o=zC(n,e,c.path,c.children,i,s,r):(ce(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=nm(n,e,c.path,c.children,i,s,a,r))}else if(t.type===wi.ACK_USER_WRITE){let c=t;c.revert?o=VC(n,e,c.path,i,s,r):o=HC(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===wi.LISTEN_COMPLETE)o=GC(n,e,t.path,i,r);else throw Mr("Unknown operation type: "+t.type);let l=r.getChanges();return kC(e,o,l),{viewCache:o,changes:l}}function kC(n,e,t){let i=e.eventCache;if(i.isFullyInitialized()){let s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Tu(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(px(Tu(e)))}}function Mx(n,e,t,i,s,r){let o=e.eventCache;if(Cu(i,t)!=null)return e;{let a,l;if(ct(t))if(ce(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){let c=Nr(e),h=c instanceof Ke?c:Ke.EMPTY_NODE,u=Em(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{let c=Au(i,Nr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{let c=ot(t);if(c===".priority"){ce(Xs(t)===1,"Can't have a priority with additional path components");let h=o.getNode();l=e.serverCache.getNode();let u=Iy(i,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{let h=Lt(t),u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();let f=Iy(i,t,o.getNode(),l);f!=null?u=o.getNode().getImmediateChild(c).updateChild(h,f):u=o.getNode().getImmediateChild(c)}else u=wm(i,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return pl(e,a,o.isFullyInitialized()||ct(t),n.filter.filtersNodes())}}function Ru(n,e,t,i,s,r,o,a){let l=e.serverCache,c,h=o?n.filter:n.filter.getIndexedFilter();if(ct(t))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){let d=l.getNode().updateChild(t,i);c=h.updateFullNode(l.getNode(),d,null)}else{let d=ot(t);if(!l.isCompleteForPath(t)&&Xs(t)>1)return e;let p=Lt(t),m=l.getNode().getImmediateChild(d).updateChild(p,i);d===".priority"?c=h.updatePriority(l.getNode(),m):c=h.updateChild(l.getNode(),d,m,p,Sx,null)}let u=mx(e,c,l.isFullyInitialized()||ct(t),h.filtersNodes()),f=new Ml(s,u,r);return Mx(n,u,t,s,f,a)}function tm(n,e,t,i,s,r,o){let a=e.eventCache,l,c,h=new Ml(s,e,r);if(ct(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=pl(e,c,!0,n.filter.filtersNodes());else{let u=ot(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=pl(e,c,a.isFullyInitialized(),a.isFiltered());else{let f=Lt(t),d=a.getNode().getImmediateChild(u),p;if(ct(f))p=i;else{let y=h.getCompleteChild(u);y!=null?ym(f)===".priority"&&y.getChild(lx(f)).isEmpty()?p=y:p=y.updateChild(f,i):p=Ke.EMPTY_NODE}if(d.equals(p))l=e;else{let y=n.filter.updateChild(a.getNode(),u,p,f,h,o);l=pl(e,y,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Py(n,e){return n.eventCache.isCompleteForChild(e)}function zC(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{let h=Yt(t,l);Py(e,ot(h))&&(a=tm(n,a,h,c,s,r,o))}),i.foreach((l,c)=>{let h=Yt(t,l);Py(e,ot(h))||(a=tm(n,a,h,c,s,r,o))}),a}function Ny(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function nm(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ct(t)?c=i:c=new Gn(null).setTree(t,i);let h=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(h.hasChild(u)){let d=e.serverCache.getNode().getImmediateChild(u),p=Ny(n,d,f);l=Ru(n,l,new Tt(u),p,s,r,o,a)}}),c.children.inorderTraversal((u,f)=>{let d=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!h.hasChild(u)&&!d){let p=e.serverCache.getNode().getImmediateChild(u),y=Ny(n,p,f);l=Ru(n,l,new Tt(u),y,s,r,o,a)}}),l}function HC(n,e,t,i,s,r,o){if(Cu(s,t)!=null)return e;let a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(ct(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Ru(n,e,t,l.getNode().getChild(t),s,r,a,o);if(ct(t)){let c=new Gn(null);return l.getNode().forEachChild(Ro,(h,u)=>{c=c.set(new Tt(h),u)}),nm(n,e,t,c,s,r,a,o)}else return e}else{let c=new Gn(null);return i.foreach((h,u)=>{let f=Yt(t,h);l.isCompleteForPath(f)&&(c=c.set(h,l.getNode().getChild(f)))}),nm(n,e,t,c,s,r,a,o)}}function GC(n,e,t,i,s){let r=e.serverCache,o=mx(e,r.getNode(),r.isFullyInitialized()||ct(t),r.isFiltered());return Mx(n,o,t,i,Sx,s)}function VC(n,e,t,i,s,r){let o;if(Cu(i,t)!=null)return e;{let a=new Ml(i,e,s),l=e.eventCache.getNode(),c;if(ct(t)||ot(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Au(i,Nr(e));else{let u=e.serverCache.getNode();ce(u instanceof Ke,"serverChildren would be complete if leaf node"),h=Em(i,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{let h=ot(t),u=wm(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,Lt(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,Ke.EMPTY_NODE,Lt(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Au(i,Nr(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Cu(i,vt())!=null,pl(e,c,o,n.filter.filtersNodes())}}var im=class{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let i=this.query_._queryParams,s=new vl(i.getIndex()),r=pC(i);this.processor_=FC(r);let o=t.serverCache,a=t.eventCache,l=s.updateFullNode(Ke.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Ke.EMPTY_NODE,a.getNode(),null),h=new Wi(l,o.isFullyInitialized(),s.filtersNodes()),u=new Wi(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Hu(u,h),this.eventGenerator_=new Jp(this.query_)}get query(){return this.query_}};function WC(n){return n.viewCache_.serverCache.getNode()}function XC(n){return Tu(n.viewCache_)}function qC(n,e){let t=Nr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ct(e)&&!t.getImmediateChild(ot(e)).isEmpty())?t.getChild(e):null}function Ly(n){return n.eventRegistrations_.length===0}function YC(n,e){n.eventRegistrations_.push(e)}function Dy(n,e,t){let i=[];if(t){ce(e==null,"A cancel should cancel all event registrations.");let s=n.query._path;n.eventRegistrations_.forEach(r=>{let o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){let o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Oy(n,e,t,i){e.type===wi.MERGE&&e.source.queryId!==null&&(ce(Nr(n.viewCache_),"We should always have a full cache before handling merges"),ce(Tu(n.viewCache_),"Missing event cache, even though we have a server cache"));let s=n.viewCache_,r=BC(n.processor_,s,e,t,i);return UC(n.processor_,r.viewCache),ce(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,bx(n,r.changes,r.viewCache.eventCache.getNode(),null)}function $C(n,e){let t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild($t,(r,o)=>{i.push(Lo(r,o))}),t.isFullyInitialized()&&i.push(px(t.getNode())),bx(n,i,t.getNode(),e)}function bx(n,e,t,i){let s=i?[i]:n.eventRegistrations_;return yC(n.eventGenerator_,e,t,s)}var Iu,Pu=class{constructor(){this.views=new Map}};function JC(n){ce(!Iu,"__referenceConstructor has already been defined"),Iu=n}function KC(){return ce(Iu,"Reference.ts has not been loaded"),Iu}function ZC(n){return n.views.size===0}function Tm(n,e,t,i){let s=e.source.queryId;if(s!==null){let r=n.views.get(s);return ce(r!=null,"SyncTree gave us an op for an invalid query."),Oy(r,e,t,i)}else{let r=[];for(let o of n.views.values())r=r.concat(Oy(o,e,t,i));return r}}function Ex(n,e,t,i,s){let r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Au(t,s?i:null),l=!1;a?l=!0:i instanceof Ke?(a=Em(t,i),l=!1):(a=Ke.EMPTY_NODE,l=!1);let c=Hu(new Wi(a,l,!1),new Wi(i,s,!1));return new im(e,c)}return o}function jC(n,e,t,i,s,r){let o=Ex(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),YC(o,t),$C(o,t)}function QC(n,e,t,i){let s=e._queryIdentifier,r=[],o=[],a=qs(n);if(s==="default")for(let[l,c]of n.views.entries())o=o.concat(Dy(c,t,i)),Ly(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{let l=n.views.get(s);l&&(o=o.concat(Dy(l,t,i)),Ly(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!qs(n)&&r.push(new(KC())(e._repo,e._path)),{removed:r,events:o}}function wx(n){let e=[];for(let t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ws(n,e){let t=null;for(let i of n.views.values())t=t||qC(i,e);return t}function Tx(n,e){if(e._queryParams.loadsAllData())return Vu(n);{let i=e._queryIdentifier;return n.views.get(i)}}function Ax(n,e){return Tx(n,e)!=null}function qs(n){return Vu(n)!=null}function Vu(n){for(let e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}var Nu;function eR(n){ce(!Nu,"__referenceConstructor has already been defined"),Nu=n}function tR(){return ce(Nu,"Reference.ts has not been loaded"),Nu}var nR=1,Lu=class{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Gn(null),this.pendingWriteTree_=DC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function Cx(n,e,t,i,s){return MC(n.pendingWriteTree_,e,t,i,s),s?zo(n,new Do(Sm(),e,t)):[]}function iR(n,e,t,i){bC(n.pendingWriteTree_,e,t,i);let s=Gn.fromObject(t);return zo(n,new Sl(Sm(),e,s))}function Hs(n,e,t=!1){let i=EC(n.pendingWriteTree_,e);if(wC(n.pendingWriteTree_,e)){let r=new Gn(null);return i.snap!=null?r=r.set(vt(),!0):mn(i.children,o=>{r=r.set(new Tt(o),!0)}),zo(n,new $p(i.path,r,t))}else return[]}function Rl(n,e,t){return zo(n,new Do(Mm(),e,t))}function sR(n,e,t){let i=Gn.fromObject(t);return zo(n,new Sl(Mm(),e,i))}function rR(n,e){return zo(n,new wu(Mm(),e))}function oR(n,e,t){let i=Cm(n,t);if(i){let s=Rm(i),r=s.path,o=s.queryId,a=zn(r,e),l=new wu(bm(o),a);return Im(n,r,l)}else return[]}function Du(n,e,t,i,s=!1){let r=e._path,o=n.syncPointTree_.get(r),a=[];if(o&&(e._queryIdentifier==="default"||Ax(o,e))){let l=QC(o,e,t,i);ZC(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));let c=l.removed;if(a=l.events,!s){let h=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(f,d)=>qs(d));if(h&&!u){let f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){let d=cR(f);for(let p=0;p<d.length;++p){let y=d[p],m=y.query,g=Nx(n,y);n.listenProvider_.startListening(gl(m),bl(n,m),g.hashFn,g.onComplete)}}}!u&&c.length>0&&!i&&(h?n.listenProvider_.stopListening(gl(e),null):c.forEach(f=>{let d=n.queryToTagMap.get(Wu(f));n.listenProvider_.stopListening(gl(f),d)}))}hR(n,c)}return a}function Rx(n,e,t,i){let s=Cm(n,i);if(s!=null){let r=Rm(s),o=r.path,a=r.queryId,l=zn(o,e),c=new Do(bm(a),l,t);return Im(n,o,c)}else return[]}function aR(n,e,t,i){let s=Cm(n,i);if(s){let r=Rm(s),o=r.path,a=r.queryId,l=zn(o,e),c=Gn.fromObject(t),h=new Sl(bm(a),l,c);return Im(n,o,h)}else return[]}function sm(n,e,t,i=!1){let s=e._path,r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(f,d)=>{let p=zn(f,s);r=r||Ws(d,p),o=o||qs(d)});let a=n.syncPointTree_.get(s);a?(o=o||qs(a),r=r||Ws(a,vt())):(a=new Pu,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=Ke.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((d,p)=>{let y=Ws(p,vt());y&&(r=r.updateImmediateChild(d,y))}));let c=Ax(a,e);if(!c&&!e._queryParams.loadsAllData()){let f=Wu(e);ce(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");let d=uR();n.queryToTagMap.set(f,d),n.tagToQueryMap.set(d,f)}let h=Gu(n.pendingWriteTree_,s),u=jC(a,e,t,h,r,l);if(!c&&!o&&!i){let f=Tx(a,e);u=u.concat(dR(n,e,f))}return u}function Am(n,e,t){let s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{let l=zn(o,e),c=Ws(a,l);if(c)return c});return yx(s,e,r,t,!0)}function lR(n,e){let t=e._path,i=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{let u=zn(c,t);i=i||Ws(h,u)});let s=n.syncPointTree_.get(t);s?i=i||Ws(s,vt()):(s=new Pu,n.syncPointTree_=n.syncPointTree_.set(t,s));let r=i!=null,o=r?new Wi(i,!0,!1):null,a=Gu(n.pendingWriteTree_,e._path),l=Ex(s,e,a,r?o.getNode():Ke.EMPTY_NODE,r);return XC(l)}function zo(n,e){return Ix(e,n.syncPointTree_,null,Gu(n.pendingWriteTree_,vt()))}function Ix(n,e,t,i){if(ct(n.path))return Px(n,e,t,i);{let s=e.get(vt());t==null&&s!=null&&(t=Ws(s,vt()));let r=[],o=ot(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){let c=t?t.getImmediateChild(o):null,h=xx(i,o);r=r.concat(Ix(a,l,c,h))}return s&&(r=r.concat(Tm(s,n,i,t))),r}}function Px(n,e,t,i){let s=e.get(vt());t==null&&s!=null&&(t=Ws(s,vt()));let r=[];return e.children.inorderTraversal((o,a)=>{let l=t?t.getImmediateChild(o):null,c=xx(i,o),h=n.operationForChild(o);h&&(r=r.concat(Px(h,a,l,c)))}),s&&(r=r.concat(Tm(s,n,i,t))),r}function Nx(n,e){let t=e.query,i=bl(n,t);return{hashFn:()=>(WC(e)||Ke.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?oR(n,t._path,i):rR(n,t._path);{let r=wA(s,t);return Du(n,t,null,r)}}}}function bl(n,e){let t=Wu(e);return n.queryToTagMap.get(t)}function Wu(n){return n._path.toString()+"$"+n._queryIdentifier}function Cm(n,e){return n.tagToQueryMap.get(e)}function Rm(n){let e=n.indexOf("$");return ce(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Tt(n.substr(0,e))}}function Im(n,e,t){let i=n.syncPointTree_.get(e);ce(i,"Missing sync point for query tag that we're tracking");let s=Gu(n.pendingWriteTree_,e);return Tm(i,t,s,null)}function cR(n){return n.fold((e,t,i)=>{if(t&&qs(t))return[Vu(t)];{let s=[];return t&&(s=wx(t)),mn(i,(r,o)=>{s=s.concat(o)}),s}})}function gl(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(tR())(n._repo,n._path):n}function hR(n,e){for(let t=0;t<e.length;++t){let i=e[t];if(!i._queryParams.loadsAllData()){let s=Wu(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function uR(){return nR++}function dR(n,e,t){let i=e._path,s=bl(n,e),r=Nx(n,t),o=n.listenProvider_.startListening(gl(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)ce(!qs(a.value),"If we're adding a query, it shouldn't be shadowed");else{let l=a.fold((c,h,u)=>{if(!ct(c)&&h&&qs(h))return[Vu(h).query];{let f=[];return h&&(f=f.concat(wx(h).map(d=>d.query))),mn(u,(d,p)=>{f=f.concat(p)}),f}});for(let c=0;c<l.length;++c){let h=l[c];n.listenProvider_.stopListening(gl(h),bl(n,h))}}return o}var rm=class n{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new n(t)}node(){return this.node_}},om=class n{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=Yt(this.path_,e);return new n(this.syncTree_,t)}node(){return Am(this.syncTree_,this.path_)}},fR=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Fy=function(n,e,t){if(!n||typeof n!="object")return n;if(ce(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return pR(n[".sv"],e,t);if(typeof n[".sv"]=="object")return mR(n[".sv"],e);ce(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},pR=function(n,e,t){if(n==="timestamp")return t.timestamp;ce(!1,"Unexpected server value: "+n)},mR=function(n,e,t){n.hasOwnProperty("increment")||ce(!1,"Unexpected server value: "+JSON.stringify(n,null,2));let i=n.increment;typeof i!="number"&&ce(!1,"Unexpected increment value: "+i);let s=e.node();if(ce(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;let o=s.getValue();return typeof o!="number"?i:o+i},Lx=function(n,e,t,i){return Pm(e,new om(t,n),i)},Dx=function(n,e,t){return Pm(n,new rm(e),t)};function Pm(n,e,t){let i=n.getPriority().val(),s=Fy(i,e.getImmediateChild(".priority"),t),r;if(n.isLeafNode()){let o=n,a=Fy(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new xs(a,Qt(s)):n}else{let o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new xs(s))),o.forEachChild($t,(a,l)=>{let c=Pm(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}var El=class{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}};function Nm(n,e){let t=e instanceof Tt?e:new Tt(e),i=n,s=ot(t);for(;s!==null;){let r=br(i.node.children,s)||{children:{},childCount:0};i=new El(s,i,r),t=Lt(t),s=ot(t)}return i}function Ho(n){return n.node.value}function Ox(n,e){n.node.value=e,am(n)}function Fx(n){return n.node.childCount>0}function gR(n){return Ho(n)===void 0&&!Fx(n)}function Xu(n,e){mn(n.node.children,(t,i)=>{e(new El(t,n,i))})}function Ux(n,e,t,i){t&&e(n),Xu(n,s=>{Ux(s,e,!0)})}function _R(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Il(n){return new Tt(n.parent===null?n.name:Il(n.parent)+"/"+n.name)}function am(n){n.parent!==null&&yR(n.parent,n.name,n)}function yR(n,e,t){let i=gR(t),s=Ei(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,am(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,am(n))}var xR=/[\[\].#$\/\u0000-\u001F\u007F]/,vR=/[\[\].#$\u0000-\u001F\u007F]/,_p=10*1024*1024,Lm=function(n){return typeof n=="string"&&n.length!==0&&!xR.test(n)},Bx=function(n){return typeof n=="string"&&n.length!==0&&!vR.test(n)},SR=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Bx(n)},kx=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!zu(n)||n&&typeof n=="object"&&Ei(n,".sv")},Ou=function(n,e,t,i){i&&e===void 0||qu(Er(n,"value"),e,t)},qu=function(n,e,t){let i=t instanceof Tt?new Pp(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Tr(i));if(typeof e=="function")throw new Error(n+"contains a function "+Tr(i)+" with contents = "+e.toString());if(zu(e))throw new Error(n+"contains "+e.toString()+" "+Tr(i));if(typeof e=="string"&&e.length>_p/3&&rl(e)>_p)throw new Error(n+"contains a string greater than "+_p+" utf8 bytes "+Tr(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(mn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Lm(o)))throw new Error(n+" contains an invalid key ("+o+") "+Tr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);eC(i,o),qu(n,a,i),tC(i)}),s&&r)throw new Error(n+' contains ".value" child '+Tr(i)+" in addition to actual children.")}},MR=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];let r=_l(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Lm(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(QA);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&di(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},zx=function(n,e,t,i){let s=Er(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");let r=[];mn(e,(o,a)=>{let l=new Tt(o);if(qu(s,a,Yt(t,l)),ym(l)===".priority"&&!kx(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),MR(s,r)},bR=function(n,e,t){if(zu(e))throw new Error(Er(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!kx(e))throw new Error(Er(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")};var Hx=function(n,e,t,i){if(!(i&&t===void 0)&&!Bx(t))throw new Error(Er(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ER=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Hx(n,e,t,i)},Cr=function(n,e){if(ot(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},wR=function(n,e){let t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!SR(t))throw new Error(Er(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};var lm=class{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function Yu(n,e){let t=null;for(let i=0;i<e.length;i++){let s=e[i],r=s.getPath();t!==null&&!xm(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Gx(n,e,t){Yu(n,t),Vx(n,i=>xm(i,e))}function pi(n,e,t){Yu(n,t),Vx(n,i=>di(i,e)||di(e,i))}function Vx(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){let s=n.eventLists_[i];if(s){let r=s.path;e(r)?(TR(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function TR(n){for(let e=0;e<n.events.length;e++){let t=n.events[e];if(t!==null){n.events[e]=null;let i=t.getEventRunner();Rr&&pn("event: "+t.toString()),Bo(i)}}}var AR="repo_interrupt",CR=25,cm=class{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Eu(),this.transactionQueueTree_=new El,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}};function RR(n,e,t){if(n.stats_=_m(n.repoInfo_),n.forceRestClient_||RA())n.server_=new Gp(n.repoInfo_,(i,s,r,o)=>{Uy(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>By(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rn(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Pr(n.repoInfo_,e,(i,s,r,o)=>{Uy(n,i,s,r,o)},i=>{By(n,i)},i=>{IR(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=PA(n.repoInfo_,()=>new Yp(n.stats_,n.server_)),n.infoData_=new Vp,n.infoSyncTree_=new Lu({startListening:(i,s,r,o)=>{let a=[],l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Rl(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Dm(n,"connected",!1),n.serverSyncTree_=new Lu({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{let c=o(a,l);pi(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Wx(n){let t=n.infoData_.getNode(new Tt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function $u(n){return fR({timestamp:Wx(n)})}function Uy(n,e,t,i,s){n.dataUpdateCount++;let r=new Tt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){let l=sl(t,c=>Qt(c));o=aR(n.serverSyncTree_,r,l,s)}else{let l=Qt(t);o=Rx(n.serverSyncTree_,r,l,s)}else if(i){let l=sl(t,c=>Qt(c));o=sR(n.serverSyncTree_,r,l)}else{let l=Qt(t);o=Rl(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Fo(n,r)),pi(n.eventQueue_,a,o)}function By(n,e){Dm(n,"connected",e),e===!1&&DR(n)}function IR(n,e){mn(e,(t,i)=>{Dm(n,t,i)})}function Dm(n,e,t){let i=new Tt("/.info/"+e),s=Qt(t);n.infoData_.updateSnapshot(i,s);let r=Rl(n.infoSyncTree_,i,s);pi(n.eventQueue_,i,r)}function Om(n){return n.nextWriteId_++}function PR(n,e,t){let i=lR(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{let r=Qt(s).withIndex(e._queryParams.getIndex());sm(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Rl(n.serverSyncTree_,e._path,r);else{let a=bl(n.serverSyncTree_,e);o=Rx(n.serverSyncTree_,e._path,r,a)}return pi(n.eventQueue_,e._path,o),Du(n.serverSyncTree_,e,t,null,!0),r},s=>(Pl(n,"get for query "+rn(e)+" failed: "+s),Promise.reject(new Error(s))))}function NR(n,e,t,i,s){Pl(n,"set",{path:e.toString(),value:t,priority:i});let r=$u(n),o=Qt(t,i),a=Am(n.serverSyncTree_,e),l=Dx(o,a,r),c=Om(n),h=Cx(n.serverSyncTree_,e,l,c,!0);Yu(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(f,d)=>{let p=f==="ok";p||Hn("set at "+e+" failed: "+f);let y=Hs(n.serverSyncTree_,c,!p);pi(n.eventQueue_,e,y),Ys(n,s,f,d)});let u=Um(n,e);Fo(n,u),pi(n.eventQueue_,u,[])}function LR(n,e,t,i){Pl(n,"update",{path:e.toString(),value:t});let s=!0,r=$u(n),o={};if(mn(t,(a,l)=>{s=!1,o[a]=Lx(Yt(e,a),Qt(l),n.serverSyncTree_,r)}),s)pn("update() called with empty data.  Don't do anything."),Ys(n,i,"ok",void 0);else{let a=Om(n),l=iR(n.serverSyncTree_,e,o,a);Yu(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,h)=>{let u=c==="ok";u||Hn("update at "+e+" failed: "+c);let f=Hs(n.serverSyncTree_,a,!u),d=f.length>0?Fo(n,e):e;pi(n.eventQueue_,d,f),Ys(n,i,c,h)}),mn(t,c=>{let h=Um(n,Yt(e,c));Fo(n,h)}),pi(n.eventQueue_,e,[])}}function DR(n){Pl(n,"onDisconnectEvents");let e=$u(n),t=Eu();Xp(n.onDisconnect_,vt(),(s,r)=>{let o=Lx(s,r,n.serverSyncTree_,e);ko(t,s,o)});let i=[];Xp(t,vt(),(s,r)=>{i=i.concat(Rl(n.serverSyncTree_,s,r));let o=Um(n,s);Fo(n,o)}),n.onDisconnect_=Eu(),pi(n.eventQueue_,vt(),i)}function OR(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&Wp(n.onDisconnect_,e),Ys(n,t,i,s)})}function ky(n,e,t,i){let s=Qt(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&ko(n.onDisconnect_,e,s),Ys(n,i,r,o)})}function FR(n,e,t,i,s){let r=Qt(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&ko(n.onDisconnect_,e,r),Ys(n,s,o,a)})}function UR(n,e,t,i){if(cu(t)){pn("onDisconnect().update() called with empty data.  Don't do anything."),Ys(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&mn(t,(o,a)=>{let l=Qt(a);ko(n.onDisconnect_,Yt(e,o),l)}),Ys(n,i,s,r)})}function BR(n,e,t){let i;ot(e._path)===".info"?i=sm(n.infoSyncTree_,e,t):i=sm(n.serverSyncTree_,e,t),Gx(n.eventQueue_,e._path,i)}function zy(n,e,t){let i;ot(e._path)===".info"?i=Du(n.infoSyncTree_,e,t):i=Du(n.serverSyncTree_,e,t),Gx(n.eventQueue_,e._path,i)}function Xx(n){n.persistentConnection_&&n.persistentConnection_.interrupt(AR)}function Pl(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),pn(t,...e)}function Ys(n,e,t,i){e&&Bo(()=>{if(t==="ok")e(null);else{let s=(t||"error").toUpperCase(),r=s;i&&(r+=": "+i);let o=new Error(r);o.code=s,e(o)}})}function qx(n,e,t){return Am(n.serverSyncTree_,e,t)||Ke.EMPTY_NODE}function Fm(n,e=n.transactionQueueTree_){if(e||Ju(n,e),Ho(e)){let t=$x(n,e);ce(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&kR(n,Il(e),t)}else Fx(e)&&Xu(e,t=>{Fm(n,t)})}function kR(n,e,t){let i=t.map(c=>c.currentWriteId),s=qx(n,e,i),r=s,o=s.hash();for(let c=0;c<t.length;c++){let h=t[c];ce(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;let u=zn(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}let a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Pl(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){let u=[];for(let f=0;f<t.length;f++)t[f].status=2,h=h.concat(Hs(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&u.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Ju(n,Nm(n.transactionQueueTree_,e)),Fm(n,n.transactionQueueTree_),pi(n.eventQueue_,e,h);for(let f=0;f<u.length;f++)Bo(u[f])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{Hn("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}Fo(n,e)}},o)}function Fo(n,e){let t=Yx(n,e),i=Il(t),s=$x(n,t);return zR(n,s,i),i}function zR(n,e,t){if(e.length===0)return;let i=[],s=[],o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){let l=e[a],c=zn(t,l.path),h=!1,u;if(ce(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(Hs(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=CR)h=!0,u="maxretry",s=s.concat(Hs(n.serverSyncTree_,l.currentWriteId,!0));else{let f=qx(n,l.path,o);l.currentInputSnapshot=f;let d=e[a].update(f.val());if(d!==void 0){qu("transaction failed: Data returned ",d,l.path);let p=Qt(d);typeof d=="object"&&d!=null&&Ei(d,".priority")||(p=p.updatePriority(f.getPriority()));let m=l.currentWriteId,g=$u(n),x=Dx(p,f,g);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=x,l.currentWriteId=Om(n),o.splice(o.indexOf(m),1),s=s.concat(Cx(n.serverSyncTree_,l.path,x,l.currentWriteId,l.applyLocally)),s=s.concat(Hs(n.serverSyncTree_,m,!0))}else h=!0,u="nodata",s=s.concat(Hs(n.serverSyncTree_,l.currentWriteId,!0))}pi(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,(function(f){setTimeout(f,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Ju(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Bo(i[a]);Fm(n,n.transactionQueueTree_)}function Yx(n,e){let t,i=n.transactionQueueTree_;for(t=ot(e);t!==null&&Ho(i)===void 0;)i=Nm(i,t),e=Lt(e),t=ot(e);return i}function $x(n,e){let t=[];return Jx(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Jx(n,e,t){let i=Ho(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Xu(e,s=>{Jx(n,s,t)})}function Ju(n,e){let t=Ho(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Ox(e,t.length>0?t:void 0)}Xu(e,i=>{Ju(n,i)})}function Um(n,e){let t=Il(Yx(n,e)),i=Nm(n.transactionQueueTree_,e);return _R(i,s=>{yp(n,s)}),yp(n,i),Ux(i,s=>{yp(n,s)}),t}function yp(n,e){let t=Ho(e);if(t){let i=[],s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(ce(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(ce(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Hs(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ox(e,void 0):t.length=r+1,pi(n.eventQueue_,Il(e),s);for(let o=0;o<i.length;o++)Bo(i[o])}}function HR(n){let e="",t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function GR(n){let e={};n.charAt(0)==="?"&&(n=n.substring(1));for(let t of n.split("&")){if(t.length===0)continue;let i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Hn(`Invalid query segment '${t}' in query '${n}'`)}return e}var Hy=function(n,e){let t=VR(n),i=t.namespace;t.domain==="firebase.com"&&ys(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&ys("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||vA();let s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new mu(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new Tt(t.pathString)}},VR=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(s=HR(n.substring(h,u)));let f=GR(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;let d=e.slice(0,c);if(d.toLowerCase()==="localhost")t="localhost";else if(d.split(".").length<=2)t=d;else{let p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};var Gy="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",WR=(function(){let n=0,e=[];return function(t){let i=t===n;n=t;let s,r=new Array(8);for(s=7;s>=0;s--)r[s]=Gy.charAt(t%64),t=Math.floor(t/64);ce(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Gy.charAt(e[s]);return ce(o.length===20,"nextPushId: Length should be 20."),o}})();var Fu=class{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){let e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+rn(this.snapshot.exportVal())}},Uu=class{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}};var Bu=class{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ce(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}};var hm=class{constructor(e,t){this._repo=e,this._path=t}cancel(){let e=new Zn;return OR(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Cr("OnDisconnect.remove",this._path);let e=new Zn;return ky(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Cr("OnDisconnect.set",this._path),Ou("OnDisconnect.set",e,this._path,!1);let t=new Zn;return ky(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Cr("OnDisconnect.setWithPriority",this._path),Ou("OnDisconnect.setWithPriority",e,this._path,!1),bR("OnDisconnect.setWithPriority",t);let i=new Zn;return FR(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){Cr("OnDisconnect.update",this._path),zx("OnDisconnect.update",e,this._path);let t=new Zn;return UR(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};var um=class n{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return ct(this._path)?null:ym(this._path)}get ref(){return new Xi(this._repo,this._path)}get _queryIdentifier(){let e=Ty(this._queryParams),t=gm(e);return t==="{}"?"default":t}get _queryObject(){return Ty(this._queryParams)}isEqual(e){if(e=Gi(e),!(e instanceof n))return!1;let t=this._repo===e._repo,i=xm(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+jA(this._path)}};var Xi=class n extends um{constructor(e,t){super(e,t,new Hp,!1)}get parent(){let e=lx(this._path);return e===null?null:new n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}},wl=class n{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new Tt(e),i=Uo(this.ref,e);return new n(this._node.getChild(t),i,$t)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new n(s,Uo(this.ref,i),$t)))}hasChild(e){let t=new Tt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function ri(n,e){return n=Gi(n),n._checkNotDeleted("ref"),e!==void 0?Uo(n._root,e):n._root}function Uo(n,e){return n=Gi(n),ot(n._path)===null?ER("child","path",e,!1):Hx("child","path",e,!1),new Xi(n._repo,Yt(n._path,e))}function Kx(n){return n=Gi(n),new hm(n._repo,n._path)}function Zx(n,e){n=Gi(n),Cr("push",n._path),Ou("push",e,n._path,!0);let t=Wx(n._repo),i=WR(t),s=Uo(n,i),r=Uo(n,i),o;return e!=null?o=Or(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Nl(n){return Cr("remove",n._path),Or(n,null)}function Or(n,e){n=Gi(n),Cr("set",n._path),Ou("set",e,n._path,!1);let t=new Zn;return NR(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Ll(n,e){zx("update",e,n._path);let t=new Zn;return LR(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function jx(n){n=Gi(n);let e=new Bu(()=>{}),t=new ku(e);return PR(n._repo,n,t).then(i=>new wl(i,new Xi(n._repo,n._path),n._queryParams.getIndex()))}var ku=class n{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){let i=t._queryParams.getIndex();return new Fu("value",this,new wl(e.snapshotNode,new Xi(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Uu(this,e,t):null}matches(e){return e instanceof n?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}},dm=class n{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Uu(this,e,t):null}createEvent(e,t){ce(e.childName!=null,"Child events should have a childName.");let i=Uo(new Xi(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Fu(e.type,this,new wl(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof n?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}};function Qx(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){let l=t,c=(h,u)=>{zy(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}let o=new Bu(t,r||void 0),a=e==="value"?new ku(o):new dm(e,o);return BR(n._repo,n,a),()=>zy(n._repo,n,a)}function qi(n,e,t,i){return Qx(n,"value",e,t,i)}function ev(n,e,t,i){return Qx(n,"child_added",e,t,i)}JC(Xi);eR(Xi);var XR="FIREBASE_DATABASE_EMULATOR_HOST",fm={},qR=!1;function YR(n,e,t,i){let s=e.lastIndexOf(":"),r=e.substring(0,s),o=Zf(r);n.repoInfo_=new mu(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function $R(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||ys("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pn("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Hy(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[XR]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Hy(r,s),a=o.repoInfo):l=!o.repoInfo.secure;let h=s&&l?new Gs(Gs.OWNER):new Ep(n.name,n.options,e);wR("Invalid Firebase Database URL",o),ct(o.path)||ys("Database URL must point to the root of a Firebase Database (not including a child path).");let u=KR(a,n,h,new bp(n,t));return new pm(u,n)}function JR(n,e){let t=fm[e];(!t||t[n.key]!==n)&&ys(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Xx(n),delete t[n.key]}function KR(n,e,t,i){let s=fm[e.name];s||(s={},fm[e.name]=s);let r=s[n.toURLString()];return r&&ys("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new cm(n,qR,t,i),s[n.toURLString()]=r,r}var pm=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(RR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xi(this._repo,vt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ys("Cannot call "+e+" on a deleted database.")}};function tv(n=oy(),e){let t=iy(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){let i=D_("database");i&&ZR(t,...i)}return t}function ZR(n,e,t,i={}){n=Gi(n),n._checkNotDeleted("useEmulator");let s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Eo(i,r.repoInfo_.emulatorOptions))return;ys("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&ys('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Gs(Gs.OWNER);else if(i.mockUserToken){let a=typeof i.mockUserToken=="string"?i.mockUserToken:O_(i.mockUserToken,n.app.options.projectId);o=new Gs(a)}Zf(e)&&W_(e),YR(r,s,i,o)}function Bm(n){n=Gi(n),n._checkNotDeleted("goOffline"),Xx(n._repo)}function jR(n){_A(ry),al(new ps("database",(e,{instanceIdentifier:t})=>{let i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return $R(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),zs(cy,hy,n),zs(cy,hy,"esm2020")}var QR={".sv":"timestamp"};function Dl(){return QR}Pr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Pr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};jR();var nv={apiKey:"AIzaSyDtHx2vGHhMd7Sv0UMwL3JU35iLD7eD9nM",authDomain:"eclipse-game-865ae.firebaseapp.com",databaseURL:"https://eclipse-game-865ae-default-rtdb.europe-west1.firebasedatabase.app",projectId:"eclipse-game-865ae",storageBucket:"eclipse-game-865ae.firebasestorage.app",messagingSenderId:"578340682575",appId:"1:578340682575:web:5087cb3782c19b8f52e33a"};var iv=12e3,Ol=class{constructor(){this.h={}}on(e,t){var i;((i=this.h)[e]||(i[e]=[])).push(t)}emit(e,...t){for(let i of this.h[e]||[])i(...t)}};function eI(n){if(!n.length)return null;let e=[...n].sort((t,i)=>t-i);return e[Math.floor(e.length/2)]}var sv=()=>Math.random().toString(36).slice(2,10);function Ku(n,e,t){let i=e.split("/"),s=n;for(let r=0;r<i.length-1;r++)s=s[i[r]]=s[i[r]]&&typeof s[i[r]]=="object"?s[i[r]]:{};return s[i[i.length-1]]=t,n}var Zu=class extends Ol{constructor(){super(),this.kind="online",this.offset=0,this.status={server:"connecting",ping:null,partnerOnline:!1,partnerPing:null,error:null,conflict:!1},this.pings=[],this.sid=sv(),this.connected=!1}serverNow(){return Date.now()+this.offset}join(e,t){this.role=t,this.other=Zt(t);let i=up(nv),s=this.db=tv(i),r=this.base=`rooms/${e}`;this.meRef=ri(s,`${r}/players/${t}/meta`),this.stateRef=ri(s,`${r}/players/${t}/s`),this.evRef=ri(s,`${r}/ev`),this.starsRef=ri(s,`${r}/stars`),this.joinedAt=Date.now(),qi(ri(s,".info/serverTimeOffset"),o=>{this.offset=o.val()||0}),this.timeout=setTimeout(()=>{this.everConnected||(this.status.server="unreachable",this.emit("status",this.status))},12e3),qi(ri(s,".info/connected"),async o=>{this.connected=!!o.val(),this.connected?(this.everConnected=!0,clearTimeout(this.timeout),this.status.server="ok",this.emit("status",this.status),await this._claim()):this.everConnected&&(this.status.server="reconnecting",this.emit("status",this.status))},o=>this._fail(o)),qi(ri(s,`${r}/players/${this.other}/meta`),o=>{let a=o.val();this.partnerMeta=a,this._updatePartner()},o=>this._fail(o)),qi(ri(s,`${r}/players/${this.other}/s`),o=>{let a=o.val();a&&a.p&&this.emit("state",a)},o=>this._fail(o)),qi(this.meRef,o=>{let a=o.val();this.claimed&&a&&a.sid&&a.sid!==this.sid&&a.online&&(this.status.conflict=!0,this.emit("status",this.status))}),ev(this.evRef,o=>{let a=o.val();if(!a||typeof a.t!="number")return;let l=this.serverNow()-a.t;if(l>6e4){Nl(o.ref).catch(()=>{});return}a.from===this.role||l>5e3||this.emit("event",a)},o=>this._fail(o)),qi(this.starsRef,o=>this.emit("stars",o.val()||{}),o=>this._fail(o)),this.saveRef=ri(s,`${r}/save`),this.save={},qi(this.saveRef,o=>{this.save=o.val()||{},this.saveLoaded=!0,this.emit("save",this.save)},o=>this._fail(o)),this.quizMineRef=ri(s,`${r}/quiz/${t}`),qi(this.quizMineRef,o=>{this.quizMine=o.val(),this.quizLoaded=!0,this._emitQuiz()},o=>this._fail(o)),qi(ri(s,`${r}/quiz/${this.other}`),o=>{this.quizPartner=o.val(),this._emitQuiz()},o=>this._fail(o)),this.hb=setInterval(()=>this._heartbeat(),1500),this.pt=setInterval(()=>this._updatePartner(),1e3)}async _claim(){try{if(!this.claimed){let e=(await jx(this.meRef)).val();if(e&&e.online&&e.sid!==this.sid&&this.serverNow()-(e.seen||0)<iv){this.status.conflict=!0,this.emit("status",this.status);return}}await Kx(this.meRef).update({online:!1}),await Ll(this.meRef,{online:!0,sid:this.sid,seen:Dl(),ping:Math.round(this.status.ping||0),v:"2026-11-07.1615"}),this.claimed=!0,this._heartbeat()}catch(e){this._fail(e)}}_heartbeat(){if(!this.connected||!this.claimed||this.status.conflict)return;let e=performance.now();Ll(this.meRef,{online:!0,sid:this.sid,seen:Dl(),ping:Math.round(this.status.ping||0)}).then(()=>{let t=performance.now()-e;this.pings.push(t),this.pings.length>7&&this.pings.shift(),this.status.ping=eI(this.pings),this.emit("status",this.status)}).catch(t=>this._fail(t))}_updatePartner(){let e=this.partnerMeta,t=!!(e&&e.online&&this.serverNow()-(e.seen||0)<iv),i=t!==this.status.partnerOnline;this.status.partnerOnline=t,this.status.partnerPing=t&&e.ping?e.ping:null,i&&this.emit("partner",t),this.emit("status",this.status)}_fail(e){console.warn("[net]",e);let t=String(e&&(e.code||e.message||e));this.status.error=/permission/i.test(t)?"rules":t,this.emit("status",this.status)}sendState(e){!this.connected||!this.claimed||this.status.conflict||Or(this.stateRef,e).catch(()=>{})}sendEvent(e,t={}){if(!this.connected||!this.claimed)return;let i=Zx(this.evRef);Or(i,{...t,type:e,from:this.role,t:Dl()}).catch(()=>{}),setTimeout(()=>Nl(i).catch(()=>{}),15e3)}collectStar(e){Or(ri(this.db,`${this.base}/stars/${e}`),!0).catch(()=>{})}_emitQuiz(){this.emit("quiz",this.quizMine||null,this.quizPartner||null)}setSave(e,t){Ku(this.save,e,t),this.emit("save",this.save),Ll(this.saveRef,{[e]:t}).catch(i=>this._fail(i))}saveQuiz(e){return e.length?Or(this.quizMineRef,{t:Dl(),items:e}):Nl(this.quizMineRef)}resetStars(){Nl(this.starsRef).catch(()=>{})}leave(){if(clearInterval(this.hb),clearInterval(this.pt),this.claimed)return Ll(this.meRef,{online:!1}).catch(()=>{}).finally(()=>Bm(this.db));try{Bm(this.db)}catch{}return Promise.resolve()}},ju=class extends Ol{constructor(e=0){super(),this.kind="local",this.lag=e,this.status={server:"ok",ping:e*2,partnerOnline:!1,partnerPing:null,error:null,conflict:!1},this.stars={},this.sid=sv(),this.partnerSeen=0}serverNow(){return Date.now()}join(e,t){this.role=t,this.other=Zt(t),this.bc=new BroadcastChannel("eclipse-"+e),this.bc.onmessage=s=>{let r=s.data;if(!r||r.from===this.role)return;let o=()=>this._recv(r);this.lag?setTimeout(o,this.lag*(.75+Math.random()*.5)):o()},this.room=e,this.save=bt.get(`save.${e}`,{}),this.saveLoaded=!0,setTimeout(()=>this.emit("save",this.save),0),this.quizMine=bt.get(`quiz.${e}.${t}`,null),this.quizPartner=bt.get(`quiz.${e}.${this.other}`,null),this.quizLoaded=!0,setTimeout(()=>this._emitQuiz(),0);let i=()=>this._send({k:"meta",ping:this.lag*2});i(),this._send({k:"hello"}),this.hb=setInterval(()=>{i(),this._check()},1e3),setTimeout(()=>this.emit("status",this.status),0)}_send(e){this.bc.postMessage({...e,from:this.role})}_recv(e){e.k==="meta"?(this.partnerSeen=Date.now(),this.status.partnerPing=e.ping,this._check()):e.k==="hello"?(this._send({k:"meta",ping:this.lag*2}),this._send({k:"stars",stars:this.stars})):e.k==="state"?(this.partnerSeen=Date.now(),this._check(),this.emit("state",e.s)):e.k==="ev"?this.emit("event",e.e):e.k==="stars"?(Object.assign(this.stars,e.stars),e.reset&&(this.stars={}),this.emit("stars",{...this.stars})):e.k==="bye"?(this.partnerSeen=0,this._check()):e.k==="quiz"?(this.quizPartner=e.v,this._emitQuiz()):e.k==="save"&&(Ku(this.save,e.path,e.value),bt.set(`save.${this.room}`,this.save),this.emit("save",this.save))}_check(){let e=Date.now()-this.partnerSeen<4e3;e!==this.status.partnerOnline&&(this.status.partnerOnline=e,this.emit("partner",e)),this.emit("status",this.status)}sendState(e){this._send({k:"state",s:e})}sendEvent(e,t={}){this._send({k:"ev",e:{...t,type:e,from:this.role,t:Date.now()}})}collectStar(e){this.stars[e]=!0,this._send({k:"stars",stars:{[e]:!0}}),this.emit("stars",{...this.stars})}resetStars(){this.stars={},this._send({k:"stars",stars:{},reset:!0}),this.emit("stars",{})}_emitQuiz(){this.emit("quiz",this.quizMine,this.quizPartner)}setSave(e,t){Ku(this.save,e,t),bt.set(`save.${this.room}`,this.save),this._send({k:"save",path:e,value:t}),this.emit("save",this.save)}saveQuiz(e){let t=e.length?{t:Date.now(),items:e}:null;return bt.set(`quiz.${this.room}.${this.role}`,t),this.quizMine=t,this._send({k:"quiz",v:t}),this._emitQuiz(),Promise.resolve()}leave(){return this._send({k:"bye"}),clearInterval(this.hb),this.bc.close(),Promise.resolve()}},Qu=class extends Ol{constructor(){super(),this.kind="solo",this.status={server:"solo",ping:null,partnerOnline:!0,partnerPing:null,error:null,conflict:!1},this.stars={}}serverNow(){return Date.now()}join(e,t){this.role=t,this.other=Zt(t),this.quizMine=bt.get(`quiz.solo.${t}`,null),this.quizLoaded=!0,this.save=bt.get("save.solo",{}),this.saveLoaded=!0,setTimeout(()=>{this.emit("quiz",this.quizMine,null),this.emit("save",this.save)},0)}setSave(e,t){Ku(this.save,e,t),bt.set("save.solo",this.save),this.emit("save",this.save)}saveQuiz(e){return this.quizMine=e.length?{t:Date.now(),items:e}:null,bt.set(`quiz.solo.${this.role}`,this.quizMine),this.emit("quiz",this.quizMine,null),Promise.resolve()}sendState(){}sendEvent(){}collectStar(e){this.stars[e]=!0,this.emit("stars",{...this.stars})}resetStars(){this.stars={},this.emit("stars",{})}leave(){return Promise.resolve()}};var At=n=>document.querySelector(n);function rv({onJoin:n,onSolo:e,onStart:t,onRetry:i,onLeave:s,onResetStars:r,onToggleSound:o,onFullscreen:a,canFullscreen:l}){let c=At("#lobby"),h=At("#conn"),u=At("#hud"),f=bt.get("role",null),d=At("#word");d.value=bt.get("word",""),At("#ver").textContent="version 2026-11-07.1615";let p=[...document.querySelectorAll(".role")],y=()=>p.forEach(S=>S.classList.toggle("sel",S.dataset.role===f));y(),p.forEach(S=>S.addEventListener("click",()=>{f=S.dataset.role,bt.set("role",f),y(),m("")}));let m=S=>{At("#lobby-err").textContent=S};At("#join").addEventListener("click",()=>{let S=d.value.trim();if(!f)return m("Pick Sun or Moon first.");if(S.length<2)return m("Type a secret word (you both use the same one).");bt.set("word",S),d.blur(),n(f,S)}),d.addEventListener("keydown",S=>{S.key==="Enter"&&At("#join").click()}),At("#solo").addEventListener("click",()=>{d.blur(),e(f||"sun")}),At("#conn-start").addEventListener("click",()=>t()),At("#conn-retry").addEventListener("click",()=>i()),At("#conn-leave").addEventListener("click",()=>s()),At("#opt-stars").addEventListener("click",()=>{r(),_("Stars reset")});let g=At("#opt-sound"),x=S=>{g.textContent=S?"\u{1F50A} Sound on":"\u{1F508} Sound off"};g.addEventListener("click",()=>x(o())),At("#opt-full").hidden=!l,At("#opt-full").addEventListener("click",()=>a());let v="join";function M(S,C,A,P,D=""){let B=At(S),I=B.querySelector(".ic");I.className="ic "+C,I.textContent=C==="good"?"\u2713":C==="bad"?"\u2715":C==="ok"?"!":"",B.querySelector("b").textContent=A,B.querySelector("small").textContent=P,B.querySelector(".ms").textContent=D}let T=S=>S<120?["good","Great"]:S<220?["good","Good"]:S<400?["ok","OK"]:["bad","Laggy"];function w(S,C,A){let P=Zt(C),D=`${$n[P]} ${Sn[P]}`;At("#conn-who").textContent=A==="solo"?"Practice alone: you control both.":`You are ${$n[C]} ${Sn[C]}`+(A==="local"?" (two-tab test)":"");let B="",I=!1,k=!1;if(A==="solo")M("#row-server","good","Practice mode","No internet needed"),I=!0;else if(A==="local")M("#row-server","good","Test mode","Two tabs on this computer",S.ping?`${S.ping} ms fake lag`:""),I=!0;else if(S.error==="rules")M("#row-server","bad","Game server said no","The database rules need to be set"),B="The database is still locked. Paste the rules from database.rules.json into Firebase \u2192 Realtime Database \u2192 Rules, then tap Try again.",k=!0;else if(S.server==="ok"){let Z=S.ping!=null?Math.round(S.ping):null;M("#row-server",Z==null?"good":T(Z)[0],"Game server",Z==null?"Connected, measuring\u2026":`Connected \xB7 ${T(Z)[1]}`,Z==null?"":`${Z} ms`),I=!0}else S.server==="reconnecting"?(M("#row-server","wait","Game server","Connection lost, reconnecting\u2026"),I=v==="menu"):S.server==="unreachable"?(M("#row-server","bad","Game server","Can't reach it from this network"),B="Couldn't reach the game server. Check the internet connection and tap Try again. If it keeps failing, a VPN is the backup plan.",k=!0):M("#row-server","wait","Game server","Connecting\u2026");A==="solo"?M("#row-partner","good","Both characters","Tap \u21C4 to switch who you control"):S.conflict?(M("#row-partner","bad",`${Sn[C]} is taken`,`Someone is already ${Sn[C]} with this word`),B=`Someone is already playing as ${Sn[C]} with this secret word. Tap Leave and pick ${Sn[P]}.`,I=!1):S.partnerOnline?M("#row-partner",S.partnerPing?T(S.partnerPing)[0]:"good",`${D} is here`,S.partnerPing?`Their connection \xB7 ${T(S.partnerPing)[1]}`:"Connected",S.partnerPing?`${Math.round(S.partnerPing)} ms`:""):M("#row-partner","wait",`Waiting for ${D}\u2026`,`Same secret word, pick ${Sn[P]}`);let X=A!=="solo"&&S.partnerOnline&&S.ping!=null&&S.partnerPing!=null;if(At("#row-delay").hidden=!X,X){let Z=Math.round((S.ping+S.partnerPing)/2),[Ae,Le]=T(Z);M("#row-delay",Ae,"Delay between you",Le,`\u2248 ${Z} ms`)}At("#conn-msg").textContent=B;let G=At("#conn-start");G.disabled=!I,G.textContent=v==="menu"?"Back to game":A!=="solo"&&!S.partnerOnline&&I?`Start (${Sn[P]} can join any time)`:"Start playing",At("#conn-retry").hidden=!k;let oe=At("#status-pill .dot"),q="good",Q="";if(A==="solo")Q="Practice";else if(S.server!=="ok"&&A!=="local")q=S.server==="unreachable"||S.error?"bad":"ok",Q=S.server==="reconnecting"?"Reconnecting\u2026":"Offline";else{let Z=S.ping!=null?Math.round(S.ping):null;Z!=null&&(q=T(Z)[0]),Q=`${Z!=null?Z+" ms":"\u2026"} \xB7 ${$n[P]} ${S.partnerOnline?"here":"away"}`}oe.className="dot "+q,At("#status-text").textContent=Q}function _(S){let C=document.createElement("div");C.className="toast",C.textContent=S,At("#toasts").appendChild(C),setTimeout(()=>C.remove(),2900);let A=At("#toasts").children;A.length>3&&A[0].remove()}return{toast:_,renderStatus:w,paintSound:x,showLobby(){c.hidden=!1,h.hidden=!0,u.hidden=!0},showConn(S){v=S,c.hidden=!0,h.hidden=!1,At("#conn-title").textContent=S==="menu"?"Menu":"Connection",At("#conn-extras").hidden=S!=="menu",At("#level-chips").hidden=S!=="menu"},showHud(){c.hidden=!0,h.hidden=!0,u.hidden=!1},setStars(S,C){At("#star-count").textContent=S,At("#star-total").textContent=C},get connOpen(){return!h.hidden}}}var tI=n=>n.normalize("NFKC").trim().toLowerCase().replace(/\s+/g,""),ed=null;async function nI(){let n=await fetch("memories.enc?v=2026-11-07.1615");if(!n.ok)throw new Error("missing");return new Uint8Array(await n.arrayBuffer())}async function ov(n){if(ed)return ed;if(!crypto?.subtle)throw new Error("unsupported");let e=await nI();if(new TextDecoder().decode(e.slice(0,4))!=="ECLM")throw new Error("missing");let t=new DataView(e.buffer,e.byteOffset).getUint32(5),i=e.slice(9,25),s=e.slice(25,37),r=e.slice(37),o=await crypto.subtle.importKey("raw",new TextEncoder().encode(tI(n)),"PBKDF2",!1,["deriveKey"]),a=await crypto.subtle.deriveKey({name:"PBKDF2",salt:i,iterations:t,hash:"SHA-256"},o,{name:"AES-GCM",length:256},!1,["decrypt"]),l;try{l=await crypto.subtle.decrypt({name:"AES-GCM",iv:s},a,r)}catch{throw new Error("wrong-password")}return ed=JSON.parse(new TextDecoder().decode(l)).items.map(h=>{let u=atob(h.data),f=new Uint8Array(u.length);for(let d=0;d<u.length;d++)f[d]=u.charCodeAt(d);return{...h,data:void 0,url:URL.createObjectURL(new Blob([f],{type:h.mime}))}}),bt.set("memPw",n),ed}var av=()=>bt.get("memPw","");var gn=n=>document.querySelector(n);function lv(){let n=gn("#mem"),e=gn("#mem-view"),t=gn("#mem-grid"),i=gn("#mem-lock"),s=gn("#mem-pw"),r=gn("#mem-err"),o=gn("#mem-open"),a=null,l=[],c=0;function h(y){l=y,i.hidden=!0,t.hidden=!1,t.innerHTML="",y.forEach((m,g)=>{let x=document.createElement("button"),v=document.createElement("img");v.src=m.url,v.alt=m.title,v.loading="lazy";let M=document.createElement("span");M.textContent=m.title,x.append(v,M),x.addEventListener("click",()=>p(g)),t.appendChild(x)})}async function u(y,m){if(y){o.disabled=!0,r.textContent=m?"":"Unlocking\u2026";try{h(await ov(y)),r.textContent=""}catch(g){let x=String(g.message);m||(r.textContent=x==="wrong-password"?"That's not the password.":x==="unsupported"?"This browser can\u2019t open them. Try Safari or Chrome.":"Couldn\u2019t load the memories. Check the internet connection.")}finally{o.disabled=!1}}}function f(y){if(a=y,y&&(y.hidden=!0),n.hidden=!1,!l.length){i.hidden=!1,t.hidden=!0;let m=av();m&&u(m,!0)}}function d(){n.hidden=!0,a&&(a.hidden=!1)}function p(y){c=(y+l.length)%l.length;let m=l[c];gn("#mem-img").src=m.url,gn("#mem-title").textContent=m.title,gn("#mem-caption").textContent=m.caption||"",e.hidden=!1}o.addEventListener("click",()=>u(s.value,!1)),s.addEventListener("keydown",y=>{y.key==="Enter"&&u(s.value,!1)}),gn("#mem-close").addEventListener("click",d),gn("#mem-x").addEventListener("click",()=>{e.hidden=!0}),gn("#mem-prev").addEventListener("click",()=>p(c-1)),gn("#mem-next").addEventListener("click",()=>p(c+1)),gn("#lobby-mem").addEventListener("click",()=>f(gn("#lobby"))),gn("#opt-mem").addEventListener("click",()=>f(gn("#conn")))}var oi=n=>document.querySelector(n),iI=[{q:"What would be my dream vacation?",a:"The longest road + sea trip around the world",w:"A week at a luxury beach resort, Skiing in the Alps, A city trip to New York"},{q:"Which hobby of mine don't I do as often lately?",a:"Photography (nature, no people)",w:"Drawing, Playing guitar, Cooking"},{q:"What is my favourite show?",a:"Breaking Bad / Game of Thrones / Sherlock / Silo",w:"Friends, The Office, Money Heist"},{q:"What is my favourite anime?",a:"Fullmetal Alchemist",w:"Naruto, Attack on Titan, One Piece"}],td=3,cv=10;function hv({getNet:n,getRole:e}){let t=oi("#quiz-ed"),i=oi("#qe-list"),s=oi("#qe-msg"),r=null,o=null,a=null;function l(d={q:"",a:"",w:""}){let p=document.createElement("div");p.className="qe-item",p.innerHTML=`<span class="num"></span>
      <button class="del" aria-label="Remove">\u2715</button>
      <input class="q" maxlength="200" dir="auto" placeholder="Question, e.g. What's my favourite food?">
      <input class="ans" maxlength="200" dir="auto" placeholder="The right answer">
      <details><summary>Make it multiple choice (optional)</summary>
        <input class="w" maxlength="300" dir="auto" placeholder="Wrong answers, separated by commas">
      </details>`,p.querySelector(".q").value=d.q||"",p.querySelector(".ans").value=d.a||"",p.querySelector(".w").value=d.w||"",d.w&&(p.querySelector("details").open=!0),p.querySelector(".del").addEventListener("click",()=>{p.remove(),c()}),i.appendChild(p),c()}function c(){[...i.children].forEach((d,p)=>{d.querySelector(".num").textContent=`Question ${p+1}`}),oi("#qe-add").hidden=i.children.length>=cv}function h(){return[...i.children].map(d=>{let p={q:d.querySelector(".q").value.trim(),a:d.querySelector(".ans").value.trim()},y=d.querySelector(".w").value.trim();return y&&(p.w=y),p}).filter(d=>d.q&&d.a)}function u(d){let p=e(),y=Zt(p);for(r=d,d&&(d.hidden=!0),t.hidden=!1,oi("#qe-intro").textContent=`Write ${td}\u2013${cv} questions about yourself, with the right answers. ${$n[y]} ${Sn[y]} will have to guess them later, and never sees your answers before that.`,i.innerHTML="",(o?.items?.length?o.items:p==="sun"?iI:[]).forEach(l);i.children.length<td;)l();s.textContent=o?`${o.items.length} saved \u2713`:""}function f(){t.hidden=!0,r&&(r.hidden=!1)}return oi("#qe-add").addEventListener("click",()=>{l(),i.lastElementChild.querySelector(".q").focus()}),oi("#qe-save").addEventListener("click",async()=>{let d=h();if(d.length<td){s.textContent=`Please write at least ${td} questions, each with an answer.`;return}s.textContent="Saving\u2026";let p=n(),y=setTimeout(()=>{s.textContent="Waiting for the connection\u2026 it will save as soon as you are online."},2500);try{await p.saveQuiz(d),clearTimeout(y),s.textContent=`${d.length} saved \u2713`,setTimeout(f,700)}catch(m){clearTimeout(y),s.textContent="Could not save: "+(String(m?.code||m?.message||m).includes("PERMISSION")?"the database rules need updating.":"please try again.")}}),oi("#qe-close").addEventListener("click",f),oi("#row-quiz").addEventListener("click",()=>u(oi("#conn"))),oi("#opt-quiz").addEventListener("click",()=>u(oi("#conn"))),{update(d,p){o=d,a=p;let y=e(),m=Zt(y),g=oi("#row-quiz");g.hidden=!1;let x=d?.items?.length||0,v=p?.items?.length||0;g.classList.toggle("todo",x===0),g.querySelector("b").textContent=x?`Your quiz: ${x} questions \u2713`:"Before you play: write your quiz",g.querySelector("small").textContent=`${$n[m]} ${Sn[m]} has written ${v||"no"} question${v===1?"":"s"}${v?" \u2713":" yet"}`,g.querySelector(".ms").textContent=x?"Edit \u203A":"Write \u203A"}}}var Dt=n=>document.querySelector(n),sI=yr.has("debug"),mv=Dt("#game"),$s=new zh({canvas:mv,antialias:!1,powerPreference:"high-performance"});$s.toneMapping=fr;$s.toneMappingExposure=1;$s.shadowMap.enabled=!0;$s.shadowMap.type=ur;var Vo=new aa,jn=new An(55,1,.1,700),rI=new en(4,4,{type:on,samples:4}),Wo=new Xh($s,rI);Wo.addPass(new qh(Vo,jn));var gv=new xo(new re(256,256),.5,.5,1.3);Wo.addPass(gv);Wo.addPass(new Yh);var _v=[{dpr:Math.min(devicePixelRatio,2),bloom:!0,shadow:2048},{dpr:Math.min(devicePixelRatio,1.6),bloom:!0,shadow:2048},{dpr:Math.min(devicePixelRatio,1.25),bloom:!0,shadow:1024},{dpr:1,bloom:!1,shadow:1024}],sd=ds(+yr.get("q")||0,0,3);function hd(){let n=window.innerWidth,e=window.innerHeight,t=_v[sd];$s.setPixelRatio(t.dpr),$s.setSize(n,e,!1),Wo.setPixelRatio(t.dpr),Wo.setSize(n,e),gv.enabled=t.bloom,jn.aspect=n/e,jn.fov=n<e?70:55,jn.updateProjectionMatrix(),n>e&&(Dt("#rotate-hint").hidden=!0)}window.addEventListener("resize",hd);window.visualViewport?.addEventListener("resize",hd);var Je=Vf(Vo,bt.get("lastLevel","prologue")),Vn=new $h(Vo,jn),Js=["sun","moon"],gt={},ut={},Mn={},St={},ad=n=>(Je.kid?Xf:Wf)[n];function yv(){for(let n of Js){let e=gt[n];e&&Vo.remove(e.root),gt[n]=S_(n,{kid:!!Je.kid}),e&&(gt[n].root.position.copy(e.root.position),gt[n].setYaw(e.yaw)),Vo.add(gt[n].root)}}yv();for(let n of Js)ut[n]=new iu(ad(n).r,ad(n).h),Mn[n]=E_(ut[n]),Mn[n].disabled=!0,St[n]={role:n,body:ut[n],coyote:0,buffer:0,jumps:0,cut:!0,safe:Je.spawn[n].clone(),safeT:0,k:0,lastMoving:0,airT:0,state:"free",anim:wt.normal,wallT:0,wallNX:0,wallNZ:0,wjLock:0,regrab:0,dashT:0,dashCd:0,dashX:0,dashZ:0,airDashUsed:!1,ledge:null,hangT:0,climbT:0,from:new N,to:new N,carrying:!1,liftT:0,liftSeen:!1,notCarriedT:0,forceJump:!1};var oI=n=>(Je.camYaw?Je.camYaw[n]:0)+Math.PI;function xv(n){ut[n].pos.copy(Je.spawn[n]),ut[n].vel.set(0,0,0),ut[n].grounded=!1,ut[n].ground=null,gt[n].root.position.copy(Je.spawn[n]),gt[n].setYaw(oI(n))}Js.forEach(xv);var ld=[];function vv(){ld.length=0,ld.push(...Je.colliders,Mn.sun,Mn.moon)}vv();var U={mode:"lobby",kind:null,role:"sun",active:"sun",net:null,track:new ru,partnerK:null,cam:{yaw:0,pitch:.3,dist:7.2,target:new N(0,1,5),lastDrag:-10},lastSend:0,stars:{},cooldown:{ability:0,heart:0},t:0,save:null,starsMap:{},hold:!1,holdHeartT:0},Hm=[],Gm=!1,Vm="";function Ul(n,e=3500){n===Vm||Hm.some(t=>t[0]===n)||(Hm.push([n,e]),Gm||Sv())}function Sv(){let n=Hm.shift(),e=Dt("#caption");if(!n){Gm=!1,Vm="";return}Gm=!0,Vm=n[0],e.textContent=n[0],e.classList.add("on"),setTimeout(()=>{e.classList.remove("on"),setTimeout(Sv,450)},n[1])}function Mv(){let n=Je.intro;if(!n){Ul(Je.title,2600);return}n.all.forEach(t=>Ul(t,2700));let e=U.kind==="solo"?null:n[U.role];e&&Ul(e,3e3)}function bv(n){if(Je.id===n||!Mo[n])return;let e=!!Je.kid;Je.dispose(),Je=Vf(Vo,n),bt.set("lastLevel",n),!!Je.kid!==e&&yv();for(let t of Js){let i=ad(t),s=ut[t],r=St[t];s.r=i.r,s.h=i.h,Mn[t].r=i.r*.92,Mn[t].ready=!1,r.state="free",r.anim=wt.normal,r.carrying=!1,r.wallT=0,r.dashT=0,r.k++,r.safe.copy(Je.spawn[t]),xv(t)}U.hold=!1,U.track.buf.length=0,U.track.has=!1,U.partnerK=null,vv(),od=!1,Tv(U.starsMap),(U.mode==="play"||U.mode==="menu")&&(U.cam.yaw=Je.camYaw?Je.camYaw[U.active]:0,U.cam.pitch=.3,U.cam.target.copy(ut[U.active].pos),cd.classList.add("on"),setTimeout(()=>cd.classList.remove("on"),350),Mv())}function aI(n){U.net&&(n==="prologue"&&U.net.setSave("prologue",null),U.net.setSave("level",n),U.mode==="menu"&&Km())}function lI(){Je.id==="prologue"&&(Ul("Chapter 1 \xB7 Syria Unfiltered is coming next \u2728",3500),setTimeout(()=>U.net?.setSave("level","playground"),1500))}var cI=Dt("#level-chips");for(let[n,e]of Object.entries(Mo)){let t=document.createElement("button");t.className="chip",t.textContent=e.chip,t.addEventListener("click",()=>aI(n)),cI.appendChild(t)}var Bl=()=>U.net?U.net.serverNow():Date.now(),Ai=T_({canvas:mv,joyZone:Dt("#joy-zone"),joyBase:Dt("#joy-base"),joyKnob:Dt("#joy-knob"),buttons:{jump:Dt("#btn-jump"),ability:Dt("#btn-ability"),heart:Dt("#btn-heart"),swap:Dt("#btn-swap"),dash:Dt("#btn-dash")}}),Jm=zf&&!p_&&!!document.documentElement.requestFullscreen;function Ev(){!Jm||document.fullscreenElement||document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}var Wn=rv({canFullscreen:Jm,onJoin:(n,e)=>Wm(yr.get("net")==="local"?"local":"online",n,e),onSolo:n=>Wm("solo",n,""),onStart:()=>Km(),onRetry:()=>{sessionStorage.setItem("eclipse.autojoin","1"),location.reload()},onLeave:()=>{sessionStorage.removeItem("eclipse.autojoin"),(U.net?U.net.leave():Promise.resolve()).finally(()=>location.reload())},onResetStars:()=>U.net?.resetStars(),onToggleSound:()=>qt.toggle(),onFullscreen:Ev});Wn.paintSound(qt.enabled);lv();var hI=hv({getNet:()=>U.net,getRole:()=>U.role});Wn.setStars(0,Je.stars.length);Dt("#menu-btn").addEventListener("click",()=>{U.mode==="play"&&(U.mode="menu",Ai.setEnabled(!1),Wn.showConn("menu"),rd())});Dt("#status-pill").addEventListener("click",()=>Dt("#menu-btn").click());Dt("#rotate-ok").addEventListener("click",()=>{Dt("#rotate-hint").hidden=!0,bt.set("rotateOk",!0)});function rd(){U.net&&Wn.renderStatus(U.net.status,U.role,U.kind)}function Wm(n,e,t){U.kind=n,U.role=e,U.active=e,document.body.classList.remove("sun","moon"),document.body.classList.add(e),Dt("#ability-label").textContent=e==="sun"?"Shine":"Tide",Dt("#partner-arrow-icon").textContent=$n[Zt(e)],Dt("#btn-swap").hidden=n!=="solo",n==="solo"&&(Mn.sun.disabled=Mn.moon.disabled=!1),Jm&&Ev();let i=U.net=n==="online"?new Zu:n==="local"?new ju(+yr.get("lag")||0):new Qu;if(i.on("status",rd),i.on("state",s=>{if(U.partnerK!==s.k){U.partnerK=s.k,U.track.push(s,Date.now()),U.track.snap();return}U.track.push(s,Date.now())}),i.on("partner",s=>{if(U.mode!=="play"&&U.mode!=="menu")return;let r=Zt(U.role);Wn.toast(s?`${$n[r]} ${Sn[r]} joined!`:`${$n[r]} ${Sn[r]} left`),s&&qt.play("join")}),i.on("event",uI),i.on("stars",Tv),i.on("quiz",(s,r)=>hI.update(s,r)),i.on("save",s=>{U.save=s,s.level&&s.level!==Je.id&&bv(s.level)}),i.join(n==="solo"?"solo":f_(t),e),n==="solo"){rd(),Km();return}U.mode="connecting",Wn.showConn("join"),rd()}function Km(){let n=U.mode==="connecting"||U.mode==="lobby";U.mode="play",Wn.showHud(),Ai.setEnabled(!0),n&&(U.cam.yaw=Je.camYaw?Je.camYaw[U.active]:0,U.cam.pitch=.3,U.cam.target.copy(ut[U.active].pos).add(new N(0,1.1,0)),zf&&innerHeight>innerWidth&&!bt.get("rotateOk",!1)&&(Dt("#rotate-hint").hidden=!1),U.kind==="solo"&&Wn.toast("Practice: tap \u21C4 to switch characters"),Mv())}sessionStorage.getItem("eclipse.autojoin")&&bt.get("role")&&bt.get("word")?(sessionStorage.removeItem("eclipse.autojoin"),Wm(yr.get("net")==="local"?"local":"online",bt.get("role"),bt.get("word"))):Wn.showLobby();function uI(n){let e=gt[n.from];if(e)if(n.type==="heart")Vn.hearts(e.root.position,n.from==="sun"?16754253:11832575),Wn.toast(`${$n[n.from]} ${Sn[n.from]} sent you a heart ${n.from==="sun"?"\u{1F9E1}":"\u{1F49C}"}`),qt.play("heart");else if(n.type==="ability")wv(n.from);else if(n.type==="lift"&&U.role==="moon"){let t=St.moon,i=ut.moon;t.state==="free"&&U.track.has&&i.pos.distanceTo(U.track.pos)<2.6&&(t.state="carried",qt.play("jump2"))}else n.type==="throw"&&U.role==="moon"?St.moon.state==="carried"&&Array.isArray(n.v)&&kl(St.moon,new N(n.v[0],n.v[1],n.v[2])):n.type==="drop"&&U.role==="sun"?St.sun.carrying=!1:n.type==="hold"?n.on&&Ym(U.role,3.2)?Go(!0,!1):n.on||Go(!1,!1):n.type==="hjump"&&U.hold&&(St[U.role].forceJump=!0)}function wv(n){n==="sun"?(Vn.shine(gt.sun),qt.play("shine")):(Vn.tide(gt.moon),qt.play("tide"))}function Tv(n){U.starsMap=n||{},n=U.starsMap;for(let e of Je.stars){let t=!!n[e.id];t&&!e.collected&&(Vn.sparks(e.pos.clone().setY(e.pos.y-.6),16769658,22),qt.play("star")),e.collected=t}Av(!1)}var od=!1;function Av(n){let e=Je.stars.filter(t=>t.collected).length;Wn.setStars(e,Je.stars.length),n&&Wn.toast(`\u2B50 ${e}/${Je.stars.length}`),e===Je.stars.length&&!od&&U.mode==="play"&&(od=!0,setTimeout(()=>Wn.toast("All stars found! You two make a great team \u2728"),600)),e<Je.stars.length&&(od=!1)}var Cv=5.6,km=11,dI=9.5,fI=10.5,uv=6.2,dv=14,pI=.17,Xm=new N,cd=Dt("#fade");function qm(n,e,t,i,s,r=!1){let o=n.body,a=n.role,l=U.cam.yaw,c=-Math.sin(l),h=-Math.cos(l),u=Math.cos(l),f=-Math.sin(l),d=Math.min(1,Math.hypot(e.x,e.y)),p=u*e.x+c*e.y,y=f*e.x+h*e.y,m=Math.hypot(p,y);m>1e-4?(p/=m,y/=m):(p=0,y=0),n.regrab=Math.max(0,n.regrab-s),n.wjLock=Math.max(0,n.wjLock-s);let g=n.forceJump;if(g&&(t=!0,n.forceJump=!1),n.state==="carried")return yI(n,t);if(n.state==="hang")return gI(n,p,y,d,t,s);if(n.state==="climb")return _I(n,s);if(n.dashCd-=s,o.grounded&&(n.airDashUsed=!1),r&&n.dashCd<=0&&!n.carrying&&(o.grounded||!n.airDashUsed)){let T=p,w=y;if(d<.2){let _=gt[a].yaw;T=Math.sin(_),w=Math.cos(_)}n.dashX=T,n.dashZ=w,n.dashT=pI,n.dashCd=.45,o.grounded||(n.airDashUsed=!0),gt[a].setYaw(Math.atan2(T,w)),qt.play("dash"),Vn.dust(o.pos,4)}let x=Cv*(n.carrying?.82:1);if(n.dashT>0)n.dashT-=s,o.vel.x=n.dashX*dv,o.vel.z=n.dashZ*dv,o.grounded||(o.vel.y=Math.max(o.vel.y,0)),Math.random()<.6&&Vn.dust(Xm.copy(o.pos).add(new N(0,o.h*.4,0)),1);else{if(U.hold){let P=ud(a);if(P){let D=P.x-o.pos.x,B=P.z-o.pos.z,I=Math.hypot(D,B);if(I>1.05){let k=Math.min(20,(I-1.05)*14)*s;o.vel.x+=D/I*k,o.vel.z+=B/I*k,I>1.9&&(o.pos.x+=D/I*(I-1.9)*.5,o.pos.z+=B/I*(I-1.9)*.5)}}}let T=p*x*d,w=y*x*d,_=(o.grounded?48:n.wjLock>0?5:24)*s,S=T-o.vel.x,C=w-o.vel.z,A=Math.hypot(S,C);A>_&&(S*=_/A,C*=_/A),o.vel.x+=S,o.vel.z+=C}o.grounded?(n.coyote=.13,n.jumps=0,n.airT=0,n.wallT=0):(n.coyote-=s,n.airT+=s),n.buffer=t?.16:n.buffer-s,n.buffer>0&&(o.grounded||n.coyote>0?(o.vel.y=n.carrying?km*.88:U.hold?km*1.12:km,n.jumps=1,n.coyote=0,n.buffer=0,n.cut=U.hold,o.grounded=!1,o.ground=null,qt.play("jump"),Vn.dust(o.pos,4),U.hold&&(gt[a].spin(),g||(U.kind==="solo"?St[Zt(a)].forceJump=!0:U.net.sendEvent("hjump")))):n.wallT>0&&!n.carrying?(o.vel.set(n.wallNX*uv,fI,n.wallNZ*uv),n.jumps=1,n.buffer=0,n.cut=!0,n.wallT=0,n.wjLock=.2,gt[a].setYaw(Math.atan2(n.wallNX,n.wallNZ)),qt.play("jump"),Vn.dust(Xm.copy(o.pos).add(new N(-n.wallNX*o.r,o.h*.5,-n.wallNZ*o.r)),3)):n.jumps<2&&!n.carrying&&(o.vel.y=dI,n.jumps=2,n.buffer=0,n.cut=!0,gt[a].spin(),qt.play("jump2"),Vn.sparks(o.pos.clone().setY(o.pos.y-.5),a==="sun"?16756864:13215999,8,1.5))),!i&&!n.cut&&o.vel.y>6&&(o.vel.y=6,n.cut=!0);let v=a==="moon"&&!o.grounded&&i&&o.vel.y<0&&n.airT>.15&&n.wallT<=0;o.maxFall=v?2.2:n.wallT>0?3.2:28;let M=M_(o,ld,s);if(M&&(M.collider.bounce?(qt.play("bounce"),Je.bounce(M.collider),n.jumps=1,n.cut=!0,gt[a].land(10)):(M.impact>7&&(qt.play("land"),Vn.dust(o.pos,6)),gt[a].land(M.impact))),!o.grounded&&o.wallC&&o.wallC.wallJump&&o.vel.y<2.5?(n.wallT=.18,n.wallNX=o.wallNX,n.wallNZ=o.wallNZ):n.wallT-=s,o.grounded&&(n.wallT=0),!o.grounded&&!n.carrying&&n.regrab<=0&&o.vel.y<3.5){let T=b_(o,ld);if(T){let w=-(p*T.nx+y*T.nz)*d,_=-(o.vel.x*T.nx+o.vel.z*T.nz);(w>.2||_>.8||n.wallT>0)&&mI(n,T)}}(n.wallT>0||n.state==="hang")&&(n.airDashUsed=!1),n.state==="free"&&(n.anim=n.dashT>0?wt.dash:v?wt.glide:n.wallT>0&&!o.grounded?wt.wall:n.carrying?wt.carry:wt.normal),o.grounded&&o.ground&&o.ground.safe?(n.safeT+=s,n.safeT>.35&&n.safe.copy(o.pos)):n.safeT=0,o.pos.y<Je.killY&&xI(n)}function mI(n,e){let t=n.body;n.dashT=0,n.airDashUsed=!1,n.state="hang",n.ledge=e,n.hangT=0,n.anim=wt.hang,t.vel.set(0,0,0),t.grounded=!1,t.ground=null,t.pos.y=e.top-t.h*.92,gt[n.role].setYaw(Math.atan2(-e.nx,-e.nz)),qt.play("land")}function gI(n,e,t,i,s,r){let o=n.body,a=n.ledge;o.vel.set(0,0,0),o.grounded=!1,n.hangT+=r,n.anim=wt.hang;let l=-(e*a.nx+t*a.nz)*i;if(a.c.disabled){n.state="free",n.regrab=.4;return}s||l>.5&&n.hangT>.12?(n.state="climb",n.climbT=0,n.anim=wt.climb,n.from.copy(o.pos),n.to.set(a.lx,a.top,a.lz),qt.play("jump")):l<-.6&&n.hangT>.15&&(n.state="free",n.regrab=.45,o.vel.set(a.nx*1.5,0,a.nz*1.5))}function _I(n,e){let t=n.body;n.climbT+=e/.34;let i=Math.min(1,n.climbT);t.pos.y=n.from.y+(n.to.y-n.from.y)*Math.min(1,i*1.7);let s=fs(ds((i-.35)/.65,0,1));t.pos.x=n.from.x+(n.to.x-n.from.x)*s,t.pos.z=n.from.z+(n.to.z-n.from.z)*s,n.anim=wt.climb,i>=1&&(n.state="free",n.anim=wt.normal,t.pos.copy(n.to),t.vel.set(0,0,0),t.grounded=!0,t.ground=n.ledge.c,n.jumps=0)}function ud(n){let e=Zt(n);return U.kind==="solo"?ut[e].pos:U.track.has&&U.net?.status.partnerOnline?U.track.pos:null}function Rv(){if(Je.kid)return!1;let n=ut.sun,e=ud("sun");return!e||!n.grounded||St.sun.state!=="free"||U.kind==="solo"&&St.moon.state!=="free"?!1:Math.hypot(e.x-n.pos.x,e.z-n.pos.z)<1.5&&Math.abs(e.y-n.pos.y)<1.2}function Iv(){let n=St.sun;if(n.carrying){let e=gt.sun.yaw,t=ut.sun,i=new N(Math.sin(e)*6.5+t.vel.x*.5,12.5,Math.cos(e)*6.5+t.vel.z*.5);return n.carrying=!1,gt.sun.throwAnim(),qt.play("bounce"),U.kind==="solo"?kl(St.moon,i):U.net.sendEvent("throw",{v:[Yn(i.x),Yn(i.y),Yn(i.z)]}),!0}return Rv()?(n.carrying=!0,n.liftT=performance.now(),n.liftSeen=!1,n.notCarriedT=0,qt.play("jump2"),U.kind==="solo"?St.moon.state="carried":U.net.sendEvent("lift"),!0):!1}function yI(n,e){let t=n.body,i=U.kind==="solo"?ut.sun.pos:U.track.has&&U.net.status.partnerOnline?U.track.pos:null;if(!i){kl(n,new N(0,4,0));return}t.pos.set(i.x,i.y+ad("sun").h+.02,i.z),t.vel.set(0,0,0),t.grounded=!0,t.ground=null,n.anim=wt.carried,gt[n.role].setYaw(gt.sun.yaw),e&&(kl(n,new N(0,9.5,0)),U.kind==="solo"?St.sun.carrying=!1:U.net.sendEvent("drop"))}function kl(n,e){let t=n.body;n.state="free",n.anim=wt.normal,t.vel.copy(e),t.grounded=!1,t.ground=null,n.jumps=1,n.cut=!0,n.regrab=.25,n.airT=.2,n.coyote=0,Math.hypot(e.x,e.z)>2&&(n.wjLock=.5)}function xI(n){let e=n.body;n.state="free",n.anim=wt.normal,n.wallT=0,n.role==="sun"&&n.carrying&&(n.carrying=!1,U.kind==="solo"&&kl(St.moon,new N(0,2,0))),e.pos.copy(n.safe).add(Xm.set(0,.3,0)),e.vel.set(0,0,0),e.ground=null,e.grounded=!1,n.k++,Mn[n.role].ready=!1,gt[n.role].root.position.copy(e.pos),n.role===U.active&&(cd.classList.add("on"),setTimeout(()=>cd.classList.remove("on"),180),qt.play("respawn"))}function Ym(n,e=1.9){let t=ud(n),i=ut[n];return!t||St[n].state!=="free"||St.sun.carrying?!1:Math.hypot(t.x-i.pos.x,t.z-i.pos.z)<e&&Math.abs(t.y-i.pos.y)<1}function Go(n,e){if(U.hold!==n&&(U.hold=n,e&&U.kind!=="solo"&&U.net.sendEvent("hold",{on:n}),n)){qt.play("heart");let t=ut.sun.pos,i=ut.moon.pos;Vn.hearts(new N().addVectors(t,ud("sun")||i).multiplyScalar(.5),16744118),U.holdHintShown||(U.holdHintShown=!0,Wn.toast("Holding hands \u{1F49E} Jump together!"))}}function vI(n){let e=St[U.role],t=e.body;(Math.hypot(t.vel.x,t.vel.z)>.05||!t.grounded)&&(e.lastMoving=n);let s=n-e.lastMoving<600?66:500;if(n-U.lastSend<s)return;U.lastSend=n;let r={t:Math.round(Bl()),v:[Yn(t.vel.x),Yn(t.vel.y),Yn(t.vel.z)],r:Yn(gt[U.role].yaw),g:t.grounded?1:0,k:e.k,m:e.anim},o=null;e.state==="carried"&&U.track.has?(o=U.track.pos,r.b=Zt(U.role)):t.grounded&&t.ground&&(t.ground.id==="raft"&&Je.movers?.raft?o=Je.movers.raft.pos(Bl(),new N):t.ground===Mn[Zt(U.role)]&&U.track.has&&(o=U.track.pos),o&&(r.b=t.ground.id==="raft"?"raft":Zt(U.role))),r.p=o?[Yn(t.pos.x-o.x),Yn(t.pos.y-o.y),Yn(t.pos.z-o.z)]:[Yn(t.pos.x),Yn(t.pos.y),Yn(t.pos.z)],U.net.sendState(r)}function SI(n,e){return n==="raft"?Je.movers?.raft?Je.movers.raft.pos(Bl(),e):null:n===U.role?e.copy(ut[U.role].pos):null}var Fl=new N;function MI(n){let e=U.cam;if(U.mode==="lobby"||U.mode==="connecting"){let a=U.t*.06,l=Je.lobbyCam||{cx:6,cz:-2,r:24,h:10},c=l.r*(jn.aspect<1?1.5:1);jn.position.set(l.cx+Math.sin(a)*c,l.h+Math.sin(U.t*.1)*1.5,l.cz+Math.cos(a)*c),jn.lookAt(l.cx,.5,l.cz);return}let t=Ai.takeCam();(t.x||t.y)&&(e.yaw-=t.x*.0065,e.pitch=ds(e.pitch+t.y*.0045,-.2,1.2),e.lastDrag=U.t);let i=ut[U.active],s=Math.hypot(i.vel.x,i.vel.z);if(s>1.5&&U.t-e.lastDrag>1.2){let a=Math.atan2(-i.vel.x,-i.vel.z),l=ja(e.yaw,a);Math.abs(l)<1.75&&(e.yaw+=ds(l,-1,1)*Math.min(1,s/Cv)*.9*n)}Fl.copy(i.pos),Fl.y+=i.h*.8,e.target.x=vn(e.target.x,Fl.x,12,n),e.target.z=vn(e.target.z,Fl.z,12,n),e.target.y=vn(e.target.y,Fl.y,i.grounded?8:3.5,n);let r=e.dist*(jn.aspect<1?1.25:1)*(Je.kid?.85:1),o=Math.cos(e.pitch);jn.position.set(e.target.x+Math.sin(e.yaw)*o*r,e.target.y+Math.sin(e.pitch)*r,e.target.z+Math.cos(e.yaw)*o*r),jn.position.y<e.target.y-1&&(jn.position.y=e.target.y-1),jn.lookAt(e.target)}var nd=Dt("#partner-arrow"),Yi=new N;function bI(n){if(!n||U.mode!=="play"){nd.hidden=!0;return}let e=U.kind==="solo"?Zt(U.active):Zt(U.role);Yi.copy(gt[e].root.position),Yi.y+=.6,Yi.project(jn);let t=Yi.z>1;if(!t&&Math.abs(Yi.x)<.95&&Math.abs(Yi.y)<.92){nd.hidden=!0;return}let i=t?-Yi.x:Yi.x,s=t?-Yi.y:Yi.y,r=Math.max(Math.abs(i),Math.abs(s))||1;i/=r,s/=r;let o=innerWidth,a=innerHeight;nd.hidden=!1,Dt("#partner-arrow-icon").textContent=$n[e];let l=ds((i*.5+.5)*o,34,o-34),c=ds((-s*.5+.5)*a,70,l>o-240?a-200:a-34);nd.style.transform=`translate(${l}px, ${c}px)`}var fv=performance.now(),id=0,zm=0,pv=0,$m={x:0,y:0};hd();function Pv(n){requestAnimationFrame(Pv);let e=(n-fv)/1e3;fv=n;let t=Math.min(.05,Math.max(.001,e));U.t+=t;let i=Bl();Je.update(i,U.t,t);let s=U.mode==="play"||U.mode==="menu",r=Zt(U.role),o=!1;if(s){if(U.kind!=="solo"){let d=U.net.status.partnerOnline&&U.track.sample(Date.now(),t,SI);o=!!d,d&&(gt[r].root.position.copy(U.track.pos),gt[r].setYaw(Kh(gt[r].yaw,U.track.yaw,18,t)),su(Mn[r],U.track.pos,ut[r].h)),Mn[r].disabled=!d||U.track.mode===wt.carried;let p=St.sun;U.role==="sun"&&p.carrying&&(U.track.mode===wt.carried?(p.liftSeen=!0,p.notCarriedT=0):(!p.liftSeen&&performance.now()-p.liftT>4e3||p.liftSeen&&(p.notCarriedT+=t)>.6)&&(p.carrying=!1))}else o=!0,Mn.moon.disabled=St.moon.state==="carried";U.cooldown.ability-=t,U.cooldown.heart-=t;let a=Ai.consume("jump"),l=Ai.consume("dash");if(Ai.consume("ability")&&U.cooldown.ability<=0){U.cooldown.ability=.45;let d=U.kind==="solo"?U.active:U.role;d==="sun"&&Iv()||(wv(d),U.net.sendEvent("ability"))}if(Ai.consume("heart")&&U.cooldown.heart<=0){U.cooldown.heart=.6;let d=U.kind==="solo"?U.active:U.role;U.hold?Go(!1,!0):Ym(d)?Go(!0,!0):(Vn.hearts(gt[d].root.position,d==="sun"?16754253:11832575),qt.play("heart"),U.net.sendEvent("heart"))}if(U.hold){let d=U.kind==="solo"?U.active:U.role;Ym(d,3.2)?(U.holdHeartT-=t)<0&&(U.holdHeartT=2.6,Vn.hearts(gt[d].root.position,16744118)):Go(!1,!1)}Ai.consume("swap")&&U.kind==="solo"&&(U.active=Zt(U.active),document.body.classList.remove("sun","moon"),document.body.classList.add(U.active),Wn.toast(`Now playing ${$n[U.active]} ${Sn[U.active]}`));let c=U.kind==="solo"?Js:[U.role];for(let d of c){let p=d===U.active&&U.mode==="play";qm(St[d],p?Ai.state.move:$m,p&&a,p&&Ai.state.jumpHeld,t,p&&l)}for(let d of c){su(Mn[d],ut[d].pos,ut[d].h);let p=ut[d],y=gt[d];y.root.position.copy(p.pos);let m=St[d],g=Math.hypot(p.vel.x,p.vel.z);m.state==="free"&&m.anim===wt.wall?y.setYaw(Kh(y.yaw,Math.atan2(-m.wallNX,-m.wallNZ),14,t)):m.state==="free"&&g>.4&&y.setYaw(Kh(y.yaw,Math.atan2(p.vel.x,p.vel.z),14,t))}let h=Je.towerTop;if(h){let d=p=>p&&p.y>h.y-.15&&p.x>h.x0&&p.x<h.x1&&p.z>h.z0&&p.z<h.z1;(c.some(p=>d(ut[p].pos))||o&&U.kind!=="solo"&&d(U.track.pos))&&Je.setTowerOccupied(!0)}if(Je.story&&U.save){let d={sun:null,moon:null};for(let p of c)d[p]=ut[p].pos;U.kind!=="solo"&&o&&(d[r]=U.track.pos),Je.story({roles:c,pos:d,holding:U.hold,save:U.save,setSave:(p,y)=>U.net.setSave(p,y),caption:Ul,finish:lI},U.t)}let f=(U.kind==="solo"?U.active:U.role)==="sun"?St.sun.carrying?"Throw":Rv()?"Lift":"Shine":"Tide";f!==U.abilityLabel&&(U.abilityLabel=f,Dt("#ability-label").textContent=f);for(let d of Je.stars)if(!d.collected)for(let p of c){let y=ut[p];if(Math.abs(y.pos.x-d.pos.x)<.95&&Math.abs(y.pos.z-d.pos.z)<.95&&d.pos.y-y.pos.y>-.6&&d.pos.y-y.pos.y<1.6){d.collected=!0,Vn.sparks(d.pos.clone().setY(d.pos.y-.6),16769658,24),qt.play("star"),U.net.collectStar(d.id),Av(!0);break}}U.kind!=="solo"&&vI(n)}for(let a of Js){let l=gt[a],c=!s||U.kind==="solo"||a===U.role||o;if(l.root.visible=c,!c)continue;let h=0;if(s&&U.hold){let u=l.root.position,f=gt[Zt(a)].root.position,d=l.yaw;h=Math.cos(d)*(f.x-u.x)-Math.sin(d)*(f.z-u.z)>=0?1:-1}if(s&&(U.kind==="solo"||a===U.role)){let u=ut[a];l.animate(t,{speed:Math.hypot(u.vel.x,u.vel.z),grounded:u.grounded,vy:u.vel.y,mode:St[a].anim,hold:h})}else if(s){let u=U.track.vel;l.animate(t,{speed:Math.hypot(u.x,u.z),grounded:U.track.grounded,vy:u.y,mode:U.track.mode,hold:h})}else l.animate(t,{speed:0,grounded:!0,vy:0,mode:wt.normal})}if(MI(t),bI(o),Vn.update(t,U.t),Wo.render(t),e<.1&&(id+=e,zm++),id>2.5){let a=id/zm;pv=1/a,a>1/48&&sd<_v.length-1&&U.t>4&&!yr.has("q")&&(sd++,hd()),id=0,zm=0}sI&&(Dt("#debug").hidden=!1,Dt("#debug").textContent=`fps ${pv.toFixed(0)}  q${sd} dpr ${$s.getPixelRatio()}
delay ${Math.round(U.track.delay??0)}ms  jitter ${U.track.jitter()}ms  buf ${U.track.buf.length}
ping ${U.net?.status.ping??"-"}  partner ${U.net?.status.partnerPing??"-"}
pos ${ut[U.active].pos.toArray().map(a=>a.toFixed(1)).join(", ")}`)}requestAnimationFrame(Pv);window.__eclipse={G:U,bodies:ut,chars:gt,get world(){return Je},input:Ai,pcols:Mn,ctls:St,switchLevel:bv,setHold:Go,sim(n,e={}){let t=e.role||U.active,i=1/60,s=[],r=e.t0??Bl();for(let o=0;o<n;o++){r+=1e3/60,Je.update(r,U.t,i);for(let a of Js)su(Mn[a],ut[a].pos,ut[a].h);if(U.kind==="solo"&&(Mn.moon.disabled=St.moon.state==="carried"),qm(St[t],e.move||$m,(e.jumpAt||[]).includes(o),e.hold??!0,i,(e.dashAt||[]).includes(o)),U.kind==="solo")for(let a of Js)a!==t&&qm(St[a],$m,(e.otherJumpAt||[]).includes(o),!1,i);e.actionAt&&e.actionAt.includes(o)&&Iv(),e.every&&o%e.every===0&&s.push([+ut[t].pos.x.toFixed(2),+ut[t].pos.y.toFixed(2),+ut[t].pos.z.toFixed(2),ut[t].grounded?1:0,St[t].state[0]+St[t].anim])}return{pos:ut[t].pos.toArray().map(o=>+o.toFixed(3)),grounded:ut[t].grounded,state:St[t].state,anim:St[t].anim,trace:s}}};
