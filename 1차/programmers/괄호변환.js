let p=")())((()";

function check_first(s){
    let stack=[];
    for(let i=s.length-1;i>=0;i--){
        if(stack.length!==0){
            if(s[i]==='('){
                stack.pop();
            }else stack.push(s[i]);
        }else if(s[i]==='('){
            return false;
        }else{
            stack.push(s[i]);
        }
  
    }
    if(stack.length===0) return true;
    else return false;
}

function get_firstpair(s){
    if(s.length===0) return "";
    let u='';
    let v='';
    let a=0;
    let b=0;
    for(let i=0;i<s.length;i++){
        if(a!==0 || b!==0){
            if(a===b){
                v=s.substring(i,s.length);
                return [u,v];  
            }else{
                if(s[i]==='(') a++;
                else b++;
                u=u+s[i];
            }
        }else{
            if(s[i]==='(') a++;
            else b++;
            u=u+s[i];
        }
    }
    return [u,""];
}
function get_correct(s,pres){
    let w=get_firstpair(s);
    if(w==="") return "";
    else{
        let u=w[0];
        let v=w[1]; 
        if(check_first(u)){
            if(v==="") return u;
            else {
             let temp=get_correct(v,u);
             return [1,pres+temp[1]];
            }
        }else{
            let new_s=get_correct(v,u);
            u=u.substring(1,u.length-1);
            u=u.split('');
            for(let i=0;i<u.length;i++){
                if(u[i]==='(') u[i]=')';
                else u[i]='(';
            }
            u=u.join('');
            new_s='('+new_s+')'+u;
            return [1,pres+new_s];
            
        }
    }
}


function solution(p) {
    var answer = '';
    if(check_first(p)){
        answer = p;
    }else{
        answer=get_correct(p,"");
        answer=answer[1];
    }
    return answer;
}

console.log(solution(p));