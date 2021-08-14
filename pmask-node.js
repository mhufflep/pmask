module.exports = class pmask {

    //Separators : Array
    //Mask         : String 
    //X          : Char 
    //Fill       : Boolean

    //Separators are splitted numbers

    //Mask is a pattern, use any symbol that 
    // not included in separators to place a digit.
    
    //X is a symbol that will be placed instead of number if 
    // some of the digits is missing
    // and fill parameter is set to true

    constructor(separators = this.default().separators, 
                mask = this.default().mask, 
                x = this.default().x,
                fill = this.default().fill
    ) {
        this.separators = separators;
        this.mask = mask;
        this.x = x;
        this.fill = fill;
	}
	
	default() {
        return {
            separators: ['(', ')', '-'],
            mask: 'x-(xxx)-xxx-xx-xx',
            x: 'x',
            fill: false
        }
    }

    //Setters
    set separators(seps) {
        if (seps && Object.keys(seps).length !== 0 && 
            seps.constructor !== Object)
            this._separators = seps;
    }

    set mask(mask) {
        if (typeof mask === "string") {
            this._mask = mask;
        }
    }

    set x(x) {
        if (typeof x === "string" && x.length === 1)
        this._x = x;
    }
    
    set fill(fill) {
        if (typeof fill === "boolean")
            this._fill = fill;
    }

    //Getters
    get separators() {
        return this._separators;
    }

    get mask() {
        return this._mask;
    }

    get x() {
        return this._x;
    }

    get fill() {
        return this._fill;
    }


    reset() {
        def = this.default();

        this.separators = def.separators;
        this.mask = def.mask;
        this.x = def.x;
        this.fill = def.fill;
    }

    get(number) {
        let i = 0;
        let res = '';
        for (let s of this.mask) {
            if (this.separators.includes(s)) {
                res += s;
            } 
            else {
                if (i < number.length) {
                    res += number[i];
                    i++;    
				}
				else if (this.fill) {
                    res += this.x;
                } 
				
				if (!this.fill && i === number.length ){
                    return res;
                }
            }
        }
        return res;
    }
}