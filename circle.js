class Circle {
    constructor(vec, size) {
        this.vec = vec;
        this.size = size;
        this.lines = [];
        this.deg = 0;
        
        for(let i = 0; i < 180; i += 22.5) {
            const vec1 = p5.Vector.fromAngle(radians(i));
            const vec2 = p5.Vector.fromAngle(radians(this.mod360(i)));
            this.lines.push([vec1, vec2]);
        }

        for(let i of this.lines) {
            console.log(i[1].y);
        }
    }

    show() {
        let smallCircleR = this.size/4;
        let smallCircleX = this.vec.x + smallCircleR*cos(radians(-this.deg));
        let smallCircleY = this.vec.y + smallCircleR*sin(radians(-this.deg));
        
        fill(200, 0, 0);
        ellipse(this.vec.x, this.vec.y, this.size);
        stroke(0);
        push();
        translate(this.vec.x, this.vec.y);
        for(let vetrices of this.lines) {
            line(vetrices[0].x * 150, vetrices[0].y * 150, vetrices[1].x * 150, vetrices[1].y * 150);
        }
        pop();
        //ellipse(smallCircleX, smallCircleY, this.size/2);
        fill(255);
        for(let i = 0; i < 8; i++) {
            let degCount = i * 45;
            let degToUse = radians(-(this.deg + degCount));
            ellipse(smallCircleX - smallCircleR*cos(degToUse), smallCircleY + smallCircleR*sin(degToUse), 10);
        }
        //ellipse(smallCircleX - smallCircleR*cos(radians( -(this.deg+45) )), smallCircleY + smallCircleR*sin(radians( -(this.deg+45) )), 10);
        this.deg = this.deg < 360 ? this.deg + 1 : 0;
    }

    mod360(int) {
        return (int+180)%360;
    }
}
