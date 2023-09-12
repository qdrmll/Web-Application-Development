var compose = function(functions) {
    return function(x) {
        
        if (functions.length === 0) {
            return x;
        }
        
        let result = functions[functions.length - 1](x);
        
        for (let i = functions.length - 2; i >= 0; i--) {
            result = functions[i](result);
        }
        
        return result;
    }
};
