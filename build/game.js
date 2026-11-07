var tg=0,vd=1,ng=2;var Ws=1,ig=2,Vr=3,fs=0,cn=1,zn=2,Gi=0,Wr=1,ps=2,yd=3,xd=4,sg=5;var Xs=100,rg=101,og=102,ag=103,lg=104,cg=200,hg=201,ug=202,dg=203,Sd=204,Md=205,fg=206,pg=207,mg=208,gg=209,_g=210,vg=211,yg=212,xg=213,Sg=214,Wl=0,Xl=1,ql=2,Cr=3,Yl=4,$l=5,Kl=6,Jl=7,bd=0,Mg=1,bg=2,_i=0,fa=1,pa=2,ma=3,ga=4,_a=5,va=6,qs=7;var Ed=300,Ys=301,Xr=302,wc=303,Tc=304,Zl=1e3,di=1001,jl=1002,tn=1003,Eg=1004;var ya=1005;var vn=1006,Ac=1007;var Vi=1008;var Cn=1009,wd=1010,Td=1011,qr=1012,Cc=1013,si=1014,$n=1015,Kt=1016,Rc=1017,Ic=1018,$s=1020,Ad=35902,Cd=35899,Rd=1021,Id=1022,ri=1023,Ui=1026,Wi=1027,Pc=1028,Nc=1029,ms=1030,Dc=1031;var Lc=1033,xa=33776,Sa=33777,Ma=33778,ba=33779,Oc=35840,Fc=35841,Uc=35842,Bc=35843,kc=36196,zc=37492,Hc=37496,Gc=37488,Vc=37489,Ea=37490,Wc=37491,Xc=37808,qc=37809,Yc=37810,$c=37811,Kc=37812,Jc=37813,Zc=37814,jc=37815,Qc=37816,eh=37817,th=37818,nh=37819,ih=37820,sh=37821,rh=36492,oh=36494,ah=36495,lh=36283,ch=36284,wa=36285,hh=36286;var Po=2300,Ql=2301,Gl=2302,rd=2303,od=2400,ad=2401,ld=2402;var wg=3200;var uh=0,Tg=1,Xi="",_n="srgb",No="srgb-linear",Do="linear",dt="srgb";var Vl=7680;var Ag=519,Cg=512,Rg=513,Ig=514,Pd=515,Pg=516,Ng=517,Nd=518,Dd=519,Dg=35044;var Ld="300 es",qn=2e3,Rr=2001;function Hy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lg(){let n=Lo("canvas");return n.style.display="block",n}var Mm={},Ir=null;function Od(...n){let e="THREE."+n.shift();Ir?Ir("log",e,...n):console.log(e,...n)}function Og(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=Og(n);let e="THREE."+n.shift();if(Ir)Ir("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ge(...n){n=Og(n);let e="THREE."+n.shift();if(Ir)Ir("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Co(...n){let e=n.join(" ");e in Mm||(Mm[e]=!0,He(...n))}function Fg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Ug={[Wl]:Wl,[ql]:Kl,[Yl]:Yl,[Cr]:$l,[Xl]:Xl,[Kl]:ql,[Jl]:Jl,[$l]:Cr},pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Lu=Math.PI/180,ec=180/Math.PI;function Yr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function Vy(n,e){return(n%e+e)%e}function Ou(n,e,t){return(1-t)*n+t*e}function Bg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fd(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wy(n,e){if(e.constructor===Float32Array)return n;let t=Fd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Xy(n,e){if(e.constructor===Float32Array)return n;let t=Fd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Gd=class Gd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gd.prototype.isVector2=!0;var re=Gd,mi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(u!==v||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*v;p<0&&(d=-d,f=-f,m=-m,v=-v,p=-p);let g=1-a;if(p<.9995){let y=Math.acos(p),S=Math.sin(y);g=Math.sin(g*y)/S,a=Math.sin(a*y)/S,l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+v*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+v*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vd=class Vd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vd.prototype.isVector3=!0;var N=Vd,Fu=new N,bm=new mi,Wd=class Wd{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],v=s[0],p=s[3],g=s[6],y=s[1],S=s[4],x=s[7],T=s[2],w=s[5],_=s[8];return r[0]=o*v+a*y+l*T,r[3]=o*p+a*S+l*w,r[6]=o*g+a*x+l*_,r[1]=c*v+h*y+u*T,r[4]=c*p+h*S+u*w,r[7]=c*g+h*x+u*_,r[2]=d*v+f*y+m*T,r[5]=d*p+f*S+m*w,r[8]=d*g+f*x+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Co("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uu.makeScale(e,t)),this}rotate(e){return Co("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uu.makeRotation(-e)),this}translate(e,t){return Co("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wd.prototype.isMatrix3=!0;var We=Wd,Uu=new We,Em=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wm=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qy(){let n={enabled:!0,workingColorSpace:No,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=Ar(s.r),s.g=Ar(s.g),s.b=Ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?Do:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[No]:{primaries:e,whitePoint:i,transfer:Do,toXYZ:Em,fromXYZ:wm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Em,fromXYZ:wm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),n}var it=qy();function Fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fr,tc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fr===void 0&&(fr=Lo("canvas")),fr.width=e.width,fr.height=e.height;let s=fr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=fr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fi(t[i]/255)*255):t[i]=Fi(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yy=0,Pr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bu(s[o].image)):r.push(Bu(s[o]))}else r=Bu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Bu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var $y=0,ku=new N,yn=class n extends pi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=di,s=di,r=vn,o=Vi,a=ri,l=Cn,c=n.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Yr(),this.name="",this.source=new Pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ku).x}get height(){return this.source.getSize(ku).y}get depth(){return this.source.getSize(ku).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zl:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zl:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Ed;yn.DEFAULT_ANISOTROPY=1;var Xd=class Xd{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,x=(f+1)/2,T=(g+1)/2,w=(h+d)/4,_=(u+v)/4,M=(m+p)/4;return S>x&&S>T?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=w/i,r=_/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=w/s,r=M/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=_/r,s=M/r),this.set(i,s,r,t),this}let y=Math.sqrt((p-m)*(p-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xd.prototype.isVector4=!0;var At=Xd,nc=class extends pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new yn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Pr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zt=class extends nc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Oo=class extends yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ic=class extends yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ec=class Ec{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,m,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,m,v,p)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,m,v,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ec().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),o=1/pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d+v*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ky,e,Jy)}lookAt(e,t,i){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ts.crossVectors(i,Ln),ts.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ts.crossVectors(i,Ln)),ts.normalize(),_l.crossVectors(Ln,ts),s[0]=ts.x,s[4]=_l.x,s[8]=Ln.x,s[1]=ts.y,s[5]=_l.y,s[9]=Ln.y,s[2]=ts.z,s[6]=_l.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],v=i[6],p=i[10],g=i[14],y=i[3],S=i[7],x=i[11],T=i[15],w=s[0],_=s[4],M=s[8],R=s[12],A=s[1],P=s[5],O=s[9],U=s[13],I=s[2],B=s[6],q=s[10],V=s[14],ie=s[3],W=s[7],Z=s[11],K=s[15];return r[0]=o*w+a*A+l*I+c*ie,r[4]=o*_+a*P+l*B+c*W,r[8]=o*M+a*O+l*q+c*Z,r[12]=o*R+a*U+l*V+c*K,r[1]=h*w+u*A+d*I+f*ie,r[5]=h*_+u*P+d*B+f*W,r[9]=h*M+u*O+d*q+f*Z,r[13]=h*R+u*U+d*V+f*K,r[2]=m*w+v*A+p*I+g*ie,r[6]=m*_+v*P+p*B+g*W,r[10]=m*M+v*O+p*q+g*Z,r[14]=m*R+v*U+p*V+g*K,r[3]=y*w+S*A+x*I+T*ie,r[7]=y*_+S*P+x*B+T*W,r[11]=y*M+S*O+x*q+T*Z,r[15]=y*R+S*U+x*V+T*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],p=e[11],g=e[15],y=l*f-c*d,S=a*f-c*u,x=a*d-l*u,T=o*f-c*h,w=o*d-l*h,_=o*u-a*h;return t*(v*y-p*S+g*x)-i*(m*y-p*T+g*w)+s*(m*S-v*T+g*_)-r*(m*x-v*w+p*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],p=e[14],g=e[15],y=t*a-i*o,S=t*l-s*o,x=t*c-r*o,T=i*l-s*a,w=i*c-r*a,_=s*c-r*l,M=h*v-u*m,R=h*p-d*m,A=h*g-f*m,P=u*p-d*v,O=u*g-f*v,U=d*g-f*p,I=y*U-S*O+x*P+T*A-w*R+_*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(a*U-l*O+c*P)*B,e[1]=(s*O-i*U-r*P)*B,e[2]=(v*_-p*w+g*T)*B,e[3]=(d*w-u*_-f*T)*B,e[4]=(l*A-o*U-c*R)*B,e[5]=(t*U-s*A+r*R)*B,e[6]=(p*x-m*_-g*S)*B,e[7]=(h*_-d*x+f*S)*B,e[8]=(o*O-a*A+c*M)*B,e[9]=(i*A-t*O-r*M)*B,e[10]=(m*w-v*x+g*y)*B,e[11]=(u*x-h*w-f*y)*B,e[12]=(a*R-o*P-l*M)*B,e[13]=(t*P-i*R+s*M)*B,e[14]=(v*S-m*T-p*y)*B,e[15]=(h*T-u*S+d*y)*B,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,v=o*h,p=o*u,g=a*u,y=l*c,S=l*h,x=l*u,T=i.x,w=i.y,_=i.z;return s[0]=(1-(v+g))*T,s[1]=(f+x)*T,s[2]=(m-S)*T,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(d+g))*w,s[6]=(p+y)*w,s[7]=0,s[8]=(m+S)*_,s[9]=(p-y)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=pr.set(s[0],s[1],s[2]).length(),a=pr.set(s[4],s[5],s[6]).length(),l=pr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ei.copy(this);let c=1/o,h=1/a,u=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,t.setFromRotationMatrix(ei),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=qn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===qn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Rr)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=qn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===qn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Rr)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ec.prototype.isMatrix4=!0;var vt=Ec,pr=new N,ei=new vt,Ky=new N(0,0,0),Jy=new N(1,1,1),ts=new N,_l=new N,Ln=new N,Tm=new vt,Am=new mi,Bi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var Fo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zy=0,Cm=new N,mr=new mi,Pi=new vt,vl=new N,So=new N,jy=new N,Qy=new mi,Rm=new N(1,0,0),Im=new N(0,1,0),Pm=new N(0,0,1),Nm={type:"added"},ex={type:"removed"},gr={type:"childadded",child:null},zu={type:"childremoved",child:null},Wt=class n extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new Bi,i=new mi,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new We}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(Rm,e)}rotateY(e){return this.rotateOnAxis(Im,e)}rotateZ(e){return this.rotateOnAxis(Pm,e)}translateOnAxis(e,t){return Cm.copy(e).applyQuaternion(this.quaternion),this.position.add(Cm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rm,e)}translateY(e){return this.translateOnAxis(Im,e)}translateZ(e){return this.translateOnAxis(Pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vl.copy(e):vl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(So,vl,this.up):Pi.lookAt(vl,So,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(Pi),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nm),gr.child=e,this.dispatchEvent(gr),gr.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ex),zu.child=e,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nm),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,jy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,Qy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Wt.DEFAULT_UP=new N(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dt=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},tx={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},yl={h:0,s:0,l:0};function Hu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=Vy(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Hu(o,r,e+1/3),this.g=Hu(o,r,e),this.b=Hu(o,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=_n){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){let i=kg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return it.workingToColorSpace(fn.copy(this),e),Math.round(st(fn.r*255,0,255))*65536+Math.round(st(fn.g*255,0,255))*256+Math.round(st(fn.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(fn.copy(this),t);let i=fn.r,s=fn.g,r=fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=_n){it.workingToColorSpace(fn.copy(this),e);let t=fn.r,i=fn.g,s=fn.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(yl);let i=Ou(ns.h,yl.h,t),s=Ou(ns.s,yl.s,t),r=Ou(ns.l,yl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new Pe;Pe.NAMES=kg;var Uo=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bo=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ti=new N,Ni=new N,Gu=new N,Di=new N,_r=new N,vr=new N,Dm=new N,Vu=new N,Wu=new N,Xu=new N,qu=new At,Yu=new At,$u=new At,os=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ti.subVectors(s,t),Ni.subVectors(i,t),Gu.subVectors(e,t);let o=ti.dot(ti),a=ti.dot(Ni),l=ti.dot(Gu),c=Ni.dot(Ni),h=Ni.dot(Gu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return qu.setScalar(0),Yu.setScalar(0),$u.setScalar(0),qu.fromBufferAttribute(e,t),Yu.fromBufferAttribute(e,i),$u.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(qu,r.x),o.addScaledVector(Yu,r.y),o.addScaledVector($u,r.z),o}static isFrontFacing(e,t,i,s){return ti.subVectors(i,t),Ni.subVectors(e,t),ti.cross(Ni).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ti.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;_r.subVectors(s,i),vr.subVectors(r,i),Vu.subVectors(e,i);let l=_r.dot(Vu),c=vr.dot(Vu);if(l<=0&&c<=0)return t.copy(i);Wu.subVectors(e,s);let h=_r.dot(Wu),u=vr.dot(Wu);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(_r,o);Xu.subVectors(e,r);let f=_r.dot(Xu),m=vr.dot(Xu);if(m>=0&&f<=m)return t.copy(r);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(vr,a);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Dm.subVectors(r,s),a=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Dm,a);let g=1/(p+v+d);return o=v*g,a=d*g,t.copy(i).addScaledVector(_r,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gi=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xl.copy(i.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Sl.subVectors(this.max,Mo),yr.subVectors(e.a,Mo),xr.subVectors(e.b,Mo),Sr.subVectors(e.c,Mo),is.subVectors(xr,yr),ss.subVectors(Sr,xr),Ds.subVectors(yr,Sr);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Ds.z,Ds.y,is.z,0,-is.x,ss.z,0,-ss.x,Ds.z,0,-Ds.x,-is.y,is.x,0,-ss.y,ss.x,0,-Ds.y,Ds.x,0];return!Ku(t,yr,xr,Sr,Sl)||(t=[1,0,0,0,1,0,0,0,1],!Ku(t,yr,xr,Sr,Sl))?!1:(Ml.crossVectors(is,ss),t=[Ml.x,Ml.y,Ml.z],Ku(t,yr,xr,Sr,Sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Li=[new N,new N,new N,new N,new N,new N,new N,new N],ni=new N,xl=new gi,yr=new N,xr=new N,Sr=new N,is=new N,ss=new N,Ds=new N,Mo=new N,Sl=new N,Ml=new N,Ls=new N;function Ku(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ls.fromArray(n,r);let a=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),l=e.dot(Ls),c=t.dot(Ls),h=i.dot(Ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Vt=new N,bl=new re,nx=0,Fn=class extends pi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Dg,this.updateRanges=[],this.gpuType=$n,this.version=0,this._normalizationScale=e!==void 0?Fd(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wy(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xy(e,this.array)}};var ko=class extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var zo=class extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var $e=class extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}},ix=new gi,bo=new N,Ju=new N,ki=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ix.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);let t=bo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(bo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Ju)),this.expandByPoint(bo.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sx=0,Xn=new vt,Zu=new Wt,Mr=new N,On=new gi,Eo=new gi,en=new N,Bt=class n extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hy(e)?zo:ko)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $e(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(On.min,Eo.min),On.expandByPoint(en),en.addVectors(On.max,Eo.max),On.expandByPoint(en)):(On.expandByPoint(Eo.min),On.expandByPoint(Eo.max))}On.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(Mr.fromBufferAttribute(e,c),en.add(Mr)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let R=0;R<i.count;R++)a[R]=new N,l[R]=new N;let h=new N,u=new N,d=new N,f=new re,m=new re,v=new re,p=new N,g=new N;function y(R,A,P){c[R]=c[A]=c[P]=1,h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,P),f.fromBufferAttribute(r,R),m.fromBufferAttribute(r,A),v.fromBufferAttribute(r,P),u.sub(h),d.sub(h),m.sub(f),v.sub(f);let O=1/(m.x*v.y-v.x*m.y);isFinite(O)&&(p.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(O),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(O),a[R].add(p),a[A].add(p),a[P].add(p),l[R].add(g),l[A].add(g),l[P].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,A=S.length;R<A;++R){let P=S[R],O=P.start,U=P.count;for(let I=O,B=O+U;I<B;I+=3)y(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let x=new N,T=new N,w=new N,_=new N;function M(R){w.fromBufferAttribute(s,R),_.copy(w);let A=a[R];x.copy(A),x.sub(w.multiplyScalar(w.dot(A))).normalize(),T.crossVectors(_,A);let O=T.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,O)}for(let R=0,A=i.count;R<A;++R)c[R]&&M(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new Fn(d,h,u)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ju=new N,rx=new N,ox=new We,ii=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ju.subVectors(i,t).cross(rx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ju),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ox.getNormalMatrix(e),s=this.coplanarPoint(ju).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ax=0,zi=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=Wr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vl,this.stencilZFail=Vl,this.stencilZPass=Vl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ii().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new re().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Oi=new N,Qu=new N,El=new N,wl=new N,Ho=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Qu.copy(e).add(t).multiplyScalar(.5),El.copy(t).sub(e).normalize(),wl.copy(this.origin).sub(Qu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(El),a=wl.dot(this.direction),l=-wl.dot(El),c=wl.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qu).addScaledVector(El,d),f}intersectSphere(e,t){if(e.radius<0)return null;Oi.subVectors(e.center,this.origin);let i=Oi.dot(this.direction),s=Oi.dot(Oi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,m=t.x-o.x,v=t.y-o.y,p=t.z-o.z,g=i.x-o.x,y=i.y-o.y,S=i.z-o.z,x=Math.abs(l),T=Math.abs(c),w=Math.abs(h),_,M,R,A,P,O,U,I,B,q,V,ie;if(x>=T&&x>=w?(R=l,O=u,B=m,ie=g,l>=0?(_=c,M=h,A=d,P=f,U=v,I=p,q=y,V=S):(_=h,M=c,A=f,P=d,U=p,I=v,q=S,V=y)):T>=w?(R=c,O=d,B=v,ie=y,c>=0?(_=h,M=l,A=f,P=u,U=p,I=m,q=S,V=g):(_=l,M=h,A=u,P=f,U=m,I=p,q=g,V=S)):(R=h,O=f,B=p,ie=S,h>=0?(_=l,M=c,A=u,P=d,U=m,I=v,q=g,V=y):(_=c,M=l,A=d,P=u,U=v,I=m,q=y,V=g)),R===0)return null;let W=_/R,Z=M/R,K=1/R,Te=A-W*O,Ne=P-Z*O,$=U-W*B,he=I-Z*B,Ae=q-W*ie,Le=V-Z*ie,Me=Ae*he-Le*$,Ue=Te*Le-Ne*Ae,yt=$*Ne-he*Te;if(s){if(Me<0||Ue<0||yt<0)return null}else if((Me<0||Ue<0||yt<0)&&(Me>0||Ue>0||yt>0))return null;let Be=Me+Ue+yt;if(Be===0)return null;let Ke=K*(Me*O+Ue*B+yt*ie);return(Be>0?Ke<0:Ke>0)?null:this.at(Ke/Be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Lm=new vt,Os=new Ho,Tl=new ki,Om=new N,Al=new N,Cl=new N,Rl=new N,ed=new N,Il=new N,Fm=new N,Pl=new N,Tt=class extends Wt{constructor(e=new Bt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Il.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ed.fromBufferAttribute(u,e),o?Il.addScaledVector(ed,h):Il.addScaledVector(ed.sub(t),h))}t.add(Il)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(Tl.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Tl,Om)===null||Os.origin.distanceToSquared(Om)>(e.far-e.near)**2))&&(Lm.copy(r).invert(),Os.copy(e.ray).applyMatrix4(Lm),!(i.boundingBox!==null&&Os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let p=d[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=y,T=S;x<T;x+=3){let w=a.getX(x),_=a.getX(x+1),M=a.getX(x+2);s=Nl(this,g,e,i,c,h,u,w,_,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){let y=a.getX(p),S=a.getX(p+1),x=a.getX(p+2);s=Nl(this,o,e,i,c,h,u,y,S,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let p=d[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=y,T=S;x<T;x+=3){let w=x,_=x+1,M=x+2;s=Nl(this,g,e,i,c,h,u,w,_,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){let y=p,S=p+1,x=p+2;s=Nl(this,o,e,i,c,h,u,y,S,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function lx(n,e,t,i,s,r,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===fs,a),l===null)return null;Pl.copy(a),Pl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Pl);return c<t.near||c>t.far?null:{distance:c,point:Pl.clone(),object:n}}function Nl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Al),n.getVertexPosition(l,Cl),n.getVertexPosition(c,Rl);let h=lx(n,e,t,i,Al,Cl,Rl,Fm);if(h){let u=new N;os.getBarycoord(Fm,Al,Cl,Rl,u),s&&(h.uv=os.getInterpolatedAttribute(s,a,l,c,u,new re)),r&&(h.uv1=os.getInterpolatedAttribute(r,a,l,c,u,new re)),o&&(h.normal=os.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};os.getNormal(Al,Cl,Rl,d.normal),h.face=d,h.barycoord=u}return h}var Go=class extends yn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=tn,h=tn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vo=class extends Fn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},br=new vt,Um=new vt,Dl=[],Bm=new gi,cx=new vt,wo=new Tt,To=new ki,Us=class extends Tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,cx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,br),Bm.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(Bm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,br),To.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(To)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(wo.geometry=this.geometry,wo.material=this.material,wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),To.copy(this.boundingSphere),To.applyMatrix4(i),e.ray.intersectsSphere(To)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,br),Um.multiplyMatrices(i,br),wo.matrixWorld=Um,wo.raycast(e,Dl);for(let o=0,a=Dl.length;o<a;o++){let l=Dl[o];l.instanceId=r,l.object=this,t.push(l)}Dl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Go(new Float32Array(s*this.count),s,this.count,Pc,$n));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fs=new ki,hx=new re(.5,.5),Ll=new N,as=class{constructor(e=new ii,t=new ii,i=new ii,s=new ii,r=new ii,o=new ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],p=r[10],g=r[11],y=r[12],S=r[13],x=r[14],T=r[15];if(s[0].setComponents(c-o,f-h,g-m,T-y).normalize(),s[1].setComponents(c+o,f+h,g+m,T+y).normalize(),s[2].setComponents(c+a,f+u,g+v,T+S).normalize(),s[3].setComponents(c-a,f-u,g-v,T-S).normalize(),i)s[4].setComponents(l,d,p,x).normalize(),s[5].setComponents(c-l,f-d,g-p,T-x).normalize();else if(s[4].setComponents(c-l,f-d,g-p,T-x).normalize(),t===qn)s[5].setComponents(c+l,f+d,g+p,T+x).normalize();else if(t===Rr)s[5].setComponents(l,d,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);let t=hx.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ll.x=s.normal.x>0?e.max.x:e.min.x,Ll.y=s.normal.y>0?e.max.y:e.min.y,Ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},km=new vt,sc=class n{constructor(){this.coordinateSystem=qn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];km.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new as),i[s].setFromProjectionMatrix(km,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new as),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Dr=class extends zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zm=new vt,cd=new Ho,Ol=new ki,Fl=new N,Wo=class extends Wt{constructor(e=new Bt,t=new Dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(s),Ol.radius+=r,e.ray.intersectsSphere(Ol)===!1)return;zm.copy(s).invert(),cd.copy(e.ray).applyMatrix4(zm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,v=f;m<v;m++){let p=c.getX(m);Fl.fromBufferAttribute(u,p),Hm(Fl,p,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,v=f;m<v;m++)Fl.fromBufferAttribute(u,m),Hm(Fl,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hm(n,e,t,i,s,r,o){let a=cd.distanceSqToPoint(n);if(a<t){let l=new N;cd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Xo=class extends yn{constructor(e=[],t=Ys,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bs=class extends yn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends yn{constructor(e,t,i=si,s,r,o,a=tn,l=tn,c,h=Ui,u=1){if(h!==Ui&&h!==Wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},qo=class extends Hi{constructor(e,t=si,i=Ys,s,r,o=tn,a=tn,l,c=Ui){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Yo=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ls=class n extends Bt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function m(v,p,g,y,S,x,T,w,_,M,R){let A=x/_,P=T/M,O=x/2,U=T/2,I=w/2,B=_+1,q=M+1,V=0,ie=0,W=new N;for(let Z=0;Z<q;Z++){let K=Z*P-U;for(let Te=0;Te<B;Te++){let Ne=Te*A-O;W[v]=Ne*y,W[p]=K*S,W[g]=I,c.push(W.x,W.y,W.z),W[v]=0,W[p]=0,W[g]=w>0?1:-1,h.push(W.x,W.y,W.z),u.push(Te/_),u.push(1-Z/M),V+=1}}for(let Z=0;Z<M;Z++)for(let K=0;K<_;K++){let Te=d+K+B*Z,Ne=d+K+B*(Z+1),$=d+(K+1)+B*(Z+1),he=d+(K+1)+B*Z;l.push(Te,Ne,he),l.push(Ne,$,he),ie+=6}a.addGroup(f,ie,R),f+=ie,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},$o=class n extends Bt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=i*2+r,v=s+1,p=new N,g=new N;for(let y=0;y<=m;y++){let S=0,x=0,T=0,w=0;if(y<=i){let R=y/i,A=R*Math.PI/2;x=-h-e*Math.cos(A),T=e*Math.sin(A),w=-e*Math.cos(A),S=R*u}else if(y<=i+r){let R=(y-i)/r;x=-h+R*t,T=e,w=0,S=u+R*d}else{let R=(y-i-r)/i,A=R*Math.PI/2;x=h+e*Math.sin(A),T=e*Math.cos(A),w=e*Math.sin(A),S=u+d+R*u}let _=Math.max(0,Math.min(1,S/f)),M=0;y===0?M=.5/s:y===m&&(M=-.5/s);for(let R=0;R<=s;R++){let A=R/s,P=A*Math.PI*2,O=Math.sin(P),U=Math.cos(P);g.x=-T*U,g.y=x,g.z=T*O,a.push(g.x,g.y,g.z),p.set(-T*U,w,T*O),p.normalize(),l.push(p.x,p.y,p.z),c.push(A+M,_)}if(y>0){let R=(y-1)*v;for(let A=0;A<s;A++){let P=R+A,O=R+A+1,U=y*v+A,I=y*v+A+1;o.push(P,O,U),o.push(O,I,U)}}}this.setIndex(o),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Yn=class n extends Bt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,v=[],p=i/2,g=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function y(){let x=new N,T=new N,w=0,_=(t-e)/i;for(let M=0;M<=r;M++){let R=[],A=M/r,P=A*(t-e)+e;for(let O=0;O<=s;O++){let U=O/s,I=U*l+a,B=Math.sin(I),q=Math.cos(I);T.x=P*B,T.y=-A*i+p,T.z=P*q,u.push(T.x,T.y,T.z),x.set(B,_,q).normalize(),d.push(x.x,x.y,x.z),f.push(U,1-A),R.push(m++)}v.push(R)}for(let M=0;M<s;M++)for(let R=0;R<r;R++){let A=v[R][M],P=v[R+1][M],O=v[R+1][M+1],U=v[R][M+1];(e>0||R!==0)&&(h.push(A,P,U),w+=3),(t>0||R!==r-1)&&(h.push(P,O,U),w+=3)}c.addGroup(g,w,0),g+=w}function S(x){let T=m,w=new re,_=new N,M=0,R=x===!0?e:t,A=x===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*A,0),d.push(0,A,0),f.push(.5,.5),m++;let P=m;for(let O=0;O<=s;O++){let I=O/s*l+a,B=Math.cos(I),q=Math.sin(I);_.x=R*q,_.y=p*A,_.z=R*B,u.push(_.x,_.y,_.z),d.push(0,A,0),w.x=B*.5+.5,w.y=q*.5*A+.5,f.push(w.x,w.y),m++}for(let O=0;O<s;O++){let U=T+O,I=P+O;x===!0?h.push(I,I+1,U):h.push(I+1,I,U),M+=3}c.addGroup(g,M,x===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Un=class n extends Yn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Lr=class n extends Bt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new N,x=new N,T=new N;for(let w=0;w<t.length;w+=3)f(t[w+0],S),f(t[w+1],x),f(t[w+2],T),l(S,x,T,y)}function l(y,S,x,T){let w=T+1,_=[];for(let M=0;M<=w;M++){_[M]=[];let R=y.clone().lerp(x,M/w),A=S.clone().lerp(x,M/w),P=w-M;for(let O=0;O<=P;O++)O===0&&M===w?_[M][O]=R:_[M][O]=R.clone().lerp(A,O/P)}for(let M=0;M<w;M++)for(let R=0;R<2*(w-M)-1;R++){let A=Math.floor(R/2);R%2===0?(d(_[M][A+1]),d(_[M+1][A]),d(_[M][A])):(d(_[M][A+1]),d(_[M+1][A+1]),d(_[M+1][A]))}}function c(y){let S=new N;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(y),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){let y=new N;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let x=p(y)/2/Math.PI+.5,T=g(y)/Math.PI+.5;o.push(x,1-T)}m(),u()}function u(){for(let y=0;y<o.length;y+=6){let S=o[y+0],x=o[y+2],T=o[y+4],w=Math.max(S,x,T),_=Math.min(S,x,T);w>.9&&_<.1&&(S<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,S){let x=y*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function m(){let y=new N,S=new N,x=new N,T=new N,w=new re,_=new re,M=new re;for(let R=0,A=0;R<r.length;R+=9,A+=6){y.set(r[R+0],r[R+1],r[R+2]),S.set(r[R+3],r[R+4],r[R+5]),x.set(r[R+6],r[R+7],r[R+8]),w.set(o[A+0],o[A+1]),_.set(o[A+2],o[A+3]),M.set(o[A+4],o[A+5]),T.copy(y).add(S).add(x).divideScalar(3);let P=p(T);v(w,A+0,y,P),v(_,A+2,S,P),v(M,A+4,x,P)}}function v(y,S,x,T){T<0&&y.x===1&&(o[S]=y.x-1),x.x===0&&x.z===0&&(o[S]=T/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Or=class n extends Lr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new N,s=[],r=[],o=[],a=new N,l=new vt;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(st(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(st(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Fr=class extends Bn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rc=class extends Fr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ud(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Gm=new N,Vm=new N,td=new Ud,nd=new Ud,id=new Ud,oc=class extends Bn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new N){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Vm.subVectors(s[0],s[1]).add(s[0]),c=Vm);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Gm.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Gm),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),td.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,v,p),nd.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,v,p),id.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,v,p)}else this.curveType==="catmullrom"&&(td.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),nd.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),id.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(td.calc(l),nd.calc(l),id.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wm(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function ux(n,e){let t=1-n;return t*t*e}function dx(n,e){return 2*(1-n)*n*e}function fx(n,e){return n*n*e}function Ro(n,e,t,i){return ux(n,e)+dx(n,t)+fx(n,i)}function px(n,e){let t=1-n;return t*t*t*e}function mx(n,e){let t=1-n;return 3*t*t*n*e}function gx(n,e){return 3*(1-n)*n*n*e}function _x(n,e){return n*n*n*e}function Io(n,e,t,i,s){return px(n,e)+mx(n,t)+gx(n,i)+_x(n,s)}var Ko=class extends Bn{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Io(e,s.x,r.x,o.x,a.x),Io(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ac=class extends Bn{constructor(e=new N,t=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new N){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Io(e,s.x,r.x,o.x,a.x),Io(e,s.y,r.y,o.y,a.y),Io(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jo=class extends Bn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lc=class extends Bn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zo=class extends Bn{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ro(e,s.x,r.x,o.x),Ro(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cc=class extends Bn{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ro(e,s.x,r.x,o.x),Ro(e,s.y,r.y,o.y),Ro(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Wm(a,l.x,c.x,h.x,u.x),Wm(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},hd=Object.freeze({__proto__:null,ArcCurve:rc,CatmullRomCurve3:oc,CubicBezierCurve:Ko,CubicBezierCurve3:ac,EllipseCurve:Fr,LineCurve:Jo,LineCurve3:lc,QuadraticBezierCurve:Zo,QuadraticBezierCurve3:cc,SplineCurve:jo}),hc=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new hd[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Qo=class extends hc{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Jo(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Zo(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Ko(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new jo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Fr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},cs=class extends Qo{constructor(e){super(e),this.uuid=Yr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Qo().fromJSON(s))}return this}};function vx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=zg(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=bx(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,u=l;for(let d=t;d<s;d+=t){let f=n[d],m=n[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ea(r,o,t,a,l,c,0),o}function zg(n,e,t,i,s){let r;if(s===Lx(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Xm(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Xm(o/i|0,n[o],n[o+1],r);return r&&Ur(r,r.next)&&(na(r),r=r.next),r}function ks(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ur(t,t.next)||Nt(t.prev,t,t.next)===0)){if(na(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ea(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Cx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?xx(n,i,s,r):yx(n)){e.push(l.i,n.i,c.i),na(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Sx(ks(n),e),ea(n,e,t,i,s,r,2)):o===2&&Mx(n,e,t,i,s,r):ea(ks(n),e,t,i,s,r,1);break}}}function yx(n){let e=n.prev,t=n,i=n.next;if(Nt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Ao(s,a,r,l,o,c,m.x,m.y)&&Nt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function xx(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Nt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),v=Math.max(a,l,c),p=Math.max(h,u,d),g=ud(f,m,e,t,i),y=ud(v,p,e,t,i),S=n.prevZ,x=n.nextZ;for(;S&&S.z>=g&&x&&x.z<=y;){if(S.x>=f&&S.x<=v&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Ao(a,h,l,u,c,d,S.x,S.y)&&Nt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=v&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Ao(a,h,l,u,c,d,x.x,x.y)&&Nt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=v&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Ao(a,h,l,u,c,d,S.x,S.y)&&Nt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Ao(a,h,l,u,c,d,x.x,x.y)&&Nt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Sx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Ur(i,s)&&Gg(i,t,t.next,s)&&ta(i,s)&&ta(s,i)&&(e.push(i.i,t.i,s.i),na(t),na(t.next),t=n=s),t=t.next}while(t!==n);return ks(t)}function Mx(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Px(o,a)){let l=Vg(o,a);o=ks(o,o.next),l=ks(l,l.next),ea(o,e,t,i,s,r,0),ea(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function bx(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=zg(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Ix(c))}s.sort(Ex);for(let r=0;r<s.length;r++)t=wx(s[r],t);return t}function Ex(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function wx(n,e){let t=Tx(n,e);if(!t)return e;let i=Vg(t,n);return ks(i,i.next),ks(t,t.next)}function Tx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Ur(n,t))return t;do{if(Ur(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Hg(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);ta(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Ax(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Ax(n,e){return Nt(n.prev,n,e.prev)<0&&Nt(e.next,n,n.next)<0}function Cx(n,e,t,i){let s=n;do s.z===0&&(s.z=ud(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Rx(s)}function Rx(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function ud(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ix(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Hg(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Ao(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Hg(n,e,t,i,s,r,o,a)}function Px(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Nx(n,e)&&(ta(n,e)&&ta(e,n)&&Dx(n,e)&&(Nt(n.prev,n,e.prev)||Nt(n,e.prev,e))||Ur(n,e)&&Nt(n.prev,n,n.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ur(n,e){return n.x===e.x&&n.y===e.y}function Gg(n,e,t,i){let s=Bl(Nt(n,e,t)),r=Bl(Nt(n,e,i)),o=Bl(Nt(t,i,n)),a=Bl(Nt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ul(n,t,e)||r===0&&Ul(n,i,e)||o===0&&Ul(t,n,i)||a===0&&Ul(t,e,i))}function Ul(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Bl(n){return n>0?1:n<0?-1:0}function Nx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Gg(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ta(n,e){return Nt(n.prev,n,n.next)<0?Nt(n,e,n.next)>=0&&Nt(n,n.prev,e)>=0:Nt(n,e,n.prev)<0||Nt(n,n.next,e)<0}function Dx(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Vg(n,e){let t=dd(n.i,n.x,n.y),i=dd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Xm(n,e,t,i){let s=dd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function na(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function dd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lx(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var fd=class{static triangulate(e,t,i=2){return vx(e,t,i)}},fi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];qm(e),Ym(i,e);let o=e.length;t.forEach(qm);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Ym(i,t[l]);let a=fd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function qm(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ym(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Br=class n extends Bt{constructor(e=new cs([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new $e(s,3)),this.setAttribute("uv",new $e(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Ox,S,x=!1,T,w,_,M;if(g){S=g.getSpacedPoints(h),x=!0,d=!1;let k=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,k),w=new N,_=new N,M=new N}d||(p=0,f=0,m=0,v=0);let R=a.extractPoints(c),A=R.shape,P=R.holes;if(!fi.isClockWise(A)){A=A.reverse();for(let k=0,J=P.length;k<J;k++){let se=P[k];fi.isClockWise(se)&&(P[k]=se.reverse())}}function U(k){let se=10000000000000001e-36,ue=k[0];for(let fe=1;fe<=k.length;fe++){let Xe=fe%k.length,De=k[Xe],Ze=De.x-ue.x,et=De.y-ue.y,ct=Ze*Ze+et*et,F=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(ue.x),Math.abs(ue.y)),Ht=se*F*F;if(ct<=Ht){k.splice(Xe,1),fe--;continue}ue=De}}U(A),P.forEach(U);let I=P.length,B=A;for(let k=0;k<I;k++){let J=P[k];A=A.concat(J)}function q(k,J,se){return J||Ge("ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(J,se)}let V=A.length;function ie(k,J,se){let ue,fe,Xe,De=k.x-J.x,Ze=k.y-J.y,et=se.x-k.x,ct=se.y-k.y,F=De*De+Ze*Ze,Ht=De*ct-Ze*et;if(Math.abs(Ht)>Number.EPSILON){let nt=Math.sqrt(F),xt=Math.sqrt(et*et+ct*ct),ye=J.x-Ze/nt,Ut=J.y+De/nt,ze=se.x-ct/xt,Ve=se.y+et/xt,C=((ze-ye)*ct-(Ve-Ut)*et)/(De*ct-Ze*et);ue=ye+De*C-k.x,fe=Ut+Ze*C-k.y;let b=ue*ue+fe*fe;if(b<=2)return new re(ue,fe);Xe=Math.sqrt(b/2)}else{let nt=!1;De>Number.EPSILON?et>Number.EPSILON&&(nt=!0):De<-Number.EPSILON?et<-Number.EPSILON&&(nt=!0):Math.sign(Ze)===Math.sign(ct)&&(nt=!0),nt?(ue=-Ze,fe=De,Xe=Math.sqrt(F)):(ue=De,fe=Ze,Xe=Math.sqrt(F/2))}return new re(ue/Xe,fe/Xe)}let W=[];for(let k=0,J=B.length,se=J-1,ue=k+1;k<J;k++,se++,ue++)se===J&&(se=0),ue===J&&(ue=0),W[k]=ie(B[k],B[se],B[ue]);let Z=[],K,Te=W.concat();for(let k=0,J=I;k<J;k++){let se=P[k];K=[];for(let ue=0,fe=se.length,Xe=fe-1,De=ue+1;ue<fe;ue++,Xe++,De++)Xe===fe&&(Xe=0),De===fe&&(De=0),K[ue]=ie(se[ue],se[Xe],se[De]);Z.push(K),Te=Te.concat(K)}let Ne;if(p===0)Ne=fi.triangulateShape(B,P);else{let k=[],J=[];for(let se=0;se<p;se++){let ue=se/p,fe=f*Math.cos(ue*Math.PI/2),Xe=m*Math.sin(ue*Math.PI/2)+v;for(let De=0,Ze=B.length;De<Ze;De++){let et=q(B[De],W[De],Xe);Ue(et.x,et.y,-fe),ue===0&&k.push(et)}for(let De=0,Ze=I;De<Ze;De++){let et=P[De];K=Z[De];let ct=[];for(let F=0,Ht=et.length;F<Ht;F++){let nt=q(et[F],K[F],Xe);Ue(nt.x,nt.y,-fe),ue===0&&ct.push(nt)}ue===0&&J.push(ct)}}Ne=fi.triangulateShape(k,J)}let $=Ne.length,he=m+v;for(let k=0;k<V;k++){let J=d?q(A[k],Te[k],he):A[k];x?(_.copy(T.normals[0]).multiplyScalar(J.x),w.copy(T.binormals[0]).multiplyScalar(J.y),M.copy(S[0]).add(_).add(w),Ue(M.x,M.y,M.z)):Ue(J.x,J.y,0)}for(let k=1;k<=h;k++)for(let J=0;J<V;J++){let se=d?q(A[J],Te[J],he):A[J];x?(_.copy(T.normals[k]).multiplyScalar(se.x),w.copy(T.binormals[k]).multiplyScalar(se.y),M.copy(S[k]).add(_).add(w),Ue(M.x,M.y,M.z)):Ue(se.x,se.y,u/h*k)}for(let k=p-1;k>=0;k--){let J=k/p,se=f*Math.cos(J*Math.PI/2),ue=m*Math.sin(J*Math.PI/2)+v;for(let fe=0,Xe=B.length;fe<Xe;fe++){let De=q(B[fe],W[fe],ue);Ue(De.x,De.y,u+se)}for(let fe=0,Xe=P.length;fe<Xe;fe++){let De=P[fe];K=Z[fe];for(let Ze=0,et=De.length;Ze<et;Ze++){let ct=q(De[Ze],K[Ze],ue);x?Ue(ct.x,ct.y+S[h-1].y,S[h-1].x+se):Ue(ct.x,ct.y,u+se)}}}Ae(),Le();function Ae(){let k=s.length/3;if(d){let J=0,se=V*J;for(let ue=0;ue<$;ue++){let fe=Ne[ue];yt(fe[2]+se,fe[1]+se,fe[0]+se)}J=h+p*2,se=V*J;for(let ue=0;ue<$;ue++){let fe=Ne[ue];yt(fe[0]+se,fe[1]+se,fe[2]+se)}}else{for(let J=0;J<$;J++){let se=Ne[J];yt(se[2],se[1],se[0])}for(let J=0;J<$;J++){let se=Ne[J];yt(se[0]+V*h,se[1]+V*h,se[2]+V*h)}}i.addGroup(k,s.length/3-k,0)}function Le(){let k=s.length/3,J=0;Me(B,J),J+=B.length;for(let se=0,ue=P.length;se<ue;se++){let fe=P[se];Me(fe,J),J+=fe.length}i.addGroup(k,s.length/3-k,1)}function Me(k,J){let se=k.length;for(;--se>=0;){let ue=se,fe=se-1;fe<0&&(fe=k.length-1);for(let Xe=0,De=h+p*2;Xe<De;Xe++){let Ze=V*Xe,et=V*(Xe+1),ct=J+ue+Ze,F=J+fe+Ze,Ht=J+fe+et,nt=J+ue+et;Be(ct,F,Ht,nt)}}}function Ue(k,J,se){l.push(k),l.push(J),l.push(se)}function yt(k,J,se){Ke(k),Ke(J),Ke(se);let ue=s.length/3,fe=y.generateTopUV(i,s,ue-3,ue-2,ue-1);oe(fe[0]),oe(fe[1]),oe(fe[2])}function Be(k,J,se,ue){Ke(k),Ke(J),Ke(ue),Ke(J),Ke(se),Ke(ue);let fe=s.length/3,Xe=y.generateSideWallUV(i,s,fe-6,fe-3,fe-2,fe-1);oe(Xe[0]),oe(Xe[1]),oe(Xe[3]),oe(Xe[1]),oe(Xe[2]),oe(Xe[3])}function Ke(k){s.push(l[k*3+0]),s.push(l[k*3+1]),s.push(l[k*3+2])}function oe(k){r.push(k.x),r.push(k.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Fx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new hd[s.type]().fromJSON(s)),new n(i,e.options)}},Ox={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],v=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-u),new re(d,1-m),new re(v,1-g)]:[new re(a,1-l),new re(h,1-u),new re(f,1-m),new re(p,1-g)]}};function Fx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ia=class n extends Lr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},kr=class n extends Bt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=st(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new N,d=new re,f=new N,m=new N,v=new N,p=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-p,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:p=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let y=0;y<=t;y++){let S=i+y*h*s,x=Math.sin(S),T=Math.cos(S);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*x,u.y=e[w].y,u.z=e[w].x*T,o.push(u.x,u.y,u.z),d.x=y/t,d.y=w/(e.length-1),a.push(d.x,d.y);let _=l[3*w+0]*x,M=l[3*w+1],R=l[3*w+0]*T;c.push(_,M,R)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){let x=S+y*e.length,T=x,w=x+e.length,_=x+e.length+1,M=x+1;r.push(T,w,M),r.push(_,M,w)}this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("uv",new $e(a,2)),this.setAttribute("normal",new $e(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},sa=class n extends Lr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},zs=class n extends Bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],v=[],p=[];for(let g=0;g<h;g++){let y=g*d-o;for(let S=0;S<c;S++){let x=S*u-r;m.push(x,-y,0),v.push(0,0,1),p.push(S/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let S=y+c*g,x=y+c*(g+1),T=y+1+c*(g+1),w=y+1+c*g;f.push(S,x,w),f.push(x,T,w)}this.setIndex(f),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ra=class n extends Bt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new N,m=new re;for(let v=0;v<=s;v++){for(let p=0;p<=i;p++){let g=r+p/i*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<s;v++){let p=v*(i+1);for(let g=0;g<i;g++){let y=g+p,S=y,x=y+i+1,T=y+i+2,w=y+1;a.push(S,x,w),a.push(x,T,w)}}this.setIndex(a),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},oa=class n extends Bt{constructor(e=new cs([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new $e(s,3)),this.setAttribute("normal",new $e(r,3)),this.setAttribute("uv",new $e(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;fi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){let y=m[p];fi.isClockWise(y)===!0&&(m[p]=y.reverse())}let v=fi.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){let y=m[p];f=f.concat(y)}for(let p=0,g=f.length;p<g;p++){let y=f[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,g=v.length;p<g;p++){let y=v[p],S=y[0]+u,x=y[1]+u,T=y[2]+u;i.push(S,x,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ux(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function Ux(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var xn=class n extends Bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,d=new N,f=[],m=[],v=[],p=[];for(let g=0;g<=i;g++){let y=[],S=g/i,x=o+S*a,T=e*Math.cos(x),w=Math.sqrt(e*e-T*T),_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){let R=M/t,A=s+R*r;u.x=-w*Math.cos(A),u.y=T,u.z=w*Math.sin(A),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(R+_,1-S),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let S=h[g][y+1],x=h[g][y],T=h[g+1][y],w=h[g+1][y+1];(g!==0||o>0)&&f.push(S,x,w),(g!==i-1||l<Math.PI)&&f.push(x,T,w)}this.setIndex(f),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Hs=class n extends Bt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new N,f=new N,m=new N;for(let v=0;v<=i;v++){let p=o+v/i*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(e+t*Math.cos(p))*Math.cos(y),f.y=(e+t*Math.cos(p))*Math.sin(y),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(g/s),u.push(v/i)}}for(let v=1;v<=i;v++)for(let p=1;p<=s;p++){let g=(s+1)*v+p-1,y=(s+1)*(v-1)+p-1,S=(s+1)*(v-1)+p,x=(s+1)*v+p;l.push(g,y,x),l.push(y,S,x)}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ks(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if($m(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if($m(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function mn(n){let e={};for(let t=0;t<n.length;t++){let i=Ks(n[t]);for(let s in i)e[s]=i[s]}return e}function $m(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Bx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var qi={clone:Ks,merge:mn},kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xt=class extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kx,this.fragmentShader=zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Pe().setHex(s.value);break;case"v2":this.uniforms[i].value=new re().fromArray(s.value);break;case"v3":this.uniforms[i].value=new N().fromArray(s.value);break;case"v4":this.uniforms[i].value=new At().fromArray(s.value);break;case"m3":this.uniforms[i].value=new We().fromArray(s.value);break;case"m4":this.uniforms[i].value=new vt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},zr=class extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Lt=class extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var uc=class extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dc=class extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Er(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function kl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var hs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fc=class extends hs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:od,endingEnd:od}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ad:r=e,a=2*t-i;break;case ld:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ad:o=e,l=2*i-t;break;case ld:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(s-t),v=m*m,p=v*m,g=-d*p+2*d*v-d*m,y=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*m+1,S=(-1-f)*p+(1.5+f)*v+.5*m,x=f*p-f*v;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+y*o[c+T]+S*o[l+T]+x*o[u+T];return r}},pc=class extends hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},mc=class extends hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gc=class extends hs{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(i-t)/(s-t),v=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*v+o[l+p]*m;return r}let d=a*2,f=e-1;for(let m=0;m!==a;++m){let v=o[c+m],p=o[l+m],g=f*d+m*2,y=u[g],S=u[g+1],x=e*d+m*2,T=h[x],w=h[x+1],_=Gx(i,t,y,T,s);r[m]=Wg(_,v,S,w,p)}return r}};function Wg(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Hx(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Gx(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Wg(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Hx(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var kn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),kl(e.settings)&&(i.settings={inTangents:Er(e.settings.inTangents,Array),outTangents:Er(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new gc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Po:t=this.InterpolantFactoryMethodDiscrete;break;case Ql:t=this.InterpolantFactoryMethodLinear;break;case Gl:t=this.InterpolantFactoryMethodSmooth;break;case rd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return He("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return Ql;case this.InterpolantFactoryMethodSmooth:return Gl;case this.InterpolantFactoryMethodBezier:return rd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;kl(this.settings)&&(Km(this.settings.inTangents,e),Km(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;kl(this.settings)&&(Jm(this.settings.inTangents,e),Jm(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ge("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Gy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Gl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){let v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,kl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Km(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Jm(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Ql;var us=class extends kn{constructor(e,t,i){super(e,t,i)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Po;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var _c=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};_c.prototype.ValueTypeName="color";var vc=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};vc.prototype.ValueTypeName="number";var yc=class extends hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)mi.slerpFlat(r,0,o,c-a,o,c,l);return r}},aa=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new yc(this.times,this.values,this.getValueSize(),e)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends kn{constructor(e,t,i){super(e,t,i)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Po;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};xc.prototype.ValueTypeName="vector";var Sc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xg=new Sc,Mc=class{constructor(e){this.manager=e!==void 0?e:Xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Mc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends Wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},la=class extends Hr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},sd=new vt,Zm=new N,jm=new N,ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Zm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zm),jm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){sd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(sd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Rr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zl=new N,Hl=new mi,ui=new N,ha=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zl,Hl,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Hl,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(zl,Hl,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Hl,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new N,Qm=new re,eg=new re,pn=class extends ha{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ec*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(Lu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,Qm,eg),t.subVectors(eg,Qm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lu*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var pd=class extends ca{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}},Gs=class extends Hr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new pd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Vs=class extends ha{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},md=class extends ca{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ua=class extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new md}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var wr=-90,Tr=1,Gr=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(wr,Tr,e,t);s.layers=this.layers,this.add(s);let r=new pn(wr,Tr,e,t);r.layers=this.layers,this.add(r);let o=new pn(wr,Tr,e,t);o.layers=this.layers,this.add(o);let a=new pn(wr,Tr,e,t);a.layers=this.layers,this.add(a);let l=new pn(wr,Tr,e,t);l.layers=this.layers,this.add(l);let c=new pn(wr,Tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},bc=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},da=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Vx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Vx(){this._document.hidden===!1&&this.reset()}var kd="\\[\\]\\.:\\/",Wx=new RegExp("["+kd+"]","g"),zd="[^"+kd+"]",Xx="[^"+kd.replace("\\.","")+"]",qx=/((?:WC+[\/:])*)/.source.replace("WC",zd),Yx=/(WCOD+)?/.source.replace("WCOD",Xx),$x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zd),Kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zd),Jx=new RegExp("^"+qx+Yx+$x+Kx+"$"),Zx=["material","materials","bones","map"],gd=class{constructor(e,t,i){let s=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wx,"")}static parseTrackName(e){let t=Jx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Zx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=gd;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mR=new Float32Array(1);var qd=class qd{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};qd.prototype.isMatrix2=!0;var _d=qd;function Hd(n,e,t,i){let s=jx(i);switch(t){case Rd:return n*e;case Pc:return n*e/s.components*s.byteLength;case Nc:return n*e/s.components*s.byteLength;case ms:return n*e*2/s.components*s.byteLength;case Dc:return n*e*2/s.components*s.byteLength;case Id:return n*e*3/s.components*s.byteLength;case ri:return n*e*4/s.components*s.byteLength;case Lc:return n*e*4/s.components*s.byteLength;case xa:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ma:case ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fc:case Bc:return Math.max(n,16)*Math.max(e,8)/4;case Oc:case Uc:return Math.max(n,8)*Math.max(e,8)/2;case kc:case zc:case Gc:case Vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hc:case Ea:case Wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case eh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case th:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ih:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case rh:case oh:case ah:return Math.ceil(n/4)*Math.ceil(e/4)*16;case lh:case ch:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wa:case hh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jx(n){switch(n){case Cn:case wd:return{byteLength:1,components:1};case qr:case Td:case Kt:return{byteLength:2,components:1};case Rc:case Ic:return{byteLength:2,components:4};case si:case Cc:case $n:return{byteLength:4,components:1};case Ad:case Cd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function f_(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function eS(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let v=u[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var tS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nS=`#ifdef USE_ALPHAHASH
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
#endif`,iS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aS=`#ifdef USE_AOMAP
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
#endif`,lS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cS=`#ifdef USE_BATCHING
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
#endif`,hS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pS=`#ifdef USE_IRIDESCENCE
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
#endif`,mS=`#ifdef USE_BUMPMAP
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
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,SS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,MS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ES=`#define PI 3.141592653589793
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
} // validated`,wS=`vec3 transformedNormal = objectNormal;
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
#endif`,TS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IS="gl_FragColor = linearToOutputTexel( gl_FragColor );",PS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NS=`#ifdef USE_ENVMAP
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
#endif`,DS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,LS=`#ifdef USE_ENVMAP
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
#endif`,OS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FS=`#ifdef USE_ENVMAP
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
#endif`,US=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HS=`#ifdef USE_GRADIENTMAP
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
}`,GS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qS=`#ifdef USE_ENVMAP
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
#endif`,YS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZS=`PhysicalMaterial material;
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
#endif`,jS=`uniform sampler2D dfgLUT;
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
}`,QS=`
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
#endif`,eM=`#if defined( RE_IndirectDiffuse )
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
#endif`,tM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,iM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hM=`#if defined( USE_POINTS_UV )
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
#endif`,uM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pM=`#if defined( USE_MORPHCOLORS )
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
#endif`,mM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gM=`#ifdef USE_MORPHTARGETS
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
#endif`,_M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bM=`#ifdef USE_NORMALMAP
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
#endif`,EM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kM=`float getShadowMask() {
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
}`,zM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HM=`#ifdef USE_SKINNING
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
#endif`,GM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VM=`#ifdef USE_SKINNING
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
#endif`,WM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$M=`#ifdef USE_TRANSMISSION
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
#endif`,KM=`#ifdef USE_TRANSMISSION
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
#endif`,JM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tb=`uniform sampler2D t2D;
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
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`uniform float backgroundBlurriness;
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`#include <common>
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
}`,ab=`#if DEPTH_PACKING == 3200
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
}`,lb=`#define DISTANCE
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
}`,cb=`#define DISTANCE
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`uniform float scale;
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
}`,fb=`uniform vec3 diffuse;
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
}`,pb=`#include <common>
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#define LAMBERT
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
}`,_b=`#define LAMBERT
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
}`,vb=`#define MATCAP
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
}`,yb=`#define MATCAP
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
}`,xb=`#define NORMAL
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
}`,Sb=`#define NORMAL
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
}`,Mb=`#define PHONG
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
}`,bb=`#define PHONG
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
}`,Eb=`#define STANDARD
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
}`,wb=`#define STANDARD
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
}`,Tb=`#define TOON
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
}`,Ab=`#define TOON
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
}`,Cb=`uniform float size;
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
}`,Rb=`uniform vec3 diffuse;
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
}`,Ib=`#include <common>
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
}`,Pb=`uniform vec3 color;
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
}`,Nb=`uniform float rotation;
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
}`,Db=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:tS,alphahash_pars_fragment:nS,alphamap_fragment:iS,alphamap_pars_fragment:sS,alphatest_fragment:rS,alphatest_pars_fragment:oS,aomap_fragment:aS,aomap_pars_fragment:lS,batching_pars_vertex:cS,batching_vertex:hS,begin_vertex:uS,beginnormal_vertex:dS,bsdfs:fS,iridescence_fragment:pS,bumpmap_pars_fragment:mS,clipping_planes_fragment:gS,clipping_planes_pars_fragment:_S,clipping_planes_pars_vertex:vS,clipping_planes_vertex:yS,color_fragment:xS,color_pars_fragment:SS,color_pars_vertex:MS,color_vertex:bS,common:ES,defaultnormal_vertex:wS,displacementmap_pars_vertex:TS,displacementmap_vertex:AS,emissivemap_fragment:CS,emissivemap_pars_fragment:RS,colorspace_fragment:IS,colorspace_pars_fragment:PS,envmap_fragment:NS,envmap_common_pars_fragment:DS,envmap_pars_fragment:LS,envmap_pars_vertex:OS,envmap_physical_pars_fragment:qS,envmap_vertex:FS,fog_vertex:US,fog_pars_vertex:BS,fog_fragment:kS,fog_pars_fragment:zS,gradientmap_pars_fragment:HS,lightmap_pars_fragment:GS,lights_lambert_fragment:VS,lights_lambert_pars_fragment:WS,lights_pars_begin:XS,lights_toon_fragment:YS,lights_toon_pars_fragment:$S,lights_phong_fragment:KS,lights_phong_pars_fragment:JS,lights_physical_fragment:ZS,lights_physical_pars_fragment:jS,lights_fragment_begin:QS,lights_fragment_maps:eM,lights_fragment_end:tM,lightprobes_pars_fragment:nM,logdepthbuf_fragment:iM,logdepthbuf_pars_fragment:sM,logdepthbuf_pars_vertex:rM,logdepthbuf_vertex:oM,map_fragment:aM,map_pars_fragment:lM,map_particle_fragment:cM,map_particle_pars_fragment:hM,metalnessmap_fragment:uM,metalnessmap_pars_fragment:dM,morphinstance_vertex:fM,morphcolor_vertex:pM,morphnormal_vertex:mM,morphtarget_pars_vertex:gM,morphtarget_vertex:_M,normal_fragment_begin:vM,normal_fragment_maps:yM,normal_pars_fragment:xM,normal_pars_vertex:SM,normal_vertex:MM,normalmap_pars_fragment:bM,clearcoat_normal_fragment_begin:EM,clearcoat_normal_fragment_maps:wM,clearcoat_pars_fragment:TM,iridescence_pars_fragment:AM,opaque_fragment:CM,packing:RM,premultiplied_alpha_fragment:IM,project_vertex:PM,dithering_fragment:NM,dithering_pars_fragment:DM,roughnessmap_fragment:LM,roughnessmap_pars_fragment:OM,shadowmap_pars_fragment:FM,shadowmap_pars_vertex:UM,shadowmap_vertex:BM,shadowmask_pars_fragment:kM,skinbase_vertex:zM,skinning_pars_vertex:HM,skinning_vertex:GM,skinnormal_vertex:VM,specularmap_fragment:WM,specularmap_pars_fragment:XM,tonemapping_fragment:qM,tonemapping_pars_fragment:YM,transmission_fragment:$M,transmission_pars_fragment:KM,uv_pars_fragment:JM,uv_pars_vertex:ZM,uv_vertex:jM,worldpos_vertex:QM,background_vert:eb,background_frag:tb,backgroundCube_vert:nb,backgroundCube_frag:ib,cube_vert:sb,cube_frag:rb,depth_vert:ob,depth_frag:ab,distance_vert:lb,distance_frag:cb,equirect_vert:hb,equirect_frag:ub,linedashed_vert:db,linedashed_frag:fb,meshbasic_vert:pb,meshbasic_frag:mb,meshlambert_vert:gb,meshlambert_frag:_b,meshmatcap_vert:vb,meshmatcap_frag:yb,meshnormal_vert:xb,meshnormal_frag:Sb,meshphong_vert:Mb,meshphong_frag:bb,meshphysical_vert:Eb,meshphysical_frag:wb,meshtoon_vert:Tb,meshtoon_frag:Ab,points_vert:Cb,points_frag:Rb,shadow_vert:Ib,shadow_frag:Pb,sprite_vert:Nb,sprite_frag:Db},Ee={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},yi={basic:{uniforms:mn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:mn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:mn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:mn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:mn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:mn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:mn([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:mn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:mn([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:mn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:mn([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:mn([Ee.common,Ee.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:mn([Ee.lights,Ee.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};yi.physical={uniforms:mn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var dh={r:0,b:0,g:0},Lb=new vt,p_=new We;p_.set(-1,0,0,0,1,0,0,0,1);function Ob(n,e,t,i,s,r){let o=new Pe(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let x=y.backgroundBlurriness>0;S=e.get(S,x)}return S}function m(y){let S=!1,x=f(y);x===null?p(o,a):x&&x.isColor&&(p(x,1),S=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,S){let x=f(S);x&&x.isCubeTexture?(c===void 0&&(c=new Tt(new ls(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Ks(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(p_),c.material.toneMapped=it.getTransfer(x.colorSpace)!==dt,(h!==x||u!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Tt(new zs(2,2),new Xt({name:"BackgroundMaterial",uniforms:Ks(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=it.getTransfer(x.colorSpace)!==dt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,S){y.getRGB(dh,Bd(n)),t.buffers.color.setClear(dh.r,dh.g,dh.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:v,dispose:g}}function Fb(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(P,O,U,I,B){let q=!1,V=u(P,I,U,O);r!==V&&(r=V,c(r.object)),q=f(P,I,U,B),q&&m(P,I,U,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(P,O,U,I),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function u(P,O,U,I){let B=I.wireframe===!0,q=i[O.id];q===void 0&&(q={},i[O.id]=q);let V=P.isInstancedMesh===!0?P.id:0,ie=q[V];ie===void 0&&(ie={},q[V]=ie);let W=ie[U.id];W===void 0&&(W={},ie[U.id]=W);let Z=W[B];return Z===void 0&&(Z=d(l()),W[B]=Z),Z}function d(P){let O=[],U=[],I=[];for(let B=0;B<t;B++)O[B]=0,U[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:U,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,O,U,I){let B=r.attributes,q=O.attributes,V=0,ie=U.getAttributes();for(let W in ie)if(ie[W].location>=0){let K=B[W],Te=q[W];if(Te===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(Te=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(Te=P.instanceColor)),K===void 0||K.attribute!==Te||Te&&K.data!==Te.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function m(P,O,U,I){let B={},q=O.attributes,V=0,ie=U.getAttributes();for(let W in ie)if(ie[W].location>=0){let K=q[W];K===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));let Te={};Te.attribute=K,K&&K.data&&(Te.data=K.data),B[W]=Te,V++}r.attributes=B,r.attributesNum=V,r.index=I}function v(){let P=r.newAttributes;for(let O=0,U=P.length;O<U;O++)P[O]=0}function p(P){g(P,0)}function g(P,O){let U=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;U[P]=1,I[P]===0&&(n.enableVertexAttribArray(P),I[P]=1),B[P]!==O&&(n.vertexAttribDivisor(P,O),B[P]=O)}function y(){let P=r.newAttributes,O=r.enabledAttributes;for(let U=0,I=O.length;U<I;U++)O[U]!==P[U]&&(n.disableVertexAttribArray(U),O[U]=0)}function S(P,O,U,I,B,q,V){V===!0?n.vertexAttribIPointer(P,O,U,B,q):n.vertexAttribPointer(P,O,U,I,B,q)}function x(P,O,U,I){v();let B=I.attributes,q=U.getAttributes(),V=O.defaultAttributeValues;for(let ie in q){let W=q[ie];if(W.location>=0){let Z=B[ie];if(Z===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){let K=Z.normalized,Te=Z.itemSize,Ne=e.get(Z);if(Ne===void 0)continue;let $=Ne.buffer,he=Ne.type,Ae=Ne.bytesPerElement,Le=he===n.INT||he===n.UNSIGNED_INT||Z.gpuType===Cc;if(Z.isInterleavedBufferAttribute){let Me=Z.data,Ue=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,yt=Z.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let Be=0;Be<W.locationSize;Be++)g(W.location+Be,Me.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Be=0;Be<W.locationSize;Be++)p(W.location+Be);n.bindBuffer(n.ARRAY_BUFFER,$);for(let Be=0;Be<W.locationSize;Be++)S(W.location+Be,Te/W.locationSize,he,K,Ue*Ae,(yt+Te/W.locationSize*Be)*Ae,Le)}else{if(Z.isInstancedBufferAttribute){for(let Me=0;Me<W.locationSize;Me++)g(W.location+Me,Z.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Me=0;Me<W.locationSize;Me++)p(W.location+Me);n.bindBuffer(n.ARRAY_BUFFER,$);for(let Me=0;Me<W.locationSize;Me++)S(W.location+Me,Te/W.locationSize,he,K,Te*Ae,Te/W.locationSize*Me*Ae,Le)}}else if(V!==void 0){let K=V[ie];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(W.location,K);break;case 3:n.vertexAttrib3fv(W.location,K);break;case 4:n.vertexAttrib4fv(W.location,K);break;default:n.vertexAttrib1fv(W.location,K)}}}}y()}function T(){R();for(let P in i){let O=i[P];for(let U in O){let I=O[U];for(let B in I){let q=I[B];for(let V in q)h(q[V].object),delete q[V];delete I[B]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;let O=i[P.id];for(let U in O){let I=O[U];for(let B in I){let q=I[B];for(let V in q)h(q[V].object),delete q[V];delete I[B]}}delete i[P.id]}function _(P){for(let O in i){let U=i[O];for(let I in U){let B=U[I];if(B[P.id]===void 0)continue;let q=B[P.id];for(let V in q)h(q[V].object),delete q[V];delete B[P.id]}}}function M(P){for(let O in i){let U=i[O],I=P.isInstancedMesh===!0?P.id:0,B=U[I];if(B!==void 0){for(let q in B){let V=B[q];for(let ie in V)h(V[ie].object),delete V[ie];delete B[q]}delete U[I],Object.keys(U).length===0&&delete i[O]}}}function R(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function Ub(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Bb(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==ri&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let M=_===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Cn&&_!==$n&&!M&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,maxSamples:T,samples:w}}function kb(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ii,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,g=n.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let y=r?0:i,S=y*4,x=g.clippingState||null;l.value=x,x=h(m,d,S,f);for(let T=0;T!==S;++T)x[T]=t[T];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,m!==!0||p===null){let g=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,x=f;S!==v;++S,x+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var Ca=class extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Xo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ls(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Gi});r.uniforms.tEquirect.value=t;let o=new Tt(s,r),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=vn),new Gr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},qg=256,zb=3,Hb=20,m_=256,g_=16,Gb=3,Vb=new N,Wb=new Pe,ph=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Gr(1,10,null),this._boxMesh=new Tt(new ls(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Vb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(Wb));let p=new Gr(i,s,h);return p.position.copy(a),p.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(qg,Bg(e))}_fromTexture(e,t){e.mapping===Ys||e.mapping===Xr?this._setSize(e.image.length===0?qg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Yg(e,!1,!1),i=Math.log2(e)-zb;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Yg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ys||e.mapping===Xr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$g()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Xb(),this._integrationMaterial=qb());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/g_);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Gb)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(m_*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Yb());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Yg(n,e,t){return new Ca(n,{minFilter:Vi,generateMipmaps:e,type:Kt,colorSpace:No,depthBuffer:t})}function Ra(n,e,t){return new Xt({name:n,uniforms:e,vertexShader:Qe.cube_vert,fragmentShader:t,side:cn,blending:Gi,depthTest:!1,depthWrite:!1})}function Xb(){return Ra("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${m_}u

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
	`)}function qb(){return Ra("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:g_}},`

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
	`)}function Yb(){return Ra("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Hb}
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
	`)}function $g(){return Ra("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Kg(){return Ra("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function $b(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===wc||f===Tc)if(e.has(d)){let m=e.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let v=new Ca(m.height);return v.fromEquirectangularTexture(n,d),e.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===wc||f===Tc,v=f===Ys||f===Xr;if(m||v){let p=t.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new ph(n)),p=m?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let y=d.image;return m&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new ph(n)),p=m?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===wc?d.mapping=Ys:f===Tc&&(d.mapping=Xr),d}function l(d){let f=0,m=6;for(let v=0;v<m;v++)d[v]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Kb(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Co("WebGLRenderer: "+i+" extension not supported."),s}}}function Jb(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let v=r.get(m);v&&(e.remove(v),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(m){let v=m.attributes;for(let p in v)e.update(v[p],n.ARRAY_BUFFER)}function u(m){let v=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let y=v!==null?v.array.length:p.array.length/3-1,S=p.count>=65535?zo:ko,x=new S(Math.ceil(y/3)*6,1),T=x.array;if(v!==null){let _=v.array;g=v.version;for(let M=0,R=0;M<y;M+=3){let A=_[M+0],P=_[M+1],O=_[M+2];T[R++]=A,T[R++]=P,T[R++]=P,T[R++]=O,T[R++]=O,T[R++]=A}}else{g=p.version;for(let _=0,M=0;_<y;_+=3){let R=_+0,A=_+1,P=_+2;T[M++]=R,T[M++]=A,T[M++]=A,T[M++]=P,T[M++]=P,T[M++]=R}}x.version=g;let w=r.get(m);w&&e.remove(w),r.set(m,x)}function d(m){let v=r.get(m);if(v){let p=m.index;p!==null&&v.version<p.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in s){let v=s[m].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Zb(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),t.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*o,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let v=0;for(let p=0;p<f;p++)v+=d[p];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function jb(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ge("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Qb(n,e,t){let i=new WeakMap,s=new At;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let R=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),v===!0&&(S=3);let x=a.attributes.position.count*S,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*T*4*u),_=new Oo(w,x,T,u);_.type=$n,_.needsUpdate=!0;let M=S*4;for(let A=0;A<u;A++){let P=p[A],O=g[A],U=y[A],I=x*T*4*A;for(let B=0;B<P.count;B++){let q=B*M;f===!0&&(s.fromBufferAttribute(P,B),w[I+q+0]=s.x,w[I+q+1]=s.y,w[I+q+2]=s.z,w[I+q+3]=0),m===!0&&(s.fromBufferAttribute(O,B),w[I+q+4]=s.x,w[I+q+5]=s.y,w[I+q+6]=s.z,w[I+q+7]=0),v===!0&&(s.fromBufferAttribute(U,B),w[I+q+8]=s.x,w[I+q+9]=s.y,w[I+q+10]=s.z,w[I+q+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new re(x,T)},i.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function eE(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var tE={[fa]:"LINEAR_TONE_MAPPING",[pa]:"REINHARD_TONE_MAPPING",[ma]:"CINEON_TONE_MAPPING",[ga]:"ACES_FILMIC_TONE_MAPPING",[va]:"AGX_TONE_MAPPING",[qs]:"NEUTRAL_TONE_MAPPING",[_a]:"CUSTOM_TONE_MAPPING"};function nE(n,e,t,i,s,r){let o=new zt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Bt;h.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $e([0,2,0,0,2,0],2));let u=new zr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Tt(h,u),f=new Vs(-1,1,1,-1,0,1),m=null,v=null,p=!1,g,y=null,S=[],x=!1;this.setSize=function(T,w){o.setSize(T,w),a!==null&&a.setSize(T,w),l!==null&&l.setSize(T,w);for(let _=0;_<S.length;_++){let M=S[_];M.setSize&&M.setSize(T,w)}},this.setEffects=function(T){S=T,x=S.length>0&&S[0].isRenderPass===!0;let w=o.width,_=o.height;S.length>0&&a===null&&(a=new zt(w,_,{type:Kt,depthBuffer:!1,stencilBuffer:!1}),l=new zt(w,_,{type:Kt,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&S.some(R=>R.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new Hi(w,_),r===!0&&(c.format=Wi,c.type=$s)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let R=0;R<S.length;R++){let A=S[R];A.setSize&&A.setSize(w,_),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(T,w){if(p||T.toneMapping===_i&&S.length===0)return!1;if(y=w,w!==null){let _=w.width,M=w.height;(o.width!==_||o.height!==M)&&this.setSize(_,M)}return x===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=_i,!0},this.hasRenderPass=function(){return x},this.end=function(T,w){T.toneMapping=g,p=!0;let _=o,M=a;for(let R=0;R<S.length;R++){let A=S[R];A.enabled!==!1&&(A.render(T,M,_,w),A.needsSwap!==!1&&(_=M,M=M===a?l:a))}if(m!==T.outputColorSpace||v!==T.toneMapping){m=T.outputColorSpace,v=T.toneMapping,u.defines={},it.getTransfer(m)===dt&&(u.defines.SRGB_TRANSFER="");let R=tE[v];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(y),T.render(d,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var __=new yn,v_=new Hi(1,1),y_=new qo(1),x_=new Oo,S_=new ic,M_=new Xo,Jg=[],Zg=[],jg=new Float32Array(16),Qg=new Float32Array(9),e_=new Float32Array(4);function Kr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Jg[s];if(r===void 0&&(r=new Float32Array(s),Jg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gh(n,e){let t=Zg[e];t===void 0&&(t=new Int32Array(e),Zg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function rE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function oE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function aE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;e_.set(i),n.uniformMatrix2fv(this.addr,!1,e_),Zt(t,i)}}function lE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;Qg.set(i),n.uniformMatrix3fv(this.addr,!1,Qg),Zt(t,i)}}function cE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;jg.set(i),n.uniformMatrix4fv(this.addr,!1,jg),Zt(t,i)}}function hE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function dE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function fE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function pE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function gE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function _E(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function _h(n){return n.version===0&&(n.compareFunction=Dd,n.needsUpdate=!0),n}function vE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=_h(v_):r=__,t.setTexture2D(e||r,s)}function yE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||S_,s)}function xE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=_h(y_):r=M_,t.setTextureCube(e||r,s)}function SE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||x_,s)}function ME(n){switch(n){case 5126:return iE;case 35664:return sE;case 35665:return rE;case 35666:return oE;case 35674:return aE;case 35675:return lE;case 35676:return cE;case 5124:case 35670:return hE;case 35667:case 35671:return uE;case 35668:case 35672:return dE;case 35669:case 35673:return fE;case 5125:return pE;case 36294:return mE;case 36295:return gE;case 36296:return _E;case 35678:case 36198:case 36298:case 36306:case 35682:return vE;case 35679:case 36299:case 36307:return yE;case 35680:case 36300:case 36308:case 36293:return xE;case 36289:case 36303:case 36311:case 36292:return SE}}function bE(n,e){n.uniform1fv(this.addr,e)}function EE(n,e){let t=Kr(e,this.size,2);n.uniform2fv(this.addr,t)}function wE(n,e){let t=Kr(e,this.size,3);n.uniform3fv(this.addr,t)}function TE(n,e){let t=Kr(e,this.size,4);n.uniform4fv(this.addr,t)}function AE(n,e){let t=Kr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function CE(n,e){let t=Kr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RE(n,e){let t=Kr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function IE(n,e){n.uniform1iv(this.addr,e)}function PE(n,e){n.uniform2iv(this.addr,e)}function NE(n,e){n.uniform3iv(this.addr,e)}function DE(n,e){n.uniform4iv(this.addr,e)}function LE(n,e){n.uniform1uiv(this.addr,e)}function OE(n,e){n.uniform2uiv(this.addr,e)}function FE(n,e){n.uniform3uiv(this.addr,e)}function UE(n,e){n.uniform4uiv(this.addr,e)}function BE(n,e,t){let i=this.cache,s=e.length,r=gh(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=_h(v_):o=__;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function kE(n,e,t){let i=this.cache,s=e.length,r=gh(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||S_,r[o])}function zE(n,e,t){let i=this.cache,s=e.length,r=gh(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=_h(y_):o=M_;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function HE(n,e,t){let i=this.cache,s=e.length,r=gh(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||x_,r[o])}function GE(n){switch(n){case 5126:return bE;case 35664:return EE;case 35665:return wE;case 35666:return TE;case 35674:return AE;case 35675:return CE;case 35676:return RE;case 5124:case 35670:return IE;case 35667:case 35671:return PE;case 35668:case 35672:return NE;case 35669:case 35673:return DE;case 5125:return LE;case 36294:return OE;case 36295:return FE;case 36296:return UE;case 35678:case 36198:case 36298:case 36306:case 35682:return BE;case 35679:case 36299:case 36307:return kE;case 35680:case 36300:case 36308:case 36293:return zE;case 36289:case 36303:case 36311:case 36292:return HE}}var Kd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ME(t.type)}},Jd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GE(t.type)}},Zd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Yd=/(\w+)(\])?(\[|\.)?/g;function t_(n,e){n.seq.push(e),n.map[e.id]=e}function VE(n,e,t){let i=n.name,s=i.length;for(Yd.lastIndex=0;;){let r=Yd.exec(i),o=Yd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){t_(t,c===void 0?new Kd(a,n,e):new Jd(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Zd(a),t_(t,u)),t=u}}}var $r=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);VE(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function n_(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var WE=37297,XE=0;function qE(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var i_=new We;function YE(n){it._getMatrix(i_,it.workingColorSpace,n);let e=`mat3( ${i_.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Do:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function s_(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+qE(n.getShaderSource(e),a)}else return r}function $E(n,e){let t=YE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var KE={[fa]:"Linear",[pa]:"Reinhard",[ma]:"Cineon",[ga]:"ACESFilmic",[va]:"AgX",[qs]:"Neutral",[_a]:"Custom"};function JE(n,e){let t=KE[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fh=new N;function ZE(){it.getLuminanceCoefficients(fh);let n=fh.x.toFixed(4),e=fh.y.toFixed(4),t=fh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function QE(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ew(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Aa(n){return n!==""}function r_(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function o_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(n){return n.replace(tw,nw)}function nw(n,e){let t=Qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return jd(t)}var iw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(n){return n.replace(iw,sw)}function sw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function l_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var rw={[Ws]:"SHADOWMAP_TYPE_PCF",[Vr]:"SHADOWMAP_TYPE_VSM"};function ow(n){return rw[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var aw={[Xr]:"ENVMAP_MODE_REFRACTION"};function lw(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":aw[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cw={[bd]:"ENVMAP_BLENDING_MULTIPLY",[Mg]:"ENVMAP_BLENDING_MIX",[bg]:"ENVMAP_BLENDING_ADD"};function hw(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cw[n.combine]||"ENVMAP_BLENDING_NONE"}function uw(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ow(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=lw(t),u=hw(t),d=jE(t),f=QE(r),m=s.createProgram(),v,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Aa).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Aa).join(`
`),p.length>0&&(p+=`
`)):(v=[l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),p=[l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Qe.tonemapping_pars_fragment:"",t.toneMapping!==_i?JE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,$E("linearToOutputTexel",t.outputColorSpace),ZE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),o=jd(o),o=r_(o,t),o=o_(o,t),a=jd(a),a=r_(a,t),a=o_(a,t),o=a_(o),a=a_(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+v+o,S=g+p+a,x=n_(s,s.VERTEX_SHADER,y),T=n_(s,s.FRAGMENT_SHADER,S);s.attachShader(m,x),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function w(A){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(m)||"",O=s.getShaderInfoLog(x)||"",U=s.getShaderInfoLog(T)||"",I=P.trim(),B=O.trim(),q=U.trim(),V=!0,ie=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,x,T);else{let W=s_(s,x,"vertex"),Z=s_(s,T,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+W+`
`+Z)}else I!==""?He("WebGLProgram: Program Info Log:",I):(B===""||q==="")&&(ie=!1);ie&&(A.diagnostics={runnable:V,programLog:I,vertexShader:{log:B,prefix:v},fragmentShader:{log:q,prefix:p}})}s.deleteShader(x),s.deleteShader(T),_=new $r(s,m),M=ew(s,m)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(m,WE)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=T,this}var dw=0,Qd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ef(e),t.set(e,i)),i}},ef=class{constructor(e){this.id=dw++,this.code=e,this.usedTimes=0}};function fw(n){return n===ms||n===Ea||n===wa}function pw(n,e,t,i,s,r){let o=new Fo,a=new Qd,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,M,R,A,P,O){let U=A.fog,I=P.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||B,q),ie=d[_.type],W=i.precision;_.precision!==null&&(W=i.getMaxPrecision(_.precision),W!==_.precision&&He("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let Z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=Z!==void 0?Z.length:0,Te=0;I.morphAttributes.position!==void 0&&(Te=1),I.morphAttributes.normal!==void 0&&(Te=2),I.morphAttributes.color!==void 0&&(Te=3);let Ne,$,he,Ae;if(ie){let be=yi[ie];Ne=be.vertexShader,$=be.fragmentShader}else{Ne=_.vertexShader,$=_.fragmentShader;let be=a.getVertexShaderStage(_),_t=a.getFragmentShaderStage(_);a.update(_,be,_t),he=be.id,Ae=_t.id}let Le=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),Ue=P.isInstancedMesh===!0,yt=P.isBatchedMesh===!0,Be=!!_.map,Ke=!!_.matcap,oe=!!V,k=oe&&V.isPMREMTexture===!0,J=!!_.aoMap,se=!!_.lightMap,ue=!!_.bumpMap&&_.wireframe===!1,fe=!!_.normalMap,Xe=!!_.displacementMap,De=!!_.emissiveMap,Ze=!!_.metalnessMap,et=!!_.roughnessMap,ct=_.anisotropy>0,F=_.clearcoat>0,Ht=_.diffuseRoughness>0,nt=_.dispersion>0,xt=_.retroreflectivity>0,ye=_.iridescence>0,Ut=_.sheen>0,ze=_.transmission>0,Ve=ct&&!!_.anisotropyMap,C=F&&!!_.clearcoatMap,b=F&&!!_.clearcoatNormalMap,H=F&&!!_.clearcoatRoughnessMap,ae=Ht&&!!_.diffuseRoughnessMap,te=ye&&!!_.iridescenceMap,pe=ye&&!!_.iridescenceThicknessMap,xe=Ut&&!!_.sheenColorMap,j=Ut&&!!_.sheenRoughnessMap,Q=!!_.specularMap,ge=!!_.specularColorMap,D=!!_.specularIntensityMap,ee=ze&&!!_.transmissionMap,Y=ze&&!!_.thicknessMap,_e=!!_.gradientMap,de=!!_.alphaMap,me=_.alphaTest>0,Fe=!!_.alphaHash,je=!!_.extensions,le=_i;_.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(le=n.toneMapping);let ke=k?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Je={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:Ne,fragmentShader:$,defines:_.defines,customVertexShaderID:he,customFragmentShaderID:Ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:yt,batchingColor:yt&&P._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&P.instanceColor!==null,instancingMorph:Ue&&P.morphTexture!==null,outputColorSpace:Le===null?n.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Be,matcap:Ke,envMap:oe,envMapMode:oe&&V.mapping,envMapPMREM:k,envMapMaxLod:k?ke.length-1:null,envMapSize:k?ke[0].width:null,aoMap:J,lightMap:se,bumpMap:ue,normalMap:fe,displacementMap:Xe,emissiveMap:De,normalMapObjectSpace:fe&&_.normalMapType===Tg,normalMapTangentSpace:fe&&_.normalMapType===uh,packedNormalMap:fe&&_.normalMapType===uh&&fw(_.normalMap.format),metalnessMap:Ze,roughnessMap:et,anisotropy:ct,anisotropyMap:Ve,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:b,clearcoatRoughnessMap:H,diffuseRoughness:Ht,diffuseRoughnessMap:ae,dispersion:nt,retroreflection:xt,iridescence:ye,iridescenceMap:te,iridescenceThicknessMap:pe,sheen:Ut,sheenColorMap:xe,sheenRoughnessMap:j,specularMap:Q,specularColorMap:ge,specularIntensityMap:D,transmission:ze,transmissionMap:ee,thicknessMap:Y,gradientMap:_e,opaque:_.transparent===!1&&_.blending===Wr&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:me,alphaHash:Fe,combine:_.combine,mapUv:Be&&f(_.map.channel),aoMapUv:J&&f(_.aoMap.channel),lightMapUv:se&&f(_.lightMap.channel),bumpMapUv:ue&&f(_.bumpMap.channel),normalMapUv:fe&&f(_.normalMap.channel),displacementMapUv:Xe&&f(_.displacementMap.channel),emissiveMapUv:De&&f(_.emissiveMap.channel),metalnessMapUv:Ze&&f(_.metalnessMap.channel),roughnessMapUv:et&&f(_.roughnessMap.channel),anisotropyMapUv:Ve&&f(_.anisotropyMap.channel),clearcoatMapUv:C&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:te&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(_.sheenRoughnessMap.channel),specularMapUv:Q&&f(_.specularMap.channel),specularColorMapUv:ge&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:ee&&f(_.transmissionMap.channel),thicknessMapUv:Y&&f(_.thicknessMap.channel),alphaMapUv:de&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(fe||ct),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(Be||de),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&fe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Te,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:O.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:Be&&_.map.isVideoTexture===!0&&it.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:De&&_.emissiveMap.isVideoTexture===!0&&it.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===zn,flipSided:_.side===cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:je&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&_.extensions.multiDraw===!0||yt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function v(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)M.push(R),M.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(M,_),g(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let M=d[_.type],R;if(M){let A=yi[M];R=qi.clone(A.uniforms)}else R=_.uniforms;return R}function S(_,M){let R=h.get(M);return R!==void 0?++R.usedTimes:(R=new uw(n,M,_,s),c.push(R),h.set(M,R)),R}function x(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function w(){a.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:y,acquireProgram:S,releaseProgram:x,releaseShaderCache:T,programs:c,dispose:w}}function mw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function gw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function c_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function h_(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,v,p,g){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:g},n[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=m,y.materialVariant=o(d),y.groupOrder=v,y.renderOrder=d.renderOrder,y.z=p,y.group=g),e++,y}function l(d,f,m,v,p,g,y){y.reversedDepth===!0&&(p=-p);let S=a(d,f,m,v,p,g);m.transmission>0?i.push(S):m.transparent===!0?s.push(S):t.push(S)}function c(d,f,m,v,p,g){let y=a(d,f,m,v,p,g);m.transmission>0?i.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||gw),i.length>1&&i.sort(f||c_),s.length>1&&s.sort(f||c_)}function u(){for(let d=e,f=n.length;d<f;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function _w(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new h_,n.set(i,[o])):s>=r.length?(o=new h_,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function vw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Pe};break;case"SpotLight":t={position:new N,direction:new N,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function yw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var xw=0;function Sw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Mw(n){let e=new vw,t=yw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,r=new vt,o=new vt;function a(c){let h=0,u=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,y=0,S=0,x=0,T=0,w=0,_=0,M=0,R=0,A=0;c.sort(Sw);for(let O=0,U=c.length;O<U;O++){let I=c[O],B=I.color,q=I.intensity,V=I.distance,ie=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ms?ie=I.shadow.map.texture:ie=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*q,u+=B.g*q,d+=B.b*q;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],q);A++}else if(I.isSunLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,K=t.get(I);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[m]=K,i.sunShadowMap[m]=ie;let Te=Z.getViewportCount();for(let Ne=0;Ne<Te;Ne++)i.sunShadowMatrix[v+Ne]=Z.getMatrix(Ne),i.sunShadowCascade[v+Ne]=Z._cascadeData[Ne];v+=Te,m++}i.sun[f]=W,f++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,K=t.get(I);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=I.shadow.matrix,T++}i.directional[p]=W,p++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(B).multiplyScalar(q),W.distance=V,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[y]=W;let Z=I.shadow;if(I.map&&(i.spotLightMap[M]=I.map,M++,Z.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[y]=Z.matrix,I.castShadow){let K=t.get(I);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,i.spotShadow[y]=K,i.spotShadowMap[y]=ie,_++}y++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(B).multiplyScalar(q),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[S]=W,S++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let Z=I.shadow,K=t.get(I);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,i.pointShadow[g]=K,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=W,g++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(q),W.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[x]=W,x++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==S||P.hemiLength!==x||P.numSunShadows!==m||P.numDirectionalShadows!==T||P.numPointShadows!==w||P.numSpotShadows!==_||P.numSpotMaps!==M||P.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=p,i.spot.length=y,i.rectArea.length=S,i.point.length=g,i.hemi.length=x,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-R,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,P.sunLength=f,P.directionalLength=p,P.pointLength=g,P.spotLength=y,P.rectAreaLength=S,P.hemiLength=x,P.numSunShadows=m,P.numDirectionalShadows=T,P.numPointShadows=w,P.numSpotShadows=_,P.numSpotMaps=M,P.numLightProbes=A,i.version=xw++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0,p=0,g=h.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let x=c[y];if(x.isSunLight){let T=i.sun[u];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(g),u++}else if(x.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),d++}else if(x.isSpotLight){let T=i.spot[m];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),m++}else if(x.isRectAreaLight){let T=i.rectArea[v];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let T=i.hemi[p];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:i}}function u_(n){let e=new Mw(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){i.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function bw(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new u_(n),e.set(s,[a])):r>=o.length?(a=new u_(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ww=`uniform sampler2D shadow_pass;
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
}`,Tw=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Aw=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],d_=new vt,Ta=new N,$d=new N;function Cw(n,e,t){let i=new as,s=new re,r=new re,o=new At,a=new uc,l=new dc,c={},h=t.maxTextureSize,u={[fs]:cn,[cn]:fs,[zn]:zn},d=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Ew,fragmentShader:ww}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Bt;m.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Tt(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ws;let g=this.type;this.render=function(w,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===ig&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ws);let R=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Gi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let U=g!==this.type;U&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=w.length;I<B;I++){let q=w[I],V=q.shadow;if(V===void 0){He("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ie=V.getFrameExtents();s.multiply(ie),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,V.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=W,V.map===null||U===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Vr){if(q.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new zt(s.x,s.y,{format:ms,type:Kt,minFilter:vn,magFilter:vn,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new Hi(s.x,s.y,$n),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=Ui,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=tn,V.map.depthTexture.magFilter=tn}else q.isPointLight?(V.map=new Ca(s.x),V.map.depthTexture=new qo(s.x,si)):(V.map=new zt(s.x,s.y),V.map.depthTexture=new Hi(s.x,s.y,si)),V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=Ui,this.type===Ws?(V.map.depthTexture.compareFunction=W?Nd:Pd,V.map.depthTexture.minFilter=vn,V.map.depthTexture.magFilter=vn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=tn,V.map.depthTexture.magFilter=tn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Z=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();q.isPointLight!==!0&&V.updateMatrices(q,M);let K=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:M.layers;for(let Te=0;Te<Z;Te++){let Ne=V.getCamera(Te);if(q.isPointLight){let $=V.camera,he=V.matrix,Ae=q.distance||$.far;Ae!==$.far&&($.far=Ae,$.updateProjectionMatrix()),Ta.setFromMatrixPosition(q.matrixWorld),$.position.copy(Ta),$d.copy($.position),$d.add(Tw[Te]),$.up.copy(Aw[Te]),$.lookAt($d),$.updateMatrixWorld(),he.makeTranslation(-Ta.x,-Ta.y,-Ta.z),d_.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),V._frustum.setFromProjectionMatrix(d_,$.coordinateSystem,$.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,Te),n.clear();else{Te===0&&(n.setRenderTarget(V.map),n.clear());let $=V.getViewport(Te);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),O.viewport(o)}i=V.getFrustum(Te),x(_,M,Ne,q,K,this.type)}V.isPointLightShadow!==!0&&this.type===Vr&&y(V,M),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(R,A,P)};function y(w,_){let M=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new zt(s.x,s.y,{format:ms,type:Kt}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(_,null,M,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(_,null,M,f,v,null)}function S(w,_,M,R){let A=null,P=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)A=P;else if(A=M.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=A.uuid,U=_.uuid,I=c[O];I===void 0&&(I={},c[O]=I);let B=I[U];B===void 0&&(B=A.clone(),I[U]=B,_.addEventListener("dispose",T)),A=B}if(A.visible=_.visible,A.wireframe=_.wireframe,R===Vr?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:u[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let O=n.properties.get(A);O.light=M}return A}function x(w,_,M,R,A,P){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Vr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let I=e.update(w),B=w.material;if(Array.isArray(B)){let q=I.groups;for(let V=0,ie=q.length;V<ie;V++){let W=q[V],Z=B[W.materialIndex];if(Z&&Z.visible){let K=S(w,Z,R,P);w.onBeforeShadow(n,w,_,M,I,K,W),n.renderBufferDirect(M,null,I,K,w,W),w.onAfterShadow(n,w,_,M,I,K,W)}}}else if(B.visible){let q=S(w,B,R,P);w.onBeforeShadow(n,w,_,M,I,q,null),n.renderBufferDirect(M,null,I,q,w,null),w.onAfterShadow(n,w,_,M,I,q,null)}}let U=w.children;for(let I=0,B=U.length;I<B;I++)x(U[I],_,M,R,A,P)}function T(w){w.target.removeEventListener("dispose",T);for(let M in c){let R=c[M],A=w.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function Rw(n,e){function t(){let D=!1,ee=new At,Y=null,_e=new At(0,0,0,0);return{setMask:function(de){Y!==de&&!D&&(n.colorMask(de,de,de,de),Y=de)},setLocked:function(de){D=de},setClear:function(de,me,Fe,je,le){le===!0&&(de*=je,me*=je,Fe*=je),ee.set(de,me,Fe,je),_e.equals(ee)===!1&&(n.clearColor(de,me,Fe,je),_e.copy(ee))},reset:function(){D=!1,Y=null,_e.set(-1,0,0,0)}}}function i(){let D=!1,ee=!1,Y=null,_e=null,de=null;return{setReversed:function(me){if(ee!==me){let Fe=e.get("EXT_clip_control");me?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ee=me;let je=de;de=null,this.setClear(je)}},getReversed:function(){return ee},setTest:function(me){me?Me(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(me){Y!==me&&!D&&(n.depthMask(me),Y=me)},setFunc:function(me){if(ee&&(me=Ug[me]),_e!==me){switch(me){case Wl:n.depthFunc(n.NEVER);break;case Xl:n.depthFunc(n.ALWAYS);break;case ql:n.depthFunc(n.LESS);break;case Cr:n.depthFunc(n.LEQUAL);break;case Yl:n.depthFunc(n.EQUAL);break;case $l:n.depthFunc(n.GEQUAL);break;case Kl:n.depthFunc(n.GREATER);break;case Jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=me}},setLocked:function(me){D=me},setClear:function(me){de!==me&&(de=me,ee&&(me=1-me),n.clearDepth(me))},reset:function(){D=!1,Y=null,_e=null,de=null,ee=!1}}}function s(){let D=!1,ee=null,Y=null,_e=null,de=null,me=null,Fe=null,je=null,le=null;return{setTest:function(ke){D||(ke?Me(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(ke){ee!==ke&&!D&&(n.stencilMask(ke),ee=ke)},setFunc:function(ke,Je,be){(Y!==ke||_e!==Je||de!==be)&&(n.stencilFunc(ke,Je,be),Y=ke,_e=Je,de=be)},setOp:function(ke,Je,be){(me!==ke||Fe!==Je||je!==be)&&(n.stencilOp(ke,Je,be),me=ke,Fe=Je,je=be)},setLocked:function(ke){D=ke},setClear:function(ke){le!==ke&&(n.clearStencil(ke),le=ke)},reset:function(){D=!1,ee=null,Y=null,_e=null,de=null,me=null,Fe=null,je=null,le=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],v=null,p=!1,g=null,y=null,S=null,x=null,T=null,w=null,_=null,M=new Pe(0,0,0),R=0,A=!1,P=null,O=null,U=null,I=null,B=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ie=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=ie>=2);let Z=null,K={},Te=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),$=new At().fromArray(Te),he=new At().fromArray(Ne);function Ae(D,ee,Y,_e){let de=new Uint8Array(4),me=n.createTexture();n.bindTexture(D,me),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<Y;Fe++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ee+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return me}let Le={};Le[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Me(n.DEPTH_TEST),o.setFunc(Cr),ue(!1),fe(vd),Me(n.CULL_FACE),J(Gi);function Me(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Ue(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function yt(D,ee){return d[D]!==ee?(n.bindFramebuffer(D,ee),d[D]=ee,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ee),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function Be(D,ee){let Y=m,_e=!1;if(D){Y=f.get(ee),Y===void 0&&(Y=[],f.set(ee,Y));let de=D.textures;if(Y.length!==de.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Fe=de.length;me<Fe;me++)Y[me]=n.COLOR_ATTACHMENT0+me;Y.length=de.length,_e=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,_e=!0);_e&&n.drawBuffers(Y)}function Ke(D){return v!==D?(n.useProgram(D),v=D,!0):!1}let oe={[Xs]:n.FUNC_ADD,[rg]:n.FUNC_SUBTRACT,[og]:n.FUNC_REVERSE_SUBTRACT};oe[ag]=n.MIN,oe[lg]=n.MAX;let k={[cg]:n.ZERO,[hg]:n.ONE,[ug]:n.SRC_COLOR,[Sd]:n.SRC_ALPHA,[_g]:n.SRC_ALPHA_SATURATE,[mg]:n.DST_COLOR,[fg]:n.DST_ALPHA,[dg]:n.ONE_MINUS_SRC_COLOR,[Md]:n.ONE_MINUS_SRC_ALPHA,[gg]:n.ONE_MINUS_DST_COLOR,[pg]:n.ONE_MINUS_DST_ALPHA,[vg]:n.CONSTANT_COLOR,[yg]:n.ONE_MINUS_CONSTANT_COLOR,[xg]:n.CONSTANT_ALPHA,[Sg]:n.ONE_MINUS_CONSTANT_ALPHA};function J(D,ee,Y,_e,de,me,Fe,je,le,ke){if(D===Gi){p===!0&&(Ue(n.BLEND),p=!1);return}if(p===!1&&(Me(n.BLEND),p=!0),D!==sg){if(D!==g||ke!==A){if((y!==Xs||T!==Xs)&&(n.blendEquation(n.FUNC_ADD),y=Xs,T=Xs),ke)switch(D){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ps:n.blendFunc(n.ONE,n.ONE);break;case yd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ge("WebGLState: Invalid blending: ",D);break}else switch(D){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yd:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xd:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",D);break}S=null,x=null,w=null,_=null,M.set(0,0,0),R=0,g=D,A=ke}return}de=de||ee,me=me||Y,Fe=Fe||_e,(ee!==y||de!==T)&&(n.blendEquationSeparate(oe[ee],oe[de]),y=ee,T=de),(Y!==S||_e!==x||me!==w||Fe!==_)&&(n.blendFuncSeparate(k[Y],k[_e],k[me],k[Fe]),S=Y,x=_e,w=me,_=Fe),(je.equals(M)===!1||le!==R)&&(n.blendColor(je.r,je.g,je.b,le),M.copy(je),R=le),g=D,A=!1}function se(D,ee){D.side===zn?Ue(n.CULL_FACE):Me(n.CULL_FACE);let Y=D.side===cn;ee&&(Y=!Y),ue(Y),D.blending===Wr&&D.transparent===!1?J(Gi):J(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let _e=D.stencilWrite;a.setTest(_e),_e&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),De(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function ue(D){P!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),P=D)}function fe(D){D!==tg?(Me(n.CULL_FACE),D!==O&&(D===vd?n.cullFace(n.BACK):D===ng?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),O=D}function Xe(D){D!==U&&(V&&n.lineWidth(D),U=D)}function De(D,ee,Y){D?(Me(n.POLYGON_OFFSET_FILL),(I!==ee||B!==Y)&&(I=ee,B=Y,o.getReversed()&&(ee=-ee,Y=-Y),n.polygonOffset(ee,Y))):Ue(n.POLYGON_OFFSET_FILL)}function Ze(D){D?Me(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function et(D){D===void 0&&(D=n.TEXTURE0+q-1),Z!==D&&(n.activeTexture(D),Z=D)}function ct(D,ee,Y){Y===void 0&&(Z===null?Y=n.TEXTURE0+q-1:Y=Z);let _e=K[Y];_e===void 0&&(_e={type:void 0,texture:void 0},K[Y]=_e),(_e.type!==D||_e.texture!==ee)&&(Z!==Y&&(n.activeTexture(Y),Z=Y),n.bindTexture(D,ee||Le[D]),_e.type=D,_e.texture=ee)}function F(){let D=K[Z];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ht(){try{n.compressedTexImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function nt(){try{n.compressedTexImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function xt(){try{n.texSubImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function ye(){try{n.texSubImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function Ut(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function ze(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function Ve(){try{n.texStorage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function C(){try{n.texStorage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function b(){try{n.texImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function H(){try{n.texImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function ae(D){return u[D]!==void 0?u[D]:n.getParameter(D)}function te(D,ee){u[D]!==ee&&(n.pixelStorei(D,ee),u[D]=ee)}function pe(D){$.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function xe(D){he.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),he.copy(D))}function j(D,ee){let Y=c.get(ee);Y===void 0&&(Y=new WeakMap,c.set(ee,Y));let _e=Y.get(D);_e===void 0&&(_e=n.getUniformBlockIndex(ee,D.name),n.uniformBlockBinding(ee,_e,_e),Y.set(D,_e))}function Q(D,ee,Y){let de=c.get(ee).get(D);l[de]!==Y&&(n.bindBufferBase(n.UNIFORM_BUFFER,de,Y),l[de]=Y)}function ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,K={},d={},l={},f=new WeakMap,m=[],v=null,p=!1,g=null,y=null,S=null,x=null,T=null,w=null,_=null,M=new Pe(0,0,0),R=0,A=!1,P=null,O=null,U=null,I=null,B=null,$.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Me,disable:Ue,bindFramebuffer:yt,drawBuffers:Be,useProgram:Ke,setBlending:J,setMaterial:se,setFlipSided:ue,setCullFace:fe,setLineWidth:Xe,setPolygonOffset:De,setScissorTest:Ze,activeTexture:et,bindTexture:ct,unbindTexture:F,compressedTexImage2D:Ht,compressedTexImage3D:nt,texImage2D:b,texImage3D:H,pixelStorei:te,getParameter:ae,updateUBOMapping:j,uniformBlockBinding:Q,texStorage2D:Ve,texStorage3D:C,texSubImage2D:xt,texSubImage3D:ye,compressedTexSubImage2D:Ut,compressedTexSubImage3D:ze,scissor:pe,viewport:xe,reset:ge}}function Iw(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,v=new FinalizationRegistry(C=>m.delete(C)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return p?new OffscreenCanvas(C,b):Lo("canvas")}function y(C,b,H){let ae=1,te=Ve(C);if((te.width>H||te.height>H)&&(ae=H/Math.max(te.width,te.height)),ae<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let pe=Math.floor(ae*te.width),xe=Math.floor(ae*te.height);d===void 0&&(d=g(pe,xe));let j=b?g(pe,xe):d;return j.width=pe,j.height=xe,j.getContext("2d").drawImage(C,0,0,pe,xe),He("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+pe+"x"+xe+")."),j}else return"data"in C&&He("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function S(C){return C.generateMipmaps}function x(C){n.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(C,b,H,ae,te,pe=!1){if(C!==null){if(n[C]!==void 0)return n[C];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xe;ae&&(xe=e.get("EXT_texture_norm16"),xe||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=b;if(b===n.RED&&(H===n.FLOAT&&(j=n.R32F),H===n.HALF_FLOAT&&(j=n.R16F),H===n.UNSIGNED_BYTE&&(j=n.R8),H===n.UNSIGNED_SHORT&&xe&&(j=xe.R16_EXT),H===n.SHORT&&xe&&(j=xe.R16_SNORM_EXT)),b===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.R8UI),H===n.UNSIGNED_SHORT&&(j=n.R16UI),H===n.UNSIGNED_INT&&(j=n.R32UI),H===n.BYTE&&(j=n.R8I),H===n.SHORT&&(j=n.R16I),H===n.INT&&(j=n.R32I)),b===n.RG&&(H===n.FLOAT&&(j=n.RG32F),H===n.HALF_FLOAT&&(j=n.RG16F),H===n.UNSIGNED_BYTE&&(j=n.RG8),H===n.UNSIGNED_SHORT&&xe&&(j=xe.RG16_EXT),H===n.SHORT&&xe&&(j=xe.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RG8UI),H===n.UNSIGNED_SHORT&&(j=n.RG16UI),H===n.UNSIGNED_INT&&(j=n.RG32UI),H===n.BYTE&&(j=n.RG8I),H===n.SHORT&&(j=n.RG16I),H===n.INT&&(j=n.RG32I)),b===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RGB8UI),H===n.UNSIGNED_SHORT&&(j=n.RGB16UI),H===n.UNSIGNED_INT&&(j=n.RGB32UI),H===n.BYTE&&(j=n.RGB8I),H===n.SHORT&&(j=n.RGB16I),H===n.INT&&(j=n.RGB32I)),b===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),H===n.UNSIGNED_INT&&(j=n.RGBA32UI),H===n.BYTE&&(j=n.RGBA8I),H===n.SHORT&&(j=n.RGBA16I),H===n.INT&&(j=n.RGBA32I)),b===n.RGB&&(H===n.UNSIGNED_SHORT&&xe&&(j=xe.RGB16_EXT),H===n.SHORT&&xe&&(j=xe.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),b===n.RGBA){let Q=pe?Do:it.getTransfer(te);H===n.FLOAT&&(j=n.RGBA32F),H===n.HALF_FLOAT&&(j=n.RGBA16F),H===n.UNSIGNED_BYTE&&(j=Q===dt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&xe&&(j=xe.RGBA16_EXT),H===n.SHORT&&xe&&(j=xe.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(C,b){let H;return C?b===null||b===si||b===$s?H=n.DEPTH24_STENCIL8:b===$n?H=n.DEPTH32F_STENCIL8:b===qr&&(H=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===si||b===$s?H=n.DEPTH_COMPONENT24:b===$n?H=n.DEPTH_COMPONENT32F:b===qr&&(H=n.DEPTH_COMPONENT16),H}function M(C,b){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==tn&&C.minFilter!==vn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function R(C){let b=new WeakRef(C);i.get(C).__ref=b,m.add(b),v.register(C,b,b)}function A(C){let b=i.get(C).__ref;b!==void 0&&(m.delete(b),v.unregister(b))}function P(C){U(C.target)}function O(C){I(C.target)}function U(C){C.removeEventListener("dispose",P),A(C),q(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function I(C){C.removeEventListener("dispose",O),A(C),ie(C)}function B(){for(let C of m){let b=C.deref();b!==void 0&&(b.isRenderTarget===!0?I(b):U(b))}m.clear(),u.clear()}function q(C){let b=i.get(C);if(b.__webglInit===void 0)return;let H=C.source,ae=f.get(H);if(ae){let te=ae[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&V(C),Object.keys(ae).length===0&&f.delete(H)}i.remove(C)}function V(C){let b=i.get(C);n.deleteTexture(b.__webglTexture);let H=C.source,ae=f.get(H);delete ae[b.__cacheKey],o.memory.textures--}function ie(C){let b=i.get(C);b.__depthDisposeCallback&&b.__depthDisposeCallback();let H=C.depthTexture;if(H&&H.renderTarget===C&&U(H),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let pe=0;pe<b.__webglFramebuffer[te].length;pe++)n.deleteFramebuffer(b.__webglFramebuffer[te][pe]);else n.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)n.deleteFramebuffer(b.__webglFramebuffer[te]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ae=C.textures;for(let te=0,pe=ae.length;te<pe;te++){let xe=i.get(ae[te]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(ae[te])}i.remove(C)}let W=0;function Z(){W=0}function K(){return W}function Te(C){W=C}function Ne(){let C=W;return C>=s.maxTextures&&He("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,C}function $(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.mipmapsAutoUpdate),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function he(C,b){let H=i.get(C);if(C.isVideoTexture&&Ut(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let ae=C.image;if(ae===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{se(H,C,b);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+b)}function Ae(C,b){let H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){se(H,C,b);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+b)}function Le(C,b){let H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){se(H,C,b);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+b)}function Me(C,b){let H=i.get(C);if(C.version>0&&H.__version!==C.version){ue(H,C,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+b)}let Ue={[Zl]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[jl]:n.MIRRORED_REPEAT},yt={[tn]:n.NEAREST,[Eg]:n.NEAREST_MIPMAP_NEAREST,[ya]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[Ac]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},Be={[Cg]:n.NEVER,[Dd]:n.ALWAYS,[Rg]:n.LESS,[Pd]:n.LEQUAL,[Ig]:n.EQUAL,[Nd]:n.GEQUAL,[Pg]:n.GREATER,[Ng]:n.NOTEQUAL};function Ke(C,b){if(b.type===$n&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===vn||b.magFilter===Ac||b.magFilter===ya||b.magFilter===Vi||b.minFilter===vn||b.minFilter===Ac||b.minFilter===ya||b.minFilter===Vi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Ue[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Ue[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Ue[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,yt[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Be[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==ya&&b.minFilter!==Vi||b.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function oe(C,b){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",P),R(b));let ae=b.source,te=f.get(ae);te===void 0&&(te={},f.set(ae,te));let pe=$(b);if(pe!==C.__cacheKey){te[pe]===void 0&&(te[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[pe].usedTimes++;let xe=te[C.__cacheKey];xe!==void 0&&(te[C.__cacheKey].usedTimes--,xe.usedTimes===0&&V(b)),C.__cacheKey=pe,C.__webglTexture=te[pe].texture}return H}function k(C,b,H){return Math.floor(Math.floor(C/H)/b)}function J(C,b,H,ae){let pe=C.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,H,ae,b.data);else{pe.sort((D,ee)=>D.start-ee.start);let xe=0;for(let D=1;D<pe.length;D++){let ee=pe[xe],Y=pe[D],_e=ee.start+ee.count,de=k(Y.start,b.width,4),me=k(ee.start,b.width,4);Y.start<=_e+1&&de===me&&k(Y.start+Y.count-1,b.width,4)===de?ee.count=Math.max(ee.count,Y.start+Y.count-ee.start):(++xe,pe[xe]=Y)}pe.length=xe+1;let j=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let D=0,ee=pe.length;D<ee;D++){let Y=pe[D],_e=Math.floor(Y.start/4),de=Math.ceil(Y.count/4),me=_e%b.width,Fe=Math.floor(_e/b.width),je=de,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(n.TEXTURE_2D,0,me,Fe,je,le,H,ae,b.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function se(C,b,H){let ae=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=n.TEXTURE_3D);let te=oe(C,b),pe=b.source;t.bindTexture(ae,C.__webglTexture,n.TEXTURE0+H);let xe=i.get(pe);if(pe.version!==xe.__version||te===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let le=it.getPrimaries(it.workingColorSpace),ke=b.colorSpace===Xi?null:it.getPrimaries(b.colorSpace),Je=b.colorSpace===Xi||le===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let Q=y(b.image,!1,s.maxTextureSize);Q=ze(b,Q);let ge=r.convert(b.format,b.colorSpace),D=r.convert(b.type),ee=w(b.internalFormat,ge,D,b.normalized,b.colorSpace,b.isVideoTexture);Ke(ae,b);let Y,_e=b.mipmaps,de=b.isVideoTexture!==!0,me=xe.__version===void 0||te===!0,Fe=pe.dataReady,je=M(b,Q);if(b.isDepthTexture)ee=_(b.format===Wi,b.type),me&&(de?t.texStorage2D(n.TEXTURE_2D,1,ee,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ee,Q.width,Q.height,0,ge,D,null));else if(b.isDataTexture)if(_e.length>0){de&&me&&t.texStorage2D(n.TEXTURE_2D,je,ee,_e[0].width,_e[0].height);for(let le=0,ke=_e.length;le<ke;le++)Y=_e[le],de?Fe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Y.width,Y.height,ge,D,Y.data):t.texImage2D(n.TEXTURE_2D,le,ee,Y.width,Y.height,0,ge,D,Y.data);b.generateMipmaps=!1}else de?(me&&t.texStorage2D(n.TEXTURE_2D,je,ee,Q.width,Q.height),Fe&&J(b,Q,ge,D)):t.texImage2D(n.TEXTURE_2D,0,ee,Q.width,Q.height,0,ge,D,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){de&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,ee,_e[0].width,_e[0].height,Q.depth);for(let le=0,ke=_e.length;le<ke;le++)if(Y=_e[le],b.format!==ri)if(ge!==null)if(de){if(Fe)if(b.layerUpdates.size>0){let Je=Hd(Y.width,Y.height,b.format,b.type);for(let be of b.layerUpdates){let _t=Y.data.subarray(be*Je/Y.data.BYTES_PER_ELEMENT,(be+1)*Je/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,be,Y.width,Y.height,1,ge,_t)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Y.width,Y.height,Q.depth,ge,Y.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,ee,Y.width,Y.height,Q.depth,0,Y.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?Fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Y.width,Y.height,Q.depth,ge,D,Y.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,ee,Y.width,Y.height,Q.depth,0,ge,D,Y.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{de&&me&&t.texStorage2D(n.TEXTURE_2D,je,ee,_e[0].width,_e[0].height);for(let le=0,ke=_e.length;le<ke;le++)Y=_e[le],b.format!==ri?ge!==null?de?Fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Y.width,Y.height,ge,Y.data):t.compressedTexImage2D(n.TEXTURE_2D,le,ee,Y.width,Y.height,0,Y.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?Fe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Y.width,Y.height,ge,D,Y.data):t.texImage2D(n.TEXTURE_2D,le,ee,Y.width,Y.height,0,ge,D,Y.data)}else if(b.isDataArrayTexture)if(de){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,ee,Q.width,Q.height,Q.depth),Fe)if(b.layerUpdates.size>0){let le=Hd(Q.width,Q.height,b.format,b.type);for(let ke of b.layerUpdates){let Je=Q.data.subarray(ke*le/Q.data.BYTES_PER_ELEMENT,(ke+1)*le/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ke,Q.width,Q.height,1,ge,D,Je)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ge,D,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ee,Q.width,Q.height,Q.depth,0,ge,D,Q.data);else if(b.isData3DTexture)de?(me&&t.texStorage3D(n.TEXTURE_3D,je,ee,Q.width,Q.height,Q.depth),Fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ge,D,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ee,Q.width,Q.height,Q.depth,0,ge,D,Q.data);else if(b.isFramebufferTexture){if(me)if(de)t.texStorage2D(n.TEXTURE_2D,je,ee,Q.width,Q.height);else{let le=Q.width,ke=Q.height;for(let Je=0;Je<je;Je++)t.texImage2D(n.TEXTURE_2D,Je,ee,le,ke,0,ge,D,null),le>>=1,ke>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),Q.parentNode!==le){le.appendChild(Q),u.add(b),le.onpaint=ke=>{let Je=ke.changedElements;for(let be of u)Je.includes(be.image)&&(be.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let Je=n.RGBA,be=n.RGBA,_t=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Je,be,_t,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(_e.length>0){if(de&&me){let le=Ve(_e[0]);t.texStorage2D(n.TEXTURE_2D,je,ee,le.width,le.height)}for(let le=0,ke=_e.length;le<ke;le++)Y=_e[le],de?Fe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ge,D,Y):t.texImage2D(n.TEXTURE_2D,le,ee,ge,D,Y);b.generateMipmaps=!1}else if(de){if(me){let le=Ve(Q);t.texStorage2D(n.TEXTURE_2D,je,ee,le.width,le.height)}Fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,D,Q)}else t.texImage2D(n.TEXTURE_2D,0,ee,ge,D,Q);S(b)&&b.mipmapsAutoUpdate===!0&&x(ae),xe.__version=pe.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ue(C,b,H){if(b.image.length!==6)return;let ae=oe(C,b),te=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+H);let pe=i.get(te);if(te.version!==pe.__version||ae===!0){t.activeTexture(n.TEXTURE0+H);let xe=it.getPrimaries(it.workingColorSpace),j=b.colorSpace===Xi?null:it.getPrimaries(b.colorSpace),Q=b.colorSpace===Xi||xe===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ge=b.isCompressedTexture||b.image[0].isCompressedTexture,D=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let be=0;be<6;be++)!ge&&!D?ee[be]=y(b.image[be],!0,s.maxCubemapSize):ee[be]=D?b.image[be].image:b.image[be],ee[be]=ze(b,ee[be]);let Y=ee[0],_e=r.convert(b.format,b.colorSpace),de=r.convert(b.type),me=w(b.internalFormat,_e,de,b.normalized,b.colorSpace),Fe=b.isVideoTexture!==!0,je=pe.__version===void 0||ae===!0,le=te.dataReady,ke=M(b,Y);Ke(n.TEXTURE_CUBE_MAP,b);let Je;if(b.isDepthTexture){if(me=_(b.format===Wi,b.type),je)if(Fe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,me,Y.width,Y.height);else for(let be=0;be<6;be++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,me,Y.width,Y.height,0,_e,de,null)}else if(ge){Fe&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,me,Y.width,Y.height);for(let be=0;be<6;be++){Je=ee[be].mipmaps;for(let _t=0;_t<Je.length;_t++){let jt=Je[_t];b.format!==ri?_e!==null?Fe?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t,0,0,jt.width,jt.height,_e,jt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t,me,jt.width,jt.height,0,jt.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t,0,0,jt.width,jt.height,_e,de,jt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t,me,jt.width,jt.height,0,_e,de,jt.data)}}}else{if(Je=b.mipmaps,Fe&&je){Je.length>0&&ke++;let be=Ve(ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,me,be.width,be.height)}for(let be=0;be<6;be++)if(D){Fe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ee[be].width,ee[be].height,_e,de,ee[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,me,ee[be].width,ee[be].height,0,_e,de,ee[be].data);for(let _t=0;_t<Je.length;_t++){let Qi=Je[_t].image[be].image;Fe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t+1,0,0,Qi.width,Qi.height,_e,de,Qi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t+1,me,Qi.width,Qi.height,0,_e,de,Qi.data)}}else{Fe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,_e,de,ee[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,me,_e,de,ee[be]);for(let _t=0;_t<Je.length;_t++){let jt=Je[_t];Fe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t+1,0,0,_e,de,jt.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t+1,me,_e,de,jt.image[be])}}}S(b)&&b.mipmapsAutoUpdate===!0&&x(n.TEXTURE_CUBE_MAP),pe.__version=te.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function fe(C,b,H,ae,te,pe){let xe=r.convert(H.format,H.colorSpace),j=r.convert(H.type),Q=w(H.internalFormat,xe,j,H.normalized,H.colorSpace),ge=i.get(b),D=i.get(H);if(D.__renderTarget=b,!ge.__hasExternalTextures){let ee=Math.max(1,b.width>>pe),Y=Math.max(1,b.height>>pe);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,pe,Q,ee,Y,b.depth,0,xe,j,null):t.texImage2D(te,pe,Q,ee,Y,0,xe,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ye(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,te,D.__webglTexture,0,xt(b)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,te,D.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(C,b,H){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer){let ae=b.depthTexture,te=ae&&ae.isDepthTexture?ae.type:null,pe=_(b.stencilBuffer,te),xe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ye(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(b),pe,b.width,b.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(b),pe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,pe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,C)}else{let ae=b.textures;for(let te=0;te<ae.length;te++){let pe=ae[te],xe=r.convert(pe.format,pe.colorSpace),j=r.convert(pe.type),Q=w(pe.internalFormat,xe,j,pe.normalized,pe.colorSpace);ye(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(b),Q,b.width,b.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(b),Q,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Q,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(C,b,H){let ae=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=i.get(b.depthTexture);te.__renderTarget=b;let pe=ae?b.depthTexture.image[0]:b.depthTexture.image;(!te.__webglTexture||pe.width!==b.width||pe.height!==b.height)&&(pe.width=b.width,pe.height=b.height,b.depthTexture.needsUpdate=!0),ae?Me(b.depthTexture,0):he(b.depthTexture,0);let xe=te.__webglTexture,j=xt(b),Q=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,ge=b.depthTexture.format===Wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ui)ye(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,Q,xe,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,ge,Q,xe,0);else if(b.depthTexture.format===Wi)ye(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,Q,xe,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,ge,Q,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(C){let b=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let ae=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){let te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",te)};ae.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=ae}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let ae=0;ae<6;ae++)De(b.__webglFramebuffer[ae],C,ae);else C.texture.mipmaps.length>0?De(b.__webglFramebuffer[0],C,0):De(b.__webglFramebuffer,C,0);else if(H){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=n.createRenderbuffer(),Xe(b.__webglDepthbuffer[ae],C,!1);else{let te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,pe)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Xe(b.__webglDepthbuffer,C,!1);else{let te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,pe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(C,b,H){let ae=i.get(C);b!==void 0&&fe(ae.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ze(C)}function ct(C){let b=C.texture,H=i.get(C),ae=i.get(b);C.addEventListener("dispose",O),R(C);let te=C.textures,pe=C.isWebGLCubeRenderTarget===!0,xe=te.length>1;if(xe||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=b.version,o.memory.textures++),pe){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(b.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let Q=0;Q<b.mipmaps.length;Q++)H.__webglFramebuffer[j][Q]=n.createFramebuffer()}else H.__webglFramebuffer[j]=n.createFramebuffer()}else{if(b.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)H.__webglFramebuffer[j]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(xe)for(let j=0,Q=te.length;j<Q;j++){let ge=i.get(te[j]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ye(C)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<te.length;j++){let Q=te[j];H.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[j]);let ge=r.convert(Q.format,Q.colorSpace),D=r.convert(Q.type),ee=w(Q.internalFormat,ge,D,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),Y=xt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,ee,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,H.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,b);for(let j=0;j<6;j++)if(b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)fe(H.__webglFramebuffer[j][Q],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else fe(H.__webglFramebuffer[j],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);S(b)?x(n.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let j=0,Q=te.length;j<Q;j++){let ge=te[j],D=i.get(ge),ee=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,D.__webglTexture),Ke(ee,ge),fe(H.__webglFramebuffer,C,ge,n.COLOR_ATTACHMENT0+j,ee,0),S(ge)&&x(ee)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,ae.__webglTexture),Ke(j,b),b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)fe(H.__webglFramebuffer[Q],C,b,n.COLOR_ATTACHMENT0,j,Q);else fe(H.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,j,0);S(b)?x(j):b.mipmaps.length>0&&n.texParameteri(j,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Ze(C)}function F(C){let b=C.textures;for(let H=0,ae=b.length;H<ae;H++){let te=b[H];if(S(te)&&te.mipmapsAutoUpdate===!0){let pe=T(C),xe=i.get(te).__webglTexture;t.bindTexture(pe,xe),x(pe),t.unbindTexture()}}}let Ht=[];function nt(C){if(C.samples>0){if(ye(C)===!1){let b=C.textures,H=C.width,ae=C.height,te=n.COLOR_BUFFER_BIT,pe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(C),j=b.length>1;if(j)for(let ge=0;ge<b.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ge=0;ge<b.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);let D=i.get(b[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,D,0)}n.blitFramebuffer(0,0,H,ae,0,0,H,ae,te,n.NEAREST),l===!0&&(Ht.length=0,Ht.push(n.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Ht.push(pe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let ge=0;ge<b.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);let D=i.get(b[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,D,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function xt(C){return Math.min(s.maxSamples,C.samples)}function ye(C){let b=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ut(C){let b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function ze(C,b){let H=C.colorSpace,ae=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==No&&H!==Xi&&(it.getTransfer(H)===dt?(ae!==ri||te!==Cn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",H)),b}function Ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ne,this.resetTextureUnits=Z,this.getTextureUnits=K,this.setTextureUnits=Te,this.setTexture2D=he,this.setTexture2DArray=Ae,this.setTexture3D=Le,this.setTextureCube=Me,this.rebindTextures=et,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ye,this.dispose=B}function Pw(n,e){function t(i,s=Xi){let r,o=it.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===Rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ic)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ad)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===wd)return n.BYTE;if(i===Td)return n.SHORT;if(i===qr)return n.UNSIGNED_SHORT;if(i===Cc)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===Kt)return n.HALF_FLOAT;if(i===Rd)return n.ALPHA;if(i===Id)return n.RGB;if(i===ri)return n.RGBA;if(i===Ui)return n.DEPTH_COMPONENT;if(i===Wi)return n.DEPTH_STENCIL;if(i===Pc)return n.RED;if(i===Nc)return n.RED_INTEGER;if(i===ms)return n.RG;if(i===Dc)return n.RG_INTEGER;if(i===Lc)return n.RGBA_INTEGER;if(i===xa||i===Sa||i===Ma||i===ba)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oc||i===Fc||i===Uc||i===Bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kc||i===zc||i===Hc||i===Gc||i===Vc||i===Ea||i===Wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===kc||i===zc)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Hc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gc)return r.COMPRESSED_R11_EAC;if(i===Vc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ea)return r.COMPRESSED_RG11_EAC;if(i===Wc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xc||i===qc||i===Yc||i===$c||i===Kc||i===Jc||i===Zc||i===jc||i===Qc||i===eh||i===th||i===nh||i===ih||i===sh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$c)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===th)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ih)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rh||i===oh||i===ah)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===rh)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ah)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lh||i===ch||i===wa||i===hh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===lh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Nw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dw=`
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

}`,tf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Yo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Xt({vertexShader:Nw,fragmentShader:Dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new zs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nf=class extends pi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,v=typeof XRWebGLBinding<"u",p=new tf,g={},y=t.getContextAttributes(),S=null,x=null,T=[],w=[],_=new re,M=null,R=null,A=new pn;A.viewport=new At;let P=new pn;P.viewport=new At;let O=[A,P],U=new bc,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let he=T[$];return he===void 0&&(he=new Nr,T[$]=he),he.getTargetRaySpace()},this.getControllerGrip=function($){let he=T[$];return he===void 0&&(he=new Nr,T[$]=he),he.getGripSpace()},this.getHand=function($){let he=T[$];return he===void 0&&(he=new Nr,T[$]=he),he.getHandSpace()};function q($){let he=w.indexOf($.inputSource);if(he===-1)return;let Ae=T[he];Ae!==void 0&&(Ae.update($.inputSource,$.frame,c||o),Ae.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ie);for(let $=0;$<T.length;$++){let he=w[$];he!==null&&(w[$]=null,T[$].disconnect(he))}I=null,B=null,p.reset();for(let $ in g)delete g[$];if(e.setRenderTarget(S),f=null,d=null,u=null,s=null,x=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),R!==null){let $=R.camera;$.fov=R.fov,$.zoom=R.zoom,$.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Le=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=y.stencil?Wi:Ui,Le=y.stencil?$s:si);let Ue={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new zt(d.textureWidth,d.textureHeight,{format:ri,type:Cn,depthTexture:new Hi(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new zt(f.framebufferWidth,f.framebufferHeight,{format:ri,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ie($){for(let he=0;he<$.removed.length;he++){let Ae=$.removed[he],Le=w.indexOf(Ae);Le>=0&&(w[Le]=null,T[Le].disconnect(Ae))}for(let he=0;he<$.added.length;he++){let Ae=$.added[he],Le=w.indexOf(Ae);if(Le===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=w.length){w.push(Ae),Le=Ue;break}else if(w[Ue]===null){w[Ue]=Ae,Le=Ue;break}if(Le===-1)break}let Me=T[Le];Me&&Me.connect(Ae)}}function W($,he){he===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(he.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let he=$.near,Ae=$.far;p.texture!==null&&(p.depthNear>0&&(he=p.depthNear),p.depthFar>0&&(Ae=p.depthFar)),U.near=P.near=A.near=he,U.far=P.far=A.far=Ae,(I!==U.near||B!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,B=U.far),U.layers.mask=$.layers.mask|6,A.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;let Le=$.parent,Me=U.cameras;W(U,Le);for(let Ue=0;Ue<Me.length;Ue++)W(Me[Ue],Le);U.projectionMatrix.copy(A.projectionMatrix),U.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&$.isPerspectiveCamera&&(R={camera:$,fov:$.fov,zoom:$.zoom}),Z($,U,Le)};function Z($,he,Ae){Ae===null?$.matrix.copy(he.matrixWorld):($.matrix.copy(Ae.matrixWorld),$.matrix.invert(),$.matrix.multiply(he.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ec*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function($){return g[$]};let K=null;function Te($,he){if(h=he.getViewerPose(c||o),m=he,h!==null){let Ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Le=!1;Ae.length!==U.cameras.length&&(U.cameras.length=0,Le=!0);for(let Be=0;Be<Ae.length;Be++){let Ke=Ae[Be],oe=null;if(f!==null)oe=f.getViewport(Ke);else{let J=u.getViewSubImage(d,Ke);oe=J.viewport,Be===0&&(e.setRenderTargetTextures(x,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(x))}let k=O[Be];k===void 0&&(k=new pn,k.layers.enable(Be),k.viewport=new At,O[Be]=k),k.matrix.fromArray(Ke.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(Ke.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(oe.x,oe.y,oe.width,oe.height),Be===0&&(U.matrix.copy(k.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Le===!0&&U.cameras.push(k)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let Be=u.getDepthInformation(Ae[0]);Be&&Be.isValid&&Be.texture&&p.init(Be,s.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let Be=0;Be<Ae.length;Be++){let Ke=Ae[Be].camera;if(Ke){let oe=g[Ke];oe||(oe=new Yo,g[Ke]=oe);let k=u.getCameraImage(Ke);oe.sourceTexture=k}}}}for(let Ae=0;Ae<T.length;Ae++){let Le=w[Ae],Me=T[Ae];Le!==null&&Me!==void 0&&Me.update(Le,he,c||o)}K&&K($,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),m=null}let Ne=new f_;Ne.setAnimationLoop(Te),this.setAnimationLoop=function($){K=$},this.dispose=function(){}}},Lw=new vt,b_=new We;b_.set(-1,0,0,0,1,0,0,0,1);function Ow(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Bd(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,y,S,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,y,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===cn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===cn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=e.get(g),S=y.envMap,x=y.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(Lw.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(b_),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=S*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,y){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===cn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){let y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Fw(n,e,t,i){let s={},r={};function o(y,S){let x=S.program;i.uniformBlockBinding(y,x,s[y.id])}function a(y,S){let x=s[y.id];x===void 0&&(m(y),x=l(y),s[y.id]=x,y.addEventListener("dispose",p));let T=S.program;i.updateUBOMapping(y,T);let w=e.render.frame;r[y.id]!==w&&(c(y),r[y.id]=w)}function l(y){let S=n.createBuffer(),x=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,x,T),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(y){let S=s[y.id],x=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,_=x.length;w<_;w++){let M=x[w];if(Array.isArray(M))for(let R=0,A=M.length;R<A;R++)h(M[R],w,R,T);else h(M,w,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,S,x,T){if(d(y,S,x,T)===!0){let w=y.__offset,_=y.value;if(Array.isArray(_)){let M=0;for(let R=0;R<_.length;R++){let A=_[R],P=v(A,!0);u(A,y.__data,M),M+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,y.__data)}}function u(y,S,x){typeof y=="number"||typeof y=="boolean"?S[x]=y:y.isMatrix3?(S[x]=y.elements[0],S[x+1]=y.elements[1],S[x+2]=y.elements[2],S[x+3]=0,S[x+4]=y.elements[3],S[x+5]=y.elements[4],S[x+6]=y.elements[5],S[x+7]=0,S[x+8]=y.elements[6],S[x+9]=y.elements[7],S[x+10]=y.elements[8],S[x+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-x),x):y.toArray(S,x)}function d(y,S,x,T){let w=y.value,_=S+"_"+x;if(Array.isArray(w)){T[_]===void 0&&(T[_]=[]);let M=T[_],R=!1;for(let A=0;A<w.length;A++)f(w[A],M,A)===!0&&(R=!0);return R}return f(w,T,_)}function f(y,S,x){if(S[x]===void 0)return typeof y=="number"||typeof y=="boolean"?S[x]=y:ArrayBuffer.isView(y)?S[x]=y.slice():S[x]=y.clone(),!0;{let T=S[x];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return S[x]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function m(y){let S=y.uniforms,x=0,T=16;for(let _=0,M=S.length;_<M;_++){let R=Array.isArray(S[_])?S[_]:[S[_]];for(let A=0,P=R.length;A<P;A++){let O=R[A],U=Array.isArray(O.value)?O.value:[O.value],I=Array.isArray(S[_])||Array.isArray(O.value),B=x;for(let V=0,ie=U.length;V<ie;V++){let W=U[V],Z=v(W,I),K=x%T,Te=K%Z.boundary,Ne=K+Te;x+=Te,Ne!==0&&T-Ne<Z.storage&&(x+=T-Ne),V===0&&(B=x),x+=Z.storage}let q=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new q((x-B)/Float32Array.BYTES_PER_ELEMENT),O.__offset=B}}let w=x%T;return w>0&&(x+=T-w),y.__size=x,y.__cache={},this}function v(y,S){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=16,x.storage=48):y.isMatrix4?(x.boundary=16,x.storage=64):y.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(x.boundary=16,x.storage=y.byteLength):He("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function p(y){let S=y.target;S.removeEventListener("dispose",p),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var Uw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function Bw(){return vi===null&&(vi=new Go(Uw,16,16,ms,Kt),vi.name="DFG_LUT",vi.minFilter=vn,vi.magFilter=vn,vi.wrapS=di,vi.wrapT=di,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var mh=class{constructor(e={}){let{canvas:t=Lg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Cn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let v=f,p=new Set([Lc,Dc,Nc]),g=new Set([Cn,si,qr,$s,Rc,Ic]),y=new Uint32Array(4),S=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},T=null,w=null,_=[],M=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,O=null,U=null,I=null,B=null;this._outputColorSpace=_n;let q=0,V=0,ie=null,W=-1,Z=null,K=new At,Te=new At,Ne=null,$=new Pe(0),he=0,Ae=t.width,Le=t.height,Me=1,Ue=null,yt=null,Be=new At(0,0,Ae,Le),Ke=new At(0,0,Ae,Le),oe=!1,k=new as,J=new sc,se=!1,ue=!1,fe=new vt,Xe=new N,De=new At,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function ct(){return ie===null?Me:1}let F=i;function Ht(E,L){return t.getContext(E,L)}let nt,xt,ye,Ut,ze,Ve,C,b,H,ae,te,pe,xe,j,Q,ge,D,ee,Y,_e,de,me,Fe;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",be,!1),F===null){let L="webgl2";if(F=Ht(L,E),F===null)throw Ht(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(E){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ge("WebGLRenderer: "+E.message),E}function je(){nt=new Kb(F),nt.init(),de=new Pw(F,nt),xt=new Bb(F,nt,e,de),ye=new Rw(F,nt),xt.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),U=F.createFramebuffer(),I=F.createFramebuffer(),B=F.createFramebuffer(),Ut=new jb(F),ze=new mw,Ve=new Iw(F,nt,ye,ze,xt,de,Ut),C=new $b(A),b=new eS(F),me=new Fb(F,b),H=new Jb(F,b,Ut,me),ae=new eE(F,H,b,me,Ut),ee=new Qb(F,xt,Ve),Q=new kb(ze),te=new pw(A,C,nt,xt,me,Q),pe=new Ow(A,ze),xe=new _w,j=new bw(nt),D=new Ob(A,C,ye,ae,m,l),ge=new Cw(A,ae,xt),Fe=new Fw(F,Ut,xt,ye),Y=new Ub(F,nt,Ut),_e=new Zb(F,nt,Ut),Ut.programs=te.programs,A.capabilities=xt,A.extensions=nt,A.properties=ze,A.renderLists=xe,A.shadowMap=ge,A.state=ye,A.info=Ut}v!==Cn&&(R=new nE(v,t.width,t.height,a,s,r));let le=new nf(A,F);this.xr=le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(E){E!==void 0&&(Me=E,this.setSize(Ae,Le,!1))},this.getSize=function(E){return E.set(Ae,Le)},this.setSize=function(E,L,X=!0){if(le.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=E,Le=L,t.width=Math.floor(E*Me),t.height=Math.floor(L*Me),X===!0&&(t.style.width=E+"px",t.style.height=L+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(Ae*Me,Le*Me).floor()},this.setDrawingBufferSize=function(E,L,X){Ae=E,Le=L,Me=X,t.width=Math.floor(E*X),t.height=Math.floor(L*X),this.setViewport(0,0,E,L)},this.setEffects=function(E){if(v===Cn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let L=0;L<E.length;L++)if(E[L].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(K)},this.getViewport=function(E){return E.copy(Be)},this.setViewport=function(E,L,X,z){E.isVector4?Be.set(E.x,E.y,E.z,E.w):Be.set(E,L,X,z),ye.viewport(K.copy(Be).multiplyScalar(ct()).round())},this.getScissor=function(E){return E.copy(Ke)},this.setScissor=function(E,L,X,z){E.isVector4?Ke.set(E.x,E.y,E.z,E.w):Ke.set(E,L,X,z),ye.scissor(Te.copy(Ke).multiplyScalar(ct()).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(E){ye.setScissorTest(oe=E)},this.setOpaqueSort=function(E){Ue=E},this.setTransparentSort=function(E){yt=E},this.getClearColor=function(E){return E.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(E=!0,L=!0,X=!0){let z=0;if(E){let G=!1;if(ie!==null){let Se=ie.texture.format;G=p.has(Se)}if(G){let Se=ie.texture.type,Ce=g.has(Se),ve=D.getClearColor(),we=D.getClearAlpha(),Oe=ve.r,Ye=ve.g,at=ve.b;Ce?(y[0]=Oe,y[1]=Ye,y[2]=at,y[3]=we,F.clearBufferuiv(F.COLOR,0,y)):(S[0]=Oe,S[1]=Ye,S[2]=at,S[3]=we,F.clearBufferiv(F.COLOR,0,S))}else z|=F.COLOR_BUFFER_BIT}L&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",be,!1),D.dispose(),xe.dispose(),j.dispose(),Ve.dispose(),ze.dispose(),C.dispose(),ae.dispose(),H.dispose(),me.dispose(),Fe.dispose(),te.dispose(),le.dispose(),le.removeEventListener("sessionstart",dm),le.removeEventListener("sessionend",fm),Is.stop()};function ke(E){E.preventDefault(),Od("WebGLRenderer: Context Lost."),P=!0}function Je(){Od("WebGLRenderer: Context Restored."),P=!1;let E=Ut.autoReset,L=ge.enabled,X=ge.autoUpdate,z=ge.needsUpdate,G=ge.type;je(),Ut.autoReset=E,ge.enabled=L,ge.autoUpdate=X,ge.needsUpdate=z,ge.type=G}function be(E){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function _t(E){let L=E.target;L.removeEventListener("dispose",_t),jt(L)}function jt(E){Qi(E),ze.remove(E)}function Qi(E){let L=ze.get(E).programs;L!==void 0&&(L.forEach(function(X){te.releaseProgram(X)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,X,z,G,Se){L===null&&(L=Ze);let Ce=G.isMesh&&G.matrixWorld.determinantAffine()<0,ve=By(E,L,X,z,G);ye.setMaterial(z,Ce);let we=X.index,Oe=1;if(z.wireframe===!0){if(we=H.getWireframeAttribute(X),we===void 0)return;Oe=2}let Ye=X.drawRange,at=X.attributes.position,Re=Ye.start*Oe,lt=(Ye.start+Ye.count)*Oe;Se!==null&&(Re=Math.max(Re,Se.start*Oe),lt=Math.min(lt,(Se.start+Se.count)*Oe)),we!==null?(Re=Math.max(Re,0),lt=Math.min(lt,we.count)):at!=null&&(Re=Math.max(Re,0),lt=Math.min(lt,at.count));let Gt=lt-Re;if(Gt<0||Gt===1/0)return;me.setup(G,z,ve,X,we);let Et,St=Y;if(we!==null&&(Et=b.get(we),St=_e,St.setIndex(Et)),G.isMesh)z.wireframe===!0?(ye.setLineWidth(z.wireframeLinewidth*ct()),St.setMode(F.LINES)):St.setMode(F.TRIANGLES);else if(G.isLine){let hn=z.linewidth;hn===void 0&&(hn=1),ye.setLineWidth(hn*ct()),G.isLineSegments?St.setMode(F.LINES):G.isLineLoop?St.setMode(F.LINE_LOOP):St.setMode(F.LINE_STRIP)}else G.isPoints?St.setMode(F.POINTS):G.isSprite&&St.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))St.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let hn=G._multiDrawStarts,Ie=G._multiDrawCounts,gn=G._multiDrawCount,pt=we?b.get(we).bytesPerElement:1,Ps=ze.get(z).currentProgram.getUniforms();for(let un=0;un<gn;un++)Ps.setValue(F,"_gl_DrawID",un),St.render(hn[un]/pt,Ie[un])}else if(G.isInstancedMesh)St.renderInstances(Re,Gt,G.count);else if(X.isInstancedBufferGeometry){let hn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ie=Math.min(X.instanceCount,hn);St.renderInstances(Re,Gt,Ie)}else St.render(Re,Gt)};function um(E,L,X,z){O!==null&&E.isNodeMaterial&&O.setObject(z,E),se===!0&&Q.setState(E,X,!1),E.transparent===!0&&E.side===zn&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,xo(E,L,z),E.side=fs,E.needsUpdate=!0,xo(E,L,z),E.side=zn):xo(E,L,z)}this.compile=function(E,L,X=null){X===null&&(X=E),O!==null&&O.renderStart(E,L,X),w=j.get(X),w.init(L),M.push(w),X.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),E!==X&&E.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),ue=this.localClippingEnabled,se=Q.init(this.clippingPlanes,ue),se===!0&&Q.setGlobalState(this.clippingPlanes,L),O!==null&&ge.render(w.state.shadowsArray,X,L);let z=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Se=G.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){let ve=Se[Ce];um(ve,X,L,G),z.add(ve)}else um(Se,X,L,G),z.add(Se)}),w=M.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(E,L,X=null){let z=this.compile(E,L,X);return new Promise(G=>{function Se(){if(z.forEach(function(Ce){let we=ze.get(Ce).currentProgram;(we===void 0||we.isReady())&&z.delete(Ce)}),z.size===0){G(E);return}setTimeout(Se,10)}nt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Nu=null;function Fy(E){Nu&&Nu(E)}function dm(){Is.stop()}function fm(){Is.start()}let Is=new f_;Is.setAnimationLoop(Fy),typeof self<"u"&&Is.setContext(self),this.setAnimationLoop=function(E){Nu=E,le.setAnimationLoop(E),E===null?Is.stop():Is.start()},le.addEventListener("sessionstart",dm),le.addEventListener("sessionend",fm),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(E,L);let X=le.enabled===!0&&le.isPresenting===!0,z=R!==null&&(ie===null||X)&&R.begin(A,ie);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(L),L=le.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,L,ie),w=j.get(E,M.length),w.init(L),w.state.textureUnits=Ve.getTextureUnits(),M.push(w),fe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?J.setFromArrayCamera(L):k.setFromProjectionMatrix(fe,qn,L.reversedDepth),ue=this.localClippingEnabled,se=Q.init(this.clippingPlanes,ue),T=xe.get(E,_.length),T.init(),_.push(T),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ce=A.xr.getDepthSensingMesh();Ce!==null&&Du(Ce,L,-1/0,A.sortObjects)}Du(E,L,0,A.sortObjects),T.finish(),O!==null&&O.updateLights(w.state.lightsArray),A.sortObjects===!0&&T.sort(Ue,yt),et=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,et&&D.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),se===!0&&Q.beginShadows();let G=w.state.shadowsArray;if(ge.render(G,E,L),se===!0&&Q.endShadows(),(z&&R.hasRenderPass())===!1){let Ce=T.opaque,ve=T.transmissive;if(w.setupLights(),L.isArrayCamera){let we=L.cameras;if(ve.length>0)for(let Oe=0,Ye=we.length;Oe<Ye;Oe++){let at=we[Oe];mm(Ce,ve,E,at)}et&&D.render(E);for(let Oe=0,Ye=we.length;Oe<Ye;Oe++){let at=we[Oe];pm(T,E,at,at.viewport)}}else ve.length>0&&mm(Ce,ve,E,L),et&&D.render(E),pm(T,E,L)}ie!==null&&V===0&&(Ve.updateMultisampleRenderTarget(ie),Ve.updateRenderTargetMipmap(ie)),z&&R.end(A),E.isScene===!0&&E.onAfterRender(A,E,L),me.resetDefaultState(),W=-1,Z=null,M.pop(),M.length>0?(w=M[M.length-1],Ve.setTextureUnits(w.state.textureUnits),se===!0&&Q.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,O!==null&&O.renderEnd()};function Du(E,L,X,z){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Ce=L.isArrayCamera?J:k;if(!E.frustumCulled||E.intersectsFrustum(Ce)){z&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);let ve=ae.update(E),we=E.material;we.visible&&T.push(E,ve,we,X,De.z,null,L)}}else if(E.isMesh||E.isLine||E.isPoints){let Ce=L.isArrayCamera?J:k;if(!E.frustumCulled||E.intersectsFrustum(Ce)){let ve=ae.update(E),we=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),De.copy(ve.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(fe)),Array.isArray(we)){let Oe=ve.groups;for(let Ye=0,at=Oe.length;Ye<at;Ye++){let Re=Oe[Ye],lt=we[Re.materialIndex];lt&&lt.visible&&T.push(E,ve,lt,X,De.z,Re,L)}}else we.visible&&T.push(E,ve,we,X,De.z,null,L)}}}let Se=E.children;for(let Ce=0,ve=Se.length;Ce<ve;Ce++)Du(Se[Ce],L,X,z)}function pm(E,L,X,z){let{opaque:G,transmissive:Se,transparent:Ce}=E;w.setupLightsView(X),se===!0&&Q.setGlobalState(A.clippingPlanes,X),z&&ye.viewport(K.copy(z)),G.length>0&&ml(G,L,X),Se.length>0&&ml(Se,L,X),Ce.length>0&&ml(Ce,L,X),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function mm(E,L,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let Re=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new zt(1,1,{generateMipmaps:!0,type:Re?Kt:Cn,minFilter:Vi,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let Se=w.state.transmissionRenderTarget[z.id],Ce=z.viewport||K;Se.setSize(Ce.z*A.transmissionResolutionScale,Ce.w*A.transmissionResolutionScale);let ve=A.getRenderTarget(),we=A.getActiveCubeFace(),Oe=A.getActiveMipmapLevel();A.setRenderTarget(Se),A.getClearColor($),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),et&&D.render(X);let Ye=A.toneMapping;A.toneMapping=_i;let at=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),se===!0&&Q.setGlobalState(A.clippingPlanes,z),ml(E,X,z),Ve.updateMultisampleRenderTarget(Se),Ve.updateRenderTargetMipmap(Se),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let lt=0,Gt=L.length;lt<Gt;lt++){let Et=L[lt],{object:St,geometry:hn,material:Ie,group:gn}=Et;if(Ie.side===zn&&St.layers.test(z.layers)){let pt=Ie.side;Ie.side=cn,Ie.needsUpdate=!0,gm(St,X,z,hn,Ie,gn),Ie.side=pt,Ie.needsUpdate=!0,Re=!0}}Re===!0&&(Ve.updateMultisampleRenderTarget(Se),Ve.updateRenderTargetMipmap(Se))}A.setRenderTarget(ve,we,Oe),A.setClearColor($,he),at!==void 0&&(z.viewport=at),A.toneMapping=Ye}function ml(E,L,X){let z=L.isScene===!0?L.overrideMaterial:null;for(let G=0,Se=E.length;G<Se;G++){let Ce=E[G],{object:ve,geometry:we,group:Oe}=Ce,Ye=Ce.material;Ye.allowOverride===!0&&z!==null&&(Ye=z),ve.layers.test(X.layers)&&gm(ve,L,X,we,Ye,Oe)}}function gm(E,L,X,z,G,Se){O!==null&&G.isNodeMaterial&&O.setObject(E,G),E.onBeforeRender(A,L,X,z,G,Se),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(A,L,X,z,E,Se),G.transparent===!0&&G.side===zn&&G.forceSinglePass===!1?(G.side=cn,G.needsUpdate=!0,A.renderBufferDirect(X,L,z,G,E,Se),G.side=fs,G.needsUpdate=!0,A.renderBufferDirect(X,L,z,G,E,Se),G.side=zn):A.renderBufferDirect(X,L,z,G,E,Se),E.onAfterRender(A,L,X,z,G,Se)}function _m(E){let L=0;for(let X of E)X.texture!==null&&L++;return L}function xo(E,L,X){L.isScene!==!0&&(L=Ze);let z=ze.get(E),G=w.state.lights,Se=w.state.shadowsArray,Ce=G.state.version,ve=te.getParameters(E,G.state,Se,L,X,w.state.lightProbeGridArray),we=te.getProgramCacheKey(ve),Oe=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?L.environment:null,z.fog=L.fog;let Ye=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=C.get(E.envMap||z.environment,Ye),z.envMapRotation=z.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Oe===void 0&&(E.addEventListener("dispose",_t),Oe=new Map,z.programs=Oe,z.programVariants=new Map);let at=Oe.get(we);if(at!==void 0){if(z.currentProgram===at&&z.lightsStateVersion===Ce)return ym(E,ve),at}else ve.uniforms=te.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,X,ve),E.onBeforeCompile(ve,A),at=te.acquireProgram(ve,we),Oe.set(we,at),z.uniforms=ve.uniforms;let Re=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=Q.uniform),ym(E,ve),z.needsLights=zy(E),z.lightsStateVersion=Ce,z.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.sunLights.value=G.state.sun,Re.sunLightShadows.value=G.state.sunShadow,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.sunShadowMatrix.value=G.state.sunShadowMatrix,Re.sunShadowCascade.value=G.state.sunShadowCascade,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=_m(w.state.lightProbeGridArray),z.currentProgram=at,z.uniformsList=null,at}function Uy(E,L,X,z,G){let Se=ze.get(E),Ce=Se.currentProgram.id+","+z+","+G,ve=Se.programVariants.get(Ce);return ve===void 0?(ve=xo(E,L,X),Se.programVariants.set(Ce,ve)):(Se.currentProgram=ve,Se.uniformsList=null,Se.outputColorSpace=z,Se.toneMapping=G),ve}function vm(E){if(E.uniformsList===null){let L=E.currentProgram.getUniforms();E.uniformsList=$r.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function ym(E,L){let X=ze.get(E);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function By(E,L,X,z,G){L.isScene!==!0&&(L=Ze),Ve.resetTextureUnits();let Se=L.fog,Ce=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?L.environment:null,ve=ie===null?A.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:it.workingColorSpace,we=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Oe=C.get(z.envMap||Ce,we),Ye=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,at=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Re=!!X.morphAttributes.position,lt=!!X.morphAttributes.normal,Gt=!!X.morphAttributes.color,Et=_i;z.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Et=A.toneMapping);let St=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,hn=St!==void 0?St.length:0,Ie=ze.get(z),gn=w.state.lights;if(se===!0&&(ue===!0||E!==Z)){let Pt=E===Z&&z.id===W;Q.setState(z,E,Pt)}let pt=!1,Ps=!1;z.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==gn.state.version||G.isBatchedMesh&&Ie.batching===!1||!G.isBatchedMesh&&Ie.batching===!0||G.isBatchedMesh&&Ie.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ie.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ie.instancing===!1||!G.isInstancedMesh&&Ie.instancing===!0||G.isSkinnedMesh&&Ie.skinning===!1||!G.isSkinnedMesh&&Ie.skinning===!0||G.isInstancedMesh&&Ie.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ie.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ie.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ie.instancingMorph===!1&&G.morphTexture!==null||Ie.envMap!==Oe||z.fog===!0&&Ie.fog!==Se||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Q.numPlanes||Ie.numIntersection!==Q.numIntersection)||Ie.vertexAlphas!==Ye||Ie.vertexTangents!==at||Ie.morphTargets!==Re||Ie.morphNormals!==lt||Ie.morphColors!==Gt||Ie.morphTargetsCount!==hn||Ie.numLightProbeGrids!==_m(w.state.lightProbeGridArray)?pt=!0:(Ie.outputColorSpace!==ve||Ie.toneMapping!==Et)&&(Ps=!0):(pt=!0,Ie.__version=z.version);let un=Ie.currentProgram;(pt===!0||Ps===!0)&&(un=Ps===!0?Uy(z,L,G,ve,Et):xo(z,L,G),O&&z.isNodeMaterial&&O.onUpdateProgram(z,un,Ie));let gl=!1,es=!1,Ns=!1,ht=un.getUniforms(),ln=Ie.uniforms;if(ye.useProgram(un.program)&&(gl=!0,es=!0,Ns=!0),z.id!==W&&(W=z.id,es=!0),gl||Z!==E){ye.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ht.setValue(F,"projectionMatrix",E.projectionMatrix),ht.setValue(F,"viewMatrix",E.matrixWorldInverse);let Qt=ht.map.cameraPosition;Qt!==void 0&&Qt.setValue(F,Xe.setFromMatrixPosition(E.matrixWorld)),xt.logarithmicDepthBuffer&&ht.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ht.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,es=!0,Ns=!0)}if(Ie.needsLights&&(gn.state.sunShadowMap.length>0&&ht.setValue(F,"sunShadowMap",gn.state.sunShadowMap,Ve),gn.state.directionalShadowMap.length>0&&ht.setValue(F,"directionalShadowMap",gn.state.directionalShadowMap,Ve),gn.state.spotShadowMap.length>0&&ht.setValue(F,"spotShadowMap",gn.state.spotShadowMap,Ve),gn.state.pointShadowMap.length>0&&ht.setValue(F,"pointShadowMap",gn.state.pointShadowMap,Ve)),G.isSkinnedMesh){ht.setOptional(F,G,"bindMatrix"),ht.setOptional(F,G,"bindMatrixInverse");let Pt=G.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ht.setValue(F,"boneTexture",Pt.boneTexture,Ve))}G.isBatchedMesh&&(ht.setOptional(F,G,"batchingTexture"),ht.setValue(F,"batchingTexture",G._matricesTexture,Ve),ht.setOptional(F,G,"batchingIdTexture"),ht.setValue(F,"batchingIdTexture",G._indirectTexture,Ve),ht.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&ht.setValue(F,"batchingColorTexture",G._colorsTexture,Ve));let Qn=X.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&ee.update(G,X,un),(es||Ie.receiveShadow!==G.receiveShadow)&&(Ie.receiveShadow=G.receiveShadow,ht.setValue(F,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&L.environment!==null&&(ln.envMapIntensity.value=L.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=Bw()),es){if(ht.setValue(F,"toneMappingExposure",A.toneMappingExposure),Ie.needsLights&&ky(ln,Ns),Se&&z.fog===!0&&pe.refreshFogUniforms(ln,Se),pe.refreshMaterialUniforms(ln,z,Me,Le,w.state.transmissionRenderTarget[E.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let Pt=x,Qt=0;for(let Ii of w.state.lightProbeGridArray)Ii.texture!==null&&(Pt.textures[Qt]=Ii.texture,Pt.min[Qt]=Ii.boundingBox.min,Pt.max[Qt]=Ii.boundingBox.max,Pt.resolution[Qt]=Ii.resolution,Qt++);for(let Ii in Pt)Pt[Ii].length=Qt;ln.probesSH.value=Pt.textures,ln.probesMin.value=Pt.min,ln.probesMax.value=Pt.max,ln.probesResolution.value=Pt.resolution}$r.upload(F,vm(Ie),ln,Ve)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&($r.upload(F,vm(Ie),ln,Ve),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ht.setValue(F,"center",G.center),ht.setValue(F,"modelViewMatrix",G.modelViewMatrix),ht.setValue(F,"normalMatrix",G.normalMatrix),ht.setValue(F,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let Pt=z.uniformsGroups;for(let Qt=0,Ii=Pt.length;Qt<Ii;Qt++){let Sm=Pt[Qt];Fe.update(Sm,un),Fe.bind(Sm,un)}}return un}function ky(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.sunLights.needsUpdate=L,E.sunLightShadows.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function zy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(E,L,X){let z=ze.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ze.get(E.texture).__webglTexture=L,ze.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,L){let X=ze.get(E);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,X=0){ie=E,q=L,V=X;let z=null,G=!1,Se=!1;if(E){let ve=ze.get(E);if(ve.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(F.FRAMEBUFFER,ve.__webglFramebuffer),K.copy(E.viewport),Te.copy(E.scissor),Ne=E.scissorTest,ye.viewport(K),ye.scissor(Te),ye.setScissorTest(Ne),W=-1;return}else if(ve.__webglFramebuffer===void 0)Ve.setupRenderTarget(E);else if(ve.__hasExternalTextures)Ve.rebindTextures(E,ze.get(E.texture).__webglTexture,ze.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ye=E.depthTexture;if(ve.__boundDepthTexture!==Ye){if(Ye!==null&&ze.has(Ye)&&(E.width!==Ye.image.width||E.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(E)}}let we=E.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Se=!0);let Oe=ze.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[L])?z=Oe[L][X]:z=Oe[L],G=!0):E.samples>0&&Ve.useMultisampledRTT(E)===!1?z=ze.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?z=Oe[X]:z=Oe,K.copy(E.viewport),Te.copy(E.scissor),Ne=E.scissorTest}else K.copy(Be).multiplyScalar(Me).floor(),Te.copy(Ke).multiplyScalar(Me).floor(),Ne=oe;if(X!==0&&(z=U),ye.bindFramebuffer(F.FRAMEBUFFER,z)&&ye.drawBuffers(E,z),ye.viewport(K),ye.scissor(Te),ye.setScissorTest(Ne),G){let ve=ze.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,ve.__webglTexture,X)}else if(Se){let ve=L;for(let we=0;we<E.textures.length;we++){let Oe=ze.get(E.textures[we]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+we,Oe.__webglTexture,X,ve)}}else if(E!==null&&X!==0){let ve=ze.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,X)}W=-1};function xm(E){let L=ze.get(E);return(L.__readFormat!==E.format||L.__readType!==E.type)&&(L.__readFormat=E.format,L.__readType=E.type,L.__formatReadable=xt.textureFormatReadable(E.format),L.__typeReadable=xt.textureTypeReadable(E.type)),L}this.readRenderTargetPixels=function(E,L,X,z,G,Se,Ce,ve=0){if(!(E&&E.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(we=we[Ce],Array.isArray(we)&&(we=we[0])),we){ye.bindFramebuffer(F.FRAMEBUFFER,we);try{let Oe=E.textures[ve],Ye=Oe.format,at=Oe.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve);let Re=xm(Oe);if(Re.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-z&&X>=0&&X<=E.height-G&&F.readPixels(L,X,z,G,de.convert(Ye),de.convert(at),Se)}finally{let Oe=ie!==null?ze.get(ie).__webglFramebuffer:null;ye.bindFramebuffer(F.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(E,L,X,z,G,Se,Ce,ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(we=we[Ce],Array.isArray(we)&&(we=we[0])),we)if(L>=0&&L<=E.width-z&&X>=0&&X<=E.height-G){ye.bindFramebuffer(F.FRAMEBUFFER,we);let Oe=E.textures[ve],Ye=Oe.format,at=Oe.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve);let Re=xm(Oe);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),F.readPixels(L,X,z,G,de.convert(Ye),de.convert(at),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Gt=ie!==null?ze.get(ie).__webglFramebuffer:null;ye.bindFramebuffer(F.FRAMEBUFFER,Gt);let Et=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Fg(F,Et,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(lt),F.deleteSync(Et),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,L=null,X=0){let z=Math.pow(2,-X),G=Math.floor(E.image.width*z),Se=Math.floor(E.image.height*z),Ce=L!==null?L.x:0,ve=L!==null?L.y:0;Ve.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Ce,ve,G,Se),ye.unbindTexture()},this.copyTextureToTexture=function(E,L,X=null,z=null,G=0,Se=0){let Ce,ve,we,Oe,Ye,at,Re,lt,Gt,Et=E.isCompressedTexture?E.mipmaps[Se]:E.image;if(X!==null)Ce=X.max.x-X.min.x,ve=X.max.y-X.min.y,we=X.isBox3?X.max.z-X.min.z:1,Oe=X.min.x,Ye=X.min.y,at=X.isBox3?X.min.z:0;else{let ht=Math.pow(2,-G);Ce=Math.floor(Et.width*ht),ve=Math.floor(Et.height*ht),E.isDataArrayTexture?we=Et.depth:E.isData3DTexture?we=Math.floor(Et.depth*ht):we=1,Oe=0,Ye=0,at=0}z!==null?(Re=z.x,lt=z.y,Gt=z.z):(Re=0,lt=0,Gt=0);let St=de.convert(L.format),hn=de.convert(L.type),Ie;L.isData3DTexture?(Ve.setTexture3D(L,0),Ie=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ve.setTexture2DArray(L,0),Ie=F.TEXTURE_2D_ARRAY):(Ve.setTexture2D(L,0),Ie=F.TEXTURE_2D),ye.activeTexture(F.TEXTURE0),ye.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),ye.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),ye.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);let gn=ye.getParameter(F.UNPACK_ROW_LENGTH),pt=ye.getParameter(F.UNPACK_IMAGE_HEIGHT),Ps=ye.getParameter(F.UNPACK_SKIP_PIXELS),un=ye.getParameter(F.UNPACK_SKIP_ROWS),gl=ye.getParameter(F.UNPACK_SKIP_IMAGES);ye.pixelStorei(F.UNPACK_ROW_LENGTH,Et.width),ye.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et.height),ye.pixelStorei(F.UNPACK_SKIP_PIXELS,Oe),ye.pixelStorei(F.UNPACK_SKIP_ROWS,Ye),ye.pixelStorei(F.UNPACK_SKIP_IMAGES,at);let es=E.isDataArrayTexture||E.isData3DTexture,Ns=L.isDataArrayTexture||L.isData3DTexture;if(E.isDepthTexture){let ht=ze.get(E),ln=ze.get(L),Qn=ze.get(ht.__renderTarget),Pt=ze.get(ln.__renderTarget);ye.bindFramebuffer(F.READ_FRAMEBUFFER,Qn.__webglFramebuffer),ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Qt=0;Qt<we;Qt++)es&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(E).__webglTexture,G,at+Qt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(L).__webglTexture,Se,Gt+Qt)),F.blitFramebuffer(Oe,Ye,Oe+Ce,Ye+ve,Re,lt,Re+Ce,lt+ve,F.DEPTH_BUFFER_BIT,F.NEAREST);ye.bindFramebuffer(F.READ_FRAMEBUFFER,null),ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||ze.has(E)){let ht=ze.get(E),ln=ze.get(L);ye.bindFramebuffer(F.READ_FRAMEBUFFER,I),ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Qn=0;Qn<we;Qn++)es?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ht.__webglTexture,G,at+Qn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ht.__webglTexture,G),Ns?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,Se,Gt+Qn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,Se),G!==0?F.blitFramebuffer(Oe,Ye,Oe+Ce,Ye+ve,Re,lt,Re+Ce,lt+ve,F.COLOR_BUFFER_BIT,F.NEAREST):Ns?F.copyTexSubImage3D(Ie,Se,Re,lt,Gt+Qn,Oe,Ye,Ce,ve):F.copyTexSubImage2D(Ie,Se,Re,lt,Oe,Ye,Ce,ve);ye.bindFramebuffer(F.READ_FRAMEBUFFER,null),ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ns?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Ie,Se,Re,lt,Gt,Ce,ve,we,St,hn,Et.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,Se,Re,lt,Gt,Ce,ve,we,St,Et.data):F.texSubImage3D(Ie,Se,Re,lt,Gt,Ce,ve,we,St,hn,Et):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Se,Re,lt,Ce,ve,St,hn,Et.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Se,Re,lt,Et.width,Et.height,St,Et.data):F.texSubImage2D(F.TEXTURE_2D,Se,Re,lt,Ce,ve,St,hn,Et);ye.pixelStorei(F.UNPACK_ROW_LENGTH,gn),ye.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt),ye.pixelStorei(F.UNPACK_SKIP_PIXELS,Ps),ye.pixelStorei(F.UNPACK_SKIP_ROWS,un),ye.pixelStorei(F.UNPACK_SKIP_IMAGES,gl),Se===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&F.generateMipmap(Ie),ye.unbindTexture()},this.initRenderTarget=function(E){ze.get(E).__webglFramebuffer===void 0&&Ve.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ve.setTextureCube(E,0):E.isData3DTexture?Ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ve.setTexture2DArray(E,0):Ve.setTexture2D(E,0),ye.unbindTexture()},this.resetState=function(){q=0,V=0,ie=null,ye.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var Jr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},kw=new Vs(-1,1,1,-1,0,1),sf=class extends Bt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}},zw=new sf,gs=class{constructor(e){this._mesh=new Tt(zw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,kw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var yh=class extends Hn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qi.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new gs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ia=class extends Hn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},xh=class extends Hn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Sh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new re);this._width=i.width,this._height=i.height,t=new zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yh(Jr),this.copyPass.material.blending=Gi,this.timer=new da}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ia!==void 0&&(o instanceof Ia?i=!0:o instanceof xh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Mh=class extends Hn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Pe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var E_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Zr=class n extends Hn{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Pe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new zt(r,o,{type:Kt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new zt(r,o,{type:Kt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new zt(r,o,{type:Kt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=E_;this.highPassUniforms=qi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=qi.clone(Jr.uniforms),this.blendMaterial=new Xt({uniforms:this.copyUniforms,vertexShader:Jr.vertexShader,fragmentShader:Jr.fragmentShader,premultipliedAlpha:!0,blending:ps,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Pe,this._oldClearAlpha=1,this._basic=new An,this._fsQuad=new gs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Xt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Zr.BlurDirectionX=new re(1,0);Zr.BlurDirectionY=new re(0,1);var Pa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var bh=class extends Hn{constructor(){super(),this.isOutputPass=!0,this.uniforms=qi.clone(Pa.uniforms),this.material=new zr({name:Pa.name,uniforms:this.uniforms,vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader}),this._fsQuad=new gs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ma?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===va?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qs?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===_a&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Na=new N;function Kn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Na.copy(e),Na[i]=0,Na.normalize();let c=.5*o/(o+a),h=1-Na.angleTo(n)/l;return Math.sign(Na[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Eh=class n extends ls{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new N,c=new N,h=new N(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,v=new N,p=.5/o;for(let g=0,y=0;g<u.length;g+=3,y+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*r,u[g+1]=h.y*Math.sign(l.y)+c.y*r,u[g+2]=h.z*Math.sign(l.z)+c.z*r,d[g+0]=c.x,d[g+1]=c.y,d[g+2]=c.z,Math.floor(g/m)){case 0:v.set(1,0,0),f[y+0]=Kn(v,c,"z","y",r,i),f[y+1]=1-Kn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),f[y+0]=1-Kn(v,c,"z","y",r,i),f[y+1]=1-Kn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),f[y+0]=1-Kn(v,c,"x","z",r,e),f[y+1]=Kn(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),f[y+0]=1-Kn(v,c,"x","z",r,e),f[y+1]=1-Kn(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),f[y+0]=1-Kn(v,c,"x","y",r,e),f[y+1]=1-Kn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),f[y+0]=Kn(v,c,"x","y",r,e),f[y+1]=1-Kn(v,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function rf(n=1){let e=new cs;return e.moveTo(0,-.35*n),e.bezierCurveTo(-.15*n,-.22*n,-.5*n,-.02*n,-.5*n,.2*n),e.bezierCurveTo(-.5*n,.42*n,-.25*n,.52*n,0,.32*n),e.bezierCurveTo(.25*n,.52*n,.5*n,.42*n,.5*n,.2*n),e.bezierCurveTo(.5*n,-.02*n,.15*n,-.22*n,0,-.35*n),e}function T_(n=.5,e=.22){let t=new cs;for(let i=0;i<10;i++){let s=Math.PI/2+i/10*Math.PI*2,r=i%2?e:n;i===0?t.moveTo(Math.cos(s)*r,Math.sin(s)*r):t.lineTo(Math.cos(s)*r,Math.sin(s)*r)}return t.closePath(),t}var Hw=new oa(rf(.6),12),w_=new xn(1,10,8),A_=new ra(.86,1,48);A_.rotateX(-Math.PI/2);var Gw=new sa(.07,0),wh=class{constructor(e,t){this.scene=e,this.camera=t,this.items=[],this._initFireflies()}_add(e,t,i){this.scene.add(e),this.items.push({obj:e,life:t,age:0,update:i})}hearts(e,t=16736162){for(let i=0;i<4;i++){let s=new Tt(Hw,new An({color:new Pe(t).multiplyScalar(2.2),transparent:!0,side:zn,depthWrite:!1})),r=(Math.random()-.5)*.7,o=(Math.random()-.5)*.7,a=i*.14;s.position.copy(e).add(new N(r,1.1,o)),s.scale.setScalar(.001);let l=s.position.clone();this._add(s,1.8+a,(c,h)=>{let u=Math.max(0,c.age-a),d=Math.min(1,u*5)*(.55+i*.12);s.scale.setScalar(Math.max(.001,d)),s.position.set(l.x+Math.sin(u*6+i)*.15,l.y+u*1.2,l.z),s.quaternion.copy(this.camera.quaternion),s.material.opacity=Math.min(1,(c.life-c.age)*2)})}}shine(e){e.glow.intensity=40;let t=new Tt(w_,new An({color:new Pe(1.6,1.15,.4),transparent:!0,opacity:.5,depthWrite:!1,blending:ps}));t.position.copy(e.root.position).add(new N(0,.55,0)),this._add(t,.7,i=>{let s=i.age/i.life;t.scale.setScalar(.5+s*3.2),t.material.opacity=.45*(1-s)}),this.sparks(e.root.position,16765024,14,1.2)}tide(e){e.glow.intensity=25;for(let t=0;t<3;t++){let i=new Tt(A_,new An({color:new Pe(.6,.75,2),transparent:!0,depthWrite:!1,side:zn}));i.position.copy(e.root.position).add(new N(0,.06,0));let s=t*.18;i.scale.setScalar(.001),this._add(i,1.1+s,r=>{let o=Math.max(0,r.age-s),a=Math.min(1,o/1.1);i.scale.setScalar(.3+a*3.5),i.material.opacity=o>0?.9*(1-a):0})}}dust(e,t=6){for(let i=0;i<t;i++){let s=new Tt(w_,new Lt({color:16777215,transparent:!0,opacity:.8,roughness:1,depthWrite:!1})),r=i/t*Math.PI*2+Math.random(),o=new N(Math.cos(r)*1.6,.4+Math.random()*.4,Math.sin(r)*1.6);s.position.copy(e).add(new N(0,.08,0)),this._add(s,.45,(a,l)=>{s.position.addScaledVector(o,l),o.multiplyScalar(.9);let c=a.age/a.life;s.scale.setScalar(.08+c*.14),s.material.opacity=.8*(1-c)})}}sparks(e,t=16769658,i=18,s=2.5){for(let r=0;r<i;r++){let o=new Tt(Gw,new An({color:new Pe(t).multiplyScalar(2.5),transparent:!0,depthWrite:!1})),a=new N(Math.random()-.5,Math.random()*.9+.2,Math.random()-.5).normalize().multiplyScalar(s*(.6+Math.random()*.6));o.position.copy(e).add(new N(0,.6,0)),this._add(o,.9,(l,c)=>{o.position.addScaledVector(a,c),a.y-=4*c,o.rotation.x+=c*8,o.rotation.y+=c*6,o.material.opacity=1-l.age/l.life})}}_initFireflies(){let t=new Float32Array(270);this.ffSeed=[];for(let r=0;r<90;r++){let o=Math.random()*Math.PI*2,a=2+Math.random()*24;this.ffSeed.push({x:Math.cos(o)*a+6,y:.6+Math.random()*6,z:Math.sin(o)*a-2,p:Math.random()*10})}let i=new Bt;i.setAttribute("position",new Fn(t,3));let s=(()=>{let r=document.createElement("canvas");r.width=r.height=64;let o=r.getContext("2d"),a=o.createRadialGradient(32,32,0,32,32,32);return a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.3,"rgba(255,240,200,0.8)"),a.addColorStop(1,"rgba(255,220,180,0)"),o.fillStyle=a,o.fillRect(0,0,64,64),new Bs(r)})();this.fireflies=new Wo(i,new Dr({size:.28,map:s,color:new Pe(1.8,1.5,1),transparent:!0,depthWrite:!1,blending:ps})),this.fireflies.frustumCulled=!1,this.scene.add(this.fireflies)}update(e,t){for(let s=this.items.length-1;s>=0;s--){let r=this.items[s];if(r.age+=e,r.age>=r.life){this.scene.remove(r.obj),r.obj.material?.dispose(),this.items.splice(s,1);continue}r.update(r,e)}let i=this.fireflies.geometry.attributes.position;for(let s=0;s<this.ffSeed.length;s++){let r=this.ffSeed[s];i.setXYZ(s,r.x+Math.sin(t*.3+r.p)*1.2,r.y+Math.sin(t*.7+r.p*2)*.5,r.z+Math.cos(t*.25+r.p)*1.2)}i.needsUpdate=!0}};var _s=(n,e,t)=>n<e?e:n>t?t:n,Vw=(n,e,t)=>n+(e-n)*t,xi=(n,e,t,i)=>Vw(n,e,1-Math.exp(-t*i)),of=n=>n*n*n*(n*(n*6-15)+10);function Da(n,e){let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}var af=(n,e,t,i)=>n+Da(n,e)*(1-Math.exp(-t*i)),oi=n=>Math.round(n*1e3)/1e3;function C_(n){let e=(n||"").normalize("NFKC").trim().toLowerCase().replace(/\s+/g," "),t=new TextEncoder().encode("eclipse:"+e),i=2166136261,s=2654435769;for(let r of t)i=Math.imul(i^r,16777619)>>>0,s=Math.imul(s^r,2246822519)>>>0,s=(s<<13|s>>>19)>>>0;return"r"+i.toString(36)+s.toString(36)}var nn={get(n,e=null){try{let t=localStorage.getItem("eclipse."+n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem("eclipse."+n,JSON.stringify(e))}catch{}}},Js=new URLSearchParams(location.search),lf=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,R_=/iP(hone|ad|od)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,ai={sun:"\u2600\uFE0F",moon:"\u{1F319}"},Rn={sun:"Sun",moon:"Moon"},Sn=n=>n==="sun"?"moon":"sun";var cf=new Map;function Ct(n,e={}){let t=n+JSON.stringify(e);return cf.has(t)||cf.set(t,new Lt({color:n,roughness:.85,...e})),cf.get(t)}function ut(n,e,t,i=0,s=0,r=0,{cast:o=!0,receive:a=!0}={}){let l=new Tt(e,t);return l.position.set(i,s,r),l.castShadow=o,l.receiveShadow=a,n.add(l),l}var vs=(n,e,t,i=.12)=>new Eh(n,e,t,3,Math.min(i,n/2-.01,e/2-.01,t/2-.01));function uf(n,e,t,i,s,r,o,a,l){let c=new Dt;c.position.set(e,s,t),n.add(c);let h=[[i*.985,-.62],[i*1.005,-.36],[i*.99,-.13],[i*.955,-.02],[i*.9,0],[.001,0]].map(([x,T])=>new re(x,T)),u=ut(c,new kr(h,64),Ct(o),0,0,0,{cast:!1});u.receiveShadow=!0;let d=9,f=[];for(let x=0;x<=d;x++){let T=x/d,w=-r+T*(r-.5),_=.001+i*.98*Math.pow(T,.6);f.push(new re(_,w))}let m=new kr(f,26),v=m.attributes.position,p=[],g=new Pe(a),y=new Pe(l),S=new Pe;for(let x=0;x<v.count;x++){let T=v.getX(x),w=v.getY(x),_=v.getZ(x),M=Math.atan2(_,T);if(w<-.55){let R=1+Math.sin(M*5+w*1.7)*.07+Math.sin(M*13-w*2.3)*.05;v.setX(x,T*R),v.setZ(x,_*R),v.setY(x,w+Math.sin(M*7)*.15)}S.copy(y).lerp(g,Math.min(1,Math.max(0,1+w/r))),p.push(S.r,S.g,S.b)}return m.setAttribute("color",new $e(p,3)),m.computeVertexNormals(),ut(c,m,new Lt({vertexColors:!0,flatShading:!0,roughness:.95}),0,0,0),c}function df(n,e,t,i,s=1,r=0){let o=new Dt;o.position.set(e,t,i),o.scale.setScalar(s),n.add(o),ut(o,new Yn(.17,.26,1.5,10),Ct(11039055),0,.75,0);let a=[8177003,9622638,7059562,10804348],l=new ia(1,1);return[[0,1.95,0,.95],[.45,2.55,.1,.68],[-.4,2.45,-.15,.62],[.05,2.95,-.05,.5]].forEach(([h,u,d,f],m)=>{let v=ut(o,l,Ct(a[(m+r)%a.length],{flatShading:!0}),h,u,d);v.scale.setScalar(f),v.rotation.set(m,m*2,0)}),o}function hf(n,e,t,i,s){let r=new Dt;r.position.set(e,0,t),r.rotation.y=i,n.add(r),ut(r,new Yn(.07,.08,1.2,8),Ct(10119755),0,.6,0),ut(r,vs(1.9,.82,.12,.08),Ct(15251850),0,1.25,0);let o=document.createElement("canvas");o.width=512,o.height=220;let a=o.getContext("2d");a.fillStyle="#f6dcbc",a.fillRect(0,0,512,220),a.fillStyle="#4a3352",a.textAlign="center",a.textBaseline="middle";let l=s.length>1?58:76;a.font=`800 ${l}px ui-rounded, "SF Pro Rounded", system-ui, sans-serif`,s.forEach((u,d)=>a.fillText(u,256,110+(d-(s.length-1)/2)*(l*1.15),490));let c=new Bs(o);c.colorSpace=_n,c.anisotropy=4;let h=ut(r,new zs(1.76,.7),new Lt({map:c,roughness:.9}),0,1.25,.065,{cast:!1});return h.receiveShadow=!0,r}function I_(n,e,t,i,s,r,o=1){let a=new Dt;a.position.set(e,t,i),n.add(a);let l=Ct(16777215,{roughness:1,emissive:16771570,emissiveIntensity:.18});ut(a,vs(s,.42,r,.2),l,0,-.21,0);let c=new xn(1,18,12),h=o,u=()=>(h=h*16807%2147483647)/2147483647,d=Math.round((s+r)*2.2);for(let f=0;f<d;f++){let m=f/d*Math.PI*2,v=Math.cos(m)*(s/2-.15),p=Math.sin(m)*(r/2-.15);ut(a,c,l,v,-.22+u()*.08,p).scale.set(.32+u()*.15,.25+u()*.12,.32+u()*.15)}for(let f=0;f<3;f++)ut(a,c,l,(u()-.5)*s*.7,-.45,(u()-.5)*r*.7).scale.set(s*.35,.3,r*.35);return a}function Ww(n){let e=new xn(400,32,16),t=new Tt(e,new Xt({side:cn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Pe("#7d8fe6")},mid:{value:new Pe("#ffc9dc")},low:{value:new Pe("#ffe7cf")}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 low; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.02, 0.55, h)) : mix(mid, low, smoothstep(0.0, -0.35, h));
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
      }`}));t.renderOrder=-10,t.frustumCulled=!1,n.add(t);let i=new xn(1,14,10),s=150,r=new Us(i,new Lt({color:16777215,emissive:16767464,emissiveIntensity:.35,roughness:1}),s),o=new Wt;for(let l=0;l<s;l++){let c=Math.random()*Math.PI*2,h=10+Math.pow(Math.random(),.7)*150;o.position.set(Math.cos(c)*h+8,-13-Math.random()*4,Math.sin(c)*h);let u=4+Math.random()*7;o.scale.set(u*1.4,u*.5,u),o.updateMatrix(),r.setMatrixAt(l,o.matrix)}n.add(r);let a=[[-38,4,-40,3],[52,-2,-55,4],[-60,7,10,3.5],[45,9,40,2.6],[-20,-5,60,4.5],[85,3,-10,3]];for(let[l,c,h,u]of a)uf(n,l,h,u,c,u*1.4,10212730,14263682,10123944),df(n,l+u*.2,c,h-u*.1,u*.35)}function P_(n){let e=[],t=[],i=[],s=new Dt;n.add(s),n.fog=new Uo(new Pe("#f9cfe0"),55,190),Ww(n);let r=new la(14673663,16765624,1.4);n.add(r);let o=new ua(16773599,2.6);o.position.set(18,26,14),o.target.position.set(9,0,-2),o.castShadow=!0,o.shadow.mapSize.set(2048,2048);let a=o.shadow.camera;a.left=-26,a.right=26,a.top=20,a.bottom=-20,a.near=1,a.far=80,o.shadow.bias=-4e-4,o.shadow.normalBias=.03,o.shadow.radius=3,n.add(o,o.target),uf(s,0,0,9,0,7,9425262,14722684,9399452),e.push({type:"cyl",x:0,z:0,r:8.95,top:0,bottom:-1.2,safe:!0});let l=Ct(16770286),c=Ct(16744112,{emissive:16732051,emissiveIntensity:.35});for(let oe of[-1.7,1.7])ut(s,new Yn(.2,.24,2.3,14),l,oe,1.15,3),ut(s,vs(.62,.2,.62,.08),l,oe,.1,3),e.push({type:"cyl",x:oe,z:3,r:.26,top:2.4,bottom:0});let h=ut(s,new Hs(1.7,.17,12,40,Math.PI),l,0,2.3,3);h.rotation.z=0;let u=ut(s,new Br(rf(1.1),{depth:.22,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:3}),c,0,4,2.89);i.push(oe=>{u.rotation.y=Math.sin(oe*1.2)*.25,u.position.y=4+Math.sin(oe*2)*.06}),[16169160,16766362,12575656,11127029].forEach((oe,k)=>{let J=ut(s,vs(3.2,1,2.7,.14),Ct(oe),0,.5+k,-5.25);J.rotation.y=(k%2?1:-1)*.035}),ut(s,vs(3.3,.18,2.8,.08),Ct(9425262),0,4,-5.25),e.push({type:"box",x0:-1.6,x1:1.6,z0:-6.6,z1:-3.9,top:4.08,bottom:0,safe:!0}),hf(s,-2.7,-2.5,.15,["Too high?","Stand on your partner!"]);let f=[16757703,16765836,12182688,10473717,13087733];for(let oe=0;oe<5;oe++){let k=.4*(oe+1),J=4.1-oe*.9;ut(s,vs(1.6,k,.9,.1),Ct(f[oe]),5.8,k/2,J),e.push({type:"box",x0:5,x1:6.6,z0:J-.45,z1:J+.45,top:k,bottom:0,safe:!0})}ut(s,vs(2,2,1.7,.14),Ct(16239013),5.8,1,-.78),ut(s,vs(2.06,.14,1.76,.06),Ct(9425262),5.8,2,-.78),e.push({type:"box",x0:4.8,x1:6.8,z0:-1.63,z1:.07,top:2.07,bottom:0,safe:!0}),ut(s,new Yn(.04,.04,1.6,8),Ct(16777215),6.55,2.8,-1.45);let m=ut(s,new Un(.22,.6,3),Ct(16744112),6.55,3.3,-1.15);m.rotation.x=Math.PI/2,i.push(oe=>{m.rotation.z=Math.sin(oe*4)*.15});let v=new Dt;v.position.set(-4.5,0,1.5),s.add(v);for(let oe=0;oe<8;oe++){let k=oe/8*Math.PI*2;ut(v,new Or(.16,0),Ct(12170185,{flatShading:!0}),Math.cos(k)*.5,.08,Math.sin(k)*.5).rotation.set(oe,oe*1.3,0)}for(let oe=0;oe<3;oe++){let k=ut(v,new Yn(.06,.07,.7,8),Ct(9067068),0,.12,0);k.rotation.order="YXZ",k.rotation.set(Math.PI/2-.2,oe/3*Math.PI,0)}let p=ut(v,new Un(.22,.6,10),new An({color:new Pe(2.4,1,.25)}),0,.45,0,{cast:!1}),g=ut(v,new Un(.12,.38,10),new An({color:new Pe(2.6,2.1,.7)}),0,.38,0,{cast:!1}),y=new Gs(16753226,6,7,2);y.position.set(0,.8,0),v.add(y),i.push(oe=>{let k=1+Math.sin(oe*13)*.08+Math.sin(oe*7.3)*.06;p.scale.set(1,k,1),g.scale.set(1,2-k,1),p.rotation.y=oe*2,y.intensity=5+k*2}),e.push({type:"cyl",x:-4.5,z:1.5,r:.55,top:.25,bottom:0});for(let[oe,k,J]of[[-4.5,3,0],[-3,1.2,Math.PI/2.4]])ut(s,new Yn(.22,.22,1.3,12),Ct(11565909),oe,.22,k).rotation.set(0,J,Math.PI/2),e.push({type:"box",x0:oe-(J?.3:.65),x1:oe+(J?.3:.65),z0:k-(J?.65:.25),z1:k+(J?.65:.25),top:.42,bottom:0});let S=new Dt;S.position.set(-6.3,0,-1.2),S.rotation.y=.9,s.add(S);let x=ut(S,new Un(1.3,1.9,4,1),Ct(16751754,{flatShading:!0}),0,.95,0);x.rotation.y=Math.PI/4;let T=ut(S,new Un(.5,1.05,3,1),Ct(7031418,{flatShading:!0}),0,.5,.6,{cast:!1});T.scale.z=.2,e.push({type:"cyl",x:-6.3,z:-1.2,r:1,top:1.8,bottom:0,noStep:!0}),[[-7,3.9,1,0],[-3.6,-6.9,1.15,1],[3.4,-7.4,.95,2],[-7.9,-.3,.8,2],[8,2.4,.75,3]].forEach(([oe,k,J,se])=>{df(s,oe,0,k,J,se),e.push({type:"cyl",x:oe,z:k,r:.3*J,top:3.2*J,bottom:0,noStep:!0})});let w=Ct(12958937,{flatShading:!0});[[2.6,-2.2,.45],[-1.8,-8,.4],[7.4,4.4,.5],[-7.2,5.2,.35],[1.2,8.4,.3]].forEach(([oe,k,J],se)=>{let ue=ut(s,new Or(1,0),w,oe,J*.55,k);ue.scale.set(J*1.2,J,J),ue.rotation.set(se,se*2,0),e.push({type:"cyl",x:oe,z:k,r:J*1.05,top:J*1.2,bottom:0})});let _=-3.5,M=10.2,R=18.4,A=I_(s,M,.05,_,3,3,7),P={type:"box",id:"raft",x0:0,x1:0,z0:_-1.5,z1:_+1.5,top:.05,bottom:-.4,dx:0,dy:0,dz:0};e.push(P);let O=oe=>{let J=(oe%9e3+9e3)%9e3/9e3*9;return J<1.5?M:J<4.5?M+(R-M)*of((J-1.5)/3):J<6?R:R+(M-R)*of((J-6)/3)},U={raft:{pos:(oe,k=new N)=>k.set(O(oe),.05,_)}};hf(s,6.6,-5.6,.35,["Cloud raft \u2192"]),uf(s,24,-3.5,4.2,0,4.5,10147959,15052422,10123430),e.push({type:"cyl",x:24,z:-3.5,r:4.15,top:0,bottom:-1.2,safe:!0});let I=new Dt;I.position.set(24.5,0,-2.5),s.add(I),ut(I,new Yn(.36,.48,.8,16),Ct(16773596),0,.4,0);let B=new Dt;B.position.y=.75,I.add(B);let q=ut(B,new xn(1.3,32,14,0,Math.PI*2,0,Math.PI/2),Ct(16740221,{roughness:.6}),0,0,0);q.scale.y=.46;for(let oe=0;oe<7;oe++){let k=oe/7*Math.PI*2,J=oe===0?0:.8,se=ut(B,new xn(.16,12,8),Ct(16777215),Math.cos(k)*J,oe===0?.6:.42,Math.sin(k)*J,{cast:!1});se.scale.y=.4}let V={type:"cyl",x:24.5,z:-2.5,r:1.25,top:1.35,bottom:0,bounce:17,isMushroom:!0};e.push(V);let ie=0;i.push((oe,k)=>{ie=Math.max(0,ie-k*3);let J=1-Math.sin(ie*Math.PI)*.25*ie;B.scale.set(1+(1-J)*.6,J,1+(1-J)*.6)}),df(s,26.6,0,-1.5,.8,2),e.push({type:"cyl",x:26.6,z:-1.5,r:.25,top:2.6,bottom:0,noStep:!0}),hf(s,21.2,-.6,-Math.PI/2+.5,["Bounce!"]),I_(s,24.5,5.5,-7.5,3.4,3.4,3),e.push({type:"box",x0:22.8,x1:26.2,z0:-9.2,z1:-5.8,top:5.5,bottom:5,safe:!0});let W=[[0,5.5,1.4],[-1.7,3,.5],[1.7,3,.5],[0,-5.25,2.3],[5.8,2.2,2.6],[5.8,-.8,1.5],[-4.5,1.5,1.2],[-6.3,-1.2,1.5],[-4.5,3,.8],[-3,1.2,.8],[24.5,-2.5,1.5],[-2.7,-2.5,.4]],Z=(oe,k)=>W.every(([J,se,ue])=>(oe-J)**2+(k-se)**2>ue*ue),K=(oe,k,J,se,ue)=>{let fe=0,Xe=0;for(;fe<se&&Xe++<se*10;){let De=Math.random()*Math.PI*2,Ze=Math.sqrt(Math.random())*(J-.6),et=oe+Math.cos(De)*Ze,ct=k+Math.sin(De)*Ze;Z(et,ct)&&ue(et,ct,fe++)}},Te=[16752324,16777215,16769658,13022207,16747146],Ne=new Us(new xn(.085,8,6),new Lt({roughness:.7}),190),$=new Us(new Un(.07,.3,4),new Lt({color:8178020,roughness:.9,flatShading:!0}),360),he=new Wt,Ae=new Pe,Le=0,Me=0,Ue=(oe,k)=>{Le>=190||(he.position.set(oe,.09,k),he.scale.setScalar(.8+Math.random()*.6),he.rotation.set(0,0,0),he.updateMatrix(),Ne.setMatrixAt(Le,he.matrix),Ne.setColorAt(Le,Ae.setHex(Te[Le%Te.length])),Le++)},yt=(oe,k)=>{Me>=360||(he.position.set(oe,.12,k),he.scale.set(1,.7+Math.random()*.8,1),he.rotation.set((Math.random()-.5)*.4,0,(Math.random()-.5)*.4),he.updateMatrix(),$.setMatrixAt(Me++,he.matrix))};K(0,0,9,150,Ue),K(24,-3.5,4.2,40,Ue),K(0,0,9,220,yt),K(24,-3.5,4.2,70,yt),Ne.count=Le,$.count=Me,Ne.castShadow=!1,Ne.receiveShadow=!0,$.receiveShadow=!0,s.add(Ne,$);let Be=new Br(T_(.34,.15),{depth:.1,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});Be.center();let Ke=new Lt({color:16765773,emissive:16757504,emissiveIntensity:1.3,roughness:.3,metalness:.1});return[["ledge",0,4.7,-5.25],["lookout",5.8,2.7,-.8],["cloud",24.5,6.15,-7.5]].forEach(([oe,k,J,se],ue)=>{let fe=ut(s,Be,Ke,k,J,se,{receive:!1});t.push({id:oe,mesh:fe,pos:new N(k,J,se),collected:!1,phase:ue*2})}),{colliders:e,stars:t,movers:U,spawn:{sun:new N(-1.2,0,5.6),moon:new N(1.2,0,5.6)},killY:-14,sunLight:o,bounce(oe){oe.isMushroom&&(ie=1)},update(oe,k,J){let se=O(oe);P.dx=se-1.5-P.x0,P.dy=0,P.dz=0,P.x0===0&&(P.dx=0),P.x0=se-1.5,P.x1=se+1.5,A.position.x=se,A.position.y=.05+Math.sin(k*1.6)*.03;for(let ue of t)ue.mesh.visible=!ue.collected,ue.mesh.rotation.y=k*1.8+ue.phase,ue.mesh.position.y=ue.pos.y+Math.sin(k*2.2+ue.phase)*.12;for(let ue of i)ue(k,J)}}}var Xw=new xn(1,32,22),ys=new xn(1,16,12),N_=new $o(.034,.07,4,10),D_=new Lt({color:2827600,roughness:.35}),L_=new Lt({color:16748465,roughness:.9,transparent:!0,opacity:.85});function In(n,e,t,i,s,r=1,o=r,a=r){let l=new Tt(n,e);return l.position.set(t,i,s),l.scale.set(r,o,a),l.castShadow=!0,l}function O_(n){let e=new Dt,t=new Dt;e.add(t);let i=new Dt;t.add(i);let s=n==="sun",r=new Lt(s?{color:16762941,emissive:16747008,emissiveIntensity:.28,roughness:.55}:{color:13489919,emissive:7306751,emissiveIntensity:.14,roughness:.6}),o=new Lt({color:s?15764004:7107785,roughness:.7}),a=In(Xw,r,0,.5,0,.42,.42,.4);i.add(a);let l=new Dt;l.position.set(0,.55,.36),i.add(l);let c=In(N_,D_,-.12,.03,.02);c.castShadow=!1;let h=In(N_,D_,.12,.03,.02);h.castShadow=!1,l.add(c,h);let u=In(ys,L_,-.22,-.07,-.03,.07,.045,.03),d=In(ys,L_,.22,-.07,-.03,.07,.045,.03);u.castShadow=d.castShadow=!1,u.rotation.y=-.5,d.rotation.y=.5,l.add(u,d);let f=[In(ys,o,-.16,.07,.03,.12,.08,.16),In(ys,o,.16,.07,.03,.12,.08,.16)];t.add(...f);let m=null,v=null,p=null;if(s){m=new Dt,m.position.set(0,.5,-.02);let A=new Lt({color:16761402,emissive:16752640,emissiveIntensity:1.4,roughness:.5}),P=new Un(.075,.2,10);for(let O=0;O<10;O++){let U=O/10*Math.PI*2,I=In(P,A,Math.cos(U)*.52,Math.sin(U)*.52,0);I.rotation.z=U-Math.PI/2,m.add(I)}i.add(m)}else{let A=new Lt({color:4870056,roughness:.8});p=In(new Un(.26,.5,20),A,.05,.98,-.05),p.rotation.z=-.35,p.rotation.x=-.2,i.add(p);let P=In(new Hs(.25,.06,10,24),new Lt({color:16052735,roughness:.9}),0,.79,-.02);P.rotation.x=Math.PI/2-.2,P.rotation.y=.35*.4,i.add(P),v=In(ys,new Lt({color:16774064,emissive:16765773,emissiveIntensity:1.2}),.2,1.2,-.12,.075),i.add(v);let O=new Lt({color:11122160,roughness:.9}),U=In(ys,O,-.3,.62,-.2,.08,.08,.03);U.lookAt(-.9,.7,-.6);let I=In(ys,O,.28,.36,-.24,.06,.06,.025);I.lookAt(.9,.3,-.8);let B=In(ys,O,.05,.75,-.33,.05,.05,.02);B.lookAt(.1,.9,-1),i.add(U,I,B)}let g=new Gs(s?16757575:9412863,0,7,2);g.position.set(0,.7,0),e.add(g);let y=0,S=0,x=0,T=2+Math.random()*3,w=0,_=!0,M=0,R={speed:0,grounded:!0,vy:0};return{root:e,kind:n,glow:g,get yaw(){return w},setYaw(A){w=A,e.rotation.y=A},land(A=8){S=Math.min(1,A/16)},animate(A,P,O,U){x+=A,R.speed=P,R.grounded=O,R.vy=U,O&&!_&&(S=Math.max(S,.5)),_=O;let I=Math.min(1,P/5);y+=A*(6+P*2.2),S=xi(S,0,9,A);let B=1+Math.sin(x*2.6)*.02*(1-I);O||(B+=Math.max(-.08,Math.min(.14,U*.012))),B-=S*.28;let q=1/Math.sqrt(Math.max(.5,B));t.scale.set(q,B,q);let V=O?Math.abs(Math.sin(y))*.07*I:0;i.position.y=V,M=xi(M,O?I*.16:.05,10,A),i.rotation.x=M,i.rotation.z=O?Math.sin(y)*.05*I:0;for(let W=0;W<2;W++){let Z=f[W],K=Math.sin(y+W*Math.PI);O?(Z.position.z=.03+K*.14*I,Z.position.y=.07+Math.max(0,-Math.cos(y+W*Math.PI))*.08*I):(Z.position.z=xi(Z.position.z,.08,12,A),Z.position.y=xi(Z.position.y,.14,12,A))}T-=A;let ie=T<.12;c.scale.y=h.scale.y=ie?.15:1,T<0&&(T=2.5+Math.random()*3.5),m&&(m.rotation.z+=A*(.6+I*2.5)),v&&(v.position.x=.2+Math.sin(x*3)*.015-M*.1,v.position.y=1.2+(O?0:-Math.min(.08,U*.01))),p&&(p.rotation.x=-.2-M*.6),g.intensity=xi(g.intensity,0,3,A)}}}var qw=30,Yw=.45,$w=28,Th=class{constructor(e=.36,t=1){this.pos=new N,this.vel=new N,this.r=e,this.h=t,this.grounded=!1,this.ground=null}},sn={x:0,z:0};function Kw(n,e,t,i){let s=n<i.x0?i.x0:n>i.x1?i.x1:n,r=e<i.z0?i.z0:e>i.z1?i.z1:e,o=n-s,a=e-r,l=o*o+a*a;if(l>=t*t)return!1;if(l>1e-10){let m=Math.sqrt(l);return sn.x=o/m*(t-m),sn.z=a/m*(t-m),!0}let c=n-i.x0,h=i.x1-n,u=e-i.z0,d=i.z1-e,f=Math.min(c,h,u,d);return sn.x=0,sn.z=0,f===c?sn.x=-(c+t):f===h?sn.x=h+t:f===u?sn.z=-(u+t):sn.z=d+t,!0}function Jw(n,e,t,i){let s=n-i.x,r=e-i.z,o=t+i.r,a=s*s+r*r;if(a>=o*o)return!1;let l=Math.sqrt(a);return l<1e-6?(sn.x=o,sn.z=0,!0):(sn.x=s/l*(o-l),sn.z=r/l*(o-l),!0)}var F_=(n,e,t,i)=>i.type==="box"?Kw(n,e,t,i):Jw(n,e,t,i);function Zw(n,e,t){let i=n.grounded;n.pos.x+=n.vel.x*t,n.pos.z+=n.vel.z*t;for(let o of e){if(o.owner===n||o.disabled)continue;let a=n.pos.y,l=a+n.h;if(a>=o.top-.001||l<=o.bottom+.001||!F_(n.pos.x,n.pos.z,n.r,o))continue;let c=o.top-a;if(!o.noStep&&n.vel.y<=.01&&(i?c<=Yw:c<=.35)){n.pos.y=o.top;continue}n.pos.x+=sn.x,n.pos.z+=sn.z;let h=Math.hypot(sn.x,sn.z);if(h>1e-6){let u=sn.x/h,d=sn.z/h,f=n.vel.x*u+n.vel.z*d;f<0&&(n.vel.x-=f*u,n.vel.z-=f*d)}}let s=n.pos.y;n.vel.y=Math.max(n.vel.y-qw*t,-$w),n.pos.y+=n.vel.y*t,n.grounded=!1,n.ground=null;let r=null;for(let o of e)o.owner===n||o.disabled||F_(n.pos.x,n.pos.z,n.r,o)&&(n.vel.y<=0?s>=o.top-.25&&n.pos.y<=o.top&&(!r||o.top>r.top)&&(r=o):s+n.h<=o.bottom+.05&&n.pos.y+n.h>o.bottom&&(n.pos.y=o.bottom-n.h,n.vel.y=0));if(r){let o=-n.vel.y;if(n.pos.y=r.top,n.vel.y=0,n.grounded=!0,n.ground=r,!i)return{collider:r,impact:o}}return null}function U_(n,e,t){let i=n.ground;i&&i.dx!==void 0&&i.dx*i.dx+i.dy*i.dy+i.dz*i.dz<1&&(n.pos.x+=i.dx,n.pos.y+=i.dy,n.pos.z+=i.dz);let s=Math.hypot(n.vel.x,n.vel.y,n.vel.z)+1,r=Math.min(8,Math.max(1,Math.ceil(s*t/.12))),o=null;for(let a=0;a<r;a++){let l=Zw(n,e,t/r);l&&(o=l,l.collider.bounce&&(n.vel.y=l.collider.bounce,n.grounded=!1,n.ground=null))}return o}function B_(n){return{type:"cyl",x:0,z:0,r:.34,top:1,bottom:0,dx:0,dy:0,dz:0,isPlayer:!0,owner:n,ready:!1,px:0,py:0,pz:0}}function Ah(n,e,t){n.ready?(n.dx=e.x-n.px,n.dy=e.y-n.py,n.dz=e.z-n.pz):n.dx=n.dy=n.dz=0,n.px=e.x,n.py=e.y,n.pz=e.z,n.ready=!0,n.x=e.x,n.z=e.z,n.bottom=e.y,n.top=e.y+t}var Vn=null,Zs=null,xs=nn.get("sound",!0);function k_(){try{if(!Vn){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;Vn=new t,Zs=Vn.createGain(),Zs.gain.value=xs?.5:0,Zs.connect(Vn.destination)}Vn.state!=="running"&&Vn.resume();let n=Vn.createBuffer(1,1,22050),e=Vn.createBufferSource();e.buffer=n,e.connect(Zs),e.start(0)}catch{}}var Mn={get enabled(){return xs},toggle(){return xs=!xs,nn.set("sound",xs),Zs&&(Zs.gain.value=xs?.5:0),xs},play(n){if(!Vn||!xs||Vn.state!=="running")return;let e=jw[n];if(e)try{e(Vn.currentTime)}catch{}}};function Gn(n,{type:e="sine",f0:t,f1:i=t,dur:s=.15,vol:r=.3,attack:o=.005}){let a=Vn.createOscillator(),l=Vn.createGain();a.type=e,a.frequency.setValueAtTime(t,n),a.frequency.exponentialRampToValueAtTime(Math.max(1,i),n+s),l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(r,n+o),l.gain.exponentialRampToValueAtTime(1e-4,n+s),a.connect(l),l.connect(Zs),a.start(n),a.stop(n+s+.02)}var jw={jump:n=>Gn(n,{type:"triangle",f0:320,f1:620,dur:.14,vol:.22}),jump2:n=>Gn(n,{type:"triangle",f0:480,f1:900,dur:.14,vol:.2}),land:n=>Gn(n,{type:"sine",f0:160,f1:70,dur:.1,vol:.25}),bounce:n=>{Gn(n,{type:"sine",f0:180,f1:720,dur:.32,vol:.32}),Gn(n+.05,{type:"triangle",f0:360,f1:1100,dur:.25,vol:.12})},star:n=>[784,988,1175,1568].forEach((e,t)=>Gn(n+t*.07,{type:"triangle",f0:e,dur:.22,vol:.18})),heart:n=>{Gn(n,{type:"sine",f0:660,dur:.12,vol:.22}),Gn(n+.11,{type:"sine",f0:880,dur:.2,vol:.22})},shine:n=>[523,659,784].forEach((e,t)=>Gn(n+t*.04,{type:"sine",f0:e,f1:e*1.5,dur:.4,vol:.12})),tide:n=>{Gn(n,{type:"sine",f0:300,f1:150,dur:.5,vol:.2}),Gn(n+.1,{type:"sine",f0:450,f1:220,dur:.5,vol:.12})},join:n=>[523,784].forEach((e,t)=>Gn(n+t*.12,{type:"triangle",f0:e,dur:.25,vol:.18})),respawn:n=>Gn(n,{type:"sine",f0:900,f1:300,dur:.35,vol:.15})};function z_({canvas:n,joyZone:e,joyBase:t,joyKnob:i,buttons:s}){let r={move:{x:0,y:0},jumpHeld:!1,pressed:new Set,camDX:0,camDY:0,enabled:!1,lastUse:0},o=S=>{r.enabled&&r.pressed.add(S)},a=()=>k_();window.addEventListener("pointerdown",a,{passive:!0}),window.addEventListener("touchend",a,{passive:!0}),window.addEventListener("keydown",a);for(let S of["gesturestart","gesturechange","dblclick"])document.addEventListener(S,x=>x.preventDefault(),{passive:!1});let l=52,c=null,h=0,u=0;e.addEventListener("pointerdown",S=>{if(S.pointerType==="mouse"){m(S);return}if(c!==null)return;S.preventDefault(),c=S.pointerId,e.setPointerCapture(S.pointerId);let x=e.getBoundingClientRect();h=S.clientX,u=S.clientY,t.hidden=!1,t.style.transform=`translate(${h-x.left}px, ${u-x.top}px)`,t.dataset.ox=x.left,t.dataset.oy=x.top,i.style.transform="translate(0px, 0px)",e.classList.add("active"),r.lastUse=performance.now()}),e.addEventListener("pointermove",S=>{if(S.pointerId===c){let x=+t.dataset.ox,T=+t.dataset.oy,w=S.clientX-h,_=S.clientY-u,M=Math.hypot(w,_);if(M>l){let P=(M-l)/M;h+=w*P,u+=_*P,w=S.clientX-h,_=S.clientY-u}t.style.transform=`translate(${h-x}px, ${u-T}px)`,i.style.transform=`translate(${w}px, ${_}px)`;let R=w/l,A=-_/l;Math.hypot(R,A)<.12&&(R=0,A=0),r.move.x=R,r.move.y=A}else v(S)});let d=S=>{if(S.pointerId!==c){p(S);return}c=null,r.move.x=0,r.move.y=0,t.hidden=!0,e.classList.remove("active")};e.addEventListener("pointerup",d),e.addEventListener("pointercancel",d);let f=new Map;function m(S){f.set(S.pointerId,{x:S.clientX,y:S.clientY});try{S.target.setPointerCapture(S.pointerId)}catch{}}function v(S){let x=f.get(S.pointerId);x&&(r.camDX+=S.clientX-x.x,r.camDY+=S.clientY-x.y,x.x=S.clientX,x.y=S.clientY)}function p(S){f.delete(S.pointerId)}n.addEventListener("pointerdown",S=>{S.preventDefault(),m(S)}),n.addEventListener("pointermove",v),n.addEventListener("pointerup",p),n.addEventListener("pointercancel",p);for(let[S,x]of Object.entries(s)){x.addEventListener("pointerdown",w=>{w.preventDefault();try{x.setPointerCapture(w.pointerId)}catch{}x.classList.add("pressed"),o(S),S==="jump"&&(r.jumpHeld=!0)});let T=()=>{x.classList.remove("pressed"),S==="jump"&&(r.jumpHeld=!1)};x.addEventListener("pointerup",T),x.addEventListener("pointercancel",T),x.addEventListener("lostpointercapture",T),x.addEventListener("contextmenu",w=>w.preventDefault())}let g=new Set,y=()=>{if(c!==null)return;let S=0,x=0;(g.has("KeyA")||g.has("ArrowLeft"))&&(S-=1),(g.has("KeyD")||g.has("ArrowRight"))&&(S+=1),(g.has("KeyW")||g.has("ArrowUp"))&&(x+=1),(g.has("KeyS")||g.has("ArrowDown"))&&(x-=1);let T=Math.hypot(S,x)||1;r.move.x=S/T,r.move.y=x/T};return window.addEventListener("keydown",S=>{S.target.tagName!=="INPUT"&&(S.repeat||(g.add(S.code),S.code==="Space"&&(o("jump"),r.jumpHeld=!0,S.preventDefault()),S.code==="KeyE"&&o("ability"),S.code==="KeyH"&&o("heart"),S.code==="KeyQ"&&o("swap"),y()))}),window.addEventListener("keyup",S=>{g.delete(S.code),S.code==="Space"&&(r.jumpHeld=!1),y()}),window.addEventListener("blur",()=>{g.clear(),r.jumpHeld=!1,r.move.x=r.move.y=0}),{state:r,consume(S){let x=r.pressed.has(S);return r.pressed.delete(S),x},takeCam(){let S={x:r.camDX,y:r.camDY};return r.camDX=0,r.camDY=0,S},setEnabled(S){r.enabled=S,S||(r.pressed.clear(),r.move.x=r.move.y=0,r.jumpHeld=!1)}}}var H_=new N,Qw=new N,eT=new N,Ch=class{constructor(){this.buf=[],this.lat=[],this.delay=null,this.pos=new N,this.vel=new N,this.yaw=0,this.grounded=!0,this.has=!1,this.lastRecv=0}push(e,t){let i=this.buf[this.buf.length-1];i&&e.t<=i.t||(i&&e.t-i.t>2500&&(this.buf.length=0),this.buf.push(e),this.buf.length>60&&this.buf.shift(),this.lat.push(t-e.t),this.lat.length>40&&this.lat.shift(),this.lastRecv=performance.now())}snap(){this.buf.splice(0,this.buf.length-1)}targetDelay(){let e=[...this.lat].sort((i,s)=>i-s);return e[Math.min(e.length-1,Math.floor(e.length*.9))]+45}jitter(){if(this.lat.length<2)return 0;let e=[...this.lat].sort((t,i)=>t-i);return Math.round(e[Math.floor(e.length*.9)]-e[0])}sample(e,t,i){if(!this.buf.length)return!1;let s=this.targetDelay();this.delay===null||Math.abs(s-this.delay)>1e3?this.delay=s:this.delay+=(s-this.delay)*Math.min(1,t*1.5);let r=e-this.delay,o=this.buf,a=(m,v)=>{if(v.set(m.p[0],m.p[1],m.p[2]),m.b){let p=i(m.b,eT);if(!p)return null;v.add(p)}return v};for(;o.length>2&&o[1].t<=r;)o.shift();let l=o[0],c=o[1];if(c&&r>=l.t&&r<=c.t){let m=(r-l.t)/Math.max(1,c.t-l.t),v=a(l,H_),p=a(c,Qw);if(v&&p){if(!l.b&&!c.b&&l.b===c.b){let g=(c.t-l.t)/1e3,y=m*m,S=y*m,x=2*S-3*y+1,T=S-2*y+m,w=-2*S+3*y,_=S-y,M=g<.25;for(let R of["x","y","z"]){let A=R==="x"?0:R==="y"?1:2,P=v[R]+(p[R]-v[R])*m,O=x*v[R]+T*g*l.v[A]+w*p[R]+_*g*c.v[A];this.pos[R]=M?O:P}(l.g||c.g)&&M&&(this.pos.y=v.y+(p.y-v.y)*m)}else this.pos.lerpVectors(v,p,m);return this.vel.set(l.v[0]+(c.v[0]-l.v[0])*m,l.v[1]+(c.v[1]-l.v[1])*m,l.v[2]+(c.v[2]-l.v[2])*m),this.yaw=l.r+Da(l.r,c.r)*m,this.grounded=m<.5?!!l.g:!!c.g,this.has=!0,!0}}let h=r<l.t?l:o[o.length-1],u=a(h,H_);if(!u)return this.has;let d=_s((r-h.t)/1e3,0,.25),f=Math.hypot(h.v[0],h.v[2])>.05||!h.g;return this.pos.set(u.x+(f?h.v[0]*d:0),u.y+(h.g?0:h.v[1]*d),u.z+(f?h.v[2]*d:0)),h.g&&(this.pos.y=u.y),this.vel.set(h.v[0],h.v[1],h.v[2]),this.yaw=h.r,this.grounded=!!h.g,this.has=!0,!0}};var G_=()=>{};var ff={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};var ce=function(n,e){if(!n)throw Qs(e)},Qs=function(n){return new Error("Firebase Database ("+ff.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};var W_=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},tT=function(n){let e=[],t=0,i=0;for(;t<n.length;){let s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){let r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){let r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{let r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ph={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){let r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4,d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(t[h],t[u],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(W_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){let r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;let c=s<n.length?t[n.charAt(s)]:64;++s;let u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new pf;let d=r<<2|a>>4;if(i.push(d),c!==64){let f=a<<4&240|c>>2;if(i.push(f),u!==64){let m=c<<6&192|u;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},pf=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},mf=function(n){let e=W_(n);return Ph.encodeByteArray(e,!0)},La=function(n){return mf(n).replace(/\./g,"")},Rh=function(n){try{return Ph.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function X_(n){return q_(void 0,n)}function q_(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:let t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(let t in e)!e.hasOwnProperty(t)||!nT(t)||(n[t]=q_(n[t],e[t]));return n}function nT(n){return n!=="__proto__"}function iT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var sT=()=>iT().__FIREBASE_DEFAULTS__,rT=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},oT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Rh(n[1]);return e&&JSON.parse(e)},Y_=()=>{try{return G_()||sT()||rT()||oT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},aT=n=>Y_()?.emulatorHosts?.[n],$_=n=>{let e=aT(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},gf=()=>Y_()?.config;var Pn=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}};function K_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[La(JSON.stringify(t)),La(JSON.stringify(o)),""].join(".")}function lT(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _f(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lT())}function J_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Si(){return ff.NODE_CLIENT===!0||ff.NODE_ADMIN===!0}function Z_(){try{return typeof indexedDB=="object"}catch{return!1}}function j_(){return new Promise((n,e)=>{try{let t=!0,i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}var cT="FirebaseError",js=class n extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=cT,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oa.prototype.create)}},Oa=class{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?hT(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new js(s,a,i)}};function hT(n,e){try{let t=0,i="";for(;t<n.length;){let s=n.indexOf("{$",t);if(s===-1){i+=n.substring(t);break}let r=n.indexOf("}",s+2);if(r===-1){i+=n.substring(t);break}let o=n.substring(s+2,r),a=e[o];i+=n.substring(t,s)+(a!=null?String(a):`<${o}?>`),t=r+1}return i}catch{return n}}function jr(n){return JSON.parse(n)}function qt(n){return JSON.stringify(n)}var Q_=function(n){let e={},t={},i={},s="";try{let r=n.split(".");e=jr(Rh(r[0])||""),t=jr(Rh(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}};var e0=function(n){let e=Q_(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},t0=function(n){let e=Q_(n).claims;return typeof e=="object"&&e.admin===!0};function li(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function er(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Nh(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Fa(n,e,t){let i={};for(let s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Qr(n,e){if(n===e)return!0;let t=Object.keys(n),i=Object.keys(e);for(let s of t){if(!i.includes(s))return!1;let r=n[s],o=e[s];if(V_(r)&&V_(o)){if(!Qr(r,o))return!1}else if(r!==o)return!1}for(let s of i)if(!t.includes(s))return!1;return!0}function V_(n){return n!==null&&typeof n=="object"}function n0(n){let e=[];for(let[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}var Ih=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);let i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){let d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);let d=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);let i=t-this.blockSize,s=0,r=this.buf_,o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){let e=[],t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}};function tr(n,e){return`${n} failed: ${e} argument `}var i0=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){let r=s-55296;i++,ce(i<n.length,"Surrogate pair missing trail surrogate.");let o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ua=function(n){let e=0;for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};var fD=14400*1e3;function Mi(n){return n&&n._delegate?n._delegate:n}function vf(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function s0(n){return(await fetch(n,{credentials:"include"})).ok}var Yi=class{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var nr="[DEFAULT]";var Dh=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let i=new Pn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{let s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dT(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(let[t,i]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(t);try{let r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(let[r,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){let i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);let r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:uT(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function uT(n){return n===nr?void 0:n}function dT(n){return n.instantiationMode==="EAGER"}var Ba=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Dh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var fT=[],Mt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Mt||(Mt={}));var pT={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},mT=Mt.INFO,gT={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},_T=(n,e,...t)=>{if(e<n.logLevel)return;let i=new Date().toISOString(),s=gT[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},eo=class{constructor(e){this.name=e,this._logLevel=mT,this._logHandler=_T,this._userLogHandler=null,fT.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Mt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...e),this._logHandler(this,Mt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...e),this._logHandler(this,Mt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...e),this._logHandler(this,Mt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...e),this._logHandler(this,Mt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...e),this._logHandler(this,Mt.ERROR,...e)}};var vT=(n,e)=>e.some(t=>n instanceof t),r0,o0;function yT(){return r0||(r0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xT(){return o0||(o0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var a0=new WeakMap,xf=new WeakMap,l0=new WeakMap,yf=new WeakMap,Mf=new WeakMap;function ST(n){let e=new Promise((t,i)=>{let s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(bi(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&a0.set(t,n)}).catch(()=>{}),Mf.set(e,n),e}function MT(n){if(xf.has(n))return;let e=new Promise((t,i)=>{let s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});xf.set(n,e)}var Sf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||l0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function c0(n){Sf=n(Sf)}function bT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let i=n.call(Lh(this),e,...t);return l0.set(i,e.sort?e.sort():[e]),bi(i)}:xT().includes(n)?function(...e){return n.apply(Lh(this),e),bi(a0.get(this))}:function(...e){return bi(n.apply(Lh(this),e))}}function ET(n){return typeof n=="function"?bT(n):(n instanceof IDBTransaction&&MT(n),vT(n,yT())?new Proxy(n,Sf):n)}function bi(n){if(n instanceof IDBRequest)return ST(n);if(yf.has(n))return yf.get(n);let e=ET(n);return e!==n&&(yf.set(n,e),Mf.set(e,n)),e}var Lh=n=>Mf.get(n);function u0(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){let o=indexedDB.open(n,e),a=bi(o);return i&&o.addEventListener("upgradeneeded",l=>{i(bi(o.result),l.oldVersion,l.newVersion,bi(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}var wT=["get","getKey","getAll","getAllKeys","count"],TT=["put","add","delete","clear"],bf=new Map;function h0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(bf.get(e))return bf.get(e);let t=e.replace(/FromIndex$/,""),i=e!==t,s=TT.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||wT.includes(t)))return;let r=async function(o,...a){let l=this.transaction(o,s?"readwrite":"readonly"),c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return bf.set(e,r),r}c0(n=>({...n,get:(e,t,i)=>h0(e,t)||n.get(e,t,i),has:(e,t)=>!!h0(e,t)||n.has(e,t)}));var wf=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(AT(t)){let i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}};function AT(n){return n.getComponent()?.type==="VERSION"}var Tf="@firebase/app",d0="0.16.5";var Ki=new eo("@firebase/app"),CT="@firebase/app-compat",RT="@firebase/analytics-compat",IT="@firebase/analytics",PT="@firebase/app-check-compat",NT="@firebase/app-check",DT="@firebase/auth",LT="@firebase/auth-compat",OT="@firebase/crashlytics",FT="@firebase/database",UT="@firebase/data-connect",BT="@firebase/database-compat",kT="@firebase/functions",zT="@firebase/functions-compat",HT="@firebase/installations",GT="@firebase/installations-compat",VT="@firebase/messaging",WT="@firebase/messaging-compat",XT="@firebase/performance",qT="@firebase/performance-compat",YT="@firebase/remote-config",$T="@firebase/remote-config-compat",KT="@firebase/storage",JT="@firebase/storage-compat",ZT="@firebase/firestore",jT="@firebase/ai",QT="@firebase/firestore-compat",eA="firebase",tA="13.2.0";var Af="[DEFAULT]",nA={[Tf]:"fire-core",[CT]:"fire-core-compat",[IT]:"fire-analytics",[RT]:"fire-analytics-compat",[NT]:"fire-app-check",[PT]:"fire-app-check-compat",[DT]:"fire-auth",[LT]:"fire-auth-compat",[OT]:"fire-cls",[FT]:"fire-rtdb",[UT]:"fire-data-connect",[BT]:"fire-rtdb-compat",[kT]:"fire-fn",[zT]:"fire-fn-compat",[HT]:"fire-iid",[GT]:"fire-iid-compat",[VT]:"fire-fcm",[WT]:"fire-fcm-compat",[XT]:"fire-perf",[qT]:"fire-perf-compat",[YT]:"fire-rc",[$T]:"fire-rc-compat",[KT]:"fire-gcs",[JT]:"fire-gcs-compat",[ZT]:"fire-fst",[QT]:"fire-fst-compat",[jT]:"fire-vertex","fire-js":"fire-js",[eA]:"fire-js-all"};var Oh=new Map,iA=new Map,Cf=new Map;function f0(n,e){try{n.container.addComponent(e)}catch(t){Ki.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ka(n){let e=n.name;if(Cf.has(e))return Ki.debug(`There were multiple attempts to register component ${e}.`),!1;Cf.set(e,n);for(let t of Oh.values())f0(t,n);for(let t of iA.values())f0(t,n);return!0}function _0(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function v0(n){return n==null?!1:n.settings!==void 0}var sA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$i=new Oa("app","Firebase",sA);var Rf=class{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Yi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $i.create("app-deleted",{appName:this._name})}};var y0=tA;function Nf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let i={name:Af,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw $i.create("bad-app-name",{appName:String(s)});if(t||(t=gf()),!t)throw $i.create("no-options");let r=Oh.get(s);if(r)if(Qr(t,r.options)){if(Qr(i,r.config))return r;throw $i.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(i)})}else throw $i.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(t)});let o=new Ba(s);for(let l of Cf.values())o.addComponent(l);let a=new Rf(t,i,o);return Oh.set(s,a),a}function x0(n=Af){let e=Oh.get(n);if(!e&&n===Af&&gf())return Nf();if(!e)throw $i.create("no-app",{appName:n});return e}function Ss(n,e,t){let i=nA[n]??n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){let o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ki.warn(o.join(" "));return}ka(new Yi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var rA="firebase-heartbeat-database",oA=1,za="firebase-heartbeat-store",Ef=null;function S0(){return Ef||(Ef=u0(rA,oA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(za)}catch(t){console.warn(t)}}}}).catch(n=>{throw $i.create("idb-open",{originalErrorMessage:n.message})})),Ef}async function aA(n){try{let t=(await S0()).transaction(za),i=await t.objectStore(za).get(M0(n));return await t.done,i}catch(e){if(e instanceof js)Ki.warn(e.message);else{let t=$i.create("idb-get",{originalErrorMessage:e?.message});Ki.warn(t.message)}}}async function p0(n,e){try{let i=(await S0()).transaction(za,"readwrite");await i.objectStore(za).put(e,M0(n)),await i.done}catch(t){if(t instanceof js)Ki.warn(t.message);else{let i=$i.create("idb-set",{originalErrorMessage:t?.message});Ki.warn(i.message)}}}function M0(n){return`${n.name}!${n.options.appId}`}var lA=1024,cA=30,If=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Pf(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{let t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=m0();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>cA){let s=uA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ki.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let e=m0(),{heartbeatsToSend:t,unsentEntries:i}=hA(this._heartbeatsCache.heartbeats),s=La(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Ki.warn(e),""}}};function m0(){return new Date().toISOString().substring(0,10)}function hA(n,e=lA){let t=[],i=n.slice();for(let s of n){let r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),g0(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),g0(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}var Pf=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z_()?j_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await aA(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let i=await this.read();return p0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){let i=await this.read();return p0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function g0(n){return La(JSON.stringify({version:2,heartbeats:n})).length}function uA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}function dA(n){ka(new Yi("platform-logger",e=>new wf(e),"PRIVATE")),ka(new Yi("heartbeat",e=>new If(e),"PRIVATE")),Ss(Tf,d0,n),Ss(Tf,d0,"esm2020"),Ss("fire-js","")}dA("");var fA="firebase",pA="13.2.0";Ss(fA,pA,"app");var b0="@firebase/database",E0="1.1.5";var Fp="";function mA(n){Fp=n}var zf=class{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),qt(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:jr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}};var Hf=class{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return li(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}};var iv=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){let e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zf(e)}}catch{}return new Hf},sr=iv("localStorage"),Gf=iv("sessionStorage");var io=new eo("@firebase/database"),gA=(function(){let n=1;return function(){return n++}})(),sv=function(n){let e=i0(n),t=new Ih;t.update(e);let i=t.digest();return Ph.encodeByteArray(i)},sl=function(...n){let e="";for(let t=0;t<n.length;t++){let i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=sl.apply(null,i):typeof i=="object"?e+=qt(i):e+=i,e+=" "}return e},or=null,w0=!0,_A=function(n,e){ce(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(io.logLevel=Mt.VERBOSE,or=io.log.bind(io),e&&Gf.set("logging_enabled",!0)):typeof n=="function"?or=n:(or=null,Gf.remove("logging_enabled"))},rn=function(...n){if(w0===!0&&(w0=!1,or===null&&Gf.get("logging_enabled")===!0&&_A(!0)),or){let e=sl.apply(null,n);or(e)}},rl=function(n){return function(...e){rn(n,...e)}},Vf=function(...n){let e="FIREBASE INTERNAL ERROR: "+sl(...n);io.error(e)},Zi=function(...n){let e=`FIREBASE FATAL ERROR: ${sl(...n)}`;throw io.error(e),new Error(e)},wn=function(...n){let e="FIREBASE WARNING: "+sl(...n);io.warn(e)},vA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&wn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cu=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},yA=function(n){if(Si()||document.readyState==="complete")n();else{let e=!1,t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ro="[MIN_NAME]",ar="[MAX_NAME]",hr=function(n,e){if(n===e)return 0;if(n===ro||e===ar)return-1;if(e===ro||n===ar)return 1;{let t=T0(n),i=T0(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},xA=function(n,e){return n===e?0:n<e?-1:1},Ha=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+qt(e))},Up=function(n){if(typeof n!="object"||n===null)return qt(n);let e=[];for(let i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=qt(e[i]),t+=":",t+=Up(n[e[i]]);return t+="}",t},rv=function(n,e){let t=n.length;if(t<=e)return[n];let i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function on(n,e){for(let t in n)n.hasOwnProperty(t)&&e(t,n[t])}var ov=function(n){ce(!cu(n),"Invalid JSON number");let e=11,t=52,i=(1<<e-1)-1,s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));let c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();let h=c.join(""),u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},SA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},MA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bA(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");let i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}var EA=new RegExp("^-?(0*)\\d{1,10}$"),wA=-2147483648,TA=2147483647,T0=function(n){if(EA.test(n)){let e=Number(n);if(e>=wA&&e<=TA)return e}return null},po=function(n){try{n()}catch(e){setTimeout(()=>{let t=e.stack||"";throw wn("Exception was thrown by user callback.",t),e},Math.floor(0))}},AA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xa=function(n,e){let t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};var Wf=class{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,v0(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){wn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}};var Xf=class{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(rn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wn(e)}},bs=class{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};bs.OWNER="owner";var Uh="5",av="v",lv="s",cv="r",hv="f",uv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dv="ls",fv="p",qf="ac",pv="websocket",mv="long_polling";var Bh=class{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}};function CA(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function gv(n,e,t){ce(typeof e=="string","typeof type must == string"),ce(typeof t=="object","typeof params must == object");let i;if(e===pv)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===mv)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CA(n)&&(t.ns=n.namespace);let s=[];return on(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}var Yf=class{constructor(){this.counters_={}}incrementCounter(e,t=1){li(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return X_(this.counters_)}};var Df={},Lf={};function Bp(n){let e=n.toString();return Df[e]||(Df[e]=new Yf),Df[e]}function RA(n,e){let t=n.toString();return Lf[t]||(Lf[t]=e()),Lf[t]}var $f=class{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&po(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}};var A0="start",IA="close",PA="pLPCommand",NA="pRTLPCB",_v="id",vv="pw",yv="ser",DA="cb",LA="seg",OA="ts",FA="d",UA="dframe",xv=1870,Sv=30,BA=xv-Sv,kA=25e3,zA=3e4,Kf=class n{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=rl(e),this.stats_=Bp(t),this.urlFn=l=>(this.appCheckToken&&(l[qf]=this.appCheckToken),gv(t,mv,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new $f(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zA)),yA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jf((...r)=>{let[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===A0)this.id=a,this.password=l;else if(o===IA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{let[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);let i={};i[A0]="t",i[yv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[DA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[av]=Uh,this.transportSessionId&&(i[lv]=this.transportSessionId),this.lastSessionId&&(i[dv]=this.lastSessionId),this.applicationId&&(i[fv]=this.applicationId),this.appCheckToken&&(i[qf]=this.appCheckToken),typeof location<"u"&&location.hostname&&uv.test(location.hostname)&&(i[cv]=hv);let s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){n.forceAllow_=!0}static forceDisallow(){n.forceDisallow_=!0}static isAvailable(){return Si()?!1:n.forceAllow_?!0:!n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!SA()&&!MA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=qt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=mf(t),s=rv(i,BA);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Si())return;this.myDisconnFrame=document.createElement("iframe");let i={};i[UA]="t",i[_v]=e,i[vv]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=qt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}},Jf=class n{constructor(e,t,i,s){if(this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0,Si())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=gA(),window[PA+this.uniqueCallbackIdentifier]=e,window[NA+this.uniqueCallbackIdentifier]=t,this.myIFrame=n.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');let o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){rn("frame writing exception"),a.stack&&rn(a.stack),rn(a)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rn("No IE domain setting required")}catch{let i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;let e={};e[_v]=this.myID,e[vv]=this.myPW,e[yv]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Sv+i.length<=xv;){let o=this.pendingSegs.shift();i=i+"&"+LA+s+"="+o.seg+"&"+OA+s+"="+o.ts+"&"+FA+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(kA)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){Si()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){let s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{rn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}};var HA=16384,GA=45e3,kh=null;typeof MozWebSocket<"u"?kh=MozWebSocket:typeof WebSocket<"u"&&(kh=WebSocket);var Ji=class n{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=rl(this.connId),this.stats_=Bp(t),this.connURL=n.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){let o={};return o[av]=Uh,!Si()&&typeof location<"u"&&location.hostname&&uv.test(location.hostname)&&(o[cv]=hv),t&&(o[lv]=t),i&&(o[dv]=i),s&&(o[qf]=s),r&&(o[fv]=r),gv(e,pv,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sr.set("previous_websocket_failure",!0);try{let i;if(Si()){let s=this.nodeAdmin?"AdminNode":"Node";i={headers:{"User-Agent":`Firebase/${Uh}/${Fp}/${process.platform}/${s}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(i.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(i.headers["X-Firebase-AppCheck"]=this.appCheckToken);let r=process.env,o=this.connURL.indexOf("wss://")===0?r.HTTPS_PROXY||r.https_proxy:r.HTTP_PROXY||r.http_proxy;o&&(i.proxy={origin:o})}this.mySock=new kh(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");let s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");let s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){n.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){let t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&kh!==null&&!n.forceDisallow_}static previouslyFailed(){return sr.isInMemoryStorage||sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let t=this.frames.join("");this.frames=null;let i=jr(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ce(this.frames===null,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{let i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();let t=qt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=rv(t,HA);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(GA))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}};Ji.responsesRequiredToBeHealthy=2;Ji.healthyTimeout=3e4;var zh=class n{static get ALL_TRANSPORTS(){return[Kf,Ji]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){let t=Ji&&Ji.isAvailable(),i=t&&!Ji.previouslyFailed();if(e.webSocketOnly&&(t||wn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ji];else{let s=this.transports_=[];for(let r of n.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);n.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};zh.globalTransportInitialized_=!1;var VA=6e4,WA=5e3,XA=10*1024,qA=100*1024,Of="t",C0="d",YA="s",R0="r",$A="e",I0="o",P0="a",N0="n",D0="p",KA="h",Zf=class{constructor(e,t,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=rl("c:"+this.id+":"),this.transportManager_=new zh(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));let s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Xa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>XA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){let t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Of in e){let t=e[Of];t===P0?this.upgradeIfSecondaryHealthy_():t===R0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===I0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=Ha("t",e),i=Ha("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:D0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:P0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:N0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=Ha("t",e),i=Ha("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=Ha(Of,e);if(C0 in e){let i=e[C0];if(t===KA){let s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===N0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===YA?this.onConnectionShutdown_(i):t===R0?this.onReset_(i):t===$A?Vf("Server Error: "+i):t===I0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vf("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Uh!==i&&wn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Xa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(VA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(WA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:D0,d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}};var Hh=class{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}};var Gh=class{constructor(e){this.allowedEvents_=e,this.listeners_={},ce(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});let s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);let s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){ce(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}};var Vh=class n extends Gh{static getInstance(){return new n}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_f()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ce(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}};var L0=32,O0=768,mt=class{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}};function ft(){return new mt("")}function tt(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ts(n){return n.pieces_.length-n.pieceNum_}function bt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new mt(n.pieces_,e)}function kp(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function JA(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ka(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Mv(n){if(n.pieceNum_>=n.pieces_.length)return null;let e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new mt(e,0)}function Ot(n,e){let t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof mt)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{let i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new mt(t,0)}function rt(n){return n.pieceNum_>=n.pieces_.length}function En(n,e){let t=tt(n),i=tt(e);if(t===null)return e;if(t===i)return En(bt(n),bt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ZA(n,e){let t=Ka(n,0),i=Ka(e,0);for(let s=0;s<t.length&&s<i.length;s++){let r=hr(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function zp(n,e){if(Ts(n)!==Ts(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Jn(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ts(n)>Ts(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}var jf=class{constructor(e,t){this.errorPrefix_=t,this.parts_=Ka(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ua(this.parts_[i]);bv(this)}};function jA(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ua(e),bv(n)}function QA(n){let e=n.parts_.pop();n.byteLength_-=Ua(e),n.parts_.length>0&&(n.byteLength_-=1)}function bv(n){if(n.byteLength_>O0)throw new Error(n.errorPrefix_+"has a key path longer than "+O0+" bytes ("+n.byteLength_+").");if(n.parts_.length>L0)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+L0+") or object contains a cycle "+ir(n))}function ir(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}var Qf=class n extends Gh{static getInstance(){return new n}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return ce(e==="visible","Unknown event type: "+e),[this.visible_]}};var Ga=1e3,eC=300*1e3,F0=30*1e3,tC=1.3,nC=3e4,iC="server_kill",U0=3,lr=class n extends Hh{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=n.nextPersistentConnectionId_++,this.log_=rl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ga,this.maxReconnectDelay_=eC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Si())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){let s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(qt(r)),ce(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();let t=new Pn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{let a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;let r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();let r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ce(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");let a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){let t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);let r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{let l=a.d,c=a.s;n.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&li(e,"w")){let i=er(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){let s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();wn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||t0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=F0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=e0(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{let r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){let i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);let r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){let r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();let o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;let a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){let r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+qt(e));let t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Vf("Unrecognized action received from server: "+qt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ce(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ga,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ga,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nC&&(this.reconnectDelay_=Ga),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_),t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+n.nextConnectionId_++,r=this.lastSessionId,o=!1,a=null,l=function(){a?a.close():(o=!0,i())},c=function(u){ce(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};let h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?rn("getToken() completed but was canceled"):(rn("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Zf(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{wn(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(iC)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&wn(u),l())}}}interrupt(e){rn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nh(this.interruptReasons_)&&(this.reconnectDelay_=Ga,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Up(r)).join("$"):i="default";let s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){let i=new mt(e).toString(),s;if(this.listens.has(i)){let r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){rn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=U0&&(this.reconnectDelay_=F0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){rn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=U0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(let e of this.listens.values())for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";Si()&&(this.repoInfo_.nodeAdmin?t="admin_node":t="node"),e["sdk."+t+"."+Fp.replace(/\./g,"-")]=1,_f()?e["framework.cordova"]=1:J_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=Vh.getInstance().currentlyOnline();return Nh(this.interruptReasons_)&&e}};lr.nextPersistentConnectionId_=0;lr.nextConnectionId_=0;var ot=class n{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new n(e,t)}};var oo=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let i=new ot(ro,e),s=new ot(ro,t);return this.compare(i,s)!==0}minPost(){return ot.MIN}};var Fh,Wh=class extends oo{static get __EMPTY_NODE(){return Fh}static set __EMPTY_NODE(e){Fh=e}compare(e,t){return hr(e.name,t.name)}isDefinedOn(e){throw Qs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ot.MIN}maxPost(){return new ot(ar,Fh)}makePost(e,t){return ce(typeof e=="string","KeyIndex indexValue must always be a string."),new ot(e,Fh)}toString(){return".key"}},so=new Wh;var no=class{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},bn=class n{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??n.RED,this.left=s??Zn.EMPTY_NODE,this.right=r??Zn.EMPTY_NODE}copy(e,t,i,s,r){return new n(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this,r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Zn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Zn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};bn.RED=!0;bn.BLACK=!1;var ep=class{copy(e,t,i,s,r){return this}insert(e,t,i){return new bn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}},Zn=class n{constructor(e,t=n.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new n(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,bn.BLACK,null,null))}remove(e){return new n(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,bn.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new no(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new no(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new no(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new no(this.root_,null,this.comparator_,!0,e)}};Zn.EMPTY_NODE=new ep;function sC(n,e){return hr(n.name,e.name)}function Hp(n,e){return hr(n,e)}var tp;function rC(n){tp=n}var Ev=function(n){return typeof n=="number"?"number:"+ov(n):"string:"+n},wv=function(n){if(n.isLeafNode()){let e=n.val();ce(typeof e=="string"||typeof e=="number"||typeof e=="object"&&li(e,".sv"),"Priority must be a string or number.")}else ce(n===tp||n.isEmpty(),"priority of unexpected type.");ce(n===tp||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};var B0,ji=class n{static set __childrenNodeConstructor(e){B0=e}static get __childrenNodeConstructor(){return B0}constructor(e,t=n.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ce(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),wv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new n(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:n.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return rt(e)?this:tt(e)===".priority"?this.priorityNode_:n.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:n.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let i=tt(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(ce(i!==".priority"||Ts(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,n.__childrenNodeConstructor.EMPTY_NODE.updateChild(bt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ev(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":",t==="number"?e+=ov(this.value_):e+=this.value_,this.lazyHash_=sv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===n.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof n.__childrenNodeConstructor?-1:(ce(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,i=typeof this.value_,s=n.VALUE_TYPE_ORDER.indexOf(t),r=n.VALUE_TYPE_ORDER.indexOf(i);return ce(s>=0,"Unknown leaf type: "+t),ce(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){let t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}};ji.VALUE_TYPE_ORDER=["object","boolean","number","string"];var Tv,Av;function oC(n){Tv=n}function aC(n){Av=n}var np=class extends oo{compare(e,t){let i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?hr(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ot.MIN}maxPost(){return new ot(ar,new ji("[PRIORITY-POST]",Av))}makePost(e,t){let i=Tv(e);return new ot(t,new ji("[PRIORITY-POST]",i))}toString(){return".priority"}},Ft=new np;var lC=Math.log(2),ip=class{constructor(e){let t=r=>parseInt(Math.log(r)/lC,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;let s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}},Xh=function(n,e,t,i){n.sort(e);let s=function(l,c){let h=c-l,u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new bn(d,u.node,bn.BLACK,null,null);{let f=parseInt(h/2,10)+l,m=s(l,f),v=s(f+1,c);return u=n[f],d=t?t(u):u,new bn(d,u.node,bn.BLACK,m,v)}},r=function(l){let c=null,h=null,u=n.length,d=function(m,v){let p=u-m,g=u;u-=m;let y=s(p+1,g),S=n[p],x=t?t(S):S;f(new bn(x,S.node,v,null,y))},f=function(m){c?(c.left=m,c=m):(h=m,c=m)};for(let m=0;m<l.count;++m){let v=l.nextBitIsOne(),p=Math.pow(2,l.count-(m+1));v?d(p,bn.BLACK):(d(p,bn.BLACK),d(p,bn.RED))}return h},o=new ip(n.length),a=r(o);return new Zn(i||e,a)};var Ff,to={},ao=class n{static get Default(){return ce(to&&Ft,"ChildrenNode.ts has not been loaded"),Ff=Ff||new n({".priority":to},{".priority":Ft}),Ff}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=er(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Zn?t:null}hasIndex(e){return li(this.indexSet_,e.toString())}addIndex(e,t){ce(e!==so,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],s=!1,r=t.getIterator(ot.Wrap),o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Xh(i,e.getCompare()):a=to;let l=e.toString(),c={...this.indexSet_};c[l]=e;let h={...this.indexes_};return h[l]=a,new n(h,c)}addToIndexes(e,t){let i=Fa(this.indexes_,(s,r)=>{let o=er(this.indexSet_,r);if(ce(o,"Missing index implementation for "+r),s===to)if(o.isDefinedOn(e.node)){let a=[],l=t.getIterator(ot.Wrap),c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Xh(a,o.getCompare())}else return to;else{let a=t.get(e.name),l=s;return a&&(l=l.remove(new ot(e.name,a))),l.insert(e,e.node)}});return new n(i,this.indexSet_)}removeFromIndexes(e,t){let i=Fa(this.indexes_,s=>{if(s===to)return s;{let r=t.get(e.name);return r?s.remove(new ot(e.name,r)):s}});return new n(i,this.indexSet_)}};var Va,qe=class n{static get EMPTY_NODE(){return Va||(Va=new n(new Zn(Hp),null,ao.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&wv(this.priorityNode_),this.children_.isEmpty()&&ce(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Va}updatePriority(e){return this.children_.isEmpty()?this:new n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{let t=this.children_.get(e);return t===null?Va:t}}getChild(e){let t=tt(e);return t===null?this:this.getImmediateChild(t).getChild(bt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ce(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{let i=new ot(e,t),s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));let o=s.isEmpty()?Va:this.priorityNode_;return new n(s,o,r)}}updateChild(e,t){let i=tt(e);if(i===null)return t;{ce(tt(e)!==".priority"||Ts(e)===1,".priority must be the last token in a path");let s=this.getImmediateChild(i).updateChild(bt(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},i=0,s=0,r=!0;if(this.forEachChild(Ft,(o,a)=>{t[o]=a.val(e),i++,r&&n.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){let o=[];for(let a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ev(this.getPriority().val())+":"),this.forEachChild(Ft,(t,i)=>{let s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":sv(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){let s=this.resolveIndex_(i);if(s){let r=s.getPredecessorKey(new ot(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){let t=this.resolveIndex_(e);if(t){let i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){let t=this.getFirstChildName(e);return t?new ot(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(t){let i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){let t=this.getLastChildName(e);return t?new ot(t,this.children_.get(t)):null}forEachChild(e,t){let i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{let s=this.children_.getIteratorFrom(e.name,ot.Wrap),r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{let s=this.children_.getReverseIteratorFrom(e.name,ot.Wrap),r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ol?-1:0}withIndex(e){if(e===so||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===so||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{let t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){let i=this.getIterator(Ft),s=t.getIterator(Ft),r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===so?null:this.indexMap_.get(e.toString())}};qe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var sp=class extends qe{constructor(){super(new Zn(Hp),qe.EMPTY_NODE,ao.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return qe.EMPTY_NODE}isEmpty(){return!1}},ol=new sp;Object.defineProperties(ot,{MIN:{value:new ot(ro,qe.EMPTY_NODE)},MAX:{value:new ot(ar,ol)}});Wh.__EMPTY_NODE=qe.EMPTY_NODE;ji.__childrenNodeConstructor=qe;rC(ol);aC(ol);var cC=!0;function kt(n,e=null){if(n===null)return qe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ce(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){let t=n;return new ji(t,kt(e))}if(!(n instanceof Array)&&cC){let t=[],i=!1;if(on(n,(o,a)=>{if(o.substring(0,1)!=="."){let l=kt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new ot(o,l)))}}),t.length===0)return qe.EMPTY_NODE;let r=Xh(t,sC,o=>o.name,Hp);if(i){let o=Xh(t,Ft.getCompare());return new qe(r,kt(e),new ao({".priority":o},{".priority":Ft}))}else return new qe(r,kt(e),ao.Default)}else{let t=qe.EMPTY_NODE;return on(n,(i,s)=>{if(li(n,i)&&i.substring(0,1)!=="."){let r=kt(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(kt(e))}}oC(kt);var rp=class extends oo{constructor(e){super(),this.indexPath_=e,ce(!rt(e)&&tt(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?hr(e.name,t.name):r}makePost(e,t){let i=kt(e),s=qe.EMPTY_NODE.updateChild(this.indexPath_,i);return new ot(t,s)}maxPost(){let e=qe.EMPTY_NODE.updateChild(this.indexPath_,ol);return new ot(ar,e)}toString(){return Ka(this.indexPath_,0).join("/")}};var op=class extends oo{compare(e,t){let i=e.node.compareTo(t.node);return i===0?hr(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ot.MIN}maxPost(){return ot.MAX}makePost(e,t){let i=kt(e);return new ot(t,i)}toString(){return".value"}},hC=new op;function Cv(n){return{type:"value",snapshotNode:n}}function lo(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ja(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Za(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function uC(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}var ja=class{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){ce(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Ja(t,a)):ce(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(lo(t,i)):o.trackChildChange(Za(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Ft,(s,r)=>{t.hasChild(s)||i.trackChildChange(Ja(s,r))}),t.isLeafNode()||t.forEachChild(Ft,(s,r)=>{if(e.hasChild(s)){let o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Za(s,r,o))}else i.trackChildChange(lo(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?qe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}};var qh=class n{constructor(e){this.indexedFilter_=new ja(e.getIndex()),this.index_=e.getIndex(),this.startPost_=n.getStartPost_(e),this.endPost_=n.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new ot(t,i))||(i=qe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=qe.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(qe.EMPTY_NODE);let r=this;return t.forEachChild(Ft,(o,a)=>{r.matches(new ot(o,a))||(s=s.updateImmediateChild(o,qe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}};var ap=class{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{let i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{let i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new qh(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new ot(t,i))||(i=qe.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=qe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=qe.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){let a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(qe.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){let a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,qe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){let u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();let a=e;ce(a.numChildren()===this.limit_,"");let l=new ot(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){let u=a.getImmediateChild(t),d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);let f=d==null?1:o(d,l);if(h&&!i.isEmpty()&&f>=0)return r?.trackChildChange(Za(t,i,u)),a.updateImmediateChild(t,i);{r?.trackChildChange(Ja(t,u));let v=a.updateImmediateChild(t,qe.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r?.trackChildChange(lo(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ja(c.name,c.node)),r.trackChildChange(lo(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,qe.EMPTY_NODE)):e}};var lp=class n{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ft}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ce(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ce(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ro}hasEnd(){return this.endSet_}getIndexEndValue(){return ce(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ce(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ar}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ce(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ft}copy(){let e=new n;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}};function dC(n){return n.loadsAllData()?new ja(n.getIndex()):n.hasLimit()?new ap(n):new qh(n)}function k0(n){let e={};if(n.isDefault())return e;let t;if(n.index_===Ft?t="$priority":n.index_===hC?t="$value":n.index_===so?t="$key":(ce(n.index_ instanceof rp,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=qt(t),n.startSet_){let i=n.startAfterSet_?"startAfter":"startAt";e[i]=qt(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+qt(n.indexStartName_))}if(n.endSet_){let i=n.endBeforeSet_?"endBefore":"endAt";e[i]=qt(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+qt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function z0(n){let e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Ft&&(e.i=n.index_.toString()),e}var cp=class n extends Hh{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ce(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=rl("p:rest:"),this.listens_={}}listen(e,t,i,s){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let o=n.getListenId_(e,i),a={};this.listens_[o]=a;let l=k0(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),er(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){let i=n.getListenId_(e,t);delete this.listens_[i]}get(e){let t=k0(e._queryParams),i=e._path.toString(),s=new Pn;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);let o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+n0(t);this.log_("Sending REST request for "+o);let a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=jr(a.responseText)}catch{wn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&wn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}};var hp=class{constructor(){this.rootNode_=qe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}};function Yh(){return{value:null,children:new Map}}function mo(n,e,t){if(rt(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{let i=tt(e);n.children.has(i)||n.children.set(i,Yh());let s=n.children.get(i);e=bt(e),mo(s,e,t)}}function up(n,e){if(rt(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{let t=n.value;return n.value=null,t.forEachChild(Ft,(i,s)=>{mo(n,new mt(i),s)}),up(n,e)}}else if(n.children.size>0){let t=tt(e);return e=bt(e),n.children.has(t)&&up(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function dp(n,e,t){n.value!==null?t(e,n.value):fC(n,(i,s)=>{let r=new mt(e.toString()+"/"+i);dp(s,r,t)})}function fC(n,e){n.children.forEach((t,i)=>{e(i,t)})}var fp=class{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t={...e};return this.last_&&on(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}};var H0=10*1e3,pC=30*1e3,mC=300*1e3,pp=class{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new fp(e);let i=H0+(pC-H0)*Math.random();Xa(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){let e=this.statsListener_.get(),t={},i=!1;on(e,(s,r)=>{r>0&&li(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Xa(this.reportStats_.bind(this),Math.floor(Math.random()*2*mC))}};var ci;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ci||(ci={}));function Gp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wp(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}var mp=class n{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ci.ACK_USER_WRITE,this.source=Gp()}operationForChild(e){if(rt(this.path)){if(this.affectedTree.value!=null)return ce(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new mt(e));return new n(ft(),t,this.revert)}}else return ce(tt(this.path)===e,"operationForChild called for unrelated child."),new n(bt(this.path),this.affectedTree,this.revert)}};var $h=class n{constructor(e,t){this.source=e,this.path=t,this.type=ci.LISTEN_COMPLETE}operationForChild(e){return rt(this.path)?new n(this.source,ft()):new n(this.source,bt(this.path))}};var co=class n{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ci.OVERWRITE}operationForChild(e){return rt(this.path)?new n(this.source,ft(),this.snap.getImmediateChild(e)):new n(this.source,bt(this.path),this.snap)}};var Qa=class n{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ci.MERGE}operationForChild(e){if(rt(this.path)){let t=this.children.subtree(new mt(e));return t.isEmpty()?null:t.value?new co(this.source,ft(),t.value):new n(this.source,ft(),t)}else return ce(tt(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new n(this.source,bt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}};var Ei=class{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(rt(e))return this.isFullyInitialized()&&!this.filtered_;let t=tt(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}};var gp=class{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}};function gC(n,e,t,i){let s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(uC(o.childName,o.snapshotNode))}),Wa(n,s,"child_removed",e,i,t),Wa(n,s,"child_added",e,i,t),Wa(n,s,"child_moved",r,i,t),Wa(n,s,"child_changed",e,i,t),Wa(n,s,"value",e,i,t),s}function Wa(n,e,t,i,s,r){let o=i.filter(a=>a.type===t);o.sort((a,l)=>vC(n,a,l)),o.forEach(a=>{let l=_C(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function _C(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function vC(n,e,t){if(e.childName==null||t.childName==null)throw Qs("Should only compare child_ events.");let i=new ot(e.childName,e.snapshotNode),s=new ot(t.childName,t.snapshotNode);return n.index_.compare(i,s)}function hu(n,e){return{eventCache:n,serverCache:e}}function qa(n,e,t,i){return hu(new Ei(e,t,i),n.serverCache)}function Rv(n,e,t,i){return hu(n.eventCache,new Ei(e,t,i))}function Kh(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function cr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}var Uf,yC=()=>(Uf||(Uf=new Zn(xA)),Uf),Tn=class n{static fromObject(e){let t=new n(null);return on(e,(i,s)=>{t=t.set(new mt(i),s)}),t}constructor(e,t=yC()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ft(),value:this.value};if(rt(e))return null;{let i=tt(e),s=this.children.get(i);if(s!==null){let r=s.findRootMostMatchingPathAndValue(bt(e),t);return r!=null?{path:Ot(new mt(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(rt(e))return this;{let t=tt(e),i=this.children.get(t);return i!==null?i.subtree(bt(e)):new n(null)}}set(e,t){if(rt(e))return new n(t,this.children);{let i=tt(e),r=(this.children.get(i)||new n(null)).set(bt(e),t),o=this.children.insert(i,r);return new n(this.value,o)}}remove(e){if(rt(e))return this.children.isEmpty()?new n(null):new n(null,this.children);{let t=tt(e),i=this.children.get(t);if(i){let s=i.remove(bt(e)),r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new n(null):new n(this.value,r)}else return this}}get(e){if(rt(e))return this.value;{let t=tt(e),i=this.children.get(t);return i?i.get(bt(e)):null}}setTree(e,t){if(rt(e))return t;{let i=tt(e),r=(this.children.get(i)||new n(null)).setTree(bt(e),t),o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new n(this.value,o)}}fold(e){return this.fold_(ft(),e)}fold_(e,t){let i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ot(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,ft(),t)}findOnPath_(e,t,i){let s=this.value?i(t,this.value):!1;if(s)return s;if(rt(e))return null;{let r=tt(e),o=this.children.get(r);return o?o.findOnPath_(bt(e),Ot(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ft(),t)}foreachOnPath_(e,t,i){if(rt(e))return this;{this.value&&i(t,this.value);let s=tt(e),r=this.children.get(s);return r?r.foreachOnPath_(bt(e),Ot(t,s),i):new n(null)}}foreach(e){this.foreach_(ft(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Ot(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}};var hi=class n{constructor(e){this.writeTree_=e}static empty(){return new n(new Tn(null))}};function Ya(n,e,t){if(rt(e))return new hi(new Tn(t));{let i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){let s=i.path,r=i.value,o=En(s,e);return r=r.updateChild(o,t),new hi(n.writeTree_.set(s,r))}else{let s=new Tn(t),r=n.writeTree_.setTree(e,s);return new hi(r)}}}function _p(n,e,t){let i=n;return on(t,(s,r)=>{i=Ya(i,Ot(e,s),r)}),i}function G0(n,e){if(rt(e))return hi.empty();{let t=n.writeTree_.setTree(e,new Tn(null));return new hi(t)}}function vp(n,e){return ur(n,e)!=null}function ur(n,e){let t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(En(t.path,e)):null}function V0(n){let e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ft,(i,s)=>{e.push(new ot(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ot(i,s.value))}),e}function Es(n,e){if(rt(e))return n;{let t=ur(n,e);return t!=null?new hi(new Tn(t)):new hi(n.writeTree_.subtree(e))}}function yp(n){return n.writeTree_.isEmpty()}function ho(n,e){return Iv(ft(),n.writeTree_,e)}function Iv(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(ce(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Iv(Ot(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Ot(n,".priority"),i)),t}}function uu(n,e){return Lv(e,n)}function xC(n,e,t,i,s){ce(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Ya(n.visibleWrites,e,t)),n.lastWriteId=i}function SC(n,e,t,i){ce(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=_p(n.visibleWrites,e,t),n.lastWriteId=i}function MC(n,e){for(let t=0;t<n.allWrites.length;t++){let i=n.allWrites[t];if(i.writeId===e)return i}return null}function bC(n,e){let t=n.allWrites.findIndex(a=>a.writeId===e);ce(t>=0,"removeWrite called with nonexistent writeId.");let i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){let a=n.allWrites[o];a.visible&&(o>=t&&EC(a,i.path)?s=!1:Jn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return wC(n),!0;if(i.snap)n.visibleWrites=G0(n.visibleWrites,i.path);else{let a=i.children;on(a,l=>{n.visibleWrites=G0(n.visibleWrites,Ot(i.path,l))})}return!0}else return!1}function EC(n,e){if(n.snap)return Jn(n.path,e);for(let t in n.children)if(n.children.hasOwnProperty(t)&&Jn(Ot(n.path,t),e))return!0;return!1}function wC(n){n.visibleWrites=Pv(n.allWrites,TC,ft()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function TC(n){return n.visible}function Pv(n,e,t){let i=hi.empty();for(let s=0;s<n.length;++s){let r=n[s];if(e(r)){let o=r.path,a;if(r.snap)Jn(t,o)?(a=En(t,o),i=Ya(i,a,r.snap)):Jn(o,t)&&(a=En(o,t),i=Ya(i,ft(),r.snap.getChild(a)));else if(r.children){if(Jn(t,o))a=En(t,o),i=_p(i,a,r.children);else if(Jn(o,t))if(a=En(o,t),rt(a))i=_p(i,ft(),r.children);else{let l=er(r.children,tt(a));if(l){let c=l.getChild(bt(a));i=Ya(i,ft(),c)}}}else throw Qs("WriteRecord should have .snap or .children")}}return i}function Nv(n,e,t,i,s){if(!i&&!s){let r=ur(n.visibleWrites,e);if(r!=null)return r;{let o=Es(n.visibleWrites,e);if(yp(o))return t;if(t==null&&!vp(o,ft()))return null;{let a=t||qe.EMPTY_NODE;return ho(o,a)}}}else{let r=Es(n.visibleWrites,e);if(!s&&yp(r))return t;if(!s&&t==null&&!vp(r,ft()))return null;{let o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Jn(c.path,e)||Jn(e,c.path))},a=Pv(n.allWrites,o,e),l=t||qe.EMPTY_NODE;return ho(a,l)}}}function AC(n,e,t){let i=qe.EMPTY_NODE,s=ur(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ft,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){let r=Es(n.visibleWrites,e);return t.forEachChild(Ft,(o,a)=>{let l=ho(Es(r,new mt(o)),a);i=i.updateImmediateChild(o,l)}),V0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{let r=Es(n.visibleWrites,e);return V0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function CC(n,e,t,i,s){ce(i||s,"Either existingEventSnap or existingServerSnap must exist");let r=Ot(e,t);if(vp(n.visibleWrites,r))return null;{let o=Es(n.visibleWrites,r);return yp(o)?s.getChild(t):ho(o,s.getChild(t))}}function RC(n,e,t,i){let s=Ot(e,t),r=ur(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){let o=Es(n.visibleWrites,s);return ho(o,i.getNode().getImmediateChild(t))}else return null}function IC(n,e){return ur(n.visibleWrites,e)}function PC(n,e,t,i,s,r,o){let a,l=Es(n.visibleWrites,e),c=ur(l,ft());if(c!=null)a=c;else if(t!=null)a=ho(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){let h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),f=d.getNext();for(;f&&h.length<s;)u(f,i)!==0&&h.push(f),f=d.getNext();return h}else return[]}function NC(){return{visibleWrites:hi.empty(),allWrites:[],lastWriteId:-1}}function Jh(n,e,t,i){return Nv(n.writeTree,n.treePath,e,t,i)}function Xp(n,e){return AC(n.writeTree,n.treePath,e)}function W0(n,e,t,i){return CC(n.writeTree,n.treePath,e,t,i)}function Zh(n,e){return IC(n.writeTree,Ot(n.treePath,e))}function DC(n,e,t,i,s,r){return PC(n.writeTree,n.treePath,e,t,i,s,r)}function qp(n,e,t){return RC(n.writeTree,n.treePath,e,t)}function Dv(n,e){return Lv(Ot(n.treePath,e),n.writeTree)}function Lv(n,e){return{treePath:n,writeTree:e}}var xp=class{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,i=e.childName;ce(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ce(i!==".priority","Only non-priority child changes can be tracked.");let s=this.changeMap.get(i);if(s){let r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Za(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Ja(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,lo(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Za(i,e.snapshotNode,s.oldSnap));else throw Qs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}};var Sp=class{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}},Ov=new Sp,el=class{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let i=this.optCompleteServerCache_!=null?new Ei(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qp(this.writes_,e,i)}}getChildAfterChild(e,t,i){let s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cr(this.viewCache_),r=DC(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}};function LC(n){return{filter:n}}function OC(n,e){ce(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ce(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function FC(n,e,t,i,s){let r=new xp,o,a;if(t.type===ci.OVERWRITE){let c=t;c.source.fromUser?o=Mp(n,e,c.path,c.snap,i,s,r):(ce(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!rt(c.path),o=jh(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===ci.MERGE){let c=t;c.source.fromUser?o=BC(n,e,c.path,c.children,i,s,r):(ce(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=bp(n,e,c.path,c.children,i,s,a,r))}else if(t.type===ci.ACK_USER_WRITE){let c=t;c.revert?o=HC(n,e,c.path,i,s,r):o=kC(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===ci.LISTEN_COMPLETE)o=zC(n,e,t.path,i,r);else throw Qs("Unknown operation type: "+t.type);let l=r.getChanges();return UC(e,o,l),{viewCache:o,changes:l}}function UC(n,e,t){let i=e.eventCache;if(i.isFullyInitialized()){let s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Kh(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Cv(Kh(e)))}}function Fv(n,e,t,i,s,r){let o=e.eventCache;if(Zh(i,t)!=null)return e;{let a,l;if(rt(t))if(ce(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){let c=cr(e),h=c instanceof qe?c:qe.EMPTY_NODE,u=Xp(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{let c=Jh(i,cr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{let c=tt(t);if(c===".priority"){ce(Ts(t)===1,"Can't have a priority with additional path components");let h=o.getNode();l=e.serverCache.getNode();let u=W0(i,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{let h=bt(t),u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();let d=W0(i,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=qp(i,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return qa(e,a,o.isFullyInitialized()||rt(t),n.filter.filtersNodes())}}function jh(n,e,t,i,s,r,o,a){let l=e.serverCache,c,h=o?n.filter:n.filter.getIndexedFilter();if(rt(t))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){let f=l.getNode().updateChild(t,i);c=h.updateFullNode(l.getNode(),f,null)}else{let f=tt(t);if(!l.isCompleteForPath(t)&&Ts(t)>1)return e;let m=bt(t),p=l.getNode().getImmediateChild(f).updateChild(m,i);f===".priority"?c=h.updatePriority(l.getNode(),p):c=h.updateChild(l.getNode(),f,p,m,Ov,null)}let u=Rv(e,c,l.isFullyInitialized()||rt(t),h.filtersNodes()),d=new el(s,u,r);return Fv(n,u,t,s,d,a)}function Mp(n,e,t,i,s,r,o){let a=e.eventCache,l,c,h=new el(s,e,r);if(rt(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=qa(e,c,!0,n.filter.filtersNodes());else{let u=tt(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=qa(e,c,a.isFullyInitialized(),a.isFiltered());else{let d=bt(t),f=a.getNode().getImmediateChild(u),m;if(rt(d))m=i;else{let v=h.getCompleteChild(u);v!=null?kp(d)===".priority"&&v.getChild(Mv(d)).isEmpty()?m=v:m=v.updateChild(d,i):m=qe.EMPTY_NODE}if(f.equals(m))l=e;else{let v=n.filter.updateChild(a.getNode(),u,m,d,h,o);l=qa(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function X0(n,e){return n.eventCache.isCompleteForChild(e)}function BC(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{let h=Ot(t,l);X0(e,tt(h))&&(a=Mp(n,a,h,c,s,r,o))}),i.foreach((l,c)=>{let h=Ot(t,l);X0(e,tt(h))||(a=Mp(n,a,h,c,s,r,o))}),a}function q0(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function bp(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;rt(t)?c=i:c=new Tn(null).setTree(t,i);let h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){let f=e.serverCache.getNode().getImmediateChild(u),m=q0(n,f,d);l=jh(n,l,new mt(u),m,s,r,o,a)}}),c.children.inorderTraversal((u,d)=>{let f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){let m=e.serverCache.getNode().getImmediateChild(u),v=q0(n,m,d);l=jh(n,l,new mt(u),v,s,r,o,a)}}),l}function kC(n,e,t,i,s,r,o){if(Zh(s,t)!=null)return e;let a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(rt(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return jh(n,e,t,l.getNode().getChild(t),s,r,a,o);if(rt(t)){let c=new Tn(null);return l.getNode().forEachChild(so,(h,u)=>{c=c.set(new mt(h),u)}),bp(n,e,t,c,s,r,a,o)}else return e}else{let c=new Tn(null);return i.foreach((h,u)=>{let d=Ot(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),bp(n,e,t,c,s,r,a,o)}}function zC(n,e,t,i,s){let r=e.serverCache,o=Rv(e,r.getNode(),r.isFullyInitialized()||rt(t),r.isFiltered());return Fv(n,o,t,i,Ov,s)}function HC(n,e,t,i,s,r){let o;if(Zh(i,t)!=null)return e;{let a=new el(i,e,s),l=e.eventCache.getNode(),c;if(rt(t)||tt(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Jh(i,cr(e));else{let u=e.serverCache.getNode();ce(u instanceof qe,"serverChildren would be complete if leaf node"),h=Xp(i,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{let h=tt(t),u=qp(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,bt(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,qe.EMPTY_NODE,bt(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Jh(i,cr(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Zh(i,ft())!=null,qa(e,c,o,n.filter.filtersNodes())}}var Ep=class{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let i=this.query_._queryParams,s=new ja(i.getIndex()),r=dC(i);this.processor_=LC(r);let o=t.serverCache,a=t.eventCache,l=s.updateFullNode(qe.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(qe.EMPTY_NODE,a.getNode(),null),h=new Ei(l,o.isFullyInitialized(),s.filtersNodes()),u=new Ei(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=hu(u,h),this.eventGenerator_=new gp(this.query_)}get query(){return this.query_}};function GC(n){return n.viewCache_.serverCache.getNode()}function VC(n){return Kh(n.viewCache_)}function WC(n,e){let t=cr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!rt(e)&&!t.getImmediateChild(tt(e)).isEmpty())?t.getChild(e):null}function Y0(n){return n.eventRegistrations_.length===0}function XC(n,e){n.eventRegistrations_.push(e)}function $0(n,e,t){let i=[];if(t){ce(e==null,"A cancel should cancel all event registrations.");let s=n.query._path;n.eventRegistrations_.forEach(r=>{let o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){let o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function K0(n,e,t,i){e.type===ci.MERGE&&e.source.queryId!==null&&(ce(cr(n.viewCache_),"We should always have a full cache before handling merges"),ce(Kh(n.viewCache_),"Missing event cache, even though we have a server cache"));let s=n.viewCache_,r=FC(n.processor_,s,e,t,i);return OC(n.processor_,r.viewCache),ce(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Uv(n,r.changes,r.viewCache.eventCache.getNode(),null)}function qC(n,e){let t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ft,(r,o)=>{i.push(lo(r,o))}),t.isFullyInitialized()&&i.push(Cv(t.getNode())),Uv(n,i,t.getNode(),e)}function Uv(n,e,t,i){let s=i?[i]:n.eventRegistrations_;return gC(n.eventGenerator_,e,t,s)}var Qh,eu=class{constructor(){this.views=new Map}};function YC(n){ce(!Qh,"__referenceConstructor has already been defined"),Qh=n}function $C(){return ce(Qh,"Reference.ts has not been loaded"),Qh}function KC(n){return n.views.size===0}function Yp(n,e,t,i){let s=e.source.queryId;if(s!==null){let r=n.views.get(s);return ce(r!=null,"SyncTree gave us an op for an invalid query."),K0(r,e,t,i)}else{let r=[];for(let o of n.views.values())r=r.concat(K0(o,e,t,i));return r}}function Bv(n,e,t,i,s){let r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Jh(t,s?i:null),l=!1;a?l=!0:i instanceof qe?(a=Xp(t,i),l=!1):(a=qe.EMPTY_NODE,l=!1);let c=hu(new Ei(a,l,!1),new Ei(i,s,!1));return new Ep(e,c)}return o}function JC(n,e,t,i,s,r){let o=Bv(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),XC(o,t),qC(o,t)}function ZC(n,e,t,i){let s=e._queryIdentifier,r=[],o=[],a=As(n);if(s==="default")for(let[l,c]of n.views.entries())o=o.concat($0(c,t,i)),Y0(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{let l=n.views.get(s);l&&(o=o.concat($0(l,t,i)),Y0(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!As(n)&&r.push(new($C())(e._repo,e._path)),{removed:r,events:o}}function kv(n){let e=[];for(let t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ws(n,e){let t=null;for(let i of n.views.values())t=t||WC(i,e);return t}function zv(n,e){if(e._queryParams.loadsAllData())return du(n);{let i=e._queryIdentifier;return n.views.get(i)}}function Hv(n,e){return zv(n,e)!=null}function As(n){return du(n)!=null}function du(n){for(let e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}var tu;function jC(n){ce(!tu,"__referenceConstructor has already been defined"),tu=n}function QC(){return ce(tu,"Reference.ts has not been loaded"),tu}var e1=1,nu=class{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Tn(null),this.pendingWriteTree_=NC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function Gv(n,e,t,i,s){return xC(n.pendingWriteTree_,e,t,i,s),s?go(n,new co(Gp(),e,t)):[]}function t1(n,e,t,i){SC(n.pendingWriteTree_,e,t,i);let s=Tn.fromObject(t);return go(n,new Qa(Gp(),e,s))}function Ms(n,e,t=!1){let i=MC(n.pendingWriteTree_,e);if(bC(n.pendingWriteTree_,e)){let r=new Tn(null);return i.snap!=null?r=r.set(ft(),!0):on(i.children,o=>{r=r.set(new mt(o),!0)}),go(n,new mp(i.path,r,t))}else return[]}function al(n,e,t){return go(n,new co(Vp(),e,t))}function n1(n,e,t){let i=Tn.fromObject(t);return go(n,new Qa(Vp(),e,i))}function i1(n,e){return go(n,new $h(Vp(),e))}function s1(n,e,t){let i=Kp(n,t);if(i){let s=Jp(i),r=s.path,o=s.queryId,a=En(r,e),l=new $h(Wp(o),a);return Zp(n,r,l)}else return[]}function iu(n,e,t,i,s=!1){let r=e._path,o=n.syncPointTree_.get(r),a=[];if(o&&(e._queryIdentifier==="default"||Hv(o,e))){let l=ZC(o,e,t,i);KC(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));let c=l.removed;if(a=l.events,!s){let h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,f)=>As(f));if(h&&!u){let d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){let f=a1(d);for(let m=0;m<f.length;++m){let v=f[m],p=v.query,g=qv(n,v);n.listenProvider_.startListening($a(p),tl(n,p),g.hashFn,g.onComplete)}}}!u&&c.length>0&&!i&&(h?n.listenProvider_.stopListening($a(e),null):c.forEach(d=>{let f=n.queryToTagMap.get(fu(d));n.listenProvider_.stopListening($a(d),f)}))}l1(n,c)}return a}function Vv(n,e,t,i){let s=Kp(n,i);if(s!=null){let r=Jp(s),o=r.path,a=r.queryId,l=En(o,e),c=new co(Wp(a),l,t);return Zp(n,o,c)}else return[]}function r1(n,e,t,i){let s=Kp(n,i);if(s){let r=Jp(s),o=r.path,a=r.queryId,l=En(o,e),c=Tn.fromObject(t),h=new Qa(Wp(a),l,c);return Zp(n,o,h)}else return[]}function wp(n,e,t,i=!1){let s=e._path,r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,f)=>{let m=En(d,s);r=r||ws(f,m),o=o||As(f)});let a=n.syncPointTree_.get(s);a?(o=o||As(a),r=r||ws(a,ft())):(a=new eu,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=qe.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,m)=>{let v=ws(m,ft());v&&(r=r.updateImmediateChild(f,v))}));let c=Hv(a,e);if(!c&&!e._queryParams.loadsAllData()){let d=fu(e);ce(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");let f=c1();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}let h=uu(n.pendingWriteTree_,s),u=JC(a,e,t,h,r,l);if(!c&&!o&&!i){let d=zv(a,e);u=u.concat(h1(n,e,d))}return u}function $p(n,e,t){let s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{let l=En(o,e),c=ws(a,l);if(c)return c});return Nv(s,e,r,t,!0)}function o1(n,e){let t=e._path,i=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{let u=En(c,t);i=i||ws(h,u)});let s=n.syncPointTree_.get(t);s?i=i||ws(s,ft()):(s=new eu,n.syncPointTree_=n.syncPointTree_.set(t,s));let r=i!=null,o=r?new Ei(i,!0,!1):null,a=uu(n.pendingWriteTree_,e._path),l=Bv(s,e,a,r?o.getNode():qe.EMPTY_NODE,r);return VC(l)}function go(n,e){return Wv(e,n.syncPointTree_,null,uu(n.pendingWriteTree_,ft()))}function Wv(n,e,t,i){if(rt(n.path))return Xv(n,e,t,i);{let s=e.get(ft());t==null&&s!=null&&(t=ws(s,ft()));let r=[],o=tt(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){let c=t?t.getImmediateChild(o):null,h=Dv(i,o);r=r.concat(Wv(a,l,c,h))}return s&&(r=r.concat(Yp(s,n,i,t))),r}}function Xv(n,e,t,i){let s=e.get(ft());t==null&&s!=null&&(t=ws(s,ft()));let r=[];return e.children.inorderTraversal((o,a)=>{let l=t?t.getImmediateChild(o):null,c=Dv(i,o),h=n.operationForChild(o);h&&(r=r.concat(Xv(h,a,l,c)))}),s&&(r=r.concat(Yp(s,n,i,t))),r}function qv(n,e){let t=e.query,i=tl(n,t);return{hashFn:()=>(GC(e)||qe.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?s1(n,t._path,i):i1(n,t._path);{let r=bA(s,t);return iu(n,t,null,r)}}}}function tl(n,e){let t=fu(e);return n.queryToTagMap.get(t)}function fu(n){return n._path.toString()+"$"+n._queryIdentifier}function Kp(n,e){return n.tagToQueryMap.get(e)}function Jp(n){let e=n.indexOf("$");return ce(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new mt(n.substr(0,e))}}function Zp(n,e,t){let i=n.syncPointTree_.get(e);ce(i,"Missing sync point for query tag that we're tracking");let s=uu(n.pendingWriteTree_,e);return Yp(i,t,s,null)}function a1(n){return n.fold((e,t,i)=>{if(t&&As(t))return[du(t)];{let s=[];return t&&(s=kv(t)),on(i,(r,o)=>{s=s.concat(o)}),s}})}function $a(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(QC())(n._repo,n._path):n}function l1(n,e){for(let t=0;t<e.length;++t){let i=e[t];if(!i._queryParams.loadsAllData()){let s=fu(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function c1(){return e1++}function h1(n,e,t){let i=e._path,s=tl(n,e),r=qv(n,t),o=n.listenProvider_.startListening($a(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)ce(!As(a.value),"If we're adding a query, it shouldn't be shadowed");else{let l=a.fold((c,h,u)=>{if(!rt(c)&&h&&As(h))return[du(h).query];{let d=[];return h&&(d=d.concat(kv(h).map(f=>f.query))),on(u,(f,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){let h=l[c];n.listenProvider_.stopListening($a(h),tl(n,h))}}return o}var Tp=class n{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new n(t)}node(){return this.node_}},Ap=class n{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=Ot(this.path_,e);return new n(this.syncTree_,t)}node(){return $p(this.syncTree_,this.path_)}},u1=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},J0=function(n,e,t){if(!n||typeof n!="object")return n;if(ce(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return d1(n[".sv"],e,t);if(typeof n[".sv"]=="object")return f1(n[".sv"],e);ce(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},d1=function(n,e,t){if(n==="timestamp")return t.timestamp;ce(!1,"Unexpected server value: "+n)},f1=function(n,e,t){n.hasOwnProperty("increment")||ce(!1,"Unexpected server value: "+JSON.stringify(n,null,2));let i=n.increment;typeof i!="number"&&ce(!1,"Unexpected increment value: "+i);let s=e.node();if(ce(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;let o=s.getValue();return typeof o!="number"?i:o+i},Yv=function(n,e,t,i){return jp(e,new Ap(t,n),i)},$v=function(n,e,t){return jp(n,new Tp(e),t)};function jp(n,e,t){let i=n.getPriority().val(),s=J0(i,e.getImmediateChild(".priority"),t),r;if(n.isLeafNode()){let o=n,a=J0(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new ji(a,kt(s)):n}else{let o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ji(s))),o.forEachChild(Ft,(a,l)=>{let c=jp(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}var nl=class{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}};function Qp(n,e){let t=e instanceof mt?e:new mt(e),i=n,s=tt(t);for(;s!==null;){let r=er(i.node.children,s)||{children:{},childCount:0};i=new nl(s,i,r),t=bt(t),s=tt(t)}return i}function _o(n){return n.node.value}function Kv(n,e){n.node.value=e,Cp(n)}function Jv(n){return n.node.childCount>0}function p1(n){return _o(n)===void 0&&!Jv(n)}function pu(n,e){on(n.node.children,(t,i)=>{e(new nl(t,n,i))})}function Zv(n,e,t,i){t&&e(n),pu(n,s=>{Zv(s,e,!0)})}function m1(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ll(n){return new mt(n.parent===null?n.name:ll(n.parent)+"/"+n.name)}function Cp(n){n.parent!==null&&g1(n.parent,n.name,n)}function g1(n,e,t){let i=p1(t),s=li(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Cp(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Cp(n))}var _1=/[\[\].#$\/\u0000-\u001F\u007F]/,v1=/[\[\].#$\u0000-\u001F\u007F]/,Bf=10*1024*1024,em=function(n){return typeof n=="string"&&n.length!==0&&!_1.test(n)},jv=function(n){return typeof n=="string"&&n.length!==0&&!v1.test(n)},y1=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jv(n)},Qv=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!cu(n)||n&&typeof n=="object"&&li(n,".sv")},su=function(n,e,t,i){i&&e===void 0||mu(tr(n,"value"),e,t)},mu=function(n,e,t){let i=t instanceof mt?new jf(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ir(i));if(typeof e=="function")throw new Error(n+"contains a function "+ir(i)+" with contents = "+e.toString());if(cu(e))throw new Error(n+"contains "+e.toString()+" "+ir(i));if(typeof e=="string"&&e.length>Bf/3&&Ua(e)>Bf)throw new Error(n+"contains a string greater than "+Bf+" utf8 bytes "+ir(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(on(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!em(o)))throw new Error(n+" contains an invalid key ("+o+") "+ir(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jA(i,o),mu(n,a,i),QA(i)}),s&&r)throw new Error(n+' contains ".value" child '+ir(i)+" in addition to actual children.")}},x1=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];let r=Ka(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!em(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ZA);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&Jn(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},ey=function(n,e,t,i){let s=tr(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");let r=[];on(e,(o,a)=>{let l=new mt(o);if(mu(s,a,Ot(t,l)),kp(l)===".priority"&&!Qv(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),x1(s,r)},S1=function(n,e,t){if(cu(e))throw new Error(tr(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Qv(e))throw new Error(tr(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")};var ty=function(n,e,t,i){if(!(i&&t===void 0)&&!jv(t))throw new Error(tr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},M1=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ty(n,e,t,i)},rr=function(n,e){if(tt(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},b1=function(n,e){let t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!em(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!y1(t))throw new Error(tr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};var Rp=class{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function gu(n,e){let t=null;for(let i=0;i<e.length;i++){let s=e[i],r=s.getPath();t!==null&&!zp(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function ny(n,e,t){gu(n,t),iy(n,i=>zp(i,e))}function jn(n,e,t){gu(n,t),iy(n,i=>Jn(i,e)||Jn(e,i))}function iy(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){let s=n.eventLists_[i];if(s){let r=s.path;e(r)?(E1(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function E1(n){for(let e=0;e<n.events.length;e++){let t=n.events[e];if(t!==null){n.events[e]=null;let i=t.getEventRunner();or&&rn("event: "+t.toString()),po(i)}}}var w1="repo_interrupt",T1=25,Ip=class{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Rp,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yh(),this.transactionQueueTree_=new nl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}};function A1(n,e,t){if(n.stats_=Bp(n.repoInfo_),n.forceRestClient_||AA())n.server_=new cp(n.repoInfo_,(i,s,r,o)=>{Z0(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>j0(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{qt(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new lr(n.repoInfo_,e,(i,s,r,o)=>{Z0(n,i,s,r,o)},i=>{j0(n,i)},i=>{C1(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=RA(n.repoInfo_,()=>new pp(n.stats_,n.server_)),n.infoData_=new hp,n.infoSyncTree_=new nu({startListening:(i,s,r,o)=>{let a=[],l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=al(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),tm(n,"connected",!1),n.serverSyncTree_=new nu({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{let c=o(a,l);jn(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function sy(n){let t=n.infoData_.getNode(new mt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function _u(n){return u1({timestamp:sy(n)})}function Z0(n,e,t,i,s){n.dataUpdateCount++;let r=new mt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){let l=Fa(t,c=>kt(c));o=r1(n.serverSyncTree_,r,l,s)}else{let l=kt(t);o=Vv(n.serverSyncTree_,r,l,s)}else if(i){let l=Fa(t,c=>kt(c));o=n1(n.serverSyncTree_,r,l)}else{let l=kt(t);o=al(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=uo(n,r)),jn(n.eventQueue_,a,o)}function j0(n,e){tm(n,"connected",e),e===!1&&N1(n)}function C1(n,e){on(e,(t,i)=>{tm(n,t,i)})}function tm(n,e,t){let i=new mt("/.info/"+e),s=kt(t);n.infoData_.updateSnapshot(i,s);let r=al(n.infoSyncTree_,i,s);jn(n.eventQueue_,i,r)}function nm(n){return n.nextWriteId_++}function R1(n,e,t){let i=o1(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{let r=kt(s).withIndex(e._queryParams.getIndex());wp(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=al(n.serverSyncTree_,e._path,r);else{let a=tl(n.serverSyncTree_,e);o=Vv(n.serverSyncTree_,e._path,r,a)}return jn(n.eventQueue_,e._path,o),iu(n.serverSyncTree_,e,t,null,!0),r},s=>(cl(n,"get for query "+qt(e)+" failed: "+s),Promise.reject(new Error(s))))}function I1(n,e,t,i,s){cl(n,"set",{path:e.toString(),value:t,priority:i});let r=_u(n),o=kt(t,i),a=$p(n.serverSyncTree_,e),l=$v(o,a,r),c=nm(n),h=Gv(n.serverSyncTree_,e,l,c,!0);gu(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,f)=>{let m=d==="ok";m||wn("set at "+e+" failed: "+d);let v=Ms(n.serverSyncTree_,c,!m);jn(n.eventQueue_,e,v),Cs(n,s,d,f)});let u=sm(n,e);uo(n,u),jn(n.eventQueue_,u,[])}function P1(n,e,t,i){cl(n,"update",{path:e.toString(),value:t});let s=!0,r=_u(n),o={};if(on(t,(a,l)=>{s=!1,o[a]=Yv(Ot(e,a),kt(l),n.serverSyncTree_,r)}),s)rn("update() called with empty data.  Don't do anything."),Cs(n,i,"ok",void 0);else{let a=nm(n),l=t1(n.serverSyncTree_,e,o,a);gu(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,h)=>{let u=c==="ok";u||wn("update at "+e+" failed: "+c);let d=Ms(n.serverSyncTree_,a,!u),f=d.length>0?uo(n,e):e;jn(n.eventQueue_,f,d),Cs(n,i,c,h)}),on(t,c=>{let h=sm(n,Ot(e,c));uo(n,h)}),jn(n.eventQueue_,e,[])}}function N1(n){cl(n,"onDisconnectEvents");let e=_u(n),t=Yh();dp(n.onDisconnect_,ft(),(s,r)=>{let o=Yv(s,r,n.serverSyncTree_,e);mo(t,s,o)});let i=[];dp(t,ft(),(s,r)=>{i=i.concat(al(n.serverSyncTree_,s,r));let o=sm(n,s);uo(n,o)}),n.onDisconnect_=Yh(),jn(n.eventQueue_,ft(),i)}function D1(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&up(n.onDisconnect_,e),Cs(n,t,i,s)})}function Q0(n,e,t,i){let s=kt(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&mo(n.onDisconnect_,e,s),Cs(n,i,r,o)})}function L1(n,e,t,i,s){let r=kt(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&mo(n.onDisconnect_,e,r),Cs(n,s,o,a)})}function O1(n,e,t,i){if(Nh(t)){rn("onDisconnect().update() called with empty data.  Don't do anything."),Cs(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&on(t,(o,a)=>{let l=kt(a);mo(n.onDisconnect_,Ot(e,o),l)}),Cs(n,i,s,r)})}function F1(n,e,t){let i;tt(e._path)===".info"?i=wp(n.infoSyncTree_,e,t):i=wp(n.serverSyncTree_,e,t),ny(n.eventQueue_,e._path,i)}function ev(n,e,t){let i;tt(e._path)===".info"?i=iu(n.infoSyncTree_,e,t):i=iu(n.serverSyncTree_,e,t),ny(n.eventQueue_,e._path,i)}function ry(n){n.persistentConnection_&&n.persistentConnection_.interrupt(w1)}function cl(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),rn(t,...e)}function Cs(n,e,t,i){e&&po(()=>{if(t==="ok")e(null);else{let s=(t||"error").toUpperCase(),r=s;i&&(r+=": "+i);let o=new Error(r);o.code=s,e(o)}})}function oy(n,e,t){return $p(n.serverSyncTree_,e,t)||qe.EMPTY_NODE}function im(n,e=n.transactionQueueTree_){if(e||vu(n,e),_o(e)){let t=ly(n,e);ce(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&U1(n,ll(e),t)}else Jv(e)&&pu(e,t=>{im(n,t)})}function U1(n,e,t){let i=t.map(c=>c.currentWriteId),s=oy(n,e,i),r=s,o=s.hash();for(let c=0;c<t.length;c++){let h=t[c];ce(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;let u=En(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}let a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{cl(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){let u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Ms(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();vu(n,Qp(n.transactionQueueTree_,e)),im(n,n.transactionQueueTree_),jn(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)po(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{wn("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}uo(n,e)}},o)}function uo(n,e){let t=ay(n,e),i=ll(t),s=ly(n,t);return B1(n,s,i),i}function B1(n,e,t){if(e.length===0)return;let i=[],s=[],o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){let l=e[a],c=En(t,l.path),h=!1,u;if(ce(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(Ms(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=T1)h=!0,u="maxretry",s=s.concat(Ms(n.serverSyncTree_,l.currentWriteId,!0));else{let d=oy(n,l.path,o);l.currentInputSnapshot=d;let f=e[a].update(d.val());if(f!==void 0){mu("transaction failed: Data returned ",f,l.path);let m=kt(f);typeof f=="object"&&f!=null&&li(f,".priority")||(m=m.updatePriority(d.getPriority()));let p=l.currentWriteId,g=_u(n),y=$v(m,d,g);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=y,l.currentWriteId=nm(n),o.splice(o.indexOf(p),1),s=s.concat(Gv(n.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),s=s.concat(Ms(n.serverSyncTree_,p,!0))}else h=!0,u="nodata",s=s.concat(Ms(n.serverSyncTree_,l.currentWriteId,!0))}jn(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,(function(d){setTimeout(d,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}vu(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)po(i[a]);im(n,n.transactionQueueTree_)}function ay(n,e){let t,i=n.transactionQueueTree_;for(t=tt(e);t!==null&&_o(i)===void 0;)i=Qp(i,t),e=bt(e),t=tt(e);return i}function ly(n,e){let t=[];return cy(n,e,t),t.sort((i,s)=>i.order-s.order),t}function cy(n,e,t){let i=_o(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);pu(e,s=>{cy(n,s,t)})}function vu(n,e){let t=_o(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Kv(e,t.length>0?t:void 0)}pu(e,i=>{vu(n,i)})}function sm(n,e){let t=ll(ay(n,e)),i=Qp(n.transactionQueueTree_,e);return m1(i,s=>{kf(n,s)}),kf(n,i),Zv(i,s=>{kf(n,s)}),t}function kf(n,e){let t=_o(e);if(t){let i=[],s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(ce(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(ce(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Ms(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Kv(e,void 0):t.length=r+1,jn(n.eventQueue_,ll(e),s);for(let o=0;o<i.length;o++)po(i[o])}}function k1(n){let e="",t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function z1(n){let e={};n.charAt(0)==="?"&&(n=n.substring(1));for(let t of n.split("&")){if(t.length===0)continue;let i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):wn(`Invalid query segment '${t}' in query '${n}'`)}return e}var tv=function(n,e){let t=H1(n),i=t.namespace;t.domain==="firebase.com"&&Zi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Zi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||vA();let s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Bh(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new mt(t.pathString)}},H1=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(s=k1(n.substring(h,u)));let d=z1(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;let f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{let m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};var nv="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",G1=(function(){let n=0,e=[];return function(t){let i=t===n;n=t;let s,r=new Array(8);for(s=7;s>=0;s--)r[s]=nv.charAt(t%64),t=Math.floor(t/64);ce(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=nv.charAt(e[s]);return ce(o.length===20,"nextPushId: Length should be 20."),o}})();var ru=class{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){let e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+qt(this.snapshot.exportVal())}},ou=class{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}};var au=class{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ce(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}};var Pp=class{constructor(e,t){this._repo=e,this._path=t}cancel(){let e=new Pn;return D1(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){rr("OnDisconnect.remove",this._path);let e=new Pn;return Q0(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){rr("OnDisconnect.set",this._path),su("OnDisconnect.set",e,this._path,!1);let t=new Pn;return Q0(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){rr("OnDisconnect.setWithPriority",this._path),su("OnDisconnect.setWithPriority",e,this._path,!1),S1("OnDisconnect.setWithPriority",t);let i=new Pn;return L1(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){rr("OnDisconnect.update",this._path),ey("OnDisconnect.update",e,this._path);let t=new Pn;return O1(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};var Np=class n{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return rt(this._path)?null:kp(this._path)}get ref(){return new wi(this._repo,this._path)}get _queryIdentifier(){let e=z0(this._queryParams),t=Up(e);return t==="{}"?"default":t}get _queryObject(){return z0(this._queryParams)}isEqual(e){if(e=Mi(e),!(e instanceof n))return!1;let t=this._repo===e._repo,i=zp(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+JA(this._path)}};var wi=class n extends Np{constructor(e,t){super(e,t,new lp,!1)}get parent(){let e=Mv(this._path);return e===null?null:new n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}},il=class n{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new mt(e),i=fo(this.ref,e);return new n(this._node.getChild(t),i,Ft)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new n(s,fo(this.ref,i),Ft)))}hasChild(e){let t=new mt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function Ti(n,e){return n=Mi(n),n._checkNotDeleted("ref"),e!==void 0?fo(n._root,e):n._root}function fo(n,e){return n=Mi(n),tt(n._path)===null?M1("child","path",e,!1):ty("child","path",e,!1),new wi(n._repo,Ot(n._path,e))}function hy(n){return n=Mi(n),new Pp(n._repo,n._path)}function uy(n,e){n=Mi(n),rr("push",n._path),su("push",e,n._path,!0);let t=sy(n._repo),i=G1(t),s=fo(n,i),r=fo(n,i),o;return e!=null?o=vo(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function yu(n){return rr("remove",n._path),vo(n,null)}function vo(n,e){n=Mi(n),rr("set",n._path),su("set",e,n._path,!1);let t=new Pn;return I1(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function xu(n,e){ey("update",e,n._path);let t=new Pn;return P1(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function dy(n){n=Mi(n);let e=new au(()=>{}),t=new lu(e);return R1(n._repo,n,t).then(i=>new il(i,new wi(n._repo,n._path),n._queryParams.getIndex()))}var lu=class n{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){let i=t._queryParams.getIndex();return new ru("value",this,new il(e.snapshotNode,new wi(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ou(this,e,t):null}matches(e){return e instanceof n?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}},Dp=class n{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ou(this,e,t):null}createEvent(e,t){ce(e.childName!=null,"Child events should have a childName.");let i=fo(new wi(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new ru(e.type,this,new il(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof n?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}};function fy(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){let l=t,c=(h,u)=>{ev(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}let o=new au(t,r||void 0),a=e==="value"?new lu(o):new Dp(e,o);return F1(n._repo,n,a),()=>ev(n._repo,n,a)}function dr(n,e,t,i){return fy(n,"value",e,t,i)}function py(n,e,t,i){return fy(n,"child_added",e,t,i)}YC(wi);jC(wi);var V1="FIREBASE_DATABASE_EMULATOR_HOST",Lp={},W1=!1;function X1(n,e,t,i){let s=e.lastIndexOf(":"),r=e.substring(0,s),o=vf(r);n.repoInfo_=new Bh(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function q1(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Zi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rn("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=tv(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[V1]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=tv(r,s),a=o.repoInfo):l=!o.repoInfo.secure;let h=s&&l?new bs(bs.OWNER):new Xf(n.name,n.options,e);b1("Invalid Firebase Database URL",o),rt(o.path)||Zi("Database URL must point to the root of a Firebase Database (not including a child path).");let u=$1(a,n,h,new Wf(n,t));return new Op(u,n)}function Y1(n,e){let t=Lp[e];(!t||t[n.key]!==n)&&Zi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ry(n),delete t[n.key]}function $1(n,e,t,i){let s=Lp[e.name];s||(s={},Lp[e.name]=s);let r=s[n.toURLString()];return r&&Zi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ip(n,W1,t,i),s[n.toURLString()]=r,r}var Op=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(A1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wi(this._repo,ft())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Y1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Zi("Cannot call "+e+" on a deleted database.")}};function my(n=x0(),e){let t=_0(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){let i=$_("database");i&&K1(t,...i)}return t}function K1(n,e,t,i={}){n=Mi(n),n._checkNotDeleted("useEmulator");let s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Qr(i,r.repoInfo_.emulatorOptions))return;Zi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Zi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new bs(bs.OWNER);else if(i.mockUserToken){let a=typeof i.mockUserToken=="string"?i.mockUserToken:K_(i.mockUserToken,n.app.options.projectId);o=new bs(a)}vf(e)&&s0(e),X1(r,s,i,o)}function rm(n){n=Mi(n),n._checkNotDeleted("goOffline"),ry(n._repo)}function J1(n){mA(y0),ka(new Yi("database",(e,{instanceIdentifier:t})=>{let i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return q1(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Ss(b0,E0,n),Ss(b0,E0,"esm2020")}var Z1={".sv":"timestamp"};function Su(){return Z1}lr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};lr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};J1();var gy={apiKey:"AIzaSyDtHx2vGHhMd7Sv0UMwL3JU35iLD7eD9nM",authDomain:"eclipse-game-865ae.firebaseapp.com",databaseURL:"https://eclipse-game-865ae-default-rtdb.europe-west1.firebasedatabase.app",projectId:"eclipse-game-865ae",storageBucket:"eclipse-game-865ae.firebasestorage.app",messagingSenderId:"578340682575",appId:"1:578340682575:web:5087cb3782c19b8f52e33a"};var _y=12e3,hl=class{constructor(){this.h={}}on(e,t){var i;((i=this.h)[e]||(i[e]=[])).push(t)}emit(e,...t){for(let i of this.h[e]||[])i(...t)}};function j1(n){if(!n.length)return null;let e=[...n].sort((t,i)=>t-i);return e[Math.floor(e.length/2)]}var vy=()=>Math.random().toString(36).slice(2,10),Mu=class extends hl{constructor(){super(),this.kind="online",this.offset=0,this.status={server:"connecting",ping:null,partnerOnline:!1,partnerPing:null,error:null,conflict:!1},this.pings=[],this.sid=vy(),this.connected=!1}serverNow(){return Date.now()+this.offset}join(e,t){this.role=t,this.other=Sn(t);let i=Nf(gy),s=this.db=my(i),r=this.base=`rooms/${e}`;this.meRef=Ti(s,`${r}/players/${t}/meta`),this.stateRef=Ti(s,`${r}/players/${t}/s`),this.evRef=Ti(s,`${r}/ev`),this.starsRef=Ti(s,`${r}/stars`),this.joinedAt=Date.now(),dr(Ti(s,".info/serverTimeOffset"),o=>{this.offset=o.val()||0}),this.timeout=setTimeout(()=>{this.everConnected||(this.status.server="unreachable",this.emit("status",this.status))},12e3),dr(Ti(s,".info/connected"),async o=>{this.connected=!!o.val(),this.connected?(this.everConnected=!0,clearTimeout(this.timeout),this.status.server="ok",this.emit("status",this.status),await this._claim()):this.everConnected&&(this.status.server="reconnecting",this.emit("status",this.status))},o=>this._fail(o)),dr(Ti(s,`${r}/players/${this.other}/meta`),o=>{let a=o.val();this.partnerMeta=a,this._updatePartner()},o=>this._fail(o)),dr(Ti(s,`${r}/players/${this.other}/s`),o=>{let a=o.val();a&&a.p&&this.emit("state",a)},o=>this._fail(o)),dr(this.meRef,o=>{let a=o.val();this.claimed&&a&&a.sid&&a.sid!==this.sid&&a.online&&(this.status.conflict=!0,this.emit("status",this.status))}),py(this.evRef,o=>{let a=o.val();if(!a||typeof a.t!="number")return;let l=this.serverNow()-a.t;if(l>6e4){yu(o.ref).catch(()=>{});return}a.from===this.role||l>5e3||this.emit("event",a)},o=>this._fail(o)),dr(this.starsRef,o=>this.emit("stars",o.val()||{}),o=>this._fail(o)),this.hb=setInterval(()=>this._heartbeat(),1500),this.pt=setInterval(()=>this._updatePartner(),1e3)}async _claim(){try{if(!this.claimed){let e=(await dy(this.meRef)).val();if(e&&e.online&&e.sid!==this.sid&&this.serverNow()-(e.seen||0)<_y){this.status.conflict=!0,this.emit("status",this.status);return}}await hy(this.meRef).update({online:!1}),await xu(this.meRef,{online:!0,sid:this.sid,seen:Su(),ping:Math.round(this.status.ping||0),v:"2026-11-07.1350"}),this.claimed=!0,this._heartbeat()}catch(e){this._fail(e)}}_heartbeat(){if(!this.connected||!this.claimed||this.status.conflict)return;let e=performance.now();xu(this.meRef,{online:!0,sid:this.sid,seen:Su(),ping:Math.round(this.status.ping||0)}).then(()=>{let t=performance.now()-e;this.pings.push(t),this.pings.length>7&&this.pings.shift(),this.status.ping=j1(this.pings),this.emit("status",this.status)}).catch(t=>this._fail(t))}_updatePartner(){let e=this.partnerMeta,t=!!(e&&e.online&&this.serverNow()-(e.seen||0)<_y),i=t!==this.status.partnerOnline;this.status.partnerOnline=t,this.status.partnerPing=t&&e.ping?e.ping:null,i&&this.emit("partner",t),this.emit("status",this.status)}_fail(e){console.warn("[net]",e);let t=String(e&&(e.code||e.message||e));this.status.error=/permission/i.test(t)?"rules":t,this.emit("status",this.status)}sendState(e){!this.connected||!this.claimed||this.status.conflict||vo(this.stateRef,e).catch(()=>{})}sendEvent(e,t={}){if(!this.connected||!this.claimed)return;let i=uy(this.evRef);vo(i,{...t,type:e,from:this.role,t:Su()}).catch(()=>{}),setTimeout(()=>yu(i).catch(()=>{}),15e3)}collectStar(e){vo(Ti(this.db,`${this.base}/stars/${e}`),!0).catch(()=>{})}resetStars(){yu(this.starsRef).catch(()=>{})}leave(){if(clearInterval(this.hb),clearInterval(this.pt),this.claimed)return xu(this.meRef,{online:!1}).catch(()=>{}).finally(()=>rm(this.db));try{rm(this.db)}catch{}return Promise.resolve()}},bu=class extends hl{constructor(e=0){super(),this.kind="local",this.lag=e,this.status={server:"ok",ping:e*2,partnerOnline:!1,partnerPing:null,error:null,conflict:!1},this.stars={},this.sid=vy(),this.partnerSeen=0}serverNow(){return Date.now()}join(e,t){this.role=t,this.other=Sn(t),this.bc=new BroadcastChannel("eclipse-"+e),this.bc.onmessage=s=>{let r=s.data;if(!r||r.from===this.role)return;let o=()=>this._recv(r);this.lag?setTimeout(o,this.lag*(.75+Math.random()*.5)):o()};let i=()=>this._send({k:"meta",ping:this.lag*2});i(),this._send({k:"hello"}),this.hb=setInterval(()=>{i(),this._check()},1e3),setTimeout(()=>this.emit("status",this.status),0)}_send(e){this.bc.postMessage({...e,from:this.role})}_recv(e){e.k==="meta"?(this.partnerSeen=Date.now(),this.status.partnerPing=e.ping,this._check()):e.k==="hello"?(this._send({k:"meta",ping:this.lag*2}),this._send({k:"stars",stars:this.stars})):e.k==="state"?(this.partnerSeen=Date.now(),this._check(),this.emit("state",e.s)):e.k==="ev"?this.emit("event",e.e):e.k==="stars"?(Object.assign(this.stars,e.stars),e.reset&&(this.stars={}),this.emit("stars",{...this.stars})):e.k==="bye"&&(this.partnerSeen=0,this._check())}_check(){let e=Date.now()-this.partnerSeen<4e3;e!==this.status.partnerOnline&&(this.status.partnerOnline=e,this.emit("partner",e)),this.emit("status",this.status)}sendState(e){this._send({k:"state",s:e})}sendEvent(e,t={}){this._send({k:"ev",e:{...t,type:e,from:this.role,t:Date.now()}})}collectStar(e){this.stars[e]=!0,this._send({k:"stars",stars:{[e]:!0}}),this.emit("stars",{...this.stars})}resetStars(){this.stars={},this._send({k:"stars",stars:{},reset:!0}),this.emit("stars",{})}leave(){return this._send({k:"bye"}),clearInterval(this.hb),this.bc.close(),Promise.resolve()}},Eu=class extends hl{constructor(){super(),this.kind="solo",this.status={server:"solo",ping:null,partnerOnline:!0,partnerPing:null,error:null,conflict:!1},this.stars={}}serverNow(){return Date.now()}join(e,t){this.role=t,this.other=Sn(t)}sendState(){}sendEvent(){}collectStar(e){this.stars[e]=!0,this.emit("stars",{...this.stars})}resetStars(){this.stars={},this.emit("stars",{})}leave(){return Promise.resolve()}};var gt=n=>document.querySelector(n);function yy({onJoin:n,onSolo:e,onStart:t,onRetry:i,onLeave:s,onResetStars:r,onToggleSound:o,onFullscreen:a,canFullscreen:l}){let c=gt("#lobby"),h=gt("#conn"),u=gt("#hud"),d=nn.get("role",null),f=gt("#word");f.value=nn.get("word",""),gt("#ver").textContent="version 2026-11-07.1350";let m=[...document.querySelectorAll(".role")],v=()=>m.forEach(M=>M.classList.toggle("sel",M.dataset.role===d));v(),m.forEach(M=>M.addEventListener("click",()=>{d=M.dataset.role,nn.set("role",d),v(),p("")}));let p=M=>{gt("#lobby-err").textContent=M};gt("#join").addEventListener("click",()=>{let M=f.value.trim();if(!d)return p("Pick Sun or Moon first.");if(M.length<2)return p("Type a secret word (you both use the same one).");nn.set("word",M),f.blur(),n(d,M)}),f.addEventListener("keydown",M=>{M.key==="Enter"&&gt("#join").click()}),gt("#solo").addEventListener("click",()=>{f.blur(),e(d||"sun")}),gt("#conn-start").addEventListener("click",()=>t()),gt("#conn-retry").addEventListener("click",()=>i()),gt("#conn-leave").addEventListener("click",()=>s()),gt("#opt-stars").addEventListener("click",()=>{r(),_("Stars reset")});let g=gt("#opt-sound"),y=M=>{g.textContent=M?"\u{1F50A} Sound on":"\u{1F508} Sound off"};g.addEventListener("click",()=>y(o())),gt("#opt-full").hidden=!l,gt("#opt-full").addEventListener("click",()=>a());let S="join";function x(M,R,A,P,O=""){let U=gt(M),I=U.querySelector(".ic");I.className="ic "+R,I.textContent=R==="good"?"\u2713":R==="bad"?"\u2715":R==="ok"?"!":"",U.querySelector("b").textContent=A,U.querySelector("small").textContent=P,U.querySelector(".ms").textContent=O}let T=M=>M<120?["good","Great"]:M<220?["good","Good"]:M<400?["ok","OK"]:["bad","Laggy"];function w(M,R,A){let P=Sn(R),O=`${ai[P]} ${Rn[P]}`;gt("#conn-who").textContent=A==="solo"?"Practice alone: you control both.":`You are ${ai[R]} ${Rn[R]}`+(A==="local"?" (two-tab test)":"");let U="",I=!1,B=!1;if(A==="solo")x("#row-server","good","Practice mode","No internet needed"),I=!0;else if(A==="local")x("#row-server","good","Test mode","Two tabs on this computer",M.ping?`${M.ping} ms fake lag`:""),I=!0;else if(M.error==="rules")x("#row-server","bad","Game server said no","The database rules need to be set"),U="The database is still locked. Paste the rules from database.rules.json into Firebase \u2192 Realtime Database \u2192 Rules, then tap Try again.",B=!0;else if(M.server==="ok"){let K=M.ping!=null?Math.round(M.ping):null;x("#row-server",K==null?"good":T(K)[0],"Game server",K==null?"Connected, measuring\u2026":`Connected \xB7 ${T(K)[1]}`,K==null?"":`${K} ms`),I=!0}else M.server==="reconnecting"?(x("#row-server","wait","Game server","Connection lost, reconnecting\u2026"),I=S==="menu"):M.server==="unreachable"?(x("#row-server","bad","Game server","Can't reach it from this network"),U="Couldn't reach the game server. Check the internet connection and tap Try again. If it keeps failing, a VPN is the backup plan.",B=!0):x("#row-server","wait","Game server","Connecting\u2026");A==="solo"?x("#row-partner","good","Both characters","Tap \u21C4 to switch who you control"):M.conflict?(x("#row-partner","bad",`${Rn[R]} is taken`,`Someone is already ${Rn[R]} with this word`),U=`Someone is already playing as ${Rn[R]} with this secret word. Tap Leave and pick ${Rn[P]}.`,I=!1):M.partnerOnline?x("#row-partner",M.partnerPing?T(M.partnerPing)[0]:"good",`${O} is here`,M.partnerPing?`Their connection \xB7 ${T(M.partnerPing)[1]}`:"Connected",M.partnerPing?`${Math.round(M.partnerPing)} ms`:""):x("#row-partner","wait",`Waiting for ${O}\u2026`,`Same secret word, pick ${Rn[P]}`);let q=A!=="solo"&&M.partnerOnline&&M.ping!=null&&M.partnerPing!=null;if(gt("#row-delay").hidden=!q,q){let K=Math.round((M.ping+M.partnerPing)/2),[Te,Ne]=T(K);x("#row-delay",Te,"Delay between you",Ne,`\u2248 ${K} ms`)}gt("#conn-msg").textContent=U;let V=gt("#conn-start");V.disabled=!I,V.textContent=S==="menu"?"Back to game":A!=="solo"&&!M.partnerOnline&&I?`Start (${Rn[P]} can join any time)`:"Start playing",gt("#conn-retry").hidden=!B;let ie=gt("#status-pill .dot"),W="good",Z="";if(A==="solo")Z="Practice";else if(M.server!=="ok"&&A!=="local")W=M.server==="unreachable"||M.error?"bad":"ok",Z=M.server==="reconnecting"?"Reconnecting\u2026":"Offline";else{let K=M.ping!=null?Math.round(M.ping):null;K!=null&&(W=T(K)[0]),Z=`${K!=null?K+" ms":"\u2026"} \xB7 ${ai[P]} ${M.partnerOnline?"here":"away"}`,M.partnerOnline||(W=W==="bad"?"bad":"ok")}ie.className="dot "+W,gt("#status-text").textContent=Z}function _(M){let R=document.createElement("div");R.className="toast",R.textContent=M,gt("#toasts").appendChild(R),setTimeout(()=>R.remove(),2900);let A=gt("#toasts").children;A.length>3&&A[0].remove()}return{toast:_,renderStatus:w,paintSound:y,showLobby(){c.hidden=!1,h.hidden=!0,u.hidden=!0},showConn(M){S=M,c.hidden=!0,h.hidden=!1,gt("#conn-title").textContent=M==="menu"?"Menu":"Connection",gt("#conn-extras").hidden=M!=="menu"},showHud(){c.hidden=!0,h.hidden=!0,u.hidden=!1},setStars(M,R){gt("#star-count").textContent=M,gt("#star-total").textContent=R},get connOpen(){return!h.hidden}}}var Q1=n=>n.normalize("NFKC").trim().toLowerCase().replace(/\s+/g,""),wu=null;async function eR(){let n=await fetch("memories.enc?v=2026-11-07.1350");if(!n.ok)throw new Error("missing");return new Uint8Array(await n.arrayBuffer())}async function xy(n){if(wu)return wu;if(!crypto?.subtle)throw new Error("unsupported");let e=await eR();if(new TextDecoder().decode(e.slice(0,4))!=="ECLM")throw new Error("missing");let t=new DataView(e.buffer,e.byteOffset).getUint32(5),i=e.slice(9,25),s=e.slice(25,37),r=e.slice(37),o=await crypto.subtle.importKey("raw",new TextEncoder().encode(Q1(n)),"PBKDF2",!1,["deriveKey"]),a=await crypto.subtle.deriveKey({name:"PBKDF2",salt:i,iterations:t,hash:"SHA-256"},o,{name:"AES-GCM",length:256},!1,["decrypt"]),l;try{l=await crypto.subtle.decrypt({name:"AES-GCM",iv:s},a,r)}catch{throw new Error("wrong-password")}return wu=JSON.parse(new TextDecoder().decode(l)).items.map(h=>{let u=atob(h.data),d=new Uint8Array(u.length);for(let f=0;f<u.length;f++)d[f]=u.charCodeAt(f);return{...h,data:void 0,url:URL.createObjectURL(new Blob([d],{type:h.mime}))}}),nn.set("memPw",n),wu}var Sy=()=>nn.get("memPw","");var an=n=>document.querySelector(n);function My(){let n=an("#mem"),e=an("#mem-view"),t=an("#mem-grid"),i=an("#mem-lock"),s=an("#mem-pw"),r=an("#mem-err"),o=an("#mem-open"),a=null,l=[],c=0;function h(v){l=v,i.hidden=!0,t.hidden=!1,t.innerHTML="",v.forEach((p,g)=>{let y=document.createElement("button"),S=document.createElement("img");S.src=p.url,S.alt=p.title,S.loading="lazy";let x=document.createElement("span");x.textContent=p.title,y.append(S,x),y.addEventListener("click",()=>m(g)),t.appendChild(y)})}async function u(v,p){if(v){o.disabled=!0,r.textContent=p?"":"Unlocking\u2026";try{h(await xy(v)),r.textContent=""}catch(g){let y=String(g.message);p||(r.textContent=y==="wrong-password"?"That's not the password.":y==="unsupported"?"This browser can\u2019t open them. Try Safari or Chrome.":"Couldn\u2019t load the memories. Check the internet connection.")}finally{o.disabled=!1}}}function d(v){if(a=v,v&&(v.hidden=!0),n.hidden=!1,!l.length){i.hidden=!1,t.hidden=!0;let p=Sy();p&&u(p,!0)}}function f(){n.hidden=!0,a&&(a.hidden=!1)}function m(v){c=(v+l.length)%l.length;let p=l[c];an("#mem-img").src=p.url,an("#mem-title").textContent=p.title,an("#mem-caption").textContent=p.caption||"",e.hidden=!1}o.addEventListener("click",()=>u(s.value,!1)),s.addEventListener("keydown",v=>{v.key==="Enter"&&u(s.value,!1)}),an("#mem-close").addEventListener("click",f),an("#mem-x").addEventListener("click",()=>{e.hidden=!0}),an("#mem-prev").addEventListener("click",()=>m(c-1)),an("#mem-next").addEventListener("click",()=>m(c+1)),an("#lobby-mem").addEventListener("click",()=>d(an("#lobby"))),an("#opt-mem").addEventListener("click",()=>d(an("#conn")))}var It=n=>document.querySelector(n),tR=Js.has("debug"),Ty=It("#game"),Rs=new mh({canvas:Ty,antialias:!1,powerPreference:"high-performance"});Rs.toneMapping=qs;Rs.toneMappingExposure=1;Rs.shadowMap.enabled=!0;Rs.shadowMap.type=Ws;var Iu=new Bo,Nn=new pn(55,1,.1,700),nR=new zt(4,4,{type:Kt,samples:4}),yo=new Sh(Rs,nR);yo.addPass(new Mh(Iu,Nn));var Ay=new Zr(new re(256,256),.6,.55,1);yo.addPass(Ay);yo.addPass(new bh);var Cy=[{dpr:Math.min(devicePixelRatio,2),bloom:!0,shadow:2048},{dpr:Math.min(devicePixelRatio,1.6),bloom:!0,shadow:2048},{dpr:Math.min(devicePixelRatio,1.25),bloom:!0,shadow:1024},{dpr:1,bloom:!1,shadow:1024}],Cu=_s(+Js.get("q")||0,0,3);function Pu(){let n=window.innerWidth,e=window.innerHeight,t=Cy[Cu];Rs.setPixelRatio(t.dpr),Rs.setSize(n,e,!1),yo.setPixelRatio(t.dpr),yo.setSize(n,e),Ay.enabled=t.bloom,Nn.aspect=n/e,Nn.fov=n<e?70:55,Nn.updateProjectionMatrix(),n>e&&(It("#rotate-hint").hidden=!0)}window.addEventListener("resize",Pu);window.visualViewport?.addEventListener("resize",Pu);var $t=P_(Iu),Ri=new wh(Iu,Nn),dl=["sun","moon"],Yt={},Rt={},Wn={},fl={};for(let n of dl)Yt[n]=O_(n),Iu.add(Yt[n].root),Rt[n]=new Th,Wn[n]=B_(Rt[n]),Wn[n].disabled=!0,fl[n]={role:n,body:Rt[n],coyote:0,buffer:0,jumps:0,cut:!0,safe:$t.spawn[n].clone(),safeT:0,k:0,lastMoving:0,airT:0};function iR(n){Rt[n].pos.copy($t.spawn[n]),Rt[n].vel.set(0,0,0),Yt[n].root.position.copy($t.spawn[n]),Yt[n].setYaw(Math.PI)}dl.forEach(iR);var sR=[...$t.colliders,Wn.sun,Wn.moon],ne={mode:"lobby",kind:null,role:"sun",active:"sun",net:null,track:new Ch,partnerK:null,cam:{yaw:0,pitch:.3,dist:7.2,target:new N(0,1,5),lastDrag:-10},lastSend:0,stars:{},cooldown:{ability:0,heart:0},t:0},pl=()=>ne.net?ne.net.serverNow():Date.now(),Ci=z_({canvas:Ty,joyZone:It("#joy-zone"),joyBase:It("#joy-base"),joyKnob:It("#joy-knob"),buttons:{jump:It("#btn-jump"),ability:It("#btn-ability"),heart:It("#btn-heart"),swap:It("#btn-swap")}}),hm=lf&&!R_&&!!document.documentElement.requestFullscreen;function Ry(){!hm||document.fullscreenElement||document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}var Dn=yy({canFullscreen:hm,onJoin:(n,e)=>lm(Js.get("net")==="local"?"local":"online",n,e),onSolo:n=>lm("solo",n,""),onStart:()=>Iy(),onRetry:()=>{sessionStorage.setItem("eclipse.autojoin","1"),location.reload()},onLeave:()=>{sessionStorage.removeItem("eclipse.autojoin"),(ne.net?ne.net.leave():Promise.resolve()).finally(()=>location.reload())},onResetStars:()=>ne.net?.resetStars(),onToggleSound:()=>Mn.toggle(),onFullscreen:Ry});Dn.paintSound(Mn.enabled);My();Dn.setStars(0,$t.stars.length);It("#menu-btn").addEventListener("click",()=>{ne.mode==="play"&&(ne.mode="menu",Ci.setEnabled(!1),Dn.showConn("menu"),Ru())});It("#status-pill").addEventListener("click",()=>It("#menu-btn").click());It("#rotate-ok").addEventListener("click",()=>{It("#rotate-hint").hidden=!0,nn.set("rotateOk",!0)});function Ru(){ne.net&&Dn.renderStatus(ne.net.status,ne.role,ne.kind)}function lm(n,e,t){ne.kind=n,ne.role=e,ne.active=e,document.body.classList.remove("sun","moon"),document.body.classList.add(e),It("#ability-label").textContent=e==="sun"?"Shine":"Tide",It("#partner-arrow-icon").textContent=ai[Sn(e)],It("#btn-swap").hidden=n!=="solo",n==="solo"&&(Wn.sun.disabled=Wn.moon.disabled=!1),hm&&Ry();let i=ne.net=n==="online"?new Mu:n==="local"?new bu(+Js.get("lag")||0):new Eu;if(i.on("status",Ru),i.on("state",s=>{if(ne.partnerK!==s.k){ne.partnerK=s.k,ne.track.push(s,Date.now()),ne.track.snap();return}ne.track.push(s,Date.now())}),i.on("partner",s=>{if(ne.mode!=="play"&&ne.mode!=="menu")return;let r=Sn(ne.role);Dn.toast(s?`${ai[r]} ${Rn[r]} joined!`:`${ai[r]} ${Rn[r]} left`),s&&Mn.play("join")}),i.on("event",rR),i.on("stars",oR),i.join(n==="solo"?"solo":C_(t),e),n==="solo"){Ru(),Iy();return}ne.mode="connecting",Dn.showConn("join"),Ru()}function Iy(){let n=ne.mode==="connecting"||ne.mode==="lobby";ne.mode="play",Dn.showHud(),Ci.setEnabled(!0),n&&(ne.cam.yaw=0,ne.cam.pitch=.3,ne.cam.target.copy(Rt[ne.active].pos).add(new N(0,1.1,0)),lf&&innerHeight>innerWidth&&!nn.get("rotateOk",!1)&&(It("#rotate-hint").hidden=!1),Dn.toast(ne.kind==="solo"?"Practice: tap \u21C4 to switch characters":"Find the 3 stars together \u2B50"))}sessionStorage.getItem("eclipse.autojoin")&&nn.get("role")&&nn.get("word")?(sessionStorage.removeItem("eclipse.autojoin"),lm(Js.get("net")==="local"?"local":"online",nn.get("role"),nn.get("word"))):Dn.showLobby();function rR(n){let e=Yt[n.from];e&&(n.type==="heart"?(Ri.hearts(e.root.position,n.from==="sun"?16754253:11832575),Dn.toast(`${ai[n.from]} ${Rn[n.from]} sent you a heart ${n.from==="sun"?"\u{1F9E1}":"\u{1F49C}"}`),Mn.play("heart")):n.type==="ability"&&Py(n.from))}function Py(n){n==="sun"?(Ri.shine(Yt.sun),Mn.play("shine")):(Ri.tide(Yt.moon),Mn.play("tide"))}function oR(n){for(let e of $t.stars){let t=!!n[e.id];t&&!e.collected&&(Ri.sparks(e.pos.clone().setY(e.pos.y-.6),16769658,22),Mn.play("star")),e.collected=t}Ny(!1)}var om=!1;function Ny(n){let e=$t.stars.filter(t=>t.collected).length;Dn.setStars(e,$t.stars.length),n&&Dn.toast(`\u2B50 ${e}/${$t.stars.length}`),e===$t.stars.length&&!om&&ne.mode==="play"&&(om=!0,setTimeout(()=>Dn.toast("All stars found! You two make a great team \u2728"),600)),e<$t.stars.length&&(om=!1)}var cm=5.6,aR=11,lR=9.5,cR=new N,by=It("#fade");function Dy(n,e,t,i,s){let r=n.body,o=ne.cam.yaw,a=-Math.sin(o),l=-Math.cos(o),c=Math.cos(o),h=-Math.sin(o),u=Math.min(1,Math.hypot(e.x,e.y)),d=c*e.x+a*e.y,f=h*e.x+l*e.y,m=Math.hypot(d,f);m>1e-4?(d=d/m*cm*u,f=f/m*cm*u):(d=0,f=0);let v=(r.grounded?48:24)*s,p=d-r.vel.x,g=f-r.vel.z,y=Math.hypot(p,g);y>v&&(p*=v/y,g*=v/y),r.vel.x+=p,r.vel.z+=g,r.grounded?(n.coyote=.13,n.jumps=0,n.airT=0):(n.coyote-=s,n.airT+=s),n.buffer=t?.16:n.buffer-s,n.buffer>0&&(r.grounded||n.coyote>0?(r.vel.y=aR,n.jumps=1,n.coyote=0,n.buffer=0,n.cut=!1,r.grounded=!1,r.ground=null,Mn.play("jump"),Ri.dust(r.pos,4)):n.jumps<2&&(r.vel.y=lR,n.jumps=2,n.buffer=0,n.cut=!0,Mn.play("jump2"),Ri.sparks(r.pos.clone().setY(r.pos.y-.5),n.role==="sun"?16765024:11188479,8,1.5))),!i&&!n.cut&&r.vel.y>6&&(r.vel.y=6,n.cut=!0);let S=U_(r,sR,s);S&&(S.collider.bounce?(Mn.play("bounce"),$t.bounce(S.collider),n.jumps=1,n.cut=!0,Yt[n.role].land(10)):(S.impact>7&&(Mn.play("land"),Ri.dust(r.pos,6)),Yt[n.role].land(S.impact))),r.grounded&&r.ground&&r.ground.safe?(n.safeT+=s,n.safeT>.35&&n.safe.copy(r.pos)):n.safeT=0,r.pos.y<$t.killY&&hR(n)}function hR(n){let e=n.body;e.pos.copy(n.safe).add(cR.set(0,.3,0)),e.vel.set(0,0,0),e.ground=null,e.grounded=!1,n.k++,Wn[n.role].ready=!1,Yt[n.role].root.position.copy(e.pos),n.role===ne.active&&(by.classList.add("on"),setTimeout(()=>by.classList.remove("on"),180),Mn.play("respawn"))}function uR(n){let e=fl[ne.role],t=e.body;(Math.hypot(t.vel.x,t.vel.z)>.05||!t.grounded)&&(e.lastMoving=n);let s=n-e.lastMoving<600?66:500;if(n-ne.lastSend<s)return;ne.lastSend=n;let r={t:Math.round(pl()),v:[oi(t.vel.x),oi(t.vel.y),oi(t.vel.z)],r:oi(Yt[ne.role].yaw),g:t.grounded?1:0,k:e.k},o=null;t.grounded&&t.ground&&(t.ground.id==="raft"?o=$t.movers.raft.pos(pl(),new N):t.ground===Wn[Sn(ne.role)]&&ne.track.has&&(o=ne.track.pos),o&&(r.b=t.ground.id==="raft"?"raft":Sn(ne.role))),r.p=o?[oi(t.pos.x-o.x),oi(t.pos.y-o.y),oi(t.pos.z-o.z)]:[oi(t.pos.x),oi(t.pos.y),oi(t.pos.z)],ne.net.sendState(r)}function dR(n,e){return n==="raft"?$t.movers.raft.pos(pl(),e):n===ne.role?e.copy(Rt[ne.role].pos):null}var ul=new N;function fR(n){let e=ne.cam;if(ne.mode==="lobby"||ne.mode==="connecting"){let a=ne.t*.06,l=Nn.aspect<1?36:24;Nn.position.set(6+Math.sin(a)*l,10+Math.sin(ne.t*.1)*1.5,-2+Math.cos(a)*l),Nn.lookAt(6,.5,-2);return}let t=Ci.takeCam();(t.x||t.y)&&(e.yaw-=t.x*.0065,e.pitch=_s(e.pitch+t.y*.0045,-.2,1.2),e.lastDrag=ne.t);let i=Rt[ne.active],s=Math.hypot(i.vel.x,i.vel.z);if(s>1.5&&ne.t-e.lastDrag>1.2){let a=Math.atan2(-i.vel.x,-i.vel.z),l=Da(e.yaw,a);Math.abs(l)<1.75&&(e.yaw+=_s(l,-1,1)*Math.min(1,s/cm)*.9*n)}ul.copy(i.pos),ul.y+=1.1,e.target.x=xi(e.target.x,ul.x,12,n),e.target.z=xi(e.target.z,ul.z,12,n),e.target.y=xi(e.target.y,ul.y,i.grounded?8:3.5,n);let r=e.dist*(Nn.aspect<1?1.25:1),o=Math.cos(e.pitch);Nn.position.set(e.target.x+Math.sin(e.yaw)*o*r,e.target.y+Math.sin(e.pitch)*r,e.target.z+Math.cos(e.yaw)*o*r),Nn.position.y<e.target.y-1&&(Nn.position.y=e.target.y-1),Nn.lookAt(e.target)}var Tu=It("#partner-arrow"),Ai=new N;function pR(n){if(!n||ne.mode!=="play"){Tu.hidden=!0;return}let e=ne.kind==="solo"?Sn(ne.active):Sn(ne.role);Ai.copy(Yt[e].root.position),Ai.y+=.6,Ai.project(Nn);let t=Ai.z>1;if(!t&&Math.abs(Ai.x)<.95&&Math.abs(Ai.y)<.92){Tu.hidden=!0;return}let i=t?-Ai.x:Ai.x,s=t?-Ai.y:Ai.y,r=Math.max(Math.abs(i),Math.abs(s))||1;i/=r,s/=r;let o=innerWidth,a=innerHeight;Tu.hidden=!1,It("#partner-arrow-icon").textContent=ai[e];let l=_s((i*.5+.5)*o,34,o-34),c=_s((-s*.5+.5)*a,70,l>o-240?a-200:a-34);Tu.style.transform=`translate(${l}px, ${c}px)`}var Ey=performance.now(),Au=0,am=0,wy=0,Ly={x:0,y:0};Pu();function Oy(n){requestAnimationFrame(Oy);let e=(n-Ey)/1e3;Ey=n;let t=Math.min(.05,Math.max(.001,e));ne.t+=t;let i=pl();$t.update(i,ne.t,t);let s=ne.mode==="play"||ne.mode==="menu",r=Sn(ne.role),o=!1;if(s){if(ne.kind!=="solo"){let c=ne.net.status.partnerOnline&&ne.track.sample(Date.now(),t,dR);o=!!c,c&&(Yt[r].root.position.copy(ne.track.pos),Yt[r].setYaw(af(Yt[r].yaw,ne.track.yaw,18,t)),Ah(Wn[r],ne.track.pos,Rt[r].h)),Wn[r].disabled=!c}else o=!0;ne.cooldown.ability-=t,ne.cooldown.heart-=t;let a=Ci.consume("jump");if(Ci.consume("ability")&&ne.cooldown.ability<=0&&(ne.cooldown.ability=.6,Py(ne.kind==="solo"?ne.active:ne.role),ne.net.sendEvent("ability")),Ci.consume("heart")&&ne.cooldown.heart<=0){ne.cooldown.heart=.8;let c=ne.kind==="solo"?ne.active:ne.role;Ri.hearts(Yt[c].root.position,c==="sun"?16754253:11832575),Mn.play("heart"),ne.net.sendEvent("heart")}Ci.consume("swap")&&ne.kind==="solo"&&(ne.active=Sn(ne.active),It("#ability-label").textContent=ne.active==="sun"?"Shine":"Tide",document.body.classList.remove("sun","moon"),document.body.classList.add(ne.active),Dn.toast(`Now playing ${ai[ne.active]} ${Rn[ne.active]}`));let l=ne.kind==="solo"?dl:[ne.role];for(let c of l){let h=c===ne.active&&ne.mode==="play";Dy(fl[c],h?Ci.state.move:Ly,h&&a,h&&Ci.state.jumpHeld,t)}for(let c of l){Ah(Wn[c],Rt[c].pos,Rt[c].h);let h=Rt[c],u=Yt[c];u.root.position.copy(h.pos),Math.hypot(h.vel.x,h.vel.z)>.4&&u.setYaw(af(u.yaw,Math.atan2(h.vel.x,h.vel.z),14,t))}for(let c of $t.stars)if(!c.collected)for(let h of l){let u=Rt[h];if(Math.abs(u.pos.x-c.pos.x)<.95&&Math.abs(u.pos.z-c.pos.z)<.95&&c.pos.y-u.pos.y>-.6&&c.pos.y-u.pos.y<1.6){c.collected=!0,Ri.sparks(c.pos.clone().setY(c.pos.y-.6),16769658,24),Mn.play("star"),ne.net.collectStar(c.id),Ny(!0);break}}ne.kind!=="solo"&&uR(n)}for(let a of dl){let l=Yt[a],c=!s||ne.kind==="solo"||a===ne.role||o;if(l.root.visible=c,!!c)if(s&&(ne.kind==="solo"||a===ne.role)){let h=Rt[a];l.animate(t,Math.hypot(h.vel.x,h.vel.z),h.grounded,h.vel.y)}else if(s){let h=ne.track.vel;l.animate(t,Math.hypot(h.x,h.z),ne.track.grounded,h.y)}else l.animate(t,0,!0,0)}if(fR(t),pR(o),Ri.update(t,ne.t),yo.render(t),e<.1&&(Au+=e,am++),Au>2.5){let a=Au/am;wy=1/a,a>1/48&&Cu<Cy.length-1&&ne.t>4&&!Js.has("q")&&(Cu++,Pu()),Au=0,am=0}tR&&(It("#debug").hidden=!1,It("#debug").textContent=`fps ${wy.toFixed(0)}  q${Cu} dpr ${Rs.getPixelRatio()}
delay ${Math.round(ne.track.delay??0)}ms  jitter ${ne.track.jitter()}ms  buf ${ne.track.buf.length}
ping ${ne.net?.status.ping??"-"}  partner ${ne.net?.status.partnerPing??"-"}
pos ${Rt[ne.active].pos.toArray().map(a=>a.toFixed(1)).join(", ")}`)}requestAnimationFrame(Oy);window.__eclipse={G:ne,bodies:Rt,chars:Yt,world:$t,input:Ci,pcols:Wn,ctls:fl,sim(n,e={}){let t=e.role||ne.active,i=1/60,s=[],r=e.t0??pl();for(let o=0;o<n;o++){r+=1e3/60,$t.update(r,ne.t,i);for(let a of dl)Ah(Wn[a],Rt[a].pos,Rt[a].h);Dy(fl[t],e.move||Ly,(e.jumpAt||[]).includes(o),e.hold??!0,i),e.every&&o%e.every===0&&s.push([+Rt[t].pos.x.toFixed(2),+Rt[t].pos.y.toFixed(2),+Rt[t].pos.z.toFixed(2),Rt[t].grounded?1:0,$t.movers.raft.pos(r).x.toFixed(2)])}return{pos:Rt[t].pos.toArray().map(o=>+o.toFixed(3)),grounded:Rt[t].grounded,trace:s}}};
