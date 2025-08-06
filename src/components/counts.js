import CountUp from '../reactBits/TextAnimations/CountUp/CountUp'


export default function Count(){



    return(
        <>
        <div class="outer-count">
            <div class="counts">
            <div class="exp">
                <CountUp
            from={0}
            to={3}
            separator=","
            direction="up"
            duration={2}
            className="count-up-text-exp"
            /><h4>years of <br/>experience</h4>
            </div>
            <div class="pro">
                <CountUp
            from={0}
            to={5}
            separator=","
            direction="up"
            duration={3}
            className="count-up-text-pro"
            /><h4>completed <br/>projects</h4>
            </div>
            
        </div>
        <div class="black-strip-1"></div>
        <div class="black-strip-2"></div>

        </div>
        
            
        </>
    )
}